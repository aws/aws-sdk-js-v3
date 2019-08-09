import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateReplicationJobOutput shape
 */
export interface CreateReplicationJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique identifier of the replication job.</p>
   */
  replicationJobId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
