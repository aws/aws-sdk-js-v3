import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRecoveryPointRestoreMetadataOutput shape
 */
export interface GetRecoveryPointRestoreMetadataOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An ARN that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>A set of metadata key-value pairs that lists the metadata key-value pairs that are required to restore the recovery point.</p>
   */
  RestoreMetadata?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
