/**
 * <p>Describes the status of a cluster restore action. Returns null if the cluster was not created by restoring a snapshot.</p>
 */
export interface _RestoreStatus {
  /**
   * <p>The status of the restore action. Returns starting, restoring, completed, or failed.</p>
   */
  Status?: string;

  /**
   * <p>The number of megabytes per second being transferred from the backup storage. Returns the average rate for a completed backup.</p>
   */
  CurrentRestoreRateInMegaBytesPerSecond?: number;

  /**
   * <p>The size of the set of snapshot data used to restore the cluster.</p>
   */
  SnapshotSizeInMegaBytes?: number;

  /**
   * <p>The number of megabytes that have been transferred from snapshot storage.</p>
   */
  ProgressInMegaBytes?: number;

  /**
   * <p>The amount of time an in-progress restore has been running, or the amount of time it took a completed restore to finish.</p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * <p>The estimate of the time remaining before the restore will complete. Returns 0 for a completed restore.</p>
   */
  EstimatedTimeToCompletionInSeconds?: number;
}

export type _UnmarshalledRestoreStatus = _RestoreStatus;
