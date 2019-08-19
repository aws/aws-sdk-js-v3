import { _UnmarshalledRecoveryPointCreator } from "./_RecoveryPointCreator";
import { _UnmarshalledCalculatedLifecycle } from "./_CalculatedLifecycle";
import { _UnmarshalledLifecycle } from "./_Lifecycle";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRecoveryPointOutput shape
 */
export interface DescribeRecoveryPointOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An ARN that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>An ARN that uniquely identifies a saved resource. The format of the ARN depends on the resource type.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The type of AWS resource to save as a recovery point; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   */
  ResourceType?: string;

  /**
   * <p>Contains identifying information about the creation of a recovery point, including the <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>, and <code>BackupRuleId</code> of the backup plan used to create it.</p>
   */
  CreatedBy?: _UnmarshalledRecoveryPointCreator;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>A status code specifying the state of the recovery point.</p> <note> <p>A partial status indicates that the recovery point was not successfully re-created and must be retried.</p> </note>
   */
  Status?: "COMPLETED" | "PARTIAL" | "DELETING" | "EXPIRED" | string;

  /**
   * <p>The date and time that a recovery point is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time that a job to create a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps.</p>
   */
  CalculatedLifecycle?: _UnmarshalledCalculatedLifecycle;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define. </p> <p>Backups that are transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: _UnmarshalledLifecycle;

  /**
   * <p>The server-side encryption key used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>A Boolean value that is returned as <code>TRUE</code> if the specified recovery point is encrypted, or <code>FALSE</code> if the recovery point is not encrypted.</p>
   */
  IsEncrypted?: boolean;

  /**
   * <p>Specifies the storage class of the recovery point. Valid values are <code>WARM</code> or <code>COLD</code>.</p>
   */
  StorageClass?: "WARM" | "COLD" | "DELETED" | string;

  /**
   * <p>The date and time that a recovery point was last restored, in Unix format and Coordinated Universal Time (UTC). The value of <code>LastRestoreTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastRestoreTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
