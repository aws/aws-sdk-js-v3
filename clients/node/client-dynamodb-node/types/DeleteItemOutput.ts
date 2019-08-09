import { _UnmarshalledAttributeValue } from "./_AttributeValue";
import { _UnmarshalledConsumedCapacity } from "./_ConsumedCapacity";
import { _UnmarshalledItemCollectionMetrics } from "./_ItemCollectionMetrics";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>DeleteItem</code> operation.</p>
 */
export interface DeleteItemOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A map of attribute names to <code>AttributeValue</code> objects, representing the item as it appeared before the <code>DeleteItem</code> operation. This map appears in the response only if <code>ReturnValues</code> was specified as <code>ALL_OLD</code> in the request.</p>
   */
  Attributes?: { [key: string]: _UnmarshalledAttributeValue };

  /**
   * <p>The capacity units consumed by the <code>DeleteItem</code> operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Mode</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ConsumedCapacity?: _UnmarshalledConsumedCapacity;

  /**
   * <p>Information about item collections, if any, that were affected by the <code>DeleteItem</code> operation. <code>ItemCollectionMetrics</code> is only returned if the <code>ReturnItemCollectionMetrics</code> parameter was specified. If the table does not have any local secondary indexes, this information is not returned in the response.</p> <p>Each <code>ItemCollectionMetrics</code> element consists of:</p> <ul> <li> <p> <code>ItemCollectionKey</code> - The partition key value of the item collection. This is the same as the partition key value of the item itself.</p> </li> <li> <p> <code>SizeEstimateRangeGB</code> - An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit.</p> <p>The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.</p> </li> </ul>
   */
  ItemCollectionMetrics?: _UnmarshalledItemCollectionMetrics;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
