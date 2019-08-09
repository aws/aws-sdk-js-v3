import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartOnDemandReplicationRunOutput shape
 */
export interface StartOnDemandReplicationRunOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the replication run.</p>
   */
  replicationRunId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
