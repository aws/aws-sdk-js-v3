export { NumberValue as NumberValueImpl } from "./NumberValue";
export type { NumberValue, JsAttributeValue, JsScalarAttributeValue } from "./JsAttributeValue";

export { type EncodeOptions, encode } from "./0.encode";
export { type DecodeOptions, decode } from "./1.decode";

/**
 * Below symbols were deprecated July 15, 2026 due to having
 * incorrect types. See https://github.com/aws/aws-sdk-js-v3/issues/8154.
 */
export type {
  NativeAttributeValue,
  NativeScalarAttributeValue,
  NativeAttributeBinary,
} from "./deprecated/deprecated-util-ddb-models";

export { convertToAttr } from "./deprecated/convertToAttr";
export { convertToNative } from "./deprecated/convertToNative";

export type { marshallOptions } from "./deprecated/marshall";
export { marshall } from "./deprecated/marshall";

export type { unmarshallOptions } from "./deprecated/unmarshall";
export { unmarshall } from "./deprecated/unmarshall";
