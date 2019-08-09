import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response object for <code>DeleteBackup</code> operation.</p>
 */
export interface DeleteBackupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the backup deleted.</p>
   */
  BackupId?: string;

  /**
   * <p>The lifecycle of the backup. Should be <code>DELETED</code>.</p>
   */
  Lifecycle?: "AVAILABLE" | "CREATING" | "DELETED" | "FAILED" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
