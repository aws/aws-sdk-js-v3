import {
  _AttributeValue,
  _UnmarshalledAttributeValue
} from "./_AttributeValue";

/**
 * <p>Represents a request to perform an <code>UpdateItem</code> operation.</p>
 */
export interface _Update {
  /**
   * <p>The primary key of the item to be updated. Each element consists of an attribute name and a value for that attribute.</p>
   */
  Key: { [key: string]: _AttributeValue } | Iterable<[string, _AttributeValue]>;

  /**
   * <p>An expression that defines one or more attributes to be updated, the action to be performed on them, and new value(s) for them.</p>
   */
  UpdateExpression: string;

  /**
   * <p>Name of the table for the <code>UpdateItem</code> request.</p>
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
   * <p>Use <code>ReturnValuesOnConditionCheckFailure</code> to get the item attributes if the <code>Update</code> condition fails. For <code>ReturnValuesOnConditionCheckFailure</code>, the valid values are: NONE, ALL_OLD, UPDATED_OLD, ALL_NEW, UPDATED_NEW.</p>
   */
  ReturnValuesOnConditionCheckFailure?: "ALL_OLD" | "NONE" | string;
}

export interface _UnmarshalledUpdate extends _Update {
  /**
   * <p>The primary key of the item to be updated. Each element consists of an attribute name and a value for that attribute.</p>
   */
  Key: { [key: string]: _UnmarshalledAttributeValue };

  /**
   * <p>One or more substitution tokens for attribute names in an expression.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };

  /**
   * <p>One or more values that can be substituted in an expression.</p>
   */
  ExpressionAttributeValues?: { [key: string]: _UnmarshalledAttributeValue };
}
