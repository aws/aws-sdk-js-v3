import {
  _RecoveryPointCreator,
  _UnmarshalledRecoveryPointCreator
} from "./_RecoveryPointCreator";

/**
 * <p>Contains detailed information about a backup job.</p>
 */
export interface _BackupJob {
  /**
   * <p>Uniquely identifies a request to AWS Backup to back up a resource.</p>
   */
  BackupJobId?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The date and time a backup job is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>The date and time a job to create a backup job is completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CompletionDate?: Date | string | number;

  /**
   * <p>The current state of a resource recovery point.</p>
   */
  State?:
    | "CREATED"
    | "PENDING"
    | "RUNNING"
    | "ABORTING"
    | "ABORTED"
    | "COMPLETED"
    | "FAILED"
    | "EXPIRED"
    | string;

  /**
   * <p>A detailed message explaining the status of the job to back up a resource.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Contains an estimated percentage complete of a job at the time the job status was queried.</p>
   */
  PercentDone?: string;

  /**
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>Contains identifying information about the creation of a backup job, including the <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>, and <code>BackupRuleId</code> of the backup plan used to create it.</p>
   */
  CreatedBy?: _RecoveryPointCreator;

  /**
   * <p>The date and time a job to back up resources is expected to be completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>ExpectedCompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  ExpectedCompletionDate?: Date | string | number;

  /**
   * <p>Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job must be started before it is canceled. The value is calculated by adding the start window to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2 hours, the <code>StartBy</code> time would be 8:00 PM on the date specified. The value of <code>StartBy</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  StartBy?: Date | string | number;

  /**
   * <p>The type of AWS resource to be backed-up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   */
  ResourceType?: string;

  /**
   * <p>The size in bytes transferred to a backup vault at the time that the job status was queried.</p>
   */
  BytesTransferred?: number;
}

export interface _UnmarshalledBackupJob extends _BackupJob {
  /**
   * <p>The date and time a backup job is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time a job to create a backup job is completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>Contains identifying information about the creation of a backup job, including the <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>, and <code>BackupRuleId</code> of the backup plan used to create it.</p>
   */
  CreatedBy?: _UnmarshalledRecoveryPointCreator;

  /**
   * <p>The date and time a job to back up resources is expected to be completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>ExpectedCompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  ExpectedCompletionDate?: Date;

  /**
   * <p>Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job must be started before it is canceled. The value is calculated by adding the start window to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2 hours, the <code>StartBy</code> time would be 8:00 PM on the date specified. The value of <code>StartBy</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  StartBy?: Date;
}
