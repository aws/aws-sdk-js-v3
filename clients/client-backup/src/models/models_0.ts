// smithy-typescript generated code
import type {
  AccessPointStatus,
  AggregationPeriod,
  BackupJobState,
  BackupJobStatus,
  BackupVaultEvent,
  ConditionType,
  CopyJobState,
  CopyJobStatus,
  EncryptionKeyType,
  Index,
  IndexStatus,
  LegalHoldStatus,
  LifecycleDeleteAfterEvent,
  MalwareScanner,
  MpaRevokeSessionStatus,
  MpaSessionStatus,
  RecoveryPointStatus,
  RestoreDeletionStatus,
  RestoreJobState,
  RestoreJobStatus,
  RestoreTestingRecoveryPointSelectionAlgorithm,
  RestoreTestingRecoveryPointType,
  RestoreValidationStatus,
  RuleExecutionType,
  ScanFinding,
  ScanJobState,
  ScanJobStatus,
  ScanMode,
  ScanResourceType,
  ScanResultStatus,
  ScanState,
  StorageClass,
  VaultState,
  VaultType,
} from "./enums";

/**
 * The backup options for each resource type.
 *
 * @public
 */
export interface AdvancedBackupSetting {
  /**
   * Specifies an object containing resource type and backup options. The only supported resource type is Amazon EC2 instances with Windows Volume Shadow Copy Service (VSS). For a CloudFormation example, see the [sample CloudFormation template to enable Windows VSS](https://docs.aws.amazon.com/aws-backup/latest/devguide/integrate-cloudformation-with-aws-backup.html) in the *Backup User Guide*.
   *
   * Valid values: `EC2`.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Specifies the backup option for a selected resource. This option is available for Windows VSS backup jobs and S3 backups.
   *
   * Valid values:
   *
   * Set to `"WindowsVSS":"enabled"` to enable the `WindowsVSS` backup option and create a Windows VSS backup.
   *
   * Set to `"WindowsVSS":"disabled"` to create a regular backup. The `WindowsVSS` option is not enabled by default.
   *
   * For S3 backups, set to `"BackupACLs":"disabled"` to exclude ACLs from the backup, or `"BackupObjectTags":"disabled"` to exclude object tags from the backup. By default, both ACLs and object tags are included in S3 backups.
   *
   * If you specify an invalid option, you get an `InvalidParameterValueException` exception.
   *
   * For more information about Windows VSS backups, see [Creating a VSS-Enabled Windows Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/windows-backups.html).
   *
   * @public
   */
  BackupOptions?: Record<string, string> | undefined;
}

/**
 * Contains aggregated scan results across multiple scan operations, providing a summary of scan status and findings.
 *
 * @public
 */
export interface AggregatedScanResult {
  /**
   * A Boolean value indicating whether any of the aggregated scans failed.
   *
   * @public
   */
  FailedScan?: boolean | undefined;

  /**
   * An array of findings discovered across all aggregated scans.
   *
   * @public
   */
  Findings?: ScanFinding[] | undefined;

  /**
   * The timestamp when the aggregated scan result was last computed, in Unix format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  LastComputed?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateBackupVaultMpaApprovalTeamInput {
  /**
   * The name of the backup vault to associate with the MPA approval team.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the MPA approval team to associate with the backup vault.
   *
   * @public
   */
  MpaApprovalTeamArn: string | undefined;

  /**
   * A comment provided by the requester explaining the association request.
   *
   * @public
   */
  RequesterComment?: string | undefined;
}

/**
 * Contains metadata about a backup access point.
 *
 * @public
 */
export interface ListAccessPointsMember {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the backup access point.
   *
   * @public
   */
  AccessPointArn: string | undefined;

  /**
   * Metadata for the backup access point. After the backup access point reaches the `AVAILABLE` status, this map contains `S3AccessPointArn` and `S3AccessPointAlias`, which you use with standard Amazon S3 read APIs to access the backup data. For continuous recovery points, this map also contains `AccessPointInTime` (in format `2021-11-27T03:30:27Z`). The access point provides access to the content present in the backup at that specific time.
   *
   * @public
   */
  AccessPointMetadata: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the backup vault that contains the recovery point.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * The name of the backup vault that contains the recovery point.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The date and time that the backup access point was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The name of the backup access point.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recovery point that the backup access point provides access to.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource that was backed up, such as an Amazon S3 bucket.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The type of Amazon Web Services resource associated with the recovery point. For example, `S3` for Amazon Simple Storage Service.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The current status of the backup access point.
   *
   * @public
   */
  Status: AccessPointStatus | undefined;

  /**
   * A message that provides additional detail about the status of the backup access point, such as the reason a creation or deletion attempt failed.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.
 *
 * @public
 */
export interface RecoveryPointCreator {
  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, `arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50`.
   *
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * The name of the backup plan that created this recovery point. This provides human-readable context about which backup plan was responsible for the backup job.
   *
   * @public
   */
  BackupPlanName?: string | undefined;

  /**
   * Version IDs are unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. They cannot be edited.
   *
   * @public
   */
  BackupPlanVersion?: string | undefined;

  /**
   * Uniquely identifies a rule used to schedule the backup of a selection of resources.
   *
   * @public
   */
  BackupRuleId?: string | undefined;

  /**
   * The name of the backup rule within the backup plan that created this recovery point. This helps identify which specific rule triggered the backup job.
   *
   * @public
   */
  BackupRuleName?: string | undefined;

  /**
   * The cron expression that defines the schedule for the backup rule. This shows the frequency and timing of when backups are automatically triggered.
   *
   * @public
   */
  BackupRuleCron?: string | undefined;

  /**
   * The timezone used for the backup rule schedule. This provides context for when backups are scheduled to run in the specified timezone.
   *
   * @public
   */
  BackupRuleTimezone?: string | undefined;
}

/**
 * Specifies the time period, in days, before a recovery point transitions to cold storage or is deleted.
 *
 * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the retention setting must be 90 days greater than the transition to cold after days setting. The transition to cold after days setting can't be changed after a backup has been transitioned to cold.
 *
 * Resource types that can transition to cold storage are listed in the [Feature availability by resource](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource) table. Backup ignores this expression for other resource types.
 *
 * To remove the existing lifecycle and retention periods and keep your recovery points indefinitely, specify -1 for `MoveToColdStorageAfterDays` and `DeleteAfterDays`.
 *
 * @public
 */
export interface Lifecycle {
  /**
   * The number of days after creation that a recovery point is moved to cold storage.
   *
   * @public
   */
  MoveToColdStorageAfterDays?: number | undefined;

  /**
   * The number of days after creation that a recovery point is deleted. This value must be at least 90 days after the number of days specified in `MoveToColdStorageAfterDays`.
   *
   * @public
   */
  DeleteAfterDays?: number | undefined;

  /**
   * If the value is true, your backup plan transitions supported resources to archive (cold) storage tier in accordance with your lifecycle settings.
   *
   * @public
   */
  OptInToArchiveForSupportedResources?: boolean | undefined;

  /**
   * The event after which a recovery point is deleted. A recovery point with both `DeleteAfterDays` and `DeleteAfterEvent` will delete after whichever condition is satisfied first. Not valid as an input.
   *
   * @public
   */
  DeleteAfterEvent?: LifecycleDeleteAfterEvent | undefined;
}

/**
 * Contains detailed information about a backup job.
 *
 * @public
 */
export interface BackupJob {
  /**
   * The account ID that owns the backup job.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Uniquely identifies a request to Backup to back up a resource.
   *
   * @public
   */
  BackupJobId?: string | undefined;

  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * The type of backup vault where the recovery point is stored. Valid values are `BACKUP_VAULT` for standard backup vaults and `LOGICALLY_AIR_GAPPED_BACKUP_VAULT` for logically air-gapped vaults.
   *
   * @public
   */
  VaultType?: string | undefined;

  /**
   * The lock state of the backup vault. For logically air-gapped vaults, this indicates whether the vault is locked in compliance mode. Valid values include `LOCKED` and `UNLOCKED`.
   *
   * @public
   */
  VaultLockState?: string | undefined;

  /**
   * An ARN that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * Specifies the time period, in days, before a recovery point transitions to cold storage or is deleted.
   *
   * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the retention setting must be 90 days greater than the transition to cold after days setting. The transition to cold after days setting can't be changed after a backup has been transitioned to cold.
   *
   * Resource types that can transition to cold storage are listed in the [Feature availability by resource](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource) table. Backup ignores this expression for other resource types.
   *
   * To remove the existing lifecycle and retention periods and keep your recovery points indefinitely, specify -1 for `MoveToColdStorageAfterDays` and `DeleteAfterDays`.
   *
   * @public
   */
  RecoveryPointLifecycle?: Lifecycle | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the backup. This can be a customer-managed key or an Amazon Web Services managed key, depending on the vault configuration.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * A boolean value indicating whether the backup is encrypted. All backups in Backup are encrypted, but this field indicates the encryption status for transparency.
   *
   * @public
   */
  IsEncrypted?: boolean | undefined;

  /**
   * An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The date and time a backup job is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time a job to create a backup job is completed, in Unix format and Coordinated Universal Time (UTC). The value of `CompletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * The current state of a backup job.
   *
   * @public
   */
  State?: BackupJobState | undefined;

  /**
   * A detailed message explaining the status of the job to back up a resource.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Contains an estimated percentage complete of a job at the time the job status was queried.
   *
   * @public
   */
  PercentDone?: string | undefined;

  /**
   * The size, in bytes, of a backup (recovery point).
   *
   * This value can render differently depending on the resource type as Backup pulls in data information from other Amazon Web Services services. For example, the value returned may show a value of `0`, which may differ from the anticipated value.
   *
   * The expected behavior for values by resource type are described as follows:
   *
   * - Amazon Aurora, Amazon DocumentDB, and Amazon Neptune do not have this value populate from the operation `GetBackupJobStatus`.
   * - For Amazon DynamoDB with advanced features, this value refers to the size of the recovery point (backup).
   * - Amazon EC2 and Amazon EBS show volume size (provisioned storage) returned as part of this value. Amazon EBS does not return backup size information; snapshot size will have the same value as the original resource that was backed up.
   * - For Amazon EFS, this value refers to the delta bytes transferred during a backup.
   * - For Amazon EKS, this value refers to the size of your nested EKS recovery point.
   * - Amazon FSx does not populate this value from the operation `GetBackupJobStatus` for FSx file systems.
   * - An Amazon RDS instance will show as `0`.
   * - For virtual machines running VMware, this value is passed to Backup through an asynchronous workflow, which can mean this displayed value can under-represent the actual backup size.
   *
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * Specifies the IAM role ARN used to create the target recovery point. IAM roles other than the default role must include either `AWSBackup` or `AwsBackup` in the role name. For example, `arn:aws:iam::123456789012:role/AWSBackupRDSAccess`. Role names without those strings lack permissions to perform backup jobs.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * Contains identifying information about the creation of a backup job, including the `BackupPlanArn`, `BackupPlanId`, `BackupPlanVersion`, and `BackupRuleId` of the backup plan used to create it.
   *
   * @public
   */
  CreatedBy?: RecoveryPointCreator | undefined;

  /**
   * The date and time a job to back up resources is expected to be completed, in Unix format and Coordinated Universal Time (UTC). The value of `ExpectedCompletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  ExpectedCompletionDate?: Date | undefined;

  /**
   * Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job must be started before it is canceled. The value is calculated by adding the start window to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2 hours, the `StartBy` time would be 8:00 PM on the date specified. The value of `StartBy` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  StartBy?: Date | undefined;

  /**
   * The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is Amazon EC2.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The size in bytes transferred to a backup vault at the time that the job status was queried.
   *
   * @public
   */
  BytesTransferred?: number | undefined;

  /**
   * Specifies the backup option for a selected resource. This option is only available for Windows Volume Shadow Copy Service (VSS) backup jobs.
   *
   * Valid values: Set to `"WindowsVSS":"enabled"` to enable the `WindowsVSS` backup option and create a Windows VSS backup. Set to `"WindowsVSS":"disabled"` to create a regular backup. If you specify an invalid option, you get an `InvalidParameterValueException` exception.
   *
   * @public
   */
  BackupOptions?: Record<string, string> | undefined;

  /**
   * Represents the type of backup for a backup job.
   *
   * @public
   */
  BackupType?: string | undefined;

  /**
   * This uniquely identifies a request to Backup to back up a resource. The return will be the parent (composite) job ID.
   *
   * @public
   */
  ParentJobId?: string | undefined;

  /**
   * This is a boolean value indicating this is a parent (composite) backup job.
   *
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * The non-unique name of the resource that belongs to the specified backup.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The date on which the backup job was initiated.
   *
   * @public
   */
  InitiationDate?: Date | undefined;

  /**
   * This parameter is the job count for the specified message category.
   *
   * Example strings may include `AccessDenied`, `SUCCESS`, `AGGREGATE_ALL`, and `INVALIDPARAMETERS`. See [Monitoring](https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html) for a list of MessageCategory strings.
   *
   * The the value ANY returns count of all message categories.
   *
   * `AGGREGATE_ALL` aggregates job counts for all message categories and returns the sum.
   *
   * @public
   */
  MessageCategory?: string | undefined;
}

/**
 * This is a summary of jobs created or running within the most recent 14 days.
 *
 * The returned summary may contain the following: Region, Account, State, RestourceType, MessageCategory, StartTime, EndTime, and Count of included jobs.
 *
 * @public
 */
export interface BackupJobSummary {
  /**
   * The Amazon Web Services Regions within the job summary.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The account ID that owns the jobs within the summary.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * This value is job count for jobs with the specified state.
   *
   * @public
   */
  State?: BackupJobStatus | undefined;

  /**
   * This value is the job count for the specified resource type. The request `GetSupportedResourceTypes` returns strings for supported resource types.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * This parameter is the job count for the specified message category.
   *
   * Example strings include `AccessDenied`, `Success`, and `InvalidParameters`. See [Monitoring](https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html) for a list of MessageCategory strings.
   *
   * The the value ANY returns count of all message categories.
   *
   * `AGGREGATE_ALL` aggregates job counts for all message categories and returns the sum.
   *
   * @public
   */
  MessageCategory?: string | undefined;

  /**
   * The value as a number of jobs in a job summary.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The value of time in number format of a job start time.
   *
   * This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The value of time in number format of a job end time.
   *
   * This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * The details of the copy operation.
 *
 * @public
 */
export interface CopyAction {
  /**
   * Specifies the time period, in days, before a recovery point transitions to cold storage or is deleted.
   *
   * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the retention setting must be 90 days greater than the transition to cold after days setting. The transition to cold after days setting can't be changed after a backup has been transitioned to cold.
   *
   * Resource types that can transition to cold storage are listed in the [Feature availability by resource](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource) table. Backup ignores this expression for other resource types.
   *
   * To remove the existing lifecycle and retention periods and keep your recovery points indefinitely, specify -1 for `MoveToColdStorageAfterDays` and `DeleteAfterDays`.
   *
   * @public
   */
  Lifecycle?: Lifecycle | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for the copied backup. For example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  DestinationBackupVaultArn: string | undefined;
}

/**
 * This is an optional array within a BackupRule.
 *
 * IndexAction consists of one ResourceTypes.
 *
 * @public
 */
export interface IndexAction {
  /**
   * 0 or 1 index action will be accepted for each BackupRule.
   *
   * Valid values:
   *
   * - `EBS` for Amazon Elastic Block Store
   * - `S3` for Amazon Simple Storage Service (Amazon S3)
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;
}

/**
 * Defines a scanning action that specifies the malware scanner and scan mode to use.
 *
 * @public
 */
export interface ScanAction {
  /**
   * The malware scanner to use for the scan action. Currently only `GUARDDUTY` is supported.
   *
   * @public
   */
  MalwareScanner?: MalwareScanner | undefined;

  /**
   * The scanning mode to use for the scan action.
   *
   * Valid values: `FULL_SCAN` | `INCREMENTAL_SCAN`.
   *
   * @public
   */
  ScanMode?: ScanMode | undefined;
}

/**
 * Specifies a scheduled task used to back up a selection of resources.
 *
 * @public
 */
export interface BackupRule {
  /**
   * A display name for a backup rule. Must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  TargetBackupVaultName: string | undefined;

  /**
   * The ARN of a logically air-gapped vault. ARN must be in the same account and Region. If provided, supported fully managed resources back up directly to logically air-gapped vault, while other supported resources create a temporary (billable) snapshot in backup vault, then copy it to logically air-gapped vault. Unsupported resources only back up to the specified backup vault.
   *
   * @public
   */
  TargetLogicallyAirGappedBackupVaultArn?: string | undefined;

  /**
   * A cron expression in UTC specifying when Backup initiates a backup job. When no CRON expression is provided, Backup will use the default expression `cron(0 5 ? * * *)`.
   *
   * For more information about Amazon Web Services cron expressions, see [Schedule Expressions for Rules](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html) in the *Amazon CloudWatch Events User Guide*.
   *
   * Two examples of Amazon Web Services cron expressions are `15 * ? * * *` (take a backup every hour at 15 minutes past the hour) and `0 12 * * ? *` (take a backup every day at 12 noon UTC).
   *
   * For a table of examples, click the preceding link and scroll down the page.
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. If this value is included, it must be at least 60 minutes to avoid errors.
   *
   * During the start window, the backup job status remains in `CREATED` status until it has successfully begun or until the start window time has run out. If within the start window time Backup receives an error that allows the job to be retried, Backup will automatically retry to begin the job at least every 10 minutes until the backup successfully begins (the job status changes to `RUNNING`) or until the job status changes to `EXPIRED` (which is expected to occur when the start window time is over).
   *
   * @public
   */
  StartWindowMinutes?: number | undefined;

  /**
   * A value in minutes after a backup job is successfully started before it must be completed or it will be canceled by Backup. This value is optional.
   *
   * @public
   */
  CompletionWindowMinutes?: number | undefined;

  /**
   * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.
   *
   * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.
   *
   * Resource types that can transition to cold storage are listed in the [Feature availability by resource](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource) table. Backup ignores this expression for other resource types.
   *
   * @public
   */
  Lifecycle?: Lifecycle | undefined;

  /**
   * The tags that are assigned to resources that are associated with this rule when restored from backup.
   *
   * @public
   */
  RecoveryPointTags?: Record<string, string> | undefined;

  /**
   * Uniquely identifies a rule that is used to schedule the backup of a selection of resources.
   *
   * @public
   */
  RuleId?: string | undefined;

  /**
   * An array of `CopyAction` objects, which contains the details of the copy operation.
   *
   * @public
   */
  CopyActions?: CopyAction[] | undefined;

  /**
   * Specifies whether Backup creates continuous backups. True causes Backup to create continuous backups capable of point-in-time restore (PITR). False (or not specified) causes Backup to create snapshot backups.
   *
   * @public
   */
  EnableContinuousBackup?: boolean | undefined;

  /**
   * The timezone in which the schedule expression is set. By default, ScheduleExpressions are in UTC. You can modify this to a specified timezone.
   *
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * IndexActions is an array you use to specify how backup data should be indexed.
   *
   * eEach BackupRule can have 0 or 1 IndexAction, as each backup can have up to one index associated with it.
   *
   * Within the array is ResourceType. Only one will be accepted for each BackupRule.
   *
   * @public
   */
  IndexActions?: IndexAction[] | undefined;

  /**
   * Contains your scanning configuration for the backup rule and includes the malware scanner, and scan mode of either full or incremental.
   *
   * @public
   */
  ScanActions?: ScanAction[] | undefined;
}

/**
 * Contains configuration settings for malware scanning, including the scanner type, target resource types, and scanner role.
 *
 * @public
 */
export interface ScanSetting {
  /**
   * The malware scanner to use for scanning. Currently only `GUARDDUTY` is supported.
   *
   * @public
   */
  MalwareScanner?: MalwareScanner | undefined;

  /**
   * An array of resource types to be scanned for malware.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the scanner uses to access resources; for example, `arn:aws:iam::123456789012:role/ScannerRole`.
   *
   * @public
   */
  ScannerRoleArn?: string | undefined;
}

/**
 * Contains an optional backup plan display name and an array of `BackupRule` objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of Amazon Web Services resources.
 *
 * @public
 */
export interface BackupPlan {
  /**
   * The display name of a backup plan. Must contain only alphanumeric or '-_.' special characters.
   *
   * If this is set in the console, it can contain 1 to 50 characters; if this is set through CLI or API, it can contain 1 to 200 characters.
   *
   * @public
   */
  BackupPlanName: string | undefined;

  /**
   * An array of `BackupRule` objects, each of which specifies a scheduled task that is used to back up a selection of resources.
   *
   * @public
   */
  Rules: BackupRule[] | undefined;

  /**
   * Contains a list of `BackupOptions` for each resource type.
   *
   * @public
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[] | undefined;

  /**
   * Contains your scanning configuration for the backup plan and includes the Malware scanner, your selected resources, and scanner role.
   *
   * @public
   */
  ScanSettings?: ScanSetting[] | undefined;
}

/**
 * Specifies a scheduled task used to back up a selection of resources.
 *
 * @public
 */
export interface BackupRuleInput {
  /**
   * A display name for a backup rule. Must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  TargetBackupVaultName: string | undefined;

  /**
   * The ARN of a logically air-gapped vault. ARN must be in the same account and Region. If provided, supported fully managed resources back up directly to logically air-gapped vault, while other supported resources create a temporary (billable) snapshot in backup vault, then copy it to logically air-gapped vault. Unsupported resources only back up to the specified backup vault.
   *
   * @public
   */
  TargetLogicallyAirGappedBackupVaultArn?: string | undefined;

  /**
   * A CRON expression in UTC specifying when Backup initiates a backup job. When no CRON expression is provided, Backup will use the default expression `cron(0 5 ? * * *)`.
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. If this value is included, it must be at least 60 minutes to avoid errors.
   *
   * This parameter has a maximum value of 100 years (52,560,000 minutes).
   *
   * During the start window, the backup job status remains in `CREATED` status until it has successfully begun or until the start window time has run out. If within the start window time Backup receives an error that allows the job to be retried, Backup will automatically retry to begin the job at least every 10 minutes until the backup successfully begins (the job status changes to `RUNNING`) or until the job status changes to `EXPIRED` (which is expected to occur when the start window time is over).
   *
   * @public
   */
  StartWindowMinutes?: number | undefined;

  /**
   * A value in minutes after a backup job is successfully started before it must be completed or it will be canceled by Backup. This value is optional.
   *
   * @public
   */
  CompletionWindowMinutes?: number | undefined;

  /**
   * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup will transition and expire backups automatically according to the lifecycle that you define.
   *
   * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold storage.
   *
   * Resource types that can transition to cold storage are listed in the [Feature availability by resource](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource) table. Backup ignores this expression for other resource types.
   *
   * This parameter has a maximum value of 100 years (36,500 days).
   *
   * @public
   */
  Lifecycle?: Lifecycle | undefined;

  /**
   * The tags to assign to the resources.
   *
   * @public
   */
  RecoveryPointTags?: Record<string, string> | undefined;

  /**
   * An array of `CopyAction` objects, which contains the details of the copy operation.
   *
   * @public
   */
  CopyActions?: CopyAction[] | undefined;

  /**
   * Specifies whether Backup creates continuous backups. True causes Backup to create continuous backups capable of point-in-time restore (PITR). False (or not specified) causes Backup to create snapshot backups.
   *
   * @public
   */
  EnableContinuousBackup?: boolean | undefined;

  /**
   * The timezone in which the schedule expression is set. By default, ScheduleExpressions are in UTC. You can modify this to a specified timezone.
   *
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * There can up to one IndexAction in each BackupRule, as each backup can have 0 or 1 backup index associated with it.
   *
   * Within the array is ResourceTypes. Only 1 resource type will be accepted for each BackupRule. Valid values:
   *
   * - `EBS` for Amazon Elastic Block Store
   * - `S3` for Amazon Simple Storage Service (Amazon S3)
   *
   * @public
   */
  IndexActions?: IndexAction[] | undefined;

  /**
   * Contains your scanning configuration for the backup rule and includes the malware scanner, and scan mode of either full or incremental.
   *
   * @public
   */
  ScanActions?: ScanAction[] | undefined;
}

/**
 * Contains an optional backup plan display name and an array of `BackupRule` objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task.
 *
 * @public
 */
export interface BackupPlanInput {
  /**
   * The display name of a backup plan. Must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  BackupPlanName: string | undefined;

  /**
   * An array of `BackupRule` objects, each of which specifies a scheduled task that is used to back up a selection of resources.
   *
   * @public
   */
  Rules: BackupRuleInput[] | undefined;

  /**
   * Specifies a list of `BackupOptions` for each resource type. These settings are only available for Windows Volume Shadow Copy Service (VSS) backup jobs.
   *
   * @public
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[] | undefined;

  /**
   * Contains your scanning configuration for the backup rule and includes the malware scanner, and scan mode of either full or incremental.
   *
   * @public
   */
  ScanSettings?: ScanSetting[] | undefined;
}

/**
 * Contains metadata about a backup plan.
 *
 * @public
 */
export interface BackupPlansListMember {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, `arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50`.
   *
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * The date and time a resource backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time a backup plan is deleted, in Unix format and Coordinated Universal Time (UTC). The value of `DeletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  DeletionDate?: Date | undefined;

  /**
   * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The display name of a saved backup plan.
   *
   * @public
   */
  BackupPlanName?: string | undefined;

  /**
   * A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.
   *
   * If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The last time this backup plan was run. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of `LastExecutionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LastExecutionDate?: Date | undefined;

  /**
   * Contains a list of `BackupOptions` for a resource type.
   *
   * @public
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[] | undefined;
}

/**
 * An object specifying metadata associated with a backup plan template.
 *
 * @public
 */
export interface BackupPlanTemplatesListMember {
  /**
   * Uniquely identifies a stored backup plan template.
   *
   * @public
   */
  BackupPlanTemplateId?: string | undefined;

  /**
   * The optional display name of a backup plan template.
   *
   * @public
   */
  BackupPlanTemplateName?: string | undefined;
}

/**
 * Includes information about tags you define to assign tagged resources to a backup plan.
 *
 * Include the prefix `aws:ResourceTag` in your tags. For example, `"aws:ResourceTag/TagKey1": "Value1"`.
 *
 * @public
 */
export interface ConditionParameter {
  /**
   * The key in a key-value pair. For example, in the tag `Department: Accounting`, `Department` is the key.
   *
   * @public
   */
  ConditionKey?: string | undefined;

  /**
   * The value in a key-value pair. For example, in the tag `Department: Accounting`, `Accounting` is the value.
   *
   * @public
   */
  ConditionValue?: string | undefined;
}

/**
 * Contains information about which resources to include or exclude from a backup plan using their tags. Conditions are case sensitive.
 *
 * @public
 */
export interface Conditions {
  /**
   * Filters the values of your tagged resources for only those resources that you tagged with the same value. Also called "exact matching."
   *
   * @public
   */
  StringEquals?: ConditionParameter[] | undefined;

  /**
   * Filters the values of your tagged resources for only those resources that you tagged that do not have the same value. Also called "negated matching."
   *
   * @public
   */
  StringNotEquals?: ConditionParameter[] | undefined;

  /**
   * Filters the values of your tagged resources for matching tag values with the use of a wildcard character (*) anywhere in the string. For example, "prod*" or "*rod*" matches the tag value "production".
   *
   * @public
   */
  StringLike?: ConditionParameter[] | undefined;

  /**
   * Filters the values of your tagged resources for non-matching tag values with the use of a wildcard character (*) anywhere in the string.
   *
   * @public
   */
  StringNotLike?: ConditionParameter[] | undefined;
}

/**
 * Contains an array of triplets made up of a condition type (such as `StringEquals`), a key, and a value. Used to filter resources using their tags and assign them to a backup plan. Case sensitive.
 *
 * @public
 */
export interface Condition {
  /**
   * An operation applied to a key-value pair used to assign resources to your backup plan. Condition only supports `StringEquals`. For more flexible assignment options, including `StringLike` and the ability to exclude resources from your backup plan, use `Conditions` (with an "s" on the end) for your [`BackupSelection`](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BackupSelection.html).
   *
   * @public
   */
  ConditionType: ConditionType | undefined;

  /**
   * The key in a key-value pair. For example, in the tag `Department: Accounting`, `Department` is the key.
   *
   * @public
   */
  ConditionKey: string | undefined;

  /**
   * The value in a key-value pair. For example, in the tag `Department: Accounting`, `Accounting` is the value.
   *
   * @public
   */
  ConditionValue: string | undefined;
}

/**
 * Used to specify a set of resources to a backup plan.
 *
 * We recommend that you specify conditions, tags, or resources to include or exclude. Otherwise, Backup attempts to select all supported and opted-in storage resources, which could have unintended cost implications.
 *
 * For more information, see [Assigning resources programmatically](https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-json).
 *
 * @public
 */
export interface BackupSelection {
  /**
   * The display name of a resource selection document. Must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  SelectionName: string | undefined;

  /**
   * The ARN of the IAM role that Backup uses to authenticate when backing up the target resource; for example, `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the resources to assign to a backup plan. The maximum number of ARNs is 500 without wildcards, or 30 ARNs with wildcards.
   *
   * If you need to assign many resources to a backup plan, consider a different resource selection strategy, such as assigning all resources of a resource type or refining your resource selection using tags.
   *
   * If you specify multiple ARNs, the resources much match any of the ARNs (OR logic).
   *
   * > **Note:** When using wildcards in ARN patterns for backup selections, the asterisk (*) must appear at the end of the ARN string (prefix pattern). For example, `arn:aws:s3:::my-bucket-*` is valid, but `arn:aws:s3:::*-logs` is not supported.
   *
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * The conditions that you define to assign resources to your backup plans using tags. For example, `"StringEquals": \{ "ConditionKey": "backup", "ConditionValue": "daily"\}`.
   *
   * `ListOfTags` supports only `StringEquals`. Condition operators are case sensitive.
   *
   * If you specify multiple conditions, the resources much match any of the conditions (OR logic).
   *
   * @public
   */
  ListOfTags?: Condition[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the resources to exclude from a backup plan. The maximum number of ARNs is 500 without wildcards, or 30 ARNs with wildcards.
   *
   * If you need to exclude many resources from a backup plan, consider a different resource selection strategy, such as assigning only one or a few resource types or refining your resource selection using tags.
   *
   * @public
   */
  NotResources?: string[] | undefined;

  /**
   * The conditions that you define to assign resources to your backup plans using tags. For example, `"StringEquals": \{ "ConditionKey": "aws:ResourceTag/backup", "ConditionValue": "daily" \}`.
   *
   * `Conditions` supports `StringEquals`, `StringLike`, `StringNotEquals`, and `StringNotLike`. Condition operators are case sensitive.
   *
   * If you specify multiple conditions, the resources much match all conditions (AND logic).
   *
   * @public
   */
  Conditions?: Conditions | undefined;
}

/**
 * Contains metadata about a `BackupSelection` object.
 *
 * @public
 */
export interface BackupSelectionsListMember {
  /**
   * Uniquely identifies a request to assign a set of resources to a backup plan.
   *
   * @public
   */
  SelectionId?: string | undefined;

  /**
   * The display name of a resource selection document.
   *
   * @public
   */
  SelectionName?: string | undefined;

  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * The date and time a backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.
   *
   * If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * Specifies the IAM role Amazon Resource Name (ARN) to create the target recovery point; for example, `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn?: string | undefined;
}

/**
 * Contains metadata about a backup vault.
 *
 * @public
 */
export interface BackupVaultListMember {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * The type of vault in which the described recovery point is stored.
   *
   * @public
   */
  VaultType?: VaultType | undefined;

  /**
   * The current state of the vault.
   *
   * @public
   */
  VaultState?: VaultState | undefined;

  /**
   * The date and time a resource backup is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * A server-side encryption key you can specify to encrypt your backups from services that support full Backup management; for example, `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`. If you specify a key, you must specify its ARN, not its alias. If you do not specify a key, Backup creates a KMS key for you by default.
   *
   * To learn which Backup services support full Backup management and how Backup handles encryption for backups from services that do not yet support full Backup, see [Encryption for backups in Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/encryption.html)
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.
   *
   * If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The number of recovery points that are stored in a backup vault. Recovery point count value displayed in the console can be an approximation.
   *
   * @public
   */
  NumberOfRecoveryPoints?: number | undefined;

  /**
   * A Boolean value that indicates whether Backup Vault Lock applies to the selected backup vault. If `true`, Vault Lock prevents delete and update operations on the recovery points in the selected vault.
   *
   * @public
   */
  Locked?: boolean | undefined;

  /**
   * The Backup Vault Lock setting that specifies the minimum retention period that the vault retains its recovery points. If this parameter is not specified, Vault Lock does not enforce a minimum retention period.
   *
   * If specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already stored in the vault prior to Vault Lock are not affected.
   *
   * @public
   */
  MinRetentionDays?: number | undefined;

  /**
   * The Backup Vault Lock setting that specifies the maximum retention period that the vault retains its recovery points. If this parameter is not specified, Vault Lock does not enforce a maximum retention period on the recovery points in the vault (allowing indefinite storage).
   *
   * If specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already stored in the vault prior to Vault Lock are not affected.
   *
   * @public
   */
  MaxRetentionDays?: number | undefined;

  /**
   * The date and time when Backup Vault Lock configuration becomes immutable, meaning it cannot be changed or deleted.
   *
   * If you applied Vault Lock to your vault without specifying a lock date, you can change your Vault Lock settings, or delete Vault Lock from the vault entirely, at any time.
   *
   * This value is in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LockDate?: Date | undefined;

  /**
   * The type of encryption key used for the backup vault. Valid values are CUSTOMER_MANAGED_KMS_KEY for customer-managed keys or Amazon Web Services_OWNED_KMS_KEY for Amazon Web Services-owned keys.
   *
   * @public
   */
  EncryptionKeyType?: EncryptionKeyType | undefined;
}

/**
 * Contains `DeleteAt` and `MoveToColdStorageAt` timestamps, which are used to specify a lifecycle for a recovery point.
 *
 * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.
 *
 * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.
 *
 * Resource types that can transition to cold storage are listed in the [Feature availability by resource](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource) table. Backup ignores this expression for other resource types.
 *
 * @public
 */
export interface CalculatedLifecycle {
  /**
   * A timestamp that specifies when to transition a recovery point to cold storage.
   *
   * @public
   */
  MoveToColdStorageAt?: Date | undefined;

  /**
   * A timestamp that specifies when to delete a recovery point.
   *
   * @public
   */
  DeleteAt?: Date | undefined;
}

/**
 * @public
 */
export interface CancelLegalHoldInput {
  /**
   * The ID of the legal hold.
   *
   * @public
   */
  LegalHoldId: string | undefined;

  /**
   * A string the describes the reason for removing the legal hold.
   *
   * @public
   */
  CancelDescription: string | undefined;

  /**
   * The integer amount, in days, after which to remove legal hold.
   *
   * @public
   */
  RetainRecordInDays?: number | undefined;
}

/**
 * @public
 */
export interface CancelLegalHoldOutput {}

/**
 * The parameters for a control. A control can have zero, one, or more than one parameter. An example of a control with two parameters is: "backup plan frequency is at least `daily` and the retention period is at least `1 year`". The first parameter is `daily`. The second parameter is `1 year`.
 *
 * @public
 */
export interface ControlInputParameter {
  /**
   * The name of a parameter, for example, `BackupPlanFrequency`.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * The value of parameter, for example, `hourly`.
   *
   * @public
   */
  ParameterValue?: string | undefined;
}

/**
 * A framework consists of one or more controls. Each control has its own control scope. The control scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. If no scope is specified, evaluations for the rule are triggered when any resource in your recording group changes in configuration.
 *
 * > **Note:** To set a control scope that includes all of a particular resource, leave the `ControlScope` empty or do not pass it when calling `CreateFramework`.
 *
 * @public
 */
export interface ControlScope {
  /**
   * The ID of the only Amazon Web Services resource that you want your control scope to contain.
   *
   * @public
   */
  ComplianceResourceIds?: string[] | undefined;

  /**
   * Describes whether the control scope includes one or more types of resources, such as `EFS` or `RDS`.
   *
   * @public
   */
  ComplianceResourceTypes?: string[] | undefined;

  /**
   * The tag key-value pair applied to those Amazon Web Services resources that you want to trigger an evaluation for a rule. A maximum of one key-value pair can be provided. The tag value is optional, but it cannot be an empty string if you are creating or editing a framework from the console (though the value can be an empty string when included in a CloudFormation template).
   *
   * The structure to assign a tag is: `[\{"Key":"string","Value":"string"\}]`.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Contains detailed information about a copy job.
 *
 * @public
 */
export interface CopyJob {
  /**
   * The account ID that owns the copy job.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Uniquely identifies a copy job.
   *
   * @public
   */
  CopyJobId?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a source copy vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  SourceBackupVaultArn?: string | undefined;

  /**
   * An ARN that uniquely identifies a source recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  SourceRecoveryPointArn?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a destination copy vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  DestinationBackupVaultArn?: string | undefined;

  /**
   * The type of destination backup vault where the copied recovery point is stored. Valid values are `BACKUP_VAULT` for standard backup vaults and `LOGICALLY_AIR_GAPPED_BACKUP_VAULT` for logically air-gapped vaults.
   *
   * @public
   */
  DestinationVaultType?: string | undefined;

  /**
   * The lock state of the destination backup vault. For logically air-gapped vaults, this indicates whether the vault is locked in compliance mode. Valid values include `LOCKED` and `UNLOCKED`.
   *
   * @public
   */
  DestinationVaultLockState?: string | undefined;

  /**
   * An ARN that uniquely identifies a destination recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  DestinationRecoveryPointArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the copied backup in the destination vault. This can be a customer-managed key or an Amazon Web Services managed key.
   *
   * @public
   */
  DestinationEncryptionKeyArn?: string | undefined;

  /**
   * Specifies the time period, in days, before a recovery point transitions to cold storage or is deleted.
   *
   * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the retention setting must be 90 days greater than the transition to cold after days setting. The transition to cold after days setting can't be changed after a backup has been transitioned to cold.
   *
   * Resource types that can transition to cold storage are listed in the [Feature availability by resource](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource) table. Backup ignores this expression for other resource types.
   *
   * To remove the existing lifecycle and retention periods and keep your recovery points indefinitely, specify -1 for `MoveToColdStorageAfterDays` and `DeleteAfterDays`.
   *
   * @public
   */
  DestinationRecoveryPointLifecycle?: Lifecycle | undefined;

  /**
   * The Amazon Web Services resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The date and time a copy job is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time a copy job is completed, in Unix format and Coordinated Universal Time (UTC). The value of `CompletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * The current state of a copy job.
   *
   * @public
   */
  State?: CopyJobState | undefined;

  /**
   * A detailed message explaining the status of the job to copy a resource.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The size, in bytes, of a copy job.
   *
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * Specifies the IAM role ARN used to copy the target recovery point; for example, `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.
   *
   * @public
   */
  CreatedBy?: RecoveryPointCreator | undefined;

  /**
   * The backup job ID that initiated this copy job. Only applicable to scheduled copy jobs and automatic copy jobs to logically air-gapped vault.
   *
   * @public
   */
  CreatedByBackupJobId?: string | undefined;

  /**
   * The type of Amazon Web Services resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * This uniquely identifies a request to Backup to copy a resource. The return will be the parent (composite) job ID.
   *
   * @public
   */
  ParentJobId?: string | undefined;

  /**
   * This is a boolean value indicating this is a parent (composite) copy job.
   *
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * The identifier of a resource within a composite group, such as nested (child) recovery point belonging to a composite (parent) stack. The ID is transferred from the [logical ID](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax) within a stack.
   *
   * @public
   */
  CompositeMemberIdentifier?: string | undefined;

  /**
   * The number of child (nested) copy jobs.
   *
   * @public
   */
  NumberOfChildJobs?: number | undefined;

  /**
   * This returns the statistics of the included child (nested) copy jobs.
   *
   * @public
   */
  ChildJobsInState?: Partial<Record<CopyJobState, number>> | undefined;

  /**
   * The non-unique name of the resource that belongs to the specified backup.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * This parameter is the job count for the specified message category.
   *
   * Example strings may include `AccessDenied`, `SUCCESS`, `AGGREGATE_ALL`, and `InvalidParameters`. See [Monitoring](https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html) for a list of MessageCategory strings.
   *
   * The the value ANY returns count of all message categories.
   *
   * `AGGREGATE_ALL` aggregates job counts for all message categories and returns the sum
   *
   * @public
   */
  MessageCategory?: string | undefined;
}

/**
 * This is a summary of copy jobs created or running within the most recent 14 days.
 *
 * The returned summary may contain the following: Region, Account, State, RestourceType, MessageCategory, StartTime, EndTime, and Count of included jobs.
 *
 * @public
 */
export interface CopyJobSummary {
  /**
   * The Amazon Web Services Regions within the job summary.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The account ID that owns the jobs within the summary.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * This value is job count for jobs with the specified state.
   *
   * @public
   */
  State?: CopyJobStatus | undefined;

  /**
   * This value is the job count for the specified resource type. The request `GetSupportedResourceTypes` returns strings for supported resource types
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * This parameter is the job count for the specified message category.
   *
   * Example strings include `AccessDenied`, `Success`, and `InvalidParameters`. See [Monitoring](https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html) for a list of MessageCategory strings.
   *
   * The the value ANY returns count of all message categories.
   *
   * `AGGREGATE_ALL` aggregates job counts for all message categories and returns the sum.
   *
   * @public
   */
  MessageCategory?: string | undefined;

  /**
   * The value as a number of jobs in a job summary.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The value of time in number format of a job start time.
   *
   * This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The value of time in number format of a job end time.
   *
   * This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateBackupAccessPointRequest {
  /**
   * Metadata for the backup access point. For continuous (point-in-time) recovery points, you must include an `AccessPointInTime` timestamp (in format `2021-11-27T03:30:27Z`). The access point provides access to the content present in the backup at that specific time. You can specify any time within the continuous backup's retention period, up to the latest restorable time. For snapshot recovery points, do not include `AccessPointInTime`.
   *
   * @public
   */
  AccessPointMetadata?: Record<string, string> | undefined;

  /**
   * An optional resource-based policy, in JSON format, to apply to the underlying Amazon S3 access point. The policy controls how backup data can be accessed through the access point. If you do not specify a policy, access is governed by the caller's IAM permissions. For more information, see [Configuring IAM policies for using access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  AccessPointPolicy?: string | undefined;

  /**
   * The name of the backup access point. This name is shared with the Amazon S3 access point namespace. It must be unique within your account and Region and cannot conflict with an existing Amazon S3 access point. For more information about access point naming, see [Access points naming rules, restrictions, and limitations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-restrictions-limitations-naming-rules.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recovery point for which to create the backup access point. The recovery point must be an Amazon S3 recovery point in the `AVAILABLE`, `STOPPED`, or `COMPLETED` state.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * The tags to assign to the backup access point.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBackupAccessPointResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the created backup access point.
   *
   * @public
   */
  AccessPointArn: string | undefined;

  /**
   * The current status of the backup access point. A newly created backup access point begins in the `CREATING` state and becomes usable when it reaches `AVAILABLE`.
   *
   * @public
   */
  Status: AccessPointStatus | undefined;
}

/**
 * @public
 */
export interface CreateBackupPlanInput {
  /**
   * The body of a backup plan. Includes a `BackupPlanName` and one or more sets of `Rules`.
   *
   * @public
   */
  BackupPlan: BackupPlanInput | undefined;

  /**
   * The tags to assign to the backup plan.
   *
   * @public
   */
  BackupPlanTags?: Record<string, string> | undefined;

  /**
   * Identifies the request and allows failed requests to be retried without the risk of running the operation twice. If the request includes a `CreatorRequestId` that matches an existing backup plan, that plan is returned. This parameter is optional.
   *
   * If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;
}

/**
 * @public
 */
export interface CreateBackupPlanOutput {
  /**
   * The ID of the backup plan.
   *
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, `arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50`.
   *
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * The date and time that a backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. They cannot be edited.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The settings for a resource type. This option is only available for Windows Volume Shadow Copy Service (VSS) backup jobs.
   *
   * @public
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[] | undefined;
}

/**
 * @public
 */
export interface CreateBackupSelectionInput {
  /**
   * The ID of the backup plan.
   *
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * The body of a request to assign a set of resources to a backup plan.
   *
   * @public
   */
  BackupSelection: BackupSelection | undefined;

  /**
   * A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.
   *
   * If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;
}

/**
 * @public
 */
export interface CreateBackupSelectionOutput {
  /**
   * Uniquely identifies the body of a request to assign a set of resources to a backup plan.
   *
   * @public
   */
  SelectionId?: string | undefined;

  /**
   * The ID of the backup plan.
   *
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * The date and time a backup selection is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface CreateBackupVaultInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of letters, numbers, and hyphens.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The tags to assign to the backup vault.
   *
   * @public
   */
  BackupVaultTags?: Record<string, string> | undefined;

  /**
   * The server-side encryption key that is used to protect your backups; for example, `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.
   *
   * If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;
}

/**
 * @public
 */
export interface CreateBackupVaultOutput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * The date and time a backup vault is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.
 *
 * @public
 */
export interface FrameworkControl {
  /**
   * The name of a control. This name is between 1 and 256 characters.
   *
   * @public
   */
  ControlName: string | undefined;

  /**
   * The name/value pairs.
   *
   * @public
   */
  ControlInputParameters?: ControlInputParameter[] | undefined;

  /**
   * The scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans.
   *
   * For more information, see [`ControlScope`.](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ControlScope.html)
   *
   * @public
   */
  ControlScope?: ControlScope | undefined;
}

/**
 * @public
 */
export interface CreateFrameworkInput {
  /**
   * The unique name of the framework. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
   *
   * @public
   */
  FrameworkName: string | undefined;

  /**
   * An optional description of the framework with a maximum of 1,024 characters.
   *
   * @public
   */
  FrameworkDescription?: string | undefined;

  /**
   * The controls that make up the framework. Each control in the list has a name, input parameters, and scope.
   *
   * @public
   */
  FrameworkControls: FrameworkControl[] | undefined;

  /**
   * A customer-chosen string that you can use to distinguish between otherwise identical calls to `CreateFrameworkInput`. Retrying a successful request with the same idempotency token results in a success message with no action taken.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * The tags to assign to the framework.
   *
   * @public
   */
  FrameworkTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFrameworkOutput {
  /**
   * The unique name of the framework. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
   *
   * @public
   */
  FrameworkName?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  FrameworkArn?: string | undefined;
}

/**
 * This is a resource filter containing FromDate: DateTime and ToDate: DateTime. Both values are required. Future DateTime values are not permitted.
 *
 * The date and time are in Unix format and Coordinated Universal Time (UTC), and it is accurate to milliseconds ((milliseconds are optional). For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
 *
 * @public
 */
export interface DateRange {
  /**
   * This value is the beginning date, inclusive.
   *
   * The date and time are in Unix format and Coordinated Universal Time (UTC), and it is accurate to milliseconds (milliseconds are optional).
   *
   * @public
   */
  FromDate: Date | undefined;

  /**
   * This value is the end date, inclusive.
   *
   * The date and time are in Unix format and Coordinated Universal Time (UTC), and it is accurate to milliseconds (milliseconds are optional).
   *
   * @public
   */
  ToDate: Date | undefined;
}

/**
 * This specifies criteria to assign a set of resources, such as resource types or backup vaults.
 *
 * @public
 */
export interface RecoveryPointSelection {
  /**
   * These are the names of the vaults in which the selected recovery points are contained.
   *
   * @public
   */
  VaultNames?: string[] | undefined;

  /**
   * These are the resources included in the resource selection (including type of resources and vaults).
   *
   * @public
   */
  ResourceIdentifiers?: string[] | undefined;

  /**
   * This is a resource filter containing FromDate: DateTime and ToDate: DateTime. Both values are required. Future DateTime values are not permitted.
   *
   * The date and time are in Unix format and Coordinated Universal Time (UTC), and it is accurate to milliseconds ((milliseconds are optional). For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  DateRange?: DateRange | undefined;
}

/**
 * @public
 */
export interface CreateLegalHoldInput {
  /**
   * The title of the legal hold.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The description of the legal hold.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * This is a user-chosen string used to distinguish between otherwise identical calls. Retrying a successful request with the same idempotency token results in a success message with no action taken.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * The criteria to assign a set of resources, such as resource types or backup vaults.
   *
   * @public
   */
  RecoveryPointSelection?: RecoveryPointSelection | undefined;

  /**
   * Optional tags to include. A tag is a key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ : /.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLegalHoldOutput {
  /**
   * The title of the legal hold.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The status of the legal hold.
   *
   * @public
   */
  Status?: LegalHoldStatus | undefined;

  /**
   * The description of the legal hold.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the legal hold.
   *
   * @public
   */
  LegalHoldId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the legal hold.
   *
   * @public
   */
  LegalHoldArn?: string | undefined;

  /**
   * The time when the legal hold was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The criteria to assign to a set of resources, such as resource types or backup vaults.
   *
   * @public
   */
  RecoveryPointSelection?: RecoveryPointSelection | undefined;
}

/**
 * @public
 */
export interface CreateLogicallyAirGappedBackupVaultInput {
  /**
   * The name of a logical container where backups are stored. Logically air-gapped backup vaults are identified by names that are unique to the account used to create them and the Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The tags to assign to the vault.
   *
   * @public
   */
  BackupVaultTags?: Record<string, string> | undefined;

  /**
   * The ID of the creation request.
   *
   * This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * This setting specifies the minimum retention period that the vault retains its recovery points.
   *
   * The minimum value accepted is 7 days.
   *
   * @public
   */
  MinRetentionDays: number | undefined;

  /**
   * The maximum retention period that the vault retains its recovery points.
   *
   * @public
   */
  MaxRetentionDays: number | undefined;

  /**
   * The ARN of the customer-managed KMS key to use for encrypting the logically air-gapped backup vault. If not specified, the vault will be encrypted with an Amazon Web Services-owned key managed by Amazon Web Services Backup.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateLogicallyAirGappedBackupVaultOutput {
  /**
   * The name of a logical container where backups are stored. Logically air-gapped backup vaults are identified by names that are unique to the account used to create them and the Region where they are created.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the vault.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * The date and time when the vault was created.
   *
   * This value is in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The current state of the vault.
   *
   * @public
   */
  VaultState?: VaultState | undefined;
}

/**
 * Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
 *
 * @public
 */
export interface ReportDeliveryChannel {
  /**
   * The unique name of the S3 bucket that receives your reports.
   *
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * The prefix for where Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/`prefix`/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * The format of your reports: `CSV`, `JSON`, or both. If not specified, the default format is `CSV`.
   *
   * @public
   */
  Formats?: string[] | undefined;
}

/**
 * Contains detailed information about a report setting.
 *
 * @public
 */
export interface ReportSetting {
  /**
   * Identifies the report template for the report. Reports are built using a report template. The report templates are:
   *
   * `RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT | SCAN_JOB_REPORT`
   *
   * @public
   */
  ReportTemplate: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the frameworks a report covers.
   *
   * @public
   */
  FrameworkArns?: string[] | undefined;

  /**
   * The number of frameworks a report covers.
   *
   * @public
   */
  NumberOfFrameworks?: number | undefined;

  /**
   * These are the accounts to be included in the report.
   *
   * Use string value of `ROOT` to include all organizational units.
   *
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * These are the Organizational Units to be included in the report.
   *
   * @public
   */
  OrganizationUnits?: string[] | undefined;

  /**
   * These are the Regions to be included in the report.
   *
   * Use the wildcard as the string value to include all Regions.
   *
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateReportPlanInput {
  /**
   * The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
   *
   * @public
   */
  ReportPlanName: string | undefined;

  /**
   * An optional description of the report plan with a maximum of 1,024 characters.
   *
   * @public
   */
  ReportPlanDescription?: string | undefined;

  /**
   * A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
   *
   * @public
   */
  ReportDeliveryChannel: ReportDeliveryChannel | undefined;

  /**
   * Identifies the report template for the report. Reports are built using a report template. The report templates are:
   *
   * `RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT | SCAN_JOB_REPORT`
   *
   * If the report template is `RESOURCE_COMPLIANCE_REPORT` or `CONTROL_COMPLIANCE_REPORT`, this API resource also describes the report coverage by Amazon Web Services Regions and frameworks.
   *
   * @public
   */
  ReportSetting: ReportSetting | undefined;

  /**
   * The tags to assign to the report plan.
   *
   * @public
   */
  ReportPlanTags?: Record<string, string> | undefined;

  /**
   * A customer-chosen string that you can use to distinguish between otherwise identical calls to `CreateReportPlanInput`. Retrying a successful request with the same idempotency token results in a success message with no action taken.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateReportPlanOutput {
  /**
   * The unique name of the report plan.
   *
   * @public
   */
  ReportPlanName?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  ReportPlanArn?: string | undefined;

  /**
   * The date and time a backup vault is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRestoreAccessBackupVaultInput {
  /**
   * The ARN of the source backup vault containing the recovery points to which temporary access is requested.
   *
   * @public
   */
  SourceBackupVaultArn: string | undefined;

  /**
   * The name of the backup vault to associate with an MPA approval team.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * Optional tags to assign to the restore access backup vault.
   *
   * @public
   */
  BackupVaultTags?: Record<string, string> | undefined;

  /**
   * A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * A comment explaining the reason for requesting restore access to the backup vault.
   *
   * @public
   */
  RequesterComment?: string | undefined;
}

/**
 * @public
 */
export interface CreateRestoreAccessBackupVaultOutput {
  /**
   * The ARN that uniquely identifies the created restore access backup vault.
   *
   * @public
   */
  RestoreAccessBackupVaultArn?: string | undefined;

  /**
   * The current state of the restore access backup vault.
   *
   * @public
   */
  VaultState?: VaultState | undefined;

  /**
   * The name of the created restore access backup vault.
   *
   * @public
   */
  RestoreAccessBackupVaultName?: string | undefined;

  /**
   * >The date and time when the restore access backup vault was created, in Unix format and Coordinated Universal Time
   *
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * `RecoveryPointSelection` has five parameters (three required and two optional). The values you specify determine which recovery point is included in the restore test. You must indicate with `Algorithm` if you want the latest recovery point within your `SelectionWindowDays` or if you want a random recovery point, and you must indicate through `IncludeVaults` from which vaults the recovery points can be chosen.
 *
 * `Algorithm` (*required*) Valid values: "`LATEST_WITHIN_WINDOW`" or "`RANDOM_WITHIN_WINDOW`".
 *
 * `Recovery point types` (*required*) Valid values: "`SNAPSHOT`" and/or "`CONTINUOUS`". Include `SNAPSHOT` to restore only snapshot recovery points; include `CONTINUOUS` to restore continuous recovery points (point in time restore / PITR); use both to restore either a snapshot or a continuous recovery point. The recovery point will be determined by the value for `Algorithm`.
 *
 * `IncludeVaults` (*required*). You must include one or more backup vaults. Use the wildcard ["*"] or specific ARNs.
 *
 * `SelectionWindowDays` (*optional*) Value must be an integer (in days) from 1 to 365. If not included, the value defaults to `30`.
 *
 * `ExcludeVaults` (*optional*). You can choose to input one or more specific backup vault ARNs to exclude those vaults' contents from restore eligibility. Or, you can include a list of selectors. If this parameter and its value are not included, it defaults to empty list.
 *
 * @public
 */
export interface RestoreTestingRecoveryPointSelection {
  /**
   * Acceptable values include "LATEST_WITHIN_WINDOW" or "RANDOM_WITHIN_WINDOW"
   *
   * @public
   */
  Algorithm?: RestoreTestingRecoveryPointSelectionAlgorithm | undefined;

  /**
   * Accepted values include specific ARNs or list of selectors. Defaults to empty list if not listed.
   *
   * @public
   */
  ExcludeVaults?: string[] | undefined;

  /**
   * Accepted values include wildcard ["*"] or by specific ARNs or ARN wilcard replacement ["arn:aws:backup:us-west-2:123456789012:backup-vault:asdf", ...] ["arn:aws:backup:*:*:backup-vault:asdf-*", ...]
   *
   * @public
   */
  IncludeVaults?: string[] | undefined;

  /**
   * These are the types of recovery points.
   *
   * Include `SNAPSHOT` to restore only snapshot recovery points; include `CONTINUOUS` to restore continuous recovery points (point in time restore / PITR); use both to restore either a snapshot or a continuous recovery point. The recovery point will be determined by the value for `Algorithm`.
   *
   * @public
   */
  RecoveryPointTypes?: RestoreTestingRecoveryPointType[] | undefined;

  /**
   * Accepted values are integers from 1 to 365. If not included, the value defaults to 30. The selection window is calculated from the actual job execution time, not the plan's scheduled start time.
   *
   * @public
   */
  SelectionWindowDays?: number | undefined;
}

/**
 * This contains metadata about a restore testing plan.
 *
 * @public
 */
export interface RestoreTestingPlanForCreate {
  /**
   * `RecoveryPointSelection` has five parameters (three required and two optional). The values you specify determine which recovery point is included in the restore test. You must indicate with `Algorithm` if you want the latest recovery point within your `SelectionWindowDays` or if you want a random recovery point, and you must indicate through `IncludeVaults` from which vaults the recovery points can be chosen.
   *
   * `Algorithm` (*required*) Valid values: "`LATEST_WITHIN_WINDOW`" or "`RANDOM_WITHIN_WINDOW`".
   *
   * `Recovery point types` (*required*) Valid values: "`SNAPSHOT`" and/or "`CONTINUOUS`". Include `SNAPSHOT` to restore only snapshot recovery points; include `CONTINUOUS` to restore continuous recovery points (point in time restore / PITR); use both to restore either a snapshot or a continuous recovery point. The recovery point will be determined by the value for `Algorithm`.
   *
   * `IncludeVaults` (*required*). You must include one or more backup vaults. Use the wildcard ["*"] or specific ARNs.
   *
   * `SelectionWindowDays` (*optional*) Value must be an integer (in days) from 1 to 365. If not included, the value defaults to `30`.
   *
   * `ExcludeVaults` (*optional*). You can choose to input one or more specific backup vault ARNs to exclude those vaults' contents from restore eligibility. Or, you can include a list of selectors. If this parameter and its value are not included, it defaults to empty list.
   *
   * @public
   */
  RecoveryPointSelection: RestoreTestingRecoveryPointSelection | undefined;

  /**
   * The RestoreTestingPlanName is a unique string that is the name of the restore testing plan. This cannot be changed after creation, and it must consist of only alphanumeric characters and underscores.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * A CRON expression in specified timezone when a restore testing plan is executed. When no CRON expression is provided, Backup will use the default expression `cron(0 5 ? * * *)`.
   *
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * Optional. This is the timezone in which the schedule expression is set. By default, ScheduleExpressions are in UTC. You can modify this to a specified timezone.
   *
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * Defaults to 24 hours.
   *
   * A value in hours after a restore test is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. If this value is included, this parameter has a maximum value of 168 hours (one week).
   *
   * @public
   */
  StartWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface CreateRestoreTestingPlanInput {
  /**
   * This is a unique string that identifies the request and allows failed requests to be retriedwithout the risk of running the operation twice. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * A restore testing plan must contain a unique `RestoreTestingPlanName` string you create and must contain a `ScheduleExpression` cron. You may optionally include a `StartWindowHours` integer and a `CreatorRequestId` string.
   *
   * The `RestoreTestingPlanName` is a unique string that is the name of the restore testing plan. This cannot be changed after creation, and it must consist of only alphanumeric characters and underscores.
   *
   * @public
   */
  RestoreTestingPlan: RestoreTestingPlanForCreate | undefined;

  /**
   * The tags to assign to the restore testing plan.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRestoreTestingPlanOutput {
  /**
   * The date and time a restore testing plan was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087AM.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies the created restore testing plan.
   *
   * @public
   */
  RestoreTestingPlanArn: string | undefined;

  /**
   * This unique string is the name of the restore testing plan.
   *
   * The name cannot be changed after creation. The name consists of only alphanumeric characters and underscores. Maximum length is 50.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;
}

/**
 * Pair of two related strings. Allowed characters are letters, white space, and numbers that can be represented in UTF-8 and the following characters: `+ - = . _ : /`
 *
 * @public
 */
export interface KeyValue {
  /**
   * The tag key (String). The key can't start with `aws:`.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 128.
   *
   * Pattern: `^(?![aA]\{1\}[wW]\{1\}[sS]\{1\}:)([\p\{L\}\p\{Z\}\p\{N\}_.:/=+\-@]+)$`
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the key.
   *
   * Length Constraints: Maximum length of 256.
   *
   * Pattern: `^([\p\{L\}\p\{Z\}\p\{N\}_.:/=+\-@]*)$`
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The conditions that you define for resources in your restore testing plan using tags.
 *
 * @public
 */
export interface ProtectedResourceConditions {
  /**
   * Filters the values of your tagged resources for only those resources that you tagged with the same value. Also called "exact matching."
   *
   * @public
   */
  StringEquals?: KeyValue[] | undefined;

  /**
   * Filters the values of your tagged resources for only those resources that you tagged that do not have the same value. Also called "negated matching."
   *
   * @public
   */
  StringNotEquals?: KeyValue[] | undefined;
}

/**
 * This contains metadata about a specific restore testing selection.
 *
 * ProtectedResourceType is required, such as Amazon EBS or Amazon EC2.
 *
 * This consists of `RestoreTestingSelectionName`, `ProtectedResourceType`, and one of the following:
 *
 * - `ProtectedResourceArns`
 * - `ProtectedResourceConditions`
 *
 * Each protected resource type can have one single value.
 *
 * A restore testing selection can include a wildcard value ("*") for `ProtectedResourceArns` along with `ProtectedResourceConditions`. Alternatively, you can include up to 30 specific protected resource ARNs in `ProtectedResourceArns`.
 *
 * `ProtectedResourceConditions` examples include as `StringEquals` and `StringNotEquals`.
 *
 * @public
 */
export interface RestoreTestingSelectionForCreate {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that Backup uses to create the target resource; for example: `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * Each protected resource can be filtered by its specific ARNs, such as `ProtectedResourceArns: ["arn:aws:...", "arn:aws:..."]` or by a wildcard: `ProtectedResourceArns: ["*"]`, but not both.
   *
   * @public
   */
  ProtectedResourceArns?: string[] | undefined;

  /**
   * If you have included the wildcard in ProtectedResourceArns, you can include resource conditions, such as `ProtectedResourceConditions: \{ StringEquals: [\{ key: "XXXX", value: "YYYY" \}]`.
   *
   * @public
   */
  ProtectedResourceConditions?: ProtectedResourceConditions | undefined;

  /**
   * The type of Amazon Web Services resource included in a restore testing selection; for example, an Amazon EBS volume or an Amazon RDS database.
   *
   * Supported resource types accepted include:
   *
   * - `Aurora` for Amazon Aurora
   * - `DocumentDB` for Amazon DocumentDB (with MongoDB compatibility)
   * - `DynamoDB` for Amazon DynamoDB
   * - `EBS` for Amazon Elastic Block Store
   * - `EC2` for Amazon Elastic Compute Cloud
   * - `EFS` for Amazon Elastic File System
   * - `FSx` for Amazon FSx
   * - `Neptune` for Amazon Neptune
   * - `RDS` for Amazon Relational Database Service
   * - `S3` for Amazon S3
   *
   * @public
   */
  ProtectedResourceType: string | undefined;

  /**
   * You can override certain restore metadata keys by including the parameter `RestoreMetadataOverrides` in the body of `RestoreTestingSelection`. Key values are not case sensitive.
   *
   * See the complete list of [restore testing inferred metadata](https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing-inferred-metadata.html).
   *
   * @public
   */
  RestoreMetadataOverrides?: Record<string, string> | undefined;

  /**
   * The unique name of the restore testing selection that belongs to the related restore testing plan.
   *
   * The name consists of only alphanumeric characters and underscores. Maximum length is 50.
   *
   * @public
   */
  RestoreTestingSelectionName: string | undefined;

  /**
   * This is amount of hours (0 to 168) available to run a validation script on the data. The data will be deleted upon the completion of the validation script or the end of the specified retention period, whichever comes first.
   *
   * @public
   */
  ValidationWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface CreateRestoreTestingSelectionInput {
  /**
   * This is an optional unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * Input the restore testing plan name that was returned from the related CreateRestoreTestingPlan request.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * This consists of `RestoreTestingSelectionName`, `ProtectedResourceType`, and one of the following:
   *
   * - `ProtectedResourceArns`
   * - `ProtectedResourceConditions`
   *
   * Each protected resource type can have one single value.
   *
   * A restore testing selection can include a wildcard value ("*") for `ProtectedResourceArns` along with `ProtectedResourceConditions`. Alternatively, you can include up to 30 specific protected resource ARNs in `ProtectedResourceArns`.
   *
   * @public
   */
  RestoreTestingSelection: RestoreTestingSelectionForCreate | undefined;
}

/**
 * @public
 */
export interface CreateRestoreTestingSelectionOutput {
  /**
   * The time that the resource testing selection was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The ARN of the restore testing plan with which the restore testing selection is associated.
   *
   * @public
   */
  RestoreTestingPlanArn: string | undefined;

  /**
   * The name of the restore testing plan.
   *
   * The name cannot be changed after creation. The name consists of only alphanumeric characters and underscores. Maximum length is 50.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * The name of the restore testing selection for the related restore testing plan.
   *
   * The name cannot be changed after creation. The name consists of only alphanumeric characters and underscores. Maximum length is 50.
   *
   * @public
   */
  RestoreTestingSelectionName: string | undefined;
}

/**
 * This contains metadata about resource selection for tiering configurations.
 *
 * You can specify up to 5 different resource selections per tiering configuration. Data moved to lower-cost tier remains there until deletion (one-way transition).
 *
 * @public
 */
export interface ResourceSelection {
  /**
   * An array of strings that either contains ARNs of the associated resources or contains a wildcard `*` to specify all resources. You can specify up to 100 specific resources per tiering configuration.
   *
   * @public
   */
  Resources: string[] | undefined;

  /**
   * The number of days after creation within a backup vault that an object can transition to the low cost warm storage tier. Must be a positive integer between 60 and 36500 days.
   *
   * @public
   */
  TieringDownSettingsInDays: number | undefined;

  /**
   * The type of Amazon Web Services resource; for example, `S3` for Amazon S3. For tiering configurations, this is currently limited to `S3`.
   *
   * @public
   */
  ResourceType: string | undefined;
}

/**
 * This contains metadata about a tiering configuration for create operations.
 *
 * @public
 */
export interface TieringConfigurationInputForCreate {
  /**
   * The unique name of the tiering configuration. This cannot be changed after creation, and it must consist of only alphanumeric characters and underscores.
   *
   * @public
   */
  TieringConfigurationName: string | undefined;

  /**
   * The name of the backup vault where the tiering configuration applies. Use `*` to apply to all backup vaults.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * An array of resource selection objects that specify which resources are included in the tiering configuration and their tiering settings.
   *
   * @public
   */
  ResourceSelection: ResourceSelection[] | undefined;
}

/**
 * @public
 */
export interface CreateTieringConfigurationInput {
  /**
   * A tiering configuration must contain a unique `TieringConfigurationName` string you create and must contain a `BackupVaultName` and `ResourceSelection`. You may optionally include a `CreatorRequestId` string.
   *
   * The `TieringConfigurationName` is a unique string that is the name of the tiering configuration. This cannot be changed after creation, and it must consist of only alphanumeric characters and underscores.
   *
   * @public
   */
  TieringConfiguration: TieringConfigurationInputForCreate | undefined;

  /**
   * The tags to assign to the tiering configuration.
   *
   * @public
   */
  TieringConfigurationTags?: Record<string, string> | undefined;

  /**
   * This is a unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;
}

/**
 * @public
 */
export interface CreateTieringConfigurationOutput {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies the created tiering configuration.
   *
   * @public
   */
  TieringConfigurationArn?: string | undefined;

  /**
   * This unique string is the name of the tiering configuration.
   *
   * The name cannot be changed after creation. The name consists of only alphanumeric characters and underscores. Maximum length is 200.
   *
   * @public
   */
  TieringConfigurationName?: string | undefined;

  /**
   * The date and time a tiering configuration was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087AM.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteBackupAccessPointInput {
  /**
   * The Amazon Resource Name (ARN) of the backup access point to delete.
   *
   * @public
   */
  AccessPointArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupPlanInput {
  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupPlanOutput {
  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, `arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50`.
   *
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * The date and time a backup plan is deleted, in Unix format and Coordinated Universal Time (UTC). The value of `DeletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  DeletionDate?: Date | undefined;

  /**
   * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupSelectionInput {
  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * Uniquely identifies the body of a request to assign a set of resources to a backup plan.
   *
   * @public
   */
  SelectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupVaultInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupVaultAccessPolicyInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
   *
   * @public
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupVaultLockConfigurationInput {
  /**
   * The name of the backup vault from which to delete Backup Vault Lock.
   *
   * @public
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupVaultNotificationsInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFrameworkInput {
  /**
   * The unique name of a framework.
   *
   * @public
   */
  FrameworkName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecoveryPointInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteReportPlanInput {
  /**
   * The unique name of a report plan.
   *
   * @public
   */
  ReportPlanName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRestoreTestingPlanInput {
  /**
   * Required unique name of the restore testing plan you wish to delete.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRestoreTestingSelectionInput {
  /**
   * Required unique name of the restore testing plan that contains the restore testing selection you wish to delete.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * Required unique name of the restore testing selection you wish to delete.
   *
   * @public
   */
  RestoreTestingSelectionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTieringConfigurationInput {
  /**
   * The unique name of a tiering configuration.
   *
   * @public
   */
  TieringConfigurationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTieringConfigurationOutput {}

/**
 * @public
 */
export interface DescribeBackupAccessPointInput {
  /**
   * The Amazon Resource Name (ARN) of the backup access point to describe.
   *
   * @public
   */
  AccessPointArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeBackupAccessPointResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the backup access point.
   *
   * @public
   */
  AccessPointArn: string | undefined;

  /**
   * Metadata for the backup access point. After the backup access point reaches the `AVAILABLE` status, this map contains `S3AccessPointArn` and `S3AccessPointAlias`, which you use with standard Amazon S3 read APIs to access the backup data. For continuous recovery points, this map also contains `AccessPointInTime` (in format `2021-11-27T03:30:27Z`). The access point provides access to the content present in the backup at that specific time.
   *
   * @public
   */
  AccessPointMetadata?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the backup vault that contains the recovery point.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * The name of the backup vault that contains the recovery point.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The date and time that the backup access point was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The name of the backup access point.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recovery point that the backup access point provides access to.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource that was backed up, such as an Amazon S3 bucket.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The type of Amazon Web Services resource associated with the recovery point. For example, `S3` for Amazon Simple Storage Service.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The current status of the backup access point.
   *
   * @public
   */
  Status: AccessPointStatus | undefined;

  /**
   * A message that provides additional detail about the status of the backup access point, such as the reason a creation or deletion attempt failed.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBackupJobInput {
  /**
   * Uniquely identifies a request to Backup to back up a resource.
   *
   * @public
   */
  BackupJobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBackupJobOutput {
  /**
   * Returns the account ID that owns the backup job.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Uniquely identifies a request to Backup to back up a resource.
   *
   * @public
   */
  BackupJobId?: string | undefined;

  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * Specifies the time period, in days, before a recovery point transitions to cold storage or is deleted.
   *
   * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the retention setting must be 90 days greater than the transition to cold after days setting. The transition to cold after days setting can't be changed after a backup has been transitioned to cold.
   *
   * Resource types that can transition to cold storage are listed in the [Feature availability by resource](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource) table. Backup ignores this expression for other resource types.
   *
   * To remove the existing lifecycle and retention periods and keep your recovery points indefinitely, specify -1 for `MoveToColdStorageAfterDays` and `DeleteAfterDays`.
   *
   * @public
   */
  RecoveryPointLifecycle?: Lifecycle | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * The type of backup vault where the recovery point is stored. Valid values are `BACKUP_VAULT` for standard backup vaults and `LOGICALLY_AIR_GAPPED_BACKUP_VAULT` for logically air-gapped vaults.
   *
   * @public
   */
  VaultType?: string | undefined;

  /**
   * The lock state of the backup vault. For logically air-gapped vaults, this indicates whether the vault is locked in compliance mode. Valid values include `LOCKED` and `UNLOCKED`.
   *
   * @public
   */
  VaultLockState?: string | undefined;

  /**
   * An ARN that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the backup. This can be a customer-managed key or an Amazon Web Services managed key, depending on the vault configuration.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * A boolean value indicating whether the backup is encrypted. All backups in Backup are encrypted, but this field indicates the encryption status for transparency.
   *
   * @public
   */
  IsEncrypted?: boolean | undefined;

  /**
   * An ARN that uniquely identifies a saved resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The date and time that a backup job is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time that a job to create a backup job is completed, in Unix format and Coordinated Universal Time (UTC). The value of `CompletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * The current state of a backup job.
   *
   * @public
   */
  State?: BackupJobState | undefined;

  /**
   * A detailed message explaining the status of the job to back up a resource.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Contains an estimated percentage that is complete of a job at the time the job status was queried.
   *
   * @public
   */
  PercentDone?: string | undefined;

  /**
   * The size, in bytes, of a backup (recovery point).
   *
   * This value can render differently depending on the resource type as Backup pulls in data information from other Amazon Web Services services. For example, the value returned may show a value of `0`, which may differ from the anticipated value.
   *
   * The expected behavior for values by resource type are described as follows:
   *
   * - Amazon Aurora, Amazon DocumentDB, and Amazon Neptune do not have this value populate from the operation `GetBackupJobStatus`.
   * - For Amazon DynamoDB with advanced features, this value refers to the size of the recovery point (backup).
   * - Amazon EC2 and Amazon EBS show volume size (provisioned storage) returned as part of this value. Amazon EBS does not return backup size information; snapshot size will have the same value as the original resource that was backed up.
   * - For Amazon EFS, this value refers to the delta bytes transferred during a backup.
   * - For Amazon EKS, this value refers to the size of your nested EKS recovery point.
   * - Amazon FSx does not populate this value from the operation `GetBackupJobStatus` for FSx file systems.
   * - An Amazon RDS instance will show as `0`.
   * - For virtual machines running VMware, this value is passed to Backup through an asynchronous workflow, which can mean this displayed value can under-represent the actual backup size.
   *
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * Specifies the IAM role ARN used to create the target recovery point; for example, `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * Contains identifying information about the creation of a backup job, including the `BackupPlanArn`, `BackupPlanId`, `BackupPlanVersion`, and `BackupRuleId` of the backup plan that is used to create it.
   *
   * @public
   */
  CreatedBy?: RecoveryPointCreator | undefined;

  /**
   * The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The size in bytes transferred to a backup vault at the time that the job status was queried.
   *
   * @public
   */
  BytesTransferred?: number | undefined;

  /**
   * The date and time that a job to back up resources is expected to be completed, in Unix format and Coordinated Universal Time (UTC). The value of `ExpectedCompletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  ExpectedCompletionDate?: Date | undefined;

  /**
   * Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job must be started before it is canceled. The value is calculated by adding the start window to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2 hours, the `StartBy` time would be 8:00 PM on the date specified. The value of `StartBy` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  StartBy?: Date | undefined;

  /**
   * Represents the options specified as part of backup plan or on-demand backup job.
   *
   * @public
   */
  BackupOptions?: Record<string, string> | undefined;

  /**
   * Represents the actual backup type selected for a backup job. For example, if a successful Windows Volume Shadow Copy Service (VSS) backup was taken, `BackupType` returns `"WindowsVSS"`. If `BackupType` is empty, then the backup type was a regular backup.
   *
   * @public
   */
  BackupType?: string | undefined;

  /**
   * This returns the parent (composite) resource backup job ID.
   *
   * @public
   */
  ParentJobId?: string | undefined;

  /**
   * This returns the boolean value that a backup job is a parent (composite) job.
   *
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * This returns the number of child (nested) backup jobs.
   *
   * @public
   */
  NumberOfChildJobs?: number | undefined;

  /**
   * This returns the statistics of the included child (nested) backup jobs.
   *
   * @public
   */
  ChildJobsInState?: Partial<Record<BackupJobState, number>> | undefined;

  /**
   * The non-unique name of the resource that belongs to the specified backup.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The date a backup job was initiated.
   *
   * @public
   */
  InitiationDate?: Date | undefined;

  /**
   * The job count for the specified message category.
   *
   * Example strings may include `AccessDenied`, `SUCCESS`, `AGGREGATE_ALL`, and `INVALIDPARAMETERS`. View [Monitoring](https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html) for a list of accepted MessageCategory strings.
   *
   * @public
   */
  MessageCategory?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBackupVaultInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The account ID of the specified backup vault.
   *
   * @public
   */
  BackupVaultAccountId?: string | undefined;
}

/**
 * Contains information about the latest update to an MPA approval team association.
 *
 * @public
 */
export interface LatestMpaApprovalTeamUpdate {
  /**
   * The ARN of the MPA session associated with this update.
   *
   * @public
   */
  MpaSessionArn?: string | undefined;

  /**
   * The current status of the MPA approval team update.
   *
   * @public
   */
  Status?: MpaSessionStatus | undefined;

  /**
   * A message describing the current status of the MPA approval team update.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The date and time when the MPA approval team update was initiated.
   *
   * @public
   */
  InitiationDate?: Date | undefined;

  /**
   * The date and time when the MPA approval team update will expire.
   *
   * @public
   */
  ExpiryDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeBackupVaultOutput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * The type of vault described.
   *
   * @public
   */
  VaultType?: VaultType | undefined;

  /**
   * The current state of the vault.->
   *
   * @public
   */
  VaultState?: VaultState | undefined;

  /**
   * The server-side encryption key that is used to protect your backups; for example, `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * The date and time that a backup vault is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The number of recovery points that are stored in a backup vault.
   *
   * Recovery point count value displayed in the console can be an approximation. Use [`ListRecoveryPointsByBackupVault`](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByBackupVault.html) API to obtain the exact count.
   *
   * @public
   */
  NumberOfRecoveryPoints?: number | undefined;

  /**
   * A Boolean that indicates whether Backup Vault Lock is currently protecting the backup vault. `True` means that Vault Lock causes delete or update operations on the recovery points stored in the vault to fail.
   *
   * @public
   */
  Locked?: boolean | undefined;

  /**
   * The Backup Vault Lock setting that specifies the minimum retention period that the vault retains its recovery points. If this parameter is not specified, Vault Lock will not enforce a minimum retention period.
   *
   * If specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already stored in the vault prior to Vault Lock are not affected.
   *
   * @public
   */
  MinRetentionDays?: number | undefined;

  /**
   * The Backup Vault Lock setting that specifies the maximum retention period that the vault retains its recovery points. If this parameter is not specified, Vault Lock does not enforce a maximum retention period on the recovery points in the vault (allowing indefinite storage).
   *
   * If specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already stored in the vault prior to Vault Lock are not affected.
   *
   * @public
   */
  MaxRetentionDays?: number | undefined;

  /**
   * The date and time when Backup Vault Lock configuration cannot be changed or deleted.
   *
   * If you applied Vault Lock to your vault without specifying a lock date, you can change any of your Vault Lock settings, or delete Vault Lock from the vault entirely, at any time.
   *
   * This value is in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LockDate?: Date | undefined;

  /**
   * The ARN of the source backup vault from which this restore access backup vault was created.
   *
   * @public
   */
  SourceBackupVaultArn?: string | undefined;

  /**
   * The ARN of the MPA approval team associated with this backup vault.
   *
   * @public
   */
  MpaApprovalTeamArn?: string | undefined;

  /**
   * The ARN of the MPA session associated with this backup vault.
   *
   * @public
   */
  MpaSessionArn?: string | undefined;

  /**
   * Information about the latest update to the MPA approval team association for this backup vault.
   *
   * @public
   */
  LatestMpaApprovalTeamUpdate?: LatestMpaApprovalTeamUpdate | undefined;

  /**
   * The type of encryption key used for the backup vault. Valid values are CUSTOMER_MANAGED_KMS_KEY for customer-managed keys or Amazon Web Services_OWNED_KMS_KEY for Amazon Web Services-owned keys.
   *
   * @public
   */
  EncryptionKeyType?: EncryptionKeyType | undefined;
}

/**
 * @public
 */
export interface DescribeCopyJobInput {
  /**
   * Uniquely identifies a copy job.
   *
   * @public
   */
  CopyJobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCopyJobOutput {
  /**
   * Contains detailed information about a copy job.
   *
   * @public
   */
  CopyJob?: CopyJob | undefined;
}

/**
 * @public
 */
export interface DescribeFrameworkInput {
  /**
   * The unique name of a framework.
   *
   * @public
   */
  FrameworkName: string | undefined;
}

/**
 * @public
 */
export interface DescribeFrameworkOutput {
  /**
   * The unique name of a framework.
   *
   * @public
   */
  FrameworkName?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  FrameworkArn?: string | undefined;

  /**
   * An optional description of the framework.
   *
   * @public
   */
  FrameworkDescription?: string | undefined;

  /**
   * The controls that make up the framework. Each control in the list has a name, input parameters, and scope.
   *
   * @public
   */
  FrameworkControls?: FrameworkControl[] | undefined;

  /**
   * The date and time that a framework is created, in ISO 8601 representation. The value of `CreationTime` is accurate to milliseconds. For example, 2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind UTC.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The deployment status of a framework. The statuses are:
   *
   * `CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED | FAILED`
   *
   * @public
   */
  DeploymentStatus?: string | undefined;

  /**
   * A framework consists of one or more controls. Each control governs a resource, such as backup plans, backup selections, backup vaults, or recovery points. You can also turn Config recording on or off for each resource. The statuses are:
   *
   * - `ACTIVE` when recording is turned on for all resources governed by the framework.
   * - `PARTIALLY_ACTIVE` when recording is turned off for at least one resource governed by the framework.
   * - `INACTIVE` when recording is turned off for all resources governed by the framework.
   * - `UNAVAILABLE` when Backup is unable to validate recording status at this time.
   *
   * @public
   */
  FrameworkStatus?: string | undefined;

  /**
   * A customer-chosen string that you can use to distinguish between otherwise identical calls to `DescribeFrameworkOutput`. Retrying a successful request with the same idempotency token results in a success message with no action taken.
   *
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
   * The status of the flags `isCrossAccountBackupEnabled`, `isMpaEnabled` ('Mpa' refers to multi-party approval), and `isDelegatedAdministratorEnabled`.
   *
   * - `isCrossAccountBackupEnabled`: Allow accounts in your organization to copy backups to other accounts.
   * - `isMpaEnabled`: Add cross-account access to your organization with the option to assign a Multi-party approval team to a logically air-gapped vault.
   * - `isDelegatedAdministratorEnabled`: Allow Backup to automatically synchronize delegated administrator permissions with Organizations.
   *
   * @public
   */
  GlobalSettings?: Record<string, string> | undefined;

  /**
   * The date and time that the supported flags were last updated. This update is in Unix format and Coordinated Universal Time (UTC). The value of `LastUpdateTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeProtectedResourceInput {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeProtectedResourceOutput {
  /**
   * An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The type of Amazon Web Services resource saved as a recovery point; for example, an Amazon EBS volume or an Amazon RDS database.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The date and time that a resource was last backed up, in Unix format and Coordinated Universal Time (UTC). The value of `LastBackupTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LastBackupTime?: Date | undefined;

  /**
   * The name of the resource that belongs to the specified backup.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the backup vault that contains the most recent backup recovery point.
   *
   * @public
   */
  LastBackupVaultArn?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the most recent recovery point.
   *
   * @public
   */
  LastRecoveryPointArn?: string | undefined;

  /**
   * The time, in minutes, that the most recent restore job took to complete.
   *
   * @public
   */
  LatestRestoreExecutionTimeMinutes?: number | undefined;

  /**
   * The creation date of the most recent restore job.
   *
   * @public
   */
  LatestRestoreJobCreationDate?: Date | undefined;

  /**
   * The date the most recent recovery point was created.
   *
   * @public
   */
  LatestRestoreRecoveryPointCreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRecoveryPointInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * The account ID of the specified backup vault.
   *
   * @public
   */
  BackupVaultAccountId?: string | undefined;
}

/**
 * Contains the results of a security scan, including scanner information, scan state, and any findings discovered.
 *
 * @public
 */
export interface ScanResult {
  /**
   * The malware scanner used to perform the scan. Currently only `GUARDDUTY` is supported.
   *
   * @public
   */
  MalwareScanner?: MalwareScanner | undefined;

  /**
   * The final state of the scan job.
   *
   * Valid values: `COMPLETED` | `FAILED` | `CANCELED`.
   *
   * @public
   */
  ScanJobState?: ScanJobState | undefined;

  /**
   * The timestamp of when the last scan was performed, in Unix format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  LastScanTimestamp?: Date | undefined;

  /**
   * An array of findings discovered during the scan.
   *
   * @public
   */
  Findings?: ScanFinding[] | undefined;
}

/**
 * @public
 */
export interface DescribeRecoveryPointOutput {
  /**
   * An ARN that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * An ARN that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies the source vault where the resource was originally backed up in; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`. If the recovery is restored to the same Amazon Web Services account or Region, this value will be `null`.
   *
   * @public
   */
  SourceBackupVaultArn?: string | undefined;

  /**
   * An ARN that uniquely identifies a saved resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The type of Amazon Web Services resource to save as a recovery point; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Contains identifying information about the creation of a recovery point, including the `BackupPlanArn`, `BackupPlanId`, `BackupPlanVersion`, and `BackupRuleId` of the backup plan used to create it.
   *
   * @public
   */
  CreatedBy?: RecoveryPointCreator | undefined;

  /**
   * Specifies the IAM role ARN used to create the target recovery point; for example, `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * A status code specifying the state of the recovery point. For more information, see [Recovery point status](https://docs.aws.amazon.com/aws-backup/latest/devguide/applicationstackbackups.html#cfnrecoverypointstatus) in the *Backup Developer Guide*.
   *
   * - `CREATING` status indicates that an Backup job has been initiated for a resource. The backup process has started and is actively processing a backup job for the associated recovery point.
   * - `AVAILABLE` status indicates that the backup was successfully created for the recovery point. The backup process has completed without any issues, and the recovery point is now ready for use.
   * - `PARTIAL` status indicates a composite recovery point has one or more nested recovery points that were not in the backup.
   * - `EXPIRED` status indicates that the recovery point has exceeded its retention period, but Backup lacks permission or is otherwise unable to delete it. To manually delete these recovery points, see [Step 3: Delete the recovery points](https://docs.aws.amazon.com/aws-backup/latest/devguide/gs-cleanup-resources.html#cleanup-backups) in the *Clean up resources* section of *Getting started*.
   * - `STOPPED` status occurs on a continuous backup where a user has taken some action that causes the continuous backup to be disabled. This can be caused by the removal of permissions, turning off versioning, turning off events being sent to EventBridge, or disabling the EventBridge rules that are put in place by Backup. For recovery points of Amazon S3, Amazon RDS, and Amazon Aurora resources, this status occurs when the retention period of a continuous backup rule is changed.
   *
   *   To resolve `STOPPED` status, ensure that all requested permissions are in place and that versioning is enabled on the S3 bucket. Once these conditions are met, the next instance of a backup rule running will result in a new continuous recovery point being created. The recovery points with STOPPED status do not need to be deleted.
   *
   *   For SAP HANA on Amazon EC2 `STOPPED` status occurs due to user action, application misconfiguration, or backup failure. To ensure that future continuous backups succeed, refer to the recovery point status and check SAP HANA for details.
   *
   * @public
   */
  Status?: RecoveryPointStatus | undefined;

  /**
   * A status message explaining the status of the recovery point.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The date and time that a recovery point is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time when the backup job that created this recovery point was initiated, in Unix format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  InitiationDate?: Date | undefined;

  /**
   * The date and time that a job to create a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of `CompletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * The size, in bytes, of a backup.
   *
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * A `CalculatedLifecycle` object containing `DeleteAt` and `MoveToColdStorageAt` timestamps.
   *
   * @public
   */
  CalculatedLifecycle?: CalculatedLifecycle | undefined;

  /**
   * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.
   *
   * Backups that are transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.
   *
   * Resource types that can transition to cold storage are listed in the [Feature availability by resource](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource) table. Backup ignores this expression for other resource types.
   *
   * @public
   */
  Lifecycle?: Lifecycle | undefined;

  /**
   * The server-side encryption key used to protect your backups; for example, `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * A Boolean value that is returned as `TRUE` if the specified recovery point is encrypted, or `FALSE` if the recovery point is not encrypted.
   *
   * @public
   */
  IsEncrypted?: boolean | undefined;

  /**
   * Specifies the storage class of the recovery point. Valid values are `WARM` or `COLD`.
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * The date and time that a recovery point was last restored, in Unix format and Coordinated Universal Time (UTC). The value of `LastRestoreTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LastRestoreTime?: Date | undefined;

  /**
   * This is an ARN that uniquely identifies a parent (composite) recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  ParentRecoveryPointArn?: string | undefined;

  /**
   * The identifier of a resource within a composite group, such as nested (child) recovery point belonging to a composite (parent) stack. The ID is transferred from the [logical ID](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax) within a stack.
   *
   * @public
   */
  CompositeMemberIdentifier?: string | undefined;

  /**
   * This returns the boolean value that a recovery point is a parent (composite) job.
   *
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * The name of the resource that belongs to the specified backup.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The type of vault in which the described recovery point is stored.
   *
   * @public
   */
  VaultType?: VaultType | undefined;

  /**
   * This is the current status for the backup index associated with the specified recovery point.
   *
   * Statuses are: `PENDING` | `ACTIVE` | `FAILED` | `DELETING`
   *
   * A recovery point with an index that has the status of `ACTIVE` can be included in a search.
   *
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * A string in the form of a detailed message explaining the status of a backup index associated with the recovery point.
   *
   * @public
   */
  IndexStatusMessage?: string | undefined;

  /**
   * The type of encryption key used for the recovery point. Valid values are CUSTOMER_MANAGED_KMS_KEY for customer-managed keys or Amazon Web Services_OWNED_KMS_KEY for Amazon Web Services-owned keys.
   *
   * @public
   */
  EncryptionKeyType?: EncryptionKeyType | undefined;

  /**
   * Contains the latest scanning results against the recovery point and currently include `MalwareScanner`, `ScanJobState`, `Findings`, and `LastScanTimestamp`
   *
   * @public
   */
  ScanResults?: ScanResult[] | undefined;
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
   * The services along with the opt-in preferences in the Region.
   *
   * @public
   */
  ResourceTypeOptInPreference?: Record<string, boolean> | undefined;

  /**
   * Returns whether Backup fully manages the backups for a resource type.
   *
   * For the benefits of full Backup management, see [Full Backup management](https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#full-management).
   *
   * For a list of resource types and whether each supports full Backup management, see the [Feature availability by resource](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource) table.
   *
   * If `"DynamoDB":false`, you can enable full Backup management for DynamoDB backup by enabling [Backup's advanced DynamoDB backup features](https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html#advanced-ddb-backup-enable-cli).
   *
   * @public
   */
  ResourceTypeManagementPreference?: Record<string, boolean> | undefined;
}

/**
 * @public
 */
export interface DescribeReportJobInput {
  /**
   * The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded string that is at most 1,024 bytes long. The report job ID cannot be edited.
   *
   * @public
   */
  ReportJobId: string | undefined;
}

/**
 * Contains information from your report job about your report destination.
 *
 * @public
 */
export interface ReportDestination {
  /**
   * The unique name of the Amazon S3 bucket that receives your reports.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * The object key that uniquely identifies your reports in your S3 bucket.
   *
   * @public
   */
  S3Keys?: string[] | undefined;
}

/**
 * Contains detailed information about a report job. A report job compiles a report based on a report plan and publishes it to Amazon S3.
 *
 * @public
 */
export interface ReportJob {
  /**
   * The identifier for a report job. A unique, randomly generated, Unicode, UTF-8 encoded string that is at most 1,024 bytes long. Report job IDs cannot be edited.
   *
   * @public
   */
  ReportJobId?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  ReportPlanArn?: string | undefined;

  /**
   * Identifies the report template for the report. Reports are built using a report template. The report templates are:
   *
   * `RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`
   *
   * @public
   */
  ReportTemplate?: string | undefined;

  /**
   * The date and time that a report job is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time that a report job is completed, in Unix format and Coordinated Universal Time (UTC). The value of `CompletionTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * The status of a report job. The statuses are:
   *
   * `CREATED | RUNNING | COMPLETED | FAILED`
   *
   * `COMPLETED` means that the report is available for your review at your designated destination. If the status is `FAILED`, review the `StatusMessage` for the reason.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * A message explaining the status of the report job.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The S3 bucket name and S3 keys for the destination where the report job publishes the report.
   *
   * @public
   */
  ReportDestination?: ReportDestination | undefined;
}

/**
 * @public
 */
export interface DescribeReportJobOutput {
  /**
   * The information about a report job, including its completion and creation times, report destination, unique report job ID, Amazon Resource Name (ARN), report template, status, and status message.
   *
   * @public
   */
  ReportJob?: ReportJob | undefined;
}

/**
 * @public
 */
export interface DescribeReportPlanInput {
  /**
   * The unique name of a report plan.
   *
   * @public
   */
  ReportPlanName: string | undefined;
}

/**
 * Contains detailed information about a report plan.
 *
 * @public
 */
export interface ReportPlan {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  ReportPlanArn?: string | undefined;

  /**
   * The unique name of the report plan. This name is between 1 and 256 characters starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
   *
   * @public
   */
  ReportPlanName?: string | undefined;

  /**
   * An optional description of the report plan with a maximum 1,024 characters.
   *
   * @public
   */
  ReportPlanDescription?: string | undefined;

  /**
   * Identifies the report template for the report. Reports are built using a report template. The report templates are:
   *
   * `RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`
   *
   * If the report template is `RESOURCE_COMPLIANCE_REPORT` or `CONTROL_COMPLIANCE_REPORT`, this API resource also describes the report coverage by Amazon Web Services Regions and frameworks.
   *
   * @public
   */
  ReportSetting?: ReportSetting | undefined;

  /**
   * Contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
   *
   * @public
   */
  ReportDeliveryChannel?: ReportDeliveryChannel | undefined;

  /**
   * The deployment status of a report plan. The statuses are:
   *
   * `CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED`
   *
   * @public
   */
  DeploymentStatus?: string | undefined;

  /**
   * The date and time that a report plan is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time that a report job associated with this report plan last attempted to run, in Unix format and Coordinated Universal Time (UTC). The value of `LastAttemptedExecutionTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LastAttemptedExecutionTime?: Date | undefined;

  /**
   * The date and time that a report job associated with this report plan last successfully ran, in Unix format and Coordinated Universal Time (UTC). The value of `LastSuccessfulExecutionTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LastSuccessfulExecutionTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeReportPlanOutput {
  /**
   * Returns details about the report plan that is specified by its name. These details include the report plan's Amazon Resource Name (ARN), description, settings, delivery channel, deployment status, creation time, and last attempted and successful run times.
   *
   * @public
   */
  ReportPlan?: ReportPlan | undefined;
}

/**
 * @public
 */
export interface DescribeRestoreJobInput {
  /**
   * Uniquely identifies the job that restores a recovery point.
   *
   * @public
   */
  RestoreJobId: string | undefined;
}

/**
 * Contains information about the restore testing plan that Backup used to initiate the restore job.
 *
 * @public
 */
export interface RestoreJobCreator {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a restore testing plan.
   *
   * @public
   */
  RestoreTestingPlanArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRestoreJobOutput {
  /**
   * Returns the account ID that owns the restore job.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Uniquely identifies the job that restores a recovery point.
   *
   * @public
   */
  RestoreJobId?: string | undefined;

  /**
   * An ARN that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the original resource that was backed up. This provides context about what resource is being restored.
   *
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the backup vault containing the recovery point being restored. This helps identify vault access policies and permissions.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * The date and time that a restore job is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time that a job to restore a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of `CompletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * Status code specifying the state of the job that is initiated by Backup to restore a recovery point.
   *
   * @public
   */
  Status?: RestoreJobStatus | undefined;

  /**
   * A message showing the status of a job to restore a recovery point.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Contains an estimated percentage that is complete of a job at the time the job status was queried.
   *
   * @public
   */
  PercentDone?: string | undefined;

  /**
   * The size, in bytes, of the restored resource.
   *
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * Specifies the IAM role ARN used to create the target recovery point; for example, `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The amount of time in minutes that a job restoring a recovery point is expected to take.
   *
   * @public
   */
  ExpectedCompletionTimeMinutes?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource that was created by the restore job.
   *
   * The format of the ARN depends on the resource type of the backed-up resource.
   *
   * @public
   */
  CreatedResourceArn?: string | undefined;

  /**
   * Returns metadata associated with a restore job listed by resource type.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The creation date of the recovery point made by the specifed restore job.
   *
   * @public
   */
  RecoveryPointCreationDate?: Date | undefined;

  /**
   * Contains identifying information about the creation of a restore job.
   *
   * @public
   */
  CreatedBy?: RestoreJobCreator | undefined;

  /**
   * The status of validation run on the indicated restore job.
   *
   * @public
   */
  ValidationStatus?: RestoreValidationStatus | undefined;

  /**
   * The status message.
   *
   * @public
   */
  ValidationStatusMessage?: string | undefined;

  /**
   * The status of the data generated by the restore test.
   *
   * @public
   */
  DeletionStatus?: RestoreDeletionStatus | undefined;

  /**
   * This describes the restore job deletion status.
   *
   * @public
   */
  DeletionStatusMessage?: string | undefined;

  /**
   * This is a boolean value indicating whether the restore job is a parent (composite) restore job.
   *
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * This is the unique identifier of the parent restore job for the selected restore job.
   *
   * @public
   */
  ParentJobId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeScanJobInput {
  /**
   * Uniquely identifies a request to Backup to scan a resource.
   *
   * @public
   */
  ScanJobId: string | undefined;
}

/**
 * Contains identifying information about the creation of a scan job, including the backup plan and rule that initiated the scan.
 *
 * @public
 */
export interface ScanJobCreator {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, `arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50`.
   *
   * @public
   */
  BackupPlanArn: string | undefined;

  /**
   * The ID of the backup plan.
   *
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.
   *
   * @public
   */
  BackupPlanVersion: string | undefined;

  /**
   * Uniquely identifies the backup rule that initiated the scan job.
   *
   * @public
   */
  BackupRuleId: string | undefined;
}

/**
 * Contains information about the results of a scan job.
 *
 * @public
 */
export interface ScanResultInfo {
  /**
   * The status of the scan results.
   *
   * Valid values: `THREATS_FOUND` | `NO_THREATS_FOUND` | `UNKNOWN`.
   *
   * @public
   */
  ScanResultStatus: ScanResultStatus | undefined;
}

/**
 * @public
 */
export interface DescribeScanJobOutput {
  /**
   * Returns the account ID that owns the scan job.
   *
   * Pattern: `^[0-9]\{12\}$`
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`
   *
   * @public
   */
  BackupVaultArn: string | undefined;

  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * Pattern: `^[a-zA-Z0-9\-\_\.]\{2,50\}$`
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The date and time that a backup index finished creation, in Unix format and Coordinated Universal Time (UTC). The value of `CompletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * The point in time the scan job scanned up to for a continuous backup.
   *
   * @public
   */
  ContinuousScanEndTime?: Date | undefined;

  /**
   * The point in time the scan job started scan from for a continuous backup.
   *
   * @public
   */
  ContinuousScanStartTime?: Date | undefined;

  /**
   * Contains identifying information about the creation of a scan job, including the backup plan and rule that initiated the scan.
   *
   * @public
   */
  CreatedBy: ScanJobCreator | undefined;

  /**
   * The date and time that a backup index finished creation, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The scanning engine used for the corresponding scan job. Currently only `GUARDUTY` is supported.
   *
   * @public
   */
  MalwareScanner: MalwareScanner | undefined;

  /**
   * An ARN that uniquely identifies the target recovery point for scanning.; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * An ARN that uniquely identifies the source resource of the corresponding recovery point ARN.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The non-unique name of the resource that belongs to the specified backup.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The type of Amazon Web Services Resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume.
   *
   * Pattern: `^[a-zA-Z0-9\-\_\.]\{1,50\}$`
   *
   * @public
   */
  ResourceType: ScanResourceType | undefined;

  /**
   * An ARN that uniquely identifies the base recovery point for scanning. This field will only be populated when an incremental scan job has taken place.
   *
   * @public
   */
  ScanBaseRecoveryPointArn?: string | undefined;

  /**
   * The scan ID generated by Amazon GuardDuty for the corresponding Scan Job ID request from Backup.
   *
   * @public
   */
  ScanId?: string | undefined;

  /**
   * The scan job ID that uniquely identified the request to Backup.
   *
   * @public
   */
  ScanJobId: string | undefined;

  /**
   * Specifies the scan type used for the scan job.
   *
   * @public
   */
  ScanMode: ScanMode | undefined;

  /**
   * Contains the `ScanResultsStatus` for the scanning job and returns `THREATS_FOUND` or `NO_THREATS_FOUND` for completed jobs.
   *
   * @public
   */
  ScanResult?: ScanResultInfo | undefined;

  /**
   * Specifies the scanner IAM role ARN used to for the scan job.
   *
   * @public
   */
  ScannerRoleArn: string | undefined;

  /**
   * The current state of a scan job.
   *
   * @public
   */
  State: ScanState | undefined;

  /**
   * A detailed message explaining the status of the job to back up a resource.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateBackupVaultMpaApprovalTeamInput {
  /**
   * The name of the backup vault from which to disassociate the MPA approval team.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * An optional comment explaining the reason for disassociating the MPA approval team from the backup vault.
   *
   * @public
   */
  RequesterComment?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateRecoveryPointInput {
  /**
   * The unique name of an Backup vault.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies an Backup recovery point.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateRecoveryPointFromParentInput {
  /**
   * The name of a logical container where the child (nested) recovery point is stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the child (nested) recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.`
   *
   * @public
   */
  RecoveryPointArn: string | undefined;
}

/**
 * @public
 */
export interface ExportBackupPlanTemplateInput {
  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId: string | undefined;
}

/**
 * @public
 */
export interface ExportBackupPlanTemplateOutput {
  /**
   * The body of a backup plan template in JSON format.
   *
   * > **Note:** This is a signed JSON document that cannot be modified before being passed to `GetBackupPlanFromJSON.`
   *
   * @public
   */
  BackupPlanTemplateJson?: string | undefined;
}

/**
 * @public
 */
export interface GetBackupPlanInput {
  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Number of future scheduled backup runs to preview. When set to 0 (default), no scheduled runs preview is included in the response. Valid range is 0-10.
   *
   * @public
   */
  MaxScheduledRunsPreview?: number | undefined;
}

/**
 * Contains information about a scheduled backup plan execution, including the execution time, rule type, and associated rule identifier.
 *
 * @public
 */
export interface ScheduledPlanExecutionMember {
  /**
   * The timestamp when the backup is scheduled to run, in Unix format and Coordinated Universal Time (UTC). The value is accurate to milliseconds.
   *
   * @public
   */
  ExecutionTime?: Date | undefined;

  /**
   * The unique identifier of the backup rule that will execute at the scheduled time.
   *
   * @public
   */
  RuleId?: string | undefined;

  /**
   * The type of backup rule execution. Valid values are `CONTINUOUS` (point-in-time recovery), `SNAPSHOTS` (snapshot backups), or `CONTINUOUS_AND_SNAPSHOTS` (both types combined).
   *
   * @public
   */
  RuleExecutionType?: RuleExecutionType | undefined;
}

/**
 * @public
 */
export interface GetBackupPlanOutput {
  /**
   * Specifies the body of a backup plan. Includes a `BackupPlanName` and one or more sets of `Rules`.
   *
   * @public
   */
  BackupPlan?: BackupPlan | undefined;

  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, `arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50`.
   *
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The date and time that a backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time that a backup plan is deleted, in Unix format and Coordinated Universal Time (UTC). The value of `DeletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  DeletionDate?: Date | undefined;

  /**
   * The last time this backup plan was run. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of `LastExecutionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LastExecutionDate?: Date | undefined;

  /**
   * Contains a list of `BackupOptions` for each resource type. The list is populated only if the advanced option is set for the backup plan.
   *
   * @public
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[] | undefined;

  /**
   * List of upcoming scheduled backup runs. Only included when `MaxScheduledRunsPreview` parameter is greater than 0. Contains up to 10 future backup executions with their scheduled times, execution types, and associated rule IDs.
   *
   * @public
   */
  ScheduledRunsPreview?: ScheduledPlanExecutionMember[] | undefined;
}

/**
 * @public
 */
export interface GetBackupPlanFromJSONInput {
  /**
   * A customer-supplied backup plan document in JSON format.
   *
   * @public
   */
  BackupPlanTemplateJson: string | undefined;
}

/**
 * @public
 */
export interface GetBackupPlanFromJSONOutput {
  /**
   * Specifies the body of a backup plan. Includes a `BackupPlanName` and one or more sets of `Rules`.
   *
   * @public
   */
  BackupPlan?: BackupPlan | undefined;
}

/**
 * @public
 */
export interface GetBackupPlanFromTemplateInput {
  /**
   * Uniquely identifies a stored backup plan template.
   *
   * @public
   */
  BackupPlanTemplateId: string | undefined;
}

/**
 * @public
 */
export interface GetBackupPlanFromTemplateOutput {
  /**
   * Returns the body of a backup plan based on the target template, including the name, rules, and backup vault of the plan.
   *
   * @public
   */
  BackupPlanDocument?: BackupPlan | undefined;
}

/**
 * @public
 */
export interface GetBackupSelectionInput {
  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * Uniquely identifies the body of a request to assign a set of resources to a backup plan.
   *
   * @public
   */
  SelectionId: string | undefined;
}

/**
 * @public
 */
export interface GetBackupSelectionOutput {
  /**
   * Specifies the body of a request to assign a set of resources to a backup plan.
   *
   * @public
   */
  BackupSelection?: BackupSelection | undefined;

  /**
   * Uniquely identifies the body of a request to assign a set of resources to a backup plan.
   *
   * @public
   */
  SelectionId?: string | undefined;

  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * The date and time a backup selection is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;
}

/**
 * @public
 */
export interface GetBackupVaultAccessPolicyInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface GetBackupVaultAccessPolicyOutput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * The backup vault access policy document in JSON format.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetBackupVaultNotificationsInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface GetBackupVaultNotificationsOutput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * An ARN that uniquely identifies an Amazon Simple Notification Service (Amazon SNS) topic; for example, `arn:aws:sns:us-west-2:111122223333:MyTopic`.
   *
   * @public
   */
  SNSTopicArn?: string | undefined;

  /**
   * An array of events that indicate the status of jobs to back up resources to the backup vault.
   *
   * @public
   */
  BackupVaultEvents?: BackupVaultEvent[] | undefined;
}

/**
 * @public
 */
export interface GetLegalHoldInput {
  /**
   * The ID of the legal hold.
   *
   * @public
   */
  LegalHoldId: string | undefined;
}

/**
 * @public
 */
export interface GetLegalHoldOutput {
  /**
   * The title of the legal hold.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The status of the legal hold.
   *
   * @public
   */
  Status?: LegalHoldStatus | undefined;

  /**
   * The description of the legal hold.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The reason for removing the legal hold.
   *
   * @public
   */
  CancelDescription?: string | undefined;

  /**
   * The ID of the legal hold.
   *
   * @public
   */
  LegalHoldId?: string | undefined;

  /**
   * The framework ARN for the specified legal hold. The format of the ARN depends on the resource type.
   *
   * @public
   */
  LegalHoldArn?: string | undefined;

  /**
   * The time when the legal hold was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The time when the legal hold was cancelled.
   *
   * @public
   */
  CancellationDate?: Date | undefined;

  /**
   * The date and time until which the legal hold record is retained.
   *
   * @public
   */
  RetainRecordUntil?: Date | undefined;

  /**
   * The criteria to assign a set of resources, such as resource types or backup vaults.
   *
   * @public
   */
  RecoveryPointSelection?: RecoveryPointSelection | undefined;
}

/**
 * @public
 */
export interface GetPITRMalwareScanResultsInput {
  /**
   * An ARN that uniquely identifies the target recovery point for scanning; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The point in time within the continuous backup to examine for malware scan results.
   *
   * @public
   */
  ScanEndTime: Date | undefined;

  /**
   * The scanning engine used for the corresponding scan job. Currently only `GUARDDUTY` is supported.
   *
   * @public
   */
  MalwareScanner: MalwareScanner | undefined;
}

/**
 * @public
 */
export interface GetPITRMalwareScanResultsOutput {
  /**
   * The point in time that was queried. This echoes back the time specified in the request.
   *
   * @public
   */
  ScanEndTime: Date | undefined;

  /**
   * Contains the `ScanResultStatus` for the scan and returns `THREATS_FOUND`, `NO_THREATS_FOUND`, or `UNKNOWN`.
   *
   * @public
   */
  ScanResult: ScanResultInfo | undefined;

  /**
   * The completion time of the most recent scan job that covered the specified point in time.
   *
   * @public
   */
  LastScanJobTime?: Date | undefined;

  /**
   * The scan ID generated by Amazon GuardDuty for the corresponding Scan Job ID request from Backup.
   *
   * @public
   */
  ScanId?: string | undefined;

  /**
   * Specifies the scan type used for the scan job.
   *
   * @public
   */
  ScanMode?: ScanMode | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPointIndexDetailsInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created.
   *
   * Accepted characters include lowercase letters, numbers, and hyphens.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * An ARN that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPointIndexDetailsOutput {
  /**
   * An ARN that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * An ARN that uniquely identifies the backup vault where the recovery point index is stored.
   *
   * For example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * A string of the Amazon Resource Name (ARN) that uniquely identifies the source resource.
   *
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * The date and time that a backup index was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  IndexCreationDate?: Date | undefined;

  /**
   * The date and time that a backup index was deleted, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  IndexDeletionDate?: Date | undefined;

  /**
   * The date and time that a backup index finished creation, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  IndexCompletionDate?: Date | undefined;

  /**
   * This is the current status for the backup index associated with the specified recovery point.
   *
   * Statuses are: `PENDING` | `ACTIVE` | `FAILED` | `DELETING`
   *
   * A recovery point with an index that has the status of `ACTIVE` can be included in a search.
   *
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * A detailed message explaining the status of a backup index associated with the recovery point.
   *
   * @public
   */
  IndexStatusMessage?: string | undefined;

  /**
   * Count of items within the backup index associated with the recovery point.
   *
   * @public
   */
  TotalItemsIndexed?: number | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPointRestoreMetadataInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * The account ID of the specified backup vault.
   *
   * @public
   */
  BackupVaultAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPointRestoreMetadataOutput {
  /**
   * An ARN that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * An ARN that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * The set of metadata key-value pairs that describe the original configuration of the backed-up resource. These values vary depending on the service that is being restored.
   *
   * @public
   */
  RestoreMetadata?: Record<string, string> | undefined;

  /**
   * The resource type of the recovery point.
   *
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * @public
 */
export interface GetRestoreJobMetadataInput {
  /**
   * This is a unique identifier of a restore job within Backup.
   *
   * @public
   */
  RestoreJobId: string | undefined;
}

/**
 * @public
 */
export interface GetRestoreJobMetadataOutput {
  /**
   * This is a unique identifier of a restore job within Backup.
   *
   * @public
   */
  RestoreJobId?: string | undefined;

  /**
   * This contains the metadata of the specified backup job.
   *
   * @public
   */
  Metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRestoreTestingInferredMetadataInput {
  /**
   * The account ID of the specified backup vault.
   *
   * @public
   */
  BackupVaultAccountId?: string | undefined;

  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web ServicesRegion where they are created. They consist of letters, numbers, and hyphens.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;
}

/**
 * @public
 */
export interface GetRestoreTestingInferredMetadataOutput {
  /**
   * This is a string map of the metadata inferred from the request.
   *
   * @public
   */
  InferredMetadata: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRestoreTestingPlanInput {
  /**
   * Required unique name of the restore testing plan.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;
}

/**
 * This contains metadata about a restore testing plan.
 *
 * @public
 */
export interface RestoreTestingPlanForGet {
  /**
   * The date and time that a restore testing plan was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * This identifies the request and allows failed requests to be retried without the risk of running the operation twice. If the request includes a `CreatorRequestId` that matches an existing backup plan, that plan is returned. This parameter is optional.
   *
   * If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The last time a restore test was run with the specified restore testing plan. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of `LastExecutionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LastExecutionTime?: Date | undefined;

  /**
   * The date and time that the restore testing plan was updated. This update is in Unix format and Coordinated Universal Time (UTC). The value of `LastUpdateTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * The specified criteria to assign a set of resources, such as recovery point types or backup vaults.
   *
   * @public
   */
  RecoveryPointSelection: RestoreTestingRecoveryPointSelection | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a restore testing plan.
   *
   * @public
   */
  RestoreTestingPlanArn: string | undefined;

  /**
   * The restore testing plan name.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * A CRON expression in specified timezone when a restore testing plan is executed. When no CRON expression is provided, Backup will use the default expression `cron(0 5 ? * * *)`.
   *
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * Optional. This is the timezone in which the schedule expression is set. By default, ScheduleExpressions are in UTC. You can modify this to a specified timezone.
   *
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * Defaults to 24 hours.
   *
   * A value in hours after a restore test is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. If this value is included, this parameter has a maximum value of 168 hours (one week).
   *
   * @public
   */
  StartWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface GetRestoreTestingPlanOutput {
  /**
   * Specifies the body of a restore testing plan. Includes `RestoreTestingPlanName`.
   *
   * @public
   */
  RestoreTestingPlan: RestoreTestingPlanForGet | undefined;
}

/**
 * @public
 */
export interface GetRestoreTestingSelectionInput {
  /**
   * Required unique name of the restore testing plan.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * Required unique name of the restore testing selection.
   *
   * @public
   */
  RestoreTestingSelectionName: string | undefined;
}

/**
 * This contains metadata about a restore testing selection.
 *
 * @public
 */
export interface RestoreTestingSelectionForGet {
  /**
   * The date and time that a restore testing selection was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 201812:11:30.087 AM.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * This identifies the request and allows failed requests to be retried without the risk of running the operation twice. If the request includes a `CreatorRequestId` that matches an existing backup plan, that plan is returned. This parameter is optional.
   *
   * If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that Backup uses to create the target resource; for example:`arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * You can include specific ARNs, such as `ProtectedResourceArns: ["arn:aws:...", "arn:aws:..."]` or you can include a wildcard: `ProtectedResourceArns: ["*"]`, but not both.
   *
   * @public
   */
  ProtectedResourceArns?: string[] | undefined;

  /**
   * In a resource testing selection, this parameter filters by specific conditions such as `StringEquals` or `StringNotEquals`.
   *
   * @public
   */
  ProtectedResourceConditions?: ProtectedResourceConditions | undefined;

  /**
   * The type of Amazon Web Services resource included in a resource testing selection; for example, an Amazon EBS volume or an Amazon RDS database.
   *
   * @public
   */
  ProtectedResourceType: string | undefined;

  /**
   * You can override certain restore metadata keys by including the parameter `RestoreMetadataOverrides` in the body of `RestoreTestingSelection`. Key values are not case sensitive.
   *
   * See the complete list of [restore testing inferred metadata](https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing-inferred-metadata.html).
   *
   * @public
   */
  RestoreMetadataOverrides?: Record<string, string> | undefined;

  /**
   * The RestoreTestingPlanName is a unique string that is the name of the restore testing plan.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * The unique name of the restore testing selection that belongs to the related restore testing plan.
   *
   * The name consists of only alphanumeric characters and underscores. Maximum length is 50.
   *
   * @public
   */
  RestoreTestingSelectionName: string | undefined;

  /**
   * This is amount of hours (1 to 168) available to run a validation script on the data. The data will be deleted upon the completion of the validation script or the end of the specified retention period, whichever comes first.
   *
   * @public
   */
  ValidationWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface GetRestoreTestingSelectionOutput {
  /**
   * Unique name of the restore testing selection.
   *
   * @public
   */
  RestoreTestingSelection: RestoreTestingSelectionForGet | undefined;
}

/**
 * @public
 */
export interface GetSupportedResourceTypesOutput {
  /**
   * Contains a string with the supported Amazon Web Services resource types:
   *
   * - `Aurora` for Amazon Aurora
   * - `CloudFormation` for CloudFormation
   * - `DocumentDB` for Amazon DocumentDB (with MongoDB compatibility)
   * - `DynamoDB` for Amazon DynamoDB
   * - `EBS` for Amazon Elastic Block Store
   * - `EC2` for Amazon Elastic Compute Cloud
   * - `EFS` for Amazon Elastic File System
   * - `EKS` for Amazon Elastic Kubernetes Service
   * - `FSx` for Amazon FSx
   * - `Neptune` for Amazon Neptune
   * - `RDS` for Amazon Relational Database Service
   * - `Redshift` for Amazon Redshift
   * - `S3` for Amazon Simple Storage Service (Amazon S3)
   * - `SAP HANA on Amazon EC2` for SAP HANA databases on Amazon Elastic Compute Cloud instances
   * - `Storage Gateway` for Storage Gateway
   * - `Timestream` for Amazon Timestream
   * - `VirtualMachine` for VMware virtual machines
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface GetTieringConfigurationInput {
  /**
   * The unique name of a tiering configuration.
   *
   * @public
   */
  TieringConfigurationName: string | undefined;
}

/**
 * This contains metadata about a tiering configuration.
 *
 * @public
 */
export interface TieringConfiguration {
  /**
   * The unique name of the tiering configuration. This cannot be changed after creation, and it must consist of only alphanumeric characters and underscores.
   *
   * @public
   */
  TieringConfigurationName: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies the tiering configuration.
   *
   * @public
   */
  TieringConfigurationArn?: string | undefined;

  /**
   * The name of the backup vault where the tiering configuration applies. Use `*` to apply to all backup vaults.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * An array of resource selection objects that specify which resources are included in the tiering configuration and their tiering settings.
   *
   * @public
   */
  ResourceSelection: ResourceSelection[] | undefined;

  /**
   * This is a unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The date and time a tiering configuration was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087AM.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time a tiering configuration was updated, in Unix format and Coordinated Universal Time (UTC). The value of `LastUpdatedTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087AM.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetTieringConfigurationOutput {
  /**
   * Specifies the body of a tiering configuration. Includes `TieringConfigurationName`.
   *
   * @public
   */
  TieringConfiguration?: TieringConfiguration | undefined;
}

/**
 * @public
 */
export interface ListBackupAccessPointsRequest {
  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBackupAccessPointsResponse {
  /**
   * A list of backup access points, each containing metadata such as its name, ARN, status, and associated recovery point.
   *
   * @public
   */
  BackupAccessPoints: ListAccessPointsMember[] | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBackupAccessPointsByRecoveryPointRequest {
  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recovery point whose backup access points you want to list.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;
}

/**
 * @public
 */
export interface ListBackupAccessPointsByRecoveryPointResponse {
  /**
   * A list of backup access points, each containing metadata such as its name, ARN, status, and associated recovery point.
   *
   * @public
   */
  BackupAccessPoints: ListAccessPointsMember[] | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBackupAccessPointsByResourceRequest {
  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource whose backup access points you want to list.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListBackupAccessPointsByResourceResponse {
  /**
   * A list of backup access points, each containing metadata such as its name, ARN, status, and associated recovery point.
   *
   * @public
   */
  BackupAccessPoints: ListAccessPointsMember[] | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBackupJobsInput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Returns only backup jobs that match the specified resource Amazon Resource Name (ARN).
   *
   * @public
   */
  ByResourceArn?: string | undefined;

  /**
   * Returns only backup jobs that are in the specified state.
   *
   * `Completed with issues` is a status found only in the Backup console. For API, this status refers to jobs with a state of `COMPLETED` and a `MessageCategory` with a value other than `SUCCESS`; that is, the status is completed but comes with a status message.
   *
   * To obtain the job count for `Completed with issues`, run two GET requests, and subtract the second, smaller number:
   *
   * GET /backup-jobs/?state=COMPLETED
   *
   * GET /backup-jobs/?messageCategory=SUCCESS&state=COMPLETED
   *
   * @public
   */
  ByState?: BackupJobState | undefined;

  /**
   * Returns only backup jobs that will be stored in the specified backup vault. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  ByBackupVaultName?: string | undefined;

  /**
   * Returns only backup jobs that were created before the specified date.
   *
   * @public
   */
  ByCreatedBefore?: Date | undefined;

  /**
   * Returns only backup jobs that were created after the specified date.
   *
   * @public
   */
  ByCreatedAfter?: Date | undefined;

  /**
   * Returns only backup jobs for the specified resources:
   *
   * - `Aurora` for Amazon Aurora
   * - `CloudFormation` for CloudFormation
   * - `DocumentDB` for Amazon DocumentDB (with MongoDB compatibility)
   * - `DynamoDB` for Amazon DynamoDB
   * - `EBS` for Amazon Elastic Block Store
   * - `EC2` for Amazon Elastic Compute Cloud
   * - `EFS` for Amazon Elastic File System
   * - `EKS` for Amazon Elastic Kubernetes Service
   * - `FSx` for Amazon FSx
   * - `Neptune` for Amazon Neptune
   * - `RDS` for Amazon Relational Database Service
   * - `Redshift` for Amazon Redshift
   * - `S3` for Amazon Simple Storage Service (Amazon S3)
   * - `SAP HANA on Amazon EC2` for SAP HANA databases on Amazon Elastic Compute Cloud instances
   * - `Storage Gateway` for Storage Gateway
   * - `Timestream` for Amazon Timestream
   * - `VirtualMachine` for VMware virtual machines
   *
   * @public
   */
  ByResourceType?: string | undefined;

  /**
   * The account ID to list the jobs from. Returns only backup jobs associated with the specified account ID.
   *
   * If used from an Organizations management account, passing `*` returns all jobs across the organization.
   *
   * @public
   */
  ByAccountId?: string | undefined;

  /**
   * Returns only backup jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ByCompleteAfter?: Date | undefined;

  /**
   * Returns only backup jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ByCompleteBefore?: Date | undefined;

  /**
   * This is a filter to list child (nested) jobs based on parent job ID.
   *
   * @public
   */
  ByParentJobId?: string | undefined;

  /**
   * This is an optional parameter that can be used to filter out jobs with a MessageCategory which matches the value you input.
   *
   * Example strings may include `AccessDenied`, `SUCCESS`, `AGGREGATE_ALL`, and `InvalidParameters`.
   *
   * View [Monitoring](https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html)
   *
   * The wildcard () returns count of all message categories.
   *
   * `AGGREGATE_ALL` aggregates job counts for all message categories and returns the sum.
   *
   * @public
   */
  ByMessageCategory?: string | undefined;
}

/**
 * @public
 */
export interface ListBackupJobsOutput {
  /**
   * An array of structures containing metadata about your backup jobs returned in JSON format.
   *
   * @public
   */
  BackupJobs?: BackupJob[] | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBackupJobSummariesInput {
  /**
   * Returns the job count for the specified account.
   *
   * If the request is sent from a member account or an account not part of Amazon Web Services Organizations, jobs within requestor's account will be returned.
   *
   * Root, admin, and delegated administrator accounts can use the value ANY to return job counts from every account in the organization.
   *
   * `AGGREGATE_ALL` aggregates job counts from all accounts within the authenticated organization, then returns the sum.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * This parameter returns the job count for jobs with the specified state.
   *
   * The the value ANY returns count of all states.
   *
   * `AGGREGATE_ALL` aggregates job counts for all states and returns the sum.
   *
   * `Completed with issues` is a status found only in the Backup console. For API, this status refers to jobs with a state of `COMPLETED` and a `MessageCategory` with a value other than `SUCCESS`; that is, the status is completed but comes with a status message. To obtain the job count for `Completed with issues`, run two GET requests, and subtract the second, smaller number:
   *
   * GET /audit/backup-job-summaries?AggregationPeriod=FOURTEEN_DAYS&State=COMPLETED
   *
   * GET /audit/backup-job-summaries?AggregationPeriod=FOURTEEN_DAYS&MessageCategory=SUCCESS&State=COMPLETED
   *
   * @public
   */
  State?: BackupJobStatus | undefined;

  /**
   * Returns the job count for the specified resource type. Use request `GetSupportedResourceTypes` to obtain strings for supported resource types.
   *
   * The the value ANY returns count of all resource types.
   *
   * `AGGREGATE_ALL` aggregates job counts for all resource types and returns the sum.
   *
   * The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * This parameter returns the job count for the specified message category.
   *
   * Example accepted strings include `AccessDenied`, `Success`, and `InvalidParameters`. See [Monitoring](https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html) for a list of accepted MessageCategory strings.
   *
   * The the value ANY returns count of all message categories.
   *
   * `AGGREGATE_ALL` aggregates job counts for all message categories and returns the sum.
   *
   * @public
   */
  MessageCategory?: string | undefined;

  /**
   * The period for the returned results.
   *
   * - `ONE_DAY` - The daily job count for the prior 14 days.
   * - `SEVEN_DAYS` - The aggregated job count for the prior 7 days.
   * - `FOURTEEN_DAYS` - The aggregated job count for prior 14 days.
   *
   * @public
   */
  AggregationPeriod?: AggregationPeriod | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * The value is an integer. Range of accepted values is from 1 to 500.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `MaxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBackupJobSummariesOutput {
  /**
   * The summary information.
   *
   * @public
   */
  BackupJobSummaries?: BackupJobSummary[] | undefined;

  /**
   * The period for the returned results.
   *
   * - `ONE_DAY` - The daily job count for the prior 14 days.
   * - `SEVEN_DAYS` - The aggregated job count for the prior 7 days.
   * - `FOURTEEN_DAYS` - The aggregated job count for prior 14 days.
   *
   * @public
   */
  AggregationPeriod?: string | undefined;

  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `MaxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBackupPlansInput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A Boolean value with a default value of `FALSE` that returns deleted backup plans when set to `TRUE`.
   *
   * @public
   */
  IncludeDeleted?: boolean | undefined;
}

/**
 * @public
 */
export interface ListBackupPlansOutput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the backup plans.
   *
   * @public
   */
  BackupPlansList?: BackupPlansListMember[] | undefined;
}

/**
 * @public
 */
export interface ListBackupPlanTemplatesInput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBackupPlanTemplatesOutput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of template list items containing metadata about your saved templates.
   *
   * @public
   */
  BackupPlanTemplatesList?: BackupPlanTemplatesListMember[] | undefined;
}

/**
 * @public
 */
export interface ListBackupPlanVersionsInput {
  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBackupPlanVersionsOutput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of version list items containing metadata about your backup plans.
   *
   * @public
   */
  BackupPlanVersionsList?: BackupPlansListMember[] | undefined;
}

/**
 * @public
 */
export interface ListBackupSelectionsInput {
  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBackupSelectionsOutput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of backup selection list items containing metadata about each resource in the list.
   *
   * @public
   */
  BackupSelectionsList?: BackupSelectionsListMember[] | undefined;
}

/**
 * @public
 */
export interface ListBackupVaultsInput {
  /**
   * This parameter will sort the list of vaults by vault type.
   *
   * @public
   */
  ByVaultType?: VaultType | undefined;

  /**
   * This parameter will sort the list of vaults by shared vaults.
   *
   * @public
   */
  ByShared?: boolean | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBackupVaultsOutput {
  /**
   * An array of backup vault list members containing vault metadata, including Amazon Resource Name (ARN), display name, creation date, number of saved recovery points, and encryption information if the resources saved in the backup vault are encrypted.
   *
   * @public
   */
  BackupVaultList?: BackupVaultListMember[] | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCopyJobsInput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Returns only copy jobs that match the specified resource Amazon Resource Name (ARN).
   *
   * @public
   */
  ByResourceArn?: string | undefined;

  /**
   * Returns only copy jobs that are in the specified state.
   *
   * @public
   */
  ByState?: CopyJobState | undefined;

  /**
   * Returns only copy jobs that were created before the specified date.
   *
   * @public
   */
  ByCreatedBefore?: Date | undefined;

  /**
   * Returns only copy jobs that were created after the specified date.
   *
   * @public
   */
  ByCreatedAfter?: Date | undefined;

  /**
   * Returns only backup jobs for the specified resources:
   *
   * - `Aurora` for Amazon Aurora
   * - `CloudFormation` for CloudFormation
   * - `DocumentDB` for Amazon DocumentDB (with MongoDB compatibility)
   * - `DynamoDB` for Amazon DynamoDB
   * - `EBS` for Amazon Elastic Block Store
   * - `EC2` for Amazon Elastic Compute Cloud
   * - `EFS` for Amazon Elastic File System
   * - `EKS` for Amazon Elastic Kubernetes Service
   * - `FSx` for Amazon FSx
   * - `Neptune` for Amazon Neptune
   * - `RDS` for Amazon Relational Database Service
   * - `Redshift` for Amazon Redshift
   * - `S3` for Amazon Simple Storage Service (Amazon S3)
   * - `SAP HANA on Amazon EC2` for SAP HANA databases on Amazon Elastic Compute Cloud instances
   * - `Storage Gateway` for Storage Gateway
   * - `Timestream` for Amazon Timestream
   * - `VirtualMachine` for VMware virtual machines
   *
   * @public
   */
  ByResourceType?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a source backup vault to copy from; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  ByDestinationVaultArn?: string | undefined;

  /**
   * The account ID to list the jobs from. Returns only copy jobs associated with the specified account ID.
   *
   * @public
   */
  ByAccountId?: string | undefined;

  /**
   * Returns only copy jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ByCompleteBefore?: Date | undefined;

  /**
   * Returns only copy jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ByCompleteAfter?: Date | undefined;

  /**
   * This is a filter to list child (nested) jobs based on parent job ID.
   *
   * @public
   */
  ByParentJobId?: string | undefined;

  /**
   * This is an optional parameter that can be used to filter out jobs with a MessageCategory which matches the value you input.
   *
   * Example strings may include `AccessDenied`, `SUCCESS`, `AGGREGATE_ALL`, and `INVALIDPARAMETERS`.
   *
   * View [Monitoring](https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html) for a list of accepted strings.
   *
   * The the value ANY returns count of all message categories.
   *
   * `AGGREGATE_ALL` aggregates job counts for all message categories and returns the sum.
   *
   * @public
   */
  ByMessageCategory?: string | undefined;

  /**
   * Filters copy jobs by the specified source recovery point ARN.
   *
   * @public
   */
  BySourceRecoveryPointArn?: string | undefined;
}

/**
 * @public
 */
export interface ListCopyJobsOutput {
  /**
   * An array of structures containing metadata about your copy jobs returned in JSON format.
   *
   * @public
   */
  CopyJobs?: CopyJob[] | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCopyJobSummariesInput {
  /**
   * Returns the job count for the specified account.
   *
   * If the request is sent from a member account or an account not part of Amazon Web Services Organizations, jobs within requestor's account will be returned.
   *
   * Root, admin, and delegated administrator accounts can use the value ANY to return job counts from every account in the organization.
   *
   * `AGGREGATE_ALL` aggregates job counts from all accounts within the authenticated organization, then returns the sum.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * This parameter returns the job count for jobs with the specified state.
   *
   * The the value ANY returns count of all states.
   *
   * `AGGREGATE_ALL` aggregates job counts for all states and returns the sum.
   *
   * @public
   */
  State?: CopyJobStatus | undefined;

  /**
   * Returns the job count for the specified resource type. Use request `GetSupportedResourceTypes` to obtain strings for supported resource types.
   *
   * The the value ANY returns count of all resource types.
   *
   * `AGGREGATE_ALL` aggregates job counts for all resource types and returns the sum.
   *
   * The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * This parameter returns the job count for the specified message category.
   *
   * Example accepted strings include `AccessDenied`, `Success`, and `InvalidParameters`. See [Monitoring](https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html) for a list of accepted MessageCategory strings.
   *
   * The the value ANY returns count of all message categories.
   *
   * `AGGREGATE_ALL` aggregates job counts for all message categories and returns the sum.
   *
   * @public
   */
  MessageCategory?: string | undefined;

  /**
   * The period for the returned results.
   *
   * - `ONE_DAY` - The daily job count for the prior 14 days.
   * - `SEVEN_DAYS` - The aggregated job count for the prior 7 days.
   * - `FOURTEEN_DAYS` - The aggregated job count for prior 14 days.
   *
   * @public
   */
  AggregationPeriod?: AggregationPeriod | undefined;

  /**
   * This parameter sets the maximum number of items to be returned.
   *
   * The value is an integer. Range of accepted values is from 1 to 500.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `MaxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCopyJobSummariesOutput {
  /**
   * This return shows a summary that contains Region, Account, State, ResourceType, MessageCategory, StartTime, EndTime, and Count of included jobs.
   *
   * @public
   */
  CopyJobSummaries?: CopyJobSummary[] | undefined;

  /**
   * The period for the returned results.
   *
   * - `ONE_DAY` - The daily job count for the prior 14 days.
   * - `SEVEN_DAYS` - The aggregated job count for the prior 7 days.
   * - `FOURTEEN_DAYS` - The aggregated job count for prior 14 days.
   *
   * @public
   */
  AggregationPeriod?: string | undefined;

  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `MaxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFrameworksInput {
  /**
   * The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains detailed information about a framework. Frameworks contain controls, which evaluate and report on your backup events and resources. Frameworks generate daily compliance results.
 *
 * @public
 */
export interface Framework {
  /**
   * The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
   *
   * @public
   */
  FrameworkName?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  FrameworkArn?: string | undefined;

  /**
   * An optional description of the framework with a maximum 1,024 characters.
   *
   * @public
   */
  FrameworkDescription?: string | undefined;

  /**
   * The number of controls contained by the framework.
   *
   * @public
   */
  NumberOfControls?: number | undefined;

  /**
   * The date and time that a framework is created, in ISO 8601 representation. The value of `CreationTime` is accurate to milliseconds. For example, 2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind UTC.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The deployment status of a framework. The statuses are:
   *
   * `CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED | FAILED`
   *
   * @public
   */
  DeploymentStatus?: string | undefined;
}

/**
 * @public
 */
export interface ListFrameworksOutput {
  /**
   * The frameworks with details for each framework, including the framework name, Amazon Resource Name (ARN), description, number of controls, creation time, and deployment status.
   *
   * @public
   */
  Frameworks?: Framework[] | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIndexedRecoveryPointsInput {
  /**
   * The next item following a partial list of returned recovery points.
   *
   * For example, if a request is made to return `MaxResults` number of indexed recovery points, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of resource list items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A string of the Amazon Resource Name (ARN) that uniquely identifies the source resource.
   *
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * Returns only indexed recovery points that were created before the specified date.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * Returns only indexed recovery points that were created after the specified date.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * Returns a list of indexed recovery points for the specified resource type(s).
   *
   * Accepted values include:
   *
   * - `EBS` for Amazon Elastic Block Store
   * - `S3` for Amazon Simple Storage Service (Amazon S3)
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Include this parameter to filter the returned list by the indicated statuses.
   *
   * Accepted values: `PENDING` | `ACTIVE` | `FAILED` | `DELETING`
   *
   * A recovery point with an index that has the status of `ACTIVE` can be included in a search.
   *
   * @public
   */
  IndexStatus?: IndexStatus | undefined;
}

/**
 * This is a recovery point that has an associated backup index.
 *
 * Only recovery points with a backup index can be included in a search.
 *
 * @public
 */
export interface IndexedRecoveryPoint {
  /**
   * An ARN that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * A string of the Amazon Resource Name (ARN) that uniquely identifies the source resource.
   *
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * This specifies the IAM role ARN used for this operation.
   *
   * For example, arn:aws:iam::123456789012:role/S3Access
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The date and time that a backup was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  BackupCreationDate?: Date | undefined;

  /**
   * The resource type of the indexed recovery point.
   *
   * - `EBS` for Amazon Elastic Block Store
   * - `S3` for Amazon Simple Storage Service (Amazon S3)
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The date and time that a backup index was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  IndexCreationDate?: Date | undefined;

  /**
   * This is the current status for the backup index associated with the specified recovery point.
   *
   * Statuses are: `PENDING` | `ACTIVE` | `FAILED` | `DELETING`
   *
   * A recovery point with an index that has the status of `ACTIVE` can be included in a search.
   *
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * A string in the form of a detailed message explaining the status of a backup index associated with the recovery point.
   *
   * @public
   */
  IndexStatusMessage?: string | undefined;

  /**
   * An ARN that uniquely identifies the backup vault where the recovery point index is stored.
   *
   * For example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;
}

/**
 * @public
 */
export interface ListIndexedRecoveryPointsOutput {
  /**
   * This is a list of recovery points that have an associated index, belonging to the specified account.
   *
   * @public
   */
  IndexedRecoveryPoints?: IndexedRecoveryPoint[] | undefined;

  /**
   * The next item following a partial list of returned recovery points.
   *
   * For example, if a request is made to return `MaxResults` number of indexed recovery points, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLegalHoldsInput {
  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `MaxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of resource list items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A legal hold is an administrative tool that helps prevent backups from being deleted while under a hold. While the hold is in place, backups under a hold cannot be deleted and lifecycle policies that would alter the backup status (such as transition to cold storage) are delayed until the legal hold is removed. A backup can have more than one legal hold. Legal holds are applied to one or more backups (also known as recovery points). These backups can be filtered by resource types and by resource IDs.
 *
 * @public
 */
export interface LegalHold {
  /**
   * The title of a legal hold.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The status of the legal hold.
   *
   * @public
   */
  Status?: LegalHoldStatus | undefined;

  /**
   * The description of a legal hold.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the legal hold.
   *
   * @public
   */
  LegalHoldId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the legal hold; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  LegalHoldArn?: string | undefined;

  /**
   * The time when the legal hold was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The time when the legal hold was cancelled.
   *
   * @public
   */
  CancellationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListLegalHoldsOutput {
  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `MaxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * This is an array of returned legal holds, both active and previous.
   *
   * @public
   */
  LegalHolds?: LegalHold[] | undefined;
}

/**
 * @public
 */
export interface ListProtectedResourcesInput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A structure that contains information about a backed-up resource.
 *
 * @public
 */
export interface ProtectedResource {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The type of Amazon Web Services resource; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is Amazon EC2.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The date and time a resource was last backed up, in Unix format and Coordinated Universal Time (UTC). The value of `LastBackupTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LastBackupTime?: Date | undefined;

  /**
   * The non-unique name of the resource that belongs to the specified backup.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the backup vault that contains the most recent backup recovery point.
   *
   * @public
   */
  LastBackupVaultArn?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the most recent recovery point.
   *
   * @public
   */
  LastRecoveryPointArn?: string | undefined;
}

/**
 * @public
 */
export interface ListProtectedResourcesOutput {
  /**
   * An array of resources successfully backed up by Backup including the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource type.
   *
   * @public
   */
  Results?: ProtectedResource[] | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProtectedResourcesByBackupVaultInput {
  /**
   * The list of protected resources by backup vault within the vault(s) you specify by name.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The list of protected resources by backup vault within the vault(s) you specify by account ID.
   *
   * @public
   */
  BackupVaultAccountId?: string | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListProtectedResourcesByBackupVaultOutput {
  /**
   * These are the results returned for the request ListProtectedResourcesByBackupVault.
   *
   * @public
   */
  Results?: ProtectedResource[] | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsByBackupVaultInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * > **Note:** Backup vault name might not be available when a supported service creates the backup.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * This parameter will sort the list of recovery points by account ID.
   *
   * @public
   */
  BackupVaultAccountId?: string | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Returns only recovery points that match the specified resource Amazon Resource Name (ARN).
   *
   * @public
   */
  ByResourceArn?: string | undefined;

  /**
   * Returns only recovery points that match the specified resource type(s):
   *
   * - `Aurora` for Amazon Aurora
   * - `CloudFormation` for CloudFormation
   * - `DocumentDB` for Amazon DocumentDB (with MongoDB compatibility)
   * - `DynamoDB` for Amazon DynamoDB
   * - `EBS` for Amazon Elastic Block Store
   * - `EC2` for Amazon Elastic Compute Cloud
   * - `EFS` for Amazon Elastic File System
   * - `EKS` for Amazon Elastic Kubernetes Service
   * - `FSx` for Amazon FSx
   * - `Neptune` for Amazon Neptune
   * - `RDS` for Amazon Relational Database Service
   * - `Redshift` for Amazon Redshift
   * - `S3` for Amazon Simple Storage Service (Amazon S3)
   * - `SAP HANA on Amazon EC2` for SAP HANA databases on Amazon Elastic Compute Cloud instances
   * - `Storage Gateway` for Storage Gateway
   * - `Timestream` for Amazon Timestream
   * - `VirtualMachine` for VMware virtual machines
   *
   * @public
   */
  ByResourceType?: string | undefined;

  /**
   * Returns only recovery points that match the specified backup plan ID.
   *
   * @public
   */
  ByBackupPlanId?: string | undefined;

  /**
   * Returns only recovery points that were created before the specified timestamp.
   *
   * @public
   */
  ByCreatedBefore?: Date | undefined;

  /**
   * Returns only recovery points that were created after the specified timestamp.
   *
   * @public
   */
  ByCreatedAfter?: Date | undefined;

  /**
   * This returns only recovery points that match the specified parent (composite) recovery point Amazon Resource Name (ARN).
   *
   * @public
   */
  ByParentRecoveryPointArn?: string | undefined;
}

/**
 * Contains detailed information about the recovery points stored in a backup vault.
 *
 * @public
 */
export interface RecoveryPointByBackupVault {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * An ARN that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * The backup vault where the recovery point was originally copied from. If the recovery point is restored to the same account this value will be `null`.
   *
   * @public
   */
  SourceBackupVaultArn?: string | undefined;

  /**
   * An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The type of Amazon Web Services resource saved as a recovery point; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is Amazon EC2.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Contains identifying information about the creation of a recovery point, including the `BackupPlanArn`, `BackupPlanId`, `BackupPlanVersion`, and `BackupRuleId` of the backup plan that is used to create it.
   *
   * @public
   */
  CreatedBy?: RecoveryPointCreator | undefined;

  /**
   * Specifies the IAM role ARN used to create the target recovery point; for example, `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * A status code specifying the state of the recovery point.
   *
   * @public
   */
  Status?: RecoveryPointStatus | undefined;

  /**
   * A message explaining the current status of the recovery point.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The date and time a recovery point is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time when the backup job that created this recovery point was initiated, in Unix format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  InitiationDate?: Date | undefined;

  /**
   * The date and time a job to restore a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of `CompletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * The size, in bytes, of a backup.
   *
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * A `CalculatedLifecycle` object containing `DeleteAt` and `MoveToColdStorageAt` timestamps.
   *
   * @public
   */
  CalculatedLifecycle?: CalculatedLifecycle | undefined;

  /**
   * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.
   *
   * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.
   *
   * Resource types that can transition to cold storage are listed in the [Feature availability by resource](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource) table. Backup ignores this expression for other resource types.
   *
   * @public
   */
  Lifecycle?: Lifecycle | undefined;

  /**
   * The server-side encryption key that is used to protect your backups; for example, `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * A Boolean value that is returned as `TRUE` if the specified recovery point is encrypted, or `FALSE` if the recovery point is not encrypted.
   *
   * @public
   */
  IsEncrypted?: boolean | undefined;

  /**
   * The date and time a recovery point was last restored, in Unix format and Coordinated Universal Time (UTC). The value of `LastRestoreTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LastRestoreTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the parent (composite) recovery point.
   *
   * @public
   */
  ParentRecoveryPointArn?: string | undefined;

  /**
   * The identifier of a resource within a composite group, such as nested (child) recovery point belonging to a composite (parent) stack. The ID is transferred from the [logical ID](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax) within a stack.
   *
   * @public
   */
  CompositeMemberIdentifier?: string | undefined;

  /**
   * This is a boolean value indicating this is a parent (composite) recovery point.
   *
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * The non-unique name of the resource that belongs to the specified backup.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The type of vault in which the described recovery point is stored.
   *
   * @public
   */
  VaultType?: VaultType | undefined;

  /**
   * This is the current status for the backup index associated with the specified recovery point.
   *
   * Statuses are: `PENDING` | `ACTIVE` | `FAILED` | `DELETING`
   *
   * A recovery point with an index that has the status of `ACTIVE` can be included in a search.
   *
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * A string in the form of a detailed message explaining the status of a backup index associated with the recovery point.
   *
   * @public
   */
  IndexStatusMessage?: string | undefined;

  /**
   * The type of encryption key used for the recovery point. Valid values are CUSTOMER_MANAGED_KMS_KEY for customer-managed keys or Amazon Web Services_OWNED_KMS_KEY for Amazon Web Services-owned keys.
   *
   * @public
   */
  EncryptionKeyType?: EncryptionKeyType | undefined;

  /**
   * Contains the latest scanning results against the recovery point and currently include `FailedScan`, `Findings`, `LastComputed`.
   *
   * @public
   */
  AggregatedScanResult?: AggregatedScanResult | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsByBackupVaultOutput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of objects that contain detailed information about recovery points saved in a backup vault.
   *
   * @public
   */
  RecoveryPoints?: RecoveryPointByBackupVault[] | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsByLegalHoldInput {
  /**
   * The ID of the legal hold.
   *
   * @public
   */
  LegalHoldId: string | undefined;

  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `MaxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of resource list items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * This is a recovery point which is a child (nested) recovery point of a parent (composite) recovery point. These recovery points can be disassociated from their parent (composite) recovery point, in which case they will no longer be a member.
 *
 * @public
 */
export interface RecoveryPointMember {
  /**
   * The Amazon Resource Name (ARN) of the parent (composite) recovery point.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a saved resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The Amazon Web Services resource type that is saved as a recovery point.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The name of the backup vault (the logical container in which backups are stored).
   *
   * @public
   */
  BackupVaultName?: string | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsByLegalHoldOutput {
  /**
   * The recovery points.
   *
   * @public
   */
  RecoveryPoints?: RecoveryPointMember[] | undefined;

  /**
   * The next item following a partial list of returned resources.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsByResourceInput {
  /**
   * An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * > **Note:** Amazon RDS requires a value of at least 20.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * This attribute filters recovery points based on ownership.
   *
   * If this is set to `TRUE`, the response will contain recovery points associated with the selected resources that are managed by Backup.
   *
   * If this is set to `FALSE`, the response will contain all recovery points associated with the selected resource, except for EBS snapshots copied within the same Region and account.
   *
   * Type: Boolean
   *
   * @public
   */
  ManagedByAWSBackupOnly?: boolean | undefined;
}

/**
 * Contains detailed information about a saved recovery point.
 *
 * @public
 */
export interface RecoveryPointByResource {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * The date and time a recovery point is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * A status code specifying the state of the recovery point.
   *
   * @public
   */
  Status?: RecoveryPointStatus | undefined;

  /**
   * A message explaining the current status of the recovery point.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The server-side encryption key that is used to protect your backups; for example, `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * The size, in bytes, of a backup.
   *
   * @public
   */
  BackupSizeBytes?: number | undefined;

  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * This is a boolean value indicating this is a parent (composite) recovery point.
   *
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the parent (composite) recovery point.
   *
   * @public
   */
  ParentRecoveryPointArn?: string | undefined;

  /**
   * The non-unique name of the resource that belongs to the specified backup.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The type of vault in which the described recovery point is stored.
   *
   * @public
   */
  VaultType?: VaultType | undefined;

  /**
   * This is the current status for the backup index associated with the specified recovery point.
   *
   * Statuses are: `PENDING` | `ACTIVE` | `FAILED` | `DELETING`
   *
   * A recovery point with an index that has the status of `ACTIVE` can be included in a search.
   *
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * A string in the form of a detailed message explaining the status of a backup index associated with the recovery point.
   *
   * @public
   */
  IndexStatusMessage?: string | undefined;

  /**
   * The type of encryption key used for the recovery point. Valid values are CUSTOMER_MANAGED_KMS_KEY for customer-managed keys or Amazon Web Services_OWNED_KMS_KEY for Amazon Web Services-owned keys.
   *
   * @public
   */
  EncryptionKeyType?: EncryptionKeyType | undefined;

  /**
   * Contains the latest scanning results against the recovery point and currently include `FailedScan`, `Findings`, `LastComputed`.
   *
   * @public
   */
  AggregatedScanResult?: AggregatedScanResult | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsByResourceOutput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of objects that contain detailed information about recovery points of the specified resource type.
   *
   * > **Note:** Only Amazon EFS and Amazon EC2 recovery points return BackupVaultName.
   *
   * @public
   */
  RecoveryPoints?: RecoveryPointByResource[] | undefined;
}

/**
 * @public
 */
export interface ListReportJobsInput {
  /**
   * Returns only report jobs with the specified report plan name.
   *
   * @public
   */
  ByReportPlanName?: string | undefined;

  /**
   * Returns only report jobs that were created before the date and time specified in Unix format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents Friday, January 26, 2018 12:11:30 AM.
   *
   * @public
   */
  ByCreationBefore?: Date | undefined;

  /**
   * Returns only report jobs that were created after the date and time specified in Unix format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents Friday, January 26, 2018 12:11:30 AM.
   *
   * @public
   */
  ByCreationAfter?: Date | undefined;

  /**
   * Returns only report jobs that are in the specified status. The statuses are:
   *
   * `CREATED | RUNNING | COMPLETED | FAILED | COMPLETED_WITH_ISSUES`
   *
   * Please note that only scanning jobs finish with state completed with issues. For backup jobs this is a console interpretation of a job that finishes in completed state and has a status message.
   *
   * @public
   */
  ByStatus?: string | undefined;

  /**
   * The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportJobsOutput {
  /**
   * Details about your report jobs in JSON format.
   *
   * @public
   */
  ReportJobs?: ReportJob[] | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportPlansInput {
  /**
   * The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportPlansOutput {
  /**
   * The report plans with detailed information for each plan. This information includes the Amazon Resource Name (ARN), report plan name, description, settings, delivery channel, deployment status, creation time, and last times the report plan attempted to and successfully ran.
   *
   * @public
   */
  ReportPlans?: ReportPlan[] | undefined;

  /**
   * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRestoreAccessBackupVaultsInput {
  /**
   * The name of the backup vault for which to list associated restore access backup vaults.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The pagination token from a previous request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about the latest request to revoke access to a backup vault.
 *
 * @public
 */
export interface LatestRevokeRequest {
  /**
   * The ARN of the MPA session associated with this revoke request.
   *
   * @public
   */
  MpaSessionArn?: string | undefined;

  /**
   * The current status of the revoke request.
   *
   * @public
   */
  Status?: MpaRevokeSessionStatus | undefined;

  /**
   * A message describing the current status of the revoke request.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The date and time when the revoke request was initiated.
   *
   * @public
   */
  InitiationDate?: Date | undefined;

  /**
   * The date and time when the revoke request will expire.
   *
   * @public
   */
  ExpiryDate?: Date | undefined;
}

/**
 * Contains information about a restore access backup vault.
 *
 * @public
 */
export interface RestoreAccessBackupVaultListMember {
  /**
   * The ARN of the restore access backup vault.
   *
   * @public
   */
  RestoreAccessBackupVaultArn?: string | undefined;

  /**
   * The date and time when the restore access backup vault was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time when the restore access backup vault was approved.
   *
   * @public
   */
  ApprovalDate?: Date | undefined;

  /**
   * The current state of the restore access backup vault.
   *
   * @public
   */
  VaultState?: VaultState | undefined;

  /**
   * Information about the latest request to revoke access to this backup vault.
   *
   * @public
   */
  LatestRevokeRequest?: LatestRevokeRequest | undefined;
}

/**
 * @public
 */
export interface ListRestoreAccessBackupVaultsOutput {
  /**
   * The pagination token to use in a subsequent request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of restore access backup vaults associated with the specified backup vault.
   *
   * @public
   */
  RestoreAccessBackupVaults?: RestoreAccessBackupVaultListMember[] | undefined;
}

/**
 * @public
 */
export interface ListRestoreJobsInput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The account ID to list the jobs from. Returns only restore jobs associated with the specified account ID.
   *
   * @public
   */
  ByAccountId?: string | undefined;

  /**
   * Include this parameter to return only restore jobs for the specified resources:
   *
   * - `Aurora` for Amazon Aurora
   * - `CloudFormation` for CloudFormation
   * - `DocumentDB` for Amazon DocumentDB (with MongoDB compatibility)
   * - `DynamoDB` for Amazon DynamoDB
   * - `EBS` for Amazon Elastic Block Store
   * - `EC2` for Amazon Elastic Compute Cloud
   * - `EFS` for Amazon Elastic File System
   * - `EKS` for Amazon Elastic Kubernetes Service
   * - `FSx` for Amazon FSx
   * - `Neptune` for Amazon Neptune
   * - `RDS` for Amazon Relational Database Service
   * - `Redshift` for Amazon Redshift
   * - `S3` for Amazon Simple Storage Service (Amazon S3)
   * - `SAP HANA on Amazon EC2` for SAP HANA databases on Amazon Elastic Compute Cloud instances
   * - `Storage Gateway` for Storage Gateway
   * - `Timestream` for Amazon Timestream
   * - `VirtualMachine` for VMware virtual machines
   *
   * @public
   */
  ByResourceType?: string | undefined;

  /**
   * Returns only restore jobs that were created before the specified date.
   *
   * @public
   */
  ByCreatedBefore?: Date | undefined;

  /**
   * Returns only restore jobs that were created after the specified date.
   *
   * @public
   */
  ByCreatedAfter?: Date | undefined;

  /**
   * Returns only restore jobs associated with the specified job status.
   *
   * @public
   */
  ByStatus?: RestoreJobStatus | undefined;

  /**
   * Returns only copy jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ByCompleteBefore?: Date | undefined;

  /**
   * Returns only copy jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ByCompleteAfter?: Date | undefined;

  /**
   * This returns only restore testing jobs that match the specified resource Amazon Resource Name (ARN).
   *
   * @public
   */
  ByRestoreTestingPlanArn?: string | undefined;

  /**
   * This is a filter to list child (nested) restore jobs based on parent restore job ID.
   *
   * @public
   */
  ByParentJobId?: string | undefined;
}

/**
 * Contains metadata about a restore job.
 *
 * @public
 */
export interface RestoreJobsListMember {
  /**
   * The account ID that owns the restore job.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Uniquely identifies the job that restores a recovery point.
   *
   * @public
   */
  RestoreJobId?: string | undefined;

  /**
   * An ARN that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the original resource that was backed up. This provides context about what resource is being restored.
   *
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the backup vault containing the recovery point being restored. This helps identify vault access policies and permissions.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * The date and time a restore job is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time a job to restore a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of `CompletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * A status code specifying the state of the job initiated by Backup to restore a recovery point.
   *
   * @public
   */
  Status?: RestoreJobStatus | undefined;

  /**
   * A detailed message explaining the status of the job to restore a recovery point.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Contains an estimated percentage complete of a job at the time the job status was queried.
   *
   * @public
   */
  PercentDone?: string | undefined;

  /**
   * The size, in bytes, of the restored resource.
   *
   * @public
   */
  BackupSizeInBytes?: number | undefined;

  /**
   * The IAM role ARN used to create the target recovery point; for example, `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The amount of time in minutes that a job restoring a recovery point is expected to take.
   *
   * @public
   */
  ExpectedCompletionTimeMinutes?: number | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  CreatedResourceArn?: string | undefined;

  /**
   * The resource type of the listed restore jobs; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is Amazon EC2.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The date on which a recovery point was created.
   *
   * @public
   */
  RecoveryPointCreationDate?: Date | undefined;

  /**
   * This is a boolean value indicating whether the restore job is a parent (composite) restore job.
   *
   * @public
   */
  IsParent?: boolean | undefined;

  /**
   * This is the unique identifier of the parent restore job for the selected restore job.
   *
   * @public
   */
  ParentJobId?: string | undefined;

  /**
   * Contains identifying information about the creation of a restore job.
   *
   * @public
   */
  CreatedBy?: RestoreJobCreator | undefined;

  /**
   * The status of validation run on the indicated restore job.
   *
   * @public
   */
  ValidationStatus?: RestoreValidationStatus | undefined;

  /**
   * This describes the status of validation run on the indicated restore job.
   *
   * @public
   */
  ValidationStatusMessage?: string | undefined;

  /**
   * This notes the status of the data generated by the restore test. The status may be `Deleting`, `Failed`, or `Successful`.
   *
   * @public
   */
  DeletionStatus?: RestoreDeletionStatus | undefined;

  /**
   * This describes the restore job deletion status.
   *
   * @public
   */
  DeletionStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListRestoreJobsOutput {
  /**
   * An array of objects that contain detailed information about jobs to restore saved resources.
   *
   * @public
   */
  RestoreJobs?: RestoreJobsListMember[] | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRestoreJobsByProtectedResourceInput {
  /**
   * Returns only restore jobs that match the specified resource Amazon Resource Name (ARN).
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Returns only restore jobs associated with the specified job status.
   *
   * @public
   */
  ByStatus?: RestoreJobStatus | undefined;

  /**
   * Returns only restore jobs of recovery points that were created after the specified date.
   *
   * @public
   */
  ByRecoveryPointCreationDateAfter?: Date | undefined;

  /**
   * Returns only restore jobs of recovery points that were created before the specified date.
   *
   * @public
   */
  ByRecoveryPointCreationDateBefore?: Date | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request ismade to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRestoreJobsByProtectedResourceOutput {
  /**
   * An array of objects that contain detailed information about jobs to restore saved resources.>
   *
   * @public
   */
  RestoreJobs?: RestoreJobsListMember[] | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows youto return more items in your list starting at the location pointed to by the next token
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRestoreJobSummariesInput {
  /**
   * Returns the job count for the specified account.
   *
   * If the request is sent from a member account or an account not part of Amazon Web Services Organizations, jobs within requestor's account will be returned.
   *
   * Root, admin, and delegated administrator accounts can use the value ANY to return job counts from every account in the organization.
   *
   * `AGGREGATE_ALL` aggregates job counts from all accounts within the authenticated organization, then returns the sum.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * This parameter returns the job count for jobs with the specified state.
   *
   * The the value ANY returns count of all states.
   *
   * `AGGREGATE_ALL` aggregates job counts for all states and returns the sum.
   *
   * @public
   */
  State?: RestoreJobState | undefined;

  /**
   * Returns the job count for the specified resource type. Use request `GetSupportedResourceTypes` to obtain strings for supported resource types.
   *
   * The the value ANY returns count of all resource types.
   *
   * `AGGREGATE_ALL` aggregates job counts for all resource types and returns the sum.
   *
   * The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The period for the returned results.
   *
   * - `ONE_DAY` - The daily job count for the prior 14 days.
   * - `SEVEN_DAYS` - The aggregated job count for the prior 7 days.
   * - `FOURTEEN_DAYS` - The aggregated job count for prior 14 days.
   *
   * @public
   */
  AggregationPeriod?: AggregationPeriod | undefined;

  /**
   * This parameter sets the maximum number of items to be returned.
   *
   * The value is an integer. Range of accepted values is from 1 to 500.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `MaxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * This is a summary of restore jobs created or running within the most recent 14 days.
 *
 * The returned summary may contain the following: Region, Account, State, ResourceType, MessageCategory, StartTime, EndTime, and Count of included jobs.
 *
 * @public
 */
export interface RestoreJobSummary {
  /**
   * The Amazon Web Services Regions within the job summary.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The account ID that owns the jobs within the summary.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * This value is job count for jobs with the specified state.
   *
   * @public
   */
  State?: RestoreJobState | undefined;

  /**
   * This value is the job count for the specified resource type. The request `GetSupportedResourceTypes` returns strings for supported resource types.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The value as a number of jobs in a job summary.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The value of time in number format of a job start time.
   *
   * This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The value of time in number format of a job end time.
   *
   * This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListRestoreJobSummariesOutput {
  /**
   * This return contains a summary that contains Region, Account, State, ResourceType, MessageCategory, StartTime, EndTime, and Count of included jobs.
   *
   * @public
   */
  RestoreJobSummaries?: RestoreJobSummary[] | undefined;

  /**
   * The period for the returned results.
   *
   * - `ONE_DAY` - The daily job count for the prior 14 days.
   * - `SEVEN_DAYS` - The aggregated job count for the prior 7 days.
   * - `FOURTEEN_DAYS` - The aggregated job count for prior 14 days.
   *
   * @public
   */
  AggregationPeriod?: string | undefined;

  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `MaxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRestoreTestingPlansInput {
  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the nexttoken.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * This contains metadata about a restore testing plan.
 *
 * @public
 */
export interface RestoreTestingPlanForList {
  /**
   * The date and time that a restore testing plan was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The last time a restore test was run with the specified restore testing plan. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of `LastExecutionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LastExecutionTime?: Date | undefined;

  /**
   * The date and time that the restore testing plan was updated. This update is in Unix format and Coordinated Universal Time (UTC). The value of `LastUpdateTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifiesa restore testing plan.
   *
   * @public
   */
  RestoreTestingPlanArn: string | undefined;

  /**
   * The restore testing plan name.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * A CRON expression in specified timezone when a restore testing plan is executed. When no CRON expression is provided, Backup will use the default expression `cron(0 5 ? * * *)`.
   *
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * Optional. This is the timezone in which the schedule expression is set. By default, ScheduleExpressions are in UTC. You can modify this to a specified timezone.
   *
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * Defaults to 24 hours.
   *
   * A value in hours after a restore test is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. If this value is included, this parameter has a maximum value of 168 hours (one week).
   *
   * @public
   */
  StartWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface ListRestoreTestingPlansOutput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the nexttoken.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * This is a returned list of restore testing plans.
   *
   * @public
   */
  RestoreTestingPlans: RestoreTestingPlanForList[] | undefined;
}

/**
 * @public
 */
export interface ListRestoreTestingSelectionsInput {
  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the nexttoken.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Returns restore testing selections by the specified restore testing plan name.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;
}

/**
 * This contains metadata about a restore testing selection.
 *
 * @public
 */
export interface RestoreTestingSelectionForList {
  /**
   * The date and time that a restore testing selection was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26,2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that Backup uses to create the target resource; for example: `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The type of Amazon Web Services resource included in a restore testing selection; for example, an Amazon EBS volume or an Amazon RDS database.
   *
   * @public
   */
  ProtectedResourceType: string | undefined;

  /**
   * Unique string that is the name of the restore testing plan.
   *
   * The name cannot be changed after creation. The name must consist of only alphanumeric characters and underscores. Maximum length is 50.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * Unique name of a restore testing selection.
   *
   * The name consists of only alphanumeric characters and underscores. Maximum length is 50.
   *
   * @public
   */
  RestoreTestingSelectionName: string | undefined;

  /**
   * This value represents the time, in hours, data is retained after a restore test so that optional validation can be completed.
   *
   * Accepted value is an integer between 0 and 168 (the hourly equivalent of seven days).
   *
   * @public
   */
  ValidationWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface ListRestoreTestingSelectionsOutput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the nexttoken.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The returned restore testing selections associated with the restore testing plan.
   *
   * @public
   */
  RestoreTestingSelections: RestoreTestingSelectionForList[] | undefined;
}

/**
 * @public
 */
export interface ListScanJobsInput {
  /**
   * The account ID to list the jobs from. Returns only backup jobs associated with the specified account ID.
   *
   * If used from an Amazon Web Services Organizations management account, passing `*` returns all jobs across the organization.
   *
   * Pattern: `^[0-9]\{12\}$`
   *
   * @public
   */
  ByAccountId?: string | undefined;

  /**
   * Returns only scan jobs that will be stored in the specified backup vault. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * Pattern: `^[a-zA-Z0-9\-\_\.]\{2,50\}$`
   *
   * @public
   */
  ByBackupVaultName?: string | undefined;

  /**
   * Returns only scan jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ByCompleteAfter?: Date | undefined;

  /**
   * Returns only backup jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ByCompleteBefore?: Date | undefined;

  /**
   * Returns only the scan jobs for the specified malware scanner. Currently only supports `GUARDDUTY`.
   *
   * @public
   */
  ByMalwareScanner?: MalwareScanner | undefined;

  /**
   * Returns only the scan jobs that are ran against the specified recovery point.
   *
   * @public
   */
  ByRecoveryPointArn?: string | undefined;

  /**
   * Returns only scan jobs that match the specified resource Amazon Resource Name (ARN).
   *
   * @public
   */
  ByResourceArn?: string | undefined;

  /**
   * Returns restore testing selections by the specified restore testing plan name.
   *
   * - `EBS`for Amazon Elastic Block Store
   * - `EC2`for Amazon Elastic Compute Cloud
   * - `S3`for Amazon Simple Storage Service (Amazon S3)
   *
   * Pattern: `^[a-zA-Z0-9\-\_\.]\{1,50\}$`
   *
   * @public
   */
  ByResourceType?: ScanResourceType | undefined;

  /**
   * Returns only the scan jobs for the specified scan results:
   *
   * - `THREATS_FOUND`
   * - `NO_THREATS_FOUND`
   *
   * @public
   */
  ByScanResultStatus?: ScanResultStatus | undefined;

  /**
   * Returns only the scan jobs for the specified scanning job state.
   *
   * @public
   */
  ByState?: ScanState | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * Valid Range: Minimum value of 1. Maximum value of 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains metadata about a scan job, including information about the scanning process, results, and associated resources.
 *
 * @public
 */
export interface ScanJob {
  /**
   * The account ID that owns the scan job.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  BackupVaultArn: string | undefined;

  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The date and time that a scan job is completed, in Unix format and Coordinated Universal Time (UTC). The value of `CompletionDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * The point in time the scan job scanned up to for a continuous backup.
   *
   * @public
   */
  ContinuousScanEndTime?: Date | undefined;

  /**
   * The point in time the scan job started scan from for a continuous backup.
   *
   * @public
   */
  ContinuousScanStartTime?: Date | undefined;

  /**
   * Contains identifying information about the creation of a scan job.
   *
   * @public
   */
  CreatedBy: ScanJobCreator | undefined;

  /**
   * The date and time that a scan job is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * Specifies the IAM role ARN used to create the scan job; for example, `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The scanning engine used for the scan job. Currently only `GUARDDUTY` is supported.
   *
   * @public
   */
  MalwareScanner: MalwareScanner | undefined;

  /**
   * An ARN that uniquely identifies the recovery point being scanned; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * An ARN that uniquely identifies the source resource of the recovery point being scanned.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The non-unique name of the resource that belongs to the specified backup.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The type of Amazon Web Services resource being scanned; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
   *
   * @public
   */
  ResourceType: ScanResourceType | undefined;

  /**
   * An ARN that uniquely identifies the base recovery point for scanning. This field is populated when an incremental scan job has taken place.
   *
   * @public
   */
  ScanBaseRecoveryPointArn?: string | undefined;

  /**
   * The scan ID generated by the malware scanner for the corresponding scan job.
   *
   * @public
   */
  ScanId?: string | undefined;

  /**
   * The unique identifier that identifies the scan job request to Backup.
   *
   * @public
   */
  ScanJobId: string | undefined;

  /**
   * Specifies the scan type use for the scan job.
   *
   * Includes:
   *
   * `FULL_SCAN` will scan the entire data lineage within the backup.
   *
   * `INCREMENTAL_SCAN` will scan the data difference between the target recovery point and base recovery point ARN.
   *
   * @public
   */
  ScanMode: ScanMode | undefined;

  /**
   * Contains the scan results information, including the status of threats found during scanning.
   *
   * @public
   */
  ScanResult?: ScanResultInfo | undefined;

  /**
   * Specifies the scanner IAM role ARN used for the scan job.
   *
   * @public
   */
  ScannerRoleArn: string | undefined;

  /**
   * The current state of the scan job.
   *
   * Valid values: `CREATED` | `RUNNING` | `COMPLETED` | `COMPLETED_WITH_ISSUES` | `FAILED` | `CANCELED`.
   *
   * @public
   */
  State?: ScanState | undefined;

  /**
   * A detailed message explaining the status of the scan job.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListScanJobsOutput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of structures containing metadata about your scan jobs returned in JSON format.
   *
   * @public
   */
  ScanJobs: ScanJob[] | undefined;
}

/**
 * @public
 */
export interface ListScanJobSummariesInput {
  /**
   * Returns the job count for the specified account.
   *
   * If the request is sent from a member account or an account not part of Amazon Web Services Organizations, jobs within requestor's account will be returned.
   *
   * Root, admin, and delegated administrator accounts can use the value `ANY` to return job counts from every account in the organization.
   *
   * `AGGREGATE_ALL` aggregates job counts from all accounts within the authenticated organization, then returns the sum.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Returns the job count for the specified resource type. Use request `GetSupportedResourceTypes` to obtain strings for supported resource types.
   *
   * The the value `ANY` returns count of all resource types.
   *
   * `AGGREGATE_ALL` aggregates job counts for all resource types and returns the sum.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Returns only the scan jobs for the specified malware scanner. Currently the only MalwareScanner is `GUARDDUTY`. But the field also supports `ANY`, and `AGGREGATE_ALL`.
   *
   * @public
   */
  MalwareScanner?: MalwareScanner | undefined;

  /**
   * Returns only the scan jobs for the specified scan results.
   *
   * @public
   */
  ScanResultStatus?: ScanResultStatus | undefined;

  /**
   * Returns only the scan jobs for the specified scanning job state.
   *
   * @public
   */
  State?: ScanJobStatus | undefined;

  /**
   * The period for the returned results.
   *
   * - `ONE_DAY`The daily job count for the prior 1 day.
   * - `SEVEN_DAYS`The daily job count for the prior 7 days.
   * - `FOURTEEN_DAYS`The daily job count for the prior 14 days.
   *
   * @public
   */
  AggregationPeriod?: AggregationPeriod | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * The value is an integer. Range of accepted values is from 1 to 500.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains summary information about scan jobs, including counts and metadata for a specific time period and criteria.
 *
 * @public
 */
export interface ScanJobSummary {
  /**
   * The Amazon Web Services Region where the scan jobs were executed.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The account ID that owns the scan jobs included in this summary.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The state of the scan jobs included in this summary.
   *
   * Valid values: `CREATED` | `RUNNING` | `COMPLETED` | `COMPLETED_WITH_ISSUES` | `FAILED` | `CANCELED`.
   *
   * @public
   */
  State?: ScanJobStatus | undefined;

  /**
   * The type of Amazon Web Services resource for the scan jobs included in this summary.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The number of scan jobs that match the specified criteria.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The value of time in number format of a job start time.
   *
   * This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The value of time in number format of a job end time.
   *
   * This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Specifies the malware scanner used during the scan job. Currently only supports `GUARDDUTY`.
   *
   * @public
   */
  MalwareScanner?: MalwareScanner | undefined;

  /**
   * The scan result status for the scan jobs included in this summary.
   *
   * Valid values: `THREATS_FOUND` | `NO_THREATS_FOUND`.
   *
   * @public
   */
  ScanResultStatus?: ScanResultStatus | undefined;
}

/**
 * @public
 */
export interface ListScanJobSummariesOutput {
  /**
   * The summary information.
   *
   * @public
   */
  ScanJobSummaries?: ScanJobSummary[] | undefined;

  /**
   * The period for the returned results.
   *
   * - `ONE_DAY`The daily job count for the prior 1 day.
   * - `SEVEN_DAYS`The daily job count for the prior 7 days.
   * - `FOURTEEN_DAYS`The daily job count for the prior 14 days.
   *
   * Valid Values: `'ONE_DAY'` | `'SEVEN_DAYS'` | `'FOURTEEN_DAYS'`
   *
   * @public
   */
  AggregationPeriod?: string | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsInput {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the type of resource. Valid targets for `ListTags` are recovery points, backup plans, and backup vaults.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsOutput {
  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTieringConfigurationsInput {
  /**
   * The maximum number of items to be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * This contains metadata about a tiering configuration returned in a list.
 *
 * @public
 */
export interface TieringConfigurationsListMember {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies the tiering configuration.
   *
   * @public
   */
  TieringConfigurationArn?: string | undefined;

  /**
   * The unique name of the tiering configuration.
   *
   * @public
   */
  TieringConfigurationName?: string | undefined;

  /**
   * The name of the backup vault where the tiering configuration applies. Use `*` to apply to all backup vaults.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * The date and time a tiering configuration was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087AM.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time a tiering configuration was updated, in Unix format and Coordinated Universal Time (UTC). The value of `LastUpdatedTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087AM.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTieringConfigurationsOutput {
  /**
   * An array of tiering configurations returned by the `ListTieringConfigurations` call.
   *
   * @public
   */
  TieringConfigurations?: TieringConfigurationsListMember[] | undefined;

  /**
   * The next item following a partial list of returned items. For example, if a request is made to return `MaxResults` number of items, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutBackupVaultAccessPolicyInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The backup vault access policy document in JSON format.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface PutBackupVaultLockConfigurationInput {
  /**
   * The Backup Vault Lock configuration that specifies the name of the backup vault it protects.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The Backup Vault Lock configuration that specifies the minimum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to retain certain data for at least seven years (2555 days).
   *
   * This parameter is required when a vault lock is created through CloudFormation; otherwise, this parameter is optional. If this parameter is not specified, Vault Lock will not enforce a minimum retention period.
   *
   * If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails that backup or copy job, and you should either modify your lifecycle settings or use a different vault. The shortest minimum retention period you can specify is 1 day. Recovery points already saved in the vault prior to Vault Lock are not affected.
   *
   * @public
   */
  MinRetentionDays?: number | undefined;

  /**
   * The Backup Vault Lock configuration that specifies the maximum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to destroy certain data after retaining it for four years (1460 days).
   *
   * If this parameter is not included, Vault Lock does not enforce a maximum retention period on the recovery points in the vault. If this parameter is included without a value, Vault Lock will not enforce a maximum retention period.
   *
   * If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. The longest maximum retention period you can specify is 36500 days (approximately 100 years). Recovery points already saved in the vault prior to Vault Lock are not affected.
   *
   * @public
   */
  MaxRetentionDays?: number | undefined;

  /**
   * The Backup Vault Lock configuration that specifies the number of days before the lock date. For example, setting `ChangeableForDays` to 30 on Jan. 1, 2022 at 8pm UTC will set the lock date to Jan. 31, 2022 at 8pm UTC.
   *
   * Backup enforces a 72-hour cooling-off period before Vault Lock takes effect and becomes immutable. Therefore, you must set `ChangeableForDays` to 3 or greater.
   *
   * The maximum value you can specify is 36,500 days (approximately 100 years).
   *
   * Before the lock date, you can delete Vault Lock from the vault using `DeleteBackupVaultLockConfiguration` or change the Vault Lock configuration using `PutBackupVaultLockConfiguration`. On and after the lock date, the Vault Lock becomes immutable and cannot be changed or deleted.
   *
   * If this parameter is not specified, you can delete Vault Lock from the vault using `DeleteBackupVaultLockConfiguration` or change the Vault Lock configuration using `PutBackupVaultLockConfiguration` at any time.
   *
   * @public
   */
  ChangeableForDays?: number | undefined;
}

/**
 * @public
 */
export interface PutBackupVaultNotificationsInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for example, `arn:aws:sns:us-west-2:111122223333:MyVaultTopic`.
   *
   * @public
   */
  SNSTopicArn: string | undefined;

  /**
   * An array of events that indicate the status of jobs to back up resources to the backup vault. For the list of supported events, common use cases, and code samples, see [Notification options with Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-notifications.html).
   *
   * @public
   */
  BackupVaultEvents: BackupVaultEvent[] | undefined;
}

/**
 * @public
 */
export interface PutRestoreValidationResultInput {
  /**
   * This is a unique identifier of a restore job within Backup.
   *
   * @public
   */
  RestoreJobId: string | undefined;

  /**
   * The status of your restore validation.
   *
   * @public
   */
  ValidationStatus: RestoreValidationStatus | undefined;

  /**
   * This is an optional message string you can input to describe the validation status for the restore test validation.
   *
   * @public
   */
  ValidationStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface RevokeRestoreAccessBackupVaultInput {
  /**
   * The name of the source backup vault associated with the restore access backup vault to be revoked.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The ARN of the restore access backup vault to revoke.
   *
   * @public
   */
  RestoreAccessBackupVaultArn: string | undefined;

  /**
   * A comment explaining the reason for revoking access to the restore access backup vault.
   *
   * @public
   */
  RequesterComment?: string | undefined;
}

/**
 * @public
 */
export interface StartBackupJobInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The ARN of a logically air-gapped vault. ARN must be in the same account and Region. If provided, supported fully managed resources back up directly to logically air-gapped vault, while other supported resources create a temporary (billable) snapshot in backup vault, then copy it to logically air-gapped vault. Unsupported resources only back up to the specified backup vault.
   *
   * @public
   */
  LogicallyAirGappedBackupVaultArn?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Specifies the IAM role ARN used to create the target recovery point; for example, `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * A customer-chosen string that you can use to distinguish between otherwise identical calls to `StartBackupJob`. Retrying a successful request with the same idempotency token results in a success message with no action taken.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional, and the default is 8 hours. If this value is included, it must be at least 60 minutes to avoid errors.
   *
   * This parameter has a maximum value of 100 years (52,560,000 minutes).
   *
   * During the start window, the backup job status remains in `CREATED` status until it has successfully begun or until the start window time has run out. If within the start window time Backup receives an error that allows the job to be retried, Backup will automatically retry to begin the job at least every 10 minutes until the backup successfully begins (the job status changes to `RUNNING`) or until the job status changes to `EXPIRED` (which is expected to occur when the start window time is over).
   *
   * @public
   */
  StartWindowMinutes?: number | undefined;

  /**
   * A value in minutes during which a successfully started backup must complete, or else Backup will cancel the job. This value is optional. This value begins counting down from when the backup was scheduled. It does not add additional time for `StartWindowMinutes`, or if the backup started later than scheduled.
   *
   * Like `StartWindowMinutes`, this parameter has a maximum value of 100 years (52,560,000 minutes).
   *
   * @public
   */
  CompleteWindowMinutes?: number | undefined;

  /**
   * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup will transition and expire backups automatically according to the lifecycle that you define.
   *
   * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.
   *
   * Resource types that can transition to cold storage are listed in the [Feature availability by resource](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource) table. Backup ignores this expression for other resource types.
   *
   * This parameter has a maximum value of 100 years (36,500 days).
   *
   * @public
   */
  Lifecycle?: Lifecycle | undefined;

  /**
   * The tags to assign to the resources.
   *
   * @public
   */
  RecoveryPointTags?: Record<string, string> | undefined;

  /**
   * The backup option for a selected resource. This option is only available for Windows Volume Shadow Copy Service (VSS) backup jobs.
   *
   * Valid values: Set to `"WindowsVSS":"enabled"` to enable the `WindowsVSS` backup option and create a Windows VSS backup. Set to `"WindowsVSS""disabled"` to create a regular backup. The `WindowsVSS` option is not enabled by default.
   *
   * @public
   */
  BackupOptions?: Record<string, string> | undefined;

  /**
   * Include this parameter to enable index creation if your backup job has a resource type that supports backup indexes.
   *
   * Resource types that support backup indexes include:
   *
   * - `EBS` for Amazon Elastic Block Store
   * - `S3` for Amazon Simple Storage Service (Amazon S3)
   *
   * Index can have 1 of 2 possible values, either `ENABLED` or `DISABLED`.
   *
   * To create a backup index for an eligible `ACTIVE` recovery point that does not yet have a backup index, set value to `ENABLED`.
   *
   * To delete a backup index, set value to `DISABLED`.
   *
   * @public
   */
  Index?: Index | undefined;
}

/**
 * @public
 */
export interface StartBackupJobOutput {
  /**
   * Uniquely identifies a request to Backup to back up a resource.
   *
   * @public
   */
  BackupJobId?: string | undefined;

  /**
   * *Note: This field is only returned for Amazon EFS and Advanced DynamoDB resources.*
   *
   * An ARN that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * The date and time that a backup job is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * This is a returned boolean value indicating this is a parent (composite) backup job.
   *
   * @public
   */
  IsParent?: boolean | undefined;
}

/**
 * @public
 */
export interface StartCopyJobInput {
  /**
   * An ARN that uniquely identifies a recovery point to use for the copy job; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * The name of a logical source container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  SourceBackupVaultName: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a destination backup vault to copy to; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  DestinationBackupVaultArn: string | undefined;

  /**
   * Specifies the IAM role ARN used to copy the target recovery point; for example, `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * A customer-chosen string that you can use to distinguish between otherwise identical calls to `StartCopyJob`. Retrying a successful request with the same idempotency token results in a success message with no action taken.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * Specifies the time period, in days, before a recovery point transitions to cold storage or is deleted.
   *
   * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the retention setting must be 90 days greater than the transition to cold after days setting. The transition to cold after days setting can't be changed after a backup has been transitioned to cold.
   *
   * Resource types that can transition to cold storage are listed in the [Feature availability by resource](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource) table. Backup ignores this expression for other resource types.
   *
   * To remove the existing lifecycle and retention periods and keep your recovery points indefinitely, specify -1 for `MoveToColdStorageAfterDays` and `DeleteAfterDays`.
   *
   * @public
   */
  Lifecycle?: Lifecycle | undefined;
}

/**
 * @public
 */
export interface StartCopyJobOutput {
  /**
   * Uniquely identifies a copy job.
   *
   * @public
   */
  CopyJobId?: string | undefined;

  /**
   * The date and time that a copy job is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * This is a returned boolean value indicating this is a parent (composite) copy job.
   *
   * @public
   */
  IsParent?: boolean | undefined;
}

/**
 * @public
 */
export interface StartReportJobInput {
  /**
   * The unique name of a report plan.
   *
   * @public
   */
  ReportPlanName: string | undefined;

  /**
   * A customer-chosen string that you can use to distinguish between otherwise identical calls to `StartReportJobInput`. Retrying a successful request with the same idempotency token results in a success message with no action taken.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface StartReportJobOutput {
  /**
   * The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded string that is at most 1,024 bytes long. The report job ID cannot be edited.
   *
   * @public
   */
  ReportJobId?: string | undefined;
}

/**
 * @public
 */
export interface StartRestoreJobInput {
  /**
   * An ARN that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * A set of metadata key-value pairs.
   *
   * You can get configuration metadata about a resource at the time it was backed up by calling `GetRecoveryPointRestoreMetadata`. However, values in addition to those provided by `GetRecoveryPointRestoreMetadata` might be required to restore a resource. For example, you might need to provide a new resource name if the original already exists.
   *
   * For more information about the metadata for each resource, see the following:
   *
   * - [Metadata for Amazon Aurora](https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-aur.html#aur-restore-cli)
   * - [Metadata for Amazon DocumentDB](https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-docdb.html#docdb-restore-cli)
   * - [Metadata for CloudFormation](https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-application-stacks.html#restoring-cfn-cli)
   * - [Metadata for Amazon DynamoDB](https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-dynamodb.html#ddb-restore-cli)
   * - [Metadata for Amazon EBS](https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-ebs.html#ebs-restore-cli)
   * - [Metadata for Amazon EC2](https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-ec2.html#restoring-ec2-cli)
   * - [Metadata for Amazon EFS](https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-efs.html#efs-restore-cli)
   * - [Metadata for Amazon EKS](https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-eks.html#eks-restore-backup-section)
   * - [Metadata for Amazon FSx](https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-fsx.html#fsx-restore-cli)
   * - [Metadata for Amazon Neptune](https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-nep.html#nep-restore-cli)
   * - [Metadata for Amazon RDS](https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-rds.html#rds-restore-cli)
   * - [Metadata for Amazon Redshift](https://docs.aws.amazon.com/aws-backup/latest/devguide/redshift-restores.html#redshift-restore-api)
   * - [Metadata for Storage Gateway](https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-storage-gateway.html#restoring-sgw-cli)
   * - [Metadata for Amazon S3](https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-s3.html#s3-restore-cli)
   * - [Metadata for Amazon Timestream](https://docs.aws.amazon.com/aws-backup/latest/devguide/timestream-restore.html#timestream-restore-api)
   * - [Metadata for virtual machines](https://docs.aws.amazon.com/aws-backup/latest/devguide/restoring-vm.html#vm-restore-cli)
   *
   * @public
   */
  Metadata: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that Backup uses to create the target resource; for example: `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * A customer-chosen string that you can use to distinguish between otherwise identical calls to `StartRestoreJob`. Retrying a successful request with the same idempotency token results in a success message with no action taken.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * Starts a job to restore a recovery point for one of the following resources:
   *
   * - `Aurora` - Amazon Aurora
   * - `DocumentDB` - Amazon DocumentDB
   * - `CloudFormation` - CloudFormation
   * - `DynamoDB` - Amazon DynamoDB
   * - `EBS` - Amazon Elastic Block Store
   * - `EC2` - Amazon Elastic Compute Cloud
   * - `EFS` - Amazon Elastic File System
   * - `EKS` - Amazon Elastic Kubernetes Service
   * - `FSx` - Amazon FSx
   * - `Neptune` - Amazon Neptune
   * - `RDS` - Amazon Relational Database Service
   * - `Redshift` - Amazon Redshift
   * - `Storage Gateway` - Storage Gateway
   * - `S3` - Amazon Simple Storage Service
   * - `Timestream` - Amazon Timestream
   * - `VirtualMachine` - Virtual machines
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * This is an optional parameter. If this equals `True`, tags included in the backup will be copied to the restored resource.
   *
   * This can only be applied to backups created through Backup.
   *
   * @public
   */
  CopySourceTagsToRestoredResource?: boolean | undefined;
}

/**
 * @public
 */
export interface StartRestoreJobOutput {
  /**
   * Uniquely identifies the job that restores a recovery point.
   *
   * @public
   */
  RestoreJobId?: string | undefined;
}

/**
 * @public
 */
export interface StartScanJobInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * Pattern: `^[a-zA-Z0-9\-\_]\{2,50\}$`
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * The point in time the scan job will scan up to for a continuous backup.
   *
   * @public
   */
  ContinuousScanEndTime?: Date | undefined;

  /**
   * Specifies the IAM role ARN used to create the target recovery point; for example, `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * A customer-chosen string that you can use to distinguish between otherwise identical calls to `StartScanJob`. Retrying a successful request with the same idempotency token results in a success message with no action taken.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * Specifies the malware scanner used during the scan job. Currently only supports `GUARDDUTY`.
   *
   * @public
   */
  MalwareScanner: MalwareScanner | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a recovery point. This is your target recovery point for a full scan. If you are running an incremental scan, this will be your a recovery point which has been created after your base recovery point selection.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * An ARN that uniquely identifies the base recovery point to be used for incremental scanning.
   *
   * @public
   */
  ScanBaseRecoveryPointArn?: string | undefined;

  /**
   * Specifies the scan type use for the scan job.
   *
   * Includes:
   *
   * - `FULL_SCAN` will scan the entire data lineage within the backup.
   * - `INCREMENTAL_SCAN` will scan the data difference between the target recovery point and base recovery point ARN.
   *
   * @public
   */
  ScanMode: ScanMode | undefined;

  /**
   * Specified the IAM scanner role ARN.
   *
   * @public
   */
  ScannerRoleArn: string | undefined;
}

/**
 * @public
 */
export interface StartScanJobOutput {
  /**
   * The date and time that a backup job is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * Uniquely identifies a request to Backup to back up a resource.
   *
   * @public
   */
  ScanJobId: string | undefined;
}

/**
 * @public
 */
export interface StopBackupJobInput {
  /**
   * Uniquely identifies a request to Backup to back up a resource.
   *
   * @public
   */
  BackupJobId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The ARN that uniquely identifies the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Key-value pairs that are used to help organize your resources. You can assign your own metadata to the resources you create. For clarity, this is the structure to assign tags: `[\{"Key":"string","Value":"string"\}]`.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * An ARN that uniquely identifies a resource. The format of the ARN depends on the type of the tagged resource.
   *
   * ARNs that do not include `backup` are incompatible with tagging. `TagResource` and `UntagResource` with invalid ARNs will result in an error. Acceptable ARN content can include `arn:aws:backup:us-east`. Invalid ARN content may look like `arn:aws:ec2:us-east`.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The keys to identify which key-value tags to remove from a resource.
   *
   * @public
   */
  TagKeyList: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateBackupPlanInput {
  /**
   * The ID of the backup plan.
   *
   * @public
   */
  BackupPlanId: string | undefined;

  /**
   * The body of a backup plan. Includes a `BackupPlanName` and one or more sets of `Rules`.
   *
   * @public
   */
  BackupPlan: BackupPlanInput | undefined;
}

/**
 * @public
 */
export interface UpdateBackupPlanOutput {
  /**
   * Uniquely identifies a backup plan.
   *
   * @public
   */
  BackupPlanId?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, `arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50`.
   *
   * @public
   */
  BackupPlanArn?: string | undefined;

  /**
   * The date and time a backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationDate` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version Ids cannot be edited.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Contains a list of `BackupOptions` for each resource type.
   *
   * @public
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[] | undefined;

  /**
   * Contains your scanning configuration for the backup plan and includes the Malware scanner, your selected resources, and scanner role.
   *
   * @public
   */
  ScanSettings?: ScanSetting[] | undefined;
}

/**
 * @public
 */
export interface UpdateFrameworkInput {
  /**
   * The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
   *
   * @public
   */
  FrameworkName: string | undefined;

  /**
   * An optional description of the framework with a maximum 1,024 characters.
   *
   * @public
   */
  FrameworkDescription?: string | undefined;

  /**
   * The controls that make up the framework. Each control in the list has a name, input parameters, and scope.
   *
   * @public
   */
  FrameworkControls?: FrameworkControl[] | undefined;

  /**
   * A customer-chosen string that you can use to distinguish between otherwise identical calls to `UpdateFrameworkInput`. Retrying a successful request with the same idempotency token results in a success message with no action taken.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFrameworkOutput {
  /**
   * The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
   *
   * @public
   */
  FrameworkName?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  FrameworkArn?: string | undefined;

  /**
   * The date and time that a framework is created, in ISO 8601 representation. The value of `CreationTime` is accurate to milliseconds. For example, 2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind UTC.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsInput {
  /**
   * Inputs can include:
   *
   * A value for `isCrossAccountBackupEnabled`. Values can be true or false. Example: `update-global-settings --global-settings isCrossAccountBackupEnabled=false`.
   *
   * A value for Multi-party approval, styled as `isMpaEnabled`. Values can be true or false. Example: `update-global-settings --global-settings isMpaEnabled=false`.
   *
   * A value for Backup Service-Linked Role creation, styled as `isDelegatedAdministratorEnabled`. Values can be true or false. Example: `update-global-settings --global-settings isDelegatedAdministratorEnabled=false`.
   *
   * @public
   */
  GlobalSettings?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryPointIndexSettingsInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created.
   *
   * Accepted characters include lowercase letters, numbers, and hyphens.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * An ARN that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * This specifies the IAM role ARN used for this operation.
   *
   * For example, arn:aws:iam::123456789012:role/S3Access
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * Index can have 1 of 2 possible values, either `ENABLED` or `DISABLED`.
   *
   * To create a backup index for an eligible `ACTIVE` recovery point that does not yet have a backup index, set value to `ENABLED`.
   *
   * To delete a backup index, set value to `DISABLED`.
   *
   * @public
   */
  Index: Index | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryPointIndexSettingsOutput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * An ARN that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * This is the current status for the backup index associated with the specified recovery point.
   *
   * Statuses are: `PENDING` | `ACTIVE` | `FAILED` | `DELETING`
   *
   * A recovery point with an index that has the status of `ACTIVE` can be included in a search.
   *
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * Index can have 1 of 2 possible values, either `ENABLED` or `DISABLED`.
   *
   * A value of `ENABLED` means a backup index for an eligible `ACTIVE` recovery point has been created.
   *
   * A value of `DISABLED` means a backup index was deleted.
   *
   * @public
   */
  Index?: Index | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryPointLifecycleInput {
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.
   *
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn: string | undefined;

  /**
   * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.
   *
   * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.
   *
   * @public
   */
  Lifecycle?: Lifecycle | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryPointLifecycleOutput {
  /**
   * An ARN that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`.
   *
   * @public
   */
  BackupVaultArn?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, `arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45`.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.
   *
   * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.
   *
   * Resource types that can transition to cold storage are listed in the [Feature availability by resource](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource) table. Backup ignores this expression for other resource types.
   *
   * @public
   */
  Lifecycle?: Lifecycle | undefined;

  /**
   * A `CalculatedLifecycle` object containing `DeleteAt` and `MoveToColdStorageAt` timestamps.
   *
   * @public
   */
  CalculatedLifecycle?: CalculatedLifecycle | undefined;
}

/**
 * @public
 */
export interface UpdateRegionSettingsInput {
  /**
   * Updates the list of services along with the opt-in preferences for the Region.
   *
   * If resource assignments are only based on tags, then service opt-in settings are applied. If a resource type is explicitly assigned to a backup plan, such as Amazon S3, Amazon EC2, or Amazon RDS, it will be included in the backup even if the opt-in is not enabled for that particular service. If both a resource type and tags are specified in a resource assignment, the resource type specified in the backup plan takes priority over the tag condition. Service opt-in settings are disregarded in this situation.
   *
   * @public
   */
  ResourceTypeOptInPreference?: Record<string, boolean> | undefined;

  /**
   * Enables or disables full Backup management of backups for a resource type. To enable full Backup management for DynamoDB along with [Backup's advanced DynamoDB backup features](https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html), follow the procedure to [enable advanced DynamoDB backup programmatically](https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html#advanced-ddb-backup-enable-cli).
   *
   * @public
   */
  ResourceTypeManagementPreference?: Record<string, boolean> | undefined;
}

/**
 * @public
 */
export interface UpdateReportPlanInput {
  /**
   * The unique name of the report plan. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
   *
   * @public
   */
  ReportPlanName: string | undefined;

  /**
   * An optional description of the report plan with a maximum 1,024 characters.
   *
   * @public
   */
  ReportPlanDescription?: string | undefined;

  /**
   * The information about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
   *
   * @public
   */
  ReportDeliveryChannel?: ReportDeliveryChannel | undefined;

  /**
   * The report template for the report. Reports are built using a report template. The report templates are:
   *
   * `RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`
   *
   * If the report template is `RESOURCE_COMPLIANCE_REPORT` or `CONTROL_COMPLIANCE_REPORT`, this API resource also describes the report coverage by Amazon Web Services Regions and frameworks.
   *
   * @public
   */
  ReportSetting?: ReportSetting | undefined;

  /**
   * A customer-chosen string that you can use to distinguish between otherwise identical calls to `UpdateReportPlanInput`. Retrying a successful request with the same idempotency token results in a success message with no action taken.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateReportPlanOutput {
  /**
   * The unique name of the report plan.
   *
   * @public
   */
  ReportPlanName?: string | undefined;

  /**
   * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
   *
   * @public
   */
  ReportPlanArn?: string | undefined;

  /**
   * The date and time that a report plan is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * This contains metadata about a restore testing plan.
 *
 * @public
 */
export interface RestoreTestingPlanForUpdate {
  /**
   * Required: `Algorithm`; `RecoveryPointTypes`; `IncludeVaults` (*one or more*).
   *
   * Optional: *SelectionWindowDays* (*'30' if not specified*); `ExcludeVaults` (defaults to empty list if not listed).
   *
   * @public
   */
  RecoveryPointSelection?: RestoreTestingRecoveryPointSelection | undefined;

  /**
   * A CRON expression in specified timezone when a restore testing plan is executed. When no CRON expression is provided, Backup will use the default expression `cron(0 5 ? * * *)`.
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * Optional. This is the timezone in which the schedule expression is set. By default, ScheduleExpressions are in UTC. You can modify this to a specified timezone.
   *
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * Defaults to 24 hours.
   *
   * A value in hours after a restore test is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. If this value is included, this parameter has a maximum value of 168 hours (one week).
   *
   * @public
   */
  StartWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface UpdateRestoreTestingPlanInput {
  /**
   * Specifies the body of a restore testing plan.
   *
   * @public
   */
  RestoreTestingPlan: RestoreTestingPlanForUpdate | undefined;

  /**
   * The name of the restore testing plan name.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;
}

/**
 * @public
 */
export interface UpdateRestoreTestingPlanOutput {
  /**
   * The time the resource testing plan was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Unique ARN (Amazon Resource Name) of the restore testing plan.
   *
   * @public
   */
  RestoreTestingPlanArn: string | undefined;

  /**
   * The name cannot be changed after creation. The name consists of only alphanumeric characters and underscores. Maximum length is 50.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * The time the update completed for the restore testing plan.
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * This contains metadata about a restore testing selection.
 *
 * @public
 */
export interface RestoreTestingSelectionForUpdate {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that Backup uses to create the target resource; for example: `arn:aws:iam::123456789012:role/S3Access`.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * You can include a list of specific ARNs, such as `ProtectedResourceArns: ["arn:aws:...", "arn:aws:..."]` or you can include a wildcard: `ProtectedResourceArns: ["*"]`, but not both.
   *
   * @public
   */
  ProtectedResourceArns?: string[] | undefined;

  /**
   * The conditions that you define for resources in your restore testing plan using tags.
   *
   * @public
   */
  ProtectedResourceConditions?: ProtectedResourceConditions | undefined;

  /**
   * You can override certain restore metadata keys by including the parameter `RestoreMetadataOverrides` in the body of `RestoreTestingSelection`. Key values are not case sensitive.
   *
   * See the complete list of [restore testing inferred metadata](https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing-inferred-metadata.html).
   *
   * @public
   */
  RestoreMetadataOverrides?: Record<string, string> | undefined;

  /**
   * This value represents the time, in hours, data is retained after a restore test so that optional validation can be completed.
   *
   * Accepted value is an integer between 0 and 168 (the hourly equivalent of seven days).
   *
   * @public
   */
  ValidationWindowHours?: number | undefined;
}

/**
 * @public
 */
export interface UpdateRestoreTestingSelectionInput {
  /**
   * The restore testing plan name is required to update the indicated testing plan.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * To update your restore testing selection, you can use either protected resource ARNs or conditions, but not both. That is, if your selection has `ProtectedResourceArns`, requesting an update with the parameter `ProtectedResourceConditions` will be unsuccessful.
   *
   * @public
   */
  RestoreTestingSelection: RestoreTestingSelectionForUpdate | undefined;

  /**
   * The required restore testing selection name of the restore testing selection you wish to update.
   *
   * @public
   */
  RestoreTestingSelectionName: string | undefined;
}

/**
 * @public
 */
export interface UpdateRestoreTestingSelectionOutput {
  /**
   * The time the resource testing selection was updated successfully.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Unique string that is the name of the restore testing plan.
   *
   * @public
   */
  RestoreTestingPlanArn: string | undefined;

  /**
   * The restore testing plan with which the updated restore testing selection is associated.
   *
   * @public
   */
  RestoreTestingPlanName: string | undefined;

  /**
   * The returned restore testing selection name.
   *
   * @public
   */
  RestoreTestingSelectionName: string | undefined;

  /**
   * The time the update completed for the restore testing selection.
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * This contains metadata about a tiering configuration for update operations.
 *
 * @public
 */
export interface TieringConfigurationInputForUpdate {
  /**
   * An array of resource selection objects that specify which resources are included in the tiering configuration and their tiering settings.
   *
   * @public
   */
  ResourceSelection: ResourceSelection[] | undefined;

  /**
   * The name of the backup vault where the tiering configuration applies. Use `*` to apply to all backup vaults.
   *
   * @public
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface UpdateTieringConfigurationInput {
  /**
   * The name of a tiering configuration to update.
   *
   * @public
   */
  TieringConfigurationName: string | undefined;

  /**
   * Specifies the body of a tiering configuration.
   *
   * @public
   */
  TieringConfiguration: TieringConfigurationInputForUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateTieringConfigurationOutput {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies the updated tiering configuration.
   *
   * @public
   */
  TieringConfigurationArn?: string | undefined;

  /**
   * This unique string is the name of the tiering configuration.
   *
   * @public
   */
  TieringConfigurationName?: string | undefined;

  /**
   * The date and time a tiering configuration was created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087AM.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time a tiering configuration was updated, in Unix format and Coordinated Universal Time (UTC). The value of `LastUpdatedTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087AM.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}
