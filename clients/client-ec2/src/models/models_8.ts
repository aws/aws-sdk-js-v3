// smithy-typescript generated code
import { ByoipCidr, IpPermission, NatGatewayAddress } from "./models_0";

import { InstanceMonitoring } from "./models_7";

/**
 * @public
 */
export interface UnassignIpv6AddressesRequest {
  /**
   * <p>The IPv6 prefixes to unassign from the network interface.</p>
   * @public
   */
  Ipv6Prefixes?: string[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The IPv6 addresses to unassign from the network interface.</p>
   * @public
   */
  Ipv6Addresses?: string[] | undefined;
}

/**
 * @public
 */
export interface UnassignIpv6AddressesResult {
  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The IPv6 addresses that have been unassigned from the network interface.</p>
   * @public
   */
  UnassignedIpv6Addresses?: string[] | undefined;

  /**
   * <p>The IPv6 prefixes that have been unassigned from  the network interface.</p>
   * @public
   */
  UnassignedIpv6Prefixes?: string[] | undefined;
}

/**
 * <p>Contains the parameters for UnassignPrivateIpAddresses.</p>
 * @public
 */
export interface UnassignPrivateIpAddressesRequest {
  /**
   * <p>The IPv4 prefixes to unassign from  the network interface.</p>
   * @public
   */
  Ipv4Prefixes?: string[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The secondary private IP addresses to unassign from the network interface. You can specify this
   *         	option multiple times to unassign more than one IP address.</p>
   * @public
   */
  PrivateIpAddresses?: string[] | undefined;
}

/**
 * @public
 */
export interface UnassignPrivateNatGatewayAddressRequest {
  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * <p>The private IPv4 addresses you want to unassign.</p>
   * @public
   */
  PrivateIpAddresses: string[] | undefined;

  /**
   * <p>The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. Default value is 350 seconds.</p>
   * @public
   */
  MaxDrainDurationSeconds?: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface UnassignPrivateNatGatewayAddressResult {
  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * <p>Information about the NAT gateway IP addresses.</p>
   * @public
   */
  NatGatewayAddresses?: NatGatewayAddress[] | undefined;
}

/**
 * @public
 */
export interface UnlockSnapshotRequest {
  /**
   * <p>The ID of the snapshot to unlock.</p>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface UnlockSnapshotResult {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;
}

/**
 * @public
 */
export interface UnmonitorInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface UnmonitorInstancesResult {
  /**
   * <p>The monitoring information.</p>
   * @public
   */
  InstanceMonitorings?: InstanceMonitoring[] | undefined;
}

/**
 * <p>Describes the description of a security group rule.</p>
 *          <p>You can use this when you want to update the security group rule description for either an inbound or outbound rule.</p>
 * @public
 */
export interface SecurityGroupRuleDescription {
  /**
   * <p>The ID of the security group rule.</p>
   * @public
   */
  SecurityGroupRuleId?: string | undefined;

  /**
   * <p>The description of the security group rule.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>[Default VPC] The name of the security group. You must specify either the security group
   * 			ID or the security group name.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The IP permissions for the security group rule. You must specify either the IP permissions
   * 		    or the description.</p>
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;

  /**
   * <p>The description for the egress security group rules. You must specify either the
   *             description or the IP permissions.</p>
   * @public
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[] | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>[Default VPC] The name of the security group. You must specify either the
   *             security group ID or the security group name. For security groups in a
   *             nondefault VPC, you must specify the security group ID.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The IP permissions for the security group rule. You must specify either IP permissions
   * 		    or a description.</p>
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;

  /**
   * <p>The description for the ingress security group rules. You must specify either
   *             a description or IP permissions.</p>
   * @public
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[] | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface WithdrawByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation.</p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface WithdrawByoipCidrResult {
  /**
   * <p>Information about the address pool.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}
