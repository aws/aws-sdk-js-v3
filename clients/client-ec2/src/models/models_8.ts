// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AddressAttribute,
  AddressAttributeName,
  ByoipCidr,
  ClientVpnAuthorizationRuleStatus,
  IamInstanceProfileAssociation,
  IamInstanceProfileSpecification,
  IpPermission,
  NatGatewayAddress,
  PortRange,
  RouteTableAssociationState,
  TagSpecification,
  TransitGatewayAttachmentResourceType,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
} from "./models_0";

import {
  _InstanceType,
  AmdSevSnpSpecification,
  BlockDeviceMapping,
  CreditSpecificationRequest,
  ElasticGpuSpecification,
  HostnameType,
  InstanceBandwidthWeighting,
  InstanceInterruptionBehavior,
  MarketType,
  OperatorRequest,
  Placement,
  ShutdownBehavior,
  SpotInstanceType,
} from "./models_1";

import {
  IcmpTypeCode,
  InstanceIpv6Address,
  LocalGatewayRoute,
  ManagedPrefixList,
  RuleAction,
  SnapshotState,
  SSEType,
  TransitGatewayRoute,
} from "./models_2";

import { Filter } from "./models_3";

import {
  ClientVpnConnectionStatus,
  HttpTokensState,
  InstanceAttributeName,
  InstanceAutoRecoveryState,
  InstanceMetadataEndpointState,
  InstanceMetadataProtocolState,
  InstanceMetadataTagsState,
  InstanceState,
} from "./models_4";

import {
  InstanceNetworkInterfaceSpecification,
  NetworkInsightsAccessScopeAnalysis,
  NetworkInsightsAnalysis,
  RunInstancesMonitoringEnabled,
  SnapshotAttributeName,
  SpotFleetRequestConfigData,
  SpotFleetRequestConfigDataFilterSensitiveLog,
  SpotInstanceRequest,
  SpotInstanceRequestFilterSensitiveLog,
  SpotPlacement,
} from "./models_5";

import { CapacityReservationSpecification, InstanceMonitoring, Status } from "./models_7";

/**
 * @public
 */
export interface RejectCapacityReservationBillingOwnershipRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the Capacity Reservation for which to reject the request.</p>
   * @public
   */
  CapacityReservationId: string | undefined;
}

/**
 * @public
 */
export interface RejectCapacityReservationBillingOwnershipResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface RejectTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

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
export interface RejectTransitGatewayMulticastDomainAssociationsResult {
  /**
   * <p>Information about the multicast domain associations.</p>
   * @public
   */
  Associations?: TransitGatewayMulticastDomainAssociations | undefined;
}

/**
 * @public
 */
export interface RejectTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway peering attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

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
export interface RejectTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   * @public
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment | undefined;
}

/**
 * @public
 */
export interface RejectTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

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
export interface RejectTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the attachment.</p>
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}

/**
 * @public
 */
export interface RejectVpcEndpointConnectionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  ServiceId: string | undefined;

  /**
   * <p>The IDs of the VPC endpoints.</p>
   * @public
   */
  VpcEndpointIds: string[] | undefined;
}

/**
 * @public
 */
export interface RejectVpcEndpointConnectionsResult {
  /**
   * <p>Information about the endpoints that were not rejected, if applicable.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface RejectVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * @public
 */
export interface RejectVpcPeeringConnectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ReleaseAddressRequest {
  /**
   * <p>The allocation ID. This parameter is required.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * <p>The set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises
   *       IP addresses.</p>
   *          <p>If you provide an incorrect network border group, you receive an <code>InvalidAddress.NotFound</code> error.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

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
export interface ReleaseHostsRequest {
  /**
   * <p>The IDs of the Dedicated Hosts to release.</p>
   * @public
   */
  HostIds: string[] | undefined;
}

/**
 * @public
 */
export interface ReleaseHostsResult {
  /**
   * <p>The IDs of the Dedicated Hosts that were successfully released.</p>
   * @public
   */
  Successful?: string[] | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts that could not be released, including an error
   *             message.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface ReleaseIpamPoolAllocationRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM pool which contains the allocation you want to release.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The CIDR of the allocation you want to release.</p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>The ID of the allocation.</p>
   * @public
   */
  IpamPoolAllocationId: string | undefined;
}

/**
 * @public
 */
export interface ReleaseIpamPoolAllocationResult {
  /**
   * <p>Indicates if the release was successful.</p>
   * @public
   */
  Success?: boolean | undefined;
}

/**
 * @public
 */
export interface ReplaceIamInstanceProfileAssociationRequest {
  /**
   * <p>The IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile: IamInstanceProfileSpecification | undefined;

  /**
   * <p>The ID of the existing IAM instance profile association.</p>
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface ReplaceIamInstanceProfileAssociationResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   * @public
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation | undefined;
}

/**
 * <p>The list of criteria that are evaluated to determine whch AMIs are discoverable and usable
 *       in the account in the specified Amazon Web Services Region. Currently, the only criteria that can be
 *       specified are AMI providers. </p>
 *          <p>Up to 10 <code>imageCriteria</code> objects can be specified, and up to a total of 200
 *       values for all <code>imageProviders</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html#allowed-amis-json-configuration">JSON
 *         configuration for the Allowed AMIs criteria</a> in the
 *       <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface ImageCriterionRequest {
  /**
   * <p>A list of image providers whose AMIs are discoverable and useable in the account. Up to a
   *       total of 200 values can be specified.</p>
   *          <p>Possible values:</p>
   *          <p>
   *             <code>amazon</code>: Allow AMIs created by Amazon Web Services.</p>
   *          <p>
   *             <code>aws-marketplace</code>: Allow AMIs created by verified providers in the Amazon Web Services
   *       Marketplace.</p>
   *          <p>
   *             <code>aws-backup-vault</code>: Allow AMIs created by Amazon Web Services Backup. </p>
   *          <p>12-digit account ID: Allow AMIs created by this account. One or more account IDs can be
   *       specified.</p>
   *          <p>
   *             <code>none</code>: Allow AMIs created by your own account only. When <code>none</code> is
   *       specified, no other values can be specified.</p>
   * @public
   */
  ImageProviders?: string[] | undefined;
}

/**
 * @public
 */
export interface ReplaceImageCriteriaInAllowedImagesSettingsRequest {
  /**
   * <p>The list of criteria that are evaluated to determine whether AMIs are discoverable and
   *       usable in the account in the specified Amazon Web Services Region.</p>
   * @public
   */
  ImageCriteria?: ImageCriterionRequest[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ReplaceImageCriteriaInAllowedImagesSettingsResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface ReplaceNetworkAclAssociationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the current association between the original network ACL and the subnet.</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>The ID of the new network ACL to associate with the subnet.</p>
   * @public
   */
  NetworkAclId: string | undefined;
}

/**
 * @public
 */
export interface ReplaceNetworkAclAssociationResult {
  /**
   * <p>The ID of the new association.</p>
   * @public
   */
  NewAssociationId?: string | undefined;
}

/**
 * @public
 */
export interface ReplaceNetworkAclEntryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the ACL.</p>
   * @public
   */
  NetworkAclId: string | undefined;

  /**
   * <p>The rule number of the entry to replace.</p>
   * @public
   */
  RuleNumber: number | undefined;

  /**
   * <p>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a
   *            protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is
   *            allowed, regardless of any ports or ICMP types or codes that you specify. If you specify
   *            protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and
   *            codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6)
   *            and specify an IPv6 CIDR block, you must specify an ICMP type and code.</p>
   * @public
   */
  Protocol: string | undefined;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   * @public
   */
  RuleAction: RuleAction | undefined;

  /**
   * <p>Indicates whether to replace the egress rule.</p>
   *          <p>Default: If no value is specified, we replace the ingress rule.</p>
   * @public
   */
  Egress: boolean | undefined;

  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation (for example
   *                 <code>172.16.0.0/24</code>).</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation (for example
   *                 <code>2001:bd8:1234:1a00::/64</code>).</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * <p>ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol
   * 		        1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.</p>
   * @public
   */
  IcmpTypeCode?: IcmpTypeCode | undefined;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.
   * 		        Required if specifying protocol 6 (TCP) or 17 (UDP).</p>
   * @public
   */
  PortRange?: PortRange | undefined;
}

/**
 * @public
 */
export interface ReplaceRouteRequest {
  /**
   * <p>The ID of the prefix list for the route.</p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * <p>The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>Specifies whether to reset the local route to its default target (<code>local</code>).</p>
   * @public
   */
  LocalTarget?: boolean | undefined;

  /**
   * <p>The ID of a transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the local gateway.</p>
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * <p>[IPv4 traffic only] The ID of a carrier gateway.</p>
   * @public
   */
  CarrierGatewayId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the core network.</p>
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ODB network.</p>
   * @public
   */
  OdbNetworkArn?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  RouteTableId: string | undefined;

  /**
   * <p>The IPv4 CIDR address block used for the destination match. The value that you
   * 			provide must match the CIDR of an existing route in the table.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The ID of an internet gateway or virtual private gateway.</p>
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * <p>The IPv6 CIDR address block used for the destination match. The value that you
   * 			provide must match the CIDR of an existing route in the table.</p>
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * <p>[IPv6 traffic only] The ID of an egress-only internet gateway.</p>
   * @public
   */
  EgressOnlyInternetGatewayId?: string | undefined;

  /**
   * <p>The ID of a NAT instance in your VPC.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The ID of a network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The ID of a VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;

  /**
   * <p>[IPv4 traffic only] The ID of a NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface ReplaceRouteTableAssociationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The association ID.</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>The ID of the new route table to associate with the subnet.</p>
   * @public
   */
  RouteTableId: string | undefined;
}

/**
 * @public
 */
export interface ReplaceRouteTableAssociationResult {
  /**
   * <p>The ID of the new association.</p>
   * @public
   */
  NewAssociationId?: string | undefined;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  AssociationState?: RouteTableAssociationState | undefined;
}

/**
 * @public
 */
export interface ReplaceTransitGatewayRouteRequest {
  /**
   * <p>The CIDR range used for the destination match. Routing decisions are based on the most specific match.</p>
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>Indicates whether traffic matching this route is to be dropped.</p>
   * @public
   */
  Blackhole?: boolean | undefined;

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
export interface ReplaceTransitGatewayRouteResult {
  /**
   * <p>Information about the modified route.</p>
   * @public
   */
  Route?: TransitGatewayRoute | undefined;
}

/**
 * @public
 */
export interface ReplaceVpnTunnelRequest {
  /**
   * <p>The ID of the Site-to-Site VPN connection. </p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   * @public
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * <p>Trigger pending tunnel endpoint maintenance.</p>
   * @public
   */
  ApplyPendingMaintenance?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ReplaceVpnTunnelResult {
  /**
   * <p>Confirmation of replace tunnel operation.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ReportInstanceReasonCodes = {
  instance_stuck_in_state: "instance-stuck-in-state",
  not_accepting_credentials: "not-accepting-credentials",
  other: "other",
  password_not_available: "password-not-available",
  performance_ebs_volume: "performance-ebs-volume",
  performance_instance_store: "performance-instance-store",
  performance_network: "performance-network",
  performance_other: "performance-other",
  unresponsive: "unresponsive",
} as const;

/**
 * @public
 */
export type ReportInstanceReasonCodes = (typeof ReportInstanceReasonCodes)[keyof typeof ReportInstanceReasonCodes];

/**
 * @public
 * @enum
 */
export const ReportStatusType = {
  impaired: "impaired",
  ok: "ok",
} as const;

/**
 * @public
 */
export type ReportStatusType = (typeof ReportStatusType)[keyof typeof ReportStatusType];

/**
 * @public
 */
export interface ReportInstanceStatusRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The instances.</p>
   * @public
   */
  Instances: string[] | undefined;

  /**
   * <p>The status of all instances listed.</p>
   * @public
   */
  Status: ReportStatusType | undefined;

  /**
   * <p>The time at which the reported instance health state began.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time at which the reported instance health state ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The reason codes that describe the health state of your instance.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-stuck-in-state</code>: My instance is stuck in a state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unresponsive</code>: My instance is unresponsive.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>not-accepting-credentials</code>: My instance is not accepting my
   *                     credentials.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>password-not-available</code>: A password is not available for my
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>performance-network</code>: My instance is experiencing performance
   *                     problems that I believe are network related.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>performance-instance-store</code>: My instance is experiencing performance
   *                     problems that I believe are related to the instance stores.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>performance-ebs-volume</code>: My instance is experiencing performance
   *                     problems that I believe are related to an EBS volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>performance-other</code>: My instance is experiencing performance
   *                     problems.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>other</code>: [explain using the description parameter]</p>
   *             </li>
   *          </ul>
   * @public
   */
  ReasonCodes: ReportInstanceReasonCodes[] | undefined;

  /**
   * <p>Descriptive text about the health state of your instance.</p>
   *
   * @deprecated
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Contains the parameters for RequestSpotFleet.</p>
 * @public
 */
export interface RequestSpotFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The configuration for the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestConfig: SpotFleetRequestConfigData | undefined;
}

/**
 * <p>Contains the output of RequestSpotFleet.</p>
 * @public
 */
export interface RequestSpotFleetResponse {
  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId?: string | undefined;
}

/**
 * <p>Describes the launch specification for an instance.</p>
 * @public
 */
export interface RequestSpotLaunchSpecification {
  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Not supported.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  AddressingType?: string | undefined;

  /**
   * <p>The block device mapping entries. You can't specify both a snapshot ID and an encryption value.
   *            This is because only blank volumes can be encrypted on creation. If a snapshot is the basis for a volume,
   *            it is not blank and its encryption status is used for the volume encryption status.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * <p>Indicates whether the instance is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>The IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile?: IamInstanceProfileSpecification | undefined;

  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The instance type. Only one instance type can be specified.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The ID of the kernel.</p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>The name of the key pair.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>Indicates whether basic or detailed monitoring is enabled for the instance.</p>
   *          <p>Default: Disabled</p>
   * @public
   */
  Monitoring?: RunInstancesMonitoringEnabled | undefined;

  /**
   * <p>The network interfaces. If you specify a network interface, you must specify
   *            subnet IDs and security group IDs using the network interface.</p>
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * <p>The placement information for the instance.</p>
   * @public
   */
  Placement?: SpotPlacement | undefined;

  /**
   * <p>The ID of the RAM disk.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>The ID of the subnet in which to launch the instance.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The base64-encoded user data that instances use when starting up. User data is limited to 16 KB.</p>
   * @public
   */
  UserData?: string | undefined;
}

/**
 * <p>Contains the parameters for RequestSpotInstances.</p>
 * @public
 */
export interface RequestSpotInstancesRequest {
  /**
   * <p>The launch specification.</p>
   * @public
   */
  LaunchSpecification?: RequestSpotLaunchSpecification | undefined;

  /**
   * <p>The key-value pair for tagging the Spot Instance request on creation. The value for
   *             <code>ResourceType</code> must be <code>spot-instances-request</code>, otherwise the
   *             Spot Instance request fails. To tag the Spot Instance request after it has been created,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>. </p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
   *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">Ensuring idempotency in
   *                 Amazon EC2 API requests</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The maximum number of Spot Instances to launch.</p>
   *          <p>Default: 1</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The Spot Instance request type.</p>
   *          <p>Default: <code>one-time</code>
   *          </p>
   * @public
   */
  Type?: SpotInstanceType | undefined;

  /**
   * <p>The start date of the request. If this is a one-time request, the request becomes
   *             active at this date and time and remains active until all instances launch, the request
   *             expires, or the request is canceled. If the request is persistent, the request becomes
   *             active at this date and time and remains active until it expires or is canceled.</p>
   *          <p>The specified start date and time cannot be equal to the current date and time. You
   *             must specify a start date and time that occurs after the current date and time.</p>
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   *          <ul>
   *             <li>
   *                <p>For a persistent request, the request remains active until the
   *                         <code>ValidUntil</code> date and time is reached. Otherwise, the request
   *                     remains active until you cancel it. </p>
   *             </li>
   *             <li>
   *                <p>For a one-time request, the request remains active until all instances launch,
   *                     the request is canceled, or the <code>ValidUntil</code> date and time is
   *                     reached. By default, the request is valid for 7 days from the date the request
   *                     was created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and
   *             terminate together.</p>
   *          <p>Default: Instances are launched and terminated individually</p>
   * @public
   */
  LaunchGroup?: string | undefined;

  /**
   * <p>The user-specified name for a logical grouping of requests.</p>
   *          <p>When you specify an Availability Zone group in a Spot Instance request, all Spot
   *             Instances in the request are launched in the same Availability Zone. Instance proximity
   *             is maintained with this parameter, but the choice of Availability Zone is not. The group
   *             applies only to requests for Spot Instances of the same instance type. Any additional
   *             Spot Instance requests that are specified with the same Availability Zone group name are
   *             launched in that same Availability Zone, as long as at least one instance from the group
   *             is still active.</p>
   *          <p>If there is no active instance running in the Availability Zone group that you specify
   *             for a new Spot Instance request (all instances are terminated, the request is expired,
   *             or the maximum price you specified falls below current Spot price), then Amazon EC2 launches
   *             the instance in any Availability Zone where the constraint can be met. Consequently, the
   *             subsequent set of Spot Instances could be placed in a different zone from the original
   *             request, even if you specified the same Availability Zone group.</p>
   *          <p>Default: Instances are launched in any available Availability Zone.</p>
   * @public
   */
  AvailabilityZoneGroup?: string | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  BlockDurationMinutes?: number | undefined;
}

/**
 * <p>Contains the output of RequestSpotInstances.</p>
 * @public
 */
export interface RequestSpotInstancesResult {
  /**
   * <p>The Spot Instance requests.</p>
   * @public
   */
  SpotInstanceRequests?: SpotInstanceRequest[] | undefined;
}

/**
 * @public
 */
export interface ResetAddressAttributeRequest {
  /**
   * <p>[EC2-VPC] The allocation ID.</p>
   * @public
   */
  AllocationId: string | undefined;

  /**
   * <p>The attribute of the IP address.</p>
   * @public
   */
  Attribute: AddressAttributeName | undefined;

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
export interface ResetAddressAttributeResult {
  /**
   * <p>Information about the IP address.</p>
   * @public
   */
  Address?: AddressAttribute | undefined;
}

/**
 * @public
 */
export interface ResetEbsDefaultKmsKeyIdRequest {
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
export interface ResetEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default KMS key for EBS encryption by default.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResetFpgaImageAttributeName = {
  loadPermission: "loadPermission",
} as const;

/**
 * @public
 */
export type ResetFpgaImageAttributeName =
  (typeof ResetFpgaImageAttributeName)[keyof typeof ResetFpgaImageAttributeName];

/**
 * @public
 */
export interface ResetFpgaImageAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the AFI.</p>
   * @public
   */
  FpgaImageId: string | undefined;

  /**
   * <p>The attribute.</p>
   * @public
   */
  Attribute?: ResetFpgaImageAttributeName | undefined;
}

/**
 * @public
 */
export interface ResetFpgaImageAttributeResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ResetImageAttributeName = {
  launchPermission: "launchPermission",
} as const;

/**
 * @public
 */
export type ResetImageAttributeName = (typeof ResetImageAttributeName)[keyof typeof ResetImageAttributeName];

/**
 * <p>Contains the parameters for ResetImageAttribute.</p>
 * @public
 */
export interface ResetImageAttributeRequest {
  /**
   * <p>The attribute to reset (currently you can only reset the launch permission
   *       attribute).</p>
   * @public
   */
  Attribute: ResetImageAttributeName | undefined;

  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ResetInstanceAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The attribute to reset.</p>
   *          <important>
   *             <p>You can only reset the following attributes: <code>kernel</code> |
   *                     <code>ramdisk</code> | <code>sourceDestCheck</code>.</p>
   *          </important>
   * @public
   */
  Attribute: InstanceAttributeName | undefined;
}

/**
 * <p>Contains the parameters for ResetNetworkInterfaceAttribute.</p>
 * @public
 */
export interface ResetNetworkInterfaceAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The source/destination checking attribute. Resets the value to
   *             <code>true</code>.</p>
   * @public
   */
  SourceDestCheck?: string | undefined;
}

/**
 * @public
 */
export interface ResetSnapshotAttributeRequest {
  /**
   * <p>The attribute to reset. Currently, only the attribute for permission to create volumes can
   *       be reset.</p>
   * @public
   */
  Attribute: SnapshotAttributeName | undefined;

  /**
   * <p>The ID of the snapshot.</p>
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
export interface RestoreAddressToClassicRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The Elastic IP address.</p>
   * @public
   */
  PublicIp: string | undefined;
}

/**
 * @public
 */
export interface RestoreAddressToClassicResult {
  /**
   * <p>The Elastic IP address.</p>
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * <p>The move status for the IP address.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface RestoreImageFromRecycleBinRequest {
  /**
   * <p>The ID of the AMI to restore.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreImageFromRecycleBinResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreManagedPrefixListVersionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * <p>The version to restore.</p>
   * @public
   */
  PreviousVersion: number | undefined;

  /**
   * <p>The current version number for the prefix list.</p>
   * @public
   */
  CurrentVersion: number | undefined;
}

/**
 * @public
 */
export interface RestoreManagedPrefixListVersionResult {
  /**
   * <p>Information about the prefix list.</p>
   * @public
   */
  PrefixList?: ManagedPrefixList | undefined;
}

/**
 * @public
 */
export interface RestoreSnapshotFromRecycleBinRequest {
  /**
   * <p>The ID of the snapshot to restore.</p>
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
export interface RestoreSnapshotFromRecycleBinResult {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The ARN of the Outpost on which the snapshot is stored. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html">Amazon EBS local snapshots on Outposts</a> in the
   *       <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The description for the snapshot.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the EBS snapshot.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The progress of the snapshot, as a percentage.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>The time stamp when the snapshot was initiated.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The state of the snapshot.</p>
   * @public
   */
  State?: SnapshotState | undefined;

  /**
   * <p>The ID of the volume that was used to create the snapshot.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>The size of the volume, in GiB.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  SseType?: SSEType | undefined;
}

/**
 * @public
 */
export interface RestoreSnapshotTierRequest {
  /**
   * <p>The ID of the snapshot to restore.</p>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>Specifies the number of days for which to temporarily restore an archived snapshot.
   *       Required for temporary restores only. The snapshot will be automatically re-archived
   *       after this period.</p>
   *          <p>To temporarily restore an archived snapshot, specify the number of days and omit
   *       the <b>PermanentRestore</b> parameter or set it to
   *       <code>false</code>.</p>
   * @public
   */
  TemporaryRestoreDays?: number | undefined;

  /**
   * <p>Indicates whether to permanently restore an archived snapshot. To permanently restore
   *       an archived snapshot, specify <code>true</code> and omit the
   *       <b>RestoreSnapshotTierRequest$TemporaryRestoreDays</b> parameter.</p>
   * @public
   */
  PermanentRestore?: boolean | undefined;

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
export interface RestoreSnapshotTierResult {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The date and time when the snapshot restore process started.</p>
   * @public
   */
  RestoreStartTime?: Date | undefined;

  /**
   * <p>For temporary restores only. The number of days for which the archived snapshot
   *       is temporarily restored.</p>
   * @public
   */
  RestoreDuration?: number | undefined;

  /**
   * <p>Indicates whether the snapshot is permanently restored. <code>true</code> indicates a permanent
   *       restore. <code>false</code> indicates a temporary restore.</p>
   * @public
   */
  IsPermanentRestore?: boolean | undefined;
}

/**
 * @public
 */
export interface RevokeClientVpnIngressRequest {
  /**
   * <p>The ID of the Client VPN endpoint with which the authorization rule is associated.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the network for which access is being removed.</p>
   * @public
   */
  TargetNetworkCidr: string | undefined;

  /**
   * <p>The ID of the Active Directory group for which to revoke access. </p>
   * @public
   */
  AccessGroupId?: string | undefined;

  /**
   * <p>Indicates whether access should be revoked for all groups for a single <code>TargetNetworkCidr</code> that earlier authorized ingress for all groups using <code>AuthorizeAllGroups</code>.
   * 			This does not impact other authorization rules that allowed ingress to the same <code>TargetNetworkCidr</code> with a specific <code>AccessGroupId</code>.</p>
   * @public
   */
  RevokeAllGroups?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RevokeClientVpnIngressResult {
  /**
   * <p>The current state of the authorization rule.</p>
   * @public
   */
  Status?: ClientVpnAuthorizationRuleStatus | undefined;
}

/**
 * @public
 */
export interface RevokeSecurityGroupEgressRequest {
  /**
   * <p>The IDs of the security group rules.</p>
   * @public
   */
  SecurityGroupRuleIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a
   *            destination security group.</p>
   * @public
   */
  SourceSecurityGroupName?: string | undefined;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a destination security
   *             group.</p>
   * @public
   */
  SourceSecurityGroupOwnerId?: string | undefined;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the protocol name or
   *             number.</p>
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the CIDR.</p>
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * <p>The sets of IP permissions. You can't specify a destination security group and a CIDR IP address range in the same set of permissions.</p>
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;
}

/**
 * <p>A security group rule removed with <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupEgress.html">RevokeSecurityGroupEgress</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupIngress.html">RevokeSecurityGroupIngress</a>.</p>
 * @public
 */
export interface RevokedSecurityGroupRule {
  /**
   * <p>A security group rule ID.</p>
   * @public
   */
  SecurityGroupRuleId?: string | undefined;

  /**
   * <p>A security group ID.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>Defines if a security group rule is an outbound rule.</p>
   * @public
   */
  IsEgress?: boolean | undefined;

  /**
   * <p>The security group rule's protocol.</p>
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * <p>The 'from' port number of the security group rule.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The 'to' port number of the security group rule.</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>The IPv4 CIDR of the traffic source.</p>
   * @public
   */
  CidrIpv4?: string | undefined;

  /**
   * <p>The IPv6 CIDR of the traffic source.</p>
   * @public
   */
  CidrIpv6?: string | undefined;

  /**
   * <p>The ID of a prefix list that's the traffic source.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The ID of a referenced security group.</p>
   * @public
   */
  ReferencedGroupId?: string | undefined;

  /**
   * <p>A description of the revoked security group rule.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface RevokeSecurityGroupEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;

  /**
   * <p>The outbound rules that were unknown to the service. In some cases,
   *                 <code>unknownIpPermissionSet</code> might be in a different format from the request
   *             parameter. </p>
   * @public
   */
  UnknownIpPermissions?: IpPermission[] | undefined;

  /**
   * <p>Details about the revoked security group rules.</p>
   * @public
   */
  RevokedSecurityGroupRules?: RevokedSecurityGroupRule[] | undefined;
}

/**
 * @public
 */
export interface RevokeSecurityGroupIngressRequest {
  /**
   * <p>The CIDR IP address range. You can't specify this parameter when specifying a source security group.</p>
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *            If the protocol is ICMP, this is the ICMP type or -1 (all ICMP types).</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>[Default VPC] The name of the security group. You must specify either the
   *             security group ID or the security group name in the request. For security groups in a
   *             nondefault VPC, you must specify the security group ID.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The sets of IP permissions. You can't specify a source security group and a CIDR IP address range in the same set of permissions.</p>
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>) or number
   *         (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>).
   *         Use <code>-1</code> to specify all.</p>
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * <p>[Default VPC] The name of the source security group. You can't specify this parameter
   *          in combination with the following parameters: the CIDR IP address range, the start of the port range,
   *          the IP protocol, and the end of the port range. The source security group must be in the same VPC.
   *          To revoke a specific rule for an IP protocol and port range, use a set of IP permissions instead.</p>
   * @public
   */
  SourceSecurityGroupName?: string | undefined;

  /**
   * <p>Not supported.</p>
   * @public
   */
  SourceSecurityGroupOwnerId?: string | undefined;

  /**
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *          If the protocol is ICMP, this is the ICMP code or -1 (all ICMP codes).</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>The IDs of the security group rules.</p>
   * @public
   */
  SecurityGroupRuleIds?: string[] | undefined;

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
export interface RevokeSecurityGroupIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;

  /**
   * <p>The inbound rules that were unknown to the service. In some cases,
   *                 <code>unknownIpPermissionSet</code> might be in a different format from the request
   *             parameter. </p>
   * @public
   */
  UnknownIpPermissions?: IpPermission[] | undefined;

  /**
   * <p>Details about the revoked security group rules.</p>
   * @public
   */
  RevokedSecurityGroupRules?: RevokedSecurityGroupRule[] | undefined;
}

/**
 * <p>The CPU options for the instance. Both the core count and threads per core must be
 *             specified in the request.</p>
 * @public
 */
export interface CpuOptionsRequest {
  /**
   * <p>The number of CPU cores for the instance.</p>
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * <p>The number of threads per CPU core. To disable multithreading for the instance,
   *             specify a value of <code>1</code>. Otherwise, specify the default value of
   *                 <code>2</code>.</p>
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * <p>Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported
   *             with M6a, R6a, and C6a instance types only. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html">AMD SEV-SNP</a>.</p>
   * @public
   */
  AmdSevSnp?: AmdSevSnpSpecification | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Inference is no longer available.</p>
 *          </note>
 *          <p>
 *            Describes an elastic inference accelerator.
 *         </p>
 * @public
 */
export interface ElasticInferenceAccelerator {
  /**
   * <p>
   *         	The type of elastic inference accelerator. The possible values are <code>eia1.medium</code>, <code>eia1.large</code>, <code>eia1.xlarge</code>, <code>eia2.medium</code>, <code>eia2.large</code>, and <code>eia2.xlarge</code>.
   *         </p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>
   *             The number of elastic inference accelerators to attach to the instance.
   *         </p>
   *          <p>Default: 1</p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For
 *             more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html"> What is Amazon Web Services Nitro
 *                 Enclaves?</a> in the <i>Amazon Web Services Nitro Enclaves User
 *                 Guide</i>.</p>
 * @public
 */
export interface EnclaveOptionsRequest {
  /**
   * <p>To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to
   *                 <code>true</code>.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Indicates whether your instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
 *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your Amazon EC2
 *                 instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface HibernationOptionsRequest {
  /**
   * <p>Set to <code>true</code> to enable your instance for hibernation.</p>
   *          <p>For Spot Instances, if you set <code>Configured</code> to <code>true</code>, either
   *             omit the <code>InstanceInterruptionBehavior</code> parameter (for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotMarketOptions.html">
   *                <code>SpotMarketOptions</code>
   *             </a>), or set it to
   *                 <code>hibernate</code>. When <code>Configured</code> is true:</p>
   *          <ul>
   *             <li>
   *                <p>If you omit <code>InstanceInterruptionBehavior</code>, it defaults to
   *                         <code>hibernate</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you set <code>InstanceInterruptionBehavior</code> to a value other than
   *                         <code>hibernate</code>, you'll get an error.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * <p>The options for Spot Instances.</p>
 * @public
 */
export interface SpotMarketOptions {
  /**
   * <p>The maximum hourly price that you're willing to pay for a Spot Instance. We do not
   *             recommend using this parameter because it can lead to increased interruptions. If you do
   *             not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more
   *                 frequently than if you do not specify this parameter.</p>
   *             <p>If you specify a maximum price, it must be more than USD $0.001. Specifying a value
   *                 below USD $0.001 will result in an <code>InvalidParameterValue</code> error
   *                 message.</p>
   *          </important>
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * <p>The Spot Instance request type. For <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances">RunInstances</a>, persistent
   *             Spot Instance requests are only supported when the instance interruption behavior is
   *             either <code>hibernate</code> or <code>stop</code>.</p>
   * @public
   */
  SpotInstanceType?: SpotInstanceType | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             Supported only for persistent requests.</p>
   *          <ul>
   *             <li>
   *                <p>For a persistent request, the request remains active until the
   *                         <code>ValidUntil</code> date and time is reached. Otherwise, the request
   *                     remains active until you cancel it.</p>
   *             </li>
   *             <li>
   *                <p>For a one-time request, <code>ValidUntil</code> is not supported. The request
   *                     remains active until all instances launch or you cancel the request.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   *          <p>If <code>Configured</code> (for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html">
   *                <code>HibernationOptions</code>
   *             </a>) is set to <code>true</code>, the
   *                 <code>InstanceInterruptionBehavior</code> parameter is automatically set to
   *                 <code>hibernate</code>. If you set it to <code>stop</code> or
   *             <code>terminate</code>, you'll get an error.</p>
   *          <p>If <code>Configured</code> (for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html">
   *                <code>HibernationOptions</code>
   *             </a>) is set to <code>false</code> or
   *                 <code>null</code>, the <code>InstanceInterruptionBehavior</code> parameter is
   *             automatically set to <code>terminate</code>. You can also set it to <code>stop</code> or
   *                 <code>hibernate</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/interruption-behavior.html">Interruption
   *                 behavior</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;
}

/**
 * <p>Describes the market (purchasing) option for the instances.</p>
 * @public
 */
export interface InstanceMarketOptionsRequest {
  /**
   * <p>The market type.</p>
   * @public
   */
  MarketType?: MarketType | undefined;

  /**
   * <p>The options for Spot Instances.</p>
   * @public
   */
  SpotOptions?: SpotMarketOptions | undefined;
}

/**
 * <p>Describes the launch template to use.</p>
 * @public
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the launch template ID or the
   *             launch template name, but not both.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify either the launch template ID or the
   *             launch template name, but not both.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The launch template version number, <code>$Latest</code>, or
   *             <code>$Default</code>.</p>
   *          <p>A value of <code>$Latest</code> uses the latest version of the launch template.</p>
   *          <p>A value of <code>$Default</code> uses the default version of the launch template.</p>
   *          <p>Default: The default version of the launch template.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>Describes a license configuration.</p>
 * @public
 */
export interface LicenseConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * <p>The maintenance options for the instance.</p>
 * @public
 */
export interface InstanceMaintenanceOptionsRequest {
  /**
   * <p>Disables the automatic recovery behavior of your instance or sets it to default. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html#instance-configuration-recovery">Simplified automatic recovery</a>.</p>
   * @public
   */
  AutoRecovery?: InstanceAutoRecoveryState | undefined;
}

/**
 * <p>The metadata options for the instance.</p>
 * @public
 */
export interface InstanceMetadataOptionsRequest {
  /**
   * <p>Indicates whether IMDSv2 is required.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - IMDSv2 is optional, which means that you can use
   *                     either IMDSv2 or IMDSv1.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - IMDSv2 is required, which means that IMDSv1 is
   *                     disabled, and you must use IMDSv2.</p>
   *             </li>
   *          </ul>
   *          <p>Default:</p>
   *          <ul>
   *             <li>
   *                <p>If the value of <code>ImdsSupport</code> for the Amazon Machine Image (AMI)
   *                     for your instance is <code>v2.0</code> and the account level default is set to
   *                         <code>no-preference</code>, the default is <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>If the value of <code>ImdsSupport</code> for the Amazon Machine Image (AMI)
   *                     for your instance is <code>v2.0</code>, but the account level default is set to
   *                         <code>V1 or V2</code>, the default is <code>optional</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The default value can also be affected by other combinations of parameters. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html#instance-metadata-options-order-of-precedence">Order of precedence for instance metadata options</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  HttpTokens?: HttpTokensState | undefined;

  /**
   * <p>The maximum number of hops that the metadata token can travel.</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances.</p>
   *          <p>If you specify a value of <code>disabled</code>, you cannot access your instance
   *             metadata.</p>
   *          <p>Default: <code>enabled</code>
   *          </p>
   * @public
   */
  HttpEndpoint?: InstanceMetadataEndpointState | undefined;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   * @public
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | undefined;

  /**
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | undefined;
}

/**
 * <p>Configure network performance options for your instance that are geared towards performance
 *     		improvements based on the workload that it runs.</p>
 * @public
 */
export interface InstanceNetworkPerformanceOptionsRequest {
  /**
   * <p>Specify the bandwidth weighting option to boost the associated type of baseline bandwidth,
   *     		as follows:</p>
   *          <dl>
   *             <dt>default</dt>
   *             <dd>
   *                <p>This option uses the standard bandwidth configuration for your instance type.</p>
   *             </dd>
   *             <dt>vpc-1</dt>
   *             <dd>
   *                <p>This option boosts your networking baseline bandwidth and reduces your EBS baseline
   *     					bandwidth.</p>
   *             </dd>
   *             <dt>ebs-1</dt>
   *             <dd>
   *                <p>This option boosts your EBS baseline bandwidth and reduces your networking baseline
   *     					bandwidth.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  BandwidthWeighting?: InstanceBandwidthWeighting | undefined;
}

/**
 * <p>Describes the options for instance hostnames.</p>
 * @public
 */
export interface PrivateDnsNameOptionsRequest {
  /**
   * <p>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name
   *             must be based on the instance ID. For dual-stack subnets, you can specify whether DNS
   *             names use the instance IPv4 address or the instance ID.</p>
   * @public
   */
  HostnameType?: HostnameType | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA
   *             records.</p>
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}

/**
 * @public
 */
export interface RunInstancesRequest {
  /**
   * <p>The block device mapping, which defines the EBS volumes and instance store volumes to
   *             attach to the instance at launch. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block device
   *                 mappings</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * <p>The ID of the AMI. An AMI ID is required to launch an instance and must be specified
   *             here or in a launch template.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Amazon EC2 instance
   *                 types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The number of IPv6 addresses to associate with the primary network
   *             interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You
   *             cannot specify this option and the option to assign specific IPv6 addresses in the same
   *             request. You can specify this option if you've specified a minimum number of instances
   *             to launch.</p>
   *          <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * <p>The IPv6 addresses from the range of the subnet to associate with the
   *             primary network interface. You cannot specify this option and the option to assign a
   *             number of IPv6 addresses in the same request. You cannot specify this option if you've
   *             specified a minimum number of instances to launch.</p>
   *          <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * <p>The ID of the kernel.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">PV-GRUB</a> in the
   *                     <i>Amazon EC2 User Guide</i>.</p>
   *          </important>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p>
   *          <important>
   *             <p>If you do not specify a key pair, you can't connect to the instance unless you
   *                 choose an AMI that is configured to allow users another way to log in.</p>
   *          </important>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>The maximum number of instances to launch. If you specify a value that is more
   *             capacity than Amazon EC2 can launch in the target Availability Zone, Amazon EC2
   *             launches the largest possible number of instances above the specified minimum
   *             count.</p>
   *          <p>Constraints: Between 1 and the quota for the specified instance type for your account for this Region.
   *             For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-instance-quotas.html">Amazon EC2 instance type quotas</a>.</p>
   * @public
   */
  MaxCount: number | undefined;

  /**
   * <p>The minimum number of instances to launch. If you specify a value that is more
   *             capacity than Amazon EC2 can provide in the target Availability Zone, Amazon EC2 does
   *             not launch any instances.</p>
   *          <p>Constraints: Between 1 and the quota for the specified instance type for your account for this Region.
   *             For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-instance-quotas.html">Amazon EC2 instance type quotas</a>.</p>
   * @public
   */
  MinCount: number | undefined;

  /**
   * <p>Specifies whether detailed monitoring is enabled for the instance.</p>
   * @public
   */
  Monitoring?: RunInstancesMonitoringEnabled | undefined;

  /**
   * <p>The placement for the instance.</p>
   * @public
   */
  Placement?: Placement | undefined;

  /**
   * <p>The ID of the RAM disk to select. Some kernels require additional drivers at launch.
   *             Check the kernel requirements for information about whether you need to specify a RAM
   *             disk. To find kernel requirements, go to the Amazon Web Services Resource Center and
   *             search for the kernel ID.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">PV-GRUB</a> in the
   *                     <i>Amazon EC2 User Guide</i>.</p>
   *          </important>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>The IDs of the security groups. You can create a security group using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>.</p>
   *          <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface instead of using this parameter.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>[Default VPC] The names of the security groups.</p>
   *          <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface instead of using this parameter.</p>
   *          <p>Default: Amazon EC2 uses the default security group.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The ID of the subnet to launch the instance into.</p>
   *          <p>If you specify a network interface, you must specify any subnets as part of the
   *             network interface instead of using this parameter.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The user data to make available to the instance. User data must be base64-encoded.
   *             Depending on the tool or SDK that you're using, the base64-encoding might be performed for you.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-add-user-data.html">Work with instance user data</a>.</p>
   * @public
   */
  UserData?: string | undefined;

  /**
   * <p>An elastic GPU to associate with the instance.</p>
   *          <note>
   *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024.</p>
   *          </note>
   * @public
   */
  ElasticGpuSpecification?: ElasticGpuSpecification[] | undefined;

  /**
   * <p>An elastic inference accelerator to associate with the instance.</p>
   *          <note>
   *             <p>Amazon Elastic Inference is no longer available.</p>
   *          </note>
   * @public
   */
  ElasticInferenceAccelerators?: ElasticInferenceAccelerator[] | undefined;

  /**
   * <p>The tags to apply to the resources that are created during instance launch.</p>
   *          <p>You can specify tags for the following resources only:</p>
   *          <ul>
   *             <li>
   *                <p>Instances</p>
   *             </li>
   *             <li>
   *                <p>Volumes</p>
   *             </li>
   *             <li>
   *                <p>Spot Instance requests</p>
   *             </li>
   *             <li>
   *                <p>Network interfaces</p>
   *             </li>
   *          </ul>
   *          <p>To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The launch template. Any additional parameters that you specify for the new instance
   *             overwrite the corresponding parameters included in the launch template.</p>
   * @public
   */
  LaunchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * <p>The market (purchasing) option for the instances.</p>
   *          <p>For <a>RunInstances</a>, persistent Spot Instance requests are
   *             only supported when <b>InstanceInterruptionBehavior</b> is set
   *             to either <code>hibernate</code> or <code>stop</code>.</p>
   * @public
   */
  InstanceMarketOptions?: InstanceMarketOptionsRequest | undefined;

  /**
   * <p>The credit option for CPU usage of the burstable performance instance. Valid values
   *             are <code>standard</code> and <code>unlimited</code>. To change this attribute after
   *             launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCreditSpecification.html">
   *                 ModifyInstanceCreditSpecification</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
   *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>standard</code> (T2 instances) or <code>unlimited</code> (T3/T3a/T4g
   *             instances)</p>
   *          <p>For T3 instances with <code>host</code> tenancy, only <code>standard</code> is
   *             supported.</p>
   * @public
   */
  CreditSpecification?: CreditSpecificationRequest | undefined;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimize CPU options</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  CpuOptions?: CpuOptionsRequest | undefined;

  /**
   * <p>Information about the Capacity Reservation targeting option. If you do not specify this parameter, the
   *             instance's Capacity Reservation preference defaults to <code>open</code>, which enables
   *             it to run in any open Capacity Reservation that has matching attributes (instance type,
   *             platform, Availability Zone, and tenancy).</p>
   * @public
   */
  CapacityReservationSpecification?: CapacityReservationSpecification | undefined;

  /**
   * <p>Indicates whether an instance is enabled for hibernation. This parameter is valid only
   *             if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
   *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your Amazon EC2
   *                 instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>You can't enable hibernation and Amazon Web Services Nitro Enclaves on the same
   *             instance.</p>
   * @public
   */
  HibernationOptions?: HibernationOptionsRequest | undefined;

  /**
   * <p>The license configurations.</p>
   * @public
   */
  LicenseSpecifications?: LicenseConfigurationRequest[] | undefined;

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a>.</p>
   * @public
   */
  MetadataOptions?: InstanceMetadataOptionsRequest | undefined;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For
   *             more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">What is Amazon Web Services Nitro
   *                 Enclaves?</a> in the <i>Amazon Web Services Nitro Enclaves User
   *                 Guide</i>.</p>
   *          <p>You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same
   *             instance.</p>
   * @public
   */
  EnclaveOptions?: EnclaveOptionsRequest | undefined;

  /**
   * <p>The options for the instance hostname.
   *             The default values are inherited from the subnet.
   *             Applies only if creating a network interface, not attaching an existing one.</p>
   * @public
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptionsRequest | undefined;

  /**
   * <p>The maintenance and recovery options for the instance.</p>
   * @public
   */
  MaintenanceOptions?: InstanceMaintenanceOptionsRequest | undefined;

  /**
   * <p>Indicates whether an instance is enabled for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection">Stop
   *                 protection</a>. </p>
   * @public
   */
  DisableApiStop?: boolean | undefined;

  /**
   * <p>If you’re launching an instance into a dual-stack or IPv6-only subnet, you can enable
   *             assigning a primary IPv6 address. A primary IPv6 address is an IPv6 GUA address
   *             associated with an ENI that you have enabled to use a primary IPv6 address. Use this
   *             option if an instance relies on its IPv6 address not changing. When you launch the
   *             instance, Amazon Web Services will automatically assign an IPv6 address associated with
   *             the ENI attached to your instance to be the primary IPv6 address. Once you enable an
   *             IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6
   *             GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6
   *             address until the instance is terminated or the network interface is detached. If you
   *             have multiple IPv6 addresses associated with an ENI attached to your instance and you
   *             enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI
   *             becomes the primary IPv6 address.</p>
   * @public
   */
  EnablePrimaryIpv6?: boolean | undefined;

  /**
   * <p>Contains settings for the network performance options for the instance.</p>
   * @public
   */
  NetworkPerformanceOptions?: InstanceNetworkPerformanceOptionsRequest | undefined;

  /**
   * <p>Reserved for internal use.</p>
   * @public
   */
  Operator?: OperatorRequest | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Indicates whether termination protection is enabled for the instance. The default
   *             is <code>false</code>, which means that you can terminate the instance using
   *             the Amazon EC2 console, command line tools, or API. You can enable termination protection
   *             when you launch an instance, while the instance is running, or while the instance
   *             is stopped.</p>
   * @public
   */
  DisableApiTermination?: boolean | undefined;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   *          <p>Default: <code>stop</code>
   *          </p>
   * @public
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | undefined;

  /**
   * <p>The primary IPv4 address. You must specify a value from the IPv4 address
   *             range of the subnet.</p>
   *          <p>Only one private IP address can be designated as primary. You can't specify this
   *             option if you've specified the option to designate a private IP address as the primary
   *             IP address in a network interface specification. You cannot specify this option if
   *             you're launching more than one instance in the request.</p>
   *          <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. If you do not specify a client token, a randomly generated token is used for
   *             the request to ensure idempotency.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *          <p>Constraints: Maximum 64 ASCII characters</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * <p>The network interfaces to associate with the instance.</p>
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of an IAM instance
   *             profile.</p>
   * @public
   */
  IamInstanceProfile?: IamInstanceProfileSpecification | undefined;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal Amazon EBS I/O performance. This optimization isn't available with all
   *             instance types. Additional usage charges apply when using an EBS-optimized
   *             instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  EbsOptimized?: boolean | undefined;
}

/**
 * <p>Describes an EBS volume for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesEbs {
  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>Indicates whether the volume is encrypted. You can attached encrypted volumes only to instances that
   *          support them.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS) to provision for a <code>gp3</code>, <code>io1</code>, or <code>io2</code>
   *    	   volume.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The size of the volume, in GiB.</p>
   *          <p>Default: If you're creating the volume from a snapshot and don't specify a volume size, the default
   *          is the snapshot size.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>The volume type.</p>
   *          <p>Default: <code>gp2</code>
   *          </p>
   * @public
   */
  VolumeType?: string | undefined;
}

/**
 * <p>Describes a block device mapping for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesBlockDeviceMapping {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>Parameters used to set up EBS volumes automatically when the instance is launched.</p>
   * @public
   */
  Ebs?: ScheduledInstancesEbs | undefined;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   * @public
   */
  NoDevice?: string | undefined;

  /**
   * <p>The virtual device name (<code>ephemeral</code>N). Instance store volumes are numbered
   *          starting from 0. An instance type with two available instance store volumes can specify mappings
   *          for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of available instance store
   *          volumes depends on the instance type. After you connect to the instance, you must mount the
   *          volume.</p>
   *          <p>Constraints: For M3 instances, you must specify instance store volumes in the block device
   *          mapping for the instance. When you launch an M3 instance, we ignore any instance store volumes
   *          specified in the block device mapping for the AMI.</p>
   * @public
   */
  VirtualName?: string | undefined;
}

/**
 * <p>Describes an IAM instance profile for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesIamInstanceProfile {
  /**
   * <p>The Amazon Resource Name (ARN).</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Describes whether monitoring is enabled for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesMonitoring {
  /**
   * <p>Indicates whether monitoring is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Describes an IPv6 address.</p>
 * @public
 */
export interface ScheduledInstancesIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * <p>Describes a private IPv4 address for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesPrivateIpAddressConfig {
  /**
   * <p>Indicates whether this is a primary IPv4 address. Otherwise, this is a secondary IPv4 address.</p>
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * <p>The IPv4 address.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * <p>Describes a network interface for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesNetworkInterface {
  /**
   * <p>Indicates whether to assign a public IPv4 address to instances launched in a VPC. The
   *          public IPv4 address can only be assigned to a network interface for eth0, and can only be
   *          assigned to a new network interface, not an existing one. You cannot specify more than one
   *          network interface in the request. If launching into a default subnet, the default value is
   *          <code>true</code>.</p>
   *          <p>Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses
   * associated with running instances and Elastic IP addresses. For more information, see the <i>Public IPv4 Address</i> tab on the <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing page</a>.</p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * <p>Indicates whether to delete the interface when the instance is terminated.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The index of the device for the network interface attachment.</p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>The number of IPv6 addresses to assign to the network interface. The IPv6 addresses are automatically selected from the subnet range.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * <p>The specific IPv6 addresses from the subnet range.</p>
   * @public
   */
  Ipv6Addresses?: ScheduledInstancesIpv6Address[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>The private IPv4 addresses.</p>
   * @public
   */
  PrivateIpAddressConfigs?: ScheduledInstancesPrivateIpAddressConfig[] | undefined;

  /**
   * <p>The number of secondary private IPv4 addresses.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * <p>Describes the placement for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesPlacement {
  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The name of the placement group.</p>
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * <p>Describes the launch specification for a Scheduled Instance.</p>
 *          <p>If you are launching the Scheduled Instance in EC2-VPC, you must specify the ID of the subnet.
 *           You can specify the subnet using either <code>SubnetId</code> or <code>NetworkInterface</code>.</p>
 * @public
 */
export interface ScheduledInstancesLaunchSpecification {
  /**
   * <p>The block device mapping entries.</p>
   * @public
   */
  BlockDeviceMappings?: ScheduledInstancesBlockDeviceMapping[] | undefined;

  /**
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>The IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile?: ScheduledInstancesIamInstanceProfile | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI).</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The ID of the kernel.</p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>The name of the key pair.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>Enable or disable monitoring for the instances.</p>
   * @public
   */
  Monitoring?: ScheduledInstancesMonitoring | undefined;

  /**
   * <p>The network interfaces.</p>
   * @public
   */
  NetworkInterfaces?: ScheduledInstancesNetworkInterface[] | undefined;

  /**
   * <p>The placement information.</p>
   * @public
   */
  Placement?: ScheduledInstancesPlacement | undefined;

  /**
   * <p>The ID of the RAM disk.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The base64-encoded MIME user data.</p>
   * @public
   */
  UserData?: string | undefined;
}

/**
 * <p>Contains the parameters for RunScheduledInstances.</p>
 * @public
 */
export interface RunScheduledInstancesRequest {
  /**
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The number of instances.</p>
   *          <p>Default: 1</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The launch specification. You must match the instance type, Availability Zone,
   *          network, and platform of the schedule that you purchased.</p>
   * @public
   */
  LaunchSpecification: ScheduledInstancesLaunchSpecification | undefined;

  /**
   * <p>The Scheduled Instance ID.</p>
   * @public
   */
  ScheduledInstanceId: string | undefined;
}

/**
 * <p>Contains the output of RunScheduledInstances.</p>
 * @public
 */
export interface RunScheduledInstancesResult {
  /**
   * <p>The IDs of the newly launched instances.</p>
   * @public
   */
  InstanceIdSet?: string[] | undefined;
}

/**
 * @public
 */
export interface SearchLocalGatewayRoutesRequest {
  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.exact-match</code> - The exact match of the specified filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.longest-prefix-match</code> - The longest prefix that matches the route.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.subnet-of-match</code> - The routes with a subnet that match the specified CIDR filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.supernet-of-match</code> - The routes with a CIDR that encompass the CIDR filter.
   *                For example, if you have 10.0.1.0/29 and 10.0.1.0/31 routes in your route table and you specify <code>supernet-of-match</code>
   *                as 10.0.1.0/30, then the result returns 10.0.1.0/29.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the route.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The route type.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
export interface SearchLocalGatewayRoutesResult {
  /**
   * <p>Information about the routes.</p>
   * @public
   */
  Routes?: LocalGatewayRoute[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchTransitGatewayMulticastGroupsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-ip-address</code> - The IP address of the  transit gateway multicast group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-group-member</code> - The resource is a group member. Valid values are <code>true</code> | <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-group-source</code> - The resource is a group source. Valid values are <code>true</code> | <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>member-type</code> - The member type. Valid values are <code>igmp</code> | <code>static</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The type of resource. Valid values are <code>vpc</code> | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>tgw-peering</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-type</code> - The source type. Valid values are <code>igmp</code> | <code>static</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The id of the transit gateway attachment.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
 * @enum
 */
export const MembershipType = {
  igmp: "igmp",
  static: "static",
} as const;

/**
 * @public
 */
export type MembershipType = (typeof MembershipType)[keyof typeof MembershipType];

/**
 * <p>Describes the  transit gateway multicast group resources.</p>
 * @public
 */
export interface TransitGatewayMulticastGroup {
  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain group resource.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   * @public
   */
  GroupMember?: boolean | undefined;

  /**
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   * @public
   */
  GroupSource?: boolean | undefined;

  /**
   * <p>The member type (for example, <code>static</code>).</p>
   * @public
   */
  MemberType?: MembershipType | undefined;

  /**
   * <p>The source type.</p>
   * @public
   */
  SourceType?: MembershipType | undefined;
}

/**
 * @public
 */
export interface SearchTransitGatewayMulticastGroupsResult {
  /**
   * <p>Information about the  transit gateway multicast group.</p>
   * @public
   */
  MulticastGroups?: TransitGatewayMulticastGroup[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchTransitGatewayRoutesRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attachment.transit-gateway-attachment-id</code>- The id of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-id</code> - The resource id of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-type</code> - The attachment resource type. Valid values
   *                     are <code>vpc</code> | <code>vpn</code> | <code>direct-connect-gateway</code> |
   *                         <code>peering</code> | <code>connect</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.exact-match</code> - The exact match of the specified filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.longest-prefix-match</code> - The longest prefix that matches the route.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.subnet-of-match</code> - The routes with a subnet that match the specified CIDR filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.supernet-of-match</code> - The routes with a CIDR that encompass the CIDR filter. For example, if you have 10.0.1.0/29 and 10.0.1.0/31 routes in your route table and you specify supernet-of-match as 10.0.1.0/30, then the result returns 10.0.1.0/29.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the route (<code>active</code> | <code>blackhole</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The type of route (<code>propagated</code> |
   *                   <code>static</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters: Filter[] | undefined;

  /**
   * <p>The maximum number of routes to return. If a value is not provided, the default is
   *          1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
export interface SearchTransitGatewayRoutesResult {
  /**
   * <p>Information about the routes.</p>
   * @public
   */
  Routes?: TransitGatewayRoute[] | undefined;

  /**
   * <p>Indicates whether there are additional routes available.</p>
   * @public
   */
  AdditionalRoutesAvailable?: boolean | undefined;
}

/**
 * @public
 */
export interface SendDiagnosticInterruptRequest {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

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
export interface StartDeclarativePoliciesReportRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The name of the S3 bucket where the report will be saved. The bucket must be in the
   *             same Region where the report generation request is made.</p>
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * <p>The prefix for your S3 object.</p>
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * <p>The root ID, organizational unit ID, or account ID.</p>
   *          <p>Format:</p>
   *          <ul>
   *             <li>
   *                <p>For root: <code>r-ab12</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For OU: <code>ou-ab12-cdef1234</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For account: <code>123456789012</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetId: string | undefined;

  /**
   * <p>The tags to apply.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface StartDeclarativePoliciesReportResult {
  /**
   * <p>The ID of the report.</p>
   * @public
   */
  ReportId?: string | undefined;
}

/**
 * @public
 */
export interface StartInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes an instance state change.</p>
 * @public
 */
export interface InstanceStateChange {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The current state of the instance.</p>
   * @public
   */
  CurrentState?: InstanceState | undefined;

  /**
   * <p>The previous state of the instance.</p>
   * @public
   */
  PreviousState?: InstanceState | undefined;
}

/**
 * @public
 */
export interface StartInstancesResult {
  /**
   * <p>Information about the started instances.</p>
   * @public
   */
  StartingInstances?: InstanceStateChange[] | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAccessScopeAnalysisRequest {
  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The tags to apply.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAccessScopeAnalysisResult {
  /**
   * <p>The Network Access Scope analysis.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysis?: NetworkInsightsAccessScopeAnalysis | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAnalysisRequest {
  /**
   * <p>The ID of the path.</p>
   * @public
   */
  NetworkInsightsPathId: string | undefined;

  /**
   * <p>The member accounts that contain resources that the path can traverse.</p>
   * @public
   */
  AdditionalAccounts?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources that the path must traverse.</p>
   * @public
   */
  FilterInArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources that the path will ignore.</p>
   * @public
   */
  FilterOutArns?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The tags to apply.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAnalysisResult {
  /**
   * <p>Information about the network insights analysis.</p>
   * @public
   */
  NetworkInsightsAnalysis?: NetworkInsightsAnalysis | undefined;
}

/**
 * @public
 */
export interface StartVpcEndpointServicePrivateDnsVerificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the endpoint service.</p>
   * @public
   */
  ServiceId: string | undefined;
}

/**
 * @public
 */
export interface StartVpcEndpointServicePrivateDnsVerificationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface StopInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Hibernates the instance if the instance was enabled for hibernation at launch. If the
   *             instance cannot hibernate successfully, a normal shutdown occurs. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p> Default: <code>false</code>
   *          </p>
   * @public
   */
  Hibernate?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Forces the instance to stop. The instance will first attempt a graceful shutdown,
   *             which includes flushing file system caches and metadata. If the graceful shutdown fails
   *             to complete within the timeout period, the instance shuts down forcibly without flushing
   *             the file system caches and metadata.</p>
   *          <p>After using this option, you must perform file system check and repair procedures.
   *             This option is not recommended for Windows instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesStopping.html">Troubleshoot
   *                     Amazon EC2 instance stop issues</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface StopInstancesResult {
  /**
   * <p>Information about the stopped instances.</p>
   * @public
   */
  StoppingInstances?: InstanceStateChange[] | undefined;
}

/**
 * @public
 */
export interface TerminateClientVpnConnectionsRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which the client is connected.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the client connection to be terminated.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The name of the user who initiated the connection. Use this option to terminate all active connections for
   * 			the specified user. This option can only be used if the user has established up to five connections.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about a terminated Client VPN endpoint client connection.</p>
 * @public
 */
export interface TerminateConnectionStatus {
  /**
   * <p>The ID of the client connection.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The state of the client connection.</p>
   * @public
   */
  PreviousStatus?: ClientVpnConnectionStatus | undefined;

  /**
   * <p>A message about the status of the client connection, if applicable.</p>
   * @public
   */
  CurrentStatus?: ClientVpnConnectionStatus | undefined;
}

/**
 * @public
 */
export interface TerminateClientVpnConnectionsResult {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * <p>The user who established the terminated client connections.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The current state of the client connections.</p>
   * @public
   */
  ConnectionStatuses?: TerminateConnectionStatus[] | undefined;
}

/**
 * @public
 */
export interface TerminateInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   *          <p>Constraints: Up to 1000 instance IDs. We recommend breaking up this request into
   *             smaller batches.</p>
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
export interface TerminateInstancesResult {
  /**
   * <p>Information about the terminated instances.</p>
   * @public
   */
  TerminatingInstances?: InstanceStateChange[] | undefined;
}

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
   * <p>The secondary private IP addresses to unassign from the network interface. You can
   *             specify this option multiple times to unassign more than one IP address.</p>
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

/**
 * @internal
 */
export const ReportInstanceStatusRequestFilterSensitiveLog = (obj: ReportInstanceStatusRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RequestSpotFleetRequestFilterSensitiveLog = (obj: RequestSpotFleetRequest): any => ({
  ...obj,
  ...(obj.SpotFleetRequestConfig && {
    SpotFleetRequestConfig: SpotFleetRequestConfigDataFilterSensitiveLog(obj.SpotFleetRequestConfig),
  }),
});

/**
 * @internal
 */
export const RequestSpotLaunchSpecificationFilterSensitiveLog = (obj: RequestSpotLaunchSpecification): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RequestSpotInstancesRequestFilterSensitiveLog = (obj: RequestSpotInstancesRequest): any => ({
  ...obj,
  ...(obj.LaunchSpecification && {
    LaunchSpecification: RequestSpotLaunchSpecificationFilterSensitiveLog(obj.LaunchSpecification),
  }),
});

/**
 * @internal
 */
export const RequestSpotInstancesResultFilterSensitiveLog = (obj: RequestSpotInstancesResult): any => ({
  ...obj,
  ...(obj.SpotInstanceRequests && {
    SpotInstanceRequests: obj.SpotInstanceRequests.map((item) => SpotInstanceRequestFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RunInstancesRequestFilterSensitiveLog = (obj: RunInstancesRequest): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ScheduledInstancesLaunchSpecificationFilterSensitiveLog = (
  obj: ScheduledInstancesLaunchSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunScheduledInstancesRequestFilterSensitiveLog = (obj: RunScheduledInstancesRequest): any => ({
  ...obj,
  ...(obj.LaunchSpecification && { LaunchSpecification: SENSITIVE_STRING }),
});
