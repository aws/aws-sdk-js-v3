import {
  _AttributeValue,
  _UnmarshalledAttributeValue
} from "./_AttributeValue";

/**
 * <p>Represents a request to perform a <code>DeleteItem</code> operation on an item.</p>
 */
export interface _DeleteRequest {
  /**
   * <p>A map of attribute name to attribute values, representing the primary key of the item to delete. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema.</p>
   */
  Key: { [key: string]: _AttributeValue } | Iterable<[string, _AttributeValue]>;
}

export interface _UnmarshalledDeleteRequest extends _DeleteRequest {
  /**
   * <p>A map of attribute name to attribute values, representing the primary key of the item to delete. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema.</p>
   */
  Key: { [key: string]: _UnmarshalledAttributeValue };
}
