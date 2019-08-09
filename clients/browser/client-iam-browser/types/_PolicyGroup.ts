/**
 * <p>Contains information about a group that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>Using IAM</i> guide. </p>
 */
export interface _PolicyGroup {
  /**
   * <p>The name (friendly name, not ARN) identifying the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The stable and unique string identifying the group. For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  GroupId?: string;
}

export type _UnmarshalledPolicyGroup = _PolicyGroup;
