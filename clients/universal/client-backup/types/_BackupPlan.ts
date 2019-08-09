import { _BackupRule, _UnmarshalledBackupRule } from "./_BackupRule";

/**
 * <p>Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.</p>
 */
export interface _BackupPlan {
  /**
   * <p>The display name of a backup plan.</p>
   */
  BackupPlanName: string;

  /**
   * <p>An array of <code>BackupRule</code> objects, each of which specifies a scheduled task that is used to back up a selection of resources.</p>
   */
  Rules: Array<_BackupRule> | Iterable<_BackupRule>;
}

export interface _UnmarshalledBackupPlan extends _BackupPlan {
  /**
   * <p>An array of <code>BackupRule</code> objects, each of which specifies a scheduled task that is used to back up a selection of resources.</p>
   */
  Rules: Array<_UnmarshalledBackupRule>;
}
