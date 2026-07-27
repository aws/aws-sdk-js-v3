import type { AttributeValue } from "@aws-sdk/client-dynamodb";
import type { JsAttributeValue } from "./JsAttributeValue";
import { NumberValue } from "./NumberValue";

/**
 * @public
 */
export interface DecodeOptions {
  /**
   * Whether to modify how numbers are unmarshalled from DynamoDB.
   * When set to true, returns numbers as NumberValue instances instead of native JavaScript numbers.
   * This allows for the safe round-trip transport of numbers of arbitrary size.
   *
   * If a function is provided, it will be called with the string representation of numbers to handle
   * custom conversions (e.g., using BigInt or decimal libraries).
   *
   * Default false.
   */
  wrapNumbers?: boolean | ((value: string) => number | bigint | NumberValue | any);

  /**
   * Decode DynamoDB AttributeValue.M to JavaScript Map containers instead of object containers.
   * Note: this does not know whether you wrote the item using Maps or objects. All
   * DynamoDB AttributeValue.M will be converted to Maps.
   *
   * Default false.
   * @alpha
   */
  useMaps?: boolean;
}

/**
 * Converts e.g. `{ M: { a: { N: "5" } } }` to `{ a: 5 }`.
 * Replaces the deprecated unmarshall and convertToNative functions.
 *
 * @param attributeValue - a JS object matching the DynamoDB AttributeValue structure.
 * @param options
 * @returns an object copy with the DynamoDB type marker wrappers removed.
 * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_AttributeValue.html
 * @throws Error - if the input is invalid for decoding.
 * @public
 */
export function decode(attributeValue: AttributeValue, options: DecodeOptions = {}): JsAttributeValue {
  options.wrapNumbers ??= false;

  for (const [key, value] of Object.entries(attributeValue)) {
    if (value !== undefined) {
      switch (key) {
        case "NULL":
          return null;
        case "BOOL":
          return !!value;
        case "N":
          return N(value as string, options);
        case "B":
          // Base64 decoding has already happened in the DynamoDB AWS protocol layer.
          // At any rate, the encoder does not include base64 so this should match.
          return value as Uint8Array;
        case "S":
          return value as string;
        case "L":
          return L(value as AttributeValue[], options);
        case "M":
          return M(value as Record<string, AttributeValue>, options);
        case "NS":
          return new Set((value as string[]).map((item) => N(item, options)));
        case "BS":
          return new Set(value as Uint8Array[]);
        case "SS":
          return new Set(value as string[]);
        default:
          throw new Error(`Unsupported type passed: ${key}`);
      }
    }
  }
  throw new Error(`No value defined: ${JSON.stringify(attributeValue)}`);
}

/* ================================================================================================ */

function N(n: string, options: DecodeOptions): number | bigint | NumberValue {
  if (typeof options.wrapNumbers === "function") {
    return options.wrapNumbers(n);
  }
  if (options.wrapNumbers) {
    return NumberValue.from(n);
  }
  const num = Number(n);
  const isLargeFiniteNumber = (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) && Number.isFinite(num);

  if (isLargeFiniteNumber) {
    try {
      return BigInt(n);
    } catch (error) {
      throw new Error(`${n} can't be converted to BigInt. Set options.wrapNumbers to get string value.`);
    }
  }
  return num;
}

function L(list: AttributeValue[], options: DecodeOptions): JsAttributeValue[] {
  return list.map((item) => decode(item, options));
}

function M(
  map: Record<string, AttributeValue>,
  options: DecodeOptions
): Record<string, JsAttributeValue> | Map<string, JsAttributeValue> {
  if (options.useMaps) {
    const out: Map<string, JsAttributeValue> = new Map();
    for (const [key, value] of Object.entries(map)) {
      out.set(key, decode(value, options));
    }
    return out;
  }
  const record: Record<string, JsAttributeValue> = Object.create(null);
  for (const [key, value] of Object.entries(map)) {
    record[key] = decode(value, options);
  }
  Object.setPrototypeOf(record, Object.prototype);
  return record;
}
