// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BackupServiceException as __BaseException } from "./BackupServiceException";

/**
 * <p>The backup options for each resource type.</p>
 * @public
 */
export interface AdvancedBackupSetting {
  /**
   * <p>Specifies an object containing resource type and backup options. The only supported
   *          resource type is Amazon EC2 instances with Windows Volume Shadow Copy Service
   *          (VSS). For a CloudFormation example, see the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/integrate-cloudformation-with-aws-backup.html">sample
   *             CloudFormation template to enable Windows VSS</a> in the <i>Backup User Guide</i>.</p>
   *          <p>Valid values: <code>EC2</code>.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>Specifies the backup option for a selected resource. This option is available for
   *          Windows VSS backup jobs and S3 backups.</p>
   *          <p>Valid values: </p>
   *          <p>Set to <code>"WindowsVSS":"enabled"</code> to enable the <code>WindowsVSS</code> backup
   *          option and create a Windows VSS backup. </p>
   *          <p>Set to <code>"WindowsVSS":"disabled"</code> to create a regular backup. The
   *             <code>WindowsVSS</code> option is not enabled by default.</p>
   *          <p>For S3 backups, set to <code>"S3BackupACLs":"disabled"</code> to exclude ACLs from the backup,
   *          or <code>"S3BackupObjectTags":"disabled"</code> to exclude object tags from the backup.
   *          By default, both ACLs and object tags are included in S3 backups.</p>
   *          <p>If you specify an invalid option, you get an <code>InvalidParameterValueException</code>
   *          exception.</p>
   *          <p>For more information about Windows VSS backups, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/windows-backups.html">Creating a VSS-Enabled Windows
   *             Backup</a>.</p>
   * @public
   */
  BackupOptions?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const AggregationPeriod = {
  FOURTEEN_DAYS: "FOURTEEN_DAYS",
  ONE_DAY: "ONE_DAY",
  SEVEN_DAYS: "SEVEN_DAYS",
} as const;

/**
 * @public
 */
export type AggregationPeriod = (typeof AggregationPeriod)[keyof typeof AggregationPeriod];

/**
 * <p>The required resource already exists.</p>
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.CreatorRequestId = opts.CreatorRequestId;
    this.Arn = opts.Arn;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * @public
 */
export interface AssociateBackupVaultMpaApprovalTeamInput {
  /**
   * <p>The name of the backup vault to associate with the MPA approval team.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the MPA approval team to associate with the backup vault.</p>
   * @public
   */
  MpaApprovalTeamArn: string | undefined;

  /**
   * <p>A comment provided by the requester explaining the association request.</p>
   * @public
   */
  RequesterComment?: string | undefined;
}

/**
 * <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>Indicates that a required parameter is missing.</p>
 * @public
 */
export class MissingParameterValueException extends __BaseException {
  readonly name: "MissingParameterValueException" = "MissingParameterValueException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingParameterValueException, __BaseException>) {
    super({
      name: "MissingParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingParameterValueException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>A resource that is required for the action doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>The request failed due to a temporary failure of the server.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>Contains information about the backup plan and rule that Backup used to
 *          initiate the recovery point backup.</p>
 * @public
 */
export interface RecoveryPointCreator {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * <p>The name of the backup plan that created this recovery point. This provides human-readable context about which backup plan was responsible for the backup job.</p>
   * @public
   */
  BackupPlanName?: string | undefined;

  /**
   * <p>Version IDs are unique, randomly generated, Unicode, UTF-8 encoded strings that are at
   *          most 1,024 bytes long. They cannot be edited.</p>
   * @public
   */
  BackupPlanVersion?: string | undefined;

  /**
   * <p>Uniquely identifies a rule used to schedule the backup of a selection of
   *          resources.</p>
   * @public
   */
  BackupRuleId?: string | undefined;

  /**
   * <p>The name of the backup rule within the backup plan that created this recovery point. This helps identify which specific rule triggered the backup job.</p>
   * @public
   */
  BackupRuleName?: string | undefined;

  /**
   * <p>The cron expression that defines the schedule for the backup rule. This shows the frequency and timing of when backups are automatically triggered.</p>
   * @public
   */
  BackupRuleCron?: string | undefined;

  /**
   * <p>The timezone used for the backup rule schedule. This provides context for when backups are scheduled to run in the specified timezone.</p>
   * @public
   */
  BackupRuleTimezone?: string | undefined;
}

/**
 * <p>Specifies the time period, in days, before a recovery point transitions to cold storage
 *          or is deleted.</p>
 *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
 *          days. Therefore, on the console, the retention setting must be 90 days greater than the
 *          transition to cold after days setting. The transition to cold after days setting can't
 *          be changed after a backup has been transitioned to cold.</p>
 *          <p>Resource types that can transition to cold storage are listed in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature
 *          availability by resource</a> table. Backup ignores this expression for
 *          other resource types.</p>
 *          <p>To remove the existing lifecycle and retention periods and keep your recovery points indefinitely,
 *          specify -1 for <code>MoveToColdStorageAfterDays</code> and <code>DeleteAfterDays</code>.</p>
 * @public
 */
export interface Lifecycle {
  /**
   * <p>The number of days after creation that a recovery point is moved to cold
   *          storage.</p>
   * @public
   */
  MoveToColdStorageAfterDays?: number | undefined;

  /**
   * <p>The number of days after creation that a recovery point is deleted. This value must be
   *          at least 90 days after the number of days specified in <code>MoveToColdStorageAfterDays</code>.</p>
   * @public
   */
  DeleteAfterDays?: number | undefined;

  /**
   * <p>If the value is true, your backup plan transitions supported resources to
   *          archive (cold) storage tier in accordance with your lifecycle settings.</p>
   * @public
   */
  OptInToArchiveForSupportedResources?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const BackupJobState = {
  ABORTED: "ABORTED",
  ABORTING: "ABORTING",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  PARTIAL: "PARTIAL",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type BackupJobState = (typeof BackupJobState)[keyof typeof BackupJobState];

/**
 * <p>Contains detailed information about a backup job.</p>
 * @public
 */
export interface BackupJob {
  /**
   * <p>The account ID that owns the backup job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   * @public
   */
  BackupJobId?: string | undefined;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>The type of backup vault where the recovery point is stored. Valid values are <code>BACKUP_VAULT</code> for standard backup vaults and <code>LOGICALLY_AIR_GAPPED_BACKUP_VAULT</code> for logically air-gapped vaults.</p>
   * @public
   */
  VaultType?: string | undefined;

  /**
   * <p>The lock state of the backup vault. For logically air-gapped vaults, this indicates whether the vault is locked in compliance mode. Valid values include <code>LOCKED</code> and <code>UNLOCKED</code>.</p>
   * @public
   */
  VaultLockState?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>Specifies the time period, in days, before a recovery point transitions to cold storage
   *          or is deleted.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, on the console, the retention setting must be 90 days greater than the
   *          transition to cold after days setting. The transition to cold after days setting can't
   *          be changed after a backup has been transitioned to cold.</p>
   *          <p>Resource types that can transition to cold storage are listed in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature
   *          availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   *          <p>To remove the existing lifecycle and retention periods and keep your recovery points indefinitely,
   *          specify -1 for <code>MoveToColdStorageAfterDays</code> and <code>DeleteAfterDays</code>.</p>
   * @public
   */
  RecoveryPointLifecycle?: Lifecycle | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the backup. This can be a customer-managed key or an Amazon Web Services managed key, depending on the vault configuration.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>A boolean value indicating whether the backup is encrypted. All backups in Backup are encrypted, but this field indicates the encryption status for transparency.</p>
   * @public
   */
  IsEncrypted?: boolean | undefined;

  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The date and time a backup job is created, in Unix format and Coordinated Universal Time
   *          (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the
   *          value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date and time a job to create a backup job is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * <p>The current state of a backup job.</p>
   * @public
   */
  State?: BackupJobState | undefined;

  /**
   * <p>A detailed message explaining the status of the job to back up a resource.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Contains an estimated percentage complete of a job at the time the job status was
   *          queried.</p>
   * @public
   */
  PercentDone?: string | undefined;

  /**
   * <p>The size, in bytes, of a backup (recovery point).</p>
   *          <p>This value can render differently depending on the resource type as Backup pulls in data information from other Amazon Web Services services. For example, the
   *          value returned may show a value of <code>0</code>, which may differ from the
   *          anticipated value.</p>
   *          <p>The expected behavior for values by resource type are described as follows:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora, Amazon DocumentDB, and Amazon Neptune do
   *                not have this value populate from the operation
   *                <code>GetBackupJobStatus</code>.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon DynamoDB with advanced features, this value refers to the size
   *                of the recovery point (backup).</p>
   *             </li>
   *             <li>
   *                <p>Amazon EC2 and Amazon EBS show volume size (provisioned storage)
   *                returned as part of this value. Amazon EBS does not return backup size
   *                information; snapshot size will have the same value as the original resource that was
   *                backed up.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon EFS, this value refers to the delta bytes transferred during a
   *                backup.</p>
   *             </li>
   *             <li>
   *                <p>Amazon FSx does not populate this value from the operation
   *                <code>GetBackupJobStatus</code> for FSx file systems.</p>
   *             </li>
   *             <li>
   *                <p>An Amazon RDS instance will show as <code>0</code>.</p>
   *             </li>
   *             <li>
   *                <p>For virtual machines running VMware, this value is passed to Backup
   *                through an asynchronous workflow, which can mean this displayed value can
   *                under-represent the actual backup size.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point. IAM roles other
   *          than the default role must include either <code>AWSBackup</code> or <code>AwsBackup</code>
   *          in the role name. For example,
   *             <code>arn:aws:iam::123456789012:role/AWSBackupRDSAccess</code>. Role names without those
   *          strings lack permissions to perform backup jobs.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>Contains identifying information about the creation of a backup job, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan used to create it.</p>
   * @public
   */
  CreatedBy?: RecoveryPointCreator | undefined;

  /**
   * <p>The date and time a job to back up resources is expected to be completed, in Unix format
   *          and Coordinated Universal Time (UTC). The value of <code>ExpectedCompletionDate</code> is
   *          accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January
   *          26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  ExpectedCompletionDate?: Date | undefined;

  /**
   * <p>Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job
   *          must be started before it is canceled. The value is calculated by adding the start window
   *          to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2
   *          hours, the <code>StartBy</code> time would be 8:00 PM on the date specified. The value of
   *             <code>StartBy</code> is accurate to milliseconds. For example, the value 1516925490.087
   *          represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  StartBy?: Date | undefined;

  /**
   * <p>The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only
   *          supported resource type is Amazon EC2.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The size in bytes transferred to a backup vault at the time that the job status was
   *          queried.</p>
   * @public
   */
  BytesTransferred?: number | undefined;

  /**
   * <p>Specifies the backup option for a selected resource. This option is only available for
   *          Windows Volume Shadow Copy Service (VSS) backup jobs.</p>
   *          <p>Valid values: Set to <code>"WindowsVSS":"enabled"</code> to enable the
   *             <code>WindowsVSS</code> backup option and create a Windows VSS backup. Set to
   *             <code>"WindowsVSS":"disabled"</code> to create a regular backup. If you specify an
   *          invalid option, you get an <code>InvalidParameterValueException</code> exception.</p>
   * @public
   */
  BackupOptions?: Record<string, string> | undefined;

  /**
   * <p>Represents the type of backup for a backup job.</p>
   * @public
   */
  BackupType?: string | undefined;

  /**
   * <p>This uniquely identifies a request to Backup
   *          to back up a resource. The return will be the
   *          parent (composite) job ID.</p>
   * @public
   */
  ParentJobId?: string | undefined;

  /**
   * <p>This is a boolean value indicating this is
   *          a parent (composite) backup job.</p>
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * <p>The non-unique name of the resource that
   *          belongs to the specified backup.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The date on which the backup
   *          job was initiated.</p>
   * @public
   */
  InitiationDate?: Date | undefined;

  /**
   * <p>This parameter is the job count for the specified
   *          message category.</p>
   *          <p>Example strings may include <code>AccessDenied</code>,
   *       <code>SUCCESS</code>, <code>AGGREGATE_ALL</code>, and
   *       <code>INVALIDPARAMETERS</code>. See
   *          <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">Monitoring</a>
   *          for a list of MessageCategory strings.</p>
   *          <p>The the value ANY returns count of all message categories.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *          for all message categories and returns the sum.</p>
   * @public
   */
  MessageCategory?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BackupJobStatus = {
  ABORTED: "ABORTED",
  ABORTING: "ABORTING",
  AGGREGATE_ALL: "AGGREGATE_ALL",
  ANY: "ANY",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  PARTIAL: "PARTIAL",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type BackupJobStatus = (typeof BackupJobStatus)[keyof typeof BackupJobStatus];

/**
 * <p>This is a summary of jobs created
 *          or running within the most recent 30 days.</p>
 *          <p>The returned summary may contain the following:
 *          Region, Account, State, RestourceType, MessageCategory,
 *          StartTime, EndTime, and Count of included jobs.</p>
 * @public
 */
export interface BackupJobSummary {
  /**
   * <p>The Amazon Web Services Regions within the job summary.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The account ID that owns the jobs within the summary.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>This value is job count for jobs
   *          with the specified state.</p>
   * @public
   */
  State?: BackupJobStatus | undefined;

  /**
   * <p>This value is the job count for the specified resource type.
   *          The request <code>GetSupportedResourceTypes</code> returns
   *          strings for supported resource types.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>This parameter is the job count for the specified
   *          message category.</p>
   *          <p>Example strings include <code>AccessDenied</code>,
   *          <code>Success</code>, and <code>InvalidParameters</code>. See
   *          <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">Monitoring</a>
   *          for a list of MessageCategory strings.</p>
   *          <p>The the value ANY returns count of all message categories.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *          for all message categories and returns the sum.</p>
   * @public
   */
  MessageCategory?: string | undefined;

  /**
   * <p>The value as a number of jobs in a job summary.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The value of time in number format of a job start time.</p>
   *          <p>This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The value of time in number format of a job end time.</p>
   *          <p>This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * <p>The details of the copy operation.</p>
 * @public
 */
export interface CopyAction {
  /**
   * <p>Specifies the time period, in days, before a recovery point transitions to cold storage
   *          or is deleted.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, on the console, the retention setting must be 90 days greater than the
   *          transition to cold after days setting. The transition to cold after days setting can't
   *          be changed after a backup has been transitioned to cold.</p>
   *          <p>Resource types that can transition to cold storage are listed in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature
   *          availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   *          <p>To remove the existing lifecycle and retention periods and keep your recovery points indefinitely,
   *          specify -1 for <code>MoveToColdStorageAfterDays</code> and <code>DeleteAfterDays</code>.</p>
   * @public
   */
  Lifecycle?: Lifecycle | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for
   *          the copied backup. For example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  DestinationBackupVaultArn: string | undefined;
}

/**
 * <p>This is an optional array within a BackupRule.</p>
 *          <p>IndexAction consists of one ResourceTypes.</p>
 * @public
 */
export interface IndexAction {
  /**
   * <p>0 or 1 index action will be accepted for each BackupRule.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EBS</code> for Amazon Elastic Block Store</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon Simple Storage Service (Amazon S3)</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceTypes?: string[] | undefined;
}

/**
 * <p>Specifies a scheduled task used to back up a selection of resources.</p>
 * @public
 */
export interface BackupRule {
  /**
   * <p>A display name for a backup rule. Must contain 1 to 50 alphanumeric or '-_.'
   *          characters.</p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  TargetBackupVaultName: string | undefined;

  /**
   * <p>A cron expression in UTC specifying when Backup initiates a backup job.
   *          When no CRON expression is provided, Backup will use the default
   *          expression <code>cron(0 5 ? * * *)</code>.</p>
   *          <p>For more information about Amazon Web Services cron expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a> in the <i>Amazon CloudWatch Events User
   *             Guide</i>.</p>
   *          <p>Two examples of Amazon Web Services cron expressions are <code> 15 * ? * * *</code> (take
   *          a backup every hour at 15 minutes past the hour) and <code>0 12 * * ? *</code> (take a
   *          backup every day at 12 noon UTC).</p>
   *          <p>For a table of examples, click the preceding link and scroll down the page.</p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>A value in minutes after a backup is scheduled before a job will be canceled if it
   *          doesn't start successfully. This value is optional.
   *          If this value is included, it must be at least 60 minutes to avoid errors.</p>
   *          <p>During the start window, the backup job status remains in <code>CREATED</code> status until it
   *          has successfully begun or until the start window time has run out. If within the start
   *          window time Backup receives an error that allows the job to be retried,
   *          Backup will automatically retry to begin the job at least every 10 minutes
   *          until the backup
   *          successfully begins (the job status changes to <code>RUNNING</code>) or until the job status
   *          changes to <code>EXPIRED</code> (which is expected to occur when the start window time is over).</p>
   * @public
   */
  StartWindowMinutes?: number | undefined;

  /**
   * <p>A value in minutes after a backup job is successfully started before it must be
   *          completed or it will be canceled by Backup. This value is optional.</p>
   * @public
   */
  CompletionWindowMinutes?: number | undefined;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup transitions and expires backups automatically according to
   *          the lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
   *          cold after days” setting. The “transition to cold after days” setting cannot be changed
   *          after a backup has been transitioned to cold. </p>
   *          <p>Resource types that can transition to cold storage are listed in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature availability
   *          by resource</a> table. Backup ignores this expression for other resource types.</p>
   * @public
   */
  Lifecycle?: Lifecycle | undefined;

  /**
   * <p>The tags that are assigned to resources that are associated
   *          with this rule when restored from backup.</p>
   * @public
   */
  RecoveryPointTags?: Record<string, string> | undefined;

  /**
   * <p>Uniquely identifies a rule that is used to schedule the backup of a selection of
   *          resources.</p>
   * @public
   */
  RuleId?: string | undefined;

  /**
   * <p>An array of <code>CopyAction</code> objects, which contains the details of the copy
   *          operation.</p>
   * @public
   */
  CopyActions?: CopyAction[] | undefined;

  /**
   * <p>Specifies whether Backup creates continuous backups. True causes Backup to create continuous backups capable of point-in-time restore (PITR). False
   *          (or not specified) causes Backup to create snapshot backups.</p>
   * @public
   */
  EnableContinuousBackup?: boolean | undefined;

  /**
   * <p>The timezone in which the schedule expression is set. By default,
   *          ScheduleExpressions are in UTC. You can modify this to a specified timezone.</p>
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * <p>IndexActions is an array you use to specify how backup data should
   *          be indexed.</p>
   *          <p>eEach BackupRule can have 0 or 1 IndexAction, as each backup can have up
   *          to one index associated with it.</p>
   *          <p>Within the array is ResourceType. Only one will be accepted for each BackupRule.</p>
   * @public
   */
  IndexActions?: IndexAction[] | undefined;
}

/**
 * <p>Contains an optional backup plan display name and an array of <code>BackupRule</code>
 *          objects, each of which specifies a backup rule. Each rule in a backup plan is a separate
 *          scheduled task and can back up a different selection of Amazon Web Services
 *          resources.</p>
 * @public
 */
export interface BackupPlan {
  /**
   * <p>The display name of a backup plan. Must contain only alphanumeric or '-_.'
   *          special characters.</p>
   *          <p>If this is set in the console, it can contain 1 to 50 characters; if this
   *       is set through CLI or API, it can contain 1 to 200 characters.</p>
   * @public
   */
  BackupPlanName: string | undefined;

  /**
   * <p>An array of <code>BackupRule</code> objects, each of which specifies a scheduled task
   *          that is used to back up a selection of resources. </p>
   * @public
   */
  Rules: BackupRule[] | undefined;

  /**
   * <p>Contains a list of <code>BackupOptions</code> for each resource type.</p>
   * @public
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[] | undefined;
}

/**
 * <p>Specifies a scheduled task used to back up a selection of resources.</p>
 * @public
 */
export interface BackupRuleInput {
  /**
   * <p>A display name for a backup rule. Must contain 1 to 50 alphanumeric or '-_.'
   *          characters.</p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  TargetBackupVaultName: string | undefined;

  /**
   * <p>A CRON expression in UTC specifying when Backup initiates a backup
   *          job. When no CRON expression is provided, Backup will use the default
   *          expression <code>cron(0 5 ? * * *)</code>.</p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>A value in minutes after a backup is scheduled before a job will be canceled if it
   *          doesn't start successfully. This value is optional.
   *          If this value is included, it must be at least 60 minutes to avoid errors.</p>
   *          <p>This parameter has a maximum value of 100 years (52,560,000 minutes).</p>
   *          <p>During the start window, the backup job status remains in <code>CREATED</code> status until it
   *          has successfully begun or until the start window time has run out. If within the start
   *          window time Backup receives an error that allows the job to be retried,
   *          Backup will automatically retry to begin the job at least every 10 minutes
   *          until the backup
   *          successfully begins (the job status changes to <code>RUNNING</code>) or until the job status
   *          changes to <code>EXPIRED</code> (which is expected to occur when the start window time is over).</p>
   * @public
   */
  StartWindowMinutes?: number | undefined;

  /**
   * <p>A value in minutes after a backup job is successfully started before it must be
   *          completed or it will be canceled by Backup. This value is optional.</p>
   * @public
   */
  CompletionWindowMinutes?: number | undefined;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup will transition and expire backups automatically according
   *          to the lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
   *          cold after days” setting. The “transition to cold after days” setting cannot be changed
   *          after a backup has been transitioned to cold storage.</p>
   *          <p>Resource types that can transition to cold storage are listed in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature availability
   *          by resource</a> table. Backup ignores this expression for other resource types.</p>
   *          <p>This parameter has a maximum value of 100 years (36,500 days).</p>
   * @public
   */
  Lifecycle?: Lifecycle | undefined;

  /**
   * <p>The tags to assign to the resources.</p>
   * @public
   */
  RecoveryPointTags?: Record<string, string> | undefined;

  /**
   * <p>An array of <code>CopyAction</code> objects, which contains the details of the copy
   *          operation.</p>
   * @public
   */
  CopyActions?: CopyAction[] | undefined;

  /**
   * <p>Specifies whether Backup creates continuous backups. True causes Backup to create continuous backups capable of point-in-time restore (PITR). False
   *          (or not specified) causes Backup to create snapshot backups.</p>
   * @public
   */
  EnableContinuousBackup?: boolean | undefined;

  /**
   * <p>The timezone in which the schedule expression is set. By default,
   *          ScheduleExpressions are in UTC. You can modify this to a specified timezone.</p>
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * <p>There can up to one IndexAction in each BackupRule, as each backup
   *          can have 0 or 1 backup index associated with it.</p>
   *          <p>Within the array is ResourceTypes. Only 1 resource type will
   *          be accepted for each BackupRule. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EBS</code> for Amazon Elastic Block Store</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon Simple Storage Service (Amazon S3)</p>
   *             </li>
   *          </ul>
   * @public
   */
  IndexActions?: IndexAction[] | undefined;
}

/**
 * <p>Contains an optional backup plan display name and an array of <code>BackupRule</code>
 *          objects, each of which specifies a backup rule. Each rule in a backup plan is a separate
 *          scheduled task. </p>
 * @public
 */
export interface BackupPlanInput {
  /**
   * <p>The display name of a backup plan. Must contain 1 to 50 alphanumeric or '-_.'
   *          characters.</p>
   * @public
   */
  BackupPlanName: string | undefined;

  /**
   * <p>An array of <code>BackupRule</code> objects, each of which specifies a scheduled task
   *          that is used to back up a selection of resources.</p>
   * @public
   */
  Rules: BackupRuleInput[] | undefined;

  /**
   * <p>Specifies a list of <code>BackupOptions</code> for each resource type. These settings
   *          are only available for Windows Volume Shadow Copy Service (VSS) backup jobs.</p>
   * @public
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[] | undefined;
}

/**
 * <p>Contains metadata about a backup plan.</p>
 * @public
 */
export interface BackupPlansListMember {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * <p>Uniquely identifies a backup plan.</p>
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * <p>The date and time a resource backup plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date and time a backup plan is deleted, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  DeletionDate?: Date | undefined;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version IDs cannot be edited.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>The display name of a saved backup plan.</p>
   * @public
   */
  BackupPlanName?: string | undefined;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The last time this backup plan was run. A date and time, in
   *          Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastExecutionDate</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  LastExecutionDate?: Date | undefined;

  /**
   * <p>Contains a list of <code>BackupOptions</code> for a resource type.</p>
   * @public
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[] | undefined;
}

/**
 * <p>An object specifying metadata associated with a backup plan template.</p>
 * @public
 */
export interface BackupPlanTemplatesListMember {
  /**
   * <p>Uniquely identifies a stored backup plan template.</p>
   * @public
   */
  BackupPlanTemplateId?: string | undefined;

  /**
   * <p>The optional display name of a backup plan template.</p>
   * @public
   */
  BackupPlanTemplateName?: string | undefined;
}

/**
 * <p>Includes information about tags you define to assign tagged resources to a backup
 *          plan.</p>
 *          <p>Include the prefix <code>aws:ResourceTag</code> in your tags.
 *          For example, <code>"aws:ResourceTag/TagKey1": "Value1"</code>.</p>
 * @public
 */
export interface ConditionParameter {
  /**
   * <p>The key in a key-value pair. For example, in the tag <code>Department:
   *          Accounting</code>, <code>Department</code> is the key.</p>
   * @public
   */
  ConditionKey?: string | undefined;

  /**
   * <p>The value in a key-value pair. For example, in the tag <code>Department:
   *             Accounting</code>, <code>Accounting</code> is the value.</p>
   * @public
   */
  ConditionValue?: string | undefined;
}

/**
 * <p>Contains information about which resources to include or exclude from a backup plan
 *          using their tags. Conditions are case sensitive.</p>
 * @public
 */
export interface Conditions {
  /**
   * <p>Filters the values of your tagged resources for only those resources that you tagged
   *          with the same value. Also called "exact matching."</p>
   * @public
   */
  StringEquals?: ConditionParameter[] | undefined;

  /**
   * <p>Filters the values of your tagged resources for only those resources that you tagged
   *          that do not have the same value. Also called "negated matching."</p>
   * @public
   */
  StringNotEquals?: ConditionParameter[] | undefined;

  /**
   * <p>Filters the values of your tagged resources for matching tag values with the use of a
   *          wildcard character (*) anywhere in the string. For example, "prod*" or "*rod*" matches the
   *          tag value "production".</p>
   * @public
   */
  StringLike?: ConditionParameter[] | undefined;

  /**
   * <p>Filters the values of your tagged resources for non-matching tag values with the use of
   *          a wildcard character (*) anywhere in the string.</p>
   * @public
   */
  StringNotLike?: ConditionParameter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ConditionType = {
  STRINGEQUALS: "STRINGEQUALS",
} as const;

/**
 * @public
 */
export type ConditionType = (typeof ConditionType)[keyof typeof ConditionType];

/**
 * <p>Contains an array of triplets made up of a condition type (such as
 *             <code>StringEquals</code>), a key, and a value. Used to filter resources using their
 *          tags and assign them to a backup plan. Case sensitive.</p>
 * @public
 */
export interface Condition {
  /**
   * <p>An operation applied to a key-value pair used to assign resources to your backup plan.
   *          Condition only supports <code>StringEquals</code>. For more flexible assignment options,
   *          including <code>StringLike</code> and the ability to exclude resources from your backup
   *          plan, use <code>Conditions</code> (with an "s" on the end) for your <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BackupSelection.html">
   *                <code>BackupSelection</code>
   *             </a>.</p>
   * @public
   */
  ConditionType: ConditionType | undefined;

  /**
   * <p>The key in a key-value pair. For example, in the tag <code>Department:
   *          Accounting</code>, <code>Department</code> is the key.</p>
   * @public
   */
  ConditionKey: string | undefined;

  /**
   * <p>The value in a key-value pair. For example, in the tag <code>Department:
   *             Accounting</code>, <code>Accounting</code> is the value.</p>
   * @public
   */
  ConditionValue: string | undefined;
}

/**
 * <p>Used to specify a set of resources to a backup plan.</p>
 *          <p>We recommend that you specify conditions, tags, or resources to include or exclude.
 *          Otherwise, Backup attempts to select all supported and opted-in storage resources, which
 *          could have unintended cost implications.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-json">Assigning resources programmatically</a>.</p>
 * @public
 */
export interface BackupSelection {
  /**
   * <p>The display name of a resource selection document. Must contain 1 to 50 alphanumeric or
   *          '-_.' characters.</p>
   * @public
   */
  SelectionName: string | undefined;

  /**
   * <p>The ARN of the IAM role that Backup uses to authenticate when backing up the
   *          target resource; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources to assign to a backup plan. The maximum number of
   *          ARNs is 500 without wildcards, or 30 ARNs with wildcards.</p>
   *          <p>If you need to assign many resources to a backup plan, consider a different resource
   *          selection strategy, such as assigning all resources of a resource type or refining your
   *          resource selection using tags.</p>
   *          <p>If you specify multiple ARNs, the resources much match any of the ARNs (OR logic).</p>
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>The conditions that you define to assign resources to your backup plans using tags. For example,
   *          <code>"StringEquals":  \{ "ConditionKey": "backup", "ConditionValue": "daily"\}</code>.</p>
   *          <p>
   *             <code>ListOfTags</code> supports only <code>StringEquals</code>. Condition operators are case sensitive.</p>
   *          <p>If you specify multiple conditions, the resources much match any of the conditions (OR logic).</p>
   * @public
   */
  ListOfTags?: Condition[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources to exclude from a backup plan. The maximum number
   *          of ARNs is 500 without wildcards, or 30 ARNs with wildcards.</p>
   *          <p>If you need to exclude many resources from a backup plan, consider a different resource
   *          selection strategy, such as assigning only one or a few resource types or refining your
   *          resource selection using tags.</p>
   * @public
   */
  NotResources?: string[] | undefined;

  /**
   * <p>The conditions that you define to assign resources to your backup plans using tags. For example,
   *          <code>"StringEquals": \{ "ConditionKey": "aws:ResourceTag/backup", "ConditionValue": "daily" \}</code>.</p>
   *          <p>
   *             <code>Conditions</code> supports <code>StringEquals</code>,
   *          <code>StringLike</code>, <code>StringNotEquals</code>, and
   *          <code>StringNotLike</code>. Condition operators are case sensitive.</p>
   *          <p>If you specify multiple conditions, the resources much match all conditions (AND logic).</p>
   * @public
   */
  Conditions?: Conditions | undefined;
}

/**
 * <p>Contains metadata about a <code>BackupSelection</code> object.</p>
 * @public
 */
export interface BackupSelectionsListMember {
  /**
   * <p>Uniquely identifies a request to assign a set of resources to a backup plan.</p>
   * @public
   */
  SelectionId?: string | undefined;

  /**
   * <p>The display name of a resource selection document.</p>
   * @public
   */
  SelectionName?: string | undefined;

  /**
   * <p>Uniquely identifies a backup plan.</p>
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * <p>The date and time a backup plan is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>Specifies the IAM role Amazon Resource Name (ARN) to create the target recovery point;
   *          for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BackupVaultEvent = {
  BACKUP_JOB_COMPLETED: "BACKUP_JOB_COMPLETED",
  BACKUP_JOB_EXPIRED: "BACKUP_JOB_EXPIRED",
  BACKUP_JOB_FAILED: "BACKUP_JOB_FAILED",
  BACKUP_JOB_STARTED: "BACKUP_JOB_STARTED",
  BACKUP_JOB_SUCCESSFUL: "BACKUP_JOB_SUCCESSFUL",
  BACKUP_PLAN_CREATED: "BACKUP_PLAN_CREATED",
  BACKUP_PLAN_MODIFIED: "BACKUP_PLAN_MODIFIED",
  CONTINUOUS_BACKUP_INTERRUPTED: "CONTINUOUS_BACKUP_INTERRUPTED",
  COPY_JOB_FAILED: "COPY_JOB_FAILED",
  COPY_JOB_STARTED: "COPY_JOB_STARTED",
  COPY_JOB_SUCCESSFUL: "COPY_JOB_SUCCESSFUL",
  RECOVERY_POINT_INDEXING_FAILED: "RECOVERY_POINT_INDEXING_FAILED",
  RECOVERY_POINT_INDEX_COMPLETED: "RECOVERY_POINT_INDEX_COMPLETED",
  RECOVERY_POINT_INDEX_DELETED: "RECOVERY_POINT_INDEX_DELETED",
  RECOVERY_POINT_MODIFIED: "RECOVERY_POINT_MODIFIED",
  RESTORE_JOB_COMPLETED: "RESTORE_JOB_COMPLETED",
  RESTORE_JOB_FAILED: "RESTORE_JOB_FAILED",
  RESTORE_JOB_STARTED: "RESTORE_JOB_STARTED",
  RESTORE_JOB_SUCCESSFUL: "RESTORE_JOB_SUCCESSFUL",
  S3_BACKUP_OBJECT_FAILED: "S3_BACKUP_OBJECT_FAILED",
  S3_RESTORE_OBJECT_FAILED: "S3_RESTORE_OBJECT_FAILED",
} as const;

/**
 * @public
 */
export type BackupVaultEvent = (typeof BackupVaultEvent)[keyof typeof BackupVaultEvent];

/**
 * @public
 * @enum
 */
export const EncryptionKeyType = {
  AWS_OWNED_KMS_KEY: "AWS_OWNED_KMS_KEY",
  CUSTOMER_MANAGED_KMS_KEY: "CUSTOMER_MANAGED_KMS_KEY",
} as const;

/**
 * @public
 */
export type EncryptionKeyType = (typeof EncryptionKeyType)[keyof typeof EncryptionKeyType];

/**
 * @public
 * @enum
 */
export const VaultState = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type VaultState = (typeof VaultState)[keyof typeof VaultState];

/**
 * @public
 * @enum
 */
export const VaultType = {
  BACKUP_VAULT: "BACKUP_VAULT",
  LOGICALLY_AIR_GAPPED_BACKUP_VAULT: "LOGICALLY_AIR_GAPPED_BACKUP_VAULT",
  RESTORE_ACCESS_BACKUP_VAULT: "RESTORE_ACCESS_BACKUP_VAULT",
} as const;

/**
 * @public
 */
export type VaultType = (typeof VaultType)[keyof typeof VaultType];

/**
 * <p>Contains metadata about a backup vault.</p>
 * @public
 */
export interface BackupVaultListMember {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>The type of vault in which the described recovery point is stored.</p>
   * @public
   */
  VaultType?: VaultType | undefined;

  /**
   * <p>The current state of the vault.</p>
   * @public
   */
  VaultState?: VaultState | undefined;

  /**
   * <p>The date and time a resource backup is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>A server-side encryption key you can specify to encrypt your backups from services
   *       that support full Backup management; for example,
   *       <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.
   *       If you specify a key, you must specify its ARN, not its alias. If you do not specify a key,
   *       Backup creates a KMS key for you by default.</p>
   *          <p>To learn which Backup services support full Backup management
   *          and how Backup handles encryption for backups from services that do not yet support
   *          full Backup, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/encryption.html">
   *             Encryption for backups in Backup</a>
   *          </p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The number of recovery points that are stored in a backup vault.</p>
   * @public
   */
  NumberOfRecoveryPoints?: number | undefined;

  /**
   * <p>A Boolean value that indicates whether Backup Vault Lock applies to the
   *          selected backup vault. If <code>true</code>, Vault Lock prevents delete and update
   *          operations on the recovery points in the selected vault.</p>
   * @public
   */
  Locked?: boolean | undefined;

  /**
   * <p>The Backup Vault Lock setting that specifies the minimum retention period
   *          that the vault retains its recovery points. If this parameter is not specified, Vault Lock
   *          does not enforce a minimum retention period.</p>
   *          <p>If specified, any backup or copy job to the vault must have a lifecycle policy with a
   *          retention period equal to or longer than the minimum retention period. If the job's
   *          retention period is shorter than that minimum retention period, then the vault fails the
   *          backup or copy job, and you should either modify your lifecycle settings or use a different
   *          vault. Recovery points already stored in the vault prior to Vault Lock are not
   *          affected.</p>
   * @public
   */
  MinRetentionDays?: number | undefined;

  /**
   * <p>The Backup Vault Lock setting that specifies the maximum retention period
   *          that the vault retains its recovery points. If this parameter is not specified, Vault Lock
   *          does not enforce a maximum retention period on the recovery points in the vault (allowing
   *          indefinite storage).</p>
   *          <p>If specified, any backup or copy job to the vault must have a lifecycle policy with a
   *          retention period equal to or shorter than the maximum retention period. If the job's
   *          retention period is longer than that maximum retention period, then the vault fails the
   *          backup or copy job, and you should either modify your lifecycle settings or use a different
   *          vault. Recovery points already stored in the vault prior to Vault Lock are not
   *          affected.</p>
   * @public
   */
  MaxRetentionDays?: number | undefined;

  /**
   * <p>The date and time when Backup Vault Lock configuration becomes immutable,
   *          meaning it cannot be changed or deleted.</p>
   *          <p>If you applied Vault Lock to your vault without specifying a lock date, you can change
   *          your Vault Lock settings, or delete Vault Lock from the vault entirely, at any time.</p>
   *          <p>This value is in Unix format, Coordinated Universal Time (UTC), and accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  LockDate?: Date | undefined;

  /**
   * <p>The type of encryption key used for the backup vault. Valid values are CUSTOMER_MANAGED_KMS_KEY for customer-managed keys or Amazon Web Services_OWNED_KMS_KEY for Amazon Web Services-owned keys.</p>
   * @public
   */
  EncryptionKeyType?: EncryptionKeyType | undefined;
}

/**
 * <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which
 *          are used to specify a lifecycle for a recovery point.</p>
 *          <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
 *          it expires. Backup transitions and expires backups automatically according to
 *          the lifecycle that you define.</p>
 *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
 *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
 *          cold after days” setting. The “transition to cold after days” setting cannot be changed
 *          after a backup has been transitioned to cold.</p>
 *          <p>Resource types that can transition to cold storage are listed in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature availability
 *          by resource</a> table. Backup ignores this expression for other resource types.</p>
 * @public
 */
export interface CalculatedLifecycle {
  /**
   * <p>A timestamp that specifies when to transition a recovery point to cold storage.</p>
   * @public
   */
  MoveToColdStorageAt?: Date | undefined;

  /**
   * <p>A timestamp that specifies when to delete a recovery point.</p>
   * @public
   */
  DeleteAt?: Date | undefined;
}

/**
 * @public
 */
export interface CancelLegalHoldInput {
  /**
   * <p>The ID of the legal hold.</p>
   * @public
   */
  LegalHoldId: string | undefined;

  /**
   * <p>A string the describes the reason for removing the legal hold.</p>
   * @public
   */
  CancelDescription: string | undefined;

  /**
   * <p>The integer amount, in days, after which to remove legal hold.</p>
   * @public
   */
  RetainRecordInDays?: number | undefined;
}

/**
 * @public
 */
export interface CancelLegalHoldOutput {}

/**
 * <p>Backup is already performing an action on this recovery point. It can't
 *          perform the action you requested until the first action finishes. Try again later.</p>
 * @public
 */
export class InvalidResourceStateException extends __BaseException {
  readonly name: "InvalidResourceStateException" = "InvalidResourceStateException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateException, __BaseException>) {
    super({
      name: "InvalidResourceStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>The parameters for a control. A control can have zero, one, or more than one
 *          parameter. An example of a control with two parameters is: "backup plan frequency is at
 *          least <code>daily</code> and the retention period is at least <code>1 year</code>". The
 *          first parameter is <code>daily</code>. The second parameter is <code>1 year</code>.</p>
 * @public
 */
export interface ControlInputParameter {
  /**
   * <p>The name of a parameter, for example, <code>BackupPlanFrequency</code>.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>The value of parameter, for example, <code>hourly</code>.</p>
   * @public
   */
  ParameterValue?: string | undefined;
}

/**
 * <p>A framework consists of one or more controls. Each control has its own control scope.
 *          The control scope can include one or more resource types, a combination of a tag key and
 *          value, or a combination of one resource type and one resource ID. If no scope is specified,
 *          evaluations for the rule are triggered when any resource in your recording group changes in
 *          configuration.</p>
 *          <note>
 *             <p>To set a control scope that includes all of a particular resource, leave the
 *                <code>ControlScope</code> empty or do not pass it when calling
 *                <code>CreateFramework</code>.</p>
 *          </note>
 * @public
 */
export interface ControlScope {
  /**
   * <p>The ID of the only Amazon Web Services resource that you want your control scope to
   *          contain.</p>
   * @public
   */
  ComplianceResourceIds?: string[] | undefined;

  /**
   * <p>Describes whether the control scope includes one or more types of resources, such as
   *             <code>EFS</code> or <code>RDS</code>.</p>
   * @public
   */
  ComplianceResourceTypes?: string[] | undefined;

  /**
   * <p>The tag key-value pair applied to those Amazon Web Services resources that you want to
   *          trigger an evaluation for a rule. A maximum of one key-value pair can be provided. The tag
   *          value is optional, but it cannot be an empty string if you are creating or editing a
   *          framework from the console (though the value can be an empty string when included
   *          in a CloudFormation template).</p>
   *          <p>The structure to assign a tag is:
   *             <code>[\{"Key":"string","Value":"string"\}]</code>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const CopyJobState = {
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  FAILED: "FAILED",
  PARTIAL: "PARTIAL",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type CopyJobState = (typeof CopyJobState)[keyof typeof CopyJobState];

/**
 * <p>Contains detailed information about a copy job.</p>
 * @public
 */
export interface CopyJob {
  /**
   * <p>The account ID that owns the copy job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Uniquely identifies a copy job.</p>
   * @public
   */
  CopyJobId?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a source copy vault; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>. </p>
   * @public
   */
  SourceBackupVaultArn?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a source recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  SourceRecoveryPointArn?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a destination copy vault; for
   *          example, <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  DestinationBackupVaultArn?: string | undefined;

  /**
   * <p>The type of destination backup vault where the copied recovery point is stored. Valid values are <code>BACKUP_VAULT</code> for standard backup vaults and <code>LOGICALLY_AIR_GAPPED_BACKUP_VAULT</code> for logically air-gapped vaults.</p>
   * @public
   */
  DestinationVaultType?: string | undefined;

  /**
   * <p>The lock state of the destination backup vault. For logically air-gapped vaults, this indicates whether the vault is locked in compliance mode. Valid values include <code>LOCKED</code> and <code>UNLOCKED</code>.</p>
   * @public
   */
  DestinationVaultLockState?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a destination recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  DestinationRecoveryPointArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the copied backup in the destination vault. This can be a customer-managed key or an Amazon Web Services managed key.</p>
   * @public
   */
  DestinationEncryptionKeyArn?: string | undefined;

  /**
   * <p>Specifies the time period, in days, before a recovery point transitions to cold storage
   *          or is deleted.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, on the console, the retention setting must be 90 days greater than the
   *          transition to cold after days setting. The transition to cold after days setting can't
   *          be changed after a backup has been transitioned to cold.</p>
   *          <p>Resource types that can transition to cold storage are listed in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature
   *          availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   *          <p>To remove the existing lifecycle and retention periods and keep your recovery points indefinitely,
   *          specify -1 for <code>MoveToColdStorageAfterDays</code> and <code>DeleteAfterDays</code>.</p>
   * @public
   */
  DestinationRecoveryPointLifecycle?: Lifecycle | undefined;

  /**
   * <p>The Amazon Web Services resource to be copied; for example, an Amazon Elastic Block Store
   *             (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS)
   *          database.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The date and time a copy job is created, in Unix format and Coordinated Universal Time
   *          (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the
   *          value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date and time a copy job is completed, in Unix format and Coordinated Universal Time
   *          (UTC). The value of <code>CompletionDate</code> is accurate to milliseconds. For example,
   *          the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * <p>The current state of a copy job.</p>
   * @public
   */
  State?: CopyJobState | undefined;

  /**
   * <p>A detailed message explaining the status of the job to copy a resource.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The size, in bytes, of a copy job.</p>
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * <p>Specifies the IAM role ARN used to copy the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>Contains information about the backup plan and rule that Backup used to
   *          initiate the recovery point backup.</p>
   * @public
   */
  CreatedBy?: RecoveryPointCreator | undefined;

  /**
   * <p>The type of Amazon Web Services resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>This uniquely identifies a request to Backup
   *          to copy a resource. The return will be the
   *          parent (composite) job ID.</p>
   * @public
   */
  ParentJobId?: string | undefined;

  /**
   * <p>This is a boolean value indicating this is
   *          a parent (composite) copy job.</p>
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * <p>The identifier of a resource within a composite group, such as
   *          nested (child) recovery point belonging to a composite (parent) stack. The
   *          ID is transferred from
   *          the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax">
   *             logical ID</a> within a stack.</p>
   * @public
   */
  CompositeMemberIdentifier?: string | undefined;

  /**
   * <p>The number of child (nested) copy jobs.</p>
   * @public
   */
  NumberOfChildJobs?: number | undefined;

  /**
   * <p>This returns the statistics of the included
   *          child (nested) copy jobs.</p>
   * @public
   */
  ChildJobsInState?: Partial<Record<CopyJobState, number>> | undefined;

  /**
   * <p>The non-unique name of the resource that
   *          belongs to the specified backup.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>This parameter is the job count for the specified
   *          message category.</p>
   *          <p>Example strings may include <code>AccessDenied</code>,
   *          <code>SUCCESS</code>, <code>AGGREGATE_ALL</code>, and
   *          <code>InvalidParameters</code>. See
   *          <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">Monitoring</a>
   *          for a list of MessageCategory strings.</p>
   *          <p>The the value ANY returns count of all message categories.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *          for all message categories and returns the sum</p>
   * @public
   */
  MessageCategory?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CopyJobStatus = {
  ABORTED: "ABORTED",
  ABORTING: "ABORTING",
  AGGREGATE_ALL: "AGGREGATE_ALL",
  ANY: "ANY",
  COMPLETED: "COMPLETED",
  COMPLETING: "COMPLETING",
  CREATED: "CREATED",
  FAILED: "FAILED",
  FAILING: "FAILING",
  PARTIAL: "PARTIAL",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type CopyJobStatus = (typeof CopyJobStatus)[keyof typeof CopyJobStatus];

/**
 * <p>This is a summary of copy jobs created
 *          or running within the most recent 30 days.</p>
 *          <p>The returned summary may contain the following:
 *          Region, Account, State, RestourceType, MessageCategory,
 *          StartTime, EndTime, and Count of included jobs.</p>
 * @public
 */
export interface CopyJobSummary {
  /**
   * <p>The Amazon Web Services Regions within the job summary.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The account ID that owns the jobs within the summary.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>This value is job count for jobs
   *          with the specified state.</p>
   * @public
   */
  State?: CopyJobStatus | undefined;

  /**
   * <p>This value is the job count for the specified resource type.
   *          The request <code>GetSupportedResourceTypes</code> returns
   *          strings for supported resource types</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>This parameter is the job count for the specified
   *          message category.</p>
   *          <p>Example strings include <code>AccessDenied</code>,
   *          <code>Success</code>, and <code>InvalidParameters</code>. See
   *          <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">Monitoring</a>
   *          for a list of MessageCategory strings.</p>
   *          <p>The the value ANY returns count of all message categories.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *          for all message categories and returns the sum.</p>
   * @public
   */
  MessageCategory?: string | undefined;

  /**
   * <p>The value as a number of jobs in a job summary.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The value of time in number format of a job start time.</p>
   *          <p>This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The value of time in number format of a job end time.</p>
   *          <p>This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateBackupPlanInput {
  /**
   * <p>The body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   * @public
   */
  BackupPlan: BackupPlanInput | undefined;

  /**
   * <p>The tags to assign to the backup plan.</p>
   * @public
   */
  BackupPlanTags?: Record<string, string> | undefined;

  /**
   * <p>Identifies the request and allows failed requests to be retried without the risk of
   *          running the operation twice. If the request includes a <code>CreatorRequestId</code> that
   *          matches an existing backup plan, that plan is returned. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;
}

/**
 * @public
 */
export interface CreateBackupPlanOutput {
  /**
   * <p>The ID of the backup plan.</p>
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * <p>The date and time that a backup plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. They cannot be edited.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>The settings for a resource type. This option is only
   *          available for Windows Volume Shadow Copy Service (VSS) backup jobs.</p>
   * @public
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[] | undefined;
}

/**
 * <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * @public
 */
export interface CreateBackupSelectionInput {
  /**
   * <p>The ID of the backup plan.</p>
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * <p>The body of a request to assign a set of resources to a backup plan.</p>
   * @public
   */
  BackupSelection: BackupSelection | undefined;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;
}

/**
 * @public
 */
export interface CreateBackupSelectionOutput {
  /**
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup
   *          plan.</p>
   * @public
   */
  SelectionId?: string | undefined;

  /**
   * <p>The ID of the backup plan.</p>
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * <p>The date and time a backup selection is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface CreateBackupVaultInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of letters, numbers, and hyphens.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The tags to assign to the backup vault.</p>
   * @public
   */
  BackupVaultTags?: Record<string, string> | undefined;

  /**
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;
}

/**
 * @public
 */
export interface CreateBackupVaultOutput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>The date and time a backup vault is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * <p>Contains detailed information about all of the controls of a framework. Each framework
 *          must contain at least one control.</p>
 * @public
 */
export interface FrameworkControl {
  /**
   * <p>The name of a control. This name is between 1 and 256 characters.</p>
   * @public
   */
  ControlName: string | undefined;

  /**
   * <p>The name/value pairs.</p>
   * @public
   */
  ControlInputParameters?: ControlInputParameter[] | undefined;

  /**
   * <p>The scope of a control. The control scope defines what the control will evaluate. Three
   *          examples of control scopes are: a specific backup plan, all backup plans with a specific
   *          tag, or all backup plans.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ControlScope.html">
   *                <code>ControlScope</code>.</a>
   *          </p>
   * @public
   */
  ControlScope?: ControlScope | undefined;
}

/**
 * @public
 */
export interface CreateFrameworkInput {
  /**
   * <p>The unique name of the framework. The name must be between 1 and 256 characters,
   *          starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and
   *          underscores (_).</p>
   * @public
   */
  FrameworkName: string | undefined;

  /**
   * <p>An optional description of the framework with a maximum of 1,024 characters.</p>
   * @public
   */
  FrameworkDescription?: string | undefined;

  /**
   * <p>The controls that make up the framework. Each control in the list has a name,
   *          input parameters, and scope.</p>
   * @public
   */
  FrameworkControls: FrameworkControl[] | undefined;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>CreateFrameworkInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>The tags to assign to the framework.</p>
   * @public
   */
  FrameworkTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFrameworkOutput {
  /**
   * <p>The unique name of the framework. The name must be between 1 and 256 characters,
   *          starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and
   *          underscores (_).</p>
   * @public
   */
  FrameworkName?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   * @public
   */
  FrameworkArn?: string | undefined;
}

/**
 * <p>This is a resource filter containing FromDate: DateTime
 *          and ToDate: DateTime. Both values are required. Future DateTime
 *          values are not permitted.</p>
 *          <p>The date and time are in Unix format and Coordinated
 *          Universal Time (UTC), and it is accurate to milliseconds
 *          ((milliseconds are optional).
 *          For example, the value 1516925490.087 represents Friday, January
 *          26, 2018 12:11:30.087 AM.</p>
 * @public
 */
export interface DateRange {
  /**
   * <p>This value is the beginning date, inclusive.</p>
   *          <p>The date and time are in Unix format and Coordinated
   *          Universal Time (UTC), and it is accurate to milliseconds
   *          (milliseconds are optional).</p>
   * @public
   */
  FromDate: Date | undefined;

  /**
   * <p>This value is the end date, inclusive.</p>
   *          <p>The date and time are in Unix format and Coordinated
   *          Universal Time (UTC), and it is accurate to milliseconds
   *          (milliseconds are optional).</p>
   * @public
   */
  ToDate: Date | undefined;
}

/**
 * <p>This specifies criteria to assign
 *          a set of resources, such as resource types or backup vaults.</p>
 * @public
 */
export interface RecoveryPointSelection {
  /**
   * <p>These are the names of the vaults in which the selected
   *          recovery points are contained.</p>
   * @public
   */
  VaultNames?: string[] | undefined;

  /**
   * <p>These are the resources included in the resource selection
   *          (including type of resources and vaults).</p>
   * @public
   */
  ResourceIdentifiers?: string[] | undefined;

  /**
   * <p>This is a resource filter containing FromDate: DateTime
   *          and ToDate: DateTime. Both values are required. Future DateTime
   *          values are not permitted.</p>
   *          <p>The date and time are in Unix format and Coordinated
   *          Universal Time (UTC), and it is accurate to milliseconds
   *          ((milliseconds are optional).
   *          For example, the value 1516925490.087 represents Friday, January
   *          26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  DateRange?: DateRange | undefined;
}

/**
 * @public
 */
export interface CreateLegalHoldInput {
  /**
   * <p>The title of the legal hold.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The description of the legal hold.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>This is a user-chosen string used to distinguish between otherwise identical
   *          calls. Retrying a successful request with the
   *          same idempotency token results in a success message with no action taken.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>The criteria to assign a set of resources, such as resource types or backup vaults.</p>
   * @public
   */
  RecoveryPointSelection?: RecoveryPointSelection | undefined;

  /**
   * <p>Optional tags to include. A tag is a key-value pair you can use to manage,
   *          filter, and search for your resources. Allowed characters include UTF-8 letters,
   *          numbers, spaces, and the following characters: + - = . _ : /. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const LegalHoldStatus = {
  ACTIVE: "ACTIVE",
  CANCELED: "CANCELED",
  CANCELING: "CANCELING",
  CREATING: "CREATING",
} as const;

/**
 * @public
 */
export type LegalHoldStatus = (typeof LegalHoldStatus)[keyof typeof LegalHoldStatus];

/**
 * @public
 */
export interface CreateLegalHoldOutput {
  /**
   * <p>The title of the legal hold.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The status of the legal hold.</p>
   * @public
   */
  Status?: LegalHoldStatus | undefined;

  /**
   * <p>The description of the legal hold.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the legal hold.</p>
   * @public
   */
  LegalHoldId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the legal hold.</p>
   * @public
   */
  LegalHoldArn?: string | undefined;

  /**
   * <p>The time when the legal hold was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The criteria to assign to a set of resources, such as resource types or backup vaults.</p>
   * @public
   */
  RecoveryPointSelection?: RecoveryPointSelection | undefined;
}

/**
 * @public
 */
export interface CreateLogicallyAirGappedBackupVaultInput {
  /**
   * <p>The name of a logical container where backups are stored. Logically air-gapped
   *          backup vaults are identified by names that are unique to the account used to create
   *          them and the Region where they are created.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The tags to assign to the vault.</p>
   * @public
   */
  BackupVaultTags?: Record<string, string> | undefined;

  /**
   * <p>The ID of the creation request.</p>
   *          <p>This parameter is optional. If used, this parameter must contain
   *          1 to 50 alphanumeric or '-_.' characters.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>This setting specifies the minimum retention period
   *          that the vault retains its recovery points.</p>
   *          <p>The minimum value accepted is 7 days.</p>
   * @public
   */
  MinRetentionDays: number | undefined;

  /**
   * <p>The maximum retention period that the vault retains its recovery points.</p>
   * @public
   */
  MaxRetentionDays: number | undefined;

  /**
   * <p>The ARN of the customer-managed KMS key to use for encrypting the logically air-gapped backup vault. If not specified, the vault will be encrypted with an Amazon Web Services-owned key managed by Amazon Web Services Backup.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateLogicallyAirGappedBackupVaultOutput {
  /**
   * <p>The name of a logical container where backups are stored. Logically air-gapped
   *          backup vaults are identified by names that are unique to the account used to create
   *          them and the Region where they are created.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the vault.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>The date and time when the vault was created.</p>
   *          <p>This value is in Unix format, Coordinated Universal Time (UTC), and accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The current state of the vault.</p>
   * @public
   */
  VaultState?: VaultState | undefined;
}

/**
 * <p>Contains information from your report plan about where to deliver your reports,
 *          specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your
 *          reports.</p>
 * @public
 */
export interface ReportDeliveryChannel {
  /**
   * <p>The unique name of the S3 bucket that receives your reports.</p>
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * <p>The prefix for where Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path:
   *             s3://your-bucket-name/<code>prefix</code>/Backup/us-west-2/year/month/day/report-name.
   *          If not specified, there is no prefix.</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * <p>The format of your reports: <code>CSV</code>, <code>JSON</code>, or both. If
   *          not specified, the default format is <code>CSV</code>.</p>
   * @public
   */
  Formats?: string[] | undefined;
}

/**
 * <p>Contains detailed information about a report setting.</p>
 * @public
 */
export interface ReportSetting {
  /**
   * <p>Identifies the report template for the report. Reports are built using a report
   *          template. The report templates are:</p>
   *          <p>
   *             <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT |
   *             COPY_JOB_REPORT | RESTORE_JOB_REPORT</code>
   *          </p>
   * @public
   */
  ReportTemplate: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the frameworks a report covers.</p>
   * @public
   */
  FrameworkArns?: string[] | undefined;

  /**
   * <p>The number of frameworks a report covers.</p>
   * @public
   */
  NumberOfFrameworks?: number | undefined;

  /**
   * <p>These are the accounts to be included in the report.</p>
   *          <p>Use string value of <code>ROOT</code> to include all organizational units.</p>
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * <p>These are the Organizational Units to be included in the report.</p>
   * @public
   */
  OrganizationUnits?: string[] | undefined;

  /**
   * <p>These are the Regions to be included in the report.</p>
   *          <p>Use the wildcard as the string value to include all Regions.</p>
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateReportPlanInput {
  /**
   * <p>The unique name of the report plan. The name must be between 1 and 256 characters,
   *          starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and
   *          underscores (_).</p>
   * @public
   */
  ReportPlanName: string | undefined;

  /**
   * <p>An optional description of the report plan with a maximum of 1,024 characters.</p>
   * @public
   */
  ReportPlanDescription?: string | undefined;

  /**
   * <p>A structure that contains information about where and how to deliver your reports,
   *          specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your
   *          reports.</p>
   * @public
   */
  ReportDeliveryChannel: ReportDeliveryChannel | undefined;

  /**
   * <p>Identifies the report template for the report. Reports are built using a report
   *          template. The report templates are:</p>
   *          <p>
   *             <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT |
   *             COPY_JOB_REPORT | RESTORE_JOB_REPORT</code>
   *          </p>
   *          <p>If the report template is <code>RESOURCE_COMPLIANCE_REPORT</code> or
   *             <code>CONTROL_COMPLIANCE_REPORT</code>, this API resource also describes the report
   *          coverage by Amazon Web Services Regions and frameworks.</p>
   * @public
   */
  ReportSetting: ReportSetting | undefined;

  /**
   * <p>The tags to assign to the report plan.</p>
   * @public
   */
  ReportPlanTags?: Record<string, string> | undefined;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>CreateReportPlanInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateReportPlanOutput {
  /**
   * <p>The unique name of the report plan.</p>
   * @public
   */
  ReportPlanName?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   * @public
   */
  ReportPlanArn?: string | undefined;

  /**
   * <p>The date and time a backup vault is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRestoreAccessBackupVaultInput {
  /**
   * <p>The ARN of the source backup vault containing the recovery points to which temporary access is requested.</p>
   * @public
   */
  SourceBackupVaultArn: string | undefined;

  /**
   * <p>The name of the backup vault to associate with an MPA approval team.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>Optional tags to assign to the restore access backup vault.</p>
   * @public
   */
  BackupVaultTags?: Record<string, string> | undefined;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>A comment explaining the reason for requesting restore access to the backup vault.</p>
   * @public
   */
  RequesterComment?: string | undefined;
}

/**
 * @public
 */
export interface CreateRestoreAccessBackupVaultOutput {
  /**
   * <p>The ARN that uniquely identifies the created restore access backup vault.</p>
   * @public
   */
  RestoreAccessBackupVaultArn?: string | undefined;

  /**
   * <p>The current state of the restore access backup vault.</p>
   * @public
   */
  VaultState?: VaultState | undefined;

  /**
   * <p>The name of the created restore access backup vault.</p>
   * @public
   */
  RestoreAccessBackupVaultName?: string | undefined;

  /**
   * <p>>The date and time when the restore access backup vault was created, in Unix format and Coordinated Universal Time </p>
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const RestoreTestingRecoveryPointSelectionAlgorithm = {
  LATEST_WITHIN_WINDOW: "LATEST_WITHIN_WINDOW",
  RANDOM_WITHIN_WINDOW: "RANDOM_WITHIN_WINDOW",
} as const;

/**
 * @public
 */
export type RestoreTestingRecoveryPointSelectionAlgorithm =
  (typeof RestoreTestingRecoveryPointSelectionAlgorithm)[keyof typeof RestoreTestingRecoveryPointSelectionAlgorithm];

/**
 * @public
 * @enum
 */
export const RestoreTestingRecoveryPointType = {
  CONTINUOUS: "CONTINUOUS",
  SNAPSHOT: "SNAPSHOT",
} as const;

/**
 * @public
 */
export type RestoreTestingRecoveryPointType =
  (typeof RestoreTestingRecoveryPointType)[keyof typeof RestoreTestingRecoveryPointType];

/**
 * <p>
 *             <code>RecoveryPointSelection</code> has five parameters (three required and two
 *          optional). The values you specify determine which recovery point is included in the restore
 *          test. You must indicate with <code>Algorithm</code> if you want the latest recovery point
 *          within your <code>SelectionWindowDays</code> or if you want a random recovery point, and
 *          you must indicate through <code>IncludeVaults</code> from which vaults the recovery points
 *          can be chosen.</p>
 *          <p>
 *             <code>Algorithm</code> (<i>required</i>) Valid values:
 *          "<code>LATEST_WITHIN_WINDOW</code>" or "<code>RANDOM_WITHIN_WINDOW</code>".</p>
 *          <p>
 *             <code>Recovery point types</code> (<i>required</i>) Valid values:
 *          "<code>SNAPSHOT</code>" and/or "<code>CONTINUOUS</code>". Include <code>SNAPSHOT</code>
 *          to restore only snapshot recovery points; include <code>CONTINUOUS</code> to restore
 *          continuous recovery points (point in time restore / PITR); use both to restore either a
 *          snapshot or a continuous recovery point. The recovery point will be determined by the value
 *          for <code>Algorithm</code>.</p>
 *          <p>
 *             <code>IncludeVaults</code> (<i>required</i>). You must include one or more
 *          backup vaults. Use the wildcard ["*"] or specific ARNs.</p>
 *          <p>
 *             <code>SelectionWindowDays</code> (<i>optional</i>) Value must be an
 *          integer (in days) from 1 to 365. If not included, the value defaults to
 *          <code>30</code>.</p>
 *          <p>
 *             <code>ExcludeVaults</code> (<i>optional</i>). You can choose to input one
 *          or more specific backup vault ARNs to exclude those vaults' contents from restore
 *          eligibility. Or, you can include a list of selectors. If this parameter and its value are
 *          not included, it defaults to empty list.</p>
 * @public
 */
export interface RestoreTestingRecoveryPointSelection {
  /**
   * <p>Acceptable values include "LATEST_WITHIN_WINDOW" or
   *          "RANDOM_WITHIN_WINDOW"</p>
   * @public
   */
  Algorithm?: RestoreTestingRecoveryPointSelectionAlgorithm | undefined;

  /**
   * <p>Accepted values include specific ARNs or list of selectors.
   *          Defaults to empty list if not listed.</p>
   * @public
   */
  ExcludeVaults?: string[] | undefined;

  /**
   * <p>Accepted values include wildcard ["*"] or by specific ARNs or
   *          ARN wilcard replacement
   *          ["arn:aws:backup:us-west-2:123456789012:backup-vault:asdf", ...]
   *          ["arn:aws:backup:*:*:backup-vault:asdf-*", ...]</p>
   * @public
   */
  IncludeVaults?: string[] | undefined;

  /**
   * <p>These are the types of recovery points.</p>
   *          <p>Include <code>SNAPSHOT</code>
   *          to restore only snapshot recovery points; include <code>CONTINUOUS</code> to restore
   *          continuous recovery points (point in time restore / PITR); use both to restore either a
   *          snapshot or a continuous recovery point. The recovery point will be determined by the value
   *          for <code>Algorithm</code>.</p>
   * @public
   */
  RecoveryPointTypes?: RestoreTestingRecoveryPointType[] | undefined;

  /**
   * <p>Accepted values are integers from 1 to 365.</p>
   * @public
   */
  SelectionWindowDays?: number | undefined;
}

/**
 * <p>This contains metadata about a restore testing plan.</p>
 * @public
 */
export interface RestoreTestingPlanForCreate {
  /**
   * <p>
   *             <code>RecoveryPointSelection</code> has five parameters (three required and two
   *          optional). The values you specify determine which recovery point is included in the restore
   *          test. You must indicate with <code>Algorithm</code> if you want the latest recovery point
   *          within your <code>SelectionWindowDays</code> or if you want a random recovery point, and
   *          you must indicate through <code>IncludeVaults</code> from which vaults the recovery points
   *          can be chosen.</p>
   *          <p>
   *             <code>Algorithm</code> (<i>required</i>) Valid values:
   *             "<code>LATEST_WITHIN_WINDOW</code>" or "<code>RANDOM_WITHIN_WINDOW</code>".</p>
   *          <p>
   *             <code>Recovery point types</code> (<i>required</i>) Valid values:
   *             "<code>SNAPSHOT</code>" and/or "<code>CONTINUOUS</code>". Include <code>SNAPSHOT</code>
   *          to restore only snapshot recovery points; include <code>CONTINUOUS</code> to restore
   *          continuous recovery points (point in time restore / PITR); use both to restore either a
   *          snapshot or a continuous recovery point. The recovery point will be determined by the value
   *          for <code>Algorithm</code>.</p>
   *          <p>
   *             <code>IncludeVaults</code> (<i>required</i>). You must include one or more
   *          backup vaults. Use the wildcard ["*"] or specific ARNs.</p>
   *          <p>
   *             <code>SelectionWindowDays</code> (<i>optional</i>) Value must be an
   *          integer (in days) from 1 to 365. If not included, the value defaults to
   *          <code>30</code>.</p>
   *          <p>
   *             <code>ExcludeVaults</code> (<i>optional</i>). You can choose to input one
   *          or more specific backup vault ARNs to exclude those vaults' contents from restore
   *          eligibility. Or, you can include a list of selectors. If this parameter and its value are
   *          not included, it defaults to empty list.</p>
   * @public
   */
  RecoveryPointSelection: RestoreTestingRecoveryPointSelection | undefined;

  /**
   * <p>The RestoreTestingPlanName is a unique string that is the name
   *          of the restore testing plan. This cannot be changed after creation,
   *          and it must consist of only alphanumeric characters and underscores.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * <p>A CRON expression in specified timezone when a restore
   *          testing plan is executed. When no CRON expression is provided, Backup will use the default
   *          expression <code>cron(0 5 ? * * *)</code>.</p>
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * <p>Optional. This is the timezone in which the schedule
   *          expression is set. By default, ScheduleExpressions are in UTC.
   *          You can modify this to a specified timezone.</p>
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * <p>Defaults to 24 hours.</p>
   *          <p>A value in hours after a
   *          restore test is scheduled before a job will be canceled if it
   *          doesn't start successfully. This value is optional. If this value
   *          is included, this parameter has a maximum value of 168 hours
   *          (one week).</p>
   * @public
   */
  StartWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface CreateRestoreTestingPlanInput {
  /**
   * <p>This is a unique string that identifies the request and
   *          allows failed requests to be retriedwithout the risk of running
   *          the operation twice. This parameter is optional. If used, this
   *          parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>A restore testing plan must contain a unique <code>RestoreTestingPlanName</code> string
   *          you create and must contain a <code>ScheduleExpression</code> cron. You may optionally
   *          include a <code>StartWindowHours</code> integer and a <code>CreatorRequestId</code>
   *          string.</p>
   *          <p>The <code>RestoreTestingPlanName</code> is a unique string that is the name of the
   *          restore testing plan. This cannot be changed after creation, and it must consist of only
   *          alphanumeric characters and underscores.</p>
   * @public
   */
  RestoreTestingPlan: RestoreTestingPlanForCreate | undefined;

  /**
   * <p>The tags to assign to the restore testing plan.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRestoreTestingPlanOutput {
  /**
   * <p>The date and time a restore testing plan was created, in Unix format
   *          and Coordinated Universal Time (UTC). The value of <code>CreationTime</code>
   *          is accurate to milliseconds. For example, the value 1516925490.087 represents
   *          Friday, January 26, 2018 12:11:30.087AM.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the created
   *          restore testing plan.</p>
   * @public
   */
  RestoreTestingPlanArn: string | undefined;

  /**
   * <p>This unique string is the name of the restore testing plan.</p>
   *          <p>The name cannot be changed after creation. The name consists of only
   *          alphanumeric characters and underscores. Maximum length is 50.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;
}

/**
 * <p>Pair of two related strings. Allowed characters
 *          are letters, white space, and numbers that can be
 *          represented in UTF-8 and the following characters:
 *          <code> + - = . _ : /</code>
 *          </p>
 * @public
 */
export interface KeyValue {
  /**
   * <p>The tag key (String). The key can't start with
   *          <code>aws:</code>.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum
   *          length of 128.</p>
   *          <p>Pattern: <code>^(?![aA]\{1\}[wW]\{1\}[sS]\{1\}:)([\p\{L\}\p\{Z\}\p\{N\}_.:/=+\-@]+)$</code>
   *          </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the key.</p>
   *          <p>Length Constraints: Maximum length of 256.</p>
   *          <p>Pattern: <code>^([\p\{L\}\p\{Z\}\p\{N\}_.:/=+\-@]*)$</code>
   *          </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>The conditions that you define for resources in
 *          your restore testing plan using tags.</p>
 * @public
 */
export interface ProtectedResourceConditions {
  /**
   * <p>Filters the values of your tagged resources for only
   *          those resources that you tagged  with the same value.
   *          Also called "exact matching."</p>
   * @public
   */
  StringEquals?: KeyValue[] | undefined;

  /**
   * <p>Filters the values of your tagged resources for only
   *          those resources that you tagged  that do not have the same value.
   *          Also called "negated matching."</p>
   * @public
   */
  StringNotEquals?: KeyValue[] | undefined;
}

/**
 * <p>This contains metadata about a specific restore testing selection.</p>
 *          <p>ProtectedResourceType is required, such as Amazon EBS or
 *          Amazon EC2.</p>
 *          <p>This consists of <code>RestoreTestingSelectionName</code>,
 *          <code>ProtectedResourceType</code>, and one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ProtectedResourceArns</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ProtectedResourceConditions</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Each protected resource type can have one single value.</p>
 *          <p>A restore testing selection can include a wildcard value ("*") for
 *          <code>ProtectedResourceArns</code> along with <code>ProtectedResourceConditions</code>.
 *          Alternatively, you can include up to 30 specific protected resource ARNs in
 *          <code>ProtectedResourceArns</code>.</p>
 *          <p>
 *             <code>ProtectedResourceConditions</code> examples include as <code>StringEquals</code>
 *          and <code>StringNotEquals</code>.</p>
 * @public
 */
export interface RestoreTestingSelectionForCreate {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *          Backup uses to create the target resource;
   *          for example: <code>arn:aws:iam::123456789012:role/S3Access</code>.
   *       </p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>Each protected resource can be filtered by its specific ARNs, such as
   *          <code>ProtectedResourceArns: ["arn:aws:...", "arn:aws:..."]</code>
   *          or by a wildcard: <code>ProtectedResourceArns: ["*"]</code>,
   *          but not both.</p>
   * @public
   */
  ProtectedResourceArns?: string[] | undefined;

  /**
   * <p>If you have included the wildcard in ProtectedResourceArns,
   *          you can include resource conditions, such as
   *          <code>ProtectedResourceConditions: \{    StringEquals: [\{ key: "XXXX",
   *             value: "YYYY" \}]</code>.</p>
   * @public
   */
  ProtectedResourceConditions?: ProtectedResourceConditions | undefined;

  /**
   * <p>The type of Amazon Web Services resource included in a restore
   *          testing selection; for example, an Amazon EBS volume or
   *          an Amazon RDS database.</p>
   *          <p>Supported resource types accepted include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Aurora</code> for Amazon Aurora</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DynamoDB</code> for Amazon DynamoDB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EBS</code> for Amazon Elastic Block Store</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EC2</code> for Amazon Elastic Compute Cloud</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EFS</code> for Amazon Elastic File System</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FSx</code> for Amazon FSx</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Neptune</code> for Amazon Neptune</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon S3</p>
   *             </li>
   *          </ul>
   * @public
   */
  ProtectedResourceType: string | undefined;

  /**
   * <p>You can override certain restore metadata keys by including the parameter
   *             <code>RestoreMetadataOverrides</code> in the body of
   *             <code>RestoreTestingSelection</code>. Key values are not case sensitive.</p>
   *          <p>See the complete list of <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing-inferred-metadata.html">restore testing
   *             inferred metadata</a>.</p>
   * @public
   */
  RestoreMetadataOverrides?: Record<string, string> | undefined;

  /**
   * <p>The unique name of the restore testing selection
   *          that belongs to the related restore testing plan.</p>
   *          <p>The name consists of only alphanumeric characters and underscores.
   *          Maximum length is 50.</p>
   * @public
   */
  RestoreTestingSelectionName: string | undefined;

  /**
   * <p>This is amount of hours (0 to 168) available to run a validation script on the data. The
   *          data will be deleted upon the completion of the validation script or the end of the
   *          specified retention period, whichever comes first.</p>
   * @public
   */
  ValidationWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface CreateRestoreTestingSelectionInput {
  /**
   * <p>This is an optional unique string that identifies the request and allows
   *          failed requests to be retried without the risk of running the operation
   *          twice. If used, this parameter must contain
   *          1 to 50 alphanumeric or '-_.' characters.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>Input the restore testing plan name that was returned from the
   *          related CreateRestoreTestingPlan request.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * <p>This consists of <code>RestoreTestingSelectionName</code>,
   *             <code>ProtectedResourceType</code>, and one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ProtectedResourceArns</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ProtectedResourceConditions</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Each protected resource type can have one single value.</p>
   *          <p>A restore testing selection can include a wildcard value ("*") for
   *             <code>ProtectedResourceArns</code> along with <code>ProtectedResourceConditions</code>.
   *          Alternatively, you can include up to 30 specific protected resource ARNs in
   *             <code>ProtectedResourceArns</code>.</p>
   * @public
   */
  RestoreTestingSelection: RestoreTestingSelectionForCreate | undefined;
}

/**
 * @public
 */
export interface CreateRestoreTestingSelectionOutput {
  /**
   * <p>The time that the resource testing selection was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The ARN of the restore testing plan with which the restore
   *       testing selection is associated.</p>
   * @public
   */
  RestoreTestingPlanArn: string | undefined;

  /**
   * <p>The name of the restore testing plan.</p>
   *          <p>The name cannot be changed after creation. The name consists of only
   *          alphanumeric characters and underscores. Maximum length is 50.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * <p>The name of the restore testing selection for the related restore testing plan.</p>
   *          <p>The name cannot be changed after creation. The name consists of only
   *          alphanumeric characters and underscores. Maximum length is 50.</p>
   * @public
   */
  RestoreTestingSelectionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupPlanInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   * @public
   */
  BackupPlanId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupPlanOutput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * <p>The date and time a backup plan is deleted, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  DeletionDate?: Date | undefined;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version IDs cannot be edited.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupSelectionInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup
   *          plan.</p>
   * @public
   */
  SelectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupVaultInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupVaultAccessPolicyInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   * @public
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupVaultLockConfigurationInput {
  /**
   * <p>The name of the backup vault from which to delete Backup Vault Lock.</p>
   * @public
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupVaultNotificationsInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created.</p>
   * @public
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFrameworkInput {
  /**
   * <p>The unique name of a framework.</p>
   * @public
   */
  FrameworkName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecoveryPointInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteReportPlanInput {
  /**
   * <p>The unique name of a report plan.</p>
   * @public
   */
  ReportPlanName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRestoreTestingPlanInput {
  /**
   * <p>Required unique name of the restore testing plan you wish
   *          to delete.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRestoreTestingSelectionInput {
  /**
   * <p>Required unique name of the restore testing plan that contains the
   *          restore testing selection you wish to delete.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * <p>Required unique name of the restore testing selection you
   *          wish to delete.</p>
   * @public
   */
  RestoreTestingSelectionName: string | undefined;
}

/**
 * <p>A dependent Amazon Web Services service or resource returned an error to the Backup service, and the action cannot be completed.</p>
 * @public
 */
export class DependencyFailureException extends __BaseException {
  readonly name: "DependencyFailureException" = "DependencyFailureException";
  readonly $fault: "server" = "server";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyFailureException, __BaseException>) {
    super({
      name: "DependencyFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyFailureException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * @public
 */
export interface DescribeBackupJobInput {
  /**
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   * @public
   */
  BackupJobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBackupJobOutput {
  /**
   * <p>Returns the account ID that owns the backup job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   * @public
   */
  BackupJobId?: string | undefined;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>Specifies the time period, in days, before a recovery point transitions to cold storage
   *          or is deleted.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, on the console, the retention setting must be 90 days greater than the
   *          transition to cold after days setting. The transition to cold after days setting can't
   *          be changed after a backup has been transitioned to cold.</p>
   *          <p>Resource types that can transition to cold storage are listed in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature
   *          availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   *          <p>To remove the existing lifecycle and retention periods and keep your recovery points indefinitely,
   *          specify -1 for <code>MoveToColdStorageAfterDays</code> and <code>DeleteAfterDays</code>.</p>
   * @public
   */
  RecoveryPointLifecycle?: Lifecycle | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>The type of backup vault where the recovery point is stored. Valid values are <code>BACKUP_VAULT</code> for standard backup vaults and <code>LOGICALLY_AIR_GAPPED_BACKUP_VAULT</code> for logically air-gapped vaults.</p>
   * @public
   */
  VaultType?: string | undefined;

  /**
   * <p>The lock state of the backup vault. For logically air-gapped vaults, this indicates whether the vault is locked in compliance mode. Valid values include <code>LOCKED</code> and <code>UNLOCKED</code>.</p>
   * @public
   */
  VaultLockState?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the backup. This can be a customer-managed key or an Amazon Web Services managed key, depending on the vault configuration.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>A boolean value indicating whether the backup is encrypted. All backups in Backup are encrypted, but this field indicates the encryption status for transparency.</p>
   * @public
   */
  IsEncrypted?: boolean | undefined;

  /**
   * <p>An ARN that uniquely identifies a saved resource. The format of the ARN depends on the
   *          resource type.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The date and time that a backup job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date and time that a job to create a backup job is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * <p>The current state of a backup job.</p>
   * @public
   */
  State?: BackupJobState | undefined;

  /**
   * <p>A detailed message explaining the status of the job to back up a resource.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Contains an estimated percentage that is complete of a job at the time the job status
   *          was queried.</p>
   * @public
   */
  PercentDone?: string | undefined;

  /**
   * <p>The size, in bytes, of a backup (recovery point).</p>
   *          <p>This value can render differently depending on the resource type as Backup pulls in data information from other Amazon Web Services services. For example, the
   *          value returned may show a value of <code>0</code>, which may differ from the
   *          anticipated value.</p>
   *          <p>The expected behavior for values by resource type are described as follows:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora, Amazon DocumentDB, and Amazon Neptune do
   *                not have this value populate from the operation
   *                <code>GetBackupJobStatus</code>.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon DynamoDB with advanced features, this value refers to the size
   *                of the recovery point (backup).</p>
   *             </li>
   *             <li>
   *                <p>Amazon EC2 and Amazon EBS show volume size (provisioned storage)
   *                returned as part of this value. Amazon EBS does not return backup size
   *                information; snapshot size will have the same value as the original resource that was
   *                backed up.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon EFS, this value refers to the delta bytes transferred during a
   *                backup.</p>
   *             </li>
   *             <li>
   *                <p>Amazon FSx does not populate this value from the operation
   *                <code>GetBackupJobStatus</code> for FSx file systems.</p>
   *             </li>
   *             <li>
   *                <p>An Amazon RDS instance will show as <code>0</code>.</p>
   *             </li>
   *             <li>
   *                <p>For virtual machines running VMware, this value is passed to Backup
   *                through an asynchronous workflow, which can mean this displayed value can
   *                under-represent the actual backup size.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>Contains identifying information about the creation of a backup job, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan that is used to create it.</p>
   * @public
   */
  CreatedBy?: RecoveryPointCreator | undefined;

  /**
   * <p>The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The size in bytes transferred to a backup vault at the time that the job status was
   *          queried.</p>
   * @public
   */
  BytesTransferred?: number | undefined;

  /**
   * <p>The date and time that a job to back up resources is expected to be completed, in Unix
   *          format and Coordinated Universal Time (UTC). The value of
   *             <code>ExpectedCompletionDate</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  ExpectedCompletionDate?: Date | undefined;

  /**
   * <p>Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job
   *          must be started before it is canceled. The value is calculated by adding the start window
   *          to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2
   *          hours, the <code>StartBy</code> time would be 8:00 PM on the date specified. The value of
   *             <code>StartBy</code> is accurate to milliseconds. For example, the value 1516925490.087
   *          represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  StartBy?: Date | undefined;

  /**
   * <p>Represents the options specified as part of backup plan or on-demand backup job.</p>
   * @public
   */
  BackupOptions?: Record<string, string> | undefined;

  /**
   * <p>Represents the actual backup type selected for a backup job. For example, if a
   *          successful Windows Volume Shadow Copy Service (VSS) backup was taken,
   *             <code>BackupType</code> returns <code>"WindowsVSS"</code>. If <code>BackupType</code> is
   *          empty, then the backup type was a regular backup.</p>
   * @public
   */
  BackupType?: string | undefined;

  /**
   * <p>This returns the parent (composite) resource backup job ID.</p>
   * @public
   */
  ParentJobId?: string | undefined;

  /**
   * <p>This returns the boolean value that a backup job is a parent (composite) job.</p>
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * <p>This returns the number of child (nested) backup jobs.</p>
   * @public
   */
  NumberOfChildJobs?: number | undefined;

  /**
   * <p>This returns the statistics of the included child (nested) backup jobs.</p>
   * @public
   */
  ChildJobsInState?: Partial<Record<BackupJobState, number>> | undefined;

  /**
   * <p>The non-unique name of the resource that
   *          belongs to the specified backup.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The date a backup job was initiated.</p>
   * @public
   */
  InitiationDate?: Date | undefined;

  /**
   * <p>The job count for the specified
   *          message category.</p>
   *          <p>Example strings may include <code>AccessDenied</code>, <code>SUCCESS</code>,
   *             <code>AGGREGATE_ALL</code>, and <code>INVALIDPARAMETERS</code>. View <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">Monitoring</a>
   *          for a list of accepted MessageCategory strings.</p>
   * @public
   */
  MessageCategory?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBackupVaultInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The account ID of the specified backup vault.</p>
   * @public
   */
  BackupVaultAccountId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MpaSessionStatus = {
  APPROVED: "APPROVED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type MpaSessionStatus = (typeof MpaSessionStatus)[keyof typeof MpaSessionStatus];

/**
 * <p>Contains information about the latest update to an MPA approval team association.</p>
 * @public
 */
export interface LatestMpaApprovalTeamUpdate {
  /**
   * <p>The ARN of the MPA session associated with this update.</p>
   * @public
   */
  MpaSessionArn?: string | undefined;

  /**
   * <p>The current status of the MPA approval team update.</p>
   * @public
   */
  Status?: MpaSessionStatus | undefined;

  /**
   * <p>A message describing the current status of the MPA approval team update.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The date and time when the MPA approval team update was initiated.</p>
   * @public
   */
  InitiationDate?: Date | undefined;

  /**
   * <p>The date and time when the MPA approval team update will expire.</p>
   * @public
   */
  ExpiryDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeBackupVaultOutput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>The type of vault described.</p>
   * @public
   */
  VaultType?: VaultType | undefined;

  /**
   * <p>The current state of the vault.-></p>
   * @public
   */
  VaultState?: VaultState | undefined;

  /**
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>The date and time that a backup vault is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional. If used, this
   *          parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The number of recovery points that are stored in a backup vault.</p>
   *          <p>Recovery point count value displayed in the console can be an approximation. Use <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByBackupVault.html">
   *                <code>ListRecoveryPointsByBackupVault</code>
   *             </a> API to obtain the exact
   *          count.</p>
   * @public
   */
  NumberOfRecoveryPoints?: number | undefined;

  /**
   * <p>A Boolean that indicates whether Backup Vault Lock is currently protecting
   *          the backup vault. <code>True</code> means that Vault Lock causes delete or update
   *          operations on the recovery points stored in the vault to fail.</p>
   * @public
   */
  Locked?: boolean | undefined;

  /**
   * <p>The Backup Vault Lock setting that specifies the minimum retention period
   *          that the vault retains its recovery points. If this
   *          parameter is not specified, Vault Lock will not enforce a minimum retention period.</p>
   *          <p>If specified, any backup or copy job to the vault must have a lifecycle policy with a
   *          retention period equal to or longer than the minimum retention period. If the job's
   *          retention period is shorter than that minimum retention period, then the vault fails the
   *          backup or copy job, and you should either modify your lifecycle settings or use a different
   *          vault. Recovery points already stored in the vault prior to Vault Lock are not
   *          affected.</p>
   * @public
   */
  MinRetentionDays?: number | undefined;

  /**
   * <p>The Backup Vault Lock setting that specifies the maximum retention period
   *          that the vault retains its recovery points. If this parameter is not specified, Vault Lock
   *          does not enforce a maximum retention period on the recovery points in the vault (allowing
   *          indefinite storage).</p>
   *          <p>If specified, any backup or copy job to the vault must have a lifecycle policy with a
   *          retention period equal to or shorter than the maximum retention period. If the job's
   *          retention period is longer than that maximum retention period, then the vault fails the
   *          backup or copy job, and you should either modify your lifecycle settings or use a different
   *          vault. Recovery points already stored in the vault prior to Vault Lock are not
   *          affected.</p>
   * @public
   */
  MaxRetentionDays?: number | undefined;

  /**
   * <p>The date and time when Backup Vault Lock configuration cannot be changed or
   *          deleted.</p>
   *          <p>If you applied Vault Lock to your vault without specifying a lock date, you can change
   *          any of your Vault Lock settings, or delete Vault Lock from the vault entirely, at any
   *          time.</p>
   *          <p>This value is in Unix format, Coordinated Universal Time (UTC), and accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  LockDate?: Date | undefined;

  /**
   * <p>The ARN of the source backup vault from which this restore access backup vault was created.</p>
   * @public
   */
  SourceBackupVaultArn?: string | undefined;

  /**
   * <p>The ARN of the MPA approval team associated with this backup vault.</p>
   * @public
   */
  MpaApprovalTeamArn?: string | undefined;

  /**
   * <p>The ARN of the MPA session associated with this backup vault.</p>
   * @public
   */
  MpaSessionArn?: string | undefined;

  /**
   * <p>Information about the latest update to the MPA approval team association for this backup vault.</p>
   * @public
   */
  LatestMpaApprovalTeamUpdate?: LatestMpaApprovalTeamUpdate | undefined;

  /**
   * <p>The type of encryption key used for the backup vault. Valid values are CUSTOMER_MANAGED_KMS_KEY for customer-managed keys or Amazon Web Services_OWNED_KMS_KEY for Amazon Web Services-owned keys.</p>
   * @public
   */
  EncryptionKeyType?: EncryptionKeyType | undefined;
}

/**
 * @public
 */
export interface DescribeCopyJobInput {
  /**
   * <p>Uniquely identifies a copy job.</p>
   * @public
   */
  CopyJobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCopyJobOutput {
  /**
   * <p>Contains detailed information about a copy job.</p>
   * @public
   */
  CopyJob?: CopyJob | undefined;
}

/**
 * @public
 */
export interface DescribeFrameworkInput {
  /**
   * <p>The unique name of a framework.</p>
   * @public
   */
  FrameworkName: string | undefined;
}

/**
 * @public
 */
export interface DescribeFrameworkOutput {
  /**
   * <p>The unique name of a framework.</p>
   * @public
   */
  FrameworkName?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   * @public
   */
  FrameworkArn?: string | undefined;

  /**
   * <p>An optional description of the framework.</p>
   * @public
   */
  FrameworkDescription?: string | undefined;

  /**
   * <p>The controls that make up the framework. Each control in the list has a name,
   *          input parameters, and scope.</p>
   * @public
   */
  FrameworkControls?: FrameworkControl[] | undefined;

  /**
   * <p>The date and time that a framework is created, in ISO 8601 representation. The value of <code>CreationTime</code> is accurate to milliseconds. For example,
   *          2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind
   *          UTC.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The deployment status of a framework. The statuses are:</p>
   *          <p>
   *             <code>CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED |
   *             FAILED</code>
   *          </p>
   * @public
   */
  DeploymentStatus?: string | undefined;

  /**
   * <p>A framework consists of one or more controls. Each control governs a resource, such as
   *          backup plans, backup selections, backup vaults, or recovery points. You can also turn
   *             Config recording on or off for each resource. The statuses are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> when recording is turned on for all resources governed by the
   *                framework.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARTIALLY_ACTIVE</code> when recording is turned off for at least one
   *                resource governed by the framework.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVE</code> when recording is turned off for all resources governed by
   *                the framework.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNAVAILABLE</code> when Backup is unable to validate recording
   *                status at this time.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FrameworkStatus?: string | undefined;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>DescribeFrameworkOutput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGlobalSettingsInput {}

/**
 * @public
 */
export interface DescribeGlobalSettingsOutput {
  /**
   * <p>The status of the flags <code>isCrossAccountBackupEnabled</code> and
   *           <code>isMpaEnabled</code> ('Mpa' refers to multi-party approval).</p>
   * @public
   */
  GlobalSettings?: Record<string, string> | undefined;

  /**
   * <p>The date and time that the flag <code>isCrossAccountBackupEnabled</code> was last
   *          updated. This update is in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastUpdateTime</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeProtectedResourceInput {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeProtectedResourceOutput {
  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The type of Amazon Web Services resource saved as a recovery point; for example, an
   *             Amazon EBS volume or an Amazon RDS database.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The date and time that a resource was last backed up, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>LastBackupTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  LastBackupTime?: Date | undefined;

  /**
   * <p>The name of the resource that belongs to the specified backup.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the backup vault
   *          that contains the most recent backup recovery point.</p>
   * @public
   */
  LastBackupVaultArn?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the most recent
   *          recovery point.</p>
   * @public
   */
  LastRecoveryPointArn?: string | undefined;

  /**
   * <p>The time, in minutes, that the most recent restore job took to complete.</p>
   * @public
   */
  LatestRestoreExecutionTimeMinutes?: number | undefined;

  /**
   * <p>The creation date of the most recent restore job.</p>
   * @public
   */
  LatestRestoreJobCreationDate?: Date | undefined;

  /**
   * <p>The date the most recent recovery point was created.</p>
   * @public
   */
  LatestRestoreRecoveryPointCreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRecoveryPointInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * <p>The account ID of the specified backup vault.</p>
   * @public
   */
  BackupVaultAccountId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IndexStatus = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type IndexStatus = (typeof IndexStatus)[keyof typeof IndexStatus];

/**
 * @public
 * @enum
 */
export const RecoveryPointStatus = {
  AVAILABLE: "AVAILABLE",
  COMPLETED: "COMPLETED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  EXPIRED: "EXPIRED",
  PARTIAL: "PARTIAL",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type RecoveryPointStatus = (typeof RecoveryPointStatus)[keyof typeof RecoveryPointStatus];

/**
 * @public
 * @enum
 */
export const StorageClass = {
  COLD: "COLD",
  DELETED: "DELETED",
  WARM: "WARM",
} as const;

/**
 * @public
 */
export type StorageClass = (typeof StorageClass)[keyof typeof StorageClass];

/**
 * @public
 */
export interface DescribeRecoveryPointOutput {
  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the source vault where the
   *          resource was originally backed up in; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>. If the recovery is
   *          restored to the same Amazon Web Services account or Region, this value will be
   *             <code>null</code>.</p>
   * @public
   */
  SourceBackupVaultArn?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a saved resource. The format of the ARN depends on the
   *          resource type.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The type of Amazon Web Services resource to save as a recovery point; for example, an
   *             Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>Contains identifying information about the creation of a recovery point, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan used to create it.</p>
   * @public
   */
  CreatedBy?: RecoveryPointCreator | undefined;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>A status code specifying the state of the recovery point. For more information, see
   *          <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/applicationstackbackups.html#cfnrecoverypointstatus">
   *             Recovery point status</a> in the <i>Backup Developer
   *                Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> status indicates that an Backup job has been
   *                initiated for a resource. The backup process has started and is actively processing
   *                a backup job for the associated recovery point.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> status indicates that the backup was successfully created
   *                for the recovery point. The backup process has completed without any issues, and the
   *                recovery point is now ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARTIAL</code> status indicates a composite recovery point has one or more
   *                nested recovery points that were not in the backup.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPIRED</code> status indicates that the recovery point has exceeded its retention
   *                period, but Backup lacks permission or is otherwise unable to delete it. To
   *                manually delete these recovery points, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/gs-cleanup-resources.html#cleanup-backups"> Step 3:
   *                   Delete the recovery points</a> in the <i>Clean up resources</i>
   *                section of <i>Getting started</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code> status occurs on a continuous backup where a user has taken some
   *                action that causes the continuous backup to be disabled. This can be caused by the removal
   *                of permissions, turning off versioning, turning off events being sent to EventBridge,
   *                or disabling the EventBridge rules that are put in place by Backup. For
   *                recovery points of Amazon S3, Amazon RDS, and Amazon Aurora
   *                resources, this status occurs when the retention period of a continuous backup rule is
   *                changed.</p>
   *                <p>To resolve <code>STOPPED</code> status, ensure that all requested permissions are in
   *                place and that versioning is enabled on the S3 bucket. Once these conditions are met, the
   *                next instance of a backup rule running will result in a new continuous recovery point being
   *                created. The recovery points with STOPPED status do not need to be deleted.</p>
   *                <p>For SAP HANA on Amazon EC2
   *                <code>STOPPED</code> status occurs due to user action, application misconfiguration, or
   *                backup failure. To ensure that future continuous backups succeed, refer to the recovery
   *                point status and check SAP HANA for details.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: RecoveryPointStatus | undefined;

  /**
   * <p>A status message explaining the status of the recovery point.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The date and time that a recovery point is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date and time when the backup job that created this recovery point was initiated, in
   *          Unix format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  InitiationDate?: Date | undefined;

  /**
   * <p>The date and time that a job to create a recovery point is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * <p>The size, in bytes, of a backup.</p>
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and
   *             <code>MoveToColdStorageAt</code> timestamps.</p>
   * @public
   */
  CalculatedLifecycle?: CalculatedLifecycle | undefined;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup transitions and expires backups automatically according to
   *          the lifecycle that you define.</p>
   *          <p>Backups that are transitioned to cold storage must be stored in cold storage for a
   *          minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold. </p>
   *          <p>Resource types that can transition to cold storage are listed in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature
   *          availability by resource</a> table. Backup ignores this expression for other resource types.</p>
   * @public
   */
  Lifecycle?: Lifecycle | undefined;

  /**
   * <p>The server-side encryption key used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>A Boolean value that is returned as <code>TRUE</code> if the specified recovery point is
   *          encrypted, or <code>FALSE</code> if the recovery point is not encrypted.</p>
   * @public
   */
  IsEncrypted?: boolean | undefined;

  /**
   * <p>Specifies the storage class of the recovery point. Valid values are <code>WARM</code> or
   *             <code>COLD</code>.</p>
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * <p>The date and time that a recovery point was last restored, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>LastRestoreTime</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  LastRestoreTime?: Date | undefined;

  /**
   * <p>This is an ARN that uniquely identifies a parent (composite) recovery point; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  ParentRecoveryPointArn?: string | undefined;

  /**
   * <p>The identifier of a resource within a composite group, such as
   *          nested (child) recovery point belonging to a composite (parent) stack. The
   *          ID is transferred from the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax">
   *             logical ID</a> within a stack.</p>
   * @public
   */
  CompositeMemberIdentifier?: string | undefined;

  /**
   * <p>This returns the boolean value that a recovery point is a parent (composite) job.</p>
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * <p>The name of the resource that belongs to the specified backup.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The type of vault in which the described recovery point is stored.</p>
   * @public
   */
  VaultType?: VaultType | undefined;

  /**
   * <p>This is the current status for the backup index associated with the specified recovery
   *          point.</p>
   *          <p>Statuses are: <code>PENDING</code> | <code>ACTIVE</code> | <code>FAILED</code> |
   *          <code>DELETING</code>
   *          </p>
   *          <p>A recovery point with an index that has the status of <code>ACTIVE</code> can be
   *          included in a search.</p>
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * <p>A string in the form of a detailed message explaining the status of a backup index
   *          associated with the recovery point.</p>
   * @public
   */
  IndexStatusMessage?: string | undefined;

  /**
   * <p>The type of encryption key used for the recovery point. Valid values are CUSTOMER_MANAGED_KMS_KEY for customer-managed keys or Amazon Web Services_OWNED_KMS_KEY for Amazon Web Services-owned keys.</p>
   * @public
   */
  EncryptionKeyType?: EncryptionKeyType | undefined;
}

/**
 * @public
 */
export interface DescribeRegionSettingsInput {}

/**
 * @public
 */
export interface DescribeRegionSettingsOutput {
  /**
   * <p>The services along with the opt-in preferences in the Region.</p>
   * @public
   */
  ResourceTypeOptInPreference?: Record<string, boolean> | undefined;

  /**
   * <p>Returns whether Backup fully manages the backups for a resource type.</p>
   *          <p>For the benefits of full Backup management, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#full-management">Full Backup
   *          management</a>.</p>
   *          <p>For a list of resource types and whether each supports full Backup management,
   *          see the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature availability by resource</a> table.</p>
   *          <p>If <code>"DynamoDB":false</code>, you can enable full Backup management for
   *          DynamoDB backup by enabling <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html#advanced-ddb-backup-enable-cli">
   *             Backup's advanced DynamoDB backup features</a>.</p>
   * @public
   */
  ResourceTypeManagementPreference?: Record<string, boolean> | undefined;
}

/**
 * @public
 */
export interface DescribeReportJobInput {
  /**
   * <p>The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded
   *          string that is at most 1,024 bytes long. The report job ID cannot be edited.</p>
   * @public
   */
  ReportJobId: string | undefined;
}

/**
 * <p>Contains information from your report job about your report destination.</p>
 * @public
 */
export interface ReportDestination {
  /**
   * <p>The unique name of the Amazon S3 bucket that receives your reports.</p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>The object key that uniquely identifies your reports in your S3 bucket.</p>
   * @public
   */
  S3Keys?: string[] | undefined;
}

/**
 * <p>Contains detailed information about a report job. A report job compiles a report based
 *          on a report plan and publishes it to Amazon S3.</p>
 * @public
 */
export interface ReportJob {
  /**
   * <p>The identifier for a report job. A unique, randomly generated, Unicode, UTF-8 encoded
   *          string that is at most 1,024 bytes long. Report job IDs cannot be edited.</p>
   * @public
   */
  ReportJobId?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   * @public
   */
  ReportPlanArn?: string | undefined;

  /**
   * <p>Identifies the report template for the report. Reports are built using a report
   *          template. The report templates are: </p>
   *          <p>
   *             <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT |
   *             COPY_JOB_REPORT | RESTORE_JOB_REPORT</code>
   *          </p>
   * @public
   */
  ReportTemplate?: string | undefined;

  /**
   * <p>The date and time that a report job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time that a report job is completed, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CompletionTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>The status of a report job. The statuses are:</p>
   *          <p>
   *             <code>CREATED | RUNNING | COMPLETED | FAILED</code>
   *          </p>
   *          <p>
   *             <code>COMPLETED</code> means that the report is available for your review at your
   *          designated destination. If the status is <code>FAILED</code>, review the
   *             <code>StatusMessage</code> for the reason.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A message explaining the status of the report job.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The S3 bucket name and S3 keys for the destination where the report job publishes the
   *          report.</p>
   * @public
   */
  ReportDestination?: ReportDestination | undefined;
}

/**
 * @public
 */
export interface DescribeReportJobOutput {
  /**
   * <p>The information about a report job, including its completion and creation times,
   *          report destination, unique report job ID, Amazon Resource Name (ARN), report template,
   *          status, and status message.</p>
   * @public
   */
  ReportJob?: ReportJob | undefined;
}

/**
 * @public
 */
export interface DescribeReportPlanInput {
  /**
   * <p>The unique name of a report plan.</p>
   * @public
   */
  ReportPlanName: string | undefined;
}

/**
 * <p>Contains detailed information about a report plan.</p>
 * @public
 */
export interface ReportPlan {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   * @public
   */
  ReportPlanArn?: string | undefined;

  /**
   * <p>The unique name of the report plan. This name is between 1 and 256 characters starting
   *          with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores
   *          (_).</p>
   * @public
   */
  ReportPlanName?: string | undefined;

  /**
   * <p>An optional description of the report plan with a maximum 1,024 characters.</p>
   * @public
   */
  ReportPlanDescription?: string | undefined;

  /**
   * <p>Identifies the report template for the report. Reports are built using a report
   *          template. The report templates are:</p>
   *          <p>
   *             <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT |
   *             COPY_JOB_REPORT | RESTORE_JOB_REPORT</code>
   *          </p>
   *          <p>If the report template is <code>RESOURCE_COMPLIANCE_REPORT</code> or
   *             <code>CONTROL_COMPLIANCE_REPORT</code>, this API resource also describes the report
   *          coverage by Amazon Web Services Regions and frameworks.</p>
   * @public
   */
  ReportSetting?: ReportSetting | undefined;

  /**
   * <p>Contains information about where and how to deliver your reports, specifically your
   *             Amazon S3 bucket name, S3 key prefix, and the formats of your reports.</p>
   * @public
   */
  ReportDeliveryChannel?: ReportDeliveryChannel | undefined;

  /**
   * <p>The deployment status of a report plan. The statuses are:</p>
   *          <p>
   *             <code>CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS |
   *          COMPLETED</code>
   *          </p>
   * @public
   */
  DeploymentStatus?: string | undefined;

  /**
   * <p>The date and time that a report plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time that a report job associated with this report plan last attempted to
   *          run, in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastAttemptedExecutionTime</code> is accurate to milliseconds. For example, the
   *          value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  LastAttemptedExecutionTime?: Date | undefined;

  /**
   * <p>The date and time that a report job associated with this report plan last successfully
   *          ran, in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastSuccessfulExecutionTime</code> is accurate to milliseconds. For example, the
   *          value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  LastSuccessfulExecutionTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeReportPlanOutput {
  /**
   * <p>Returns details about the report plan that is specified by its name. These details
   *          include the report plan's Amazon Resource Name (ARN), description, settings, delivery
   *          channel, deployment status, creation time, and last attempted and successful run
   *          times.</p>
   * @public
   */
  ReportPlan?: ReportPlan | undefined;
}

/**
 * @public
 */
export interface DescribeRestoreJobInput {
  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   * @public
   */
  RestoreJobId: string | undefined;
}

/**
 * <p>Contains information about the restore testing plan that
 *          Backup used to initiate the restore job.</p>
 * @public
 */
export interface RestoreJobCreator {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies
   *          a restore testing plan.</p>
   * @public
   */
  RestoreTestingPlanArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RestoreDeletionStatus = {
  DELETING: "DELETING",
  FAILED: "FAILED",
  SUCCESSFUL: "SUCCESSFUL",
} as const;

/**
 * @public
 */
export type RestoreDeletionStatus = (typeof RestoreDeletionStatus)[keyof typeof RestoreDeletionStatus];

/**
 * @public
 * @enum
 */
export const RestoreJobStatus = {
  ABORTED: "ABORTED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type RestoreJobStatus = (typeof RestoreJobStatus)[keyof typeof RestoreJobStatus];

/**
 * @public
 * @enum
 */
export const RestoreValidationStatus = {
  FAILED: "FAILED",
  SUCCESSFUL: "SUCCESSFUL",
  TIMED_OUT: "TIMED_OUT",
  VALIDATING: "VALIDATING",
} as const;

/**
 * @public
 */
export type RestoreValidationStatus = (typeof RestoreValidationStatus)[keyof typeof RestoreValidationStatus];

/**
 * @public
 */
export interface DescribeRestoreJobOutput {
  /**
   * <p>Returns the account ID that owns the restore job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   * @public
   */
  RestoreJobId?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the original resource that was backed up. This provides context about what resource is being restored.</p>
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the backup vault containing the recovery point being restored. This helps identify vault access policies and permissions.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>The date and time that a restore job is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date and time that a job to restore a recovery point is completed, in Unix format
   *          and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate
   *          to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * <p>Status code specifying the state of the job that is initiated by Backup to
   *          restore a recovery point.</p>
   * @public
   */
  Status?: RestoreJobStatus | undefined;

  /**
   * <p>A message showing the status of a job to restore a recovery point.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Contains an estimated percentage that is complete of a job at the time the job status
   *          was queried.</p>
   * @public
   */
  PercentDone?: string | undefined;

  /**
   * <p>The size, in bytes, of the restored resource.</p>
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The amount of time in minutes that a job restoring a recovery point is expected to
   *          take.</p>
   * @public
   */
  ExpectedCompletionTimeMinutes?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource that
   *       was created by the restore job.</p>
   *          <p>The format of the ARN depends on the resource type of the backed-up
   *          resource.</p>
   * @public
   */
  CreatedResourceArn?: string | undefined;

  /**
   * <p>Returns metadata associated with a restore job listed by resource type.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The creation date of the recovery point made by the specifed restore job.</p>
   * @public
   */
  RecoveryPointCreationDate?: Date | undefined;

  /**
   * <p>Contains identifying information about the creation of a restore job.</p>
   * @public
   */
  CreatedBy?: RestoreJobCreator | undefined;

  /**
   * <p>The status of validation run on the indicated
   *          restore job.</p>
   * @public
   */
  ValidationStatus?: RestoreValidationStatus | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  ValidationStatusMessage?: string | undefined;

  /**
   * <p>The status of the data generated by the restore test.</p>
   * @public
   */
  DeletionStatus?: RestoreDeletionStatus | undefined;

  /**
   * <p>This describes the restore job deletion status.</p>
   * @public
   */
  DeletionStatusMessage?: string | undefined;

  /**
   * <p>This is a boolean value indicating whether the restore job is a parent (composite) restore job.</p>
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * <p>This is the unique identifier of the parent restore job for the selected restore job.</p>
   * @public
   */
  ParentJobId?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateBackupVaultMpaApprovalTeamInput {
  /**
   * <p>The name of the backup vault from which to disassociate the MPA approval team.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An optional comment explaining the reason for disassociating the MPA approval team from the backup vault.</p>
   * @public
   */
  RequesterComment?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateRecoveryPointInput {
  /**
   * <p>The unique name of an Backup vault.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an Backup recovery
   *          point.</p>
   * @public
   */
  RecoveryPointArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateRecoveryPointFromParentInput {
  /**
   * <p>The name of a logical container where the child (nested) recovery point
   *          is stored. Backup vaults are identified by names that are unique to the account used
   *          to create them and the Amazon Web Services Region where they are created.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the child
   *          (nested) recovery point; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</code>
   *          </p>
   * @public
   */
  RecoveryPointArn: string | undefined;
}

/**
 * @public
 */
export interface ExportBackupPlanTemplateInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   * @public
   */
  BackupPlanId: string | undefined;
}

/**
 * @public
 */
export interface ExportBackupPlanTemplateOutput {
  /**
   * <p>The body of a backup plan template in JSON format.</p>
   *          <note>
   *             <p>This is a signed JSON document that cannot be modified before being passed to
   *                <code>GetBackupPlanFromJSON.</code>
   *             </p>
   *          </note>
   * @public
   */
  BackupPlanTemplateJson?: string | undefined;
}

/**
 * @public
 */
export interface GetBackupPlanInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version IDs cannot be edited.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>Number of future scheduled backup runs to preview. When set to 0 (default), no scheduled runs preview is included in the response. Valid range is 0-10.</p>
   * @public
   */
  MaxScheduledRunsPreview?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleExecutionType = {
  CONTINUOUS: "CONTINUOUS",
  CONTINUOUS_AND_SNAPSHOTS: "CONTINUOUS_AND_SNAPSHOTS",
  SNAPSHOTS: "SNAPSHOTS",
} as const;

/**
 * @public
 */
export type RuleExecutionType = (typeof RuleExecutionType)[keyof typeof RuleExecutionType];

/**
 * <p>Contains information about a scheduled backup plan execution, including the execution time, rule type, and associated rule identifier.</p>
 * @public
 */
export interface ScheduledPlanExecutionMember {
  /**
   * <p>The timestamp when the backup is scheduled to run, in Unix format and Coordinated Universal Time (UTC). The value is accurate to milliseconds.</p>
   * @public
   */
  ExecutionTime?: Date | undefined;

  /**
   * <p>The unique identifier of the backup rule that will execute at the scheduled time.</p>
   * @public
   */
  RuleId?: string | undefined;

  /**
   * <p>The type of backup rule execution. Valid values are <code>CONTINUOUS</code> (point-in-time recovery), <code>SNAPSHOTS</code> (snapshot backups), or <code>CONTINUOUS_AND_SNAPSHOTS</code> (both types combined).</p>
   * @public
   */
  RuleExecutionType?: RuleExecutionType | undefined;
}

/**
 * @public
 */
export interface GetBackupPlanOutput {
  /**
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   * @public
   */
  BackupPlan?: BackupPlan | undefined;

  /**
   * <p>Uniquely identifies a backup plan.</p>
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version IDs cannot be edited.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. </p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The date and time that a backup plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date and time that a backup plan is deleted, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  DeletionDate?: Date | undefined;

  /**
   * <p>The last time this backup plan was run. A date and time,
   *          in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastExecutionDate</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  LastExecutionDate?: Date | undefined;

  /**
   * <p>Contains a list of <code>BackupOptions</code> for each resource type. The list is
   *          populated only if the advanced option is set for the backup plan.</p>
   * @public
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[] | undefined;

  /**
   * <p>List of upcoming scheduled backup runs. Only included when <code>MaxScheduledRunsPreview</code> parameter is greater than 0. Contains up to 10 future backup executions with their scheduled times, execution types, and associated rule IDs.</p>
   * @public
   */
  ScheduledRunsPreview?: ScheduledPlanExecutionMember[] | undefined;
}

/**
 * @public
 */
export interface GetBackupPlanFromJSONInput {
  /**
   * <p>A customer-supplied backup plan document in JSON format.</p>
   * @public
   */
  BackupPlanTemplateJson: string | undefined;
}

/**
 * @public
 */
export interface GetBackupPlanFromJSONOutput {
  /**
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   * @public
   */
  BackupPlan?: BackupPlan | undefined;
}

/**
 * @public
 */
export interface GetBackupPlanFromTemplateInput {
  /**
   * <p>Uniquely identifies a stored backup plan template.</p>
   * @public
   */
  BackupPlanTemplateId: string | undefined;
}

/**
 * @public
 */
export interface GetBackupPlanFromTemplateOutput {
  /**
   * <p>Returns the body of a backup plan based on the target template, including the name,
   *          rules, and backup vault of the plan.</p>
   * @public
   */
  BackupPlanDocument?: BackupPlan | undefined;
}

/**
 * @public
 */
export interface GetBackupSelectionInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup
   *          plan.</p>
   * @public
   */
  SelectionId: string | undefined;
}

/**
 * @public
 */
export interface GetBackupSelectionOutput {
  /**
   * <p>Specifies the body of a request to assign a set of resources to a backup plan.</p>
   * @public
   */
  BackupSelection?: BackupSelection | undefined;

  /**
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup
   *          plan.</p>
   * @public
   */
  SelectionId?: string | undefined;

  /**
   * <p>Uniquely identifies a backup plan.</p>
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * <p>The date and time a backup selection is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;
}

/**
 * @public
 */
export interface GetBackupVaultAccessPolicyInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface GetBackupVaultAccessPolicyOutput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>The backup vault access policy document in JSON format.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetBackupVaultNotificationsInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface GetBackupVaultNotificationsOutput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies an Amazon Simple Notification Service (Amazon SNS)
   *          topic; for example, <code>arn:aws:sns:us-west-2:111122223333:MyTopic</code>.</p>
   * @public
   */
  SNSTopicArn?: string | undefined;

  /**
   * <p>An array of events that indicate the status of jobs to back up resources to the backup
   *          vault.</p>
   * @public
   */
  BackupVaultEvents?: BackupVaultEvent[] | undefined;
}

/**
 * @public
 */
export interface GetLegalHoldInput {
  /**
   * <p>The ID of the legal hold.</p>
   * @public
   */
  LegalHoldId: string | undefined;
}

/**
 * @public
 */
export interface GetLegalHoldOutput {
  /**
   * <p>The title of the legal hold.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The status of the legal hold.</p>
   * @public
   */
  Status?: LegalHoldStatus | undefined;

  /**
   * <p>The description of the legal hold.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The reason for removing the legal hold.</p>
   * @public
   */
  CancelDescription?: string | undefined;

  /**
   * <p>The ID of the legal hold.</p>
   * @public
   */
  LegalHoldId?: string | undefined;

  /**
   * <p>The framework ARN for the specified legal hold. The format
   *          of the ARN depends on the resource type.</p>
   * @public
   */
  LegalHoldArn?: string | undefined;

  /**
   * <p>The time when the legal hold was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The time when the legal hold was cancelled.</p>
   * @public
   */
  CancellationDate?: Date | undefined;

  /**
   * <p>The date and time until which the legal hold record is retained.</p>
   * @public
   */
  RetainRecordUntil?: Date | undefined;

  /**
   * <p>The criteria to assign a set of resources, such as resource types or backup vaults.</p>
   * @public
   */
  RecoveryPointSelection?: RecoveryPointSelection | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPointIndexDetailsInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created.</p>
   *          <p>Accepted characters include lowercase letters, numbers, and hyphens.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPointIndexDetailsOutput {
  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies the backup vault where the recovery
   *          point index is stored.</p>
   *          <p>For example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>A string of the  Amazon Resource Name (ARN) that uniquely identifies
   *          the source resource.</p>
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * <p>The date and time that a backup index was created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  IndexCreationDate?: Date | undefined;

  /**
   * <p>The date and time that a backup index was deleted, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  IndexDeletionDate?: Date | undefined;

  /**
   * <p>The date and time that a backup index finished creation, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  IndexCompletionDate?: Date | undefined;

  /**
   * <p>This is the current status for the backup index associated
   *          with the specified recovery point.</p>
   *          <p>Statuses are: <code>PENDING</code> | <code>ACTIVE</code> | <code>FAILED</code> | <code>DELETING</code>
   *          </p>
   *          <p>A recovery point with an index that has the status of <code>ACTIVE</code>
   *          can be included in a search.</p>
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * <p>A detailed message explaining the status of a backup index associated
   *          with the recovery point.</p>
   * @public
   */
  IndexStatusMessage?: string | undefined;

  /**
   * <p>Count of items within the backup index associated with the
   *          recovery point.</p>
   * @public
   */
  TotalItemsIndexed?: number | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPointRestoreMetadataInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * <p>The account ID of the specified backup vault.</p>
   * @public
   */
  BackupVaultAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPointRestoreMetadataOutput {
  /**
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>The set of metadata key-value pairs that describe the original configuration of the
   *          backed-up resource. These values vary depending on the service that is being
   *          restored.</p>
   * @public
   */
  RestoreMetadata?: Record<string, string> | undefined;

  /**
   * <p>The resource type of the recovery point.</p>
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * @public
 */
export interface GetRestoreJobMetadataInput {
  /**
   * <p>This is a unique identifier of a restore job within Backup.</p>
   * @public
   */
  RestoreJobId: string | undefined;
}

/**
 * @public
 */
export interface GetRestoreJobMetadataOutput {
  /**
   * <p>This is a unique identifier of a restore job within Backup.</p>
   * @public
   */
  RestoreJobId?: string | undefined;

  /**
   * <p>This contains the metadata of the specified backup job.</p>
   * @public
   */
  Metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRestoreTestingInferredMetadataInput {
  /**
   * <p>The account ID of the specified backup vault.</p>
   * @public
   */
  BackupVaultAccountId?: string | undefined;

  /**
   * <p>The name of a logical container where backups are stored. Backup
   *          vaults are identified by names that are unique to the account used to
   *          create them and the Amazon Web ServicesRegion where they are created.
   *          They consist of letters, numbers, and hyphens.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery
   *          point; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.
   *       </p>
   * @public
   */
  RecoveryPointArn: string | undefined;
}

/**
 * @public
 */
export interface GetRestoreTestingInferredMetadataOutput {
  /**
   * <p>This is a string map of the metadata inferred from the request.</p>
   * @public
   */
  InferredMetadata: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRestoreTestingPlanInput {
  /**
   * <p>Required unique name of the restore testing plan.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;
}

/**
 * <p>This contains metadata about a restore testing plan.</p>
 * @public
 */
export interface RestoreTestingPlanForGet {
  /**
   * <p>The date and time that a restore testing plan was created,
   *          in Unix format and Coordinated Universal Time (UTC). The value of
   *          <code>CreationTime</code> is accurate to milliseconds. For example,
   *          the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087  AM.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>This identifies the request and allows failed requests to
   *          be retried without the risk of running the operation twice.
   *          If the request includes a <code>CreatorRequestId</code> that
   *          matches an existing backup plan, that plan is returned. This
   *          parameter is optional.</p>
   *          <p>If used, this parameter must
   *             contain 1 to 50 alphanumeric or '-_.' characters.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The last time a restore test was run with the specified
   *          restore testing plan. A date and time, in Unix format and
   *          Coordinated Universal Time (UTC). The value of
   *          <code>LastExecutionDate</code> is accurate to milliseconds.
   *          For example, the value  1516925490.087 represents Friday,
   *          January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  LastExecutionTime?: Date | undefined;

  /**
   * <p>The date and time that the restore testing plan was updated.
   *          This update is in Unix format and Coordinated Universal Time (UTC).
   *          The value of <code>LastUpdateTime</code> is accurate to milliseconds.
   *          For example, the value  1516925490.087 represents Friday,
   *          January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * <p>The specified criteria to assign a set of resources, such as
   *          recovery point types or backup vaults.</p>
   * @public
   */
  RecoveryPointSelection: RestoreTestingRecoveryPointSelection | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies
   *          a restore testing plan.</p>
   * @public
   */
  RestoreTestingPlanArn: string | undefined;

  /**
   * <p>The restore testing plan name.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * <p>A CRON expression in specified timezone when a restore
   *          testing plan is executed. When no CRON expression is provided, Backup will use the default
   *          expression <code>cron(0 5 ? * * *)</code>.</p>
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * <p>Optional. This is the timezone in which the schedule
   *          expression is set. By default, ScheduleExpressions are in UTC.
   *          You can modify this to a specified timezone.</p>
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * <p>Defaults to 24 hours.</p>
   *          <p>A value in hours after a
   *          restore test is scheduled before a job will be canceled if it
   *          doesn't start successfully. This value is optional. If this value
   *          is included, this parameter has a maximum value of 168 hours
   *          (one week).</p>
   * @public
   */
  StartWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface GetRestoreTestingPlanOutput {
  /**
   * <p>Specifies the body of a restore testing plan. Includes
   *          <code>RestoreTestingPlanName</code>.</p>
   * @public
   */
  RestoreTestingPlan: RestoreTestingPlanForGet | undefined;
}

/**
 * @public
 */
export interface GetRestoreTestingSelectionInput {
  /**
   * <p>Required unique name of the restore testing plan.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * <p>Required unique name of the restore testing selection.</p>
   * @public
   */
  RestoreTestingSelectionName: string | undefined;
}

/**
 * <p>This contains metadata about a restore testing selection.</p>
 * @public
 */
export interface RestoreTestingSelectionForGet {
  /**
   * <p>The date and time that a restore testing selection was created,
   *          in Unix format and Coordinated Universal Time (UTC). The value of
   *          <code>CreationTime</code> is accurate to milliseconds. For example,
   *          the value 1516925490.087 represents Friday, January 26,
   *          201812:11:30.087  AM.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>This identifies the request and allows failed requests to
   *          be retried without the risk of running the operation twice.
   *          If the request includes a <code>CreatorRequestId</code> that
   *          matches an existing backup plan, that plan is returned. This
   *          parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric
   *          or '-_.' characters.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *          Backup uses to create the target resource; for
   *          example:<code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>You can include specific ARNs, such as
   *          <code>ProtectedResourceArns: ["arn:aws:...", "arn:aws:..."]</code>
   *          or you can include a wildcard: <code>ProtectedResourceArns: ["*"]</code>,
   *          but not both.</p>
   * @public
   */
  ProtectedResourceArns?: string[] | undefined;

  /**
   * <p>In a resource testing selection, this parameter filters by
   *          specific conditions such as <code>StringEquals</code> or
   *          <code>StringNotEquals</code>.</p>
   * @public
   */
  ProtectedResourceConditions?: ProtectedResourceConditions | undefined;

  /**
   * <p>The type of Amazon Web Services resource included in a resource
   *          testing selection;
   *          for example, an Amazon EBS volume
   *          or an Amazon RDS database.</p>
   * @public
   */
  ProtectedResourceType: string | undefined;

  /**
   * <p>You can override certain restore metadata keys by including the parameter
   *          <code>RestoreMetadataOverrides</code> in the body of
   *          <code>RestoreTestingSelection</code>. Key values are not case sensitive.</p>
   *          <p>See the complete list of <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing-inferred-metadata.html">restore testing
   *          inferred metadata</a>.</p>
   * @public
   */
  RestoreMetadataOverrides?: Record<string, string> | undefined;

  /**
   * <p>The RestoreTestingPlanName is a unique string that is the name
   *          of the restore testing plan.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * <p>The unique name of the restore testing selection that
   *          belongs to the related restore testing plan.</p>
   *          <p>The name consists of only alphanumeric characters and underscores.
   *          Maximum length is 50.</p>
   * @public
   */
  RestoreTestingSelectionName: string | undefined;

  /**
   * <p>This is amount of hours (1 to 168) available to run a validation script on the data. The
   *          data will be deleted upon the completion of the validation script or the end of the
   *          specified retention period, whichever comes first.</p>
   * @public
   */
  ValidationWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface GetRestoreTestingSelectionOutput {
  /**
   * <p>Unique name of the restore testing selection.</p>
   * @public
   */
  RestoreTestingSelection: RestoreTestingSelectionForGet | undefined;
}

/**
 * @public
 */
export interface GetSupportedResourceTypesOutput {
  /**
   * <p>Contains a string with the supported Amazon Web Services resource types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Aurora</code> for Amazon Aurora</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CloudFormation</code> for CloudFormation</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DynamoDB</code> for Amazon DynamoDB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EBS</code> for Amazon Elastic Block Store</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EC2</code> for Amazon Elastic Compute Cloud</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EFS</code> for Amazon Elastic File System</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FSx</code> for Amazon FSx</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Neptune</code> for Amazon Neptune</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Redshift</code> for Amazon Redshift</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon Simple Storage Service (Amazon S3)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAP HANA on Amazon EC2</code> for SAP HANA databases
   *             on Amazon Elastic Compute Cloud instances</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> for Storage Gateway</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Timestream</code> for Amazon Timestream</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VirtualMachine</code> for VMware virtual machines</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ListBackupJobsInput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Returns only backup jobs that match the specified resource Amazon Resource Name
   *          (ARN).</p>
   * @public
   */
  ByResourceArn?: string | undefined;

  /**
   * <p>Returns only backup jobs that are in the specified state.</p>
   *          <p>
   *             <code>Completed with issues</code> is a status found only in the Backup
   *          console. For API, this status refers to jobs with a state of <code>COMPLETED</code> and a
   *          <code>MessageCategory</code> with a value other than <code>SUCCESS</code>; that is, the
   *          status is completed but comes with a status message.</p>
   *          <p>To obtain the job count for
   *          <code>Completed with issues</code>, run two GET requests, and subtract the second,
   *          smaller number:</p>
   *          <p>GET /backup-jobs/?state=COMPLETED</p>
   *          <p>GET /backup-jobs/?messageCategory=SUCCESS&state=COMPLETED</p>
   * @public
   */
  ByState?: BackupJobState | undefined;

  /**
   * <p>Returns only backup jobs that will be stored in the specified backup vault. Backup
   *          vaults are identified by names that are unique to the account used to create them and the
   *             Amazon Web Services Region where they are created.</p>
   * @public
   */
  ByBackupVaultName?: string | undefined;

  /**
   * <p>Returns only backup jobs that were created before the specified date.</p>
   * @public
   */
  ByCreatedBefore?: Date | undefined;

  /**
   * <p>Returns only backup jobs that were created after the specified date.</p>
   * @public
   */
  ByCreatedAfter?: Date | undefined;

  /**
   * <p>Returns only backup jobs for the specified resources:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Aurora</code> for Amazon Aurora</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CloudFormation</code> for CloudFormation</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DynamoDB</code> for Amazon DynamoDB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EBS</code> for Amazon Elastic Block Store</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EC2</code> for Amazon Elastic Compute Cloud</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EFS</code> for Amazon Elastic File System</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FSx</code> for Amazon FSx</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Neptune</code> for Amazon Neptune</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Redshift</code> for Amazon Redshift</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon Simple Storage Service (Amazon S3)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAP HANA on Amazon EC2</code> for SAP HANA databases
   *             on Amazon Elastic Compute Cloud instances</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> for Storage Gateway</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Timestream</code> for Amazon Timestream</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VirtualMachine</code> for VMware virtual machines</p>
   *             </li>
   *          </ul>
   * @public
   */
  ByResourceType?: string | undefined;

  /**
   * <p>The account ID to list the jobs from. Returns only backup jobs associated with the
   *          specified account ID.</p>
   *          <p>If used from an Organizations management account, passing <code>*</code> returns
   *          all jobs across the organization.</p>
   * @public
   */
  ByAccountId?: string | undefined;

  /**
   * <p>Returns only backup jobs completed after a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   * @public
   */
  ByCompleteAfter?: Date | undefined;

  /**
   * <p>Returns only backup jobs completed before a date expressed in Unix format and
   *          Coordinated Universal Time (UTC).</p>
   * @public
   */
  ByCompleteBefore?: Date | undefined;

  /**
   * <p>This is a filter to list child (nested) jobs based on parent job ID.</p>
   * @public
   */
  ByParentJobId?: string | undefined;

  /**
   * <p>This is an optional parameter that can be used to
   *          filter out jobs with a MessageCategory which matches the
   *          value you input.</p>
   *          <p>Example strings may include <code>AccessDenied</code>,
   *          <code>SUCCESS</code>, <code>AGGREGATE_ALL</code>, and
   *          <code>InvalidParameters</code>.</p>
   *          <p>View <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">Monitoring</a>
   *          </p>
   *          <p>The wildcard () returns count of all message categories.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *             for all message categories and returns the sum.</p>
   * @public
   */
  ByMessageCategory?: string | undefined;
}

/**
 * @public
 */
export interface ListBackupJobsOutput {
  /**
   * <p>An array of structures containing metadata about your backup jobs returned in JSON
   *          format.</p>
   * @public
   */
  BackupJobs?: BackupJob[] | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBackupJobSummariesInput {
  /**
   * <p>Returns the job count for the specified account.</p>
   *          <p>If the request is sent from a member account or an account
   *          not part of Amazon Web Services Organizations, jobs within requestor's account
   *          will be returned.</p>
   *          <p>Root, admin, and delegated administrator accounts can use
   *          the value ANY to return job counts from every account in the
   *          organization.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *          from all accounts within the authenticated organization,
   *          then returns the sum.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>This parameter returns the job count for jobs with the specified state.</p>
   *          <p>The the value ANY returns count of all states.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts for all states and returns the
   *          sum.</p>
   *          <p>
   *             <code>Completed with issues</code> is a status found only in the Backup
   *          console. For API, this status refers to jobs with a state of <code>COMPLETED</code> and a
   *             <code>MessageCategory</code> with a value other than <code>SUCCESS</code>; that is, the
   *          status is completed but comes with a status message. To obtain the job count for
   *             <code>Completed with issues</code>, run two GET requests, and subtract the second,
   *          smaller number:</p>
   *          <p>GET
   *          /audit/backup-job-summaries?AggregationPeriod=FOURTEEN_DAYS&State=COMPLETED</p>
   *          <p>GET
   *          /audit/backup-job-summaries?AggregationPeriod=FOURTEEN_DAYS&MessageCategory=SUCCESS&State=COMPLETED</p>
   * @public
   */
  State?: BackupJobStatus | undefined;

  /**
   * <p>Returns the job count for the specified resource type.
   *          Use request <code>GetSupportedResourceTypes</code> to obtain
   *          strings for supported resource types.</p>
   *          <p>The the value ANY returns count of all resource types.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *          for all resource types and returns the sum.</p>
   *          <p>The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>This parameter returns the job count for the specified
   *          message category.</p>
   *          <p>Example accepted strings include <code>AccessDenied</code>,
   *          <code>Success</code>, and <code>InvalidParameters</code>. See
   *          <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">Monitoring</a>
   *          for a list of accepted MessageCategory strings.</p>
   *          <p>The the value ANY returns count of all message categories.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *          for all message categories and returns the sum.</p>
   * @public
   */
  MessageCategory?: string | undefined;

  /**
   * <p>The period for the returned results.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ONE_DAY</code> - The daily job count for the prior 14 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SEVEN_DAYS</code> - The aggregated job count for the prior 7 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FOURTEEN_DAYS</code> - The aggregated job count for prior 14 days.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AggregationPeriod?: AggregationPeriod | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   *          <p>The value is an integer. Range of accepted values is from
   *          1 to 500.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>MaxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBackupJobSummariesOutput {
  /**
   * <p>The summary information.</p>
   * @public
   */
  BackupJobSummaries?: BackupJobSummary[] | undefined;

  /**
   * <p>The period for the returned results.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ONE_DAY</code> - The daily job count for the prior 14 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SEVEN_DAYS</code> - The aggregated job count for the prior 7 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FOURTEEN_DAYS</code> - The aggregated job count for prior 14 days.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AggregationPeriod?: string | undefined;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>MaxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBackupPlansInput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A Boolean value with a default value of <code>FALSE</code> that returns deleted backup
   *          plans when set to <code>TRUE</code>.</p>
   * @public
   */
  IncludeDeleted?: boolean | undefined;
}

/**
 * @public
 */
export interface ListBackupPlansOutput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the backup plans.</p>
   * @public
   */
  BackupPlansList?: BackupPlansListMember[] | undefined;
}

/**
 * @public
 */
export interface ListBackupPlanTemplatesInput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBackupPlanTemplatesOutput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of template list items containing metadata about your saved templates.</p>
   * @public
   */
  BackupPlanTemplatesList?: BackupPlanTemplatesListMember[] | undefined;
}

/**
 * @public
 */
export interface ListBackupPlanVersionsInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBackupPlanVersionsOutput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of version list items containing metadata about your backup plans.</p>
   * @public
   */
  BackupPlanVersionsList?: BackupPlansListMember[] | undefined;
}

/**
 * @public
 */
export interface ListBackupSelectionsInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBackupSelectionsOutput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of backup selection list items containing metadata about each resource in the
   *          list.</p>
   * @public
   */
  BackupSelectionsList?: BackupSelectionsListMember[] | undefined;
}

/**
 * @public
 */
export interface ListBackupVaultsInput {
  /**
   * <p>This parameter will sort the list of vaults by vault type.</p>
   * @public
   */
  ByVaultType?: VaultType | undefined;

  /**
   * <p>This parameter will sort the list of vaults by shared vaults.</p>
   * @public
   */
  ByShared?: boolean | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBackupVaultsOutput {
  /**
   * <p>An array of backup vault list members containing vault metadata, including Amazon
   *          Resource Name (ARN), display name, creation date, number of saved recovery points, and
   *          encryption information if the resources saved in the backup vault are encrypted.</p>
   * @public
   */
  BackupVaultList?: BackupVaultListMember[] | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCopyJobsInput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return MaxResults number of items, NextToken allows you to return more items in
   *          your list starting at the location pointed to by the next token. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Returns only copy jobs that match the specified resource Amazon Resource Name (ARN).
   *       </p>
   * @public
   */
  ByResourceArn?: string | undefined;

  /**
   * <p>Returns only copy jobs that are in the specified state.</p>
   * @public
   */
  ByState?: CopyJobState | undefined;

  /**
   * <p>Returns only copy jobs that were created before the specified date.</p>
   * @public
   */
  ByCreatedBefore?: Date | undefined;

  /**
   * <p>Returns only copy jobs that were created after the specified date.</p>
   * @public
   */
  ByCreatedAfter?: Date | undefined;

  /**
   * <p>Returns only backup jobs for the specified resources:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Aurora</code> for Amazon Aurora</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CloudFormation</code> for CloudFormation</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DynamoDB</code> for Amazon DynamoDB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EBS</code> for Amazon Elastic Block Store</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EC2</code> for Amazon Elastic Compute Cloud</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EFS</code> for Amazon Elastic File System</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FSx</code> for Amazon FSx</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Neptune</code> for Amazon Neptune</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Redshift</code> for Amazon Redshift</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon Simple Storage Service (Amazon S3)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAP HANA on Amazon EC2</code> for SAP HANA databases
   *             on Amazon Elastic Compute Cloud instances</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> for Storage Gateway</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Timestream</code> for Amazon Timestream</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VirtualMachine</code> for VMware virtual machines</p>
   *             </li>
   *          </ul>
   * @public
   */
  ByResourceType?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a source backup vault to copy
   *          from; for example, <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.
   *       </p>
   * @public
   */
  ByDestinationVaultArn?: string | undefined;

  /**
   * <p>The account ID to list the jobs from. Returns only copy jobs associated with the
   *          specified account ID.</p>
   * @public
   */
  ByAccountId?: string | undefined;

  /**
   * <p>Returns only copy jobs completed before a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   * @public
   */
  ByCompleteBefore?: Date | undefined;

  /**
   * <p>Returns only copy jobs completed after a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   * @public
   */
  ByCompleteAfter?: Date | undefined;

  /**
   * <p>This is a filter to list child (nested) jobs based on parent job ID.</p>
   * @public
   */
  ByParentJobId?: string | undefined;

  /**
   * <p>This is an optional parameter that can be used to
   *          filter out jobs with a MessageCategory which matches the
   *          value you input.</p>
   *          <p>Example strings may include <code>AccessDenied</code>,
   *          <code>SUCCESS</code>, <code>AGGREGATE_ALL</code>, and
   *          <code>INVALIDPARAMETERS</code>.</p>
   *          <p>View
   *          <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">Monitoring</a>
   *          for a list of accepted strings.</p>
   *          <p>The the value ANY returns count of all message categories.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *             for all message categories and returns the sum.</p>
   * @public
   */
  ByMessageCategory?: string | undefined;
}

/**
 * @public
 */
export interface ListCopyJobsOutput {
  /**
   * <p>An array of structures containing metadata about your copy jobs returned in JSON format.
   *       </p>
   * @public
   */
  CopyJobs?: CopyJob[] | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return MaxResults number of items, NextToken allows you to return more items in
   *          your list starting at the location pointed to by the next token. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCopyJobSummariesInput {
  /**
   * <p>Returns the job count for the specified account.</p>
   *          <p>If the request is sent from a member account or an account
   *          not part of Amazon Web Services Organizations, jobs within requestor's account
   *          will be returned.</p>
   *          <p>Root, admin, and delegated administrator accounts can use
   *          the value ANY to return job counts from every account in the
   *          organization.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *          from all accounts within the authenticated organization,
   *          then returns the sum.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>This parameter returns the job count for jobs
   *          with the specified state.</p>
   *          <p>The the value ANY returns count of all states.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *          for all states and returns the sum.</p>
   * @public
   */
  State?: CopyJobStatus | undefined;

  /**
   * <p>Returns the job count for the specified resource type.
   *          Use request <code>GetSupportedResourceTypes</code> to obtain
   *          strings for supported resource types.</p>
   *          <p>The the value ANY returns count of all resource types.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *          for all resource types and returns the sum.</p>
   *          <p>The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>This parameter returns the job count for the specified
   *          message category.</p>
   *          <p>Example accepted strings include <code>AccessDenied</code>,
   *          <code>Success</code>, and <code>InvalidParameters</code>. See
   *          <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">Monitoring</a>
   *          for a list of accepted MessageCategory strings.</p>
   *          <p>The the value ANY returns count of all message categories.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *          for all message categories and returns the sum.</p>
   * @public
   */
  MessageCategory?: string | undefined;

  /**
   * <p>The period for the returned results.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ONE_DAY</code> - The daily job count for the prior 14 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SEVEN_DAYS</code> - The aggregated job count for the prior 7 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FOURTEEN_DAYS</code> - The aggregated job count for prior 14 days.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AggregationPeriod?: AggregationPeriod | undefined;

  /**
   * <p>This parameter sets the maximum number of items
   *          to be returned.</p>
   *          <p>The value is an integer. Range of accepted values is from
   *          1 to 500.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>MaxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCopyJobSummariesOutput {
  /**
   * <p>This return shows a summary that contains
   *          Region, Account, State, ResourceType, MessageCategory,
   *          StartTime, EndTime, and Count of included jobs.</p>
   * @public
   */
  CopyJobSummaries?: CopyJobSummary[] | undefined;

  /**
   * <p>The period for the returned results.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ONE_DAY</code> - The daily job count for the prior 14 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SEVEN_DAYS</code> - The aggregated job count for the prior 7 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FOURTEEN_DAYS</code> - The aggregated job count for prior 14 days.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AggregationPeriod?: string | undefined;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>MaxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFrameworksInput {
  /**
   * <p>The number of desired results from 1 to 1000. Optional. If unspecified, the query will
   *          return 1 MB of data.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains detailed information about a framework. Frameworks contain controls, which
 *          evaluate and report on your backup events and resources. Frameworks generate daily
 *          compliance results.</p>
 * @public
 */
export interface Framework {
  /**
   * <p>The unique name of a framework. This name is between 1 and 256 characters, starting with
   *          a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).</p>
   * @public
   */
  FrameworkName?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   * @public
   */
  FrameworkArn?: string | undefined;

  /**
   * <p>An optional description of the framework with a maximum 1,024 characters.</p>
   * @public
   */
  FrameworkDescription?: string | undefined;

  /**
   * <p>The number of controls contained by the framework.</p>
   * @public
   */
  NumberOfControls?: number | undefined;

  /**
   * <p>The date and time that a framework is created, in ISO 8601 representation.
   *          The value of <code>CreationTime</code> is accurate to milliseconds. For example,
   *           2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind
   *           UTC.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The deployment status of a framework. The statuses are:</p>
   *          <p>
   *             <code>CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED |
   *             FAILED</code>
   *          </p>
   * @public
   */
  DeploymentStatus?: string | undefined;
}

/**
 * @public
 */
export interface ListFrameworksOutput {
  /**
   * <p>The frameworks with details for each framework, including the framework name,
   *          Amazon Resource Name (ARN), description, number of controls, creation time, and deployment
   *          status.</p>
   * @public
   */
  Frameworks?: Framework[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIndexedRecoveryPointsInput {
  /**
   * <p>The next item following a partial list of returned recovery points.</p>
   *          <p>For example, if a request
   *          is made to return <code>MaxResults</code> number of indexed recovery points, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of resource list items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string of the  Amazon Resource Name (ARN) that uniquely identifies
   *          the source resource.</p>
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * <p>Returns only indexed recovery points that were created before the
   *          specified date.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>Returns only indexed recovery points that were created after the
   *          specified date.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>Returns a list of indexed recovery points for the specified
   *          resource type(s).</p>
   *          <p>Accepted values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EBS</code> for Amazon Elastic Block Store</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon Simple Storage Service (Amazon S3)</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>Include this parameter to filter the returned list by
   *          the indicated statuses.</p>
   *          <p>Accepted values: <code>PENDING</code> | <code>ACTIVE</code> | <code>FAILED</code> | <code>DELETING</code>
   *          </p>
   *          <p>A recovery point with an index that has the status of <code>ACTIVE</code>
   *          can be included in a search.</p>
   * @public
   */
  IndexStatus?: IndexStatus | undefined;
}

/**
 * <p>This is a recovery point that has an associated backup index.</p>
 *          <p>Only recovery points with a backup index can be
 *          included in a search.</p>
 * @public
 */
export interface IndexedRecoveryPoint {
  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>
   *          </p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>A string of the  Amazon Resource Name (ARN) that uniquely identifies
   *          the source resource.</p>
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * <p>This specifies the IAM role ARN used for this operation.</p>
   *          <p>For example, arn:aws:iam::123456789012:role/S3Access</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The date and time that a backup was created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  BackupCreationDate?: Date | undefined;

  /**
   * <p>The resource type of the indexed recovery point.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EBS</code> for Amazon Elastic Block Store</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon Simple Storage Service (Amazon S3)</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The date and time that a backup index was created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  IndexCreationDate?: Date | undefined;

  /**
   * <p>This is the current status for the backup index associated
   *          with the specified recovery point.</p>
   *          <p>Statuses are: <code>PENDING</code> | <code>ACTIVE</code> | <code>FAILED</code> | <code>DELETING</code>
   *          </p>
   *          <p>A recovery point with an index that has the status of <code>ACTIVE</code>
   *          can be included in a search.</p>
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * <p>A string in the form of a detailed message explaining the status of a backup index associated
   *          with the recovery point.</p>
   * @public
   */
  IndexStatusMessage?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies the backup vault where the recovery
   *          point index is stored.</p>
   *          <p>For example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;
}

/**
 * @public
 */
export interface ListIndexedRecoveryPointsOutput {
  /**
   * <p>This is a list of recovery points that have an
   *          associated index, belonging to the specified account.</p>
   * @public
   */
  IndexedRecoveryPoints?: IndexedRecoveryPoint[] | undefined;

  /**
   * <p>The next item following a partial list of returned recovery points.</p>
   *          <p>For example, if a request
   *          is made to return <code>MaxResults</code> number of indexed recovery points, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLegalHoldsInput {
  /**
   * <p>The next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>MaxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of resource list items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A legal hold is an administrative tool that helps prevent backups
 *          from being deleted while under a hold. While the hold is in place,
 *          backups under a hold cannot be deleted and lifecycle policies that
 *          would alter the backup status (such as transition to cold storage) are
 *          delayed until the legal hold is removed. A backup can have more than
 *          one legal hold. Legal holds are applied to one or more backups
 *          (also known as recovery points). These backups can be filtered by resource
 *          types and by resource IDs.</p>
 * @public
 */
export interface LegalHold {
  /**
   * <p>The title of a legal hold.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The status of the legal hold.</p>
   * @public
   */
  Status?: LegalHoldStatus | undefined;

  /**
   * <p>The description of a legal hold.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the legal hold.</p>
   * @public
   */
  LegalHoldId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the legal hold; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  LegalHoldArn?: string | undefined;

  /**
   * <p>The time when the legal hold was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The time when the legal hold was cancelled.</p>
   * @public
   */
  CancellationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListLegalHoldsOutput {
  /**
   * <p>The next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>MaxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>This is an array of returned legal holds, both active and previous.</p>
   * @public
   */
  LegalHolds?: LegalHold[] | undefined;
}

/**
 * @public
 */
export interface ListProtectedResourcesInput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A structure that contains information about a backed-up resource.</p>
 * @public
 */
export interface ProtectedResource {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The type of Amazon Web Services resource; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For
   *          Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is
   *             Amazon EC2.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The date and time a resource was last backed up, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>LastBackupTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  LastBackupTime?: Date | undefined;

  /**
   * <p>The non-unique name of the resource that
   *          belongs to the specified backup.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the backup vault
   *          that contains the most recent backup recovery point.</p>
   * @public
   */
  LastBackupVaultArn?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the most
   *          recent recovery point.</p>
   * @public
   */
  LastRecoveryPointArn?: string | undefined;
}

/**
 * @public
 */
export interface ListProtectedResourcesOutput {
  /**
   * <p>An array of resources successfully backed up by Backup including the time
   *          the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource
   *          type.</p>
   * @public
   */
  Results?: ProtectedResource[] | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProtectedResourcesByBackupVaultInput {
  /**
   * <p>The list of protected resources by backup vault within the vault(s) you specify by name.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The list of protected resources by backup vault within the vault(s) you specify by account ID.</p>
   * @public
   */
  BackupVaultAccountId?: string | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListProtectedResourcesByBackupVaultOutput {
  /**
   * <p>These are the results returned for the request ListProtectedResourcesByBackupVault.</p>
   * @public
   */
  Results?: ProtectedResource[] | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsByBackupVaultInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   *          <note>
   *             <p>Backup vault name might not be available when a supported service creates the
   *             backup.</p>
   *          </note>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>This parameter will sort the list of recovery points by account ID.</p>
   * @public
   */
  BackupVaultAccountId?: string | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Returns only recovery points that match the specified resource Amazon Resource Name
   *          (ARN).</p>
   * @public
   */
  ByResourceArn?: string | undefined;

  /**
   * <p>Returns only recovery points that match the specified resource type(s):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Aurora</code> for Amazon Aurora</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CloudFormation</code> for CloudFormation</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DynamoDB</code> for Amazon DynamoDB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EBS</code> for Amazon Elastic Block Store</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EC2</code> for Amazon Elastic Compute Cloud</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EFS</code> for Amazon Elastic File System</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FSx</code> for Amazon FSx</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Neptune</code> for Amazon Neptune</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Redshift</code> for Amazon Redshift</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon Simple Storage Service (Amazon S3)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAP HANA on Amazon EC2</code> for SAP HANA databases
   *             on Amazon Elastic Compute Cloud instances</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> for Storage Gateway</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Timestream</code> for Amazon Timestream</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VirtualMachine</code> for VMware virtual machines</p>
   *             </li>
   *          </ul>
   * @public
   */
  ByResourceType?: string | undefined;

  /**
   * <p>Returns only recovery points that match the specified backup plan ID.</p>
   * @public
   */
  ByBackupPlanId?: string | undefined;

  /**
   * <p>Returns only recovery points that were created before the specified timestamp.</p>
   * @public
   */
  ByCreatedBefore?: Date | undefined;

  /**
   * <p>Returns only recovery points that were created after the specified timestamp.</p>
   * @public
   */
  ByCreatedAfter?: Date | undefined;

  /**
   * <p>This returns only recovery points that match the specified parent (composite)
   *          recovery point Amazon Resource Name (ARN).</p>
   * @public
   */
  ByParentRecoveryPointArn?: string | undefined;
}

/**
 * <p>Contains detailed information about the recovery points stored in a backup vault.</p>
 * @public
 */
export interface RecoveryPointByBackupVault {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>The backup vault where the recovery point was originally copied from. If the recovery
   *          point is restored to the same account this value will be <code>null</code>.</p>
   * @public
   */
  SourceBackupVaultArn?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The type of Amazon Web Services resource saved as a recovery point; for example, an
   *             Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only
   *          supported resource type is Amazon EC2.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>Contains identifying information about the creation of a recovery point, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan that is used to create it.</p>
   * @public
   */
  CreatedBy?: RecoveryPointCreator | undefined;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>A status code specifying the state of the recovery point.</p>
   * @public
   */
  Status?: RecoveryPointStatus | undefined;

  /**
   * <p>A message explaining the current status of the recovery point.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The date and time a recovery point is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date and time when the backup job that created this recovery point was initiated, in
   *          Unix format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  InitiationDate?: Date | undefined;

  /**
   * <p>The date and time a job to restore a recovery point is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * <p>The size, in bytes, of a backup.</p>
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and
   *             <code>MoveToColdStorageAt</code> timestamps.</p>
   * @public
   */
  CalculatedLifecycle?: CalculatedLifecycle | undefined;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup transitions and expires backups automatically according to
   *          the lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
   *          cold after days” setting. The “transition to cold after days” setting cannot be changed
   *          after a backup has been transitioned to cold. </p>
   *          <p>Resource types that can transition to cold storage are listed in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature
   *          availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   * @public
   */
  Lifecycle?: Lifecycle | undefined;

  /**
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>A Boolean value that is returned as <code>TRUE</code> if the specified recovery point is
   *          encrypted, or <code>FALSE</code> if the recovery point is not encrypted.</p>
   * @public
   */
  IsEncrypted?: boolean | undefined;

  /**
   * <p>The date and time a recovery point was last restored, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>LastRestoreTime</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  LastRestoreTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the parent (composite)
   *          recovery point.</p>
   * @public
   */
  ParentRecoveryPointArn?: string | undefined;

  /**
   * <p>The identifier of a resource within a composite group, such as
   *          nested (child) recovery point belonging to a composite (parent) stack. The
   *          ID is transferred from
   *          the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax">
   *             logical ID</a> within a stack.</p>
   * @public
   */
  CompositeMemberIdentifier?: string | undefined;

  /**
   * <p>This is a boolean value indicating this is
   *          a parent (composite) recovery point.</p>
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * <p>The non-unique name of the resource that
   *          belongs to the specified backup.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The type of vault in which the described recovery point is stored.</p>
   * @public
   */
  VaultType?: VaultType | undefined;

  /**
   * <p>This is the current status for the backup index associated
   *          with the specified recovery point.</p>
   *          <p>Statuses are: <code>PENDING</code> | <code>ACTIVE</code> | <code>FAILED</code> |
   *          <code>DELETING</code>
   *          </p>
   *          <p>A recovery point with an index that has the status of <code>ACTIVE</code>
   *          can be included in a search.</p>
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * <p>A string in the form of a detailed message explaining the status of a backup index associated
   *          with the recovery point.</p>
   * @public
   */
  IndexStatusMessage?: string | undefined;

  /**
   * <p>The type of encryption key used for the recovery point. Valid values are CUSTOMER_MANAGED_KMS_KEY for customer-managed keys or Amazon Web Services_OWNED_KMS_KEY for Amazon Web Services-owned keys.</p>
   * @public
   */
  EncryptionKeyType?: EncryptionKeyType | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsByBackupVaultOutput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of objects that contain detailed information about recovery points saved in a
   *          backup vault.</p>
   * @public
   */
  RecoveryPoints?: RecoveryPointByBackupVault[] | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsByLegalHoldInput {
  /**
   * <p>The ID of the legal hold.</p>
   * @public
   */
  LegalHoldId: string | undefined;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>MaxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of resource list items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>This is a recovery point which is a child (nested) recovery point
 *          of a parent (composite) recovery point. These recovery points
 *          can be disassociated from their parent (composite) recovery
 *          point, in which case they will no longer be a member.</p>
 * @public
 */
export interface RecoveryPointMember {
  /**
   * <p>The Amazon Resource Name (ARN) of the parent (composite)
   *          recovery point.</p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies
   *          a saved resource.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The Amazon Web Services resource type that is saved as
   *       a recovery point.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The name of the backup vault
   *          (the logical container in which backups are stored).</p>
   * @public
   */
  BackupVaultName?: string | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsByLegalHoldOutput {
  /**
   * <p>The recovery points.</p>
   * @public
   */
  RecoveryPoints?: RecoveryPointMember[] | undefined;

  /**
   * <p>The next item following a partial list of returned resources.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsByResourceInput {
  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   *          <note>
   *             <p>Amazon RDS requires a value of at least 20.</p>
   *          </note>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>This attribute filters recovery points based on ownership.</p>
   *          <p>If this is
   *          set to <code>TRUE</code>, the response will contain recovery points associated
   *          with the selected resources that are managed by Backup.</p>
   *          <p>If this is set to <code>FALSE</code>, the response will contain all
   *          recovery points associated with the selected resource.</p>
   *          <p>Type: Boolean</p>
   * @public
   */
  ManagedByAWSBackupOnly?: boolean | undefined;
}

/**
 * <p>Contains detailed information about a saved recovery point.</p>
 * @public
 */
export interface RecoveryPointByResource {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>The date and time a recovery point is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>A status code specifying the state of the recovery point.</p>
   * @public
   */
  Status?: RecoveryPointStatus | undefined;

  /**
   * <p>A message explaining the current status of the recovery point.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>The size, in bytes, of a backup.</p>
   * @public
   */
  BackupSizeBytes?: number | undefined;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>This is a boolean value indicating this is
   *          a parent (composite) recovery point.</p>
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the parent (composite)
   *          recovery point.</p>
   * @public
   */
  ParentRecoveryPointArn?: string | undefined;

  /**
   * <p>The non-unique name of the resource that
   *          belongs to the specified backup.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The type of vault in which the described recovery point is
   *          stored.</p>
   * @public
   */
  VaultType?: VaultType | undefined;

  /**
   * <p>This is the current status for the backup index associated
   *          with the specified recovery point.</p>
   *          <p>Statuses are: <code>PENDING</code> | <code>ACTIVE</code> | <code>FAILED</code> | <code>DELETING</code>
   *          </p>
   *          <p>A recovery point with an index that has the status of <code>ACTIVE</code>
   *          can be included in a search.</p>
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * <p>A string in the form of a detailed message explaining the status of a backup index
   *          associated with the recovery point.</p>
   * @public
   */
  IndexStatusMessage?: string | undefined;

  /**
   * <p>The type of encryption key used for the recovery point. Valid values are CUSTOMER_MANAGED_KMS_KEY for customer-managed keys or Amazon Web Services_OWNED_KMS_KEY for Amazon Web Services-owned keys.</p>
   * @public
   */
  EncryptionKeyType?: EncryptionKeyType | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsByResourceOutput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of objects that contain detailed information about recovery points of the
   *          specified resource type.</p>
   *          <note>
   *             <p>Only Amazon EFS and Amazon EC2 recovery points return
   *             BackupVaultName.</p>
   *          </note>
   * @public
   */
  RecoveryPoints?: RecoveryPointByResource[] | undefined;
}

/**
 * @public
 */
export interface ListReportJobsInput {
  /**
   * <p>Returns only report jobs with the specified report plan name.</p>
   * @public
   */
  ByReportPlanName?: string | undefined;

  /**
   * <p>Returns only report jobs that were created before the date and time specified in Unix
   *          format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents
   *          Friday, January 26, 2018 12:11:30 AM.</p>
   * @public
   */
  ByCreationBefore?: Date | undefined;

  /**
   * <p>Returns only report jobs that were created after the date and time specified in Unix
   *          format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents
   *          Friday, January 26, 2018 12:11:30 AM.</p>
   * @public
   */
  ByCreationAfter?: Date | undefined;

  /**
   * <p>Returns only report jobs that are in the specified status. The statuses are:</p>
   *          <p>
   *             <code>CREATED | RUNNING | COMPLETED | FAILED</code>
   *          </p>
   * @public
   */
  ByStatus?: string | undefined;

  /**
   * <p>The number of desired results from 1 to 1000. Optional. If unspecified, the query will
   *          return 1 MB of data.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportJobsOutput {
  /**
   * <p>Details about your report jobs in JSON format.</p>
   * @public
   */
  ReportJobs?: ReportJob[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportPlansInput {
  /**
   * <p>The number of desired results from 1 to 1000. Optional. If unspecified, the query will
   *          return 1 MB of data.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportPlansOutput {
  /**
   * <p>The report plans with detailed information for each plan. This information
   *          includes the Amazon Resource Name (ARN), report plan name, description, settings, delivery
   *          channel, deployment status, creation time, and last times the report plan attempted to and
   *          successfully ran.</p>
   * @public
   */
  ReportPlans?: ReportPlan[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRestoreAccessBackupVaultsInput {
  /**
   * <p>The name of the backup vault for which to list associated restore access backup vaults.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The pagination token from a previous request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const MpaRevokeSessionStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type MpaRevokeSessionStatus = (typeof MpaRevokeSessionStatus)[keyof typeof MpaRevokeSessionStatus];

/**
 * <p>Contains information about the latest request to revoke access to a backup vault.</p>
 * @public
 */
export interface LatestRevokeRequest {
  /**
   * <p>The ARN of the MPA session associated with this revoke request.</p>
   * @public
   */
  MpaSessionArn?: string | undefined;

  /**
   * <p>The current status of the revoke request.</p>
   * @public
   */
  Status?: MpaRevokeSessionStatus | undefined;

  /**
   * <p>A message describing the current status of the revoke request.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The date and time when the revoke request was initiated.</p>
   * @public
   */
  InitiationDate?: Date | undefined;

  /**
   * <p>The date and time when the revoke request will expire.</p>
   * @public
   */
  ExpiryDate?: Date | undefined;
}

/**
 * <p>Contains information about a restore access backup vault.</p>
 * @public
 */
export interface RestoreAccessBackupVaultListMember {
  /**
   * <p>The ARN of the restore access backup vault.</p>
   * @public
   */
  RestoreAccessBackupVaultArn?: string | undefined;

  /**
   * <p>The date and time when the restore access backup vault was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date and time when the restore access backup vault was approved.</p>
   * @public
   */
  ApprovalDate?: Date | undefined;

  /**
   * <p>The current state of the restore access backup vault.</p>
   * @public
   */
  VaultState?: VaultState | undefined;

  /**
   * <p>Information about the latest request to revoke access to this backup vault.</p>
   * @public
   */
  LatestRevokeRequest?: LatestRevokeRequest | undefined;
}

/**
 * @public
 */
export interface ListRestoreAccessBackupVaultsOutput {
  /**
   * <p>The pagination token to use in a subsequent request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of restore access backup vaults associated with the specified backup vault.</p>
   * @public
   */
  RestoreAccessBackupVaults?: RestoreAccessBackupVaultListMember[] | undefined;
}

/**
 * @public
 */
export interface ListRestoreJobsInput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The account ID to list the jobs from. Returns only restore jobs associated with the
   *          specified account ID.</p>
   * @public
   */
  ByAccountId?: string | undefined;

  /**
   * <p>Include this parameter to return only restore jobs for the specified resources:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Aurora</code> for Amazon Aurora</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CloudFormation</code> for CloudFormation</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DynamoDB</code> for Amazon DynamoDB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EBS</code> for Amazon Elastic Block Store</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EC2</code> for Amazon Elastic Compute Cloud</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EFS</code> for Amazon Elastic File System</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FSx</code> for Amazon FSx</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Neptune</code> for Amazon Neptune</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Redshift</code> for Amazon Redshift</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon Simple Storage Service (Amazon S3)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAP HANA on Amazon EC2</code> for SAP HANA databases
   *             on Amazon Elastic Compute Cloud instances</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> for Storage Gateway</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Timestream</code> for Amazon Timestream</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VirtualMachine</code> for VMware virtual machines</p>
   *             </li>
   *          </ul>
   * @public
   */
  ByResourceType?: string | undefined;

  /**
   * <p>Returns only restore jobs that were created before the specified date.</p>
   * @public
   */
  ByCreatedBefore?: Date | undefined;

  /**
   * <p>Returns only restore jobs that were created after the specified date.</p>
   * @public
   */
  ByCreatedAfter?: Date | undefined;

  /**
   * <p>Returns only restore jobs associated with the specified job status.</p>
   * @public
   */
  ByStatus?: RestoreJobStatus | undefined;

  /**
   * <p>Returns only copy jobs completed before a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   * @public
   */
  ByCompleteBefore?: Date | undefined;

  /**
   * <p>Returns only copy jobs completed after a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   * @public
   */
  ByCompleteAfter?: Date | undefined;

  /**
   * <p>This returns only restore testing jobs that match the
   *          specified resource Amazon Resource Name (ARN).</p>
   * @public
   */
  ByRestoreTestingPlanArn?: string | undefined;

  /**
   * <p>This is a filter to list child (nested) restore jobs based on parent restore job ID.</p>
   * @public
   */
  ByParentJobId?: string | undefined;
}

/**
 * <p>Contains metadata about a restore job.</p>
 * @public
 */
export interface RestoreJobsListMember {
  /**
   * <p>The account ID that owns the restore job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   * @public
   */
  RestoreJobId?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the original resource that was backed up. This provides context about what resource is being restored.</p>
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the backup vault containing the recovery point being restored. This helps identify vault access policies and permissions.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>The date and time a restore job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date and time a job to restore a recovery point is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * <p>A status code specifying the state of the job initiated by Backup to restore
   *          a recovery point.</p>
   * @public
   */
  Status?: RestoreJobStatus | undefined;

  /**
   * <p>A detailed message explaining the status of the job to restore a recovery point.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Contains an estimated percentage complete of a job at the time the job status was
   *          queried.</p>
   * @public
   */
  PercentDone?: string | undefined;

  /**
   * <p>The size, in bytes, of the restored resource.</p>
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * <p>The IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The amount of time in minutes that a job restoring a recovery point is expected to
   *          take.</p>
   * @public
   */
  ExpectedCompletionTimeMinutes?: number | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   * @public
   */
  CreatedResourceArn?: string | undefined;

  /**
   * <p>The resource type of the listed restore jobs; for example, an Amazon Elastic Block Store
   *             (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
   *          For Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is
   *             Amazon EC2.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The date on which a recovery point was created.</p>
   * @public
   */
  RecoveryPointCreationDate?: Date | undefined;

  /**
   * <p>This is a boolean value indicating whether the restore job is a parent (composite) restore job.</p>
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * <p>This is the unique identifier of the parent restore job for the selected restore job.</p>
   * @public
   */
  ParentJobId?: string | undefined;

  /**
   * <p>Contains identifying information about the creation
   *          of a restore job.</p>
   * @public
   */
  CreatedBy?: RestoreJobCreator | undefined;

  /**
   * <p>The status of validation run on the indicated
   *          restore job.</p>
   * @public
   */
  ValidationStatus?: RestoreValidationStatus | undefined;

  /**
   * <p>This describes the status of validation run on the
   *          indicated restore job.</p>
   * @public
   */
  ValidationStatusMessage?: string | undefined;

  /**
   * <p>This notes the status of the data generated by the restore
   *          test. The status may be <code>Deleting</code>, <code>Failed</code>,
   *          or <code>Successful</code>.</p>
   * @public
   */
  DeletionStatus?: RestoreDeletionStatus | undefined;

  /**
   * <p>This describes the restore job deletion status.</p>
   * @public
   */
  DeletionStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListRestoreJobsOutput {
  /**
   * <p>An array of objects that contain detailed information about jobs to restore saved
   *          resources.</p>
   * @public
   */
  RestoreJobs?: RestoreJobsListMember[] | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRestoreJobsByProtectedResourceInput {
  /**
   * <p>Returns only restore jobs that match the specified resource
   *          Amazon Resource Name (ARN).</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Returns only restore jobs associated with the specified job status.</p>
   * @public
   */
  ByStatus?: RestoreJobStatus | undefined;

  /**
   * <p>Returns only restore jobs of recovery points that were created after the specified date.</p>
   * @public
   */
  ByRecoveryPointCreationDateAfter?: Date | undefined;

  /**
   * <p>Returns only restore jobs of recovery points that were created before the specified date.</p>
   * @public
   */
  ByRecoveryPointCreationDateBefore?: Date | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example,
   *          if a request ismade to return <code>MaxResults</code> number of items,
   *          <code>NextToken</code> allows you to return more items in your list
   *          starting at the location pointed to by the next token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRestoreJobsByProtectedResourceOutput {
  /**
   * <p>An array of objects that contain detailed information about
   *          jobs to restore saved resources.></p>
   * @public
   */
  RestoreJobs?: RestoreJobsListMember[] | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example,
   *          if a request is made to return <code>MaxResults</code> number of items,
   *          <code>NextToken</code> allows youto return more items in your list starting
   *          at the location pointed to by the next token</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RestoreJobState = {
  ABORTED: "ABORTED",
  AGGREGATE_ALL: "AGGREGATE_ALL",
  ANY: "ANY",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type RestoreJobState = (typeof RestoreJobState)[keyof typeof RestoreJobState];

/**
 * @public
 */
export interface ListRestoreJobSummariesInput {
  /**
   * <p>Returns the job count for the specified account.</p>
   *          <p>If the request is sent from a member account or an account
   *          not part of Amazon Web Services Organizations, jobs within requestor's account
   *          will be returned.</p>
   *          <p>Root, admin, and delegated administrator accounts can use
   *          the value ANY to return job counts from every account in the
   *          organization.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *          from all accounts within the authenticated organization,
   *          then returns the sum.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>This parameter returns the job count for jobs
   *          with the specified state.</p>
   *          <p>The the value ANY returns count of all states.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *          for all states and returns the sum.</p>
   * @public
   */
  State?: RestoreJobState | undefined;

  /**
   * <p>Returns the job count for the specified resource type.
   *          Use request <code>GetSupportedResourceTypes</code> to obtain
   *          strings for supported resource types.</p>
   *          <p>The the value ANY returns count of all resource types.</p>
   *          <p>
   *             <code>AGGREGATE_ALL</code> aggregates job counts
   *          for all resource types and returns the sum.</p>
   *          <p>The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The period for the returned results.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ONE_DAY</code> - The daily job count for the prior 14 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SEVEN_DAYS</code> - The aggregated job count for the prior 7 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FOURTEEN_DAYS</code> - The aggregated job count for prior 14 days.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AggregationPeriod?: AggregationPeriod | undefined;

  /**
   * <p>This parameter sets the maximum number of items
   *          to be returned.</p>
   *          <p>The value is an integer. Range of accepted values is from
   *          1 to 500.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>MaxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>This is a summary of restore jobs created
 *          or running within the most recent 30 days.</p>
 *          <p>The returned summary may contain the following:
 *          Region, Account, State, ResourceType, MessageCategory,
 *          StartTime, EndTime, and Count of included jobs.</p>
 * @public
 */
export interface RestoreJobSummary {
  /**
   * <p>The Amazon Web Services Regions within the job summary.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The account ID that owns the jobs within the summary.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>This value is job count for jobs
   *          with the specified state.</p>
   * @public
   */
  State?: RestoreJobState | undefined;

  /**
   * <p>This value is the job count for the specified resource type.
   *          The request <code>GetSupportedResourceTypes</code> returns
   *          strings for supported resource types.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The value as a number of jobs in a job summary.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The value of time in number format of a job start time.</p>
   *          <p>This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The value of time in number format of a job end time.</p>
   *          <p>This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListRestoreJobSummariesOutput {
  /**
   * <p>This return contains a summary that contains
   *          Region, Account, State, ResourceType, MessageCategory,
   *          StartTime, EndTime, and Count of included jobs.</p>
   * @public
   */
  RestoreJobSummaries?: RestoreJobSummary[] | undefined;

  /**
   * <p>The period for the returned results.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ONE_DAY</code> - The daily job count for the prior 14 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SEVEN_DAYS</code> - The aggregated job count for the prior 7 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FOURTEEN_DAYS</code> - The aggregated job count for prior 14 days.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AggregationPeriod?: string | undefined;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>MaxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRestoreTestingPlansInput {
  /**
   * <p>The maximum number of items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The next item following a partial list of returned items.
   *          For example, if a request is made to return <code>MaxResults</code>
   *          number of items, <code>NextToken</code> allows you to return more items
   *          in your list starting at the location pointed to by the nexttoken.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>This contains metadata about a restore testing plan.</p>
 * @public
 */
export interface RestoreTestingPlanForList {
  /**
   * <p>The date and time that a restore testing plan was created,
   *          in Unix format and Coordinated Universal Time (UTC). The value
   *          of <code>CreationTime</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26,
   *          2018 12:11:30.087 AM.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The last time a restore test was run with the specified
   *          restore testing plan. A date and time, in Unix format and
   *          Coordinated Universal Time (UTC). The value of
   *          <code>LastExecutionDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday,
   *          January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  LastExecutionTime?: Date | undefined;

  /**
   * <p>The date and time that the restore testing plan was updated.
   *          This update is in Unix format and Coordinated Universal Time (UTC).
   *          The value of <code>LastUpdateTime</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents
   *          Friday, January 26, 2018 12:11:30.087 AM.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifiesa
   *          restore testing plan.</p>
   * @public
   */
  RestoreTestingPlanArn: string | undefined;

  /**
   * <p>The restore testing plan name.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * <p>A CRON expression in specified timezone when a restore testing plan is executed. When no
   *          CRON expression is provided, Backup will use the default expression
   *             <code>cron(0 5 ? * * *)</code>.</p>
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * <p>Optional. This is the timezone in which the schedule
   *          expression is set. By default, ScheduleExpressions are in UTC.
   *          You can modify this to a specified timezone.</p>
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * <p>Defaults to 24 hours.</p>
   *          <p>A value in hours after a restore test is scheduled before
   *             a job will be canceled if it doesn't start successfully. This
   *             value is optional. If this value is included, this parameter
   *             has a maximum value of 168 hours (one week).</p>
   * @public
   */
  StartWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface ListRestoreTestingPlansOutput {
  /**
   * <p>The next item following a partial list of returned items.
   *          For example, if a request is made to return <code>MaxResults</code>
   *          number of items, <code>NextToken</code> allows you to return more items
   *          in your list starting at the location pointed to by the nexttoken.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>This is a returned list of restore testing plans.</p>
   * @public
   */
  RestoreTestingPlans: RestoreTestingPlanForList[] | undefined;
}

/**
 * @public
 */
export interface ListRestoreTestingSelectionsInput {
  /**
   * <p>The maximum number of items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The next item following a partial list of returned items.
   *          For example, if a request is made to return <code>MaxResults</code>
   *          number of items, <code>NextToken</code> allows you to return more items
   *          in your list starting at the location pointed to by the nexttoken.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Returns restore testing selections by the specified restore testing
   *          plan name.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;
}

/**
 * <p>This contains metadata about a restore testing selection.</p>
 * @public
 */
export interface RestoreTestingSelectionForList {
  /**
   * <p>The date and time that a restore testing selection
   *          was created, in Unix format and Coordinated Universal Time (UTC).
   *          The value of <code>CreationTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday,
   *          January 26,2018 12:11:30.087 AM.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *          Backup uses to create the target resource; for example:
   *          <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The type of Amazon Web Services resource included in a restore
   *          testing selection; for example, an
   *          Amazon EBS volume or an
   *          Amazon RDS database.</p>
   * @public
   */
  ProtectedResourceType: string | undefined;

  /**
   * <p>Unique string that is the name of the restore testing plan.</p>
   *          <p>The name cannot be changed after creation. The name must
   *          consist of only alphanumeric characters and underscores.
   *          Maximum length is 50.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * <p>Unique name of a restore testing selection.</p>
   *          <p>The name consists of only alphanumeric characters and underscores.
   *          Maximum length is 50.</p>
   * @public
   */
  RestoreTestingSelectionName: string | undefined;

  /**
   * <p>This value represents the time, in hours, data is retained after
   *          a restore test so that optional validation can be completed.</p>
   *          <p>Accepted value is an integer between
   *          0 and 168 (the hourly equivalent of seven days).</p>
   * @public
   */
  ValidationWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface ListRestoreTestingSelectionsOutput {
  /**
   * <p>The next item following a partial list of returned items. For example,
   *          if a request is made to return <code>MaxResults</code> number of items,
   *          <code>NextToken</code> allows you to return more items in your list
   *          starting at the location pointed to by the nexttoken.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The returned restore testing selections associated with the
   *          restore testing plan.</p>
   * @public
   */
  RestoreTestingSelections: RestoreTestingSelectionForList[] | undefined;
}

/**
 * @public
 */
export interface ListTagsInput {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the type of resource. Valid targets for <code>ListTags</code> are recovery
   *          points, backup plans, and backup vaults.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsOutput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>MaxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutBackupVaultAccessPolicyInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The backup vault access policy document in JSON format.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface PutBackupVaultLockConfigurationInput {
  /**
   * <p>The Backup Vault Lock configuration that specifies the name of the backup
   *          vault it protects.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The Backup Vault Lock configuration that specifies the minimum retention
   *          period that the vault retains its recovery points. This setting can be useful if, for
   *          example, your organization's policies require you to retain certain data for at least seven
   *          years (2555 days).</p>
   *          <p>This parameter is required when a vault lock is created through CloudFormation;
   *          otherwise, this parameter is optional. If this parameter is not specified, Vault Lock will
   *          not enforce a minimum retention period.</p>
   *          <p>If this parameter is specified, any backup or copy job to the vault must have a
   *          lifecycle policy with a retention period equal to or longer than the minimum retention
   *          period. If the job's retention period is shorter than that minimum retention period, then
   *          the vault fails that backup or copy job, and you should either modify your lifecycle
   *          settings or use a different vault. The shortest minimum retention period
   *          you can specify is 1 day. Recovery points already saved in the vault prior to
   *          Vault Lock are not affected.</p>
   * @public
   */
  MinRetentionDays?: number | undefined;

  /**
   * <p>The Backup Vault Lock configuration that specifies the maximum retention
   *          period that the vault retains its recovery points. This setting can be useful if, for
   *          example, your organization's policies require you to destroy certain data after retaining
   *          it for four years (1460 days).</p>
   *          <p>If this parameter is not included, Vault Lock does not enforce a maximum retention
   *          period on the recovery points in the vault. If this parameter is included without a value,
   *          Vault Lock will not enforce a maximum retention period.</p>
   *          <p>If this parameter is specified, any backup or copy job to the vault must have a
   *          lifecycle policy with a retention period equal to or shorter than the maximum retention
   *          period. If the job's retention period is longer than that maximum retention period, then
   *          the vault fails the backup or copy job, and you should either modify your lifecycle
   *          settings or use a different vault. The longest maximum retention period
   *          you can specify is 36500 days (approximately 100 years).
   *          Recovery points already saved in the vault prior to
   *          Vault Lock are not affected.</p>
   * @public
   */
  MaxRetentionDays?: number | undefined;

  /**
   * <p>The Backup Vault Lock configuration that specifies the number of days before
   *          the lock date. For example, setting <code>ChangeableForDays</code> to 30 on Jan. 1, 2022 at
   *          8pm UTC will set the lock date to Jan. 31, 2022 at 8pm UTC.</p>
   *          <p>Backup enforces a 72-hour cooling-off period before Vault Lock takes effect
   *          and becomes immutable. Therefore, you must set <code>ChangeableForDays</code> to 3 or
   *          greater.</p>
   *          <p>Before the lock date, you can delete Vault Lock from the vault using
   *             <code>DeleteBackupVaultLockConfiguration</code> or change the Vault Lock configuration
   *          using <code>PutBackupVaultLockConfiguration</code>. On and after the lock date, the Vault
   *          Lock becomes immutable and cannot be changed or deleted.</p>
   *          <p>If this parameter is not specified, you can delete Vault Lock from the vault using
   *             <code>DeleteBackupVaultLockConfiguration</code> or change the Vault Lock configuration
   *          using <code>PutBackupVaultLockConfiguration</code> at any time.</p>
   * @public
   */
  ChangeableForDays?: number | undefined;
}

/**
 * @public
 */
export interface PutBackupVaultNotificationsInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for
   *          example, <code>arn:aws:sns:us-west-2:111122223333:MyVaultTopic</code>.</p>
   * @public
   */
  SNSTopicArn: string | undefined;

  /**
   * <p>An array of events that indicate the status of jobs to back up resources to the backup
   *          vault. For the list of supported events, common use cases, and code samples, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-notifications.html">Notification options
   *             with Backup</a>.</p>
   * @public
   */
  BackupVaultEvents: BackupVaultEvent[] | undefined;
}

/**
 * @public
 */
export interface PutRestoreValidationResultInput {
  /**
   * <p>This is a unique identifier of a restore job within Backup.</p>
   * @public
   */
  RestoreJobId: string | undefined;

  /**
   * <p>The status of your restore validation.</p>
   * @public
   */
  ValidationStatus: RestoreValidationStatus | undefined;

  /**
   * <p>This is an optional message string you can input to
   *          describe the validation status for the restore test validation.</p>
   * @public
   */
  ValidationStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface RevokeRestoreAccessBackupVaultInput {
  /**
   * <p>The name of the source backup vault associated with the restore access backup vault to be revoked.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The ARN of the restore access backup vault to revoke.</p>
   * @public
   */
  RestoreAccessBackupVaultArn: string | undefined;

  /**
   * <p>A comment explaining the reason for revoking access to the restore access backup vault.</p>
   * @public
   */
  RequesterComment?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Index = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Index = (typeof Index)[keyof typeof Index];

/**
 * @public
 */
export interface StartBackupJobInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>StartBackupJob</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>A value in minutes after a backup is scheduled before a job will be canceled if it
   *          doesn't start successfully. This value is optional, and the default is 8 hours.
   *          If this value is included, it must be at least 60 minutes to avoid errors.</p>
   *          <p>This parameter has a maximum value of 100 years (52,560,000 minutes).</p>
   *          <p>During the start window, the backup job status remains in <code>CREATED</code> status until it
   *          has successfully begun or until the start window time has run out. If within the start
   *          window time Backup receives an error that allows the job to be retried,
   *          Backup will automatically retry to begin the job at least every 10 minutes
   *          until the backup
   *          successfully begins (the job status changes to <code>RUNNING</code>) or until the job status
   *          changes to <code>EXPIRED</code> (which is expected to occur when the start window time is over).</p>
   * @public
   */
  StartWindowMinutes?: number | undefined;

  /**
   * <p>A value in minutes during which a successfully started backup must complete, or else
   *             Backup will cancel the job. This value is optional. This value begins
   *          counting down from when the backup was scheduled. It does not add additional time for
   *             <code>StartWindowMinutes</code>, or if the backup started later than scheduled.</p>
   *          <p>Like <code>StartWindowMinutes</code>, this parameter has a maximum value of
   *          100 years (52,560,000 minutes).</p>
   * @public
   */
  CompleteWindowMinutes?: number | undefined;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup will transition and expire backups automatically according
   *          to the lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
   *          cold after days” setting. The “transition to cold after days” setting cannot be changed
   *          after a backup has been transitioned to cold. </p>
   *          <p>Resource types that can transition to cold storage are listed in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature
   *          availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   *          <p>This parameter has a maximum value of 100 years (36,500 days).</p>
   * @public
   */
  Lifecycle?: Lifecycle | undefined;

  /**
   * <p>The tags to assign to the resources.</p>
   * @public
   */
  RecoveryPointTags?: Record<string, string> | undefined;

  /**
   * <p>The backup option for a selected resource. This option is only available for
   *          Windows Volume Shadow Copy Service (VSS) backup jobs.</p>
   *          <p>Valid values: Set to <code>"WindowsVSS":"enabled"</code> to enable the
   *          <code>WindowsVSS</code> backup option and create a Windows VSS backup. Set to
   *          <code>"WindowsVSS""disabled"</code> to create a regular backup. The
   *          <code>WindowsVSS</code> option is not enabled by default.</p>
   * @public
   */
  BackupOptions?: Record<string, string> | undefined;

  /**
   * <p>Include this parameter to enable index creation if your backup
   *          job has a resource type that supports backup indexes.</p>
   *          <p>Resource types that support backup indexes include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EBS</code> for Amazon Elastic Block Store</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon Simple Storage Service (Amazon S3)</p>
   *             </li>
   *          </ul>
   *          <p>Index can have 1 of 2 possible values, either <code>ENABLED</code> or
   *          <code>DISABLED</code>.</p>
   *          <p>To create a backup index for an eligible <code>ACTIVE</code> recovery point
   *          that does not yet have a backup index, set value to <code>ENABLED</code>.</p>
   *          <p>To delete a backup index, set value to <code>DISABLED</code>.</p>
   * @public
   */
  Index?: Index | undefined;
}

/**
 * @public
 */
export interface StartBackupJobOutput {
  /**
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   * @public
   */
  BackupJobId?: string | undefined;

  /**
   * <p>
   *             <i>Note: This field is only returned for Amazon EFS and Advanced DynamoDB
   *          resources.</i>
   *          </p>
   *          <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>The date and time that a backup job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>This is a returned boolean value indicating this is a parent (composite)
   *          backup job.</p>
   * @public
   */
  IsParent?: boolean | undefined;
}

/**
 * @public
 */
export interface StartCopyJobInput {
  /**
   * <p>An ARN that uniquely identifies a recovery point to use for the copy job; for example,
   *          arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
   *       </p>
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * <p>The name of a logical source container where backups are stored. Backup vaults are
   *          identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.</p>
   * @public
   */
  SourceBackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a destination backup vault to
   *          copy to; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  DestinationBackupVaultArn: string | undefined;

  /**
   * <p>Specifies the IAM role ARN used to copy the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>StartCopyJob</code>. Retrying a successful request with the same idempotency
   *          token results in a success message with no action taken.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>Specifies the time period, in days, before a recovery point transitions to cold storage
   *          or is deleted.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, on the console, the retention setting must be 90 days greater than the
   *          transition to cold after days setting. The transition to cold after days setting can't
   *          be changed after a backup has been transitioned to cold.</p>
   *          <p>Resource types that can transition to cold storage are listed in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature
   *          availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   *          <p>To remove the existing lifecycle and retention periods and keep your recovery points indefinitely,
   *          specify -1 for <code>MoveToColdStorageAfterDays</code> and <code>DeleteAfterDays</code>.</p>
   * @public
   */
  Lifecycle?: Lifecycle | undefined;
}

/**
 * @public
 */
export interface StartCopyJobOutput {
  /**
   * <p>Uniquely identifies a copy job.</p>
   * @public
   */
  CopyJobId?: string | undefined;

  /**
   * <p>The date and time that a copy job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>This is a returned boolean value indicating this is a parent (composite)
   *          copy job.</p>
   * @public
   */
  IsParent?: boolean | undefined;
}

/**
 * @public
 */
export interface StartReportJobInput {
  /**
   * <p>The unique name of a report plan.</p>
   * @public
   */
  ReportPlanName: string | undefined;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>StartReportJobInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface StartReportJobOutput {
  /**
   * <p>The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded
   *          string that is at most 1,024 bytes long. The report job ID cannot be edited.</p>
   * @public
   */
  ReportJobId?: string | undefined;
}

/**
 * @public
 */
export interface StartRestoreJobInput {
  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * <p>A set of metadata key-value pairs.</p>
   *          <p>You can get configuration metadata about a resource at the time it was backed up by
   *          calling <code>GetRecoveryPointRestoreMetadata</code>. However, values in addition to those
   *          provided by <code>GetRecoveryPointRestoreMetadata</code> might be required to restore a
   *          resource. For example, you might need to provide a new resource name if the original
   *          already exists.</p>
   *          <p>For more information about the metadata for each resource, see the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-aur.html#aur-restore-cli">Metadata for Amazon Aurora</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-docdb.html#docdb-restore-cli">Metadata for Amazon DocumentDB</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-application-stacks.html#restoring-cfn-cli">Metadata for CloudFormation</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-dynamodb.html#ddb-restore-cli">Metadata for Amazon DynamoDB</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-ebs.html#ebs-restore-cli">
   *                Metadata for Amazon EBS</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-ec2.html#restoring-ec2-cli">Metadata for Amazon EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-efs.html#efs-restore-cli">Metadata for Amazon EFS</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-fsx.html#fsx-restore-cli">Metadata for Amazon FSx</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-nep.html#nep-restore-cli">Metadata for Amazon Neptune</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-rds.html#rds-restore-cli">Metadata for Amazon RDS</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/redshift-restores.html#redshift-restore-api">Metadata for Amazon Redshift</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-storage-gateway.html#restoring-sgw-cli">Metadata for Storage Gateway</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-s3.html#s3-restore-cli">Metadata for Amazon S3</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/timestream-restore.html#timestream-restore-api">Metadata for Amazon Timestream</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-vm.html#vm-restore-cli">Metadata for virtual machines</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Metadata: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that Backup uses to create
   *          the target resource; for example:
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>StartRestoreJob</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>Starts a job to restore a recovery point for one of the following resources:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Aurora</code> - Amazon Aurora</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DocumentDB</code> - Amazon DocumentDB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CloudFormation</code> - CloudFormation</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DynamoDB</code> - Amazon DynamoDB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EBS</code> - Amazon Elastic Block Store</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EC2</code> - Amazon Elastic Compute Cloud</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EFS</code> - Amazon Elastic File System</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FSx</code> - Amazon FSx</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Neptune</code> - Amazon Neptune</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RDS</code> - Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Redshift</code> - Amazon Redshift</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> - Storage Gateway</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> - Amazon Simple Storage Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Timestream</code> - Amazon Timestream</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VirtualMachine</code> - Virtual machines</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>This is an optional parameter. If this equals <code>True</code>, tags included in the backup
   *       will be copied to the restored resource.</p>
   *          <p>This can only be applied to backups created through Backup.</p>
   * @public
   */
  CopySourceTagsToRestoredResource?: boolean | undefined;
}

/**
 * @public
 */
export interface StartRestoreJobOutput {
  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   * @public
   */
  RestoreJobId?: string | undefined;
}

/**
 * @public
 */
export interface StopBackupJobInput {
  /**
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   * @public
   */
  BackupJobId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The ARN that uniquely identifies the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Key-value pairs that are used to help organize your resources. You can assign your own
   *          metadata to the resources you create. For clarity, this is the structure to assign tags:
   *             <code>[\{"Key":"string","Value":"string"\}]</code>.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the type of
   *          the tagged resource.</p>
   *          <p>ARNs that do not include <code>backup</code> are incompatible with tagging.
   *          <code>TagResource</code> and <code>UntagResource</code> with invalid ARNs will
   *          result in an error. Acceptable ARN content can include
   *          <code>arn:aws:backup:us-east</code>. Invalid ARN content may look like
   *          <code>arn:aws:ec2:us-east</code>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys to identify which key-value tags to remove from a resource.</p>
   * @public
   */
  TagKeyList: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateBackupPlanInput {
  /**
   * <p>The ID of the backup plan.</p>
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * <p>The body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   * @public
   */
  BackupPlan: BackupPlanInput | undefined;
}

/**
 * @public
 */
export interface UpdateBackupPlanOutput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * <p>The date and time a backup plan is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version Ids cannot be edited.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>Contains a list of <code>BackupOptions</code> for each resource type.</p>
   * @public
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[] | undefined;
}

/**
 * @public
 */
export interface UpdateFrameworkInput {
  /**
   * <p>The unique name of a framework. This name is between 1 and 256 characters, starting with
   *          a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).</p>
   * @public
   */
  FrameworkName: string | undefined;

  /**
   * <p>An optional description of the framework with a maximum 1,024 characters.</p>
   * @public
   */
  FrameworkDescription?: string | undefined;

  /**
   * <p>The controls that make up the framework. Each control in the list has a name,
   *          input parameters, and scope.</p>
   * @public
   */
  FrameworkControls?: FrameworkControl[] | undefined;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>UpdateFrameworkInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFrameworkOutput {
  /**
   * <p>The unique name of a framework. This name is between 1 and 256 characters, starting with
   *          a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).</p>
   * @public
   */
  FrameworkName?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   * @public
   */
  FrameworkArn?: string | undefined;

  /**
   * <p>The date and time that a framework is created, in ISO 8601 representation. The value of <code>CreationTime</code> is accurate to milliseconds. For example,
   *          2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind
   *          UTC.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsInput {
  /**
   * <p>Inputs can include:</p>
   *          <p>A value for <code>isCrossAccountBackupEnabled</code> and a Region. Example:
   *             <code>update-global-settings --global-settings isCrossAccountBackupEnabled=false
   *             --region us-west-2</code>.</p>
   *          <p>A value for Multi-party approval, styled as "Mpa": <code>isMpaEnabled</code>. Values can
   *          be true or false. Example:
   *          <code>update-global-settings --global-settings isMpaEnabled=false
   *             --region us-west-2</code>.</p>
   * @public
   */
  GlobalSettings?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryPointIndexSettingsInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created.</p>
   *          <p>Accepted characters include lowercase letters, numbers, and hyphens.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * <p>This specifies the IAM role ARN used for this operation.</p>
   *          <p>For example, arn:aws:iam::123456789012:role/S3Access</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>Index can have 1 of 2 possible values, either <code>ENABLED</code> or
   *          <code>DISABLED</code>.</p>
   *          <p>To create a backup index for an eligible <code>ACTIVE</code> recovery point
   *          that does not yet have a backup index, set value to <code>ENABLED</code>.</p>
   *          <p>To delete a backup index, set value to <code>DISABLED</code>.</p>
   * @public
   */
  Index: Index | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryPointIndexSettingsOutput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>This is the current status for the backup index associated
   *          with the specified recovery point.</p>
   *          <p>Statuses are: <code>PENDING</code> | <code>ACTIVE</code> | <code>FAILED</code> | <code>DELETING</code>
   *          </p>
   *          <p>A recovery point with an index that has the status of <code>ACTIVE</code>
   *          can be included in a search.</p>
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * <p>Index can have 1 of 2 possible values, either <code>ENABLED</code> or
   *          <code>DISABLED</code>.</p>
   *          <p>A value of <code>ENABLED</code> means a backup index for an eligible <code>ACTIVE</code>
   *          recovery point has been created.</p>
   *          <p>A value of <code>DISABLED</code> means a backup index was deleted.</p>
   * @public
   */
  Index?: Index | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryPointLifecycleInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup transitions and expires backups automatically according to
   *          the lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
   *          cold after days” setting. The “transition to cold after days” setting cannot be changed
   *          after a backup has been transitioned to cold. </p>
   * @public
   */
  Lifecycle?: Lifecycle | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryPointLifecycleOutput {
  /**
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</code>.</p>
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup transitions and expires backups automatically according to
   *          the lifecycle that you define.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
   *          cold after days” setting. The “transition to cold after days” setting cannot be changed
   *          after a backup has been transitioned to cold.</p>
   *          <p>Resource types that can transition to cold storage are listed in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature availability
   *          by resource</a> table. Backup ignores this expression for other resource types.</p>
   * @public
   */
  Lifecycle?: Lifecycle | undefined;

  /**
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and
   *             <code>MoveToColdStorageAt</code> timestamps.</p>
   * @public
   */
  CalculatedLifecycle?: CalculatedLifecycle | undefined;
}

/**
 * @public
 */
export interface UpdateRegionSettingsInput {
  /**
   * <p>Updates the list of services along with the opt-in preferences for the Region.</p>
   *          <p>If resource assignments are only based on tags, then service opt-in settings are applied.
   *          If a resource type is explicitly assigned to a backup plan, such as Amazon S3,
   *          Amazon EC2, or Amazon RDS, it will be included in the
   *          backup even if the opt-in is not enabled for that particular service.
   *          If both a resource type and tags are specified in a resource assignment,
   *          the resource type specified in the backup plan takes priority over the
   *          tag condition. Service opt-in settings are disregarded in this situation.</p>
   * @public
   */
  ResourceTypeOptInPreference?: Record<string, boolean> | undefined;

  /**
   * <p>Enables or disables full Backup management of backups for a resource type.
   *          To enable full Backup management for DynamoDB along with <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html">
   *             Backup's advanced DynamoDB backup features</a>, follow the
   *          procedure to <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html#advanced-ddb-backup-enable-cli"> enable advanced DynamoDB backup programmatically</a>.</p>
   * @public
   */
  ResourceTypeManagementPreference?: Record<string, boolean> | undefined;
}

/**
 * @public
 */
export interface UpdateReportPlanInput {
  /**
   * <p>The unique name of the report plan. This name is between 1 and 256 characters, starting
   *          with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores
   *          (_).</p>
   * @public
   */
  ReportPlanName: string | undefined;

  /**
   * <p>An optional description of the report plan with a maximum 1,024 characters.</p>
   * @public
   */
  ReportPlanDescription?: string | undefined;

  /**
   * <p>The information about where to deliver your reports, specifically
   *          your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.</p>
   * @public
   */
  ReportDeliveryChannel?: ReportDeliveryChannel | undefined;

  /**
   * <p>The report template for the report. Reports are built using a report
   *          template. The report templates are:</p>
   *          <p>
   *             <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT |
   *             COPY_JOB_REPORT | RESTORE_JOB_REPORT</code>
   *          </p>
   *          <p>If the report template is <code>RESOURCE_COMPLIANCE_REPORT</code> or
   *             <code>CONTROL_COMPLIANCE_REPORT</code>, this API resource also describes the report
   *          coverage by Amazon Web Services Regions and frameworks.</p>
   * @public
   */
  ReportSetting?: ReportSetting | undefined;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>UpdateReportPlanInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateReportPlanOutput {
  /**
   * <p>The unique name of the report plan.</p>
   * @public
   */
  ReportPlanName?: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   * @public
   */
  ReportPlanArn?: string | undefined;

  /**
   * <p>The date and time that a report plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * <p>This contains metadata about a restore testing plan.</p>
 * @public
 */
export interface RestoreTestingPlanForUpdate {
  /**
   * <p>Required: <code>Algorithm</code>; <code>RecoveryPointTypes</code>;
   *          <code>IncludeVaults</code> (<i>one or more</i>).</p>
   *          <p>Optional: <i>SelectionWindowDays</i> (<i>'30' if
   *          not specified</i>); <code>ExcludeVaults</code> (defaults to empty
   *          list if not listed).</p>
   * @public
   */
  RecoveryPointSelection?: RestoreTestingRecoveryPointSelection | undefined;

  /**
   * <p>A CRON expression in specified timezone when a restore testing plan is executed. When no
   *          CRON expression is provided, Backup will use the default expression
   *             <code>cron(0 5 ? * * *)</code>.</p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>Optional. This is the timezone in which the schedule
   *          expression is set. By default, ScheduleExpressions are in UTC.
   *          You can modify this to a specified timezone.</p>
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * <p>Defaults to 24 hours.</p>
   *          <p>A value in hours after a restore test is scheduled before a
   *          job will be canceled if it doesn't start successfully. This value
   *          is optional. If this value is included, this parameter has a
   *          maximum value of 168 hours (one week).</p>
   * @public
   */
  StartWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface UpdateRestoreTestingPlanInput {
  /**
   * <p>Specifies the body of a restore testing plan.</p>
   * @public
   */
  RestoreTestingPlan: RestoreTestingPlanForUpdate | undefined;

  /**
   * <p>The name of the restore testing plan name.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;
}

/**
 * @public
 */
export interface UpdateRestoreTestingPlanOutput {
  /**
   * <p>The time the resource testing plan was
   *          created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Unique ARN (Amazon Resource Name) of the restore testing plan.</p>
   * @public
   */
  RestoreTestingPlanArn: string | undefined;

  /**
   * <p>The name cannot be changed after creation. The name consists of
   *          only alphanumeric characters and underscores. Maximum length is 50.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * <p>The time the update completed for the restore
   *          testing plan.</p>
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * <p>This contains metadata about a restore testing selection.</p>
 * @public
 */
export interface RestoreTestingSelectionForUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *          Backup uses to create the target resource; for example:
   *          <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>You can include a list of specific ARNs, such as
   *          <code>ProtectedResourceArns: ["arn:aws:...", "arn:aws:..."]</code>
   *          or you can include a wildcard: <code>ProtectedResourceArns: ["*"]</code>,
   *          but not both.</p>
   * @public
   */
  ProtectedResourceArns?: string[] | undefined;

  /**
   * <p>The conditions that you define for resources in
   *          your restore testing plan using tags.</p>
   * @public
   */
  ProtectedResourceConditions?: ProtectedResourceConditions | undefined;

  /**
   * <p>You can override certain restore metadata keys by including the parameter
   *          <code>RestoreMetadataOverrides</code> in the body of
   *          <code>RestoreTestingSelection</code>. Key values are not case sensitive.</p>
   *          <p>See the complete list of <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing-inferred-metadata.html">restore testing
   *          inferred metadata</a>.</p>
   * @public
   */
  RestoreMetadataOverrides?: Record<string, string> | undefined;

  /**
   * <p>This value represents the time, in hours, data is retained after
   *          a restore test so that optional validation can be completed.</p>
   *          <p>Accepted value is an integer between
   *          0 and 168 (the hourly equivalent of seven days).</p>
   * @public
   */
  ValidationWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface UpdateRestoreTestingSelectionInput {
  /**
   * <p>The restore testing plan name is required to update the
   *          indicated testing plan.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * <p>To update your restore testing selection, you can use either
   *          protected resource ARNs or conditions, but not both. That is, if your
   *          selection has <code>ProtectedResourceArns</code>, requesting an update
   *          with the parameter <code>ProtectedResourceConditions</code> will be
   *          unsuccessful.</p>
   * @public
   */
  RestoreTestingSelection: RestoreTestingSelectionForUpdate | undefined;

  /**
   * <p>The required restore testing selection name of the restore
   *          testing selection you wish to update.</p>
   * @public
   */
  RestoreTestingSelectionName: string | undefined;
}

/**
 * @public
 */
export interface UpdateRestoreTestingSelectionOutput {
  /**
   * <p>The time the resource testing selection was
   *          updated successfully.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Unique string that is the name of the restore testing plan.</p>
   * @public
   */
  RestoreTestingPlanArn: string | undefined;

  /**
   * <p>The restore testing plan with which the updated restore
   *          testing selection is associated.</p>
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * <p>The returned restore testing selection name.</p>
   * @public
   */
  RestoreTestingSelectionName: string | undefined;

  /**
   * <p>The time the update completed for the restore
   *          testing selection.</p>
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @internal
 */
export const AssociateBackupVaultMpaApprovalTeamInputFilterSensitiveLog = (
  obj: AssociateBackupVaultMpaApprovalTeamInput
): any => ({
  ...obj,
  ...(obj.RequesterComment && { RequesterComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BackupRuleFilterSensitiveLog = (obj: BackupRule): any => ({
  ...obj,
  ...(obj.RecoveryPointTags && { RecoveryPointTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BackupPlanFilterSensitiveLog = (obj: BackupPlan): any => ({
  ...obj,
  ...(obj.Rules && { Rules: obj.Rules.map((item) => BackupRuleFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BackupRuleInputFilterSensitiveLog = (obj: BackupRuleInput): any => ({
  ...obj,
  ...(obj.RecoveryPointTags && { RecoveryPointTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BackupPlanInputFilterSensitiveLog = (obj: BackupPlanInput): any => ({
  ...obj,
  ...(obj.Rules && { Rules: obj.Rules.map((item) => BackupRuleInputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateBackupPlanInputFilterSensitiveLog = (obj: CreateBackupPlanInput): any => ({
  ...obj,
  ...(obj.BackupPlan && { BackupPlan: BackupPlanInputFilterSensitiveLog(obj.BackupPlan) }),
  ...(obj.BackupPlanTags && { BackupPlanTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateBackupVaultInputFilterSensitiveLog = (obj: CreateBackupVaultInput): any => ({
  ...obj,
  ...(obj.BackupVaultTags && { BackupVaultTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateLegalHoldInputFilterSensitiveLog = (obj: CreateLegalHoldInput): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateLogicallyAirGappedBackupVaultInputFilterSensitiveLog = (
  obj: CreateLogicallyAirGappedBackupVaultInput
): any => ({
  ...obj,
  ...(obj.BackupVaultTags && { BackupVaultTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateRestoreAccessBackupVaultInputFilterSensitiveLog = (
  obj: CreateRestoreAccessBackupVaultInput
): any => ({
  ...obj,
  ...(obj.BackupVaultTags && { BackupVaultTags: SENSITIVE_STRING }),
  ...(obj.RequesterComment && { RequesterComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateRestoreTestingPlanInputFilterSensitiveLog = (obj: CreateRestoreTestingPlanInput): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RestoreTestingSelectionForCreateFilterSensitiveLog = (obj: RestoreTestingSelectionForCreate): any => ({
  ...obj,
  ...(obj.RestoreMetadataOverrides && { RestoreMetadataOverrides: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateRestoreTestingSelectionInputFilterSensitiveLog = (obj: CreateRestoreTestingSelectionInput): any => ({
  ...obj,
  ...(obj.RestoreTestingSelection && {
    RestoreTestingSelection: RestoreTestingSelectionForCreateFilterSensitiveLog(obj.RestoreTestingSelection),
  }),
});

/**
 * @internal
 */
export const DisassociateBackupVaultMpaApprovalTeamInputFilterSensitiveLog = (
  obj: DisassociateBackupVaultMpaApprovalTeamInput
): any => ({
  ...obj,
  ...(obj.RequesterComment && { RequesterComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetBackupPlanOutputFilterSensitiveLog = (obj: GetBackupPlanOutput): any => ({
  ...obj,
  ...(obj.BackupPlan && { BackupPlan: BackupPlanFilterSensitiveLog(obj.BackupPlan) }),
});

/**
 * @internal
 */
export const GetBackupPlanFromJSONOutputFilterSensitiveLog = (obj: GetBackupPlanFromJSONOutput): any => ({
  ...obj,
  ...(obj.BackupPlan && { BackupPlan: BackupPlanFilterSensitiveLog(obj.BackupPlan) }),
});

/**
 * @internal
 */
export const GetBackupPlanFromTemplateOutputFilterSensitiveLog = (obj: GetBackupPlanFromTemplateOutput): any => ({
  ...obj,
  ...(obj.BackupPlanDocument && { BackupPlanDocument: BackupPlanFilterSensitiveLog(obj.BackupPlanDocument) }),
});

/**
 * @internal
 */
export const GetRecoveryPointRestoreMetadataOutputFilterSensitiveLog = (
  obj: GetRecoveryPointRestoreMetadataOutput
): any => ({
  ...obj,
  ...(obj.RestoreMetadata && { RestoreMetadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetRestoreJobMetadataOutputFilterSensitiveLog = (obj: GetRestoreJobMetadataOutput): any => ({
  ...obj,
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RestoreTestingSelectionForGetFilterSensitiveLog = (obj: RestoreTestingSelectionForGet): any => ({
  ...obj,
  ...(obj.RestoreMetadataOverrides && { RestoreMetadataOverrides: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetRestoreTestingSelectionOutputFilterSensitiveLog = (obj: GetRestoreTestingSelectionOutput): any => ({
  ...obj,
  ...(obj.RestoreTestingSelection && {
    RestoreTestingSelection: RestoreTestingSelectionForGetFilterSensitiveLog(obj.RestoreTestingSelection),
  }),
});

/**
 * @internal
 */
export const ListTagsOutputFilterSensitiveLog = (obj: ListTagsOutput): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RevokeRestoreAccessBackupVaultInputFilterSensitiveLog = (
  obj: RevokeRestoreAccessBackupVaultInput
): any => ({
  ...obj,
  ...(obj.RequesterComment && { RequesterComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartBackupJobInputFilterSensitiveLog = (obj: StartBackupJobInput): any => ({
  ...obj,
  ...(obj.RecoveryPointTags && { RecoveryPointTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartRestoreJobInputFilterSensitiveLog = (obj: StartRestoreJobInput): any => ({
  ...obj,
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagResourceInputFilterSensitiveLog = (obj: TagResourceInput): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UntagResourceInputFilterSensitiveLog = (obj: UntagResourceInput): any => ({
  ...obj,
  ...(obj.TagKeyList && { TagKeyList: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateBackupPlanInputFilterSensitiveLog = (obj: UpdateBackupPlanInput): any => ({
  ...obj,
  ...(obj.BackupPlan && { BackupPlan: BackupPlanInputFilterSensitiveLog(obj.BackupPlan) }),
});

/**
 * @internal
 */
export const RestoreTestingSelectionForUpdateFilterSensitiveLog = (obj: RestoreTestingSelectionForUpdate): any => ({
  ...obj,
  ...(obj.RestoreMetadataOverrides && { RestoreMetadataOverrides: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateRestoreTestingSelectionInputFilterSensitiveLog = (obj: UpdateRestoreTestingSelectionInput): any => ({
  ...obj,
  ...(obj.RestoreTestingSelection && {
    RestoreTestingSelection: RestoreTestingSelectionForUpdateFilterSensitiveLog(obj.RestoreTestingSelection),
  }),
});
