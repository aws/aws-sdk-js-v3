/**
 * <p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
 */
export interface _DBClusterSnapshotAttribute {
  /**
   * <p>The name of the manual DB cluster snapshot attribute.</p> <p>The attribute named <code>restore</code> refers to the list of AWS accounts that have permission to copy or restore the manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value(s) for the manual DB cluster snapshot attribute.</p> <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element returns a list of IDs of the AWS accounts that are authorized to copy or restore the manual DB cluster snapshot. If a value of <code>all</code> is in the list, then the manual DB cluster snapshot is public and available for any AWS account to copy or restore.</p>
   */
  AttributeValues?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDBClusterSnapshotAttribute
  extends _DBClusterSnapshotAttribute {
  /**
   * <p>The value(s) for the manual DB cluster snapshot attribute.</p> <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element returns a list of IDs of the AWS accounts that are authorized to copy or restore the manual DB cluster snapshot. If a value of <code>all</code> is in the list, then the manual DB cluster snapshot is public and available for any AWS account to copy or restore.</p>
   */
  AttributeValues?: Array<string>;
}
