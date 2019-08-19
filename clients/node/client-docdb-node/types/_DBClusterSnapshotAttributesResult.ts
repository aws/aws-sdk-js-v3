import {
  _DBClusterSnapshotAttribute,
  _UnmarshalledDBClusterSnapshotAttribute
} from "./_DBClusterSnapshotAttribute";

/**
 * <p>Detailed information about the attributes that are associated with a DB cluster snapshot.</p>
 */
export interface _DBClusterSnapshotAttributesResult {
  /**
   * <p>The identifier of the DB cluster snapshot that the attributes apply to.</p>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>The list of attributes and values for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotAttributes?:
    | Array<_DBClusterSnapshotAttribute>
    | Iterable<_DBClusterSnapshotAttribute>;
}

export interface _UnmarshalledDBClusterSnapshotAttributesResult
  extends _DBClusterSnapshotAttributesResult {
  /**
   * <p>The list of attributes and values for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotAttributes?: Array<_UnmarshalledDBClusterSnapshotAttribute>;
}
