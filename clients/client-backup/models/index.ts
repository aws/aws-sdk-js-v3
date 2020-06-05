import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The required resource already exists.</p>
 */
export interface AlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  /**
   * <p></p>
   */
  Arn?: string;

  Code?: string;
  /**
   * <p></p>
   */
  Context?: string;

  /**
   * <p></p>
   */
  CreatorRequestId?: string;

  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;
}

export namespace AlreadyExistsException {
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlreadyExistsException =>
    __isa(o, "AlreadyExistsException");
}

/**
 * <p>Contains detailed information about a backup job.</p>
 */
export interface BackupJob {
  __type?: "BackupJob";
  /**
   * <p>Uniquely identifies a request to AWS Backup to back up a resource.</p>
   */
  BackupJobId?: string;

  /**
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>The size in bytes transferred to a backup vault at the time that the job status was
   *          queried.</p>
   */
  BytesTransferred?: number;

  /**
   * <p>The date and time a job to create a backup job is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>Contains identifying information about the creation of a backup job, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan used to create it.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * <p>The date and time a backup job is created, in Unix format and Coordinated Universal Time
   *          (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the
   *          value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time a job to back up resources is expected to be completed, in Unix format
   *          and Coordinated Universal Time (UTC). The value of <code>ExpectedCompletionDate</code> is
   *          accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January
   *          26, 2018 12:11:30.087 AM.</p>
   */
  ExpectedCompletionDate?: Date;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>Contains an estimated percentage complete of a job at the time the job status was
   *          queried.</p>
   */
  PercentDone?: string;

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
   * <p>The type of AWS resource to be backed-up; for example, an Amazon Elastic Block Store
   *          (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   */
  ResourceType?: string;

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
   * <p>The current state of a resource recovery point.</p>
   */
  State?: BackupJobState | string;

  /**
   * <p>A detailed message explaining the status of the job to back up a resource.</p>
   */
  StatusMessage?: string;
}

export namespace BackupJob {
  export const filterSensitiveLog = (obj: BackupJob): any => ({
    ...obj
  });
  export const isa = (o: any): o is BackupJob => __isa(o, "BackupJob");
}

export enum BackupJobState {
  ABORTED = "ABORTED",
  ABORTING = "ABORTING",
  COMPLETED = "COMPLETED",
  CREATED = "CREATED",
  EXPIRED = "EXPIRED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNING = "RUNNING"
}

/**
 * <p>Contains an optional backup plan display name and an array of <code>BackupRule</code>
 *          objects, each of which specifies a backup rule. Each rule in a backup plan is a separate
 *          scheduled task and can back up a different selection of AWS resources.</p>
 */
export interface BackupPlan {
  __type?: "BackupPlan";
  /**
   * <p>The display name of a backup plan.</p>
   */
  BackupPlanName: string | undefined;

  /**
   * <p>An array of <code>BackupRule</code> objects, each of which specifies a scheduled task
   *          that is used to back up a selection of resources.</p>
   */
  Rules: BackupRule[] | undefined;
}

export namespace BackupPlan {
  export const filterSensitiveLog = (obj: BackupPlan): any => ({
    ...obj,
    ...(obj.Rules && {
      Rules: obj.Rules.map(item => BackupRule.filterSensitiveLog(item))
    })
  });
  export const isa = (o: any): o is BackupPlan => __isa(o, "BackupPlan");
}

/**
 * <p>Contains an optional backup plan display name and an array of <code>BackupRule</code>
 *          objects, each of which specifies a backup rule. Each rule in a backup plan is a separate
 *          scheduled task and can back up a different selection of AWS resources.</p>
 */
export interface BackupPlanInput {
  __type?: "BackupPlanInput";
  /**
   * <p>The display name of a backup plan.</p>
   */
  BackupPlanName: string | undefined;

  /**
   * <p>An array of <code>BackupRule</code> objects, each of which specifies a scheduled task
   *          that is used to back up a selection of resources.</p>
   */
  Rules: BackupRuleInput[] | undefined;
}

export namespace BackupPlanInput {
  export const filterSensitiveLog = (obj: BackupPlanInput): any => ({
    ...obj,
    ...(obj.Rules && {
      Rules: obj.Rules.map(item => BackupRuleInput.filterSensitiveLog(item))
    })
  });
  export const isa = (o: any): o is BackupPlanInput =>
    __isa(o, "BackupPlanInput");
}

/**
 * <p>Contains metadata about a backup plan.</p>
 */
export interface BackupPlansListMember {
  __type?: "BackupPlansListMember";
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
   * <p>The display name of a saved backup plan.</p>
   */
  BackupPlanName?: string;

  /**
   * <p>The date and time a resource backup plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of executing the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The date and time a backup plan is deleted, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>DeletionDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  DeletionDate?: Date;

  /**
   * <p>The last time a job to back up resources was executed with this rule. A date and time,
   *          in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastExecutionDate</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastExecutionDate?: Date;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version IDs cannot be edited.</p>
   */
  VersionId?: string;
}

export namespace BackupPlansListMember {
  export const filterSensitiveLog = (obj: BackupPlansListMember): any => ({
    ...obj
  });
  export const isa = (o: any): o is BackupPlansListMember =>
    __isa(o, "BackupPlansListMember");
}

/**
 * <p>An object specifying metadata associated with a backup plan template.</p>
 */
export interface BackupPlanTemplatesListMember {
  __type?: "BackupPlanTemplatesListMember";
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
  export const filterSensitiveLog = (
    obj: BackupPlanTemplatesListMember
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BackupPlanTemplatesListMember =>
    __isa(o, "BackupPlanTemplatesListMember");
}

/**
 * <p>Specifies a scheduled task used to back up a selection of resources.</p>
 */
export interface BackupRule {
  __type?: "BackupRule";
  /**
   * <p>A value in minutes after a backup job is successfully started before it must be
   *          completed or it is canceled by AWS Backup. This value is optional.</p>
   */
  CompletionWindowMinutes?: number;

  /**
   * <p>An array of <code>CopyAction</code> objects, which contains the details of the copy operation.</p>
   */
  CopyActions?: CopyAction[];

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. AWS Backup transitions and expires backups automatically according to the
   *          lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “expire after days” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold. </p>
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
   * <p>An optional display name for a backup rule.</p>
   */
  RuleName: string | undefined;

  /**
   * <p>A CRON expression specifying when AWS Backup initiates a backup job.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>An optional value that specifies a period of time in minutes after a backup is scheduled
   *          before a job is canceled if it doesn't start successfully.</p>
   */
  StartWindowMinutes?: number;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  TargetBackupVaultName: string | undefined;
}

export namespace BackupRule {
  export const filterSensitiveLog = (obj: BackupRule): any => ({
    ...obj,
    ...(obj.RecoveryPointTags && { RecoveryPointTags: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is BackupRule => __isa(o, "BackupRule");
}

/**
 * <p>Specifies a scheduled task used to back up a selection of resources.</p>
 */
export interface BackupRuleInput {
  __type?: "BackupRuleInput";
  /**
   * <p>The amount of time AWS Backup attempts a backup before canceling the job and returning
   *          an error.</p>
   */
  CompletionWindowMinutes?: number;

  /**
   * <p>An array of <code>CopyAction</code> objects, which contains the details of the copy operation.</p>
   */
  CopyActions?: CopyAction[];

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. AWS Backup will transition and expire backups automatically according to the
   *          lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “expire after days” setting must be 90 days greater than the
   *          “transition to cold after days”. The “transition to cold after days” setting cannot be
   *          changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>To help organize your resources, you can assign your own metadata to the resources that
   *          you create. Each tag is a key-value pair.</p>
   */
  RecoveryPointTags?: { [key: string]: string };

  /**
   * <p>>An optional display name for a backup rule.</p>
   */
  RuleName: string | undefined;

  /**
   * <p>A CRON expression specifying when AWS Backup initiates a backup job.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The amount of time in minutes before beginning a backup.</p>
   */
  StartWindowMinutes?: number;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  TargetBackupVaultName: string | undefined;
}

export namespace BackupRuleInput {
  export const filterSensitiveLog = (obj: BackupRuleInput): any => ({
    ...obj,
    ...(obj.RecoveryPointTags && { RecoveryPointTags: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is BackupRuleInput =>
    __isa(o, "BackupRuleInput");
}

/**
 * <p>Used to specify a set of resources to a backup plan.</p>
 */
export interface BackupSelection {
  __type?: "BackupSelection";
  /**
   * <p>The ARN of the IAM role that AWS Backup uses to authenticate when restoring the target
   *          resource; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>An array of conditions used to specify a set of resources to assign to a backup plan;
   *          for example, <code>"STRINGEQUALS": {"ec2:ResourceTag/Department":
   *          "accounting"</code>.</p>
   */
  ListOfTags?: Condition[];

  /**
   * <p>An array of strings that contain Amazon Resource Names (ARNs)  of resources to assign
   *          to a backup plan.</p>
   */
  Resources?: string[];

  /**
   * <p>The display name of a resource selection document.</p>
   */
  SelectionName: string | undefined;
}

export namespace BackupSelection {
  export const filterSensitiveLog = (obj: BackupSelection): any => ({
    ...obj
  });
  export const isa = (o: any): o is BackupSelection =>
    __isa(o, "BackupSelection");
}

/**
 * <p>Contains metadata about a <code>BackupSelection</code> object.</p>
 */
export interface BackupSelectionsListMember {
  __type?: "BackupSelectionsListMember";
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
   *          without the risk of executing the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>Specifies the IAM role Amazon Resource Name (ARN) to create the target recovery point;
   *          for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>Uniquely identifies a request to assign a set of resources to a backup plan.</p>
   */
  SelectionId?: string;

  /**
   * <p>The display name of a resource selection document.</p>
   */
  SelectionName?: string;
}

export namespace BackupSelectionsListMember {
  export const filterSensitiveLog = (obj: BackupSelectionsListMember): any => ({
    ...obj
  });
  export const isa = (o: any): o is BackupSelectionsListMember =>
    __isa(o, "BackupSelectionsListMember");
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
  RESTORE_JOB_SUCCESSFUL = "RESTORE_JOB_SUCCESSFUL"
}

/**
 * <p>Contains metadata about a backup vault.</p>
 */
export interface BackupVaultListMember {
  __type?: "BackupVaultListMember";
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>The date and time a resource backup is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of executing the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>The number of recovery points that are stored in a backup vault.</p>
   */
  NumberOfRecoveryPoints?: number;
}

export namespace BackupVaultListMember {
  export const filterSensitiveLog = (obj: BackupVaultListMember): any => ({
    ...obj
  });
  export const isa = (o: any): o is BackupVaultListMember =>
    __isa(o, "BackupVaultListMember");
}

/**
 * <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which
 *          are used to specify a lifecycle for a recovery point.</p>
 *          <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
 *          it expires. AWS Backup transitions and expires backups automatically according to the
 *          lifecycle that you define. </p>
 *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
 *          days. Therefore, the “expire after days” setting must be 90 days greater than the
 *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
 *          be changed after a backup has been transitioned to cold. </p>
 */
export interface CalculatedLifecycle {
  __type?: "CalculatedLifecycle";
  /**
   * <p>A timestamp that specifies when to delete a recovery point.</p>
   */
  DeleteAt?: Date;

  /**
   * <p>A timestamp that specifies when to transition a recovery point to cold storage.</p>
   */
  MoveToColdStorageAt?: Date;
}

export namespace CalculatedLifecycle {
  export const filterSensitiveLog = (obj: CalculatedLifecycle): any => ({
    ...obj
  });
  export const isa = (o: any): o is CalculatedLifecycle =>
    __isa(o, "CalculatedLifecycle");
}

/**
 * <p>Contains an array of triplets made up of a condition type (such as
 *          <code>STRINGEQUALS</code>), a key, and a value. Conditions are used to filter resources
 *          in a selection that is assigned to a backup plan.</p>
 */
export interface Condition {
  __type?: "Condition";
  /**
   * <p>The key in a key-value pair. For example, in <code>"ec2:ResourceTag/Department":
   *             "accounting"</code>, <code>"ec2:ResourceTag/Department"</code> is the key.</p>
   */
  ConditionKey: string | undefined;

  /**
   * <p>An operation, such as <code>STRINGEQUALS</code>, that is applied to a key-value pair
   *          used to filter resources in a selection.</p>
   */
  ConditionType: ConditionType | string | undefined;

  /**
   * <p>The value in a key-value pair. For example, in <code>"ec2:ResourceTag/Department":
   *             "accounting"</code>, <code>"accounting"</code> is the value.</p>
   */
  ConditionValue: string | undefined;
}

export namespace Condition {
  export const filterSensitiveLog = (obj: Condition): any => ({
    ...obj
  });
  export const isa = (o: any): o is Condition => __isa(o, "Condition");
}

export enum ConditionType {
  STRINGEQUALS = "STRINGEQUALS"
}

/**
 * <p>The details of the copy operation.</p>
 */
export interface CopyAction {
  __type?: "CopyAction";
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for the copied backup. For example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.</p>
   */
  DestinationBackupVaultArn: string | undefined;

  /**
   * <p>Contains an array of <code>Transition</code> objects specifying how long in days before
   *          a recovery point transitions to cold storage or is deleted.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, on the console, the “expire after days” setting must be 90 days greater
   *          than the “transition to cold after days” setting. The “transition to cold after days”
   *          setting cannot be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: Lifecycle;
}

export namespace CopyAction {
  export const filterSensitiveLog = (obj: CopyAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyAction => __isa(o, "CopyAction");
}

/**
 * <p>Contains detailed information about a copy job.</p>
 */
export interface CopyJob {
  __type?: "CopyJob";
  /**
   * <p>The size, in bytes, of a copy job.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>The date and time a job to create a copy job is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM. </p>
   */
  CompletionDate?: Date;

  /**
   * <p>Uniquely identifies a request to AWS Backup to copy a resource.</p>
   */
  CopyJobId?: string;

  /**
   * <p>Contains information about the backup plan and rule that AWS Backup used to initiate the
   *          recovery point backup.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * <p>The date and time a copy job is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM. </p>
   */
  CreationDate?: Date;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a destination copy vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.</p>
   */
  DestinationBackupVaultArn?: string;

  /**
   * <p>An ARN that uniquely identifies a destination recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45. </p>
   */
  DestinationRecoveryPointArn?: string;

  /**
   * <p>Specifies the IAM role ARN used to copy the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The type of AWS resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. </p>
   */
  ResourceArn?: string;

  /**
   * <p>The type of AWS resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. </p>
   */
  ResourceType?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a source copy vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault. </p>
   */
  SourceBackupVaultArn?: string;

  /**
   * <p>An ARN that uniquely identifies a source recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45. </p>
   */
  SourceRecoveryPointArn?: string;

  /**
   * <p>The current state of a resource recovery point.</p>
   */
  State?: CopyJobState | string;

  /**
   * <p>A detailed message explaining the status of the job that to copy a resource.</p>
   */
  StatusMessage?: string;
}

export namespace CopyJob {
  export const filterSensitiveLog = (obj: CopyJob): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyJob => __isa(o, "CopyJob");
}

export enum CopyJobState {
  COMPLETED = "COMPLETED",
  CREATED = "CREATED",
  FAILED = "FAILED",
  RUNNING = "RUNNING"
}

export interface CreateBackupPlanInput {
  __type?: "CreateBackupPlanInput";
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
   *          executing the operation twice. If the request includes a <code>CreatorRequestId</code> that
   *          matches an existing backup plan, that plan is returned. This parameter is optional.</p>
   */
  CreatorRequestId?: string;
}

export namespace CreateBackupPlanInput {
  export const filterSensitiveLog = (obj: CreateBackupPlanInput): any => ({
    ...obj,
    ...(obj.BackupPlan && {
      BackupPlan: BackupPlanInput.filterSensitiveLog(obj.BackupPlan)
    }),
    ...(obj.BackupPlanTags && { BackupPlanTags: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateBackupPlanInput =>
    __isa(o, "CreateBackupPlanInput");
}

export interface CreateBackupPlanOutput {
  __type?: "CreateBackupPlanOutput";
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
   * <p>The date and time that a backup plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1024 bytes
   *          long. They cannot be edited.</p>
   */
  VersionId?: string;
}

export namespace CreateBackupPlanOutput {
  export const filterSensitiveLog = (obj: CreateBackupPlanOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateBackupPlanOutput =>
    __isa(o, "CreateBackupPlanOutput");
}

export interface CreateBackupSelectionInput {
  __type?: "CreateBackupSelectionInput";
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
   *          without the risk of executing the operation twice.</p>
   */
  CreatorRequestId?: string;
}

export namespace CreateBackupSelectionInput {
  export const filterSensitiveLog = (obj: CreateBackupSelectionInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateBackupSelectionInput =>
    __isa(o, "CreateBackupSelectionInput");
}

export interface CreateBackupSelectionOutput {
  __type?: "CreateBackupSelectionOutput";
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
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup
   *          plan.</p>
   */
  SelectionId?: string;
}

export namespace CreateBackupSelectionOutput {
  export const filterSensitiveLog = (
    obj: CreateBackupSelectionOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateBackupSelectionOutput =>
    __isa(o, "CreateBackupSelectionOutput");
}

export interface CreateBackupVaultInput {
  __type?: "CreateBackupVaultInput";
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>Metadata that you can assign to help organize the resources that you create. Each tag is
   *          a key-value pair.</p>
   */
  BackupVaultTags?: { [key: string]: string };

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of executing the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;
}

export namespace CreateBackupVaultInput {
  export const filterSensitiveLog = (obj: CreateBackupVaultInput): any => ({
    ...obj,
    ...(obj.BackupVaultTags && { BackupVaultTags: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateBackupVaultInput =>
    __isa(o, "CreateBackupVaultInput");
}

export interface CreateBackupVaultOutput {
  __type?: "CreateBackupVaultOutput";
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>The date and time a backup vault is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;
}

export namespace CreateBackupVaultOutput {
  export const filterSensitiveLog = (obj: CreateBackupVaultOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateBackupVaultOutput =>
    __isa(o, "CreateBackupVaultOutput");
}

export interface DeleteBackupPlanInput {
  __type?: "DeleteBackupPlanInput";
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;
}

export namespace DeleteBackupPlanInput {
  export const filterSensitiveLog = (obj: DeleteBackupPlanInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBackupPlanInput =>
    __isa(o, "DeleteBackupPlanInput");
}

export interface DeleteBackupPlanOutput {
  __type?: "DeleteBackupPlanOutput";
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
   * <p>The date and time a backup plan is deleted, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  DeletionDate?: Date;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version Ids cannot be edited.</p>
   */
  VersionId?: string;
}

export namespace DeleteBackupPlanOutput {
  export const filterSensitiveLog = (obj: DeleteBackupPlanOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBackupPlanOutput =>
    __isa(o, "DeleteBackupPlanOutput");
}

export interface DeleteBackupSelectionInput {
  __type?: "DeleteBackupSelectionInput";
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
  export const filterSensitiveLog = (obj: DeleteBackupSelectionInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBackupSelectionInput =>
    __isa(o, "DeleteBackupSelectionInput");
}

export interface DeleteBackupVaultAccessPolicyInput {
  __type?: "DeleteBackupVaultAccessPolicyInput";
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

export namespace DeleteBackupVaultAccessPolicyInput {
  export const filterSensitiveLog = (
    obj: DeleteBackupVaultAccessPolicyInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBackupVaultAccessPolicyInput =>
    __isa(o, "DeleteBackupVaultAccessPolicyInput");
}

export interface DeleteBackupVaultInput {
  __type?: "DeleteBackupVaultInput";
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and theAWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

export namespace DeleteBackupVaultInput {
  export const filterSensitiveLog = (obj: DeleteBackupVaultInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBackupVaultInput =>
    __isa(o, "DeleteBackupVaultInput");
}

export interface DeleteBackupVaultNotificationsInput {
  __type?: "DeleteBackupVaultNotificationsInput";
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

export namespace DeleteBackupVaultNotificationsInput {
  export const filterSensitiveLog = (
    obj: DeleteBackupVaultNotificationsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBackupVaultNotificationsInput =>
    __isa(o, "DeleteBackupVaultNotificationsInput");
}

export interface DeleteRecoveryPointInput {
  __type?: "DeleteRecoveryPointInput";
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string | undefined;
}

export namespace DeleteRecoveryPointInput {
  export const filterSensitiveLog = (obj: DeleteRecoveryPointInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRecoveryPointInput =>
    __isa(o, "DeleteRecoveryPointInput");
}

/**
 * <p>A dependent AWS service or resource returned an error to the AWS Backup service, and the
 *          action cannot be completed.</p>
 */
export interface DependencyFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "DependencyFailureException";
  $fault: "server";
  Code?: string;
  /**
   * <p></p>
   */
  Context?: string;

  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;
}

export namespace DependencyFailureException {
  export const filterSensitiveLog = (obj: DependencyFailureException): any => ({
    ...obj
  });
  export const isa = (o: any): o is DependencyFailureException =>
    __isa(o, "DependencyFailureException");
}

export interface DescribeBackupJobInput {
  __type?: "DescribeBackupJobInput";
  /**
   * <p>Uniquely identifies a request to AWS Backup to back up a resource.</p>
   */
  BackupJobId: string | undefined;
}

export namespace DescribeBackupJobInput {
  export const filterSensitiveLog = (obj: DescribeBackupJobInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeBackupJobInput =>
    __isa(o, "DescribeBackupJobInput");
}

export interface DescribeBackupJobOutput {
  __type?: "DescribeBackupJobOutput";
  /**
   * <p>Uniquely identifies a request to AWS Backup to back up a resource.</p>
   */
  BackupJobId?: string;

  /**
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>The size in bytes transferred to a backup vault at the time that the job status was
   *          queried.</p>
   */
  BytesTransferred?: number;

  /**
   * <p>The date and time that a job to create a backup job is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>Contains identifying information about the creation of a backup job, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan that is used to create it.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * <p>The date and time that a backup job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time that a job to back up resources is expected to be completed, in Unix
   *          format and Coordinated Universal Time (UTC). The value of
   *             <code>ExpectedCompletionDate</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  ExpectedCompletionDate?: Date;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>Contains an estimated percentage that is complete of a job at the time the job status
   *          was queried.</p>
   */
  PercentDone?: string;

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
   * <p>The type of AWS resource to be backed-up; for example, an Amazon Elastic Block Store
   *          (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.</p>
   */
  ResourceType?: string;

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
   * <p>The current state of a resource recovery point.</p>
   */
  State?: BackupJobState | string;

  /**
   * <p>A detailed message explaining the status of the job to back up a resource.</p>
   */
  StatusMessage?: string;
}

export namespace DescribeBackupJobOutput {
  export const filterSensitiveLog = (obj: DescribeBackupJobOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeBackupJobOutput =>
    __isa(o, "DescribeBackupJobOutput");
}

export interface DescribeBackupVaultInput {
  __type?: "DescribeBackupVaultInput";
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

export namespace DescribeBackupVaultInput {
  export const filterSensitiveLog = (obj: DescribeBackupVaultInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeBackupVaultInput =>
    __isa(o, "DescribeBackupVaultInput");
}

export interface DescribeBackupVaultOutput {
  __type?: "DescribeBackupVaultOutput";
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>The date and time that a backup vault is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of executing the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The server-side encryption key that is used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>The number of recovery points that are stored in a backup vault.</p>
   */
  NumberOfRecoveryPoints?: number;
}

export namespace DescribeBackupVaultOutput {
  export const filterSensitiveLog = (obj: DescribeBackupVaultOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeBackupVaultOutput =>
    __isa(o, "DescribeBackupVaultOutput");
}

export interface DescribeCopyJobInput {
  __type?: "DescribeCopyJobInput";
  /**
   * <p>Uniquely identifies a request to AWS Backup to copy a resource.</p>
   */
  CopyJobId: string | undefined;
}

export namespace DescribeCopyJobInput {
  export const filterSensitiveLog = (obj: DescribeCopyJobInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCopyJobInput =>
    __isa(o, "DescribeCopyJobInput");
}

export interface DescribeCopyJobOutput {
  __type?: "DescribeCopyJobOutput";
  /**
   * <p>Contains detailed information about a copy job.</p>
   */
  CopyJob?: CopyJob;
}

export namespace DescribeCopyJobOutput {
  export const filterSensitiveLog = (obj: DescribeCopyJobOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCopyJobOutput =>
    __isa(o, "DescribeCopyJobOutput");
}

export interface DescribeProtectedResourceInput {
  __type?: "DescribeProtectedResourceInput";
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DescribeProtectedResourceInput {
  export const filterSensitiveLog = (
    obj: DescribeProtectedResourceInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeProtectedResourceInput =>
    __isa(o, "DescribeProtectedResourceInput");
}

export interface DescribeProtectedResourceOutput {
  __type?: "DescribeProtectedResourceOutput";
  /**
   * <p>The date and time that a resource was last backed up, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>LastBackupTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  LastBackupTime?: Date;

  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The type of AWS resource saved as a recovery point; for example, an EBS volume or an
   *          Amazon RDS database.</p>
   */
  ResourceType?: string;
}

export namespace DescribeProtectedResourceOutput {
  export const filterSensitiveLog = (
    obj: DescribeProtectedResourceOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeProtectedResourceOutput =>
    __isa(o, "DescribeProtectedResourceOutput");
}

export interface DescribeRecoveryPointInput {
  __type?: "DescribeRecoveryPointInput";
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string | undefined;
}

export namespace DescribeRecoveryPointInput {
  export const filterSensitiveLog = (obj: DescribeRecoveryPointInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRecoveryPointInput =>
    __isa(o, "DescribeRecoveryPointInput");
}

export interface DescribeRecoveryPointOutput {
  __type?: "DescribeRecoveryPointOutput";
  /**
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and
   *             <code>MoveToColdStorageAt</code> timestamps.</p>
   */
  CalculatedLifecycle?: CalculatedLifecycle;

  /**
   * <p>The date and time that a job to create a recovery point is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>Contains identifying information about the creation of a recovery point, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan used to create it.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * <p>The date and time that a recovery point is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The server-side encryption key used to protect your backups; for example,
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>A Boolean value that is returned as <code>TRUE</code> if the specified recovery point is
   *          encrypted, or <code>FALSE</code> if the recovery point is not encrypted.</p>
   */
  IsEncrypted?: boolean;

  /**
   * <p>The date and time that a recovery point was last restored, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>LastRestoreTime</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  LastRestoreTime?: Date;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. AWS Backup transitions and expires backups automatically according to the
   *          lifecycle that you define. </p>
   *          <p>Backups that are transitioned to cold storage must be stored in cold storage for a
   *          minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than
   *          the “transition to cold after days” setting. The “transition to cold after days” setting
   *          cannot be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: Lifecycle;

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
   * <p>The type of AWS resource to save as a recovery point; for example, an Amazon Elastic
   *          Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS)
   *          database.</p>
   */
  ResourceType?: string;

  /**
   * <p>A status code specifying the state of the recovery point.</p>
   *          <note>
   *             <p>A partial status indicates that the recovery point was not successfully re-created
   *             and must be retried.</p>
   *          </note>
   */
  Status?: RecoveryPointStatus | string;

  /**
   * <p>Specifies the storage class of the recovery point. Valid values are <code>WARM</code> or
   *             <code>COLD</code>.</p>
   */
  StorageClass?: StorageClass | string;
}

export namespace DescribeRecoveryPointOutput {
  export const filterSensitiveLog = (
    obj: DescribeRecoveryPointOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRecoveryPointOutput =>
    __isa(o, "DescribeRecoveryPointOutput");
}

export interface DescribeRestoreJobInput {
  __type?: "DescribeRestoreJobInput";
  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId: string | undefined;
}

export namespace DescribeRestoreJobInput {
  export const filterSensitiveLog = (obj: DescribeRestoreJobInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRestoreJobInput =>
    __isa(o, "DescribeRestoreJobInput");
}

export interface DescribeRestoreJobOutput {
  __type?: "DescribeRestoreJobOutput";
  /**
   * <p>The size, in bytes, of the restored resource.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>The date and time that a job to restore a recovery point is completed, in Unix format
   *          and Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate
   *          to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource whose recovery point
   *          is being restored. The format of the ARN depends on the resource type of the backed-up
   *          resource.</p>
   */
  CreatedResourceArn?: string;

  /**
   * <p>The date and time that a restore job is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The amount of time in minutes that a job restoring a recovery point is expected to
   *          take.</p>
   */
  ExpectedCompletionTimeMinutes?: number;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>Contains an estimated percentage that is complete of a job at the time the job status
   *          was queried.</p>
   */
  PercentDone?: string;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId?: string;

  /**
   * <p>Status code specifying the state of the job that is initiated by AWS Backup to restore a
   *          recovery point.</p>
   */
  Status?: RestoreJobStatus | string;

  /**
   * <p>A detailed message explaining the status of a job to restore a recovery point.</p>
   */
  StatusMessage?: string;
}

export namespace DescribeRestoreJobOutput {
  export const filterSensitiveLog = (obj: DescribeRestoreJobOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRestoreJobOutput =>
    __isa(o, "DescribeRestoreJobOutput");
}

export interface ExportBackupPlanTemplateInput {
  __type?: "ExportBackupPlanTemplateInput";
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;
}

export namespace ExportBackupPlanTemplateInput {
  export const filterSensitiveLog = (
    obj: ExportBackupPlanTemplateInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExportBackupPlanTemplateInput =>
    __isa(o, "ExportBackupPlanTemplateInput");
}

export interface ExportBackupPlanTemplateOutput {
  __type?: "ExportBackupPlanTemplateOutput";
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
  export const filterSensitiveLog = (
    obj: ExportBackupPlanTemplateOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExportBackupPlanTemplateOutput =>
    __isa(o, "ExportBackupPlanTemplateOutput");
}

export interface GetBackupPlanFromJSONInput {
  __type?: "GetBackupPlanFromJSONInput";
  /**
   * <p>A customer-supplied backup plan document in JSON format.</p>
   */
  BackupPlanTemplateJson: string | undefined;
}

export namespace GetBackupPlanFromJSONInput {
  export const filterSensitiveLog = (obj: GetBackupPlanFromJSONInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBackupPlanFromJSONInput =>
    __isa(o, "GetBackupPlanFromJSONInput");
}

export interface GetBackupPlanFromJSONOutput {
  __type?: "GetBackupPlanFromJSONOutput";
  /**
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   */
  BackupPlan?: BackupPlan;
}

export namespace GetBackupPlanFromJSONOutput {
  export const filterSensitiveLog = (
    obj: GetBackupPlanFromJSONOutput
  ): any => ({
    ...obj,
    ...(obj.BackupPlan && {
      BackupPlan: BackupPlan.filterSensitiveLog(obj.BackupPlan)
    })
  });
  export const isa = (o: any): o is GetBackupPlanFromJSONOutput =>
    __isa(o, "GetBackupPlanFromJSONOutput");
}

export interface GetBackupPlanFromTemplateInput {
  __type?: "GetBackupPlanFromTemplateInput";
  /**
   * <p>Uniquely identifies a stored backup plan template.</p>
   */
  BackupPlanTemplateId: string | undefined;
}

export namespace GetBackupPlanFromTemplateInput {
  export const filterSensitiveLog = (
    obj: GetBackupPlanFromTemplateInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBackupPlanFromTemplateInput =>
    __isa(o, "GetBackupPlanFromTemplateInput");
}

export interface GetBackupPlanFromTemplateOutput {
  __type?: "GetBackupPlanFromTemplateOutput";
  /**
   * <p>Returns the body of a backup plan based on the target template, including the name,
   *          rules, and backup vault of the plan.</p>
   */
  BackupPlanDocument?: BackupPlan;
}

export namespace GetBackupPlanFromTemplateOutput {
  export const filterSensitiveLog = (
    obj: GetBackupPlanFromTemplateOutput
  ): any => ({
    ...obj,
    ...(obj.BackupPlanDocument && {
      BackupPlanDocument: BackupPlan.filterSensitiveLog(obj.BackupPlanDocument)
    })
  });
  export const isa = (o: any): o is GetBackupPlanFromTemplateOutput =>
    __isa(o, "GetBackupPlanFromTemplateOutput");
}

export interface GetBackupPlanInput {
  __type?: "GetBackupPlanInput";
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
  export const filterSensitiveLog = (obj: GetBackupPlanInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBackupPlanInput =>
    __isa(o, "GetBackupPlanInput");
}

export interface GetBackupPlanOutput {
  __type?: "GetBackupPlanOutput";
  /**
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   */
  BackupPlan?: BackupPlan;

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
   * <p>The date and time that a backup plan is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of executing the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The date and time that a backup plan is deleted, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  DeletionDate?: Date;

  /**
   * <p>The last time a job to back up resources was executed with this backup plan. A date and
   *          time, in Unix format and Coordinated Universal Time (UTC). The value of
   *             <code>LastExecutionDate</code> is accurate to milliseconds. For example, the value
   *          1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastExecutionDate?: Date;

  /**
   * <p>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes
   *          long. Version IDs cannot be edited.</p>
   */
  VersionId?: string;
}

export namespace GetBackupPlanOutput {
  export const filterSensitiveLog = (obj: GetBackupPlanOutput): any => ({
    ...obj,
    ...(obj.BackupPlan && {
      BackupPlan: BackupPlan.filterSensitiveLog(obj.BackupPlan)
    })
  });
  export const isa = (o: any): o is GetBackupPlanOutput =>
    __isa(o, "GetBackupPlanOutput");
}

export interface GetBackupSelectionInput {
  __type?: "GetBackupSelectionInput";
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
  export const filterSensitiveLog = (obj: GetBackupSelectionInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBackupSelectionInput =>
    __isa(o, "GetBackupSelectionInput");
}

export interface GetBackupSelectionOutput {
  __type?: "GetBackupSelectionOutput";
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * <p>Specifies the body of a request to assign a set of resources to a backup plan.</p>
   */
  BackupSelection?: BackupSelection;

  /**
   * <p>The date and time a backup selection is created, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried
   *          without the risk of executing the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup
   *          plan.</p>
   */
  SelectionId?: string;
}

export namespace GetBackupSelectionOutput {
  export const filterSensitiveLog = (obj: GetBackupSelectionOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBackupSelectionOutput =>
    __isa(o, "GetBackupSelectionOutput");
}

export interface GetBackupVaultAccessPolicyInput {
  __type?: "GetBackupVaultAccessPolicyInput";
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

export namespace GetBackupVaultAccessPolicyInput {
  export const filterSensitiveLog = (
    obj: GetBackupVaultAccessPolicyInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBackupVaultAccessPolicyInput =>
    __isa(o, "GetBackupVaultAccessPolicyInput");
}

export interface GetBackupVaultAccessPolicyOutput {
  __type?: "GetBackupVaultAccessPolicyOutput";
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>The backup vault access policy document in JSON format.</p>
   */
  Policy?: string;
}

export namespace GetBackupVaultAccessPolicyOutput {
  export const filterSensitiveLog = (
    obj: GetBackupVaultAccessPolicyOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBackupVaultAccessPolicyOutput =>
    __isa(o, "GetBackupVaultAccessPolicyOutput");
}

export interface GetBackupVaultNotificationsInput {
  __type?: "GetBackupVaultNotificationsInput";
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;
}

export namespace GetBackupVaultNotificationsInput {
  export const filterSensitiveLog = (
    obj: GetBackupVaultNotificationsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBackupVaultNotificationsInput =>
    __isa(o, "GetBackupVaultNotificationsInput");
}

export interface GetBackupVaultNotificationsOutput {
  __type?: "GetBackupVaultNotificationsOutput";
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>An array of events that indicate the status of jobs to back up resources to the backup
   *          vault.</p>
   */
  BackupVaultEvents?: (BackupVaultEvent | string)[];

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the Region where they are
   *          created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An ARN that uniquely identifies an Amazon Simple Notification Service (Amazon SNS)
   *          topic; for example, <code>arn:aws:sns:us-west-2:111122223333:MyTopic</code>.</p>
   */
  SNSTopicArn?: string;
}

export namespace GetBackupVaultNotificationsOutput {
  export const filterSensitiveLog = (
    obj: GetBackupVaultNotificationsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBackupVaultNotificationsOutput =>
    __isa(o, "GetBackupVaultNotificationsOutput");
}

export interface GetRecoveryPointRestoreMetadataInput {
  __type?: "GetRecoveryPointRestoreMetadataInput";
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string | undefined;
}

export namespace GetRecoveryPointRestoreMetadataInput {
  export const filterSensitiveLog = (
    obj: GetRecoveryPointRestoreMetadataInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRecoveryPointRestoreMetadataInput =>
    __isa(o, "GetRecoveryPointRestoreMetadataInput");
}

export interface GetRecoveryPointRestoreMetadataOutput {
  __type?: "GetRecoveryPointRestoreMetadataOutput";
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
   * <p>The set of metadata key-value pairs that describes the original configuration of the
   *          backed-up resource. These values vary depending on the service that is being
   *          restored.</p>
   */
  RestoreMetadata?: { [key: string]: string };
}

export namespace GetRecoveryPointRestoreMetadataOutput {
  export const filterSensitiveLog = (
    obj: GetRecoveryPointRestoreMetadataOutput
  ): any => ({
    ...obj,
    ...(obj.RestoreMetadata && { RestoreMetadata: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is GetRecoveryPointRestoreMetadataOutput =>
    __isa(o, "GetRecoveryPointRestoreMetadataOutput");
}

export interface GetSupportedResourceTypesOutput {
  __type?: "GetSupportedResourceTypesOutput";
  /**
   * <p>Contains a string with the supported AWS resource types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EBS</code> for Amazon Elastic Block Store</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> for AWS Storage Gateway</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DDB</code> for Amazon DynamoDB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EFS</code> for Amazon Elastic File System</p>
   *             </li>
   *          </ul>
   */
  ResourceTypes?: string[];
}

export namespace GetSupportedResourceTypesOutput {
  export const filterSensitiveLog = (
    obj: GetSupportedResourceTypesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSupportedResourceTypesOutput =>
    __isa(o, "GetSupportedResourceTypesOutput");
}

/**
 * <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 */
export interface InvalidParameterValueException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  Code?: string;
  /**
   * <p></p>
   */
  Context?: string;

  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;
}

export namespace InvalidParameterValueException {
  export const filterSensitiveLog = (
    obj: InvalidParameterValueException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidParameterValueException =>
    __isa(o, "InvalidParameterValueException");
}

/**
 * <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Code?: string;
  /**
   * <p></p>
   */
  Context?: string;

  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRequestException =>
    __isa(o, "InvalidRequestException");
}

/**
 * <p>Contains an array of <code>Transition</code> objects specifying how long in days before
 *          a recovery point transitions to cold storage or is deleted.</p>
 *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
 *          days. Therefore, on the console, the “expire after days” setting must be 90 days greater
 *          than the “transition to cold after days” setting. The “transition to cold after days”
 *          setting cannot be changed after a backup has been transitioned to cold. </p>
 */
export interface Lifecycle {
  __type?: "Lifecycle";
  /**
   * <p>Specifies the number of days after creation that a recovery point is deleted. Must be
   *          greater than 90 days plus <code>MoveToColdStorageAfterDays</code>.</p>
   */
  DeleteAfterDays?: number;

  /**
   * <p>Specifies the number of days after creation that a recovery point is moved to cold
   *          storage.</p>
   */
  MoveToColdStorageAfterDays?: number;
}

export namespace Lifecycle {
  export const filterSensitiveLog = (obj: Lifecycle): any => ({
    ...obj
  });
  export const isa = (o: any): o is Lifecycle => __isa(o, "Lifecycle");
}

/**
 * <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Code?: string;
  /**
   * <p></p>
   */
  Context?: string;

  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface ListBackupJobsInput {
  __type?: "ListBackupJobsInput";
  /**
   * <p>Returns only backup jobs that will be stored in the specified backup vault. Backup
   *          vaults are identified by names that are unique to the account used to create them and the
   *          AWS Region where they are created. They consist of lowercase letters, numbers, and
   *          hyphens.</p>
   */
  ByBackupVaultName?: string;

  /**
   * <p>Returns only backup jobs that were created after the specified date.</p>
   */
  ByCreatedAfter?: Date;

  /**
   * <p>Returns only backup jobs that were created before the specified date.</p>
   */
  ByCreatedBefore?: Date;

  /**
   * <p>Returns only backup jobs that match the specified resource Amazon Resource Name
   *          (ARN).</p>
   */
  ByResourceArn?: string;

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
   *                   <code>EFS</code> for Amazon Elastic File System</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> for AWS Storage Gateway</p>
   *             </li>
   *          </ul>
   */
  ByResourceType?: string;

  /**
   * <p>Returns only backup jobs that are in the specified state.</p>
   */
  ByState?: BackupJobState | string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export namespace ListBackupJobsInput {
  export const filterSensitiveLog = (obj: ListBackupJobsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBackupJobsInput =>
    __isa(o, "ListBackupJobsInput");
}

export interface ListBackupJobsOutput {
  __type?: "ListBackupJobsOutput";
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
  export const filterSensitiveLog = (obj: ListBackupJobsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBackupJobsOutput =>
    __isa(o, "ListBackupJobsOutput");
}

export interface ListBackupPlansInput {
  __type?: "ListBackupPlansInput";
  /**
   * <p>A Boolean value with a default value of <code>FALSE</code> that returns deleted backup
   *          plans when set to <code>TRUE</code>.</p>
   */
  IncludeDeleted?: boolean;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export namespace ListBackupPlansInput {
  export const filterSensitiveLog = (obj: ListBackupPlansInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBackupPlansInput =>
    __isa(o, "ListBackupPlansInput");
}

export interface ListBackupPlansOutput {
  __type?: "ListBackupPlansOutput";
  /**
   * <p>An array of backup plan list items containing metadata about your saved backup
   *          plans.</p>
   */
  BackupPlansList?: BackupPlansListMember[];

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export namespace ListBackupPlansOutput {
  export const filterSensitiveLog = (obj: ListBackupPlansOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBackupPlansOutput =>
    __isa(o, "ListBackupPlansOutput");
}

export interface ListBackupPlanTemplatesInput {
  __type?: "ListBackupPlanTemplatesInput";
  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export namespace ListBackupPlanTemplatesInput {
  export const filterSensitiveLog = (
    obj: ListBackupPlanTemplatesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBackupPlanTemplatesInput =>
    __isa(o, "ListBackupPlanTemplatesInput");
}

export interface ListBackupPlanTemplatesOutput {
  __type?: "ListBackupPlanTemplatesOutput";
  /**
   * <p>An array of template list items containing metadata about your saved templates.</p>
   */
  BackupPlanTemplatesList?: BackupPlanTemplatesListMember[];

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export namespace ListBackupPlanTemplatesOutput {
  export const filterSensitiveLog = (
    obj: ListBackupPlanTemplatesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBackupPlanTemplatesOutput =>
    __isa(o, "ListBackupPlanTemplatesOutput");
}

export interface ListBackupPlanVersionsInput {
  __type?: "ListBackupPlanVersionsInput";
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export namespace ListBackupPlanVersionsInput {
  export const filterSensitiveLog = (
    obj: ListBackupPlanVersionsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBackupPlanVersionsInput =>
    __isa(o, "ListBackupPlanVersionsInput");
}

export interface ListBackupPlanVersionsOutput {
  __type?: "ListBackupPlanVersionsOutput";
  /**
   * <p>An array of version list items containing metadata about your backup plans.</p>
   */
  BackupPlanVersionsList?: BackupPlansListMember[];

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export namespace ListBackupPlanVersionsOutput {
  export const filterSensitiveLog = (
    obj: ListBackupPlanVersionsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBackupPlanVersionsOutput =>
    __isa(o, "ListBackupPlanVersionsOutput");
}

export interface ListBackupSelectionsInput {
  __type?: "ListBackupSelectionsInput";
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export namespace ListBackupSelectionsInput {
  export const filterSensitiveLog = (obj: ListBackupSelectionsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBackupSelectionsInput =>
    __isa(o, "ListBackupSelectionsInput");
}

export interface ListBackupSelectionsOutput {
  __type?: "ListBackupSelectionsOutput";
  /**
   * <p>An array of backup selection list items containing metadata about each resource in the
   *          list.</p>
   */
  BackupSelectionsList?: BackupSelectionsListMember[];

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export namespace ListBackupSelectionsOutput {
  export const filterSensitiveLog = (obj: ListBackupSelectionsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBackupSelectionsOutput =>
    __isa(o, "ListBackupSelectionsOutput");
}

export interface ListBackupVaultsInput {
  __type?: "ListBackupVaultsInput";
  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export namespace ListBackupVaultsInput {
  export const filterSensitiveLog = (obj: ListBackupVaultsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBackupVaultsInput =>
    __isa(o, "ListBackupVaultsInput");
}

export interface ListBackupVaultsOutput {
  __type?: "ListBackupVaultsOutput";
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
  export const filterSensitiveLog = (obj: ListBackupVaultsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBackupVaultsOutput =>
    __isa(o, "ListBackupVaultsOutput");
}

export interface ListCopyJobsInput {
  __type?: "ListCopyJobsInput";
  /**
   * <p>Returns only copy jobs that were created after the specified date.</p>
   */
  ByCreatedAfter?: Date;

  /**
   * <p>Returns only copy jobs that were created before the specified date.</p>
   */
  ByCreatedBefore?: Date;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a source backup vault to copy from; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault. </p>
   */
  ByDestinationVaultArn?: string;

  /**
   * <p>Returns only copy jobs that match the specified resource Amazon Resource Name (ARN). </p>
   */
  ByResourceArn?: string;

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
   *                   <code>EFS</code> for Amazon Elastic File System</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> for AWS Storage Gateway</p>
   *             </li>
   *          </ul>
   */
  ByResourceType?: string;

  /**
   * <p>Returns only copy jobs that are in the specified state.</p>
   */
  ByState?: CopyJobState | string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned items.
   *          For example, if a request is made to return maxResults number of items,
   *          NextToken allows you to return more items in your list starting at the location pointed to by the next token. </p>
   */
  NextToken?: string;
}

export namespace ListCopyJobsInput {
  export const filterSensitiveLog = (obj: ListCopyJobsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCopyJobsInput =>
    __isa(o, "ListCopyJobsInput");
}

export interface ListCopyJobsOutput {
  __type?: "ListCopyJobsOutput";
  /**
   * <p>An array of structures containing metadata about your copy jobs returned in JSON format. </p>
   */
  CopyJobs?: CopyJob[];

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items,
   *          NextToken allows you to return more items in your list starting at the location pointed to by the next token. </p>
   */
  NextToken?: string;
}

export namespace ListCopyJobsOutput {
  export const filterSensitiveLog = (obj: ListCopyJobsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCopyJobsOutput =>
    __isa(o, "ListCopyJobsOutput");
}

export interface ListProtectedResourcesInput {
  __type?: "ListProtectedResourcesInput";
  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export namespace ListProtectedResourcesInput {
  export const filterSensitiveLog = (
    obj: ListProtectedResourcesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListProtectedResourcesInput =>
    __isa(o, "ListProtectedResourcesInput");
}

export interface ListProtectedResourcesOutput {
  __type?: "ListProtectedResourcesOutput";
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of resources successfully backed up by AWS Backup including the time the
   *          resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource
   *          type.</p>
   */
  Results?: ProtectedResource[];
}

export namespace ListProtectedResourcesOutput {
  export const filterSensitiveLog = (
    obj: ListProtectedResourcesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListProtectedResourcesOutput =>
    __isa(o, "ListProtectedResourcesOutput");
}

export interface ListRecoveryPointsByBackupVaultInput {
  __type?: "ListRecoveryPointsByBackupVaultInput";
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>Returns only recovery points that match the specified backup plan ID.</p>
   */
  ByBackupPlanId?: string;

  /**
   * <p>Returns only recovery points that were created after the specified timestamp.</p>
   */
  ByCreatedAfter?: Date;

  /**
   * <p>Returns only recovery points that were created before the specified timestamp.</p>
   */
  ByCreatedBefore?: Date;

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
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export namespace ListRecoveryPointsByBackupVaultInput {
  export const filterSensitiveLog = (
    obj: ListRecoveryPointsByBackupVaultInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRecoveryPointsByBackupVaultInput =>
    __isa(o, "ListRecoveryPointsByBackupVaultInput");
}

export interface ListRecoveryPointsByBackupVaultOutput {
  __type?: "ListRecoveryPointsByBackupVaultOutput";
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
  export const filterSensitiveLog = (
    obj: ListRecoveryPointsByBackupVaultOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRecoveryPointsByBackupVaultOutput =>
    __isa(o, "ListRecoveryPointsByBackupVaultOutput");
}

export interface ListRecoveryPointsByResourceInput {
  __type?: "ListRecoveryPointsByResourceInput";
  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListRecoveryPointsByResourceInput {
  export const filterSensitiveLog = (
    obj: ListRecoveryPointsByResourceInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRecoveryPointsByResourceInput =>
    __isa(o, "ListRecoveryPointsByResourceInput");
}

export interface ListRecoveryPointsByResourceOutput {
  __type?: "ListRecoveryPointsByResourceOutput";
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
   */
  RecoveryPoints?: RecoveryPointByResource[];
}

export namespace ListRecoveryPointsByResourceOutput {
  export const filterSensitiveLog = (
    obj: ListRecoveryPointsByResourceOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRecoveryPointsByResourceOutput =>
    __isa(o, "ListRecoveryPointsByResourceOutput");
}

export interface ListRestoreJobsInput {
  __type?: "ListRestoreJobsInput";
  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;
}

export namespace ListRestoreJobsInput {
  export const filterSensitiveLog = (obj: ListRestoreJobsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRestoreJobsInput =>
    __isa(o, "ListRestoreJobsInput");
}

export interface ListRestoreJobsOutput {
  __type?: "ListRestoreJobsOutput";
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of objects that contain detailed information about jobs to restore saved
   *          resources.</p>
   */
  RestoreJobs?: RestoreJobsListMember[];
}

export namespace ListRestoreJobsOutput {
  export const filterSensitiveLog = (obj: ListRestoreJobsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRestoreJobsOutput =>
    __isa(o, "ListRestoreJobsOutput");
}

export interface ListTagsInput {
  __type?: "ListTagsInput";
  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is
   *          made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you
   *          to return more items in your list starting at the location pointed to by the next
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the type of resource. Valid targets for <code>ListTags</code> are recovery
   *          points, backup plans, and backup vaults.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsInput {
  export const filterSensitiveLog = (obj: ListTagsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsInput => __isa(o, "ListTagsInput");
}

export interface ListTagsOutput {
  __type?: "ListTagsOutput";
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
  export const filterSensitiveLog = (obj: ListTagsOutput): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is ListTagsOutput =>
    __isa(o, "ListTagsOutput");
}

/**
 * <p>Indicates that a required parameter is missing.</p>
 */
export interface MissingParameterValueException
  extends __SmithyException,
    $MetadataBearer {
  name: "MissingParameterValueException";
  $fault: "client";
  Code?: string;
  /**
   * <p></p>
   */
  Context?: string;

  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;
}

export namespace MissingParameterValueException {
  export const filterSensitiveLog = (
    obj: MissingParameterValueException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MissingParameterValueException =>
    __isa(o, "MissingParameterValueException");
}

/**
 * <p>A structure that contains information about a backed-up resource.</p>
 */
export interface ProtectedResource {
  __type?: "ProtectedResource";
  /**
   * <p>The date and time a resource was last backed up, in Unix format and Coordinated
   *          Universal Time (UTC). The value of <code>LastBackupTime</code> is accurate to milliseconds.
   *          For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  LastBackupTime?: Date;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The type of AWS resource; for example, an Amazon Elastic Block Store (Amazon EBS) volume
   *          or an Amazon Relational Database Service (Amazon RDS) database.</p>
   */
  ResourceType?: string;
}

export namespace ProtectedResource {
  export const filterSensitiveLog = (obj: ProtectedResource): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProtectedResource =>
    __isa(o, "ProtectedResource");
}

export interface PutBackupVaultAccessPolicyInput {
  __type?: "PutBackupVaultAccessPolicyInput";
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The backup vault access policy document in JSON format.</p>
   */
  Policy?: string;
}

export namespace PutBackupVaultAccessPolicyInput {
  export const filterSensitiveLog = (
    obj: PutBackupVaultAccessPolicyInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutBackupVaultAccessPolicyInput =>
    __isa(o, "PutBackupVaultAccessPolicyInput");
}

export interface PutBackupVaultNotificationsInput {
  __type?: "PutBackupVaultNotificationsInput";
  /**
   * <p>An array of events that indicate the status of jobs to back up resources to the backup
   *          vault.</p>
   */
  BackupVaultEvents: (BackupVaultEvent | string)[] | undefined;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for
   *          example, <code>arn:aws:sns:us-west-2:111122223333:MyVaultTopic</code>.</p>
   */
  SNSTopicArn: string | undefined;
}

export namespace PutBackupVaultNotificationsInput {
  export const filterSensitiveLog = (
    obj: PutBackupVaultNotificationsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutBackupVaultNotificationsInput =>
    __isa(o, "PutBackupVaultNotificationsInput");
}

/**
 * <p>Contains detailed information about the recovery points stored in a backup vault.</p>
 */
export interface RecoveryPointByBackupVault {
  __type?: "RecoveryPointByBackupVault";
  /**
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and
   *             <code>MoveToColdStorageAt</code> timestamps.</p>
   */
  CalculatedLifecycle?: CalculatedLifecycle;

  /**
   * <p>The date and time a job to restore a recovery point is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>Contains identifying information about the creation of a recovery point, including the
   *             <code>BackupPlanArn</code>, <code>BackupPlanId</code>, <code>BackupPlanVersion</code>,
   *          and <code>BackupRuleId</code> of the backup plan that is used to create it.</p>
   */
  CreatedBy?: RecoveryPointCreator;

  /**
   * <p>The date and time a recovery point is created, in Unix format and Coordinated Universal
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
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

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
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. AWS Backup transitions and expires backups automatically according to the
   *          lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “expire after days” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the
   *          resource type.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The type of AWS resource saved as a recovery point; for example, an Amazon Elastic Block
   *          Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS)
   *          database.</p>
   */
  ResourceType?: string;

  /**
   * <p>A status code specifying the state of the recovery point.</p>
   */
  Status?: RecoveryPointStatus | string;
}

export namespace RecoveryPointByBackupVault {
  export const filterSensitiveLog = (obj: RecoveryPointByBackupVault): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecoveryPointByBackupVault =>
    __isa(o, "RecoveryPointByBackupVault");
}

/**
 * <p>Contains detailed information about a saved recovery point.</p>
 */
export interface RecoveryPointByResource {
  __type?: "RecoveryPointByResource";
  /**
   * <p>The size, in bytes, of a backup.</p>
   */
  BackupSizeBytes?: number;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>The date and time a recovery point is created, in Unix format and Coordinated Universal
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
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>A status code specifying the state of the recovery point.</p>
   */
  Status?: RecoveryPointStatus | string;
}

export namespace RecoveryPointByResource {
  export const filterSensitiveLog = (obj: RecoveryPointByResource): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecoveryPointByResource =>
    __isa(o, "RecoveryPointByResource");
}

/**
 * <p>Contains information about the backup plan and rule that AWS Backup used to initiate the
 *          recovery point backup.</p>
 */
export interface RecoveryPointCreator {
  __type?: "RecoveryPointCreator";
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
  export const filterSensitiveLog = (obj: RecoveryPointCreator): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecoveryPointCreator =>
    __isa(o, "RecoveryPointCreator");
}

export enum RecoveryPointStatus {
  COMPLETED = "COMPLETED",
  DELETING = "DELETING",
  EXPIRED = "EXPIRED",
  PARTIAL = "PARTIAL"
}

/**
 * <p>A resource that is required for the action doesn't exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Code?: string;
  /**
   * <p></p>
   */
  Context?: string;

  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>Contains metadata about a restore job.</p>
 */
export interface RestoreJobsListMember {
  __type?: "RestoreJobsListMember";
  /**
   * <p>The size, in bytes, of the restored resource.</p>
   */
  BackupSizeInBytes?: number;

  /**
   * <p>The date and time a job to restore a recovery point is completed, in Unix format and
   *          Coordinated Universal Time (UTC). The value of <code>CompletionDate</code> is accurate to
   *          milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018
   *          12:11:30.087 AM.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  CreatedResourceArn?: string;

  /**
   * <p>The date and time a restore job is created, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The amount of time in minutes that a job restoring a recovery point is expected to
   *          take.</p>
   */
  ExpectedCompletionTimeMinutes?: number;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>Contains an estimated percentage complete of a job at the time the job status was
   *          queried.</p>
   */
  PercentDone?: string;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId?: string;

  /**
   * <p>A status code specifying the state of the job initiated by AWS Backup to restore a
   *          recovery point.</p>
   */
  Status?: RestoreJobStatus | string;

  /**
   * <p>A detailed message explaining the status of the job to restore a recovery point.</p>
   */
  StatusMessage?: string;
}

export namespace RestoreJobsListMember {
  export const filterSensitiveLog = (obj: RestoreJobsListMember): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreJobsListMember =>
    __isa(o, "RestoreJobsListMember");
}

export enum RestoreJobStatus {
  ABORTED = "ABORTED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNING = "RUNNING"
}

/**
 * <p>The request failed due to a temporary failure of the server.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Code?: string;
  /**
   * <p></p>
   */
  Context?: string;

  Message?: string;
  /**
   * <p></p>
   */
  Type?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (
    obj: ServiceUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUnavailableException =>
    __isa(o, "ServiceUnavailableException");
}

export interface StartBackupJobInput {
  __type?: "StartBackupJobInput";
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The amount of time AWS Backup attempts a backup before canceling the job and returning
   *          an error.</p>
   */
  CompleteWindowMinutes?: number;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example,
   *             <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>A customer chosen string that can be used to distinguish between calls to
   *             <code>StartBackupJob</code>.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. AWS Backup will transition and expire backups automatically according to the
   *          lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “expire after days” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>To help organize your resources, you can assign your own metadata to the resources that
   *          you create. Each tag is a key-value pair.</p>
   */
  RecoveryPointTags?: { [key: string]: string };

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN
   *          depends on the resource type.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The amount of time in minutes before beginning a backup.</p>
   */
  StartWindowMinutes?: number;
}

export namespace StartBackupJobInput {
  export const filterSensitiveLog = (obj: StartBackupJobInput): any => ({
    ...obj,
    ...(obj.RecoveryPointTags && { RecoveryPointTags: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is StartBackupJobInput =>
    __isa(o, "StartBackupJobInput");
}

export interface StartBackupJobOutput {
  __type?: "StartBackupJobOutput";
  /**
   * <p>Uniquely identifies a request to AWS Backup to back up a resource.</p>
   */
  BackupJobId?: string;

  /**
   * <p>The date and time that a backup job is started, in Unix format and Coordinated Universal
   *          Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For
   *          example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087
   *          AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;
}

export namespace StartBackupJobOutput {
  export const filterSensitiveLog = (obj: StartBackupJobOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartBackupJobOutput =>
    __isa(o, "StartBackupJobOutput");
}

export interface StartCopyJobInput {
  __type?: "StartCopyJobInput";
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a destination backup vault to copy to; for example,
   *          <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  DestinationBackupVaultArn: string | undefined;

  /**
   * <p>Specifies the IAM role ARN used to copy the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>A customer chosen string that can be used to distinguish between calls to
   *          <code>StartCopyJob</code>.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>Contains an array of <code>Transition</code> objects specifying how long in days before
   *          a recovery point transitions to cold storage or is deleted.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, on the console, the “expire after days” setting must be 90 days greater
   *          than the “transition to cold after days” setting. The “transition to cold after days”
   *          setting cannot be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>An ARN that uniquely identifies a recovery point to use for the copy job; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45. </p>
   */
  RecoveryPointArn: string | undefined;

  /**
   * <p>The name of a logical source container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens. ></p>
   */
  SourceBackupVaultName: string | undefined;
}

export namespace StartCopyJobInput {
  export const filterSensitiveLog = (obj: StartCopyJobInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartCopyJobInput =>
    __isa(o, "StartCopyJobInput");
}

export interface StartCopyJobOutput {
  __type?: "StartCopyJobOutput";
  /**
   * <p>Uniquely identifies a request to AWS Backup to copy a resource.</p>
   */
  CopyJobId?: string;

  /**
   * <p>The date and time that a backup job is started, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM. ></p>
   */
  CreationDate?: Date;
}

export namespace StartCopyJobOutput {
  export const filterSensitiveLog = (obj: StartCopyJobOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartCopyJobOutput =>
    __isa(o, "StartCopyJobOutput");
}

export interface StartRestoreJobInput {
  __type?: "StartRestoreJobInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that AWS Backup uses to create the target
   *          recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>A customer chosen string that can be used to distinguish between calls to
   *             <code>StartRestoreJob</code>.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>A set of metadata key-value pairs. Contains information, such as a resource name,
   *          required to restore a recovery point.</p>
   *          <p> You can get configuration metadata about a resource at the time it was backed-up by
   *          calling <code>GetRecoveryPointRestoreMetadata</code>. However, values in addition to those
   *          provided by <code>GetRecoveryPointRestoreMetadata</code> might be required to restore a
   *          resource. For example, you might need to provide a new resource name if the original
   *          already exists.</p>
   *          <p>You need to specify specific metadata to restore an Amazon Elastic File System (Amazon EFS) instance:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>file-system-id</code>: ID of the Amazon EFS file system that is backed up
   *                by AWS Backup. Returned in <code>GetRecoveryPointRestoreMetadata</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Encrypted</code>:  A Boolean value that, if true, specifies that the
   *                file system is encrypted. If <code>KmsKeyId</code> is specified,
   *                <code>Encrypted</code> must be set to <code>true</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KmsKeyId</code>: Specifies the AWS KMS key that is used to encrypt the
   *                restored file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PerformanceMode</code>: Specifies the throughput mode of the file
   *                system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreationToken</code>: A user-supplied value that ensures the
   *                uniqueness (idempotency) of the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>newFileSystem</code>:  A Boolean value that, if true, specifies that
   *                the recovery point is restored to a new Amazon EFS file system.</p>
   *             </li>
   *          </ul>
   */
  Metadata: { [key: string]: string } | undefined;

  /**
   * <p>An ARN that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string | undefined;

  /**
   * <p>Starts a job to restore a recovery point for one of the following resources:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EBS</code> for Amazon Elastic Block Store</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Storage Gateway</code> for AWS Storage Gateway</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RDS</code> for Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DDB</code> for Amazon DynamoDB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EFS</code> for Amazon Elastic File System</p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;
}

export namespace StartRestoreJobInput {
  export const filterSensitiveLog = (obj: StartRestoreJobInput): any => ({
    ...obj,
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is StartRestoreJobInput =>
    __isa(o, "StartRestoreJobInput");
}

export interface StartRestoreJobOutput {
  __type?: "StartRestoreJobOutput";
  /**
   * <p>Uniquely identifies the job that restores a recovery point.</p>
   */
  RestoreJobId?: string;
}

export namespace StartRestoreJobOutput {
  export const filterSensitiveLog = (obj: StartRestoreJobOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartRestoreJobOutput =>
    __isa(o, "StartRestoreJobOutput");
}

export interface StopBackupJobInput {
  __type?: "StopBackupJobInput";
  /**
   * <p>Uniquely identifies a request to AWS Backup to back up a resource.</p>
   */
  BackupJobId: string | undefined;
}

export namespace StopBackupJobInput {
  export const filterSensitiveLog = (obj: StopBackupJobInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopBackupJobInput =>
    __isa(o, "StopBackupJobInput");
}

export enum StorageClass {
  COLD = "COLD",
  DELETED = "DELETED",
  WARM = "WARM"
}

export interface TagResourceInput {
  __type?: "TagResourceInput";
  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the type of
   *          the tagged resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Key-value pairs that are used to help organize your resources. You can assign your own
   *          metadata to the resources you create. </p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceInput {
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is TagResourceInput =>
    __isa(o, "TagResourceInput");
}

export interface UntagResourceInput {
  __type?: "UntagResourceInput";
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
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
    ...(obj.TagKeyList && { TagKeyList: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is UntagResourceInput =>
    __isa(o, "UntagResourceInput");
}

export interface UpdateBackupPlanInput {
  __type?: "UpdateBackupPlanInput";
  /**
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or
   *          more sets of <code>Rules</code>.</p>
   */
  BackupPlan: BackupPlanInput | undefined;

  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string | undefined;
}

export namespace UpdateBackupPlanInput {
  export const filterSensitiveLog = (obj: UpdateBackupPlanInput): any => ({
    ...obj,
    ...(obj.BackupPlan && {
      BackupPlan: BackupPlanInput.filterSensitiveLog(obj.BackupPlan)
    })
  });
  export const isa = (o: any): o is UpdateBackupPlanInput =>
    __isa(o, "UpdateBackupPlanInput");
}

export interface UpdateBackupPlanOutput {
  __type?: "UpdateBackupPlanOutput";
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
   * <p>The date and time a backup plan is updated, in Unix format and Coordinated Universal
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
}

export namespace UpdateBackupPlanOutput {
  export const filterSensitiveLog = (obj: UpdateBackupPlanOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateBackupPlanOutput =>
    __isa(o, "UpdateBackupPlanOutput");
}

export interface UpdateRecoveryPointLifecycleInput {
  __type?: "UpdateRecoveryPointLifecycleInput";
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified
   *          by names that are unique to the account used to create them and the AWS Region where they
   *          are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string | undefined;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. AWS Backup transitions and expires backups automatically according to the
   *          lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “expire after days” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string | undefined;
}

export namespace UpdateRecoveryPointLifecycleInput {
  export const filterSensitiveLog = (
    obj: UpdateRecoveryPointLifecycleInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRecoveryPointLifecycleInput =>
    __isa(o, "UpdateRecoveryPointLifecycleInput");
}

export interface UpdateRecoveryPointLifecycleOutput {
  __type?: "UpdateRecoveryPointLifecycleOutput";
  /**
   * <p>An ARN that uniquely identifies a backup vault; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and
   *             <code>MoveToColdStorageAt</code> timestamps.</p>
   */
  CalculatedLifecycle?: CalculatedLifecycle;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. AWS Backup transitions and expires backups automatically according to the
   *          lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “expire after days” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: Lifecycle;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example,
   *             <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;
}

export namespace UpdateRecoveryPointLifecycleOutput {
  export const filterSensitiveLog = (
    obj: UpdateRecoveryPointLifecycleOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRecoveryPointLifecycleOutput =>
    __isa(o, "UpdateRecoveryPointLifecycleOutput");
}
