import {
  _DBSnapshotAttribute,
  _UnmarshalledDBSnapshotAttribute
} from "./_DBSnapshotAttribute";

/**
 * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code> API action.</p> <p>Manual DB snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API action.</p>
 */
export interface _DBSnapshotAttributesResult {
  /**
   * <p>The identifier of the manual DB snapshot that the attributes apply to.</p>
   */
  DBSnapshotIdentifier?: string;

  /**
   * <p>The list of attributes and values for the manual DB snapshot.</p>
   */
  DBSnapshotAttributes?:
    | Array<_DBSnapshotAttribute>
    | Iterable<_DBSnapshotAttribute>;
}

export interface _UnmarshalledDBSnapshotAttributesResult
  extends _DBSnapshotAttributesResult {
  /**
   * <p>The list of attributes and values for the manual DB snapshot.</p>
   */
  DBSnapshotAttributes?: Array<_UnmarshalledDBSnapshotAttribute>;
}
