import {
  _DBClusterSnapshotAttribute,
  _UnmarshalledDBClusterSnapshotAttribute
} from "./_DBClusterSnapshotAttribute";

/**
 * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
 */
export interface _DBClusterSnapshotAttributesResult {
  /**
   * <p>The identifier of the manual DB cluster snapshot that the attributes apply to.</p>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>The list of attributes and values for the manual DB cluster snapshot.</p>
   */
  DBClusterSnapshotAttributes?:
    | Array<_DBClusterSnapshotAttribute>
    | Iterable<_DBClusterSnapshotAttribute>;
}

export interface _UnmarshalledDBClusterSnapshotAttributesResult
  extends _DBClusterSnapshotAttributesResult {
  /**
   * <p>The list of attributes and values for the manual DB cluster snapshot.</p>
   */
  DBClusterSnapshotAttributes?: Array<_UnmarshalledDBClusterSnapshotAttribute>;
}
