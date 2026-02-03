import { NumericValue } from "@smithy/core/serde";

/**
 * @param key - JSON object key.
 * @param value - parsed value.
 * @param context - original JSON string for reference. Not available until Node.js 21 and unavailable in Safari as
 * of April 2025.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#browser_compatibility
 *
 * @internal
 *
 * @returns transformed value.
 */
export function jsonReviver(key: string, value: any, context?: { source?: string }) {
  if (context?.source) {
    const numericString = context.source;
    if (typeof value === "number") {
      if (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER || numericString !== String(value)) {
        const isFractional = numericString.includes(".");
        if (isFractional) {
          return new NumericValue(numericString, "bigDecimal");
        } else {
          return BigInt(numericString);
        }
      }
    }
  }
  return value;
}
