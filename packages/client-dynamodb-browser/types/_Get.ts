import {
  _AttributeValue,
  _UnmarshalledAttributeValue
} from "./_AttributeValue";

/**
 * <p>Specifies an item and related attribute values to retrieve in a <code>TransactGetItem</code> object.</p>
 */
export interface _Get {
  /**
   * <p>A map of attribute names to <code>AttributeValue</code> objects that specifies the primary key of the item to retrieve.</p>
   */
  Key: { [key: string]: _AttributeValue } | Iterable<[string, _AttributeValue]>;

  /**
   * <p>The name of the table from which to retrieve the specified item.</p>
   */
  TableName: string;

  /**
   * <p>A string that identifies one or more attributes of the specified item to retrieve from the table. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes of the specified item are returned. If any of the requested attributes are not found, they do not appear in the result.</p>
   */
  ProjectionExpression?: string;

  /**
   * <p>One or more substitution tokens for attribute names in the ProjectionExpression parameter.</p>
   */
  ExpressionAttributeNames?:
    | { [key: string]: string }
    | Iterable<[string, string]>;
}

export interface _UnmarshalledGet extends _Get {
  /**
   * <p>A map of attribute names to <code>AttributeValue</code> objects that specifies the primary key of the item to retrieve.</p>
   */
  Key: { [key: string]: _UnmarshalledAttributeValue };

  /**
   * <p>One or more substitution tokens for attribute names in the ProjectionExpression parameter.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };
}
