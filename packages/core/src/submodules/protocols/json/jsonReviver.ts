/**
 * @param key - JSON object key.
 * @param value - parsed value.
 * @param context - original JSON string for reference. Not available until Node.js 21 and unavailable in Safari as
 * of April 2025.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#browser_compatibility
 *
 * @returns transformed value.
 */
export function jsonReviver(key: string, value: any, context?: { source?: string }) {
  // todo(schema): handle big numbers.
  return value;
}
