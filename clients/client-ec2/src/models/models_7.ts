// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  _InstanceType,
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
  AmdSevSnpSpecification,
  BlockDeviceMapping,
  CreditSpecificationRequest,
  ElasticGpuSpecification,
  HostnameType,
  IcmpTypeCode,
  InstanceInterruptionBehavior,
  InstanceIpv6Address,
  LocalGatewayRoute,
  ManagedPrefixList,
  MarketType,
  Placement,
  RuleAction,
  ShutdownBehavior,
  SpotInstanceType,
} from "./models_1";
import { SnapshotState, SSEType, TransitGatewayRoute } from "./models_2";
import { ClientVpnConnectionStatus, Filter } from "./models_3";
import {
  HttpTokensState,
  InstanceAttributeName,
  InstanceAutoRecoveryState,
  InstanceMetadataEndpointState,
  InstanceMetadataProtocolState,
  InstanceMetadataTagsState,
  InstanceNetworkInterfaceSpecification,
  InstanceState,
  NetworkInsightsAccessScopeAnalysis,
  NetworkInsightsAnalysis,
  RunInstancesMonitoringEnabled,
  SnapshotAttributeName,
  SpotFleetRequestConfigData,
  SpotFleetRequestConfigDataFilterSensitiveLog,
  SpotInstanceRequest,
  SpotInstanceRequestFilterSensitiveLog,
  SpotPlacement,
} from "./models_4";
import {
  CapacityReservationSpecification,
  InstanceMonitoring,
  Status,
  TransitGatewayMulticastRegisteredGroupSources,
} from "./models_6";

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * @public
   * <p>Information about the  transit gateway multicast group sources.</p>
   */
  RegisteredMulticastGroupSources?: TransitGatewayMulticastRegisteredGroupSources;
}

/**
 * @public
 */
export interface RejectTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * @public
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface RejectTransitGatewayMulticastDomainAssociationsResult {
  /**
   * @public
   * <p>Information about the multicast domain associations.</p>
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
}

/**
 * @public
 */
export interface RejectTransitGatewayPeeringAttachmentRequest {
  /**
   * @public
   * <p>The ID of the transit gateway peering attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface RejectTransitGatewayPeeringAttachmentResult {
  /**
   * @public
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

/**
 * @public
 */
export interface RejectTransitGatewayVpcAttachmentRequest {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface RejectTransitGatewayVpcAttachmentResult {
  /**
   * @public
   * <p>Information about the attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

/**
 * @public
 */
export interface RejectVpcEndpointConnectionsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * @public
   * <p>The IDs of the VPC endpoints.</p>
   */
  VpcEndpointIds: string[] | undefined;
}

/**
 * @public
 */
export interface RejectVpcEndpointConnectionsResult {
  /**
   * @public
   * <p>Information about the endpoints that were not rejected, if applicable.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

/**
 * @public
 */
export interface RejectVpcPeeringConnectionRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * @public
 */
export interface RejectVpcPeeringConnectionResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface ReleaseAddressRequest {
  /**
   * @public
   * <p>The allocation ID. This parameter is required.</p>
   */
  AllocationId?: string;

  /**
   * @public
   * <p>Deprecated.</p>
   */
  PublicIp?: string;

  /**
   * @public
   * <p>The set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises
   *       IP addresses.</p>
   *          <p>If you provide an incorrect network border group, you receive an <code>InvalidAddress.NotFound</code> error.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ReleaseHostsRequest {
  /**
   * @public
   * <p>The IDs of the Dedicated Hosts to release.</p>
   */
  HostIds: string[] | undefined;
}

/**
 * @public
 */
export interface ReleaseHostsResult {
  /**
   * @public
   * <p>The IDs of the Dedicated Hosts that were successfully released.</p>
   */
  Successful?: string[];

  /**
   * @public
   * <p>The IDs of the Dedicated Hosts that could not be released, including an error
   *             message.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

/**
 * @public
 */
export interface ReleaseIpamPoolAllocationRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the IPAM pool which contains the allocation you want to release.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * @public
   * <p>The CIDR of the allocation you want to release.</p>
   */
  Cidr: string | undefined;

  /**
   * @public
   * <p>The ID of the allocation.</p>
   */
  IpamPoolAllocationId: string | undefined;
}

/**
 * @public
 */
export interface ReleaseIpamPoolAllocationResult {
  /**
   * @public
   * <p>Indicates if the release was successful.</p>
   */
  Success?: boolean;
}

/**
 * @public
 */
export interface ReplaceIamInstanceProfileAssociationRequest {
  /**
   * @public
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile: IamInstanceProfileSpecification | undefined;

  /**
   * @public
   * <p>The ID of the existing IAM instance profile association.</p>
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface ReplaceIamInstanceProfileAssociationResult {
  /**
   * @public
   * <p>Information about the IAM instance profile association.</p>
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}

/**
 * @public
 */
export interface ReplaceNetworkAclAssociationRequest {
  /**
   * @public
   * <p>The ID of the current association between the original network ACL and the subnet.</p>
   */
  AssociationId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the new network ACL to associate with the subnet.</p>
   */
  NetworkAclId: string | undefined;
}

/**
 * @public
 */
export interface ReplaceNetworkAclAssociationResult {
  /**
   * @public
   * <p>The ID of the new association.</p>
   */
  NewAssociationId?: string;
}

/**
 * @public
 */
export interface ReplaceNetworkAclEntryRequest {
  /**
   * @public
   * <p>The IPv4 network range to allow or deny, in CIDR notation (for example
   *                 <code>172.16.0.0/24</code>).</p>
   */
  CidrBlock?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Indicates whether to replace the egress rule.</p>
   *          <p>Default: If no value is specified, we replace the ingress rule.</p>
   */
  Egress: boolean | undefined;

  /**
   * @public
   * <p>ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol
   * 		        1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * @public
   * <p>The IPv6 network range to allow or deny, in CIDR notation (for example
   *                 <code>2001:bd8:1234:1a00::/64</code>).</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * @public
   * <p>The ID of the ACL.</p>
   */
  NetworkAclId: string | undefined;

  /**
   * @public
   * <p>TCP or UDP protocols: The range of ports the rule applies to.
   * 		        Required if specifying protocol 6 (TCP) or 17 (UDP).</p>
   */
  PortRange?: PortRange;

  /**
   * @public
   * <p>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a
   *            protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is
   *            allowed, regardless of any ports or ICMP types or codes that you specify. If you specify
   *            protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and
   *            codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6)
   *            and specify an IPv6 CIDR block, you must specify an ICMP type and code.</p>
   */
  Protocol: string | undefined;

  /**
   * @public
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction: RuleAction | undefined;

  /**
   * @public
   * <p>The rule number of the entry to replace.</p>
   */
  RuleNumber: number | undefined;
}

/**
 * @public
 */
export interface ReplaceRouteRequest {
  /**
   * @public
   * <p>The IPv4 CIDR address block used for the destination match. The value that you
   * 			provide must match the CIDR of an existing route in the table.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>The IPv6 CIDR address block used for the destination match. The value that you
   * 			provide must match the CIDR of an existing route in the table.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * @public
   * <p>The ID of the prefix list for the route.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   */
  VpcEndpointId?: string;

  /**
   * @public
   * <p>[IPv6 traffic only] The ID of an egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * @public
   * <p>The ID of an internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;

  /**
   * @public
   * <p>The ID of a NAT instance in your VPC.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>Specifies whether to reset the local route to its default target (<code>local</code>).</p>
   */
  LocalTarget?: boolean;

  /**
   * @public
   * <p>[IPv4 traffic only] The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * @public
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * @public
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * @public
   * <p>[IPv4 traffic only] The ID of a carrier gateway.</p>
   */
  CarrierGatewayId?: string;

  /**
   * @public
   * <p>The ID of a network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;

  /**
   * @public
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the core network.</p>
   */
  CoreNetworkArn?: string;
}

/**
 * @public
 */
export interface ReplaceRouteTableAssociationRequest {
  /**
   * @public
   * <p>The association ID.</p>
   */
  AssociationId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the new route table to associate with the subnet.</p>
   */
  RouteTableId: string | undefined;
}

/**
 * @public
 */
export interface ReplaceRouteTableAssociationResult {
  /**
   * @public
   * <p>The ID of the new association.</p>
   */
  NewAssociationId?: string;

  /**
   * @public
   * <p>The state of the association.</p>
   */
  AssociationState?: RouteTableAssociationState;
}

/**
 * @public
 */
export interface ReplaceTransitGatewayRouteRequest {
  /**
   * @public
   * <p>The CIDR range used for the destination match. Routing decisions are based on the most specific match.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * @public
   * <p>The ID of the route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>Indicates whether traffic matching this route is to be dropped.</p>
   */
  Blackhole?: boolean;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ReplaceTransitGatewayRouteResult {
  /**
   * @public
   * <p>Information about the modified route.</p>
   */
  Route?: TransitGatewayRoute;
}

/**
 * @public
 */
export interface ReplaceVpnTunnelRequest {
  /**
   * @public
   * <p>The ID of the Site-to-Site VPN connection. </p>
   */
  VpnConnectionId: string | undefined;

  /**
   * @public
   * <p>The external IP address of the VPN tunnel.</p>
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * @public
   * <p>Trigger pending tunnel endpoint maintenance.</p>
   */
  ApplyPendingMaintenance?: boolean;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ReplaceVpnTunnelResult {
  /**
   * @public
   * <p>Confirmation of replace tunnel operation.</p>
   */
  Return?: boolean;
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
   * @public
   * <p>Descriptive text about the health state of your instance.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The time at which the reported instance health state ended.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The instances.</p>
   */
  Instances: string[] | undefined;

  /**
   * @public
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
   */
  ReasonCodes: ReportInstanceReasonCodes[] | undefined;

  /**
   * @public
   * <p>The time at which the reported instance health state began.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The status of all instances listed.</p>
   */
  Status: ReportStatusType | undefined;
}

/**
 * @public
 * <p>Contains the parameters for RequestSpotFleet.</p>
 */
export interface RequestSpotFleetRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The configuration for the Spot Fleet request.</p>
   */
  SpotFleetRequestConfig: SpotFleetRequestConfigData | undefined;
}

/**
 * @public
 * <p>Contains the output of RequestSpotFleet.</p>
 */
export interface RequestSpotFleetResponse {
  /**
   * @public
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

/**
 * @public
 * <p>Describes the launch specification for an instance.</p>
 */
export interface RequestSpotLaunchSpecification {
  /**
   * @public
   * <p>The IDs of the security groups.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>Not supported.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>Deprecated.</p>
   */
  AddressingType?: string;

  /**
   * @public
   * <p>The block device mapping entries. You can't specify both a snapshot ID and an encryption value.
   *            This is because only blank volumes can be encrypted on creation. If a snapshot is the basis for a volume,
   *            it is not blank and its encryption status is used for the volume encryption status.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @public
   * <p>Indicates whether the instance is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * @public
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * @public
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The instance type. Only one instance type can be specified.</p>
   */
  InstanceType?: _InstanceType;

  /**
   * @public
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * @public
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * @public
   * <p>Indicates whether basic or detailed monitoring is enabled for the instance.</p>
   *          <p>Default: Disabled</p>
   */
  Monitoring?: RunInstancesMonitoringEnabled;

  /**
   * @public
   * <p>The network interfaces. If you specify a network interface, you must specify
   *            subnet IDs and security group IDs using the network interface.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * @public
   * <p>The placement information for the instance.</p>
   */
  Placement?: SpotPlacement;

  /**
   * @public
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * @public
   * <p>The ID of the subnet in which to launch the instance.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The base64-encoded user data that instances use when starting up. User data is limited to 16 KB.</p>
   */
  UserData?: string;
}

/**
 * @public
 * <p>Contains the parameters for RequestSpotInstances.</p>
 */
export interface RequestSpotInstancesRequest {
  /**
   * @public
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
   */
  AvailabilityZoneGroup?: string;

  /**
   * @public
   * <p>Deprecated.</p>
   */
  BlockDurationMinutes?: number;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The maximum number of Spot Instances to launch.</p>
   *          <p>Default: 1</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and
   *             terminate together.</p>
   *          <p>Default: Instances are launched and terminated individually</p>
   */
  LaunchGroup?: string;

  /**
   * @public
   * <p>The launch specification.</p>
   */
  LaunchSpecification?: RequestSpotLaunchSpecification;

  /**
   * @public
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
   *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  SpotPrice?: string;

  /**
   * @public
   * <p>The Spot Instance request type.</p>
   *          <p>Default: <code>one-time</code>
   *          </p>
   */
  Type?: SpotInstanceType;

  /**
   * @public
   * <p>The start date of the request. If this is a one-time request, the request becomes
   *             active at this date and time and remains active until all instances launch, the request
   *             expires, or the request is canceled. If the request is persistent, the request becomes
   *             active at this date and time and remains active until it expires or is canceled.</p>
   *          <p>The specified start date and time cannot be equal to the current date and time. You
   *             must specify a start date and time that occurs after the current date and time.</p>
   */
  ValidFrom?: Date;

  /**
   * @public
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
   */
  ValidUntil?: Date;

  /**
   * @public
   * <p>The key-value pair for tagging the Spot Instance request on creation. The value for
   *             <code>ResourceType</code> must be <code>spot-instances-request</code>, otherwise the
   *             Spot Instance request fails. To tag the Spot Instance request after it has been created,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>. </p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior;
}

/**
 * @public
 * <p>Contains the output of RequestSpotInstances.</p>
 */
export interface RequestSpotInstancesResult {
  /**
   * @public
   * <p>The Spot Instance requests.</p>
   */
  SpotInstanceRequests?: SpotInstanceRequest[];
}

/**
 * @public
 */
export interface ResetAddressAttributeRequest {
  /**
   * @public
   * <p>[EC2-VPC] The allocation ID.</p>
   */
  AllocationId: string | undefined;

  /**
   * @public
   * <p>The attribute of the IP address.</p>
   */
  Attribute: AddressAttributeName | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ResetAddressAttributeResult {
  /**
   * @public
   * <p>Information about the IP address.</p>
   */
  Address?: AddressAttribute;
}

/**
 * @public
 */
export interface ResetEbsDefaultKmsKeyIdRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ResetEbsDefaultKmsKeyIdResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the default KMS key for EBS encryption by default.</p>
   */
  KmsKeyId?: string;
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
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string | undefined;

  /**
   * @public
   * <p>The attribute.</p>
   */
  Attribute?: ResetFpgaImageAttributeName;
}

/**
 * @public
 */
export interface ResetFpgaImageAttributeResult {
  /**
   * @public
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
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
 * @public
 * <p>Contains the parameters for ResetImageAttribute.</p>
 */
export interface ResetImageAttributeRequest {
  /**
   * @public
   * <p>The attribute to reset (currently you can only reset the launch permission attribute).</p>
   */
  Attribute: ResetImageAttributeName | undefined;

  /**
   * @public
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ResetInstanceAttributeRequest {
  /**
   * @public
   * <p>The attribute to reset.</p>
   *          <important>
   *             <p>You can only reset the following attributes: <code>kernel</code> |
   *                     <code>ramdisk</code> | <code>sourceDestCheck</code>.</p>
   *          </important>
   */
  Attribute: InstanceAttributeName | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * <p>Contains the parameters for ResetNetworkInterfaceAttribute.</p>
 */
export interface ResetNetworkInterfaceAttributeRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * @public
   * <p>The source/destination checking attribute. Resets the value to <code>true</code>.</p>
   */
  SourceDestCheck?: string;
}

/**
 * @public
 */
export interface ResetSnapshotAttributeRequest {
  /**
   * @public
   * <p>The attribute to reset. Currently, only the attribute for permission to create volumes can
   *       be reset.</p>
   */
  Attribute: SnapshotAttributeName | undefined;

  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface RestoreAddressToClassicRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The Elastic IP address.</p>
   */
  PublicIp: string | undefined;
}

/**
 * @public
 */
export interface RestoreAddressToClassicResult {
  /**
   * @public
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;

  /**
   * @public
   * <p>The move status for the IP address.</p>
   */
  Status?: Status;
}

/**
 * @public
 */
export interface RestoreImageFromRecycleBinRequest {
  /**
   * @public
   * <p>The ID of the AMI to restore.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface RestoreImageFromRecycleBinResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface RestoreManagedPrefixListVersionRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * @public
   * <p>The version to restore.</p>
   */
  PreviousVersion: number | undefined;

  /**
   * @public
   * <p>The current version number for the prefix list.</p>
   */
  CurrentVersion: number | undefined;
}

/**
 * @public
 */
export interface RestoreManagedPrefixListVersionResult {
  /**
   * @public
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

/**
 * @public
 */
export interface RestoreSnapshotFromRecycleBinRequest {
  /**
   * @public
   * <p>The ID of the snapshot to restore.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface RestoreSnapshotFromRecycleBinResult {
  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The ARN of the Outpost on which the snapshot is stored. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html">Amazon EBS local snapshots on Outposts</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>The description for the snapshot.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the EBS snapshot.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The progress of the snapshot, as a percentage.</p>
   */
  Progress?: string;

  /**
   * @public
   * <p>The time stamp when the snapshot was initiated.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The state of the snapshot.</p>
   */
  State?: SnapshotState;

  /**
   * @public
   * <p>The ID of the volume that was used to create the snapshot.</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>The size of the volume, in GiB.</p>
   */
  VolumeSize?: number;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  SseType?: SSEType;
}

/**
 * @public
 */
export interface RestoreSnapshotTierRequest {
  /**
   * @public
   * <p>The ID of the snapshot to restore.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
   * <p>Specifies the number of days for which to temporarily restore an archived snapshot.
   *       Required for temporary restores only. The snapshot will be automatically re-archived
   *       after this period.</p>
   *          <p>To temporarily restore an archived snapshot, specify the number of days and omit
   *       the <b>PermanentRestore</b> parameter or set it to
   *       <code>false</code>.</p>
   */
  TemporaryRestoreDays?: number;

  /**
   * @public
   * <p>Indicates whether to permanently restore an archived snapshot. To permanently restore
   *       an archived snapshot, specify <code>true</code> and omit the
   *       <b>RestoreSnapshotTierRequest$TemporaryRestoreDays</b> parameter.</p>
   */
  PermanentRestore?: boolean;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface RestoreSnapshotTierResult {
  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The date and time when the snapshot restore process started.</p>
   */
  RestoreStartTime?: Date;

  /**
   * @public
   * <p>For temporary restores only. The number of days for which the archived snapshot
   *       is temporarily restored.</p>
   */
  RestoreDuration?: number;

  /**
   * @public
   * <p>Indicates whether the snapshot is permanently restored. <code>true</code> indicates a permanent
   *       restore. <code>false</code> indicates a temporary restore.</p>
   */
  IsPermanentRestore?: boolean;
}

/**
 * @public
 */
export interface RevokeClientVpnIngressRequest {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint with which the authorization rule is associated.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * @public
   * <p>The IPv4 address range, in CIDR notation, of the network for which access is being removed.</p>
   */
  TargetNetworkCidr: string | undefined;

  /**
   * @public
   * <p>The ID of the Active Directory group for which to revoke access. </p>
   */
  AccessGroupId?: string;

  /**
   * @public
   * <p>Indicates whether access should be revoked for all clients.</p>
   */
  RevokeAllGroups?: boolean;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface RevokeClientVpnIngressResult {
  /**
   * @public
   * <p>The current state of the authorization rule.</p>
   */
  Status?: ClientVpnAuthorizationRuleStatus;
}

/**
 * @public
 */
export interface RevokeSecurityGroupEgressRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the security group.</p>
   */
  GroupId: string | undefined;

  /**
   * @public
   * <p>The sets of IP permissions. You can't specify a destination security group and a CIDR IP address range in the same set of permissions.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * @public
   * <p>The IDs of the security group rules.</p>
   */
  SecurityGroupRuleIds?: string[];

  /**
   * @public
   * <p>Not supported. Use a set of IP permissions to specify the CIDR.</p>
   */
  CidrIp?: string;

  /**
   * @public
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  FromPort?: number;

  /**
   * @public
   * <p>Not supported. Use a set of IP permissions to specify the protocol name or
   *             number.</p>
   */
  IpProtocol?: string;

  /**
   * @public
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  ToPort?: number;

  /**
   * @public
   * <p>Not supported. Use a set of IP permissions to specify a
   *            destination security group.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * @public
   * <p>Not supported. Use a set of IP permissions to specify a destination security
   *             group.</p>
   */
  SourceSecurityGroupOwnerId?: string;
}

/**
 * @public
 */
export interface RevokeSecurityGroupEgressResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;

  /**
   * @public
   * <p>The outbound rules that were unknown to the service. In some cases,
   *                 <code>unknownIpPermissionSet</code> might be in a different format from the request
   *             parameter. </p>
   */
  UnknownIpPermissions?: IpPermission[];
}

/**
 * @public
 */
export interface RevokeSecurityGroupIngressRequest {
  /**
   * @public
   * <p>The CIDR IP address range. You can't specify this parameter when specifying a source security group.</p>
   */
  CidrIp?: string;

  /**
   * @public
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *            If the protocol is ICMP, this is the type number. A value of -1 indicates all ICMP types.</p>
   */
  FromPort?: number;

  /**
   * @public
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>[Default VPC] The name of the security group. You must specify either the
   *             security group ID or the security group name in the request. For security groups in a
   *             nondefault VPC, you must specify the security group ID.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The sets of IP permissions. You can't specify a source security group and a CIDR IP address range in the same set of permissions.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * @public
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>) or number
   *         (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>).
   *         Use <code>-1</code> to specify all.</p>
   */
  IpProtocol?: string;

  /**
   * @public
   * <p>[Default VPC] The name of the source security group. You can't specify this parameter
   *          in combination with the following parameters: the CIDR IP address range, the start of the port range,
   *          the IP protocol, and the end of the port range. The source security group must be in the same VPC.
   *          To revoke a specific rule for an IP protocol and port range, use a set of IP permissions instead.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * @public
   * <p>Not supported.</p>
   */
  SourceSecurityGroupOwnerId?: string;

  /**
   * @public
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *          If the protocol is ICMP, this is the code. A value of -1 indicates all ICMP codes.</p>
   */
  ToPort?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the security group rules.</p>
   */
  SecurityGroupRuleIds?: string[];
}

/**
 * @public
 */
export interface RevokeSecurityGroupIngressResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;

  /**
   * @public
   * <p>The inbound rules that were unknown to the service. In some cases,
   *                 <code>unknownIpPermissionSet</code> might be in a different format from the request
   *             parameter. </p>
   */
  UnknownIpPermissions?: IpPermission[];
}

/**
 * @public
 * <p>The CPU options for the instance. Both the core count and threads per core must be
 *             specified in the request.</p>
 */
export interface CpuOptionsRequest {
  /**
   * @public
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * @public
   * <p>The number of threads per CPU core. To disable multithreading for the instance,
   *             specify a value of <code>1</code>. Otherwise, specify the default value of
   *                 <code>2</code>.</p>
   */
  ThreadsPerCore?: number;

  /**
   * @public
   * <p>Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported
   *             with M6a, R6a, and C6a instance types only. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html">AMD SEV-SNP</a>.</p>
   */
  AmdSevSnp?: AmdSevSnpSpecification;
}

/**
 * @public
 * <p>
 *            Describes an elastic inference accelerator.
 *         </p>
 */
export interface ElasticInferenceAccelerator {
  /**
   * @public
   * <p>
   *         	The type of elastic inference accelerator. The possible values are <code>eia1.medium</code>, <code>eia1.large</code>, <code>eia1.xlarge</code>, <code>eia2.medium</code>, <code>eia2.large</code>, and <code>eia2.xlarge</code>.
   *         </p>
   */
  Type: string | undefined;

  /**
   * @public
   * <p>
   *             The number of elastic inference accelerators to attach to the instance.
   *         </p>
   *          <p>Default: 1</p>
   */
  Count?: number;
}

/**
 * @public
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For
 *             more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html"> What is Amazon Web Services Nitro
 *                 Enclaves?</a> in the <i>Amazon Web Services Nitro Enclaves User
 *                 Guide</i>.</p>
 */
export interface EnclaveOptionsRequest {
  /**
   * @public
   * <p>To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to
   *                 <code>true</code>.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Indicates whether your instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
 *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 */
export interface HibernationOptionsRequest {
  /**
   * @public
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
   */
  Configured?: boolean;
}

/**
 * @public
 * <p>The options for Spot Instances.</p>
 */
export interface SpotMarketOptions {
  /**
   * @public
   * <p>The maximum hourly price that you're willing to pay for a Spot Instance. We do not
   *             recommend using this parameter because it can lead to increased interruptions. If you do
   *             not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more
   *                 frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  MaxPrice?: string;

  /**
   * @public
   * <p>The Spot Instance request type. For <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances">RunInstances</a>, persistent
   *             Spot Instance requests are only supported when the instance interruption behavior is
   *             either <code>hibernate</code> or <code>stop</code>.</p>
   */
  SpotInstanceType?: SpotInstanceType;

  /**
   * @public
   * <p>Deprecated.</p>
   */
  BlockDurationMinutes?: number;

  /**
   * @public
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
   */
  ValidUntil?: Date;

  /**
   * @public
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
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior;
}

/**
 * @public
 * <p>Describes the market (purchasing) option for the instances.</p>
 */
export interface InstanceMarketOptionsRequest {
  /**
   * @public
   * <p>The market type.</p>
   */
  MarketType?: MarketType;

  /**
   * @public
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: SpotMarketOptions;
}

/**
 * @public
 * <p>The launch template to use. You must specify either the launch template ID or launch
 *             template name in the request, but not both.</p>
 */
export interface LaunchTemplateSpecification {
  /**
   * @public
   * <p>The ID of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateId</code> or the
   *                 <code>LaunchTemplateName</code>, but not both.</p>
   */
  LaunchTemplateId?: string;

  /**
   * @public
   * <p>The name of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateName</code> or the
   *                 <code>LaunchTemplateId</code>, but not both.</p>
   */
  LaunchTemplateName?: string;

  /**
   * @public
   * <p>The launch template version number, <code>$Latest</code>, or
   *             <code>$Default</code>.</p>
   *          <p>If the value is <code>$Latest</code>, Amazon EC2 uses the latest version of the launch
   *             template.</p>
   *          <p>If the value is <code>$Default</code>, Amazon EC2 uses the default version of the
   *             launch template.</p>
   *          <p>Default: The default version of the launch template.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>Describes a license configuration.</p>
 */
export interface LicenseConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

/**
 * @public
 * <p>The maintenance options for the instance.</p>
 */
export interface InstanceMaintenanceOptionsRequest {
  /**
   * @public
   * <p>Disables the automatic recovery behavior of your instance or sets it to default. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html#instance-configuration-recovery">Simplified automatic recovery</a>.</p>
   */
  AutoRecovery?: InstanceAutoRecoveryState;
}

/**
 * @public
 * <p>The metadata options for the instance.</p>
 */
export interface InstanceMetadataOptionsRequest {
  /**
   * @public
   * <p>Indicates whether IMDSv2 is required.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - IMDSv2 is optional. You can choose whether to send a
   *                     session token in your instance metadata retrieval requests. If you retrieve
   *                     IAM role credentials without a session token, you receive the IMDSv1 role
   *                     credentials. If you retrieve IAM role credentials using a valid session token,
   *                     you receive the IMDSv2 role credentials.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - IMDSv2 is required. You must send a session token
   *                     in your instance metadata retrieval requests. With this option, retrieving the
   *                     IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are
   *                     not available.</p>
   *             </li>
   *          </ul>
   *          <p>Default: If the value of <code>ImdsSupport</code> for the Amazon Machine Image (AMI)
   *             for your instance is <code>v2.0</code>, the default is <code>required</code>.</p>
   */
  HttpTokens?: HttpTokensState;

  /**
   * @public
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *          <p>Default: 1</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * @public
   * <p>Enables or disables the HTTP metadata endpoint on your instances.</p>
   *          <p>If you specify a value of <code>disabled</code>, you cannot access your instance
   *             metadata.</p>
   *          <p>Default: <code>enabled</code>
   *          </p>
   */
  HttpEndpoint?: InstanceMetadataEndpointState;

  /**
   * @public
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState;

  /**
   * @public
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   */
  InstanceMetadataTags?: InstanceMetadataTagsState;
}

/**
 * @public
 * <p>Describes the options for instance hostnames.</p>
 */
export interface PrivateDnsNameOptionsRequest {
  /**
   * @public
   * <p>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name
   *             must be based on the instance ID. For dual-stack subnets, you can specify whether DNS
   *             names use the instance IPv4 address or the instance ID.</p>
   */
  HostnameType?: HostnameType;

  /**
   * @public
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * @public
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA
   *             records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

/**
 * @public
 */
export interface RunInstancesRequest {
  /**
   * @public
   * <p>The block device mapping, which defines the EBS volumes and instance store volumes to
   *             attach to the instance at launch. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block device
   *                 mappings</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @public
   * <p>The ID of the AMI. An AMI ID is required to launch an instance and must be specified
   *             here or in a launch template.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceType?: _InstanceType;

  /**
   * @public
   * <p>The number of IPv6 addresses to associate with the primary network
   *             interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You
   *             cannot specify this option and the option to assign specific IPv6 addresses in the same
   *             request. You can specify this option if you've specified a minimum number of instances
   *             to launch.</p>
   *          <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * @public
   * <p>The IPv6 addresses from the range of the subnet to associate with the
   *             primary network interface. You cannot specify this option and the option to assign a
   *             number of IPv6 addresses in the same request. You cannot specify this option if you've
   *             specified a minimum number of instances to launch.</p>
   *          <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * @public
   * <p>The ID of the kernel.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">PV-GRUB</a> in the
   *                     <i>Amazon EC2 User Guide</i>.</p>
   *          </important>
   */
  KernelId?: string;

  /**
   * @public
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p>
   *          <important>
   *             <p>If you do not specify a key pair, you can't connect to the instance unless you
   *                 choose an AMI that is configured to allow users another way to log in.</p>
   *          </important>
   */
  KeyName?: string;

  /**
   * @public
   * <p>The maximum number of instances to launch. If you specify more instances than Amazon
   *             EC2 can launch in the target Availability Zone, Amazon EC2 launches the largest possible
   *             number of instances above <code>MinCount</code>.</p>
   *          <p>Constraints: Between 1 and the maximum number you're allowed for the specified
   *             instance type. For more information about the default limits, and how to request an
   *             increase, see <a href="http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2">How many instances can I
   *                 run in Amazon EC2</a> in the Amazon EC2 FAQ.</p>
   */
  MaxCount: number | undefined;

  /**
   * @public
   * <p>The minimum number of instances to launch. If you specify a minimum that is more
   *             instances than Amazon EC2 can launch in the target Availability Zone, Amazon EC2
   *             launches no instances.</p>
   *          <p>Constraints: Between 1 and the maximum number you're allowed for the specified
   *             instance type. For more information about the default limits, and how to request an
   *             increase, see <a href="http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2">How many instances can I
   *                 run in Amazon EC2</a> in the Amazon EC2 General FAQ.</p>
   */
  MinCount: number | undefined;

  /**
   * @public
   * <p>Specifies whether detailed monitoring is enabled for the instance.</p>
   */
  Monitoring?: RunInstancesMonitoringEnabled;

  /**
   * @public
   * <p>The placement for the instance.</p>
   */
  Placement?: Placement;

  /**
   * @public
   * <p>The ID of the RAM disk to select. Some kernels require additional drivers at launch.
   *             Check the kernel requirements for information about whether you need to specify a RAM
   *             disk. To find kernel requirements, go to the Amazon Web Services Resource Center and
   *             search for the kernel ID.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">PV-GRUB</a> in the
   *                     <i>Amazon EC2 User Guide</i>.</p>
   *          </important>
   */
  RamdiskId?: string;

  /**
   * @public
   * <p>The IDs of the security groups. You can create a security group using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>.</p>
   *          <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>[Default VPC] The names of the security groups.</p>
   *          <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface.</p>
   *          <p>Default: Amazon EC2 uses the default security group.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>The ID of the subnet to launch the instance into.</p>
   *          <p>If you specify a network interface, you must specify any subnets as part of the
   *             network interface.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The user data script to make available to the instance. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html">Run
   *                 commands on your Linux instance at launch</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-windows-user-data.html">Run commands on your
   *                 Windows instance at launch</a>. If you are using a command line tool,
   *             base64-encoding is performed for you, and you can load the text from a file. Otherwise,
   *             you must provide base64-encoded text. User data is limited to 16 KB.</p>
   */
  UserData?: string;

  /**
   * @public
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * @public
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. If you do not specify a client token, a randomly generated token is used for
   *             the request to ensure idempotency.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *          <p>Constraints: Maximum 64 ASCII characters</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>If you set this parameter to <code>true</code>, you can't terminate the instance using
   *             the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after
   *             launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html">ModifyInstanceAttribute</a>. Alternatively, if you set
   *                 <code>InstanceInitiatedShutdownBehavior</code> to <code>terminate</code>, you can
   *             terminate the instance by running the shutdown command from the instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  DisableApiTermination?: boolean;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal Amazon EBS I/O performance. This optimization isn't available with all
   *             instance types. Additional usage charges apply when using an EBS-optimized
   *             instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of an IAM instance
   *             profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * @public
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   *          <p>Default: <code>stop</code>
   *          </p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior;

  /**
   * @public
   * <p>The network interfaces to associate with the instance. If you specify a network
   *             interface, you must specify any security groups and subnets as part of the network
   *             interface.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * @public
   * <p>The primary IPv4 address. You must specify a value from the IPv4 address
   *             range of the subnet.</p>
   *          <p>Only one private IP address can be designated as primary. You can't specify this
   *             option if you've specified the option to designate a private IP address as the primary
   *             IP address in a network interface specification. You cannot specify this option if
   *             you're launching more than one instance in the request.</p>
   *          <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   */
  PrivateIpAddress?: string;

  /**
   * @public
   * <p>Deprecated.</p>
   *          <note>
   *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024. For
   *                 workloads that require graphics acceleration, we recommend that you use Amazon EC2 G4ad,
   *                 G4dn, or G5 instances.</p>
   *          </note>
   */
  ElasticGpuSpecification?: ElasticGpuSpecification[];

  /**
   * @public
   * <p>An elastic inference accelerator to associate with the instance. Elastic inference
   *             accelerators are a resource you can attach to your Amazon EC2 instances to accelerate
   *             your Deep Learning (DL) inference workloads.</p>
   *          <p>You cannot specify accelerators from different generations in the same request.</p>
   *          <note>
   *             <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon
   *             Elastic Inference (EI), and will help current customers migrate their workloads to
   *             options that offer better price and performance. After April 15, 2023, new customers
   *             will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker,
   *             Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during
   *             the past 30-day period are considered current customers and will be able to continue
   *             using the service.</p>
   *          </note>
   */
  ElasticInferenceAccelerators?: ElasticInferenceAccelerator[];

  /**
   * @public
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
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>The launch template to use to launch the instances. Any parameters that you specify in
   *                 <a>RunInstances</a> override the same parameters in the launch template.
   *             You can specify either the name or ID of a launch template, but not both.</p>
   */
  LaunchTemplate?: LaunchTemplateSpecification;

  /**
   * @public
   * <p>The market (purchasing) option for the instances.</p>
   *          <p>For <a>RunInstances</a>, persistent Spot Instance requests are
   *             only supported when <b>InstanceInterruptionBehavior</b> is set
   *             to either <code>hibernate</code> or <code>stop</code>.</p>
   */
  InstanceMarketOptions?: InstanceMarketOptionsRequest;

  /**
   * @public
   * <p>The credit option for CPU usage of the burstable performance instance. Valid values
   *             are <code>standard</code> and <code>unlimited</code>. To change this attribute after
   *             launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCreditSpecification.html">
   *                 ModifyInstanceCreditSpecification</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
   *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>standard</code> (T2 instances) or <code>unlimited</code> (T3/T3a/T4g
   *             instances)</p>
   *          <p>For T3 instances with <code>host</code> tenancy, only <code>standard</code> is
   *             supported.</p>
   */
  CreditSpecification?: CreditSpecificationRequest;

  /**
   * @public
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimize CPU options</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  CpuOptions?: CpuOptionsRequest;

  /**
   * @public
   * <p>Information about the Capacity Reservation targeting option. If you do not specify this parameter, the
   *             instance's Capacity Reservation preference defaults to <code>open</code>, which enables
   *             it to run in any open Capacity Reservation that has matching attributes (instance type,
   *             platform, Availability Zone).</p>
   */
  CapacityReservationSpecification?: CapacityReservationSpecification;

  /**
   * @public
   * <p>Indicates whether an instance is enabled for hibernation. This parameter is valid only
   *             if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
   *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   *          <p>You can't enable hibernation and Amazon Web Services Nitro Enclaves on the same
   *             instance.</p>
   */
  HibernationOptions?: HibernationOptionsRequest;

  /**
   * @public
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: LicenseConfigurationRequest[];

  /**
   * @public
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a>.</p>
   */
  MetadataOptions?: InstanceMetadataOptionsRequest;

  /**
   * @public
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For
   *             more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">What is Amazon Web Services Nitro
   *                 Enclaves?</a> in the <i>Amazon Web Services Nitro Enclaves User
   *                 Guide</i>.</p>
   *          <p>You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same
   *             instance.</p>
   */
  EnclaveOptions?: EnclaveOptionsRequest;

  /**
   * @public
   * <p>The options for the instance hostname.
   *             The default values are inherited from the subnet.
   *             Applies only if creating a network interface, not attaching an existing one.</p>
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptionsRequest;

  /**
   * @public
   * <p>The maintenance and recovery options for the instance.</p>
   */
  MaintenanceOptions?: InstanceMaintenanceOptionsRequest;

  /**
   * @public
   * <p>Indicates whether an instance is enabled for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection">Stop
   *                 protection</a>. </p>
   */
  DisableApiStop?: boolean;

  /**
   * @public
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
   */
  EnablePrimaryIpv6?: boolean;
}

/**
 * @public
 * <p>Describes an EBS volume for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesEbs {
  /**
   * @public
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * @public
   * <p>Indicates whether the volume is encrypted. You can attached encrypted volumes only to instances that
   *          support them.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>The number of I/O operations per second (IOPS) to provision for a <code>gp3</code>, <code>io1</code>, or <code>io2</code>
   *    	   volume.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The size of the volume, in GiB.</p>
   *          <p>Default: If you're creating the volume from a snapshot and don't specify a volume size, the default
   *          is the snapshot size.</p>
   */
  VolumeSize?: number;

  /**
   * @public
   * <p>The volume type.</p>
   *          <p>Default: <code>gp2</code>
   *          </p>
   */
  VolumeType?: string;
}

/**
 * @public
 * <p>Describes a block device mapping for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesBlockDeviceMapping {
  /**
   * @public
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>Parameters used to set up EBS volumes automatically when the instance is launched.</p>
   */
  Ebs?: ScheduledInstancesEbs;

  /**
   * @public
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   */
  NoDevice?: string;

  /**
   * @public
   * <p>The virtual device name (<code>ephemeral</code>N). Instance store volumes are numbered
   *          starting from 0. An instance type with two available instance store volumes can specify mappings
   *          for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of available instance store
   *          volumes depends on the instance type. After you connect to the instance, you must mount the
   *          volume.</p>
   *          <p>Constraints: For M3 instances, you must specify instance store volumes in the block device
   *          mapping for the instance. When you launch an M3 instance, we ignore any instance store volumes
   *          specified in the block device mapping for the AMI.</p>
   */
  VirtualName?: string;
}

/**
 * @public
 * <p>Describes an IAM instance profile for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesIamInstanceProfile {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN).</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Describes whether monitoring is enabled for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesMonitoring {
  /**
   * @public
   * <p>Indicates whether monitoring is enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Describes an IPv6 address.</p>
 */
export interface ScheduledInstancesIpv6Address {
  /**
   * @public
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

/**
 * @public
 * <p>Describes a private IPv4 address for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesPrivateIpAddressConfig {
  /**
   * @public
   * <p>Indicates whether this is a primary IPv4 address. Otherwise, this is a secondary IPv4 address.</p>
   */
  Primary?: boolean;

  /**
   * @public
   * <p>The IPv4 address.</p>
   */
  PrivateIpAddress?: string;
}

/**
 * @public
 * <p>Describes a network interface for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesNetworkInterface {
  /**
   * @public
   * <p>Indicates whether to assign a public IPv4 address to instances launched in a VPC. The
   *          public IPv4 address can only be assigned to a network interface for eth0, and can only be
   *          assigned to a new network interface, not an existing one. You cannot specify more than one
   *          network interface in the request. If launching into a default subnet, the default value is
   *          <code>true</code>.</p>
   *          <p>Starting on February 1, 2024, Amazon Web Services will charge for all public IPv4 addresses, including public IPv4 addresses
   * associated with running instances and Elastic IP addresses. For more information, see the <i>Public IPv4 Address</i> tab on the <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing page</a>.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * @public
   * <p>Indicates whether to delete the interface when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * @public
   * <p>The description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The index of the device for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * @public
   * <p>The IDs of the security groups.</p>
   */
  Groups?: string[];

  /**
   * @public
   * <p>The number of IPv6 addresses to assign to the network interface. The IPv6 addresses are automatically selected from the subnet range.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * @public
   * <p>The specific IPv6 addresses from the subnet range.</p>
   */
  Ipv6Addresses?: ScheduledInstancesIpv6Address[];

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * @public
   * <p>The private IPv4 addresses.</p>
   */
  PrivateIpAddressConfigs?: ScheduledInstancesPrivateIpAddressConfig[];

  /**
   * @public
   * <p>The number of secondary private IPv4 addresses.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

/**
 * @public
 * <p>Describes the placement for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesPlacement {
  /**
   * @public
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;
}

/**
 * @public
 * <p>Describes the launch specification for a Scheduled Instance.</p>
 *          <p>If you are launching the Scheduled Instance in EC2-VPC, you must specify the ID of the subnet.
 *           You can specify the subnet using either <code>SubnetId</code> or <code>NetworkInterface</code>.</p>
 */
export interface ScheduledInstancesLaunchSpecification {
  /**
   * @public
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?: ScheduledInstancesBlockDeviceMapping[];

  /**
   * @public
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * @public
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: ScheduledInstancesIamInstanceProfile;

  /**
   * @public
   * <p>The ID of the Amazon Machine Image (AMI).</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * @public
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * @public
   * <p>Enable or disable monitoring for the instances.</p>
   */
  Monitoring?: ScheduledInstancesMonitoring;

  /**
   * @public
   * <p>The network interfaces.</p>
   */
  NetworkInterfaces?: ScheduledInstancesNetworkInterface[];

  /**
   * @public
   * <p>The placement information.</p>
   */
  Placement?: ScheduledInstancesPlacement;

  /**
   * @public
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * @public
   * <p>The IDs of the security groups.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The ID of the subnet in which to launch the instances.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The base64-encoded MIME user data.</p>
   */
  UserData?: string;
}

/**
 * @public
 * <p>Contains the parameters for RunScheduledInstances.</p>
 */
export interface RunScheduledInstancesRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The number of instances.</p>
   *          <p>Default: 1</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>The launch specification. You must match the instance type, Availability Zone,
   *          network, and platform of the schedule that you purchased.</p>
   */
  LaunchSpecification: ScheduledInstancesLaunchSpecification | undefined;

  /**
   * @public
   * <p>The Scheduled Instance ID.</p>
   */
  ScheduledInstanceId: string | undefined;
}

/**
 * @public
 * <p>Contains the output of RunScheduledInstances.</p>
 */
export interface RunScheduledInstancesResult {
  /**
   * @public
   * <p>The IDs of the newly launched instances.</p>
   */
  InstanceIdSet?: string[];
}

/**
 * @public
 */
export interface SearchLocalGatewayRoutesRequest {
  /**
   * @public
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface SearchLocalGatewayRoutesResult {
  /**
   * @public
   * <p>Information about the routes.</p>
   */
  Routes?: LocalGatewayRoute[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SearchTransitGatewayMulticastGroupsRequest {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
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
 * @public
 * <p>Describes the  transit gateway multicast group resources.</p>
 */
export interface TransitGatewayMulticastGroup {
  /**
   * @public
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * @public
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The type of resource, for example a VPC attachment.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType;

  /**
   * @public
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain group resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * @public
   * <p>The ID of the transit gateway attachment.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   */
  GroupMember?: boolean;

  /**
   * @public
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   */
  GroupSource?: boolean;

  /**
   * @public
   * <p>The member type (for example, <code>static</code>).</p>
   */
  MemberType?: MembershipType;

  /**
   * @public
   * <p>The source type.</p>
   */
  SourceType?: MembershipType;
}

/**
 * @public
 */
export interface SearchTransitGatewayMulticastGroupsResult {
  /**
   * @public
   * <p>Information about the  transit gateway multicast group.</p>
   */
  MulticastGroups?: TransitGatewayMulticastGroup[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SearchTransitGatewayRoutesRequest {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
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
   */
  Filters: Filter[] | undefined;

  /**
   * @public
   * <p>The maximum number of routes to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface SearchTransitGatewayRoutesResult {
  /**
   * @public
   * <p>Information about the routes.</p>
   */
  Routes?: TransitGatewayRoute[];

  /**
   * @public
   * <p>Indicates whether there are additional routes available.</p>
   */
  AdditionalRoutesAvailable?: boolean;
}

/**
 * @public
 */
export interface SendDiagnosticInterruptRequest {
  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface StartInstancesRequest {
  /**
   * @public
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * @public
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes an instance state change.</p>
 */
export interface InstanceStateChange {
  /**
   * @public
   * <p>The current state of the instance.</p>
   */
  CurrentState?: InstanceState;

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The previous state of the instance.</p>
   */
  PreviousState?: InstanceState;
}

/**
 * @public
 */
export interface StartInstancesResult {
  /**
   * @public
   * <p>Information about the started instances.</p>
   */
  StartingInstances?: InstanceStateChange[];
}

/**
 * @public
 */
export interface StartNetworkInsightsAccessScopeAnalysisRequest {
  /**
   * @public
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The tags to apply.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface StartNetworkInsightsAccessScopeAnalysisResult {
  /**
   * @public
   * <p>The Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysis?: NetworkInsightsAccessScopeAnalysis;
}

/**
 * @public
 */
export interface StartNetworkInsightsAnalysisRequest {
  /**
   * @public
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId: string | undefined;

  /**
   * @public
   * <p>The member accounts that contain resources that the path can traverse.</p>
   */
  AdditionalAccounts?: string[];

  /**
   * @public
   * <p>The Amazon Resource Names (ARN) of the resources that the path must traverse.</p>
   */
  FilterInArns?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The tags to apply.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface StartNetworkInsightsAnalysisResult {
  /**
   * @public
   * <p>Information about the network insights analysis.</p>
   */
  NetworkInsightsAnalysis?: NetworkInsightsAnalysis;
}

/**
 * @public
 */
export interface StartVpcEndpointServicePrivateDnsVerificationRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId: string | undefined;
}

/**
 * @public
 */
export interface StartVpcEndpointServicePrivateDnsVerificationResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

/**
 * @public
 */
export interface StopInstancesRequest {
  /**
   * @public
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * @public
   * <p>Hibernates the instance if the instance was enabled for hibernation at launch. If the
   *             instance cannot hibernate successfully, a normal shutdown occurs. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p> Default: <code>false</code>
   *          </p>
   */
  Hibernate?: boolean;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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
   * @public
   * <p>Information about the stopped instances.</p>
   */
  StoppingInstances?: InstanceStateChange[];
}

/**
 * @public
 */
export interface TerminateClientVpnConnectionsRequest {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint to which the client is connected.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * @public
   * <p>The ID of the client connection to be terminated.</p>
   */
  ConnectionId?: string;

  /**
   * @public
   * <p>The name of the user who initiated the connection. Use this option to terminate all active connections for
   * 			the specified user. This option can only be used if the user has established up to five connections.</p>
   */
  Username?: string;

  /**
   * @public
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
   * @public
   * <p>The ID of the client connection.</p>
   */
  ConnectionId?: string;

  /**
   * @public
   * <p>The state of the client connection.</p>
   */
  PreviousStatus?: ClientVpnConnectionStatus;

  /**
   * @public
   * <p>A message about the status of the client connection, if applicable.</p>
   */
  CurrentStatus?: ClientVpnConnectionStatus;
}

/**
 * @public
 */
export interface TerminateClientVpnConnectionsResult {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * @public
   * <p>The user who established the terminated client connections.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The current state of the client connections.</p>
   */
  ConnectionStatuses?: TerminateConnectionStatus[];
}

/**
 * @public
 */
export interface TerminateInstancesRequest {
  /**
   * @public
   * <p>The IDs of the instances.</p>
   *          <p>Constraints: Up to 1000 instance IDs. We recommend breaking up this request into
   *             smaller batches.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * @public
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
   * @public
   * <p>Information about the terminated instances.</p>
   */
  TerminatingInstances?: InstanceStateChange[];
}

/**
 * @public
 */
export interface UnassignIpv6AddressesRequest {
  /**
   * @public
   * <p>The IPv6 addresses to unassign from the network interface.</p>
   */
  Ipv6Addresses?: string[];

  /**
   * @public
   * <p>The IPv6 prefixes to unassign from the network interface.</p>
   */
  Ipv6Prefixes?: string[];

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

/**
 * @public
 */
export interface UnassignIpv6AddressesResult {
  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The IPv6 addresses that have been unassigned from the network interface.</p>
   */
  UnassignedIpv6Addresses?: string[];

  /**
   * @public
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
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * @public
   * <p>The secondary private IP addresses to unassign from the network interface. You can specify this
   *         	option multiple times to unassign more than one IP address.</p>
   */
  PrivateIpAddresses?: string[];

  /**
   * @public
   * <p>The IPv4 prefixes to unassign from  the network interface.</p>
   */
  Ipv4Prefixes?: string[];
}

/**
 * @public
 */
export interface UnassignPrivateNatGatewayAddressRequest {
  /**
   * @public
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId: string | undefined;

  /**
   * @public
   * <p>The private IPv4 addresses you want to unassign.</p>
   */
  PrivateIpAddresses: string[] | undefined;

  /**
   * @public
   * <p>The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. Default value is 350 seconds.</p>
   */
  MaxDrainDurationSeconds?: number;

  /**
   * @public
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
   * @public
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * @public
   * <p>Information about the NAT gateway IP addresses.</p>
   */
  NatGatewayAddresses?: NatGatewayAddress[];
}

/**
 * @public
 */
export interface UnlockSnapshotRequest {
  /**
   * @public
   * <p>The ID of the snapshot to unlock.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface UnlockSnapshotResult {
  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;
}

/**
 * @public
 */
export interface UnmonitorInstancesRequest {
  /**
   * @public
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The ID of the security group rule.</p>
   */
  SecurityGroupRuleId?: string;

  /**
   * @public
   * <p>The description of the security group rule.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>[Default VPC] The name of the security group. You must specify either the security group
   * 			ID or the security group name.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The IP permissions for the security group rule. You must specify either the IP permissions
   * 		    or the description.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * @public
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
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>[Default VPC] The name of the security group. You must specify either the
   *             security group ID or the security group name. For security groups in a
   *             nondefault VPC, you must specify the security group ID.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The IP permissions for the security group rule. You must specify either IP permissions
   * 		    or a description.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * @public
   * <p>The description for the ingress security group rules. You must specify either
   *             a description or IP permissions.</p>
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[];
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface WithdrawByoipCidrRequest {
  /**
   * @public
   * <p>The address range, in CIDR notation.</p>
   */
  Cidr: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Information about the address pool.</p>
   */
  ByoipCidr?: ByoipCidr;
}

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
