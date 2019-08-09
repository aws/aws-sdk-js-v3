import {
  _SnapshotTaskDetail,
  _UnmarshalledSnapshotTaskDetail
} from "./_SnapshotTaskDetail";

/**
 * <p>Describes an import snapshot task.</p>
 */
export interface _ImportSnapshotTask {
  /**
   * <p>A description of the import snapshot task.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the import snapshot task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>Describes an import snapshot task.</p>
   */
  SnapshotTaskDetail?: _SnapshotTaskDetail;
}

export interface _UnmarshalledImportSnapshotTask extends _ImportSnapshotTask {
  /**
   * <p>Describes an import snapshot task.</p>
   */
  SnapshotTaskDetail?: _UnmarshalledSnapshotTaskDetail;
}
