import { _UnmarshalledPartition } from "./_Partition";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPartitionsOutput shape
 */
export interface GetPartitionsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of requested partitions.</p>
   */
  Partitions?: Array<_UnmarshalledPartition>;

  /**
   * <p>A continuation token, if the returned list of partitions does not does not include the last one.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
