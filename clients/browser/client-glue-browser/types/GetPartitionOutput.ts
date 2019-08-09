import { _UnmarshalledPartition } from "./_Partition";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPartitionOutput shape
 */
export interface GetPartitionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested information, in the form of a <code>Partition</code> object.</p>
   */
  Partition?: _UnmarshalledPartition;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
