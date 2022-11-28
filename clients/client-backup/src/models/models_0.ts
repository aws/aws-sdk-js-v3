// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { BackupServiceException as __BaseException } from "./BackupServiceException";

/**
 * <p>A list of backup options for each resource type.</p>
 */
export interface AdvancedBackupSetting {
  /**
   * <p>Specifies an object containing resource type and backup options. The only supported
   *          resource type is Amazon EC2 instances with Windows Volume Shadow Copy Service
   *          (VSS). For a CloudFormation example, see the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/integrate-cloudformation-with-aws-backup.html">sample
   *             CloudFormation template to enable Windows VSS</a> in the <i>Backup User Guide</i>.</p>
   *          <p>Valid values: <code>EC2</code>.</p>
   */
  ResourceType?: string;

  /**
   * <p>Specifies the backup option for a selected resource. This option is only available for
   *          Windows VSS backup jobs.</p>
   *          <p>Valid values: </p>
   *          <p>Set to <code>"WindowsVSS":"enabled"</code> to enable the <code>WindowsVSS</code> backup
   *          option and create a Windows VSS backup. </p>
   *          <p>Set to <code>"WindowsVSS":"disabled"</code> to create a regular backup. The
   *             <code>WindowsVSS</code> option is not enabled by default.</p>
   *          <p>If you specify an invalid option, you get an <code>InvalidParameterValueException</code>
   *          exception.</p>
   *          <p>For more information about Windows VSS backups, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/windows-backups.html">Creating a VSS-Enabled Windows
   *             Backup</a>.</p>
   */
  BackupOptions?: Record<string, string>;
}

/**
 * <p>The required resource already exists.</p>
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p></p>
   */
  CreatorRequestId?: string;

  /**
   * <p></p>
   */
  Arn?: string;

  /**
   * <p></p>
   */
  Type?: string;

  /**
   * <p></p>
   */
  Context?: string;
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
 * <p>Contains information about the backup plan and rule that Backup used to
 *          initiate the recovery point backup.</p>
 */
export interface RecoveryPointCreator {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   */
  BackupPlanArn?: string;

  /**
   * <p>Version IDs are unique, randomly generated, Unicode, UTF-8 encoded strings that are at
   *          most 1,024 bytes long. They cannot be edited.</p>
   */
  BackupPlanVersion?: string;

  /**
   * <p>Uniquely identifies a rule used to schedule the backup of a selection of
   *          resources.</p>
   */
  BackupRuleId?: string;
}

export enum BackupJobState {
  ABORTED = "ABORTED",
  ABORTING = "ABORTING",
  COMPLETED = "COMPLETED",
  CREATED = "CREATED",
  EXPIRED = "EXPIRED",
  FAILED = "FAILED",
  PARTIAL = "PARTIAL",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
}

/**
 * <p>Contains detailed information about a backup job.</p>
 */
export interface BackupJob {
  /**
   * <p>The account ID that owns the backup job.</p>
   */
  AccountId?: string;

  /**
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   */
  BackupJobId?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The date and time a backup job is created, in Unix format and Coordinated Universal Time
   *          (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the
   *          value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time a job to create a backup job is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>The current state of a resource recovery point.</p>
   */
  State?: BackupJobState | string;

  /**
   * <p>A detailed message explaining the status of the job to back up a resource.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Contains an estimated percentage complete of a job at the time the job status was
   *          queried.</p>
   */
  PercentDone?: string;

  /**
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point. IAM roles other
   *          than the default role must include either <code>AWSBackup</code> or <code>AwsBackup</code>
   *          in the role name. For example,
   *             <code>arn:aws:iam::123456789012:role/AWSBackupRDSAccess</code>. Role names without those
   *          strings lack permissions to perform backup jobs.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>Contains identifying information about the creation of a backup job, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan used to create it.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * <p>The date and time a job to back up resources is expected to be completed, in Unix format
   *          and Coordinated Universal Time (UTC). The value of <code>ExpectedCompletionDate</code> is
   *          accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January
   *          26, 2018 12:11:30.087 AM.</p>
   */
  ExpectedCompletionDate?: Date;

  /**
   * <p>Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job
   *          must be started before it is canceled. The value is calculated by adding the start window
   *          to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2
   *          hours, the <code>StartBy</code> time would be 8:00 PM on the date specified. The value of
   *             <code>StartBy</code> is accurate to milliseconds. For example, the value 1516925490.087
   *          represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  StartBy?: Date;

  /**
   * <p>The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only
   *          supported resource type is Amazon EC2.</p>
   */
  ResourceType?: string;

  /**
   * <p>The size in bytes transferred to a backup vault at the time that the job status was
   *          queried.</p>
   */
  BytesTransferred?: number;

  /**
   * <p>Specifies the backup option for a selected resource. This option is only available for
   *          Windows Volume Shadow Copy Service (VSS) backup jobs.</p>
   *          <p>Valid values: Set to <code>"WindowsVSS":"enabled"</code> to enable the
   *             <code>WindowsVSS</code> backup option and create a Windows VSS backup. Set to
   *             <code>"WindowsVSS":"disabled"</code> to create a regular backup. If you specify an
   *          invalid option, you get an <code>InvalidParameterValueException</code> exception.</p>
   */
  BackupOptions?: Record<string, string>;

  /**
   * <p>Represents the type of backup for a backup job.</p>
   */
  BackupType?: string;

  /**
   * <p>This uniquely identifies a request to Backup
   *          to back up a resource. The return will be the
   *          parent (composite) job ID.</p>
   */
  ParentJobId?: string;

  /**
   * <p>This is a boolean value indicating this is
   *          a parent (composite) backup job.</p>
   */
  IsParent?: boolean;
}

/**
 * <p>Contains an array of <code>Transition</code> objects specifying how long in days before
 *          a recovery point transitions to cold storage or is deleted.</p>
 *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
 *          days. Therefore, on the console, the “retention” setting must be 90 days greater than the
 *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
 *          be changed after a backup has been transitioned to cold.</p>
 *          <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage"
 *          section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource">
 *             Feature availability by resource</a> table. Backup ignores this expression for
 *          other resource types.</p>
 */
export interface Lifecycle {
  /**
   * <p>Specifies the number of days after creation that a recovery point is moved to cold
   *          storage.</p>
   */
  MoveToColdStorageAfterDays?: number;

  /**
   * <p>Specifies the number of days after creation that a recovery point is deleted. Must be
   *          greater than 90 days plus <code>MoveToColdStorageAfterDays</code>.</p>
   */
  DeleteAfterDays?: number;
}

/**
 * <p>The details of the copy operation.</p>
 */
export interface CopyAction {
  /**
   * <p>Contains an array of <code>Transition</code> objects specifying how long in days before
   *          a recovery point transitions to cold storage or is deleted.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, on the console, the “retention” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold.</p>
   *          <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage"
   *          section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource">
   *             Feature availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for
   *          the copied backup. For example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  DestinationBackupVaultArn: string | undefined;
}

/**
 * <p>Specifies a scheduled task used to back up a selection of resources.</p>
 */
export interface BackupRule {
  /**
   * <p>A display name for a backup rule. Must contain 1 to 50 alphanumeric or '-_.'
   *          characters.</p>
   */
  RuleName: string | undefined;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  TargetBackupVaultName: string | undefined;

  /**
   * <p>A cron expression in UTC specifying when Backup initiates a backup job. For
   *          more information about Amazon Web Services cron expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a> in the <i>Amazon CloudWatch Events User
   *             Guide.</i>. Two examples of Amazon Web Services cron expressions are <code> 15 * ?
   *             * * *</code> (take a backup every hour at 15 minutes past the hour) and <code>0 12 * * ?
   *             *</code> (take a backup every day at 12 noon UTC). For a table of examples, click the
   *          preceding link and scroll down the page.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>A value in minutes after a backup is scheduled before a job will be canceled if it
   *          doesn't start successfully. This value is optional.
   *          If this value is included, it must be at least 60 minutes to avoid errors.</p>
   */
  StartWindowMinutes?: number;

  /**
   * <p>A value in minutes after a backup job is successfully started before it must be
   *          completed or it will be canceled by Backup. This value is optional.</p>
   */
  CompletionWindowMinutes?: number;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup transitions and expires backups automatically according to
   *          the lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
   *          cold after days” setting. The “transition to cold after days” setting cannot be changed
   *          after a backup has been transitioned to cold. </p>
   *          <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage"
   *          section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource">
   *             Feature availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>An array of key-value pair strings that are assigned to resources that are associated
   *          with this rule when restored from backup.</p>
   */
  RecoveryPointTags?: Record<string, string>;

  /**
   * <p>Uniquely identifies a rule that is used to schedule the backup of a selection of
   *          resources.</p>
   */
  RuleId?: string;

  /**
   * <p>An array of <code>CopyAction</code> objects, which contains the details of the copy
   *          operation.</p>
   */
  CopyActions?: CopyAction[];

  /**
   * <p>Specifies whether Backup creates continuous backups. True causes Backup to create continuous backups capable of point-in-time restore (PITR). False
   *          (or not specified) causes Backup to create snapshot backups.</p>
   */
  EnableContinuousBackup?: boolean;
}

/**
 * <p>Contains an optional backup plan display name and an array of <code>BackupRule</code>
 *          objects, each of which specifies a backup rule. Each rule in a backup plan is a separate
 *          scheduled task and can back up a different selection of Amazon Web Services
 *          resources.</p>
 */
export interface BackupPlan {
  /**
   * <p>The display name of a backup plan. Must contain 1 to 50 alphanumeric or '-_.'
   *          characters.</p>
   */
  BackupPlanName: string | undefined;

  /**
   * <p>An array of <code>BackupRule</code> objects, each of which specifies a scheduled task
   *          that is used to back up a selection of resources. </p>
   */
  Rules: BackupRule[] | undefined;

  /**
   * <p>Contains a list of <code>BackupOptions</code> for each resource type.</p>
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[];
}

/**
 * <p>Specifies a scheduled task used to back up a selection of resources.</p>
 */
export interface BackupRuleInput {
  /**
   * <p>A display name for a backup rule. Must contain 1 to 50 alphanumeric or '-_.'
   *          characters.</p>
   */
  RuleName: string | undefined;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  TargetBackupVaultName: string | undefined;

  /**
   * <p>A CRON expression in UTC specifying when Backup initiates a backup
   *          job.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>A value in minutes after a backup is scheduled before a job will be canceled if it
   *          doesn't start successfully. This value is optional.
   *          If this value is included, it must be at least 60 minutes to avoid errors.</p>
   */
  StartWindowMinutes?: number;

  /**
   * <p>A value in minutes after a backup job is successfully started before it must be
   *          completed or it will be canceled by Backup. This value is optional.</p>
   */
  CompletionWindowMinutes?: number;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup will transition and expire backups automatically according
   *          to the lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
   *          cold after days” setting. The “transition to cold after days” setting cannot be changed
   *          after a backup has been transitioned to cold.</p>
   *          <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage"
   *          section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource">
   *             Feature availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>To help organize your resources, you can assign your own metadata to the resources that
   *          you create. Each tag is a key-value pair.</p>
   */
  RecoveryPointTags?: Record<string, string>;

  /**
   * <p>An array of <code>CopyAction</code> objects, which contains the details of the copy
   *          operation.</p>
   */
  CopyActions?: CopyAction[];

  /**
   * <p>Specifies whether Backup creates continuous backups. True causes Backup to create continuous backups capable of point-in-time restore (PITR). False
   *          (or not specified) causes Backup to create snapshot backups.</p>
   */
  EnableContinuousBackup?: boolean;
}

/**
 * <p>Contains an optional backup plan display name and an array of <code>BackupRule</code>
 *          objects, each of which specifies a backup rule. Each rule in a backup plan is a separate
 *          scheduled task. </p>
 */
export interface BackupPlanInput {
  /**
   * <p>The display name of a backup plan. Must contain 1 to 50 alphanumeric or '-_.'
   *          characters.</p>
   */
  BackupPlanName: string | undefined;

  /**
   * <p>An array of <code>BackupRule</code> objects, each of which specifies a scheduled task
   *          that is used to back up a selection of resources.</p>
   */
  Rules: BackupRuleInput[] | undefined;

  /**
   * <p>Specifies a list of <code>BackupOptions</code> for each resource type. These settings
   *          are only available for Windows Volume Shadow Copy Service (VSS) backup jobs.</p>
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[];
}

/**
 * <p>Contains metadata about a backup plan.</p>
 */
export interface BackupPlansListMember {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   */
  BackupPlanArn?: string;

  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * <p>The date and time a resource backup plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time a backup plan is deleted, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  DeletionDate?: Date;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version IDs cannot be edited.</p>
   */
  VersionId?: string;

  /**
   * <p>The display name of a saved backup plan.</p>
   */
  BackupPlanName?: string;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The last time a job to back up resources was run with this rule. A date and time, in
   *          Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastExecutionDate</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastExecutionDate?: Date;

  /**
   * <p>Contains a list of <code>BackupOptions</code> for a resource type.</p>
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[];
}

/**
 * <p>An object specifying metadata associated with a backup plan template.</p>
 */
export interface BackupPlanTemplatesListMember {
  /**
   * <p>Uniquely identifies a stored backup plan template.</p>
   */
  BackupPlanTemplateId?: string;

  /**
   * <p>The optional display name of a backup plan template.</p>
   */
  BackupPlanTemplateName?: string;
}

/**
 * <p>Includes information about tags you define to assign tagged resources to a backup
 *          plan.</p>
 */
export interface ConditionParameter {
  /**
   * <p>The key in a key-value pair. For example, in the tag <code>Department:
   *          Accounting</code>, <code>Department</code> is the key.</p>
   */
  ConditionKey?: string;

  /**
   * <p>The value in a key-value pair. For example, in the tag <code>Department:
   *             Accounting</code>, <code>Accounting</code> is the value.</p>
   */
  ConditionValue?: string;
}

/**
 * <p>Contains information about which resources to include or exclude from a backup plan
 *          using their tags. Conditions are case sensitive.</p>
 */
export interface Conditions {
  /**
   * <p>Filters the values of your tagged resources for only those resources that you tagged
   *          with the same value. Also called "exact matching."</p>
   */
  StringEquals?: ConditionParameter[];

  /**
   * <p>Filters the values of your tagged resources for only those resources that you tagged
   *          that do not have the same value. Also called "negated matching."</p>
   */
  StringNotEquals?: ConditionParameter[];

  /**
   * <p>Filters the values of your tagged resources for matching tag values with the use of a
   *          wildcard character (*) anywhere in the string. For example, "prod*" or "*rod*" matches the
   *          tag value "production".</p>
   */
  StringLike?: ConditionParameter[];

  /**
   * <p>Filters the values of your tagged resources for non-matching tag values with the use of
   *          a wildcard character (*) anywhere in the string.</p>
   */
  StringNotLike?: ConditionParameter[];
}

export enum ConditionType {
  STRINGEQUALS = "STRINGEQUALS",
}

/**
 * <p>Contains an array of triplets made up of a condition type (such as
 *             <code>StringEquals</code>), a key, and a value. Used to filter resources using their
 *          tags and assign them to a backup plan. Case sensitive.</p>
 */
export interface Condition {
  /**
   * <p>An operation applied to a key-value pair used to assign resources to your backup plan.
   *          Condition only supports <code>StringEquals</code>. For more flexible assignment options,
   *          including <code>StringLike</code> and the ability to exclude resources from your backup
   *          plan, use <code>Conditions</code> (with an "s" on the end) for your <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BackupSelection.html">
   *                <code>BackupSelection</code>
   *             </a>.</p>
   */
  ConditionType: ConditionType | string | undefined;

  /**
   * <p>The key in a key-value pair. For example, in the tag <code>Department:
   *          Accounting</code>, <code>Department</code> is the key.</p>
   */
  ConditionKey: string | undefined;

  /**
   * <p>The value in a key-value pair. For example, in the tag <code>Department:
   *             Accounting</code>, <code>Accounting</code> is the value.</p>
   */
  ConditionValue: string | undefined;
}

/**
 * <p>Used to specify a set of resources to a backup plan.</p>
 *          <p>Specifying your desired <code>Conditions</code>, <code>ListOfTags</code>, <code>NotResources</code>,
 *          and/or <code>Resources</code> is recommended. If none of these are specified, Backup will attempt to
 *        select all supported and opted-in storage resources, which could have unintended cost implications.</p>
 */
export interface BackupSelection {
  /**
   * <p>The display name of a resource selection document. Must contain 1 to 50 alphanumeric or
   *          '-_.' characters.</p>
   */
  SelectionName: string | undefined;

  /**
   * <p>The ARN of the IAM role that Backup uses to authenticate when backing up the
   *          target resource; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>A list of Amazon Resource Names (ARNs) to assign to a backup plan. The maximum number of
   *          ARNs is 500 without wildcards, or 30 ARNs with wildcards.</p>
   *          <p>If you need to assign many resources to a backup plan, consider a different resource
   *          selection strategy, such as assigning all resources of a resource type or refining your
   *          resource selection using tags.</p>
   */
  Resources?: string[];

  /**
   * <p>A list of conditions that you define to assign resources to your backup plans using
   *          tags. For example, <code>"StringEquals":  {
   *             "ConditionKey": "aws:ResourceTag/CreatedByCryo",
   *             "ConditionValue": "true"
   *             },</code>. Condition
   *          operators are case sensitive.</p>
   *          <p>
   *             <code>ListOfTags</code> differs from <code>Conditions</code> as follows:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify more than one condition, you assign all resources that match AT
   *                LEAST ONE condition (using OR logic).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ListOfTags</code> only supports <code>StringEquals</code>.
   *                   <code>Conditions</code> supports <code>StringEquals</code>,
   *                   <code>StringLike</code>, <code>StringNotEquals</code>, and
   *                   <code>StringNotLike</code>. </p>
   *             </li>
   *          </ul>
   */
  ListOfTags?: Condition[];

  /**
   * <p>A list of Amazon Resource Names (ARNs) to exclude from a backup plan. The maximum number
   *          of ARNs is 500 without wildcards, or 30 ARNs with wildcards.</p>
   *          <p>If you need to exclude many resources from a backup plan, consider a different resource
   *          selection strategy, such as assigning only one or a few resource types or refining your
   *          resource selection using tags.</p>
   */
  NotResources?: string[];

  /**
   * <p>A list of conditions that you define to assign resources to your backup plans using
   *          tags. For example, <code>"StringEquals":  {
   *             "ConditionKey": "aws:ResourceTag/CreatedByCryo",
   *             "ConditionValue": "true"
   *             },</code>. Condition
   *          operators are case sensitive.</p>
   *          <p>
   *             <code>Conditions</code> differs from <code>ListOfTags</code> as follows:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify more than one condition, you only assign the resources that match
   *                ALL conditions (using AND logic).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Conditions</code> supports <code>StringEquals</code>,
   *                   <code>StringLike</code>, <code>StringNotEquals</code>, and
   *                   <code>StringNotLike</code>. <code>ListOfTags</code> only supports
   *                   <code>StringEquals</code>.</p>
   *             </li>
   *          </ul>
   */
  Conditions?: Conditions;
}

/**
 * <p>Contains metadata about a <code>BackupSelection</code> object.</p>
 */
export interface BackupSelectionsListMember {
  /**
   * <p>Uniquely identifies a request to assign a set of resources to a backup plan.</p>
   */
  SelectionId?: string;

  /**
   * <p>The display name of a resource selection document.</p>
   */
  SelectionName?: string;

  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * <p>The date and time a backup plan is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>Specifies the IAM role Amazon Resource Name (ARN) to create the target recovery point;
   *          for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;
}

export enum BackupVaultEvent {
  BACKUP_JOB_COMPLETED = "BACKUP_JOB_COMPLETED",
  BACKUP_JOB_EXPIRED = "BACKUP_JOB_EXPIRED",
  BACKUP_JOB_FAILED = "BACKUP_JOB_FAILED",
  BACKUP_JOB_STARTED = "BACKUP_JOB_STARTED",
  BACKUP_JOB_SUCCESSFUL = "BACKUP_JOB_SUCCESSFUL",
  BACKUP_PLAN_CREATED = "BACKUP_PLAN_CREATED",
  BACKUP_PLAN_MODIFIED = "BACKUP_PLAN_MODIFIED",
  COPY_JOB_FAILED = "COPY_JOB_FAILED",
  COPY_JOB_STARTED = "COPY_JOB_STARTED",
  COPY_JOB_SUCCESSFUL = "COPY_JOB_SUCCESSFUL",
  RECOVERY_POINT_MODIFIED = "RECOVERY_POINT_MODIFIED",
  RESTORE_JOB_COMPLETED = "RESTORE_JOB_COMPLETED",
  RESTORE_JOB_FAILED = "RESTORE_JOB_FAILED",
  RESTORE_JOB_STARTED = "RESTORE_JOB_STARTED",
  RESTORE_JOB_SUCCESSFUL = "RESTORE_JOB_SUCCESSFUL",
  S3_BACKUP_OBJECT_FAILED = "S3_BACKUP_OBJECT_FAILED",
  S3_RESTORE_OBJECT_FAILED = "S3_RESTORE_OBJECT_FAILED",
}

/**
 * <p>Contains metadata about a backup vault.</p>
 */
export interface BackupVaultListMember {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The date and time a resource backup is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

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
   */
  EncryptionKeyArn?: string;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The number of recovery points that are stored in a backup vault.</p>
   */
  NumberOfRecoveryPoints?: number;

  /**
   * <p>A Boolean value that indicates whether Backup Vault Lock applies to the
   *          selected backup vault. If <code>true</code>, Vault Lock prevents delete and update
   *          operations on the recovery points in the selected vault.</p>
   */
  Locked?: boolean;

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
   */
  MinRetentionDays?: number;

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
   */
  MaxRetentionDays?: number;

  /**
   * <p>The date and time when Backup Vault Lock configuration becomes immutable,
   *          meaning it cannot be changed or deleted.</p>
   *          <p>If you applied Vault Lock to your vault without specifying a lock date, you can change
   *          your Vault Lock settings, or delete Vault Lock from the vault entirely, at any time.</p>
   *          <p>This value is in Unix format, Coordinated Universal Time (UTC), and accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  LockDate?: Date;
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
 *          <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage"
 *          section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource">
 *             Feature availability by resource</a> table. Backup ignores this expression for
 *          other resource types.</p>
 */
export interface CalculatedLifecycle {
  /**
   * <p>A timestamp that specifies when to transition a recovery point to cold storage.</p>
   */
  MoveToColdStorageAt?: Date;

  /**
   * <p>A timestamp that specifies when to delete a recovery point.</p>
   */
  DeleteAt?: Date;
}

export interface CancelLegalHoldInput {
  /**
   * <p>Legal hold ID required to remove the specified legal hold on a recovery point.</p>
   */
  LegalHoldId: string | undefined;

  /**
   * <p>String describing the reason for removing the legal hold.</p>
   */
  CancelDescription: string | undefined;

  /**
   * <p>The integer amount in days specifying amount of days after this
   *          API operation to remove legal hold.</p>
   */
  RetainRecordInDays?: number;
}

export interface CancelLegalHoldOutput {}

/**
 * <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;

  /**
   * <p></p>
   */
  Context?: string;
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
 * <p>Backup is already performing an action on this recovery point. It can't
 *          perform the action you requested until the first action finishes. Try again later.</p>
 */
export class InvalidResourceStateException extends __BaseException {
  readonly name: "InvalidResourceStateException" = "InvalidResourceStateException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;

  /**
   * <p></p>
   */
  Context?: string;
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
 * <p>Indicates that a required parameter is missing.</p>
 */
export class MissingParameterValueException extends __BaseException {
  readonly name: "MissingParameterValueException" = "MissingParameterValueException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;

  /**
   * <p></p>
   */
  Context?: string;
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
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;

  /**
   * <p></p>
   */
  Context?: string;
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
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: string;
  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;

  /**
   * <p></p>
   */
  Context?: string;
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
 * <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;

  /**
   * <p></p>
   */
  Context?: string;
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
 * <p>A list of parameters for a control. A control can have zero, one, or more than one
 *          parameter. An example of a control with two parameters is: "backup plan frequency is at
 *          least <code>daily</code> and the retention period is at least <code>1 year</code>". The
 *          first parameter is <code>daily</code>. The second parameter is <code>1 year</code>.</p>
 */
export interface ControlInputParameter {
  /**
   * <p>The name of a parameter, for example, <code>BackupPlanFrequency</code>.</p>
   */
  ParameterName?: string;

  /**
   * <p>The value of parameter, for example, <code>hourly</code>.</p>
   */
  ParameterValue?: string;
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
 */
export interface ControlScope {
  /**
   * <p>The ID of the only Amazon Web Services resource that you want your control scope to
   *          contain.</p>
   */
  ComplianceResourceIds?: string[];

  /**
   * <p>Describes whether the control scope includes one or more types of resources, such as
   *             <code>EFS</code> or <code>RDS</code>.</p>
   */
  ComplianceResourceTypes?: string[];

  /**
   * <p>The tag key-value pair applied to those Amazon Web Services resources that you want to
   *          trigger an evaluation for a rule. A maximum of one key-value pair can be provided. The tag
   *          value is optional, but it cannot be an empty string. The structure to assign a tag is:
   *             <code>[{"Key":"string","Value":"string"}]</code>.</p>
   */
  Tags?: Record<string, string>;
}

export enum CopyJobState {
  COMPLETED = "COMPLETED",
  CREATED = "CREATED",
  FAILED = "FAILED",
  PARTIAL = "PARTIAL",
  RUNNING = "RUNNING",
}

/**
 * <p>Contains detailed information about a copy job.</p>
 */
export interface CopyJob {
  /**
   * <p>The account ID that owns the copy job.</p>
   */
  AccountId?: string;

  /**
   * <p>Uniquely identifies a copy job.</p>
   */
  CopyJobId?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a source copy vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>. </p>
   */
  SourceBackupVaultArn?: string;

  /**
   * <p>An ARN that uniquely identifies a source recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  SourceRecoveryPointArn?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a destination copy vault; for
   *          example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  DestinationBackupVaultArn?: string;

  /**
   * <p>An ARN that uniquely identifies a destination recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  DestinationRecoveryPointArn?: string;

  /**
   * <p>The Amazon Web Services resource to be copied; for example, an Amazon Elastic Block Store
   *             (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS)
   *          database.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The date and time a copy job is created, in Unix format and Coordinated Universal Time
   *          (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the
   *          value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time a copy job is completed, in Unix format and Coordinated Universal Time
   *          (UTC). The value of <code>CompletionDate</code> is accurate to milliseconds. For example,
   *          the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>The current state of a copy job.</p>
   */
  State?: CopyJobState | string;

  /**
   * <p>A detailed message explaining the status of the job to copy a resource.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The size, in bytes, of a copy job.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>Specifies the IAM role ARN used to copy the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>Contains information about the backup plan and rule that Backup used to
   *          initiate the recovery point backup.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * <p>The type of Amazon Web Services resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   */
  ResourceType?: string;

  /**
   * <p>This uniquely identifies a request to Backup
   *          to copy a resource. The return will be the
   *          parent (composite) job ID.</p>
   */
  ParentJobId?: string;

  /**
   * <p>This is a boolean value indicating this is
   *          a parent (composite) copy job.</p>
   */
  IsParent?: boolean;

  /**
   * <p>This is the identifier of a resource within a composite group, such as
   *          nested (child) recovery point belonging to a composite (parent) stack. The
   *          ID is transferred from
   *          the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax">
   *             logical ID</a> within a stack.</p>
   */
  CompositeMemberIdentifier?: string;

  /**
   * <p>This is the number of child (nested) copy jobs.</p>
   */
  NumberOfChildJobs?: number;

  /**
   * <p>This returns the statistics of the included
   *          child (nested) copy jobs.</p>
   */
  ChildJobsInState?: Record<string, number>;
}

export interface CreateBackupPlanInput {
  /**
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   */
  BackupPlan: BackupPlanInput | undefined;

  /**
   * <p>To help organize your resources, you can assign your own metadata to the resources that
   *          you create. Each tag is a key-value pair. The specified tags are assigned to all backups
   *          created with this plan.</p>
   */
  BackupPlanTags?: Record<string, string>;

  /**
   * <p>Identifies the request and allows failed requests to be retried without the risk of
   *          running the operation twice. If the request includes a <code>CreatorRequestId</code> that
   *          matches an existing backup plan, that plan is returned. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   */
  CreatorRequestId?: string;
}

export interface CreateBackupPlanOutput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   */
  BackupPlanArn?: string;

  /**
   * <p>The date and time that a backup plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. They cannot be edited.</p>
   */
  VersionId?: string;

  /**
   * <p>A list of <code>BackupOptions</code> settings for a resource type. This option is only
   *          available for Windows Volume Shadow Copy Service (VSS) backup jobs.</p>
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[];
}

/**
 * <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;

  /**
   * <p></p>
   */
  Context?: string;
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

export interface CreateBackupSelectionInput {
  /**
   * <p>Uniquely identifies the backup plan to be associated with the selection of
   *          resources.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * <p>Specifies the body of a request to assign a set of resources to a backup plan.</p>
   */
  BackupSelection: BackupSelection | undefined;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   */
  CreatorRequestId?: string;
}

export interface CreateBackupSelectionOutput {
  /**
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup
   *          plan.</p>
   */
  SelectionId?: string;

  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * <p>The date and time a backup selection is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;
}

export interface CreateBackupVaultInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>Metadata that you can assign to help organize the resources that you create. Each tag is
   *          a key-value pair.</p>
   */
  BackupVaultTags?: Record<string, string>;

  /**
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   */
  CreatorRequestId?: string;
}

export interface CreateBackupVaultOutput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The date and time a backup vault is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;
}

/**
 * <p>Contains detailed information about all of the controls of a framework. Each framework
 *          must contain at least one control.</p>
 */
export interface FrameworkControl {
  /**
   * <p>The name of a control. This name is between 1 and 256 characters.</p>
   */
  ControlName: string | undefined;

  /**
   * <p>A list of <code>ParameterName</code> and <code>ParameterValue</code> pairs.</p>
   */
  ControlInputParameters?: ControlInputParameter[];

  /**
   * <p>The scope of a control. The control scope defines what the control will evaluate. Three
   *          examples of control scopes are: a specific backup plan, all backup plans with a specific
   *          tag, or all backup plans. For more information, see <a href="aws-backup/latest/devguide/API_ControlScope.html">
   *                <code>ControlScope</code>.</a>
   *          </p>
   */
  ControlScope?: ControlScope;
}

export interface CreateFrameworkInput {
  /**
   * <p>The unique name of the framework. The name must be between 1 and 256 characters,
   *          starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and
   *          underscores (_).</p>
   */
  FrameworkName: string | undefined;

  /**
   * <p>An optional description of the framework with a maximum of 1,024 characters.</p>
   */
  FrameworkDescription?: string;

  /**
   * <p>A list of the controls that make up the framework. Each control in the list has a name,
   *          input parameters, and scope.</p>
   */
  FrameworkControls: FrameworkControl[] | undefined;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>CreateFrameworkInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>Metadata that you can assign to help organize the frameworks that you create. Each tag
   *          is a key-value pair.</p>
   */
  FrameworkTags?: Record<string, string>;
}

export interface CreateFrameworkOutput {
  /**
   * <p>The unique name of the framework. The name must be between 1 and 256 characters,
   *          starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and
   *          underscores (_).</p>
   */
  FrameworkName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  FrameworkArn?: string;
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
 */
export interface DateRange {
  /**
   * <p>This value is the beginning date, inclusive.</p>
   *          <p>The date and time are in Unix format and Coordinated
   *          Universal Time (UTC), and it is accurate to milliseconds
   *          (milliseconds are optional).</p>
   */
  FromDate: Date | undefined;

  /**
   * <p>This value is the end date, inclusive.</p>
   *          <p>The date and time are in Unix format and Coordinated
   *          Universal Time (UTC), and it is accurate to milliseconds
   *          (milliseconds are optional).</p>
   */
  ToDate: Date | undefined;
}

/**
 * <p>This specifies criteria to assign
 *          a set of resources, such as resource types or backup vaults.</p>
 */
export interface RecoveryPointSelection {
  /**
   * <p>These are the names of the vaults in which the selected
   *          recovery points are contained.</p>
   */
  VaultNames?: string[];

  /**
   * <p>These are the resources included in the resource selection
   *          (including type of resources and vaults).</p>
   */
  ResourceIdentifiers?: string[];

  /**
   * <p>This is a resource filter containing FromDate: DateTime
   *          and ToDate: DateTime. Both values are required. Future DateTime
   *          values are not permitted.</p>
   *          <p>The date and time are in Unix format and Coordinated
   *          Universal Time (UTC), and it is accurate to milliseconds
   *          ((milliseconds are optional).
   *          For example, the value 1516925490.087 represents Friday, January
   *          26, 2018 12:11:30.087 AM.</p>
   */
  DateRange?: DateRange;
}

export interface CreateLegalHoldInput {
  /**
   * <p>This is the string title of the legal hold.</p>
   */
  Title: string | undefined;

  /**
   * <p>This is the string description of the legal hold.</p>
   */
  Description: string | undefined;

  /**
   * <p>This is a user-chosen string used to distinguish between otherwise identical
   *          calls. Retrying a successful request with the
   *          same idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>This specifies criteria to assign
   *          a set of resources, such as resource types or backup vaults.</p>
   */
  RecoveryPointSelection?: RecoveryPointSelection;

  /**
   * <p>Optional tags to include. A tag is a key-value pair you can use to manage,
   *          filter, and search for your resources. Allowed characters include UTF-8 letters,
   *          numbers, spaces, and the following characters: + - = . _ : /. </p>
   */
  Tags?: Record<string, string>;
}

export enum LegalHoldStatus {
  ACTIVE = "ACTIVE",
  CANCELED = "CANCELED",
  CANCELING = "CANCELING",
  CREATING = "CREATING",
}

export interface CreateLegalHoldOutput {
  /**
   * <p>This is the string title of the legal hold returned after creating the legal hold.</p>
   */
  Title?: string;

  /**
   * <p>This displays the status of the legal hold returned after creating the legal hold.
   *          Statuses can be <code>ACTIVE</code>, <code>PENDING</code>, <code>CANCELED</code>,
   *          <code>CANCELING</code>, or <code>FAILED</code>.</p>
   */
  Status?: LegalHoldStatus | string;

  /**
   * <p>This is the returned string description of the legal hold.</p>
   */
  Description?: string;

  /**
   * <p>Legal hold ID returned for the specified legal hold on a recovery point.</p>
   */
  LegalHoldId?: string;

  /**
   * <p>This is the ARN (Amazon Resource Number) of the created legal hold.</p>
   */
  LegalHoldArn?: string;

  /**
   * <p>Time in number format when legal hold was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>This specifies criteria to assign
   *          a set of resources, such as resource types or backup vaults.</p>
   */
  RecoveryPointSelection?: RecoveryPointSelection;
}

/**
 * <p>Contains information from your report plan about where to deliver your reports,
 *          specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your
 *          reports.</p>
 */
export interface ReportDeliveryChannel {
  /**
   * <p>The unique name of the S3 bucket that receives your reports.</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>The prefix for where Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path:
   *             s3://your-bucket-name/<code>prefix</code>/Backup/us-west-2/year/month/day/report-name.
   *          If not specified, there is no prefix.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>A list of the format of your reports: <code>CSV</code>, <code>JSON</code>, or both. If
   *          not specified, the default format is <code>CSV</code>.</p>
   */
  Formats?: string[];
}

/**
 * <p>Contains detailed information about a report setting.</p>
 */
export interface ReportSetting {
  /**
   * <p>Identifies the report template for the report. Reports are built using a report
   *          template. The report templates are:</p>
   *          <p>
   *             <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT |
   *             COPY_JOB_REPORT | RESTORE_JOB_REPORT</code>
   *          </p>
   */
  ReportTemplate: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the frameworks a report covers.</p>
   */
  FrameworkArns?: string[];

  /**
   * <p>The number of frameworks a report covers.</p>
   */
  NumberOfFrameworks?: number;

  /**
   * <p>These are the accounts to be included in the report.</p>
   */
  Accounts?: string[];

  /**
   * <p>These are the Organizational Units to be included in the report.</p>
   */
  OrganizationUnits?: string[];

  /**
   * <p>These are the Regions to be included in the report.</p>
   */
  Regions?: string[];
}

export interface CreateReportPlanInput {
  /**
   * <p>The unique name of the report plan. The name must be between 1 and 256 characters,
   *          starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and
   *          underscores (_).</p>
   */
  ReportPlanName: string | undefined;

  /**
   * <p>An optional description of the report plan with a maximum of 1,024 characters.</p>
   */
  ReportPlanDescription?: string;

  /**
   * <p>A structure that contains information about where and how to deliver your reports,
   *          specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your
   *          reports.</p>
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
   */
  ReportSetting: ReportSetting | undefined;

  /**
   * <p>Metadata that you can assign to help organize the report plans that you create. Each tag
   *          is a key-value pair.</p>
   */
  ReportPlanTags?: Record<string, string>;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>CreateReportPlanInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;
}

export interface CreateReportPlanOutput {
  /**
   * <p>The unique name of the report plan.</p>
   */
  ReportPlanName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ReportPlanArn?: string;

  /**
   * <p>The date and time a backup vault is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationTime?: Date;
}

export interface DeleteBackupPlanInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;
}

export interface DeleteBackupPlanOutput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   */
  BackupPlanArn?: string;

  /**
   * <p>The date and time a backup plan is deleted, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  DeletionDate?: Date;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version IDs cannot be edited.</p>
   */
  VersionId?: string;
}

/**
 * <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;

  /**
   * <p></p>
   */
  Context?: string;
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

export interface DeleteBackupSelectionInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup
   *          plan.</p>
   */
  SelectionId: string | undefined;
}

export interface DeleteBackupVaultInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

export interface DeleteBackupVaultAccessPolicyInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

export interface DeleteBackupVaultLockConfigurationInput {
  /**
   * <p>The name of the backup vault from which to delete Backup Vault Lock.</p>
   */
  BackupVaultName: string | undefined;
}

export interface DeleteBackupVaultNotificationsInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

export interface DeleteFrameworkInput {
  /**
   * <p>The unique name of a framework.</p>
   */
  FrameworkName: string | undefined;
}

export interface DeleteRecoveryPointInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string | undefined;
}

export interface DeleteReportPlanInput {
  /**
   * <p>The unique name of a report plan.</p>
   */
  ReportPlanName: string | undefined;
}

/**
 * <p>A dependent Amazon Web Services service or resource returned an error to the Backup service, and the action cannot be completed.</p>
 */
export class DependencyFailureException extends __BaseException {
  readonly name: "DependencyFailureException" = "DependencyFailureException";
  readonly $fault: "server" = "server";
  Code?: string;
  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;

  /**
   * <p></p>
   */
  Context?: string;
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

export interface DescribeBackupJobInput {
  /**
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   */
  BackupJobId: string | undefined;
}

export interface DescribeBackupJobOutput {
  /**
   * <p>Returns the account ID that owns the backup job.</p>
   */
  AccountId?: string;

  /**
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   */
  BackupJobId?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>An ARN that uniquely identifies a saved resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The date and time that a backup job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time that a job to create a backup job is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>The current state of a resource recovery point.</p>
   */
  State?: BackupJobState | string;

  /**
   * <p>A detailed message explaining the status of the job to back up a resource.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Contains an estimated percentage that is complete of a job at the time the job status
   *          was queried.</p>
   */
  PercentDone?: string;

  /**
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>Contains identifying information about the creation of a backup job, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan that is used to create it.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * <p>The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   */
  ResourceType?: string;

  /**
   * <p>The size in bytes transferred to a backup vault at the time that the job status was
   *          queried.</p>
   */
  BytesTransferred?: number;

  /**
   * <p>The date and time that a job to back up resources is expected to be completed, in Unix
   *          format and Coordinated Universal Time (UTC). The value of
   *             <code>ExpectedCompletionDate</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  ExpectedCompletionDate?: Date;

  /**
   * <p>Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job
   *          must be started before it is canceled. The value is calculated by adding the start window
   *          to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2
   *          hours, the <code>StartBy</code> time would be 8:00 PM on the date specified. The value of
   *             <code>StartBy</code> is accurate to milliseconds. For example, the value 1516925490.087
   *          represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  StartBy?: Date;

  /**
   * <p>Represents the options specified as part of backup plan or on-demand backup job.</p>
   */
  BackupOptions?: Record<string, string>;

  /**
   * <p>Represents the actual backup type selected for a backup job. For example, if a
   *          successful Windows Volume Shadow Copy Service (VSS) backup was taken,
   *             <code>BackupType</code> returns <code>"WindowsVSS"</code>. If <code>BackupType</code> is
   *          empty, then the backup type was a regular backup.</p>
   */
  BackupType?: string;

  /**
   * <p>This returns the parent (composite) resource backup job ID.</p>
   */
  ParentJobId?: string;

  /**
   * <p>This returns the boolean value that a backup job is a parent (composite) job.</p>
   */
  IsParent?: boolean;

  /**
   * <p>This returns the number of child (nested) backup jobs.</p>
   */
  NumberOfChildJobs?: number;

  /**
   * <p>This returns the statistics of the included child (nested) backup jobs.</p>
   */
  ChildJobsInState?: Record<string, number>;
}

export interface DescribeBackupVaultInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

export interface DescribeBackupVaultOutput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>The date and time that a backup vault is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The number of recovery points that are stored in a backup vault.</p>
   */
  NumberOfRecoveryPoints?: number;

  /**
   * <p>A Boolean that indicates whether Backup Vault Lock is currently protecting
   *          the backup vault. <code>True</code> means that Vault Lock causes delete or update
   *          operations on the recovery points stored in the vault to fail.</p>
   */
  Locked?: boolean;

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
   */
  MinRetentionDays?: number;

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
   */
  MaxRetentionDays?: number;

  /**
   * <p>The date and time when Backup Vault Lock configuration cannot be changed or
   *          deleted.</p>
   *          <p>If you applied Vault Lock to your vault without specifying a lock date, you can change
   *          any of your Vault Lock settings, or delete Vault Lock from the vault entirely, at any
   *          time.</p>
   *          <p>This value is in Unix format, Coordinated Universal Time (UTC), and accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  LockDate?: Date;
}

export interface DescribeCopyJobInput {
  /**
   * <p>Uniquely identifies a copy job.</p>
   */
  CopyJobId: string | undefined;
}

export interface DescribeCopyJobOutput {
  /**
   * <p>Contains detailed information about a copy job.</p>
   */
  CopyJob?: CopyJob;
}

export interface DescribeFrameworkInput {
  /**
   * <p>The unique name of a framework.</p>
   */
  FrameworkName: string | undefined;
}

export interface DescribeFrameworkOutput {
  /**
   * <p>The unique name of a framework.</p>
   */
  FrameworkName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  FrameworkArn?: string;

  /**
   * <p>An optional description of the framework.</p>
   */
  FrameworkDescription?: string;

  /**
   * <p>A list of the controls that make up the framework. Each control in the list has a name,
   *          input parameters, and scope.</p>
   */
  FrameworkControls?: FrameworkControl[];

  /**
   * <p>The date and time that a framework is created, in ISO 8601 representation. The value of <code>CreationTime</code> is accurate to milliseconds. For example,
   *          2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind
   *          UTC.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The deployment status of a framework. The statuses are:</p>
   *          <p>
   *             <code>CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED |
   *             FAILED</code>
   *          </p>
   */
  DeploymentStatus?: string;

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
   */
  FrameworkStatus?: string;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>DescribeFrameworkOutput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;
}

export interface DescribeGlobalSettingsInput {}

export interface DescribeGlobalSettingsOutput {
  /**
   * <p>The status of the flag <code>isCrossAccountBackupEnabled</code>.</p>
   */
  GlobalSettings?: Record<string, string>;

  /**
   * <p>The date and time that the flag <code>isCrossAccountBackupEnabled</code> was last
   *          updated. This update is in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastUpdateTime</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastUpdateTime?: Date;
}

export interface DescribeProtectedResourceInput {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ResourceArn: string | undefined;
}

export interface DescribeProtectedResourceOutput {
  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The type of Amazon Web Services resource saved as a recovery point; for example, an
   *             Amazon EBS volume or an Amazon RDS database.</p>
   */
  ResourceType?: string;

  /**
   * <p>The date and time that a resource was last backed up, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>LastBackupTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  LastBackupTime?: Date;
}

export interface DescribeRecoveryPointInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string | undefined;
}

export enum RecoveryPointStatus {
  COMPLETED = "COMPLETED",
  DELETING = "DELETING",
  EXPIRED = "EXPIRED",
  PARTIAL = "PARTIAL",
}

export enum StorageClass {
  COLD = "COLD",
  DELETED = "DELETED",
  WARM = "WARM",
}

export interface DescribeRecoveryPointOutput {
  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the source vault where the
   *          resource was originally backed up in; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:BackupVault</code>. If the recovery is
   *          restored to the same Amazon Web Services account or Region, this value will be
   *             <code>null</code>.</p>
   */
  SourceBackupVaultArn?: string;

  /**
   * <p>An ARN that uniquely identifies a saved resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The type of Amazon Web Services resource to save as a recovery point; for example, an
   *             Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   */
  ResourceType?: string;

  /**
   * <p>Contains identifying information about the creation of a recovery point, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan used to create it.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>A status code specifying the state of the recovery point.</p>
   *          <p>
   *             <code>PARTIAL</code> status indicates Backup could not create the recovery
   *          point before the backup window closed. To increase your backup plan window using the API,
   *          see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateBackupPlan.html">UpdateBackupPlan</a>. You can also increase your backup plan window using the
   *          Console by choosing and editing your backup plan.</p>
   *          <p>
   *             <code>EXPIRED</code> status indicates that the recovery point has exceeded its retention
   *          period, but Backup lacks permission or is otherwise unable to delete it. To
   *          manually delete these recovery points, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/gs-cleanup-resources.html#cleanup-backups"> Step 3:
   *             Delete the recovery points</a> in the <i>Clean up resources</i>
   *          section of <i>Getting started</i>.</p>
   *          <p>
   *             <code>STOPPED</code> status occurs on a continuous backup where a user has taken some
   *          action that causes the continuous backup to be disabled. This can be caused by the removal
   *          of permissions, turning off versioning, turning off events being sent to EventBridge,
   *          or disabling the EventBridge rules that are put in place by Backup.</p>
   *          <p>To resolve <code>STOPPED</code> status, ensure that all requested permissions are in place and
   *          that versioning is enabled on the S3 bucket. Once these conditions are met, the next instance
   *          of a backup rule running will result in a new continuous recovery point being created.
   *          The recovery points with STOPPED status do not need to be deleted.</p>
   */
  Status?: RecoveryPointStatus | string;

  /**
   * <p>A status message explaining the reason for the recovery point deletion failure.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The date and time that a recovery point is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time that a job to create a recovery point is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and
   *             <code>MoveToColdStorageAt</code> timestamps.</p>
   */
  CalculatedLifecycle?: CalculatedLifecycle;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup transitions and expires backups automatically according to
   *          the lifecycle that you define.</p>
   *          <p>Backups that are transitioned to cold storage must be stored in cold storage for a
   *          minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold. </p>
   *          <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage"
   *          section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource">
   *             Feature availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>The server-side encryption key used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>A Boolean value that is returned as <code>TRUE</code> if the specified recovery point is
   *          encrypted, or <code>FALSE</code> if the recovery point is not encrypted.</p>
   */
  IsEncrypted?: boolean;

  /**
   * <p>Specifies the storage class of the recovery point. Valid values are <code>WARM</code> or
   *             <code>COLD</code>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>The date and time that a recovery point was last restored, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>LastRestoreTime</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  LastRestoreTime?: Date;

  /**
   * <p>This is an ARN that uniquely identifies a parent (composite) recovery point; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  ParentRecoveryPointArn?: string;

  /**
   * <p>This is the identifier of a resource within a composite group, such as
   *          nested (child) recovery point belonging to a composite (parent) stack. The
   *          ID is transferred from
   *          the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax">
   *             logical ID</a> within a stack.</p>
   */
  CompositeMemberIdentifier?: string;

  /**
   * <p>This returns the boolean value that a recovery point is a parent (composite) job.</p>
   */
  IsParent?: boolean;
}

export interface DescribeRegionSettingsInput {}

export interface DescribeRegionSettingsOutput {
  /**
   * <p>Returns a list of all services along with the opt-in preferences in the Region.</p>
   */
  ResourceTypeOptInPreference?: Record<string, boolean>;

  /**
   * <p>Returns whether Backup fully manages the backups for a resource type.</p>
   *          <p>For the benefits of full Backup management, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#full-management"> Full Backup management</a>.</p>
   *          <p>For a list of resource types and whether each supports full Backup
   *          management, see the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature
   *             availability by resource</a> table.</p>
   *          <p>If <code>"DynamoDB":false</code>, you can enable full Backup management for
   *          DynamoDB backup by enabling <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html#advanced-ddb-backup-enable-cli">
   *             Backup's advanced DynamoDB backup features</a>.</p>
   */
  ResourceTypeManagementPreference?: Record<string, boolean>;
}

export interface DescribeReportJobInput {
  /**
   * <p>The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded
   *          string that is at most 1,024 bytes long. The report job ID cannot be edited.</p>
   */
  ReportJobId: string | undefined;
}

/**
 * <p>Contains information from your report job about your report destination.</p>
 */
export interface ReportDestination {
  /**
   * <p>The unique name of the Amazon S3 bucket that receives your reports.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The object key that uniquely identifies your reports in your S3 bucket.</p>
   */
  S3Keys?: string[];
}

/**
 * <p>Contains detailed information about a report job. A report job compiles a report based
 *          on a report plan and publishes it to Amazon S3.</p>
 */
export interface ReportJob {
  /**
   * <p>The identifier for a report job. A unique, randomly generated, Unicode, UTF-8 encoded
   *          string that is at most 1,024 bytes long. Report job IDs cannot be edited.</p>
   */
  ReportJobId?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ReportPlanArn?: string;

  /**
   * <p>Identifies the report template for the report. Reports are built using a report
   *          template. The report templates are: </p>
   *          <p>
   *             <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT |
   *             COPY_JOB_REPORT | RESTORE_JOB_REPORT</code>
   *          </p>
   */
  ReportTemplate?: string;

  /**
   * <p>The date and time that a report job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time that a report job is completed, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CompletionTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>The status of a report job. The statuses are:</p>
   *          <p>
   *             <code>CREATED | RUNNING | COMPLETED | FAILED</code>
   *          </p>
   *          <p>
   *             <code>COMPLETED</code> means that the report is available for your review at your
   *          designated destination. If the status is <code>FAILED</code>, review the
   *             <code>StatusMessage</code> for the reason.</p>
   */
  Status?: string;

  /**
   * <p>A message explaining the status of the report job.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The S3 bucket name and S3 keys for the destination where the report job publishes the
   *          report.</p>
   */
  ReportDestination?: ReportDestination;
}

export interface DescribeReportJobOutput {
  /**
   * <p>A list of information about a report job, including its completion and creation times,
   *          report destination, unique report job ID, Amazon Resource Name (ARN), report template,
   *          status, and status message.</p>
   */
  ReportJob?: ReportJob;
}

export interface DescribeReportPlanInput {
  /**
   * <p>The unique name of a report plan.</p>
   */
  ReportPlanName: string | undefined;
}

/**
 * <p>Contains detailed information about a report plan.</p>
 */
export interface ReportPlan {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ReportPlanArn?: string;

  /**
   * <p>The unique name of the report plan. This name is between 1 and 256 characters starting
   *          with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores
   *          (_).</p>
   */
  ReportPlanName?: string;

  /**
   * <p>An optional description of the report plan with a maximum 1,024 characters.</p>
   */
  ReportPlanDescription?: string;

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
   */
  ReportSetting?: ReportSetting;

  /**
   * <p>Contains information about where and how to deliver your reports, specifically your
   *             Amazon S3 bucket name, S3 key prefix, and the formats of your reports.</p>
   */
  ReportDeliveryChannel?: ReportDeliveryChannel;

  /**
   * <p>The deployment status of a report plan. The statuses are:</p>
   *          <p>
   *             <code>CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS |
   *          COMPLETED</code>
   *          </p>
   */
  DeploymentStatus?: string;

  /**
   * <p>The date and time that a report plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time that a report job associated with this report plan last attempted to
   *          run, in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastAttemptedExecutionTime</code> is accurate to milliseconds. For example, the
   *          value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastAttemptedExecutionTime?: Date;

  /**
   * <p>The date and time that a report job associated with this report plan last successfully
   *          ran, in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastSuccessfulExecutionTime</code> is accurate to milliseconds. For example, the
   *          value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastSuccessfulExecutionTime?: Date;
}

export interface DescribeReportPlanOutput {
  /**
   * <p>Returns details about the report plan that is specified by its name. These details
   *          include the report plan's Amazon Resource Name (ARN), description, settings, delivery
   *          channel, deployment status, creation time, and last attempted and successful run
   *          times.</p>
   */
  ReportPlan?: ReportPlan;
}

export interface DescribeRestoreJobInput {
  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId: string | undefined;
}

export enum RestoreJobStatus {
  ABORTED = "ABORTED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
}

export interface DescribeRestoreJobOutput {
  /**
   * <p>Returns the account ID that owns the restore job.</p>
   */
  AccountId?: string;

  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId?: string;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>The date and time that a restore job is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time that a job to restore a recovery point is completed, in Unix format
   *          and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate
   *          to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>Status code specifying the state of the job that is initiated by Backup to
   *          restore a recovery point.</p>
   */
  Status?: RestoreJobStatus | string;

  /**
   * <p>A message showing the status of a job to restore a recovery point.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Contains an estimated percentage that is complete of a job at the time the job status
   *          was queried.</p>
   */
  PercentDone?: string;

  /**
   * <p>The size, in bytes, of the restored resource.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The amount of time in minutes that a job restoring a recovery point is expected to
   *          take.</p>
   */
  ExpectedCompletionTimeMinutes?: number;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource whose recovery point
   *          is being restored. The format of the ARN depends on the resource type of the backed-up
   *          resource.</p>
   */
  CreatedResourceArn?: string;

  /**
   * <p>Returns metadata associated with a restore job listed by resource type.</p>
   */
  ResourceType?: string;
}

export interface DisassociateRecoveryPointInput {
  /**
   * <p>The unique name of an Backup vault.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an Backup recovery
   *          point.</p>
   */
  RecoveryPointArn: string | undefined;
}

export interface DisassociateRecoveryPointFromParentInput {
  /**
   * <p>This is the name of a logical container where the child (nested) recovery point
   *          is stored. Backup vaults are identified by names that are unique to the account used
   *          to create them and the Amazon Web Services Region where they are created. They consist of lowercase
   *          letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>This is the Amazon Resource Name (ARN) that uniquely identifies the child
   *          (nested) recovery point; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</code>
   *          </p>
   */
  RecoveryPointArn: string | undefined;
}

export interface ExportBackupPlanTemplateInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;
}

export interface ExportBackupPlanTemplateOutput {
  /**
   * <p>The body of a backup plan template in JSON format.</p>
   *          <note>
   *             <p>This is a signed JSON document that cannot be modified before being passed to
   *                <code>GetBackupPlanFromJSON.</code>
   *             </p>
   *          </note>
   */
  BackupPlanTemplateJson?: string;
}

export interface GetBackupPlanInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version IDs cannot be edited.</p>
   */
  VersionId?: string;
}

export interface GetBackupPlanOutput {
  /**
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   */
  BackupPlan?: BackupPlan;

  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   */
  BackupPlanArn?: string;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version IDs cannot be edited.</p>
   */
  VersionId?: string;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The date and time that a backup plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time that a backup plan is deleted, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  DeletionDate?: Date;

  /**
   * <p>The last time a job to back up resources was run with this backup plan. A date and time,
   *          in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastExecutionDate</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastExecutionDate?: Date;

  /**
   * <p>Contains a list of <code>BackupOptions</code> for each resource type. The list is
   *          populated only if the advanced option is set for the backup plan.</p>
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[];
}

export interface GetBackupPlanFromJSONInput {
  /**
   * <p>A customer-supplied backup plan document in JSON format.</p>
   */
  BackupPlanTemplateJson: string | undefined;
}

export interface GetBackupPlanFromJSONOutput {
  /**
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   */
  BackupPlan?: BackupPlan;
}

export interface GetBackupPlanFromTemplateInput {
  /**
   * <p>Uniquely identifies a stored backup plan template.</p>
   */
  BackupPlanTemplateId: string | undefined;
}

export interface GetBackupPlanFromTemplateOutput {
  /**
   * <p>Returns the body of a backup plan based on the target template, including the name,
   *          rules, and backup vault of the plan.</p>
   */
  BackupPlanDocument?: BackupPlan;
}

export interface GetBackupSelectionInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup
   *          plan.</p>
   */
  SelectionId: string | undefined;
}

export interface GetBackupSelectionOutput {
  /**
   * <p>Specifies the body of a request to assign a set of resources to a backup plan.</p>
   */
  BackupSelection?: BackupSelection;

  /**
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup
   *          plan.</p>
   */
  SelectionId?: string;

  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * <p>The date and time a backup selection is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice.</p>
   */
  CreatorRequestId?: string;
}

export interface GetBackupVaultAccessPolicyInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

export interface GetBackupVaultAccessPolicyOutput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The backup vault access policy document in JSON format.</p>
   */
  Policy?: string;
}

export interface GetBackupVaultNotificationsInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

export interface GetBackupVaultNotificationsOutput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>An ARN that uniquely identifies an Amazon Simple Notification Service (Amazon SNS)
   *          topic; for example, <code>arn:aws:sns:us-west-2:111122223333:MyTopic</code>.</p>
   */
  SNSTopicArn?: string;

  /**
   * <p>An array of events that indicate the status of jobs to back up resources to the backup
   *          vault.</p>
   */
  BackupVaultEvents?: (BackupVaultEvent | string)[];
}

export interface GetLegalHoldInput {
  /**
   * <p>This is the ID required to use <code>GetLegalHold</code>. This unique ID
   *          is associated with a specific legal hold.</p>
   */
  LegalHoldId: string | undefined;
}

export interface GetLegalHoldOutput {
  /**
   * <p>This is the string title of the legal hold.</p>
   */
  Title?: string;

  /**
   * <p>This is the status of the legal hold. Statuses can be
   *          <code>ACTIVE</code>, <code>CREATING</code>, <code>CANCELED</code>, and
   *          <code>CANCELING</code>.</p>
   */
  Status?: LegalHoldStatus | string;

  /**
   * <p>This is the returned string description of the legal hold.</p>
   */
  Description?: string;

  /**
   * <p>String describing the reason for removing the legal hold.</p>
   */
  CancelDescription?: string;

  /**
   * <p>This is the returned ID associated with a specified legal hold.</p>
   */
  LegalHoldId?: string;

  /**
   * <p>This is the returned framework ARN for the specified legal hold.
   *          An Amazon Resource Name (ARN) uniquely identifies a resource. The format
   *          of the ARN depends on the resource type.</p>
   */
  LegalHoldArn?: string;

  /**
   * <p>Time in number format when legal hold was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Time in number when legal hold was cancelled.</p>
   */
  CancellationDate?: Date;

  /**
   * <p>This is the date and time until which the legal hold record will
   *          be retained.</p>
   */
  RetainRecordUntil?: Date;

  /**
   * <p>This specifies criteria to assign
   *          a set of resources, such as resource types or backup vaults.</p>
   */
  RecoveryPointSelection?: RecoveryPointSelection;
}

export interface GetRecoveryPointRestoreMetadataInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string | undefined;
}

export interface GetRecoveryPointRestoreMetadataOutput {
  /**
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>The set of metadata key-value pairs that describe the original configuration of the
   *          backed-up resource. These values vary depending on the service that is being
   *          restored.</p>
   */
  RestoreMetadata?: Record<string, string>;
}

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
   *                   <code>FSX</code> for Amazon FSx</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> for Storage Gateway</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DocDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Neptune</code> for Amazon Neptune</p>
   *             </li>
   *          </ul>
   */
  ResourceTypes?: string[];
}

export interface ListBackupJobsInput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>Returns only backup jobs that match the specified resource Amazon Resource Name
   *          (ARN).</p>
   */
  ByResourceArn?: string;

  /**
   * <p>Returns only backup jobs that are in the specified state.</p>
   */
  ByState?: BackupJobState | string;

  /**
   * <p>Returns only backup jobs that will be stored in the specified backup vault. Backup
   *          vaults are identified by names that are unique to the account used to create them and the
   *             Amazon Web Services Region where they are created. They consist of lowercase letters,
   *          numbers, and hyphens.</p>
   */
  ByBackupVaultName?: string;

  /**
   * <p>Returns only backup jobs that were created before the specified date.</p>
   */
  ByCreatedBefore?: Date;

  /**
   * <p>Returns only backup jobs that were created after the specified date.</p>
   */
  ByCreatedAfter?: Date;

  /**
   * <p>Returns only backup jobs for the specified resources:</p>
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
   *                   <code>Storage Gateway</code> for Storage Gateway</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon S3</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VirtualMachine</code> for virtual machines</p>
   *             </li>
   *          </ul>
   */
  ByResourceType?: string;

  /**
   * <p>The account ID to list the jobs from. Returns only backup jobs associated with the
   *          specified account ID.</p>
   *          <p>If used from an Organizations management account, passing <code>*</code> returns
   *          all jobs across the organization.</p>
   */
  ByAccountId?: string;

  /**
   * <p>Returns only backup jobs completed after a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   */
  ByCompleteAfter?: Date;

  /**
   * <p>Returns only backup jobs completed before a date expressed in Unix format and
   *          Coordinated Universal Time (UTC).</p>
   */
  ByCompleteBefore?: Date;

  /**
   * <p>This is a filter to list child (nested) jobs based on parent job ID.</p>
   */
  ByParentJobId?: string;
}

export interface ListBackupJobsOutput {
  /**
   * <p>An array of structures containing metadata about your backup jobs returned in JSON
   *          format.</p>
   */
  BackupJobs?: BackupJob[];

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export interface ListBackupPlansInput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>A Boolean value with a default value of <code>FALSE</code> that returns deleted backup
   *          plans when set to <code>TRUE</code>.</p>
   */
  IncludeDeleted?: boolean;
}

export interface ListBackupPlansOutput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of backup plan list items containing metadata about your saved backup
   *          plans.</p>
   */
  BackupPlansList?: BackupPlansListMember[];
}

export interface ListBackupPlanTemplatesInput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;
}

export interface ListBackupPlanTemplatesOutput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of template list items containing metadata about your saved templates.</p>
   */
  BackupPlanTemplatesList?: BackupPlanTemplatesListMember[];
}

export interface ListBackupPlanVersionsInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;
}

export interface ListBackupPlanVersionsOutput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of version list items containing metadata about your backup plans.</p>
   */
  BackupPlanVersionsList?: BackupPlansListMember[];
}

export interface ListBackupSelectionsInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;
}

export interface ListBackupSelectionsOutput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of backup selection list items containing metadata about each resource in the
   *          list.</p>
   */
  BackupSelectionsList?: BackupSelectionsListMember[];
}

export interface ListBackupVaultsInput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;
}

export interface ListBackupVaultsOutput {
  /**
   * <p>An array of backup vault list members containing vault metadata, including Amazon
   *          Resource Name (ARN), display name, creation date, number of saved recovery points, and
   *          encryption information if the resources saved in the backup vault are encrypted.</p>
   */
  BackupVaultList?: BackupVaultListMember[];

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export interface ListCopyJobsInput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return maxResults number of items, NextToken allows you to return more items in
   *          your list starting at the location pointed to by the next token. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>Returns only copy jobs that match the specified resource Amazon Resource Name (ARN).
   *       </p>
   */
  ByResourceArn?: string;

  /**
   * <p>Returns only copy jobs that are in the specified state.</p>
   */
  ByState?: CopyJobState | string;

  /**
   * <p>Returns only copy jobs that were created before the specified date.</p>
   */
  ByCreatedBefore?: Date;

  /**
   * <p>Returns only copy jobs that were created after the specified date.</p>
   */
  ByCreatedAfter?: Date;

  /**
   * <p>Returns only backup jobs for the specified resources:</p>
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
   *                   <code>Storage Gateway</code> for Storage Gateway</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon S3</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VirtualMachine</code> for virtual machines</p>
   *             </li>
   *          </ul>
   */
  ByResourceType?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a source backup vault to copy
   *          from; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.
   *       </p>
   */
  ByDestinationVaultArn?: string;

  /**
   * <p>The account ID to list the jobs from. Returns only copy jobs associated with the
   *          specified account ID.</p>
   */
  ByAccountId?: string;

  /**
   * <p>Returns only copy jobs completed before a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   */
  ByCompleteBefore?: Date;

  /**
   * <p>Returns only copy jobs completed after a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   */
  ByCompleteAfter?: Date;

  /**
   * <p>This is a filter to list child (nested) jobs based on parent job ID.</p>
   */
  ByParentJobId?: string;
}

export interface ListCopyJobsOutput {
  /**
   * <p>An array of structures containing metadata about your copy jobs returned in JSON format.
   *       </p>
   */
  CopyJobs?: CopyJob[];

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return maxResults number of items, NextToken allows you to return more items in
   *          your list starting at the location pointed to by the next token. </p>
   */
  NextToken?: string;
}

export interface ListFrameworksInput {
  /**
   * <p>The number of desired results from 1 to 1000. Optional. If unspecified, the query will
   *          return 1 MB of data.</p>
   */
  MaxResults?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains detailed information about a framework. Frameworks contain controls, which
 *          evaluate and report on your backup events and resources. Frameworks generate daily
 *          compliance results.</p>
 */
export interface Framework {
  /**
   * <p>The unique name of a framework. This name is between 1 and 256 characters, starting with
   *          a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).</p>
   */
  FrameworkName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  FrameworkArn?: string;

  /**
   * <p>An optional description of the framework with a maximum 1,024 characters.</p>
   */
  FrameworkDescription?: string;

  /**
   * <p>The number of controls contained by the framework.</p>
   */
  NumberOfControls?: number;

  /**
   * <p>The date and time that a framework is created, in ISO 8601 representation.
   *          The value of <code>CreationTime</code> is accurate to milliseconds. For example,
   *           2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind
   *           UTC.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The deployment status of a framework. The statuses are:</p>
   *          <p>
   *             <code>CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED |
   *             FAILED</code>
   *          </p>
   */
  DeploymentStatus?: string;
}

export interface ListFrameworksOutput {
  /**
   * <p>A list of frameworks with details for each framework, including the framework name,
   *          Amazon Resource Name (ARN), description, number of controls, creation time, and deployment
   *          status.</p>
   */
  Frameworks?: Framework[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

export interface ListLegalHoldsInput {
  /**
   * <p>The next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>maxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of resource list items to be returned.</p>
   */
  MaxResults?: number;
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
 */
export interface LegalHold {
  /**
   * <p>This is the title of a legal hold.</p>
   */
  Title?: string;

  /**
   * <p>This is the status of the legal hold. Statuses can be
   *          <code>ACTIVE</code>, <code>CREATING</code>, <code>CANCELED</code>, and
   *          <code>CANCELING</code>.</p>
   */
  Status?: LegalHoldStatus | string;

  /**
   * <p>This is the description of a legal hold.</p>
   */
  Description?: string;

  /**
   * <p>ID of specific legal hold on one or more recovery points.</p>
   */
  LegalHoldId?: string;

  /**
   * <p>This is an Amazon Resource Number (ARN) that uniquely identifies the legal hold; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  LegalHoldArn?: string;

  /**
   * <p>This is the time in number format when legal hold was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>This is the time in number format when legal hold was cancelled.</p>
   */
  CancellationDate?: Date;
}

export interface ListLegalHoldsOutput {
  /**
   * <p>The next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>maxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   */
  NextToken?: string;

  /**
   * <p>This is an array of returned legal holds, both active and previous.</p>
   */
  LegalHolds?: LegalHold[];
}

export interface ListProtectedResourcesInput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;
}

/**
 * <p>A structure that contains information about a backed-up resource.</p>
 */
export interface ProtectedResource {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The type of Amazon Web Services resource; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For
   *          Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is
   *             Amazon EC2.</p>
   */
  ResourceType?: string;

  /**
   * <p>The date and time a resource was last backed up, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>LastBackupTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  LastBackupTime?: Date;
}

export interface ListProtectedResourcesOutput {
  /**
   * <p>An array of resources successfully backed up by Backup including the time
   *          the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource
   *          type.</p>
   */
  Results?: ProtectedResource[];

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export interface ListRecoveryPointsByBackupVaultInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   *          <note>
   *             <p>Backup vault name might not be available when a supported service creates the
   *             backup.</p>
   *          </note>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>Returns only recovery points that match the specified resource Amazon Resource Name
   *          (ARN).</p>
   */
  ByResourceArn?: string;

  /**
   * <p>Returns only recovery points that match the specified resource type.</p>
   */
  ByResourceType?: string;

  /**
   * <p>Returns only recovery points that match the specified backup plan ID.</p>
   */
  ByBackupPlanId?: string;

  /**
   * <p>Returns only recovery points that were created before the specified timestamp.</p>
   */
  ByCreatedBefore?: Date;

  /**
   * <p>Returns only recovery points that were created after the specified timestamp.</p>
   */
  ByCreatedAfter?: Date;

  /**
   * <p>This returns only recovery points that match the specified parent (composite)
   *          recovery point Amazon Resource Name (ARN).</p>
   */
  ByParentRecoveryPointArn?: string;
}

/**
 * <p>Contains detailed information about the recovery points stored in a backup vault.</p>
 */
export interface RecoveryPointByBackupVault {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The backup vault where the recovery point was originally copied from. If the recovery
   *          point is restored to the same account this value will be <code>null</code>.</p>
   */
  SourceBackupVaultArn?: string;

  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The type of Amazon Web Services resource saved as a recovery point; for example, an
   *             Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only
   *          supported resource type is Amazon EC2.</p>
   */
  ResourceType?: string;

  /**
   * <p>Contains identifying information about the creation of a recovery point, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan that is used to create it.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>A status code specifying the state of the recovery point.</p>
   */
  Status?: RecoveryPointStatus | string;

  /**
   * <p>A message explaining the reason of the recovery point deletion failure.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The date and time a recovery point is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time a job to restore a recovery point is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and
   *             <code>MoveToColdStorageAt</code> timestamps.</p>
   */
  CalculatedLifecycle?: CalculatedLifecycle;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup transitions and expires backups automatically according to
   *          the lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
   *          cold after days” setting. The “transition to cold after days” setting cannot be changed
   *          after a backup has been transitioned to cold. </p>
   *          <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage"
   *          section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource">
   *             Feature availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>A Boolean value that is returned as <code>TRUE</code> if the specified recovery point is
   *          encrypted, or <code>FALSE</code> if the recovery point is not encrypted.</p>
   */
  IsEncrypted?: boolean;

  /**
   * <p>The date and time a recovery point was last restored, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>LastRestoreTime</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  LastRestoreTime?: Date;

  /**
   * <p>This is the Amazon Resource Name (ARN) of the parent (composite)
   *          recovery point.</p>
   */
  ParentRecoveryPointArn?: string;

  /**
   * <p>This is the identifier of a resource within a composite group, such as
   *          nested (child) recovery point belonging to a composite (parent) stack. The
   *          ID is transferred from
   *          the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax">
   *             logical ID</a> within a stack.</p>
   */
  CompositeMemberIdentifier?: string;

  /**
   * <p>This is a boolean value indicating this is
   *          a parent (composite) recovery point.</p>
   */
  IsParent?: boolean;
}

export interface ListRecoveryPointsByBackupVaultOutput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of objects that contain detailed information about recovery points saved in a
   *          backup vault.</p>
   */
  RecoveryPoints?: RecoveryPointByBackupVault[];
}

export interface ListRecoveryPointsByLegalHoldInput {
  /**
   * <p>This is the ID of the legal hold.</p>
   */
  LegalHoldId: string | undefined;

  /**
   * <p>This is the next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>maxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   */
  NextToken?: string;

  /**
   * <p>This is the maximum number of resource list items to be returned.</p>
   */
  MaxResults?: number;
}

/**
 * <p>This is a recovery point which is a child (nested) recovery point
 *          of a parent (composite) recovery point. These recovery points
 *          can be disassociated from their parent (composite) recovery
 *          point, in which case they will no longer be a member.</p>
 */
export interface RecoveryPointMember {
  /**
   * <p>This is the Amazon Resource Name (ARN) of the parent (composite)
   *          recovery point.</p>
   */
  RecoveryPointArn?: string;
}

export interface ListRecoveryPointsByLegalHoldOutput {
  /**
   * <p>This is a list of the recovery points returned by
   *          <code>ListRecoveryPointsByLegalHold</code>.</p>
   */
  RecoveryPoints?: RecoveryPointMember[];

  /**
   * <p>This return is the next item following a partial list of returned resources.</p>
   */
  NextToken?: string;
}

export interface ListRecoveryPointsByResourceInput {
  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned.</p>
   *          <note>
   *             <p>Amazon RDS requires a value of at least 20.</p>
   *          </note>
   */
  MaxResults?: number;
}

/**
 * <p>Contains detailed information about a saved recovery point.</p>
 */
export interface RecoveryPointByResource {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>The date and time a recovery point is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>A status code specifying the state of the recovery point.</p>
   */
  Status?: RecoveryPointStatus | string;

  /**
   * <p>A message explaining the reason of the recovery point deletion failure.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeBytes?: number;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>This is a boolean value indicating this is
   *          a parent (composite) recovery point.</p>
   */
  IsParent?: boolean;

  /**
   * <p>This is the Amazon Resource Name (ARN) of the parent (composite)
   *          recovery point.</p>
   */
  ParentRecoveryPointArn?: string;
}

export interface ListRecoveryPointsByResourceOutput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of objects that contain detailed information about recovery points of the
   *          specified resource type.</p>
   *          <note>
   *             <p>Only Amazon EFS and Amazon EC2 recovery points return
   *             BackupVaultName.</p>
   *          </note>
   */
  RecoveryPoints?: RecoveryPointByResource[];
}

export interface ListReportJobsInput {
  /**
   * <p>Returns only report jobs with the specified report plan name.</p>
   */
  ByReportPlanName?: string;

  /**
   * <p>Returns only report jobs that were created before the date and time specified in Unix
   *          format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents
   *          Friday, January 26, 2018 12:11:30 AM.</p>
   */
  ByCreationBefore?: Date;

  /**
   * <p>Returns only report jobs that were created after the date and time specified in Unix
   *          format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents
   *          Friday, January 26, 2018 12:11:30 AM.</p>
   */
  ByCreationAfter?: Date;

  /**
   * <p>Returns only report jobs that are in the specified status. The statuses are:</p>
   *          <p>
   *             <code>CREATED | RUNNING | COMPLETED | FAILED</code>
   *          </p>
   */
  ByStatus?: string;

  /**
   * <p>The number of desired results from 1 to 1000. Optional. If unspecified, the query will
   *          return 1 MB of data.</p>
   */
  MaxResults?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

export interface ListReportJobsOutput {
  /**
   * <p>Details about your report jobs in JSON format.</p>
   */
  ReportJobs?: ReportJob[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

export interface ListReportPlansInput {
  /**
   * <p>The number of desired results from 1 to 1000. Optional. If unspecified, the query will
   *          return 1 MB of data.</p>
   */
  MaxResults?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

export interface ListReportPlansOutput {
  /**
   * <p>A list of your report plans with detailed information for each plan. This information
   *          includes the Amazon Resource Name (ARN), report plan name, description, settings, delivery
   *          channel, deployment status, creation time, and last times the report plan attempted to and
   *          successfully ran.</p>
   */
  ReportPlans?: ReportPlan[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

export interface ListRestoreJobsInput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The account ID to list the jobs from. Returns only restore jobs associated with the
   *          specified account ID.</p>
   */
  ByAccountId?: string;

  /**
   * <p>Returns only restore jobs that were created before the specified date.</p>
   */
  ByCreatedBefore?: Date;

  /**
   * <p>Returns only restore jobs that were created after the specified date.</p>
   */
  ByCreatedAfter?: Date;

  /**
   * <p>Returns only restore jobs associated with the specified job status.</p>
   */
  ByStatus?: RestoreJobStatus | string;

  /**
   * <p>Returns only copy jobs completed before a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   */
  ByCompleteBefore?: Date;

  /**
   * <p>Returns only copy jobs completed after a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   */
  ByCompleteAfter?: Date;
}

/**
 * <p>Contains metadata about a restore job.</p>
 */
export interface RestoreJobsListMember {
  /**
   * <p>The account ID that owns the restore job.</p>
   */
  AccountId?: string;

  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId?: string;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>The date and time a restore job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time a job to restore a recovery point is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>A status code specifying the state of the job initiated by Backup to restore
   *          a recovery point.</p>
   */
  Status?: RestoreJobStatus | string;

  /**
   * <p>A detailed message explaining the status of the job to restore a recovery point.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Contains an estimated percentage complete of a job at the time the job status was
   *          queried.</p>
   */
  PercentDone?: string;

  /**
   * <p>The size, in bytes, of the restored resource.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The amount of time in minutes that a job restoring a recovery point is expected to
   *          take.</p>
   */
  ExpectedCompletionTimeMinutes?: number;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  CreatedResourceArn?: string;

  /**
   * <p>The resource type of the listed restore jobs; for example, an Amazon Elastic Block Store
   *             (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
   *          For Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is
   *             Amazon EC2.</p>
   */
  ResourceType?: string;
}

export interface ListRestoreJobsOutput {
  /**
   * <p>An array of objects that contain detailed information about jobs to restore saved
   *          resources.</p>
   */
  RestoreJobs?: RestoreJobsListMember[];

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export interface ListTagsInput {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the type of resource. Valid targets for <code>ListTags</code> are recovery
   *          points, backup plans, and backup vaults.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;
}

export interface ListTagsOutput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>To help organize your resources, you can assign your own metadata to the resources you
   *          create. Each tag is a key-value pair.</p>
   */
  Tags?: Record<string, string>;
}

export interface PutBackupVaultAccessPolicyInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The backup vault access policy document in JSON format.</p>
   */
  Policy?: string;
}

export interface PutBackupVaultLockConfigurationInput {
  /**
   * <p>The Backup Vault Lock configuration that specifies the name of the backup
   *          vault it protects.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The Backup Vault Lock configuration that specifies the minimum retention
   *          period that the vault retains its recovery points. This setting can be useful if, for
   *          example, your organization's policies require you to retain certain data for at least seven
   *          years (2555 days).</p>
   *          <p>If this parameter is not specified, Vault Lock will not enforce a minimum retention
   *          period.</p>
   *          <p>If this parameter is specified, any backup or copy job to the vault must have a
   *          lifecycle policy with a retention period equal to or longer than the minimum retention
   *          period. If the job's retention period is shorter than that minimum retention period, then
   *          the vault fails that backup or copy job, and you should either modify your lifecycle
   *          settings or use a different vault. The shortest minimum retention period
   *          you can specify is 1 day. Recovery points already saved in the vault prior to
   *          Vault Lock are not affected.</p>
   */
  MinRetentionDays?: number;

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
   */
  MaxRetentionDays?: number;

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
   */
  ChangeableForDays?: number;
}

export interface PutBackupVaultNotificationsInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for
   *          example, <code>arn:aws:sns:us-west-2:111122223333:MyVaultTopic</code>.</p>
   */
  SNSTopicArn: string | undefined;

  /**
   * <p>An array of events that indicate the status of jobs to back up resources to the backup
   *          vault.</p>
   *          <p>For common use cases and code samples, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/sns-notifications.html">Using Amazon SNS to
   *             track Backup events</a>.</p>
   *          <p>The following events are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BACKUP_JOB_STARTED</code> | <code>BACKUP_JOB_COMPLETED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COPY_JOB_STARTED</code> | <code>COPY_JOB_SUCCESSFUL</code> |
   *                   <code>COPY_JOB_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESTORE_JOB_STARTED</code> | <code>RESTORE_JOB_COMPLETED</code> |
   *                   <code>RECOVERY_POINT_MODIFIED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3_BACKUP_OBJECT_FAILED</code> | <code>S3_RESTORE_OBJECT_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The list below shows items that are deprecated events (for reference) and are no longer
   *             in use. They are no longer supported and will not return statuses or notifications.
   *             Refer to the list above for current supported events.</p>
   *          </note>
   */
  BackupVaultEvents: (BackupVaultEvent | string)[] | undefined;
}

export interface StartBackupJobInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>StartBackupJob</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>A value in minutes after a backup is scheduled before a job will be canceled if it
   *          doesn't start successfully. This value is optional, and the default is 8 hours.
   *          If this value is included, it must be at least 60 minutes to avoid errors.</p>
   */
  StartWindowMinutes?: number;

  /**
   * <p>A value in minutes during which a successfully started backup must complete, or else
   *             Backup will cancel the job. This value is optional. This value begins
   *          counting down from when the backup was scheduled. It does not add additional time for
   *             <code>StartWindowMinutes</code>, or if the backup started later than scheduled.</p>
   */
  CompleteWindowMinutes?: number;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup will transition and expire backups automatically according
   *          to the lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
   *          cold after days” setting. The “transition to cold after days” setting cannot be changed
   *          after a backup has been transitioned to cold. </p>
   *          <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage"
   *          section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource">
   *             Feature availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>To help organize your resources, you can assign your own metadata to the resources that
   *          you create. Each tag is a key-value pair.</p>
   */
  RecoveryPointTags?: Record<string, string>;

  /**
   * <p>Specifies the backup option for a selected resource. This option is only available for
   *          Windows Volume Shadow Copy Service (VSS) backup jobs.</p>
   *          <p>Valid values: Set to <code>"WindowsVSS":"enabled"</code> to enable the
   *          <code>WindowsVSS</code> backup option and create a Windows VSS backup. Set to
   *          <code>"WindowsVSS""disabled"</code> to create a regular backup. The
   *          <code>WindowsVSS</code> option is not enabled by default.</p>
   */
  BackupOptions?: Record<string, string>;
}

export interface StartBackupJobOutput {
  /**
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   */
  BackupJobId?: string;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>The date and time that a backup job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>This is a returned boolean value indicating this is a parent (composite)
   *          backup job.</p>
   */
  IsParent?: boolean;
}

export interface StartCopyJobInput {
  /**
   * <p>An ARN that uniquely identifies a recovery point to use for the copy job; for example,
   *          arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
   *       </p>
   */
  RecoveryPointArn: string | undefined;

  /**
   * <p>The name of a logical source container where backups are stored. Backup vaults are
   *          identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers,
   *          and hyphens.</p>
   */
  SourceBackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a destination backup vault to
   *          copy to; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  DestinationBackupVaultArn: string | undefined;

  /**
   * <p>Specifies the IAM role ARN used to copy the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>StartCopyJob</code>. Retrying a successful request with the same idempotency
   *          token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>Contains an array of <code>Transition</code> objects specifying how long in days before
   *          a recovery point transitions to cold storage or is deleted.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, on the console, the “retention” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold.</p>
   *          <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage"
   *          section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource">
   *             Feature availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   */
  Lifecycle?: Lifecycle;
}

export interface StartCopyJobOutput {
  /**
   * <p>Uniquely identifies a copy job.</p>
   */
  CopyJobId?: string;

  /**
   * <p>The date and time that a copy job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>This is a returned boolean value indicating this is a parent (composite)
   *          copy job.</p>
   */
  IsParent?: boolean;
}

export interface StartReportJobInput {
  /**
   * <p>The unique name of a report plan.</p>
   */
  ReportPlanName: string | undefined;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>StartReportJobInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;
}

export interface StartReportJobOutput {
  /**
   * <p>The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded
   *          string that is at most 1,024 bytes long. The report job ID cannot be edited.</p>
   */
  ReportJobId?: string;
}

export interface StartRestoreJobInput {
  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string | undefined;

  /**
   * <p>A set of metadata key-value pairs. Contains information, such as a resource name,
   *          required to restore a recovery point.</p>
   *          <p> You can get configuration metadata about a resource at the time it was backed up by
   *          calling <code>GetRecoveryPointRestoreMetadata</code>. However, values in addition to those
   *          provided by <code>GetRecoveryPointRestoreMetadata</code> might be required to restore a
   *          resource. For example, you might need to provide a new resource name if the original
   *          already exists.</p>
   *          <p>You need to specify specific metadata to restore an Amazon Elastic File System (Amazon EFS) instance:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>file-system-id</code>: The ID of the Amazon EFS file system that is
   *                backed up by Backup. Returned in
   *                   <code>GetRecoveryPointRestoreMetadata</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Encrypted</code>: A Boolean value that, if true, specifies that the file
   *                system is encrypted. If <code>KmsKeyId</code> is specified, <code>Encrypted</code>
   *                must be set to <code>true</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KmsKeyId</code>: Specifies the Amazon Web Services KMS key that is used to
   *                encrypt the restored file system. You can specify a key from another Amazon Web Services account provided that key it is properly shared with your account via Amazon Web Services KMS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PerformanceMode</code>: Specifies the throughput mode of the file
   *                system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreationToken</code>: A user-supplied value that ensures the uniqueness
   *                (idempotency) of the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>newFileSystem</code>: A Boolean value that, if true, specifies that the
   *                recovery point is restored to a new Amazon EFS file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ItemsToRestore</code>: An array of one to five strings where each string is
   *                a file path. Use <code>ItemsToRestore</code> to restore specific files or directories
   *                rather than the entire file system. This parameter is optional. For example,
   *                   <code>"itemsToRestore":"[\"/my.test\"]"</code>.</p>
   *             </li>
   *          </ul>
   */
  Metadata: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that Backup uses to create
   *          the target resource; for example:
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>StartRestoreJob</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>Starts a job to restore a recovery point for one of the following resources:</p>
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
   *                   <code>Storage Gateway</code> for Storage Gateway</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon S3</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VirtualMachine</code> for virtual machines</p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;
}

export interface StartRestoreJobOutput {
  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId?: string;
}

export interface StopBackupJobInput {
  /**
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   */
  BackupJobId: string | undefined;
}

export interface TagResourceInput {
  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the type of
   *          the tagged resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Key-value pairs that are used to help organize your resources. You can assign your own
   *          metadata to the resources you create. For clarity, this is the structure to assign tags:
   *             <code>[{"Key":"string","Value":"string"}]</code>.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface UntagResourceInput {
  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the type of
   *          the tagged resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of keys to identify which key-value tags to remove from a resource.</p>
   */
  TagKeyList: string[] | undefined;
}

export interface UpdateBackupPlanInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   */
  BackupPlan: BackupPlanInput | undefined;
}

export interface UpdateBackupPlanOutput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   */
  BackupPlanArn?: string;

  /**
   * <p>The date and time a backup plan is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version Ids cannot be edited.</p>
   */
  VersionId?: string;

  /**
   * <p>Contains a list of <code>BackupOptions</code> for each resource type.</p>
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[];
}

export interface UpdateFrameworkInput {
  /**
   * <p>The unique name of a framework. This name is between 1 and 256 characters, starting with
   *          a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).</p>
   */
  FrameworkName: string | undefined;

  /**
   * <p>An optional description of the framework with a maximum 1,024 characters.</p>
   */
  FrameworkDescription?: string;

  /**
   * <p>A list of the controls that make up the framework. Each control in the list has a name,
   *          input parameters, and scope.</p>
   */
  FrameworkControls?: FrameworkControl[];

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>UpdateFrameworkInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;
}

export interface UpdateFrameworkOutput {
  /**
   * <p>The unique name of a framework. This name is between 1 and 256 characters, starting with
   *          a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).</p>
   */
  FrameworkName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  FrameworkArn?: string;

  /**
   * <p>The date and time that a framework is created, in ISO 8601 representation. The value of <code>CreationTime</code> is accurate to milliseconds. For example,
   *          2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind
   *          UTC.</p>
   */
  CreationTime?: Date;
}

export interface UpdateGlobalSettingsInput {
  /**
   * <p>A value for <code>isCrossAccountBackupEnabled</code> and a Region. Example:
   *             <code>update-global-settings --global-settings isCrossAccountBackupEnabled=false
   *             --region us-west-2</code>.</p>
   */
  GlobalSettings?: Record<string, string>;
}

export interface UpdateRecoveryPointLifecycleInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
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
   */
  Lifecycle?: Lifecycle;
}

export interface UpdateRecoveryPointLifecycleOutput {
  /**
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup transitions and expires backups automatically according to
   *          the lifecycle that you define.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
   *          cold after days” setting. The “transition to cold after days” setting cannot be changed
   *          after a backup has been transitioned to cold.</p>
   *          <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage"
   *          section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource">
   *             Feature availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and
   *             <code>MoveToColdStorageAt</code> timestamps.</p>
   */
  CalculatedLifecycle?: CalculatedLifecycle;
}

export interface UpdateRegionSettingsInput {
  /**
   * <p>Updates the list of services along with the opt-in preferences for the Region.</p>
   */
  ResourceTypeOptInPreference?: Record<string, boolean>;

  /**
   * <p>Enables or disables full Backup management of backups for a resource type.
   *          To enable full Backup management for DynamoDB along with <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html">
   *             Backup's advanced DynamoDB backup features</a>, follow the
   *          procedure to <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html#advanced-ddb-backup-enable-cli"> enable advanced DynamoDB backup programmatically</a>.</p>
   */
  ResourceTypeManagementPreference?: Record<string, boolean>;
}

export interface UpdateReportPlanInput {
  /**
   * <p>The unique name of the report plan. This name is between 1 and 256 characters, starting
   *          with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores
   *          (_).</p>
   */
  ReportPlanName: string | undefined;

  /**
   * <p>An optional description of the report plan with a maximum 1,024 characters.</p>
   */
  ReportPlanDescription?: string;

  /**
   * <p>A structure that contains information about where to deliver your reports, specifically
   *          your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.</p>
   */
  ReportDeliveryChannel?: ReportDeliveryChannel;

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
   */
  ReportSetting?: ReportSetting;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>UpdateReportPlanInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;
}

export interface UpdateReportPlanOutput {
  /**
   * <p>The unique name of the report plan.</p>
   */
  ReportPlanName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ReportPlanArn?: string;

  /**
   * <p>The date and time that a report plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationTime?: Date;
}

/**
 * @internal
 */
export const AdvancedBackupSettingFilterSensitiveLog = (obj: AdvancedBackupSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryPointCreatorFilterSensitiveLog = (obj: RecoveryPointCreator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackupJobFilterSensitiveLog = (obj: BackupJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifecycleFilterSensitiveLog = (obj: Lifecycle): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyActionFilterSensitiveLog = (obj: CopyAction): any => ({
  ...obj,
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
export const BackupPlansListMemberFilterSensitiveLog = (obj: BackupPlansListMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackupPlanTemplatesListMemberFilterSensitiveLog = (obj: BackupPlanTemplatesListMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionParameterFilterSensitiveLog = (obj: ConditionParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionsFilterSensitiveLog = (obj: Conditions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionFilterSensitiveLog = (obj: Condition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackupSelectionFilterSensitiveLog = (obj: BackupSelection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackupSelectionsListMemberFilterSensitiveLog = (obj: BackupSelectionsListMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackupVaultListMemberFilterSensitiveLog = (obj: BackupVaultListMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CalculatedLifecycleFilterSensitiveLog = (obj: CalculatedLifecycle): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelLegalHoldInputFilterSensitiveLog = (obj: CancelLegalHoldInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelLegalHoldOutputFilterSensitiveLog = (obj: CancelLegalHoldOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ControlInputParameterFilterSensitiveLog = (obj: ControlInputParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ControlScopeFilterSensitiveLog = (obj: ControlScope): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyJobFilterSensitiveLog = (obj: CopyJob): any => ({
  ...obj,
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
export const CreateBackupPlanOutputFilterSensitiveLog = (obj: CreateBackupPlanOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackupSelectionInputFilterSensitiveLog = (obj: CreateBackupSelectionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackupSelectionOutputFilterSensitiveLog = (obj: CreateBackupSelectionOutput): any => ({
  ...obj,
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
export const CreateBackupVaultOutputFilterSensitiveLog = (obj: CreateBackupVaultOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FrameworkControlFilterSensitiveLog = (obj: FrameworkControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFrameworkInputFilterSensitiveLog = (obj: CreateFrameworkInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFrameworkOutputFilterSensitiveLog = (obj: CreateFrameworkOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DateRangeFilterSensitiveLog = (obj: DateRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryPointSelectionFilterSensitiveLog = (obj: RecoveryPointSelection): any => ({
  ...obj,
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
export const CreateLegalHoldOutputFilterSensitiveLog = (obj: CreateLegalHoldOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportDeliveryChannelFilterSensitiveLog = (obj: ReportDeliveryChannel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportSettingFilterSensitiveLog = (obj: ReportSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateReportPlanInputFilterSensitiveLog = (obj: CreateReportPlanInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateReportPlanOutputFilterSensitiveLog = (obj: CreateReportPlanOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackupPlanInputFilterSensitiveLog = (obj: DeleteBackupPlanInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackupPlanOutputFilterSensitiveLog = (obj: DeleteBackupPlanOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackupSelectionInputFilterSensitiveLog = (obj: DeleteBackupSelectionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackupVaultInputFilterSensitiveLog = (obj: DeleteBackupVaultInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackupVaultAccessPolicyInputFilterSensitiveLog = (obj: DeleteBackupVaultAccessPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackupVaultLockConfigurationInputFilterSensitiveLog = (
  obj: DeleteBackupVaultLockConfigurationInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackupVaultNotificationsInputFilterSensitiveLog = (
  obj: DeleteBackupVaultNotificationsInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFrameworkInputFilterSensitiveLog = (obj: DeleteFrameworkInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRecoveryPointInputFilterSensitiveLog = (obj: DeleteRecoveryPointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteReportPlanInputFilterSensitiveLog = (obj: DeleteReportPlanInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBackupJobInputFilterSensitiveLog = (obj: DescribeBackupJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBackupJobOutputFilterSensitiveLog = (obj: DescribeBackupJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBackupVaultInputFilterSensitiveLog = (obj: DescribeBackupVaultInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBackupVaultOutputFilterSensitiveLog = (obj: DescribeBackupVaultOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCopyJobInputFilterSensitiveLog = (obj: DescribeCopyJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCopyJobOutputFilterSensitiveLog = (obj: DescribeCopyJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFrameworkInputFilterSensitiveLog = (obj: DescribeFrameworkInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFrameworkOutputFilterSensitiveLog = (obj: DescribeFrameworkOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGlobalSettingsInputFilterSensitiveLog = (obj: DescribeGlobalSettingsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGlobalSettingsOutputFilterSensitiveLog = (obj: DescribeGlobalSettingsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProtectedResourceInputFilterSensitiveLog = (obj: DescribeProtectedResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProtectedResourceOutputFilterSensitiveLog = (obj: DescribeProtectedResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRecoveryPointInputFilterSensitiveLog = (obj: DescribeRecoveryPointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRecoveryPointOutputFilterSensitiveLog = (obj: DescribeRecoveryPointOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRegionSettingsInputFilterSensitiveLog = (obj: DescribeRegionSettingsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRegionSettingsOutputFilterSensitiveLog = (obj: DescribeRegionSettingsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReportJobInputFilterSensitiveLog = (obj: DescribeReportJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportDestinationFilterSensitiveLog = (obj: ReportDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportJobFilterSensitiveLog = (obj: ReportJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReportJobOutputFilterSensitiveLog = (obj: DescribeReportJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReportPlanInputFilterSensitiveLog = (obj: DescribeReportPlanInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportPlanFilterSensitiveLog = (obj: ReportPlan): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReportPlanOutputFilterSensitiveLog = (obj: DescribeReportPlanOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRestoreJobInputFilterSensitiveLog = (obj: DescribeRestoreJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRestoreJobOutputFilterSensitiveLog = (obj: DescribeRestoreJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateRecoveryPointInputFilterSensitiveLog = (obj: DisassociateRecoveryPointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateRecoveryPointFromParentInputFilterSensitiveLog = (
  obj: DisassociateRecoveryPointFromParentInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportBackupPlanTemplateInputFilterSensitiveLog = (obj: ExportBackupPlanTemplateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportBackupPlanTemplateOutputFilterSensitiveLog = (obj: ExportBackupPlanTemplateOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackupPlanInputFilterSensitiveLog = (obj: GetBackupPlanInput): any => ({
  ...obj,
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
export const GetBackupPlanFromJSONInputFilterSensitiveLog = (obj: GetBackupPlanFromJSONInput): any => ({
  ...obj,
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
export const GetBackupPlanFromTemplateInputFilterSensitiveLog = (obj: GetBackupPlanFromTemplateInput): any => ({
  ...obj,
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
export const GetBackupSelectionInputFilterSensitiveLog = (obj: GetBackupSelectionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackupSelectionOutputFilterSensitiveLog = (obj: GetBackupSelectionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackupVaultAccessPolicyInputFilterSensitiveLog = (obj: GetBackupVaultAccessPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackupVaultAccessPolicyOutputFilterSensitiveLog = (obj: GetBackupVaultAccessPolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackupVaultNotificationsInputFilterSensitiveLog = (obj: GetBackupVaultNotificationsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackupVaultNotificationsOutputFilterSensitiveLog = (obj: GetBackupVaultNotificationsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLegalHoldInputFilterSensitiveLog = (obj: GetLegalHoldInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLegalHoldOutputFilterSensitiveLog = (obj: GetLegalHoldOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRecoveryPointRestoreMetadataInputFilterSensitiveLog = (
  obj: GetRecoveryPointRestoreMetadataInput
): any => ({
  ...obj,
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
export const GetSupportedResourceTypesOutputFilterSensitiveLog = (obj: GetSupportedResourceTypesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackupJobsInputFilterSensitiveLog = (obj: ListBackupJobsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackupJobsOutputFilterSensitiveLog = (obj: ListBackupJobsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackupPlansInputFilterSensitiveLog = (obj: ListBackupPlansInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackupPlansOutputFilterSensitiveLog = (obj: ListBackupPlansOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackupPlanTemplatesInputFilterSensitiveLog = (obj: ListBackupPlanTemplatesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackupPlanTemplatesOutputFilterSensitiveLog = (obj: ListBackupPlanTemplatesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackupPlanVersionsInputFilterSensitiveLog = (obj: ListBackupPlanVersionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackupPlanVersionsOutputFilterSensitiveLog = (obj: ListBackupPlanVersionsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackupSelectionsInputFilterSensitiveLog = (obj: ListBackupSelectionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackupSelectionsOutputFilterSensitiveLog = (obj: ListBackupSelectionsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackupVaultsInputFilterSensitiveLog = (obj: ListBackupVaultsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackupVaultsOutputFilterSensitiveLog = (obj: ListBackupVaultsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCopyJobsInputFilterSensitiveLog = (obj: ListCopyJobsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCopyJobsOutputFilterSensitiveLog = (obj: ListCopyJobsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFrameworksInputFilterSensitiveLog = (obj: ListFrameworksInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FrameworkFilterSensitiveLog = (obj: Framework): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFrameworksOutputFilterSensitiveLog = (obj: ListFrameworksOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLegalHoldsInputFilterSensitiveLog = (obj: ListLegalHoldsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LegalHoldFilterSensitiveLog = (obj: LegalHold): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLegalHoldsOutputFilterSensitiveLog = (obj: ListLegalHoldsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProtectedResourcesInputFilterSensitiveLog = (obj: ListProtectedResourcesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtectedResourceFilterSensitiveLog = (obj: ProtectedResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProtectedResourcesOutputFilterSensitiveLog = (obj: ListProtectedResourcesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecoveryPointsByBackupVaultInputFilterSensitiveLog = (
  obj: ListRecoveryPointsByBackupVaultInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryPointByBackupVaultFilterSensitiveLog = (obj: RecoveryPointByBackupVault): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecoveryPointsByBackupVaultOutputFilterSensitiveLog = (
  obj: ListRecoveryPointsByBackupVaultOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecoveryPointsByLegalHoldInputFilterSensitiveLog = (obj: ListRecoveryPointsByLegalHoldInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryPointMemberFilterSensitiveLog = (obj: RecoveryPointMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecoveryPointsByLegalHoldOutputFilterSensitiveLog = (
  obj: ListRecoveryPointsByLegalHoldOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecoveryPointsByResourceInputFilterSensitiveLog = (obj: ListRecoveryPointsByResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryPointByResourceFilterSensitiveLog = (obj: RecoveryPointByResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecoveryPointsByResourceOutputFilterSensitiveLog = (obj: ListRecoveryPointsByResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReportJobsInputFilterSensitiveLog = (obj: ListReportJobsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReportJobsOutputFilterSensitiveLog = (obj: ListReportJobsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReportPlansInputFilterSensitiveLog = (obj: ListReportPlansInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReportPlansOutputFilterSensitiveLog = (obj: ListReportPlansOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRestoreJobsInputFilterSensitiveLog = (obj: ListRestoreJobsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreJobsListMemberFilterSensitiveLog = (obj: RestoreJobsListMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRestoreJobsOutputFilterSensitiveLog = (obj: ListRestoreJobsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsInputFilterSensitiveLog = (obj: ListTagsInput): any => ({
  ...obj,
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
export const PutBackupVaultAccessPolicyInputFilterSensitiveLog = (obj: PutBackupVaultAccessPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutBackupVaultLockConfigurationInputFilterSensitiveLog = (
  obj: PutBackupVaultLockConfigurationInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutBackupVaultNotificationsInputFilterSensitiveLog = (obj: PutBackupVaultNotificationsInput): any => ({
  ...obj,
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
export const StartBackupJobOutputFilterSensitiveLog = (obj: StartBackupJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartCopyJobInputFilterSensitiveLog = (obj: StartCopyJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartCopyJobOutputFilterSensitiveLog = (obj: StartCopyJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReportJobInputFilterSensitiveLog = (obj: StartReportJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReportJobOutputFilterSensitiveLog = (obj: StartReportJobOutput): any => ({
  ...obj,
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
export const StartRestoreJobOutputFilterSensitiveLog = (obj: StartRestoreJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopBackupJobInputFilterSensitiveLog = (obj: StopBackupJobInput): any => ({
  ...obj,
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
export const UpdateBackupPlanOutputFilterSensitiveLog = (obj: UpdateBackupPlanOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFrameworkInputFilterSensitiveLog = (obj: UpdateFrameworkInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFrameworkOutputFilterSensitiveLog = (obj: UpdateFrameworkOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGlobalSettingsInputFilterSensitiveLog = (obj: UpdateGlobalSettingsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRecoveryPointLifecycleInputFilterSensitiveLog = (obj: UpdateRecoveryPointLifecycleInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRecoveryPointLifecycleOutputFilterSensitiveLog = (obj: UpdateRecoveryPointLifecycleOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRegionSettingsInputFilterSensitiveLog = (obj: UpdateRegionSettingsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateReportPlanInputFilterSensitiveLog = (obj: UpdateReportPlanInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateReportPlanOutputFilterSensitiveLog = (obj: UpdateReportPlanOutput): any => ({
  ...obj,
});
