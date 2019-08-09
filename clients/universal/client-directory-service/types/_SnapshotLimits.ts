/**
 * <p>Contains manual snapshot limit information for a directory.</p>
 */
export interface _SnapshotLimits {
  /**
   * <p>The maximum number of manual snapshots allowed.</p>
   */
  ManualSnapshotsLimit?: number;

  /**
   * <p>The current number of manual snapshots of the directory.</p>
   */
  ManualSnapshotsCurrentCount?: number;

  /**
   * <p>Indicates if the manual snapshot limit has been reached.</p>
   */
  ManualSnapshotsLimitReached?: boolean;
}

export type _UnmarshalledSnapshotLimits = _SnapshotLimits;
