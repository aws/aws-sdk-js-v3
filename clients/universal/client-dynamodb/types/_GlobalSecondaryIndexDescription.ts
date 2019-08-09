import {
  _KeySchemaElement,
  _UnmarshalledKeySchemaElement
} from "./_KeySchemaElement";
import { _Projection, _UnmarshalledProjection } from "./_Projection";
import {
  _ProvisionedThroughputDescription,
  _UnmarshalledProvisionedThroughputDescription
} from "./_ProvisionedThroughputDescription";

/**
 * <p>Represents the properties of a global secondary index.</p>
 */
export interface _GlobalSecondaryIndexDescription {
  /**
   * <p>The name of the global secondary index.</p>
   */
  IndexName?: string;

  /**
   * <p>The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB' usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note>
   */
  KeySchema?: Array<_KeySchemaElement> | Iterable<_KeySchemaElement>;

  /**
   * <p>Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. </p>
   */
  Projection?: _Projection;

  /**
   * <p>The current state of the global secondary index:</p> <ul> <li> <p> <code>CREATING</code> - The index is being created.</p> </li> <li> <p> <code>UPDATING</code> - The index is being updated.</p> </li> <li> <p> <code>DELETING</code> - The index is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The index is ready for use.</p> </li> </ul>
   */
  IndexStatus?: "CREATING" | "UPDATING" | "DELETING" | "ACTIVE" | string;

  /**
   * <p>Indicates whether the index is currently backfilling. <i>Backfilling</i> is the process of reading items from the table and determining whether they can be added to the index. (Not all items will qualify: For example, a partition key cannot have any duplicate values.) If an item can be added to the index, DynamoDB will do so. After all items have been processed, the backfilling operation is complete and <code>Backfilling</code> is false.</p> <note> <p>For indexes that were created during a <code>CreateTable</code> operation, the <code>Backfilling</code> attribute does not appear in the <code>DescribeTable</code> output.</p> </note>
   */
  Backfilling?: boolean;

  /**
   * <p>Represents the provisioned throughput settings for the specified global secondary index.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProvisionedThroughput?: _ProvisionedThroughputDescription;

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

export interface _UnmarshalledGlobalSecondaryIndexDescription
  extends _GlobalSecondaryIndexDescription {
  /**
   * <p>The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB' usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note>
   */
  KeySchema?: Array<_UnmarshalledKeySchemaElement>;

  /**
   * <p>Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. </p>
   */
  Projection?: _UnmarshalledProjection;

  /**
   * <p>Represents the provisioned throughput settings for the specified global secondary index.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProvisionedThroughput?: _UnmarshalledProvisionedThroughputDescription;
}
