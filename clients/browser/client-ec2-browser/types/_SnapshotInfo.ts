import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Information about a snapshot.</p>
 */
export interface _SnapshotInfo {
  /**
   * <p>Description specified by the CreateSnapshotRequest that has been applied to all snapshots.</p>
   */
  Description?: string;

  /**
   * <p>Tags associated with this snapshot.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Source volume from which this snapshot was created.</p>
   */
  VolumeId?: string;

  /**
   * <p>Current state of the snapshot.</p>
   */
  State?: "pending" | "completed" | "error" | string;

  /**
   * <p>Size of the volume from which this snapshot was created.</p>
   */
  VolumeSize?: number;

  /**
   * <p>Time this snapshot was started. This is the same for all snapshots initiated by the same request.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>Progress this snapshot has made towards completing.</p>
   */
  Progress?: string;

  /**
   * <p>Account id used when creating this snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>Snapshot id that can be used to describe this snapshot.</p>
   */
  SnapshotId?: string;
}

export interface _UnmarshalledSnapshotInfo extends _SnapshotInfo {
  /**
   * <p>Tags associated with this snapshot.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>Time this snapshot was started. This is the same for all snapshots initiated by the same request.</p>
   */
  StartTime?: Date;
}
