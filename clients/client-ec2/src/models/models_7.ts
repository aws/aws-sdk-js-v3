// smithy-typescript generated code
import { ByoipCidr, IpPermission } from "./models_0";
import { SecurityGroupRuleDescription } from "./models_6";

export interface UpdateSecurityGroupRuleDescriptionsIngressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the security group. You must specify either the
   *             security group ID or the security group name in the request. For security groups in a
   *             nondefault VPC, you must specify the security group ID.</p>
   */
  GroupName?: string;

  /**
   * <p>The IP permissions for the security group rule. You must specify either IP permissions
   * 		    or a description.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>[VPC only] The description for the ingress security group rules. You must specify either
   *             a description or IP permissions.</p>
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[];
}

export interface UpdateSecurityGroupRuleDescriptionsIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

export interface WithdrawByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface WithdrawByoipCidrResult {
  /**
   * <p>Information about the address pool.</p>
   */
  ByoipCidr?: ByoipCidr;
}

/**
 * @internal
 */
export const UpdateSecurityGroupRuleDescriptionsIngressRequestFilterSensitiveLog = (
  obj: UpdateSecurityGroupRuleDescriptionsIngressRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSecurityGroupRuleDescriptionsIngressResultFilterSensitiveLog = (
  obj: UpdateSecurityGroupRuleDescriptionsIngressResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WithdrawByoipCidrRequestFilterSensitiveLog = (obj: WithdrawByoipCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WithdrawByoipCidrResultFilterSensitiveLog = (obj: WithdrawByoipCidrResult): any => ({
  ...obj,
});
