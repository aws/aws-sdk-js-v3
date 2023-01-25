// smithy-typescript generated code
import {
  _InstanceType,
  AccountAttribute,
  AccountAttributeName,
  ActiveInstance,
  Address,
  AddressAttribute,
  AddressAttributeName,
  AddressTransfer,
  AllocationState,
  AllowsMultipleInstanceTypes,
  AssociationStatus,
  AttachmentStatus,
  AutoPlacement,
  BundleTask,
  ByoipCidr,
  CapacityReservation,
  CapacityReservationFleetState,
  CarrierGateway,
  ClientVpnAuthenticationType,
  ClientVpnAuthorizationRuleStatus,
  ClientVpnEndpointStatus,
  CurrencyCodeValues,
  FleetCapacityReservation,
  FleetCapacityReservationTenancy,
  FleetInstanceMatchCriteria,
  HostRecovery,
  IamInstanceProfile,
  IamInstanceProfileAssociation,
  InstanceEventWindow,
  Tag,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  TransportProtocol,
  UnsuccessfulItem,
  VerifiedAccessInstance,
  VerifiedAccessTrustProvider,
} from "./models_0";
import {
  AttributeValue,
  BlockDeviceMapping,
  CapacityReservationPreference,
  CapacityReservationTargetResponse,
  ClientVpnRouteStatus,
  CoipPool,
  CustomerGateway,
  DefaultTargetCapacityType,
  DestinationFileFormat,
  DhcpOptions,
  DiskImageFormat,
  EgressOnlyInternetGateway,
  ExportTask,
  FleetCapacityReservationUsageStrategy,
  FleetExcessCapacityTerminationPolicy,
  FleetLaunchTemplateOverrides,
  FleetLaunchTemplateSpecification,
  FleetOnDemandAllocationStrategy,
  FleetReplacementStrategy,
  FleetType,
  GroupIdentifier,
  HostnameType,
  InstanceIpv6Address,
  InstanceLifecycle,
  LaunchTemplateAndOverridesResponse,
  LogDestinationType,
  NetworkInterfaceStatus,
  Placement,
  PlatformValues,
  SpotAllocationStrategy,
  SpotInstanceInterruptionBehavior,
  StateReason,
  TargetCapacityUnitType,
  TrafficType,
} from "./models_1";
import {
  FleetStateCode,
  TransitGatewayConnect,
  TransitGatewayConnectPeer,
  TransitGatewayMulticastDomain,
  TransitGatewayPolicyTable,
  TransitGatewayPrefixListReference,
  TransitGatewayRoute,
  TransitGatewayRouteTable,
  TransitGatewayRouteTableAnnouncement,
  VerifiedAccessEndpoint,
  VerifiedAccessGroup,
} from "./models_2";

export interface DeleteTransitGatewayConnectResult {
  /**
   * <p>Information about the deleted Connect attachment.</p>
   */
  TransitGatewayConnect?: TransitGatewayConnect;
}

export interface DeleteTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the Connect peer.</p>
   */
  TransitGatewayConnectPeerId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayConnectPeerResult {
  /**
   * <p>Information about the deleted Connect peer.</p>
   */
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer;
}

export interface DeleteTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the deleted transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain;
}

export interface DeleteTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway peering attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

export interface DeleteTransitGatewayPolicyTableRequest {
  /**
   * <p>The transit gateway policy table to delete.</p>
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayPolicyTableResult {
  /**
   * <p>Provides details about the deleted transit gateway policy table.</p>
   */
  TransitGatewayPolicyTable?: TransitGatewayPolicyTable;
}

export interface DeleteTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the deleted prefix list reference.</p>
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}

export interface DeleteTransitGatewayRouteRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The CIDR range for the route. This must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: TransitGatewayRoute;
}

export interface DeleteTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayRouteTableResult {
  /**
   * <p>Information about the deleted transit gateway route table.</p>
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable;
}

export interface DeleteTransitGatewayRouteTableAnnouncementRequest {
  /**
   * <p>The transit gateway route table ID that's being deleted. </p>
   */
  TransitGatewayRouteTableAnnouncementId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteTransitGatewayRouteTableAnnouncementResult {
  /**
   * <p>Provides details about a deleted transit gateway route table.</p>
   */
  TransitGatewayRouteTableAnnouncement?: TransitGatewayRouteTableAnnouncement;
}

export interface DeleteTransitGatewayVpcAttachmentRequest {
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

export interface DeleteTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the deleted VPC attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export interface DeleteVerifiedAccessEndpointRequest {
  /**
   * <p>The ID of the Amazon Web Services Verified Access endpoint.</p>
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteVerifiedAccessEndpointResult {
  /**
   * <p>The ID of the Amazon Web Services Verified Access endpoint.</p>
   */
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint;
}

export interface DeleteVerifiedAccessGroupRequest {
  /**
   * <p>The ID of the Amazon Web Services Verified Access group.</p>
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteVerifiedAccessGroupResult {
  /**
   * <p>The ID of the Amazon Web Services Verified Access group.</p>
   */
  VerifiedAccessGroup?: VerifiedAccessGroup;
}

export interface DeleteVerifiedAccessInstanceRequest {
  /**
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export interface DeleteVerifiedAccessInstanceResult {
  /**
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   */
  VerifiedAccessInstance?: VerifiedAccessInstance;
}

export interface DeleteVerifiedAccessTrustProviderRequest {
  /**
   * <p>The ID of the Amazon Web Services Verified Access trust provider.</p>
   */
  VerifiedAccessTrustProviderId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export interface DeleteVerifiedAccessTrustProviderResult {
  /**
   * <p>The ID of the Amazon Web Services Verified Access trust provider.</p>
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider;
}

export interface DeleteVolumeRequest {
  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeleteVpcRequest {
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

export interface DeleteVpcEndpointConnectionNotificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the notifications.</p>
   */
  ConnectionNotificationIds: string[] | undefined;
}

export interface DeleteVpcEndpointConnectionNotificationsResult {
  /**
   * <p>Information about the notifications that could not be deleted
   *             successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export interface DeleteVpcEndpointsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the VPC endpoints.</p>
   */
  VpcEndpointIds: string[] | undefined;
}

export interface DeleteVpcEndpointsResult {
  /**
   * <p>Information about the VPC endpoints that were not successfully deleted.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export interface DeleteVpcEndpointServiceConfigurationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the services.</p>
   */
  ServiceIds: string[] | undefined;
}

export interface DeleteVpcEndpointServiceConfigurationsResult {
  /**
   * <p>Information about the service configurations that were not deleted, if
   *             applicable.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export interface DeleteVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId: string | undefined;
}

export interface DeleteVpcPeeringConnectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * <p>Contains the parameters for DeleteVpnConnection.</p>
 */
export interface DeleteVpnConnectionRequest {
  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Contains the parameters for DeleteVpnConnectionRoute.</p>
 */
export interface DeleteVpnConnectionRouteRequest {
  /**
   * <p>The CIDR block associated with the local subnet of the customer network.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;
}

/**
 * <p>Contains the parameters for DeleteVpnGateway.</p>
 */
export interface DeleteVpnGatewayRequest {
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

export interface DeprovisionByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation. The prefix must be the same prefix
   *          that you specified when you provisioned the address range.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DeprovisionByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export interface DeprovisionIpamPoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the pool that has the CIDR you want to deprovision.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The CIDR which you want to deprovision from the pool.</p>
   */
  Cidr?: string;
}

export enum IpamPoolCidrFailureCode {
  cidr_not_available = "cidr-not-available",
  limit_exceeded = "limit-exceeded",
}

/**
 * <p>Details related to why an IPAM pool CIDR failed to be provisioned.</p>
 */
export interface IpamPoolCidrFailureReason {
  /**
   * <p>An error code related to why an IPAM pool CIDR failed to be provisioned.</p>
   */
  Code?: IpamPoolCidrFailureCode | string;

  /**
   * <p>A message related to why an IPAM pool CIDR failed to be provisioned.</p>
   */
  Message?: string;
}

export enum IpamPoolCidrState {
  deprovisioned = "deprovisioned",
  failed_deprovision = "failed-deprovision",
  failed_import = "failed-import",
  failed_provision = "failed-provision",
  pending_deprovision = "pending-deprovision",
  pending_import = "pending-import",
  pending_provision = "pending-provision",
  provisioned = "provisioned",
}

/**
 * <p>A CIDR provisioned to an IPAM pool.</p>
 */
export interface IpamPoolCidr {
  /**
   * <p>The CIDR provisioned to the IPAM pool. A CIDR is a representation of an IP address and its associated network mask (or netmask)
   *          and refers to a range of IP addresses. An IPv4 CIDR example is <code>10.24.34.0/23</code>. An IPv6 CIDR example is <code>2001:DB8::/32</code>.</p>
   */
  Cidr?: string;

  /**
   * <p>The state of the CIDR.</p>
   */
  State?: IpamPoolCidrState | string;

  /**
   * <p>Details related to why an IPAM pool CIDR failed to be provisioned.</p>
   */
  FailureReason?: IpamPoolCidrFailureReason;

  /**
   * <p>The IPAM pool CIDR ID.</p>
   */
  IpamPoolCidrId?: string;

  /**
   * <p>The netmask length of the CIDR you'd like to provision to a pool. Can be used for provisioning Amazon-provided IPv6 CIDRs to top-level pools and for provisioning CIDRs to pools with source pools. Cannot be used to provision BYOIP CIDRs to top-level pools. "NetmaskLength" or "Cidr" is required.</p>
   */
  NetmaskLength?: number;
}

export interface DeprovisionIpamPoolCidrResult {
  /**
   * <p>The deprovisioned pool CIDR.</p>
   */
  IpamPoolCidr?: IpamPoolCidr;
}

export interface DeprovisionPublicIpv4PoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the pool that you want to deprovision the CIDR from.</p>
   */
  PoolId: string | undefined;

  /**
   * <p>The CIDR you want to deprovision from the pool.</p>
   */
  Cidr: string | undefined;
}

export interface DeprovisionPublicIpv4PoolCidrResult {
  /**
   * <p>The ID of the pool that you deprovisioned the CIDR from.</p>
   */
  PoolId?: string;

  /**
   * <p>The deprovisioned CIDRs.</p>
   */
  DeprovisionedAddresses?: string[];
}

/**
 * <p>Contains the parameters for DeregisterImage.</p>
 */
export interface DeregisterImageRequest {
  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Information about the tag keys to deregister for the current Region. You can either specify
 *    		individual tag keys or deregister all tag keys in the current Region. You must specify either
 *    		<code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request</p>
 */
export interface DeregisterInstanceTagAttributeRequest {
  /**
   * <p>Indicates whether to deregister all tag keys in the current Region. Specify <code>false</code>
   *    		to deregister all tag keys.</p>
   */
  IncludeAllTagsOfInstance?: boolean;

  /**
   * <p>Information about the tag keys to deregister.</p>
   */
  InstanceTagKeys?: string[];
}

export interface DeregisterInstanceEventNotificationAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Information about the tag keys to deregister.</p>
   */
  InstanceTagAttribute?: DeregisterInstanceTagAttributeRequest;
}

/**
 * <p>Describes the registered tag keys for the current Region.</p>
 */
export interface InstanceTagNotificationAttribute {
  /**
   * <p>The registered tag keys.</p>
   */
  InstanceTagKeys?: string[];

  /**
   * <p>Indicates wheter all tag keys in the current Region are registered to appear in scheduled event notifications.
   *       	<code>true</code> indicates that all tag keys in the current Region are registered.</p>
   */
  IncludeAllTagsOfInstance?: boolean;
}

export interface DeregisterInstanceEventNotificationAttributesResult {
  /**
   * <p>The resulting set of tag keys.</p>
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}

export interface DeregisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The IDs of the group members' network interfaces.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes the deregistered  transit gateway multicast group members.</p>
 */
export interface TransitGatewayMulticastDeregisteredGroupMembers {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The network interface IDs of the deregistered members.</p>
   */
  DeregisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export interface DeregisterTransitGatewayMulticastGroupMembersResult {
  /**
   * <p>Information about the deregistered members.</p>
   */
  DeregisteredMulticastGroupMembers?: TransitGatewayMulticastDeregisteredGroupMembers;
}

export interface DeregisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The IDs of the group sources' network interfaces.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes the deregistered  transit gateway multicast group sources.</p>
 */
export interface TransitGatewayMulticastDeregisteredGroupSources {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The network interface IDs of the non-registered members.</p>
   */
  DeregisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export interface DeregisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * <p>Information about the deregistered group sources.</p>
   */
  DeregisteredMulticastGroupSources?: TransitGatewayMulticastDeregisteredGroupSources;
}

export interface DescribeAccountAttributesRequest {
  /**
   * <p>The account attribute names.</p>
   */
  AttributeNames?: (AccountAttributeName | string)[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *            and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *            Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeAccountAttributesResult {
  /**
   * <p>Information about the account attributes.</p>
   */
  AccountAttributes?: AccountAttribute[];
}

/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation.
 *          Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p>
 *          <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only
 *            results that match all of the specified filters.</p>
 */
export interface Filter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  Name?: string;

  /**
   * <p>The filter values. Filter values are case-sensitive. If you specify multiple values for a
   *          filter, the values are joined with an <code>OR</code>, and the request returns all results
   *          that match any of the specified values.</p>
   */
  Values?: string[];
}

export interface DescribeAddressesRequest {
  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allocation-id</code> - [EC2-VPC] The allocation ID for the address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association-id</code> - [EC2-VPC] The association ID for the address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>domain</code> - Indicates whether the address is for use in EC2-Classic (<code>standard</code>)
   *               or in a VPC (<code>vpc</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance the address is associated with, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-border-group</code> -  A unique set of Availability Zones, Local Zones,
   *            or Wavelength Zones from where Amazon Web Services advertises IP addresses. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code> - [EC2-VPC] The ID of the network interface that the address is associated with, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-owner-id</code> - The Amazon Web Services account ID of the owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - [EC2-VPC] The private IP address associated with the Elastic IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public-ip</code> - The Elastic IP address, or the carrier IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more Elastic IP addresses.</p>
   *          <p>Default: Describes all your Elastic IP addresses.</p>
   */
  PublicIps?: string[];

  /**
   * <p>[EC2-VPC] Information about the allocation IDs.</p>
   */
  AllocationIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeAddressesResult {
  /**
   * <p>Information about the Elastic IP addresses.</p>
   */
  Addresses?: Address[];
}

export interface DescribeAddressesAttributeRequest {
  /**
   * <p>[EC2-VPC] The allocation IDs.</p>
   */
  AllocationIds?: string[];

  /**
   * <p>The attribute of the IP address.</p>
   */
  Attribute?: AddressAttributeName | string;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeAddressesAttributeResult {
  /**
   * <p>Information about the IP addresses.</p>
   */
  Addresses?: AddressAttribute[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeAddressTransfersRequest {
  /**
   * <p>The allocation IDs of Elastic IP addresses.</p>
   */
  AllocationIds?: string[];

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of address transfers to return in one page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeAddressTransfersResult {
  /**
   * <p>The Elastic IP address transfer.</p>
   */
  AddressTransfers?: AddressTransfer[];

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeAggregateIdFormatRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes the ID format for a resource.</p>
 */
export interface IdFormat {
  /**
   * <p>The date in UTC at which you are permanently switched over to using longer IDs. If a deadline is not yet available for this resource type, this field is not returned.</p>
   */
  Deadline?: Date;

  /**
   * <p>The type of resource.</p>
   */
  Resource?: string;

  /**
   * <p>Indicates whether longer IDs (17-character IDs) are enabled for the resource.</p>
   */
  UseLongIds?: boolean;
}

export interface DescribeAggregateIdFormatResult {
  /**
   * <p>Indicates whether all resource types in the Region are configured to use longer IDs.
   *             This value is only <code>true</code> if all users are configured to use longer IDs for
   *             all resources types in the Region.</p>
   */
  UseLongIdsAggregated?: boolean;

  /**
   * <p>Information about each resource's ID format.</p>
   */
  Statuses?: IdFormat[];
}

export interface DescribeAvailabilityZonesRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-name</code> - For Availability Zones, use the Region name. For Local
   *           Zones, use the name of the group associated with the Local Zone (for example,
   *             <code>us-west-2-lax-1</code>) For Wavelength Zones, use the name of the group associated
   *           with the Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>message</code> - The Zone message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>opt-in-status</code> - The opt-in status (<code>opted-in</code>, and
   *             <code>not-opted-in</code> | <code>opt-in-not-required</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parent-zoneID</code> - The ID of the zone that handles some of the Local Zone
   *           and Wavelength Zone control plane operations, such as API calls.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parent-zoneName</code> - The ID of the zone that handles some of the Local Zone
   *           and Wavelength Zone control plane operations, such as API calls.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region-name</code> - The name of the Region for the Zone (for example,
   *             <code>us-east-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Availability Zone, the Local Zone, or the
   *           Wavelength Zone (<code>available</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-id</code> - The ID of the Availability Zone (for example,
   *             <code>use1-az1</code>), the Local Zone (for example, <code>usw2-lax1-az1</code>), or the
   *           Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-type</code> - The type of zone, for example, <code>local-zone</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-name</code> - The name of the Availability Zone (for example,
   *             <code>us-east-1a</code>), the Local Zone (for example, <code>us-west-2-lax-1a</code>), or
   *           the Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-type</code> - The type of zone, for example, <code>local-zone</code>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The names of the Availability Zones, Local Zones, and Wavelength Zones.</p>
   */
  ZoneNames?: string[];

  /**
   * <p>The IDs of the Availability Zones, Local Zones, and Wavelength Zones.</p>
   */
  ZoneIds?: string[];

  /**
   * <p>Include all Availability Zones, Local Zones, and Wavelength Zones regardless of your
   *       opt-in status.</p>
   *          <p>If you do not use this parameter, the results include only the zones for the Regions where you have chosen the option to opt in.</p>
   */
  AllAvailabilityZones?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes a message about an Availability Zone, Local Zone, or Wavelength Zone.</p>
 */
export interface AvailabilityZoneMessage {
  /**
   * <p>The message about the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  Message?: string;
}

export enum AvailabilityZoneOptInStatus {
  not_opted_in = "not-opted-in",
  opt_in_not_required = "opt-in-not-required",
  opted_in = "opted-in",
}

export enum AvailabilityZoneState {
  available = "available",
  impaired = "impaired",
  information = "information",
  unavailable = "unavailable",
}

/**
 * <p>Describes Availability Zones, Local Zones, and Wavelength Zones.</p>
 */
export interface AvailabilityZone {
  /**
   * <p>The state of the Availability Zone, Local Zone, or Wavelength Zone. This value is always
   *         <code>available</code>.</p>
   */
  State?: AvailabilityZoneState | string;

  /**
   * <p>For Availability Zones, this parameter always has the value of
   *         <code>opt-in-not-required</code>.</p>
   *          <p>For Local Zones and Wavelength Zones, this parameter is the opt-in status. The possible
   *       values are <code>opted-in</code>, and <code>not-opted-in</code>.</p>
   */
  OptInStatus?: AvailabilityZoneOptInStatus | string;

  /**
   * <p>Any messages about the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  Messages?: AvailabilityZoneMessage[];

  /**
   * <p>The name of the Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The name of the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  ZoneName?: string;

  /**
   * <p>The ID of the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  ZoneId?: string;

  /**
   * <p> For Availability Zones, this parameter has the same value as the Region name.</p>
   *          <p>For Local Zones, the name of the associated group, for example
   *         <code>us-west-2-lax-1</code>.</p>
   *          <p>For Wavelength Zones, the name of the associated group, for example
   *         <code>us-east-1-wl1-bos-wlz-1</code>.</p>
   */
  GroupName?: string;

  /**
   * <p>The name of the network border group.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The type of zone. The valid values are <code>availability-zone</code>,
   *         <code>local-zone</code>, and <code>wavelength-zone</code>.</p>
   */
  ZoneType?: string;

  /**
   * <p>The name of the zone that handles some of the Local Zone or Wavelength Zone control plane
   *       operations, such as API calls.</p>
   */
  ParentZoneName?: string;

  /**
   * <p>The ID of the zone that handles some of the Local Zone or Wavelength Zone control plane
   *       operations, such as API calls.</p>
   */
  ParentZoneId?: string;
}

export interface DescribeAvailabilityZonesResult {
  /**
   * <p>Information about the Availability Zones, Local Zones, and Wavelength Zones.</p>
   */
  AvailabilityZones?: AvailabilityZone[];
}

export interface DescribeAwsNetworkPerformanceMetricSubscriptionsRequest {
  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters.</p>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export enum MetricType {
  aggregate_latency = "aggregate-latency",
}

export enum PeriodType {
  fifteen_minutes = "fifteen-minutes",
  five_minutes = "five-minutes",
  one_day = "one-day",
  one_hour = "one-hour",
  one_week = "one-week",
  three_hours = "three-hours",
}

export enum StatisticType {
  p50 = "p50",
}

/**
 * <p>Describes an Infrastructure Performance subscription.</p>
 */
export interface Subscription {
  /**
   * <p>The Region or Availability Zone that's the source for the subscription. For example, <code>us-east-1</code>.</p>
   */
  Source?: string;

  /**
   * <p>The Region or Availability Zone that's the target for the subscription. For example, <code>eu-west-1</code>.</p>
   */
  Destination?: string;

  /**
   * <p>The metric used for the subscription.</p>
   */
  Metric?: MetricType | string;

  /**
   * <p>The statistic used for the subscription.</p>
   */
  Statistic?: StatisticType | string;

  /**
   * <p>The data aggregation time for the subscription.</p>
   */
  Period?: PeriodType | string;
}

export interface DescribeAwsNetworkPerformanceMetricSubscriptionsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Describes the current Infrastructure Performance subscriptions.</p>
   */
  Subscriptions?: Subscription[];
}

export interface DescribeBundleTasksRequest {
  /**
   * <p>The bundle task IDs.</p>
   *          <p>Default: Describes all your bundle tasks.</p>
   */
  BundleIds?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>bundle-id</code> - The ID of the bundle task.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>error-code</code> - If the task failed, the error code returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>error-message</code> - If the task failed, the error message returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>progress</code> - The level of task completion, as a percentage (for example, 20%).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3-bucket</code> - The Amazon S3 bucket to store the AMI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3-prefix</code> - The beginning of the AMI name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-time</code> - The time the task started (for example, 2013-09-15T17:15:20.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the task (<code>pending</code> | <code>waiting-for-shutdown</code> | <code>bundling</code> |
   *            <code>storing</code> | <code>cancelling</code> | <code>complete</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update-time</code> - The time of the most recent update for the task.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeBundleTasksResult {
  /**
   * <p>Information about the bundle tasks.</p>
   */
  BundleTasks?: BundleTask[];
}

export interface DescribeByoipCidrsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeByoipCidrsResult {
  /**
   * <p>Information about your address ranges.</p>
   */
  ByoipCidrs?: ByoipCidr[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeCapacityReservationFleetsRequest {
  /**
   * <p>The IDs of the Capacity Reservation Fleets to describe.</p>
   */
  CapacityReservationFleetIds?: string[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Fleet (<code>submitted</code> | <code>modifying</code> | <code>active</code> |
   * 					<code>partially_fulfilled</code> | <code>expiring</code> | <code>expired</code> | <code>cancelling</code> |
   * 					<code>cancelled</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-match-criteria</code> - The instance matching criteria for the Fleet. Only <code>open</code> is supported.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tenancy</code> - The tenancy of the Fleet (<code>default</code> | <code>dedicated</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allocation-strategy</code> - The allocation strategy used by the Fleet. Only <code>prioritized</code> is supported.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Information about a Capacity Reservation Fleet.</p>
 */
export interface CapacityReservationFleet {
  /**
   * <p>The ID of the Capacity Reservation Fleet.</p>
   */
  CapacityReservationFleetId?: string;

  /**
   * <p>The ARN of the Capacity Reservation Fleet.</p>
   */
  CapacityReservationFleetArn?: string;

  /**
   * <p>The state of the Capacity Reservation Fleet. Possible states include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>submitted</code> - The Capacity Reservation Fleet request has been submitted
   * 					and Amazon Elastic Compute Cloud is preparing to create the Capacity Reservations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modifying</code> - The Capacity Reservation Fleet is being modified. The Fleet
   * 					remains in this state until the modification is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>active</code> - The Capacity Reservation Fleet has fulfilled its total target
   * 					capacity and it is attempting to maintain this capacity. The Fleet remains in this
   * 					state until it is modified or deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>partially_fulfilled</code> - The Capacity Reservation Fleet has partially
   * 					fulfilled its total target capacity. There is insufficient Amazon EC2 to
   * 					fulfill the total target capacity. The Fleet is attempting to asynchronously fulfill
   * 					its total target capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expiring</code> - The Capacity Reservation Fleet has reach its end date and it
   * 					is in the process of expiring. One or more of its Capacity reservations might still
   * 					be active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The Capacity Reservation Fleet has reach its end date. The Fleet
   * 					and its Capacity Reservations are expired. The Fleet can't create new Capacity
   * 					Reservations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelling</code> - The Capacity Reservation Fleet is in the process of being
   * 					cancelled. One or more of its Capacity reservations might still be active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelled</code> - The Capacity Reservation Fleet has been manually cancelled.
   * 					The Fleet and its Capacity Reservations are cancelled and the Fleet can't create new
   * 					Capacity Reservations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - The Capacity Reservation Fleet failed to reserve capacity for
   * 					the specified instance types.</p>
   *             </li>
   *          </ul>
   */
  State?: CapacityReservationFleetState | string;

  /**
   * <p>The total number of capacity units for which the Capacity Reservation Fleet reserves capacity.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">Total target capacity</a>
   * 			in the Amazon EC2 User Guide.</p>
   */
  TotalTargetCapacity?: number;

  /**
   * <p>The capacity units that have been fulfilled.</p>
   */
  TotalFulfilledCapacity?: number;

  /**
   * <p>The tenancy of the Capacity Reservation Fleet. Tenancies include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Reservation Fleet is created on hardware that is
   * 					shared with other Amazon Web Services accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Reservation Fleet is created on single-tenant
   * 					hardware that is dedicated to a single Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   */
  Tenancy?: FleetCapacityReservationTenancy | string;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet expires.</p>
   */
  EndDate?: Date;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation Fleet accepts. All
   * 			Capacity Reservations in the Fleet inherit this instance matching criteria.</p>
   *          <p>Currently, Capacity Reservation Fleets support <code>open</code> instance matching criteria
   * 			only. This means that instances that have matching attributes (instance type, platform, and
   * 			Availability Zone) run in the Capacity Reservations automatically. Instances do not need to
   * 			explicitly target a Capacity Reservation Fleet to use its reserved capacity.</p>
   */
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | string;

  /**
   * <p>The strategy used by the Capacity Reservation Fleet to determine which of the specified
   * 			instance types to use. For more information, see For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#allocation-strategy">
   * 				Allocation strategy</a> in the Amazon EC2 User Guide.</p>
   */
  AllocationStrategy?: string;

  /**
   * <p>Information about the instance types for which to reserve the capacity.</p>
   */
  InstanceTypeSpecifications?: FleetCapacityReservation[];

  /**
   * <p>The tags assigned to the Capacity Reservation Fleet.</p>
   */
  Tags?: Tag[];
}

export interface DescribeCapacityReservationFleetsResult {
  /**
   * <p>Information about the Capacity Reservation Fleets.</p>
   */
  CapacityReservationFleets?: CapacityReservationFleet[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeCapacityReservationsRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationIds?: string[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The type of instance for which the Capacity Reservation reserves capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-platform</code> - The type of operating system for which the Capacity Reservation reserves capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tenancy</code> - Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the
   * 	  			following tenancy settings:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>default</code> - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost on which the Capacity Reservation was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>active</code>- The Capacity Reservation is active and the capacity is available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>expired</code> - The Capacity Reservation expired automatically at the date and time specified in your request.
   * 	  				The reserved capacity is no longer available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>cancelled</code> - The Capacity Reservation was cancelled. The reserved capacity is no longer available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>pending</code> - The Capacity Reservation request was successful but the capacity provisioning is still pending.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>failed</code> - The Capacity Reservation request has failed. A request might fail due to invalid request parameters,
   * 	  				capacity constraints, or instance limit constraints. Failed requests are retained for 60 minutes.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-date</code> - The date and time at which the Capacity Reservation was started.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end-date</code> - The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is
   * 	  			released and you can no longer launch instances into it. The Capacity Reservation's state changes to expired when it reaches its end date and time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end-date-type</code> - Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-match-criteria</code> - Indicates the type of instance launches that the Capacity Reservation accepts. The options include:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>open</code> - The Capacity Reservation accepts all instances that have matching
   * 							attributes (instance type, platform, and Availability Zone). Instances
   * 							that have matching attributes launch into the Capacity Reservation
   * 							automatically without specifying any additional parameters.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>targeted</code> - The Capacity Reservation only accepts instances that have matching
   * 							attributes (instance type, platform, and Availability Zone), and
   * 							explicitly target the Capacity Reservation. This ensures that only
   * 							permitted instances can use the reserved capacity.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>placement-group-arn</code> - The ARN of the cluster placement group in which the Capacity Reservation was created.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeCapacityReservationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the Capacity Reservations.</p>
   */
  CapacityReservations?: CapacityReservation[];
}

export interface DescribeCarrierGatewaysRequest {
  /**
   * <p>One or more carrier gateway IDs.</p>
   */
  CarrierGatewayIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>carrier-gateway-id</code> - The ID of the carrier gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the carrier gateway (<code>pending</code> |
   *                     <code>failed</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner of the carrier gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC associated with the carrier gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeCarrierGatewaysResult {
  /**
   * <p>Information about the carrier gateway.</p>
   */
  CarrierGateways?: CarrierGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeClassicLinkInstancesRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of a VPC security group that's associated with the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC to which the instance is
   * 					linked.</p>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC that the instance is linked to.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more instance IDs. Must be instances linked to a VPC through ClassicLink.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>Constraint: If the value is greater than 1000, we return only 1000 items.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 *          <p>Describes a linked EC2-Classic instance.</p>
 */
export interface ClassicLinkInstance {
  /**
   * <p>A list of security groups.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>Any tags assigned to the instance.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export interface DescribeClassicLinkInstancesResult {
  /**
   * <p>Information about one or more linked EC2-Classic instances.</p>
   */
  Instances?: ClassicLinkInstance[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeClientVpnAuthorizationRulesRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the authorization rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>destination-cidr</code> - The CIDR of the network to which the authorization rule
   *                     applies.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of the Active Directory group to which the authorization rule grants access.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Information about an authorization rule.</p>
 */
export interface AuthorizationRule {
  /**
   * <p>The ID of the Client VPN endpoint with which the authorization rule is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>A brief description of the authorization rule.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the Active Directory group to which the authorization rule grants access.</p>
   */
  GroupId?: string;

  /**
   * <p>Indicates whether the authorization rule grants access to all clients.</p>
   */
  AccessAll?: boolean;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the network to which the authorization rule applies.</p>
   */
  DestinationCidr?: string;

  /**
   * <p>The current state of the authorization rule.</p>
   */
  Status?: ClientVpnAuthorizationRuleStatus;
}

export interface DescribeClientVpnAuthorizationRulesResult {
  /**
   * <p>Information about the authorization rules.</p>
   */
  AuthorizationRules?: AuthorizationRule[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeClientVpnConnectionsRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>connection-id</code> - The ID of the connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>username</code> - For Active Directory client authentication, the user name of the
   *                     client who established the client connection.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export enum ClientVpnConnectionStatusCode {
  active = "active",
  failed_to_terminate = "failed-to-terminate",
  terminated = "terminated",
  terminating = "terminating",
}

/**
 * <p>Describes the status of a client connection.</p>
 */
export interface ClientVpnConnectionStatus {
  /**
   * <p>The state of the client connection.</p>
   */
  Code?: ClientVpnConnectionStatusCode | string;

  /**
   * <p>A message about the status of the client connection, if applicable.</p>
   */
  Message?: string;
}

/**
 * <p>Describes a client connection.</p>
 */
export interface ClientVpnConnection {
  /**
   * <p>The ID of the Client VPN endpoint to which the client is connected.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The current date and time.</p>
   */
  Timestamp?: string;

  /**
   * <p>The ID of the client connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The username of the client who established the client connection. This information is only provided
   * 			if Active Directory client authentication is used.</p>
   */
  Username?: string;

  /**
   * <p>The date and time the client connection was established.</p>
   */
  ConnectionEstablishedTime?: string;

  /**
   * <p>The number of bytes sent by the client.</p>
   */
  IngressBytes?: string;

  /**
   * <p>The number of bytes received by the client.</p>
   */
  EgressBytes?: string;

  /**
   * <p>The number of packets sent by the client.</p>
   */
  IngressPackets?: string;

  /**
   * <p>The number of packets received by the client.</p>
   */
  EgressPackets?: string;

  /**
   * <p>The IP address of the client.</p>
   */
  ClientIp?: string;

  /**
   * <p>The common name associated with the client. This is either the name of the client certificate,
   * 			or the Active Directory user name.</p>
   */
  CommonName?: string;

  /**
   * <p>The current state of the client connection.</p>
   */
  Status?: ClientVpnConnectionStatus;

  /**
   * <p>The date and time the client connection was terminated.</p>
   */
  ConnectionEndTime?: string;

  /**
   * <p>The statuses returned by the client connect handler for posture compliance, if applicable.</p>
   */
  PostureComplianceStatuses?: string[];
}

export interface DescribeClientVpnConnectionsResult {
  /**
   * <p>Information about the active and terminated client connections.</p>
   */
  Connections?: ClientVpnConnection[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeClientVpnEndpointsRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointIds?: string[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>endpoint-id</code> - The ID of the Client VPN endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transport-protocol</code> - The transport protocol (<code>tcp</code> |
   *                     <code>udp</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export enum AssociatedNetworkType {
  vpc = "vpc",
}

/**
 * <p>Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.</p>
 */
export interface AssociatedTargetNetwork {
  /**
   * <p>The ID of the subnet.</p>
   */
  NetworkId?: string;

  /**
   * <p>The target network type.</p>
   */
  NetworkType?: AssociatedNetworkType | string;
}

/**
 * <p>Describes an Active Directory.</p>
 */
export interface DirectoryServiceAuthentication {
  /**
   * <p>The ID of the Active Directory used for authentication.</p>
   */
  DirectoryId?: string;
}

/**
 * <p>Describes the IAM SAML identity providers used for federated authentication.</p>
 */
export interface FederatedAuthentication {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider.</p>
   */
  SamlProviderArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider for the self-service portal.</p>
   */
  SelfServiceSamlProviderArn?: string;
}

/**
 * <p>Information about the client certificate used for authentication.</p>
 */
export interface CertificateAuthentication {
  /**
   * <p>The ARN of the client certificate. </p>
   */
  ClientRootCertificateChain?: string;
}

/**
 * <p>Describes the authentication methods used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/client-authentication.html">Authentication</a>
 * 			in the <i>Client VPN Administrator Guide</i>.</p>
 */
export interface ClientVpnAuthentication {
  /**
   * <p>The authentication type used.</p>
   */
  Type?: ClientVpnAuthenticationType | string;

  /**
   * <p>Information about the Active Directory, if applicable.</p>
   */
  ActiveDirectory?: DirectoryServiceAuthentication;

  /**
   * <p>Information about the authentication certificates, if applicable.</p>
   */
  MutualAuthentication?: CertificateAuthentication;

  /**
   * <p>Information about the IAM SAML identity provider, if applicable.</p>
   */
  FederatedAuthentication?: FederatedAuthentication;
}

export enum ClientVpnEndpointAttributeStatusCode {
  applied = "applied",
  applying = "applying",
}

/**
 * <p>Describes the status of the Client VPN endpoint attribute.</p>
 */
export interface ClientVpnEndpointAttributeStatus {
  /**
   * <p>The status code.</p>
   */
  Code?: ClientVpnEndpointAttributeStatusCode | string;

  /**
   * <p>The status message.</p>
   */
  Message?: string;
}

/**
 * <p>The options for managing connection authorization for new client connections.</p>
 */
export interface ClientConnectResponseOptions {
  /**
   * <p>Indicates whether client connect options are enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used for connection authorization.</p>
   */
  LambdaFunctionArn?: string;

  /**
   * <p>The status of any updates to the client connect options.</p>
   */
  Status?: ClientVpnEndpointAttributeStatus;
}

/**
 * <p>Current state of options for customizable text banner that will be displayed on
 * 			Amazon Web Services provided clients when a VPN session is established.</p>
 */
export interface ClientLoginBannerResponseOptions {
  /**
   * <p>Current state of text banner feature.</p>
   *          <p>Valid values: <code>true | false</code>
   *          </p>
   */
  Enabled?: boolean;

  /**
   * <p>Customizable text that will be displayed in a banner on Amazon Web Services provided
   * 			clients when a VPN session is established. UTF-8 encoded
   * 			characters only. Maximum of 1400 characters.</p>
   */
  BannerText?: string;
}

/**
 * <p>Information about the client connection logging options for a Client VPN endpoint.</p>
 */
export interface ConnectionLogResponseOptions {
  /**
   * <p>Indicates whether client connection logging is enabled for the Client VPN endpoint.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The name of the Amazon CloudWatch Logs log group to which connection logging data is published.</p>
   */
  CloudwatchLogGroup?: string;

  /**
   * <p>The name of the Amazon CloudWatch Logs log stream to which connection logging data is published.</p>
   */
  CloudwatchLogStream?: string;
}

export enum VpnProtocol {
  openvpn = "openvpn",
}

/**
 * <p>Describes a Client VPN endpoint.</p>
 */
export interface ClientVpnEndpoint {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>A brief description of the endpoint.</p>
   */
  Description?: string;

  /**
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: ClientVpnEndpointStatus;

  /**
   * <p>The date and time the Client VPN endpoint was created.</p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time the Client VPN endpoint was deleted, if applicable.</p>
   */
  DeletionTime?: string;

  /**
   * <p>The DNS name to be used by clients when connecting to the Client VPN endpoint.</p>
   */
  DnsName?: string;

  /**
   * <p>The IPv4 address range, in CIDR notation, from which client IP addresses are assigned.</p>
   */
  ClientCidrBlock?: string;

  /**
   * <p>Information about the DNS servers to be used for DNS resolution. </p>
   */
  DnsServers?: string[];

  /**
   * <p>Indicates whether split-tunnel is enabled in the Client VPN endpoint.</p>
   *          <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-Tunnel Client VPN endpoint</a>
   * 			in the <i>Client VPN Administrator Guide</i>.</p>
   */
  SplitTunnel?: boolean;

  /**
   * <p>The protocol used by the VPN session.</p>
   */
  VpnProtocol?: VpnProtocol | string;

  /**
   * <p>The transport protocol used by the Client VPN endpoint.</p>
   */
  TransportProtocol?: TransportProtocol | string;

  /**
   * <p>The port number for the  Client VPN endpoint.</p>
   */
  VpnPort?: number;

  /**
   * @deprecated
   *
   * <p>Information about the associated target networks. A target network is a subnet in a VPC.</p>
   */
  AssociatedTargetNetworks?: AssociatedTargetNetwork[];

  /**
   * <p>The ARN of the server certificate.</p>
   */
  ServerCertificateArn?: string;

  /**
   * <p>Information about the authentication method used by the Client VPN endpoint.</p>
   */
  AuthenticationOptions?: ClientVpnAuthentication[];

  /**
   * <p>Information about the client connection logging options for the Client VPN endpoint.</p>
   */
  ConnectionLogOptions?: ConnectionLogResponseOptions;

  /**
   * <p>Any tags assigned to the Client VPN endpoint.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The IDs of the security groups for the target network.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The URL of the self-service portal.</p>
   */
  SelfServicePortalUrl?: string;

  /**
   * <p>The options for managing connection authorization for new client connections.</p>
   */
  ClientConnectOptions?: ClientConnectResponseOptions;

  /**
   * <p>The maximum VPN session duration time in hours.</p>
   *          <p>Valid values: <code>8 | 10 | 12 | 24</code>
   *          </p>
   *          <p>Default value: <code>24</code>
   *          </p>
   */
  SessionTimeoutHours?: number;

  /**
   * <p>Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is
   * 			established.</p>
   */
  ClientLoginBannerOptions?: ClientLoginBannerResponseOptions;
}

export interface DescribeClientVpnEndpointsResult {
  /**
   * <p>Information about the Client VPN endpoints.</p>
   */
  ClientVpnEndpoints?: ClientVpnEndpoint[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeClientVpnRoutesRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>destination-cidr</code> - The CIDR of the route destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>origin</code> - How the route was associated with the Client VPN endpoint (<code>associate</code> | <code>add-route</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-subnet</code> - The ID of the subnet through which traffic is routed.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Information about a Client VPN endpoint route.</p>
 */
export interface ClientVpnRoute {
  /**
   * <p>The ID of the Client VPN endpoint with which the route is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the route destination.</p>
   */
  DestinationCidr?: string;

  /**
   * <p>The ID of the subnet through which traffic is routed.</p>
   */
  TargetSubnet?: string;

  /**
   * <p>The route type.</p>
   */
  Type?: string;

  /**
   * <p>Indicates how the route was associated with the Client VPN endpoint.
   * 			<code>associate</code> indicates that the route was automatically added when the target network
   * 			was associated with the Client VPN endpoint. <code>add-route</code> indicates that the route
   * 			was manually added using the <b>CreateClientVpnRoute</b> action.</p>
   */
  Origin?: string;

  /**
   * <p>The current state of the route.</p>
   */
  Status?: ClientVpnRouteStatus;

  /**
   * <p>A brief description of the route.</p>
   */
  Description?: string;
}

export interface DescribeClientVpnRoutesResult {
  /**
   * <p>Information about the Client VPN endpoint routes.</p>
   */
  Routes?: ClientVpnRoute[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeClientVpnTargetNetworksRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IDs of the target network associations.</p>
   */
  AssociationIds?: string[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-network-id</code> - The ID of the subnet specified as the target network.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC in which the target network is located.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes a target network associated with a Client VPN endpoint.</p>
 */
export interface TargetNetwork {
  /**
   * <p>The ID of the association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the VPC in which the target network (subnet) is located.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the subnet specified as the target network.</p>
   */
  TargetNetworkId?: string;

  /**
   * <p>The ID of the Client VPN endpoint with which the target network is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The current state of the target network association.</p>
   */
  Status?: AssociationStatus;

  /**
   * <p>The IDs of the security groups applied to the target network association.</p>
   */
  SecurityGroups?: string[];
}

export interface DescribeClientVpnTargetNetworksResult {
  /**
   * <p>Information about the associated target networks.</p>
   */
  ClientVpnTargetNetworks?: TargetNetwork[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeCoipPoolsRequest {
  /**
   * <p>The IDs of the address pools.</p>
   */
  PoolIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-pool.local-gateway-route-table-id</code> - The ID of the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>coip-pool.pool-id</code> - The ID of the address pool.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeCoipPoolsResult {
  /**
   * <p>Information about the address pools.</p>
   */
  CoipPools?: CoipPool[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeConversionTasksRequest {
  /**
   * <p>The conversion task IDs.</p>
   */
  ConversionTaskIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes a disk image.</p>
 */
export interface DiskImageDescription {
  /**
   * <p>The checksum computed for the disk image.</p>
   */
  Checksum?: string;

  /**
   * <p>The disk image format.</p>
   */
  Format?: DiskImageFormat | string;

  /**
   * <p>A presigned URL for the import manifest stored in Amazon S3. For information about creating a presigned URL for
   *    an Amazon S3 object, read the "Query String Request Authentication Alternative" section of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">Authenticating REST Requests</a> topic in
   *    the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   */
  ImportManifestUrl?: string;

  /**
   * <p>The size of the disk image, in GiB.</p>
   */
  Size?: number;
}

/**
 * <p>Describes a disk image volume.</p>
 */
export interface DiskImageVolumeDescription {
  /**
   * <p>The volume identifier.</p>
   */
  Id?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  Size?: number;
}

/**
 * <p>Describes an import volume task.</p>
 */
export interface ImportInstanceVolumeDetailItem {
  /**
   * <p>The Availability Zone where the resulting instance will reside.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of bytes converted so far.</p>
   */
  BytesConverted?: number;

  /**
   * <p>A description of the task.</p>
   */
  Description?: string;

  /**
   * <p>The image.</p>
   */
  Image?: DiskImageDescription;

  /**
   * <p>The status of the import of this particular disk image.</p>
   */
  Status?: string;

  /**
   * <p>The status information or errors related to the disk image.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The volume.</p>
   */
  Volume?: DiskImageVolumeDescription;
}

/**
 * <p>Describes an import instance task.</p>
 */
export interface ImportInstanceTaskDetails {
  /**
   * <p>A description of the task.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance operating system.</p>
   */
  Platform?: PlatformValues | string;

  /**
   * <p>The volumes.</p>
   */
  Volumes?: ImportInstanceVolumeDetailItem[];
}

/**
 * <p>Describes an import volume task.</p>
 */
export interface ImportVolumeTaskDetails {
  /**
   * <p>The Availability Zone where the resulting volume will reside.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of bytes converted so far.</p>
   */
  BytesConverted?: number;

  /**
   * <p>The description you provided when starting the import volume task.</p>
   */
  Description?: string;

  /**
   * <p>The image.</p>
   */
  Image?: DiskImageDescription;

  /**
   * <p>The volume.</p>
   */
  Volume?: DiskImageVolumeDescription;
}

export enum ConversionTaskState {
  active = "active",
  cancelled = "cancelled",
  cancelling = "cancelling",
  completed = "completed",
}

/**
 * <p>Describes a conversion task.</p>
 */
export interface ConversionTask {
  /**
   * <p>The ID of the conversion task.</p>
   */
  ConversionTaskId?: string;

  /**
   * <p>The time when the task expires. If the upload isn't complete before the expiration time, we automatically cancel
   *    the task.</p>
   */
  ExpirationTime?: string;

  /**
   * <p>If the task is for importing an instance, this contains information about the import instance task.</p>
   */
  ImportInstance?: ImportInstanceTaskDetails;

  /**
   * <p>If the task is for importing a volume, this contains information about the import volume task.</p>
   */
  ImportVolume?: ImportVolumeTaskDetails;

  /**
   * <p>The state of the conversion task.</p>
   */
  State?: ConversionTaskState | string;

  /**
   * <p>The status message related to the conversion task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Any tags assigned to the task.</p>
   */
  Tags?: Tag[];
}

export interface DescribeConversionTasksResult {
  /**
   * <p>Information about the conversion tasks.</p>
   */
  ConversionTasks?: ConversionTask[];
}

/**
 * <p>Contains the parameters for DescribeCustomerGateways.</p>
 */
export interface DescribeCustomerGatewaysRequest {
  /**
   * <p>One or more customer gateway IDs.</p>
   *          <p>Default: Describes all your customer gateways.</p>
   */
  CustomerGatewayIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>bgp-asn</code> - The customer gateway's Border Gateway Protocol (BGP)
   *                     Autonomous System Number (ASN).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>customer-gateway-id</code> - The ID of the customer gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-address</code> - The IP address of the customer gateway
   *                     device's external interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the customer gateway (<code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> |
   *                     <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The type of customer gateway. Currently, the only
   *                     supported type is <code>ipsec.1</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Contains the output of DescribeCustomerGateways.</p>
 */
export interface DescribeCustomerGatewaysResult {
  /**
   * <p>Information about one or more customer gateways.</p>
   */
  CustomerGateways?: CustomerGateway[];
}

export interface DescribeDhcpOptionsRequest {
  /**
   * <p>The IDs of one or more DHCP options sets.</p>
   *          <p>Default: Describes all your DHCP options sets.</p>
   */
  DhcpOptionsIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>dhcp-options-id</code> - The ID of a DHCP options set.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>key</code> - The key for one of the options (for example, <code>domain-name</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>value</code> - The value for one of the options.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the DHCP options set.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export interface DescribeDhcpOptionsResult {
  /**
   * <p>Information about one or more DHCP options sets.</p>
   */
  DhcpOptions?: DhcpOptions[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeEgressOnlyInternetGatewaysRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more egress-only internet gateway IDs.</p>
   */
  EgressOnlyInternetGatewayIds?: string[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export interface DescribeEgressOnlyInternetGatewaysResult {
  /**
   * <p>Information about the egress-only internet gateways.</p>
   */
  EgressOnlyInternetGateways?: EgressOnlyInternetGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeElasticGpusRequest {
  /**
   * <p>The Elastic Graphics accelerator IDs.</p>
   */
  ElasticGpuIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone in which the
   *                     Elastic Graphics accelerator resides.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elastic-gpu-health</code> - The status of the Elastic Graphics accelerator
   *                         (<code>OK</code> | <code>IMPAIRED</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elastic-gpu-state</code> - The state of the Elastic Graphics accelerator
   *                         (<code>ATTACHED</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>elastic-gpu-type</code> - The type of Elastic Graphics accelerator; for example,
   *                         <code>eg1.medium</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance to which the
   *                     Elastic Graphics accelerator is associated.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export enum ElasticGpuStatus {
  Impaired = "IMPAIRED",
  Ok = "OK",
}

/**
 * <p>Describes the status of an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuHealth {
  /**
   * <p>The health status.</p>
   */
  Status?: ElasticGpuStatus | string;
}

export enum ElasticGpuState {
  Attached = "ATTACHED",
}

/**
 * <p>Describes an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpus {
  /**
   * <p>The ID of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuId?: string;

  /**
   * <p>The Availability Zone in the which the Elastic Graphics accelerator resides.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The type of Elastic Graphics accelerator.</p>
   */
  ElasticGpuType?: string;

  /**
   * <p>The status of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuHealth?: ElasticGpuHealth;

  /**
   * <p>The state of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuState?: ElasticGpuState | string;

  /**
   * <p>The ID of the instance to which the Elastic Graphics accelerator is attached.</p>
   */
  InstanceId?: string;

  /**
   * <p>The tags assigned to the Elastic Graphics accelerator.</p>
   */
  Tags?: Tag[];
}

export interface DescribeElasticGpusResult {
  /**
   * <p>Information about the Elastic Graphics accelerators.</p>
   */
  ElasticGpuSet?: ElasticGpus[];

  /**
   * <p>The total number of items to return. If the total number of items available is more
   *             than the value specified in max-items then a Next-Token will be provided in the output
   *             that you can use to resume pagination.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeExportImageTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Filter tasks using the <code>task-state</code> filter and one of the following values: <code>active</code>,
   *     <code>completed</code>, <code>deleting</code>, or <code>deleted</code>.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of the export image tasks.</p>
   */
  ExportImageTaskIds?: string[];

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token that indicates the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes the destination for an export image task.</p>
 */
export interface ExportTaskS3Location {
  /**
   * <p>The destination Amazon S3 bucket.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The prefix (logical hierarchy) in the bucket.</p>
   */
  S3Prefix?: string;
}

/**
 * <p>Describes an export image task.</p>
 */
export interface ExportImageTask {
  /**
   * <p>A description of the image being exported.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the export image task.</p>
   */
  ExportImageTaskId?: string;

  /**
   * <p>The ID of the image.</p>
   */
  ImageId?: string;

  /**
   * <p>The percent complete of the export image task.</p>
   */
  Progress?: string;

  /**
   * <p>Information about the destination Amazon S3 bucket.</p>
   */
  S3ExportLocation?: ExportTaskS3Location;

  /**
   * <p>The status of the export image task. The possible values are <code>active</code>, <code>completed</code>,
   *     <code>deleting</code>, and <code>deleted</code>.</p>
   */
  Status?: string;

  /**
   * <p>The status message for the export image task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Any tags assigned to the export image task.</p>
   */
  Tags?: Tag[];
}

export interface DescribeExportImageTasksResult {
  /**
   * <p>Information about the export image tasks.</p>
   */
  ExportImageTasks?: ExportImageTask[];

  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   */
  NextToken?: string;
}

export interface DescribeExportTasksRequest {
  /**
   * <p>The export task IDs.</p>
   */
  ExportTaskIds?: string[];

  /**
   * <p>the filters for the export tasks.</p>
   */
  Filters?: Filter[];
}

export interface DescribeExportTasksResult {
  /**
   * <p>Information about the export tasks.</p>
   */
  ExportTasks?: ExportTask[];
}

export interface DescribeFastLaunchImagesRequest {
  /**
   * <p>Details for one or more Windows AMI image IDs.</p>
   */
  ImageIds?: string[];

  /**
   * <p>Use the following filters to streamline results.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type for pre-provisioning.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-template</code> - The launch template that is associated with the pre-provisioned Windows AMI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The owner ID for the pre-provisioning resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The current state of fast launching for the Windows AMI.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results,
   * 			make another request with the returned NextToken value. If this parameter is not specified,
   * 			then all results are returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Identifies the launch template to use for faster launching of the Windows AMI.</p>
 */
export interface FastLaunchLaunchTemplateSpecificationResponse {
  /**
   * <p>The ID of the launch template for faster launching of the associated Windows AMI.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template for faster launching of the associated Windows AMI.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version of the launch template for faster launching of the associated Windows AMI.</p>
   */
  Version?: string;
}

export enum FastLaunchResourceType {
  SNAPSHOT = "snapshot",
}

/**
 * <p>Configuration settings for creating and managing pre-provisioned snapshots for a fast-launch enabled Windows AMI.</p>
 */
export interface FastLaunchSnapshotConfigurationResponse {
  /**
   * <p>The number of pre-provisioned snapshots requested to keep on hand for a fast-launch enabled Windows AMI.</p>
   */
  TargetResourceCount?: number;
}

export enum FastLaunchStateCode {
  disabling = "disabling",
  disabling_failed = "disabling-failed",
  enabled = "enabled",
  enabled_failed = "enabled-failed",
  enabling = "enabling",
  enabling_failed = "enabling-failed",
}

/**
 * <p>Describe details about a fast-launch enabled Windows image that meets the requested
 * 			criteria. Criteria are defined by the <code>DescribeFastLaunchImages</code> action filters.</p>
 */
export interface DescribeFastLaunchImagesSuccessItem {
  /**
   * <p>The image ID that identifies the fast-launch enabled Windows image.</p>
   */
  ImageId?: string;

  /**
   * <p>The resource type that is used for pre-provisioning the Windows AMI. Supported values
   * 			include: <code>snapshot</code>.</p>
   */
  ResourceType?: FastLaunchResourceType | string;

  /**
   * <p>A group of parameters that are used for pre-provisioning the associated
   * 			Windows AMI using snapshots.</p>
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse;

  /**
   * <p>The launch template that the fast-launch enabled Windows AMI uses when it launches
   * 			Windows instances from pre-provisioned snapshots.</p>
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse;

  /**
   * <p>The maximum number of parallel instances that are launched for creating resources.</p>
   */
  MaxParallelLaunches?: number;

  /**
   * <p>The owner ID for the fast-launch enabled Windows AMI.</p>
   */
  OwnerId?: string;

  /**
   * <p>The current state of faster launching for the specified Windows AMI.</p>
   */
  State?: FastLaunchStateCode | string;

  /**
   * <p>The reason that faster launching for the Windows AMI changed to the current state.</p>
   */
  StateTransitionReason?: string;

  /**
   * <p>The time that faster launching for the Windows AMI changed to the current state.</p>
   */
  StateTransitionTime?: Date;
}

export interface DescribeFastLaunchImagesResult {
  /**
   * <p>A collection of details about the fast-launch enabled Windows images that meet
   * 			the requested criteria.</p>
   */
  FastLaunchImages?: DescribeFastLaunchImagesSuccessItem[];

  /**
   * <p>The token to use for the next set of results. This value is null when there are
   * 			no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeFastSnapshotRestoresRequest {
  /**
   * <p>The filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code>: The Availability Zone of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The ID of the Amazon Web Services account that enabled fast snapshot restore on the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-id</code>: The ID of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code>: The state of fast snapshot restores for the snapshot
   *          (<code>enabling</code> |
   *           <code>optimizing</code> |
   *           <code>enabled</code> |
   *           <code>disabling</code> |
   *           <code>disabled</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export enum FastSnapshotRestoreStateCode {
  disabled = "disabled",
  disabling = "disabling",
  enabled = "enabled",
  enabling = "enabling",
  optimizing = "optimizing",
}

/**
 * <p>Describes fast snapshot restores for a snapshot.</p>
 */
export interface DescribeFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The state of fast snapshot restores.</p>
   */
  State?: FastSnapshotRestoreStateCode | string;

  /**
   * <p>The reason for the state transition. The possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated</code> - The state successfully transitioned to <code>enabling</code> or
   *           <code>disabling</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated - Lifecycle state transition</code> - The state successfully transitioned
   *           to <code>optimizing</code>, <code>enabled</code>, or <code>disabled</code>.</p>
   *             </li>
   *          </ul>
   */
  StateTransitionReason?: string;

  /**
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   */
  EnablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   */
  OptimizingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   */
  EnabledTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   */
  DisablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   */
  DisabledTime?: Date;
}

export interface DescribeFastSnapshotRestoresResult {
  /**
   * <p>Information about the state of fast snapshot restores.</p>
   */
  FastSnapshotRestores?: DescribeFastSnapshotRestoreSuccessItem[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export enum FleetEventType {
  FLEET_CHANGE = "fleet-change",
  INSTANCE_CHANGE = "instance-change",
  SERVICE_ERROR = "service-error",
}

export interface DescribeFleetHistoryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of events to describe. By default, all events are described.</p>
   */
  EventType?: FleetEventType | string;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1 and
   *          1000. The default value is 1000. To retrieve the remaining results, make another call with
   *          the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>The start date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime: Date | undefined;
}

/**
 * <p>Describes an EC2 Fleet or Spot Fleet event.</p>
 */
export interface EventInformation {
  /**
   * <p>The description of the event.</p>
   */
  EventDescription?: string;

  /**
   * <p>The event.</p>
   *          <p>
   *             <code>error</code> events:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iamFleetRoleInvalid</code> - The EC2 Fleet or Spot Fleet does not have the required
   *                permissions either to launch or terminate an instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allLaunchSpecsTemporarilyBlacklisted</code> - None of the configurations
   *                are valid, and several attempts to launch instances have failed. For more
   *                information, see the description of the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spotInstanceCountLimitExceeded</code> - You've reached the limit on the
   *                number of Spot Instances that you can launch.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spotFleetRequestConfigurationInvalid</code> - The configuration is not
   *                valid. For more information, see the description of the event.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>fleetRequestChange</code> events:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>active</code> - The EC2 Fleet or Spot Fleet request has been validated and Amazon EC2 is
   *                attempting to maintain the target number of running instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code> (EC2 Fleet) / <code>cancelled</code> (Spot Fleet) - The EC2 Fleet is deleted or the Spot Fleet request is canceled and has no running
   *                instances. The EC2 Fleet or Spot Fleet will be deleted two days after its instances are
   *                terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted_running</code> (EC2 Fleet) / <code>cancelled_running</code> (Spot Fleet) - The EC2 Fleet is deleted or the Spot Fleet request is canceled and does
   *                not launch additional instances. Its existing instances continue to run until
   *                they are interrupted or terminated. The request remains in this state until all
   *                instances are interrupted or terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted_terminating</code> (EC2 Fleet) / <code>cancelled_terminating</code> (Spot Fleet) - The EC2 Fleet is deleted or the Spot Fleet request is canceled and
   *                its instances are terminating. The request remains in this state until all
   *                instances are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The EC2 Fleet or Spot Fleet request has expired. If the request was
   *                created with <code>TerminateInstancesWithExpiration</code> set, a subsequent
   *                <code>terminated</code> event indicates that the instances are
   *                terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modify_in_progress</code> - The EC2 Fleet or Spot Fleet request is being modified.
   *                The request remains in this state until the modification is fully
   *                processed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modify_succeeded</code> - The EC2 Fleet or Spot Fleet request was modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>submitted</code> - The EC2 Fleet or Spot Fleet request is being evaluated and Amazon EC2
   *                is preparing to launch the target number of instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>progress</code> - The EC2 Fleet or Spot Fleet request is in the process of being fulfilled.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>instanceChange</code> events:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>launched</code> - A new instance was launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>terminated</code> - An instance was terminated by the user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>termination_notified</code> - An instance termination notification was
   *                sent when a Spot Instance was terminated by Amazon EC2 during scale-down, when the target
   *                capacity of the fleet was modified down, for example, from a target capacity of
   *                4 to a target capacity of 3.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>Information</code> events:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>fleetProgressHalted</code> - The price in every launch specification is
   *                not valid because it is below the Spot price (all the launch specifications have
   *                produced <code>launchSpecUnusable</code> events). A launch specification might
   *                become valid if the Spot price changes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launchSpecTemporarilyBlacklisted</code> - The configuration is not valid
   *                and several attempts to launch instances have failed. For more information, see
   *                the description of the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launchSpecUnusable</code> - The price in a launch specification is not
   *                valid because it is below the Spot price.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>registerWithLoadBalancersFailed</code> - An attempt to register
   *                instances with load balancers failed. For more information, see the description
   *                of the event.</p>
   *             </li>
   *          </ul>
   */
  EventSubType?: string;

  /**
   * <p>The ID of the instance. This information is available only for
   *          <code>instanceChange</code> events.</p>
   */
  InstanceId?: string;
}

/**
 * <p>Describes an event in the history of an EC2 Fleet.</p>
 */
export interface HistoryRecordEntry {
  /**
   * <p>Information about the event.</p>
   */
  EventInformation?: EventInformation;

  /**
   * <p>The event type.</p>
   */
  EventType?: FleetEventType | string;

  /**
   * <p>The date and time of the event, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;
}

export interface DescribeFleetHistoryResult {
  /**
   * <p>Information about the events in the history of the EC2 Fleet.</p>
   */
  HistoryRecords?: HistoryRecordEntry[];

  /**
   * <p>The last date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          All records up to this time were retrieved.</p>
   *          <p>If <code>nextToken</code> indicates that there are more results, this value is not
   *          present.</p>
   */
  LastEvaluatedTime?: Date;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the EC Fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>The start date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime?: Date;
}

export interface DescribeFleetInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1 and
   *          1000. The default value is 1000. To retrieve the remaining results, make another call with
   *          the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export interface DescribeFleetInstancesResult {
  /**
   * <p>The running instances. This list is refreshed periodically and might be out of
   *          date.</p>
   */
  ActiveInstances?: ActiveInstance[];

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

export interface DescribeFleetsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1 and
   *          1000. The default value is 1000. To retrieve the remaining results, make another call with
   *          the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The IDs of the EC2 Fleets.</p>
   *          <note>
   *             <p>If a fleet is of type <code>instant</code>, you must specify the fleet ID, otherwise
   *             it does not appear in the response.</p>
   *          </note>
   */
  FleetIds?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>activity-status</code> - The progress of the EC2 Fleet ( <code>error</code> |
   *                   <code>pending-fulfillment</code> | <code>pending-termination</code> |
   *                   <code>fulfilled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>excess-capacity-termination-policy</code> - Indicates whether to terminate
   *                running instances if the target capacity is decreased below the current EC2 Fleet size
   *                   (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fleet-state</code> - The state of the EC2 Fleet (<code>submitted</code> |
   *                   <code>active</code> | <code>deleted</code> | <code>failed</code> |
   *                   <code>deleted-running</code> | <code>deleted-terminating</code> |
   *                   <code>modifying</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>replace-unhealthy-instances</code> - Indicates whether EC2 Fleet should replace
   *                unhealthy instances (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The type of request (<code>instant</code> |
   *                   <code>request</code> | <code>maintain</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export enum FleetActivityStatus {
  ERROR = "error",
  FULFILLED = "fulfilled",
  PENDING_FULFILLMENT = "pending_fulfillment",
  PENDING_TERMINATION = "pending_termination",
}

/**
 * <p>Describes the instances that could not be launched by the fleet.</p>
 */
export interface DescribeFleetError {
  /**
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * <p>Indicates if the instance that could not be launched was a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: InstanceLifecycle | string;

  /**
   * <p>The error code that indicates why the instance could not be launched. For more
   *          information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error codes</a>.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that describes why the instance could not be launched. For more
   *          information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error codes</a>.</p>
   */
  ErrorMessage?: string;
}

/**
 * <p>Describes the instances that were launched by the fleet.</p>
 */
export interface DescribeFleetsInstances {
  /**
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * <p>Indicates if the instance that was launched is a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: InstanceLifecycle | string;

  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The value is <code>Windows</code> for Windows instances. Otherwise, the value is
   *          blank.</p>
   */
  Platform?: PlatformValues | string;
}

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface FleetLaunchTemplateConfig {
  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   */
  Overrides?: FleetLaunchTemplateOverrides[];
}

/**
 * <p>Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand
 *          capacity.</p>
 *          <note>
 *             <p>This strategy can only be used if the EC2 Fleet is of type
 *             <code>instant</code>.</p>
 *          </note>
 *          <p>For more information about Capacity Reservations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">On-Demand Capacity
 *             Reservations</a> in the <i>Amazon EC2 User Guide</i>. For examples of using
 *          Capacity Reservations in an EC2 Fleet, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html">EC2 Fleet example
 *             configurations</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface CapacityReservationOptions {
  /**
   * <p>Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity.</p>
   *          <p>If you specify <code>use-capacity-reservations-first</code>, the fleet uses unused
   *          Capacity Reservations to fulfill On-Demand capacity up to the target On-Demand capacity. If
   *          multiple instance pools have unused Capacity Reservations, the On-Demand allocation
   *          strategy (<code>lowest-price</code> or <code>prioritized</code>) is applied. If the number
   *          of unused Capacity Reservations is less than the On-Demand target capacity, the remaining
   *          On-Demand target capacity is launched according to the On-Demand allocation strategy
   *             (<code>lowest-price</code> or <code>prioritized</code>).</p>
   *          <p>If you do not specify a value, the fleet fulfils the On-Demand capacity according to the
   *          chosen On-Demand allocation strategy.</p>
   */
  UsageStrategy?: FleetCapacityReservationUsageStrategy | string;
}

/**
 * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
 */
export interface OnDemandOptions {
  /**
   * <p>The strategy that determines the order of the launch template overrides to use in
   *          fulfilling On-Demand capacity.</p>
   *          <p>
   *             <code>lowest-price</code> - EC2 Fleet uses price to determine the order, launching the lowest
   *          price first.</p>
   *          <p>
   *             <code>prioritized</code> - EC2 Fleet uses the priority that you assigned to each launch
   *          template override, launching the highest priority first.</p>
   *          <p>Default: <code>lowest-price</code>
   *          </p>
   */
  AllocationStrategy?: FleetOnDemandAllocationStrategy | string;

  /**
   * <p>The strategy for using unused Capacity Reservations for fulfilling On-Demand
   *          capacity.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  CapacityReservationOptions?: CapacityReservationOptions;

  /**
   * <p>Indicates that the fleet uses a single instance type to launch all On-Demand Instances in the
   *          fleet.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleInstanceType?: boolean;

  /**
   * <p>Indicates that the fleet launches all On-Demand Instances into a single Availability Zone.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * <p>The minimum target capacity for On-Demand Instances in the fleet. If the minimum target capacity is
   *          not reached, the fleet launches no instances.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   *          <p>At least one of the following must be specified: <code>SingleAvailabilityZone</code> |
   *          <code>SingleInstanceType</code>
   *          </p>
   */
  MinTargetCapacity?: number;

  /**
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay.</p>
   */
  MaxTotalPrice?: string;
}

/**
 * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
 *          elevated risk of being interrupted.</p>
 */
export interface FleetSpotCapacityRebalance {
  /**
   * <p>The replacement strategy to use. Only available for fleets of type
   *          <code>maintain</code>.</p>
   *          <p>
   *             <code>launch</code> - EC2 Fleet launches a new replacement Spot Instance when a
   *          rebalance notification is emitted for an existing Spot Instance in the fleet. EC2 Fleet
   *          does not terminate the instances that receive a rebalance notification. You can terminate
   *          the old instances, or you can leave them running. You are charged for all instances while
   *          they are running. </p>
   *          <p>
   *             <code>launch-before-terminate</code> - EC2 Fleet launches a new replacement Spot
   *          Instance when a rebalance notification is emitted for an existing Spot Instance in the
   *          fleet, and then, after a delay that you specify (in <code>TerminationDelay</code>),
   *          terminates the instances that received a rebalance notification.</p>
   */
  ReplacementStrategy?: FleetReplacementStrategy | string;

  /**
   * <p>The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot
   *          Instance after launching a new replacement Spot Instance.</p>
   *          <p>Required when <code>ReplacementStrategy</code> is set to <code>launch-before-terminate</code>.</p>
   *          <p>Not valid when <code>ReplacementStrategy</code> is set to <code>launch</code>.</p>
   *          <p>Valid values: Minimum value of <code>120</code> seconds. Maximum value of <code>7200</code> seconds.</p>
   */
  TerminationDelay?: number;
}

/**
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
 *          interrupted.</p>
 */
export interface FleetSpotMaintenanceStrategies {
  /**
   * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
   *          elevated risk of being interrupted.</p>
   */
  CapacityRebalance?: FleetSpotCapacityRebalance;
}

/**
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
 */
export interface SpotOptions {
  /**
   * <p>The strategy that determines how to allocate the target Spot Instance capacity across the Spot Instance
   *          pools specified by the EC2 Fleet launch configuration. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-allocation-strategy.html">Allocation strategies for Spot Instances</a> in the
   *          <i>Amazon EC2 User Guide</i>.</p>
   *          <dl>
   *             <dt>price-capacity-optimized (recommended)</dt>
   *             <dd>
   *                <p>EC2 Fleet identifies the pools with
   *                   the highest capacity availability for the number of instances that are launching. This means
   *                   that we will request Spot Instances from the pools that we believe have the lowest chance of interruption
   *                   in the near term. EC2 Fleet then requests Spot Instances from the lowest priced of these pools.</p>
   *             </dd>
   *             <dt>capacity-optimized</dt>
   *             <dd>
   *                <p>EC2 Fleet identifies the pools with
   *                   the highest capacity availability for the number of instances that are launching. This means
   *                   that we will request Spot Instances from the pools that we believe have the lowest chance of interruption
   *                   in the near term. To give certain
   *                   instance types a higher chance of launching first, use
   *                   <code>capacity-optimized-prioritized</code>. Set a priority for each instance type by
   *                   using the <code>Priority</code> parameter for <code>LaunchTemplateOverrides</code>. You can
   *                   assign the same priority to different <code>LaunchTemplateOverrides</code>. EC2 implements
   *                   the priorities on a best-effort basis, but optimizes for capacity first.
   *                   <code>capacity-optimized-prioritized</code> is supported only if your EC2 Fleet uses a
   *                   launch template. Note that if the On-Demand <code>AllocationStrategy</code> is set to
   *                   <code>prioritized</code>, the same priority is applied when fulfilling On-Demand
   *                   capacity.</p>
   *             </dd>
   *             <dt>diversified</dt>
   *             <dd>
   *                <p>EC2 Fleet requests instances from all of the Spot Instance pools that you
   *                   specify.</p>
   *             </dd>
   *             <dt>lowest-price</dt>
   *             <dd>
   *                <p>EC2 Fleet requests instances from the lowest priced Spot Instance pool that
   *                   has available capacity. If the lowest priced pool doesn't have available capacity, the Spot Instances
   *                   come from the next lowest priced pool that has available capacity. If a pool runs out of
   *                   capacity before fulfilling your desired capacity, EC2 Fleet will continue to fulfill your
   *                   request by drawing from the next lowest priced pool. To ensure that your desired capacity is
   *                   met, you might receive Spot Instances from several pools. Because this strategy only considers instance
   *                   price and not capacity availability, it might lead to high interruption rates.</p>
   *             </dd>
   *          </dl>
   *          <p>Default: <code>lowest-price</code>
   *          </p>
   */
  AllocationStrategy?: SpotAllocationStrategy | string;

  /**
   * <p>The strategies for managing your workloads on your Spot Instances that will be
   *          interrupted. Currently only the capacity rebalance strategy is available.</p>
   */
  MaintenanceStrategies?: FleetSpotMaintenanceStrategies;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   *          <p>Default: <code>terminate</code>
   *          </p>
   */
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior | string;

  /**
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Supported
   *          only when <code>AllocationStrategy</code> is set to <code>lowest-price</code>. EC2 Fleet selects
   *          the cheapest Spot pools and evenly allocates your target Spot capacity across the number of
   *          Spot pools that you specify.</p>
   *          <p>Note that EC2 Fleet attempts to draw Spot Instances from the number of pools that you specify on a
   *          best effort basis. If a pool runs out of Spot capacity before fulfilling your target
   *          capacity, EC2 Fleet will continue to fulfill your request by drawing from the next cheapest
   *          pool. To ensure that your target capacity is met, you might receive Spot Instances from more than
   *          the number of pools that you specified. Similarly, if most of the pools have no Spot
   *          capacity, you might receive your full target capacity from fewer than the number of pools
   *          that you specified.</p>
   */
  InstancePoolsToUseCount?: number;

  /**
   * <p>Indicates that the fleet uses a single instance type to launch all Spot Instances in the
   *          fleet.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleInstanceType?: boolean;

  /**
   * <p>Indicates that the fleet launches all Spot Instances into a single Availability Zone.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * <p>The minimum target capacity for Spot Instances in the fleet. If the minimum target capacity is
   *          not reached, the fleet launches no instances.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   *          <p>At least one of the following must be specified: <code>SingleAvailabilityZone</code> |
   *             <code>SingleInstanceType</code>
   *          </p>
   */
  MinTargetCapacity?: number;

  /**
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay. We do not recommend
   *          using this parameter because it can lead to increased interruptions. If you do not specify
   *          this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  MaxTotalPrice?: string;
}

/**
 * <p>The number of units to request. You can choose to set the target capacity in terms of
 *          instances or a performance characteristic that is important to your application workload,
 *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
 *          specify a target capacity of 0 and add capacity later.</p>
 *          <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance
 *             <code>MaxTotalPrice</code>, or both to ensure that your fleet cost does not exceed your
 *          budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, EC2 Fleet
 *          will launch instances until it reaches the maximum amount that you're willing to pay. When
 *          the maximum amount you're willing to pay is reached, the fleet stops launching instances
 *          even if it hasn’t met the target capacity. The <code>MaxTotalPrice</code> parameters are
 *          located in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptions.html">OnDemandOptions</a>
 *          and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptions">SpotOptions</a>.</p>
 */
export interface TargetCapacitySpecification {
  /**
   * <p>The number of units to request, filled using
   *          <code>DefaultTargetCapacityType</code>.</p>
   */
  TotalTargetCapacity?: number;

  /**
   * <p>The number of On-Demand units to request. If you specify a target capacity for Spot units, you cannot specify a target capacity for On-Demand units.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * <p>The maximum number of Spot units to launch. If you specify a target capacity for On-Demand units, you cannot specify a target capacity for Spot units.</p>
   */
  SpotTargetCapacity?: number;

  /**
   * <p>The default <code>TotalTargetCapacity</code>, which is either <code>Spot</code> or
   *          <code>On-Demand</code>.</p>
   */
  DefaultTargetCapacityType?: DefaultTargetCapacityType | string;

  /**
   * <p>The unit for the target capacity. <code>TargetCapacityUnitType</code> can only be specified when <code>InstanceRequirements</code> is specified.</p>
   *          <p>Default: <code>units</code> (translates to number of instances)</p>
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | string;
}

/**
 * <p>Describes an EC2 Fleet.</p>
 */
export interface FleetData {
  /**
   * <p>The progress of the EC2 Fleet. If there is an error, the status is <code>error</code>. After
   *          all requests are placed, the status is <code>pending_fulfillment</code>. If the size of the
   *          EC2 Fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>.
   *          If the size of the EC2 Fleet is decreased, the status is <code>pending_termination</code> while
   *          instances are terminating.</p>
   */
  ActivityStatus?: FleetActivityStatus | string;

  /**
   * <p>The creation date and time of the EC2 Fleet.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>The state of the EC2 Fleet.</p>
   */
  FleetState?: FleetStateCode | string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *             idempotency</a>.</p>
   *          <p>Constraints: Maximum 64 ASCII characters</p>
   */
  ClientToken?: string;

  /**
   * <p>Indicates whether running instances should be terminated if the target capacity of the
   *          EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | string;

  /**
   * <p>The number of units fulfilled by this request compared to the set target
   *          capacity.</p>
   */
  FulfilledCapacity?: number;

  /**
   * <p>The number of units fulfilled by this request compared to the set target On-Demand
   *          capacity.</p>
   */
  FulfilledOnDemandCapacity?: number;

  /**
   * <p>The launch template and overrides.</p>
   */
  LaunchTemplateConfigs?: FleetLaunchTemplateConfig[];

  /**
   * <p>The number of units to request. You can choose to set the target capacity in terms of
   *          instances or a performance characteristic that is important to your application workload,
   *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
   *          specify a target capacity of 0 and add capacity later.</p>
   */
  TargetCapacitySpecification?: TargetCapacitySpecification;

  /**
   * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires. </p>
   */
  TerminateInstancesWithExpiration?: boolean;

  /**
   * <p>The type of request. Indicates whether the EC2 Fleet only <code>requests</code> the target
   *          capacity, or also attempts to <code>maintain</code> it. If you request a certain target
   *          capacity, EC2 Fleet only places the required requests; it does not attempt to replenish
   *          instances if capacity is diminished, and it does not submit requests in alternative
   *          capacity pools if capacity is unavailable. To maintain a certain target capacity, EC2 Fleet
   *          places the required requests to meet this target capacity. It also automatically
   *          replenishes any interrupted Spot Instances. Default: <code>maintain</code>.</p>
   */
  Type?: FleetType | string;

  /**
   * <p>The start date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          The default is to start fulfilling the request immediately. </p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          At this point, no new instance requests are placed or able to fulfill the request. The
   *          default end date is 7 days from the current date. </p>
   */
  ValidUntil?: Date;

  /**
   * <p>Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for
   *          fleets of type <code>maintain</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#ec2-fleet-health-checks">EC2 Fleet
   *             health checks</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * <p>The configuration of Spot Instances in an EC2 Fleet.</p>
   */
  SpotOptions?: SpotOptions;

  /**
   * <p>The allocation strategy of On-Demand Instances in an EC2 Fleet.</p>
   */
  OnDemandOptions?: OnDemandOptions;

  /**
   * <p>The tags for an EC2 Fleet resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Information about the instances that could not be launched by the fleet. Valid only when
   *             <b>Type</b> is set to <code>instant</code>.</p>
   */
  Errors?: DescribeFleetError[];

  /**
   * <p>Information about the instances that were launched by the fleet. Valid only when
   *             <b>Type</b> is set to <code>instant</code>.</p>
   */
  Instances?: DescribeFleetsInstances[];

  /**
   * <p>Reserved.</p>
   */
  Context?: string;
}

export interface DescribeFleetsResult {
  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the EC2 Fleets.</p>
   */
  Fleets?: FleetData[];
}

export interface DescribeFlowLogsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>deliver-log-status</code> - The status of the logs delivery (<code>SUCCESS</code> |
   *                     <code>FAILED</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>log-destination-type</code> - The type of destination for the flow log
   *                     data (<code>cloud-watch-logs</code> | <code>s3</code> |
   *                         <code>kinesis-data-firehose</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>flow-log-id</code> - The ID of the flow log.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>log-group-name</code> - The name of the log group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the VPC, subnet, or network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-type</code> - The type of traffic (<code>ACCEPT</code> |
   *                     <code>REJECT</code> | <code>ALL</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>One or more flow log IDs.</p>
   *          <p>Constraint: Maximum of 1000 flow log IDs.</p>
   */
  FlowLogIds?: string[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes the destination options for a flow log.</p>
 */
export interface DestinationOptionsResponse {
  /**
   * <p>The format for the flow log.</p>
   */
  FileFormat?: DestinationFileFormat | string;

  /**
   * <p>Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3.</p>
   */
  HiveCompatiblePartitions?: boolean;

  /**
   * <p>Indicates whether to partition the flow log per hour.</p>
   */
  PerHourPartition?: boolean;
}

/**
 * <p>Describes a flow log.</p>
 */
export interface FlowLog {
  /**
   * <p>The date and time the flow log was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the error that occurred. <code>Rate limited</code> indicates that
   *             CloudWatch Logs throttling has been applied for one or more network interfaces, or that you've
   *             reached the limit on the number of log groups that you can create. <code>Access
   *                 error</code> indicates that the IAM role associated with the flow log does not have
   *             sufficient permissions to publish to CloudWatch Logs. <code>Unknown error</code> indicates an
   *             internal error.</p>
   */
  DeliverLogsErrorMessage?: string;

  /**
   * <p>The ARN of the IAM role allows the service to publish logs to CloudWatch Logs.</p>
   */
  DeliverLogsPermissionArn?: string;

  /**
   * <p>The ARN of the IAM role that allows the service to publish flow logs across accounts.</p>
   */
  DeliverCrossAccountRole?: string;

  /**
   * <p>The status of the logs delivery (<code>SUCCESS</code> | <code>FAILED</code>).</p>
   */
  DeliverLogsStatus?: string;

  /**
   * <p>The ID of the flow log.</p>
   */
  FlowLogId?: string;

  /**
   * <p>The status of the flow log (<code>ACTIVE</code>).</p>
   */
  FlowLogStatus?: string;

  /**
   * <p>The name of the flow log group.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The ID of the resource being monitored.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of traffic captured for the flow log.</p>
   */
  TrafficType?: TrafficType | string;

  /**
   * <p>The type of destination for the flow log data.</p>
   */
  LogDestinationType?: LogDestinationType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination for the flow log data.</p>
   */
  LogDestination?: string;

  /**
   * <p>The format of the flow log record.</p>
   */
  LogFormat?: string;

  /**
   * <p>The tags for the flow log.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record.</p>
   *          <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based
   *                 instance</a>, the aggregation interval is always 60 seconds (1 minute) or less,
   *             regardless of the specified value.</p>
   *          <p>Valid Values: <code>60</code> | <code>600</code>
   *          </p>
   */
  MaxAggregationInterval?: number;

  /**
   * <p>The destination options.</p>
   */
  DestinationOptions?: DestinationOptionsResponse;
}

export interface DescribeFlowLogsResult {
  /**
   * <p>Information about the flow logs.</p>
   */
  FlowLogs?: FlowLog[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export enum FpgaImageAttributeName {
  description = "description",
  loadPermission = "loadPermission",
  name = "name",
  productCodes = "productCodes",
}

export interface DescribeFpgaImageAttributeRequest {
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

  /**
   * <p>The AFI attribute.</p>
   */
  Attribute: FpgaImageAttributeName | string | undefined;
}

export enum PermissionGroup {
  all = "all",
}

/**
 * <p>Describes a load permission.</p>
 */
export interface LoadPermission {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  UserId?: string;

  /**
   * <p>The name of the group.</p>
   */
  Group?: PermissionGroup | string;
}

export enum ProductCodeValues {
  devpay = "devpay",
  marketplace = "marketplace",
}

/**
 * <p>Describes a product code.</p>
 */
export interface ProductCode {
  /**
   * <p>The product code.</p>
   */
  ProductCodeId?: string;

  /**
   * <p>The type of product code.</p>
   */
  ProductCodeType?: ProductCodeValues | string;
}

/**
 * <p>Describes an Amazon FPGA image (AFI) attribute.</p>
 */
export interface FpgaImageAttribute {
  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId?: string;

  /**
   * <p>The name of the AFI.</p>
   */
  Name?: string;

  /**
   * <p>The description of the AFI.</p>
   */
  Description?: string;

  /**
   * <p>The load permissions.</p>
   */
  LoadPermissions?: LoadPermission[];

  /**
   * <p>The product codes.</p>
   */
  ProductCodes?: ProductCode[];
}

export interface DescribeFpgaImageAttributeResult {
  /**
   * <p>Information about the attribute.</p>
   */
  FpgaImageAttribute?: FpgaImageAttribute;
}

export interface DescribeFpgaImagesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The AFI IDs.</p>
   */
  FpgaImageIds?: string[];

  /**
   * <p>Filters the AFI by owner. Specify an Amazon Web Services account ID, <code>self</code>
   * 			(owner is the sender of the request), or an Amazon Web Services owner alias (valid values are
   * 			<code>amazon</code> | <code>aws-marketplace</code>).</p>
   */
  Owners?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The creation time of the AFI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fpga-image-id</code> - The FPGA image identifier (AFI ID).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fpga-image-global-id</code> - The global FPGA image identifier (AGFI ID).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of the AFI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the AFI owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>shell-version</code> - The version of the Amazon Web Services Shell that was used to create the bitstream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the AFI (<code>pending</code> | <code>failed</code> | <code>available</code> | <code>unavailable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update-time</code> - The time of the most recent update.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.</p>
 */
export interface PciId {
  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the vendor.</p>
   */
  VendorId?: string;

  /**
   * <p>The ID of the subsystem.</p>
   */
  SubsystemId?: string;

  /**
   * <p>The ID of the vendor for the subsystem.</p>
   */
  SubsystemVendorId?: string;
}

export enum FpgaImageStateCode {
  available = "available",
  failed = "failed",
  pending = "pending",
  unavailable = "unavailable",
}

/**
 * <p>Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).</p>
 */
export interface FpgaImageState {
  /**
   * <p>The state. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code> - AFI bitstream generation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code> - The AFI is available for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - AFI bitstream generation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unavailable</code> - The AFI is no longer available for use.</p>
   *             </li>
   *          </ul>
   */
  Code?: FpgaImageStateCode | string;

  /**
   * <p>If the state is <code>failed</code>, this is the error message.</p>
   */
  Message?: string;
}

/**
 * <p>Describes an Amazon FPGA image (AFI).</p>
 */
export interface FpgaImage {
  /**
   * <p>The FPGA image identifier (AFI ID).</p>
   */
  FpgaImageId?: string;

  /**
   * <p>The global FPGA image identifier (AGFI ID).</p>
   */
  FpgaImageGlobalId?: string;

  /**
   * <p>The name of the AFI.</p>
   */
  Name?: string;

  /**
   * <p>The description of the AFI.</p>
   */
  Description?: string;

  /**
   * <p>The version of the Amazon Web Services Shell that was used to create the bitstream.</p>
   */
  ShellVersion?: string;

  /**
   * <p>Information about the PCI bus.</p>
   */
  PciId?: PciId;

  /**
   * <p>Information about the state of the AFI.</p>
   */
  State?: FpgaImageState;

  /**
   * <p>The date and time the AFI was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The time of the most recent update to the AFI.</p>
   */
  UpdateTime?: Date;

  /**
   * <p>The ID of the Amazon Web Services account that owns the AFI.</p>
   */
  OwnerId?: string;

  /**
   * <p>The alias of the AFI owner. Possible values include <code>self</code>, <code>amazon</code>, and <code>aws-marketplace</code>.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The product codes for the AFI.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>Any tags assigned to the AFI.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether the AFI is public.</p>
   */
  Public?: boolean;

  /**
   * <p>Indicates whether data retention support is enabled for the AFI.</p>
   */
  DataRetentionSupport?: boolean;

  /**
   * <p>The instance types supported by the AFI.</p>
   */
  InstanceTypes?: string[];
}

export interface DescribeFpgaImagesResult {
  /**
   * <p>Information about the FPGA images.</p>
   */
  FpgaImages?: FpgaImage[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeHostReservationOfferingsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-family</code> - The instance family of the offering (for example,
   *                         <code>m4</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>payment-option</code> - The payment option (<code>NoUpfront</code> |
   *                         <code>PartialUpfront</code> | <code>AllUpfront</code>).</p>
   *             </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>This is the maximum duration of the reservation to purchase, specified in seconds.
   *             Reservations are available in one-year and three-year terms. The number of seconds
   *             specified must be the number of seconds in a year (365x24x60x60) times one of the
   *             supported durations (1 or 3). For example, specify 94608000 for three years.</p>
   */
  MaxDuration?: number;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>This is the minimum duration of the reservation you'd like to purchase, specified in
   *             seconds. Reservations are available in one-year and three-year terms. The number of
   *             seconds specified must be the number of seconds in a year (365x24x60x60) times one of
   *             the supported durations (1 or 3). For example, specify 31536000 for one year.</p>
   */
  MinDuration?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the reservation offering.</p>
   */
  OfferingId?: string;
}

export enum PaymentOption {
  ALL_UPFRONT = "AllUpfront",
  NO_UPFRONT = "NoUpfront",
  PARTIAL_UPFRONT = "PartialUpfront",
}

/**
 * <p>Details about the Dedicated Host Reservation offering.</p>
 */
export interface HostOffering {
  /**
   * <p>The currency of the offering.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The duration of the offering (in seconds).</p>
   */
  Duration?: number;

  /**
   * <p>The hourly price of the offering.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance family of the offering.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The ID of the offering.</p>
   */
  OfferingId?: string;

  /**
   * <p>The available payment option.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The upfront price of the offering. Does not apply to No Upfront offerings.</p>
   */
  UpfrontPrice?: string;
}

export interface DescribeHostReservationOfferingsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the offerings.</p>
   */
  OfferingSet?: HostOffering[];
}

export interface DescribeHostReservationsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-family</code> - The instance family (for example,
   *                     <code>m4</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>payment-option</code> - The payment option (<code>NoUpfront</code> |
   *                         <code>PartialUpfront</code> | <code>AllUpfront</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the reservation (<code>payment-pending</code>
   *                     | <code>payment-failed</code> | <code>active</code> |
   *                     <code>retired</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>The host reservation IDs.</p>
   */
  HostReservationIdSet?: string[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export enum ReservationState {
  ACTIVE = "active",
  PAYMENT_FAILED = "payment-failed",
  PAYMENT_PENDING = "payment-pending",
  RETIRED = "retired",
}

/**
 * <p>Details about the Dedicated Host Reservation and associated Dedicated Hosts.</p>
 */
export interface HostReservation {
  /**
   * <p>The number of Dedicated Hosts the reservation is associated with.</p>
   */
  Count?: number;

  /**
   * <p>The currency in which the <code>upfrontPrice</code> and <code>hourlyPrice</code>
   *             amounts are specified. At this time, the only supported currency is
   *             <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The length of the reservation's term, specified in seconds. Can be <code>31536000 (1
   *                 year)</code> | <code>94608000 (3 years)</code>.</p>
   */
  Duration?: number;

  /**
   * <p>The date and time that the reservation ends.</p>
   */
  End?: Date;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   */
  HostIdSet?: string[];

  /**
   * <p>The ID of the reservation that specifies the associated Dedicated Hosts.</p>
   */
  HostReservationId?: string;

  /**
   * <p>The hourly price of the reservation.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance family of the Dedicated Host Reservation. The instance family on the
   *             Dedicated Host must be the same in order for it to benefit from the reservation.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The ID of the reservation. This remains the same regardless of which Dedicated Hosts
   *             are associated with it.</p>
   */
  OfferingId?: string;

  /**
   * <p>The payment option selected for this reservation.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The date and time that the reservation started.</p>
   */
  Start?: Date;

  /**
   * <p>The state of the reservation.</p>
   */
  State?: ReservationState | string;

  /**
   * <p>The upfront price of the reservation.</p>
   */
  UpfrontPrice?: string;

  /**
   * <p>Any tags assigned to the Dedicated Host Reservation.</p>
   */
  Tags?: Tag[];
}

export interface DescribeHostReservationsResult {
  /**
   * <p>Details about the reservation's configuration.</p>
   */
  HostReservationSet?: HostReservation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeHostsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>auto-placement</code> - Whether auto-placement is enabled or disabled
   *                         (<code>on</code> | <code>off</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the host.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>client-token</code> - The idempotency token that you provided when you
   *                     allocated the host.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>host-reservation-id</code> - The ID of the reservation assigned to this
   *                     host.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type size that the Dedicated Host is
   *                     configured to support.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The allocation state of the Dedicated Host
   *                         (<code>available</code> | <code>under-assessment</code> |
   *                         <code>permanent-failure</code> | <code>released</code> |
   *                         <code>released-permanent-failure</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>The IDs of the Dedicated Hosts. The IDs are used for targeted instance
   *             launches.</p>
   */
  HostIds?: string[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   *          <p>You cannot specify this parameter and the host IDs parameter in the same
   *             request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Information about the number of instances that can be launched onto the Dedicated
 *             Host.</p>
 */
export interface InstanceCapacity {
  /**
   * <p>The number of instances that can be launched onto the Dedicated Host based on the
   *             host's available capacity.</p>
   */
  AvailableCapacity?: number;

  /**
   * <p>The instance type supported by the Dedicated Host.</p>
   */
  InstanceType?: string;

  /**
   * <p>The total number of instances that can be launched onto the Dedicated Host if there
   *             are no instances running on it.</p>
   */
  TotalCapacity?: number;
}

/**
 * <p>The capacity information for instances that can be launched onto the Dedicated Host.
 *         </p>
 */
export interface AvailableCapacity {
  /**
   * <p>The number of instances that can be launched onto the Dedicated Host depending on the
   *             host's available capacity. For Dedicated Hosts that support multiple instance types,
   *             this parameter represents the number of instances for each instance size that is
   *             supported on the host.</p>
   */
  AvailableInstanceCapacity?: InstanceCapacity[];

  /**
   * <p>The number of vCPUs available for launching instances onto the Dedicated Host.</p>
   */
  AvailableVCpus?: number;
}

/**
 * <p>Describes the properties of a Dedicated Host.</p>
 */
export interface HostProperties {
  /**
   * <p>The number of cores on the Dedicated Host.</p>
   */
  Cores?: number;

  /**
   * <p>The instance type supported by the Dedicated Host. For example, <code>m5.large</code>.
   *             If the host supports multiple instance types, no <b>instanceType</b> is returned.</p>
   */
  InstanceType?: string;

  /**
   * <p>The instance family supported by the Dedicated Host. For example,
   *             <code>m5</code>.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The number of sockets on the Dedicated Host.</p>
   */
  Sockets?: number;

  /**
   * <p>The total number of vCPUs on the Dedicated Host.</p>
   */
  TotalVCpus?: number;
}

/**
 * <p>Describes an instance running on a Dedicated Host.</p>
 */
export interface HostInstance {
  /**
   * <p>The ID of instance that is running on the Dedicated Host.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance type (for example, <code>m3.medium</code>) of the running
   *             instance.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the instance.</p>
   */
  OwnerId?: string;
}

/**
 * <p>Describes the properties of the Dedicated Host.</p>
 */
export interface Host {
  /**
   * <p>Whether auto-placement is on or off.</p>
   */
  AutoPlacement?: AutoPlacement | string;

  /**
   * <p>The Availability Zone of the Dedicated Host.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Information about the instances running on the Dedicated Host.</p>
   */
  AvailableCapacity?: AvailableCapacity;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the Dedicated Host.</p>
   */
  HostId?: string;

  /**
   * <p>The hardware specifications of the Dedicated Host.</p>
   */
  HostProperties?: HostProperties;

  /**
   * <p>The reservation ID of the Dedicated Host. This returns a <code>null</code> response if
   *             the Dedicated Host doesn't have an associated reservation.</p>
   */
  HostReservationId?: string;

  /**
   * <p>The IDs and instance type that are currently running on the Dedicated Host.</p>
   */
  Instances?: HostInstance[];

  /**
   * <p>The Dedicated Host's state.</p>
   */
  State?: AllocationState | string;

  /**
   * <p>The time that the Dedicated Host was allocated.</p>
   */
  AllocationTime?: Date;

  /**
   * <p>The time that the Dedicated Host was released.</p>
   */
  ReleaseTime?: Date;

  /**
   * <p>Any tags assigned to the Dedicated Host.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether host recovery is enabled or disabled for the Dedicated Host.</p>
   */
  HostRecovery?: HostRecovery | string;

  /**
   * <p>Indicates whether the Dedicated Host supports multiple instance types of the same
   *             instance family. If the value is <code>on</code>, the Dedicated Host supports multiple
   *             instance types in the instance family. If the value is <code>off</code>, the Dedicated
   *             Host supports a single instance type only.</p>
   */
  AllowsMultipleInstanceTypes?: AllowsMultipleInstanceTypes | string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Dedicated Host.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the Availability Zone in which the Dedicated Host is allocated.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>Indicates whether the Dedicated Host is in a host resource group. If <b>memberOfServiceLinkedResourceGroup</b> is <code>true</code>, the
   *             host is in a host resource group; otherwise, it is not.</p>
   */
  MemberOfServiceLinkedResourceGroup?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which the
   *             Dedicated Host is allocated.</p>
   */
  OutpostArn?: string;
}

export interface DescribeHostsResult {
  /**
   * <p>Information about the Dedicated Hosts.</p>
   */
  Hosts?: Host[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeIamInstanceProfileAssociationsRequest {
  /**
   * <p>The IAM instance profile associations.</p>
   */
  AssociationIds?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association (<code>associating</code> |
   *                 <code>associated</code> | <code>disassociating</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeIamInstanceProfileAssociationsResult {
  /**
   * <p>Information about the IAM instance profile associations.</p>
   */
  IamInstanceProfileAssociations?: IamInstanceProfileAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeIdentityIdFormatRequest {
  /**
   * <p>The ARN of the principal, which can be an IAM role, IAM user, or the root user.</p>
   */
  PrincipalArn: string | undefined;

  /**
   * <p>The type of resource: <code>bundle</code> |
   *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *           <code>network-acl</code> | <code>network-acl-association</code> |
   *           <code>network-interface</code> | <code>network-interface-attachment</code> |
   *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *           <code>route-table-association</code> | <code>security-group</code> |
   *           <code>snapshot</code> | <code>subnet</code> |
   *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
   *          </p>
   */
  Resource?: string;
}

export interface DescribeIdentityIdFormatResult {
  /**
   * <p>Information about the ID format for the resources.</p>
   */
  Statuses?: IdFormat[];
}

export interface DescribeIdFormatRequest {
  /**
   * <p>The type of resource: <code>bundle</code> |
   *            <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *            <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *            <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *            <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *            <code>network-acl</code> | <code>network-acl-association</code> |
   *            <code>network-interface</code> | <code>network-interface-attachment</code> |
   *            <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *            <code>route-table-association</code> | <code>security-group</code> |
   *            <code>snapshot</code> | <code>subnet</code> |
   *            <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *            | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *            <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
   *          </p>
   */
  Resource?: string;
}

export interface DescribeIdFormatResult {
  /**
   * <p>Information about the ID format for the resource.</p>
   */
  Statuses?: IdFormat[];
}

export enum ImageAttributeName {
  blockDeviceMapping = "blockDeviceMapping",
  bootMode = "bootMode",
  description = "description",
  imdsSupport = "imdsSupport",
  kernel = "kernel",
  lastLaunchedTime = "lastLaunchedTime",
  launchPermission = "launchPermission",
  productCodes = "productCodes",
  ramdisk = "ramdisk",
  sriovNetSupport = "sriovNetSupport",
  tpmSupport = "tpmSupport",
  uefiData = "uefiData",
}

/**
 * <p>Contains the parameters for DescribeImageAttribute.</p>
 */
export interface DescribeImageAttributeRequest {
  /**
   * <p>The AMI attribute.</p>
   *          <p>
   *             <b>Note</b>: The <code>blockDeviceMapping</code> attribute is deprecated.
   *    	    Using this attribute returns the <code>Client.AuthFailure</code> error. To get information about
   *    	    the block device mappings for an AMI, use the <a>DescribeImages</a> action.</p>
   */
  Attribute: ImageAttributeName | string | undefined;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes a launch permission.</p>
 */
export interface LaunchPermission {
  /**
   * <p>The name of the group.</p>
   */
  Group?: PermissionGroup | string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   *          <p>Constraints: Up to 10 000 account IDs can be specified in a single request.</p>
   */
  UserId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an organization.</p>
   */
  OrganizationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an organizational unit (OU).</p>
   */
  OrganizationalUnitArn?: string;
}

/**
 * <p>Describes an image attribute.</p>
 */
export interface ImageAttribute {
  /**
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The launch permissions.</p>
   */
  LaunchPermissions?: LaunchPermission[];

  /**
   * <p>The product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>A description for the AMI.</p>
   */
  Description?: AttributeValue;

  /**
   * <p>The kernel ID.</p>
   */
  KernelId?: AttributeValue;

  /**
   * <p>The RAM disk ID.</p>
   */
  RamdiskId?: AttributeValue;

  /**
   * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</p>
   */
  SriovNetSupport?: AttributeValue;

  /**
   * <p>The boot mode.</p>
   */
  BootMode?: AttributeValue;

  /**
   * <p>If the image is configured for NitroTPM support, the value is <code>v2.0</code>.</p>
   */
  TpmSupport?: AttributeValue;

  /**
   * <p>Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data,
   *       use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceUefiData">GetInstanceUefiData</a> command. You can inspect and modify the UEFI data by using the
   *       <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool</a> on
   *       GitHub. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   */
  UefiData?: AttributeValue;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *         format</a>, when the AMI was last used to launch an EC2 instance. When the AMI is used
   *       to launch an instance, there is a 24-hour delay before that usage is reported.</p>
   *          <note>
   *             <p>
   *                <code>lastLaunchedTime</code> data is available starting April 2017.</p>
   *          </note>
   */
  LastLaunchedTime?: AttributeValue;

  /**
   * <p>If <code>v2.0</code>, it indicates that IMDSv2 is specified in the AMI. Instances launched
   *       from this AMI will have <code>HttpTokens</code> automatically set to <code>required</code> so
   *       that, by default, the instance requires that IMDSv2 is used when requesting instance metadata.
   *       In addition, <code>HttpPutResponseHopLimit</code> is set to <code>2</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure
   *         the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  ImdsSupport?: AttributeValue;
}

export interface DescribeImagesRequest {
  /**
   * <p>Scopes the images by users with explicit launch permissions.
   *        Specify an Amazon Web Services account ID, <code>self</code> (the sender of the request),
   * 				or <code>all</code> (public AMIs).</p>
   *          <ul>
   *             <li>
   *                <p>If you specify an Amazon Web Services account ID that is not your own, only AMIs
   *           shared with that specific Amazon Web Services account ID are returned. However, AMIs that
   *           are shared with the account’s organization or organizational unit (OU) are not
   *           returned.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>self</code> or your own Amazon Web Services account ID, AMIs
   *           shared with your account are returned. In addition, AMIs that are shared with the
   *           organization or OU of which you are member are also returned. </p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>all</code>, all public AMIs are returned.</p>
   *             </li>
   *          </ul>
   */
  ExecutableUsers?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>architecture</code> - The image architecture (<code>i386</code> |
   *             <code>x86_64</code> | <code>arm64</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.delete-on-termination</code> - A Boolean value that indicates
   *         	whether the Amazon EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.device-name</code> - The device name specified in the block device mapping (for
   *           example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.snapshot-id</code> - The ID of the snapshot used for the Amazon EBS
   *           volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.volume-size</code> - The volume size of the Amazon EBS volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.volume-type</code> - The volume type of the Amazon EBS volume
   *             (<code>io1</code> | <code>io2</code> | <code>gp2</code> | <code>gp3</code> | <code>sc1
   *           </code>| <code>st1</code> | <code>standard</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.encrypted</code> - A Boolean that indicates whether the Amazon EBS volume is encrypted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>creation-date</code> - The time when the image was created, in the ISO 8601
   *           format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example,
   *             <code>2021-09-29T11:04:43.305Z</code>. You can use a wildcard (<code>*</code>), for
   *           example, <code>2021-09-29T*</code>, which matches an entire day.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the image (provided during image
   *           creation).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ena-support</code> - A Boolean that indicates whether enhanced networking
   *           with ENA is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hypervisor</code> - The hypervisor type (<code>ovm</code> |
   *           <code>xen</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-id</code> - The ID of the image.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-type</code> - The image type (<code>machine</code> | <code>kernel</code> |
   *             <code>ramdisk</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-public</code> - A Boolean that indicates whether the image is public.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manifest-location</code> - The location of the image manifest.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of the AMI (provided during image creation).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-alias</code> - The owner alias (<code>amazon</code> | <code>aws-marketplace</code>).
   *           The valid aliases are defined in an Amazon-maintained list. This is not the Amazon Web Services account alias that can be
   *         	set using the IAM console. We recommend that you use the <b>Owner</b>
   *         	request parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner. We recommend that you use the
   *       		<b>Owner</b> request parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform. The only supported value is <code>windows</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code.type</code> - The type of the product code (<code>marketplace</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-name</code> - The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-type</code> - The type of the root device volume (<code>ebs</code> |
   *             <code>instance-store</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the image (<code>available</code> | <code>pending</code>
   *           | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-code</code> - The reason code for the state change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-message</code> - The message for the state change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sriov-net-support</code> - A value of <code>simple</code> indicates
   *                     that enhanced networking with the Intel 82599 VF interface is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>virtualization-type</code> - The virtualization type (<code>paravirtual</code> |
   *             <code>hvm</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The image IDs.</p>
   *          <p>Default: Describes all images available to you.</p>
   */
  ImageIds?: string[];

  /**
   * <p>Scopes the results to images with the specified owners. You can specify a combination of
   *       Amazon Web Services account IDs, <code>self</code>, <code>amazon</code>, and <code>aws-marketplace</code>.
   *       If you omit this parameter, the results include all images for which you have launch permissions,
   *       regardless of ownership.</p>
   */
  Owners?: string[];

  /**
   * <p>Specifies whether to include deprecated AMIs.</p>
   *          <p>Default: No deprecated AMIs are included in the response.</p>
   *          <note>
   *             <p>If you are the AMI owner, all deprecated AMIs appear in the response regardless of what
   *         you specify for this parameter.</p>
   *          </note>
   */
  IncludeDeprecated?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export enum ArchitectureValues {
  arm64 = "arm64",
  arm64_mac = "arm64_mac",
  i386 = "i386",
  x86_64 = "x86_64",
  x86_64_mac = "x86_64_mac",
}

export enum BootModeValues {
  legacy_bios = "legacy-bios",
  uefi = "uefi",
}

export enum HypervisorType {
  ovm = "ovm",
  xen = "xen",
}

export enum ImageTypeValues {
  kernel = "kernel",
  machine = "machine",
  ramdisk = "ramdisk",
}

export enum ImdsSupportValues {
  v2_0 = "v2.0",
}

export enum DeviceType {
  ebs = "ebs",
  instance_store = "instance-store",
}

export enum ImageState {
  available = "available",
  deregistered = "deregistered",
  error = "error",
  failed = "failed",
  invalid = "invalid",
  pending = "pending",
  transient = "transient",
}

export enum TpmSupportValues {
  v2_0 = "v2.0",
}

export enum VirtualizationType {
  hvm = "hvm",
  paravirtual = "paravirtual",
}

/**
 * <p>Describes an image.</p>
 */
export interface Image {
  /**
   * <p>The architecture of the image.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * <p>The date and time the image was created.</p>
   */
  CreationDate?: string;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The location of the AMI.</p>
   */
  ImageLocation?: string;

  /**
   * <p>The type of image.</p>
   */
  ImageType?: ImageTypeValues | string;

  /**
   * <p>Indicates whether the image has public launch permissions. The value is <code>true</code> if
   * 				this image has public launch permissions or <code>false</code>
   * 				if it has only implicit and explicit launch permissions.</p>
   */
  Public?: boolean;

  /**
   * <p>The kernel associated with the image, if any. Only applicable for machine images.</p>
   */
  KernelId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the image.</p>
   */
  OwnerId?: string;

  /**
   * <p>This value is set to <code>windows</code> for Windows AMIs; otherwise, it is blank.</p>
   */
  Platform?: PlatformValues | string;

  /**
   * <p>The platform details associated with the billing code of the AMI. For more information,
   *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html">Understand
   *         AMI billing information</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  PlatformDetails?: string;

  /**
   * <p>The operation of the Amazon EC2 instance and the billing code that is associated with the AMI.
   *         <code>usageOperation</code> corresponds to the <a href="https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#Lineitem-details-O-Operation">lineitem/Operation</a> column on your Amazon Web Services Cost and Usage Report and in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html">Amazon Web Services Price
   *         	List API</a>. You can view these fields on the <b>Instances</b> or
   *     	<b>AMIs</b> pages in the Amazon EC2 console, or in the responses that are
   *     	returned by the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html">DescribeImages</a>
   *     	command in the Amazon EC2 API, or the <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html">describe-images</a>
   *     	command in the CLI.</p>
   */
  UsageOperation?: string;

  /**
   * <p>Any product codes associated with the AMI.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The RAM disk associated with the image, if any. Only applicable for machine images.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The current state of the AMI. If the state is <code>available</code>, the image is successfully registered and can be used to launch an instance.</p>
   */
  State?: ImageState | string;

  /**
   * <p>Any block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>The description of the AMI that was provided during image creation.</p>
   */
  Description?: string;

  /**
   * <p>Specifies whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: boolean;

  /**
   * <p>The hypervisor type of the image.</p>
   */
  Hypervisor?: HypervisorType | string;

  /**
   * <p>The Amazon Web Services account alias (for example, <code>amazon</code>, <code>self</code>) or
   *        the Amazon Web Services account ID of the AMI owner.</p>
   */
  ImageOwnerAlias?: string;

  /**
   * <p>The name of the AMI that was provided during image creation.</p>
   */
  Name?: string;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * <p>The type of root device used by the AMI. The AMI can use an Amazon EBS volume or an instance store volume.</p>
   */
  RootDeviceType?: DeviceType | string;

  /**
   * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</p>
   */
  SriovNetSupport?: string;

  /**
   * <p>The reason for the state change.</p>
   */
  StateReason?: StateReason;

  /**
   * <p>Any tags assigned to the image.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The type of virtualization of the AMI.</p>
   */
  VirtualizationType?: VirtualizationType | string;

  /**
   * <p>The boot mode of the image. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *         <i>Amazon EC2 User Guide</i>.</p>
   */
  BootMode?: BootModeValues | string;

  /**
   * <p>If the image is configured for NitroTPM support, the value is <code>v2.0</code>.
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html">NitroTPM</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   */
  TpmSupport?: TpmSupportValues | string;

  /**
   * <p>The date and time to deprecate the AMI, in UTC, in the following format:
   *      <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.
   *       If you specified a value for seconds, Amazon EC2 rounds the seconds to the
   *       nearest minute.</p>
   */
  DeprecationTime?: string;

  /**
   * <p>If <code>v2.0</code>, it indicates that IMDSv2 is specified in the AMI. Instances launched
   *       from this AMI will have <code>HttpTokens</code> automatically set to <code>required</code> so
   *       that, by default, the instance requires that IMDSv2 is used when requesting instance metadata.
   *       In addition, <code>HttpPutResponseHopLimit</code> is set to <code>2</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure
   *         the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  ImdsSupport?: ImdsSupportValues | string;
}

export interface DescribeImagesResult {
  /**
   * <p>Information about the images.</p>
   */
  Images?: Image[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeImportImageTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Filter tasks using the <code>task-state</code> filter and one of the following values: <code>active</code>,
   *     <code>completed</code>, <code>deleting</code>, or <code>deleted</code>.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of the import image tasks.</p>
   */
  ImportTaskIds?: string[];

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token that indicates the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p> The response information for license configurations.</p>
 */
export interface ImportImageLicenseConfigurationResponse {
  /**
   * <p>The ARN of a license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

/**
 * <p>Describes the Amazon S3 bucket for the disk image.</p>
 */
export interface UserBucketDetails {
  /**
   * <p>The Amazon S3 bucket from which the disk image was created.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The file name of the disk image.</p>
   */
  S3Key?: string;
}

/**
 * <p>Describes the snapshot created from the imported disk.</p>
 */
export interface SnapshotDetail {
  /**
   * <p>A description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The block device mapping for the snapshot.</p>
   */
  DeviceName?: string;

  /**
   * <p>The size of the disk in the snapshot, in GiB.</p>
   */
  DiskImageSize?: number;

  /**
   * <p>The format of the disk image from which the snapshot is created.</p>
   */
  Format?: string;

  /**
   * <p>The percentage of progress for the task.</p>
   */
  Progress?: string;

  /**
   * <p>The snapshot ID of the disk being imported.</p>
   */
  SnapshotId?: string;

  /**
   * <p>A brief status of the snapshot creation.</p>
   */
  Status?: string;

  /**
   * <p>A detailed status message for the snapshot creation.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The URL used to access the disk image.</p>
   */
  Url?: string;

  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucketDetails;
}

/**
 * <p>Describes an import image task.</p>
 */
export interface ImportImageTask {
  /**
   * <p>The architecture of the virtual machine.</p>
   *          <p>Valid values: <code>i386</code> | <code>x86_64</code> | <code>arm64</code>
   *          </p>
   */
  Architecture?: string;

  /**
   * <p>A description of the import task.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the image is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The target hypervisor for the import task.</p>
   *          <p>Valid values: <code>xen</code>
   *          </p>
   */
  Hypervisor?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) of the imported virtual machine.</p>
   */
  ImageId?: string;

  /**
   * <p>The ID of the import image task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>The identifier for the KMS key that was used to create the encrypted image.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The license type of the virtual machine.</p>
   */
  LicenseType?: string;

  /**
   * <p>The description string for the import image task.</p>
   */
  Platform?: string;

  /**
   * <p>The percentage of progress of the import image task.</p>
   */
  Progress?: string;

  /**
   * <p>Information about the snapshots.</p>
   */
  SnapshotDetails?: SnapshotDetail[];

  /**
   * <p>A brief status for the import image task.</p>
   */
  Status?: string;

  /**
   * <p>A descriptive status message for the import image task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The tags for the import image task.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ARNs of the license configurations that are associated with the import image task.</p>
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationResponse[];

  /**
   * <p>The usage operation value.</p>
   */
  UsageOperation?: string;

  /**
   * <p>The boot mode of the virtual machine.</p>
   */
  BootMode?: BootModeValues | string;
}

export interface DescribeImportImageTasksResult {
  /**
   * <p>A list of zero or more import image tasks that are currently active or were completed or canceled in the
   *    previous 7 days.</p>
   */
  ImportImageTasks?: ImportImageTask[];

  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   */
  NextToken?: string;
}

export interface DescribeImportSnapshotTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   */
  Filters?: Filter[];

  /**
   * <p>A list of import snapshot task IDs.</p>
   */
  ImportTaskIds?: string[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call
   *    with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token that indicates the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Details about the import snapshot task.</p>
 */
export interface SnapshotTaskDetail {
  /**
   * <p>The description of the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The size of the disk in the snapshot, in GiB.</p>
   */
  DiskImageSize?: number;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The format of the disk image from which the snapshot is created.</p>
   */
  Format?: string;

  /**
   * <p>The identifier for the KMS key that was used to create the encrypted snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The percentage of completion for the import snapshot task.</p>
   */
  Progress?: string;

  /**
   * <p>The snapshot ID of the disk being imported.</p>
   */
  SnapshotId?: string;

  /**
   * <p>A brief status for the import snapshot task.</p>
   */
  Status?: string;

  /**
   * <p>A detailed status message for the import snapshot task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The URL of the disk image from which the snapshot is created.</p>
   */
  Url?: string;

  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucketDetails;
}

/**
 * <p>Describes an import snapshot task.</p>
 */
export interface ImportSnapshotTask {
  /**
   * <p>A description of the import snapshot task.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the import snapshot task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>Describes an import snapshot task.</p>
   */
  SnapshotTaskDetail?: SnapshotTaskDetail;

  /**
   * <p>The tags for the import snapshot task.</p>
   */
  Tags?: Tag[];
}

export interface DescribeImportSnapshotTasksResult {
  /**
   * <p>A list of zero or more import snapshot tasks that are currently active or were completed or canceled in the
   *    previous 7 days.</p>
   */
  ImportSnapshotTasks?: ImportSnapshotTask[];

  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   */
  NextToken?: string;
}

export enum InstanceAttributeName {
  blockDeviceMapping = "blockDeviceMapping",
  disableApiStop = "disableApiStop",
  disableApiTermination = "disableApiTermination",
  ebsOptimized = "ebsOptimized",
  enaSupport = "enaSupport",
  enclaveOptions = "enclaveOptions",
  groupSet = "groupSet",
  instanceInitiatedShutdownBehavior = "instanceInitiatedShutdownBehavior",
  instanceType = "instanceType",
  kernel = "kernel",
  productCodes = "productCodes",
  ramdisk = "ramdisk",
  rootDeviceName = "rootDeviceName",
  sourceDestCheck = "sourceDestCheck",
  sriovNetSupport = "sriovNetSupport",
  userData = "userData",
}

export interface DescribeInstanceAttributeRequest {
  /**
   * <p>The instance attribute.</p>
   *          <p>Note: The <code>enaSupport</code> attribute is not supported at this time.</p>
   */
  Attribute: InstanceAttributeName | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * <p>Describes a parameter used to set up an EBS volume in a block device mapping.</p>
 */
export interface EbsInstanceBlockDevice {
  /**
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date;

  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The attachment state.</p>
   */
  Status?: AttachmentStatus | string;

  /**
   * <p>The ID of the EBS volume.</p>
   */
  VolumeId?: string;
}

/**
 * <p>Describes a block device mapping.</p>
 */
export interface InstanceBlockDeviceMapping {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   */
  Ebs?: EbsInstanceBlockDevice;
}

/**
 * <p>Describes a value for a resource attribute that is a Boolean value.</p>
 */
export interface AttributeBooleanValue {
  /**
   * <p>The attribute value. The valid values are <code>true</code> or <code>false</code>.</p>
   */
  Value?: boolean;
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro
 *             Enclaves.</p>
 */
export interface EnclaveOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for Amazon Web Services Nitro Enclaves; otherwise, it is not enabled for Amazon Web Services Nitro
   *             Enclaves.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>Describes an instance attribute.</p>
 */
export interface InstanceAttribute {
  /**
   * <p>The security groups associated with the instance.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The block device mapping of the instance.</p>
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * <p>If the value is <code>true</code>, you can't terminate the instance through the Amazon
   *             EC2 console, CLI, or API; otherwise, you can.</p>
   */
  DisableApiTermination?: AttributeBooleanValue;

  /**
   * <p>Indicates whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: AttributeBooleanValue;

  /**
   * <p>To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to
   *                 <code>true</code>; otherwise, set it to <code>false</code>.</p>
   */
  EnclaveOptions?: EnclaveOptions;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O.</p>
   */
  EbsOptimized?: AttributeBooleanValue;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: AttributeValue;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: AttributeValue;

  /**
   * <p>The kernel ID.</p>
   */
  KernelId?: AttributeValue;

  /**
   * <p>A list of product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The RAM disk ID.</p>
   */
  RamdiskId?: AttributeValue;

  /**
   * <p>The device name of the root device volume (for example,
   *             <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: AttributeValue;

  /**
   * <p>Enable or disable source/destination checks, which ensure that the instance is either
   *             the source or the destination of any traffic that it receives. If the value is
   *                 <code>true</code>, source/destination checks are enabled; otherwise, they are
   *             disabled. The default value is <code>true</code>. You must disable source/destination
   *             checks if the instance runs services such as network address translation, routing, or
   *             firewalls.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;

  /**
   * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface
   *             is enabled.</p>
   */
  SriovNetSupport?: AttributeValue;

  /**
   * <p>The user data.</p>
   */
  UserData?: AttributeValue;

  /**
   * <p>To enable the instance for Amazon Web Services Stop Protection, set this parameter to
   *                 <code>true</code>; otherwise, set it to <code>false</code>.</p>
   */
  DisableApiStop?: AttributeBooleanValue;
}

export interface DescribeInstanceCreditSpecificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The instance IDs.</p>
   *          <p>Default: Describes all your instances.</p>
   *          <p>Constraints: Maximum 1000 explicitly specified instance IDs.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000. You cannot specify this parameter and the instance IDs
   *             parameter in the same call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes the credit option for CPU usage of a burstable performance instance. </p>
 */
export interface InstanceCreditSpecification {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The credit option for CPU usage of the instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   */
  CpuCredits?: string;
}

export interface DescribeInstanceCreditSpecificationsResult {
  /**
   * <p>Information about the credit option for CPU usage of an instance.</p>
   */
  InstanceCreditSpecifications?: InstanceCreditSpecification[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeInstanceEventNotificationAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DescribeInstanceEventNotificationAttributesResult {
  /**
   * <p>Information about the registered tag keys.</p>
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}

/**
 * <para>Describe instance event windows by InstanceEventWindow.</para>
 */
export interface DescribeInstanceEventWindowsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the event windows.</p>
   */
  InstanceEventWindowIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>dedicated-host-id</code> - The event windows associated with the specified
   *             Dedicated Host ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event-window-name</code> - The event windows associated with the specified
   *             names. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The event windows associated with the specified instance
   *                ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag</code> - The event windows associated with the specified tag and
   *                value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag-key</code> - The event windows associated with the specified tag
   *                key, regardless of the value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag-value</code> - The event windows associated with the specified tag
   *                value, regardless of the key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the
   *                event window. Use the tag key in the filter name and the tag value as the filter
   *                value. For example, to find all resources that have a tag with the key
   *                   <code>Owner</code> and the value <code>CMX</code>, specify <code>tag:Owner</code>
   *                for the filter name and <code>CMX</code> for the filter value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the event window. Use this filter
   *                to find all event windows that have a tag with a specific key, regardless of the tag
   *                value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-value</code> - The value of a tag assigned to the event window. Use this
   *                filter to find all event windows that have a tag with a specific value, regardless of
   *                the tag key. </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value. This value can
   *          be between 20 and 500. You cannot specify this parameter and the event window IDs parameter
   *          in the same call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeInstanceEventWindowsResult {
  /**
   * <p>Information about the event windows.</p>
   */
  InstanceEventWindows?: InstanceEventWindow[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. </p>
   */
  NextToken?: string;
}

export interface DescribeInstancesRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>affinity</code> - The affinity setting for an instance running on a
   *                     Dedicated Host (<code>default</code> | <code>host</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>architecture</code> - The instance architecture (<code>i386</code> |
   *                         <code>x86_64</code> | <code>arm64</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.attach-time</code> - The attach time for an EBS
   *                     volume mapped to the instance, for example,
   *                         <code>2010-09-15T17:15:20.000Z</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.delete-on-termination</code> - A Boolean that
   *                     indicates whether the EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.device-name</code> - The device name specified in the
   *                     block device mapping (for example, <code>/dev/sdh</code> or
   *                     <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.status</code> - The status for the EBS volume
   *                         (<code>attaching</code> | <code>attached</code> | <code>detaching</code> |
   *                         <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.volume-id</code> - The volume ID of the EBS
   *                     volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-id</code> - The ID of the Capacity Reservation into which the
   *                     instance was launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>client-token</code> - The idempotency token you provided when you launched
   *                     the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dns-name</code> - The public DNS name of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of the security group for the instance.
   *                     EC2-Classic only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-name</code> - The name of the security group for the instance.
   *                     EC2-Classic only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hibernation-options.configured</code> - A Boolean that indicates whether
   *                     the instance is enabled for hibernation. A value of <code>true</code> means that
   *                     the instance is enabled for hibernation. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>host-id</code> - The ID of the Dedicated Host on which the instance is
   *                     running, if applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hypervisor</code> - The hypervisor type of the instance
   *                         (<code>ovm</code> | <code>xen</code>). The value <code>xen</code> is used
   *                     for both Xen and Nitro hypervisors.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iam-instance-profile.arn</code> - The instance profile associated with
   *                     the instance. Specified as an ARN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-id</code> - The ID of the image used to launch the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-lifecycle</code> - Indicates whether this is a Spot Instance or
   *                     a Scheduled Instance (<code>spot</code> | <code>scheduled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-state-code</code> - The state of the instance, as a 16-bit
   *                     unsigned integer. The high byte is used for internal purposes and should be
   *                     ignored. The low byte is set based on the state represented. The valid values
   *                     are: 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64
   *                     (stopping), and 80 (stopped).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-state-name</code> - The state of the instance
   *                         (<code>pending</code> | <code>running</code> | <code>shutting-down</code> |
   *                         <code>terminated</code> | <code>stopping</code> |
   *                     <code>stopped</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The type of instance (for example,
   *                         <code>t2.micro</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance.group-id</code> - The ID of the security group for the
   *                     instance. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance.group-name</code> - The name of the security group for the
   *                     instance. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-address</code> - The public IPv4 address of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>key-name</code> - The name of the key pair used when the instance was
   *                     launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-index</code> - When launching multiple instances, this is the
   *                     index for the instance in the launch group (for example, 0, 1, 2, and so on).
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-time</code> - The time when the instance was launched, in the ISO
   *                     8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example,
   *                         <code>2021-09-29T11:04:43.305Z</code>. You can use a wildcard
   *                         (<code>*</code>), for example, <code>2021-09-29T*</code>, which matches an
   *                     entire day.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-tokens</code> - The metadata request authorization
   *                     state (<code>optional</code> | <code>required</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-put-response-hop-limit</code> - The HTTP metadata
   *                     request put response hop limit (integer, possible values <code>1</code> to
   *                         <code>64</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-endpoint</code> - The status of access to the HTTP
   *                     metadata endpoint on your instance (<code>enabled</code> |
   *                     <code>disabled</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.instance-metadata-tags</code> - The status of access to
   *                     instance tags from the instance metadata (<code>enabled</code> |
   *                         <code>disabled</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>monitoring-state</code> - Indicates whether detailed monitoring is
   *                     enabled (<code>disabled</code> | <code>enabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.private-ip-address</code> - The private IPv4
   *                     address associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.primary</code> - Specifies whether the IPv4
   *                     address of the network interface is the primary private IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.public-ip</code> - The ID of the
   *                     association of an Elastic IP address (IPv4) with a network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.ip-owner-id</code> - The owner
   *                     ID of the private IPv4 address associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.public-ip</code> - The address of the
   *                     Elastic IP address (IPv4) bound to the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.ip-owner-id</code> - The owner of the
   *                     Elastic IP address (IPv4) associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.allocation-id</code> - The allocation ID
   *                     returned when you allocated the Elastic IP address (IPv4) for your network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.association-id</code> - The association ID
   *                     returned when the network interface was associated with an IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.attachment-id</code> - The ID of the
   *                     interface attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.instance-id</code> - The ID of the instance
   *                     to which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.instance-owner-id</code> - The owner ID of
   *                     the instance to which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.device-index</code> - The device index to
   *                     which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.status</code> - The status of the
   *                     attachment (<code>attaching</code> | <code>attached</code> |
   *                         <code>detaching</code> | <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.attach-time</code> - The time that the
   *                     network interface was attached to an instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.delete-on-termination</code> - Specifies
   *                     whether the attachment is deleted when an instance is terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.availability-zone</code> - The Availability Zone for
   *                     the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.description</code> - The description of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.group-id</code> - The ID of a security group
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.group-name</code> - The name of a security group
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.ipv6-addresses.ipv6-address</code> - The IPv6 address
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.mac-address</code> - The MAC address of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.network-interface-id</code> - The ID of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.owner-id</code> - The ID of the owner of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.private-dns-name</code> - The private DNS name of the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.requester-id</code> - The requester ID for the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.requester-managed</code> - Indicates whether the
   *                     network interface is being managed by Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.status</code> - The status of the network interface
   *                         (<code>available</code>) | <code>in-use</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.source-dest-check</code> - Whether the network
   *                     interface performs source/destination checking. A value of <code>true</code>
   *                     means that checking is enabled, and <code>false</code> means that checking is
   *                     disabled. The value must be <code>false</code> for the network interface to
   *                     perform network address translation (NAT) in your VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.subnet-id</code> - The ID of the subnet for the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.vpc-id</code> - The ID of the VPC for the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the
   *                     Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the instance
   *                     owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>placement-group-name</code> - The name of the placement group for the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>placement-partition-number</code> - The partition in which the instance is
   *                     located.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform. To list only Windows instances, use
   *                         <code>windows</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name</code> - The private IPv4 DNS name of the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - The private IPv4 address of the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code associated with the AMI used to
   *                     launch the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code.type</code> - The type of product code (<code>devpay</code> |
   *                         <code>marketplace</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reason</code> - The reason for the current state of the instance (for
   *                     example, shows "User Initiated [date]" when you stop or terminate the instance).
   *                     Similar to the state-reason-code filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-id</code> - The ID of the entity that launched the instance on
   *                     your behalf (for example, Amazon Web Services Management Console, Auto Scaling, and so
   *                     on).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reservation-id</code> - The ID of the instance's reservation. A
   *                     reservation ID is created any time you launch an instance. A reservation ID has
   *                     a one-to-one relationship with an instance launch request, but can be associated
   *                     with more than one instance if you launch multiple instances using the same
   *                     launch request. For example, if you launch one instance, you get one reservation
   *                     ID. If you launch ten instances using the same launch request, you also get one
   *                     reservation ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-name</code> - The device name of the root device volume (for
   *                     example, <code>/dev/sda1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-type</code> - The type of the root device volume
   *                         (<code>ebs</code> | <code>instance-store</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-dest-check</code> - Indicates whether the instance performs
   *                     source/destination checking. A value of <code>true</code> means that checking is
   *                     enabled, and <code>false</code> means that checking is disabled. The value must
   *                     be <code>false</code> for the instance to perform network address translation
   *                     (NAT) in your VPC. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-instance-request-id</code> - The ID of the Spot Instance
   *                     request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-code</code> - The reason code for the state change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-message</code> - A message that describes the state
   *                     change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet for the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tenancy</code> - The tenancy of an instance (<code>dedicated</code> |
   *                         <code>default</code> | <code>host</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>virtualization-type</code> - The virtualization type of the instance
   *                         (<code>paravirtual</code> | <code>hvm</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC that the instance is running in.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The instance IDs.</p>
   *          <p>Default: Describes all your instances.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000. You cannot specify this parameter and the instance IDs
   *             parameter in the same call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes the instance's Capacity Reservation targeting preferences. The action returns the
 *                 <code>capacityReservationPreference</code> response element if the instance is
 *             configured to run in On-Demand capacity, or if it is configured in run in any
 *                 <code>open</code> Capacity Reservation that has matching attributes (instance type, platform,
 *             Availability Zone). The action returns the <code>capacityReservationTarget</code>
 *             response element if the instance explicily targets a specific Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationSpecificationResponse {
  /**
   * <p>Describes the instance's Capacity Reservation preferences. Possible preferences include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that
   *                     has matching attributes (instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is
   *                     available. The instance runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference | string;

  /**
   * <p>Information about the targeted Capacity Reservation or Capacity Reservation group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTargetResponse;
}

/**
 * <p>The CPU options for the instance.</p>
 */
export interface CpuOptions {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core.</p>
   */
  ThreadsPerCore?: number;
}

/**
 * <p>Describes the association between an instance and an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuAssociation {
  /**
   * <p>The ID of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuId?: string;

  /**
   * <p>The ID of the association.</p>
   */
  ElasticGpuAssociationId?: string;

  /**
   * <p>The state of the association between the instance and the
   *             Elastic Graphics accelerator.</p>
   */
  ElasticGpuAssociationState?: string;

  /**
   * <p>The time the Elastic Graphics accelerator was associated with the instance.</p>
   */
  ElasticGpuAssociationTime?: string;
}

/**
 * <p>
 *             Describes the association between an instance and an elastic inference accelerator.
 *         </p>
 */
export interface ElasticInferenceAcceleratorAssociation {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the elastic inference accelerator.
   *         </p>
   */
  ElasticInferenceAcceleratorArn?: string;

  /**
   * <p>
   *             The ID of the association.
   *         </p>
   */
  ElasticInferenceAcceleratorAssociationId?: string;

  /**
   * <p>
   *             The state of the elastic inference accelerator.
   *         </p>
   */
  ElasticInferenceAcceleratorAssociationState?: string;

  /**
   * <p>
   *             The time at which the elastic inference accelerator is associated with an instance.
   *         </p>
   */
  ElasticInferenceAcceleratorAssociationTime?: Date;
}

/**
 * <p>Indicates whether your instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
 *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 */
export interface HibernationOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, your instance is enabled for
   *             hibernation; otherwise, it is not enabled for hibernation.</p>
   */
  Configured?: boolean;
}

export enum InstanceLifecycleType {
  scheduled = "scheduled",
  spot = "spot",
}

/**
 * <p>Describes a license configuration.</p>
 */
export interface LicenseConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export enum InstanceAutoRecoveryState {
  default = "default",
  disabled = "disabled",
}

/**
 * <p>The maintenance options for the instance.</p>
 */
export interface InstanceMaintenanceOptions {
  /**
   * <p>Provides information on the current automatic recovery behavior of your
   *             instance.</p>
   */
  AutoRecovery?: InstanceAutoRecoveryState | string;
}

export enum InstanceMetadataEndpointState {
  disabled = "disabled",
  enabled = "enabled",
}

export enum InstanceMetadataProtocolState {
  disabled = "disabled",
  enabled = "enabled",
}

export enum HttpTokensState {
  optional = "optional",
  required = "required",
}

export enum InstanceMetadataTagsState {
  disabled = "disabled",
  enabled = "enabled",
}

export enum InstanceMetadataOptionsState {
  applied = "applied",
  pending = "pending",
}

/**
 * <p>The metadata options for the instance.</p>
 */
export interface InstanceMetadataOptionsResponse {
  /**
   * <p>The state of the metadata option changes.</p>
   *          <p>
   *             <code>pending</code> - The metadata options are being updated and the instance is not
   *             ready to process metadata traffic with the new selection.</p>
   *          <p>
   *             <code>applied</code> - The metadata options have been successfully applied on the
   *             instance.</p>
   */
  State?: InstanceMetadataOptionsState | string;

  /**
   * <p>IMDSv2 uses token-backed sessions. Indicates whether the use of HTTP tokens is
   *                 <code>optional</code> (in other words, indicates whether the use of IMDSv2 is
   *                 <code>optional</code>) or <code>required</code> (in other words, indicates whether
   *             the use of IMDSv2 is <code>required</code>).</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - When IMDSv2 is optional, you can choose to retrieve instance metadata with or without
   *             a session token in your request. If you retrieve the IAM role credentials
   *             without a token, the IMDSv1 role credentials are returned. If you retrieve the IAM role credentials
   *             using a valid session token, the IMDSv2 role credentials are returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - When IMDSv2 is required, you must send a session token
   *             with any instance metadata retrieval requests. In this state, retrieving the IAM role
   *             credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>optional</code>
   *          </p>
   */
  HttpTokens?: HttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *          <p>Default: 1</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>Indicates whether the HTTP metadata endpoint on your instances is enabled or
   *             disabled.</p>
   *          <p>If the value is <code>disabled</code>, you cannot access your instance
   *             metadata.</p>
   */
  HttpEndpoint?: InstanceMetadataEndpointState | string;

  /**
   * <p>Indicates whether the IPv6 endpoint for the instance metadata service is enabled or
   *             disabled.</p>
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | string;

  /**
   * <p>Indicates whether access to instance tags from the instance metadata is enabled or
   *             disabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | string;
}

export enum MonitoringState {
  disabled = "disabled",
  disabling = "disabling",
  enabled = "enabled",
  pending = "pending",
}

/**
 * <p>Describes the monitoring of an instance.</p>
 */
export interface Monitoring {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  State?: MonitoringState | string;
}

/**
 * <p>Describes association information for an Elastic IP address (IPv4).</p>
 */
export interface InstanceNetworkInterfaceAssociation {
  /**
   * <p>The carrier IP address associated with the network interface.</p>
   */
  CarrierIp?: string;

  /**
   * <p>The customer-owned IP address associated with the network interface.</p>
   */
  CustomerOwnedIp?: string;

  /**
   * <p>The ID of the owner of the Elastic IP address.</p>
   */
  IpOwnerId?: string;

  /**
   * <p>The public DNS name.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The public IP address or Elastic IP address bound to the network interface.</p>
   */
  PublicIp?: string;
}

/**
 * <p>Describes a network interface attachment.</p>
 */
export interface InstanceNetworkInterfaceAttachment {
  /**
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date;

  /**
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The index of the device on the instance for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The attachment state.</p>
   */
  Status?: AttachmentStatus | string;

  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;
}

/**
 * <p>Information about an IPv4 prefix.</p>
 */
export interface InstanceIpv4Prefix {
  /**
   * <p>One or more IPv4 prefixes assigned to the network interface.</p>
   */
  Ipv4Prefix?: string;
}

/**
 * <p>Information about an IPv6 prefix.</p>
 */
export interface InstanceIpv6Prefix {
  /**
   * <p>One or more IPv6 prefixes assigned to the network interface.</p>
   */
  Ipv6Prefix?: string;
}

/**
 * <p>Describes a private IPv4 address.</p>
 */
export interface InstancePrivateIpAddress {
  /**
   * <p>The association information for an Elastic IP address for the network interface.</p>
   */
  Association?: InstanceNetworkInterfaceAssociation;

  /**
   * <p>Indicates whether this IPv4 address is the primary private IP address of the network interface.</p>
   */
  Primary?: boolean;

  /**
   * <p>The private IPv4 DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;
}

/**
 * <p>Describes a network interface.</p>
 */
export interface InstanceNetworkInterface {
  /**
   * <p>The association information for an Elastic IPv4 associated with the network
   *             interface.</p>
   */
  Association?: InstanceNetworkInterfaceAssociation;

  /**
   * <p>The network interface attachment.</p>
   */
  Attachment?: InstanceNetworkInterfaceAttachment;

  /**
   * <p>The description.</p>
   */
  Description?: string;

  /**
   * <p>The security groups.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The IPv6 addresses associated with the network interface.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The MAC address.</p>
   */
  MacAddress?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that created the network interface.</p>
   */
  OwnerId?: string;

  /**
   * <p>The private DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The private IPv4 addresses associated with the network interface.</p>
   */
  PrivateIpAddresses?: InstancePrivateIpAddress[];

  /**
   * <p>Indicates whether source/destination checking is enabled.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * <p>The status of the network interface.</p>
   */
  Status?: NetworkInterfaceStatus | string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The type of network interface.</p>
   *          <p>Valid values: <code>interface</code> | <code>efa</code> | <code>trunk</code>
   *          </p>
   */
  InterfaceType?: string;

  /**
   * <p>The IPv4 delegated prefixes that are assigned to the network interface.</p>
   */
  Ipv4Prefixes?: InstanceIpv4Prefix[];

  /**
   * <p>The IPv6 delegated prefixes that are assigned to the network interface.</p>
   */
  Ipv6Prefixes?: InstanceIpv6Prefix[];
}

/**
 * <p>Describes the options for instance hostnames.</p>
 */
export interface PrivateDnsNameOptionsResponse {
  /**
   * <p>The type of hostname to assign to an instance.</p>
   */
  HostnameType?: HostnameType | string;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA
   *             records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

export enum InstanceStateName {
  pending = "pending",
  running = "running",
  shutting_down = "shutting-down",
  stopped = "stopped",
  stopping = "stopping",
  terminated = "terminated",
}

/**
 * <p>Describes the current state of an instance.</p>
 */
export interface InstanceState {
  /**
   * <p>The state of the instance as a 16-bit unsigned integer. </p>
   *          <p>The high byte is all of the bits between 2^8 and (2^16)-1, which equals decimal values
   *             between 256 and 65,535. These numerical values are used for internal purposes and should
   *             be ignored.</p>
   *          <p>The low byte is all of the bits between 2^0 and (2^8)-1, which equals decimal values
   *             between 0 and 255. </p>
   *          <p>The valid values for instance-state-code will all be in the range of the low byte and
   *             they are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>0</code> : <code>pending</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>16</code> : <code>running</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>32</code> : <code>shutting-down</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>48</code> : <code>terminated</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>64</code> : <code>stopping</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>80</code> : <code>stopped</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You can ignore the high byte value by zeroing out all of the bits above 2^8 or 256 in
   *             decimal.</p>
   */
  Code?: number;

  /**
   * <p>The current state of the instance.</p>
   */
  Name?: InstanceStateName | string;
}

/**
 * <p>Describes an instance.</p>
 */
export interface Instance {
  /**
   * <p>The AMI launch index, which can be used to find this instance in the launch
   *             group.</p>
   */
  AmiLaunchIndex?: number;

  /**
   * <p>The ID of the AMI used to launch the instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The kernel associated with this instance, if applicable.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair, if this instance was launched with an associated key
   *             pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The time the instance was launched.</p>
   */
  LaunchTime?: Date;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: Monitoring;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   */
  Placement?: Placement;

  /**
   * <p>The value is <code>Windows</code> for Windows instances; otherwise blank.</p>
   */
  Platform?: PlatformValues | string;

  /**
   * <p>(IPv4 only) The private DNS hostname name assigned to the instance. This DNS hostname
   *             can only be used inside the Amazon EC2 network. This name is not available until the
   *             instance enters the <code>running</code> state. </p>
   *          <p>[EC2-VPC] The Amazon-provided DNS server resolves Amazon-provided private DNS
   *             hostnames if you've enabled DNS resolution and DNS hostnames in your VPC. If you are not
   *             using the Amazon-provided DNS server in your VPC, your custom domain name servers must
   *             resolve the hostname as appropriate.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IPv4 address assigned to the instance.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The product codes attached to this instance, if applicable.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>(IPv4 only) The public DNS name assigned to the instance. This name is not available
   *             until the instance enters the <code>running</code> state. For EC2-VPC, this name is only
   *             available if you've enabled DNS hostnames for your VPC.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The public IPv4 address, or the Carrier IP address assigned to the instance, if
   *             applicable.</p>
   *          <p>A Carrier IP address only applies to an instance launched in a subnet associated with
   *             a Wavelength Zone.</p>
   */
  PublicIpAddress?: string;

  /**
   * <p>The RAM disk associated with this instance, if applicable.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The current state of the instance.</p>
   */
  State?: InstanceState;

  /**
   * <p>The reason for the most recent state transition. This might be an empty string.</p>
   */
  StateTransitionReason?: string;

  /**
   * <p>[EC2-VPC] The ID of the subnet in which the instance is running.</p>
   */
  SubnetId?: string;

  /**
   * <p>[EC2-VPC] The ID of the VPC in which the instance is running.</p>
   */
  VpcId?: string;

  /**
   * <p>The architecture of the image.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * <p>Any block device mapping entries for the instance.</p>
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * <p>The idempotency token you provided when you launched the instance, if
   *             applicable.</p>
   */
  ClientToken?: string;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal I/O performance. This optimization isn't available with all instance
   *             types. Additional usage charges apply when using an EBS Optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>Specifies whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: boolean;

  /**
   * <p>The hypervisor type of the instance. The value <code>xen</code> is used for both Xen
   *             and Nitro hypervisors.</p>
   */
  Hypervisor?: HypervisorType | string;

  /**
   * <p>The IAM instance profile associated with the instance, if
   *             applicable.</p>
   */
  IamInstanceProfile?: IamInstanceProfile;

  /**
   * <p>Indicates whether this is a Spot Instance or a Scheduled Instance.</p>
   */
  InstanceLifecycle?: InstanceLifecycleType | string;

  /**
   * <p>The Elastic GPU associated with the instance.</p>
   */
  ElasticGpuAssociations?: ElasticGpuAssociation[];

  /**
   * <p> The elastic inference accelerator associated with the instance.</p>
   */
  ElasticInferenceAcceleratorAssociations?: ElasticInferenceAcceleratorAssociation[];

  /**
   * <p>[EC2-VPC] The network interfaces for the instance.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterface[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The device name of the root device volume (for example,
   *             <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * <p>The root device type used by the AMI. The AMI can use an EBS volume or an instance
   *             store volume.</p>
   */
  RootDeviceType?: DeviceType | string;

  /**
   * <p>The security groups for the instance.</p>
   */
  SecurityGroups?: GroupIdentifier[];

  /**
   * <p>Indicates whether source/destination checking is enabled.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * <p>If the request is a Spot Instance request, the ID of the request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface
   *             is enabled.</p>
   */
  SriovNetSupport?: string;

  /**
   * <p>The reason for the most recent state transition.</p>
   */
  StateReason?: StateReason;

  /**
   * <p>Any tags assigned to the instance.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The virtualization type of the instance.</p>
   */
  VirtualizationType?: VirtualizationType | string;

  /**
   * <p>The CPU options for the instance.</p>
   */
  CpuOptions?: CpuOptions;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification?: CapacityReservationSpecificationResponse;

  /**
   * <p>Indicates whether the instance is enabled for hibernation.</p>
   */
  HibernationOptions?: HibernationOptions;

  /**
   * <p>The license configurations for the instance.</p>
   */
  Licenses?: LicenseConfiguration[];

  /**
   * <p>The metadata options for the instance.</p>
   */
  MetadataOptions?: InstanceMetadataOptionsResponse;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro
   *             Enclaves.</p>
   */
  EnclaveOptions?: EnclaveOptions;

  /**
   * <p>The boot mode of the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   */
  BootMode?: BootModeValues | string;

  /**
   * <p>The platform details value for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html">AMI
   *                 billing information fields</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   */
  PlatformDetails?: string;

  /**
   * <p>The usage operation value for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html">AMI
   *                 billing information fields</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   */
  UsageOperation?: string;

  /**
   * <p>The time that the usage operation was last updated.</p>
   */
  UsageOperationUpdateTime?: Date;

  /**
   * <p>The options for the instance hostname.</p>
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptionsResponse;

  /**
   * <p>The IPv6 address assigned to the instance.</p>
   */
  Ipv6Address?: string;

  /**
   * <p>If the instance is configured for NitroTPM support, the value is <code>v2.0</code>.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html">NitroTPM</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   */
  TpmSupport?: string;

  /**
   * <p>Provides information on the recovery and maintenance options of your instance.</p>
   */
  MaintenanceOptions?: InstanceMaintenanceOptions;
}

/**
 * <p>Describes a launch request for one or more instances, and includes owner, requester,
 *             and security group information that applies to all instances in the launch
 *             request.</p>
 */
export interface Reservation {
  /**
   * <p>[EC2-Classic only] The security groups.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The instances.</p>
   */
  Instances?: Instance[];

  /**
   * <p>The ID of the Amazon Web Services account that owns the reservation.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the requester that launched the instances on your behalf (for example,
   *                 Amazon Web Services Management Console or Auto Scaling).</p>
   */
  RequesterId?: string;

  /**
   * <p>The ID of the reservation.</p>
   */
  ReservationId?: string;
}

export interface DescribeInstancesResult {
  /**
   * <p>Information about the reservations.</p>
   */
  Reservations?: Reservation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeInstanceStatusRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.code</code> - The code for the scheduled event
   *                         (<code>instance-reboot</code> | <code>system-reboot</code> |
   *                         <code>system-maintenance</code> | <code>instance-retirement</code> |
   *                         <code>instance-stop</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.description</code> - A description of the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.instance-event-id</code> - The ID of the event whose date and time
   *                     you are modifying.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.not-after</code> - The latest end time for the scheduled event
   *                     (for example, <code>2014-09-15T17:15:20.000Z</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.not-before</code> - The earliest start time for the scheduled
   *                     event (for example, <code>2014-09-15T17:15:20.000Z</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.not-before-deadline</code> - The deadline for starting the event
   *                     (for example, <code>2014-09-15T17:15:20.000Z</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-state-code</code> - The code for the instance state, as a
   *                     16-bit unsigned integer. The high byte is used for internal purposes and should
   *                     be ignored. The low byte is set based on the state represented. The valid values
   *                     are 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64
   *                     (stopping), and 80 (stopped).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-state-name</code> - The state of the instance
   *                         (<code>pending</code> | <code>running</code> | <code>shutting-down</code> |
   *                         <code>terminated</code> | <code>stopping</code> |
   *                     <code>stopped</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-status.reachability</code> - Filters on instance status where
   *                     the name is <code>reachability</code> (<code>passed</code> | <code>failed</code>
   *                     | <code>initializing</code> | <code>insufficient-data</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-status.status</code> - The status of the instance
   *                         (<code>ok</code> | <code>impaired</code> | <code>initializing</code> |
   *                         <code>insufficient-data</code> | <code>not-applicable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>system-status.reachability</code> - Filters on system status where the
   *                     name is <code>reachability</code> (<code>passed</code> | <code>failed</code> |
   *                         <code>initializing</code> | <code>insufficient-data</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>system-status.status</code> - The system status of the instance
   *                         (<code>ok</code> | <code>impaired</code> | <code>initializing</code> |
   *                         <code>insufficient-data</code> | <code>not-applicable</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The instance IDs.</p>
   *          <p>Default: Describes all your instances.</p>
   *          <p>Constraints: Maximum 100 explicitly specified instance IDs.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000. You cannot specify this parameter and the instance IDs
   *             parameter in the same call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>When <code>true</code>, includes the health status for all instances. When
   *                 <code>false</code>, includes the health status for running instances only.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  IncludeAllInstances?: boolean;
}

export enum EventCode {
  instance_reboot = "instance-reboot",
  instance_retirement = "instance-retirement",
  instance_stop = "instance-stop",
  system_maintenance = "system-maintenance",
  system_reboot = "system-reboot",
}

/**
 * <p>Describes a scheduled event for an instance.</p>
 */
export interface InstanceStatusEvent {
  /**
   * <p>The ID of the event.</p>
   */
  InstanceEventId?: string;

  /**
   * <p>The event code.</p>
   */
  Code?: EventCode | string;

  /**
   * <p>A description of the event.</p>
   *          <p>After a scheduled event is completed, it can still be described for up to a week. If
   *             the event has been completed, this description starts with the following text:
   *             [Completed].</p>
   */
  Description?: string;

  /**
   * <p>The latest scheduled end time for the event.</p>
   */
  NotAfter?: Date;

  /**
   * <p>The earliest scheduled start time for the event.</p>
   */
  NotBefore?: Date;

  /**
   * <p>The deadline for starting the event.</p>
   */
  NotBeforeDeadline?: Date;
}

/**
 * @internal
 */
export const DeleteTransitGatewayConnectResultFilterSensitiveLog = (obj: DeleteTransitGatewayConnectResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayConnectPeerRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayConnectPeerRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayConnectPeerResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayConnectPeerResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayMulticastDomainRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayMulticastDomainRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayMulticastDomainResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayMulticastDomainResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayPeeringAttachmentRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayPeeringAttachmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayPeeringAttachmentResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayPeeringAttachmentResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayPolicyTableRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayPolicyTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayPolicyTableResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayPolicyTableResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayPrefixListReferenceRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayPrefixListReferenceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayPrefixListReferenceResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayPrefixListReferenceResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayRouteRequestFilterSensitiveLog = (obj: DeleteTransitGatewayRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayRouteResultFilterSensitiveLog = (obj: DeleteTransitGatewayRouteResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayRouteTableRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayRouteTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayRouteTableResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayRouteTableResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayRouteTableAnnouncementRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayRouteTableAnnouncementRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayRouteTableAnnouncementResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayRouteTableAnnouncementResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayVpcAttachmentRequestFilterSensitiveLog = (
  obj: DeleteTransitGatewayVpcAttachmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTransitGatewayVpcAttachmentResultFilterSensitiveLog = (
  obj: DeleteTransitGatewayVpcAttachmentResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVerifiedAccessEndpointRequestFilterSensitiveLog = (
  obj: DeleteVerifiedAccessEndpointRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVerifiedAccessEndpointResultFilterSensitiveLog = (obj: DeleteVerifiedAccessEndpointResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVerifiedAccessGroupRequestFilterSensitiveLog = (obj: DeleteVerifiedAccessGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVerifiedAccessGroupResultFilterSensitiveLog = (obj: DeleteVerifiedAccessGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVerifiedAccessInstanceRequestFilterSensitiveLog = (
  obj: DeleteVerifiedAccessInstanceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVerifiedAccessInstanceResultFilterSensitiveLog = (obj: DeleteVerifiedAccessInstanceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVerifiedAccessTrustProviderRequestFilterSensitiveLog = (
  obj: DeleteVerifiedAccessTrustProviderRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVerifiedAccessTrustProviderResultFilterSensitiveLog = (
  obj: DeleteVerifiedAccessTrustProviderResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVolumeRequestFilterSensitiveLog = (obj: DeleteVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcRequestFilterSensitiveLog = (obj: DeleteVpcRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcEndpointConnectionNotificationsRequestFilterSensitiveLog = (
  obj: DeleteVpcEndpointConnectionNotificationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcEndpointConnectionNotificationsResultFilterSensitiveLog = (
  obj: DeleteVpcEndpointConnectionNotificationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcEndpointsRequestFilterSensitiveLog = (obj: DeleteVpcEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcEndpointsResultFilterSensitiveLog = (obj: DeleteVpcEndpointsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcEndpointServiceConfigurationsRequestFilterSensitiveLog = (
  obj: DeleteVpcEndpointServiceConfigurationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcEndpointServiceConfigurationsResultFilterSensitiveLog = (
  obj: DeleteVpcEndpointServiceConfigurationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcPeeringConnectionRequestFilterSensitiveLog = (obj: DeleteVpcPeeringConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcPeeringConnectionResultFilterSensitiveLog = (obj: DeleteVpcPeeringConnectionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpnConnectionRequestFilterSensitiveLog = (obj: DeleteVpnConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpnConnectionRouteRequestFilterSensitiveLog = (obj: DeleteVpnConnectionRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpnGatewayRequestFilterSensitiveLog = (obj: DeleteVpnGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprovisionByoipCidrRequestFilterSensitiveLog = (obj: DeprovisionByoipCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprovisionByoipCidrResultFilterSensitiveLog = (obj: DeprovisionByoipCidrResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprovisionIpamPoolCidrRequestFilterSensitiveLog = (obj: DeprovisionIpamPoolCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamPoolCidrFailureReasonFilterSensitiveLog = (obj: IpamPoolCidrFailureReason): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamPoolCidrFilterSensitiveLog = (obj: IpamPoolCidr): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprovisionIpamPoolCidrResultFilterSensitiveLog = (obj: DeprovisionIpamPoolCidrResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprovisionPublicIpv4PoolCidrRequestFilterSensitiveLog = (
  obj: DeprovisionPublicIpv4PoolCidrRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprovisionPublicIpv4PoolCidrResultFilterSensitiveLog = (
  obj: DeprovisionPublicIpv4PoolCidrResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterImageRequestFilterSensitiveLog = (obj: DeregisterImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterInstanceTagAttributeRequestFilterSensitiveLog = (
  obj: DeregisterInstanceTagAttributeRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterInstanceEventNotificationAttributesRequestFilterSensitiveLog = (
  obj: DeregisterInstanceEventNotificationAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceTagNotificationAttributeFilterSensitiveLog = (obj: InstanceTagNotificationAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterInstanceEventNotificationAttributesResultFilterSensitiveLog = (
  obj: DeregisterInstanceEventNotificationAttributesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTransitGatewayMulticastGroupMembersRequestFilterSensitiveLog = (
  obj: DeregisterTransitGatewayMulticastGroupMembersRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayMulticastDeregisteredGroupMembersFilterSensitiveLog = (
  obj: TransitGatewayMulticastDeregisteredGroupMembers
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTransitGatewayMulticastGroupMembersResultFilterSensitiveLog = (
  obj: DeregisterTransitGatewayMulticastGroupMembersResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTransitGatewayMulticastGroupSourcesRequestFilterSensitiveLog = (
  obj: DeregisterTransitGatewayMulticastGroupSourcesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayMulticastDeregisteredGroupSourcesFilterSensitiveLog = (
  obj: TransitGatewayMulticastDeregisteredGroupSources
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTransitGatewayMulticastGroupSourcesResultFilterSensitiveLog = (
  obj: DeregisterTransitGatewayMulticastGroupSourcesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountAttributesRequestFilterSensitiveLog = (obj: DescribeAccountAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountAttributesResultFilterSensitiveLog = (obj: DescribeAccountAttributesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAddressesRequestFilterSensitiveLog = (obj: DescribeAddressesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAddressesResultFilterSensitiveLog = (obj: DescribeAddressesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAddressesAttributeRequestFilterSensitiveLog = (obj: DescribeAddressesAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAddressesAttributeResultFilterSensitiveLog = (obj: DescribeAddressesAttributeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAddressTransfersRequestFilterSensitiveLog = (obj: DescribeAddressTransfersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAddressTransfersResultFilterSensitiveLog = (obj: DescribeAddressTransfersResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAggregateIdFormatRequestFilterSensitiveLog = (obj: DescribeAggregateIdFormatRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IdFormatFilterSensitiveLog = (obj: IdFormat): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAggregateIdFormatResultFilterSensitiveLog = (obj: DescribeAggregateIdFormatResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAvailabilityZonesRequestFilterSensitiveLog = (obj: DescribeAvailabilityZonesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AvailabilityZoneMessageFilterSensitiveLog = (obj: AvailabilityZoneMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AvailabilityZoneFilterSensitiveLog = (obj: AvailabilityZone): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAvailabilityZonesResultFilterSensitiveLog = (obj: DescribeAvailabilityZonesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAwsNetworkPerformanceMetricSubscriptionsRequestFilterSensitiveLog = (
  obj: DescribeAwsNetworkPerformanceMetricSubscriptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscriptionFilterSensitiveLog = (obj: Subscription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAwsNetworkPerformanceMetricSubscriptionsResultFilterSensitiveLog = (
  obj: DescribeAwsNetworkPerformanceMetricSubscriptionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBundleTasksRequestFilterSensitiveLog = (obj: DescribeBundleTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBundleTasksResultFilterSensitiveLog = (obj: DescribeBundleTasksResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeByoipCidrsRequestFilterSensitiveLog = (obj: DescribeByoipCidrsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeByoipCidrsResultFilterSensitiveLog = (obj: DescribeByoipCidrsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCapacityReservationFleetsRequestFilterSensitiveLog = (
  obj: DescribeCapacityReservationFleetsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityReservationFleetFilterSensitiveLog = (obj: CapacityReservationFleet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCapacityReservationFleetsResultFilterSensitiveLog = (
  obj: DescribeCapacityReservationFleetsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCapacityReservationsRequestFilterSensitiveLog = (
  obj: DescribeCapacityReservationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCapacityReservationsResultFilterSensitiveLog = (obj: DescribeCapacityReservationsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCarrierGatewaysRequestFilterSensitiveLog = (obj: DescribeCarrierGatewaysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCarrierGatewaysResultFilterSensitiveLog = (obj: DescribeCarrierGatewaysResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClassicLinkInstancesRequestFilterSensitiveLog = (
  obj: DescribeClassicLinkInstancesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassicLinkInstanceFilterSensitiveLog = (obj: ClassicLinkInstance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClassicLinkInstancesResultFilterSensitiveLog = (obj: DescribeClassicLinkInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientVpnAuthorizationRulesRequestFilterSensitiveLog = (
  obj: DescribeClientVpnAuthorizationRulesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizationRuleFilterSensitiveLog = (obj: AuthorizationRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientVpnAuthorizationRulesResultFilterSensitiveLog = (
  obj: DescribeClientVpnAuthorizationRulesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientVpnConnectionsRequestFilterSensitiveLog = (
  obj: DescribeClientVpnConnectionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientVpnConnectionStatusFilterSensitiveLog = (obj: ClientVpnConnectionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientVpnConnectionFilterSensitiveLog = (obj: ClientVpnConnection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientVpnConnectionsResultFilterSensitiveLog = (obj: DescribeClientVpnConnectionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientVpnEndpointsRequestFilterSensitiveLog = (obj: DescribeClientVpnEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatedTargetNetworkFilterSensitiveLog = (obj: AssociatedTargetNetwork): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DirectoryServiceAuthenticationFilterSensitiveLog = (obj: DirectoryServiceAuthentication): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FederatedAuthenticationFilterSensitiveLog = (obj: FederatedAuthentication): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CertificateAuthenticationFilterSensitiveLog = (obj: CertificateAuthentication): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientVpnAuthenticationFilterSensitiveLog = (obj: ClientVpnAuthentication): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientVpnEndpointAttributeStatusFilterSensitiveLog = (obj: ClientVpnEndpointAttributeStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientConnectResponseOptionsFilterSensitiveLog = (obj: ClientConnectResponseOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientLoginBannerResponseOptionsFilterSensitiveLog = (obj: ClientLoginBannerResponseOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionLogResponseOptionsFilterSensitiveLog = (obj: ConnectionLogResponseOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientVpnEndpointFilterSensitiveLog = (obj: ClientVpnEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientVpnEndpointsResultFilterSensitiveLog = (obj: DescribeClientVpnEndpointsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientVpnRoutesRequestFilterSensitiveLog = (obj: DescribeClientVpnRoutesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientVpnRouteFilterSensitiveLog = (obj: ClientVpnRoute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientVpnRoutesResultFilterSensitiveLog = (obj: DescribeClientVpnRoutesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientVpnTargetNetworksRequestFilterSensitiveLog = (
  obj: DescribeClientVpnTargetNetworksRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetNetworkFilterSensitiveLog = (obj: TargetNetwork): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientVpnTargetNetworksResultFilterSensitiveLog = (
  obj: DescribeClientVpnTargetNetworksResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCoipPoolsRequestFilterSensitiveLog = (obj: DescribeCoipPoolsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCoipPoolsResultFilterSensitiveLog = (obj: DescribeCoipPoolsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConversionTasksRequestFilterSensitiveLog = (obj: DescribeConversionTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DiskImageDescriptionFilterSensitiveLog = (obj: DiskImageDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DiskImageVolumeDescriptionFilterSensitiveLog = (obj: DiskImageVolumeDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportInstanceVolumeDetailItemFilterSensitiveLog = (obj: ImportInstanceVolumeDetailItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportInstanceTaskDetailsFilterSensitiveLog = (obj: ImportInstanceTaskDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportVolumeTaskDetailsFilterSensitiveLog = (obj: ImportVolumeTaskDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConversionTaskFilterSensitiveLog = (obj: ConversionTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConversionTasksResultFilterSensitiveLog = (obj: DescribeConversionTasksResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomerGatewaysRequestFilterSensitiveLog = (obj: DescribeCustomerGatewaysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomerGatewaysResultFilterSensitiveLog = (obj: DescribeCustomerGatewaysResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDhcpOptionsRequestFilterSensitiveLog = (obj: DescribeDhcpOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDhcpOptionsResultFilterSensitiveLog = (obj: DescribeDhcpOptionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEgressOnlyInternetGatewaysRequestFilterSensitiveLog = (
  obj: DescribeEgressOnlyInternetGatewaysRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEgressOnlyInternetGatewaysResultFilterSensitiveLog = (
  obj: DescribeEgressOnlyInternetGatewaysResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeElasticGpusRequestFilterSensitiveLog = (obj: DescribeElasticGpusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ElasticGpuHealthFilterSensitiveLog = (obj: ElasticGpuHealth): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ElasticGpusFilterSensitiveLog = (obj: ElasticGpus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeElasticGpusResultFilterSensitiveLog = (obj: DescribeElasticGpusResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExportImageTasksRequestFilterSensitiveLog = (obj: DescribeExportImageTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportTaskS3LocationFilterSensitiveLog = (obj: ExportTaskS3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportImageTaskFilterSensitiveLog = (obj: ExportImageTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExportImageTasksResultFilterSensitiveLog = (obj: DescribeExportImageTasksResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExportTasksRequestFilterSensitiveLog = (obj: DescribeExportTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExportTasksResultFilterSensitiveLog = (obj: DescribeExportTasksResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFastLaunchImagesRequestFilterSensitiveLog = (obj: DescribeFastLaunchImagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FastLaunchLaunchTemplateSpecificationResponseFilterSensitiveLog = (
  obj: FastLaunchLaunchTemplateSpecificationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FastLaunchSnapshotConfigurationResponseFilterSensitiveLog = (
  obj: FastLaunchSnapshotConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFastLaunchImagesSuccessItemFilterSensitiveLog = (
  obj: DescribeFastLaunchImagesSuccessItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFastLaunchImagesResultFilterSensitiveLog = (obj: DescribeFastLaunchImagesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFastSnapshotRestoresRequestFilterSensitiveLog = (
  obj: DescribeFastSnapshotRestoresRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFastSnapshotRestoreSuccessItemFilterSensitiveLog = (
  obj: DescribeFastSnapshotRestoreSuccessItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFastSnapshotRestoresResultFilterSensitiveLog = (obj: DescribeFastSnapshotRestoresResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFleetHistoryRequestFilterSensitiveLog = (obj: DescribeFleetHistoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventInformationFilterSensitiveLog = (obj: EventInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HistoryRecordEntryFilterSensitiveLog = (obj: HistoryRecordEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFleetHistoryResultFilterSensitiveLog = (obj: DescribeFleetHistoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFleetInstancesRequestFilterSensitiveLog = (obj: DescribeFleetInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFleetInstancesResultFilterSensitiveLog = (obj: DescribeFleetInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFleetsRequestFilterSensitiveLog = (obj: DescribeFleetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFleetErrorFilterSensitiveLog = (obj: DescribeFleetError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFleetsInstancesFilterSensitiveLog = (obj: DescribeFleetsInstances): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FleetLaunchTemplateConfigFilterSensitiveLog = (obj: FleetLaunchTemplateConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityReservationOptionsFilterSensitiveLog = (obj: CapacityReservationOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OnDemandOptionsFilterSensitiveLog = (obj: OnDemandOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FleetSpotCapacityRebalanceFilterSensitiveLog = (obj: FleetSpotCapacityRebalance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FleetSpotMaintenanceStrategiesFilterSensitiveLog = (obj: FleetSpotMaintenanceStrategies): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotOptionsFilterSensitiveLog = (obj: SpotOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetCapacitySpecificationFilterSensitiveLog = (obj: TargetCapacitySpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FleetDataFilterSensitiveLog = (obj: FleetData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFleetsResultFilterSensitiveLog = (obj: DescribeFleetsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFlowLogsRequestFilterSensitiveLog = (obj: DescribeFlowLogsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationOptionsResponseFilterSensitiveLog = (obj: DestinationOptionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlowLogFilterSensitiveLog = (obj: FlowLog): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFlowLogsResultFilterSensitiveLog = (obj: DescribeFlowLogsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFpgaImageAttributeRequestFilterSensitiveLog = (obj: DescribeFpgaImageAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadPermissionFilterSensitiveLog = (obj: LoadPermission): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProductCodeFilterSensitiveLog = (obj: ProductCode): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FpgaImageAttributeFilterSensitiveLog = (obj: FpgaImageAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFpgaImageAttributeResultFilterSensitiveLog = (obj: DescribeFpgaImageAttributeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFpgaImagesRequestFilterSensitiveLog = (obj: DescribeFpgaImagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PciIdFilterSensitiveLog = (obj: PciId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FpgaImageStateFilterSensitiveLog = (obj: FpgaImageState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FpgaImageFilterSensitiveLog = (obj: FpgaImage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFpgaImagesResultFilterSensitiveLog = (obj: DescribeFpgaImagesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHostReservationOfferingsRequestFilterSensitiveLog = (
  obj: DescribeHostReservationOfferingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HostOfferingFilterSensitiveLog = (obj: HostOffering): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHostReservationOfferingsResultFilterSensitiveLog = (
  obj: DescribeHostReservationOfferingsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHostReservationsRequestFilterSensitiveLog = (obj: DescribeHostReservationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HostReservationFilterSensitiveLog = (obj: HostReservation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHostReservationsResultFilterSensitiveLog = (obj: DescribeHostReservationsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHostsRequestFilterSensitiveLog = (obj: DescribeHostsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceCapacityFilterSensitiveLog = (obj: InstanceCapacity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AvailableCapacityFilterSensitiveLog = (obj: AvailableCapacity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HostPropertiesFilterSensitiveLog = (obj: HostProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HostInstanceFilterSensitiveLog = (obj: HostInstance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HostFilterSensitiveLog = (obj: Host): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHostsResultFilterSensitiveLog = (obj: DescribeHostsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIamInstanceProfileAssociationsRequestFilterSensitiveLog = (
  obj: DescribeIamInstanceProfileAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIamInstanceProfileAssociationsResultFilterSensitiveLog = (
  obj: DescribeIamInstanceProfileAssociationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIdentityIdFormatRequestFilterSensitiveLog = (obj: DescribeIdentityIdFormatRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIdentityIdFormatResultFilterSensitiveLog = (obj: DescribeIdentityIdFormatResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIdFormatRequestFilterSensitiveLog = (obj: DescribeIdFormatRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIdFormatResultFilterSensitiveLog = (obj: DescribeIdFormatResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImageAttributeRequestFilterSensitiveLog = (obj: DescribeImageAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchPermissionFilterSensitiveLog = (obj: LaunchPermission): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageAttributeFilterSensitiveLog = (obj: ImageAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImagesRequestFilterSensitiveLog = (obj: DescribeImagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageFilterSensitiveLog = (obj: Image): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImagesResultFilterSensitiveLog = (obj: DescribeImagesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImportImageTasksRequestFilterSensitiveLog = (obj: DescribeImportImageTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportImageLicenseConfigurationResponseFilterSensitiveLog = (
  obj: ImportImageLicenseConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserBucketDetailsFilterSensitiveLog = (obj: UserBucketDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotDetailFilterSensitiveLog = (obj: SnapshotDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportImageTaskFilterSensitiveLog = (obj: ImportImageTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImportImageTasksResultFilterSensitiveLog = (obj: DescribeImportImageTasksResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImportSnapshotTasksRequestFilterSensitiveLog = (obj: DescribeImportSnapshotTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotTaskDetailFilterSensitiveLog = (obj: SnapshotTaskDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportSnapshotTaskFilterSensitiveLog = (obj: ImportSnapshotTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImportSnapshotTasksResultFilterSensitiveLog = (obj: DescribeImportSnapshotTasksResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceAttributeRequestFilterSensitiveLog = (obj: DescribeInstanceAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EbsInstanceBlockDeviceFilterSensitiveLog = (obj: EbsInstanceBlockDevice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceBlockDeviceMappingFilterSensitiveLog = (obj: InstanceBlockDeviceMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttributeBooleanValueFilterSensitiveLog = (obj: AttributeBooleanValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnclaveOptionsFilterSensitiveLog = (obj: EnclaveOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceAttributeFilterSensitiveLog = (obj: InstanceAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceCreditSpecificationsRequestFilterSensitiveLog = (
  obj: DescribeInstanceCreditSpecificationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceCreditSpecificationFilterSensitiveLog = (obj: InstanceCreditSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceCreditSpecificationsResultFilterSensitiveLog = (
  obj: DescribeInstanceCreditSpecificationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceEventNotificationAttributesRequestFilterSensitiveLog = (
  obj: DescribeInstanceEventNotificationAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceEventNotificationAttributesResultFilterSensitiveLog = (
  obj: DescribeInstanceEventNotificationAttributesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceEventWindowsRequestFilterSensitiveLog = (
  obj: DescribeInstanceEventWindowsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceEventWindowsResultFilterSensitiveLog = (obj: DescribeInstanceEventWindowsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstancesRequestFilterSensitiveLog = (obj: DescribeInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityReservationSpecificationResponseFilterSensitiveLog = (
  obj: CapacityReservationSpecificationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CpuOptionsFilterSensitiveLog = (obj: CpuOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ElasticGpuAssociationFilterSensitiveLog = (obj: ElasticGpuAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ElasticInferenceAcceleratorAssociationFilterSensitiveLog = (
  obj: ElasticInferenceAcceleratorAssociation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HibernationOptionsFilterSensitiveLog = (obj: HibernationOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LicenseConfigurationFilterSensitiveLog = (obj: LicenseConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceMaintenanceOptionsFilterSensitiveLog = (obj: InstanceMaintenanceOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceMetadataOptionsResponseFilterSensitiveLog = (obj: InstanceMetadataOptionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringFilterSensitiveLog = (obj: Monitoring): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceNetworkInterfaceAssociationFilterSensitiveLog = (
  obj: InstanceNetworkInterfaceAssociation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceNetworkInterfaceAttachmentFilterSensitiveLog = (obj: InstanceNetworkInterfaceAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceIpv4PrefixFilterSensitiveLog = (obj: InstanceIpv4Prefix): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceIpv6PrefixFilterSensitiveLog = (obj: InstanceIpv6Prefix): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstancePrivateIpAddressFilterSensitiveLog = (obj: InstancePrivateIpAddress): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceNetworkInterfaceFilterSensitiveLog = (obj: InstanceNetworkInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrivateDnsNameOptionsResponseFilterSensitiveLog = (obj: PrivateDnsNameOptionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceStateFilterSensitiveLog = (obj: InstanceState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceFilterSensitiveLog = (obj: Instance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservationFilterSensitiveLog = (obj: Reservation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstancesResultFilterSensitiveLog = (obj: DescribeInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceStatusRequestFilterSensitiveLog = (obj: DescribeInstanceStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceStatusEventFilterSensitiveLog = (obj: InstanceStatusEvent): any => ({
  ...obj,
});
