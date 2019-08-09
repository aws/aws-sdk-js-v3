import { _PolicyVersion, _UnmarshalledPolicyVersion } from "./_PolicyVersion";

/**
 * <p>Contains information about a managed policy, including the policy's ARN, versions, and the number of principal entities (users, groups, and roles) that the policy is attached to.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>Using IAM</i> guide. </p>
 */
export interface _ManagedPolicyDetail {
  /**
   * <p>The friendly name (not ARN) identifying the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The stable and unique string identifying the policy.</p> <p>For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide.</p>
   */
  PolicyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;

  /**
   * <p>The path to the policy.</p> <p>For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide.</p>
   */
  Path?: string;

  /**
   * <p>The identifier for the version of the policy that is set as the default (operative) version.</p> <p>For more information about policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed Policies</a> in the <i>Using IAM</i> guide. </p>
   */
  DefaultVersionId?: string;

  /**
   * <p>The number of principal entities (users, groups, and roles) that the policy is attached to.</p>
   */
  AttachmentCount?: number;

  /**
   * <p>The number of entities (users and roles) for which the policy is used as the permissions boundary. </p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundaryUsageCount?: number;

  /**
   * <p>Specifies whether the policy can be attached to an IAM user, group, or role.</p>
   */
  IsAttachable?: boolean;

  /**
   * <p>A friendly description of the policy.</p>
   */
  Description?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the policy was created.</p>
   */
  CreateDate?: Date | string | number;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the policy was last updated.</p> <p>When a policy has only one version, this field contains the date and time when the policy was created. When a policy has more than one version, this field contains the date and time when the most recent policy version was created.</p>
   */
  UpdateDate?: Date | string | number;

  /**
   * <p>A list containing information about the versions of the policy.</p>
   */
  PolicyVersionList?: Array<_PolicyVersion> | Iterable<_PolicyVersion>;
}

export interface _UnmarshalledManagedPolicyDetail extends _ManagedPolicyDetail {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the policy was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the policy was last updated.</p> <p>When a policy has only one version, this field contains the date and time when the policy was created. When a policy has more than one version, this field contains the date and time when the most recent policy version was created.</p>
   */
  UpdateDate?: Date;

  /**
   * <p>A list containing information about the versions of the policy.</p>
   */
  PolicyVersionList?: Array<_UnmarshalledPolicyVersion>;
}
