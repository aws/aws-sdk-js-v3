import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartBackupJobOutput shape
 */
export interface StartBackupJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Uniquely identifies a request to AWS Backup to back up a resource.</p>
   */
  BackupJobId?: string;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>The date and time that a backup job is started, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
