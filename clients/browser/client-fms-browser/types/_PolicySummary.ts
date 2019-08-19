/**
 * <p>Details of the AWS Firewall Manager policy. </p>
 */
export interface _PolicySummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified policy.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The ID of the specified policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The friendly name of the specified policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The type of resource to protect with the policy. This is in the format shown in <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a>. For example: <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> or <code>AWS::CloudFront::Distribution</code>.</p>
   */
  ResourceType?: string;

  /**
   * <p>The service that the policy is using to protect the resources. This specifies the type of policy that is created, either a WAF policy or Shield Advanced policy.</p>
   */
  SecurityServiceType?: "WAF" | "SHIELD_ADVANCED" | string;

  /**
   * <p>Indicates if the policy should be automatically applied to new resources.</p>
   */
  RemediationEnabled?: boolean;
}

export type _UnmarshalledPolicySummary = _PolicySummary;
