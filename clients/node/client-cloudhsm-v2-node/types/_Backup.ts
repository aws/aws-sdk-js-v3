/**
 * <p>Contains information about a backup of an AWS CloudHSM cluster.</p>
 */
export interface _Backup {
  /**
   * <p>The identifier (ID) of the backup.</p>
   */
  BackupId: string;

  /**
   * <p>The state of the backup.</p>
   */
  BackupState?:
    | "CREATE_IN_PROGRESS"
    | "READY"
    | "DELETED"
    | "PENDING_DELETION"
    | string;

  /**
   * <p>The identifier (ID) of the cluster that was backed up.</p>
   */
  ClusterId?: string;

  /**
   * <p>The date and time when the backup was created.</p>
   */
  CreateTimestamp?: Date | string | number;

  /**
   * _Timestamp shape
   */
  CopyTimestamp?: Date | string | number;

  /**
   * _Region shape
   */
  SourceRegion?: string;

  /**
   * _BackupId shape
   */
  SourceBackup?: string;

  /**
   * _ClusterId shape
   */
  SourceCluster?: string;

  /**
   * <p>The date and time when the backup will be permanently deleted.</p>
   */
  DeleteTimestamp?: Date | string | number;
}

export interface _UnmarshalledBackup extends _Backup {
  /**
   * <p>The date and time when the backup was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * _Timestamp shape
   */
  CopyTimestamp?: Date;

  /**
   * <p>The date and time when the backup will be permanently deleted.</p>
   */
  DeleteTimestamp?: Date;
}
