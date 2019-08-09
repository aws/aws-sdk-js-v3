/**
 * <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is an element of the <a>ListPoliciesGrantingServiceAccessEntry</a> object.</p>
 */
export interface _PolicyGrantingServiceAccess {
  /**
   * <p>The policy name.</p>
   */
  PolicyName: string;

  /**
   * <p>The policy type. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   */
  PolicyType: "INLINE" | "MANAGED" | string;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  PolicyArn?: string;

  /**
   * <p>The type of entity (user or role) that used the policy to access the service to which the inline policy is attached.</p> <p>This field is null for managed policies. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   */
  EntityType?: "USER" | "ROLE" | "GROUP" | string;

  /**
   * <p>The name of the entity (user or role) to which the inline policy is attached.</p> <p>This field is null for managed policies. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   */
  EntityName?: string;
}

export type _UnmarshalledPolicyGrantingServiceAccess = _PolicyGrantingServiceAccess;
