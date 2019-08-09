import {
  _AttributeValue,
  _UnmarshalledAttributeValue
} from "./_AttributeValue";

/**
 * <p>Represents a request to perform a <code>DeleteItem</code> operation.</p>
 */
export interface _Delete {
  /**
   * <p>The primary key of the item to be deleted. Each element consists of an attribute name and a value for that attribute.</p>
   */
  Key: { [key: string]: _AttributeValue } | Iterable<[string, _AttributeValue]>;

  /**
   * <p>Name of the table in which the item to be deleted resides.</p>
   */
  TableName: string;

  /**
   * <p>A condition that must be satisfied in order for a conditional delete to succeed.</p>
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
   * <p>Use <code>ReturnValuesOnConditionCheckFailure</code> to get the item attributes if the <code>Delete</code> condition fails. For <code>ReturnValuesOnConditionCheckFailure</code>, the valid values are: NONE and ALL_OLD.</p>
   */
  ReturnValuesOnConditionCheckFailure?: "ALL_OLD" | "NONE" | string;
}

export interface _UnmarshalledDelete extends _Delete {
  /**
   * <p>The primary key of the item to be deleted. Each element consists of an attribute name and a value for that attribute.</p>
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
