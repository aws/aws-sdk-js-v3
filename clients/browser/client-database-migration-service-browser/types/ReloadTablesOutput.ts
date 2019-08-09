import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ReloadTablesOutput shape
 */
export interface ReloadTablesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
