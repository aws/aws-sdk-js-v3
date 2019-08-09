import { _AttributeDefinition } from "./_AttributeDefinition";
import { _KeySchemaElement } from "./_KeySchemaElement";
import { _LocalSecondaryIndex } from "./_LocalSecondaryIndex";
import { _GlobalSecondaryIndex } from "./_GlobalSecondaryIndex";
import { _ProvisionedThroughput } from "./_ProvisionedThroughput";
import { _StreamSpecification } from "./_StreamSpecification";
import { _SSESpecification } from "./_SSESpecification";
import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a <code>CreateTable</code> operation.</p>
 */
export interface CreateTableInput {
  /**
   * <p>An array of attributes that describe the key schema for the table and indexes.</p>
   */
  AttributeDefinitions:
    | Array<_AttributeDefinition>
    | Iterable<_AttributeDefinition>;

  /**
   * <p>The name of the table to create.</p>
   */
  TableName: string;

  /**
   * <p>Specifies the attributes that make up the primary key for a table or an index. The attributes in <code>KeySchema</code> must also be defined in the <code>AttributeDefinitions</code> array. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html">Data Model</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>Each <code>KeySchemaElement</code> in the array is composed of:</p> <ul> <li> <p> <code>AttributeName</code> - The name of this key attribute.</p> </li> <li> <p> <code>KeyType</code> - The role that the key attribute will assume:</p> <ul> <li> <p> <code>HASH</code> - partition key</p> </li> <li> <p> <code>RANGE</code> - sort key</p> </li> </ul> </li> </ul> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from the DynamoDB usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note> <p>For a simple primary key (partition key), you must provide exactly one element with a <code>KeyType</code> of <code>HASH</code>.</p> <p>For a composite primary key (partition key and sort key), you must provide exactly two elements, in this order: The first element must have a <code>KeyType</code> of <code>HASH</code>, and the second element must have a <code>KeyType</code> of <code>RANGE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#WorkingWithTables.primary.key">Working with Tables</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  KeySchema: Array<_KeySchemaElement> | Iterable<_KeySchemaElement>;

  /**
   * <p>One or more local secondary indexes (the maximum is 5) to be created on the table. Each index is scoped to a given partition key value. There is a 10 GB size limit per partition key value; otherwise, the size of a local secondary index is unconstrained.</p> <p>Each local secondary index in the array includes the following:</p> <ul> <li> <p> <code>IndexName</code> - The name of the local secondary index. Must be unique only for this table.</p> <p/> </li> <li> <p> <code>KeySchema</code> - Specifies the key schema for the local secondary index. The key schema must begin with the same partition key as the table.</p> </li> <li> <p> <code>Projection</code> - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:</p> <ul> <li> <p> <code>ProjectionType</code> - One of the following:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - Only the index and primary keys are projected into the index.</p> </li> <li> <p> <code>INCLUDE</code> - Only the specified table attributes are projected into the index. The list of projected attributes is in <code>NonKeyAttributes</code>.</p> </li> <li> <p> <code>ALL</code> - All of the table attributes are projected into the index.</p> </li> </ul> </li> <li> <p> <code>NonKeyAttributes</code> - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in <code>NonKeyAttributes</code>, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.</p> </li> </ul> </li> </ul>
   */
  LocalSecondaryIndexes?:
    | Array<_LocalSecondaryIndex>
    | Iterable<_LocalSecondaryIndex>;

  /**
   * <p>One or more global secondary indexes (the maximum is 20) to be created on the table. Each global secondary index in the array includes the following:</p> <ul> <li> <p> <code>IndexName</code> - The name of the global secondary index. Must be unique only for this table.</p> <p/> </li> <li> <p> <code>KeySchema</code> - Specifies the key schema for the global secondary index.</p> </li> <li> <p> <code>Projection</code> - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:</p> <ul> <li> <p> <code>ProjectionType</code> - One of the following:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - Only the index and primary keys are projected into the index.</p> </li> <li> <p> <code>INCLUDE</code> - Only the specified table attributes are projected into the index. The list of projected attributes is in <code>NonKeyAttributes</code>.</p> </li> <li> <p> <code>ALL</code> - All of the table attributes are projected into the index.</p> </li> </ul> </li> <li> <p> <code>NonKeyAttributes</code> - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in <code>NonKeyAttributes</code>, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.</p> </li> </ul> </li> <li> <p> <code>ProvisionedThroughput</code> - The provisioned throughput settings for the global secondary index, consisting of read and write capacity units.</p> </li> </ul>
   */
  GlobalSecondaryIndexes?:
    | Array<_GlobalSecondaryIndex>
    | Iterable<_GlobalSecondaryIndex>;

  /**
   * <p>Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.</p> <ul> <li> <p> <code>PROVISIONED</code> - Sets the billing mode to <code>PROVISIONED</code>. We recommend using <code>PROVISIONED</code> for predictable workloads.</p> </li> <li> <p> <code>PAY_PER_REQUEST</code> - Sets the billing mode to <code>PAY_PER_REQUEST</code>. We recommend using <code>PAY_PER_REQUEST</code> for unpredictable workloads. </p> </li> </ul>
   */
  BillingMode?: "PROVISIONED" | "PAY_PER_REQUEST" | string;

  /**
   * <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p> If you set BillingMode as <code>PROVISIONED</code>, you must specify this property. If you set BillingMode as <code>PAY_PER_REQUEST</code>, you cannot specify this property. </p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProvisionedThroughput?: _ProvisionedThroughput;

  /**
   * <p>The settings for DynamoDB Streams on the table. These settings consist of:</p> <ul> <li> <p> <code>StreamEnabled</code> - Indicates whether DynamoDB Streams is to be enabled (true) or disabled (false).</p> </li> <li> <p> <code>StreamViewType</code> - When an item in the table is modified, <code>StreamViewType</code> determines what information is written to the table's stream. Valid values for <code>StreamViewType</code> are:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - Only the key attributes of the modified item are written to the stream.</p> </li> <li> <p> <code>NEW_IMAGE</code> - The entire item, as it appears after it was modified, is written to the stream.</p> </li> <li> <p> <code>OLD_IMAGE</code> - The entire item, as it appeared before it was modified, is written to the stream.</p> </li> <li> <p> <code>NEW_AND_OLD_IMAGES</code> - Both the new and the old item images of the item are written to the stream.</p> </li> </ul> </li> </ul>
   */
  StreamSpecification?: _StreamSpecification;

  /**
   * <p>Represents the settings used to enable server-side encryption.</p>
   */
  SSESpecification?: _SSESpecification;

  /**
   * <p>A list of key-value pairs to label the table. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a>.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
