// smithy-typescript generated code
import {
  _InstanceType,
  AccountAttributeName,
  AddressAttributeName,
  AllocationState,
  AllowsMultipleInstanceTypes,
  AmdSevSnpSpecification,
  ArchitectureValues,
  AsnState,
  AssociatedNetworkType,
  AttachmentStatus,
  AutoPlacement,
  AvailabilityZoneOptInStatus,
  AvailabilityZoneState,
  BootModeValues,
  CallerRole,
  CapacityBlockExtensionStatus,
  CapacityBlockInterconnectStatus,
  CapacityBlockResourceState,
  CapacityManagerDataExportStatus,
  CapacityReservationBillingRequestStatus,
  CapacityReservationFleetState,
  CapacityReservationPreference,
  CapacityReservationTenancy,
  ClientVpnAuthenticationType,
  ClientVpnConnectionStatusCode,
  ClientVpnEndpointAttributeStatusCode,
  ConversionTaskState,
  CurrencyCodeValues,
  DefaultTargetCapacityType,
  DestinationFileFormat,
  DeviceType,
  DiskImageFormat,
  ElasticGpuState,
  ElasticGpuStatus,
  EndpointIpAddressType,
  FastLaunchResourceType,
  FastLaunchStateCode,
  FastSnapshotRestoreStateCode,
  FleetActivityStatus,
  FleetCapacityReservationTenancy,
  FleetCapacityReservationUsageStrategy,
  FleetEventType,
  FleetExcessCapacityTerminationPolicy,
  FleetInstanceMatchCriteria,
  FleetOnDemandAllocationStrategy,
  FleetReplacementStrategy,
  FleetStateCode,
  FleetType,
  FpgaImageAttributeName,
  FpgaImageStateCode,
  HostMaintenance,
  HostRecovery,
  HttpTokensState,
  HypervisorType,
  ImageAttributeName,
  ImageReferenceOptionName,
  ImageReferenceResourceType,
  ImageState,
  ImageTypeValues,
  ImdsSupportValues,
  InstanceAttributeName,
  InstanceAutoRecoveryState,
  InstanceLifecycle,
  InstanceMetadataEndpointState,
  InstanceMetadataOptionsState,
  InstanceMetadataProtocolState,
  InstanceMetadataTagsState,
  InstanceRebootMigrationState,
  InstanceStateName,
  IpamPoolCidrFailureCode,
  IpamPoolCidrState,
  LogDestinationType,
  MetricType,
  MonitoringState,
  OutputFormat,
  PaymentOption,
  PeriodType,
  PermissionGroup,
  PlatformValues,
  ProductCodeValues,
  ReportState,
  ReservationState,
  Schedule,
  SnapshotReturnCodes,
  SpotAllocationStrategy,
  SpotInstanceInterruptionBehavior,
  StatisticType,
  TargetCapacityUnitType,
  TpmSupportValues,
  TrafficIpAddressType,
  TrafficType,
  TransportProtocol,
  VirtualizationType,
  VpnProtocol,
} from "./enums";

import {
  type AssociationStatus,
  type ClientVpnAuthorizationRuleStatus,
  type ClientVpnEndpointStatus,
  type ClientVpnRouteStatus,
  type OperatorResponse,
  type TransitGatewayVpcAttachment,
  type VerifiedAccessInstance,
  type VerifiedAccessTrustProvider,
  type VpcEncryptionControl,
  AccountAttribute,
  ActiveInstance,
  Address,
  AddressAttribute,
  AddressTransfer,
  BundleTask,
  ByoipCidr,
  CapacityReservation,
  CarrierGateway,
  CoipPool,
  CustomerGateway,
  FleetCapacityReservation,
  IamInstanceProfileAssociation,
  InstanceEventWindow,
  Tag,
  UnsuccessfulItem,
} from "./models_0";

import {
  type AttributeValue,
  type CapacityReservationTargetResponse,
  type FleetLaunchTemplateSpecification,
  type LaunchTemplateAndOverridesResponse,
  type StateReason,
  BlockDeviceMapping,
  DhcpOptions,
  Ec2InstanceConnectEndpoint,
  EgressOnlyInternetGateway,
  ExportTask,
  FleetLaunchTemplateOverrides,
  GroupIdentifier,
} from "./models_1";

import type {
  TransitGatewayPolicyTable,
  TransitGatewayPrefixListReference,
  TransitGatewayRoute,
  TransitGatewayRouteTable,
  TransitGatewayRouteTableAnnouncement,
  VerifiedAccessEndpoint,
  VerifiedAccessGroup,
  VpcBlockPublicAccessExclusion,
} from "./models_2";

/**
 * @public
 */
export interface DeleteTransitGatewayPolicyTableResult {
  /**
   * <p>Provides details about the deleted transit gateway policy table.</p>
   * @public
   */
  TransitGatewayPolicyTable?: TransitGatewayPolicyTable | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId: string | undefined;

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
export interface DeleteTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the deleted prefix list reference.</p>
   * @public
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The CIDR range for the route. This must match the CIDR for the route exactly.</p>
   * @public
   */
  DestinationCidrBlock: string | undefined;

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
export interface DeleteTransitGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   * @public
   */
  Route?: TransitGatewayRoute | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

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
export interface DeleteTransitGatewayRouteTableResult {
  /**
   * <p>Information about the deleted transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteTableAnnouncementRequest {
  /**
   * <p>The transit gateway route table ID that's being deleted. </p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementId: string | undefined;

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
export interface DeleteTransitGatewayRouteTableAnnouncementResult {
  /**
   * <p>Provides details about a deleted transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncement?: TransitGatewayRouteTableAnnouncement | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayVpcAttachmentRequest {
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
export interface DeleteTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the deleted VPC attachment.</p>
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessEndpointRequest {
  /**
   * <p>The ID of the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
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
}

/**
 * @public
 */
export interface DeleteVerifiedAccessEndpointResult {
  /**
   * <p>Details about the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessGroupRequest {
  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
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
}

/**
 * @public
 */
export interface DeleteVerifiedAccessGroupResult {
  /**
   * <p>Details about the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroup?: VerifiedAccessGroup | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessInstanceRequest {
  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessInstanceResult {
  /**
   * <p>Details about the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstance?: VerifiedAccessInstance | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessTrustProviderRequest {
  /**
   * <p>The ID of the Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProviderId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessTrustProviderResult {
  /**
   * <p>Details about the Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider | undefined;
}

/**
 * @public
 */
export interface DeleteVolumeRequest {
  /**
   * <p>The ID of the volume.</p>
   * @public
   */
  VolumeId: string | undefined;

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
export interface DeleteVpcRequest {
  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

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
export interface DeleteVpcBlockPublicAccessExclusionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the exclusion.</p>
   * @public
   */
  ExclusionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcBlockPublicAccessExclusionResult {
  /**
   * <p>Details about an exclusion.</p>
   * @public
   */
  VpcBlockPublicAccessExclusion?: VpcBlockPublicAccessExclusion | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEncryptionControlRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the VPC Encryption Control resource to delete.</p>
   * @public
   */
  VpcEncryptionControlId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEncryptionControlResult {
  /**
   * <p>Information about the deleted VPC Encryption Control configuration.</p>
   * @public
   */
  VpcEncryptionControl?: VpcEncryptionControl | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointConnectionNotificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the notifications.</p>
   * @public
   */
  ConnectionNotificationIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointConnectionNotificationsResult {
  /**
   * <p>Information about the notifications that could not be deleted
   *             successfully.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the VPC endpoints.</p>
   * @public
   */
  VpcEndpointIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointsResult {
  /**
   * <p>Information about the VPC endpoints that were not successfully deleted.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointServiceConfigurationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the services.</p>
   * @public
   */
  ServiceIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointServiceConfigurationsResult {
  /**
   * <p>Information about the service configurations that were not deleted, if
   *             applicable.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringConnectionRequest {
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
export interface DeleteVpcPeeringConnectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteVpnConcentratorRequest {
  /**
   * <p>The ID of the VPN concentrator to delete.</p>
   * @public
   */
  VpnConcentratorId: string | undefined;

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
export interface DeleteVpnConcentratorResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * <p>Contains the parameters for DeleteVpnConnection.</p>
 * @public
 */
export interface DeleteVpnConnectionRequest {
  /**
   * <p>The ID of the VPN connection.</p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Contains the parameters for DeleteVpnConnectionRoute.</p>
 * @public
 */
export interface DeleteVpnConnectionRouteRequest {
  /**
   * <p>The CIDR block associated with the local subnet of the customer network.</p>
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the VPN connection.</p>
   * @public
   */
  VpnConnectionId: string | undefined;
}

/**
 * <p>Contains the parameters for DeleteVpnGateway.</p>
 * @public
 */
export interface DeleteVpnGatewayRequest {
  /**
   * <p>The ID of the virtual private gateway.</p>
   * @public
   */
  VpnGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeprovisionByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation. The prefix must be the same prefix
   *          that you specified when you provisioned the address range.</p>
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
export interface DeprovisionByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * @public
 */
export interface DeprovisionIpamByoasnRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IPAM ID.</p>
   * @public
   */
  IpamId: string | undefined;

  /**
   * <p>An ASN.</p>
   * @public
   */
  Asn: string | undefined;
}

/**
 * <p>The Autonomous System Number (ASN) and BYOIP CIDR association.</p>
 * @public
 */
export interface Byoasn {
  /**
   * <p>A public 2-byte or 4-byte ASN.</p>
   * @public
   */
  Asn?: string | undefined;

  /**
   * <p>An IPAM ID.</p>
   * @public
   */
  IpamId?: string | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The provisioning state of the BYOASN.</p>
   * @public
   */
  State?: AsnState | undefined;
}

/**
 * @public
 */
export interface DeprovisionIpamByoasnResult {
  /**
   * <p>An ASN and BYOIP CIDR association.</p>
   * @public
   */
  Byoasn?: Byoasn | undefined;
}

/**
 * @public
 */
export interface DeprovisionIpamPoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the pool that has the CIDR you want to deprovision.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The CIDR which you want to deprovision from the pool.</p>
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * <p>Details related to why an IPAM pool CIDR failed to be provisioned.</p>
 * @public
 */
export interface IpamPoolCidrFailureReason {
  /**
   * <p>An error code related to why an IPAM pool CIDR failed to be provisioned.</p>
   * @public
   */
  Code?: IpamPoolCidrFailureCode | undefined;

  /**
   * <p>A message related to why an IPAM pool CIDR failed to be provisioned.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>A CIDR provisioned to an IPAM pool.</p>
 * @public
 */
export interface IpamPoolCidr {
  /**
   * <p>The CIDR provisioned to the IPAM pool. A CIDR is a representation of an IP address and its associated network mask (or netmask)
   *          and refers to a range of IP addresses. An IPv4 CIDR example is <code>10.24.34.0/23</code>. An IPv6 CIDR example is <code>2001:DB8::/32</code>.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The state of the CIDR.</p>
   * @public
   */
  State?: IpamPoolCidrState | undefined;

  /**
   * <p>Details related to why an IPAM pool CIDR failed to be provisioned.</p>
   * @public
   */
  FailureReason?: IpamPoolCidrFailureReason | undefined;

  /**
   * <p>The IPAM pool CIDR ID.</p>
   * @public
   */
  IpamPoolCidrId?: string | undefined;

  /**
   * <p>The netmask length of the CIDR you'd like to provision to a pool. Can be used for provisioning Amazon-provided IPv6 CIDRs to top-level pools and for provisioning CIDRs to pools with source pools. Cannot be used to provision BYOIP CIDRs to top-level pools. "NetmaskLength" or "Cidr" is required.</p>
   * @public
   */
  NetmaskLength?: number | undefined;
}

/**
 * @public
 */
export interface DeprovisionIpamPoolCidrResult {
  /**
   * <p>The deprovisioned pool CIDR.</p>
   * @public
   */
  IpamPoolCidr?: IpamPoolCidr | undefined;
}

/**
 * @public
 */
export interface DeprovisionPublicIpv4PoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the pool that you want to deprovision the CIDR from.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The CIDR you want to deprovision from the pool.</p>
   * @public
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface DeprovisionPublicIpv4PoolCidrResult {
  /**
   * <p>The ID of the pool that you deprovisioned the CIDR from.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The deprovisioned CIDRs.</p>
   * @public
   */
  DeprovisionedAddresses?: string[] | undefined;
}

/**
 * <p>Contains the parameters for DeregisterImage.</p>
 * @public
 */
export interface DeregisterImageRequest {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>Specifies whether to delete the snapshots associated with the AMI during
   *       deregistration.</p>
   *          <note>
   *             <p>If a snapshot is associated with multiple AMIs, it is not deleted, regardless of this setting.</p>
   *          </note>
   *          <p>Default: The snapshots are not deleted.</p>
   * @public
   */
  DeleteAssociatedSnapshots?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>The snapshot ID and its deletion result code.</p>
 * @public
 */
export interface DeleteSnapshotReturnCode {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The result code from the snapshot deletion attempt. Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>success</code> - The snapshot was successfully deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>skipped</code> - The snapshot was not deleted because it's associated with other
   *           AMIs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>missing-permissions</code> - The snapshot was not deleted because the role lacks
   *             <code>DeleteSnapshot</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/security_iam_service-with-iam.html">How
   *             Amazon EBS works with IAM</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>internal-error</code> - The snapshot was not deleted due to a server
   *           error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>client-error</code> - The snapshot was not deleted due to a client configuration
   *           error.</p>
   *             </li>
   *          </ul>
   *          <p>For details about an error, check the <code>DeleteSnapshot</code> event in the CloudTrail
   *       event history. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/tutorial-event-history.html">View event history</a>
   *       in the <i>Amazon Web Services CloudTrail User Guide</i>.</p>
   * @public
   */
  ReturnCode?: SnapshotReturnCodes | undefined;
}

/**
 * @public
 */
export interface DeregisterImageResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;

  /**
   * <p>The deletion result for each snapshot associated with the AMI, including the snapshot ID
   *       and its success or error code.</p>
   * @public
   */
  DeleteSnapshotResults?: DeleteSnapshotReturnCode[] | undefined;
}

/**
 * <p>Information about the tag keys to deregister for the current Region. You can either
 *          specify individual tag keys or deregister all tag keys in the current Region. You must
 *          specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the
 *          request</p>
 * @public
 */
export interface DeregisterInstanceTagAttributeRequest {
  /**
   * <p>Indicates whether to deregister all tag keys in the current Region. Specify
   *             <code>false</code> to deregister all tag keys.</p>
   * @public
   */
  IncludeAllTagsOfInstance?: boolean | undefined;

  /**
   * <p>Information about the tag keys to deregister.</p>
   * @public
   */
  InstanceTagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface DeregisterInstanceEventNotificationAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Information about the tag keys to deregister.</p>
   * @public
   */
  InstanceTagAttribute: DeregisterInstanceTagAttributeRequest | undefined;
}

/**
 * <p>Describes the registered tag keys for the current Region.</p>
 * @public
 */
export interface InstanceTagNotificationAttribute {
  /**
   * <p>The registered tag keys.</p>
   * @public
   */
  InstanceTagKeys?: string[] | undefined;

  /**
   * <p>Indicates wheter all tag keys in the current Region are registered to appear in
   *          scheduled event notifications. <code>true</code> indicates that all tag keys in the current
   *          Region are registered.</p>
   * @public
   */
  IncludeAllTagsOfInstance?: boolean | undefined;
}

/**
 * @public
 */
export interface DeregisterInstanceEventNotificationAttributesResult {
  /**
   * <p>The resulting set of tag keys.</p>
   * @public
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute | undefined;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * <p>The IDs of the group members' network interfaces.</p>
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the deregistered  transit gateway multicast group members.</p>
 * @public
 */
export interface TransitGatewayMulticastDeregisteredGroupMembers {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The network interface IDs of the deregistered members.</p>
   * @public
   */
  DeregisteredNetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupMembersResult {
  /**
   * <p>Information about the deregistered members.</p>
   * @public
   */
  DeregisteredMulticastGroupMembers?: TransitGatewayMulticastDeregisteredGroupMembers | undefined;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * <p>The IDs of the group sources' network interfaces.</p>
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the deregistered  transit gateway multicast group sources.</p>
 * @public
 */
export interface TransitGatewayMulticastDeregisteredGroupSources {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The network interface IDs of the non-registered members.</p>
   * @public
   */
  DeregisteredNetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * <p>Information about the deregistered group sources.</p>
   * @public
   */
  DeregisteredMulticastGroupSources?: TransitGatewayMulticastDeregisteredGroupSources | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *            and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *            Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The account attribute names.</p>
   * @public
   */
  AttributeNames?: AccountAttributeName[] | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAttributesResult {
  /**
   * <p>Information about the account attributes.</p>
   * @public
   */
  AccountAttributes?: AccountAttribute[] | undefined;
}

/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation.
 *          Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p>
 *          <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only
 *            results that match all of the specified filters.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Filtering.html#Filtering_Resources_CLI">List and filter using the CLI and API</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The filter values. Filter values are case-sensitive. If you specify multiple values for a
   *          filter, the values are joined with an <code>OR</code>, and the request returns all results
   *          that match any of the specified values.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAddressesRequest {
  /**
   * <p>One or more Elastic IP addresses.</p>
   *          <p>Default: Describes all your Elastic IP addresses.</p>
   * @public
   */
  PublicIps?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allocation-id</code> - The allocation ID for the address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association-id</code> - The association ID for the address.</p>
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
   *                   <code>network-interface-id</code> - The ID of the network interface that the address is associated with, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-owner-id</code> - The Amazon Web Services account ID of the owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - The private IP address associated with the Elastic IP address.</p>
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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Information about the allocation IDs.</p>
   * @public
   */
  AllocationIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAddressesResult {
  /**
   * <p>Information about the Elastic IP addresses.</p>
   * @public
   */
  Addresses?: Address[] | undefined;
}

/**
 * @public
 */
export interface DescribeAddressesAttributeRequest {
  /**
   * <p>[EC2-VPC] The allocation IDs.</p>
   * @public
   */
  AllocationIds?: string[] | undefined;

  /**
   * <p>The attribute of the IP address.</p>
   * @public
   */
  Attribute?: AddressAttributeName | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
export interface DescribeAddressesAttributeResult {
  /**
   * <p>Information about the IP addresses.</p>
   * @public
   */
  Addresses?: AddressAttribute[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAddressTransfersRequest {
  /**
   * <p>The allocation IDs of Elastic IP addresses.</p>
   * @public
   */
  AllocationIds?: string[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of address transfers to return in one page of results.</p>
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
export interface DescribeAddressTransfersResult {
  /**
   * <p>The Elastic IP address transfer.</p>
   * @public
   */
  AddressTransfers?: AddressTransfer[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAggregateIdFormatRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the ID format for a resource.</p>
 * @public
 */
export interface IdFormat {
  /**
   * <p>The date in UTC at which you are permanently switched over to using longer IDs. If a deadline is not yet available for this resource type, this field is not returned.</p>
   * @public
   */
  Deadline?: Date | undefined;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  Resource?: string | undefined;

  /**
   * <p>Indicates whether longer IDs (17-character IDs) are enabled for the resource.</p>
   * @public
   */
  UseLongIds?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAggregateIdFormatResult {
  /**
   * <p>Indicates whether all resource types in the Region are configured to use longer IDs.
   *             This value is only <code>true</code> if all users are configured to use longer IDs for
   *             all resources types in the Region.</p>
   * @public
   */
  UseLongIdsAggregated?: boolean | undefined;

  /**
   * <p>Information about each resource's ID format.</p>
   * @public
   */
  Statuses?: IdFormat[] | undefined;
}

/**
 * @public
 */
export interface DescribeAvailabilityZonesRequest {
  /**
   * <p>The names of the Availability Zones, Local Zones, and Wavelength Zones.</p>
   * @public
   */
  ZoneNames?: string[] | undefined;

  /**
   * <p>The IDs of the Availability Zones, Local Zones, and Wavelength Zones.</p>
   * @public
   */
  ZoneIds?: string[] | undefined;

  /**
   * <p>Include all Availability Zones, Local Zones, and Wavelength Zones regardless of your
   *       opt-in status.</p>
   *          <p>If you do not use this parameter, the results include only the zones for the Regions where you have chosen the option to opt in.</p>
   * @public
   */
  AllAvailabilityZones?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-long-name</code> - The long name of the zone group for the Availability Zone (for
   *           example, <code>US West (Oregon) 1</code>), the Local Zone (for example, for Zone group <code>us-west-2-lax-1</code>, it is <code>US West (Los Angeles)</code>,
   *           or the Wavelength Zone (for example, for Zone group <code>us-east-1-wl1</code>, it is <code>US East (Verizon)</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-name</code> - The name of the zone group for the Availability Zone (for
   *           example, <code>us-east-1-zg-1</code>), the Local Zone (for example, <code>us-west-2-lax-1</code>),
   *           or the Wavelength Zone (for example, <code>us-east-1-wl1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>message</code> - The Zone message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>opt-in-status</code> - The opt-in status (<code>opted-in</code> |
   *             <code>not-opted-in</code> | <code>opt-in-not-required</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parent-zone-id</code> - The ID of the zone that handles some of the Local Zone
   *           and Wavelength Zone control plane operations, such as API calls.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parent-zone-name</code> - The ID of the zone that handles some of the Local Zone
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
   *           Wavelength Zone (<code>available</code> | <code>unavailable</code> |
   *             <code>constrained</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-id</code> - The ID of the Availability Zone (for example,
   *             <code>use1-az1</code>), the Local Zone (for example, <code>usw2-lax1-az1</code>), or the
   *           Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-name</code> - The name of the Availability Zone (for example,
   *             <code>us-east-1a</code>), the Local Zone (for example, <code>us-west-2-lax-1a</code>), or
   *           the Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-type</code> - The type of zone (<code>availability-zone</code> |
   *           <code>local-zone</code> | <code>wavelength-zone</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes a message about an Availability Zone, Local Zone, or Wavelength Zone.</p>
 * @public
 */
export interface AvailabilityZoneMessage {
  /**
   * <p>The message about the Availability Zone, Local Zone, or Wavelength Zone.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes Availability Zones, Local Zones, and Wavelength Zones.</p>
 * @public
 */
export interface AvailabilityZone {
  /**
   * <p>For Availability Zones, this parameter always has the value of
   *         <code>opt-in-not-required</code>.</p>
   *          <p>For Local Zones and Wavelength Zones, this parameter is the opt-in status. The possible
   *       values are <code>opted-in</code> and <code>not-opted-in</code>.</p>
   * @public
   */
  OptInStatus?: AvailabilityZoneOptInStatus | undefined;

  /**
   * <p>Any messages about the Availability Zone, Local Zone, or Wavelength Zone.</p>
   * @public
   */
  Messages?: AvailabilityZoneMessage[] | undefined;

  /**
   * <p>The name of the Region.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>The name of the Availability Zone, Local Zone, or Wavelength Zone.</p>
   * @public
   */
  ZoneName?: string | undefined;

  /**
   * <p>The ID of the Availability Zone, Local Zone, or Wavelength Zone.</p>
   * @public
   */
  ZoneId?: string | undefined;

  /**
   * <p>The name of the zone group. For example:</p>
   *          <ul>
   *             <li>
   *                <p>Availability Zones - <code>us-east-1-zg-1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Local Zones - <code>us-west-2-lax-1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Wavelength Zones - <code>us-east-1-wl1-bos-wlz-1</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The name of the network border group.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * <p>The type of zone.</p>
   *          <p>Valid values: <code>availability-zone</code> | <code>local-zone</code> |
   *         <code>wavelength-zone</code>
   *          </p>
   * @public
   */
  ZoneType?: string | undefined;

  /**
   * <p>The name of the zone that handles some of the Local Zone or Wavelength Zone control plane
   *       operations, such as API calls.</p>
   * @public
   */
  ParentZoneName?: string | undefined;

  /**
   * <p>The ID of the zone that handles some of the Local Zone or Wavelength Zone control plane
   *       operations, such as API calls.</p>
   * @public
   */
  ParentZoneId?: string | undefined;

  /**
   * <p>The long name of the Availability Zone group, Local Zone group, or Wavelength Zone
   *       group.</p>
   * @public
   */
  GroupLongName?: string | undefined;

  /**
   * <p>The state of the Availability Zone, Local Zone, or Wavelength Zone. The possible values are
   *         <code>available</code>, <code>unavailable</code>, and <code>constrained</code>.</p>
   * @public
   */
  State?: AvailabilityZoneState | undefined;
}

/**
 * @public
 */
export interface DescribeAvailabilityZonesResult {
  /**
   * <p>Information about the Availability Zones, Local Zones, and Wavelength Zones.</p>
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;
}

/**
 * @public
 */
export interface DescribeAwsNetworkPerformanceMetricSubscriptionsRequest {
  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>One or more filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes an Infrastructure Performance subscription.</p>
 * @public
 */
export interface Subscription {
  /**
   * <p>The Region or Availability Zone that's the source for the subscription. For example, <code>us-east-1</code>.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The Region or Availability Zone that's the target for the subscription. For example, <code>eu-west-1</code>.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The metric used for the subscription.</p>
   * @public
   */
  Metric?: MetricType | undefined;

  /**
   * <p>The statistic used for the subscription.</p>
   * @public
   */
  Statistic?: StatisticType | undefined;

  /**
   * <p>The data aggregation time for the subscription.</p>
   * @public
   */
  Period?: PeriodType | undefined;
}

/**
 * @public
 */
export interface DescribeAwsNetworkPerformanceMetricSubscriptionsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Describes the current Infrastructure Performance subscriptions.</p>
   * @public
   */
  Subscriptions?: Subscription[] | undefined;
}

/**
 * @public
 */
export interface DescribeBundleTasksRequest {
  /**
   * <p>The bundle task IDs.</p>
   *          <p>Default: Describes all your bundle tasks.</p>
   * @public
   */
  BundleIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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
   *                   <code>progress</code> - The level of task completion, as a percentage (for example,
   *           20%).</p>
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
   *                   <code>start-time</code> - The time the task started (for example,
   *           2013-09-15T17:15:20.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the task (<code>pending</code> |
   *             <code>waiting-for-shutdown</code> | <code>bundling</code> | <code>storing</code> |
   *             <code>cancelling</code> | <code>complete</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update-time</code> - The time of the most recent update for the task.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeBundleTasksResult {
  /**
   * <p>Information about the bundle tasks.</p>
   * @public
   */
  BundleTasks?: BundleTask[] | undefined;
}

/**
 * @public
 */
export interface DescribeByoipCidrsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeByoipCidrsResult {
  /**
   * <p>Information about your address ranges.</p>
   * @public
   */
  ByoipCidrs?: ByoipCidr[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockExtensionHistoryRequest {
  /**
   * <p>The IDs of Capacity Block reservations that you want to display the history
   * 			for.</p>
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the
   * 					extension.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone-id</code> - The Availability Zone ID of the
   * 					extension.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-block-extension-offering-id</code> - The ID of the extension
   * 					offering.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-block-extension-status</code> - The status of the extension
   * 						(<code>payment-pending</code> | <code>payment-failed</code> |
   * 						<code>payment-succeeded</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-id</code> - The reservation ID of the
   * 					extension.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type of the extension.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a Capacity Block extension. With an extension, you can extend the duration
 * 			of time for an existing Capacity Block.</p>
 * @public
 */
export interface CapacityBlockExtension {
  /**
   * <p>The reservation ID of the Capacity Block extension.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The instance type of the Capacity Block extension.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The number of instances in the Capacity Block extension.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The Availability Zone of the Capacity Block extension.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The Availability Zone ID of the Capacity Block extension.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The ID of the Capacity Block extension offering.</p>
   * @public
   */
  CapacityBlockExtensionOfferingId?: string | undefined;

  /**
   * <p>The duration of the Capacity Block extension in hours.</p>
   * @public
   */
  CapacityBlockExtensionDurationHours?: number | undefined;

  /**
   * <p>The status of the Capacity Block extension. A Capacity Block extension can have one of
   * 			the following statuses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>payment-pending</code> - The Capacity Block extension payment is
   * 					processing. If your payment can't be processed within 12 hours, the Capacity
   * 					Block extension is failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>payment-failed</code> - Payment for the Capacity Block extension request
   * 					was not successful.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>payment-succeeded</code> - Payment for the Capacity Block extension
   * 					request was successful. You receive an invoice that reflects the one-time
   * 					upfront payment. In the invoice, you can associate the paid amount with the
   * 					Capacity Block reservation ID.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CapacityBlockExtensionStatus?: CapacityBlockExtensionStatus | undefined;

  /**
   * <p>The date when the Capacity Block extension was purchased.</p>
   * @public
   */
  CapacityBlockExtensionPurchaseDate?: Date | undefined;

  /**
   * <p>The start date of the Capacity Block extension.</p>
   * @public
   */
  CapacityBlockExtensionStartDate?: Date | undefined;

  /**
   * <p>The end date of the Capacity Block extension.</p>
   * @public
   */
  CapacityBlockExtensionEndDate?: Date | undefined;

  /**
   * <p>The total price to be paid up front.</p>
   * @public
   */
  UpfrontFee?: string | undefined;

  /**
   * <p>The currency of the payment for the Capacity Block extension.</p>
   * @public
   */
  CurrencyCode?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockExtensionHistoryResult {
  /**
   * <p>Describes one or more of your Capacity Block extensions. The results describe only the
   * 			Capacity Block extensions in the Amazon Web Services Region that you're currently using.</p>
   * @public
   */
  CapacityBlockExtensions?: CapacityBlockExtension[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockExtensionOfferingsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The duration of the Capacity Block extension offering in hours.</p>
   * @public
   */
  CapacityBlockExtensionDurationHours: number | undefined;

  /**
   * <p>The ID of the Capacity reservation to be extended.</p>
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The recommended Capacity Block extension that fits your search requirements.</p>
 * @public
 */
export interface CapacityBlockExtensionOffering {
  /**
   * <p>The ID of the Capacity Block extension offering.</p>
   * @public
   */
  CapacityBlockExtensionOfferingId?: string | undefined;

  /**
   * <p>The instance type of the Capacity Block that will be extended.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The number of instances in the Capacity Block extension offering.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The Availability Zone of the Capacity Block that will be extended.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The Availability Zone ID of the Capacity Block that will be extended.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The start date of the Capacity Block that will be extended.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The date and time at which the Capacity Block extension will start. This date is also
   * 			the same as the end date of the Capacity Block that will be extended.</p>
   * @public
   */
  CapacityBlockExtensionStartDate?: Date | undefined;

  /**
   * <p>The date and time at which the Capacity Block extension expires. When a Capacity Block
   * 			expires, the reserved capacity is released and you can no longer launch instances into
   * 			it. The Capacity Block's state changes to <code>expired</code> when it reaches its end
   * 			date</p>
   * @public
   */
  CapacityBlockExtensionEndDate?: Date | undefined;

  /**
   * <p>The amount of time of the Capacity Block extension offering in hours.</p>
   * @public
   */
  CapacityBlockExtensionDurationHours?: number | undefined;

  /**
   * <p>The total price of the Capacity Block extension offering, to be paid up front.</p>
   * @public
   */
  UpfrontFee?: string | undefined;

  /**
   * <p>The currency of the payment for the Capacity Block extension offering.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>Indicates the tenancy of the Capacity Block extension offering. A Capacity Block can
   * 			have one of the following tenancy settings:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Block is created on hardware that is
   * 					shared with other Amazon Web Services accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Block is created on single-tenant
   * 					hardware that is dedicated to a single Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tenancy?: CapacityReservationTenancy | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockExtensionOfferingsResult {
  /**
   * <p>The recommended Capacity Block extension offerings for the dates specified.</p>
   * @public
   */
  CapacityBlockExtensionOfferings?: CapacityBlockExtensionOffering[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockOfferingsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The type of instance for which the Capacity Block offering reserves capacity.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The number of instances for which to reserve capacity. Each Capacity Block can have up
   * 			to 64 instances, and you can have up to 256 instances across Capacity Blocks.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The earliest start date for the Capacity Block offering.</p>
   * @public
   */
  StartDateRange?: Date | undefined;

  /**
   * <p>The latest end date for the Capacity Block offering.</p>
   * @public
   */
  EndDateRange?: Date | undefined;

  /**
   * <p>The reservation duration for the Capacity Block, in hours. You must specify the
   * 			duration in 1-day increments up 14 days, and in 7-day increments up to 182 days.</p>
   * @public
   */
  CapacityDurationHours: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The EC2 UltraServer type of the Capacity Block offerings.</p>
   * @public
   */
  UltraserverType?: string | undefined;

  /**
   * <p>The number of EC2 UltraServers in the offerings.</p>
   * @public
   */
  UltraserverCount?: number | undefined;
}

/**
 * <p>The recommended Capacity Block that fits your search requirements.</p>
 * @public
 */
export interface CapacityBlockOffering {
  /**
   * <p>The ID of the Capacity Block offering.</p>
   * @public
   */
  CapacityBlockOfferingId?: string | undefined;

  /**
   * <p>The instance type of the Capacity Block offering.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The Availability Zone of the Capacity Block offering.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The number of instances in the Capacity Block offering.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The start date of the Capacity Block offering.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The end date of the Capacity Block offering.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>The number of hours (in addition to <code>capacityBlockDurationMinutes</code>) for the
   * 			duration of the Capacity Block reservation. For example, if a Capacity Block starts at
   * 				<b>04:55</b> and ends at <b>11:30</b>, the hours field would be <b>6</b>.</p>
   * @public
   */
  CapacityBlockDurationHours?: number | undefined;

  /**
   * <p>The total price to be paid up front.</p>
   * @public
   */
  UpfrontFee?: string | undefined;

  /**
   * <p>The currency of the payment for the Capacity Block.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>The tenancy of the Capacity Block.</p>
   * @public
   */
  Tenancy?: CapacityReservationTenancy | undefined;

  /**
   * <p>The EC2 UltraServer type of the Capacity Block offering.</p>
   * @public
   */
  UltraserverType?: string | undefined;

  /**
   * <p>The number of EC2 UltraServers in the offering.</p>
   * @public
   */
  UltraserverCount?: number | undefined;

  /**
   * <p>The number of minutes (in addition to <code>capacityBlockDurationHours</code>) for the
   * 			duration of the Capacity Block reservation. For example, if a Capacity Block starts at
   * 				<b>08:55</b> and ends at <b>11:30</b>, the minutes field would be <b>35</b>.</p>
   * @public
   */
  CapacityBlockDurationMinutes?: number | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockOfferingsResult {
  /**
   * <p>The recommended Capacity Block offering for the dates specified.</p>
   * @public
   */
  CapacityBlockOfferings?: CapacityBlockOffering[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlocksRequest {
  /**
   * <p>The IDs of the Capacity Blocks.</p>
   * @public
   */
  CapacityBlockIds?: string[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> One or more filters. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>capacity-block-id</code> - The ID of the Capacity Block.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ultraserver-type</code> - The Capacity Block type. The type can be
   * 					<code>instances</code> or <code>ultraservers</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the Capacity
   * 					Block.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-date</code> - The date and time at which the Capacity Block was
   * 					started.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end-date</code> - The date and time at which the Capacity Block expires.
   * 					When a Capacity Block expires, all instances in the Capacity Block are
   * 					terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-date</code> - The date and time at which the Capacity Block was
   * 					created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Capacity Block (<code>active</code> |
   * 					<code>expired</code> | <code>unavailable</code> | <code>cancelled</code> |
   * 					<code>failed</code> | <code>scheduled</code> | <code>payment-pending</code> |
   * 					<code>payment-failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tags</code> - The tags assigned to the Capacity Block.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Reserve powerful GPU instances on a future date to support your short duration machine learning (ML) workloads. Instances that run inside a Capacity Block are automatically placed close together inside <a href="http://aws.amazon.com/ec2/ultraclusters/">Amazon EC2 UltraClusters</a>, for low-latency, petabit-scale, non-blocking networking.</p>
 *          <p>You can also reserve Amazon EC2 UltraServers. UltraServers connect multiple EC2 instances using a low-latency, high-bandwidth accelerator interconnect (NeuronLink). They are built to tackle very large-scale AI/ML workloads that require significant processing power. For more information, see Amazon EC2 UltraServers.</p>
 * @public
 */
export interface CapacityBlock {
  /**
   * <p>The ID of the Capacity Block.</p>
   * @public
   */
  CapacityBlockId?: string | undefined;

  /**
   * <p>The EC2 UltraServer type of the Capacity Block.</p>
   * @public
   */
  UltraserverType?: string | undefined;

  /**
   * <p>The Availability Zone of the Capacity Block.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The Availability Zone ID of the Capacity Block.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * <p>The date and time at which the Capacity Block was started.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The date and time at which the Capacity Block expires. When a Capacity Block expires,
   * 			all instances in the Capacity Block are terminated.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>The date and time at which the Capacity Block was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The state of the Capacity Block.</p>
   * @public
   */
  State?: CapacityBlockResourceState | undefined;

  /**
   * <p>The tags assigned to the Capacity Block.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlocksResult {
  /**
   * <p>The Capacity Blocks.</p>
   * @public
   */
  CapacityBlocks?: CapacityBlock[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockStatusRequest {
  /**
   * <p>The ID of the Capacity Block.</p>
   * @public
   */
  CapacityBlockIds?: string[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>interconnect-status</code> - The status of the interconnect for the Capacity Block (<code>ok</code> | <code>impaired</code> | <code>insufficient-data</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the availability of capacity for a Capacity Reservation.</p>
 * @public
 */
export interface CapacityReservationStatus {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The combined amount of <code>Available</code> and <code>Unavailable</code> capacity in the Capacity Reservation.</p>
   * @public
   */
  TotalCapacity?: number | undefined;

  /**
   * <p>The remaining capacity. Indicates the amount of resources that can be launched into the Capacity Reservation.</p>
   * @public
   */
  TotalAvailableCapacity?: number | undefined;

  /**
   * <p>The used capacity. Indicates that the capacity is in use by resources that are running in the Capacity Reservation.</p>
   * @public
   */
  TotalUnavailableCapacity?: number | undefined;
}

/**
 * <p>Describes the availability of capacity for a Capacity Block.</p>
 * @public
 */
export interface CapacityBlockStatus {
  /**
   * <p>The ID of the Capacity Block.</p>
   * @public
   */
  CapacityBlockId?: string | undefined;

  /**
   * <p>The status of the high-bandwidth accelerator interconnect. Possible states include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ok</code> the accelerator interconnect is healthy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>impaired</code> - accelerator interconnect communication is impaired.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>insufficient-data</code> - insufficient data to determine accelerator interconnect status.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InterconnectStatus?: CapacityBlockInterconnectStatus | undefined;

  /**
   * <p>The combined amount of <code>Available</code> and <code>Unavailable</code> capacity in the Capacity Block.</p>
   * @public
   */
  TotalCapacity?: number | undefined;

  /**
   * <p>The remaining capacity. Indicates the number of resources that can be launched into the Capacity Block.</p>
   * @public
   */
  TotalAvailableCapacity?: number | undefined;

  /**
   * <p>The unavailable capacity. Indicates the instance capacity that is unavailable for use
   * 			due to a system status check failure.</p>
   * @public
   */
  TotalUnavailableCapacity?: number | undefined;

  /**
   * <p>The availability of capacity for the Capacity Block reservations.</p>
   * @public
   */
  CapacityReservationStatuses?: CapacityReservationStatus[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockStatusResult {
  /**
   * <p>The availability of capacity for a Capacity Block.</p>
   * @public
   */
  CapacityBlockStatuses?: CapacityBlockStatus[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityManagerDataExportsRequest {
  /**
   * <p>
   * The IDs of the data export configurations to describe. If not specified, all export configurations are returned.
   * </p>
   * @public
   */
  CapacityManagerDataExportIds?: string[] | undefined;

  /**
   * <p>
   * The maximum number of results to return in a single call. If not specified, up to 1000 results are returned.
   * </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   * The token for the next page of results. Use this value in a subsequent call to retrieve additional results.
   * </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response.
   * If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
   * </p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>
   * One or more filters to narrow the results. Supported filters include export status, creation date, and S3 bucket name.
   * </p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>
 * Contains information about a Capacity Manager data export configuration, including export settings, delivery status, and recent export activity.
 * </p>
 * @public
 */
export interface CapacityManagerDataExportResponse {
  /**
   * <p>
   * The unique identifier for the data export configuration.
   * </p>
   * @public
   */
  CapacityManagerDataExportId?: string | undefined;

  /**
   * <p>
   * The name of the S3 bucket where export files are delivered.
   * </p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>
   * The S3 key prefix used for organizing export files within the bucket.
   * </p>
   * @public
   */
  S3BucketPrefix?: string | undefined;

  /**
   * <p>
   * The frequency at which data exports are generated.
   * </p>
   * @public
   */
  Schedule?: Schedule | undefined;

  /**
   * <p>
   * The file format of the exported data.
   * </p>
   * @public
   */
  OutputFormat?: OutputFormat | undefined;

  /**
   * <p>
   * The timestamp when the data export configuration was created.
   * </p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>
   * The status of the most recent export delivery.
   * </p>
   * @public
   */
  LatestDeliveryStatus?: CapacityManagerDataExportStatus | undefined;

  /**
   * <p>
   * A message describing the status of the most recent export delivery, including any error details if the delivery failed.
   * </p>
   * @public
   */
  LatestDeliveryStatusMessage?: string | undefined;

  /**
   * <p>
   * The S3 URI of the most recently delivered export file.
   * </p>
   * @public
   */
  LatestDeliveryS3LocationUri?: string | undefined;

  /**
   * <p>
   * The timestamp when the most recent export was delivered to S3.
   * </p>
   * @public
   */
  LatestDeliveryTime?: Date | undefined;

  /**
   * <p>
   * The tags associated with the data export configuration.
   * </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityManagerDataExportsResult {
  /**
   * <p>
   * Information about the data export configurations, including export settings, delivery status, and recent activity.
   * </p>
   * @public
   */
  CapacityManagerDataExports?: CapacityManagerDataExportResponse[] | undefined;

  /**
   * <p>
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   * </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationBillingRequestsRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * <p>Specify one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>odcr-owner</code> - If you are the Capacity Reservation owner, specify
   * 					this value to view requests that you have initiated. Not supported with the
   * 						<code>requested-by</code> filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unused-reservation-billing-owner</code> - If you are the consumer
   * 					account, specify this value to view requests that have been sent to you. Not
   * 					supported with the <code>unused-reservation-billing-owner</code> filter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Role: CallerRole | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status</code> - The state of the request (<code>pending</code> |
   * 						<code>accepted</code> | <code>rejected</code> | <code>cancelled</code> |
   * 						<code>revoked</code> | <code>expired</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requested-by</code> - The account ID of the Capacity Reservation owner
   * 					that initiated the request. Not supported if you specify
   * 						<code>requested-by</code> for <b>Role</b>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unused-reservation-billing-owner</code> - The ID of the consumer account
   * 					to which the request was sent. Not supported if you specify
   * 						<code>unused-reservation-billing-owner</code> for <b>Role</b>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about a Capacity Reservation.</p>
 * @public
 */
export interface CapacityReservationInfo {
  /**
   * <p>The instance type for the Capacity Reservation.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The Availability Zone for the Capacity Reservation.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The tenancy of the Capacity Reservation.</p>
   * @public
   */
  Tenancy?: CapacityReservationTenancy | undefined;

  /**
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * <p>Information about a request to assign billing of the unused capacity of a Capacity
 * 			Reservation.</p>
 * @public
 */
export interface CapacityReservationBillingRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that initiated the request.</p>
   * @public
   */
  RequestedBy?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account to which the request was sent.</p>
   * @public
   */
  UnusedReservationBillingOwnerId?: string | undefined;

  /**
   * <p>The date and time, in UTC time format, at which the request was initiated.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * <p>The status of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-billing-transfers.html"> View billing assignment
   * 				requests for a shared Amazon EC2 Capacity Reservation</a>.</p>
   * @public
   */
  Status?: CapacityReservationBillingRequestStatus | undefined;

  /**
   * <p>Information about the status.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Information about the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationInfo?: CapacityReservationInfo | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationBillingRequestsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the request.</p>
   * @public
   */
  CapacityReservationBillingRequests?: CapacityReservationBillingRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationFleetsRequest {
  /**
   * <p>The IDs of the Capacity Reservation Fleets to describe.</p>
   * @public
   */
  CapacityReservationFleetIds?: string[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Fleet (<code>submitted</code> |
   * 						<code>modifying</code> | <code>active</code> |
   * 						<code>partially_fulfilled</code> | <code>expiring</code> |
   * 						<code>expired</code> | <code>cancelling</code> | <code>cancelled</code> |
   * 						<code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-match-criteria</code> - The instance matching criteria for the
   * 					Fleet. Only <code>open</code> is supported.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tenancy</code> - The tenancy of the Fleet (<code>default</code> |
   * 						<code>dedicated</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allocation-strategy</code> - The allocation strategy used by the Fleet.
   * 					Only <code>prioritized</code> is supported.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about a Capacity Reservation Fleet.</p>
 * @public
 */
export interface CapacityReservationFleet {
  /**
   * <p>The ID of the Capacity Reservation Fleet.</p>
   * @public
   */
  CapacityReservationFleetId?: string | undefined;

  /**
   * <p>The ARN of the Capacity Reservation Fleet.</p>
   * @public
   */
  CapacityReservationFleetArn?: string | undefined;

  /**
   * <p>The state of the Capacity Reservation Fleet. Possible states include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>submitted</code> - The Capacity Reservation Fleet request has been
   * 					submitted and Amazon Elastic Compute Cloud is preparing to create the Capacity
   * 					Reservations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modifying</code> - The Capacity Reservation Fleet is being modified. The
   * 					Fleet remains in this state until the modification is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>active</code> - The Capacity Reservation Fleet has fulfilled its total
   * 					target capacity and it is attempting to maintain this capacity. The Fleet
   * 					remains in this state until it is modified or deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>partially_fulfilled</code> - The Capacity Reservation Fleet has
   * 					partially fulfilled its total target capacity. There is insufficient Amazon EC2 to fulfill the total target capacity. The Fleet is attempting to
   * 					asynchronously fulfill its total target capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expiring</code> - The Capacity Reservation Fleet has reach its end date
   * 					and it is in the process of expiring. One or more of its Capacity reservations
   * 					might still be active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The Capacity Reservation Fleet has reach its end date.
   * 					The Fleet and its Capacity Reservations are expired. The Fleet can't create new
   * 					Capacity Reservations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelling</code> - The Capacity Reservation Fleet is in the process of
   * 					being cancelled. One or more of its Capacity reservations might still be
   * 					active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelled</code> - The Capacity Reservation Fleet has been manually
   * 					cancelled. The Fleet and its Capacity Reservations are cancelled and the Fleet
   * 					can't create new Capacity Reservations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - The Capacity Reservation Fleet failed to reserve
   * 					capacity for the specified instance types.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: CapacityReservationFleetState | undefined;

  /**
   * <p>The total number of capacity units for which the Capacity Reservation Fleet reserves
   * 			capacity. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">Total target
   * 				capacity</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  TotalTargetCapacity?: number | undefined;

  /**
   * <p>The capacity units that have been fulfilled.</p>
   * @public
   */
  TotalFulfilledCapacity?: number | undefined;

  /**
   * <p>The tenancy of the Capacity Reservation Fleet. Tenancies include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Reservation Fleet is created on hardware
   * 					that is shared with other Amazon Web Services accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Reservation Fleet is created on
   * 					single-tenant hardware that is dedicated to a single Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tenancy?: FleetCapacityReservationTenancy | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet expires.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation Fleet accepts.
   * 			All Capacity Reservations in the Fleet inherit this instance matching criteria.</p>
   *          <p>Currently, Capacity Reservation Fleets support <code>open</code> instance matching
   * 			criteria only. This means that instances that have matching attributes (instance type,
   * 			platform, and Availability Zone) run in the Capacity Reservations automatically.
   * 			Instances do not need to explicitly target a Capacity Reservation Fleet to use its
   * 			reserved capacity.</p>
   * @public
   */
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | undefined;

  /**
   * <p>The strategy used by the Capacity Reservation Fleet to determine which of the
   * 			specified instance types to use. For more information, see For more information, see
   * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#allocation-strategy">Allocation
   * 				strategy</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  AllocationStrategy?: string | undefined;

  /**
   * <p>Information about the instance types for which to reserve the capacity.</p>
   * @public
   */
  InstanceTypeSpecifications?: FleetCapacityReservation[] | undefined;

  /**
   * <p>The tags assigned to the Capacity Reservation Fleet.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationFleetsResult {
  /**
   * <p>Information about the Capacity Reservation Fleets.</p>
   * @public
   */
  CapacityReservationFleets?: CapacityReservationFleet[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationsRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The type of instance for which the Capacity
   * 					Reservation reserves capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the
   * 					Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-platform</code> - The type of operating system for which the
   * 					Capacity Reservation reserves capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the Capacity
   * 					Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tenancy</code> - Indicates the tenancy of the Capacity Reservation. A
   * 					Capacity Reservation can have one of the following tenancy settings:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>default</code> - The Capacity Reservation is created on hardware
   * 							that is shared with other Amazon Web Services accounts.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>dedicated</code> - The Capacity Reservation is created on
   * 							single-tenant hardware that is dedicated to a single Amazon Web Services account.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost on
   * 					which the Capacity Reservation was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The current state of the Capacity Reservation. A Capacity
   * 					Reservation can be in one of the following states:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>active</code>- The Capacity Reservation is active and the
   * 							capacity is available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>expired</code> - The Capacity Reservation expired automatically
   * 							at the date and time specified in your request. The reserved capacity is
   * 							no longer available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>cancelled</code> - The Capacity Reservation was cancelled. The
   * 							reserved capacity is no longer available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>pending</code> - The Capacity Reservation request was successful
   * 							but the capacity provisioning is still pending.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>failed</code> - The Capacity Reservation request has failed. A
   * 							request might fail due to invalid request parameters, capacity
   * 							constraints, or instance limit constraints. Failed requests are retained
   * 							for 60 minutes.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-date</code> - The date and time at which the Capacity Reservation
   * 					was started.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end-date</code> - The date and time at which the Capacity Reservation
   * 					expires. When a Capacity Reservation expires, the reserved capacity is released
   * 					and you can no longer launch instances into it. The Capacity Reservation's state
   * 					changes to expired when it reaches its end date and time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end-date-type</code> - Indicates the way in which the Capacity
   * 					Reservation ends. A Capacity Reservation can have one of the following end
   * 					types:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>unlimited</code> - The Capacity Reservation remains active until
   * 							you explicitly cancel it.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>limited</code> - The Capacity Reservation expires automatically
   * 							at a specified date and time.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-match-criteria</code> - Indicates the type of instance launches
   * 					that the Capacity Reservation accepts. The options include:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>open</code> - The Capacity Reservation accepts all instances
   * 							that have matching attributes (instance type, platform, and Availability
   * 							Zone). Instances that have matching attributes launch into the Capacity
   * 							Reservation automatically without specifying any additional
   * 							parameters.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>targeted</code> - The Capacity Reservation only accepts
   * 							instances that have matching attributes (instance type, platform, and
   * 							Availability Zone), and explicitly target the Capacity Reservation. This
   * 							ensures that only permitted instances can use the reserved
   * 							capacity.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>placement-group-arn</code> - The ARN of the cluster placement group in
   * 					which the Capacity Reservation was created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the Capacity Reservations.</p>
   * @public
   */
  CapacityReservations?: CapacityReservation[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationTopologyRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>You can't specify this parameter and the Capacity Reservation IDs parameter in the
   *             same request.</p>
   *          <p>Default: <code>10</code>
   *          </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The Capacity Reservation IDs.</p>
   *          <p>Default: Describes all your Capacity Reservations.</p>
   *          <p>Constraints: Maximum 100 explicitly specified Capacity Reservation IDs.</p>
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The name of the Availability Zone (for
   *                     example, <code>us-west-2a</code>) or Local Zone (for example,
   *                         <code>us-west-2-lax-1b</code>) that the Capacity Reservation is in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example,
   *                         <code>p4d.24xlarge</code>) or instance family (for example,
   *                         <code>p4d*</code>). You can use the <code>*</code> wildcard to match zero or
   *                     more characters, or the <code>?</code> wildcard to match zero or one
   *                     character.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Information about the Capacity Reservation topology.</p>
 * @public
 */
export interface CapacityReservationTopology {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The ID of the Capacity Block. This parameter is only supported for UltraServer
   *             instances and identifies instances within the UltraServer domain.</p>
   * @public
   */
  CapacityBlockId?: string | undefined;

  /**
   * <p>The current state of the Capacity Reservation. For the list of possible states, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCapacityReservations.html">DescribeCapacityReservations</a>.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The name of the placement group that the Capacity Reservation is in.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The network nodes. The nodes are hashed based on your account. Capacity Reservations
   *             from different accounts running under the same server will return a different hashed
   *             list of strings.</p>
   *          <p>The value is <code>null</code> or empty if:</p>
   *          <ul>
   *             <li>
   *                <p>The instance type is not supported.</p>
   *             </li>
   *             <li>
   *                <p>The Capacity Reservation is in a state other than <code>active</code> or
   *                         <code>pending</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NetworkNodes?: string[] | undefined;

  /**
   * <p>The ID of the Availability Zone or Local Zone that the Capacity Reservation is
   *             in.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The name of the Availability Zone or Local Zone that the Capacity Reservation is
   *             in.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationTopologyResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the topology of each Capacity Reservation.</p>
   * @public
   */
  CapacityReservations?: CapacityReservationTopology[] | undefined;
}

/**
 * @public
 */
export interface DescribeCarrierGatewaysRequest {
  /**
   * <p>One or more carrier gateway IDs.</p>
   * @public
   */
  CarrierGatewayIds?: string[] | undefined;

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
export interface DescribeCarrierGatewaysResult {
  /**
   * <p>Information about the carrier gateway.</p>
   * @public
   */
  CarrierGateways?: CarrierGateway[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClassicLinkInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The instance IDs. Must be instances linked to a VPC through ClassicLink.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The filters.</p>
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
   *                   <code>tag</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC to which the instance is linked.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>Constraint: If the value is greater than 1000, we return only 1000 items.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <note>
 *             <p>Deprecated.</p>
 *          </note>
 *          <p>Describes a linked EC2-Classic instance.</p>
 * @public
 */
export interface ClassicLinkInstance {
  /**
   * <p>The security groups.</p>
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>Any tags assigned to the instance.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClassicLinkInstancesResult {
  /**
   * <p>Information about one or more linked EC2-Classic instances.</p>
   * @public
   */
  Instances?: ClassicLinkInstance[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnAuthorizationRulesRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Information about an authorization rule.</p>
 * @public
 */
export interface AuthorizationRule {
  /**
   * <p>The ID of the Client VPN endpoint with which the authorization rule is associated.</p>
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * <p>A brief description of the authorization rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the Active Directory group to which the authorization rule grants access.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>Indicates whether the authorization rule grants access to all clients.</p>
   * @public
   */
  AccessAll?: boolean | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the network to which the authorization rule applies.</p>
   * @public
   */
  DestinationCidr?: string | undefined;

  /**
   * <p>The current state of the authorization rule.</p>
   * @public
   */
  Status?: ClientVpnAuthorizationRuleStatus | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnAuthorizationRulesResult {
  /**
   * <p>Information about the authorization rules.</p>
   * @public
   */
  AuthorizationRules?: AuthorizationRule[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnConnectionsRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   * @public
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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the status of a client connection.</p>
 * @public
 */
export interface ClientVpnConnectionStatus {
  /**
   * <p>The state of the client connection.</p>
   * @public
   */
  Code?: ClientVpnConnectionStatusCode | undefined;

  /**
   * <p>A message about the status of the client connection, if applicable.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes a client connection.</p>
 * @public
 */
export interface ClientVpnConnection {
  /**
   * <p>The ID of the Client VPN endpoint to which the client is connected.</p>
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * <p>The current date and time.</p>
   * @public
   */
  Timestamp?: string | undefined;

  /**
   * <p>The ID of the client connection.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The username of the client who established the client connection. This information is only provided
   * 			if Active Directory client authentication is used.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The date and time the client connection was established.</p>
   * @public
   */
  ConnectionEstablishedTime?: string | undefined;

  /**
   * <p>The number of bytes sent by the client.</p>
   * @public
   */
  IngressBytes?: string | undefined;

  /**
   * <p>The number of bytes received by the client.</p>
   * @public
   */
  EgressBytes?: string | undefined;

  /**
   * <p>The number of packets sent by the client.</p>
   * @public
   */
  IngressPackets?: string | undefined;

  /**
   * <p>The number of packets received by the client.</p>
   * @public
   */
  EgressPackets?: string | undefined;

  /**
   * <p>The IP address of the client.</p>
   * @public
   */
  ClientIp?: string | undefined;

  /**
   * <p>The IPv6 address assigned to the client connection when using a dual-stack Client VPN endpoint. This field is only populated when the endpoint is configured for dual-stack addressing, and the client is using IPv6 for connectivity.</p>
   * @public
   */
  ClientIpv6Address?: string | undefined;

  /**
   * <p>The common name associated with the client. This is either the name of the client certificate,
   * 			or the Active Directory user name.</p>
   * @public
   */
  CommonName?: string | undefined;

  /**
   * <p>The current state of the client connection.</p>
   * @public
   */
  Status?: ClientVpnConnectionStatus | undefined;

  /**
   * <p>The date and time the client connection was terminated.</p>
   * @public
   */
  ConnectionEndTime?: string | undefined;

  /**
   * <p>The statuses returned by the client connect handler for posture compliance, if applicable.</p>
   * @public
   */
  PostureComplianceStatuses?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnConnectionsResult {
  /**
   * <p>Information about the active and terminated client connections.</p>
   * @public
   */
  Connections?: ClientVpnConnection[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnEndpointsRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   * @public
   */
  ClientVpnEndpointIds?: string[] | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.</p>
 * @public
 */
export interface AssociatedTargetNetwork {
  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  NetworkId?: string | undefined;

  /**
   * <p>The target network type.</p>
   * @public
   */
  NetworkType?: AssociatedNetworkType | undefined;
}

/**
 * <p>Describes an Active Directory.</p>
 * @public
 */
export interface DirectoryServiceAuthentication {
  /**
   * <p>The ID of the Active Directory used for authentication.</p>
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * <p>Describes the IAM SAML identity providers used for federated authentication.</p>
 * @public
 */
export interface FederatedAuthentication {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider.</p>
   * @public
   */
  SamlProviderArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider for the self-service portal.</p>
   * @public
   */
  SelfServiceSamlProviderArn?: string | undefined;
}

/**
 * <p>Information about the client certificate used for authentication.</p>
 * @public
 */
export interface CertificateAuthentication {
  /**
   * <p>The ARN of the client certificate. </p>
   * @public
   */
  ClientRootCertificateChain?: string | undefined;
}

/**
 * <p>Describes the authentication methods used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/client-authentication.html">Authentication</a>
 * 			in the <i>Client VPN Administrator Guide</i>.</p>
 * @public
 */
export interface ClientVpnAuthentication {
  /**
   * <p>The authentication type used.</p>
   * @public
   */
  Type?: ClientVpnAuthenticationType | undefined;

  /**
   * <p>Information about the Active Directory, if applicable.</p>
   * @public
   */
  ActiveDirectory?: DirectoryServiceAuthentication | undefined;

  /**
   * <p>Information about the authentication certificates, if applicable.</p>
   * @public
   */
  MutualAuthentication?: CertificateAuthentication | undefined;

  /**
   * <p>Information about the IAM SAML identity provider, if applicable.</p>
   * @public
   */
  FederatedAuthentication?: FederatedAuthentication | undefined;
}

/**
 * <p>Describes the status of the Client VPN endpoint attribute.</p>
 * @public
 */
export interface ClientVpnEndpointAttributeStatus {
  /**
   * <p>The status code.</p>
   * @public
   */
  Code?: ClientVpnEndpointAttributeStatusCode | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The options for managing connection authorization for new client connections.</p>
 * @public
 */
export interface ClientConnectResponseOptions {
  /**
   * <p>Indicates whether client connect options are enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used for connection authorization.</p>
   * @public
   */
  LambdaFunctionArn?: string | undefined;

  /**
   * <p>The status of any updates to the client connect options.</p>
   * @public
   */
  Status?: ClientVpnEndpointAttributeStatus | undefined;
}

/**
 * <p>Current state of options for customizable text banner that will be displayed on
 * 			Amazon Web Services provided clients when a VPN session is established.</p>
 * @public
 */
export interface ClientLoginBannerResponseOptions {
  /**
   * <p>Current state of text banner feature.</p>
   *          <p>Valid values: <code>true | false</code>
   *          </p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Customizable text that will be displayed in a banner on Amazon Web Services provided
   * 			clients when a VPN session is established. UTF-8 encoded
   * 			characters only. Maximum of 1400 characters.</p>
   * @public
   */
  BannerText?: string | undefined;
}

/**
 * <p>The current status of Client Route Enforcement. </p>
 * @public
 */
export interface ClientRouteEnforcementResponseOptions {
  /**
   * <p>Status of the client route enforcement feature, indicating whether Client Route Enforcement
   * 			is <code>true</code> (enabled) or <code>false</code> (disabled).</p>
   *          <p>Valid values: <code>true | false</code>
   *          </p>
   *          <p>Default value: <code>false</code>
   *          </p>
   * @public
   */
  Enforced?: boolean | undefined;
}

/**
 * <p>Information about the client connection logging options for a Client VPN endpoint.</p>
 * @public
 */
export interface ConnectionLogResponseOptions {
  /**
   * <p>Indicates whether client connection logging is enabled for the Client VPN endpoint.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The name of the Amazon CloudWatch Logs log group to which connection logging data is published.</p>
   * @public
   */
  CloudwatchLogGroup?: string | undefined;

  /**
   * <p>The name of the Amazon CloudWatch Logs log stream to which connection logging data is published.</p>
   * @public
   */
  CloudwatchLogStream?: string | undefined;
}

/**
 * <p>Describes a Client VPN endpoint.</p>
 * @public
 */
export interface ClientVpnEndpoint {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * <p>A brief description of the endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current state of the Client VPN endpoint.</p>
   * @public
   */
  Status?: ClientVpnEndpointStatus | undefined;

  /**
   * <p>The date and time the Client VPN endpoint was created.</p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The date and time the Client VPN endpoint was deleted, if applicable.</p>
   * @public
   */
  DeletionTime?: string | undefined;

  /**
   * <p>The DNS name to be used by clients when connecting to the Client VPN endpoint.</p>
   * @public
   */
  DnsName?: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, from which client IP addresses are assigned.</p>
   * @public
   */
  ClientCidrBlock?: string | undefined;

  /**
   * <p>Information about the DNS servers to be used for DNS resolution. </p>
   * @public
   */
  DnsServers?: string[] | undefined;

  /**
   * <p>Indicates whether split-tunnel is enabled in the Client VPN endpoint.</p>
   *          <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-Tunnel Client VPN endpoint</a>
   * 			in the <i>Client VPN Administrator Guide</i>.</p>
   * @public
   */
  SplitTunnel?: boolean | undefined;

  /**
   * <p>The protocol used by the VPN session.</p>
   * @public
   */
  VpnProtocol?: VpnProtocol | undefined;

  /**
   * <p>The transport protocol used by the Client VPN endpoint.</p>
   * @public
   */
  TransportProtocol?: TransportProtocol | undefined;

  /**
   * <p>The port number for the  Client VPN endpoint.</p>
   * @public
   */
  VpnPort?: number | undefined;

  /**
   * <p>Information about the associated target networks. A target network is a subnet in a VPC.</p>
   *
   * @deprecated This property is deprecated. To view the target networks associated with a Client VPN endpoint, call DescribeClientVpnTargetNetworks and inspect the clientVpnTargetNetworks response element.
   * @public
   */
  AssociatedTargetNetworks?: AssociatedTargetNetwork[] | undefined;

  /**
   * <p>The ARN of the server certificate.</p>
   * @public
   */
  ServerCertificateArn?: string | undefined;

  /**
   * <p>Information about the authentication method used by the Client VPN endpoint.</p>
   * @public
   */
  AuthenticationOptions?: ClientVpnAuthentication[] | undefined;

  /**
   * <p>Information about the client connection logging options for the Client VPN endpoint.</p>
   * @public
   */
  ConnectionLogOptions?: ConnectionLogResponseOptions | undefined;

  /**
   * <p>Any tags assigned to the Client VPN endpoint.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The IDs of the security groups for the target network.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The URL of the self-service portal.</p>
   * @public
   */
  SelfServicePortalUrl?: string | undefined;

  /**
   * <p>The options for managing connection authorization for new client connections.</p>
   * @public
   */
  ClientConnectOptions?: ClientConnectResponseOptions | undefined;

  /**
   * <p>The maximum VPN session duration time in hours.</p>
   *          <p>Valid values: <code>8 | 10 | 12 | 24</code>
   *          </p>
   *          <p>Default value: <code>24</code>
   *          </p>
   * @public
   */
  SessionTimeoutHours?: number | undefined;

  /**
   * <p>Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is
   * 			established.</p>
   * @public
   */
  ClientLoginBannerOptions?: ClientLoginBannerResponseOptions | undefined;

  /**
   * <p>Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. T
   * 		his feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel.</p>
   *          <p>Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table,
   * 			reverting it back to the expected route configurations.</p>
   * @public
   */
  ClientRouteEnforcementOptions?: ClientRouteEnforcementResponseOptions | undefined;

  /**
   * <p>Indicates whether the client VPN session is disconnected after the maximum <code>sessionTimeoutHours</code> is reached. If <code>true</code>, users are prompted to reconnect client VPN. If <code>false</code>, client VPN attempts to reconnect automatically. The default value is <code>true</code>.</p>
   * @public
   */
  DisconnectOnSessionTimeout?: boolean | undefined;

  /**
   * <p>The IP address type of the Client VPN endpoint. Possible values are <code>ipv4</code> for IPv4 addressing only, <code>ipv6</code> for IPv6 addressing only, or <code>dual-stack </code>for both IPv4 and IPv6 addressing.</p>
   * @public
   */
  EndpointIpAddressType?: EndpointIpAddressType | undefined;

  /**
   * <p>The IP address type of the Client VPN endpoint. Possible values are either <code>ipv4</code> for IPv4 addressing only, <code>ipv6</code> for IPv6 addressing only, or <code>dual-stack</code> for both IPv4 and IPv6 addressing.</p>
   * @public
   */
  TrafficIpAddressType?: TrafficIpAddressType | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnEndpointsResult {
  /**
   * <p>Information about the Client VPN endpoints.</p>
   * @public
   */
  ClientVpnEndpoints?: ClientVpnEndpoint[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnRoutesRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   * @public
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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about a Client VPN endpoint route.</p>
 * @public
 */
export interface ClientVpnRoute {
  /**
   * <p>The ID of the Client VPN endpoint with which the route is associated.</p>
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the route destination.</p>
   * @public
   */
  DestinationCidr?: string | undefined;

  /**
   * <p>The ID of the subnet through which traffic is routed.</p>
   * @public
   */
  TargetSubnet?: string | undefined;

  /**
   * <p>The route type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>Indicates how the route was associated with the Client VPN endpoint.
   * 			<code>associate</code> indicates that the route was automatically added when the target network
   * 			was associated with the Client VPN endpoint. <code>add-route</code> indicates that the route
   * 			was manually added using the <b>CreateClientVpnRoute</b> action.</p>
   * @public
   */
  Origin?: string | undefined;

  /**
   * <p>The current state of the route.</p>
   * @public
   */
  Status?: ClientVpnRouteStatus | undefined;

  /**
   * <p>A brief description of the route.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnRoutesResult {
  /**
   * <p>Information about the Client VPN endpoint routes.</p>
   * @public
   */
  Routes?: ClientVpnRoute[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnTargetNetworksRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IDs of the target network associations.</p>
   * @public
   */
  AssociationIds?: string[] | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a target network associated with a Client VPN endpoint.</p>
 * @public
 */
export interface TargetNetwork {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The ID of the VPC in which the target network (subnet) is located.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the subnet specified as the target network.</p>
   * @public
   */
  TargetNetworkId?: string | undefined;

  /**
   * <p>The ID of the Client VPN endpoint with which the target network is associated.</p>
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * <p>The current state of the target network association.</p>
   * @public
   */
  Status?: AssociationStatus | undefined;

  /**
   * <p>The IDs of the security groups applied to the target network association.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnTargetNetworksResult {
  /**
   * <p>Information about the associated target networks.</p>
   * @public
   */
  ClientVpnTargetNetworks?: TargetNetwork[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCoipPoolsRequest {
  /**
   * <p>The IDs of the address pools.</p>
   * @public
   */
  PoolIds?: string[] | undefined;

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
export interface DescribeCoipPoolsResult {
  /**
   * <p>Information about the address pools.</p>
   * @public
   */
  CoipPools?: CoipPool[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConversionTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The conversion task IDs.</p>
   * @public
   */
  ConversionTaskIds?: string[] | undefined;
}

/**
 * <p>Describes a disk image.</p>
 * @public
 */
export interface DiskImageDescription {
  /**
   * <p>The checksum computed for the disk image.</p>
   * @public
   */
  Checksum?: string | undefined;

  /**
   * <p>The disk image format.</p>
   * @public
   */
  Format?: DiskImageFormat | undefined;

  /**
   * <p>A presigned URL for the import manifest stored in Amazon S3. For information about creating a presigned URL for
   *    an Amazon S3 object, read the "Query String Request Authentication Alternative" section of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">Authenticating REST Requests</a> topic in
   *    the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   * @public
   */
  ImportManifestUrl?: string | undefined;

  /**
   * <p>The size of the disk image, in GiB.</p>
   * @public
   */
  Size?: number | undefined;
}

/**
 * <p>Describes a disk image volume.</p>
 * @public
 */
export interface DiskImageVolumeDescription {
  /**
   * <p>The volume identifier.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The size of the volume, in GiB.</p>
   * @public
   */
  Size?: number | undefined;
}

/**
 * <p>Describes an import volume task.</p>
 * @public
 */
export interface ImportInstanceVolumeDetailItem {
  /**
   * <p>The Availability Zone where the resulting instance will reside.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone where the resulting instance will reside.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The number of bytes converted so far.</p>
   * @public
   */
  BytesConverted?: number | undefined;

  /**
   * <p>A description of the task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The image.</p>
   * @public
   */
  Image?: DiskImageDescription | undefined;

  /**
   * <p>The status of the import of this particular disk image.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The status information or errors related to the disk image.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The volume.</p>
   * @public
   */
  Volume?: DiskImageVolumeDescription | undefined;
}

/**
 * <p>Describes an import instance task.</p>
 * @public
 */
export interface ImportInstanceTaskDetails {
  /**
   * <p>A description of the task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The instance operating system.</p>
   * @public
   */
  Platform?: PlatformValues | undefined;

  /**
   * <p>The volumes.</p>
   * @public
   */
  Volumes?: ImportInstanceVolumeDetailItem[] | undefined;
}

/**
 * <p>Describes an import volume task.</p>
 * @public
 */
export interface ImportVolumeTaskDetails {
  /**
   * <p>The Availability Zone where the resulting volume will reside.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone where the resulting volume will reside.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The number of bytes converted so far.</p>
   * @public
   */
  BytesConverted?: number | undefined;

  /**
   * <p>The description you provided when starting the import volume task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The image.</p>
   * @public
   */
  Image?: DiskImageDescription | undefined;

  /**
   * <p>The volume.</p>
   * @public
   */
  Volume?: DiskImageVolumeDescription | undefined;
}

/**
 * <p>Describes a conversion task.</p>
 * @public
 */
export interface ConversionTask {
  /**
   * <p>The ID of the conversion task.</p>
   * @public
   */
  ConversionTaskId?: string | undefined;

  /**
   * <p>The time when the task expires. If the upload isn't complete before the expiration time, we automatically cancel
   *    the task.</p>
   * @public
   */
  ExpirationTime?: string | undefined;

  /**
   * <p>If the task is for importing an instance, this contains information about the import instance task.</p>
   * @public
   */
  ImportInstance?: ImportInstanceTaskDetails | undefined;

  /**
   * <p>If the task is for importing a volume, this contains information about the import volume task.</p>
   * @public
   */
  ImportVolume?: ImportVolumeTaskDetails | undefined;

  /**
   * <p>The state of the conversion task.</p>
   * @public
   */
  State?: ConversionTaskState | undefined;

  /**
   * <p>The status message related to the conversion task.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Any tags assigned to the task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeConversionTasksResult {
  /**
   * <p>Information about the conversion tasks.</p>
   * @public
   */
  ConversionTasks?: ConversionTask[] | undefined;
}

/**
 * <p>Contains the parameters for DescribeCustomerGateways.</p>
 * @public
 */
export interface DescribeCustomerGatewaysRequest {
  /**
   * <p>One or more customer gateway IDs.</p>
   *          <p>Default: Describes all your customer gateways.</p>
   * @public
   */
  CustomerGatewayIds?: string[] | undefined;

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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Contains the output of DescribeCustomerGateways.</p>
 * @public
 */
export interface DescribeCustomerGatewaysResult {
  /**
   * <p>Information about one or more customer gateways.</p>
   * @public
   */
  CustomerGateways?: CustomerGateway[] | undefined;
}

/**
 * @public
 */
export interface DescribeDeclarativePoliciesReportsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more report IDs.</p>
   * @public
   */
  ReportIds?: string[] | undefined;
}

/**
 * <p>Describes the metadata of the account status report.</p>
 * @public
 */
export interface DeclarativePoliciesReport {
  /**
   * <p>The ID of the report.</p>
   * @public
   */
  ReportId?: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where the report is located.</p>
   * @public
   */
  S3Bucket?: string | undefined;

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
  TargetId?: string | undefined;

  /**
   * <p>The time when the report generation started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time when the report generation ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The current status of the report.</p>
   * @public
   */
  Status?: ReportState | undefined;

  /**
   * <p>Any tags assigned to the report.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeDeclarativePoliciesReportsResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The report metadata.</p>
   * @public
   */
  Reports?: DeclarativePoliciesReport[] | undefined;
}

/**
 * @public
 */
export interface DescribeDhcpOptionsRequest {
  /**
   * <p>The IDs of DHCP option sets.</p>
   * @public
   */
  DhcpOptionsIds?: string[] | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
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

  /**
   * <p>The filters.</p>
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
   *                   <code>tag</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeDhcpOptionsResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the DHCP options sets.</p>
   * @public
   */
  DhcpOptions?: DhcpOptions[] | undefined;
}

/**
 * @public
 */
export interface DescribeEgressOnlyInternetGatewaysRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the egress-only internet gateways.</p>
   * @public
   */
  EgressOnlyInternetGatewayIds?: string[] | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>tag</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeEgressOnlyInternetGatewaysResult {
  /**
   * <p>Information about the egress-only internet gateways.</p>
   * @public
   */
  EgressOnlyInternetGateways?: EgressOnlyInternetGateway[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeElasticGpusRequest {
  /**
   * <p>The Elastic Graphics accelerator IDs.</p>
   * @public
   */
  ElasticGpuIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024.</p>
 *          </note>
 *          <p>Describes the status of an Elastic Graphics accelerator.</p>
 * @public
 */
export interface ElasticGpuHealth {
  /**
   * <p>The health status.</p>
   * @public
   */
  Status?: ElasticGpuStatus | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024.</p>
 *          </note>
 *          <p>Describes an Elastic Graphics accelerator.</p>
 * @public
 */
export interface ElasticGpus {
  /**
   * <p>The ID of the Elastic Graphics accelerator.</p>
   * @public
   */
  ElasticGpuId?: string | undefined;

  /**
   * <p>The Availability Zone in the which the Elastic Graphics accelerator resides.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The type of Elastic Graphics accelerator.</p>
   * @public
   */
  ElasticGpuType?: string | undefined;

  /**
   * <p>The status of the Elastic Graphics accelerator.</p>
   * @public
   */
  ElasticGpuHealth?: ElasticGpuHealth | undefined;

  /**
   * <p>The state of the Elastic Graphics accelerator.</p>
   * @public
   */
  ElasticGpuState?: ElasticGpuState | undefined;

  /**
   * <p>The ID of the instance to which the Elastic Graphics accelerator is attached.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The tags assigned to the Elastic Graphics accelerator.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeElasticGpusResult {
  /**
   * <p>Information about the Elastic Graphics accelerators.</p>
   * @public
   */
  ElasticGpuSet?: ElasticGpus[] | undefined;

  /**
   * <p>The total number of items to return. If the total number of items available is more
   *             than the value specified in max-items then a Next-Token will be provided in the output
   *             that you can use to resume pagination.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeExportImageTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Filter tasks using the <code>task-state</code> filter and one of the following values: <code>active</code>,
   *     <code>completed</code>, <code>deleting</code>, or <code>deleted</code>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The IDs of the export image tasks.</p>
   * @public
   */
  ExportImageTaskIds?: string[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token that indicates the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes the destination for an export image task.</p>
 * @public
 */
export interface ExportTaskS3Location {
  /**
   * <p>The destination Amazon S3 bucket.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The prefix (logical hierarchy) in the bucket.</p>
   * @public
   */
  S3Prefix?: string | undefined;
}

/**
 * <p>Describes an export image task.</p>
 * @public
 */
export interface ExportImageTask {
  /**
   * <p>A description of the image being exported.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the export image task.</p>
   * @public
   */
  ExportImageTaskId?: string | undefined;

  /**
   * <p>The ID of the image.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The percent complete of the export image task.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>Information about the destination Amazon S3 bucket.</p>
   * @public
   */
  S3ExportLocation?: ExportTaskS3Location | undefined;

  /**
   * <p>The status of the export image task. The possible values are <code>active</code>, <code>completed</code>,
   *     <code>deleting</code>, and <code>deleted</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The status message for the export image task.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Any tags assigned to the export image task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeExportImageTasksResult {
  /**
   * <p>Information about the export image tasks.</p>
   * @public
   */
  ExportImageTasks?: ExportImageTask[] | undefined;

  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeExportTasksRequest {
  /**
   * <p>the filters for the export tasks.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The export task IDs.</p>
   * @public
   */
  ExportTaskIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeExportTasksResult {
  /**
   * <p>Information about the export tasks.</p>
   * @public
   */
  ExportTasks?: ExportTask[] | undefined;
}

/**
 * @public
 */
export interface DescribeFastLaunchImagesRequest {
  /**
   * <p>Specify one or more Windows AMI image IDs for the request.</p>
   * @public
   */
  ImageIds?: string[] | undefined;

  /**
   * <p>Use the following filters to streamline results.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type for pre-provisioning.</p>
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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Identifies the launch template that the AMI uses for Windows fast launch.</p>
 * @public
 */
export interface FastLaunchLaunchTemplateSpecificationResponse {
  /**
   * <p>The ID of the launch template that the AMI uses for Windows fast launch.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template that the AMI uses for Windows fast launch.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The version of the launch template that the AMI uses for Windows fast launch.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>Configuration settings for creating and managing pre-provisioned snapshots for a Windows
 *       fast launch enabled Windows AMI.</p>
 * @public
 */
export interface FastLaunchSnapshotConfigurationResponse {
  /**
   * <p>The number of pre-provisioned snapshots requested to keep on hand for a Windows fast
   *       launch enabled AMI.</p>
   * @public
   */
  TargetResourceCount?: number | undefined;
}

/**
 * <p>Describe details about a Windows image with Windows fast launch enabled that meets the
 *       requested criteria. Criteria are defined by the <code>DescribeFastLaunchImages</code> action
 *       filters.</p>
 * @public
 */
export interface DescribeFastLaunchImagesSuccessItem {
  /**
   * <p>The image ID that identifies the Windows fast launch enabled image.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The resource type that Amazon EC2 uses for pre-provisioning the Windows AMI. Supported values
   *       include: <code>snapshot</code>.</p>
   * @public
   */
  ResourceType?: FastLaunchResourceType | undefined;

  /**
   * <p>A group of parameters that are used for pre-provisioning the associated Windows AMI using
   *       snapshots.</p>
   * @public
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse | undefined;

  /**
   * <p>The launch template that the Windows fast launch enabled AMI uses when it launches Windows
   *       instances from pre-provisioned snapshots.</p>
   * @public
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse | undefined;

  /**
   * <p>The maximum number of instances that Amazon EC2 can launch at the same time to create
   *       pre-provisioned snapshots for Windows fast launch.</p>
   * @public
   */
  MaxParallelLaunches?: number | undefined;

  /**
   * <p>The owner ID for the Windows fast launch enabled AMI.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The current state of Windows fast launch for the specified Windows AMI.</p>
   * @public
   */
  State?: FastLaunchStateCode | undefined;

  /**
   * <p>The reason that Windows fast launch for the AMI changed to the current state.</p>
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * <p>The time that Windows fast launch for the AMI changed to the current state.</p>
   * @public
   */
  StateTransitionTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFastLaunchImagesResult {
  /**
   * <p>A collection of details about the fast-launch enabled Windows images that meet the
   *       requested criteria.</p>
   * @public
   */
  FastLaunchImages?: DescribeFastLaunchImagesSuccessItem[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFastSnapshotRestoresRequest {
  /**
   * <p>The filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code>: The Availability Zone of the snapshot. For example, <code>us-east-2a</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone-id</code>: The ID of the Availability Zone of the snapshot. For example, <code>use2-az1</code>.</p>
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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request.
   *   Pagination continues from the end of the items returned by the previous request.</p>
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
 * <p>Describes fast snapshot restores for a snapshot.</p>
 * @public
 */
export interface DescribeFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The state of fast snapshot restores.</p>
   * @public
   */
  State?: FastSnapshotRestoreStateCode | undefined;

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
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   * @public
   */
  OwnerAlias?: string | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   * @public
   */
  EnablingTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   * @public
   */
  OptimizingTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   * @public
   */
  EnabledTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   * @public
   */
  DisablingTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   * @public
   */
  DisabledTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFastSnapshotRestoresResult {
  /**
   * <p>Information about the state of fast snapshot restores.</p>
   * @public
   */
  FastSnapshotRestores?: DescribeFastSnapshotRestoreSuccessItem[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetHistoryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The type of events to describe. By default, all events are described.</p>
   * @public
   */
  EventType?: FleetEventType | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The start date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  StartTime: Date | undefined;
}

/**
 * <p>Describes an EC2 Fleet or Spot Fleet event.</p>
 * @public
 */
export interface EventInformation {
  /**
   * <p>The description of the event.</p>
   * @public
   */
  EventDescription?: string | undefined;

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
   *                   <code>launchSpecUnusable</code> - The price specified in a launch specification
   *                is not valid because it is below the Spot price for the requested Spot pools.</p>
   *                <p>Note: Even if a fleet with the <code>maintain</code> request type is in the process
   *                of being canceled, it may still publish a <code>launchSpecUnusable</code> event. This
   *                does not mean that the canceled fleet is attempting to launch a new instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>registerWithLoadBalancersFailed</code> - An attempt to register
   *                instances with load balancers failed. For more information, see the description
   *                of the event.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EventSubType?: string | undefined;

  /**
   * <p>The ID of the instance. This information is available only for
   *          <code>instanceChange</code> events.</p>
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * <p>Describes an event in the history of an EC2 Fleet.</p>
 * @public
 */
export interface HistoryRecordEntry {
  /**
   * <p>Information about the event.</p>
   * @public
   */
  EventInformation?: EventInformation | undefined;

  /**
   * <p>The event type.</p>
   * @public
   */
  EventType?: FleetEventType | undefined;

  /**
   * <p>The date and time of the event, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFleetHistoryResult {
  /**
   * <p>Information about the events in the history of the EC2 Fleet.</p>
   * @public
   */
  HistoryRecords?: HistoryRecordEntry[] | undefined;

  /**
   * <p>The last date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          All records up to this time were retrieved.</p>
   *          <p>If <code>nextToken</code> indicates that there are more items, this value is not
   *          present.</p>
   * @public
   */
  LastEvaluatedTime?: Date | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the EC Fleet.</p>
   * @public
   */
  FleetId?: string | undefined;

  /**
   * <p>The start date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFleetInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   * @public
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
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeFleetInstancesResult {
  /**
   * <p>The running instances. This list is refreshed periodically and might be out of
   *          date.</p>
   * @public
   */
  ActiveInstances?: ActiveInstance[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   * @public
   */
  FleetId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The IDs of the EC2 Fleets.</p>
   *          <note>
   *             <p>If a fleet is of type <code>instant</code>, you must specify the fleet ID, otherwise
   *             it does not appear in the response.</p>
   *          </note>
   * @public
   */
  FleetIds?: string[] | undefined;

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
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes the instances that could not be launched by the fleet.</p>
 * @public
 */
export interface DescribeFleetError {
  /**
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   * @public
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse | undefined;

  /**
   * <p>Indicates if the instance that could not be launched was a Spot Instance or On-Demand Instance.</p>
   * @public
   */
  Lifecycle?: InstanceLifecycle | undefined;

  /**
   * <p>The error code that indicates why the instance could not be launched. For more
   *          information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error codes</a>.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message that describes why the instance could not be launched. For more
   *          information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error codes</a>.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Describes the instances that were launched by the fleet.</p>
 * @public
 */
export interface DescribeFleetsInstances {
  /**
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   * @public
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse | undefined;

  /**
   * <p>Indicates if the instance that was launched is a Spot Instance or On-Demand Instance.</p>
   * @public
   */
  Lifecycle?: InstanceLifecycle | undefined;

  /**
   * <p>The IDs of the instances.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The value is <code>windows</code> for Windows instances in an EC2 Fleet. Otherwise, the value is
   *          blank.</p>
   * @public
   */
  Platform?: PlatformValues | undefined;
}

/**
 * <p>Describes a launch template and overrides.</p>
 * @public
 */
export interface FleetLaunchTemplateConfig {
  /**
   * <p>The launch template.</p>
   * @public
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification | undefined;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   * @public
   */
  Overrides?: FleetLaunchTemplateOverrides[] | undefined;
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
 * @public
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
   * @public
   */
  UsageStrategy?: FleetCapacityReservationUsageStrategy | undefined;
}

/**
 * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
 * @public
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
   * @public
   */
  AllocationStrategy?: FleetOnDemandAllocationStrategy | undefined;

  /**
   * <p>The strategy for using unused Capacity Reservations for fulfilling On-Demand
   *          capacity.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   * @public
   */
  CapacityReservationOptions?: CapacityReservationOptions | undefined;

  /**
   * <p>Indicates that the fleet uses a single instance type to launch all On-Demand Instances in the
   *          fleet.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   * @public
   */
  SingleInstanceType?: boolean | undefined;

  /**
   * <p>Indicates that the fleet launches all On-Demand Instances into a single Availability Zone.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   * @public
   */
  SingleAvailabilityZone?: boolean | undefined;

  /**
   * <p>The minimum target capacity for On-Demand Instances in the fleet. If this minimum capacity isn't
   *          reached, no instances are launched.</p>
   *          <p>Constraints: Maximum value of <code>1000</code>. Supported only for fleets of type
   *             <code>instant</code>.</p>
   *          <p>At least one of the following must be specified: <code>SingleAvailabilityZone</code> |
   *          <code>SingleInstanceType</code>
   *          </p>
   * @public
   */
  MinTargetCapacity?: number | undefined;

  /**
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay.</p>
   *          <note>
   *             <p>If your fleet includes T instances that are configured as <code>unlimited</code>, and
   *             if their average CPU usage exceeds the baseline utilization, you will incur a charge for
   *             surplus credits. The <code>maxTotalPrice</code> does not account for surplus credits,
   *             and, if you use surplus credits, your final cost might be higher than what you specified
   *             for <code>maxTotalPrice</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits">Surplus credits can incur charges</a> in the
   *                <i>Amazon EC2 User Guide</i>.</p>
   *          </note>
   * @public
   */
  MaxTotalPrice?: string | undefined;
}

/**
 * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
 *          elevated risk of being interrupted.</p>
 * @public
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
   * @public
   */
  ReplacementStrategy?: FleetReplacementStrategy | undefined;

  /**
   * <p>The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot
   *          Instance after launching a new replacement Spot Instance.</p>
   *          <p>Required when <code>ReplacementStrategy</code> is set to <code>launch-before-terminate</code>.</p>
   *          <p>Not valid when <code>ReplacementStrategy</code> is set to <code>launch</code>.</p>
   *          <p>Valid values: Minimum value of <code>120</code> seconds. Maximum value of <code>7200</code> seconds.</p>
   * @public
   */
  TerminationDelay?: number | undefined;
}

/**
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
 *          interrupted.</p>
 * @public
 */
export interface FleetSpotMaintenanceStrategies {
  /**
   * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
   *          elevated risk of being interrupted.</p>
   * @public
   */
  CapacityRebalance?: FleetSpotCapacityRebalance | undefined;
}

/**
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
 * @public
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
   *             <dt>lowest-price (not recommended)</dt>
   *             <dd>
   *                <important>
   *                   <p>We don't recommend the <code>lowest-price</code> allocation strategy because
   *                      it has the highest risk of interruption for your Spot Instances.</p>
   *                </important>
   *                <p>EC2 Fleet requests instances from the lowest priced Spot Instance pool that has available
   *                   capacity. If the lowest priced pool doesn't have available capacity, the Spot Instances
   *                   come from the next lowest priced pool that has available capacity. If a pool runs
   *                   out of capacity before fulfilling your desired capacity, EC2 Fleet will continue to
   *                   fulfill your request by drawing from the next lowest priced pool. To ensure that
   *                   your desired capacity is met, you might receive Spot Instances from several pools. Because
   *                   this strategy only considers instance price and not capacity availability, it
   *                   might lead to high interruption rates.</p>
   *             </dd>
   *          </dl>
   *          <p>Default: <code>lowest-price</code>
   *          </p>
   * @public
   */
  AllocationStrategy?: SpotAllocationStrategy | undefined;

  /**
   * <p>The strategies for managing your workloads on your Spot Instances that will be
   *          interrupted. Currently only the capacity rebalance strategy is available.</p>
   * @public
   */
  MaintenanceStrategies?: FleetSpotMaintenanceStrategies | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   *          <p>Default: <code>terminate</code>
   *          </p>
   * @public
   */
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior | undefined;

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
   * @public
   */
  InstancePoolsToUseCount?: number | undefined;

  /**
   * <p>Indicates that the fleet uses a single instance type to launch all Spot Instances in the
   *          fleet.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   * @public
   */
  SingleInstanceType?: boolean | undefined;

  /**
   * <p>Indicates that the fleet launches all Spot Instances into a single Availability Zone.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   * @public
   */
  SingleAvailabilityZone?: boolean | undefined;

  /**
   * <p>The minimum target capacity for Spot Instances in the fleet. If this minimum capacity isn't
   *          reached, no instances are launched.</p>
   *          <p>Constraints: Maximum value of <code>1000</code>. Supported only for fleets of type
   *             <code>instant</code>.</p>
   *          <p>At least one of the following must be specified: <code>SingleAvailabilityZone</code> |
   *             <code>SingleInstanceType</code>
   *          </p>
   * @public
   */
  MinTargetCapacity?: number | undefined;

  /**
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay. We do not recommend
   *          using this parameter because it can lead to increased interruptions. If you do not specify
   *          this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   *          <note>
   *             <p>If your fleet includes T instances that are configured as <code>unlimited</code>, and
   *             if their average CPU usage exceeds the baseline utilization, you will incur a charge for
   *             surplus credits. The <code>maxTotalPrice</code> does not account for surplus credits,
   *             and, if you use surplus credits, your final cost might be higher than what you specified
   *             for <code>maxTotalPrice</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits">Surplus credits can incur charges</a> in the
   *                <i>Amazon EC2 User Guide</i>.</p>
   *          </note>
   * @public
   */
  MaxTotalPrice?: string | undefined;
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
 * @public
 */
export interface TargetCapacitySpecification {
  /**
   * <p>The number of units to request, filled the default target capacity type.</p>
   * @public
   */
  TotalTargetCapacity?: number | undefined;

  /**
   * <p>The number of On-Demand units to request. If you specify a target capacity for Spot units, you cannot specify a target capacity for On-Demand units.</p>
   * @public
   */
  OnDemandTargetCapacity?: number | undefined;

  /**
   * <p>The maximum number of Spot units to launch. If you specify a target capacity for On-Demand units, you cannot specify a target capacity for Spot units.</p>
   * @public
   */
  SpotTargetCapacity?: number | undefined;

  /**
   * <p>The default target capacity type.</p>
   * @public
   */
  DefaultTargetCapacityType?: DefaultTargetCapacityType | undefined;

  /**
   * <p>The unit for the target capacity.</p>
   * @public
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | undefined;
}

/**
 * <p>Describes an EC2 Fleet.</p>
 * @public
 */
export interface FleetData {
  /**
   * <p>The progress of the EC2 Fleet.</p>
   *          <p>For fleets of type <code>instant</code>, the status is <code>fulfilled</code> after all
   *          requests are placed, regardless of whether target capacity is met (this is the only
   *          possible status for <code>instant</code> fleets).</p>
   *          <p>For fleets of type <code>request</code> or <code>maintain</code>, the status is
   *             <code>pending_fulfillment</code> after all requests are placed, <code>fulfilled</code>
   *          when the fleet size meets or exceeds target capacity, <code>pending_termination</code>
   *          while instances are terminating when fleet size is decreased, and <code>error</code> if
   *          there's an error.</p>
   * @public
   */
  ActivityStatus?: FleetActivityStatus | undefined;

  /**
   * <p>The creation date and time of the EC2 Fleet.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   * @public
   */
  FleetId?: string | undefined;

  /**
   * <p>The state of the EC2 Fleet.</p>
   * @public
   */
  FleetState?: FleetStateCode | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *             idempotency</a>.</p>
   *          <p>Constraints: Maximum 64 ASCII characters</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Indicates whether running instances should be terminated if the target capacity of the
   *          EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   * @public
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | undefined;

  /**
   * <p>The number of units fulfilled by this request compared to the set target
   *          capacity.</p>
   * @public
   */
  FulfilledCapacity?: number | undefined;

  /**
   * <p>The number of units fulfilled by this request compared to the set target On-Demand
   *          capacity.</p>
   * @public
   */
  FulfilledOnDemandCapacity?: number | undefined;

  /**
   * <p>The launch template and overrides.</p>
   * @public
   */
  LaunchTemplateConfigs?: FleetLaunchTemplateConfig[] | undefined;

  /**
   * <p>The number of units to request. You can choose to set the target capacity in terms of
   *          instances or a performance characteristic that is important to your application workload,
   *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
   *          specify a target capacity of 0 and add capacity later.</p>
   * @public
   */
  TargetCapacitySpecification?: TargetCapacitySpecification | undefined;

  /**
   * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires. </p>
   * @public
   */
  TerminateInstancesWithExpiration?: boolean | undefined;

  /**
   * <p>The type of request. Indicates whether the EC2 Fleet only <code>requests</code> the target
   *          capacity, or also attempts to <code>maintain</code> it. If you request a certain target
   *          capacity, EC2 Fleet only places the required requests; it does not attempt to replenish
   *          instances if capacity is diminished, and it does not submit requests in alternative
   *          capacity pools if capacity is unavailable. To maintain a certain target capacity, EC2 Fleet
   *          places the required requests to meet this target capacity. It also automatically
   *          replenishes any interrupted Spot Instances. Default: <code>maintain</code>.</p>
   * @public
   */
  Type?: FleetType | undefined;

  /**
   * <p>The start date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          The default is to start fulfilling the request immediately. </p>
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * <p>The end date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          At this point, no new instance requests are placed or able to fulfill the request. The
   *          default end date is 7 days from the current date. </p>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for
   *          fleets of type <code>maintain</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#ec2-fleet-health-checks">EC2 Fleet
   *             health checks</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ReplaceUnhealthyInstances?: boolean | undefined;

  /**
   * <p>The configuration of Spot Instances in an EC2 Fleet.</p>
   * @public
   */
  SpotOptions?: SpotOptions | undefined;

  /**
   * <p>The allocation strategy of On-Demand Instances in an EC2 Fleet.</p>
   * @public
   */
  OnDemandOptions?: OnDemandOptions | undefined;

  /**
   * <p>The tags for an EC2 Fleet resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Information about the instances that could not be launched by the fleet. Valid only when
   *          <b>Type</b> is set to <code>instant</code>.</p>
   * @public
   */
  Errors?: DescribeFleetError[] | undefined;

  /**
   * <p>Information about the instances that were launched by the fleet. Valid only when
   *          <b>Type</b> is set to <code>instant</code>.</p>
   * @public
   */
  Instances?: DescribeFleetsInstances[] | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Context?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetsResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the EC2 Fleets.</p>
   * @public
   */
  Fleets?: FleetData[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowLogsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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
   * @public
   */
  Filter?: Filter[] | undefined;

  /**
   * <p>One or more flow log IDs.</p>
   *          <p>Constraint: Maximum of 1000 flow log IDs.</p>
   * @public
   */
  FlowLogIds?: string[] | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to request the next page of items. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes the destination options for a flow log.</p>
 * @public
 */
export interface DestinationOptionsResponse {
  /**
   * <p>The format for the flow log.</p>
   * @public
   */
  FileFormat?: DestinationFileFormat | undefined;

  /**
   * <p>Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3.</p>
   * @public
   */
  HiveCompatiblePartitions?: boolean | undefined;

  /**
   * <p>Indicates whether to partition the flow log per hour.</p>
   * @public
   */
  PerHourPartition?: boolean | undefined;
}

/**
 * <p>Describes a flow log.</p>
 * @public
 */
export interface FlowLog {
  /**
   * <p>The date and time the flow log was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Information about the error that occurred. <code>Rate limited</code> indicates that
   *             CloudWatch Logs throttling has been applied for one or more network interfaces, or that you've
   *             reached the limit on the number of log groups that you can create. <code>Access
   *                 error</code> indicates that the IAM role associated with the flow log does not have
   *             sufficient permissions to publish to CloudWatch Logs. <code>Unknown error</code> indicates an
   *             internal error.</p>
   * @public
   */
  DeliverLogsErrorMessage?: string | undefined;

  /**
   * <p>The ARN of the IAM role allows the service to publish logs to CloudWatch Logs.</p>
   * @public
   */
  DeliverLogsPermissionArn?: string | undefined;

  /**
   * <p>The ARN of the IAM role that allows the service to publish flow logs across accounts.</p>
   * @public
   */
  DeliverCrossAccountRole?: string | undefined;

  /**
   * <p>The status of the logs delivery (<code>SUCCESS</code> | <code>FAILED</code>).</p>
   * @public
   */
  DeliverLogsStatus?: string | undefined;

  /**
   * <p>The ID of the flow log.</p>
   * @public
   */
  FlowLogId?: string | undefined;

  /**
   * <p>The status of the flow log (<code>ACTIVE</code>).</p>
   * @public
   */
  FlowLogStatus?: string | undefined;

  /**
   * <p>The name of the flow log group.</p>
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * <p>The ID of the resource being monitored.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of traffic captured for the flow log.</p>
   * @public
   */
  TrafficType?: TrafficType | undefined;

  /**
   * <p>The type of destination for the flow log data.</p>
   * @public
   */
  LogDestinationType?: LogDestinationType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination for the flow log data.</p>
   * @public
   */
  LogDestination?: string | undefined;

  /**
   * <p>The format of the flow log record.</p>
   * @public
   */
  LogFormat?: string | undefined;

  /**
   * <p>The tags for the flow log.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record.</p>
   *          <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html">Nitro-based
   *                 instance</a>, the aggregation interval is always 60 seconds (1 minute) or less,
   *             regardless of the specified value.</p>
   *          <p>Valid Values: <code>60</code> | <code>600</code>
   *          </p>
   * @public
   */
  MaxAggregationInterval?: number | undefined;

  /**
   * <p>The destination options.</p>
   * @public
   */
  DestinationOptions?: DestinationOptionsResponse | undefined;
}

/**
 * @public
 */
export interface DescribeFlowLogsResult {
  /**
   * <p>Information about the flow logs.</p>
   * @public
   */
  FlowLogs?: FlowLog[] | undefined;

  /**
   * <p>The token to request the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFpgaImageAttributeRequest {
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
   * <p>The AFI attribute.</p>
   * @public
   */
  Attribute: FpgaImageAttributeName | undefined;
}

/**
 * <p>Describes a load permission.</p>
 * @public
 */
export interface LoadPermission {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  Group?: PermissionGroup | undefined;
}

/**
 * <p>Describes a product code.</p>
 * @public
 */
export interface ProductCode {
  /**
   * <p>The product code.</p>
   * @public
   */
  ProductCodeId?: string | undefined;

  /**
   * <p>The type of product code.</p>
   * @public
   */
  ProductCodeType?: ProductCodeValues | undefined;
}

/**
 * <p>Describes an Amazon FPGA image (AFI) attribute.</p>
 * @public
 */
export interface FpgaImageAttribute {
  /**
   * <p>The ID of the AFI.</p>
   * @public
   */
  FpgaImageId?: string | undefined;

  /**
   * <p>The name of the AFI.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the AFI.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The load permissions.</p>
   * @public
   */
  LoadPermissions?: LoadPermission[] | undefined;

  /**
   * <p>The product codes.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;
}

/**
 * @public
 */
export interface DescribeFpgaImageAttributeResult {
  /**
   * <p>Information about the attribute.</p>
   * @public
   */
  FpgaImageAttribute?: FpgaImageAttribute | undefined;
}

/**
 * @public
 */
export interface DescribeFpgaImagesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The AFI IDs.</p>
   * @public
   */
  FpgaImageIds?: string[] | undefined;

  /**
   * <p>Filters the AFI by owner. Specify an Amazon Web Services account ID, <code>self</code>
   * 			(owner is the sender of the request), or an Amazon Web Services owner alias (valid values are
   * 			<code>amazon</code> | <code>aws-marketplace</code>).</p>
   * @public
   */
  Owners?: string[] | undefined;

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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.</p>
 * @public
 */
export interface PciId {
  /**
   * <p>The ID of the device.</p>
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * <p>The ID of the vendor.</p>
   * @public
   */
  VendorId?: string | undefined;

  /**
   * <p>The ID of the subsystem.</p>
   * @public
   */
  SubsystemId?: string | undefined;

  /**
   * <p>The ID of the vendor for the subsystem.</p>
   * @public
   */
  SubsystemVendorId?: string | undefined;
}

/**
 * <p>Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).</p>
 * @public
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
   * @public
   */
  Code?: FpgaImageStateCode | undefined;

  /**
   * <p>If the state is <code>failed</code>, this is the error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes an Amazon FPGA image (AFI).</p>
 * @public
 */
export interface FpgaImage {
  /**
   * <p>The FPGA image identifier (AFI ID).</p>
   * @public
   */
  FpgaImageId?: string | undefined;

  /**
   * <p>The global FPGA image identifier (AGFI ID).</p>
   * @public
   */
  FpgaImageGlobalId?: string | undefined;

  /**
   * <p>The name of the AFI.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the AFI.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The version of the Amazon Web Services Shell that was used to create the bitstream.</p>
   * @public
   */
  ShellVersion?: string | undefined;

  /**
   * <p>Information about the PCI bus.</p>
   * @public
   */
  PciId?: PciId | undefined;

  /**
   * <p>Information about the state of the AFI.</p>
   * @public
   */
  State?: FpgaImageState | undefined;

  /**
   * <p>The date and time the AFI was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The time of the most recent update to the AFI.</p>
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the AFI.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The alias of the AFI owner. Possible values include <code>self</code>, <code>amazon</code>, and <code>aws-marketplace</code>.</p>
   * @public
   */
  OwnerAlias?: string | undefined;

  /**
   * <p>The product codes for the AFI.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * <p>Any tags assigned to the AFI.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether the AFI is public.</p>
   * @public
   */
  Public?: boolean | undefined;

  /**
   * <p>Indicates whether data retention support is enabled for the AFI.</p>
   * @public
   */
  DataRetentionSupport?: boolean | undefined;

  /**
   * <p>The instance types supported by the AFI.</p>
   * @public
   */
  InstanceTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeFpgaImagesResult {
  /**
   * <p>Information about the FPGA images.</p>
   * @public
   */
  FpgaImages?: FpgaImage[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  Filter?: Filter[] | undefined;

  /**
   * <p>This is the maximum duration of the reservation to purchase, specified in seconds.
   *             Reservations are available in one-year and three-year terms. The number of seconds
   *             specified must be the number of seconds in a year (365x24x60x60) times one of the
   *             supported durations (1 or 3). For example, specify 94608000 for three years.</p>
   * @public
   */
  MaxDuration?: number | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>This is the minimum duration of the reservation you'd like to purchase, specified in
   *             seconds. Reservations are available in one-year and three-year terms. The number of
   *             seconds specified must be the number of seconds in a year (365x24x60x60) times one of
   *             the supported durations (1 or 3). For example, specify 31536000 for one year.</p>
   * @public
   */
  MinDuration?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the reservation offering.</p>
   * @public
   */
  OfferingId?: string | undefined;
}

/**
 * <p>Details about the Dedicated Host Reservation offering.</p>
 * @public
 */
export interface HostOffering {
  /**
   * <p>The currency of the offering.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The duration of the offering (in seconds).</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The hourly price of the offering.</p>
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * <p>The instance family of the offering.</p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>The ID of the offering.</p>
   * @public
   */
  OfferingId?: string | undefined;

  /**
   * <p>The available payment option.</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * <p>The upfront price of the offering. Does not apply to No Upfront offerings.</p>
   * @public
   */
  UpfrontPrice?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHostReservationOfferingsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the offerings.</p>
   * @public
   */
  OfferingSet?: HostOffering[] | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  Filter?: Filter[] | undefined;

  /**
   * <p>The host reservation IDs.</p>
   * @public
   */
  HostReservationIdSet?: string[] | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Details about the Dedicated Host Reservation and associated Dedicated Hosts.</p>
 * @public
 */
export interface HostReservation {
  /**
   * <p>The number of Dedicated Hosts the reservation is associated with.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The currency in which the <code>upfrontPrice</code> and <code>hourlyPrice</code>
   *             amounts are specified. At this time, the only supported currency is
   *             <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The length of the reservation's term, specified in seconds. Can be <code>31536000 (1
   *                 year)</code> | <code>94608000 (3 years)</code>.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The date and time that the reservation ends.</p>
   * @public
   */
  End?: Date | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   * @public
   */
  HostIdSet?: string[] | undefined;

  /**
   * <p>The ID of the reservation that specifies the associated Dedicated Hosts.</p>
   * @public
   */
  HostReservationId?: string | undefined;

  /**
   * <p>The hourly price of the reservation.</p>
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * <p>The instance family of the Dedicated Host Reservation. The instance family on the
   *             Dedicated Host must be the same in order for it to benefit from the reservation.</p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>The ID of the reservation. This remains the same regardless of which Dedicated Hosts
   *             are associated with it.</p>
   * @public
   */
  OfferingId?: string | undefined;

  /**
   * <p>The payment option selected for this reservation.</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * <p>The date and time that the reservation started.</p>
   * @public
   */
  Start?: Date | undefined;

  /**
   * <p>The state of the reservation.</p>
   * @public
   */
  State?: ReservationState | undefined;

  /**
   * <p>The upfront price of the reservation.</p>
   * @public
   */
  UpfrontPrice?: string | undefined;

  /**
   * <p>Any tags assigned to the Dedicated Host Reservation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeHostReservationsResult {
  /**
   * <p>Details about the reservation's configuration.</p>
   * @public
   */
  HostReservationSet?: HostReservation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHostsRequest {
  /**
   * <p>The IDs of the Dedicated Hosts. The IDs are used for targeted instance
   *             launches.</p>
   * @public
   */
  HostIds?: string[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   *          <p>You cannot specify this parameter and the host IDs parameter in the same
   *             request.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
   * @public
   */
  Filter?: Filter[] | undefined;
}

/**
 * <p>Information about the number of instances that can be launched onto the Dedicated
 *             Host.</p>
 * @public
 */
export interface InstanceCapacity {
  /**
   * <p>The number of instances that can be launched onto the Dedicated Host based on the
   *             host's available capacity.</p>
   * @public
   */
  AvailableCapacity?: number | undefined;

  /**
   * <p>The instance type supported by the Dedicated Host.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The total number of instances that can be launched onto the Dedicated Host if there
   *             are no instances running on it.</p>
   * @public
   */
  TotalCapacity?: number | undefined;
}

/**
 * <p>The capacity information for instances that can be launched onto the Dedicated Host.
 *         </p>
 * @public
 */
export interface AvailableCapacity {
  /**
   * <p>The number of instances that can be launched onto the Dedicated Host depending on the
   *             host's available capacity. For Dedicated Hosts that support multiple instance types,
   *             this parameter represents the number of instances for each instance size that is
   *             supported on the host.</p>
   * @public
   */
  AvailableInstanceCapacity?: InstanceCapacity[] | undefined;

  /**
   * <p>The number of vCPUs available for launching instances onto the Dedicated Host.</p>
   * @public
   */
  AvailableVCpus?: number | undefined;
}

/**
 * <p>Describes the properties of a Dedicated Host.</p>
 * @public
 */
export interface HostProperties {
  /**
   * <p>The number of cores on the Dedicated Host.</p>
   * @public
   */
  Cores?: number | undefined;

  /**
   * <p>The instance type supported by the Dedicated Host. For example, <code>m5.large</code>.
   *             If the host supports multiple instance types, no <b>instanceType</b> is returned.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The instance family supported by the Dedicated Host. For example,
   *             <code>m5</code>.</p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>The number of sockets on the Dedicated Host.</p>
   * @public
   */
  Sockets?: number | undefined;

  /**
   * <p>The total number of vCPUs on the Dedicated Host.</p>
   * @public
   */
  TotalVCpus?: number | undefined;
}

/**
 * <p>Describes an instance running on a Dedicated Host.</p>
 * @public
 */
export interface HostInstance {
  /**
   * <p>The ID of instance that is running on the Dedicated Host.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The instance type (for example, <code>m3.medium</code>) of the running
   *             instance.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the instance.</p>
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * <p>Describes the properties of the Dedicated Host.</p>
 * @public
 */
export interface Host {
  /**
   * <p>Whether auto-placement is on or off.</p>
   * @public
   */
  AutoPlacement?: AutoPlacement | undefined;

  /**
   * <p>The Availability Zone of the Dedicated Host.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Information about the instances running on the Dedicated Host.</p>
   * @public
   */
  AvailableCapacity?: AvailableCapacity | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The ID of the Dedicated Host.</p>
   * @public
   */
  HostId?: string | undefined;

  /**
   * <p>The hardware specifications of the Dedicated Host.</p>
   * @public
   */
  HostProperties?: HostProperties | undefined;

  /**
   * <p>The reservation ID of the Dedicated Host. This returns a <code>null</code> response if
   *             the Dedicated Host doesn't have an associated reservation.</p>
   * @public
   */
  HostReservationId?: string | undefined;

  /**
   * <p>The IDs and instance type that are currently running on the Dedicated Host.</p>
   * @public
   */
  Instances?: HostInstance[] | undefined;

  /**
   * <p>The Dedicated Host's state.</p>
   * @public
   */
  State?: AllocationState | undefined;

  /**
   * <p>The time that the Dedicated Host was allocated.</p>
   * @public
   */
  AllocationTime?: Date | undefined;

  /**
   * <p>The time that the Dedicated Host was released.</p>
   * @public
   */
  ReleaseTime?: Date | undefined;

  /**
   * <p>Any tags assigned to the Dedicated Host.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether host recovery is enabled or disabled for the Dedicated Host.</p>
   * @public
   */
  HostRecovery?: HostRecovery | undefined;

  /**
   * <p>Indicates whether the Dedicated Host supports multiple instance types of the same
   *             instance family. If the value is <code>on</code>, the Dedicated Host supports multiple
   *             instance types in the instance family. If the value is <code>off</code>, the Dedicated
   *             Host supports a single instance type only.</p>
   * @public
   */
  AllowsMultipleInstanceTypes?: AllowsMultipleInstanceTypes | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Dedicated Host.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the Availability Zone in which the Dedicated Host is allocated.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>Indicates whether the Dedicated Host is in a host resource group. If <b>memberOfServiceLinkedResourceGroup</b> is <code>true</code>, the
   *             host is in a host resource group; otherwise, it is not.</p>
   * @public
   */
  MemberOfServiceLinkedResourceGroup?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which the
   *             Dedicated Host is allocated.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>Indicates whether host maintenance is enabled or disabled for the Dedicated
   *             Host.</p>
   * @public
   */
  HostMaintenance?: HostMaintenance | undefined;

  /**
   * <p>The ID of the Outpost hardware asset on which the Dedicated Host is allocated.</p>
   * @public
   */
  AssetId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHostsResult {
  /**
   * <p>Information about the Dedicated Hosts.</p>
   * @public
   */
  Hosts?: Host[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIamInstanceProfileAssociationsRequest {
  /**
   * <p>The IAM instance profile associations.</p>
   * @public
   */
  AssociationIds?: string[] | undefined;

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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of
   *             items, make another request with the token returned in the output. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request.
   *             Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIamInstanceProfileAssociationsResult {
  /**
   * <p>Information about the IAM instance profile associations.</p>
   * @public
   */
  IamInstanceProfileAssociations?: IamInstanceProfileAssociation[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items.
   *             This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityIdFormatRequest {
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
   * @public
   */
  Resource?: string | undefined;

  /**
   * <p>The ARN of the principal, which can be an IAM role, IAM user, or the root user.</p>
   * @public
   */
  PrincipalArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityIdFormatResult {
  /**
   * <p>Information about the ID format for the resources.</p>
   * @public
   */
  Statuses?: IdFormat[] | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  Resource?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIdFormatResult {
  /**
   * <p>Information about the ID format for the resource.</p>
   * @public
   */
  Statuses?: IdFormat[] | undefined;
}

/**
 * <p>Contains the parameters for DescribeImageAttribute.</p>
 * @public
 */
export interface DescribeImageAttributeRequest {
  /**
   * <p>The AMI attribute.</p>
   *          <p>
   *             <b>Note</b>: The <code>blockDeviceMapping</code> attribute is
   *       deprecated. Using this attribute returns the <code>Client.AuthFailure</code> error. To get
   *       information about the block device mappings for an AMI, describe the image instead.</p>
   * @public
   */
  Attribute: ImageAttributeName | undefined;

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
 * <p>Describes a launch permission.</p>
 * @public
 */
export interface LaunchPermission {
  /**
   * <p>The Amazon Resource Name (ARN) of an organization.</p>
   * @public
   */
  OrganizationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an organizational unit (OU).</p>
   * @public
   */
  OrganizationalUnitArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   *          <p>Constraints: Up to 10 000 account IDs can be specified in a single request.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  Group?: PermissionGroup | undefined;
}

/**
 * <p>Describes an image attribute.</p>
 * @public
 */
export interface ImageAttribute {
  /**
   * <p>A description for the AMI.</p>
   * @public
   */
  Description?: AttributeValue | undefined;

  /**
   * <p>The kernel ID.</p>
   * @public
   */
  KernelId?: AttributeValue | undefined;

  /**
   * <p>The RAM disk ID.</p>
   * @public
   */
  RamdiskId?: AttributeValue | undefined;

  /**
   * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is
   *       enabled.</p>
   * @public
   */
  SriovNetSupport?: AttributeValue | undefined;

  /**
   * <p>The boot mode.</p>
   * @public
   */
  BootMode?: AttributeValue | undefined;

  /**
   * <p>If the image is configured for NitroTPM support, the value is <code>v2.0</code>.</p>
   * @public
   */
  TpmSupport?: AttributeValue | undefined;

  /**
   * <p>Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data,
   *       use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceUefiData">GetInstanceUefiData</a> command. You can inspect and modify the UEFI data by using the
   *         <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool</a> on
   *       GitHub. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot for Amazon EC2
   *         instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  UefiData?: AttributeValue | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *         format</a>, when the AMI was last used to launch an EC2 instance. When the AMI is used
   *       to launch an instance, there is a 24-hour delay before that usage is reported.</p>
   *          <note>
   *             <p>
   *                <code>lastLaunchedTime</code> data is available starting April 2017.</p>
   *          </note>
   * @public
   */
  LastLaunchedTime?: AttributeValue | undefined;

  /**
   * <p>If <code>v2.0</code>, it indicates that IMDSv2 is specified in the AMI. Instances launched
   *       from this AMI will have <code>HttpTokens</code> automatically set to <code>required</code> so
   *       that, by default, the instance requires that IMDSv2 is used when requesting instance metadata.
   *       In addition, <code>HttpPutResponseHopLimit</code> is set to <code>2</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ImdsSupport?: AttributeValue | undefined;

  /**
   * <p>Indicates whether deregistration protection is enabled for the AMI.</p>
   * @public
   */
  DeregistrationProtection?: AttributeValue | undefined;

  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The launch permissions.</p>
   * @public
   */
  LaunchPermissions?: LaunchPermission[] | undefined;

  /**
   * <p>The product codes.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * <p>The block device mapping entries.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;
}

/**
 * <p>The options that affect the scope of the response.</p>
 * @public
 */
export interface ResourceTypeOption {
  /**
   * <p>The name of the option.</p>
   *          <ul>
   *             <li>
   *                <p>For <code>ec2:Instance</code>:</p>
   *                <p>Specify <code>state-name</code> - The current state of the EC2 instance.</p>
   *             </li>
   *             <li>
   *                <p>For <code>ec2:LaunchTemplate</code>:</p>
   *                <p>Specify <code>version-depth</code> - The number of launch template versions to check,
   *           starting from the most recent version.</p>
   *             </li>
   *          </ul>
   * @public
   */
  OptionName?: ImageReferenceOptionName | undefined;

  /**
   * <p>A value for the specified option.</p>
   *          <ul>
   *             <li>
   *                <p>For <code>state-name</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>Valid values: <code>pending</code> | <code>running</code> | <code>shutting-down</code> |
   *               <code>terminated</code> | <code>stopping</code> | <code>stopped</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Default: All states</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For <code>version-depth</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>Valid values: Integers between <code>1</code> and <code>10000</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Default: <code>10</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  OptionValues?: string[] | undefined;
}

/**
 * <p>A resource type to check for image references. Associated options can also be specified if the
 *       resource type is an EC2 instance or launch template.</p>
 * @public
 */
export interface ResourceTypeRequest {
  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: ImageReferenceResourceType | undefined;

  /**
   * <p>The options that affect the scope of the response. Valid only when
   *       <code>ResourceType</code> is <code>ec2:Instance</code> or
   *       <code>ec2:LaunchTemplate</code>.</p>
   * @public
   */
  ResourceTypeOptions?: ResourceTypeOption[] | undefined;
}

/**
 * @public
 */
export interface DescribeImageReferencesRequest {
  /**
   * <p>The IDs of the images to check for resource references.</p>
   * @public
   */
  ImageIds: string[] | undefined;

  /**
   * <p>Specifies whether to check all supported Amazon Web Services resource types for image references. When
   *       specified, default values are applied for <code>ResourceTypeOptions</code>. For the default
   *       values, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-ami-references.html#how-ami-references-works">How AMI
   *         reference checks work</a> in the <i>Amazon EC2 User Guide</i>. If you also
   *       specify <code>ResourceTypes</code> with <code>ResourceTypeOptions</code>, your specified
   *       values override the default values.</p>
   *          <p>Supported resource types: <code>ec2:Instance</code> | <code>ec2:LaunchTemplate</code> |
   *       <code>ssm:Parameter</code> | <code>imagebuilder:ImageRecipe</code> |
   *       <code>imagebuilder:ContainerRecipe</code>
   *          </p>
   *          <p>Either <code>IncludeAllResourceTypes</code> or <code>ResourceTypes</code> must be
   *       specified.</p>
   * @public
   */
  IncludeAllResourceTypes?: boolean | undefined;

  /**
   * <p>The Amazon Web Services resource types to check for image references.</p>
   *          <p>Either <code>IncludeAllResourceTypes</code> or <code>ResourceTypes</code> must be
   *       specified.</p>
   * @public
   */
  ResourceTypes?: ResourceTypeRequest[] | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>
   *       The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.
   *     </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A resource that is referencing an image.</p>
 * @public
 */
export interface ImageReference {
  /**
   * <p>The ID of the referenced image.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The type of resource referencing the image.</p>
   * @public
   */
  ResourceType?: ImageReferenceResourceType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource referencing the image.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageReferencesResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The resources that are referencing the specified images.</p>
   * @public
   */
  ImageReferences?: ImageReference[] | undefined;
}

/**
 * @public
 */
export interface DescribeImagesRequest {
  /**
   * <p>Scopes the images by users with explicit launch permissions. Specify an Amazon Web Services account ID, <code>self</code> (the sender of the request), or <code>all</code>
   *       (public AMIs).</p>
   *          <ul>
   *             <li>
   *                <p>If you specify an Amazon Web Services account ID that is not your own, only AMIs shared
   *           with that specific Amazon Web Services account ID are returned. However, AMIs that are
   *           shared with the account’s organization or organizational unit (OU) are not
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
   * @public
   */
  ExecutableUsers?: string[] | undefined;

  /**
   * <p>The image IDs.</p>
   *          <p>Default: Describes all images available to you.</p>
   * @public
   */
  ImageIds?: string[] | undefined;

  /**
   * <p>Scopes the results to images with the specified owners. You can specify a combination of
   *         Amazon Web Services account IDs, <code>self</code>, <code>amazon</code>,
   *         <code>aws-backup-vault</code>, and <code>aws-marketplace</code>. If you omit this parameter,
   *       the results include all images for which you have launch permissions, regardless of
   *       ownership.</p>
   * @public
   */
  Owners?: string[] | undefined;

  /**
   * <p>Specifies whether to include deprecated AMIs.</p>
   *          <p>Default: No deprecated AMIs are included in the response.</p>
   *          <note>
   *             <p>If you are the AMI owner, all deprecated AMIs appear in the response regardless of what
   *         you specify for this parameter.</p>
   *          </note>
   * @public
   */
  IncludeDeprecated?: boolean | undefined;

  /**
   * <p>Specifies whether to include disabled AMIs.</p>
   *          <p>Default: No disabled AMIs are included in the response.</p>
   * @public
   */
  IncludeDisabled?: boolean | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>architecture</code> - The image architecture (<code>i386</code> |
   *             <code>x86_64</code> | <code>arm64</code> | <code>x86_64_mac</code> |
   *             <code>arm64_mac</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.delete-on-termination</code> - A Boolean value that indicates
   *           whether the Amazon EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.device-name</code> - The device name specified in the block
   *           device mapping (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.snapshot-id</code> - The ID of the snapshot used for the Amazon EBS
   *           volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.volume-size</code> - The volume size of the Amazon EBS volume, in
   *           GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.volume-type</code> - The volume type of the Amazon EBS volume
   *             (<code>io1</code> | <code>io2</code> | <code>gp2</code> | <code>gp3</code> | <code>sc1
   *           </code>| <code>st1</code> | <code>standard</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.encrypted</code> - A Boolean that indicates whether the Amazon EBS
   *           volume is encrypted.</p>
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
   *                   <code>ena-support</code> - A Boolean that indicates whether enhanced networking with
   *           ENA is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>free-tier-eligible</code> - A Boolean that indicates whether this image can be
   *           used under the Amazon Web Services Free Tier  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hypervisor</code> - The hypervisor type (<code>ovm</code> |
   *           <code>xen</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-allowed</code> - A Boolean that indicates whether the image meets the
   *           criteria specified for Allowed AMIs.</p>
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
   *                   <code>owner-alias</code> - The owner alias (<code>amazon</code> |
   *             <code>aws-backup-vault</code> | <code>aws-marketplace</code>). The valid aliases are
   *           defined in an Amazon-maintained list. This is not the Amazon Web Services account alias
   *           that can be set using the IAM console. We recommend that you use the <b>Owner</b> request parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner. We recommend
   *           that you use the <b>Owner</b> request parameter instead of this
   *           filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform. The only supported value is
   *           <code>windows</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code.type</code> - The type of the product code
   *           (<code>marketplace</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-name</code> - The device name of the root device volume (for example,
   *             <code>/dev/sda1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-type</code> - The type of the root device volume (<code>ebs</code> |
   *             <code>instance-store</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-image-id</code> - The ID of the source AMI from which the AMI was
   *           created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-image-region</code> - The Region of the source AMI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-instance-id</code> - The ID of the instance that the AMI was created from
   *           if the AMI was created using CreateImage. This filter is applicable only if the AMI was
   *           created using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html">CreateImage</a>.</p>
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
   *                   <code>sriov-net-support</code> - A value of <code>simple</code> indicates that
   *           enhanced networking with the Intel 82599 VF interface is enabled.</p>
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
   *             <li>
   *                <p>
   *                   <code>virtualization-type</code> - The virtualization type (<code>paravirtual</code> |
   *             <code>hvm</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes an image.</p>
 * @public
 */
export interface Image {
  /**
   * <p>The platform details associated with the billing code of the AMI. For more information,
   *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html">Understand
   *         AMI billing information</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  PlatformDetails?: string | undefined;

  /**
   * <p>The operation of the Amazon EC2 instance and the billing code that is associated with the AMI.
   *         <code>usageOperation</code> corresponds to the <a href="https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#Lineitem-details-O-Operation">lineitem/Operation</a> column on your Amazon Web Services Cost and Usage Report and in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html">Amazon Web Services Price
   *         List API</a>. You can view these fields on the <b>Instances</b> or <b>AMIs</b> pages in the Amazon EC2 console,
   *       or in the responses that are returned by the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html">DescribeImages</a> command in
   *       the Amazon EC2 API, or the <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html">describe-images</a> command in the
   *       CLI.</p>
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * <p>Any block device mapping entries.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * <p>The description of the AMI that was provided during image creation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies whether enhanced networking with ENA is enabled.</p>
   * @public
   */
  EnaSupport?: boolean | undefined;

  /**
   * <p>The hypervisor type of the image. Only <code>xen</code> is supported. <code>ovm</code> is
   *       not supported.</p>
   * @public
   */
  Hypervisor?: HypervisorType | undefined;

  /**
   * <p>The owner alias (<code>amazon</code> | <code>aws-backup-vault</code> |
   *         <code>aws-marketplace</code>).</p>
   * @public
   */
  ImageOwnerAlias?: string | undefined;

  /**
   * <p>The name of the AMI that was provided during image creation.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   * @public
   */
  RootDeviceName?: string | undefined;

  /**
   * <p>The type of root device used by the AMI. The AMI can use an Amazon EBS volume or an instance
   *       store volume.</p>
   * @public
   */
  RootDeviceType?: DeviceType | undefined;

  /**
   * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface is
   *       enabled.</p>
   * @public
   */
  SriovNetSupport?: string | undefined;

  /**
   * <p>The reason for the state change.</p>
   * @public
   */
  StateReason?: StateReason | undefined;

  /**
   * <p>Any tags assigned to the image.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The type of virtualization of the AMI.</p>
   * @public
   */
  VirtualizationType?: VirtualizationType | undefined;

  /**
   * <p>The boot mode of the image. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Instance launch behavior with Amazon EC2
   *         boot modes</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  BootMode?: BootModeValues | undefined;

  /**
   * <p>If the image is configured for NitroTPM support, the value is <code>v2.0</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html">NitroTPM</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  TpmSupport?: TpmSupportValues | undefined;

  /**
   * <p>The date and time to deprecate the AMI, in UTC, in the following format:
   *         <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.
   *       If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute.</p>
   * @public
   */
  DeprecationTime?: string | undefined;

  /**
   * <p>If <code>v2.0</code>, it indicates that IMDSv2 is specified in the AMI. Instances launched
   *       from this AMI will have <code>HttpTokens</code> automatically set to <code>required</code> so
   *       that, by default, the instance requires that IMDSv2 is used when requesting instance metadata.
   *       In addition, <code>HttpPutResponseHopLimit</code> is set to <code>2</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ImdsSupport?: ImdsSupportValues | undefined;

  /**
   * <p>The ID of the instance that the AMI was created from if the AMI was created using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html">CreateImage</a>. This field only appears if the AMI was created using
   *       CreateImage.</p>
   * @public
   */
  SourceInstanceId?: string | undefined;

  /**
   * <p>Indicates whether deregistration protection is enabled for the AMI.</p>
   * @public
   */
  DeregistrationProtection?: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *         format</a>, when the AMI was last used to launch an EC2 instance. When the AMI is used
   *       to launch an instance, there is a 24-hour delay before that usage is reported.</p>
   *          <note>
   *             <p>
   *                <code>lastLaunchedTime</code> data is available starting April 2017.</p>
   *          </note>
   * @public
   */
  LastLaunchedTime?: string | undefined;

  /**
   * <p>If <code>true</code>, the AMI satisfies the criteria for Allowed AMIs and can be
   *       discovered and used in the account. If <code>false</code> and Allowed AMIs is set to
   *       <code>enabled</code>, the AMI can't be discovered or used in the account. If
   *       <code>false</code> and Allowed AMIs is set to <code>audit-mode</code>, the AMI can be
   *       discovered and used in the account.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html">Control the discovery and use of AMIs in
   *       Amazon EC2 with Allowed AMIs</a> in
   *       <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ImageAllowed?: boolean | undefined;

  /**
   * <p>The ID of the source AMI from which the AMI was created.</p>
   * @public
   */
  SourceImageId?: string | undefined;

  /**
   * <p>The Region of the source AMI.</p>
   * @public
   */
  SourceImageRegion?: string | undefined;

  /**
   * <p>Indicates whether the image is eligible for Amazon Web Services Free Tier.</p>
   *          <ul>
   *             <li>
   *                <p>If <code>true</code>, the AMI is eligible for Free Tier and can be used to launch
   *           instances under the Free Tier limits.</p>
   *             </li>
   *             <li>
   *                <p>If <code>false</code>, the AMI is not eligible for Free Tier.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FreeTierEligible?: boolean | undefined;

  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The location of the AMI.</p>
   * @public
   */
  ImageLocation?: string | undefined;

  /**
   * <p>The current state of the AMI. If the state is <code>available</code>, the image is
   *       successfully registered and can be used to launch an instance.</p>
   * @public
   */
  State?: ImageState | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the image.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The date and time the image was created.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>Indicates whether the image has public launch permissions. The value is <code>true</code>
   *       if this image has public launch permissions or <code>false</code> if it has only implicit and
   *       explicit launch permissions.</p>
   * @public
   */
  Public?: boolean | undefined;

  /**
   * <p>Any product codes associated with the AMI.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * <p>The architecture of the image.</p>
   * @public
   */
  Architecture?: ArchitectureValues | undefined;

  /**
   * <p>The type of image.</p>
   * @public
   */
  ImageType?: ImageTypeValues | undefined;

  /**
   * <p>The kernel associated with the image, if any. Only applicable for machine images.</p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>The RAM disk associated with the image, if any. Only applicable for machine images.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>This value is set to <code>windows</code> for Windows AMIs; otherwise, it is blank.</p>
   * @public
   */
  Platform?: PlatformValues | undefined;
}

/**
 * @public
 */
export interface DescribeImagesResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the images.</p>
   * @public
   */
  Images?: Image[] | undefined;
}

/**
 * @public
 */
export interface DescribeImageUsageReportEntriesRequest {
  /**
   * <p>The IDs of the images for filtering the report entries. If specified, only report entries
   *       containing these images are returned.</p>
   * @public
   */
  ImageIds?: string[] | undefined;

  /**
   * <p>The IDs of the usage reports.</p>
   * @public
   */
  ReportIds?: string[] | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account-id</code> - A 12-digit Amazon Web Services account ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>creation-time</code> - The time when the report was created, in the ISO 8601
   *           format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example,
   *           <code>2025-11-29T11:04:43.305Z</code>. You can use a wildcard (<code>*</code>), for
   *           example, <code>2025-11-29T*</code>, which matches an entire day.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type (<code>ec2:Instance</code> |
   *           <code>ec2:LaunchTemplate</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A single entry in an image usage report, detailing how an image is being used by a
 *       specific Amazon Web Services account and resource type.</p>
 * @public
 */
export interface ImageUsageReportEntry {
  /**
   * <p>The type of resource (<code>ec2:Instance</code> or
   *       <code>ec2:LaunchTemplate</code>).</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The ID of the report.</p>
   * @public
   */
  ReportId?: string | undefined;

  /**
   * <p>The number of times resources of this type reference this image in the account.</p>
   * @public
   */
  UsageCount?: number | undefined;

  /**
   * <p>The ID of the account that uses the image.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the image.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The date and time the report creation was initiated.</p>
   * @public
   */
  ReportCreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeImageUsageReportEntriesResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The content of the usage reports.</p>
   * @public
   */
  ImageUsageReportEntries?: ImageUsageReportEntry[] | undefined;
}

/**
 * @public
 */
export interface DescribeImageUsageReportsRequest {
  /**
   * <p>The IDs of the images for filtering the reports. If specified, only reports containing
   *       these images are returned.</p>
   * @public
   */
  ImageIds?: string[] | undefined;

  /**
   * <p>The IDs of the image usage reports.</p>
   * @public
   */
  ReportIds?: string[] | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>creation-time</code> - The time when the report was created, in the ISO 8601
   *           format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example,
   *           <code>2025-11-29T11:04:43.305Z</code>. You can use a wildcard (<code>*</code>), for
   *           example, <code>2025-11-29T*</code>, which matches an entire day.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the report (<code>available</code> |
   *           <code>pending</code> | <code>error</code>).</p>
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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The options that affect the scope of the report.</p>
 * @public
 */
export interface ImageUsageResourceTypeOption {
  /**
   * <p>The name of the option.</p>
   * @public
   */
  OptionName?: string | undefined;

  /**
   * <p>The number of launch template versions to check.</p>
   * @public
   */
  OptionValues?: string[] | undefined;
}

/**
 * <p>A resource type to include in the report. Associated options can also be specified if the
 *       resource type is a launch template.</p>
 * @public
 */
export interface ImageUsageResourceType {
  /**
   * <p>The resource type.</p>
   *          <p>Valid values: <code>ec2:Instance</code> | <code>ec2:LaunchTemplate</code>
   *          </p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The options that affect the scope of the report. Valid only when <code>ResourceType</code>
   *       is <code>ec2:LaunchTemplate</code>.</p>
   * @public
   */
  ResourceTypeOptions?: ImageUsageResourceTypeOption[] | undefined;
}

/**
 * <p>The configuration and status of an image usage report.</p>
 * @public
 */
export interface ImageUsageReport {
  /**
   * <p>The ID of the image that was specified when the report was created.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The ID of the report.</p>
   * @public
   */
  ReportId?: string | undefined;

  /**
   * <p>The resource types that were specified when the report was created.</p>
   * @public
   */
  ResourceTypes?: ImageUsageResourceType[] | undefined;

  /**
   * <p>The IDs of the Amazon Web Services accounts that were specified when the report was created.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The current state of the report. Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>available</code> - The report is available to view.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code> - The report is being created and not available to view.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>error</code> - The report could not be created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>Provides additional details when the report is in an <code>error</code> state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The date and time when the report was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time when Amazon EC2 will delete the report (30 days after the report was
   *       created).</p>
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * <p>Any tags assigned to the report.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeImageUsageReportsResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The image usage reports.</p>
   * @public
   */
  ImageUsageReports?: ImageUsageReport[] | undefined;
}

/**
 * @public
 */
export interface DescribeImportImageTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Filter tasks using the <code>task-state</code> filter and one of the following values: <code>active</code>,
   *     <code>completed</code>, <code>deleting</code>, or <code>deleted</code>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The IDs of the import image tasks.</p>
   * @public
   */
  ImportTaskIds?: string[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token that indicates the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> The response information for license configurations.</p>
 * @public
 */
export interface ImportImageLicenseConfigurationResponse {
  /**
   * <p>The ARN of a license configuration.</p>
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * <p>Describes the Amazon S3 bucket for the disk image.</p>
 * @public
 */
export interface UserBucketDetails {
  /**
   * <p>The Amazon S3 bucket from which the disk image was created.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The file name of the disk image.</p>
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * <p>Describes the snapshot created from the imported disk.</p>
 * @public
 */
export interface SnapshotDetail {
  /**
   * <p>A description for the snapshot.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The block device mapping for the snapshot.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The size of the disk in the snapshot, in GiB.</p>
   * @public
   */
  DiskImageSize?: number | undefined;

  /**
   * <p>The format of the disk image from which the snapshot is created.</p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The percentage of progress for the task.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>The snapshot ID of the disk being imported.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>A brief status of the snapshot creation.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A detailed status message for the snapshot creation.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The URL used to access the disk image.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   * @public
   */
  UserBucket?: UserBucketDetails | undefined;
}

/**
 * <p>Describes an import image task.</p>
 * @public
 */
export interface ImportImageTask {
  /**
   * <p>The architecture of the virtual machine.</p>
   *          <p>Valid values: <code>i386</code> | <code>x86_64</code> | <code>arm64</code>
   *          </p>
   * @public
   */
  Architecture?: string | undefined;

  /**
   * <p>A description of the import task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether the image is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The target hypervisor for the import task.</p>
   *          <p>Valid values: <code>xen</code>
   *          </p>
   * @public
   */
  Hypervisor?: string | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) of the imported virtual machine.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The ID of the import image task.</p>
   * @public
   */
  ImportTaskId?: string | undefined;

  /**
   * <p>The identifier for the KMS key that was used to create the encrypted image.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The license type of the virtual machine.</p>
   * @public
   */
  LicenseType?: string | undefined;

  /**
   * <p>The description string for the import image task.</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>The percentage of progress of the import image task.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>Information about the snapshots.</p>
   * @public
   */
  SnapshotDetails?: SnapshotDetail[] | undefined;

  /**
   * <p>A brief status for the import image task.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A descriptive status message for the import image task.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The tags for the import image task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ARNs of the license configurations that are associated with the import image task.</p>
   * @public
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationResponse[] | undefined;

  /**
   * <p>The usage operation value.</p>
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * <p>The boot mode of the virtual machine.</p>
   * @public
   */
  BootMode?: BootModeValues | undefined;
}

/**
 * @public
 */
export interface DescribeImportImageTasksResult {
  /**
   * <p>A list of zero or more import image tasks that are currently active or were completed or canceled in the
   *    previous 7 days.</p>
   * @public
   */
  ImportImageTasks?: ImportImageTask[] | undefined;

  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImportSnapshotTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>A list of import snapshot task IDs.</p>
   * @public
   */
  ImportTaskIds?: string[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call
   *    with the returned <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token that indicates the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Details about the import snapshot task.</p>
 * @public
 */
export interface SnapshotTaskDetail {
  /**
   * <p>The description of the disk image being imported.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The size of the disk in the snapshot, in GiB.</p>
   * @public
   */
  DiskImageSize?: number | undefined;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The format of the disk image from which the snapshot is created.</p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The identifier for the KMS key that was used to create the encrypted snapshot.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The percentage of completion for the import snapshot task.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>The snapshot ID of the disk being imported.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>A brief status for the import snapshot task.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A detailed status message for the import snapshot task.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The URL of the disk image from which the snapshot is created.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   * @public
   */
  UserBucket?: UserBucketDetails | undefined;
}

/**
 * <p>Describes an import snapshot task.</p>
 * @public
 */
export interface ImportSnapshotTask {
  /**
   * <p>A description of the import snapshot task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the import snapshot task.</p>
   * @public
   */
  ImportTaskId?: string | undefined;

  /**
   * <p>Describes an import snapshot task.</p>
   * @public
   */
  SnapshotTaskDetail?: SnapshotTaskDetail | undefined;

  /**
   * <p>The tags for the import snapshot task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeImportSnapshotTasksResult {
  /**
   * <p>A list of zero or more import snapshot tasks that are currently active or were completed or canceled in the
   *    previous 7 days.</p>
   * @public
   */
  ImportSnapshotTasks?: ImportSnapshotTask[] | undefined;

  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceAttributeRequest {
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
   * <p>The instance attribute.</p>
   *          <p>Note that the <code>enaSupport</code> attribute is not supported.</p>
   * @public
   */
  Attribute: InstanceAttributeName | undefined;
}

/**
 * <p>Describes a parameter used to set up an EBS volume in a block device mapping.</p>
 * @public
 */
export interface EbsInstanceBlockDevice {
  /**
   * <p>The time stamp when the attachment initiated.</p>
   * @public
   */
  AttachTime?: Date | undefined;

  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The attachment state.</p>
   * @public
   */
  Status?: AttachmentStatus | undefined;

  /**
   * <p>The ID of the EBS volume.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>The ARN of the Amazon Web Services-managed resource
   *             to which the volume is attached.</p>
   * @public
   */
  AssociatedResource?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the volume.</p>
   *          <p>This parameter is returned only for volumes that are attached to
   *             Amazon Web Services-managed resources.</p>
   * @public
   */
  VolumeOwnerId?: string | undefined;

  /**
   * <p>The service provider that manages the EBS volume.</p>
   * @public
   */
  Operator?: OperatorResponse | undefined;
}

/**
 * <p>Describes a block device mapping.</p>
 * @public
 */
export interface InstanceBlockDeviceMapping {
  /**
   * <p>The device name.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   * @public
   */
  Ebs?: EbsInstanceBlockDevice | undefined;
}

/**
 * <p>Describes a value for a resource attribute that is a Boolean value.</p>
 * @public
 */
export interface AttributeBooleanValue {
  /**
   * <p>The attribute value. The valid values are <code>true</code> or <code>false</code>.</p>
   * @public
   */
  Value?: boolean | undefined;
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro
 *             Enclaves.</p>
 * @public
 */
export interface EnclaveOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for Amazon Web Services Nitro Enclaves; otherwise, it is not enabled for Amazon Web Services Nitro
   *             Enclaves.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Describes an instance attribute.</p>
 * @public
 */
export interface InstanceAttribute {
  /**
   * <p>The block device mapping of the instance.</p>
   * @public
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;

  /**
   * <p>Indicates whether termination protection is enabled. If the value is <code>true</code>,
   *             you can't terminate the instance using the Amazon EC2 console, command line tools, or API.</p>
   * @public
   */
  DisableApiTermination?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether enhanced networking with ENA is enabled.</p>
   * @public
   */
  EnaSupport?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
   * @public
   */
  EnclaveOptions?: EnclaveOptions | undefined;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O.</p>
   * @public
   */
  EbsOptimized?: AttributeBooleanValue | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   * @public
   */
  InstanceInitiatedShutdownBehavior?: AttributeValue | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: AttributeValue | undefined;

  /**
   * <p>The kernel ID.</p>
   * @public
   */
  KernelId?: AttributeValue | undefined;

  /**
   * <p>The product codes.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * <p>The RAM disk ID.</p>
   * @public
   */
  RamdiskId?: AttributeValue | undefined;

  /**
   * <p>The device name of the root device volume (for example,
   *             <code>/dev/sda1</code>).</p>
   * @public
   */
  RootDeviceName?: AttributeValue | undefined;

  /**
   * <p>Indicates whether source/destination checks are enabled.</p>
   * @public
   */
  SourceDestCheck?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface
   *             is enabled.</p>
   * @public
   */
  SriovNetSupport?: AttributeValue | undefined;

  /**
   * <p>The user data.</p>
   * @public
   */
  UserData?: AttributeValue | undefined;

  /**
   * <p>Indicates whether stop protection is enabled for the instance.</p>
   * @public
   */
  DisableApiStop?: AttributeBooleanValue | undefined;

  /**
   * <p>The security groups associated with the instance.</p>
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceConnectEndpointsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-connect-endpoint-id</code> - The ID of the EC2 Instance Connect Endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the EC2 Instance Connect Endpoint (<code>create-in-progress</code> | <code>create-complete</code> | <code>create-failed</code> |
   *                     <code>delete-in-progress</code> | <code>delete-complete</code> | <code>delete-failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet in which the EC2 Instance
   *                     Connect Endpoint was created.</p>
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
   *                   <code>tag-value</code> - The value of a tag assigned to the resource. Use this filter to find all resources
   *                     that have a tag with a specific value, regardless of tag key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC in which the EC2 Instance Connect
   *                     Endpoint was created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>One or more EC2 Instance Connect Endpoint IDs.</p>
   * @public
   */
  InstanceConnectEndpointIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceConnectEndpointsResult {
  /**
   * <p>Information about the EC2 Instance Connect Endpoints.</p>
   * @public
   */
  InstanceConnectEndpoints?: Ec2InstanceConnectEndpoint[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceCreditSpecificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The instance IDs.</p>
   *          <p>Default: Describes all your instances.</p>
   *          <p>Constraints: Maximum 1000 explicitly specified instance IDs.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>You cannot specify this parameter and the instance IDs
   *             parameter in the same call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes the credit option for CPU usage of a burstable performance instance. </p>
 * @public
 */
export interface InstanceCreditSpecification {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The credit option for CPU usage of the instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   * @public
   */
  CpuCredits?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceCreditSpecificationsResult {
  /**
   * <p>Information about the credit option for CPU usage of an instance.</p>
   * @public
   */
  InstanceCreditSpecifications?: InstanceCreditSpecification[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceEventNotificationAttributesRequest {
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
export interface DescribeInstanceEventNotificationAttributesResult {
  /**
   * <p>Information about the registered tag keys.</p>
   * @public
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute | undefined;
}

/**
 * <p>Describe instance event windows by InstanceEventWindow.</p>
 * @public
 */
export interface DescribeInstanceEventWindowsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the event windows.</p>
   * @public
   */
  InstanceEventWindowIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>dedicated-host-id</code> - The event windows associated with the specified
   *                Dedicated Host ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event-window-name</code> - The event windows associated with the specified
   *                names. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The event windows associated with the specified
   *                instance ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag</code> - The event windows associated with the specified tag
   *                and value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag-key</code> - The event windows associated with the specified
   *                tag key, regardless of the value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag-value</code> - The event windows associated with the specified
   *                tag value, regardless of the key.</p>
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
   *                   <code>tag-key</code> - The key of a tag assigned to the event window. Use this
   *                filter to find all event windows that have a tag with a specific key, regardless of
   *                the tag value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-value</code> - The value of a tag assigned to the event window. Use this
   *                filter to find all event windows that have a tag with a specific value, regardless of
   *                the tag key. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value. This value can
   *          be between 20 and 500. You cannot specify this parameter and the event window IDs parameter
   *          in the same call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceEventWindowsResult {
  /**
   * <p>Information about the event windows.</p>
   * @public
   */
  InstanceEventWindows?: InstanceEventWindow[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceImageMetadataRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The name of the Availability Zone (for example,
   *           <code>us-west-2a</code>) or Local Zone (for example, <code>us-west-2-lax-1b</code>) of
   *           the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-allowed</code> - A Boolean that indicates whether the image meets the
   *           criteria specified for Allowed AMIs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-state-name</code> - The state of the instance (<code>pending</code> |
   *           <code>running</code> | <code>shutting-down</code> | <code>terminated</code> |
   *           <code>stopping</code> | <code>stopped</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The type of instance (for example,
   *           <code>t3.micro</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-time</code> - The time when the instance was launched, in the ISO 8601
   *           format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example,
   *           <code>2023-09-29T11:04:43.305Z</code>. You can use a wildcard (<code>*</code>), for
   *           example, <code>2023-09-29T*</code>, which matches an entire day.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-alias</code> - The owner alias (<code>amazon</code> |
   *           <code>aws-marketplace</code> | <code>aws-backup-vault</code>). The valid aliases are
   *           defined in an Amazon-maintained list. This is not the Amazon Web Services account alias that can be set
   *           using the IAM console. We recommend that you use the <code>Owner</code> request parameter
   *           instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner. We recommend that you use
   *           the <code>Owner</code> request parameter instead of this filter.</p>
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
   *             <li>
   *                <p>
   *                   <code>zone-id</code> - The ID of the Availability Zone (for example,
   *           <code>usw2-az2</code>) or Local Zone (for example, <code>usw2-lax1-az1</code>) of the
   *           instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The instance IDs.</p>
   *          <p>If you don't specify an instance ID or filters, the output includes information for all
   *       instances.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>Default: 1000</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about the AMI.</p>
 * @public
 */
export interface ImageMetadata {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The name of the AMI.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the AMI.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The current state of the AMI. If the state is <code>available</code>, the AMI is
   *       successfully registered and can be used to launch an instance.</p>
   * @public
   */
  State?: ImageState | undefined;

  /**
   * <p>The alias of the AMI owner.</p>
   *          <p>Valid values: <code>amazon</code> | <code>aws-backup-vault</code> |
   *       <code>aws-marketplace</code>
   *          </p>
   * @public
   */
  ImageOwnerAlias?: string | undefined;

  /**
   * <p>The date and time the AMI was created.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The deprecation date and time of the AMI, in UTC, in the following format:
   *       <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.</p>
   * @public
   */
  DeprecationTime?: string | undefined;

  /**
   * <p>If <code>true</code>, the AMI satisfies the criteria for Allowed AMIs and can be
   *       discovered and used in the account. If <code>false</code>, the AMI can't be discovered or used
   *       in the account.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html">Control the discovery and use of AMIs in
   *       Amazon EC2 with Allowed AMIs</a> in
   *       <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ImageAllowed?: boolean | undefined;

  /**
   * <p>Indicates whether the AMI has public launch permissions. A value of <code>true</code>
   *       means this AMI has public launch permissions, while <code>false</code> means it has only
   *       implicit (AMI owner) or explicit (shared with your account) launch permissions.</p>
   * @public
   */
  IsPublic?: boolean | undefined;
}

/**
 * <p>Describes the current state of an instance.</p>
 * @public
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
   * @public
   */
  Code?: number | undefined;

  /**
   * <p>The current state of the instance.</p>
   * @public
   */
  Name?: InstanceStateName | undefined;
}

/**
 * <p>Information about the instance and the AMI used to launch the instance.</p>
 * @public
 */
export interface InstanceImageMetadata {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The time the instance was launched.</p>
   * @public
   */
  LaunchTime?: Date | undefined;

  /**
   * <p>The Availability Zone or Local Zone of the instance.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone or Local Zone of the instance.</p>
   * @public
   */
  ZoneId?: string | undefined;

  /**
   * <p>The current state of the instance.</p>
   * @public
   */
  State?: InstanceState | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the instance.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Any tags assigned to the instance.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Information about the AMI used to launch the instance.</p>
   * @public
   */
  ImageMetadata?: ImageMetadata | undefined;

  /**
   * <p>The entity that manages the instance.</p>
   * @public
   */
  Operator?: OperatorResponse | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceImageMetadataResult {
  /**
   * <p>Information about the instance and the AMI used to launch the instance.</p>
   * @public
   */
  InstanceImageMetadata?: InstanceImageMetadata[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstancesRequest {
  /**
   * <p>The instance IDs.</p>
   *          <p>Default: Describes all your instances.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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
   *                   <code>availability-zone-id</code> - The ID of the Availability Zone of the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.attach-time</code> - The attach time for an EBS
   *                     volume mapped to the instance, for example,
   *                         <code>2022-09-15T17:15:20.000Z</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.delete-on-termination</code> - A Boolean that
   *                     indicates whether the EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.device-name</code> - The device name specified in
   *                     the block device mapping (for example, <code>/dev/sdh</code> or
   *                         <code>xvdh</code>).</p>
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
   *                   <code>boot-mode</code> - The boot mode that was specified by the AMI
   *                         (<code>legacy-bios</code> | <code>uefi</code> |
   *                     <code>uefi-preferred</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-id</code> - The ID of the Capacity Reservation into which the
   *                     instance was launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-specification.capacity-reservation-preference</code>
   *                     - The instance's Capacity Reservation preference (<code>open</code> | <code>none</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-specification.capacity-reservation-target.capacity-reservation-id</code>
   *                     - The ID of the targeted Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-specification.capacity-reservation-target.capacity-reservation-resource-group-arn</code>
   *                     - The ARN of the targeted Capacity Reservation group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>client-token</code> - The idempotency token you provided when you
   *                     launched the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>current-instance-boot-mode</code> - The boot mode that is used to launch
   *                     the instance at launch or start (<code>legacy-bios</code> |
   *                     <code>uefi</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dns-name</code> - The public DNS name of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-optimized</code> - A Boolean that indicates whether the instance is
   *                     optimized for Amazon EBS I/O.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ena-support</code> - A Boolean that indicates whether the instance is
   *                     enabled for enhanced networking with ENA.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>enclave-options.enabled</code> - A Boolean that indicates whether the
   *                     instance is enabled for Amazon Web Services Nitro Enclaves.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hibernation-options.configured</code> - A Boolean that indicates whether
   *                     the instance is enabled for hibernation. A value of <code>true</code> means that
   *                     the instance is enabled for hibernation.</p>
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
   *                   <code>iam-instance-profile.id</code> - The instance profile associated with
   *                     the instance. Specified as an ID.</p>
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
   *                   <code>instance-lifecycle</code> - Indicates whether this is a Spot Instance, a Scheduled Instance, or
   *                      a Capacity Block (<code>spot</code> | <code>scheduled</code> | <code>capacity-block</code>).</p>
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
   *                   <code>ipv6-address</code> - The IPv6 address of the instance.</p>
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
   *                   <code>maintenance-options.auto-recovery</code> - The current automatic
   *                     recovery behavior of the instance (<code>disabled</code> | <code>default</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-endpoint</code> - The status of access to the HTTP
   *                     metadata endpoint on your instance (<code>enabled</code> |
   *                     <code>disabled</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-protocol-ipv4</code> - Indicates whether the IPv4
   *                     endpoint is enabled (<code>disabled</code> | <code>enabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-protocol-ipv6</code> - Indicates whether the IPv6
   *                     endpoint is enabled (<code>disabled</code> | <code>enabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-put-response-hop-limit</code> - The HTTP metadata
   *                     request put response hop limit (integer, possible values <code>1</code> to
   *                         <code>64</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-tokens</code> - The metadata request authorization
   *                     state (<code>optional</code> | <code>required</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.instance-metadata-tags</code> - The status of access to
   *                     instance tags from the instance metadata (<code>enabled</code> |
   *                         <code>disabled</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.state</code> - The state of the metadata option changes
   *                         (<code>pending</code> | <code>applied</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>monitoring-state</code> - Indicates whether detailed monitoring is
   *                     enabled (<code>disabled</code> | <code>enabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.allocation-id</code> - The allocation ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.association-id</code> - The association ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.carrier-ip</code> - The carrier IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.customer-owned-ip</code> - The customer-owned IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.ip-owner-id</code> - The owner
   *                     ID of the private IPv4 address associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.public-dns-name</code> - The public DNS name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.public-ip</code> - The ID of the
   *                     association of an Elastic IP address (IPv4) with a network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.primary</code> - Specifies whether the IPv4
   *                     address of the network interface is the primary private IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.private-dns-name</code> - The private DNS name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.private-ip-address</code> - The private IPv4
   *                     address associated with the network interface.</p>
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
   *                   <code>network-interface.association.carrier-ip</code> - The customer-owned IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.customer-owned-ip</code> - The customer-owned IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.ip-owner-id</code> - The owner of the
   *                     Elastic IP address (IPv4) associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.public-dns-name</code> - The public DNS name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.public-ip</code> - The address of the
   *                     Elastic IP address (IPv4) bound to the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.attach-time</code> - The time that the
   *                     network interface was attached to an instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.attachment-id</code> - The ID of the
   *                     interface attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.delete-on-termination</code> - Specifies
   *                     whether the attachment is deleted when an instance is terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.device-index</code> - The device index to
   *                     which the network interface is attached.</p>
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
   *                   <code>network-interface.attachment.network-card-index</code> - The index of the network card.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.status</code> - The status of the
   *                     attachment (<code>attaching</code> | <code>attached</code> |
   *                     <code>detaching</code> | <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.availability-zone</code> - The Availability Zone for
   *                     the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.deny-all-igw-traffic</code> - A Boolean that indicates whether
   *                 a network interface with an IPv6 address is unreachable from the public internet.</p>
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
   *                   <code>network-interface.ipv4-prefixes.ipv4-prefix</code> - The IPv4 prefixes that are assigned to the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.ipv6-address</code> - The IPv6 address associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.ipv6-addresses.ipv6-address</code> - The IPv6 address
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.ipv6-addresses.is-primary-ipv6</code> - A Boolean that indicates whether this
   *                     is the primary IPv6 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.ipv6-native</code> - A Boolean that indicates whether this is
   *                     an IPv6 only network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.ipv6-prefixes.ipv6-prefix</code> - The IPv6 prefix assigned to the network interface.</p>
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
   *                   <code>network-interface.operator.managed</code> - A Boolean that indicates
   *                     whether the instance has a managed network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.operator.principal</code> - The principal that manages
   *                     the network interface. Only valid for instances with managed network interfaces,
   *                     where <code>managed</code> is <code>true</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.outpost-arn</code> - The ARN of the Outpost.</p>
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
   *                   <code>network-interface.private-ip-address</code> - The private IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.public-dns-name</code> - The public DNS name.</p>
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
   *                   <code>network-interface.tag-key</code> - The key of a tag assigned to the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.tag-value</code> - The value of a tag assigned to the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.vpc-id</code> - The ID of the VPC for the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-performance-options.bandwidth-weighting</code> - Where the performance boost
   *         			is applied, if applicable. Valid values: <code>default</code>, <code>vpc-1</code>,
   *         			<code>ebs-1</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>operator.managed</code> - A Boolean that indicates whether this is a
   *                     managed instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>operator.principal</code> - The principal that manages the instance.
   *                     Only valid for managed instances, where <code>managed</code> is
   *                         <code>true</code>.</p>
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
   *                   <code>platform-details</code> - The platform (<code>Linux/UNIX</code> |
   *                         <code>Red Hat BYOL Linux</code> | <code> Red Hat Enterprise Linux</code> |
   *                     <code>Red Hat Enterprise Linux with HA</code> | <code>Red Hat Enterprise Linux with High Availability</code> | <code>Red Hat Enterprise
   *                         Linux with SQL Server Standard and HA</code> | <code>Red Hat Enterprise
   *                         Linux with SQL Server Enterprise and HA</code> | <code>Red Hat Enterprise
   *                         Linux with SQL Server Standard</code> | <code>Red Hat Enterprise Linux with
   *                         SQL Server Web</code> | <code>Red Hat Enterprise Linux with SQL Server
   *                         Enterprise</code> | <code>SQL Server Enterprise</code> | <code>SQL Server
   *                         Standard</code> | <code>SQL Server Web</code> | <code>SUSE Linux</code> |
   *                         <code>Ubuntu Pro</code> | <code>Windows</code> | <code>Windows BYOL</code> |
   *                         <code>Windows with SQL Server Enterprise</code> | <code>Windows with SQL
   *                         Server Standard</code> | <code>Windows with SQL Server Web</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name</code> - The private IPv4 DNS name of the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options.enable-resource-name-dns-a-record</code> - A
   *                     Boolean that indicates whether to respond to DNS queries for instance hostnames
   *                     with DNS A records.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options.enable-resource-name-dns-aaaa-record</code> - A
   *                     Boolean that indicates whether to respond to DNS queries for instance hostnames
   *                     with DNS AAAA records.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options.hostname-type</code> - The type of hostname
   *                     (<code>ip-name</code> | <code>resource-name</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - The private IPv4 address of the instance.
   *                     This can only be used to filter by the primary IP address of the network
   *                     interface attached to the instance. To filter by additional IP addresses
   *                     assigned to the network interface, use the filter
   *                         <code>network-interface.addresses.private-ip-address</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code associated with the AMI used to
   *                     launch the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code.type</code> - The type of product code (<code>devpay</code>
   *                     | <code>marketplace</code>).</p>
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
   *                   <code>tpm-support</code> - Indicates if the instance is configured for
   *                     NitroTPM support (<code>v2.0</code>). </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>usage-operation</code> - The usage operation value for the instance
   *                         (<code>RunInstances</code> | <code>RunInstances:00g0</code> |
   *                         <code>RunInstances:0010</code> | <code>RunInstances:1010</code> |
   *                         <code>RunInstances:1014</code> | <code>RunInstances:1110</code> |
   *                         <code>RunInstances:0014</code> | <code>RunInstances:0210</code> |
   *                         <code>RunInstances:0110</code> | <code>RunInstances:0100</code> |
   *                         <code>RunInstances:0004</code> | <code>RunInstances:0200</code> |
   *                         <code>RunInstances:000g</code> | <code>RunInstances:0g00</code> |
   *                         <code>RunInstances:0002</code> | <code>RunInstances:0800</code> |
   *                         <code>RunInstances:0102</code> | <code>RunInstances:0006</code> |
   *                         <code>RunInstances:0202</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>usage-operation-update-time</code> - The time that the usage operation
   *                     was last updated, for example, <code>2022-09-15T17:15:20.000Z</code>.</p>
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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>You cannot specify this parameter and the instance IDs parameter in the same request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes the instance's Capacity Reservation targeting preferences. The action returns the
 *                 <code>capacityReservationPreference</code> response element if the instance is
 *             configured to run in On-Demand capacity, or if it is configured in run in any
 *                 <code>open</code> Capacity Reservation that has matching attributes (instance type, platform,
 *             Availability Zone). The action returns the <code>capacityReservationTarget</code>
 *             response element if the instance explicily targets a specific Capacity Reservation or Capacity Reservation group.</p>
 * @public
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
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * <p>Information about the targeted Capacity Reservation or Capacity Reservation group.</p>
   * @public
   */
  CapacityReservationTarget?: CapacityReservationTargetResponse | undefined;
}

/**
 * <p>The CPU options for the instance.</p>
 * @public
 */
export interface CpuOptions {
  /**
   * <p>The number of CPU cores for the instance.</p>
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * <p>The number of threads per CPU core.</p>
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * <p>Indicates whether the instance is enabled for AMD SEV-SNP. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html">AMD SEV-SNP</a>.</p>
   * @public
   */
  AmdSevSnp?: AmdSevSnpSpecification | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024.</p>
 *          </note>
 *          <p>Describes the association between an instance and an Elastic Graphics accelerator.</p>
 * @public
 */
export interface ElasticGpuAssociation {
  /**
   * <p>The ID of the Elastic Graphics accelerator.</p>
   * @public
   */
  ElasticGpuId?: string | undefined;

  /**
   * <p>The ID of the association.</p>
   * @public
   */
  ElasticGpuAssociationId?: string | undefined;

  /**
   * <p>The state of the association between the instance and the
   *             Elastic Graphics accelerator.</p>
   * @public
   */
  ElasticGpuAssociationState?: string | undefined;

  /**
   * <p>The time the Elastic Graphics accelerator was associated with the instance.</p>
   * @public
   */
  ElasticGpuAssociationTime?: string | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Inference is no longer available.</p>
 *          </note>
 *          <p>
 *             Describes the association between an instance and an elastic inference accelerator.
 *         </p>
 * @public
 */
export interface ElasticInferenceAcceleratorAssociation {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the elastic inference accelerator.
   *         </p>
   * @public
   */
  ElasticInferenceAcceleratorArn?: string | undefined;

  /**
   * <p>
   *             The ID of the association.
   *         </p>
   * @public
   */
  ElasticInferenceAcceleratorAssociationId?: string | undefined;

  /**
   * <p>
   *             The state of the elastic inference accelerator.
   *         </p>
   * @public
   */
  ElasticInferenceAcceleratorAssociationState?: string | undefined;

  /**
   * <p>
   *             The time at which the elastic inference accelerator is associated with an instance.
   *         </p>
   * @public
   */
  ElasticInferenceAcceleratorAssociationTime?: Date | undefined;
}

/**
 * <p>Indicates whether your instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
 *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your Amazon EC2
 *                 instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface HibernationOptions {
  /**
   * <p>If <code>true</code>, your instance is enabled for hibernation; otherwise, it is not
   *             enabled for hibernation.</p>
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * <p>Describes a license configuration.</p>
 * @public
 */
export interface LicenseConfiguration {
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
export interface InstanceMaintenanceOptions {
  /**
   * <p>Provides information on the current automatic recovery behavior of your
   *             instance.</p>
   * @public
   */
  AutoRecovery?: InstanceAutoRecoveryState | undefined;

  /**
   * <p>Specifies whether to attempt reboot migration during a user-initiated reboot of an
   *             instance that has a scheduled <code>system-reboot</code> event:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - Amazon EC2 attempts to migrate the instance to
   *                     new hardware (reboot migration). If successful, the <code>system-reboot</code>
   *                     event is cleared. If unsuccessful, an in-place reboot occurs and the event
   *                     remains scheduled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disabled</code> - Amazon EC2 keeps the instance on the same
   *                     hardware (in-place reboot). The <code>system-reboot</code> event remains
   *                     scheduled.</p>
   *             </li>
   *          </ul>
   *          <p>This setting only applies to supported instances that have a scheduled reboot event.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/schedevents_actions_reboot.html#reboot-migration">Enable or disable reboot migration</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  RebootMigration?: InstanceRebootMigrationState | undefined;
}

/**
 * <p>The metadata options for the instance.</p>
 * @public
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
   * @public
   */
  State?: InstanceMetadataOptionsState | undefined;

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
   * @public
   */
  HttpTokens?: HttpTokensState | undefined;

  /**
   * <p>The maximum number of hops that the metadata token can travel.</p>
   *          <p>Possible values: Integers from <code>1</code> to <code>64</code>
   *          </p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Indicates whether the HTTP metadata endpoint on your instances is enabled or
   *             disabled.</p>
   *          <p>If the value is <code>disabled</code>, you cannot access your instance
   *             metadata.</p>
   * @public
   */
  HttpEndpoint?: InstanceMetadataEndpointState | undefined;

  /**
   * <p>Indicates whether the IPv6 endpoint for the instance metadata service is enabled or
   *             disabled.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   * @public
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | undefined;

  /**
   * <p>Indicates whether access to instance tags from the instance metadata is enabled or
   *             disabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | undefined;
}

/**
 * <p>Describes the monitoring of an instance.</p>
 * @public
 */
export interface Monitoring {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   * @public
   */
  State?: MonitoringState | undefined;
}

/**
 * <p>Describes association information for an Elastic IP address (IPv4).</p>
 * @public
 */
export interface InstanceNetworkInterfaceAssociation {
  /**
   * <p>The carrier IP address associated with the network interface.</p>
   * @public
   */
  CarrierIp?: string | undefined;

  /**
   * <p>The customer-owned IP address associated with the network interface.</p>
   * @public
   */
  CustomerOwnedIp?: string | undefined;

  /**
   * <p>The ID of the owner of the Elastic IP address.</p>
   * @public
   */
  IpOwnerId?: string | undefined;

  /**
   * <p>The public DNS name.</p>
   * @public
   */
  PublicDnsName?: string | undefined;

  /**
   * <p>The public IP address or Elastic IP address bound to the network interface.</p>
   * @public
   */
  PublicIp?: string | undefined;
}

/**
 * <p>ENA Express is compatible with both TCP and UDP transport protocols. When it's enabled, TCP traffic
 * 			automatically uses it. However, some UDP-based applications are designed to handle network packets that are
 * 			out of order, without a need for retransmission, such as live video broadcasting or other near-real-time
 * 			applications. For UDP traffic, you can specify whether to use ENA Express, based on your application
 * 			environment needs.</p>
 * @public
 */
export interface InstanceAttachmentEnaSrdUdpSpecification {
  /**
   * <p>Indicates whether UDP traffic to and from the instance uses ENA Express. To specify this setting,
   * 			you must first enable ENA Express.</p>
   * @public
   */
  EnaSrdUdpEnabled?: boolean | undefined;
}

/**
 * <p>ENA Express uses Amazon Web Services Scalable Reliable Datagram (SRD) technology to increase the
 * 			maximum bandwidth used per stream and minimize tail latency of network traffic between EC2 instances.
 * 			With ENA Express, you can communicate between two EC2 instances in the same subnet within the same
 * 			account, or in different accounts. Both sending and receiving instances must have ENA Express enabled.</p>
 *          <p>To improve the reliability of network packet delivery, ENA Express reorders network packets on the
 * 			receiving end by default. However, some UDP-based applications are designed to handle network packets
 * 			that are out of order to reduce the overhead for packet delivery at the network layer. When ENA Express
 * 			is enabled, you can specify whether UDP network traffic uses it.</p>
 * @public
 */
export interface InstanceAttachmentEnaSrdSpecification {
  /**
   * <p>Indicates whether ENA Express is enabled for the network interface.</p>
   * @public
   */
  EnaSrdEnabled?: boolean | undefined;

  /**
   * <p>Configures ENA Express for UDP network traffic.</p>
   * @public
   */
  EnaSrdUdpSpecification?: InstanceAttachmentEnaSrdUdpSpecification | undefined;
}

/**
 * <p>Describes a network interface attachment.</p>
 * @public
 */
export interface InstanceNetworkInterfaceAttachment {
  /**
   * <p>The time stamp when the attachment initiated.</p>
   * @public
   */
  AttachTime?: Date | undefined;

  /**
   * <p>The ID of the network interface attachment.</p>
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is
   *             terminated.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The index of the device on the instance for the network interface attachment.</p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>The attachment state.</p>
   * @public
   */
  Status?: AttachmentStatus | undefined;

  /**
   * <p>The index of the network card.</p>
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * <p>Contains the ENA Express settings for the network interface that's attached to
   *             the instance.</p>
   * @public
   */
  EnaSrdSpecification?: InstanceAttachmentEnaSrdSpecification | undefined;

  /**
   * <p>The number of ENA queues created with the instance.</p>
   * @public
   */
  EnaQueueCount?: number | undefined;
}

/**
 * <p>A security group connection tracking specification response that enables you to set
 *             the idle timeout for connection tracking on an Elastic network interface. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Connection tracking timeouts</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface ConnectionTrackingSpecificationResponse {
  /**
   * <p>Timeout (in seconds) for idle TCP
   * 						connections in an established state. Min: 60 seconds. Max: 432000 seconds (5
   * 						days). Default: 432000 seconds. Recommended: Less than 432000 seconds.</p>
   * @public
   */
  TcpEstablishedTimeout?: number | undefined;

  /**
   * <p>Timeout (in seconds) for idle UDP
   * 						flows classified as streams which have seen more than one request-response
   * 						transaction. Min: 60 seconds. Max: 180 seconds (3 minutes). Default: 180
   * 						seconds.</p>
   * @public
   */
  UdpStreamTimeout?: number | undefined;

  /**
   * <p>Timeout (in seconds) for idle UDP flows that
   * 						have seen traffic only in a single direction or a single request-response
   * 						transaction. Min: 30 seconds. Max: 60 seconds. Default: 30 seconds.</p>
   * @public
   */
  UdpTimeout?: number | undefined;
}

/**
 * <p>Information about an IPv4 prefix.</p>
 * @public
 */
export interface InstanceIpv4Prefix {
  /**
   * <p>One or more IPv4 prefixes assigned to the network interface.</p>
   * @public
   */
  Ipv4Prefix?: string | undefined;
}
