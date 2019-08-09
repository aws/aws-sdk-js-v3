/**
 * <p>Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup.</p>
 */
export interface _RecoveryPointCreator {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, <code>arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50</code>.</p>
   */
  BackupPlanArn?: string;

  /**
   * <p>Version IDs are unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. They cannot be edited.</p>
   */
  BackupPlanVersion?: string;

  /**
   * <p>Uniquely identifies a rule used to schedule the backup of a selection of resources.</p>
   */
  BackupRuleId?: string;
}

export type _UnmarshalledRecoveryPointCreator = _RecoveryPointCreator;
