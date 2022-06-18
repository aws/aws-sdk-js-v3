// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  AccessScopePathRequest,
  AddIpamOperatingRegion,
  AddPrefixListEntry,
  BlockDeviceMapping,
  ClientConnectOptions,
  ClientLoginBannerOptions,
  ClientVpnAuthenticationRequest,
  ConnectionLogOptions,
  CreateTransitGatewayConnectRequestOptions,
  CreateTransitGatewayMulticastDomainRequestOptions,
  CreateTransitGatewayVpcAttachmentRequestOptions,
  DestinationOptionsRequest,
  DnsOptionsSpecification,
  ExportToS3TaskSpecification,
  FleetLaunchTemplateConfigRequest,
  IamInstanceProfileSpecification,
  IcmpTypeCode,
  InstanceEventWindowAssociationRequest,
  InstanceEventWindowTimeRangeRequest,
  InstanceIpv6Address,
  InstanceSpecification,
  IpPermission,
  Ipv4PrefixSpecificationRequest,
  Ipv6PrefixSpecificationRequest,
  NewDhcpConfiguration,
  OnDemandOptionsRequest,
  PortRange,
  PriceScheduleSpecification,
  PrivateIpAddressSpecification,
  Protocol,
  RequestIpamResourceTag,
  RequestLaunchTemplateData,
  ReservationFleetInstanceSpecification,
  S3ObjectTag,
  SpotOptionsRequest,
  Storage,
  StorageLocation,
  Tag,
  TagSpecification,
  TargetCapacitySpecificationRequest,
  TargetConfigurationRequest,
  TrafficMirrorPortRangeRequest,
  TransitGatewayConnectRequestBgpOptions,
  TransitGatewayRequestOptions,
  VpnConnectionOptionsSpecification,
} from "./models_3";
import {
  AssignedPrivateIpAddress,
  AssociationStatus,
  BundleTask,
  ByoipCidr,
  CancelledSpotInstanceRequest,
  CancelSpotFleetRequestsErrorItem,
  CancelSpotFleetRequestsSuccessItem,
  CapacityReservation,
  CapacityReservationFleetCancellationState,
  CarrierGateway,
  ClientVpnAuthorizationRuleStatus,
  ClientVpnEndpointStatus,
  ClientVpnRouteStatus,
  ConnectionNotification,
  CreateFleetError,
  CreateFleetInstance,
  CustomerGateway,
  DeleteFleetErrorItem,
  DeleteFleetSuccessItem,
  DeleteLaunchTemplateVersionsResponseErrorItem,
  DeleteLaunchTemplateVersionsResponseSuccessItem,
  DhcpOptions,
  EgressOnlyInternetGateway,
  ExportTask,
  FailedCapacityReservationFleetCancellationResult,
  FailedQueuedPurchaseDeletion,
  FleetCapacityReservation,
  IamInstanceProfileAssociation,
  InstanceEventWindow,
  InstanceEventWindowStateChange,
  InternetGateway,
  Ipam,
  IpamPool,
  IpamPoolAllocation,
  IpamScope,
  Ipv4PrefixSpecification,
  LaunchTemplate,
  LaunchTemplateVersion,
  LocalGatewayRoute,
  LocalGatewayRouteTableVpcAssociation,
  ManagedPrefixList,
  NatGateway,
  NetworkAcl,
  NetworkInsightsAccessScope,
  NetworkInsightsAccessScopeContent,
  NetworkInsightsPath,
  NetworkInterface,
  NetworkInterfacePermission,
  PlacementGroup,
  ReplaceRootVolumeTask,
  ReservedInstancesListing,
  RouteTable,
  RouteTableAssociationState,
  SecurityGroupRule,
  ServiceConfiguration,
  SnapshotInfo,
  SpotDatafeedSubscription,
  Subnet,
  SubnetCidrReservation,
  SubnetIpv6CidrBlockAssociation,
  SuccessfulQueuedPurchaseDeletion,
  TrafficMirrorFilter,
  TrafficMirrorFilterRule,
  TrafficMirrorSession,
  TrafficMirrorTarget,
  TransitGateway,
  TransitGatewayAssociation,
  TransitGatewayConnect,
  TransitGatewayConnectPeer,
  TransitGatewayMulticastDomain,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayPeeringAttachment,
  TransitGatewayPrefixListReference,
  TransitGatewayRoute,
  TransitGatewayRouteTable,
  TransitGatewayVpcAttachment,
  TrunkInterfaceAssociation,
  UnsuccessfulItem,
  ValidationWarning,
  Vpc,
  VpcAttachment,
  VpcCidrBlockAssociation,
  VpcEndpoint,
  VpcIpv6CidrBlockAssociation,
  VpcPeeringConnection,
  VpnConnection,
  VpnGateway,
} from "./models_4";
import {
  AddressFamily,
  AutoPlacement,
  CapacityReservationFleetState,
  CapacityReservationInstancePlatform,
  CapacityReservationTenancy,
  ConnectivityType,
  CopyTagsFromSource,
  DomainType,
  EndDateType,
  ExportEnvironment,
  FleetCapacityReservationTenancy,
  FleetExcessCapacityTerminationPolicy,
  FleetInstanceMatchCriteria,
  FleetType,
  FlowLogsResourceType,
  GatewayType,
  HostRecovery,
  InstanceMatchCriteria,
  InterfacePermissionType,
  IpAddressType,
  IpamPoolAwsService,
  KeyFormat,
  KeyType,
  LogDestinationType,
  NetworkInterfaceCreationType,
  PlacementStrategy,
  RuleAction,
  SelfServicePortal,
  SnapshotState,
  StorageTier,
  SubnetCidrReservationType,
  Tenancy,
  TrafficDirection,
  TrafficMirrorRuleAction,
  TrafficType,
  TransportProtocol,
  VolumeAttachmentState,
  VolumeState,
  VolumeType,
  VpcEndpointType,
} from "./models_5";

/**
 * <p>Contains the parameters for accepting the quote.</p>
 */
export interface AcceptReservedInstancesExchangeQuoteRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the Convertible Reserved Instances to exchange for another Convertible
   *             Reserved Instance of the same or higher value.</p>
   */
  ReservedInstanceIds: string[] | undefined;

  /**
   * <p>The configuration of the target Convertible Reserved Instance to exchange for your
   *             current Convertible Reserved Instances.</p>
   */
  TargetConfigurations?: TargetConfigurationRequest[];
}

export namespace AcceptReservedInstancesExchangeQuoteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptReservedInstancesExchangeQuoteRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of the exchange and whether it was <code>successful</code>.</p>
 */
export interface AcceptReservedInstancesExchangeQuoteResult {
  /**
   * <p>The ID of the successful exchange.</p>
   */
  ExchangeId?: string;
}

export namespace AcceptReservedInstancesExchangeQuoteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptReservedInstancesExchangeQuoteResult): any => ({
    ...obj,
  });
}

export interface AcceptTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AcceptTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptTransitGatewayMulticastDomainAssociationsRequest): any => ({
    ...obj,
  });
}

export interface AcceptTransitGatewayMulticastDomainAssociationsResult {
  /**
   * <p>Describes the multicast domain associations.</p>
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
}

export namespace AcceptTransitGatewayMulticastDomainAssociationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptTransitGatewayMulticastDomainAssociationsResult): any => ({
    ...obj,
  });
}

export interface AcceptTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AcceptTransitGatewayPeeringAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptTransitGatewayPeeringAttachmentRequest): any => ({
    ...obj,
  });
}

export interface AcceptTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

export namespace AcceptTransitGatewayPeeringAttachmentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptTransitGatewayPeeringAttachmentResult): any => ({
    ...obj,
  });
}

export interface AcceptTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AcceptTransitGatewayVpcAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptTransitGatewayVpcAttachmentRequest): any => ({
    ...obj,
  });
}

export interface AcceptTransitGatewayVpcAttachmentResult {
  /**
   * <p>The VPC attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export namespace AcceptTransitGatewayVpcAttachmentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptTransitGatewayVpcAttachmentResult): any => ({
    ...obj,
  });
}

export interface AcceptVpcEndpointConnectionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC endpoint service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>The IDs of one or more interface VPC endpoints.</p>
   */
  VpcEndpointIds: string[] | undefined;
}

export namespace AcceptVpcEndpointConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptVpcEndpointConnectionsRequest): any => ({
    ...obj,
  });
}

export interface AcceptVpcEndpointConnectionsResult {
  /**
   * <p>Information about the interface endpoints that were not accepted, if
   *             applicable.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace AcceptVpcEndpointConnectionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptVpcEndpointConnectionsResult): any => ({
    ...obj,
  });
}

export interface AcceptVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC peering connection. You must specify this parameter in the
   * 			request.</p>
   */
  VpcPeeringConnectionId?: string;
}

export namespace AcceptVpcPeeringConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptVpcPeeringConnectionRequest): any => ({
    ...obj,
  });
}

export interface AcceptVpcPeeringConnectionResult {
  /**
   * <p>Information about the VPC peering connection.</p>
   */
  VpcPeeringConnection?: VpcPeeringConnection;
}

export namespace AcceptVpcPeeringConnectionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptVpcPeeringConnectionResult): any => ({
    ...obj,
  });
}

export interface AdvertiseByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation. This must be the exact range that you provisioned.
   *          You can't advertise only a portion of the provisioned range.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AdvertiseByoipCidrRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdvertiseByoipCidrRequest): any => ({
    ...obj,
  });
}

export interface AdvertiseByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace AdvertiseByoipCidrResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdvertiseByoipCidrResult): any => ({
    ...obj,
  });
}

export interface AllocateAddressRequest {
  /**
   * <p>Indicates whether the Elastic IP address is for use with instances in a VPC or instances in EC2-Classic.</p>
   *          <p>Default: If the Region supports EC2-Classic, the default is <code>standard</code>. Otherwise, the default
   *          is <code>vpc</code>.</p>
   */
  Domain?: DomainType | string;

  /**
   * <p>[EC2-VPC] The Elastic IP address to recover or an IPv4 address from an address pool.</p>
   */
  Address?: string;

  /**
   * <p>The ID of an address pool that you own. Use this parameter to let Amazon EC2 select an address from the address pool.
   *        To specify a specific address from the address pool, use the <code>Address</code> parameter instead.</p>
   */
  PublicIpv4Pool?: string;

  /**
   * <p> A unique set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services
   *       advertises IP addresses. Use this parameter to limit the IP address to this location. IP
   *       addresses cannot move between network border groups.</p>
   *          <p>Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html">DescribeAvailabilityZones</a> to view the network border groups.</p>
   *
   *          <p>You cannot use a network border group with EC2 Classic. If you attempt this operation on EC2 Classic,
   *       you receive an <code>InvalidParameterCombination</code> error.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The ID of a customer-owned address pool. Use this parameter to let Amazon EC2
   *         select an address from the address pool. Alternatively, specify a specific
   *         address from the address pool.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to assign to the Elastic IP address.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace AllocateAddressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocateAddressRequest): any => ({
    ...obj,
  });
}

export interface AllocateAddressResult {
  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;

  /**
   * <p>[EC2-VPC] The ID that Amazon Web Services assigns to represent the allocation of the Elastic IP address for use with instances in a VPC.</p>
   */
  AllocationId?: string;

  /**
   * <p>The ID of an address pool.</p>
   */
  PublicIpv4Pool?: string;

  /**
   * <p>The set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises
   *       IP addresses.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>Indicates whether the Elastic IP address is for use with instances in a VPC (<code>vpc</code>) or
   * 				instances in EC2-Classic (<code>standard</code>).</p>
   */
  Domain?: DomainType | string;

  /**
   * <p>The customer-owned IP address.</p>
   */
  CustomerOwnedIp?: string;

  /**
   * <p>The ID of the customer-owned address pool.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>The carrier IP address. This option is only available for network interfaces which  reside
   *       in a subnet in a Wavelength Zone (for example an EC2 instance). </p>
   */
  CarrierIp?: string;
}

export namespace AllocateAddressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocateAddressResult): any => ({
    ...obj,
  });
}

export interface AllocateHostsRequest {
  /**
   * <p>Indicates whether the host accepts any untargeted instance launches that
   *     		match its instance type configuration, or if it only accepts Host tenancy
   *     		instance launches that specify its unique host ID. For more information,
   *     		see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-dedicated-hosts-work.html#dedicated-hosts-understanding">
   *         	Understanding auto-placement and affinity</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *
   *         <p>Default: <code>on</code>
   *          </p>
   */
  AutoPlacement?: AutoPlacement | string;

  /**
   * <p>The Availability Zone in which to allocate the Dedicated Host.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Specifies the instance type to be supported by the Dedicated Hosts. If you
   * 		specify an instance type, the Dedicated Hosts support instances of the
   * 		specified instance type only.</p>
   *
   *     	    <p>If you want the Dedicated Hosts to support multiple instance types in a specific
   *     		instance family, omit this parameter and specify <b>InstanceFamily</b>
   *     		instead. You cannot specify <b>InstanceType</b> and
   *     		<b>InstanceFamily</b> in the same request.</p>
   */
  InstanceType?: string;

  /**
   * <p>Specifies the instance family to be supported by the Dedicated Hosts. If you specify
   * 			an instance family, the Dedicated Hosts support multiple instance types within that
   * 			instance family.</p>
   *
   * 		       <p>If you want the Dedicated Hosts to support a specific instance type only, omit this
   * 			parameter and specify <b>InstanceType</b>
   * 			instead. You cannot specify <b>InstanceFamily</b> and
   * 			<b>InstanceType</b> in the same request.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The number of Dedicated Hosts to allocate to your account with these parameters.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The tags to apply to the Dedicated Host during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Indicates whether to enable or disable host recovery for the Dedicated Host.
   * 			Host recovery is disabled by default. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html">
   * 			Host recovery</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * 		       <p>Default: <code>off</code>
   *          </p>
   */
  HostRecovery?: HostRecovery | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate the Dedicated Host.</p>
   */
  OutpostArn?: string;
}

export namespace AllocateHostsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocateHostsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of AllocateHosts.</p>
 */
export interface AllocateHostsResult {
  /**
   * <p>The ID of the allocated Dedicated Host. This is used to launch an instance onto a
   * 			specific host.</p>
   */
  HostIds?: string[];
}

export namespace AllocateHostsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocateHostsResult): any => ({
    ...obj,
  });
}

export interface AllocateIpamPoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the IPAM pool from which you would like to allocate a CIDR.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The CIDR you would like to allocate from the IPAM pool. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>If there is no DefaultNetmaskLength allocation rule set on the pool, you must specify either the NetmaskLength or the CIDR.</p>
   *             </li>
   *             <li>
   *                <p>If the DefaultNetmaskLength allocation rule is set on the pool, you can specify either the NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule will be ignored.</p>
   *             </li>
   *          </ul>
   *          <p>Possible values: Any available IPv4 or IPv6 CIDR.</p>
   */
  Cidr?: string;

  /**
   * <p>The netmask length of the CIDR you would like to allocate from the IPAM pool. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>If there is no DefaultNetmaskLength allocation rule set on the pool, you must specify either the NetmaskLength or the CIDR.</p>
   *             </li>
   *             <li>
   *                <p>If the DefaultNetmaskLength allocation rule is set on the pool, you can specify either the NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule will be ignored.</p>
   *             </li>
   *          </ul>
   *          <p>Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.</p>
   */
  NetmaskLength?: number;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description for the allocation.</p>
   */
  Description?: string;

  /**
   * <p>A preview of the next available CIDR in a pool.</p>
   */
  PreviewNextCidr?: boolean;

  /**
   * <p>Exclude a particular CIDR range from being returned by the pool.</p>
   */
  DisallowedCidrs?: string[];
}

export namespace AllocateIpamPoolCidrRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocateIpamPoolCidrRequest): any => ({
    ...obj,
  });
}

export interface AllocateIpamPoolCidrResult {
  /**
   * <p>Information about the allocation created.</p>
   */
  IpamPoolAllocation?: IpamPoolAllocation;
}

export namespace AllocateIpamPoolCidrResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocateIpamPoolCidrResult): any => ({
    ...obj,
  });
}

export interface ApplySecurityGroupsToClientVpnTargetNetworkRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the VPC in which the associated target network is located.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The IDs of the security groups to apply to the associated target network. Up to 5 security groups can
   * 			be applied to an associated target network.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ApplySecurityGroupsToClientVpnTargetNetworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplySecurityGroupsToClientVpnTargetNetworkRequest): any => ({
    ...obj,
  });
}

export interface ApplySecurityGroupsToClientVpnTargetNetworkResult {
  /**
   * <p>The IDs of the applied security groups.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace ApplySecurityGroupsToClientVpnTargetNetworkResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplySecurityGroupsToClientVpnTargetNetworkResult): any => ({
    ...obj,
  });
}

export interface AssignIpv6AddressesRequest {
  /**
   * <p>The number of additional IPv6 addresses to assign to the network interface.
   *     		The specified number of IPv6 addresses are assigned in addition to the
   *     		existing IPv6 addresses that are already assigned to the network interface.
   *     		Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You
   *     		can't use this option if specifying specific IPv6 addresses.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>One or more specific IPv6 addresses to be assigned to the network interface. You can't use this option if you're specifying a number of IPv6 addresses.</p>
   */
  Ipv6Addresses?: string[];

  /**
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigns to the
   *             network interface. You cannot use this option if you use the <code>Ipv6Prefixes</code>
   *             option.</p>
   */
  Ipv6PrefixCount?: number;

  /**
   * <p>One or more IPv6 prefixes assigned to the network interface. You cannot use this option if you use the <code>Ipv6PrefixCount</code> option.</p>
   */
  Ipv6Prefixes?: string[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

export namespace AssignIpv6AddressesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssignIpv6AddressesRequest): any => ({
    ...obj,
  });
}

export interface AssignIpv6AddressesResult {
  /**
   * <p>The new IPv6 addresses assigned to the network interface. Existing IPv6 addresses
   *         	that were assigned to the network interface before the request are not included.</p>
   */
  AssignedIpv6Addresses?: string[];

  /**
   * <p>The IPv6 prefixes that are assigned to the network interface.</p>
   */
  AssignedIpv6Prefixes?: string[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;
}

export namespace AssignIpv6AddressesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssignIpv6AddressesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for AssignPrivateIpAddresses.</p>
 */
export interface AssignPrivateIpAddressesRequest {
  /**
   * <p>Indicates whether to allow an IP address that is already assigned to another network interface or instance to be reassigned to the specified network interface.</p>
   */
  AllowReassignment?: boolean;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>One or more IP addresses to be assigned as a secondary private IP address to the network interface. You can't specify this parameter when also specifying a number of secondary IP addresses.</p>
   *         <p>If you don't specify an IP address, Amazon EC2 automatically selects an IP address within the subnet range.</p>
   */
  PrivateIpAddresses?: string[];

  /**
   * <p>The number of secondary IP addresses to assign to the network interface. You can't specify this parameter when also specifying private IP addresses.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>One or more IPv4 prefixes assigned to the network interface. You cannot use this option if you use the <code>Ipv4PrefixCount</code> option.</p>
   */
  Ipv4Prefixes?: string[];

  /**
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface. You cannot use this option if you use the <code>Ipv4 Prefixes</code> option.</p>
   */
  Ipv4PrefixCount?: number;
}

export namespace AssignPrivateIpAddressesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssignPrivateIpAddressesRequest): any => ({
    ...obj,
  });
}

export interface AssignPrivateIpAddressesResult {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private IP addresses assigned to the network interface.</p>
   */
  AssignedPrivateIpAddresses?: AssignedPrivateIpAddress[];

  /**
   * <p>The IPv4 prefixes that are assigned to the network interface.</p>
   */
  AssignedIpv4Prefixes?: Ipv4PrefixSpecification[];
}

export namespace AssignPrivateIpAddressesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssignPrivateIpAddressesResult): any => ({
    ...obj,
  });
}

export interface AssociateAddressRequest {
  /**
   * <p>[EC2-VPC] The allocation ID. This is required for EC2-VPC.</p>
   */
  AllocationId?: string;

  /**
   * <p>The ID of the instance. The instance must have exactly one attached network interface.
   *       For EC2-VPC, you can specify either the instance ID or the network interface ID, but not both.
   *       For EC2-Classic, you must specify an instance ID and the instance must be in the running
   *       state.</p>
   */
  InstanceId?: string;

  /**
   * <p>[EC2-Classic] The Elastic IP address to associate with the instance. This is required for
   *       EC2-Classic.</p>
   */
  PublicIp?: string;

  /**
   * <p>[EC2-VPC] For a VPC in an EC2-Classic account, specify true to allow an Elastic IP address that is already associated with an instance or network interface to be reassociated with the specified instance or network interface. Otherwise, the operation fails. In a VPC in an EC2-VPC-only account, reassociation is automatic, therefore you can specify false to ensure the operation fails if the Elastic IP address is already associated with another resource.</p>
   */
  AllowReassociation?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>[EC2-VPC] The ID of the network interface. If the instance has more than one network interface, you must specify a network interface ID.</p>
   *    	     <p>For EC2-VPC, you can specify either the instance ID or the network interface ID, but not both. </p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>[EC2-VPC] The primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.</p>
   */
  PrivateIpAddress?: string;
}

export namespace AssociateAddressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateAddressRequest): any => ({
    ...obj,
  });
}

export interface AssociateAddressResult {
  /**
   * <p>[EC2-VPC] The ID that represents the association of the Elastic IP address with an instance.</p>
   */
  AssociationId?: string;
}

export namespace AssociateAddressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateAddressResult): any => ({
    ...obj,
  });
}

export interface AssociateClientVpnTargetNetworkRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the subnet to associate with the Client VPN endpoint.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AssociateClientVpnTargetNetworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateClientVpnTargetNetworkRequest): any => ({
    ...obj,
  });
}

export interface AssociateClientVpnTargetNetworkResult {
  /**
   * <p>The unique ID of the target network association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The current state of the target network association.</p>
   */
  Status?: AssociationStatus;
}

export namespace AssociateClientVpnTargetNetworkResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateClientVpnTargetNetworkResult): any => ({
    ...obj,
  });
}

export interface AssociateDhcpOptionsRequest {
  /**
   * <p>The ID of the DHCP options set, or <code>default</code> to associate
   *         no DHCP options with the VPC.</p>
   */
  DhcpOptionsId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AssociateDhcpOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateDhcpOptionsRequest): any => ({
    ...obj,
  });
}

export interface AssociateEnclaveCertificateIamRoleRequest {
  /**
   * <p>The ARN of the ACM certificate with which to associate the IAM role.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The ARN of the IAM role to associate with the ACM certificate. You can associate up to 16 IAM roles with an ACM
   * 			certificate.</p>
   */
  RoleArn?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AssociateEnclaveCertificateIamRoleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateEnclaveCertificateIamRoleRequest): any => ({
    ...obj,
  });
}

export interface AssociateEnclaveCertificateIamRoleResult {
  /**
   * <p>The name of the Amazon S3 bucket to which the certificate was uploaded.</p>
   */
  CertificateS3BucketName?: string;

  /**
   * <p>The Amazon S3 object key where the certificate, certificate chain, and encrypted private key bundle are stored. The
   * 			object key is formatted as follows:  <code>role_arn</code>/<code>certificate_arn</code>.</p>
   */
  CertificateS3ObjectKey?: string;

  /**
   * <p>The ID of the KMS key used to encrypt the private key of the certificate.</p>
   */
  EncryptionKmsKeyId?: string;
}

export namespace AssociateEnclaveCertificateIamRoleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateEnclaveCertificateIamRoleResult): any => ({
    ...obj,
  });
}

export interface AssociateIamInstanceProfileRequest {
  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile: IamInstanceProfileSpecification | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace AssociateIamInstanceProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateIamInstanceProfileRequest): any => ({
    ...obj,
  });
}

export interface AssociateIamInstanceProfileResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}

export namespace AssociateIamInstanceProfileResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateIamInstanceProfileResult): any => ({
    ...obj,
  });
}

export interface AssociateInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId: string | undefined;

  /**
   * <p>One or more targets associated with the specified event window.</p>
   */
  AssociationTarget: InstanceEventWindowAssociationRequest | undefined;
}

export namespace AssociateInstanceEventWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateInstanceEventWindowRequest): any => ({
    ...obj,
  });
}

export interface AssociateInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   */
  InstanceEventWindow?: InstanceEventWindow;
}

export namespace AssociateInstanceEventWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateInstanceEventWindowResult): any => ({
    ...obj,
  });
}

export interface AssociateRouteTableRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;
}

export namespace AssociateRouteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateRouteTableRequest): any => ({
    ...obj,
  });
}

export interface AssociateRouteTableResult {
  /**
   * <p>The route table association ID. This ID is required for disassociating the route
   * 			table.</p>
   */
  AssociationId?: string;

  /**
   * <p>The state of the association.</p>
   */
  AssociationState?: RouteTableAssociationState;
}

export namespace AssociateRouteTableResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateRouteTableResult): any => ({
    ...obj,
  });
}

export interface AssociateSubnetCidrBlockRequest {
  /**
   * <p>The IPv6 CIDR block for your subnet. The subnet must have a /64 prefix
   *             length.</p>
   */
  Ipv6CidrBlock: string | undefined;

  /**
   * <p>The ID of your subnet.</p>
   */
  SubnetId: string | undefined;
}

export namespace AssociateSubnetCidrBlockRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateSubnetCidrBlockRequest): any => ({
    ...obj,
  });
}

export interface AssociateSubnetCidrBlockResult {
  /**
   * <p>Information about the IPv6 association.</p>
   */
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export namespace AssociateSubnetCidrBlockResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateSubnetCidrBlockResult): any => ({
    ...obj,
  });
}

export interface AssociateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the transit gateway attachment to associate with the transit gateway multicast domain.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AssociateTransitGatewayMulticastDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTransitGatewayMulticastDomainRequest): any => ({
    ...obj,
  });
}

export interface AssociateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the transit gateway multicast domain associations.</p>
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
}

export namespace AssociateTransitGatewayMulticastDomainResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTransitGatewayMulticastDomainResult): any => ({
    ...obj,
  });
}

export interface AssociateTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AssociateTransitGatewayRouteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTransitGatewayRouteTableRequest): any => ({
    ...obj,
  });
}

export interface AssociateTransitGatewayRouteTableResult {
  /**
   * <p>The ID of the association.</p>
   */
  Association?: TransitGatewayAssociation;
}

export namespace AssociateTransitGatewayRouteTableResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTransitGatewayRouteTableResult): any => ({
    ...obj,
  });
}

export interface AssociateTrunkInterfaceRequest {
  /**
   * <p>The ID of the branch network interface.</p>
   */
  BranchInterfaceId: string | undefined;

  /**
   * <p>The ID of the trunk network interface.</p>
   */
  TrunkInterfaceId: string | undefined;

  /**
   * <p>The ID of the VLAN. This applies to the VLAN protocol.</p>
   */
  VlanId?: number;

  /**
   * <p>The application key. This applies to the GRE protocol.</p>
   */
  GreKey?: number;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AssociateTrunkInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTrunkInterfaceRequest): any => ({
    ...obj,
  });
}

export interface AssociateTrunkInterfaceResult {
  /**
   * <p>Information about the association between the trunk network interface and branch network interface.</p>
   */
  InterfaceAssociation?: TrunkInterfaceAssociation;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace AssociateTrunkInterfaceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTrunkInterfaceResult): any => ({
    ...obj,
  });
}

export interface AssociateVpcCidrBlockRequest {
  /**
   * <p>Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IPv6 addresses, or the size of the CIDR block.</p>
   */
  AmazonProvidedIpv6CidrBlock?: boolean;

  /**
   * <p>An IPv4 CIDR block to associate with the VPC.</p>
   */
  CidrBlock?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The name of the location from which we advertise the IPV6 CIDR block. Use this parameter
   *       to limit the CIDR block to this location.</p>
   *          <p> You must set <code>AmazonProvidedIpv6CidrBlock</code> to <code>true</code> to use this parameter.</p>
   *          <p> You can have one IPv6 CIDR block association per network border group.</p>
   */
  Ipv6CidrBlockNetworkBorderGroup?: string;

  /**
   * <p>The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.</p>
   */
  Ipv6Pool?: string;

  /**
   * <p>An IPv6 CIDR block from the IPv6 address pool. You must also specify <code>Ipv6Pool</code> in the request.</p>
   *         <p>To let Amazon choose the IPv6 CIDR block for you, omit this parameter.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>Associate a CIDR allocated from an IPv4 IPAM pool to a VPC. For more information about Amazon VPC IP Address Manager (IPAM), see <a href="/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  Ipv4IpamPoolId?: string;

  /**
   * <p>The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   */
  Ipv4NetmaskLength?: number;

  /**
   * <p>Associates a CIDR allocated from an IPv6 IPAM pool to a VPC. For more information about Amazon VPC IP Address Manager (IPAM), see <a href="/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  Ipv6IpamPoolId?: string;

  /**
   * <p>The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
   */
  Ipv6NetmaskLength?: number;
}

export namespace AssociateVpcCidrBlockRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateVpcCidrBlockRequest): any => ({
    ...obj,
  });
}

export interface AssociateVpcCidrBlockResult {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;

  /**
   * <p>Information about the IPv4 CIDR block association.</p>
   */
  CidrBlockAssociation?: VpcCidrBlockAssociation;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace AssociateVpcCidrBlockResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateVpcCidrBlockResult): any => ({
    ...obj,
  });
}

export interface AttachClassicLinkVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of one or more of the VPC's security groups. You cannot specify security groups from a different VPC.</p>
   */
  Groups: string[] | undefined;

  /**
   * <p>The ID of an EC2-Classic instance to link to the ClassicLink-enabled VPC.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of a ClassicLink-enabled VPC.</p>
   */
  VpcId: string | undefined;
}

export namespace AttachClassicLinkVpcRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachClassicLinkVpcRequest): any => ({
    ...obj,
  });
}

export interface AttachClassicLinkVpcResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace AttachClassicLinkVpcResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachClassicLinkVpcResult): any => ({
    ...obj,
  });
}

export interface AttachInternetGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the internet gateway.</p>
   */
  InternetGatewayId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

export namespace AttachInternetGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachInternetGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for AttachNetworkInterface.</p>
 */
export interface AttachNetworkInterfaceRequest {
  /**
   * <p>The index of the device for the network interface attachment.</p>
   */
  DeviceIndex: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The index of the network card. Some instance types support multiple network cards.
   *             The primary network interface must be assigned to network card index 0.
   *             The default is network card index 0.</p>
   */
  NetworkCardIndex?: number;
}

export namespace AttachNetworkInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachNetworkInterfaceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of AttachNetworkInterface.</p>
 */
export interface AttachNetworkInterfaceResult {
  /**
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;
}

export namespace AttachNetworkInterfaceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachNetworkInterfaceResult): any => ({
    ...obj,
  });
}

export interface AttachVolumeRequest {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  Device: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the EBS volume. The volume and instance must be within the same Availability
   *       Zone.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AttachVolumeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachVolumeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes volume attachment details.</p>
 */
export interface VolumeAttachment {
  /**
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date;

  /**
   * <p>The device name.</p>
   */
  Device?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The attachment state of the volume.</p>
   */
  State?: VolumeAttachmentState | string;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;
}

export namespace VolumeAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VolumeAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for AttachVpnGateway.</p>
 */
export interface AttachVpnGatewayRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AttachVpnGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachVpnGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of AttachVpnGateway.</p>
 */
export interface AttachVpnGatewayResult {
  /**
   * <p>Information about the attachment.</p>
   */
  VpcAttachment?: VpcAttachment;
}

export namespace AttachVpnGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachVpnGatewayResult): any => ({
    ...obj,
  });
}

export interface AuthorizeClientVpnIngressRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the network for which access is being authorized.</p>
   */
  TargetNetworkCidr: string | undefined;

  /**
   * <p>The ID of the group to grant access to, for example, the Active Directory group or identity provider (IdP) group. Required if <code>AuthorizeAllGroups</code> is <code>false</code> or not specified.</p>
   */
  AccessGroupId?: string;

  /**
   * <p>Indicates whether to grant access to all clients. Specify <code>true</code> to grant all
   *             clients who successfully establish a VPN connection access to the network. Must be set
   *             to <code>true</code> if <code>AccessGroupId</code> is not specified.</p>
   */
  AuthorizeAllGroups?: boolean;

  /**
   * <p>A brief description of the authorization rule.</p>
   */
  Description?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace AuthorizeClientVpnIngressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeClientVpnIngressRequest): any => ({
    ...obj,
  });
}

export interface AuthorizeClientVpnIngressResult {
  /**
   * <p>The current state of the authorization rule.</p>
   */
  Status?: ClientVpnAuthorizationRuleStatus;
}

export namespace AuthorizeClientVpnIngressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeClientVpnIngressResult): any => ({
    ...obj,
  });
}

export interface AuthorizeSecurityGroupEgressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The sets of IP permissions. You can't specify a destination security group and a CIDR IP
   *             address range in the same set of permissions.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The tags applied to the security group rule.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Not supported. Use a set of IP permissions to specify the CIDR.</p>
   */
  CidrIp?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  FromPort?: number;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the protocol name or
   *             number.</p>
   */
  IpProtocol?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  ToPort?: number;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a
   *             destination security group.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a
   *             destination security group.</p>
   */
  SourceSecurityGroupOwnerId?: string;
}

export namespace AuthorizeSecurityGroupEgressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeSecurityGroupEgressRequest): any => ({
    ...obj,
  });
}

export interface AuthorizeSecurityGroupEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;

  /**
   * <p>Information about the outbound (egress) security group rules that were added.</p>
   */
  SecurityGroupRules?: SecurityGroupRule[];
}

export namespace AuthorizeSecurityGroupEgressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeSecurityGroupEgressResult): any => ({
    ...obj,
  });
}

export interface AuthorizeSecurityGroupIngressRequest {
  /**
   * <p>The IPv4 address range, in CIDR format. You can't specify this parameter when specifying a source
   *       security group. To specify an IPv6 address range, use a set of IP permissions.</p>
   *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  CidrIp?: string;

  /**
   * <p>The start of port range for the TCP and UDP protocols, or an ICMP type number.
   * 			For the ICMP type number, use <code>-1</code> to specify all types. If you
   * 			specify all ICMP types, you must specify all codes.</p>
   *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  FromPort?: number;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the security group. You must specify either the
   * 			security group ID or the security group name in the request.</p>
   */
  GroupName?: string;

  /**
   * <p>The sets of IP permissions.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>) or number
   *       (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). To specify <code>icmpv6</code>, use a set of IP permissions.</p>
   *          <p>[VPC only] Use <code>-1</code> to specify all protocols. If you specify <code>-1</code> or a
   *          protocol other than <code>tcp</code>, <code>udp</code>, or <code>icmp</code>, traffic on all ports
   *          is allowed, regardless of any ports you specify.</p>
   *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  IpProtocol?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the source security group. You can't specify this parameter
   *          in combination with the following parameters: the CIDR IP address range, the start of the port range,
   *          the IP protocol, and the end of the port range. Creates rules that grant full ICMP, UDP, and TCP access.
   *          To create a rule with a specific IP protocol and port range, use a set of IP permissions instead. For
   *          EC2-VPC, the source security group must be in the same VPC.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>[nondefault VPC] The Amazon Web Services account ID for the source security group, if the source security group is
   *          in a different account. You can't specify this parameter in combination with the following parameters:
   *          the CIDR IP address range, the IP protocol, the start of the port range, and the end of the port range.
   *          Creates rules that grant full ICMP, UDP, and TCP access. To create a rule with a specific IP protocol
   *          and port range, use a set of IP permissions instead.</p>
   */
  SourceSecurityGroupOwnerId?: string;

  /**
   * <p>The end of port range for the TCP and UDP protocols, or an ICMP code number.
   * 			For the ICMP code number, use <code>-1</code> to specify all codes. If you
   * 			specify all ICMP types, you must specify all codes.</p>
   *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  ToPort?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>[VPC Only] The tags applied to the security group rule.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace AuthorizeSecurityGroupIngressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeSecurityGroupIngressRequest): any => ({
    ...obj,
  });
}

export interface AuthorizeSecurityGroupIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;

  /**
   * <p>Information about the inbound (ingress) security group rules that were added.</p>
   */
  SecurityGroupRules?: SecurityGroupRule[];
}

export namespace AuthorizeSecurityGroupIngressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeSecurityGroupIngressResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for BundleInstance.</p>
 */
export interface BundleInstanceRequest {
  /**
   * <p>The ID of the instance to bundle.</p>
   *          <p>Type: String</p>
   *          <p>Default: None</p>
   *          <p>Required: Yes</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The bucket in which to store the AMI. You can specify a bucket that you already own or a new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone else, Amazon EC2 returns an error.</p>
   */
  Storage: Storage | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace BundleInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BundleInstanceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of BundleInstance.</p>
 */
export interface BundleInstanceResult {
  /**
   * <p>Information about the bundle task.</p>
   */
  BundleTask?: BundleTask;
}

export namespace BundleInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BundleInstanceResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CancelBundleTask.</p>
 */
export interface CancelBundleTaskRequest {
  /**
   * <p>The ID of the bundle task.</p>
   */
  BundleId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CancelBundleTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelBundleTaskRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CancelBundleTask.</p>
 */
export interface CancelBundleTaskResult {
  /**
   * <p>Information about the bundle task.</p>
   */
  BundleTask?: BundleTask;
}

export namespace CancelBundleTaskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelBundleTaskResult): any => ({
    ...obj,
  });
}

export interface CancelCapacityReservationRequest {
  /**
   * <p>The ID of the Capacity Reservation to be cancelled.</p>
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CancelCapacityReservationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelCapacityReservationRequest): any => ({
    ...obj,
  });
}

export interface CancelCapacityReservationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace CancelCapacityReservationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelCapacityReservationResult): any => ({
    ...obj,
  });
}

export interface CancelCapacityReservationFleetsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the Capacity Reservation Fleets to cancel.</p>
   */
  CapacityReservationFleetIds: string[] | undefined;
}

export namespace CancelCapacityReservationFleetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelCapacityReservationFleetsRequest): any => ({
    ...obj,
  });
}

export interface CancelCapacityReservationFleetsResult {
  /**
   * <p>Information about the Capacity Reservation Fleets that were successfully cancelled.</p>
   */
  SuccessfulFleetCancellations?: CapacityReservationFleetCancellationState[];

  /**
   * <p>Information about the Capacity Reservation Fleets that could not be cancelled.</p>
   */
  FailedFleetCancellations?: FailedCapacityReservationFleetCancellationResult[];
}

export namespace CancelCapacityReservationFleetsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelCapacityReservationFleetsResult): any => ({
    ...obj,
  });
}

export interface CancelConversionRequest {
  /**
   * <p>The ID of the conversion task.</p>
   */
  ConversionTaskId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The reason for canceling the conversion task.</p>
   */
  ReasonMessage?: string;
}

export namespace CancelConversionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelConversionRequest): any => ({
    ...obj,
  });
}

export interface CancelExportTaskRequest {
  /**
   * <p>The ID of the export task. This is the ID returned by <code>CreateInstanceExportTask</code>.</p>
   */
  ExportTaskId: string | undefined;
}

export namespace CancelExportTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelExportTaskRequest): any => ({
    ...obj,
  });
}

export interface CancelImportTaskRequest {
  /**
   * <p>The reason for canceling the task.</p>
   */
  CancelReason?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the import image or import snapshot task to be canceled.</p>
   */
  ImportTaskId?: string;
}

export namespace CancelImportTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelImportTaskRequest): any => ({
    ...obj,
  });
}

export interface CancelImportTaskResult {
  /**
   * <p>The ID of the task being canceled.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>The current state of the task being canceled.</p>
   */
  PreviousState?: string;

  /**
   * <p>The current state of the task being canceled.</p>
   */
  State?: string;
}

export namespace CancelImportTaskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelImportTaskResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CancelReservedInstancesListing.</p>
 */
export interface CancelReservedInstancesListingRequest {
  /**
   * <p>The ID of the Reserved Instance listing.</p>
   */
  ReservedInstancesListingId: string | undefined;
}

export namespace CancelReservedInstancesListingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelReservedInstancesListingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CancelReservedInstancesListing.</p>
 */
export interface CancelReservedInstancesListingResult {
  /**
   * <p>The Reserved Instance listing.</p>
   */
  ReservedInstancesListings?: ReservedInstancesListing[];
}

export namespace CancelReservedInstancesListingResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelReservedInstancesListingResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CancelSpotFleetRequests.</p>
 */
export interface CancelSpotFleetRequestsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the Spot Fleet requests.</p>
   */
  SpotFleetRequestIds: string[] | undefined;

  /**
   * <p>Indicates whether to terminate instances for a Spot Fleet request if it is canceled
   *             successfully.</p>
   */
  TerminateInstances: boolean | undefined;
}

export namespace CancelSpotFleetRequestsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelSpotFleetRequestsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CancelSpotFleetRequests.</p>
 */
export interface CancelSpotFleetRequestsResponse {
  /**
   * <p>Information about the Spot Fleet requests that are successfully canceled.</p>
   */
  SuccessfulFleetRequests?: CancelSpotFleetRequestsSuccessItem[];

  /**
   * <p>Information about the Spot Fleet requests that are not successfully canceled.</p>
   */
  UnsuccessfulFleetRequests?: CancelSpotFleetRequestsErrorItem[];
}

export namespace CancelSpotFleetRequestsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelSpotFleetRequestsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CancelSpotInstanceRequests.</p>
 */
export interface CancelSpotInstanceRequestsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more Spot Instance request IDs.</p>
   */
  SpotInstanceRequestIds: string[] | undefined;
}

export namespace CancelSpotInstanceRequestsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelSpotInstanceRequestsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CancelSpotInstanceRequests.</p>
 */
export interface CancelSpotInstanceRequestsResult {
  /**
   * <p>One or more Spot Instance requests.</p>
   */
  CancelledSpotInstanceRequests?: CancelledSpotInstanceRequest[];
}

export namespace CancelSpotInstanceRequestsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelSpotInstanceRequestsResult): any => ({
    ...obj,
  });
}

export interface ConfirmProductInstanceRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The product code. This must be a product code that you own.</p>
   */
  ProductCode: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ConfirmProductInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmProductInstanceRequest): any => ({
    ...obj,
  });
}

export interface ConfirmProductInstanceResult {
  /**
   * <p>The Amazon Web Services account ID of the instance owner. This is only present if the
   *             product code is attached to the instance.</p>
   */
  OwnerId?: string;

  /**
   * <p>The return value of the request. Returns <code>true</code> if the specified product
   *             code is owned by the requester and associated with the specified instance.</p>
   */
  Return?: boolean;
}

export namespace ConfirmProductInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmProductInstanceResult): any => ({
    ...obj,
  });
}

export interface CopyFpgaImageRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the source AFI.</p>
   */
  SourceFpgaImageId: string | undefined;

  /**
   * <p>The description for the new AFI.</p>
   */
  Description?: string;

  /**
   * <p>The name for the new AFI. The default is the name of the source AFI.</p>
   */
  Name?: string;

  /**
   * <p>The Region that contains the source AFI.</p>
   */
  SourceRegion: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CopyFpgaImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyFpgaImageRequest): any => ({
    ...obj,
  });
}

export interface CopyFpgaImageResult {
  /**
   * <p>The ID of the new AFI.</p>
   */
  FpgaImageId?: string;
}

export namespace CopyFpgaImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyFpgaImageResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CopyImage.</p>
 */
export interface CopyImageRequest {
  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description for the new AMI in the destination Region.</p>
   */
  Description?: string;

  /**
   * <p>Specifies whether the destination snapshots of the copied image should be encrypted.
   *        You can encrypt a copy of an unencrypted snapshot, but you cannot create an unencrypted
   *        copy of an encrypted snapshot. The default KMS key for Amazon EBS is used unless you specify a non-default
   *        Key Management Service (KMS) KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The identifier of the symmetric Key Management Service (KMS) KMS key to use when creating
   *    		encrypted volumes. If this parameter is not specified, your Amazon Web Services managed KMS key for Amazon EBS is used.
   *    		If you specify a KMS key, you must also set the encrypted state to <code>true</code>.</p>
   *    	     <p>You can specify a KMS key using any of the following:</p>
   *    	     <ul>
   *             <li>
   *    			         <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *    		       </li>
   *             <li>
   *    	           <p>Key alias. For example, alias/ExampleAlias.</p>
   *    	        </li>
   *             <li>
   *    	           <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *    		       </li>
   *             <li>
   *    		          <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p>
   *    		       </li>
   *          </ul>
   *    	     <p>Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an identifier that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   *    	     <p>The specified KMS key must exist in the destination Region.</p>
   *    	     <p>Amazon EBS does not support asymmetric KMS keys.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the new AMI in the destination Region.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the AMI to copy.</p>
   */
  SourceImageId: string | undefined;

  /**
   * <p>The name of the Region that contains the AMI to copy.</p>
   */
  SourceRegion: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost to which to copy the AMI. Only
   *   		specify this parameter when copying an AMI from an Amazon Web Services Region to an Outpost.
   *   		The AMI must be in the Region of the destination Outpost. You cannot copy an
   *   		AMI from an Outpost to a Region, from one Outpost to another, or within the same
   *   		Outpost.</p>
   *
   *   	      <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#copy-amis">
   *   		Copying AMIs from an Amazon Web Services Region to an Outpost</a> in the
   *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  DestinationOutpostArn?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CopyImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyImageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CopyImage.</p>
 */
export interface CopyImageResult {
  /**
   * <p>The ID of the new AMI.</p>
   */
  ImageId?: string;
}

export namespace CopyImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyImageResult): any => ({
    ...obj,
  });
}

export interface CopySnapshotRequest {
  /**
   * <p>A description for the EBS snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost to which to copy the snapshot. Only
   * 		specify this parameter when copying a snapshot from an Amazon Web Services Region to an Outpost.
   * 		The snapshot must be in the Region for the destination Outpost. You cannot copy a
   * 		snapshot from an Outpost to a Region, from one Outpost to another, or within the same
   * 		Outpost.</p>
   *   	      <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#copy-snapshots">
   *   		Copy snapshots from an Amazon Web Services Region to an Outpost</a> in the
   *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  DestinationOutpostArn?: string;

  /**
   * <p>The destination Region to use in the <code>PresignedUrl</code> parameter of a snapshot
   *       copy operation. This parameter is only valid for specifying the destination Region in a
   *         <code>PresignedUrl</code> parameter, where it is required.</p>
   *
   *          <p>The snapshot copy is sent to the regional endpoint that you sent the HTTP
   *     	request to (for example, <code>ec2.us-east-1.amazonaws.com</code>). With the CLI, this is
   *       specified using the <code>--region</code> parameter or the default Region in your Amazon Web Services
   *       configuration file.</p>
   */
  DestinationRegion?: string;

  /**
   * <p>To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled,
   *       enable encryption using this parameter. Otherwise, omit this parameter. Encrypted snapshots
   *       are encrypted, even if you omit this parameter and encryption by default is not enabled. You
   *       cannot set this parameter to false. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The identifier of the Key Management Service (KMS) KMS key to use for Amazon EBS encryption.
   *       If this parameter is not specified, your KMS key for Amazon EBS is used. If <code>KmsKeyId</code> is
   *       specified, the encrypted state must be <code>true</code>.</p>
   *          <p>You can specify the KMS key using any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Key alias. For example, alias/ExampleAlias.</p>
   *             </li>
   *             <li>
   *                <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>When you copy an encrypted source snapshot using the Amazon EC2 Query API, you must supply a
   *       pre-signed URL. This parameter is optional for unencrypted snapshots. For more information,
   *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html">Query
   *         requests</a>.</p>
   *          <p>The <code>PresignedUrl</code> should use the snapshot source endpoint, the
   *         <code>CopySnapshot</code> action, and include the <code>SourceRegion</code>,
   *         <code>SourceSnapshotId</code>, and <code>DestinationRegion</code> parameters. The
   *         <code>PresignedUrl</code> must be signed using Amazon Web Services Signature Version 4. Because EBS
   *       snapshots are stored in Amazon S3, the signing algorithm for this parameter uses the same logic
   *       that is described in <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">Authenticating Requests: Using Query
   *         Parameters (Amazon Web Services Signature Version 4)</a> in the <i>Amazon Simple Storage Service API Reference</i>. An
   *       invalid or improperly signed <code>PresignedUrl</code> will cause the copy operation to fail
   *       asynchronously, and the snapshot will move to an <code>error</code> state.</p>
   */
  PresignedUrl?: string;

  /**
   * <p>The ID of the Region that contains the snapshot to be copied.</p>
   */
  SourceRegion: string | undefined;

  /**
   * <p>The ID of the EBS snapshot to copy.</p>
   */
  SourceSnapshotId: string | undefined;

  /**
   * <p>The tags to apply to the new snapshot.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CopySnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopySnapshotRequest): any => ({
    ...obj,
  });
}

export interface CopySnapshotResult {
  /**
   * <p>The ID of the new snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>Any tags applied to the new snapshot.</p>
   */
  Tags?: Tag[];
}

export namespace CopySnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopySnapshotResult): any => ({
    ...obj,
  });
}

export interface CreateCapacityReservationRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The instance type for which to reserve capacity. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceType: string | undefined;

  /**
   * <p>The type of operating system for which to reserve capacity.</p>
   */
  InstancePlatform: CapacityReservationInstancePlatform | string | undefined;

  /**
   * <p>The Availability Zone in which to create the Capacity Reservation.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the Availability Zone in which to create the Capacity Reservation.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   */
  Tenancy?: CapacityReservationTenancy | string;

  /**
   * <p>The number of instances for which to reserve capacity.</p>
   * 	  	     <p>Valid range: 1 - 1000</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides
   * 			dedicated throughput to Amazon EBS and an optimized configuration stack to provide
   * 			optimal I/O performance. This optimization isn't available with all instance types.
   * 			Additional usage charges apply when using an EBS- optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>Indicates whether the Capacity Reservation supports instances with temporary, block-level
   * 			storage.</p>
   */
  EphemeralStorage?: boolean;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
   * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
   * 				<code>expired</code> when it reaches its end date and time.</p>
   * 		       <p>You must provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 				<code>limited</code>. Omit <code>EndDate</code> if <code>EndDateType</code> is
   * 				<code>unlimited</code>.</p>
   *
   * 		       <p>If the <code>EndDateType</code> is <code>limited</code>, the Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify
   * 			5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019.</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
   * 			types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it. Do not
   * 					provide an <code>EndDate</code> if the <code>EndDateType</code> is
   * 						<code>unlimited</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time. You must
   * 					provide an <code>EndDate</code> value if the <code>EndDateType</code> value is
   * 						<code>limited</code>.</p>
   *             </li>
   *          </ul>
   */
  EndDateType?: EndDateType | string;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation accepts. The options
   * 			include:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The Capacity Reservation automatically matches all instances that have matching attributes (instance type, platform,
   * 				and Availability Zone). Instances that have matching attributes run in the Capacity Reservation automatically without specifying
   * 				any additional parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targeted</code> - The Capacity Reservation only accepts instances that have matching attributes
   * 					(instance type, platform, and Availability Zone), and explicitly target the
   * 					Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. </p>
   *             </li>
   *          </ul>
   * 		       <p>Default: <code>open</code>
   *          </p>
   */
  InstanceMatchCriteria?: InstanceMatchCriteria | string;

  /**
   * <p>The tags to apply to the Capacity Reservation during launch.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost on which to create the Capacity Reservation.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster placement group in which
   * 			to create the Capacity Reservation. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-cpg.html">
   * 				Capacity Reservations for cluster placement groups</a> in the
   * 			<i>Amazon EC2 User Guide</i>.</p>
   */
  PlacementGroupArn?: string;
}

export namespace CreateCapacityReservationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCapacityReservationRequest): any => ({
    ...obj,
  });
}

export interface CreateCapacityReservationResult {
  /**
   * <p>Information about the Capacity Reservation.</p>
   */
  CapacityReservation?: CapacityReservation;
}

export namespace CreateCapacityReservationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCapacityReservationResult): any => ({
    ...obj,
  });
}

export interface CreateCapacityReservationFleetRequest {
  /**
   * <p>The strategy used by the Capacity Reservation Fleet to determine which of the
   * 			specified instance types to use. Currently, only the <code>prioritized</code>
   * 			allocation strategy is supported. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#allocation-strategy">
   * 				Allocation strategy</a> in the Amazon EC2 User Guide.</p>
   * 		       <p>Valid values: <code>prioritized</code>
   *          </p>
   */
  AllocationStrategy?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Information about the instance types for which to reserve the capacity.</p>
   */
  InstanceTypeSpecifications: ReservationFleetInstanceSpecification[] | undefined;

  /**
   * <p>Indicates the tenancy of the Capacity Reservation Fleet. All Capacity Reservations
   * 			in the Fleet inherit this tenancy. The Capacity Reservation Fleet can have one of
   * 			the following tenancy settings:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   * 					             <code>default</code> - The Capacity Reservation Fleet is created on hardware
   * 					that is shared with other Amazon Web Services accounts.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>dedicated</code> - The Capacity Reservations are created on single-tenant
   * 					hardware that is dedicated to a single Amazon Web Services account.</p>
   * 			         </li>
   *          </ul>
   */
  Tenancy?: FleetCapacityReservationTenancy | string;

  /**
   * <p>The total number of capacity units to be reserved by the Capacity Reservation Fleet. This
   * 			value, together with the instance type weights that you assign to each instance type used by
   * 			the Fleet determine the number of instances for which the Fleet reserves capacity. Both values
   * 			are based on units that make sense for your workload. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">
   * 				Total target capacity</a> in the Amazon EC2 User Guide.</p>
   */
  TotalTargetCapacity: number | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet expires. When the Capacity
   * 			Reservation Fleet expires, its state changes to <code>expired</code> and all of the Capacity
   * 			Reservations in the Fleet expire.</p>
   * 		       <p>The Capacity Reservation Fleet expires within an hour after the specified time. For example,
   * 			if you specify <code>5/31/2019</code>, <code>13:30:55</code>, the Capacity Reservation Fleet
   * 			is guaranteed to expire between <code>13:30:55</code> and <code>14:30:55</code> on
   * 			<code>5/31/2019</code>.
   * 		</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation Fleet accepts. All
   * 			Capacity Reservations in the Fleet inherit this instance matching criteria.</p>
   * 		       <p>Currently, Capacity Reservation Fleets support <code>open</code> instance matching criteria
   * 			only. This means that instances that have matching attributes (instance type, platform, and
   * 			Availability Zone) run in the Capacity Reservations automatically. Instances do not need to
   * 			explicitly target a Capacity Reservation Fleet to use its reserved capacity.</p>
   */
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | string;

  /**
   * <p>The tags to assign to the Capacity Reservation Fleet. The tags are automatically assigned
   * 			to the Capacity Reservations in the Fleet.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateCapacityReservationFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCapacityReservationFleetRequest): any => ({
    ...obj,
  });
}

export interface CreateCapacityReservationFleetResult {
  /**
   * <p>The ID of the Capacity Reservation Fleet.</p>
   */
  CapacityReservationFleetId?: string;

  /**
   * <p>The status of the Capacity Reservation Fleet.</p>
   */
  State?: CapacityReservationFleetState | string;

  /**
   * <p>The total number of capacity units for which the Capacity Reservation Fleet reserves capacity.</p>
   */
  TotalTargetCapacity?: number;

  /**
   * <p>The requested capacity units that have been successfully reserved.</p>
   */
  TotalFulfilledCapacity?: number;

  /**
   * <p>The instance matching criteria for the Capacity Reservation Fleet.</p>
   */
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | string;

  /**
   * <p>The allocation strategy used by the Capacity Reservation Fleet.</p>
   */
  AllocationStrategy?: string;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet expires.</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates the tenancy of Capacity Reservation Fleet.</p>
   */
  Tenancy?: FleetCapacityReservationTenancy | string;

  /**
   * <p>Information about the individual Capacity Reservations in the Capacity Reservation Fleet.</p>
   */
  FleetCapacityReservations?: FleetCapacityReservation[];

  /**
   * <p>The tags assigned to the Capacity Reservation Fleet.</p>
   */
  Tags?: Tag[];
}

export namespace CreateCapacityReservationFleetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCapacityReservationFleetResult): any => ({
    ...obj,
  });
}

export interface CreateCarrierGatewayRequest {
  /**
   * <p>The ID of the VPC to associate with the carrier gateway.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to associate with the carrier gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateCarrierGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCarrierGatewayRequest): any => ({
    ...obj,
  });
}

export interface CreateCarrierGatewayResult {
  /**
   * <p>Information about the carrier gateway.</p>
   */
  CarrierGateway?: CarrierGateway;
}

export namespace CreateCarrierGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCarrierGatewayResult): any => ({
    ...obj,
  });
}

export interface CreateClientVpnEndpointRequest {
  /**
   * <p>The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. The CIDR block should be /22 or greater.</p>
   */
  ClientCidrBlock: string | undefined;

  /**
   * <p>The ARN of the server certificate. For more information, see
   * 			the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p>
   */
  ServerCertificateArn: string | undefined;

  /**
   * <p>Information about the authentication method to be used to authenticate clients.</p>
   */
  AuthenticationOptions: ClientVpnAuthenticationRequest[] | undefined;

  /**
   * <p>Information about the client connection logging options.</p>
   * 		       <p>If you enable client connection logging, data about client connections is sent to a
   * 			Cloudwatch Logs log stream. The following information is logged:</p>
   * 		       <ul>
   *             <li>
   *                <p>Client connection requests</p>
   *             </li>
   *             <li>
   *                <p>Client connection results (successful and unsuccessful)</p>
   *             </li>
   *             <li>
   *                <p>Reasons for unsuccessful client connection requests</p>
   *             </li>
   *             <li>
   *                <p>Client connection termination time</p>
   *             </li>
   *          </ul>
   */
  ConnectionLogOptions: ConnectionLogOptions | undefined;

  /**
   * <p>Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can
   * 			have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.</p>
   */
  DnsServers?: string[];

  /**
   * <p>The transport protocol to be used by the VPN session.</p>
   * 		       <p>Default value: <code>udp</code>
   *          </p>
   */
  TransportProtocol?: TransportProtocol | string;

  /**
   * <p>The port number to assign to the Client VPN endpoint for TCP and UDP traffic.</p>
   * 	        <p>Valid Values: <code>443</code> | <code>1194</code>
   *          </p>
   * 	        <p>Default Value: <code>443</code>
   *          </p>
   */
  VpnPort?: number;

  /**
   * <p>A brief description of the Client VPN endpoint.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether split-tunnel is enabled on the Client VPN endpoint.</p>
   * 		       <p>By default, split-tunnel on a VPN endpoint is disabled.</p>
   * 		       <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-tunnel Client VPN endpoint</a> in the
   * 			<i>Client VPN Administrator Guide</i>.</p>
   */
  SplitTunnel?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to apply to the Client VPN endpoint during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.</p>
   */
  VpcId?: string;

  /**
   * <p>Specify whether to enable the self-service portal for the Client VPN endpoint.</p>
   *         <p>Default Value: <code>enabled</code>
   *          </p>
   */
  SelfServicePortal?: SelfServicePortal | string;

  /**
   * <p>The options for managing connection authorization for new client connections.</p>
   */
  ClientConnectOptions?: ClientConnectOptions;

  /**
   * <p>The maximum VPN session duration time in hours.</p>
   * 		       <p>Valid values: <code>8 | 10 | 12 | 24</code>
   *          </p>
   * 		       <p>Default value: <code>24</code>
   *          </p>
   */
  SessionTimeoutHours?: number;

  /**
   * <p>Options for enabling a customizable text banner that will be displayed on
   * 			Amazon Web Services provided clients when a VPN session is established.</p>
   */
  ClientLoginBannerOptions?: ClientLoginBannerOptions;
}

export namespace CreateClientVpnEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClientVpnEndpointRequest): any => ({
    ...obj,
  });
}

export interface CreateClientVpnEndpointResult {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: ClientVpnEndpointStatus;

  /**
   * <p>The DNS name to be used by clients when establishing their VPN session.</p>
   */
  DnsName?: string;
}

export namespace CreateClientVpnEndpointResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClientVpnEndpointResult): any => ({
    ...obj,
  });
}

export interface CreateClientVpnRouteRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which to add the route.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the route destination. For example:</p>
   * 		       <ul>
   *             <li>
   *                <p>To add a route for Internet access, enter <code>0.0.0.0/0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>To add a route for a peered VPC, enter the peered VPC's IPv4 CIDR range</p>
   *             </li>
   *             <li>
   *                <p>To add a route for an on-premises network, enter the Amazon Web Services Site-to-Site VPN connection's IPv4 CIDR range</p>
   *             </li>
   *             <li>
   *                <p>To add a route for the local network, enter the client CIDR range</p>
   *             </li>
   *          </ul>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the subnet through which you want to route traffic. The specified subnet must be
   * 			an existing target network of the Client VPN endpoint.</p>
   * 	        <p>Alternatively, if you're adding a route for the local network, specify <code>local</code>.</p>
   */
  TargetVpcSubnetId: string | undefined;

  /**
   * <p>A brief description of the route.</p>
   */
  Description?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateClientVpnRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClientVpnRouteRequest): any => ({
    ...obj,
  });
}

export interface CreateClientVpnRouteResult {
  /**
   * <p>The current state of the route.</p>
   */
  Status?: ClientVpnRouteStatus;
}

export namespace CreateClientVpnRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClientVpnRouteResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateCustomerGateway.</p>
 */
export interface CreateCustomerGatewayRequest {
  /**
   * <p>For devices that support BGP, the customer gateway's BGP ASN.</p>
   *         <p>Default: 65000</p>
   */
  BgpAsn: number | undefined;

  /**
   * <p>The Internet-routable IP address for the customer gateway's outside interface. The
   *             address must be static.</p>
   */
  PublicIp?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the customer gateway certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The type of VPN connection that this customer gateway supports
   *             (<code>ipsec.1</code>).</p>
   */
  Type: GatewayType | string | undefined;

  /**
   * <p>The tags to apply to the customer gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A name for the customer gateway device.</p>
   *         <p>Length Constraints: Up to 255 characters.</p>
   */
  DeviceName?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateCustomerGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomerGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateCustomerGateway.</p>
 */
export interface CreateCustomerGatewayResult {
  /**
   * <p>Information about the customer gateway.</p>
   */
  CustomerGateway?: CustomerGateway;
}

export namespace CreateCustomerGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomerGatewayResult): any => ({
    ...obj,
  });
}

export interface CreateDefaultSubnetRequest {
  /**
   * <p>The Availability Zone in which to create the default subnet.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether to create an IPv6 only subnet. If you already have a default subnet
   *             for this Availability Zone, you must delete it before you can create an IPv6 only subnet.</p>
   */
  Ipv6Native?: boolean;
}

export namespace CreateDefaultSubnetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDefaultSubnetRequest): any => ({
    ...obj,
  });
}

export interface CreateDefaultSubnetResult {
  /**
   * <p>Information about the subnet.</p>
   */
  Subnet?: Subnet;
}

export namespace CreateDefaultSubnetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDefaultSubnetResult): any => ({
    ...obj,
  });
}

export interface CreateDefaultVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateDefaultVpcRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDefaultVpcRequest): any => ({
    ...obj,
  });
}

export interface CreateDefaultVpcResult {
  /**
   * <p>Information about the VPC.</p>
   */
  Vpc?: Vpc;
}

export namespace CreateDefaultVpcResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDefaultVpcResult): any => ({
    ...obj,
  });
}

export interface CreateDhcpOptionsRequest {
  /**
   * <p>A DHCP configuration option.</p>
   */
  DhcpConfigurations: NewDhcpConfiguration[] | undefined;

  /**
   * <p>The tags to assign to the DHCP option.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateDhcpOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDhcpOptionsRequest): any => ({
    ...obj,
  });
}

export interface CreateDhcpOptionsResult {
  /**
   * <p>A set of DHCP options.</p>
   */
  DhcpOptions?: DhcpOptions;
}

export namespace CreateDhcpOptionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDhcpOptionsResult): any => ({
    ...obj,
  });
}

export interface CreateEgressOnlyInternetGatewayRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   * 				idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC for which to create the egress-only internet gateway.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the egress-only internet gateway.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateEgressOnlyInternetGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEgressOnlyInternetGatewayRequest): any => ({
    ...obj,
  });
}

export interface CreateEgressOnlyInternetGatewayResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request.</p>
   */
  ClientToken?: string;

  /**
   * <p>Information about the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGateway?: EgressOnlyInternetGateway;
}

export namespace CreateEgressOnlyInternetGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEgressOnlyInternetGatewayResult): any => ({
    ...obj,
  });
}

export interface CreateFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *             idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
   */
  SpotOptions?: SpotOptionsRequest;

  /**
   * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
   */
  OnDemandOptions?: OnDemandOptionsRequest;

  /**
   * <p>Indicates whether running instances should be terminated if the total target capacity of
   *          the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | string;

  /**
   * <p>The configuration for the EC2 Fleet.</p>
   */
  LaunchTemplateConfigs: FleetLaunchTemplateConfigRequest[] | undefined;

  /**
   * <p>The number of units to request.</p>
   */
  TargetCapacitySpecification: TargetCapacitySpecificationRequest | undefined;

  /**
   * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires.</p>
   */
  TerminateInstancesWithExpiration?: boolean;

  /**
   * <p>The fleet type. The default value is <code>maintain</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>maintain</code> - The EC2 Fleet places an asynchronous request for your desired
   *                capacity, and continues to maintain your desired Spot capacity by replenishing
   *                interrupted Spot Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>request</code> - The EC2 Fleet places an asynchronous one-time request for your
   *                desired capacity, but does submit Spot requests in alternative capacity pools if Spot
   *                capacity is unavailable, and does not maintain Spot capacity if Spot Instances are
   *                interrupted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instant</code> - The EC2 Fleet places a synchronous one-time request for your
   *                desired capacity, and returns errors for any instances that could not be
   *                launched.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-request-type.html">EC2 Fleet
   *             request types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  Type?: FleetType | string;

  /**
   * <p>The start date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          The default is to start fulfilling the request immediately.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for
   *          fleets of type <code>maintain</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#ec2-fleet-health-checks">EC2 Fleet
   *             health checks</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * <p>The key-value pair for tagging the EC2 Fleet request on creation. For more information, see
   *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources">Tagging your resources</a>.</p>
   *          <p>If the fleet type is <code>instant</code>, specify a resource type of <code>fleet</code>
   *          to tag the fleet or <code>instance</code> to tag the instances at launch.</p>
   *          <p>If the fleet type is <code>maintain</code> or <code>request</code>, specify a resource
   *          type of <code>fleet</code> to tag the fleet. You cannot specify a resource type of
   *             <code>instance</code>. To tag instances at launch, specify the tags in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template">launch template</a>.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Reserved.</p>
   */
  Context?: string;
}

export namespace CreateFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetRequest): any => ({
    ...obj,
  });
}

export interface CreateFleetResult {
  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>Information about the instances that could not be launched by the fleet. Supported only for
   *             fleets of type <code>instant</code>.</p>
   */
  Errors?: CreateFleetError[];

  /**
   * <p>Information about the instances that were launched by the fleet. Supported only for
   *             fleets of type <code>instant</code>.</p>
   */
  Instances?: CreateFleetInstance[];
}

export namespace CreateFleetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetResult): any => ({
    ...obj,
  });
}

export interface CreateFlowLogsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group
   *             in your account.</p>
   *         <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify
   *             <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p>
   */
  DeliverLogsPermissionArn?: string;

  /**
   * <p>The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.</p>
   *         <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify
   *             <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The ID of the subnet, network interface, or VPC for which you want to create a flow log.</p>
   *         <p>Constraints: Maximum of 1000 resources</p>
   */
  ResourceIds: string[] | undefined;

  /**
   * <p>The type of resource for which to create the flow log. For example, if you specified a VPC ID for
   *             the <code>ResourceId</code> property, specify <code>VPC</code> for this property.</p>
   */
  ResourceType: FlowLogsResourceType | string | undefined;

  /**
   * <p>The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.</p>
   */
  TrafficType: TrafficType | string | undefined;

  /**
   * <p>The type of destination to which the flow log data is to be published. Flow log data can be
   *             published to CloudWatch Logs or Amazon S3. To publish flow log data to CloudWatch Logs, specify <code>cloud-watch-logs</code>. To
   *             publish flow log data to Amazon S3, specify <code>s3</code>.</p>
   *         <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify
   *             <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p>
   *         <p>Default: <code>cloud-watch-logs</code>
   *          </p>
   */
  LogDestinationType?: LogDestinationType | string;

  /**
   * <p>The destination to which the flow log data is to be published. Flow log data can be published
   *             to a CloudWatch Logs log group or an Amazon S3 bucket. The value specified for this parameter depends on the value specified
   *             for <code>LogDestinationType</code>.</p>
   *         <p>If <code>LogDestinationType</code> is not specified or <code>cloud-watch-logs</code>,
   *             specify the Amazon Resource Name (ARN) of the CloudWatch Logs log group. For example, to publish
   *             to a log group called <code>my-logs</code>, specify
   *             <code>arn:aws:logs:us-east-1:123456789012:log-group:my-logs</code>. Alternatively,
   *             use <code>LogGroupName</code> instead.</p>
   *         <p>If LogDestinationType is <code>s3</code>, specify the ARN of the Amazon S3 bucket. You can also specify a
   *             subfolder in the bucket. To specify a subfolder in the bucket, use the following  ARN format:
   *             <code>bucket_ARN/subfolder_name/</code>. For example, to specify a subfolder named <code>my-logs</code> in a
   *             bucket named <code>my-bucket</code>, use the following ARN: <code>arn:aws:s3:::my-bucket/my-logs/</code>. You
   *             cannot use <code>AWSLogs</code> as a subfolder name. This is a reserved term.</p>
   */
  LogDestination?: string;

  /**
   * <p>The fields to include in the flow log record, in the order in which they should
   *             appear. For a list of available fields, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records">Flow log records</a>. If you
   *             omit this parameter, the flow log is created using the default format. If you specify this parameter,
   *             you must specify at least one field.</p>
   *         <p>Specify the fields using the <code>${field-id}</code> format, separated by spaces. For
   *             the CLI, surround this parameter value with single quotes on Linux or
   *             double quotes on Windows.</p>
   */
  LogFormat?: string;

  /**
   * <p>The tags to apply to the flow logs.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).</p>
   *         <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based
   *                 instance</a>, the aggregation interval is always 60 seconds or less, regardless
   *             of the value that you specify.</p>
   *         <p>Default: 600</p>
   */
  MaxAggregationInterval?: number;

  /**
   * <p>The destination options.</p>
   */
  DestinationOptions?: DestinationOptionsRequest;
}

export namespace CreateFlowLogsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFlowLogsRequest): any => ({
    ...obj,
  });
}

export interface CreateFlowLogsResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The IDs of the flow logs.</p>
   */
  FlowLogIds?: string[];

  /**
   * <p>Information about the flow logs that could not be created successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace CreateFlowLogsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFlowLogsResult): any => ({
    ...obj,
  });
}

export interface CreateFpgaImageRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball.</p>
   */
  InputStorageLocation: StorageLocation | undefined;

  /**
   * <p>The location in Amazon S3 for the output logs.</p>
   */
  LogsStorageLocation?: StorageLocation;

  /**
   * <p>A description for the AFI.</p>
   */
  Description?: string;

  /**
   * <p>A name for the AFI.</p>
   */
  Name?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to apply to the FPGA image during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateFpgaImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFpgaImageRequest): any => ({
    ...obj,
  });
}

export interface CreateFpgaImageResult {
  /**
   * <p>The FPGA image identifier (AFI ID).</p>
   */
  FpgaImageId?: string;

  /**
   * <p>The global FPGA image identifier (AGFI ID).</p>
   */
  FpgaImageGlobalId?: string;
}

export namespace CreateFpgaImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFpgaImageResult): any => ({
    ...obj,
  });
}

export interface CreateImageRequest {
  /**
   * <p>The block device mappings. This parameter cannot be used to modify the encryption
   *    		status of existing volumes or snapshots. To create an AMI with encrypted snapshots,
   *    		use the <a>CopyImage</a> action.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>A description for the new image.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A name for the new image.</p>
   *          <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)</p>
   */
  Name: string | undefined;

  /**
   * <p>By default, when Amazon EC2 creates the new AMI, it reboots the instance so that it can
   * 					take snapshots of the attached volumes while data is at rest, in order to ensure a consistent
   * 					state. You can set the <code>NoReboot</code> parameter to <code>true</code> in the API request,
   * 					or use the <code>--no-reboot</code> option in the CLI to prevent Amazon EC2 from shutting down and
   * 					rebooting the instance.</p>
   *    	     <important>
   * 					       <p>If you choose to bypass the shutdown and reboot process by setting the <code>NoReboot</code>
   * 					parameter to <code>true</code> in the API request, or by using the <code>--no-reboot</code> option
   * 					in the CLI, we can't guarantee the file system integrity of the created image.</p>
   * 				     </important>
   *          <p>Default: <code>false</code> (follow standard reboot process)</p>
   */
  NoReboot?: boolean;

  /**
   * <p>The tags to apply to the AMI and snapshots on creation. You can tag the AMI, the
   *       snapshots, or both.</p>
   *          <ul>
   *             <li>
   *                <p>To tag the AMI, the value for <code>ResourceType</code> must be
   *           <code>image</code>.</p>
   *             </li>
   *             <li>
   *       	        <p>To tag the snapshots that are created of the root volume and of other Amazon EBS volumes that
   *           are attached to the instance, the value for <code>ResourceType</code> must be
   *             <code>snapshot</code>. The same tag is applied to all of the snapshots that are
   *           created.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify other values for <code>ResourceType</code>, the request fails.</p>
   *          <p>To tag an AMI or snapshot after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>. </p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageRequest): any => ({
    ...obj,
  });
}

export interface CreateImageResult {
  /**
   * <p>The ID of the new AMI.</p>
   */
  ImageId?: string;
}

export namespace CreateImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageResult): any => ({
    ...obj,
  });
}

export interface CreateInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The name of the event window.</p>
   */
  Name?: string;

  /**
   * <p>The time range for the event window. If you specify a time range, you can't specify a cron
   *          expression.</p>
   */
  TimeRanges?: InstanceEventWindowTimeRangeRequest[];

  /**
   * <p>The cron expression for the event window, for example, <code>* 0-4,20-23 * * 1,5</code>. If
   *          you specify a cron expression, you can't specify a time range.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Only hour and day of the week values are supported.</p>
   *             </li>
   *             <li>
   *                <p>For day of the week values, you can specify either integers <code>0</code> through
   *                   <code>6</code>, or alternative single values <code>SUN</code> through
   *                   <code>SAT</code>.</p>
   *             </li>
   *             <li>
   *                <p>The minute, month, and year must be specified by <code>*</code>.</p>
   *             </li>
   *             <li>
   *                <p>The hour value must be one or a multiple range, for example, <code>0-4</code> or
   *             <code>0-4,20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>Each hour range must be >= 2 hours, for example, <code>0-2</code> or
   *             <code>20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>The event window must be >= 4 hours. The combined total time ranges in the event
   *                window must be >= 4 hours.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about cron expressions, see <a href="https://en.wikipedia.org/wiki/Cron">cron</a> on the <i>Wikipedia
   *             website</i>.</p>
   */
  CronExpression?: string;

  /**
   * <p>The tags to apply to the event window.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateInstanceEventWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstanceEventWindowRequest): any => ({
    ...obj,
  });
}

export interface CreateInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   */
  InstanceEventWindow?: InstanceEventWindow;
}

export namespace CreateInstanceEventWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstanceEventWindowResult): any => ({
    ...obj,
  });
}

export interface CreateInstanceExportTaskRequest {
  /**
   * <p>A description for the conversion task or the resource being exported. The maximum length is 255 characters.</p>
   */
  Description?: string;

  /**
   * <p>The format and location for an export instance task.</p>
   */
  ExportToS3Task: ExportToS3TaskSpecification | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The target virtualization environment.</p>
   */
  TargetEnvironment: ExportEnvironment | string | undefined;

  /**
   * <p>The tags to apply to the export instance task during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateInstanceExportTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstanceExportTaskRequest): any => ({
    ...obj,
  });
}

export interface CreateInstanceExportTaskResult {
  /**
   * <p>Information about the export instance task.</p>
   */
  ExportTask?: ExportTask;
}

export namespace CreateInstanceExportTaskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstanceExportTaskResult): any => ({
    ...obj,
  });
}

export interface CreateInternetGatewayRequest {
  /**
   * <p>The tags to assign to the internet gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateInternetGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInternetGatewayRequest): any => ({
    ...obj,
  });
}

export interface CreateInternetGatewayResult {
  /**
   * <p>Information about the internet gateway.</p>
   */
  InternetGateway?: InternetGateway;
}

export namespace CreateInternetGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInternetGatewayResult): any => ({
    ...obj,
  });
}

export interface CreateIpamRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A description for the IPAM.</p>
   */
  Description?: string;

  /**
   * <p>The operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only
   *          discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   *          <p>For more information about operating Regions, see <a href="/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   */
  OperatingRegions?: AddIpamOperatingRegion[];

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateIpamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIpamRequest): any => ({
    ...obj,
  });
}

export interface CreateIpamResult {
  /**
   * <p>Information about the IPAM created.</p>
   */
  Ipam?: Ipam;
}

export namespace CreateIpamResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIpamResult): any => ({
    ...obj,
  });
}

export interface CreateIpamPoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the scope in which you would like to create the IPAM pool.</p>
   */
  IpamScopeId: string | undefined;

  /**
   * <p>In IPAM, the locale is the Amazon Web Services Region where you want to make an IPAM pool available for allocations. Only resources in the same Region as the locale of the pool can get IP address allocations from the pool. You can only allocate a CIDR for a VPC, for example, from an IPAM pool that shares a locale with the VPC’s Region. Note that once you choose a Locale for a pool, you cannot modify it. If you do not choose a locale, resources in Regions others than the IPAM's home region cannot use CIDRs from this pool.</p>
   *          <p>Possible values: Any Amazon Web Services Region, such as us-east-1.</p>
   */
  Locale?: string;

  /**
   * <p>The ID of the source IPAM pool. Use this option to create a pool within an existing pool. Note that the CIDR you provision for the pool within the source pool must be available in the source pool's CIDR range.</p>
   */
  SourceIpamPoolId?: string;

  /**
   * <p>A description for the IPAM pool.</p>
   */
  Description?: string;

  /**
   * <p>The IP protocol assigned to this IPAM pool. You must choose either IPv4 or IPv6 protocol for a pool.</p>
   */
  AddressFamily: AddressFamily | string | undefined;

  /**
   * <p>If selected, IPAM will continuously look for resources within the CIDR range of this pool
   *          and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for
   *          these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import
   *          a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently
   *          marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM
   *          discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.
   *       </p>
   *          <p>A locale must be set on the pool for this feature to work.</p>
   */
  AutoImport?: boolean;

  /**
   * <p>Determines if the pool is publicly advertisable. This option is not available for pools with AddressFamily set to <code>ipv4</code>.</p>
   */
  PubliclyAdvertisable?: boolean;

  /**
   * <p>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be
   *          less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   */
  AllocationMinNetmaskLength?: number;

  /**
   * <p>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be
   *          greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   */
  AllocationMaxNetmaskLength?: number;

  /**
   * <p>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here,
   *          new allocations will default to 10.0.0.0/16.</p>
   */
  AllocationDefaultNetmaskLength?: number;

  /**
   * <p>Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.</p>
   */
  AllocationResourceTags?: RequestIpamResourceTag[];

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.</p>
   */
  AwsService?: IpamPoolAwsService | string;
}

export namespace CreateIpamPoolRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIpamPoolRequest): any => ({
    ...obj,
  });
}

export interface CreateIpamPoolResult {
  /**
   * <p>Information about the IPAM pool created.</p>
   */
  IpamPool?: IpamPool;
}

export namespace CreateIpamPoolResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIpamPoolResult): any => ({
    ...obj,
  });
}

export interface CreateIpamScopeRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the IPAM for which you're creating this scope.</p>
   */
  IpamId: string | undefined;

  /**
   * <p>A description for the scope you're creating.</p>
   */
  Description?: string;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateIpamScopeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIpamScopeRequest): any => ({
    ...obj,
  });
}

export interface CreateIpamScopeResult {
  /**
   * <p>Information about the created scope.</p>
   */
  IpamScope?: IpamScope;
}

export namespace CreateIpamScopeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIpamScopeResult): any => ({
    ...obj,
  });
}

export interface CreateKeyPairRequest {
  /**
   * <p>A unique name for the key pair.</p>
   * 	        <p>Constraints: Up to 255 ASCII characters</p>
   */
  KeyName: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of key pair. Note that ED25519 keys are not supported for Windows instances.</p>
   *         <p>Default: <code>rsa</code>
   *          </p>
   */
  KeyType?: KeyType | string;

  /**
   * <p>The tags to apply to the new key pair.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The format of the key pair.</p>
   *         <p>Default: <code>pem</code>
   *          </p>
   */
  KeyFormat?: KeyFormat | string;
}

export namespace CreateKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeyPairRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a key pair.</p>
 */
export interface KeyPair {
  /**
   * <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the SHA-1 digest of the DER encoded private key.</p>
   *            </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which is the default for OpenSSH, starting with OpenSSH 6.8.</p>
   *            </li>
   *          </ul>
   */
  KeyFingerprint?: string;

  /**
   * <p>An unencrypted PEM encoded RSA or ED25519 private key.</p>
   */
  KeyMaterial?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>Any tags applied to the key pair.</p>
   */
  Tags?: Tag[];
}

export namespace KeyPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyPair): any => ({
    ...obj,
    ...(obj.KeyMaterial && { KeyMaterial: SENSITIVE_STRING }),
  });
}

export interface CreateLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *         <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>A name for the launch template.</p>
   */
  LaunchTemplateName: string | undefined;

  /**
   * <p>A description for the first version of the launch template.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The information for the launch template.</p>
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;

  /**
   * <p>The tags to apply to the launch template during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateLaunchTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLaunchTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreateLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: LaunchTemplate;

  /**
   * <p>If the launch template contains parameters or parameter combinations that are not
   *             valid, an error code and an error message are returned for each issue that's
   *             found.</p>
   */
  Warning?: ValidationWarning;
}

export namespace CreateLaunchTemplateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLaunchTemplateResult): any => ({
    ...obj,
  });
}

export interface CreateLaunchTemplateVersionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *         <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template version on which to base the new version.
   *             The new version inherits the same launch parameters as the source version, except for
   *             parameters that you specify in <code>LaunchTemplateData</code>. Snapshots applied to the
   *             block device mapping are ignored when creating a new version unless they are explicitly
   *             included.</p>
   */
  SourceVersion?: string;

  /**
   * <p>A description for the version of the launch template.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The information for the launch template.</p>
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;
}

export namespace CreateLaunchTemplateVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLaunchTemplateVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateLaunchTemplateVersionResult {
  /**
   * <p>Information about the launch template version.</p>
   */
  LaunchTemplateVersion?: LaunchTemplateVersion;

  /**
   * <p>If the new version of the launch template contains parameters or parameter
   *             combinations that are not valid, an error code and an error message are returned for
   *             each issue that's found.</p>
   */
  Warning?: ValidationWarning;
}

export namespace CreateLaunchTemplateVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLaunchTemplateVersionResult): any => ({
    ...obj,
  });
}

export interface CreateLocalGatewayRouteRequest {
  /**
   * <p>The CIDR range used for destination matches. Routing decisions are based on
   *         the most specific match.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateLocalGatewayRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocalGatewayRouteRequest): any => ({
    ...obj,
  });
}

export interface CreateLocalGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: LocalGatewayRoute;
}

export namespace CreateLocalGatewayRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocalGatewayRouteResult): any => ({
    ...obj,
  });
}

export interface CreateLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the local gateway route table VPC association.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocalGatewayRouteTableVpcAssociationRequest): any => ({
    ...obj,
  });
}

export interface CreateLocalGatewayRouteTableVpcAssociationResult {
  /**
   * <p>Information about the association.</p>
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;
}

export namespace CreateLocalGatewayRouteTableVpcAssociationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocalGatewayRouteTableVpcAssociationResult): any => ({
    ...obj,
  });
}

export interface CreateManagedPrefixListRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A name for the prefix list.</p>
   *         <p>Constraints: Up to 255 characters in length. The name cannot start with <code>com.amazonaws</code>.</p>
   */
  PrefixListName: string | undefined;

  /**
   * <p>One or more entries for the prefix list.</p>
   */
  Entries?: AddPrefixListEntry[];

  /**
   * <p>The maximum number of entries for the prefix list.</p>
   */
  MaxEntries: number | undefined;

  /**
   * <p>The tags to apply to the prefix list during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The IP address type.</p>
   *         <p>Valid Values: <code>IPv4</code> | <code>IPv6</code>
   *          </p>
   */
  AddressFamily: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *         <p>Constraints: Up to 255 UTF-8 characters in length.</p>
   */
  ClientToken?: string;
}

export namespace CreateManagedPrefixListRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateManagedPrefixListRequest): any => ({
    ...obj,
  });
}

export interface CreateManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

export namespace CreateManagedPrefixListResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateManagedPrefixListResult): any => ({
    ...obj,
  });
}

export interface CreateNatGatewayRequest {
  /**
   * <p>[Public NAT gateways only] The allocation ID of an Elastic IP address to associate
   *           with the NAT gateway. You cannot specify an Elastic IP address with a private NAT gateway.
   *           If the Elastic IP address is associated with another resource, you must first disassociate it.</p>
   */
  AllocationId?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure
   * 				idempotency</a>.</p>
   *          <p>Constraint: Maximum 64 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The subnet in which to create the NAT gateway.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The tags to assign to the NAT gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Indicates whether the NAT gateway supports public or private connectivity.
   *           The default is public connectivity.</p>
   */
  ConnectivityType?: ConnectivityType | string;
}

export namespace CreateNatGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNatGatewayRequest): any => ({
    ...obj,
  });
}

export interface CreateNatGatewayResult {
  /**
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>Information about the NAT gateway.</p>
   */
  NatGateway?: NatGateway;
}

export namespace CreateNatGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNatGatewayResult): any => ({
    ...obj,
  });
}

export interface CreateNetworkAclRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the network ACL.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateNetworkAclRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkAclRequest): any => ({
    ...obj,
  });
}

export interface CreateNetworkAclResult {
  /**
   * <p>Information about the network ACL.</p>
   */
  NetworkAcl?: NetworkAcl;
}

export namespace CreateNetworkAclResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkAclResult): any => ({
    ...obj,
  });
}

export interface CreateNetworkAclEntryRequest {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation (for example
   * 		        <code>172.16.0.0/24</code>). We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet).</p>
   */
  Egress: boolean | undefined;

  /**
   * <p>ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol
   * 		        1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation (for example
   *                 <code>2001:db8:1234:1a00::/64</code>).</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.
   * 		        Required if specifying protocol 6 (TCP) or 17 (UDP).</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a
   *   			protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is
   * 			allowed, regardless of any ports or ICMP types or codes that you specify. If you specify
   * 			protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and
   * 			codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6)
   * 			and specify an IPv6 CIDR block, you must specify an ICMP type and code.</p>
   */
  Protocol: string | undefined;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction: RuleAction | string | undefined;

  /**
   * <p>The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.</p>
   *          <p>Constraints: Positive integer from 1 to 32766. The range 32767 to 65535 is reserved for internal use.</p>
   */
  RuleNumber: number | undefined;
}

export namespace CreateNetworkAclEntryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkAclEntryRequest): any => ({
    ...obj,
  });
}

export interface CreateNetworkInsightsAccessScopeRequest {
  /**
   * <p>The paths to match.</p>
   */
  MatchPaths?: AccessScopePathRequest[];

  /**
   * <p>The paths to exclude.</p>
   */
  ExcludePaths?: AccessScopePathRequest[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to apply.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateNetworkInsightsAccessScopeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkInsightsAccessScopeRequest): any => ({
    ...obj,
  });
}

export interface CreateNetworkInsightsAccessScopeResult {
  /**
   * <p>The Network Access Scope.</p>
   */
  NetworkInsightsAccessScope?: NetworkInsightsAccessScope;

  /**
   * <p>The Network Access Scope content.</p>
   */
  NetworkInsightsAccessScopeContent?: NetworkInsightsAccessScopeContent;
}

export namespace CreateNetworkInsightsAccessScopeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkInsightsAccessScopeResult): any => ({
    ...obj,
  });
}

export interface CreateNetworkInsightsPathRequest {
  /**
   * <p>The IP address of the Amazon Web Services resource that is the source of the path.</p>
   */
  SourceIp?: string;

  /**
   * <p>The IP address of the Amazon Web Services resource that is the destination of the path.</p>
   */
  DestinationIp?: string;

  /**
   * <p>The Amazon Web Services resource that is the source of the path.</p>
   */
  Source: string | undefined;

  /**
   * <p>The Amazon Web Services resource that is the destination of the path.</p>
   */
  Destination: string | undefined;

  /**
   * <p>The protocol.</p>
   */
  Protocol: Protocol | string | undefined;

  /**
   * <p>The destination port.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The tags to add to the path.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateNetworkInsightsPathRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkInsightsPathRequest): any => ({
    ...obj,
  });
}

export interface CreateNetworkInsightsPathResult {
  /**
   * <p>Information about the path.</p>
   */
  NetworkInsightsPath?: NetworkInsightsPath;
}

export namespace CreateNetworkInsightsPathResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkInsightsPathResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateNetworkInterface.</p>
 */
export interface CreateNetworkInterfaceRequest {
  /**
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>The number of IPv6 addresses to assign to a network interface. Amazon EC2
   *             automatically selects the IPv6 addresses from the subnet range. You can't use this
   *             option if specifying specific IPv6 addresses. If your subnet has the <code>AssignIpv6AddressOnCreation</code> attribute set
   *             to <code>true</code>, you can specify <code>0</code> to override this setting.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet.
   *             You can't use this option if you're specifying a number of IPv6 addresses.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The primary private IPv4 address of the network interface. If you don't specify an
   *             IPv4 address, Amazon EC2 selects one for you from the subnet's IPv4 CIDR range. If you
   *             specify an IP address, you cannot indicate any IP addresses specified in
   *             <code>privateIpAddresses</code> as primary (only one IP address can be designated as
   *             primary).</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The number of secondary private IPv4 addresses to assign to a network interface. When
   *             you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses
   *             within the subnet's IPv4 CIDR range. You can't specify this option and specify more than
   *             one private IP address using <code>privateIpAddresses</code>.</p>
   *         <p>The number of IP addresses you can assign to a network interface varies by instance
   *             type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">IP Addresses Per ENI Per
   *                 Instance Type</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>One or more IPv4 prefixes assigned to the network interface. You cannot use this option if you use the <code>Ipv4PrefixCount</code> option.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[];

  /**
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface. You cannot use this option if you use the <code>Ipv4 Prefixes</code> option.</p>
   */
  Ipv4PrefixCount?: number;

  /**
   * <p>One or more IPv6 prefixes assigned to the network interface. You cannot use this option if you use the <code>Ipv6PrefixCount</code> option.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[];

  /**
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigns to the network interface. You cannot use this option if you use the <code>Ipv6Prefixes</code> option.</p>
   */
  Ipv6PrefixCount?: number;

  /**
   * <p>The type of network interface. The default is <code>interface</code>.</p>
   * 	        <p>The only supported values are <code>efa</code> and <code>trunk</code>.</p>
   */
  InterfaceType?: NetworkInterfaceCreationType | string;

  /**
   * <p>The ID of the subnet to associate with the network interface.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The tags to apply to the new network interface.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateNetworkInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkInterfaceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateNetworkInterface.</p>
 */
export interface CreateNetworkInterfaceResult {
  /**
   * <p>Information about the network interface.</p>
   */
  NetworkInterface?: NetworkInterface;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  ClientToken?: string;
}

export namespace CreateNetworkInterfaceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkInterfaceResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateNetworkInterfacePermission.</p>
 */
export interface CreateNetworkInterfacePermissionRequest {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The Amazon Web Service. Currently not supported.</p>
   */
  AwsService?: string;

  /**
   * <p>The type of permission to grant.</p>
   */
  Permission: InterfacePermissionType | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateNetworkInterfacePermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkInterfacePermissionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateNetworkInterfacePermission.</p>
 */
export interface CreateNetworkInterfacePermissionResult {
  /**
   * <p>Information about the permission for the network interface.</p>
   */
  InterfacePermission?: NetworkInterfacePermission;
}

export namespace CreateNetworkInterfacePermissionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkInterfacePermissionResult): any => ({
    ...obj,
  });
}

export interface CreatePlacementGroupRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A name for the placement group. Must be unique within the scope of your account for
   *             the Region.</p>
   *         <p>Constraints: Up to 255 ASCII characters</p>
   */
  GroupName?: string;

  /**
   * <p>The placement strategy.</p>
   */
  Strategy?: PlacementStrategy | string;

  /**
   * <p>The number of partitions. Valid only when <b>Strategy</b> is
   *             set to <code>partition</code>.</p>
   */
  PartitionCount?: number;

  /**
   * <p>The tags to apply to the new placement group.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreatePlacementGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePlacementGroupRequest): any => ({
    ...obj,
  });
}

export interface CreatePlacementGroupResult {
  /**
   * <p>Describes a placement group.</p>
   */
  PlacementGroup?: PlacementGroup;
}

export namespace CreatePlacementGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePlacementGroupResult): any => ({
    ...obj,
  });
}

export interface CreatePublicIpv4PoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreatePublicIpv4PoolRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePublicIpv4PoolRequest): any => ({
    ...obj,
  });
}

export interface CreatePublicIpv4PoolResult {
  /**
   * <p>The ID of the public IPv4 pool.</p>
   */
  PoolId?: string;
}

export namespace CreatePublicIpv4PoolResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePublicIpv4PoolResult): any => ({
    ...obj,
  });
}

export interface CreateReplaceRootVolumeTaskRequest {
  /**
   * <p>The ID of the instance for which to replace the root volume.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the snapshot from which to restore the replacement root volume. If you want to
   *       restore the volume to the initial launch state, omit this parameter.</p>
   */
  SnapshotId?: string;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request.
   *       If you do not specify a client token, a randomly generated token is used for the request
   *       to ensure idempotency. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply to the root volume replacement task.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateReplaceRootVolumeTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReplaceRootVolumeTaskRequest): any => ({
    ...obj,
  });
}

export interface CreateReplaceRootVolumeTaskResult {
  /**
   * <p>Information about the root volume replacement task.</p>
   */
  ReplaceRootVolumeTask?: ReplaceRootVolumeTask;
}

export namespace CreateReplaceRootVolumeTaskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReplaceRootVolumeTaskResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateReservedInstancesListing.</p>
 */
export interface CreateReservedInstancesListingRequest {
  /**
   * <p>Unique, case-sensitive identifier you provide to ensure idempotency of your
   * 				listings. This helps avoid duplicate listings. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>The number of instances that are a part of a Reserved Instance account to be listed in the Reserved Instance Marketplace. This number should be less than or equal to the instance count associated with the Reserved Instance ID specified in this call.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>A list specifying the price of the Standard Reserved Instance for each month remaining in the Reserved Instance term.</p>
   */
  PriceSchedules: PriceScheduleSpecification[] | undefined;

  /**
   * <p>The ID of the active Standard Reserved Instance.</p>
   */
  ReservedInstancesId: string | undefined;
}

export namespace CreateReservedInstancesListingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReservedInstancesListingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateReservedInstancesListing.</p>
 */
export interface CreateReservedInstancesListingResult {
  /**
   * <p>Information about the Standard Reserved Instance listing.</p>
   */
  ReservedInstancesListings?: ReservedInstancesListing[];
}

export namespace CreateReservedInstancesListingResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReservedInstancesListingResult): any => ({
    ...obj,
  });
}

export interface CreateRestoreImageTaskRequest {
  /**
   * <p>The name of the Amazon S3 bucket that contains the stored AMI object.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The name of the stored AMI object in the bucket.</p>
   */
  ObjectKey: string | undefined;

  /**
   * <p>The name for the restored AMI. The name must be unique for AMIs in the Region for this
   *       account. If you do not provide a name, the new AMI gets the same name as the original
   *       AMI.</p>
   */
  Name?: string;

  /**
   * <p>The tags to apply to the AMI and snapshots on restoration. You can tag the AMI, the
   *       snapshots, or both.</p>
   *          <ul>
   *             <li>
   *                <p>To tag the AMI, the value for <code>ResourceType</code> must be <code>image</code>.</p>
   *             </li>
   *             <li>
   *                <p>To
   *           tag the snapshots, the value for <code>ResourceType</code> must be <code>snapshot</code>. The
   *           same tag is applied to all of the snapshots that are created.</p>
   *             </li>
   *          </ul>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateRestoreImageTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRestoreImageTaskRequest): any => ({
    ...obj,
  });
}

export interface CreateRestoreImageTaskResult {
  /**
   * <p>The AMI ID.</p>
   */
  ImageId?: string;
}

export namespace CreateRestoreImageTaskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRestoreImageTaskResult): any => ({
    ...obj,
  });
}

export interface CreateRouteRequest {
  /**
   * <p>The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The ID of a prefix list used for the destination match.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>[IPv6 traffic only] The ID of an egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of an internet gateway or virtual private gateway attached to your
   * 			VPC.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network interface is attached.</p>
   */
  InstanceId?: string;

  /**
   * <p>[IPv4 traffic only] The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the carrier gateway.</p>
   *         <p>You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.</p>
   */
  CarrierGatewayId?: string;

  /**
   * <p>The ID of a network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the route table for the route.</p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the core network.</p>
   */
  CoreNetworkArn?: string;
}

export namespace CreateRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteRequest): any => ({
    ...obj,
  });
}

export interface CreateRouteResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace CreateRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteResult): any => ({
    ...obj,
  });
}

export interface CreateRouteTableRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the route table.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateRouteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteTableRequest): any => ({
    ...obj,
  });
}

export interface CreateRouteTableResult {
  /**
   * <p>Information about the route table.</p>
   */
  RouteTable?: RouteTable;
}

export namespace CreateRouteTableResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteTableResult): any => ({
    ...obj,
  });
}

export interface CreateSecurityGroupRequest {
  /**
   * <p>A description for the security group. This is informational only.</p>
   * 		       <p>Constraints: Up to 255 characters in length</p>
   * 		       <p>Constraints for EC2-Classic: ASCII characters</p>
   * 		       <p>Constraints for EC2-VPC: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;{}!$*</p>
   */
  Description: string | undefined;

  /**
   * <p>The name of the security group.</p>
   *          <p>Constraints: Up to 255 characters in length. Cannot start with
   *             <code>sg-</code>.</p>
   *          <p>Constraints for EC2-Classic: ASCII characters</p>
   *          <p>Constraints for EC2-VPC: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;{}!$*</p>
   */
  GroupName: string | undefined;

  /**
   * <p>[EC2-VPC] The ID of the VPC. Required for EC2-VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The tags to assign to the security group.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateSecurityGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSecurityGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateSecurityGroupResult {
  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The tags assigned to the security group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateSecurityGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSecurityGroupResult): any => ({
    ...obj,
  });
}

export interface CreateSnapshotRequest {
  /**
   * <p>A description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost on which to create a local
   *   	snapshot.</p>
   *   	      <ul>
   *             <li>
   *   			          <p>To create a snapshot of a volume in a Region, omit this parameter. The snapshot
   *   				is created in the same Region as the volume.</p>
   *   		        </li>
   *             <li>
   *   			          <p>To create a snapshot of a volume on an Outpost and store the snapshot in the
   *   				Region, omit this parameter. The snapshot is created in the Region for the
   *   				Outpost.</p>
   *   		        </li>
   *             <li>
   *   			          <p>To create a snapshot of a volume on an Outpost and store the snapshot on an
   *   			Outpost, specify the ARN of the destination Outpost. The snapshot must be created on
   *   			the same Outpost as the volume.</p>
   *   		        </li>
   *          </ul>
   *   	      <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#create-snapshot">Create local snapshots from volumes on an Outpost</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the Amazon EBS volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>The tags to apply to the snapshot during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSnapshotRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a snapshot.</p>
 */
export interface Snapshot {
  /**
   * <p>The data encryption key identifier for the snapshot. This value is a unique identifier
   *       that corresponds to the data encryption key that was used to encrypt the original volume or
   *       snapshot copy. Because data encryption keys are inherited by volumes created from snapshots,
   *       and vice versa, if snapshots share the same data encryption key identifier, then they belong
   *       to the same volume/snapshot lineage. This parameter is only returned by <a>DescribeSnapshots</a>.</p>
   */
  DataEncryptionKeyId?: string;

  /**
   * <p>The description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) KMS key that was used to protect the
   *       volume encryption key for the parent volume.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the EBS snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The progress of the snapshot, as a percentage.</p>
   */
  Progress?: string;

  /**
   * <p>The ID of the snapshot. Each snapshot receives a unique identifier when it is
   *       created.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The time stamp when the snapshot was initiated.</p>
   */
  StartTime?: Date;

  /**
   * <p>The snapshot state.</p>
   */
  State?: SnapshotState | string;

  /**
   * <p>Encrypted Amazon EBS snapshots are copied asynchronously. If a snapshot copy operation fails
   *       (for example, if the proper Key Management Service (KMS) permissions are not obtained) this field displays error
   *       state details to help you diagnose why the error occurred. This parameter is only returned by
   *       <a>DescribeSnapshots</a>.</p>
   */
  StateMessage?: string;

  /**
   * <p>The ID of the volume that was used to create the snapshot. Snapshots created by the <a>CopySnapshot</a> action have an arbitrary volume ID that should not be used for any
   *       purpose.</p>
   */
  VolumeId?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The Amazon Web Services owner alias, from an Amazon-maintained list (<code>amazon</code>). This is not
   *       the user-configured Amazon Web Services account alias set using the IAM console.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The ARN of the Outpost on which the snapshot is stored. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html">Amazon EBS local snapshots on Outposts</a> in the
   *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  OutpostArn?: string;

  /**
   * <p>Any tags assigned to the snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The storage tier in which the snapshot is stored. <code>standard</code> indicates
   *       that the snapshot is stored in the standard snapshot storage tier and that it is ready
   *       for use. <code>archive</code> indicates that the snapshot is currently archived and that
   *       it must be restored before it can be used.</p>
   */
  StorageTier?: StorageTier | string;

  /**
   * <p>Only for archived snapshots that are temporarily restored. Indicates the date and
   *       time when a temporarily restored snapshot will be automatically re-archived.</p>
   */
  RestoreExpiryTime?: Date;
}

export namespace Snapshot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Snapshot): any => ({
    ...obj,
  });
}

export interface CreateSnapshotsRequest {
  /**
   * <p> A description propagated to every snapshot specified by the instance.</p>
   */
  Description?: string;

  /**
   * <p>The instance to specify which volumes should be included in the snapshots.</p>
   */
  InstanceSpecification: InstanceSpecification | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost on which to create the local
   *   		snapshots.</p>
   *   	      <ul>
   *             <li>
   *   			          <p>To create snapshots from an instance in a Region, omit this parameter. The
   *   				snapshots are created in the same Region as the instance.</p>
   *   		        </li>
   *             <li>
   *   			          <p>To create snapshots from an instance on an Outpost and store the snapshots
   *   				in the Region, omit this parameter. The snapshots are created in the Region
   *   				for the Outpost.</p>
   *   		        </li>
   *             <li>
   *   			          <p>To create snapshots from an instance on an Outpost and store the snapshots
   *   				on an Outpost, specify the ARN of the destination Outpost. The snapshots must
   *   				be created on the same Outpost as the instance.</p>
   *   		        </li>
   *          </ul>
   *   	      <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#create-multivol-snapshot">
   *   		Create multi-volume local snapshots from instances on an Outpost</a> in the
   *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  OutpostArn?: string;

  /**
   * <p>Tags to apply to every snapshot specified by the instance.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Copies the tags from the specified volume to corresponding snapshot.</p>
   */
  CopyTagsFromSource?: CopyTagsFromSource | string;
}

export namespace CreateSnapshotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSnapshotsRequest): any => ({
    ...obj,
  });
}

export interface CreateSnapshotsResult {
  /**
   * <p>List of snapshots.</p>
   */
  Snapshots?: SnapshotInfo[];
}

export namespace CreateSnapshotsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSnapshotsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateSpotDatafeedSubscription.</p>
 */
export interface CreateSpotDatafeedSubscriptionRequest {
  /**
   * <p>The name of the Amazon S3 bucket in which to store the Spot Instance data feed. For
   *             more information about bucket names, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html#bucketnamingrules">Rules for bucket
   *                 naming</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The prefix for the data feed file names.</p>
   */
  Prefix?: string;
}

export namespace CreateSpotDatafeedSubscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSpotDatafeedSubscriptionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateSpotDatafeedSubscription.</p>
 */
export interface CreateSpotDatafeedSubscriptionResult {
  /**
   * <p>The Spot Instance data feed subscription.</p>
   */
  SpotDatafeedSubscription?: SpotDatafeedSubscription;
}

export namespace CreateSpotDatafeedSubscriptionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSpotDatafeedSubscriptionResult): any => ({
    ...obj,
  });
}

export interface CreateStoreImageTaskRequest {
  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket in which the AMI object will be stored. The bucket must be in
   *       the Region in which the request is being made. The AMI object appears in the bucket only after
   *       the upload task has completed. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The tags to apply to the AMI object that will be stored in the Amazon S3 bucket. </p>
   */
  S3ObjectTags?: S3ObjectTag[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateStoreImageTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStoreImageTaskRequest): any => ({
    ...obj,
  });
}

export interface CreateStoreImageTaskResult {
  /**
   * <p>The name of the stored AMI object in the S3 bucket.</p>
   */
  ObjectKey?: string;
}

export namespace CreateStoreImageTaskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStoreImageTaskResult): any => ({
    ...obj,
  });
}

export interface CreateSubnetRequest {
  /**
   * <p>The tags to assign to the subnet.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The Availability Zone or Local Zone for the subnet.</p>
   *          <p>Default: Amazon Web Services selects one for you. If you create more than one subnet in your VPC, we
   *           do not necessarily select a different zone for each subnet.</p>
   *          <p>To create a subnet in a Local Zone, set this value to the Local Zone ID, for example
   *           <code>us-west-2-lax-1a</code>. For information about the Regions that support Local Zones,
   *            see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions">Available Regions</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>To create a subnet in an Outpost, set this value to the Availability Zone for the
   *            Outpost and specify the Outpost ARN.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The AZ ID or the Local Zone ID of the subnet.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The IPv4 network range for the subnet, in CIDR notation. For example, <code>10.0.0.0/24</code>.
   *            We modify the specified CIDR block to its canonical form; for example, if you specify
   *            <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   *          <p>This parameter is not supported for an IPv6 only subnet.</p>
   */
  CidrBlock?: string;

  /**
   * <p>The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a
   *             /64 prefix length.</p>
   *         <p>This parameter is required for an IPv6 only subnet.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost. If you specify an Outpost ARN, you must also
   *         specify the Availability Zone of the Outpost subnet.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether to create an IPv6 only subnet.</p>
   */
  Ipv6Native?: boolean;
}

export namespace CreateSubnetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSubnetRequest): any => ({
    ...obj,
  });
}

export interface CreateSubnetResult {
  /**
   * <p>Information about the subnet.</p>
   */
  Subnet?: Subnet;
}

export namespace CreateSubnetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSubnetResult): any => ({
    ...obj,
  });
}

export interface CreateSubnetCidrReservationRequest {
  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The IPv4 or IPV6 CIDR range to reserve.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>The type of reservation.</p>
   *         <p>The following are valid values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>prefix</code>: The Amazon EC2
   *                     Prefix
   *                     Delegation feature assigns the IP addresses to network interfaces that are
   *                     associated with an instance. For information about Prefix
   *                     Delegation,
   *                     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-delegation.html">Prefix Delegation
   *                         for Amazon EC2 network interfaces</a> in the
   *                         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>explicit</code>: You manually assign the IP addresses to resources that
   *                     reside in your subnet. </p>
   *             </li>
   *          </ul>
   */
  ReservationType: SubnetCidrReservationType | string | undefined;

  /**
   * <p>The
   *             description
   *             to assign to the subnet CIDR reservation.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to assign to the subnet CIDR reservation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateSubnetCidrReservationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSubnetCidrReservationRequest): any => ({
    ...obj,
  });
}

export interface CreateSubnetCidrReservationResult {
  /**
   * <p>Information about the created subnet CIDR reservation.</p>
   */
  SubnetCidrReservation?: SubnetCidrReservation;
}

export namespace CreateSubnetCidrReservationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSubnetCidrReservationResult): any => ({
    ...obj,
  });
}

export interface CreateTagsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the resources, separated by spaces.</p>
   *    	     <p>Constraints: Up to 1000 resource IDs. We recommend breaking up this request into smaller batches.</p>
   */
  Resources: string[] | undefined;

  /**
   * <p>The tags. The <code>value</code> parameter is required, but if you don't want the tag to have a value,
   *         specify the parameter with no value, and we set the value to an empty string.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace CreateTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTagsRequest): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorFilterRequest {
  /**
   * <p>The description of the Traffic Mirror filter.</p>
   */
  Description?: string;

  /**
   * <p>The tags to assign to a Traffic Mirror filter.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorFilterRequest): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorFilterResult {
  /**
   * <p>Information about the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilter?: TrafficMirrorFilter;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorFilterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorFilterResult): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the filter that this rule is associated with.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The type of traffic.</p>
   */
  TrafficDirection: TrafficDirection | string | undefined;

  /**
   * <p>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given
   *          direction. The rules are processed in ascending order by rule number.</p>
   */
  RuleNumber: number | undefined;

  /**
   * <p>The action to take on the filtered traffic.</p>
   */
  RuleAction: TrafficMirrorRuleAction | string | undefined;

  /**
   * <p>The destination port range.</p>
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest;

  /**
   * <p>The source port range.</p>
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest;

  /**
   * <p>The protocol, for example UDP, to assign to the Traffic Mirror rule.</p>
   *          <p>For information about the protocol value, see <a href="https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a> on the  Internet Assigned Numbers Authority (IANA) website.</p>
   */
  Protocol?: number;

  /**
   * <p>The destination CIDR block to assign to the Traffic Mirror rule.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The source CIDR block to assign to the Traffic Mirror rule.</p>
   */
  SourceCidrBlock: string | undefined;

  /**
   * <p>The description of the Traffic Mirror rule.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorFilterRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorFilterRuleRequest): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorFilterRuleResult {
  /**
   * <p>The Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorFilterRuleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorFilterRuleResult): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the source network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do
   *          not specify this parameter when you want to mirror the entire packet. To mirror a subset of
   *          the packet, set this to the length (in bytes) that you want to mirror. For example, if you
   *          set this value to 100, then the first 100 bytes that meet the filter criteria are copied to
   *          the target.</p>
   *          <p>If you do not want to mirror the entire packet, use the <code>PacketLength</code> parameter to specify the number of bytes in each packet to mirror.</p>
   */
  PacketLength?: number;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   */
  SessionNumber: number | undefined;

  /**
   * <p>The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN
   *          protocol, see <a href="https://tools.ietf.org/html/rfc7348">RFC 7348</a>. If you do
   *          not specify a <code>VirtualNetworkId</code>, an account-wide unique id is chosen at
   *          random.</p>
   */
  VirtualNetworkId?: number;

  /**
   * <p>The description of the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * <p>The tags to assign to a Traffic Mirror session.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorSessionRequest): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorSessionResult {
  /**
   * <p>Information about the Traffic Mirror session.</p>
   */
  TrafficMirrorSession?: TrafficMirrorSession;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorSessionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorSessionResult): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorTargetRequest {
  /**
   * <p>The network interface ID that is associated with the target.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.</p>
   */
  NetworkLoadBalancerArn?: string;

  /**
   * <p>The description of the Traffic Mirror target.</p>
   */
  Description?: string;

  /**
   * <p>The tags to assign to the Traffic Mirror target.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the Gateway Load Balancer endpoint.</p>
   */
  GatewayLoadBalancerEndpointId?: string;
}

export namespace CreateTrafficMirrorTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorTargetRequest): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorTargetResult {
  /**
   * <p>Information about the Traffic Mirror target.</p>
   */
  TrafficMirrorTarget?: TrafficMirrorTarget;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorTargetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorTargetResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRequest {
  /**
   * <p>A description of the transit gateway.</p>
   */
  Description?: string;

  /**
   * <p>The transit gateway options.</p>
   */
  Options?: TransitGatewayRequestOptions;

  /**
   * <p>The tags to apply to the transit gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayRequest): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayResult {
  /**
   * <p>Information about the transit gateway.</p>
   */
  TransitGateway?: TransitGateway;
}

export namespace CreateTransitGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayConnectRequest {
  /**
   * <p>The ID of the transit gateway attachment. You can specify a VPC attachment or Amazon Web Services Direct Connect attachment.</p>
   */
  TransportTransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The Connect attachment options.</p>
   */
  Options: CreateTransitGatewayConnectRequestOptions | undefined;

  /**
   * <p>The tags to apply to the Connect attachment.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayConnectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayConnectRequest): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayConnectResult {
  /**
   * <p>Information about the Connect attachment.</p>
   */
  TransitGatewayConnect?: TransitGatewayConnect;
}

export namespace CreateTransitGatewayConnectResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayConnectResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The peer IP address (GRE outer IP address) on the transit gateway side of the Connect peer, which must be
   *             specified from a transit gateway CIDR block. If not specified, Amazon automatically assigns
   *             the first available IP address from the transit gateway CIDR block.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * <p>The peer IP address (GRE outer IP address) on the appliance side of the Connect peer.</p>
   */
  PeerAddress: string | undefined;

  /**
   * <p>The BGP options for the Connect peer.</p>
   */
  BgpOptions?: TransitGatewayConnectRequestBgpOptions;

  /**
   * <p>The range of inside IP addresses that are used for BGP peering. You must specify a
   *             size /29 IPv4 CIDR block from the <code>169.254.0.0/16</code> range. The first address
   *             from the range must be configured on the appliance as the BGP IP address. You can also
   *             optionally specify a size /125 IPv6 CIDR block from the <code>fd00::/8</code>
   *             range.</p>
   */
  InsideCidrBlocks: string[] | undefined;

  /**
   * <p>The tags to apply to the Connect peer.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayConnectPeerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayConnectPeerRequest): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayConnectPeerResult {
  /**
   * <p>Information about the Connect peer.</p>
   */
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer;
}

export namespace CreateTransitGatewayConnectPeerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayConnectPeerResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The options for the transit gateway multicast domain.</p>
   */
  Options?: CreateTransitGatewayMulticastDomainRequestOptions;

  /**
   * <p>The tags for the transit gateway multicast domain.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayMulticastDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayMulticastDomainRequest): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain;
}

export namespace CreateTransitGatewayMulticastDomainResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayMulticastDomainResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The ID of the peer transit gateway with which to create the peering attachment.</p>
   */
  PeerTransitGatewayId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the peer transit gateway.</p>
   */
  PeerAccountId: string | undefined;

  /**
   * <p>The Region where the peer transit gateway is located.</p>
   */
  PeerRegion: string | undefined;

  /**
   * <p>The tags to apply to the transit gateway peering attachment.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayPeeringAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayPeeringAttachmentRequest): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

export namespace CreateTransitGatewayPeeringAttachmentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayPeeringAttachmentResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list that is used for destination matches.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The ID of the attachment to which traffic is routed.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayPrefixListReferenceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayPrefixListReferenceRequest): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the prefix list reference.</p>
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}

export namespace CreateTransitGatewayPrefixListReferenceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayPrefixListReferenceResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRouteRequest {
  /**
   * <p>The CIDR range used for destination matches. Routing decisions are based on the
   *          most specific match.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayRouteRequest): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: TransitGatewayRoute;
}

export namespace CreateTransitGatewayRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayRouteResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The tags to apply to the transit gateway route table.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayRouteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayRouteTableRequest): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRouteTableResult {
  /**
   * <p>Information about the transit gateway route table.</p>
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable;
}

export namespace CreateTransitGatewayRouteTableResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayRouteTableResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The IDs of one or more subnets. You can specify only one subnet per Availability Zone.
   *          You must specify at least one subnet, but we recommend that you specify two subnets for better availability.
   *          The transit gateway uses one IP address from each specified subnet.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The VPC attachment options.</p>
   */
  Options?: CreateTransitGatewayVpcAttachmentRequestOptions;

  /**
   * <p>The tags to apply to the VPC attachment.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayVpcAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayVpcAttachmentRequest): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the VPC attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export namespace CreateTransitGatewayVpcAttachmentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayVpcAttachmentResult): any => ({
    ...obj,
  });
}

export interface CreateVolumeRequest {
  /**
   * <p>The Availability Zone in which to create the volume.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>Indicates whether the volume should be encrypted.
   *       The effect of setting the encryption state to <code>true</code> depends on
   * the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled.
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default">Encryption by default</a>
   *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption.
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported
   *         instance types</a>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents
   *       the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline
   *       performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000-16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100-64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100-64,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>io1</code> and <code>io2</code> volumes support up to 64,000 IOPS only on
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a>. Other instance families support performance
   *       up to 32,000 IOPS.</p>
   *          <p>This parameter is required for <code>io1</code> and <code>io2</code> volumes.
   *       The default for <code>gp3</code> volumes is 3,000 IOPS.
   *       This parameter is not supported for <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The identifier of the Key Management Service (KMS) KMS key to use for Amazon EBS encryption.
   *       If this parameter is not specified, your KMS key for Amazon EBS is used. If <code>KmsKeyId</code> is
   *       specified, the encrypted state must be <code>true</code>.</p>
   *          <p>You can specify the KMS key using any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Key alias. For example, alias/ExampleAlias.</p>
   *             </li>
   *             <li>
   *                <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size.
   *       If you specify a snapshot, the default is the snapshot size. You can specify a volume
   *       size that is equal to or larger than the snapshot size.</p>
   *          <p>The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code> and <code>io2</code>: 4-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1-1,024</p>
   *             </li>
   *          </ul>
   */
  Size?: number;

  /**
   * <p>The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The volume type. This parameter can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>General Purpose SSD: <code>gp2</code> | <code>gp3</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Provisioned IOPS SSD: <code>io1</code> | <code>io2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Throughput Optimized HDD: <code>st1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Cold HDD: <code>sc1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Magnetic: <code>standard</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Default: <code>gp2</code>
   *          </p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply to the volume during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Indicates whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the
   *     	volume to up to 16 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a> in the same Availability Zone. This parameter is
   *     	supported with <code>io1</code> and <code>io2</code> volumes only. For more information,
   *     	see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html">
   *     		Amazon EBS Multi-Attach</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MultiAttachEnabled?: boolean;

  /**
   * <p>The throughput to provision for a volume, with a maximum of 1,000 MiB/s.</p>
   *          <p>This parameter is valid only for <code>gp3</code> volumes.</p>
   *   	      <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency
   *       of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure
   *         Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateVolumeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVolumeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a volume.</p>
 */
export interface Volume {
  /**
   * <p>Information about the volume attachments.</p>
   */
  Attachments?: VolumeAttachment[];

  /**
   * <p>The Availability Zone for the volume.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The time stamp when volume creation was initiated.</p>
   */
  CreateTime?: Date;

  /**
   * <p>Indicates whether the volume is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) KMS key that was used to protect the
   *       volume encryption key for the volume.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The size of the volume, in GiBs.</p>
   */
  Size?: number;

  /**
   * <p>The snapshot from which the volume was created, if applicable.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The volume state.</p>
   */
  State?: VolumeState | string;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents
   *       the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline
   *       performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</p>
   */
  Iops?: number;

  /**
   * <p>Any tags assigned to the volume.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The volume type.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Indicates whether the volume was created using fast snapshot restore.</p>
   */
  FastRestored?: boolean;

  /**
   * <p>Indicates whether Amazon EBS Multi-Attach is enabled.</p>
   */
  MultiAttachEnabled?: boolean;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   */
  Throughput?: number;
}

export namespace Volume {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Volume): any => ({
    ...obj,
  });
}

export interface CreateVpcRequest {
  /**
   * <p>The IPv4 network range for the VPC, in CIDR notation. For example,
   * 		        <code>10.0.0.0/16</code>. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.
   *             You cannot specify the range of IP addresses, or the size of the CIDR block.</p>
   */
  AmazonProvidedIpv6CidrBlock?: boolean;

  /**
   * <p>The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.</p>
   */
  Ipv6Pool?: string;

  /**
   * <p>The IPv6 CIDR block from the IPv6 address pool. You must also specify <code>Ipv6Pool</code> in the request.</p>
   *         <p>To let Amazon choose the IPv6 CIDR block for you, omit this parameter.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. For more information, see <a href="/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *
   *       </p>
   */
  Ipv4IpamPoolId?: string;

  /**
   * <p>The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  Ipv4NetmaskLength?: number;

  /**
   * <p>The ID of an IPv6 IPAM pool which will be used to allocate this VPC an IPv6 CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see <a href="/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  Ipv6IpamPoolId?: string;

  /**
   * <p>The netmask length of the IPv6 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  Ipv6NetmaskLength?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tenancy options for instances launched into the VPC. For <code>default</code>, instances
   *       are launched with shared tenancy by default. You can launch instances with any tenancy into a
   *       shared tenancy VPC. For <code>dedicated</code>, instances are launched as dedicated tenancy
   *       instances by default. You can only launch instances with a tenancy of <code>dedicated</code>
   *       or <code>host</code> into a dedicated tenancy VPC. </p>
   *          <p>
   *             <b>Important:</b> The <code>host</code> value cannot be used with this parameter. Use the <code>default</code> or <code>dedicated</code> values only.</p>
   *          <p>Default: <code>default</code>
   *          </p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>The name of the location from which we advertise the IPV6 CIDR block. Use this parameter to limit the address to this location.</p>
   *          <p> You must set <code>AmazonProvidedIpv6CidrBlock</code> to <code>true</code> to use this parameter.</p>
   */
  Ipv6CidrBlockNetworkBorderGroup?: string;

  /**
   * <p>The tags to assign to the VPC.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpcRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcRequest): any => ({
    ...obj,
  });
}

export interface CreateVpcResult {
  /**
   * <p>Information about the VPC.</p>
   */
  Vpc?: Vpc;
}

export namespace CreateVpcResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateVpcEndpoint.</p>
 */
export interface CreateVpcEndpointRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of endpoint.</p>
   *         <p>Default: Gateway</p>
   */
  VpcEndpointType?: VpcEndpointType | string;

  /**
   * <p>The ID of the VPC in which the endpoint will be used.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The service name. To get a list of available services, use the <a>DescribeVpcEndpointServices</a> request, or get the name from the service
   *             provider.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>(Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the
   *             service. The policy must be in valid JSON format. If this parameter is not specified, we
   *             attach a default policy that allows full access to the service.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>(Gateway endpoint) One or more route table IDs.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>(Interface and Gateway Load Balancer endpoints) The ID of one or more subnets in which to create an endpoint
   *             network interface. For a Gateway Load Balancer endpoint, you can specify one subnet only.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>(Interface endpoint) The ID of one or more security groups to associate with the
   *             endpoint network interface.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The IP address type for the endpoint.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>The DNS options for the endpoint.</p>
   */
  DnsOptions?: DnsOptionsSpecification;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>(Interface endpoint) Indicates whether to associate a private hosted zone with the
   *             specified VPC. The private hosted zone contains a record set for the default public DNS
   *             name for the service for the Region (for example,
   *                 <code>kinesis.us-east-1.amazonaws.com</code>), which resolves to the private IP
   *             addresses of the endpoint network interfaces in the VPC. This enables you to make
   *             requests to the default public DNS name for the service instead of the public DNS names
   *             that are automatically generated by the VPC endpoint service.</p>
   *         <p>To use a private hosted zone, you must set the following VPC attributes to
   *             <code>true</code>: <code>enableDnsHostnames</code> and
   *             <code>enableDnsSupport</code>. Use <a>ModifyVpcAttribute</a> to set the VPC
   *             attributes.</p>
   *         <p>Default: <code>true</code>
   *          </p>
   */
  PrivateDnsEnabled?: boolean;

  /**
   * <p>The tags to associate with the endpoint.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpcEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcEndpointRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateVpcEndpoint.</p>
 */
export interface CreateVpcEndpointResult {
  /**
   * <p>Information about the endpoint.</p>
   */
  VpcEndpoint?: VpcEndpoint;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace CreateVpcEndpointResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcEndpointResult): any => ({
    ...obj,
  });
}

export interface CreateVpcEndpointConnectionNotificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The ARN of the SNS topic for the notifications.</p>
   */
  ConnectionNotificationArn: string | undefined;

  /**
   * <p>One or more endpoint events for which to receive notifications. Valid values are
   *                 <code>Accept</code>, <code>Connect</code>, <code>Delete</code>, and
   *                 <code>Reject</code>.</p>
   */
  ConnectionEvents: string[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateVpcEndpointConnectionNotificationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcEndpointConnectionNotificationRequest): any => ({
    ...obj,
  });
}

export interface CreateVpcEndpointConnectionNotificationResult {
  /**
   * <p>Information about the notification.</p>
   */
  ConnectionNotification?: ConnectionNotification;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace CreateVpcEndpointConnectionNotificationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcEndpointConnectionNotificationResult): any => ({
    ...obj,
  });
}

export interface CreateVpcEndpointServiceConfigurationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether requests from service consumers to create an endpoint to your service must
   *             be accepted manually.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>(Interface endpoint configuration) The private DNS name to assign to the VPC endpoint service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more Network Load Balancers for your
   *             service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more Gateway Load Balancers.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * <p>The supported IP address types. The possible values are <code>ipv4</code> and <code>ipv6</code>.</p>
   */
  SupportedIpAddressTypes?: string[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to associate with the service.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpcEndpointServiceConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcEndpointServiceConfigurationRequest): any => ({
    ...obj,
  });
}

export interface CreateVpcEndpointServiceConfigurationResult {
  /**
   * <p>Information about the service configuration.</p>
   */
  ServiceConfiguration?: ServiceConfiguration;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace CreateVpcEndpointServiceConfigurationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcEndpointServiceConfigurationResult): any => ({
    ...obj,
  });
}

export interface CreateVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Amazon Web Services account ID of the owner of the accepter VPC.</p>
   *          <p>Default: Your Amazon Web Services account ID</p>
   */
  PeerOwnerId?: string;

  /**
   * <p>The ID of the VPC with which you are creating the VPC peering connection. You must
   * 			specify this parameter in the request.</p>
   */
  PeerVpcId?: string;

  /**
   * <p>The ID of the requester VPC. You must specify this parameter in the
   * 			request.</p>
   */
  VpcId?: string;

  /**
   * <p>The Region code for the accepter VPC, if the accepter VPC is located in a Region
   *             other than the Region in which you make the request.</p>
   * 		       <p>Default: The Region in which you make the request.</p>
   */
  PeerRegion?: string;

  /**
   * <p>The tags to assign to the peering connection.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpcPeeringConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcPeeringConnectionRequest): any => ({
    ...obj,
  });
}

export interface CreateVpcPeeringConnectionResult {
  /**
   * <p>Information about the VPC peering connection.</p>
   */
  VpcPeeringConnection?: VpcPeeringConnection;
}

export namespace CreateVpcPeeringConnectionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcPeeringConnectionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateVpnConnection.</p>
 */
export interface CreateVpnConnectionRequest {
  /**
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId: string | undefined;

  /**
   * <p>The type of VPN connection (<code>ipsec.1</code>).</p>
   */
  Type: string | undefined;

  /**
   * <p>The ID of the virtual private gateway. If you specify a virtual private gateway, you
   *             cannot specify a transit gateway.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The ID of the transit gateway. If you specify a transit gateway, you cannot specify a virtual private
   *             gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The options for the VPN connection.</p>
   */
  Options?: VpnConnectionOptionsSpecification;

  /**
   * <p>The tags to apply to the VPN connection.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpnConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpnConnectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateVpnConnection.</p>
 */
export interface CreateVpnConnectionResult {
  /**
   * <p>Information about the VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

export namespace CreateVpnConnectionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpnConnectionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateVpnConnectionRoute.</p>
 */
export interface CreateVpnConnectionRouteRequest {
  /**
   * <p>The CIDR block associated with the local subnet of the customer network.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;
}

export namespace CreateVpnConnectionRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpnConnectionRouteRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateVpnGateway.</p>
 */
export interface CreateVpnGatewayRequest {
  /**
   * <p>The Availability Zone for the virtual private gateway.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The type of VPN connection this virtual private gateway supports.</p>
   */
  Type: GatewayType | string | undefined;

  /**
   * <p>The tags to apply to the virtual private gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session. If
   *             you're using a 16-bit ASN, it must be in the 64512 to 65534 range. If you're using a
   *             32-bit ASN, it must be in the 4200000000 to 4294967294 range.</p>
   *         <p>Default: 64512</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateVpnGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpnGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateVpnGateway.</p>
 */
export interface CreateVpnGatewayResult {
  /**
   * <p>Information about the virtual private gateway.</p>
   */
  VpnGateway?: VpnGateway;
}

export namespace CreateVpnGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpnGatewayResult): any => ({
    ...obj,
  });
}

export interface DeleteCarrierGatewayRequest {
  /**
   * <p>The ID of the carrier gateway.</p>
   */
  CarrierGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteCarrierGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCarrierGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteCarrierGatewayResult {
  /**
   * <p>Information about the carrier gateway.</p>
   */
  CarrierGateway?: CarrierGateway;
}

export namespace DeleteCarrierGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCarrierGatewayResult): any => ({
    ...obj,
  });
}

export interface DeleteClientVpnEndpointRequest {
  /**
   * <p>The ID of the Client VPN to be deleted.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteClientVpnEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClientVpnEndpointRequest): any => ({
    ...obj,
  });
}

export interface DeleteClientVpnEndpointResult {
  /**
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: ClientVpnEndpointStatus;
}

export namespace DeleteClientVpnEndpointResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClientVpnEndpointResult): any => ({
    ...obj,
  });
}

export interface DeleteClientVpnRouteRequest {
  /**
   * <p>The ID of the Client VPN endpoint from which the route is to be deleted.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the target subnet used by the route.</p>
   */
  TargetVpcSubnetId?: string;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the route to be deleted.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteClientVpnRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClientVpnRouteRequest): any => ({
    ...obj,
  });
}

export interface DeleteClientVpnRouteResult {
  /**
   * <p>The current state of the route.</p>
   */
  Status?: ClientVpnRouteStatus;
}

export namespace DeleteClientVpnRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClientVpnRouteResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteCustomerGateway.</p>
 */
export interface DeleteCustomerGatewayRequest {
  /**
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteCustomerGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomerGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteDhcpOptionsRequest {
  /**
   * <p>The ID of the DHCP options set.</p>
   */
  DhcpOptionsId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteDhcpOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDhcpOptionsRequest): any => ({
    ...obj,
  });
}

export interface DeleteEgressOnlyInternetGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId: string | undefined;
}

export namespace DeleteEgressOnlyInternetGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEgressOnlyInternetGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteEgressOnlyInternetGatewayResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnCode?: boolean;
}

export namespace DeleteEgressOnlyInternetGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEgressOnlyInternetGatewayResult): any => ({
    ...obj,
  });
}

export interface DeleteFleetsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the EC2 Fleets.</p>
   */
  FleetIds: string[] | undefined;

  /**
   * <p>Indicates whether to terminate the instances when the EC2 Fleet is deleted. The default is to
   *          terminate the instances.</p>
   *          <p>To let the instances continue to run after the EC2 Fleet is deleted, specify
   *             <code>NoTerminateInstances</code>. Supported only for fleets of type
   *             <code>maintain</code> and <code>request</code>.</p>
   *          <p>For <code>instant</code> fleets, you cannot specify <code>NoTerminateInstances</code>. A
   *          deleted <code>instant</code> fleet with running instances is not supported.</p>
   */
  TerminateInstances: boolean | undefined;
}

export namespace DeleteFleetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetsRequest): any => ({
    ...obj,
  });
}

export interface DeleteFleetsResult {
  /**
   * <p>Information about the EC2 Fleets that are successfully deleted.</p>
   */
  SuccessfulFleetDeletions?: DeleteFleetSuccessItem[];

  /**
   * <p>Information about the EC2 Fleets that are not successfully deleted.</p>
   */
  UnsuccessfulFleetDeletions?: DeleteFleetErrorItem[];
}

export namespace DeleteFleetsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetsResult): any => ({
    ...obj,
  });
}

export interface DeleteFlowLogsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more flow log IDs.</p>
   *         <p>Constraint: Maximum of 1000 flow log IDs.</p>
   */
  FlowLogIds: string[] | undefined;
}

export namespace DeleteFlowLogsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFlowLogsRequest): any => ({
    ...obj,
  });
}

export interface DeleteFlowLogsResult {
  /**
   * <p>Information about the flow logs that could not be deleted successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace DeleteFlowLogsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFlowLogsResult): any => ({
    ...obj,
  });
}

export interface DeleteFpgaImageRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string | undefined;
}

export namespace DeleteFpgaImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFpgaImageRequest): any => ({
    ...obj,
  });
}

export interface DeleteFpgaImageResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export namespace DeleteFpgaImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFpgaImageResult): any => ({
    ...obj,
  });
}

export interface DeleteInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specify <code>true</code> to force delete the event window. Use the force delete parameter
   *          if the event window is currently associated with targets.</p>
   */
  ForceDelete?: boolean;

  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId: string | undefined;
}

export namespace DeleteInstanceEventWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInstanceEventWindowRequest): any => ({
    ...obj,
  });
}

export interface DeleteInstanceEventWindowResult {
  /**
   * <p>The state of the event window.</p>
   */
  InstanceEventWindowState?: InstanceEventWindowStateChange;
}

export namespace DeleteInstanceEventWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInstanceEventWindowResult): any => ({
    ...obj,
  });
}

export interface DeleteInternetGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the internet gateway.</p>
   */
  InternetGatewayId: string | undefined;
}

export namespace DeleteInternetGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInternetGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteIpamRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the IPAM to delete.</p>
   */
  IpamId: string | undefined;

  /**
   * <p>Enables you to quickly delete an IPAM, private scopes, pools in private scopes, and
   *          any allocations in the pools in private scopes. You cannot delete the IPAM with this option if there is a pool in your public scope. If you use this option, IPAM does the following:</p>
   *          <ul>
   *             <li>
   *                <p>Deallocates any CIDRs allocated to VPC resources (such as VPCs) in pools in private scopes.</p>
   *                <note>
   *                   <p>No VPC resources are deleted as a result of enabling this option. The CIDR associated with the resource will no longer be allocated from an IPAM pool, but the CIDR itself will remain unchanged.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>Deprovisions all IPv4 CIDRs provisioned to IPAM pools in private scopes.</p>
   *             </li>
   *             <li>
   *                <p>Deletes all IPAM pools in private scopes.</p>
   *             </li>
   *             <li>
   *                <p>Deletes all non-default private scopes in the IPAM.</p>
   *             </li>
   *             <li>
   *                <p>Deletes the default public and private scopes and the IPAM.</p>
   *             </li>
   *          </ul>
   */
  Cascade?: boolean;
}

export namespace DeleteIpamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIpamRequest): any => ({
    ...obj,
  });
}

export interface DeleteIpamResult {
  /**
   * <p>Information about the results of the deletion.</p>
   */
  Ipam?: Ipam;
}

export namespace DeleteIpamResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIpamResult): any => ({
    ...obj,
  });
}

export interface DeleteIpamPoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the pool to delete.</p>
   */
  IpamPoolId: string | undefined;
}

export namespace DeleteIpamPoolRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIpamPoolRequest): any => ({
    ...obj,
  });
}

export interface DeleteIpamPoolResult {
  /**
   * <p>Information about the results of the deletion.</p>
   */
  IpamPool?: IpamPool;
}

export namespace DeleteIpamPoolResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIpamPoolResult): any => ({
    ...obj,
  });
}

export interface DeleteIpamScopeRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the scope to delete.</p>
   */
  IpamScopeId: string | undefined;
}

export namespace DeleteIpamScopeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIpamScopeRequest): any => ({
    ...obj,
  });
}

export interface DeleteIpamScopeResult {
  /**
   * <p>Information about the results of the deletion.</p>
   */
  IpamScope?: IpamScope;
}

export namespace DeleteIpamScopeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIpamScopeResult): any => ({
    ...obj,
  });
}

export interface DeleteKeyPairRequest {
  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKeyPairRequest): any => ({
    ...obj,
  });
}

export interface DeleteLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateName?: string;
}

export namespace DeleteLaunchTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: LaunchTemplate;
}

export namespace DeleteLaunchTemplateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateResult): any => ({
    ...obj,
  });
}

export interface DeleteLaunchTemplateVersionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version numbers of one or more launch template versions to delete.</p>
   */
  Versions: string[] | undefined;
}

export namespace DeleteLaunchTemplateVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateVersionsRequest): any => ({
    ...obj,
  });
}

export interface DeleteLaunchTemplateVersionsResult {
  /**
   * <p>Information about the launch template versions that were successfully deleted.</p>
   */
  SuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseSuccessItem[];

  /**
   * <p>Information about the launch template versions that could not be deleted.</p>
   */
  UnsuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseErrorItem[];
}

export namespace DeleteLaunchTemplateVersionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateVersionsResult): any => ({
    ...obj,
  });
}

export interface DeleteLocalGatewayRouteRequest {
  /**
   * <p>The CIDR range for the route. This must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteLocalGatewayRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLocalGatewayRouteRequest): any => ({
    ...obj,
  });
}

export interface DeleteLocalGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: LocalGatewayRoute;
}

export namespace DeleteLocalGatewayRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLocalGatewayRouteResult): any => ({
    ...obj,
  });
}

export interface DeleteLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVpcAssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLocalGatewayRouteTableVpcAssociationRequest): any => ({
    ...obj,
  });
}

export interface DeleteLocalGatewayRouteTableVpcAssociationResult {
  /**
   * <p>Information about the association.</p>
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;
}

export namespace DeleteLocalGatewayRouteTableVpcAssociationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLocalGatewayRouteTableVpcAssociationResult): any => ({
    ...obj,
  });
}

export interface DeleteManagedPrefixListRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;
}

export namespace DeleteManagedPrefixListRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteManagedPrefixListRequest): any => ({
    ...obj,
  });
}

export interface DeleteManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

export namespace DeleteManagedPrefixListResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteManagedPrefixListResult): any => ({
    ...obj,
  });
}

export interface DeleteNatGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId: string | undefined;
}

export namespace DeleteNatGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNatGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteNatGatewayResult {
  /**
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId?: string;
}

export namespace DeleteNatGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNatGatewayResult): any => ({
    ...obj,
  });
}

export interface DeleteNetworkAclRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;
}

export namespace DeleteNetworkAclRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkAclRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkAclEntryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether the rule is an egress rule.</p>
   */
  Egress: boolean | undefined;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;

  /**
   * <p>The rule number of the entry to delete.</p>
   */
  RuleNumber: number | undefined;
}

export namespace DeleteNetworkAclEntryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkAclEntryRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkInsightsAccessScopeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId: string | undefined;
}

export namespace DeleteNetworkInsightsAccessScopeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInsightsAccessScopeRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkInsightsAccessScopeResult {
  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;
}

export namespace DeleteNetworkInsightsAccessScopeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInsightsAccessScopeResult): any => ({
    ...obj,
  });
}

export interface DeleteNetworkInsightsAccessScopeAnalysisRequest {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteNetworkInsightsAccessScopeAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInsightsAccessScopeAnalysisRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkInsightsAccessScopeAnalysisResult {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId?: string;
}

export namespace DeleteNetworkInsightsAccessScopeAnalysisResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInsightsAccessScopeAnalysisResult): any => ({
    ...obj,
  });
}

export interface DeleteNetworkInsightsAnalysisRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisId: string | undefined;
}

export namespace DeleteNetworkInsightsAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInsightsAnalysisRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkInsightsAnalysisResult {
  /**
   * <p>The ID of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisId?: string;
}

export namespace DeleteNetworkInsightsAnalysisResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInsightsAnalysisResult): any => ({
    ...obj,
  });
}

export interface DeleteNetworkInsightsPathRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId: string | undefined;
}

export namespace DeleteNetworkInsightsPathRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInsightsPathRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkInsightsPathResult {
  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId?: string;
}

export namespace DeleteNetworkInsightsPathResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInsightsPathResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteNetworkInterface.</p>
 */
export interface DeleteNetworkInterfaceRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

export namespace DeleteNetworkInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInterfaceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteNetworkInterfacePermission.</p>
 */
export interface DeleteNetworkInterfacePermissionRequest {
  /**
   * <p>The ID of the network interface permission.</p>
   */
  NetworkInterfacePermissionId: string | undefined;

  /**
   * <p>Specify <code>true</code> to remove the permission even if the network interface is
   * 			attached to an instance.</p>
   */
  Force?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteNetworkInterfacePermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInterfacePermissionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output for DeleteNetworkInterfacePermission.</p>
 */
export interface DeleteNetworkInterfacePermissionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds, otherwise returns an error.</p>
   */
  Return?: boolean;
}

export namespace DeleteNetworkInterfacePermissionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInterfacePermissionResult): any => ({
    ...obj,
  });
}

export interface DeletePlacementGroupRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The name of the placement group.</p>
   */
  GroupName: string | undefined;
}

export namespace DeletePlacementGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePlacementGroupRequest): any => ({
    ...obj,
  });
}

export interface DeletePublicIpv4PoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the public IPv4 pool you want to delete.</p>
   */
  PoolId: string | undefined;
}

export namespace DeletePublicIpv4PoolRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePublicIpv4PoolRequest): any => ({
    ...obj,
  });
}

export interface DeletePublicIpv4PoolResult {
  /**
   * <p>Information about the result of deleting the public IPv4 pool.</p>
   */
  ReturnValue?: boolean;
}

export namespace DeletePublicIpv4PoolResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePublicIpv4PoolResult): any => ({
    ...obj,
  });
}

export interface DeleteQueuedReservedInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the Reserved Instances.</p>
   */
  ReservedInstancesIds: string[] | undefined;
}

export namespace DeleteQueuedReservedInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteQueuedReservedInstancesRequest): any => ({
    ...obj,
  });
}

export interface DeleteQueuedReservedInstancesResult {
  /**
   * <p>Information about the queued purchases that were successfully deleted.</p>
   */
  SuccessfulQueuedPurchaseDeletions?: SuccessfulQueuedPurchaseDeletion[];

  /**
   * <p>Information about the queued purchases that could not be deleted.</p>
   */
  FailedQueuedPurchaseDeletions?: FailedQueuedPurchaseDeletion[];
}

export namespace DeleteQueuedReservedInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteQueuedReservedInstancesResult): any => ({
    ...obj,
  });
}

export interface DeleteRouteRequest {
  /**
   * <p>The IPv4 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The ID of the prefix list for the route.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;
}

export namespace DeleteRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRouteRequest): any => ({
    ...obj,
  });
}

export interface DeleteRouteTableRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;
}

export namespace DeleteRouteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRouteTableRequest): any => ({
    ...obj,
  });
}

export interface DeleteSecurityGroupRequest {
  /**
   * <p>The ID of the security group. Required for a nondefault VPC.</p>
   */
  GroupId?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the security group. You can specify either the security group name or the security group ID.</p>
   */
  GroupName?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteSecurityGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSecurityGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteSnapshotRequest {
  /**
   * <p>The ID of the EBS snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSnapshotRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteSpotDatafeedSubscription.</p>
 */
export interface DeleteSpotDatafeedSubscriptionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteSpotDatafeedSubscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSpotDatafeedSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface DeleteSubnetRequest {
  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteSubnetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSubnetRequest): any => ({
    ...obj,
  });
}

export interface DeleteSubnetCidrReservationRequest {
  /**
   * <p>The ID of the subnet CIDR reservation.</p>
   */
  SubnetCidrReservationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteSubnetCidrReservationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSubnetCidrReservationRequest): any => ({
    ...obj,
  });
}

export interface DeleteSubnetCidrReservationResult {
  /**
   * <p>Information about the deleted subnet CIDR reservation.</p>
   */
  DeletedSubnetCidrReservation?: SubnetCidrReservation;
}

export namespace DeleteSubnetCidrReservationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSubnetCidrReservationResult): any => ({
    ...obj,
  });
}

export interface DeleteTagsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the resources, separated by spaces.</p>
   *    	     <p>Constraints: Up to 1000 resource IDs. We recommend breaking up this request into smaller batches.</p>
   */
  Resources: string[] | undefined;

  /**
   * <p>The tags to delete. Specify a tag key and an optional tag value to delete
   *             specific tags. If you specify a tag key without a tag value, we delete any tag with this
   *             key regardless of its value. If you specify a tag key with an empty string as the tag
   *             value, we delete the tag only if its value is an empty string.</p>
   *         <p>If you omit this parameter, we delete all user-defined tags for the specified
   *             resources. We do not delete Amazon Web Services-generated tags (tags that have the <code>aws:</code>
   *             prefix).</p>
   *          <p>Constraints: Up to 1000 tags.</p>
   */
  Tags?: Tag[];
}

export namespace DeleteTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTagsRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorFilterRequest {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTrafficMirrorFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorFilterRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorFilterResult {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;
}

export namespace DeleteTrafficMirrorFilterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorFilterResult): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTrafficMirrorFilterRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorFilterRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorFilterRuleResult {
  /**
   * <p>The ID of the deleted Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId?: string;
}

export namespace DeleteTrafficMirrorFilterRuleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorFilterRuleResult): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTrafficMirrorSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorSessionRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorSessionResult {
  /**
   * <p>The ID of the deleted Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId?: string;
}

export namespace DeleteTrafficMirrorSessionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorSessionResult): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorTargetRequest {
  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTrafficMirrorTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorTargetRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorTargetResult {
  /**
   * <p>The ID of the deleted Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;
}

export namespace DeleteTrafficMirrorTargetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorTargetResult): any => ({
    ...obj,
  });
}
