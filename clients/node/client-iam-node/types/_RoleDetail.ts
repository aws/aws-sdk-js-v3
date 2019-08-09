import {
  _InstanceProfile,
  _UnmarshalledInstanceProfile
} from "./_InstanceProfile";
import { _PolicyDetail, _UnmarshalledPolicyDetail } from "./_PolicyDetail";
import {
  _AttachedPolicy,
  _UnmarshalledAttachedPolicy
} from "./_AttachedPolicy";
import {
  _AttachedPermissionsBoundary,
  _UnmarshalledAttachedPermissionsBoundary
} from "./_AttachedPermissionsBoundary";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Contains information about an IAM role, including all of the role's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export interface _RoleDetail {
  /**
   * <p>The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide.</p>
   */
  Path?: string;

  /**
   * <p>The friendly name that identifies the role.</p>
   */
  RoleName?: string;

  /**
   * <p>The stable and unique string identifying the role. For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide.</p>
   */
  RoleId?: string;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the role was created.</p>
   */
  CreateDate?: Date | string | number;

  /**
   * <p>The trust policy that grants permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * <p>A list of instance profiles that contain this role.</p>
   */
  InstanceProfileList?: Array<_InstanceProfile> | Iterable<_InstanceProfile>;

  /**
   * <p>A list of inline policies embedded in the role. These policies are the role's access (permissions) policies.</p>
   */
  RolePolicyList?: Array<_PolicyDetail> | Iterable<_PolicyDetail>;

  /**
   * <p>A list of managed policies attached to the role. These policies are the role's access (permissions) policies.</p>
   */
  AttachedManagedPolicies?: Array<_AttachedPolicy> | Iterable<_AttachedPolicy>;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the role.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundary?: _AttachedPermissionsBoundary;

  /**
   * <p>A list of tags that are attached to the specified role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledRoleDetail extends _RoleDetail {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the role was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A list of instance profiles that contain this role.</p>
   */
  InstanceProfileList?: Array<_UnmarshalledInstanceProfile>;

  /**
   * <p>A list of inline policies embedded in the role. These policies are the role's access (permissions) policies.</p>
   */
  RolePolicyList?: Array<_UnmarshalledPolicyDetail>;

  /**
   * <p>A list of managed policies attached to the role. These policies are the role's access (permissions) policies.</p>
   */
  AttachedManagedPolicies?: Array<_UnmarshalledAttachedPolicy>;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the role.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundary?: _UnmarshalledAttachedPermissionsBoundary;

  /**
   * <p>A list of tags that are attached to the specified role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
