import { _UnmarshalledConsumedCapacity } from "./_ConsumedCapacity";
import { _UnmarshalledItemCollectionMetrics } from "./_ItemCollectionMetrics";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TransactWriteItemsOutput shape
 */
export interface TransactWriteItemsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The capacity units consumed by the entire <code>TransactWriteItems</code> operation. The values of the list are ordered according to the ordering of the <code>TransactItems</code> request parameter. </p>
   */
  ConsumedCapacity?: Array<_UnmarshalledConsumedCapacity>;

  /**
   * <p>A list of tables that were processed by <code>TransactWriteItems</code> and, for each table, information about any item collections that were affected by individual <code>UpdateItem</code>, <code>PutItem</code> or <code>DeleteItem</code> operations. </p>
   */
  ItemCollectionMetrics?: {
    [key: string]: Array<_UnmarshalledItemCollectionMetrics>;
  };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
