import { _Lifecycle, _UnmarshalledLifecycle } from "./_Lifecycle";

/**
 * <p>Specifies a scheduled task used to back up a selection of resources.</p>
 */
export interface _BackupRuleInput {
  /**
   * <p>&gt;An optional display name for a backup rule.</p>
   */
  RuleName: string;

  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  TargetBackupVaultName: string;

  /**
   * <p>A CRON expression specifying when AWS Backup initiates a backup job.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The amount of time in minutes before beginning a backup.</p>
   */
  StartWindowMinutes?: number;

  /**
   * <p>The amount of time AWS Backup attempts a backup before canceling the job and returning an error.</p>
   */
  CompletionWindowMinutes?: number;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup will transition and expire backups automatically according to the lifecycle that you define. </p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days”. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: _Lifecycle;

  /**
   * <p>To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair.</p>
   */
  RecoveryPointTags?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledBackupRuleInput extends _BackupRuleInput {
  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup will transition and expire backups automatically according to the lifecycle that you define. </p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days”. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: _UnmarshalledLifecycle;

  /**
   * <p>To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair.</p>
   */
  RecoveryPointTags?: { [key: string]: string };
}
