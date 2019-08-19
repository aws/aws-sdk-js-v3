/**
 * <p>Represents the data for an attribute. You can set one, and only one, of the elements.</p> <p>Each attribute in an item is a name-value pair. An attribute can be single-valued or multi-valued set. For example, a book item can have title and authors attributes. Each book has one title but can have many authors. The multi-valued attribute is a set; duplicate values are not allowed.</p>
 */
export interface _AttributeValue {
  /**
   * <p>A String data type.</p>
   */
  S?: string;

  /**
   * <p>A Number data type.</p>
   */
  N?: string;

  /**
   * <p>A Binary data type.</p>
   */
  B?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>A String Set data type.</p>
   */
  SS?: Array<string> | Iterable<string>;

  /**
   * <p>A Number Set data type.</p>
   */
  NS?: Array<string> | Iterable<string>;

  /**
   * <p>A Binary Set data type.</p>
   */
  BS?:
    | Array<ArrayBuffer | ArrayBufferView | string>
    | Iterable<ArrayBuffer | ArrayBufferView | string>;

  /**
   * <p>A Map data type.</p>
   */
  M?: { [key: string]: _AttributeValue } | Iterable<[string, _AttributeValue]>;

  /**
   * <p>A List data type.</p>
   */
  L?: Array<_AttributeValue> | Iterable<_AttributeValue>;

  /**
   * <p>A Null data type.</p>
   */
  NULL?: boolean;

  /**
   * <p>A Boolean data type.</p>
   */
  BOOL?: boolean;
}

export interface _UnmarshalledAttributeValue extends _AttributeValue {
  /**
   * <p>A Binary data type.</p>
   */
  B?: Uint8Array;

  /**
   * <p>A String Set data type.</p>
   */
  SS?: Array<string>;

  /**
   * <p>A Number Set data type.</p>
   */
  NS?: Array<string>;

  /**
   * <p>A Binary Set data type.</p>
   */
  BS?: Array<Uint8Array>;

  /**
   * <p>A Map data type.</p>
   */
  M?: { [key: string]: _UnmarshalledAttributeValue };

  /**
   * <p>A List data type.</p>
   */
  L?: Array<_UnmarshalledAttributeValue>;
}
