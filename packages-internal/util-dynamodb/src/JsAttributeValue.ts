/**
 * A interface recognizable as a numeric value that stores the underlying number
 * as a string.
 *
 * Intended to be a deserialization target for the DynamoDB Document Client when
 * the `wrapNumbers` flag is set. This allows for numeric values that lose
 * precision when converted to JavaScript's `number` type.
 */
export interface NumberValue {
  readonly value: string;
}

/**
 * The JS type that will be transformed into the DynamoDB AttributeValue data type.
 * DynamoDB sets must contain only one of the S, N, or B types.
 *
 * @public
 */
export type JsAttributeValue =
  | JsScalarAttributeValue
  | { [key: string]: JsAttributeValue | undefined }
  | Map<string, JsAttributeValue | undefined>
  | (JsAttributeValue | undefined)[]
  | Set<number | bigint | NumberValue | undefined>
  | Set<string | undefined>
  | Set<Uint8Array | undefined>
  | undefined;

/**
 * @public
 */
export type JsScalarAttributeValue = null | undefined | boolean | number | NumberValue | bigint | Uint8Array | string;
