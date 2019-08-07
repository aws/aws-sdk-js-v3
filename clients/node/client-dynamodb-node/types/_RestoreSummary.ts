/**
 * <p>Contains details for the restore.</p>
 */
export interface _RestoreSummary {
  /**
   * <p>ARN of the backup from which the table was restored.</p>
   */
  SourceBackupArn?: string;

  /**
   * <p>ARN of the source table of the backup that is being restored.</p>
   */
  SourceTableArn?: string;

  /**
   * <p>Point in time or source backup time.</p>
   */
  RestoreDateTime: Date | string | number;

  /**
   * <p>Indicates if a restore is in progress or not.</p>
   */
  RestoreInProgress: boolean;
}

export interface _UnmarshalledRestoreSummary extends _RestoreSummary {
  /**
   * <p>Point in time or source backup time.</p>
   */
  RestoreDateTime: Date;
}
