import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBackupVaultNotificationsOutput shape
 */
export interface GetBackupVaultNotificationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>An ARN that uniquely identifies an Amazon Simple Notification Service (Amazon SNS) topic; for example, <code>arn:aws:sns:us-west-2:111122223333:MyTopic</code>.</p>
   */
  SNSTopicArn?: string;

  /**
   * <p>An array of events that indicate the status of jobs to back up resources to the backup vault.</p>
   */
  BackupVaultEvents?: Array<
    | "BACKUP_JOB_STARTED"
    | "BACKUP_JOB_COMPLETED"
    | "RESTORE_JOB_STARTED"
    | "RESTORE_JOB_COMPLETED"
    | "RECOVERY_POINT_MODIFIED"
    | "BACKUP_PLAN_CREATED"
    | "BACKUP_PLAN_MODIFIED"
    | string
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
