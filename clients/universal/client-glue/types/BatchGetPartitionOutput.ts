import { _UnmarshalledPartition } from "./_Partition";
import { _UnmarshalledPartitionValueList } from "./_PartitionValueList";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetPartitionOutput shape
 */
export interface BatchGetPartitionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the requested partitions.</p>
   */
  Partitions?: Array<_UnmarshalledPartition>;

  /**
   * <p>A list of the partition values in the request for which partions were not returned.</p>
   */
  UnprocessedKeys?: Array<_UnmarshalledPartitionValueList>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
