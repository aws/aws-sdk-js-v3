import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartRestoreJobOutput shape
 */
export interface StartRestoreJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
