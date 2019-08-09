import { _Lifecycle, _UnmarshalledLifecycle } from "./_Lifecycle";

/**
 * <p>Specifies a scheduled task used to back up a selection of resources.</p>
 */
export interface _BackupRule {
  /**
   * <p>An optional display name for a backup rule.</p>
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
   * <p>An optional value that specifies a period of time in minutes after a backup is scheduled before a job is canceled if it doesn't start successfully.</p>
   */
  StartWindowMinutes?: number;

  /**
   * <p>A value in minutes after a backup job is successfully started before it must be completed or it is canceled by AWS Backup. This value is optional.</p>
   */
  CompletionWindowMinutes?: number;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define. </p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: _Lifecycle;

  /**
   * <p>An array of key-value pair strings that are assigned to resources that are associated with this rule when restored from backup.</p>
   */
  RecoveryPointTags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Uniquely identifies a rule that is used to schedule the backup of a selection of resources.</p>
   */
  RuleId?: string;
}

export interface _UnmarshalledBackupRule extends _BackupRule {
  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define. </p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: _UnmarshalledLifecycle;

  /**
   * <p>An array of key-value pair strings that are assigned to resources that are associated with this rule when restored from backup.</p>
   */
  RecoveryPointTags?: { [key: string]: string };
}
