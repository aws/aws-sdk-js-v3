/**
 * <p>The user-specified message attribute value. For string data types, the value attribute has the same restrictions on the content as the message body. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a>.</p> <p>Name, type, and value must not be empty or null. In addition, the message body should not be empty or null. All parts of the message attribute, including name, type, and value, are included in the message size restriction, which is currently 256 KB (262,144 bytes). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html">Using Amazon SNS Message Attributes</a>.</p>
 */
export interface _MessageAttributeValue {
  /**
   * <p>Amazon SNS supports the following logical data types: String, String.Array, Number, and Binary. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html#SNSMessageAttributes.DataTypes">Message Attribute Data Types</a>.</p>
   */
  DataType: string;

  /**
   * <p>Strings are Unicode with UTF8 binary encoding. For a list of code values, see <a href="https://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters">ASCII Printable Characters</a>.</p>
   */
  StringValue?: string;

  /**
   * <p>Binary type attributes can store any binary data, for example, compressed data, encrypted data, or images.</p>
   */
  BinaryValue?: ArrayBuffer | ArrayBufferView | string;
}

export interface _UnmarshalledMessageAttributeValue
  extends _MessageAttributeValue {
  /**
   * <p>Binary type attributes can store any binary data, for example, compressed data, encrypted data, or images.</p>
   */
  BinaryValue?: Uint8Array;
}
