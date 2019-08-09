/**
 * <p>Provides details about a snapshot of application state.</p>
 */
export interface _SnapshotDetails {
  /**
   * <p>The identifier for the application snapshot.</p>
   */
  SnapshotName: string;

  /**
   * <p>The status of the application snapshot.</p>
   */
  SnapshotStatus: "CREATING" | "READY" | "DELETING" | "FAILED" | string;

  /**
   * <p>The current application version ID when the snapshot was created.</p>
   */
  ApplicationVersionId: number;

  /**
   * <p>The timestamp of the application snapshot.</p>
   */
  SnapshotCreationTimestamp?: Date | string | number;
}

export interface _UnmarshalledSnapshotDetails extends _SnapshotDetails {
  /**
   * <p>The timestamp of the application snapshot.</p>
   */
  SnapshotCreationTimestamp?: Date;
}
