import {
  _InstanceSnapshotInfo,
  _UnmarshalledInstanceSnapshotInfo
} from "./_InstanceSnapshotInfo";
import {
  _DiskSnapshotInfo,
  _UnmarshalledDiskSnapshotInfo
} from "./_DiskSnapshotInfo";

/**
 * <p>Describes the source of an export snapshot record.</p>
 */
export interface _ExportSnapshotRecordSourceInfo {
  /**
   * <p>The Lightsail resource type (e.g., <code>InstanceSnapshot</code> or <code>DiskSnapshot</code>).</p>
   */
  resourceType?: "InstanceSnapshot" | "DiskSnapshot" | string;

  /**
   * <p>The date when the source instance or disk snapshot was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The name of the source instance or disk snapshot.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source instance or disk snapshot.</p>
   */
  arn?: string;

  /**
   * <p>The name of the snapshot's source instance or disk.</p>
   */
  fromResourceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot's source instance or disk.</p>
   */
  fromResourceArn?: string;

  /**
   * <p>A list of objects describing an instance snapshot.</p>
   */
  instanceSnapshotInfo?: _InstanceSnapshotInfo;

  /**
   * <p>A list of objects describing a disk snapshot.</p>
   */
  diskSnapshotInfo?: _DiskSnapshotInfo;
}

export interface _UnmarshalledExportSnapshotRecordSourceInfo
  extends _ExportSnapshotRecordSourceInfo {
  /**
   * <p>The date when the source instance or disk snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>A list of objects describing an instance snapshot.</p>
   */
  instanceSnapshotInfo?: _UnmarshalledInstanceSnapshotInfo;

  /**
   * <p>A list of objects describing a disk snapshot.</p>
   */
  diskSnapshotInfo?: _UnmarshalledDiskSnapshotInfo;
}
