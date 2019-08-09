/**
 * <p>A reference to the IAM managed policy that is passed as a session policy for a role session or a federated user session.</p>
 */
export interface _PolicyDescriptorType {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM managed policy to use as a session policy for the role. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  arn?: string;
}

export type _UnmarshalledPolicyDescriptorType = _PolicyDescriptorType;
