/**
 * <p>Contains a value.</p>
 */
export interface _Field {
  /**
   * <p>A value of BLOB data type.</p>
   */
  blobValue?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>A value of Boolean data type.</p>
   */
  booleanValue?: boolean;

  /**
   * <p>A value of double data type.</p>
   */
  doubleValue?: number;

  /**
   * <p>A NULL value.</p>
   */
  isNull?: boolean;

  /**
   * <p>A value of long data type.</p>
   */
  longValue?: number;

  /**
   * <p>A value of string data type.</p>
   */
  stringValue?: string;
}

export interface _UnmarshalledField extends _Field {
  /**
   * <p>A value of BLOB data type.</p>
   */
  blobValue?: Uint8Array;
}
