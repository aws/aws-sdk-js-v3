import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRestoreJobOutput shape
 */
export interface DescribeRestoreJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId?: string;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>The date and time that a restore job is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time that a job to restore a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>Status code specifying the state of the job that is initiated by AWS Backup to restore a recovery point.</p>
   */
  Status?: "PENDING" | "RUNNING" | "COMPLETED" | "ABORTED" | "FAILED" | string;

  /**
   * <p>A detailed message explaining the status of a job to restore a recovery point.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Contains an estimated percentage that is complete of a job at the time the job status was queried.</p>
   */
  PercentDone?: string;

  /**
   * <p>The size, in bytes, of the restored resource.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The amount of time in minutes that a job restoring a recovery point is expected to take.</p>
   */
  ExpectedCompletionTimeMinutes?: number;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource whose recovery point is being restored. The format of the ARN depends on the resource type of the backed-up resource.</p>
   */
  CreatedResourceArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
