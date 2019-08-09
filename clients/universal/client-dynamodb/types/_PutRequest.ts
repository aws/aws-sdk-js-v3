import {
  _AttributeValue,
  _UnmarshalledAttributeValue
} from "./_AttributeValue";

/**
 * <p>Represents a request to perform a <code>PutItem</code> operation on an item.</p>
 */
export interface _PutRequest {
  /**
   * <p>A map of attribute name to attribute values, representing the primary key of an item to be processed by <code>PutItem</code>. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema. If any attributes are present in the item which are part of an index key schema for the table, their types must match the index key schema.</p>
   */
  Item:
    | { [key: string]: _AttributeValue }
    | Iterable<[string, _AttributeValue]>;
}

export interface _UnmarshalledPutRequest extends _PutRequest {
  /**
   * <p>A map of attribute name to attribute values, representing the primary key of an item to be processed by <code>PutItem</code>. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema. If any attributes are present in the item which are part of an index key schema for the table, their types must match the index key schema.</p>
   */
  Item: { [key: string]: _UnmarshalledAttributeValue };
}
