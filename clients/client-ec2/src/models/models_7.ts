// smithy-typescript generated code
import { ByoipCidr, IpPermission, NatGatewayAddress } from "./models_0";
import { ClientVpnConnectionStatus } from "./models_3";
import { NetworkInsightsAnalysis } from "./models_4";
import { InstanceMonitoring, InstanceStateChange } from "./models_6";

/**
 * @public
 */
export interface StartNetworkInsightsAnalysisResult {
  /**
   * <p>Information about the network insights analysis.</p>
   */
  NetworkInsightsAnalysis?: NetworkInsightsAnalysis;
}

/**
 * @public
 */
export interface StartVpcEndpointServicePrivateDnsVerificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId: string | undefined;
}

/**
 * @public
 */
export interface StartVpcEndpointServicePrivateDnsVerificationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

/**
 * @public
 */
export interface StopInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Hibernates the instance if the instance was enabled for hibernation at launch. If the
   *             instance cannot hibernate successfully, a normal shutdown occurs. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p> Default: <code>false</code>
   *          </p>
   */
  Hibernate?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Forces the instances to stop. The instances do not have an opportunity to flush file
   *             system caches or file system metadata. If you use this option, you must perform file
   *             system check and repair procedures. This option is not recommended for Windows
   *             instances.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  Force?: boolean;
}

/**
 * @public
 */
export interface StopInstancesResult {
  /**
   * <p>Information about the stopped instances.</p>
   */
  StoppingInstances?: InstanceStateChange[];
}

/**
 * @public
 */
export interface TerminateClientVpnConnectionsRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which the client is connected.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the client connection to be terminated.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The name of the user who initiated the connection. Use this option to terminate all active connections for
   * 			the specified user. This option can only be used if the user has established up to five connections.</p>
   */
  Username?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Information about a terminated Client VPN endpoint client connection.</p>
 */
export interface TerminateConnectionStatus {
  /**
   * <p>The ID of the client connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The state of the client connection.</p>
   */
  PreviousStatus?: ClientVpnConnectionStatus;

  /**
   * <p>A message about the status of the client connection, if applicable.</p>
   */
  CurrentStatus?: ClientVpnConnectionStatus;
}

/**
 * @public
 */
export interface TerminateClientVpnConnectionsResult {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The user who established the terminated client connections.</p>
   */
  Username?: string;

  /**
   * <p>The current state of the client connections.</p>
   */
  ConnectionStatuses?: TerminateConnectionStatus[];
}

/**
 * @public
 */
export interface TerminateInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   *          <p>Constraints: Up to 1000 instance IDs. We recommend breaking up this request into
   *             smaller batches.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface TerminateInstancesResult {
  /**
   * <p>Information about the terminated instances.</p>
   */
  TerminatingInstances?: InstanceStateChange[];
}

/**
 * @public
 */
export interface UnassignIpv6AddressesRequest {
  /**
   * <p>The IPv6 addresses to unassign from the network interface.</p>
   */
  Ipv6Addresses?: string[];

  /**
   * <p>The IPv6 prefixes to unassign from the network interface.</p>
   */
  Ipv6Prefixes?: string[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

/**
 * @public
 */
export interface UnassignIpv6AddressesResult {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The IPv6 addresses that have been unassigned from the network interface.</p>
   */
  UnassignedIpv6Addresses?: string[];

  /**
   * <p>The IPv4 prefixes that have been unassigned from  the network interface.</p>
   */
  UnassignedIpv6Prefixes?: string[];
}

/**
 * @public
 * <p>Contains the parameters for UnassignPrivateIpAddresses.</p>
 */
export interface UnassignPrivateIpAddressesRequest {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The secondary private IP addresses to unassign from the network interface. You can specify this
   *         	option multiple times to unassign more than one IP address.</p>
   */
  PrivateIpAddresses?: string[];

  /**
   * <p>The IPv4 prefixes to unassign from  the network interface.</p>
   */
  Ipv4Prefixes?: string[];
}

/**
 * @public
 */
export interface UnassignPrivateNatGatewayAddressRequest {
  /**
   * <p>The NAT gateway ID.</p>
   */
  NatGatewayId: string | undefined;

  /**
   * <p>The private IPv4 addresses you want to unassign.</p>
   */
  PrivateIpAddresses: string[] | undefined;

  /**
   * <p>The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. Default value is 350 seconds.</p>
   */
  MaxDrainDurationSeconds?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface UnassignPrivateNatGatewayAddressResult {
  /**
   * <p>The NAT gateway ID.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>Information about the NAT gateway IP addresses.</p>
   */
  NatGatewayAddresses?: NatGatewayAddress[];
}

/**
 * @public
 */
export interface UnmonitorInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface UnmonitorInstancesResult {
  /**
   * <p>The monitoring information.</p>
   */
  InstanceMonitorings?: InstanceMonitoring[];
}

/**
 * @public
 * <p>Describes the description of a security group rule.</p>
 *          <p>You can use this when you want to update the security group rule description for either an inbound or outbound rule.</p>
 */
export interface SecurityGroupRuleDescription {
  /**
   * <p>The ID of the security group rule.</p>
   */
  SecurityGroupRuleId?: string;

  /**
   * <p>The description of the security group rule.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressRequest {
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
   * <p>[Default VPC] The name of the security group. You must specify either the security group
   * 			ID or the security group name in the request.</p>
   */
  GroupName?: string;

  /**
   * <p>The IP permissions for the security group rule. You must specify either the IP permissions
   * 		    or the description.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The description for the egress security group rules. You must specify either the
   *             description or the IP permissions.</p>
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[];
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface WithdrawByoipCidrResult {
  /**
   * <p>Information about the address pool.</p>
   */
  ByoipCidr?: ByoipCidr;
}

/**
 * @internal
 */
export const StartNetworkInsightsAnalysisResultFilterSensitiveLog = (obj: StartNetworkInsightsAnalysisResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartVpcEndpointServicePrivateDnsVerificationRequestFilterSensitiveLog = (
  obj: StartVpcEndpointServicePrivateDnsVerificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartVpcEndpointServicePrivateDnsVerificationResultFilterSensitiveLog = (
  obj: StartVpcEndpointServicePrivateDnsVerificationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopInstancesRequestFilterSensitiveLog = (obj: StopInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopInstancesResultFilterSensitiveLog = (obj: StopInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateClientVpnConnectionsRequestFilterSensitiveLog = (
  obj: TerminateClientVpnConnectionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateConnectionStatusFilterSensitiveLog = (obj: TerminateConnectionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateClientVpnConnectionsResultFilterSensitiveLog = (
  obj: TerminateClientVpnConnectionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateInstancesRequestFilterSensitiveLog = (obj: TerminateInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateInstancesResultFilterSensitiveLog = (obj: TerminateInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnassignIpv6AddressesRequestFilterSensitiveLog = (obj: UnassignIpv6AddressesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnassignIpv6AddressesResultFilterSensitiveLog = (obj: UnassignIpv6AddressesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnassignPrivateIpAddressesRequestFilterSensitiveLog = (obj: UnassignPrivateIpAddressesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnassignPrivateNatGatewayAddressRequestFilterSensitiveLog = (
  obj: UnassignPrivateNatGatewayAddressRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnassignPrivateNatGatewayAddressResultFilterSensitiveLog = (
  obj: UnassignPrivateNatGatewayAddressResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnmonitorInstancesRequestFilterSensitiveLog = (obj: UnmonitorInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnmonitorInstancesResultFilterSensitiveLog = (obj: UnmonitorInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityGroupRuleDescriptionFilterSensitiveLog = (obj: SecurityGroupRuleDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSecurityGroupRuleDescriptionsEgressRequestFilterSensitiveLog = (
  obj: UpdateSecurityGroupRuleDescriptionsEgressRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSecurityGroupRuleDescriptionsEgressResultFilterSensitiveLog = (
  obj: UpdateSecurityGroupRuleDescriptionsEgressResult
): any => ({
  ...obj,
});

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
