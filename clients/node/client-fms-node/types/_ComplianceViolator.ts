/**
 * <p>Details of the resource that is not protected by the policy.</p>
 */
export interface _ComplianceViolator {
  /**
   * <p>The resource ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>The reason that the resource is not protected by the policy.</p>
   */
  ViolationReason?:
    | "WEB_ACL_MISSING_RULE_GROUP"
    | "RESOURCE_MISSING_WEB_ACL"
    | "RESOURCE_INCORRECT_WEB_ACL"
    | "RESOURCE_MISSING_SHIELD_PROTECTION"
    | string;

  /**
   * <p>The resource type. This is in the format shown in <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a>. For example: <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> or <code>AWS::CloudFront::Distribution</code>.</p>
   */
  ResourceType?: string;
}

export type _UnmarshalledComplianceViolator = _ComplianceViolator;
