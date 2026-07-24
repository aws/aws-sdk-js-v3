import { NumericValue } from "@smithy/core/serde";

/**
 * Matches a JSON number in exponent notation, capturing the sign, integral
 * digits, fractional digits, and exponent.
 */
const EXPONENT_NOTATION = /^(-?)(\d+)(?:\.(\d*))?[eE]([+-]?\d+)$/;

/**
 * Upper bound on the digit count of an expanded number, so that an extreme
 * exponent cannot cause an enormous string allocation.
 */
const MAX_EXPANDED_DIGITS = 1024;

/**
 * Rewrites a JSON number in exponent notation to plain decimal notation, for
 * example 1.5e3 to 1500.
 *
 * @param source - the original numeric string.
 *
 * @internal
 *
 * @returns the plain decimal form, or undefined when source is not exponent
 * notation or when expanding it would exceed MAX_EXPANDED_DIGITS.
 */
function expandExponentNotation(source: string): string | undefined {
  const match = EXPONENT_NOTATION.exec(source);
  if (!match) {
    return undefined;
  }
  const [, sign, integerDigits, fractionDigits = "", exponentDigits] = match;
  const exponent = Number(exponentDigits);
  const digits = integerDigits + fractionDigits;
  if (digits.length + Math.abs(exponent) > MAX_EXPANDED_DIGITS) {
    return undefined;
  }
  // Where the decimal point lands within `digits` once the exponent is applied.
  const pointIndex = integerDigits.length + exponent;
  let expanded: string;
  if (pointIndex <= 0) {
    expanded = "0." + "0".repeat(-pointIndex) + digits;
  } else if (pointIndex >= digits.length) {
    expanded = digits + "0".repeat(pointIndex - digits.length);
  } else {
    expanded = digits.slice(0, pointIndex) + "." + digits.slice(pointIndex);
  }
  if (expanded.includes(".")) {
    expanded = expanded.replace(/0+$/, "").replace(/\.$/, "");
  }
  return sign + expanded.replace(/^0+(?=\d)/, "");
}

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
    let numericString = context.source;
    if (typeof value === "number") {
      if (EXPONENT_NOTATION.test(numericString)) {
        const expanded = expandExponentNotation(numericString);
        if (expanded === undefined) {
          // The exponent is too extreme to expand, so the parsed double is the
          // best available representation.
          return value;
        }
        numericString = expanded;
      }
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
