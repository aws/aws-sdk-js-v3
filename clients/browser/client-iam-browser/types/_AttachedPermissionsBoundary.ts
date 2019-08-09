/**
 * <p>Contains information about an attached permissions boundary.</p> <p>An attached permissions boundary is a managed policy that has been attached to a user or role to set the permissions boundary.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p>
 */
export interface _AttachedPermissionsBoundary {
  /**
   * <p> The permissions boundary usage type that indicates what type of IAM resource is used as the permissions boundary for an entity. This data type can only have a value of <code>Policy</code>.</p>
   */
  PermissionsBoundaryType?: "PermissionsBoundaryPolicy" | string;

  /**
   * <p> The ARN of the policy used to set the permissions boundary for the user or role.</p>
   */
  PermissionsBoundaryArn?: string;
}

export type _UnmarshalledAttachedPermissionsBoundary = _AttachedPermissionsBoundary;
