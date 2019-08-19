import {
  _AttributeValue,
  _UnmarshalledAttributeValue
} from "./_AttributeValue";

/**
 * <p>Represents a request to perform a check that an item exists or to check the condition of specific attributes of the item..</p>
 */
export interface _ConditionCheck {
  /**
   * <p>The primary key of the item to be checked. Each element consists of an attribute name and a value for that attribute.</p>
   */
  Key: { [key: string]: _AttributeValue } | Iterable<[string, _AttributeValue]>;

  /**
   * <p>Name of the table for the check item request.</p>
   */
  TableName: string;

  /**
   * <p>A condition that must be satisfied in order for a conditional update to succeed.</p>
   */
  ConditionExpression: string;

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
   * <p>Use <code>ReturnValuesOnConditionCheckFailure</code> to get the item attributes if the <code>ConditionCheck</code> condition fails. For <code>ReturnValuesOnConditionCheckFailure</code>, the valid values are: NONE and ALL_OLD.</p>
   */
  ReturnValuesOnConditionCheckFailure?: "ALL_OLD" | "NONE" | string;
}

export interface _UnmarshalledConditionCheck extends _ConditionCheck {
  /**
   * <p>The primary key of the item to be checked. Each element consists of an attribute name and a value for that attribute.</p>
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
