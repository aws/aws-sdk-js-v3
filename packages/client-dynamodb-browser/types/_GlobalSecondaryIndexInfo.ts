import {
  _KeySchemaElement,
  _UnmarshalledKeySchemaElement
} from "./_KeySchemaElement";
import { _Projection, _UnmarshalledProjection } from "./_Projection";
import {
  _ProvisionedThroughput,
  _UnmarshalledProvisionedThroughput
} from "./_ProvisionedThroughput";

/**
 * <p>Represents the properties of a global secondary index for the table when the backup was created.</p>
 */
export interface _GlobalSecondaryIndexInfo {
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
   * <p>Represents the provisioned throughput settings for the specified global secondary index. </p>
   */
  ProvisionedThroughput?: _ProvisionedThroughput;
}

export interface _UnmarshalledGlobalSecondaryIndexInfo
  extends _GlobalSecondaryIndexInfo {
  /**
   * <p>The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB' usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note>
   */
  KeySchema?: Array<_UnmarshalledKeySchemaElement>;

  /**
   * <p>Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. </p>
   */
  Projection?: _UnmarshalledProjection;

  /**
   * <p>Represents the provisioned throughput settings for the specified global secondary index. </p>
   */
  ProvisionedThroughput?: _UnmarshalledProvisionedThroughput;
}
