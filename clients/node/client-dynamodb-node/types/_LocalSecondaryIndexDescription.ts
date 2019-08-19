import {
  _KeySchemaElement,
  _UnmarshalledKeySchemaElement
} from "./_KeySchemaElement";
import { _Projection, _UnmarshalledProjection } from "./_Projection";

/**
 * <p>Represents the properties of a local secondary index.</p>
 */
export interface _LocalSecondaryIndexDescription {
  /**
   * <p>Represents the name of the local secondary index.</p>
   */
  IndexName?: string;

  /**
   * <p>The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB' usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note>
   */
  KeySchema?: Array<_KeySchemaElement> | Iterable<_KeySchemaElement>;

  /**
   * <p>Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. </p>
   */
  Projection?: _Projection;

  /**
   * <p>The total size of the specified index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p>
   */
  IndexSizeBytes?: number;

  /**
   * <p>The number of items in the specified index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p>
   */
  ItemCount?: number;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the index.</p>
   */
  IndexArn?: string;
}

export interface _UnmarshalledLocalSecondaryIndexDescription
  extends _LocalSecondaryIndexDescription {
  /**
   * <p>The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB' usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note>
   */
  KeySchema?: Array<_UnmarshalledKeySchemaElement>;

  /**
   * <p>Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. </p>
   */
  Projection?: _UnmarshalledProjection;
}
