/**
 * <p>Describes a directory snapshot.</p>
 */
export interface _Snapshot {
  /**
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The snapshot identifier.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The snapshot type.</p>
   */
  Type?: "Auto" | "Manual" | string;

  /**
   * <p>The descriptive name of the snapshot.</p>
   */
  Name?: string;

  /**
   * <p>The snapshot status.</p>
   */
  Status?: "Creating" | "Completed" | "Failed" | string;

  /**
   * <p>The date and time that the snapshot was taken.</p>
   */
  StartTime?: Date | string | number;
}

export interface _UnmarshalledSnapshot extends _Snapshot {
  /**
   * <p>The date and time that the snapshot was taken.</p>
   */
  StartTime?: Date;
}
