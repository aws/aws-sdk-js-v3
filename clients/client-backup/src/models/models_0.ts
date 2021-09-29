import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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
  BackupOptions?: { [key: string]: string };
}

export namespace AdvancedBackupSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdvancedBackupSetting): any => ({
    ...obj,
  });
}

/**
 * <p>The required resource already exists.</p>
 */
export interface AlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
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
}

export namespace AlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
    ...obj,
  });
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

export namespace RecoveryPointCreator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecoveryPointCreator): any => ({
    ...obj,
  });
}

export enum BackupJobState {
  ABORTED = "ABORTED",
  ABORTING = "ABORTING",
  COMPLETED = "COMPLETED",
  CREATED = "CREATED",
  EXPIRED = "EXPIRED",
  FAILED = "FAILED",
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
  BackupOptions?: { [key: string]: string };

  /**
   * <p>Represents the type of backup for a backup job.</p>
   */
  BackupType?: string;
}

export namespace BackupJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupJob): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an array of <code>Transition</code> objects specifying how long in days before
 *          a recovery point transitions to cold storage or is deleted.</p>
 *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
 *          days. Therefore, on the console, the “expire after days” setting must be 90 days greater
 *          than the “transition to cold after days” setting. The “transition to cold after days”
 *          setting cannot be changed after a backup has been transitioned to cold.</p>
 *          <p>Only Amazon EFS file system backups can be transitioned to cold storage.</p>
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

export namespace Lifecycle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Lifecycle): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the copy operation.</p>
 */
export interface CopyAction {
  /**
   * <p>Contains an array of <code>Transition</code> objects specifying how long in days before
   *          a recovery point transitions to cold storage or is deleted.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, on the console, the “expire after days” setting must be 90 days greater
   *          than the “transition to cold after days” setting. The “transition to cold after days”
   *          setting cannot be changed after a backup has been transitioned to cold.</p>
   *          <p>Only Amazon EFS file system backups can be transitioned to cold storage.</p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for
   *          the copied backup. For example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  DestinationBackupVaultArn: string | undefined;
}

export namespace CopyAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyAction): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a scheduled task used to back up a selection of resources.</p>
 */
export interface BackupRule {
  /**
   * <p>An optional display name for a backup rule.</p>
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
   *          more information about cron expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a> in the <i>Amazon CloudWatch Events User
   *             Guide.</i>. Prior to specifying a value for this parameter, we recommend testing
   *          your cron expression using one of the many available cron generator and testing
   *          tools.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>A value in minutes after a backup is scheduled before a job will be canceled if it
   *          doesn't start successfully. This value is optional.</p>
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
   *          days. Therefore, the “expire after days” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold. </p>
   *          <p>Only Amazon EFS file system backups can be transitioned to cold storage.</p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>An array of key-value pair strings that are assigned to resources that are associated
   *          with this rule when restored from backup.</p>
   */
  RecoveryPointTags?: { [key: string]: string };

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

export namespace BackupRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupRule): any => ({
    ...obj,
    ...(obj.RecoveryPointTags && { RecoveryPointTags: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains an optional backup plan display name and an array of <code>BackupRule</code>
 *          objects, each of which specifies a backup rule. Each rule in a backup plan is a separate
 *          scheduled task and can back up a different selection of Amazon Web Services
 *          resources.</p>
 */
export interface BackupPlan {
  /**
   * <p>The display name of a backup plan.</p>
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

export namespace BackupPlan {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupPlan): any => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => BackupRule.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>Specifies a scheduled task used to back up a selection of resources.</p>
 */
export interface BackupRuleInput {
  /**
   * <p>An optional display name for a backup rule.</p>
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
   *          doesn't start successfully. This value is optional.</p>
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
   *          days. Therefore, the “expire after days” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold. </p>
   *          <p>Only Amazon EFS file system backups can be transitioned to cold storage.</p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>To help organize your resources, you can assign your own metadata to the resources that
   *          you create. Each tag is a key-value pair.</p>
   */
  RecoveryPointTags?: { [key: string]: string };

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

export namespace BackupRuleInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupRuleInput): any => ({
    ...obj,
    ...(obj.RecoveryPointTags && { RecoveryPointTags: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains an optional backup plan display name and an array of <code>BackupRule</code>
 *          objects, each of which specifies a backup rule. Each rule in a backup plan is a separate
 *          scheduled task and can back up a different selection of Amazon Web Services resources.
 *       </p>
 */
export interface BackupPlanInput {
  /**
   * <p>The optional display name of a backup plan.</p>
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

export namespace BackupPlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupPlanInput): any => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => BackupRuleInput.filterSensitiveLog(item)) }),
  });
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
   *          without the risk of running the operation twice.</p>
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

export namespace BackupPlansListMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupPlansListMember): any => ({
    ...obj,
  });
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

export namespace BackupPlanTemplatesListMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupPlanTemplatesListMember): any => ({
    ...obj,
  });
}

export enum ConditionType {
  STRINGEQUALS = "STRINGEQUALS",
}

/**
 * <p>Contains an array of triplets made up of a condition type (such as
 *             <code>StringEquals</code>), a key, and a value. Conditions are used to filter resources
 *          in a selection that is assigned to a backup plan.</p>
 */
export interface Condition {
  /**
   * <p>An operation, such as <code>StringEquals</code>, that is applied to a key-value pair
   *          used to filter resources in a selection.</p>
   */
  ConditionType: ConditionType | string | undefined;

  /**
   * <p>The key in a key-value pair. For example, in <code>"ec2:ResourceTag/Department":
   *             "accounting"</code>, <code>"ec2:ResourceTag/Department"</code> is the key.</p>
   */
  ConditionKey: string | undefined;

  /**
   * <p>The value in a key-value pair. For example, in <code>"ec2:ResourceTag/Department":
   *             "accounting"</code>, <code>"accounting"</code> is the value.</p>
   */
  ConditionValue: string | undefined;
}

export namespace Condition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Condition): any => ({
    ...obj,
  });
}

/**
 * <p>Used to specify a set of resources to a backup plan.</p>
 */
export interface BackupSelection {
  /**
   * <p>The display name of a resource selection document.</p>
   */
  SelectionName: string | undefined;

  /**
   * <p>The ARN of the IAM role that Backup uses to authenticate when backing up the
   *          target resource; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>An array of strings that contain Amazon Resource Names (ARNs)
   *
   *          of resources to assign to a backup plan.</p>
   */
  Resources?: string[];

  /**
   * <p>An array of conditions used to specify a set of resources to assign to a backup plan;
   *          for example, <code>"StringEquals": {"ec2:ResourceTag/Department": "accounting"</code>.
   *          Assigns the backup plan to every resource with at least one matching tag.</p>
   */
  ListOfTags?: Condition[];
}

export namespace BackupSelection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupSelection): any => ({
    ...obj,
  });
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
   *          without the risk of running the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>Specifies the IAM role Amazon Resource Name (ARN) to create the target recovery point;
   *          for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;
}

export namespace BackupSelectionsListMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupSelectionsListMember): any => ({
    ...obj,
  });
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
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The number of recovery points that are stored in a backup vault.</p>
   */
  NumberOfRecoveryPoints?: number;
}

export namespace BackupVaultListMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupVaultListMember): any => ({
    ...obj,
  });
}

/**
 * <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which
 *          are used to specify a lifecycle for a recovery point.</p>
 *          <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
 *          it expires. Backup transitions and expires backups automatically according to
 *          the lifecycle that you define.</p>
 *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
 *          days. Therefore, the “expire after days” setting must be 90 days greater than the
 *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
 *          be changed after a backup has been transitioned to cold.</p>
 *          <p>Only Amazon EFS file system backups can be transitioned to cold storage.</p>
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

export namespace CalculatedLifecycle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CalculatedLifecycle): any => ({
    ...obj,
  });
}

/**
 * <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Code?: string;
  Message?: string;
  Type?: string;
  Context?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
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

export namespace ControlInputParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ControlInputParameter): any => ({
    ...obj,
  });
}

/**
 * <p>A framework consists of one or more controls. Each control has its own control scope.
 *          The control scope defines what the control will evaluate. Three examples of control scopes
 *          are: a specific backup plan, all backup plans with a specific tag, or all backup
 *          plans.</p>
 *          <note>
 *             <p>To set a control scope that includes all of a particular resource, leave the
 *                <code>ControlScope</code> empty or do not pass it when calling
 *                <code>CreateFramework</code>.</p>
 *          </note>
 */
export interface ControlScope {
  /**
   * <p>Describes whether the control scope includes a specific resource identified by its
   *          unique Amazon Resource Name (ARN).</p>
   */
  ComplianceResourceIds?: string[];

  /**
   * <p>Describes whether the control scope includes one or more types of resources, such as
   *             <code>EFS</code> or <code>RDS</code>.</p>
   */
  ComplianceResourceTypes?: string[];

  /**
   * <p>Describes whether the control scope includes resources with one or more tags. Each tag
   *          is a key-value pair.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ControlScope {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ControlScope): any => ({
    ...obj,
  });
}

export enum CopyJobState {
  COMPLETED = "COMPLETED",
  CREATED = "CREATED",
  FAILED = "FAILED",
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
}

export namespace CopyJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyJob): any => ({
    ...obj,
  });
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
  BackupPlanTags?: { [key: string]: string };

  /**
   * <p>Identifies the request and allows failed requests to be retried without the risk of
   *          running the operation twice. If the request includes a <code>CreatorRequestId</code> that
   *          matches an existing backup plan, that plan is returned. This parameter is optional.</p>
   */
  CreatorRequestId?: string;
}

export namespace CreateBackupPlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBackupPlanInput): any => ({
    ...obj,
    ...(obj.BackupPlan && { BackupPlan: BackupPlanInput.filterSensitiveLog(obj.BackupPlan) }),
    ...(obj.BackupPlanTags && { BackupPlanTags: SENSITIVE_STRING }),
  });
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

export namespace CreateBackupPlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBackupPlanOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
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
}

export namespace InvalidParameterValueException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
}

/**
 * <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
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
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates that a required parameter is missing.</p>
 */
export interface MissingParameterValueException extends __SmithyException, $MetadataBearer {
  name: "MissingParameterValueException";
  $fault: "client";
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
}

export namespace MissingParameterValueException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MissingParameterValueException): any => ({
    ...obj,
  });
}

/**
 * <p>The request failed due to a temporary failure of the server.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
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
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
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
   *          without the risk of running the operation twice.</p>
   */
  CreatorRequestId?: string;
}

export namespace CreateBackupSelectionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBackupSelectionInput): any => ({
    ...obj,
  });
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

export namespace CreateBackupSelectionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBackupSelectionOutput): any => ({
    ...obj,
  });
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
  BackupVaultTags?: { [key: string]: string };

  /**
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of running the operation twice.</p>
   */
  CreatorRequestId?: string;
}

export namespace CreateBackupVaultInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBackupVaultInput): any => ({
    ...obj,
    ...(obj.BackupVaultTags && { BackupVaultTags: SENSITIVE_STRING }),
  });
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

export namespace CreateBackupVaultOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBackupVaultOutput): any => ({
    ...obj,
  });
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
   *          tag, or all backup plans. For more information, see <code>ControlScope</code>.</p>
   */
  ControlScope?: ControlScope;
}

export namespace FrameworkControl {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FrameworkControl): any => ({
    ...obj,
  });
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
  FrameworkTags?: { [key: string]: string };
}

export namespace CreateFrameworkInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFrameworkInput): any => ({
    ...obj,
  });
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

export namespace CreateFrameworkOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFrameworkOutput): any => ({
    ...obj,
  });
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

export namespace ReportDeliveryChannel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReportDeliveryChannel): any => ({
    ...obj,
  });
}

/**
 * <p>Contains detailed information about a report setting.</p>
 */
export interface ReportSetting {
  /**
   * <p>Identifies the report template for the report. Reports are built using a report
   *          template. The report templates are:</p>
   *          <p>
   *             <code>BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT</code>
   *          </p>
   */
  ReportTemplate: string | undefined;
}

export namespace ReportSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReportSetting): any => ({
    ...obj,
  });
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
   *             <code>BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT</code>
   *          </p>
   */
  ReportSetting: ReportSetting | undefined;

  /**
   * <p>Metadata that you can assign to help organize the frameworks that you create. Each tag
   *          is a key-value pair.</p>
   */
  ReportPlanTags?: { [key: string]: string };

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>CreateReportPlanInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;
}

export namespace CreateReportPlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReportPlanInput): any => ({
    ...obj,
  });
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
}

export namespace CreateReportPlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReportPlanOutput): any => ({
    ...obj,
  });
}

export interface DeleteBackupPlanInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;
}

export namespace DeleteBackupPlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBackupPlanInput): any => ({
    ...obj,
  });
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

export namespace DeleteBackupPlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBackupPlanOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
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
}

export namespace InvalidRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>A resource that is required for the action doesn't exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
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
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
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

export namespace DeleteBackupSelectionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBackupSelectionInput): any => ({
    ...obj,
  });
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

export namespace DeleteBackupVaultInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBackupVaultInput): any => ({
    ...obj,
  });
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

export namespace DeleteBackupVaultAccessPolicyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBackupVaultAccessPolicyInput): any => ({
    ...obj,
  });
}

export interface DeleteBackupVaultNotificationsInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

export namespace DeleteBackupVaultNotificationsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBackupVaultNotificationsInput): any => ({
    ...obj,
  });
}

export interface DeleteFrameworkInput {
  /**
   * <p>The unique name of a framework.</p>
   */
  FrameworkName: string | undefined;
}

export namespace DeleteFrameworkInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFrameworkInput): any => ({
    ...obj,
  });
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

export namespace DeleteRecoveryPointInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRecoveryPointInput): any => ({
    ...obj,
  });
}

/**
 * <p>Backup is already performing an action on this recovery point. It can't
 *          perform the action you requested until the first action finishes. Try again later.</p>
 */
export interface InvalidResourceStateException extends __SmithyException, $MetadataBearer {
  name: "InvalidResourceStateException";
  $fault: "client";
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
}

export namespace InvalidResourceStateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidResourceStateException): any => ({
    ...obj,
  });
}

export interface DeleteReportPlanInput {
  /**
   * <p>The unique name of a report plan.</p>
   */
  ReportPlanName: string | undefined;
}

export namespace DeleteReportPlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReportPlanInput): any => ({
    ...obj,
  });
}

/**
 * <p>A dependent Amazon Web Services service or resource returned an error to the Backup service, and the action cannot be completed.</p>
 */
export interface DependencyFailureException extends __SmithyException, $MetadataBearer {
  name: "DependencyFailureException";
  $fault: "server";
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
}

export namespace DependencyFailureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DependencyFailureException): any => ({
    ...obj,
  });
}

export interface DescribeBackupJobInput {
  /**
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   */
  BackupJobId: string | undefined;
}

export namespace DescribeBackupJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBackupJobInput): any => ({
    ...obj,
  });
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
  BackupOptions?: { [key: string]: string };

  /**
   * <p>Represents the actual backup type selected for a backup job. For example, if a
   *          successful Windows Volume Shadow Copy Service (VSS) backup was taken,
   *             <code>BackupType</code> returns <code>"WindowsVSS"</code>. If <code>BackupType</code> is
   *          empty, then the backup type was a regular backup.</p>
   */
  BackupType?: string;
}

export namespace DescribeBackupJobOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBackupJobOutput): any => ({
    ...obj,
  });
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

export namespace DescribeBackupVaultInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBackupVaultInput): any => ({
    ...obj,
  });
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
}

export namespace DescribeBackupVaultOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBackupVaultOutput): any => ({
    ...obj,
  });
}

export interface DescribeCopyJobInput {
  /**
   * <p>Uniquely identifies a copy job.</p>
   */
  CopyJobId: string | undefined;
}

export namespace DescribeCopyJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCopyJobInput): any => ({
    ...obj,
  });
}

export interface DescribeCopyJobOutput {
  /**
   * <p>Contains detailed information about a copy job.</p>
   */
  CopyJob?: CopyJob;
}

export namespace DescribeCopyJobOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCopyJobOutput): any => ({
    ...obj,
  });
}

export interface DescribeFrameworkInput {
  /**
   * <p>The unique name of a framework.</p>
   */
  FrameworkName: string | undefined;
}

export namespace DescribeFrameworkInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFrameworkInput): any => ({
    ...obj,
  });
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
   * <p>The date and time that a framework is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
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

export namespace DescribeFrameworkOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFrameworkOutput): any => ({
    ...obj,
  });
}

export interface DescribeGlobalSettingsInput {}

export namespace DescribeGlobalSettingsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGlobalSettingsInput): any => ({
    ...obj,
  });
}

export interface DescribeGlobalSettingsOutput {
  /**
   * <p>The status of the flag <code>isCrossAccountBackupEnabled</code>.</p>
   */
  GlobalSettings?: { [key: string]: string };

  /**
   * <p>The date and time that the flag <code>isCrossAccountBackupEnabled</code> was last
   *          updated. This update is in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastUpdateTime</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastUpdateTime?: Date;
}

export namespace DescribeGlobalSettingsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGlobalSettingsOutput): any => ({
    ...obj,
  });
}

export interface DescribeProtectedResourceInput {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DescribeProtectedResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProtectedResourceInput): any => ({
    ...obj,
  });
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

export namespace DescribeProtectedResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProtectedResourceOutput): any => ({
    ...obj,
  });
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

export namespace DescribeRecoveryPointInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRecoveryPointInput): any => ({
    ...obj,
  });
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
   *          the lifecycle that you define. </p>
   *          <p>Backups that are transitioned to cold storage must be stored in cold storage for a
   *          minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than
   *          the “transition to cold after days” setting. The “transition to cold after days” setting
   *          cannot be changed after a backup has been transitioned to cold. </p>
   *          <p>Only Amazon EFS file system backups can be transitioned to cold storage.</p>
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
}

export namespace DescribeRecoveryPointOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRecoveryPointOutput): any => ({
    ...obj,
  });
}

export interface DescribeRegionSettingsInput {}

export namespace DescribeRegionSettingsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRegionSettingsInput): any => ({
    ...obj,
  });
}

export interface DescribeRegionSettingsOutput {
  /**
   * <p>Returns a list of all services along with the opt-in preferences in the Region.</p>
   */
  ResourceTypeOptInPreference?: { [key: string]: boolean };
}

export namespace DescribeRegionSettingsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRegionSettingsOutput): any => ({
    ...obj,
  });
}

export interface DescribeReportJobInput {
  /**
   * <p>The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded
   *          string that is at most 1,024 bytes long. The report job ID cannot be edited.</p>
   */
  ReportJobId: string | undefined;
}

export namespace DescribeReportJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReportJobInput): any => ({
    ...obj,
  });
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

export namespace ReportDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReportDestination): any => ({
    ...obj,
  });
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
   *             <code>BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT</code>
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

export namespace ReportJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReportJob): any => ({
    ...obj,
  });
}

export interface DescribeReportJobOutput {
  /**
   * <p>A list of information about a report job, including its completion and creation times,
   *          report destination, unique report job ID, Amazon Resource Name (ARN), report template,
   *          status, and status message.</p>
   */
  ReportJob?: ReportJob;
}

export namespace DescribeReportJobOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReportJobOutput): any => ({
    ...obj,
  });
}

export interface DescribeReportPlanInput {
  /**
   * <p>The unique name of a report plan.</p>
   */
  ReportPlanName: string | undefined;
}

export namespace DescribeReportPlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReportPlanInput): any => ({
    ...obj,
  });
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
   *             <code>BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT</code>
   *          </p>
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

export namespace ReportPlan {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReportPlan): any => ({
    ...obj,
  });
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

export namespace DescribeReportPlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReportPlanOutput): any => ({
    ...obj,
  });
}

export interface DescribeRestoreJobInput {
  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId: string | undefined;
}

export namespace DescribeRestoreJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRestoreJobInput): any => ({
    ...obj,
  });
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

export namespace DescribeRestoreJobOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRestoreJobOutput): any => ({
    ...obj,
  });
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

export namespace DisassociateRecoveryPointInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateRecoveryPointInput): any => ({
    ...obj,
  });
}

export interface ExportBackupPlanTemplateInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;
}

export namespace ExportBackupPlanTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportBackupPlanTemplateInput): any => ({
    ...obj,
  });
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

export namespace ExportBackupPlanTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportBackupPlanTemplateOutput): any => ({
    ...obj,
  });
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

export namespace GetBackupPlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBackupPlanInput): any => ({
    ...obj,
  });
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

export namespace GetBackupPlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBackupPlanOutput): any => ({
    ...obj,
    ...(obj.BackupPlan && { BackupPlan: BackupPlan.filterSensitiveLog(obj.BackupPlan) }),
  });
}

export interface GetBackupPlanFromJSONInput {
  /**
   * <p>A customer-supplied backup plan document in JSON format.</p>
   */
  BackupPlanTemplateJson: string | undefined;
}

export namespace GetBackupPlanFromJSONInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBackupPlanFromJSONInput): any => ({
    ...obj,
  });
}

export interface GetBackupPlanFromJSONOutput {
  /**
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   */
  BackupPlan?: BackupPlan;
}

export namespace GetBackupPlanFromJSONOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBackupPlanFromJSONOutput): any => ({
    ...obj,
    ...(obj.BackupPlan && { BackupPlan: BackupPlan.filterSensitiveLog(obj.BackupPlan) }),
  });
}

export interface GetBackupPlanFromTemplateInput {
  /**
   * <p>Uniquely identifies a stored backup plan template.</p>
   */
  BackupPlanTemplateId: string | undefined;
}

export namespace GetBackupPlanFromTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBackupPlanFromTemplateInput): any => ({
    ...obj,
  });
}

export interface GetBackupPlanFromTemplateOutput {
  /**
   * <p>Returns the body of a backup plan based on the target template, including the name,
   *          rules, and backup vault of the plan.</p>
   */
  BackupPlanDocument?: BackupPlan;
}

export namespace GetBackupPlanFromTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBackupPlanFromTemplateOutput): any => ({
    ...obj,
    ...(obj.BackupPlanDocument && { BackupPlanDocument: BackupPlan.filterSensitiveLog(obj.BackupPlanDocument) }),
  });
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

export namespace GetBackupSelectionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBackupSelectionInput): any => ({
    ...obj,
  });
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

export namespace GetBackupSelectionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBackupSelectionOutput): any => ({
    ...obj,
  });
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

export namespace GetBackupVaultAccessPolicyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBackupVaultAccessPolicyInput): any => ({
    ...obj,
  });
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

export namespace GetBackupVaultAccessPolicyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBackupVaultAccessPolicyOutput): any => ({
    ...obj,
  });
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

export namespace GetBackupVaultNotificationsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBackupVaultNotificationsInput): any => ({
    ...obj,
  });
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

export namespace GetBackupVaultNotificationsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBackupVaultNotificationsOutput): any => ({
    ...obj,
  });
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

export namespace GetRecoveryPointRestoreMetadataInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecoveryPointRestoreMetadataInput): any => ({
    ...obj,
  });
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
  RestoreMetadata?: { [key: string]: string };
}

export namespace GetRecoveryPointRestoreMetadataOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecoveryPointRestoreMetadataOutput): any => ({
    ...obj,
    ...(obj.RestoreMetadata && { RestoreMetadata: SENSITIVE_STRING }),
  });
}

export interface GetSupportedResourceTypesOutput {
  /**
   * <p>Contains a string with the supported Amazon Web Services resource types:</p>
   *          <ul>
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
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Aurora</code> for Amazon Aurora</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> for Storage Gateway</p>
   *             </li>
   *          </ul>
   */
  ResourceTypes?: string[];
}

export namespace GetSupportedResourceTypesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSupportedResourceTypesOutput): any => ({
    ...obj,
  });
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
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Aurora</code> for Amazon Aurora</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> for Storage Gateway</p>
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
}

export namespace ListBackupJobsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBackupJobsInput): any => ({
    ...obj,
  });
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

export namespace ListBackupJobsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBackupJobsOutput): any => ({
    ...obj,
  });
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

export namespace ListBackupPlansInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBackupPlansInput): any => ({
    ...obj,
  });
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

export namespace ListBackupPlansOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBackupPlansOutput): any => ({
    ...obj,
  });
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

export namespace ListBackupPlanTemplatesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBackupPlanTemplatesInput): any => ({
    ...obj,
  });
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

export namespace ListBackupPlanTemplatesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBackupPlanTemplatesOutput): any => ({
    ...obj,
  });
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

export namespace ListBackupPlanVersionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBackupPlanVersionsInput): any => ({
    ...obj,
  });
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

export namespace ListBackupPlanVersionsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBackupPlanVersionsOutput): any => ({
    ...obj,
  });
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

export namespace ListBackupSelectionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBackupSelectionsInput): any => ({
    ...obj,
  });
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

export namespace ListBackupSelectionsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBackupSelectionsOutput): any => ({
    ...obj,
  });
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

export namespace ListBackupVaultsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBackupVaultsInput): any => ({
    ...obj,
  });
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

export namespace ListBackupVaultsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBackupVaultsOutput): any => ({
    ...obj,
  });
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
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Aurora</code> for Amazon Aurora</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> for Storage Gateway</p>
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
}

export namespace ListCopyJobsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCopyJobsInput): any => ({
    ...obj,
  });
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

export namespace ListCopyJobsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCopyJobsOutput): any => ({
    ...obj,
  });
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

export namespace ListFrameworksInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFrameworksInput): any => ({
    ...obj,
  });
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
   * <p>The date and time that a framework is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
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

export namespace Framework {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Framework): any => ({
    ...obj,
  });
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

export namespace ListFrameworksOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFrameworksOutput): any => ({
    ...obj,
  });
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

export namespace ListProtectedResourcesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProtectedResourcesInput): any => ({
    ...obj,
  });
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

export namespace ProtectedResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProtectedResource): any => ({
    ...obj,
  });
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

export namespace ListProtectedResourcesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProtectedResourcesOutput): any => ({
    ...obj,
  });
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
}

export namespace ListRecoveryPointsByBackupVaultInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecoveryPointsByBackupVaultInput): any => ({
    ...obj,
  });
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
   *          days. Therefore, the “expire after days” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold. </p>
   *          <p>Only Amazon EFS file system backups can be transitioned to cold storage.</p>
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
}

export namespace RecoveryPointByBackupVault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecoveryPointByBackupVault): any => ({
    ...obj,
  });
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

export namespace ListRecoveryPointsByBackupVaultOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecoveryPointsByBackupVaultOutput): any => ({
    ...obj,
  });
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

export namespace ListRecoveryPointsByResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecoveryPointsByResourceInput): any => ({
    ...obj,
  });
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
}

export namespace RecoveryPointByResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecoveryPointByResource): any => ({
    ...obj,
  });
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

export namespace ListRecoveryPointsByResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecoveryPointsByResourceOutput): any => ({
    ...obj,
  });
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

export namespace ListReportJobsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReportJobsInput): any => ({
    ...obj,
  });
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

export namespace ListReportJobsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReportJobsOutput): any => ({
    ...obj,
  });
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

export namespace ListReportPlansInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReportPlansInput): any => ({
    ...obj,
  });
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

export namespace ListReportPlansOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReportPlansOutput): any => ({
    ...obj,
  });
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
}

export namespace ListRestoreJobsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRestoreJobsInput): any => ({
    ...obj,
  });
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

export namespace RestoreJobsListMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreJobsListMember): any => ({
    ...obj,
  });
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

export namespace ListRestoreJobsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRestoreJobsOutput): any => ({
    ...obj,
  });
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

export namespace ListTagsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsInput): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace ListTagsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsOutput): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
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

export namespace PutBackupVaultAccessPolicyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutBackupVaultAccessPolicyInput): any => ({
    ...obj,
  });
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
   *          <note>
   *             <p>The following events are supported:</p>
   *             <p>
   *                <code>BACKUP_JOB_STARTED</code>, <code>BACKUP_JOB_COMPLETED</code>,</p>
   *             <p>
   *                <code>COPY_JOB_STARTED</code>, <code>COPY_JOB_SUCCESSFUL</code>,
   *                <code>COPY_JOB_FAILED</code>,</p>
   *             <p>
   *                <code>RESTORE_JOB_STARTED</code>, <code>RESTORE_JOB_COMPLETED</code>, and
   *                <code>RECOVERY_POINT_MODIFIED</code>.</p>
   *             <p>To find failed backup jobs, use <code>BACKUP_JOB_COMPLETED</code> and filter using
   *             event metadata.</p>
   *             <p>Other events in the following list are deprecated.</p>
   *          </note>
   */
  BackupVaultEvents: (BackupVaultEvent | string)[] | undefined;
}

export namespace PutBackupVaultNotificationsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutBackupVaultNotificationsInput): any => ({
    ...obj,
  });
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
   *          doesn't start successfully. This value is optional, and the default is 8 hours.</p>
   */
  StartWindowMinutes?: number;

  /**
   * <p>A value in minutes during which a successfully started backup must complete, or else AWS
   *          Backup will cancel the job. This value is optional. This value begins counting down from
   *          when the backup was scheduled. It does not add additional time for
   *             <code>StartWindowMinutes</code>, or if the backup started later than scheduled.</p>
   */
  CompleteWindowMinutes?: number;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup will transition and expire backups automatically according
   *          to the lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “expire after days” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold. </p>
   *          <p>Only Amazon EFS file system backups can be transitioned to cold storage.</p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>To help organize your resources, you can assign your own metadata to the resources that
   *          you create. Each tag is a key-value pair.</p>
   */
  RecoveryPointTags?: { [key: string]: string };

  /**
   * <p>Specifies the backup option for a selected resource. This option is only available for
   *          Windows Volume Shadow Copy Service (VSS) backup jobs.</p>
   *          <p>Valid values: Set to <code>"WindowsVSS":"enabled"</code> to enable the
   *             <code>WindowsVSS</code> backup option and create a Windows VSS backup. Set to
   *             <code>"WindowsVSS""disabled"</code> to create a regular backup. The
   *             <code>WindowsVSS</code> option is not enabled by default.</p>
   */
  BackupOptions?: { [key: string]: string };
}

export namespace StartBackupJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartBackupJobInput): any => ({
    ...obj,
    ...(obj.RecoveryPointTags && { RecoveryPointTags: SENSITIVE_STRING }),
  });
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
}

export namespace StartBackupJobOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartBackupJobOutput): any => ({
    ...obj,
  });
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
   *          days. Therefore, on the console, the “expire after days” setting must be 90 days greater
   *          than the “transition to cold after days” setting. The “transition to cold after days”
   *          setting cannot be changed after a backup has been transitioned to cold.</p>
   *          <p>Only Amazon EFS file system backups can be transitioned to cold storage.</p>
   */
  Lifecycle?: Lifecycle;
}

export namespace StartCopyJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCopyJobInput): any => ({
    ...obj,
  });
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
}

export namespace StartCopyJobOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCopyJobOutput): any => ({
    ...obj,
  });
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

export namespace StartReportJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartReportJobInput): any => ({
    ...obj,
  });
}

export interface StartReportJobOutput {
  /**
   * <p>The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded
   *          string that is at most 1,024 bytes long. The report job ID cannot be edited.</p>
   */
  ReportJobId?: string;
}

export namespace StartReportJobOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartReportJobOutput): any => ({
    ...obj,
  });
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
  Metadata: { [key: string]: string } | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that Backup uses to create
   *          the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn: string | undefined;

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
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Aurora</code> for Amazon Aurora</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> for Storage Gateway</p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;
}

export namespace StartRestoreJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartRestoreJobInput): any => ({
    ...obj,
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

export interface StartRestoreJobOutput {
  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId?: string;
}

export namespace StartRestoreJobOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartRestoreJobOutput): any => ({
    ...obj,
  });
}

export interface StopBackupJobInput {
  /**
   * <p>Uniquely identifies a request to Backup to back up a resource.</p>
   */
  BackupJobId: string | undefined;
}

export namespace StopBackupJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopBackupJobInput): any => ({
    ...obj,
  });
}

export interface TagResourceInput {
  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the type of
   *          the tagged resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Key-value pairs that are used to help organize your resources. You can assign your own
   *          metadata to the resources you create.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
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

export namespace UntagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
    ...(obj.TagKeyList && { TagKeyList: SENSITIVE_STRING }),
  });
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

export namespace UpdateBackupPlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBackupPlanInput): any => ({
    ...obj,
    ...(obj.BackupPlan && { BackupPlan: BackupPlanInput.filterSensitiveLog(obj.BackupPlan) }),
  });
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

export namespace UpdateBackupPlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBackupPlanOutput): any => ({
    ...obj,
  });
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

export namespace UpdateFrameworkInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFrameworkInput): any => ({
    ...obj,
  });
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
   * <p>The date and time that a framework is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationTime</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationTime?: Date;
}

export namespace UpdateFrameworkOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFrameworkOutput): any => ({
    ...obj,
  });
}

export interface UpdateGlobalSettingsInput {
  /**
   * <p>A value for <code>isCrossAccountBackupEnabled</code> and a Region. Example:
   *             <code>update-global-settings --global-settings isCrossAccountBackupEnabled=false
   *             --region us-west-2</code>.</p>
   */
  GlobalSettings?: { [key: string]: string };
}

export namespace UpdateGlobalSettingsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGlobalSettingsInput): any => ({
    ...obj,
  });
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
   *          days. Therefore, the “expire after days” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: Lifecycle;
}

export namespace UpdateRecoveryPointLifecycleInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRecoveryPointLifecycleInput): any => ({
    ...obj,
  });
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
   *          the lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “expire after days” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold. </p>
   *          <p>Only Amazon EFS file system backups can be transitioned to cold storage.</p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and
   *             <code>MoveToColdStorageAt</code> timestamps.</p>
   */
  CalculatedLifecycle?: CalculatedLifecycle;
}

export namespace UpdateRecoveryPointLifecycleOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRecoveryPointLifecycleOutput): any => ({
    ...obj,
  });
}

export interface UpdateRegionSettingsInput {
  /**
   * <p>Updates the list of services along with the opt-in preferences for the Region.</p>
   */
  ResourceTypeOptInPreference?: { [key: string]: boolean };
}

export namespace UpdateRegionSettingsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRegionSettingsInput): any => ({
    ...obj,
  });
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
   *             <code>BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT</code>
   *          </p>
   */
  ReportSetting?: ReportSetting;

  /**
   * <p>A customer-chosen string that you can use to distinguish between otherwise identical
   *          calls to <code>UpdateReportPlanInput</code>. Retrying a successful request with the same
   *          idempotency token results in a success message with no action taken.</p>
   */
  IdempotencyToken?: string;
}

export namespace UpdateReportPlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReportPlanInput): any => ({
    ...obj,
  });
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

export namespace UpdateReportPlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReportPlanOutput): any => ({
    ...obj,
  });
}
