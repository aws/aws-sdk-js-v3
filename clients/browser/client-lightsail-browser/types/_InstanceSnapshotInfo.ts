import { _DiskInfo, _UnmarshalledDiskInfo } from "./_DiskInfo";

/**
 * <p>Describes an instance snapshot.</p>
 */
export interface _InstanceSnapshotInfo {
  /**
   * <p>The bundle ID from which the source instance was created (e.g., <code>micro_1_0</code>).</p>
   */
  fromBundleId?: string;

  /**
   * <p>The blueprint ID from which the source instance (e.g., <code>os_debian_8_3</code>).</p>
   */
  fromBlueprintId?: string;

  /**
   * <p>A list of objects describing the disks that were attached to the source instance.</p>
   */
  fromDiskInfo?: Array<_DiskInfo> | Iterable<_DiskInfo>;
}

export interface _UnmarshalledInstanceSnapshotInfo
  extends _InstanceSnapshotInfo {
  /**
   * <p>A list of objects describing the disks that were attached to the source instance.</p>
   */
  fromDiskInfo?: Array<_UnmarshalledDiskInfo>;
}
