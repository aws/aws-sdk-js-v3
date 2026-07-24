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
      const inSafeRange = value <= Number.MAX_SAFE_INTEGER && value >= Number.MIN_SAFE_INTEGER;
      if (!inSafeRange || numericString !== String(value)) {
        // Exponent notation (e.g. "1.784316439424E9") is valid JSON per RFC 8259.
        // It always fails numericString !== String(value) because the string forms
        // differ (e.g. "1.784316439424E9" vs "1784316439.424"), but the value may
        // round-trip exactly as a JS number with no precision loss.
        //
        // Only apply this bypass when the value is within safe integer bounds —
        // values outside that range (e.g. 1.23E100) genuinely cannot be represented
        // precisely as a JS number regardless of notation.
        if (inSafeRange && /[eE]/.test(numericString) && String(Number(numericString)) === String(value)) {
          return value;
        }
        if (isFractionalNumeric(numericString)) {
          return new NumericValue(numericString, "bigDecimal");
        } else {
          // BigInt() does not accept exponent notation, so normalize first.
          if (/[eE]/.test(numericString)) {
            return BigInt(Number(numericString));
          }
          return BigInt(numericString);
        }
      }
    }
  }
  return value;
}

/**
 * Determines whether a numeric string represents a fractional value.
 * Accounts for exponent notation: "1.23E100" is integer (exponent >= fractional digits),
 * but "1.23E1" is fractional (exponent < fractional digits).
 */
function isFractionalNumeric(s: string): boolean {
  const dotIndex = s.indexOf(".");
  if (dotIndex === -1) {
    return false;
  }
  const eIndex = s.search(/[eE]/);
  if (eIndex === -1) {
    // No exponent, has dot → fractional.
    return true;
  }
  // Number of digits after the decimal point and before the exponent.
  const fracDigits = eIndex - dotIndex - 1;
  // Parse the exponent value (e.g. "E100" → 100, "e-3" → -3).
  const exp = parseInt(s.slice(eIndex + 1), 10);
  // If the exponent shifts the decimal point far enough right to eliminate
  // all fractional digits, the value is a whole integer.
  return exp < fracDigits;
}
