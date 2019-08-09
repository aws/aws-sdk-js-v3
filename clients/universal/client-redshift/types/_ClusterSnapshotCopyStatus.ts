/**
 * <p>Returns the destination region and retention period that are configured for cross-region snapshot copy.</p>
 */
export interface _ClusterSnapshotCopyStatus {
  /**
   * <p>The destination region that snapshots are automatically copied to when cross-region snapshot copy is enabled.</p>
   */
  DestinationRegion?: string;

  /**
   * <p>The number of days that automated snapshots are retained in the destination region after they are copied from a source region.</p>
   */
  RetentionPeriod?: number;

  /**
   * <p>The number of days that automated snapshots are retained in the destination region after they are copied from a source region. If the value is -1, the manual snapshot is retained indefinitely. </p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;
}

export type _UnmarshalledClusterSnapshotCopyStatus = _ClusterSnapshotCopyStatus;
