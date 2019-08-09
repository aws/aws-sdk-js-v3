import { _StructValue, _UnmarshalledStructValue } from "./_StructValue";

/**
 * <p>Contains the value of a column.</p>
 */
export interface _Value {
  /**
   * <p>An array of column values.</p>
   */
  arrayValues?: Array<_Value> | Iterable<_Value>;

  /**
   * <p>A value for a column of big integer data type.</p>
   */
  bigIntValue?: number;

  /**
   * <p>A value for a column of BIT data type.</p>
   */
  bitValue?: boolean;

  /**
   * <p>A value for a column of BLOB data type.</p>
   */
  blobValue?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>A value for a column of double data type.</p>
   */
  doubleValue?: number;

  /**
   * <p>A value for a column of integer data type.</p>
   */
  intValue?: number;

  /**
   * <p>A NULL value.</p>
   */
  isNull?: boolean;

  /**
   * <p>A value for a column of real data type.</p>
   */
  realValue?: number;

  /**
   * <p>A value for a column of string data type.</p>
   */
  stringValue?: string;

  /**
   * <p>A value for a column of STRUCT data type.</p>
   */
  structValue?: _StructValue;
}

export interface _UnmarshalledValue extends _Value {
  /**
   * <p>An array of column values.</p>
   */
  arrayValues?: Array<_UnmarshalledValue>;

  /**
   * <p>A value for a column of BLOB data type.</p>
   */
  blobValue?: Uint8Array;

  /**
   * <p>A value for a column of STRUCT data type.</p>
   */
  structValue?: _UnmarshalledStructValue;
}
