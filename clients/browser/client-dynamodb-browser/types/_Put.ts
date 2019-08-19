import {
  _AttributeValue,
  _UnmarshalledAttributeValue
} from "./_AttributeValue";

/**
 * <p>Represents a request to perform a <code>PutItem</code> operation.</p>
 */
export interface _Put {
  /**
   * <p>A map of attribute name to attribute values, representing the primary key of the item to be written by <code>PutItem</code>. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema. If any attributes are present in the item that are part of an index key schema for the table, their types must match the index key schema. </p>
   */
  Item:
    | { [key: string]: _AttributeValue }
    | Iterable<[string, _AttributeValue]>;

  /**
   * <p>Name of the table in which to write the item.</p>
   */
  TableName: string;

  /**
   * <p>A condition that must be satisfied in order for a conditional update to succeed.</p>
   */
  ConditionExpression?: string;

  /**
   * <p>One or more substitution tokens for attribute names in an expression.</p>
   */
  ExpressionAttributeNames?:
    | { [key: string]: string }
    | Iterable<[string, string]>;

  /**
   * <p>One or more values that can be substituted in an expression.</p>
   */
  ExpressionAttributeValues?:
    | { [key: string]: _AttributeValue }
    | Iterable<[string, _AttributeValue]>;

  /**
   * <p>Use <code>ReturnValuesOnConditionCheckFailure</code> to get the item attributes if the <code>Put</code> condition fails. For <code>ReturnValuesOnConditionCheckFailure</code>, the valid values are: NONE and ALL_OLD.</p>
   */
  ReturnValuesOnConditionCheckFailure?: "ALL_OLD" | "NONE" | string;
}

export interface _UnmarshalledPut extends _Put {
  /**
   * <p>A map of attribute name to attribute values, representing the primary key of the item to be written by <code>PutItem</code>. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema. If any attributes are present in the item that are part of an index key schema for the table, their types must match the index key schema. </p>
   */
  Item: { [key: string]: _UnmarshalledAttributeValue };

  /**
   * <p>One or more substitution tokens for attribute names in an expression.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };

  /**
   * <p>One or more values that can be substituted in an expression.</p>
   */
  ExpressionAttributeValues?: { [key: string]: _UnmarshalledAttributeValue };
}
