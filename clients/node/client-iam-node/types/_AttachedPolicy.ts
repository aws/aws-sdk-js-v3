/**
 * <p>Contains information about an attached policy.</p> <p>An attached policy is a managed policy that has been attached to a user, group, or role. This data type is used as a response element in the <a>ListAttachedGroupPolicies</a>, <a>ListAttachedRolePolicies</a>, <a>ListAttachedUserPolicies</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>Using IAM</i> guide. </p>
 */
export interface _AttachedPolicy {
  /**
   * <p>The friendly name of the attached policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  PolicyArn?: string;
}

export type _UnmarshalledAttachedPolicy = _AttachedPolicy;
