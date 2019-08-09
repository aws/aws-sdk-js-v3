/**
 * <p>Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.</p>
 */
export interface _TypedAttributeValue {
  /**
   * <p>A string data value.</p>
   */
  StringValue?: string;

  /**
   * <p>A binary data value.</p>
   */
  BinaryValue?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>A Boolean data value.</p>
   */
  BooleanValue?: boolean;

  /**
   * <p>A number data value.</p>
   */
  NumberValue?: string;

  /**
   * <p>A date and time value.</p>
   */
  DatetimeValue?: Date | string | number;
}

export interface _UnmarshalledTypedAttributeValue extends _TypedAttributeValue {
  /**
   * <p>A binary data value.</p>
   */
  BinaryValue?: Uint8Array;

  /**
   * <p>A date and time value.</p>
   */
  DatetimeValue?: Date;
}
