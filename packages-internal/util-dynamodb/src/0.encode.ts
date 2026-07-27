import type { AttributeValue } from "@aws-sdk/client-dynamodb";
import type { JsAttributeValue } from "./JsAttributeValue";
import { NumberValue } from "./NumberValue";

/**
 * @public
 */
export interface EncodeOptions {
  /**
   * Whether to automatically convert sets to `null`.
   *
   * Default true.
   *
   * Will behave as true if the deprecated convertEmptyValues=true.
   */
  convertEmptySetsToNull?: boolean;

  /**
   * Whether to automatically convert empty strings, blobs, and sets to `null`.
   *
   * Default false.
   * @deprecated use convertEmptySetsToNull instead. DynamoDB supports having empty string and binary data.
   */
  convertEmptyValues?: boolean;

  /**
   * Whether to remove undefined values from JS arrays/Sets/objects
   * when encoding to DynamoDB lists/sets/maps respectively.
   *
   * Default true.
   */
  removeUndefinedValues?: boolean;

  /**
   * Whether to convert typeof object to map attribute.
   *
   * Default true.
   */
  convertClassInstanceToMap?: boolean;

  /**
   * Whether to allow numbers beyond Number.MAX_SAFE_INTEGER during encoding.
   * When set to true, allows numbers that may lose precision when converted to JavaScript numbers.
   * When false, throws an error if a number exceeds Number.MAX_SAFE_INTEGER to prevent
   * unintended loss of precision. Consider using the NumberValue type from @aws-sdk/lib-dynamodb
   * for precise handling of large numbers.
   *
   * Default false.
   */
  allowImpreciseNumbers?: boolean;
}

/**
 * Converts e.g. `{ a: 5 }` to `{ M: { a: { N: "5" } } }`.
 * Replaces the deprecated marshall and convertToAttr functions.
 *
 * @param val - any value.
 * @param options
 * @returns the same value compatible with the DynamoDB AttributeValue interface.
 *
 * @throws Error - if the input value cannot be converted.
 * @public
 */
export function encode(val: JsAttributeValue, options: EncodeOptions = {}): AttributeValue {
  options.convertEmptySetsToNull ??= true;
  options.removeUndefinedValues ??= true;
  options.convertClassInstanceToMap ??= true;
  options.allowImpreciseNumbers ??= false;

  if (val === undefined) {
    throw new Error(`Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.`);
  } else if (val === null && typeof val === "object") {
    return NULL();
  } else if (Array.isArray(val)) {
    return L(val, options);
  } else if (val?.constructor?.name === "Set" || val instanceof Set) {
    return SET(val as Set<any>, options);
  } else if (val?.constructor?.name === "Map" || val instanceof Map) {
    return M(val as Map<string, JsAttributeValue>, options);
  } else if (
    val?.constructor?.name === "Object" ||
    // for object which is result of Object.create(null), which doesn't have constructor defined
    (!val.constructor && typeof val === "object")
  ) {
    return M(val as Record<string, JsAttributeValue>, options);
  } else if (val?.constructor?.name === "Uint8Array" || val instanceof Uint8Array) {
    return B(val as Uint8Array, options);
  } else if (typeof val === "boolean" || val?.constructor?.name === "Boolean") {
    return { BOOL: !!val };
  } else if (typeof val === "number" || val?.constructor?.name === "Number") {
    return N(val as number, options);
  } else if (val instanceof NumberValue) {
    return val.toAttributeValue();
  } else if (typeof val === "bigint") {
    return N(val as bigint, options);
  } else if (typeof val === "string" || val?.constructor?.name === "String") {
    return S(val as string, options);
  } else if (options.convertClassInstanceToMap && typeof val === "object") {
    return M(val as Record<string, JsAttributeValue>, options);
  }
  throw new Error(
    `Unsupported type passed: ${val}. Pass options.convertClassInstanceToMap=true to encode object as map attribute.`
  );
}

/* ================================================================================================ */

function NULL() {
  return {
    NULL: true,
  } as const;
}

function L(data: (JsAttributeValue | undefined)[], options: EncodeOptions): { L: AttributeValue[] } {
  if (options.removeUndefinedValues) {
    data = data.filter((i) => i !== undefined && typeof i !== "function");
  }
  return {
    L: data.map((item) => encode(item, options)),
  };
}

function S(S: string, options: EncodeOptions): { S: string } | { NULL: true } {
  if (options.convertEmptyValues && S.length === 0) {
    return NULL();
  }
  return {
    S,
  };
}

function SET(
  set: Set<number | bigint | NumberValue | undefined> | Set<string | undefined> | Set<Uint8Array | undefined>,
  options: EncodeOptions
): { NS: string[] } | { BS: Uint8Array[] } | { SS: string[] } | { NULL: true } {
  if (options.removeUndefinedValues) {
    set = new Set([...set].filter((i) => i !== undefined)) as typeof set;
  } else if (set.has(undefined)) {
    throw new Error("Set may not contain undefined, or set options.removeUndefinedValues=true.");
  }

  if (set.size === 0) {
    if (options.convertEmptySetsToNull || options.convertEmptyValues) {
      return NULL();
    }
    throw new Error(`Pass a non-empty set, or options.convertEmptyValues=true.`);
  }

  const container: unknown[] = [];

  function isNumeric(item: unknown): boolean {
    return item instanceof NumberValue || typeof item === "number" || typeof item === "bigint";
  }

  let type: "NS" | "SS" | "BS" | undefined;
  for (const item of set) {
    if (!type) {
      if (isNumeric(item)) {
        type = "NS";
      } else if (typeof item === "string") {
        type = "SS";
      } else if (item instanceof Uint8Array) {
        type = "BS";
      } else {
        throw new Error(`Only Number Set (NS), Binary Set (BS) or String Set (SS) are allowed.`);
      }
    } else {
      if (
        (isNumeric(item) && type !== "NS") ||
        (typeof item === "string" && type !== "SS") ||
        (item instanceof Uint8Array && type !== "BS")
      ) {
        throw new Error(`DynamoDB sets may only contain uniform data types.`);
      }
    }
    container.push(
      type === "NS" ? String(item instanceof NumberValue ? item.value : item) : type === "BS" ? item : item
    );
  }

  return {
    [type!]: container as string[] | Uint8Array[],
  } as any;
}

function M(
  map: Map<string, JsAttributeValue> | Record<string, JsAttributeValue>,
  options: EncodeOptions
): { M: Record<string, AttributeValue> } {
  const container: Record<string, AttributeValue> = Object.create(null);
  const it =
    map?.constructor?.name === "Map" || map instanceof Map
      ? (map as Map<string, JsAttributeValue>)
      : Object.entries(map);
  for (const [key, value] of it) {
    if (typeof value !== "function" && (value !== undefined || !options.removeUndefinedValues)) {
      container[key] = encode(value, options);
    }
  }
  Object.setPrototypeOf(container, Object.prototype);
  return {
    M: container,
  };
}

/**
 * No conversion to base64 in this layer.
 * That happens in the AwsJson1_0Protocol serializer.
 */
function B(bytes: Uint8Array, options: EncodeOptions): { B: Uint8Array } | { NULL: true } {
  if (options.convertEmptyValues && bytes.byteLength === 0) {
    return NULL();
  }
  return {
    B: bytes,
  };
}

function N(n: number | bigint, options: EncodeOptions): { N: string } {
  const N = String(n);
  if (([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] as (number | bigint)[]).includes(n)) {
    throw new Error(`Special numeric value ${N} is not allowed`);
  } else if (!options.allowImpreciseNumbers && typeof n === "number") {
    if (Number(n) > Number.MAX_SAFE_INTEGER) {
      throw new Error(
        `Number ${N} is greater than Number.MAX_SAFE_INTEGER. Use NumberValue from @aws-sdk/lib-dynamodb.`
      );
    } else if (Number(n) < Number.MIN_SAFE_INTEGER) {
      throw new Error(`Number ${N} is less than Number.MIN_SAFE_INTEGER. Use NumberValue from @aws-sdk/lib-dynamodb.`);
    }
  }
  return { N };
}
