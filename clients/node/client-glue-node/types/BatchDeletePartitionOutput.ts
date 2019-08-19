import { _UnmarshalledPartitionError } from "./_PartitionError";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchDeletePartitionOutput shape
 */
export interface BatchDeletePartitionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Errors encountered when trying to delete the requested partitions.</p>
   */
  Errors?: Array<_UnmarshalledPartitionError>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
