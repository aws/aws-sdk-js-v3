// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BackupServiceException as __BaseException } from "./BackupServiceException";

/**
 * @public
 * <p>A list of backup options for each resource type.</p>
 */
export interface AdvancedBackupSetting {
  /**
   * @public
   * <p>Specifies an object containing resource type and backup options. The only supported
   *          resource type is Amazon EC2 instances with Windows Volume Shadow Copy Service
   *          (VSS). For a CloudFormation example, see the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/integrate-cloudformation-with-aws-backup.html">sample
   *             CloudFormation template to enable Windows VSS</a> in the <i>Backup User Guide</i>.</p>
   *          <p>Valid values: <code>EC2</code>.</p>
   */
  ResourceType?: string;

  /**
   * @public
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
 * @public
 * <p>The required resource already exists.</p>
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * @public
   * <p></p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p></p>
   */
  Arn?: string;

  /**
   * @public
   * <p></p>
   */
  Type?: string;

  /**
   * @public
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
 * @public
 * <p>Contains information about the backup plan and rule that Backup used to
 *          initiate the recovery point backup.</p>
 */
export interface RecoveryPointCreator {
  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   */
  BackupPlanArn?: string;

  /**
   * @public
   * <p>Version IDs are unique, randomly generated, Unicode, UTF-8 encoded strings that are at
   *          most 1,024 bytes long. They cannot be edited.</p>
   */
  BackupPlanVersion?: string;

  /**
   * @public
   * <p>Uniquely identifies a rule used to schedule the backup of a selection of
   *          resources.</p>
   */
  BackupRuleId?: string;
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
 * @public
 * <p>Contains detailed information about a backup job.</p>
 */
export interface BackupJob {
  /**
   * @public
   * <p>The account ID that owns the backup job.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   */
  BackupJobId?: string;

  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * @public
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * @public
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The date and time a backup job is created, in Unix format and Coordinated Universal Time
   *          (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the
   *          value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The date and time a job to create a backup job is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * @public
   * <p>The current state of a backup job.</p>
   */
  State?: BackupJobState;

  /**
   * @public
   * <p>A detailed message explaining the status of the job to back up a resource.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>Contains an estimated percentage complete of a job at the time the job status was
   *          queried.</p>
   */
  PercentDone?: string;

  /**
   * @public
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * @public
   * <p>Specifies the IAM role ARN used to create the target recovery point. IAM roles other
   *          than the default role must include either <code>AWSBackup</code> or <code>AwsBackup</code>
   *          in the role name. For example,
   *             <code>arn:aws:iam::123456789012:role/AWSBackupRDSAccess</code>. Role names without those
   *          strings lack permissions to perform backup jobs.</p>
   */
  IamRoleArn?: string;

  /**
   * @public
   * <p>Contains identifying information about the creation of a backup job, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan used to create it.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * @public
   * <p>The date and time a job to back up resources is expected to be completed, in Unix format
   *          and Coordinated Universal Time (UTC). The value of <code>ExpectedCompletionDate</code> is
   *          accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January
   *          26, 2018 12:11:30.087 AM.</p>
   */
  ExpectedCompletionDate?: Date;

  /**
   * @public
   * <p>Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job
   *          must be started before it is canceled. The value is calculated by adding the start window
   *          to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2
   *          hours, the <code>StartBy</code> time would be 8:00 PM on the date specified. The value of
   *             <code>StartBy</code> is accurate to milliseconds. For example, the value 1516925490.087
   *          represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  StartBy?: Date;

  /**
   * @public
   * <p>The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only
   *          supported resource type is Amazon EC2.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The size in bytes transferred to a backup vault at the time that the job status was
   *          queried.</p>
   */
  BytesTransferred?: number;

  /**
   * @public
   * <p>Specifies the backup option for a selected resource. This option is only available for
   *          Windows Volume Shadow Copy Service (VSS) backup jobs.</p>
   *          <p>Valid values: Set to <code>"WindowsVSS":"enabled"</code> to enable the
   *             <code>WindowsVSS</code> backup option and create a Windows VSS backup. Set to
   *             <code>"WindowsVSS":"disabled"</code> to create a regular backup. If you specify an
   *          invalid option, you get an <code>InvalidParameterValueException</code> exception.</p>
   */
  BackupOptions?: Record<string, string>;

  /**
   * @public
   * <p>Represents the type of backup for a backup job.</p>
   */
  BackupType?: string;

  /**
   * @public
   * <p>This uniquely identifies a request to Backup
   *          to back up a resource. The return will be the
   *          parent (composite) job ID.</p>
   */
  ParentJobId?: string;

  /**
   * @public
   * <p>This is a boolean value indicating this is
   *          a parent (composite) backup job.</p>
   */
  IsParent?: boolean;

  /**
   * @public
   * <p>This is the non-unique name of the resource that
   *          belongs to the specified backup.</p>
   */
  ResourceName?: string;
}

/**
 * @public
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
   * @public
   * <p>Specifies the number of days after creation that a recovery point is moved to cold
   *          storage.</p>
   */
  MoveToColdStorageAfterDays?: number;

  /**
   * @public
   * <p>Specifies the number of days after creation that a recovery point is deleted. Must be
   *          greater than 90 days plus <code>MoveToColdStorageAfterDays</code>.</p>
   */
  DeleteAfterDays?: number;
}

/**
 * @public
 * <p>The details of the copy operation.</p>
 */
export interface CopyAction {
  /**
   * @public
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
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for
   *          the copied backup. For example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  DestinationBackupVaultArn: string | undefined;
}

/**
 * @public
 * <p>Specifies a scheduled task used to back up a selection of resources.</p>
 */
export interface BackupRule {
  /**
   * @public
   * <p>A display name for a backup rule. Must contain 1 to 50 alphanumeric or '-_.'
   *          characters.</p>
   */
  RuleName: string | undefined;

  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  TargetBackupVaultName: string | undefined;

  /**
   * @public
   * <p>A cron expression in UTC specifying when Backup initiates a backup job. For
   *          more information about Amazon Web Services cron expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a> in the <i>Amazon CloudWatch Events User
   *             Guide.</i>. Two examples of Amazon Web Services cron expressions are <code> 15 * ?
   *             * * *</code> (take a backup every hour at 15 minutes past the hour) and <code>0 12 * * ?
   *             *</code> (take a backup every day at 12 noon UTC). For a table of examples, click the
   *          preceding link and scroll down the page.</p>
   */
  ScheduleExpression?: string;

  /**
   * @public
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
   */
  StartWindowMinutes?: number;

  /**
   * @public
   * <p>A value in minutes after a backup job is successfully started before it must be
   *          completed or it will be canceled by Backup. This value is optional.</p>
   */
  CompletionWindowMinutes?: number;

  /**
   * @public
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
   * @public
   * <p>An array of key-value pair strings that are assigned to resources that are associated
   *          with this rule when restored from backup.</p>
   */
  RecoveryPointTags?: Record<string, string>;

  /**
   * @public
   * <p>Uniquely identifies a rule that is used to schedule the backup of a selection of
   *          resources.</p>
   */
  RuleId?: string;

  /**
   * @public
   * <p>An array of <code>CopyAction</code> objects, which contains the details of the copy
   *          operation.</p>
   */
  CopyActions?: CopyAction[];

  /**
   * @public
   * <p>Specifies whether Backup creates continuous backups. True causes Backup to create continuous backups capable of point-in-time restore (PITR). False
   *          (or not specified) causes Backup to create snapshot backups.</p>
   */
  EnableContinuousBackup?: boolean;

  /**
   * @public
   * <p>This is the timezone in which the schedule expression is set. By default,
   *          ScheduleExpressions are in UTC. You can modify this to a specified timezone.</p>
   */
  ScheduleExpressionTimezone?: string;
}

/**
 * @public
 * <p>Contains an optional backup plan display name and an array of <code>BackupRule</code>
 *          objects, each of which specifies a backup rule. Each rule in a backup plan is a separate
 *          scheduled task and can back up a different selection of Amazon Web Services
 *          resources.</p>
 */
export interface BackupPlan {
  /**
   * @public
   * <p>The display name of a backup plan. Must contain 1 to 50 alphanumeric or '-_.'
   *          characters.</p>
   */
  BackupPlanName: string | undefined;

  /**
   * @public
   * <p>An array of <code>BackupRule</code> objects, each of which specifies a scheduled task
   *          that is used to back up a selection of resources. </p>
   */
  Rules: BackupRule[] | undefined;

  /**
   * @public
   * <p>Contains a list of <code>BackupOptions</code> for each resource type.</p>
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[];
}

/**
 * @public
 * <p>Specifies a scheduled task used to back up a selection of resources.</p>
 */
export interface BackupRuleInput {
  /**
   * @public
   * <p>A display name for a backup rule. Must contain 1 to 50 alphanumeric or '-_.'
   *          characters.</p>
   */
  RuleName: string | undefined;

  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  TargetBackupVaultName: string | undefined;

  /**
   * @public
   * <p>A CRON expression in UTC specifying when Backup initiates a backup
   *          job.</p>
   */
  ScheduleExpression?: string;

  /**
   * @public
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
   */
  StartWindowMinutes?: number;

  /**
   * @public
   * <p>A value in minutes after a backup job is successfully started before it must be
   *          completed or it will be canceled by Backup. This value is optional.</p>
   */
  CompletionWindowMinutes?: number;

  /**
   * @public
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
   *          <p>This parameter has a maximum value of 100 years (36,500 days).</p>
   */
  Lifecycle?: Lifecycle;

  /**
   * @public
   * <p>To help organize your resources, you can assign your own metadata to the resources that
   *          you create. Each tag is a key-value pair.</p>
   */
  RecoveryPointTags?: Record<string, string>;

  /**
   * @public
   * <p>An array of <code>CopyAction</code> objects, which contains the details of the copy
   *          operation.</p>
   */
  CopyActions?: CopyAction[];

  /**
   * @public
   * <p>Specifies whether Backup creates continuous backups. True causes Backup to create continuous backups capable of point-in-time restore (PITR). False
   *          (or not specified) causes Backup to create snapshot backups.</p>
   */
  EnableContinuousBackup?: boolean;

  /**
   * @public
   * <p>This is the timezone in which the schedule expression is set. By default,
   *          ScheduleExpressions are in UTC. You can modify this to a specified timezone.</p>
   */
  ScheduleExpressionTimezone?: string;
}

/**
 * @public
 * <p>Contains an optional backup plan display name and an array of <code>BackupRule</code>
 *          objects, each of which specifies a backup rule. Each rule in a backup plan is a separate
 *          scheduled task. </p>
 */
export interface BackupPlanInput {
  /**
   * @public
   * <p>The display name of a backup plan. Must contain 1 to 50 alphanumeric or '-_.'
   *          characters.</p>
   */
  BackupPlanName: string | undefined;

  /**
   * @public
   * <p>An array of <code>BackupRule</code> objects, each of which specifies a scheduled task
   *          that is used to back up a selection of resources.</p>
   */
  Rules: BackupRuleInput[] | undefined;

  /**
   * @public
   * <p>Specifies a list of <code>BackupOptions</code> for each resource type. These settings
   *          are only available for Windows Volume Shadow Copy Service (VSS) backup jobs.</p>
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[];
}

/**
 * @public
 * <p>Contains metadata about a backup plan.</p>
 */
export interface BackupPlansListMember {
  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   */
  BackupPlanArn?: string;

  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * @public
   * <p>The date and time a resource backup plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The date and time a backup plan is deleted, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  DeletionDate?: Date;

  /**
   * @public
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version IDs cannot be edited.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>The display name of a saved backup plan.</p>
   */
  BackupPlanName?: string;

  /**
   * @public
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>The last time a job to back up resources was run with this rule. A date and time, in
   *          Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastExecutionDate</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastExecutionDate?: Date;

  /**
   * @public
   * <p>Contains a list of <code>BackupOptions</code> for a resource type.</p>
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[];
}

/**
 * @public
 * <p>An object specifying metadata associated with a backup plan template.</p>
 */
export interface BackupPlanTemplatesListMember {
  /**
   * @public
   * <p>Uniquely identifies a stored backup plan template.</p>
   */
  BackupPlanTemplateId?: string;

  /**
   * @public
   * <p>The optional display name of a backup plan template.</p>
   */
  BackupPlanTemplateName?: string;
}

/**
 * @public
 * <p>Includes information about tags you define to assign tagged resources to a backup
 *          plan.</p>
 */
export interface ConditionParameter {
  /**
   * @public
   * <p>The key in a key-value pair. For example, in the tag <code>Department:
   *          Accounting</code>, <code>Department</code> is the key.</p>
   */
  ConditionKey?: string;

  /**
   * @public
   * <p>The value in a key-value pair. For example, in the tag <code>Department:
   *             Accounting</code>, <code>Accounting</code> is the value.</p>
   */
  ConditionValue?: string;
}

/**
 * @public
 * <p>Contains information about which resources to include or exclude from a backup plan
 *          using their tags. Conditions are case sensitive.</p>
 */
export interface Conditions {
  /**
   * @public
   * <p>Filters the values of your tagged resources for only those resources that you tagged
   *          with the same value. Also called "exact matching."</p>
   */
  StringEquals?: ConditionParameter[];

  /**
   * @public
   * <p>Filters the values of your tagged resources for only those resources that you tagged
   *          that do not have the same value. Also called "negated matching."</p>
   */
  StringNotEquals?: ConditionParameter[];

  /**
   * @public
   * <p>Filters the values of your tagged resources for matching tag values with the use of a
   *          wildcard character (*) anywhere in the string. For example, "prod*" or "*rod*" matches the
   *          tag value "production".</p>
   */
  StringLike?: ConditionParameter[];

  /**
   * @public
   * <p>Filters the values of your tagged resources for non-matching tag values with the use of
   *          a wildcard character (*) anywhere in the string.</p>
   */
  StringNotLike?: ConditionParameter[];
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
 * @public
 * <p>Contains an array of triplets made up of a condition type (such as
 *             <code>StringEquals</code>), a key, and a value. Used to filter resources using their
 *          tags and assign them to a backup plan. Case sensitive.</p>
 */
export interface Condition {
  /**
   * @public
   * <p>An operation applied to a key-value pair used to assign resources to your backup plan.
   *          Condition only supports <code>StringEquals</code>. For more flexible assignment options,
   *          including <code>StringLike</code> and the ability to exclude resources from your backup
   *          plan, use <code>Conditions</code> (with an "s" on the end) for your <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BackupSelection.html">
   *                <code>BackupSelection</code>
   *             </a>.</p>
   */
  ConditionType: ConditionType | undefined;

  /**
   * @public
   * <p>The key in a key-value pair. For example, in the tag <code>Department:
   *          Accounting</code>, <code>Department</code> is the key.</p>
   */
  ConditionKey: string | undefined;

  /**
   * @public
   * <p>The value in a key-value pair. For example, in the tag <code>Department:
   *             Accounting</code>, <code>Accounting</code> is the value.</p>
   */
  ConditionValue: string | undefined;
}

/**
 * @public
 * <p>Used to specify a set of resources to a backup plan.</p>
 *          <p>Specifying your desired <code>Conditions</code>, <code>ListOfTags</code>, <code>NotResources</code>,
 *          and/or <code>Resources</code> is recommended. If none of these are specified, Backup will attempt to
 *        select all supported and opted-in storage resources, which could have unintended cost implications.</p>
 */
export interface BackupSelection {
  /**
   * @public
   * <p>The display name of a resource selection document. Must contain 1 to 50 alphanumeric or
   *          '-_.' characters.</p>
   */
  SelectionName: string | undefined;

  /**
   * @public
   * <p>The ARN of the IAM role that Backup uses to authenticate when backing up the
   *          target resource; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * <p>A list of Amazon Resource Names (ARNs) to assign to a backup plan. The maximum number of
   *          ARNs is 500 without wildcards, or 30 ARNs with wildcards.</p>
   *          <p>If you need to assign many resources to a backup plan, consider a different resource
   *          selection strategy, such as assigning all resources of a resource type or refining your
   *          resource selection using tags.</p>
   */
  Resources?: string[];

  /**
   * @public
   * <p>A list of conditions that you define to assign resources to your backup plans using
   *          tags. For example, <code>"StringEquals":  \{
   *             "ConditionKey": "aws:ResourceTag/CreatedByCryo",
   *             "ConditionValue": "true"
   *             \},</code>. Condition
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
   * @public
   * <p>A list of Amazon Resource Names (ARNs) to exclude from a backup plan. The maximum number
   *          of ARNs is 500 without wildcards, or 30 ARNs with wildcards.</p>
   *          <p>If you need to exclude many resources from a backup plan, consider a different resource
   *          selection strategy, such as assigning only one or a few resource types or refining your
   *          resource selection using tags.</p>
   */
  NotResources?: string[];

  /**
   * @public
   * <p>A list of conditions that you define to assign resources to your backup plans using
   *          tags. For example, <code>"StringEquals":  \{
   *             "ConditionKey": "aws:ResourceTag/CreatedByCryo",
   *             "ConditionValue": "true"
   *             \},</code>. Condition
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
 * @public
 * <p>Contains metadata about a <code>BackupSelection</code> object.</p>
 */
export interface BackupSelectionsListMember {
  /**
   * @public
   * <p>Uniquely identifies a request to assign a set of resources to a backup plan.</p>
   */
  SelectionId?: string;

  /**
   * @public
   * <p>The display name of a resource selection document.</p>
   */
  SelectionName?: string;

  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * @public
   * <p>The date and time a backup plan is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>Specifies the IAM role Amazon Resource Name (ARN) to create the target recovery point;
   *          for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;
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
  COPY_JOB_FAILED: "COPY_JOB_FAILED",
  COPY_JOB_STARTED: "COPY_JOB_STARTED",
  COPY_JOB_SUCCESSFUL: "COPY_JOB_SUCCESSFUL",
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
 * <p>Contains metadata about a backup vault.</p>
 */
export interface BackupVaultListMember {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * @public
   * <p>The date and time a resource backup is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
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
   * @public
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>The number of recovery points that are stored in a backup vault.</p>
   */
  NumberOfRecoveryPoints?: number;

  /**
   * @public
   * <p>A Boolean value that indicates whether Backup Vault Lock applies to the
   *          selected backup vault. If <code>true</code>, Vault Lock prevents delete and update
   *          operations on the recovery points in the selected vault.</p>
   */
  Locked?: boolean;

  /**
   * @public
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
   * @public
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
   * @public
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
 * @public
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
   * @public
   * <p>A timestamp that specifies when to transition a recovery point to cold storage.</p>
   */
  MoveToColdStorageAt?: Date;

  /**
   * @public
   * <p>A timestamp that specifies when to delete a recovery point.</p>
   */
  DeleteAt?: Date;
}

/**
 * @public
 */
export interface CancelLegalHoldInput {
  /**
   * @public
   * <p>Legal hold ID required to remove the specified legal hold on a recovery point.</p>
   */
  LegalHoldId: string | undefined;

  /**
   * @public
   * <p>String describing the reason for removing the legal hold.</p>
   */
  CancelDescription: string | undefined;

  /**
   * @public
   * <p>The integer amount in days specifying amount of days after this
   *          API operation to remove legal hold.</p>
   */
  RetainRecordInDays?: number;
}

/**
 * @public
 */
export interface CancelLegalHoldOutput {}

/**
 * @public
 * <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * @public
   * <p></p>
   */
  Type?: string;

  /**
   * @public
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
 * @public
 * <p>Backup is already performing an action on this recovery point. It can't
 *          perform the action you requested until the first action finishes. Try again later.</p>
 */
export class InvalidResourceStateException extends __BaseException {
  readonly name: "InvalidResourceStateException" = "InvalidResourceStateException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * @public
   * <p></p>
   */
  Type?: string;

  /**
   * @public
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
 * @public
 * <p>Indicates that a required parameter is missing.</p>
 */
export class MissingParameterValueException extends __BaseException {
  readonly name: "MissingParameterValueException" = "MissingParameterValueException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * @public
   * <p></p>
   */
  Type?: string;

  /**
   * @public
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
 * @public
 * <p>A resource that is required for the action doesn't exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * @public
   * <p></p>
   */
  Type?: string;

  /**
   * @public
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
 * @public
 * <p>The request failed due to a temporary failure of the server.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: string;
  Message?: string;
  /**
   * @public
   * <p></p>
   */
  Type?: string;

  /**
   * @public
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
 * @public
 * <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * @public
   * <p></p>
   */
  Type?: string;

  /**
   * @public
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
 * @public
 * <p>A list of parameters for a control. A control can have zero, one, or more than one
 *          parameter. An example of a control with two parameters is: "backup plan frequency is at
 *          least <code>daily</code> and the retention period is at least <code>1 year</code>". The
 *          first parameter is <code>daily</code>. The second parameter is <code>1 year</code>.</p>
 */
export interface ControlInputParameter {
  /**
   * @public
   * <p>The name of a parameter, for example, <code>BackupPlanFrequency</code>.</p>
   */
  ParameterName?: string;

  /**
   * @public
   * <p>The value of parameter, for example, <code>hourly</code>.</p>
   */
  ParameterValue?: string;
}

/**
 * @public
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
   * @public
   * <p>The ID of the only Amazon Web Services resource that you want your control scope to
   *          contain.</p>
   */
  ComplianceResourceIds?: string[];

  /**
   * @public
   * <p>Describes whether the control scope includes one or more types of resources, such as
   *             <code>EFS</code> or <code>RDS</code>.</p>
   */
  ComplianceResourceTypes?: string[];

  /**
   * @public
   * <p>The tag key-value pair applied to those Amazon Web Services resources that you want to
   *          trigger an evaluation for a rule. A maximum of one key-value pair can be provided. The tag
   *          value is optional, but it cannot be an empty string. The structure to assign a tag is:
   *             <code>[\{"Key":"string","Value":"string"\}]</code>.</p>
   */
  Tags?: Record<string, string>;
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
 * @public
 * <p>Contains detailed information about a copy job.</p>
 */
export interface CopyJob {
  /**
   * @public
   * <p>The account ID that owns the copy job.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Uniquely identifies a copy job.</p>
   */
  CopyJobId?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a source copy vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>. </p>
   */
  SourceBackupVaultArn?: string;

  /**
   * @public
   * <p>An ARN that uniquely identifies a source recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  SourceRecoveryPointArn?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a destination copy vault; for
   *          example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  DestinationBackupVaultArn?: string;

  /**
   * @public
   * <p>An ARN that uniquely identifies a destination recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  DestinationRecoveryPointArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services resource to be copied; for example, an Amazon Elastic Block Store
   *             (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS)
   *          database.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The date and time a copy job is created, in Unix format and Coordinated Universal Time
   *          (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the
   *          value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The date and time a copy job is completed, in Unix format and Coordinated Universal Time
   *          (UTC). The value of <code>CompletionDate</code> is accurate to milliseconds. For example,
   *          the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * @public
   * <p>The current state of a copy job.</p>
   */
  State?: CopyJobState;

  /**
   * @public
   * <p>A detailed message explaining the status of the job to copy a resource.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The size, in bytes, of a copy job.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * @public
   * <p>Specifies the IAM role ARN used to copy the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * @public
   * <p>Contains information about the backup plan and rule that Backup used to
   *          initiate the recovery point backup.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * @public
   * <p>The type of Amazon Web Services resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>This uniquely identifies a request to Backup
   *          to copy a resource. The return will be the
   *          parent (composite) job ID.</p>
   */
  ParentJobId?: string;

  /**
   * @public
   * <p>This is a boolean value indicating this is
   *          a parent (composite) copy job.</p>
   */
  IsParent?: boolean;

  /**
   * @public
   * <p>This is the identifier of a resource within a composite group, such as
   *          nested (child) recovery point belonging to a composite (parent) stack. The
   *          ID is transferred from
   *          the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax">
   *             logical ID</a> within a stack.</p>
   */
  CompositeMemberIdentifier?: string;

  /**
   * @public
   * <p>This is the number of child (nested) copy jobs.</p>
   */
  NumberOfChildJobs?: number;

  /**
   * @public
   * <p>This returns the statistics of the included
   *          child (nested) copy jobs.</p>
   */
  ChildJobsInState?: Record<CopyJobState, number>;

  /**
   * @public
   * <p>This is the non-unique name of the resource that
   *          belongs to the specified backup.</p>
   */
  ResourceName?: string;
}

/**
 * @public
 */
export interface CreateBackupPlanInput {
  /**
   * @public
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   */
  BackupPlan: BackupPlanInput | undefined;

  /**
   * @public
   * <p>To help organize your resources, you can assign your own metadata to the resources that
   *          you create. Each tag is a key-value pair. The specified tags are assigned to all backups
   *          created with this plan.</p>
   */
  BackupPlanTags?: Record<string, string>;

  /**
   * @public
   * <p>Identifies the request and allows failed requests to be retried without the risk of
   *          running the operation twice. If the request includes a <code>CreatorRequestId</code> that
   *          matches an existing backup plan, that plan is returned. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   */
  CreatorRequestId?: string;
}

/**
 * @public
 */
export interface CreateBackupPlanOutput {
  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   */
  BackupPlanArn?: string;

  /**
   * @public
   * <p>The date and time that a backup plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. They cannot be edited.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>A list of <code>BackupOptions</code> settings for a resource type. This option is only
   *          available for Windows Volume Shadow Copy Service (VSS) backup jobs.</p>
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[];
}

/**
 * @public
 * <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * @public
   * <p></p>
   */
  Type?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface CreateBackupSelectionInput {
  /**
   * @public
   * <p>Uniquely identifies the backup plan to be associated with the selection of
   *          resources.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * @public
   * <p>Specifies the body of a request to assign a set of resources to a backup plan.</p>
   */
  BackupSelection: BackupSelection | undefined;

  /**
   * @public
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   */
  CreatorRequestId?: string;
}

/**
 * @public
 */
export interface CreateBackupSelectionOutput {
  /**
   * @public
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup
   *          plan.</p>
   */
  SelectionId?: string;

  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * @public
   * <p>The date and time a backup selection is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;
}

/**
 * @public
 */
export interface CreateBackupVaultInput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * @public
   * <p>Metadata that you can assign to help organize the resources that you create. Each tag is
   *          a key-value pair.</p>
   */
  BackupVaultTags?: Record<string, string>;

  /**
   * @public
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * @public
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice. This parameter is optional.</p>
   *          <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>
   */
  CreatorRequestId?: string;
}

/**
 * @public
 */
export interface CreateBackupVaultOutput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * @public
   * <p>The date and time a backup vault is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;
}

/**
 * @public
 * <p>Contains detailed information about all of the controls of a framework. Each framework
 *          must contain at least one control.</p>
 */
export interface FrameworkControl {
  /**
   * @public
   * <p>The name of a control. This name is between 1 and 256 characters.</p>
   */
  ControlName: string | undefined;

  /**
   * @public
   * <p>A list of <code>ParameterName</code> and <code>ParameterValue</code> pairs.</p>
   */
  ControlInputParameters?: ControlInputParameter[];

  /**
   * @public
   * <p>The scope of a control. The control scope defines what the control will evaluate. Three
   *          examples of control scopes are: a specific backup plan, all backup plans with a specific
   *          tag, or all backup plans.</p>
   */
  ControlScope?: ControlScope;
}

/**
 * @public
 */
export interface CreateFrameworkInput {
  /**
   * @public
   * <p>The unique name of the framework. The name must be between 1 and 256 characters,
   *          starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and
   *          underscores (_).</p>
   */
  FrameworkName: string | undefined;

  /**
   * @public
   * <p>An optional description of the framework with a maximum of 1,024 characters.</p>
   */
  FrameworkDescription?: string;

  /**
   * @public
   * <p>A list of the controls that make up the framework. Each control in the list has a name,
   *          input parameters, and scope.</p>
   */
  FrameworkControls: FrameworkControl[] | undefined;

  /**
   * @public
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>CreateFrameworkInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;

  /**
   * @public
   * <p>Metadata that you can assign to help organize the frameworks that you create. Each tag
   *          is a key-value pair.</p>
   */
  FrameworkTags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateFrameworkOutput {
  /**
   * @public
   * <p>The unique name of the framework. The name must be between 1 and 256 characters,
   *          starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and
   *          underscores (_).</p>
   */
  FrameworkName?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  FrameworkArn?: string;
}

/**
 * @public
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
   * @public
   * <p>This value is the beginning date, inclusive.</p>
   *          <p>The date and time are in Unix format and Coordinated
   *          Universal Time (UTC), and it is accurate to milliseconds
   *          (milliseconds are optional).</p>
   */
  FromDate: Date | undefined;

  /**
   * @public
   * <p>This value is the end date, inclusive.</p>
   *          <p>The date and time are in Unix format and Coordinated
   *          Universal Time (UTC), and it is accurate to milliseconds
   *          (milliseconds are optional).</p>
   */
  ToDate: Date | undefined;
}

/**
 * @public
 * <p>This specifies criteria to assign
 *          a set of resources, such as resource types or backup vaults.</p>
 */
export interface RecoveryPointSelection {
  /**
   * @public
   * <p>These are the names of the vaults in which the selected
   *          recovery points are contained.</p>
   */
  VaultNames?: string[];

  /**
   * @public
   * <p>These are the resources included in the resource selection
   *          (including type of resources and vaults).</p>
   */
  ResourceIdentifiers?: string[];

  /**
   * @public
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

/**
 * @public
 */
export interface CreateLegalHoldInput {
  /**
   * @public
   * <p>This is the string title of the legal hold.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>This is the string description of the legal hold.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>This is a user-chosen string used to distinguish between otherwise identical
   *          calls. Retrying a successful request with the
   *          same idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;

  /**
   * @public
   * <p>This specifies criteria to assign
   *          a set of resources, such as resource types or backup vaults.</p>
   */
  RecoveryPointSelection?: RecoveryPointSelection;

  /**
   * @public
   * <p>Optional tags to include. A tag is a key-value pair you can use to manage,
   *          filter, and search for your resources. Allowed characters include UTF-8 letters,
   *          numbers, spaces, and the following characters: + - = . _ : /. </p>
   */
  Tags?: Record<string, string>;
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
   * @public
   * <p>This is the string title of the legal hold returned after creating the legal hold.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>This displays the status of the legal hold returned after creating the legal hold.
   *          Statuses can be <code>ACTIVE</code>, <code>PENDING</code>, <code>CANCELED</code>,
   *          <code>CANCELING</code>, or <code>FAILED</code>.</p>
   */
  Status?: LegalHoldStatus;

  /**
   * @public
   * <p>This is the returned string description of the legal hold.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Legal hold ID returned for the specified legal hold on a recovery point.</p>
   */
  LegalHoldId?: string;

  /**
   * @public
   * <p>This is the ARN (Amazon Resource Number) of the created legal hold.</p>
   */
  LegalHoldArn?: string;

  /**
   * @public
   * <p>Time in number format when legal hold was created.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>This specifies criteria to assign
   *          a set of resources, such as resource types or backup vaults.</p>
   */
  RecoveryPointSelection?: RecoveryPointSelection;
}

/**
 * @public
 */
export interface CreateLogicallyAirGappedBackupVaultInput {
  /**
   * @public
   * <p>This is the name of the vault that is being created.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * @public
   * <p>These are the tags that will be included in the newly-created vault.</p>
   */
  BackupVaultTags?: Record<string, string>;

  /**
   * @public
   * <p>This is the ID of the creation request.</p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>This setting specifies the minimum retention period
   *          that the vault retains its recovery points. If this parameter is not specified,
   *          no minimum retention period is enforced.</p>
   *          <p>If specified, any backup or copy job to the vault must have a lifecycle policy with a
   *          retention period equal to or longer than the minimum retention period. If a job
   *          retention period is shorter than that minimum retention period, then the vault fails the
   *          backup or copy job, and you should either modify your lifecycle settings or use a different
   *          vault.</p>
   */
  MinRetentionDays: number | undefined;

  /**
   * @public
   * <p>This is the setting that specifies the maximum retention period
   *          that the vault retains its recovery points. If this parameter is not specified, Backup
   *          does not enforce a maximum retention period on the recovery points in the vault (allowing
   *          indefinite storage).</p>
   *          <p>If specified, any backup or copy job to the vault must have a lifecycle policy with a
   *          retention period equal to or shorter than the maximum retention period. If the job
   *          retention period is longer than that maximum retention period, then the vault fails the
   *          backup or copy job, and you should either modify your lifecycle settings or use a different
   *          vault.</p>
   */
  MaxRetentionDays: number | undefined;
}

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
 */
export interface CreateLogicallyAirGappedBackupVaultOutput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Logically air-gapped
   *          backup vaults are identified by names that are unique to the account used to create
   *          them and the Region where they are created. They consist of lowercase letters, numbers,
   *          and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * @public
   * <p>This is the ARN (Amazon Resource Name) of the vault being created.</p>
   */
  BackupVaultArn?: string;

  /**
   * @public
   * <p>The date and time when the vault was created.</p>
   *          <p>This value is in Unix format, Coordinated Universal Time (UTC), and accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>This is the current state of the vault.</p>
   */
  VaultState?: VaultState;
}

/**
 * @public
 * <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * @public
   * <p></p>
   */
  Type?: string;

  /**
   * @public
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

/**
 * @public
 * <p>Contains information from your report plan about where to deliver your reports,
 *          specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your
 *          reports.</p>
 */
export interface ReportDeliveryChannel {
  /**
   * @public
   * <p>The unique name of the S3 bucket that receives your reports.</p>
   */
  S3BucketName: string | undefined;

  /**
   * @public
   * <p>The prefix for where Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path:
   *             s3://your-bucket-name/<code>prefix</code>/Backup/us-west-2/year/month/day/report-name.
   *          If not specified, there is no prefix.</p>
   */
  S3KeyPrefix?: string;

  /**
   * @public
   * <p>A list of the format of your reports: <code>CSV</code>, <code>JSON</code>, or both. If
   *          not specified, the default format is <code>CSV</code>.</p>
   */
  Formats?: string[];
}

/**
 * @public
 * <p>Contains detailed information about a report setting.</p>
 */
export interface ReportSetting {
  /**
   * @public
   * <p>Identifies the report template for the report. Reports are built using a report
   *          template. The report templates are:</p>
   *          <p>
   *             <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT |
   *             COPY_JOB_REPORT | RESTORE_JOB_REPORT</code>
   *          </p>
   */
  ReportTemplate: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of the frameworks a report covers.</p>
   */
  FrameworkArns?: string[];

  /**
   * @public
   * <p>The number of frameworks a report covers.</p>
   */
  NumberOfFrameworks?: number;

  /**
   * @public
   * <p>These are the accounts to be included in the report.</p>
   */
  Accounts?: string[];

  /**
   * @public
   * <p>These are the Organizational Units to be included in the report.</p>
   */
  OrganizationUnits?: string[];

  /**
   * @public
   * <p>These are the Regions to be included in the report.</p>
   */
  Regions?: string[];
}

/**
 * @public
 */
export interface CreateReportPlanInput {
  /**
   * @public
   * <p>The unique name of the report plan. The name must be between 1 and 256 characters,
   *          starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and
   *          underscores (_).</p>
   */
  ReportPlanName: string | undefined;

  /**
   * @public
   * <p>An optional description of the report plan with a maximum of 1,024 characters.</p>
   */
  ReportPlanDescription?: string;

  /**
   * @public
   * <p>A structure that contains information about where and how to deliver your reports,
   *          specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your
   *          reports.</p>
   */
  ReportDeliveryChannel: ReportDeliveryChannel | undefined;

  /**
   * @public
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
   * @public
   * <p>Metadata that you can assign to help organize the report plans that you create. Each tag
   *          is a key-value pair.</p>
   */
  ReportPlanTags?: Record<string, string>;

  /**
   * @public
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>CreateReportPlanInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;
}

/**
 * @public
 */
export interface CreateReportPlanOutput {
  /**
   * @public
   * <p>The unique name of the report plan.</p>
   */
  ReportPlanName?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ReportPlanArn?: string;

  /**
   * @public
   * <p>The date and time a backup vault is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface DeleteBackupPlanInput {
  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupPlanOutput {
  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   */
  BackupPlanArn?: string;

  /**
   * @public
   * <p>The date and time a backup plan is deleted, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  DeletionDate?: Date;

  /**
   * @public
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version IDs cannot be edited.</p>
   */
  VersionId?: string;
}

/**
 * @public
 */
export interface DeleteBackupSelectionInput {
  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * @public
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup
   *          plan.</p>
   */
  SelectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupVaultInput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupVaultAccessPolicyInput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupVaultLockConfigurationInput {
  /**
   * @public
   * <p>The name of the backup vault from which to delete Backup Vault Lock.</p>
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupVaultNotificationsInput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFrameworkInput {
  /**
   * @public
   * <p>The unique name of a framework.</p>
   */
  FrameworkName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecoveryPointInput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteReportPlanInput {
  /**
   * @public
   * <p>The unique name of a report plan.</p>
   */
  ReportPlanName: string | undefined;
}

/**
 * @public
 * <p>A dependent Amazon Web Services service or resource returned an error to the Backup service, and the action cannot be completed.</p>
 */
export class DependencyFailureException extends __BaseException {
  readonly name: "DependencyFailureException" = "DependencyFailureException";
  readonly $fault: "server" = "server";
  Code?: string;
  Message?: string;
  /**
   * @public
   * <p></p>
   */
  Type?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface DescribeBackupJobInput {
  /**
   * @public
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   */
  BackupJobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBackupJobOutput {
  /**
   * @public
   * <p>Returns the account ID that owns the backup job.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   */
  BackupJobId?: string;

  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * @public
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * @public
   * <p>An ARN that uniquely identifies a saved resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The date and time that a backup job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The date and time that a job to create a backup job is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * @public
   * <p>The current state of a backup job.</p>
   */
  State?: BackupJobState;

  /**
   * @public
   * <p>A detailed message explaining the status of the job to back up a resource.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>Contains an estimated percentage that is complete of a job at the time the job status
   *          was queried.</p>
   */
  PercentDone?: string;

  /**
   * @public
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * @public
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * @public
   * <p>Contains identifying information about the creation of a backup job, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan that is used to create it.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * @public
   * <p>The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The size in bytes transferred to a backup vault at the time that the job status was
   *          queried.</p>
   */
  BytesTransferred?: number;

  /**
   * @public
   * <p>The date and time that a job to back up resources is expected to be completed, in Unix
   *          format and Coordinated Universal Time (UTC). The value of
   *             <code>ExpectedCompletionDate</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  ExpectedCompletionDate?: Date;

  /**
   * @public
   * <p>Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job
   *          must be started before it is canceled. The value is calculated by adding the start window
   *          to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2
   *          hours, the <code>StartBy</code> time would be 8:00 PM on the date specified. The value of
   *             <code>StartBy</code> is accurate to milliseconds. For example, the value 1516925490.087
   *          represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  StartBy?: Date;

  /**
   * @public
   * <p>Represents the options specified as part of backup plan or on-demand backup job.</p>
   */
  BackupOptions?: Record<string, string>;

  /**
   * @public
   * <p>Represents the actual backup type selected for a backup job. For example, if a
   *          successful Windows Volume Shadow Copy Service (VSS) backup was taken,
   *             <code>BackupType</code> returns <code>"WindowsVSS"</code>. If <code>BackupType</code> is
   *          empty, then the backup type was a regular backup.</p>
   */
  BackupType?: string;

  /**
   * @public
   * <p>This returns the parent (composite) resource backup job ID.</p>
   */
  ParentJobId?: string;

  /**
   * @public
   * <p>This returns the boolean value that a backup job is a parent (composite) job.</p>
   */
  IsParent?: boolean;

  /**
   * @public
   * <p>This returns the number of child (nested) backup jobs.</p>
   */
  NumberOfChildJobs?: number;

  /**
   * @public
   * <p>This returns the statistics of the included child (nested) backup jobs.</p>
   */
  ChildJobsInState?: Record<BackupJobState, number>;

  /**
   * @public
   * <p>This is the non-unique name of the resource that
   *          belongs to the specified backup.</p>
   */
  ResourceName?: string;
}

/**
 * @public
 */
export interface DescribeBackupVaultInput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * @public
   * <p>This is the account ID of the specified backup vault.</p>
   */
  BackupVaultAccountId?: string;
}

/**
 * @public
 * @enum
 */
export const VaultType = {
  BACKUP_VAULT: "BACKUP_VAULT",
  LOGICALLY_AIR_GAPPED_BACKUP_VAULT: "LOGICALLY_AIR_GAPPED_BACKUP_VAULT",
} as const;

/**
 * @public
 */
export type VaultType = (typeof VaultType)[keyof typeof VaultType];

/**
 * @public
 */
export interface DescribeBackupVaultOutput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * @public
   * <p>This is the type of vault described.</p>
   */
  VaultType?: VaultType;

  /**
   * @public
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * @public
   * <p>The date and time that a backup vault is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>The number of recovery points that are stored in a backup vault.</p>
   */
  NumberOfRecoveryPoints?: number;

  /**
   * @public
   * <p>A Boolean that indicates whether Backup Vault Lock is currently protecting
   *          the backup vault. <code>True</code> means that Vault Lock causes delete or update
   *          operations on the recovery points stored in the vault to fail.</p>
   */
  Locked?: boolean;

  /**
   * @public
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
   * @public
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
   * @public
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

/**
 * @public
 */
export interface DescribeCopyJobInput {
  /**
   * @public
   * <p>Uniquely identifies a copy job.</p>
   */
  CopyJobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCopyJobOutput {
  /**
   * @public
   * <p>Contains detailed information about a copy job.</p>
   */
  CopyJob?: CopyJob;
}

/**
 * @public
 */
export interface DescribeFrameworkInput {
  /**
   * @public
   * <p>The unique name of a framework.</p>
   */
  FrameworkName: string | undefined;
}

/**
 * @public
 */
export interface DescribeFrameworkOutput {
  /**
   * @public
   * <p>The unique name of a framework.</p>
   */
  FrameworkName?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  FrameworkArn?: string;

  /**
   * @public
   * <p>An optional description of the framework.</p>
   */
  FrameworkDescription?: string;

  /**
   * @public
   * <p>A list of the controls that make up the framework. Each control in the list has a name,
   *          input parameters, and scope.</p>
   */
  FrameworkControls?: FrameworkControl[];

  /**
   * @public
   * <p>The date and time that a framework is created, in ISO 8601 representation. The value of <code>CreationTime</code> is accurate to milliseconds. For example,
   *          2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind
   *          UTC.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The deployment status of a framework. The statuses are:</p>
   *          <p>
   *             <code>CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED |
   *             FAILED</code>
   *          </p>
   */
  DeploymentStatus?: string;

  /**
   * @public
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
   * @public
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>DescribeFrameworkOutput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;
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
   * @public
   * <p>The status of the flag <code>isCrossAccountBackupEnabled</code>.</p>
   */
  GlobalSettings?: Record<string, string>;

  /**
   * @public
   * <p>The date and time that the flag <code>isCrossAccountBackupEnabled</code> was last
   *          updated. This update is in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastUpdateTime</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastUpdateTime?: Date;
}

/**
 * @public
 */
export interface DescribeProtectedResourceInput {
  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeProtectedResourceOutput {
  /**
   * @public
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The type of Amazon Web Services resource saved as a recovery point; for example, an
   *             Amazon EBS volume or an Amazon RDS database.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The date and time that a resource was last backed up, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>LastBackupTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  LastBackupTime?: Date;

  /**
   * @public
   * <p>This is the non-unique name of the resource that
   *          belongs to the specified backup.</p>
   */
  ResourceName?: string;
}

/**
 * @public
 */
export interface DescribeRecoveryPointInput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string | undefined;

  /**
   * @public
   * <p>This is the account ID of the specified backup vault.</p>
   */
  BackupVaultAccountId?: string;
}

/**
 * @public
 * @enum
 */
export const RecoveryPointStatus = {
  COMPLETED: "COMPLETED",
  DELETING: "DELETING",
  EXPIRED: "EXPIRED",
  PARTIAL: "PARTIAL",
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
   * @public
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * @public
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the source vault where the
   *          resource was originally backed up in; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:BackupVault</code>. If the recovery is
   *          restored to the same Amazon Web Services account or Region, this value will be
   *             <code>null</code>.</p>
   */
  SourceBackupVaultArn?: string;

  /**
   * @public
   * <p>An ARN that uniquely identifies a saved resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The type of Amazon Web Services resource to save as a recovery point; for example, an
   *             Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>Contains identifying information about the creation of a recovery point, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan used to create it.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * @public
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * @public
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
   *          <p>For SAP HANA on Amazon EC2 <code>STOPPED</code> status occurs due to user action, application
   *          misconfiguration, or backup failure. To ensure that future continuous backups succeed,
   *          refer to the recovery point status and check SAP HANA for details.</p>
   */
  Status?: RecoveryPointStatus;

  /**
   * @public
   * <p>A status message explaining the status of the recovery point.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The date and time that a recovery point is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The date and time that a job to create a recovery point is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * @public
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * @public
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and
   *             <code>MoveToColdStorageAt</code> timestamps.</p>
   */
  CalculatedLifecycle?: CalculatedLifecycle;

  /**
   * @public
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
   * @public
   * <p>The server-side encryption key used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * @public
   * <p>A Boolean value that is returned as <code>TRUE</code> if the specified recovery point is
   *          encrypted, or <code>FALSE</code> if the recovery point is not encrypted.</p>
   */
  IsEncrypted?: boolean;

  /**
   * @public
   * <p>Specifies the storage class of the recovery point. Valid values are <code>WARM</code> or
   *             <code>COLD</code>.</p>
   */
  StorageClass?: StorageClass;

  /**
   * @public
   * <p>The date and time that a recovery point was last restored, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>LastRestoreTime</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  LastRestoreTime?: Date;

  /**
   * @public
   * <p>This is an ARN that uniquely identifies a parent (composite) recovery point; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  ParentRecoveryPointArn?: string;

  /**
   * @public
   * <p>This is the identifier of a resource within a composite group, such as
   *          nested (child) recovery point belonging to a composite (parent) stack. The
   *          ID is transferred from
   *          the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax">
   *             logical ID</a> within a stack.</p>
   */
  CompositeMemberIdentifier?: string;

  /**
   * @public
   * <p>This returns the boolean value that a recovery point is a parent (composite) job.</p>
   */
  IsParent?: boolean;

  /**
   * @public
   * <p>This is the non-unique name of the resource that
   *          belongs to the specified backup.</p>
   */
  ResourceName?: string;
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
   * @public
   * <p>Returns a list of all services along with the opt-in preferences in the Region.</p>
   */
  ResourceTypeOptInPreference?: Record<string, boolean>;

  /**
   * @public
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

/**
 * @public
 */
export interface DescribeReportJobInput {
  /**
   * @public
   * <p>The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded
   *          string that is at most 1,024 bytes long. The report job ID cannot be edited.</p>
   */
  ReportJobId: string | undefined;
}

/**
 * @public
 * <p>Contains information from your report job about your report destination.</p>
 */
export interface ReportDestination {
  /**
   * @public
   * <p>The unique name of the Amazon S3 bucket that receives your reports.</p>
   */
  S3BucketName?: string;

  /**
   * @public
   * <p>The object key that uniquely identifies your reports in your S3 bucket.</p>
   */
  S3Keys?: string[];
}

/**
 * @public
 * <p>Contains detailed information about a report job. A report job compiles a report based
 *          on a report plan and publishes it to Amazon S3.</p>
 */
export interface ReportJob {
  /**
   * @public
   * <p>The identifier for a report job. A unique, randomly generated, Unicode, UTF-8 encoded
   *          string that is at most 1,024 bytes long. Report job IDs cannot be edited.</p>
   */
  ReportJobId?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ReportPlanArn?: string;

  /**
   * @public
   * <p>Identifies the report template for the report. Reports are built using a report
   *          template. The report templates are: </p>
   *          <p>
   *             <code>RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT |
   *             COPY_JOB_REPORT | RESTORE_JOB_REPORT</code>
   *          </p>
   */
  ReportTemplate?: string;

  /**
   * @public
   * <p>The date and time that a report job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The date and time that a report job is completed, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CompletionTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CompletionTime?: Date;

  /**
   * @public
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
   * @public
   * <p>A message explaining the status of the report job.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The S3 bucket name and S3 keys for the destination where the report job publishes the
   *          report.</p>
   */
  ReportDestination?: ReportDestination;
}

/**
 * @public
 */
export interface DescribeReportJobOutput {
  /**
   * @public
   * <p>A list of information about a report job, including its completion and creation times,
   *          report destination, unique report job ID, Amazon Resource Name (ARN), report template,
   *          status, and status message.</p>
   */
  ReportJob?: ReportJob;
}

/**
 * @public
 */
export interface DescribeReportPlanInput {
  /**
   * @public
   * <p>The unique name of a report plan.</p>
   */
  ReportPlanName: string | undefined;
}

/**
 * @public
 * <p>Contains detailed information about a report plan.</p>
 */
export interface ReportPlan {
  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ReportPlanArn?: string;

  /**
   * @public
   * <p>The unique name of the report plan. This name is between 1 and 256 characters starting
   *          with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores
   *          (_).</p>
   */
  ReportPlanName?: string;

  /**
   * @public
   * <p>An optional description of the report plan with a maximum 1,024 characters.</p>
   */
  ReportPlanDescription?: string;

  /**
   * @public
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
   * @public
   * <p>Contains information about where and how to deliver your reports, specifically your
   *             Amazon S3 bucket name, S3 key prefix, and the formats of your reports.</p>
   */
  ReportDeliveryChannel?: ReportDeliveryChannel;

  /**
   * @public
   * <p>The deployment status of a report plan. The statuses are:</p>
   *          <p>
   *             <code>CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS |
   *          COMPLETED</code>
   *          </p>
   */
  DeploymentStatus?: string;

  /**
   * @public
   * <p>The date and time that a report plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The date and time that a report job associated with this report plan last attempted to
   *          run, in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastAttemptedExecutionTime</code> is accurate to milliseconds. For example, the
   *          value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastAttemptedExecutionTime?: Date;

  /**
   * @public
   * <p>The date and time that a report job associated with this report plan last successfully
   *          ran, in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastSuccessfulExecutionTime</code> is accurate to milliseconds. For example, the
   *          value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastSuccessfulExecutionTime?: Date;
}

/**
 * @public
 */
export interface DescribeReportPlanOutput {
  /**
   * @public
   * <p>Returns details about the report plan that is specified by its name. These details
   *          include the report plan's Amazon Resource Name (ARN), description, settings, delivery
   *          channel, deployment status, creation time, and last attempted and successful run
   *          times.</p>
   */
  ReportPlan?: ReportPlan;
}

/**
 * @public
 */
export interface DescribeRestoreJobInput {
  /**
   * @public
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId: string | undefined;
}

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
 */
export interface DescribeRestoreJobOutput {
  /**
   * @public
   * <p>Returns the account ID that owns the restore job.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId?: string;

  /**
   * @public
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * @public
   * <p>The date and time that a restore job is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The date and time that a job to restore a recovery point is completed, in Unix format
   *          and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate
   *          to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * @public
   * <p>Status code specifying the state of the job that is initiated by Backup to
   *          restore a recovery point.</p>
   */
  Status?: RestoreJobStatus;

  /**
   * @public
   * <p>A message showing the status of a job to restore a recovery point.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>Contains an estimated percentage that is complete of a job at the time the job status
   *          was queried.</p>
   */
  PercentDone?: string;

  /**
   * @public
   * <p>The size, in bytes, of the restored resource.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * @public
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * @public
   * <p>The amount of time in minutes that a job restoring a recovery point is expected to
   *          take.</p>
   */
  ExpectedCompletionTimeMinutes?: number;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource whose recovery point
   *          is being restored. The format of the ARN depends on the resource type of the backed-up
   *          resource.</p>
   */
  CreatedResourceArn?: string;

  /**
   * @public
   * <p>Returns metadata associated with a restore job listed by resource type.</p>
   */
  ResourceType?: string;
}

/**
 * @public
 */
export interface DisassociateRecoveryPointInput {
  /**
   * @public
   * <p>The unique name of an Backup vault.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an Backup recovery
   *          point.</p>
   */
  RecoveryPointArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateRecoveryPointFromParentInput {
  /**
   * @public
   * <p>This is the name of a logical container where the child (nested) recovery point
   *          is stored. Backup vaults are identified by names that are unique to the account used
   *          to create them and the Amazon Web Services Region where they are created. They consist of lowercase
   *          letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * @public
   * <p>This is the Amazon Resource Name (ARN) that uniquely identifies the child
   *          (nested) recovery point; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</code>
   *          </p>
   */
  RecoveryPointArn: string | undefined;
}

/**
 * @public
 */
export interface ExportBackupPlanTemplateInput {
  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;
}

/**
 * @public
 */
export interface ExportBackupPlanTemplateOutput {
  /**
   * @public
   * <p>The body of a backup plan template in JSON format.</p>
   *          <note>
   *             <p>This is a signed JSON document that cannot be modified before being passed to
   *                <code>GetBackupPlanFromJSON.</code>
   *             </p>
   *          </note>
   */
  BackupPlanTemplateJson?: string;
}

/**
 * @public
 */
export interface GetBackupPlanInput {
  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * @public
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version IDs cannot be edited.</p>
   */
  VersionId?: string;
}

/**
 * @public
 */
export interface GetBackupPlanOutput {
  /**
   * @public
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   */
  BackupPlan?: BackupPlan;

  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   */
  BackupPlanArn?: string;

  /**
   * @public
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version IDs cannot be edited.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>The date and time that a backup plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The date and time that a backup plan is deleted, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  DeletionDate?: Date;

  /**
   * @public
   * <p>The last time a job to back up resources was run with this backup plan. A date and time,
   *          in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastExecutionDate</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastExecutionDate?: Date;

  /**
   * @public
   * <p>Contains a list of <code>BackupOptions</code> for each resource type. The list is
   *          populated only if the advanced option is set for the backup plan.</p>
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[];
}

/**
 * @public
 */
export interface GetBackupPlanFromJSONInput {
  /**
   * @public
   * <p>A customer-supplied backup plan document in JSON format.</p>
   */
  BackupPlanTemplateJson: string | undefined;
}

/**
 * @public
 */
export interface GetBackupPlanFromJSONOutput {
  /**
   * @public
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   */
  BackupPlan?: BackupPlan;
}

/**
 * @public
 */
export interface GetBackupPlanFromTemplateInput {
  /**
   * @public
   * <p>Uniquely identifies a stored backup plan template.</p>
   */
  BackupPlanTemplateId: string | undefined;
}

/**
 * @public
 */
export interface GetBackupPlanFromTemplateOutput {
  /**
   * @public
   * <p>Returns the body of a backup plan based on the target template, including the name,
   *          rules, and backup vault of the plan.</p>
   */
  BackupPlanDocument?: BackupPlan;
}

/**
 * @public
 */
export interface GetBackupSelectionInput {
  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * @public
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup
   *          plan.</p>
   */
  SelectionId: string | undefined;
}

/**
 * @public
 */
export interface GetBackupSelectionOutput {
  /**
   * @public
   * <p>Specifies the body of a request to assign a set of resources to a backup plan.</p>
   */
  BackupSelection?: BackupSelection;

  /**
   * @public
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup
   *          plan.</p>
   */
  SelectionId?: string;

  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * @public
   * <p>The date and time a backup selection is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice.</p>
   */
  CreatorRequestId?: string;
}

/**
 * @public
 */
export interface GetBackupVaultAccessPolicyInput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface GetBackupVaultAccessPolicyOutput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * @public
   * <p>The backup vault access policy document in JSON format.</p>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface GetBackupVaultNotificationsInput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

/**
 * @public
 */
export interface GetBackupVaultNotificationsOutput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * @public
   * <p>An ARN that uniquely identifies an Amazon Simple Notification Service (Amazon SNS)
   *          topic; for example, <code>arn:aws:sns:us-west-2:111122223333:MyTopic</code>.</p>
   */
  SNSTopicArn?: string;

  /**
   * @public
   * <p>An array of events that indicate the status of jobs to back up resources to the backup
   *          vault.</p>
   */
  BackupVaultEvents?: BackupVaultEvent[];
}

/**
 * @public
 */
export interface GetLegalHoldInput {
  /**
   * @public
   * <p>This is the ID required to use <code>GetLegalHold</code>. This unique ID
   *          is associated with a specific legal hold.</p>
   */
  LegalHoldId: string | undefined;
}

/**
 * @public
 */
export interface GetLegalHoldOutput {
  /**
   * @public
   * <p>This is the string title of the legal hold.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>This is the status of the legal hold. Statuses can be
   *          <code>ACTIVE</code>, <code>CREATING</code>, <code>CANCELED</code>, and
   *          <code>CANCELING</code>.</p>
   */
  Status?: LegalHoldStatus;

  /**
   * @public
   * <p>This is the returned string description of the legal hold.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>String describing the reason for removing the legal hold.</p>
   */
  CancelDescription?: string;

  /**
   * @public
   * <p>This is the returned ID associated with a specified legal hold.</p>
   */
  LegalHoldId?: string;

  /**
   * @public
   * <p>This is the returned framework ARN for the specified legal hold.
   *          An Amazon Resource Name (ARN) uniquely identifies a resource. The format
   *          of the ARN depends on the resource type.</p>
   */
  LegalHoldArn?: string;

  /**
   * @public
   * <p>Time in number format when legal hold was created.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>Time in number when legal hold was cancelled.</p>
   */
  CancellationDate?: Date;

  /**
   * @public
   * <p>This is the date and time until which the legal hold record will
   *          be retained.</p>
   */
  RetainRecordUntil?: Date;

  /**
   * @public
   * <p>This specifies criteria to assign
   *          a set of resources, such as resource types or backup vaults.</p>
   */
  RecoveryPointSelection?: RecoveryPointSelection;
}

/**
 * @public
 */
export interface GetRecoveryPointRestoreMetadataInput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string | undefined;

  /**
   * @public
   * <p>This is the account ID of the specified backup vault.</p>
   */
  BackupVaultAccountId?: string;
}

/**
 * @public
 */
export interface GetRecoveryPointRestoreMetadataOutput {
  /**
   * @public
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * @public
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * @public
   * <p>The set of metadata key-value pairs that describe the original configuration of the
   *          backed-up resource. These values vary depending on the service that is being
   *          restored.</p>
   */
  RestoreMetadata?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSupportedResourceTypesOutput {
  /**
   * @public
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

/**
 * @public
 */
export interface ListBackupJobsInput {
  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Returns only backup jobs that match the specified resource Amazon Resource Name
   *          (ARN).</p>
   */
  ByResourceArn?: string;

  /**
   * @public
   * <p>Returns only backup jobs that are in the specified state.</p>
   */
  ByState?: BackupJobState;

  /**
   * @public
   * <p>Returns only backup jobs that will be stored in the specified backup vault. Backup
   *          vaults are identified by names that are unique to the account used to create them and the
   *             Amazon Web Services Region where they are created. They consist of lowercase letters,
   *          numbers, and hyphens.</p>
   */
  ByBackupVaultName?: string;

  /**
   * @public
   * <p>Returns only backup jobs that were created before the specified date.</p>
   */
  ByCreatedBefore?: Date;

  /**
   * @public
   * <p>Returns only backup jobs that were created after the specified date.</p>
   */
  ByCreatedAfter?: Date;

  /**
   * @public
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
   * @public
   * <p>The account ID to list the jobs from. Returns only backup jobs associated with the
   *          specified account ID.</p>
   *          <p>If used from an Organizations management account, passing <code>*</code> returns
   *          all jobs across the organization.</p>
   */
  ByAccountId?: string;

  /**
   * @public
   * <p>Returns only backup jobs completed after a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   */
  ByCompleteAfter?: Date;

  /**
   * @public
   * <p>Returns only backup jobs completed before a date expressed in Unix format and
   *          Coordinated Universal Time (UTC).</p>
   */
  ByCompleteBefore?: Date;

  /**
   * @public
   * <p>This is a filter to list child (nested) jobs based on parent job ID.</p>
   */
  ByParentJobId?: string;
}

/**
 * @public
 */
export interface ListBackupJobsOutput {
  /**
   * @public
   * <p>An array of structures containing metadata about your backup jobs returned in JSON
   *          format.</p>
   */
  BackupJobs?: BackupJob[];

  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListBackupPlansInput {
  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A Boolean value with a default value of <code>FALSE</code> that returns deleted backup
   *          plans when set to <code>TRUE</code>.</p>
   */
  IncludeDeleted?: boolean;
}

/**
 * @public
 */
export interface ListBackupPlansOutput {
  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of backup plan list items containing metadata about your saved backup
   *          plans.</p>
   */
  BackupPlansList?: BackupPlansListMember[];
}

/**
 * @public
 */
export interface ListBackupPlanTemplatesInput {
  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListBackupPlanTemplatesOutput {
  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of template list items containing metadata about your saved templates.</p>
   */
  BackupPlanTemplatesList?: BackupPlanTemplatesListMember[];
}

/**
 * @public
 */
export interface ListBackupPlanVersionsInput {
  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListBackupPlanVersionsOutput {
  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of version list items containing metadata about your backup plans.</p>
   */
  BackupPlanVersionsList?: BackupPlansListMember[];
}

/**
 * @public
 */
export interface ListBackupSelectionsInput {
  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListBackupSelectionsOutput {
  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of backup selection list items containing metadata about each resource in the
   *          list.</p>
   */
  BackupSelectionsList?: BackupSelectionsListMember[];
}

/**
 * @public
 */
export interface ListBackupVaultsInput {
  /**
   * @public
   * <p>This parameter will sort the list of vaults by vault type.</p>
   */
  ByVaultType?: VaultType;

  /**
   * @public
   * <p>This parameter will sort the list of vaults by shared vaults.</p>
   */
  ByShared?: boolean;

  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListBackupVaultsOutput {
  /**
   * @public
   * <p>An array of backup vault list members containing vault metadata, including Amazon
   *          Resource Name (ARN), display name, creation date, number of saved recovery points, and
   *          encryption information if the resources saved in the backup vault are encrypted.</p>
   */
  BackupVaultList?: BackupVaultListMember[];

  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCopyJobsInput {
  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return maxResults number of items, NextToken allows you to return more items in
   *          your list starting at the location pointed to by the next token. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Returns only copy jobs that match the specified resource Amazon Resource Name (ARN).
   *       </p>
   */
  ByResourceArn?: string;

  /**
   * @public
   * <p>Returns only copy jobs that are in the specified state.</p>
   */
  ByState?: CopyJobState;

  /**
   * @public
   * <p>Returns only copy jobs that were created before the specified date.</p>
   */
  ByCreatedBefore?: Date;

  /**
   * @public
   * <p>Returns only copy jobs that were created after the specified date.</p>
   */
  ByCreatedAfter?: Date;

  /**
   * @public
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
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a source backup vault to copy
   *          from; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.
   *       </p>
   */
  ByDestinationVaultArn?: string;

  /**
   * @public
   * <p>The account ID to list the jobs from. Returns only copy jobs associated with the
   *          specified account ID.</p>
   */
  ByAccountId?: string;

  /**
   * @public
   * <p>Returns only copy jobs completed before a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   */
  ByCompleteBefore?: Date;

  /**
   * @public
   * <p>Returns only copy jobs completed after a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   */
  ByCompleteAfter?: Date;

  /**
   * @public
   * <p>This is a filter to list child (nested) jobs based on parent job ID.</p>
   */
  ByParentJobId?: string;
}

/**
 * @public
 */
export interface ListCopyJobsOutput {
  /**
   * @public
   * <p>An array of structures containing metadata about your copy jobs returned in JSON format.
   *       </p>
   */
  CopyJobs?: CopyJob[];

  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return maxResults number of items, NextToken allows you to return more items in
   *          your list starting at the location pointed to by the next token. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFrameworksInput {
  /**
   * @public
   * <p>The number of desired results from 1 to 1000. Optional. If unspecified, the query will
   *          return 1 MB of data.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains detailed information about a framework. Frameworks contain controls, which
 *          evaluate and report on your backup events and resources. Frameworks generate daily
 *          compliance results.</p>
 */
export interface Framework {
  /**
   * @public
   * <p>The unique name of a framework. This name is between 1 and 256 characters, starting with
   *          a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).</p>
   */
  FrameworkName?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  FrameworkArn?: string;

  /**
   * @public
   * <p>An optional description of the framework with a maximum 1,024 characters.</p>
   */
  FrameworkDescription?: string;

  /**
   * @public
   * <p>The number of controls contained by the framework.</p>
   */
  NumberOfControls?: number;

  /**
   * @public
   * <p>The date and time that a framework is created, in ISO 8601 representation.
   *          The value of <code>CreationTime</code> is accurate to milliseconds. For example,
   *           2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind
   *           UTC.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The deployment status of a framework. The statuses are:</p>
   *          <p>
   *             <code>CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED |
   *             FAILED</code>
   *          </p>
   */
  DeploymentStatus?: string;
}

/**
 * @public
 */
export interface ListFrameworksOutput {
  /**
   * @public
   * <p>A list of frameworks with details for each framework, including the framework name,
   *          Amazon Resource Name (ARN), description, number of controls, creation time, and deployment
   *          status.</p>
   */
  Frameworks?: Framework[];

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLegalHoldsInput {
  /**
   * @public
   * <p>The next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>maxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of resource list items to be returned.</p>
   */
  MaxResults?: number;
}

/**
 * @public
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
   * @public
   * <p>This is the title of a legal hold.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>This is the status of the legal hold. Statuses can be
   *          <code>ACTIVE</code>, <code>CREATING</code>, <code>CANCELED</code>, and
   *          <code>CANCELING</code>.</p>
   */
  Status?: LegalHoldStatus;

  /**
   * @public
   * <p>This is the description of a legal hold.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>ID of specific legal hold on one or more recovery points.</p>
   */
  LegalHoldId?: string;

  /**
   * @public
   * <p>This is an Amazon Resource Number (ARN) that uniquely identifies the legal hold; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  LegalHoldArn?: string;

  /**
   * @public
   * <p>This is the time in number format when legal hold was created.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>This is the time in number format when legal hold was cancelled.</p>
   */
  CancellationDate?: Date;
}

/**
 * @public
 */
export interface ListLegalHoldsOutput {
  /**
   * @public
   * <p>The next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>maxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>This is an array of returned legal holds, both active and previous.</p>
   */
  LegalHolds?: LegalHold[];
}

/**
 * @public
 */
export interface ListProtectedResourcesInput {
  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A structure that contains information about a backed-up resource.</p>
 */
export interface ProtectedResource {
  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The type of Amazon Web Services resource; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For
   *          Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is
   *             Amazon EC2.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The date and time a resource was last backed up, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>LastBackupTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  LastBackupTime?: Date;

  /**
   * @public
   * <p>This is the non-unique name of the resource that
   *          belongs to the specified backup.</p>
   */
  ResourceName?: string;
}

/**
 * @public
 */
export interface ListProtectedResourcesOutput {
  /**
   * @public
   * <p>An array of resources successfully backed up by Backup including the time
   *          the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource
   *          type.</p>
   */
  Results?: ProtectedResource[];

  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProtectedResourcesByBackupVaultInput {
  /**
   * @public
   * <p>This is the list of protected resources by backup vault within the vault(s) you specify by name.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * @public
   * <p>This is the list of protected resources by backup vault within the vault(s) you specify by account ID.</p>
   */
  BackupVaultAccountId?: string;

  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListProtectedResourcesByBackupVaultOutput {
  /**
   * @public
   * <p>These are the results returned for the request ListProtectedResourcesByBackupVault.</p>
   */
  Results?: ProtectedResource[];

  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRecoveryPointsByBackupVaultInput {
  /**
   * @public
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
   * @public
   * <p>This parameter will sort the list of recovery points by account ID.</p>
   */
  BackupVaultAccountId?: string;

  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Returns only recovery points that match the specified resource Amazon Resource Name
   *          (ARN).</p>
   */
  ByResourceArn?: string;

  /**
   * @public
   * <p>Returns only recovery points that match the specified resource type.</p>
   */
  ByResourceType?: string;

  /**
   * @public
   * <p>Returns only recovery points that match the specified backup plan ID.</p>
   */
  ByBackupPlanId?: string;

  /**
   * @public
   * <p>Returns only recovery points that were created before the specified timestamp.</p>
   */
  ByCreatedBefore?: Date;

  /**
   * @public
   * <p>Returns only recovery points that were created after the specified timestamp.</p>
   */
  ByCreatedAfter?: Date;

  /**
   * @public
   * <p>This returns only recovery points that match the specified parent (composite)
   *          recovery point Amazon Resource Name (ARN).</p>
   */
  ByParentRecoveryPointArn?: string;
}

/**
 * @public
 * <p>Contains detailed information about the recovery points stored in a backup vault.</p>
 */
export interface RecoveryPointByBackupVault {
  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * @public
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * @public
   * <p>The backup vault where the recovery point was originally copied from. If the recovery
   *          point is restored to the same account this value will be <code>null</code>.</p>
   */
  SourceBackupVaultArn?: string;

  /**
   * @public
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The type of Amazon Web Services resource saved as a recovery point; for example, an
   *             Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. For Windows Volume Shadow Copy Service (VSS) backups, the only
   *          supported resource type is Amazon EC2.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>Contains identifying information about the creation of a recovery point, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan that is used to create it.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * @public
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * @public
   * <p>A status code specifying the state of the recovery point.</p>
   */
  Status?: RecoveryPointStatus;

  /**
   * @public
   * <p>A message explaining the reason of the recovery point deletion failure.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The date and time a recovery point is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The date and time a job to restore a recovery point is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * @public
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * @public
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and
   *             <code>MoveToColdStorageAt</code> timestamps.</p>
   */
  CalculatedLifecycle?: CalculatedLifecycle;

  /**
   * @public
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
   * @public
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * @public
   * <p>A Boolean value that is returned as <code>TRUE</code> if the specified recovery point is
   *          encrypted, or <code>FALSE</code> if the recovery point is not encrypted.</p>
   */
  IsEncrypted?: boolean;

  /**
   * @public
   * <p>The date and time a recovery point was last restored, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>LastRestoreTime</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  LastRestoreTime?: Date;

  /**
   * @public
   * <p>This is the Amazon Resource Name (ARN) of the parent (composite)
   *          recovery point.</p>
   */
  ParentRecoveryPointArn?: string;

  /**
   * @public
   * <p>This is the identifier of a resource within a composite group, such as
   *          nested (child) recovery point belonging to a composite (parent) stack. The
   *          ID is transferred from
   *          the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html#resources-section-structure-syntax">
   *             logical ID</a> within a stack.</p>
   */
  CompositeMemberIdentifier?: string;

  /**
   * @public
   * <p>This is a boolean value indicating this is
   *          a parent (composite) recovery point.</p>
   */
  IsParent?: boolean;

  /**
   * @public
   * <p>This is the non-unique name of the resource that
   *          belongs to the specified backup.</p>
   */
  ResourceName?: string;
}

/**
 * @public
 */
export interface ListRecoveryPointsByBackupVaultOutput {
  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of objects that contain detailed information about recovery points saved in a
   *          backup vault.</p>
   */
  RecoveryPoints?: RecoveryPointByBackupVault[];
}

/**
 * @public
 */
export interface ListRecoveryPointsByLegalHoldInput {
  /**
   * @public
   * <p>This is the ID of the legal hold.</p>
   */
  LegalHoldId: string | undefined;

  /**
   * @public
   * <p>This is the next item following a partial list of returned resources. For example, if a request
   *          is made to return <code>maxResults</code> number of resources, <code>NextToken</code>
   *          allows you to return more items in your list starting at the location pointed to by the
   *          next token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>This is the maximum number of resource list items to be returned.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>This is a recovery point which is a child (nested) recovery point
 *          of a parent (composite) recovery point. These recovery points
 *          can be disassociated from their parent (composite) recovery
 *          point, in which case they will no longer be a member.</p>
 */
export interface RecoveryPointMember {
  /**
   * @public
   * <p>This is the Amazon Resource Name (ARN) of the parent (composite)
   *          recovery point.</p>
   */
  RecoveryPointArn?: string;

  /**
   * @public
   * <p>This is the Amazon Resource Name (ARN) that uniquely identifies
   *          a saved resource.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>This is the Amazon Web Services resource type that is saved as
   *       a recovery point.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>This is the name of the backup vault
   *          (the logical container in which backups are stored).</p>
   */
  BackupVaultName?: string;
}

/**
 * @public
 */
export interface ListRecoveryPointsByLegalHoldOutput {
  /**
   * @public
   * <p>This is a list of the recovery points returned by
   *          <code>ListRecoveryPointsByLegalHold</code>.</p>
   */
  RecoveryPoints?: RecoveryPointMember[];

  /**
   * @public
   * <p>This return is the next item following a partial list of returned resources.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRecoveryPointsByResourceInput {
  /**
   * @public
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be returned.</p>
   *          <note>
   *             <p>Amazon RDS requires a value of at least 20.</p>
   *          </note>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains detailed information about a saved recovery point.</p>
 */
export interface RecoveryPointByResource {
  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * @public
   * <p>The date and time a recovery point is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>A status code specifying the state of the recovery point.</p>
   */
  Status?: RecoveryPointStatus;

  /**
   * @public
   * <p>A message explaining the reason of the recovery point deletion failure.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * @public
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeBytes?: number;

  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * @public
   * <p>This is a boolean value indicating this is
   *          a parent (composite) recovery point.</p>
   */
  IsParent?: boolean;

  /**
   * @public
   * <p>This is the Amazon Resource Name (ARN) of the parent (composite)
   *          recovery point.</p>
   */
  ParentRecoveryPointArn?: string;

  /**
   * @public
   * <p>This is the non-unique name of the resource that
   *          belongs to the specified backup.</p>
   */
  ResourceName?: string;
}

/**
 * @public
 */
export interface ListRecoveryPointsByResourceOutput {
  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of objects that contain detailed information about recovery points of the
   *          specified resource type.</p>
   *          <note>
   *             <p>Only Amazon EFS and Amazon EC2 recovery points return
   *             BackupVaultName.</p>
   *          </note>
   */
  RecoveryPoints?: RecoveryPointByResource[];
}

/**
 * @public
 */
export interface ListReportJobsInput {
  /**
   * @public
   * <p>Returns only report jobs with the specified report plan name.</p>
   */
  ByReportPlanName?: string;

  /**
   * @public
   * <p>Returns only report jobs that were created before the date and time specified in Unix
   *          format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents
   *          Friday, January 26, 2018 12:11:30 AM.</p>
   */
  ByCreationBefore?: Date;

  /**
   * @public
   * <p>Returns only report jobs that were created after the date and time specified in Unix
   *          format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents
   *          Friday, January 26, 2018 12:11:30 AM.</p>
   */
  ByCreationAfter?: Date;

  /**
   * @public
   * <p>Returns only report jobs that are in the specified status. The statuses are:</p>
   *          <p>
   *             <code>CREATED | RUNNING | COMPLETED | FAILED</code>
   *          </p>
   */
  ByStatus?: string;

  /**
   * @public
   * <p>The number of desired results from 1 to 1000. Optional. If unspecified, the query will
   *          return 1 MB of data.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListReportJobsOutput {
  /**
   * @public
   * <p>Details about your report jobs in JSON format.</p>
   */
  ReportJobs?: ReportJob[];

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListReportPlansInput {
  /**
   * @public
   * <p>The number of desired results from 1 to 1000. Optional. If unspecified, the query will
   *          return 1 MB of data.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListReportPlansOutput {
  /**
   * @public
   * <p>A list of your report plans with detailed information for each plan. This information
   *          includes the Amazon Resource Name (ARN), report plan name, description, settings, delivery
   *          channel, deployment status, creation time, and last times the report plan attempted to and
   *          successfully ran.</p>
   */
  ReportPlans?: ReportPlan[];

  /**
   * @public
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *          used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRestoreJobsInput {
  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The account ID to list the jobs from. Returns only restore jobs associated with the
   *          specified account ID.</p>
   */
  ByAccountId?: string;

  /**
   * @public
   * <p>Returns only restore jobs that were created before the specified date.</p>
   */
  ByCreatedBefore?: Date;

  /**
   * @public
   * <p>Returns only restore jobs that were created after the specified date.</p>
   */
  ByCreatedAfter?: Date;

  /**
   * @public
   * <p>Returns only restore jobs associated with the specified job status.</p>
   */
  ByStatus?: RestoreJobStatus;

  /**
   * @public
   * <p>Returns only copy jobs completed before a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   */
  ByCompleteBefore?: Date;

  /**
   * @public
   * <p>Returns only copy jobs completed after a date expressed in Unix format and Coordinated
   *          Universal Time (UTC).</p>
   */
  ByCompleteAfter?: Date;
}

/**
 * @public
 * <p>Contains metadata about a restore job.</p>
 */
export interface RestoreJobsListMember {
  /**
   * @public
   * <p>The account ID that owns the restore job.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId?: string;

  /**
   * @public
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * @public
   * <p>The date and time a restore job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The date and time a job to restore a recovery point is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * @public
   * <p>A status code specifying the state of the job initiated by Backup to restore
   *          a recovery point.</p>
   */
  Status?: RestoreJobStatus;

  /**
   * @public
   * <p>A detailed message explaining the status of the job to restore a recovery point.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>Contains an estimated percentage complete of a job at the time the job status was
   *          queried.</p>
   */
  PercentDone?: string;

  /**
   * @public
   * <p>The size, in bytes, of the restored resource.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * @public
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * @public
   * <p>The amount of time in minutes that a job restoring a recovery point is expected to
   *          take.</p>
   */
  ExpectedCompletionTimeMinutes?: number;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  CreatedResourceArn?: string;

  /**
   * @public
   * <p>The resource type of the listed restore jobs; for example, an Amazon Elastic Block Store
   *             (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
   *          For Windows Volume Shadow Copy Service (VSS) backups, the only supported resource type is
   *             Amazon EC2.</p>
   */
  ResourceType?: string;
}

/**
 * @public
 */
export interface ListRestoreJobsOutput {
  /**
   * @public
   * <p>An array of objects that contain detailed information about jobs to restore saved
   *          resources.</p>
   */
  RestoreJobs?: RestoreJobsListMember[];

  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsInput {
  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the type of resource. Valid targets for <code>ListTags</code> are recovery
   *          points, backup plans, and backup vaults.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTagsOutput {
  /**
   * @public
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>To help organize your resources, you can assign your own metadata to the resources you
   *          create. Each tag is a key-value pair.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutBackupVaultAccessPolicyInput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * @public
   * <p>The backup vault access policy document in JSON format.</p>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface PutBackupVaultLockConfigurationInput {
  /**
   * @public
   * <p>The Backup Vault Lock configuration that specifies the name of the backup
   *          vault it protects.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * @public
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
   * @public
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
   * @public
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

/**
 * @public
 */
export interface PutBackupVaultNotificationsInput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for
   *          example, <code>arn:aws:sns:us-west-2:111122223333:MyVaultTopic</code>.</p>
   */
  SNSTopicArn: string | undefined;

  /**
   * @public
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
  BackupVaultEvents: BackupVaultEvent[] | undefined;
}

/**
 * @public
 */
export interface StartBackupJobInput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>StartBackupJob</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;

  /**
   * @public
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
   */
  StartWindowMinutes?: number;

  /**
   * @public
   * <p>A value in minutes during which a successfully started backup must complete, or else
   *             Backup will cancel the job. This value is optional. This value begins
   *          counting down from when the backup was scheduled. It does not add additional time for
   *             <code>StartWindowMinutes</code>, or if the backup started later than scheduled.</p>
   *          <p>Like <code>StartWindowMinutes</code>, this parameter has a maximum value of
   *          100 years (52,560,000 minutes).</p>
   */
  CompleteWindowMinutes?: number;

  /**
   * @public
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
   *          <p>This parameter has a maximum value of 100 years (36,500 days).</p>
   */
  Lifecycle?: Lifecycle;

  /**
   * @public
   * <p>To help organize your resources, you can assign your own metadata to the resources that
   *          you create. Each tag is a key-value pair.</p>
   */
  RecoveryPointTags?: Record<string, string>;

  /**
   * @public
   * <p>Specifies the backup option for a selected resource. This option is only available for
   *          Windows Volume Shadow Copy Service (VSS) backup jobs.</p>
   *          <p>Valid values: Set to <code>"WindowsVSS":"enabled"</code> to enable the
   *          <code>WindowsVSS</code> backup option and create a Windows VSS backup. Set to
   *          <code>"WindowsVSS""disabled"</code> to create a regular backup. The
   *          <code>WindowsVSS</code> option is not enabled by default.</p>
   */
  BackupOptions?: Record<string, string>;
}

/**
 * @public
 */
export interface StartBackupJobOutput {
  /**
   * @public
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   */
  BackupJobId?: string;

  /**
   * @public
   * <p>
   *             <i>Note: This field is only returned for Amazon EFS and Advanced DynamoDB
   *          resources.</i>
   *          </p>
   *          <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * @public
   * <p>The date and time that a backup job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>This is a returned boolean value indicating this is a parent (composite)
   *          backup job.</p>
   */
  IsParent?: boolean;
}

/**
 * @public
 */
export interface StartCopyJobInput {
  /**
   * @public
   * <p>An ARN that uniquely identifies a recovery point to use for the copy job; for example,
   *          arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
   *       </p>
   */
  RecoveryPointArn: string | undefined;

  /**
   * @public
   * <p>The name of a logical source container where backups are stored. Backup vaults are
   *          identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers,
   *          and hyphens.</p>
   */
  SourceBackupVaultName: string | undefined;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a destination backup vault to
   *          copy to; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  DestinationBackupVaultArn: string | undefined;

  /**
   * @public
   * <p>Specifies the IAM role ARN used to copy the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>StartCopyJob</code>. Retrying a successful request with the same idempotency
   *          token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface StartCopyJobOutput {
  /**
   * @public
   * <p>Uniquely identifies a copy job.</p>
   */
  CopyJobId?: string;

  /**
   * @public
   * <p>The date and time that a copy job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>This is a returned boolean value indicating this is a parent (composite)
   *          copy job.</p>
   */
  IsParent?: boolean;
}

/**
 * @public
 */
export interface StartReportJobInput {
  /**
   * @public
   * <p>The unique name of a report plan.</p>
   */
  ReportPlanName: string | undefined;

  /**
   * @public
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>StartReportJobInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;
}

/**
 * @public
 */
export interface StartReportJobOutput {
  /**
   * @public
   * <p>The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded
   *          string that is at most 1,024 bytes long. The report job ID cannot be edited.</p>
   */
  ReportJobId?: string;
}

/**
 * @public
 */
export interface StartRestoreJobInput {
  /**
   * @public
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that Backup uses to create
   *          the target resource; for example:
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * @public
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>StartRestoreJob</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;

  /**
   * @public
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
   *                   <code>CloudFormation</code> for CloudFormation</p>
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
   *                   <code>Storage Gateway</code> for Storage Gateway</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> for Amazon S3</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Timestream</code> for Amazon Timestream</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VirtualMachine</code> for virtual machines</p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>This is an optional parameter. If this equals <code>True</code>, tags included in the backup
   *       will be copied to the restored resource.</p>
   *          <p>This can only be applied to backups created through Backup.</p>
   */
  CopySourceTagsToRestoredResource?: boolean;
}

/**
 * @public
 */
export interface StartRestoreJobOutput {
  /**
   * @public
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId?: string;
}

/**
 * @public
 */
export interface StopBackupJobInput {
  /**
   * @public
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   */
  BackupJobId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the type of
   *          the tagged resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Key-value pairs that are used to help organize your resources. You can assign your own
   *          metadata to the resources you create. For clarity, this is the structure to assign tags:
   *             <code>[\{"Key":"string","Value":"string"\}]</code>.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * @public
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the type of
   *          the tagged resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A list of keys to identify which key-value tags to remove from a resource.</p>
   */
  TagKeyList: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateBackupPlanInput {
  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * @public
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   */
  BackupPlan: BackupPlanInput | undefined;
}

/**
 * @public
 */
export interface UpdateBackupPlanOutput {
  /**
   * @public
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   */
  BackupPlanArn?: string;

  /**
   * @public
   * <p>The date and time a backup plan is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version Ids cannot be edited.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Contains a list of <code>BackupOptions</code> for each resource type.</p>
   */
  AdvancedBackupSettings?: AdvancedBackupSetting[];
}

/**
 * @public
 */
export interface UpdateFrameworkInput {
  /**
   * @public
   * <p>The unique name of a framework. This name is between 1 and 256 characters, starting with
   *          a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).</p>
   */
  FrameworkName: string | undefined;

  /**
   * @public
   * <p>An optional description of the framework with a maximum 1,024 characters.</p>
   */
  FrameworkDescription?: string;

  /**
   * @public
   * <p>A list of the controls that make up the framework. Each control in the list has a name,
   *          input parameters, and scope.</p>
   */
  FrameworkControls?: FrameworkControl[];

  /**
   * @public
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>UpdateFrameworkInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;
}

/**
 * @public
 */
export interface UpdateFrameworkOutput {
  /**
   * @public
   * <p>The unique name of a framework. This name is between 1 and 256 characters, starting with
   *          a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).</p>
   */
  FrameworkName?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  FrameworkArn?: string;

  /**
   * @public
   * <p>The date and time that a framework is created, in ISO 8601 representation. The value of <code>CreationTime</code> is accurate to milliseconds. For example,
   *          2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind
   *          UTC.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsInput {
  /**
   * @public
   * <p>A value for <code>isCrossAccountBackupEnabled</code> and a Region. Example:
   *             <code>update-global-settings --global-settings isCrossAccountBackupEnabled=false
   *             --region us-west-2</code>.</p>
   */
  GlobalSettings?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateRecoveryPointLifecycleInput {
  /**
   * @public
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Amazon Web Services
   *          Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string | undefined;

  /**
   * @public
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

/**
 * @public
 */
export interface UpdateRecoveryPointLifecycleOutput {
  /**
   * @public
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * @public
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
   * @public
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and
   *             <code>MoveToColdStorageAt</code> timestamps.</p>
   */
  CalculatedLifecycle?: CalculatedLifecycle;
}

/**
 * @public
 */
export interface UpdateRegionSettingsInput {
  /**
   * @public
   * <p>Updates the list of services along with the opt-in preferences for the Region.</p>
   */
  ResourceTypeOptInPreference?: Record<string, boolean>;

  /**
   * @public
   * <p>Enables or disables full Backup management of backups for a resource type.
   *          To enable full Backup management for DynamoDB along with <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html">
   *             Backup's advanced DynamoDB backup features</a>, follow the
   *          procedure to <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html#advanced-ddb-backup-enable-cli"> enable advanced DynamoDB backup programmatically</a>.</p>
   */
  ResourceTypeManagementPreference?: Record<string, boolean>;
}

/**
 * @public
 */
export interface UpdateReportPlanInput {
  /**
   * @public
   * <p>The unique name of the report plan. This name is between 1 and 256 characters, starting
   *          with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores
   *          (_).</p>
   */
  ReportPlanName: string | undefined;

  /**
   * @public
   * <p>An optional description of the report plan with a maximum 1,024 characters.</p>
   */
  ReportPlanDescription?: string;

  /**
   * @public
   * <p>A structure that contains information about where to deliver your reports, specifically
   *          your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.</p>
   */
  ReportDeliveryChannel?: ReportDeliveryChannel;

  /**
   * @public
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
   * @public
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>UpdateReportPlanInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;
}

/**
 * @public
 */
export interface UpdateReportPlanOutput {
  /**
   * @public
   * <p>The unique name of the report plan.</p>
   */
  ReportPlanName?: string;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ReportPlanArn?: string;

  /**
   * @public
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
export const ListTagsOutputFilterSensitiveLog = (obj: ListTagsOutput): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
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
