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

      if (inSafeRange) {
        // Within safe integer bounds. Check if the value is precisely representable.
        if (isRepresentable(numericString, value)) {
          return value;
        }

        // In range but not precisely representable (e.g. excess decimal digits).
        return new NumericValue(numericString, "bigDecimal");
      } else {
        // Outside safe integer bounds, so JS number is considered as unable to represent this precisely
        // even if it is one of the large doubles that can be represented exactly.
        if (isFractionalBigNumeric(numericString)) {
          return new NumericValue(numericString, "bigDecimal");
        }
        // Integer outside safe range → BigInt.
        // BigInt() does not accept exponent notation, so expand manually
        // to avoid precision loss from intermediate Number conversion.
        if (/[eE]/.test(numericString)) {
          return expandExponentToBigInt(numericString);
        }
        return BigInt(numericString);
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
function isFractionalBigNumeric(s: string): boolean {
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

/**
 * Determines whether a numeric source string is precisely representable by the
 * given JS number value. Returns true when the difference between the source
 * string and String(value) is purely cosmetic (trailing fractional zeros,
 * exponent notation differences) rather than indicating precision loss.
 */
function isRepresentable(numericString: string, value: number): boolean {
  // Fast path: source already matches canonical form (most common case).
  if (numericString === String(value)) {
    return true;
  }
  // -0 is representable but String(-0) === "0", so handle it explicitly.
  if (Object.is(value, -0)) {
    return true;
  }
  if (/[eE]/.test(numericString)) {
    // Expand source exponent notation to plain decimal and compare against
    // the canonical form. This catches all precision-loss cases including:
    // - mantissa digit rounding ("1.0000000000000003e0" → "1.0000000000000002")
    // - subnormal truncation ("5.01E-324" → "5e-324")
    // - underflow to zero ("5E-325" → "0")
    // - excess precision with exponent ("1.000000000000000000000001e3" → "1000")
    return expandToDecimal(numericString) === expandToDecimal(String(value));
  }
  // For non-exponent numeric strings, strip trailing zeros from the fractional
  // part. If the result matches String(value), it's just cosmetic trailing zeros.
  const normalized = numericString.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
  const canonical = String(value);
  if (normalized === canonical) {
    return true;
  }
  // The source may be in decimal notation while JS uses exponent notation for
  // the same value (e.g. "-0.00000000000000000000001" → "-1e-23").
  // Expand the canonical form and compare.
  if (/[eE]/.test(canonical)) {
    return normalized === expandToDecimal(canonical);
  }
  return false;
}

/**
 * Expands a numeric string (potentially in exponent notation) to a normalized
 * plain decimal form with trailing fractional zeros stripped.
 * E.g. "1.784316439424E9" → "1784316439.424", "5.0E-324" → "0.000...0005",
 * "-1.5e+3" → "-1500", "2.0" → "2".
 */
function expandToDecimal(s: string): string {
  const negative = s.startsWith("-");
  const abs = negative ? s.slice(1) : s;
  const eIndex = abs.search(/[eE]/);

  let result: string;
  if (eIndex === -1) {
    // No exponent, just normalize trailing fractional zeros.
    result = abs;
  } else {
    const exp = parseInt(abs.slice(eIndex + 1), 10);
    const mantissa = abs.slice(0, eIndex);
    const dotIndex = mantissa.indexOf(".");
    let digits: string;
    let intLen: number;
    if (dotIndex === -1) {
      digits = mantissa;
      intLen = mantissa.length;
    } else {
      digits = mantissa.slice(0, dotIndex) + mantissa.slice(dotIndex + 1);
      intLen = dotIndex;
    }
    // Strip trailing zeros from mantissa digits (cosmetic).
    digits = digits.replace(/0+$/, "") || "0";
    const newDotPos = intLen + exp;
    if (digits === "0") {
      result = "0";
    } else if (newDotPos <= 0) {
      result = "0." + "0".repeat(-newDotPos) + digits;
    } else if (newDotPos >= digits.length) {
      result = digits + "0".repeat(newDotPos - digits.length);
    } else {
      result = digits.slice(0, newDotPos) + "." + digits.slice(newDotPos);
    }
  }

  // Strip trailing fractional zeros.
  if (result.includes(".")) {
    result = result.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
  }
  return (negative ? "-" : "") + result;
}

/**
 * Expands a numeric string in exponent notation to a BigInt by
 * manually shifting the significant digits. Handles cases where
 * Number() would overflow to Infinity (e.g. "1.230E1000").
 */
function expandExponentToBigInt(s: string): bigint {
  const eIndex = s.search(/[eE]/);
  const exp = parseInt(s.slice(eIndex + 1), 10);
  const negative = s.startsWith("-");
  const mantissa = s.slice(negative ? 1 : 0, eIndex);
  const dotIndex = mantissa.indexOf(".");

  let digits: string;
  let shift: number;
  if (dotIndex === -1) {
    digits = mantissa;
    shift = exp;
  } else {
    // Remove the dot and adjust exponent by the number of fractional digits.
    digits = mantissa.slice(0, dotIndex) + mantissa.slice(dotIndex + 1);
    const fracDigits = mantissa.length - dotIndex - 1;
    shift = exp - fracDigits;
  }

  // Strip trailing zeros from digits (they're already accounted for in shift).
  digits = digits.replace(/0+$/, "") || "0";

  const result = BigInt(digits) * 10n ** BigInt(shift + (mantissa.replace(".", "").length - digits.length));
  return negative ? -result : result;
}
