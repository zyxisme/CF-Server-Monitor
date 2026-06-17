/**
 * Convert ISO 3166-1 alpha-2 country code to Twemoji flag SVG URL.
 * Uses regional indicator symbols (U+1F1E6..U+1F1FF) mapped from A-Z.
 * @param {string} code - 2-letter country code (e.g. 'us', 'cn')
 * @returns {string} Twemoji CDN URL for the flag SVG
 */
export function getTwemojiFlagUrl(code) {
  if (!code || code === 'xx') return ''
  const base = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/'
  const points = Array.from(code.toUpperCase())
    .map(c => (c.charCodeAt(0) + 0x1f1a5).toString(16))
    .join('-')
  return base + points + '.svg'
}
