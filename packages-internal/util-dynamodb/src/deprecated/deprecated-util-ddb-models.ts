import type { NumberValue } from "../JsAttributeValue";

/**
 * @public
 * @deprecated Set and InstanceType declarations are incorrect, use instead JsAttributeValue.
 */
export type NativeAttributeValue =
  | NativeScalarAttributeValue
  | { [key: string]: NativeAttributeValue }
  | NativeAttributeValue[]
  | Set<number | bigint | NumberValue | string | NativeAttributeBinary | undefined>
  | InstanceType<{ new (...args: any[]): any }>; // accepts any class instance with options.convertClassInstanceToMap

/**
 * @public
 * @deprecated use instead JsScalarAttributeValue.
 */
export type NativeScalarAttributeValue =
  | null
  | undefined
  | boolean
  | number
  | NumberValue
  | bigint
  | NativeAttributeBinary
  | string;

/**
 * Declare File in case DOM is not added to the tsconfig lib causing
 * File interface is not defined. For developers with DOM lib added,
 * the File interface will be merged correctly.
 */
declare global {
  interface File {}
}

type IfDefined<T> = {} extends T ? never : T;

/**
 * @public
 * @deprecated this type is incorrect, only Uint8Array is an acceptable JS representation of binary data
 * that will be transmitted to DynamoDB AttributeValue.B.
 */
export type NativeAttributeBinary =
  | ArrayBuffer
  | IfDefined<Blob>
  | IfDefined<Buffer>
  | DataView
  | IfDefined<File>
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array;
