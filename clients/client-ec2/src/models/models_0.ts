// smithy-typescript generated code
import type {
  AccountVpcEncryptionControlMode,
  AccountVpcEncryptionControlState,
  AddressTransferStatus,
  AggregationStatusEnum,
  AllocationType,
  AmdSevSnp,
  ApplianceModeSupportValue,
  ApplyCancellationCharges,
  AsnAssociationState,
  AssociationStatusCode,
  AttachmentStatus,
  AutoPlacement,
  BatchState,
  BundleTaskState,
  ByoipCidrState,
  CancelBatchErrorCode,
  CancelSpotInstanceRequestState,
  CapacityReservationAdjustmentStatus,
  CapacityReservationCancellationQuoteState,
  CapacityReservationDeliveryPreference,
  CapacityReservationFleetState,
  CapacityReservationInstancePlatform,
  CapacityReservationLaunchStatus,
  CapacityReservationModificationQuoteState,
  CapacityReservationState,
  CapacityReservationTenancy,
  CapacityReservationType,
  ClientVpnAuthorizationRuleStatusCode,
  CurrencyCodeValues,
  DeviceTrustProviderType,
  DnsSupportValue,
  DomainType,
  DynamicRoutingValue,
  EndDateType,
  HostMaintenance,
  HostRecovery,
  IamInstanceProfileAssociationState,
  InstanceEventWindowState,
  InstanceHealthStatus,
  InstanceMatchCriteria,
  InterfaceProtocolType,
  InterruptibleCapacityReservationAllocationStatus,
  InterruptionType,
  IpamAssociatedResourceDiscoveryStatus,
  IpamPoolAllocationResourceType,
  IpamResourceDiscoveryAssociationState,
  IpamRoutingPolicyRegistrationDeltaState,
  IpScopeEnum,
  IpSource,
  Ipv6AddressAttribute,
  Ipv6SupportValue,
  IpVersionEnum,
  ListingState,
  ListingStatus,
  ManagedBy,
  NatGatewayAddressStatus,
  NetworkProtocolEnum,
  OutputFormat,
  PrincipalType,
  Protocol,
  ResourceType,
  RouteServerAssociationState,
  RouteTableAssociationStateCode,
  Schedule,
  SecurityGroupReferencingSupportValue,
  SecurityGroupVpcAssociationState,
  ServiceManaged,
  SSEType,
  SubnetCidrBlockStateCode,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayAttachmentStatusType,
  TransitGatewayMulitcastDomainAssociationState,
  TrustProviderType,
  UserTrustProviderType,
  VolumeAttachmentState,
  VolumeState,
  VolumeType,
  VpcCidrBlockStateCode,
  VpcEncryptionControlExclusionState,
  VpcPeeringConnectionStateReasonCode,
  VpnTunnelProvisioningStatus,
  WeekDay,
  ZeroSizePreference,
} from "./enums";

/**
 * The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an instance.
 *
 * @public
 */
export interface AcceleratorCount {
  /**
   * The minimum number of accelerators. If this parameter is not specified, there is no minimum limit.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum number of accelerators. If this parameter is not specified, there is no maximum limit.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an instance. To exclude accelerator-enabled instance types, set `Max` to `0`.
 *
 * @public
 */
export interface AcceleratorCountRequest {
  /**
   * The minimum number of accelerators. To specify no minimum limit, omit this parameter.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum number of accelerators. To specify no maximum limit, omit this parameter. To exclude accelerator-enabled instance types, set `Max` to `0`.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The minimum and maximum amount of total accelerator memory, in MiB.
 *
 * @public
 */
export interface AcceleratorTotalMemoryMiB {
  /**
   * The minimum amount of accelerator memory, in MiB. If this parameter is not specified, there is no minimum limit.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum amount of accelerator memory, in MiB. If this parameter is not specified, there is no maximum limit.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The minimum and maximum amount of total accelerator memory, in MiB.
 *
 * @public
 */
export interface AcceleratorTotalMemoryMiBRequest {
  /**
   * The minimum amount of accelerator memory, in MiB. To specify no minimum limit, omit this parameter.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum amount of accelerator memory, in MiB. To specify no maximum limit, omit this parameter.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * Describes a tag.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with `aws:`.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the tag.
   *
   * Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The tags to apply to a resource when the resource is being created. When you specify a tag, you must specify the resource type to tag, otherwise the request will fail.
 *
 * > **Note:** The `Valid Values` lists all the resource types that can be tagged. However, the action you're using might not support tagging all of these resource types. If you try to tag a resource type that is unsupported for the action you're using, you'll get an error.
 *
 * @public
 */
export interface TagSpecification {
  /**
   * The type of resource to tag on creation.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The tags to apply to the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AcceptAddressTransferRequest {
  /**
   * The Elastic IP address you are accepting for transfer.
   *
   * @public
   */
  Address: string | undefined;

  /**
   * `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Details on the Elastic IP address transfer. For more information, see [Transfer Elastic IP addresses](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro) in the *Amazon VPC User Guide*.
 *
 * @public
 */
export interface AddressTransfer {
  /**
   * The Elastic IP address being transferred.
   *
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * The allocation ID of an Elastic IP address.
   *
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * The ID of the account that you want to transfer the Elastic IP address to.
   *
   * @public
   */
  TransferAccountId?: string | undefined;

  /**
   * The timestamp when the Elastic IP address transfer expired. When the source account starts the transfer, the transfer account has seven hours to allocate the Elastic IP address to complete the transfer, or the Elastic IP address will return to its original owner.
   *
   * @public
   */
  TransferOfferExpirationTimestamp?: Date | undefined;

  /**
   * The timestamp when the Elastic IP address transfer was accepted.
   *
   * @public
   */
  TransferOfferAcceptedTimestamp?: Date | undefined;

  /**
   * The Elastic IP address transfer status.
   *
   * @public
   */
  AddressTransferStatus?: AddressTransferStatus | undefined;
}

/**
 * @public
 */
export interface AcceptAddressTransferResult {
  /**
   * An Elastic IP address transfer.
   *
   * @public
   */
  AddressTransfer?: AddressTransfer | undefined;
}

/**
 * @public
 */
export interface AcceptCapacityReservationBillingOwnershipRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the Capacity Reservation for which to accept the request.
   *
   * @public
   */
  CapacityReservationId: string | undefined;
}

/**
 * @public
 */
export interface AcceptCapacityReservationBillingOwnershipResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * Details about the target configuration.
 *
 * @public
 */
export interface TargetConfigurationRequest {
  /**
   * The number of instances the Convertible Reserved Instance offering can be applied to. This parameter is reserved and cannot be specified in a request
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The Convertible Reserved Instance offering ID.
   *
   * @public
   */
  OfferingId: string | undefined;
}

/**
 * Contains the parameters for accepting the quote.
 *
 * @public
 */
export interface AcceptReservedInstancesExchangeQuoteRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the Convertible Reserved Instances to exchange for another Convertible Reserved Instance of the same or higher value.
   *
   * @public
   */
  ReservedInstanceIds: string[] | undefined;

  /**
   * The configuration of the target Convertible Reserved Instance to exchange for your current Convertible Reserved Instances.
   *
   * @public
   */
  TargetConfigurations?: TargetConfigurationRequest[] | undefined;
}

/**
 * The result of the exchange and whether it was `successful`.
 *
 * @public
 */
export interface AcceptReservedInstancesExchangeQuoteResult {
  /**
   * The ID of the successful exchange.
   *
   * @public
   */
  ExchangeId?: string | undefined;
}

/**
 * @public
 */
export interface AcceptTransitGatewayClientVpnAttachmentRequest {
  /**
   * The ID of the Transit Gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a Transit Gateway attachment for a Client VPN endpoint.
 *
 * @public
 */
export interface TransitGatewayClientVpnAttachment {
  /**
   * The ID of the Transit Gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The ID of the Transit Gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnOwnerId?: string | undefined;

  /**
   * The state of the Transit Gateway attachment.
   *
   * @public
   */
  State?: TransitGatewayAttachmentStatusType | undefined;

  /**
   * The date and time the Transit Gateway attachment was created.
   *
   * @public
   */
  CreationTime?: string | undefined;
}

/**
 * @public
 */
export interface AcceptTransitGatewayClientVpnAttachmentResult {
  /**
   * Information about the Transit Gateway Client VPN attachment.
   *
   * @public
   */
  TransitGatewayClientVpnAttachment?: TransitGatewayClientVpnAttachment | undefined;
}

/**
 * @public
 */
export interface AcceptTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * The ID of the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The IDs of the subnets to associate with the transit gateway multicast domain.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the subnet association with the transit gateway multicast domain.
 *
 * @public
 */
export interface SubnetAssociation {
  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The state of the subnet association.
   *
   * @public
   */
  State?: TransitGatewayMulitcastDomainAssociationState | undefined;
}

/**
 * Describes the multicast domain associations.
 *
 * @public
 */
export interface TransitGatewayMulticastDomainAssociations {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * The ID of the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of resource, for example a VPC attachment.
   *
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the resource.
   *
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * The subnets associated with the multicast domain.
   *
   * @public
   */
  Subnets?: SubnetAssociation[] | undefined;
}

/**
 * @public
 */
export interface AcceptTransitGatewayMulticastDomainAssociationsResult {
  /**
   * Information about the multicast domain associations.
   *
   * @public
   */
  Associations?: TransitGatewayMulticastDomainAssociations | undefined;
}

/**
 * @public
 */
export interface AcceptTransitGatewayPeeringAttachmentRequest {
  /**
   * The ID of the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about the transit gateway in the peering attachment.
 *
 * @public
 */
export interface PeeringTgwInfo {
  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of the core network where the transit gateway peer is located.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the transit gateway.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The Region of the transit gateway.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * Describes dynamic routing for the transit gateway peering attachment.
 *
 * @public
 */
export interface TransitGatewayPeeringAttachmentOptions {
  /**
   * Describes whether dynamic routing is enabled or disabled for the transit gateway peering attachment.
   *
   * @public
   */
  DynamicRouting?: DynamicRoutingValue | undefined;
}

/**
 * The status of the transit gateway peering attachment.
 *
 * @public
 */
export interface PeeringAttachmentStatus {
  /**
   * The status code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The status message, if applicable.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes the transit gateway peering attachment.
 *
 * @public
 */
export interface TransitGatewayPeeringAttachment {
  /**
   * The ID of the transit gateway peering attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The ID of the accepter transit gateway attachment.
   *
   * @public
   */
  AccepterTransitGatewayAttachmentId?: string | undefined;

  /**
   * Information about the requester transit gateway.
   *
   * @public
   */
  RequesterTgwInfo?: PeeringTgwInfo | undefined;

  /**
   * Information about the accepter transit gateway.
   *
   * @public
   */
  AccepterTgwInfo?: PeeringTgwInfo | undefined;

  /**
   * Details about the transit gateway peering attachment.
   *
   * @public
   */
  Options?: TransitGatewayPeeringAttachmentOptions | undefined;

  /**
   * The status of the transit gateway peering attachment.
   *
   * @public
   */
  Status?: PeeringAttachmentStatus | undefined;

  /**
   * The state of the transit gateway peering attachment. Note that the `initiating` state has been deprecated.
   *
   * @public
   */
  State?: TransitGatewayAttachmentState | undefined;

  /**
   * The time the transit gateway peering attachment was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The tags for the transit gateway peering attachment.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AcceptTransitGatewayPeeringAttachmentResult {
  /**
   * The transit gateway peering attachment.
   *
   * @public
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment | undefined;
}

/**
 * @public
 */
export interface AcceptTransitGatewayVpcAttachmentRequest {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the VPC attachment options.
 *
 * @public
 */
export interface TransitGatewayVpcAttachmentOptions {
  /**
   * Indicates whether DNS support is enabled.
   *
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * This option is enabled by default.
   *
   * For more information about security group referencing, see [Security group referencing](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security) in the *Amazon Web Services Transit Gateways Guide*.
   *
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * Indicates whether IPv6 support is disabled.
   *
   * @public
   */
  Ipv6Support?: Ipv6SupportValue | undefined;

  /**
   * Indicates whether appliance mode support is enabled.
   *
   * @public
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | undefined;
}

/**
 * Describes a VPC attachment.
 *
 * @public
 */
export interface TransitGatewayVpcAttachment {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the VPC.
   *
   * @public
   */
  VpcOwnerId?: string | undefined;

  /**
   * The state of the VPC attachment. Note that the `initiating` state has been deprecated.
   *
   * @public
   */
  State?: TransitGatewayAttachmentState | undefined;

  /**
   * The IDs of the subnets.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The VPC attachment options.
   *
   * @public
   */
  Options?: TransitGatewayVpcAttachmentOptions | undefined;

  /**
   * The tags for the VPC attachment.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AcceptTransitGatewayVpcAttachmentResult {
  /**
   * The VPC attachment.
   *
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}

/**
 * @public
 */
export interface AcceptVpcEndpointConnectionsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the VPC endpoint service.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * The IDs of the interface VPC endpoints.
   *
   * @public
   */
  VpcEndpointIds: string[] | undefined;
}

/**
 * Information about the error that occurred. For more information about errors, see [Error codes](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html).
 *
 * @public
 */
export interface UnsuccessfulItemError {
  /**
   * The error code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The error message accompanying the error code.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Information about items that were not successfully processed in a batch call.
 *
 * @public
 */
export interface UnsuccessfulItem {
  /**
   * Information about the error.
   *
   * @public
   */
  Error?: UnsuccessfulItemError | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;
}

/**
 * @public
 */
export interface AcceptVpcEndpointConnectionsResult {
  /**
   * Information about the interface endpoints that were not accepted, if applicable.
   *
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface AcceptVpcPeeringConnectionRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the VPC peering connection. You must specify this parameter in the request.
   *
   * @public
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * Describes an IPv4 CIDR block.
 *
 * @public
 */
export interface CidrBlock {
  /**
   * The IPv4 CIDR block.
   *
   * @public
   */
  CidrBlock?: string | undefined;
}

/**
 * Describes an IPv6 CIDR block.
 *
 * @public
 */
export interface Ipv6CidrBlock {
  /**
   * The IPv6 CIDR block.
   *
   * @public
   */
  Ipv6CidrBlock?: string | undefined;
}

/**
 * Describes the VPC peering connection options.
 *
 * @public
 */
export interface VpcPeeringConnectionOptionsDescription {
  /**
   * Indicates whether a local VPC can resolve public DNS hostnames to private IP addresses when queried from instances in a peer VPC.
   *
   * @public
   */
  AllowDnsResolutionFromRemoteVpc?: boolean | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean | undefined;
}

/**
 * Describes a VPC in a VPC peering connection.
 *
 * @public
 */
export interface VpcPeeringConnectionVpcInfo {
  /**
   * The IPv4 CIDR block for the VPC.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * The IPv6 CIDR block for the VPC.
   *
   * @public
   */
  Ipv6CidrBlockSet?: Ipv6CidrBlock[] | undefined;

  /**
   * Information about the IPv4 CIDR blocks for the VPC.
   *
   * @public
   */
  CidrBlockSet?: CidrBlock[] | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the VPC.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Information about the VPC peering connection options for the accepter or requester VPC.
   *
   * @public
   */
  PeeringOptions?: VpcPeeringConnectionOptionsDescription | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The Region in which the VPC is located.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * Describes the status of a VPC peering connection.
 *
 * @public
 */
export interface VpcPeeringConnectionStateReason {
  /**
   * The status of the VPC peering connection.
   *
   * @public
   */
  Code?: VpcPeeringConnectionStateReasonCode | undefined;

  /**
   * A message that provides more information about the status, if applicable.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes a VPC peering connection.
 *
 * @public
 */
export interface VpcPeeringConnection {
  /**
   * Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
   *
   * @public
   */
  AccepterVpcInfo?: VpcPeeringConnectionVpcInfo | undefined;

  /**
   * The time that an unaccepted VPC peering connection will expire.
   *
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
   *
   * @public
   */
  RequesterVpcInfo?: VpcPeeringConnectionVpcInfo | undefined;

  /**
   * The status of the VPC peering connection.
   *
   * @public
   */
  Status?: VpcPeeringConnectionStateReason | undefined;

  /**
   * Any tags assigned to the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the VPC peering connection.
   *
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;
}

/**
 * @public
 */
export interface AcceptVpcPeeringConnectionResult {
  /**
   * Information about the VPC peering connection.
   *
   * @public
   */
  VpcPeeringConnection?: VpcPeeringConnection | undefined;
}

/**
 * Describes a range of ports.
 *
 * @public
 */
export interface PortRange {
  /**
   * The first port in the range.
   *
   * @public
   */
  From?: number | undefined;

  /**
   * The last port in the range.
   *
   * @public
   */
  To?: number | undefined;
}

/**
 * Describes a network access control (ACL) rule.
 *
 * @public
 */
export interface AnalysisAclRule {
  /**
   * The IPv4 address range, in CIDR notation.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * Indicates whether the rule is an outbound rule.
   *
   * @public
   */
  Egress?: boolean | undefined;

  /**
   * The range of ports.
   *
   * @public
   */
  PortRange?: PortRange | undefined;

  /**
   * The protocol.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * Indicates whether to allow or deny traffic that matches the rule.
   *
   * @public
   */
  RuleAction?: string | undefined;

  /**
   * The rule number.
   *
   * @public
   */
  RuleNumber?: number | undefined;
}

/**
 * Describes a path component.
 *
 * @public
 */
export interface AnalysisComponent {
  /**
   * The ID of the component.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the component.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the analysis component.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes additional settings for a stateful rule.
 *
 * @public
 */
export interface RuleOption {
  /**
   * The Suricata keyword.
   *
   * @public
   */
  Keyword?: string | undefined;

  /**
   * The settings for the keyword.
   *
   * @public
   */
  Settings?: string[] | undefined;
}

/**
 * Describes the rule options for a stateful rule group.
 *
 * @public
 */
export interface RuleGroupRuleOptionsPair {
  /**
   * The ARN of the rule group.
   *
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * The rule options.
   *
   * @public
   */
  RuleOptions?: RuleOption[] | undefined;
}

/**
 * Describes the type of a stateful rule group.
 *
 * @public
 */
export interface RuleGroupTypePair {
  /**
   * The ARN of the rule group.
   *
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * The rule group type. The possible values are `Domain List` and `Suricata`.
   *
   * @public
   */
  RuleGroupType?: string | undefined;
}

/**
 * Describes an additional detail for a path analysis. For more information, see [Reachability Analyzer additional detail codes](https://docs.aws.amazon.com/vpc/latest/reachability/additional-detail-codes.html).
 *
 * @public
 */
export interface AdditionalDetail {
  /**
   * The additional detail code.
   *
   * @public
   */
  AdditionalDetailType?: string | undefined;

  /**
   * The path component.
   *
   * @public
   */
  Component?: AnalysisComponent | undefined;

  /**
   * The VPC endpoint service.
   *
   * @public
   */
  VpcEndpointService?: AnalysisComponent | undefined;

  /**
   * The rule options.
   *
   * @public
   */
  RuleOptions?: RuleOption[] | undefined;

  /**
   * The rule group type.
   *
   * @public
   */
  RuleGroupTypePairs?: RuleGroupTypePair[] | undefined;

  /**
   * The rule options.
   *
   * @public
   */
  RuleGroupRuleOptionsPairs?: RuleGroupRuleOptionsPair[] | undefined;

  /**
   * The name of the VPC endpoint service.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * The load balancers.
   *
   * @public
   */
  LoadBalancers?: AnalysisComponent[] | undefined;
}

/**
 * Describes a load balancer listener.
 *
 * @public
 */
export interface AnalysisLoadBalancerListener {
  /**
   * The port on which the load balancer is listening.
   *
   * @public
   */
  LoadBalancerPort?: number | undefined;

  /**
   * [Classic Load Balancers] The back-end port for the listener.
   *
   * @public
   */
  InstancePort?: number | undefined;
}

/**
 * Describes a stateful rule.
 *
 * @public
 */
export interface FirewallStatefulRule {
  /**
   * The ARN of the stateful rule group.
   *
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * The source IP addresses, in CIDR notation.
   *
   * @public
   */
  Sources?: string[] | undefined;

  /**
   * The destination IP addresses, in CIDR notation.
   *
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * The source ports.
   *
   * @public
   */
  SourcePorts?: PortRange[] | undefined;

  /**
   * The destination ports.
   *
   * @public
   */
  DestinationPorts?: PortRange[] | undefined;

  /**
   * The protocol.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The rule action. The possible values are `pass`, `drop`, and `alert`.
   *
   * @public
   */
  RuleAction?: string | undefined;

  /**
   * The direction. The possible values are `FORWARD` and `ANY`.
   *
   * @public
   */
  Direction?: string | undefined;
}

/**
 * Describes a stateless rule.
 *
 * @public
 */
export interface FirewallStatelessRule {
  /**
   * The ARN of the stateless rule group.
   *
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * The source IP addresses, in CIDR notation.
   *
   * @public
   */
  Sources?: string[] | undefined;

  /**
   * The destination IP addresses, in CIDR notation.
   *
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * The source ports.
   *
   * @public
   */
  SourcePorts?: PortRange[] | undefined;

  /**
   * The destination ports.
   *
   * @public
   */
  DestinationPorts?: PortRange[] | undefined;

  /**
   * The protocols.
   *
   * @public
   */
  Protocols?: number[] | undefined;

  /**
   * The rule action. The possible values are `pass`, `drop`, and `forward_to_site`.
   *
   * @public
   */
  RuleAction?: string | undefined;

  /**
   * The rule priority.
   *
   * @public
   */
  Priority?: number | undefined;
}

/**
 * Describes a load balancer target.
 *
 * @public
 */
export interface AnalysisLoadBalancerTarget {
  /**
   * The IP address.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * Information about the instance.
   *
   * @public
   */
  Instance?: AnalysisComponent | undefined;

  /**
   * The port on which the target is listening.
   *
   * @public
   */
  Port?: number | undefined;
}

/**
 * Describes a route table route.
 *
 * @public
 */
export interface AnalysisRouteTableRoute {
  /**
   * The destination IPv4 address, in CIDR notation.
   *
   * @public
   */
  DestinationCidr?: string | undefined;

  /**
   * The prefix of the Amazon Web Services service.
   *
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * The ID of an egress-only internet gateway.
   *
   * @public
   */
  EgressOnlyInternetGatewayId?: string | undefined;

  /**
   * The ID of the gateway, such as an internet gateway or virtual private gateway.
   *
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * The ID of the instance, such as a NAT instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The ID of a NAT gateway.
   *
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * The ID of a network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * Describes how the route was created. The following are the possible values:
   *
   * - CreateRouteTable - The route was automatically created when the route table was created.
   * - CreateRoute - The route was manually added to the route table.
   * - EnableVgwRoutePropagation - The route was propagated by route propagation.
   *
   * @public
   */
  Origin?: string | undefined;

  /**
   * The ID of a transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of a VPC peering connection.
   *
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;

  /**
   * The state. The following are the possible values:
   *
   * - active
   * - blackhole
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The ID of a carrier gateway.
   *
   * @public
   */
  CarrierGatewayId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a core network.
   *
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * The ID of a local gateway.
   *
   * @public
   */
  LocalGatewayId?: string | undefined;
}

/**
 * Describes a security group rule.
 *
 * @public
 */
export interface AnalysisSecurityGroupRule {
  /**
   * The IPv4 address range, in CIDR notation.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The direction. The following are the possible values:
   *
   * - egress
   * - ingress
   *
   * @public
   */
  Direction?: string | undefined;

  /**
   * The security group ID.
   *
   * @public
   */
  SecurityGroupId?: string | undefined;

  /**
   * The port range.
   *
   * @public
   */
  PortRange?: PortRange | undefined;

  /**
   * The prefix list ID.
   *
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * The protocol name.
   *
   * @public
   */
  Protocol?: string | undefined;
}

/**
 * Describes an entry in a transit gateway policy table.
 *
 * @public
 */
export interface AnalysisTransitGatewayPolicyTableEntry {
  /**
   * The rule number for the policy table entry. Entries are evaluated in ascending order of rule number.
   *
   * @public
   */
  RuleNumber?: number | undefined;

  /**
   * The protocol number. A value of `-1` means that the entry matches all protocols.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The source CIDR block. If this value is not present, the entry matches any source address.
   *
   * @public
   */
  SourceCidr?: string | undefined;

  /**
   * The destination CIDR block. If this value is not present, the entry matches any destination address.
   *
   * @public
   */
  DestinationCidr?: string | undefined;

  /**
   * The source port range. If this value is not present, the entry matches any source port.
   *
   * @public
   */
  SourcePortRange?: PortRange | undefined;

  /**
   * The destination port range. If this value is not present, the entry matches any destination port.
   *
   * @public
   */
  DestinationPortRange?: PortRange | undefined;

  /**
   * The ID of the transit gateway route table to which the entry routes matching traffic.
   *
   * @public
   */
  TargetRouteTableId?: string | undefined;
}

/**
 * Describes a route in a transit gateway route table.
 *
 * @public
 */
export interface TransitGatewayRouteTableRoute {
  /**
   * The CIDR block used for destination matches.
   *
   * @public
   */
  DestinationCidr?: string | undefined;

  /**
   * The state of the route.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The route origin. The following are the possible values:
   *
   * - static
   * - propagated
   *
   * @public
   */
  RouteOrigin?: string | undefined;

  /**
   * The ID of the prefix list.
   *
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * The ID of the route attachment.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * The ID of the resource for the route attachment.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The resource type for the route attachment.
   *
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * Describes an explanation code for an unreachable path. For more information, see [Reachability Analyzer explanation codes](https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html).
 *
 * @public
 */
export interface Explanation {
  /**
   * The network ACL.
   *
   * @public
   */
  Acl?: AnalysisComponent | undefined;

  /**
   * The network ACL rule.
   *
   * @public
   */
  AclRule?: AnalysisAclRule | undefined;

  /**
   * The IPv4 address, in CIDR notation.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The IPv4 addresses, in CIDR notation.
   *
   * @public
   */
  Addresses?: string[] | undefined;

  /**
   * The resource to which the component is attached.
   *
   * @public
   */
  AttachedTo?: AnalysisComponent | undefined;

  /**
   * The Availability Zones.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The IDs of the Availability Zones.
   *
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;

  /**
   * The CIDR ranges.
   *
   * @public
   */
  Cidrs?: string[] | undefined;

  /**
   * The component.
   *
   * @public
   */
  Component?: AnalysisComponent | undefined;

  /**
   * The customer gateway.
   *
   * @public
   */
  CustomerGateway?: AnalysisComponent | undefined;

  /**
   * The destination.
   *
   * @public
   */
  Destination?: AnalysisComponent | undefined;

  /**
   * The destination VPC.
   *
   * @public
   */
  DestinationVpc?: AnalysisComponent | undefined;

  /**
   * The direction. The following are the possible values:
   *
   * - egress
   * - ingress
   *
   * @public
   */
  Direction?: string | undefined;

  /**
   * The explanation code.
   *
   * @public
   */
  ExplanationCode?: string | undefined;

  /**
   * The route table.
   *
   * @public
   */
  IngressRouteTable?: AnalysisComponent | undefined;

  /**
   * The internet gateway.
   *
   * @public
   */
  InternetGateway?: AnalysisComponent | undefined;

  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn?: string | undefined;

  /**
   * The listener for a Classic Load Balancer.
   *
   * @public
   */
  ClassicLoadBalancerListener?: AnalysisLoadBalancerListener | undefined;

  /**
   * The listener port of the load balancer.
   *
   * @public
   */
  LoadBalancerListenerPort?: number | undefined;

  /**
   * The target.
   *
   * @public
   */
  LoadBalancerTarget?: AnalysisLoadBalancerTarget | undefined;

  /**
   * The target group.
   *
   * @public
   */
  LoadBalancerTargetGroup?: AnalysisComponent | undefined;

  /**
   * The target groups.
   *
   * @public
   */
  LoadBalancerTargetGroups?: AnalysisComponent[] | undefined;

  /**
   * The target port.
   *
   * @public
   */
  LoadBalancerTargetPort?: number | undefined;

  /**
   * The load balancer listener.
   *
   * @public
   */
  ElasticLoadBalancerListener?: AnalysisComponent | undefined;

  /**
   * The missing component.
   *
   * @public
   */
  MissingComponent?: string | undefined;

  /**
   * The NAT gateway.
   *
   * @public
   */
  NatGateway?: AnalysisComponent | undefined;

  /**
   * The network interface.
   *
   * @public
   */
  NetworkInterface?: AnalysisComponent | undefined;

  /**
   * The packet field.
   *
   * @public
   */
  PacketField?: string | undefined;

  /**
   * The VPC peering connection.
   *
   * @public
   */
  VpcPeeringConnection?: AnalysisComponent | undefined;

  /**
   * The port.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The port ranges.
   *
   * @public
   */
  PortRanges?: PortRange[] | undefined;

  /**
   * The prefix list.
   *
   * @public
   */
  PrefixList?: AnalysisComponent | undefined;

  /**
   * The protocols.
   *
   * @public
   */
  Protocols?: string[] | undefined;

  /**
   * The route table route.
   *
   * @public
   */
  RouteTableRoute?: AnalysisRouteTableRoute | undefined;

  /**
   * The route table.
   *
   * @public
   */
  RouteTable?: AnalysisComponent | undefined;

  /**
   * The security group.
   *
   * @public
   */
  SecurityGroup?: AnalysisComponent | undefined;

  /**
   * The security group rule.
   *
   * @public
   */
  SecurityGroupRule?: AnalysisSecurityGroupRule | undefined;

  /**
   * The security groups.
   *
   * @public
   */
  SecurityGroups?: AnalysisComponent[] | undefined;

  /**
   * The source VPC.
   *
   * @public
   */
  SourceVpc?: AnalysisComponent | undefined;

  /**
   * The state.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The subnet.
   *
   * @public
   */
  Subnet?: AnalysisComponent | undefined;

  /**
   * The route table for the subnet.
   *
   * @public
   */
  SubnetRouteTable?: AnalysisComponent | undefined;

  /**
   * The component VPC.
   *
   * @public
   */
  Vpc?: AnalysisComponent | undefined;

  /**
   * The VPC endpoint.
   *
   * @public
   */
  VpcEndpoint?: AnalysisComponent | undefined;

  /**
   * The VPN connection.
   *
   * @public
   */
  VpnConnection?: AnalysisComponent | undefined;

  /**
   * The VPN gateway.
   *
   * @public
   */
  VpnGateway?: AnalysisComponent | undefined;

  /**
   * The transit gateway.
   *
   * @public
   */
  TransitGateway?: AnalysisComponent | undefined;

  /**
   * The transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTable?: AnalysisComponent | undefined;

  /**
   * The transit gateway route table route.
   *
   * @public
   */
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute | undefined;

  /**
   * The transit gateway policy table.
   *
   * @public
   */
  TransitGatewayPolicyTable?: AnalysisComponent | undefined;

  /**
   * The transit gateway policy table entry.
   *
   * @public
   */
  TransitGatewayPolicyTableEntry?: AnalysisTransitGatewayPolicyTableEntry | undefined;

  /**
   * The transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachment?: AnalysisComponent | undefined;

  /**
   * The Amazon Web Services account for the component.
   *
   * @public
   */
  ComponentAccount?: string | undefined;

  /**
   * The Region for the component.
   *
   * @public
   */
  ComponentRegion?: string | undefined;

  /**
   * The Network Firewall stateless rule.
   *
   * @public
   */
  FirewallStatelessRule?: FirewallStatelessRule | undefined;

  /**
   * The Network Firewall stateful rule.
   *
   * @public
   */
  FirewallStatefulRule?: FirewallStatefulRule | undefined;
}

/**
 * Describes a header. Reflects any changes made by a component as traffic passes through. The fields of an inbound header are null except for the first component of a path.
 *
 * @public
 */
export interface AnalysisPacketHeader {
  /**
   * The destination addresses.
   *
   * @public
   */
  DestinationAddresses?: string[] | undefined;

  /**
   * The destination port ranges.
   *
   * @public
   */
  DestinationPortRanges?: PortRange[] | undefined;

  /**
   * The protocol.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The source addresses.
   *
   * @public
   */
  SourceAddresses?: string[] | undefined;

  /**
   * The source port ranges.
   *
   * @public
   */
  SourcePortRanges?: PortRange[] | undefined;
}

/**
 * Describes a path component.
 *
 * @public
 */
export interface PathComponent {
  /**
   * The sequence number.
   *
   * @public
   */
  SequenceNumber?: number | undefined;

  /**
   * The network ACL rule.
   *
   * @public
   */
  AclRule?: AnalysisAclRule | undefined;

  /**
   * The resource to which the path component is attached.
   *
   * @public
   */
  AttachedTo?: AnalysisComponent | undefined;

  /**
   * The component.
   *
   * @public
   */
  Component?: AnalysisComponent | undefined;

  /**
   * The destination VPC.
   *
   * @public
   */
  DestinationVpc?: AnalysisComponent | undefined;

  /**
   * The outbound header.
   *
   * @public
   */
  OutboundHeader?: AnalysisPacketHeader | undefined;

  /**
   * The inbound header.
   *
   * @public
   */
  InboundHeader?: AnalysisPacketHeader | undefined;

  /**
   * The route table route.
   *
   * @public
   */
  RouteTableRoute?: AnalysisRouteTableRoute | undefined;

  /**
   * The security group rule.
   *
   * @public
   */
  SecurityGroupRule?: AnalysisSecurityGroupRule | undefined;

  /**
   * The source VPC.
   *
   * @public
   */
  SourceVpc?: AnalysisComponent | undefined;

  /**
   * The subnet.
   *
   * @public
   */
  Subnet?: AnalysisComponent | undefined;

  /**
   * The component VPC.
   *
   * @public
   */
  Vpc?: AnalysisComponent | undefined;

  /**
   * The additional details.
   *
   * @public
   */
  AdditionalDetails?: AdditionalDetail[] | undefined;

  /**
   * The transit gateway.
   *
   * @public
   */
  TransitGateway?: AnalysisComponent | undefined;

  /**
   * The route in a transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute | undefined;

  /**
   * The entry in a transit gateway policy table.
   *
   * @public
   */
  TransitGatewayPolicyTableEntry?: AnalysisTransitGatewayPolicyTableEntry | undefined;

  /**
   * The explanation codes.
   *
   * @public
   */
  Explanations?: Explanation[] | undefined;

  /**
   * The load balancer listener.
   *
   * @public
   */
  ElasticLoadBalancerListener?: AnalysisComponent | undefined;

  /**
   * The Network Firewall stateless rule.
   *
   * @public
   */
  FirewallStatelessRule?: FirewallStatelessRule | undefined;

  /**
   * The Network Firewall stateful rule.
   *
   * @public
   */
  FirewallStatefulRule?: FirewallStatefulRule | undefined;

  /**
   * The name of the VPC endpoint service.
   *
   * @public
   */
  ServiceName?: string | undefined;
}

/**
 * Describes a finding for a Network Access Scope.
 *
 * @public
 */
export interface AccessScopeAnalysisFinding {
  /**
   * The ID of the Network Access Scope analysis.
   *
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId?: string | undefined;

  /**
   * The ID of the Network Access Scope.
   *
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;

  /**
   * The ID of the finding.
   *
   * @public
   */
  FindingId?: string | undefined;

  /**
   * The finding components.
   *
   * @public
   */
  FindingComponents?: PathComponent[] | undefined;
}

/**
 * Describes a packet header statement.
 *
 * @public
 */
export interface PacketHeaderStatement {
  /**
   * The source addresses.
   *
   * @public
   */
  SourceAddresses?: string[] | undefined;

  /**
   * The destination addresses.
   *
   * @public
   */
  DestinationAddresses?: string[] | undefined;

  /**
   * The source ports.
   *
   * @public
   */
  SourcePorts?: string[] | undefined;

  /**
   * The destination ports.
   *
   * @public
   */
  DestinationPorts?: string[] | undefined;

  /**
   * The source prefix lists.
   *
   * @public
   */
  SourcePrefixLists?: string[] | undefined;

  /**
   * The destination prefix lists.
   *
   * @public
   */
  DestinationPrefixLists?: string[] | undefined;

  /**
   * The protocols.
   *
   * @public
   */
  Protocols?: Protocol[] | undefined;
}

/**
 * Describes a resource statement.
 *
 * @public
 */
export interface ResourceStatement {
  /**
   * The resources.
   *
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * The resource types.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;
}

/**
 * Describes a path statement.
 *
 * @public
 */
export interface PathStatement {
  /**
   * The packet header statement.
   *
   * @public
   */
  PacketHeaderStatement?: PacketHeaderStatement | undefined;

  /**
   * The resource statement.
   *
   * @public
   */
  ResourceStatement?: ResourceStatement | undefined;
}

/**
 * Describes a through resource statement.
 *
 * @public
 */
export interface ThroughResourcesStatement {
  /**
   * The resource statement.
   *
   * @public
   */
  ResourceStatement?: ResourceStatement | undefined;
}

/**
 * Describes a path.
 *
 * @public
 */
export interface AccessScopePath {
  /**
   * The source.
   *
   * @public
   */
  Source?: PathStatement | undefined;

  /**
   * The destination.
   *
   * @public
   */
  Destination?: PathStatement | undefined;

  /**
   * The through resources.
   *
   * @public
   */
  ThroughResources?: ThroughResourcesStatement[] | undefined;
}

/**
 * Describes a packet header statement.
 *
 * @public
 */
export interface PacketHeaderStatementRequest {
  /**
   * The source addresses.
   *
   * @public
   */
  SourceAddresses?: string[] | undefined;

  /**
   * The destination addresses.
   *
   * @public
   */
  DestinationAddresses?: string[] | undefined;

  /**
   * The source ports.
   *
   * @public
   */
  SourcePorts?: string[] | undefined;

  /**
   * The destination ports.
   *
   * @public
   */
  DestinationPorts?: string[] | undefined;

  /**
   * The source prefix lists.
   *
   * @public
   */
  SourcePrefixLists?: string[] | undefined;

  /**
   * The destination prefix lists.
   *
   * @public
   */
  DestinationPrefixLists?: string[] | undefined;

  /**
   * The protocols.
   *
   * @public
   */
  Protocols?: Protocol[] | undefined;
}

/**
 * Describes a resource statement.
 *
 * @public
 */
export interface ResourceStatementRequest {
  /**
   * The resources.
   *
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * The resource types.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;
}

/**
 * Describes a path statement.
 *
 * @public
 */
export interface PathStatementRequest {
  /**
   * The packet header statement.
   *
   * @public
   */
  PacketHeaderStatement?: PacketHeaderStatementRequest | undefined;

  /**
   * The resource statement.
   *
   * @public
   */
  ResourceStatement?: ResourceStatementRequest | undefined;
}

/**
 * Describes a through resource statement.
 *
 * @public
 */
export interface ThroughResourcesStatementRequest {
  /**
   * The resource statement.
   *
   * @public
   */
  ResourceStatement?: ResourceStatementRequest | undefined;
}

/**
 * Describes a path.
 *
 * @public
 */
export interface AccessScopePathRequest {
  /**
   * The source.
   *
   * @public
   */
  Source?: PathStatementRequest | undefined;

  /**
   * The destination.
   *
   * @public
   */
  Destination?: PathStatementRequest | undefined;

  /**
   * The through resources.
   *
   * @public
   */
  ThroughResources?: ThroughResourcesStatementRequest[] | undefined;
}

/**
 * Describes a value of an account attribute.
 *
 * @public
 */
export interface AccountAttributeValue {
  /**
   * The value of the attribute.
   *
   * @public
   */
  AttributeValue?: string | undefined;
}

/**
 * Describes an account attribute.
 *
 * @public
 */
export interface AccountAttribute {
  /**
   * The name of the account attribute.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The values for the account attribute.
   *
   * @public
   */
  AttributeValues?: AccountAttributeValue[] | undefined;
}

/**
 * Describes the exclusion configurations for the various resource types in the account-level VPC Encryption Control configuration.
 *
 * For more information, see [Enforce VPC encryption in transit](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html) in the *Amazon VPC User Guide*.
 *
 * @public
 */
export interface AccountVpcEncryptionControlExclusions {
  /**
   * The exclusion configuration for internet gateway resource.
   *
   * @public
   */
  InternetGateway?: VpcEncryptionControlExclusionState | undefined;

  /**
   * The exclusion configuration for egress-only internet gateway resource.
   *
   * @public
   */
  EgressOnlyInternetGateway?: VpcEncryptionControlExclusionState | undefined;

  /**
   * The exclusion configuration for NAT gateway resource.
   *
   * @public
   */
  NatGateway?: VpcEncryptionControlExclusionState | undefined;

  /**
   * The exclusion configuration for virtual private gateway resource.
   *
   * @public
   */
  VirtualPrivateGateway?: VpcEncryptionControlExclusionState | undefined;

  /**
   * The exclusion configuration for VPC peering connection resource.
   *
   * @public
   */
  VpcPeering?: VpcEncryptionControlExclusionState | undefined;

  /**
   * The exclusion configuration for Lambda service.
   *
   * @public
   */
  Lambda?: VpcEncryptionControlExclusionState | undefined;

  /**
   * The exclusion configuration for VPC Lattice service.
   *
   * @public
   */
  VpcLattice?: VpcEncryptionControlExclusionState | undefined;

  /**
   * The exclusion configuration for Elastic File System service.
   *
   * @public
   */
  ElasticFileSystem?: VpcEncryptionControlExclusionState | undefined;
}

/**
 * Describes the account-level VPC Encryption Control configuration, including its mode, state, and exclusions.
 *
 * For more information, see [Enforce VPC encryption in transit](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html) in the *Amazon VPC User Guide*.
 *
 * @public
 */
export interface AccountVpcEncryptionControl {
  /**
   * The current state of the account-level VPC Encryption Control configuration.
   *
   * @public
   */
  State?: AccountVpcEncryptionControlState | undefined;

  /**
   * The encryption mode for the account-level VPC Encryption Control configuration.
   *
   * @public
   */
  Mode?: AccountVpcEncryptionControlMode | undefined;

  /**
   * Information about the traffic exclusions for the account-level VPC Encryption Control configuration.
   *
   * @public
   */
  Exclusions?: AccountVpcEncryptionControlExclusions | undefined;

  /**
   * The entity that manages the account-level VPC Encryption Control configuration.
   *
   * @public
   */
  ManagedBy?: ManagedBy | undefined;

  /**
   * The date and time when the account-level VPC Encryption Control configuration was last updated.
   *
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;
}

/**
 * Describes a running instance in a Spot Fleet.
 *
 * @public
 */
export interface ActiveInstance {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The ID of the Spot Instance request.
   *
   * @public
   */
  SpotInstanceRequestId?: string | undefined;

  /**
   * The health status of the instance. If the status of either the instance status check or the system status check is `impaired`, the health status of the instance is `unhealthy`. Otherwise, the health status is `healthy`.
   *
   * @public
   */
  InstanceHealth?: InstanceHealthStatus | undefined;
}

/**
 * Contains information about the current security configuration of an active VPN tunnel.
 *
 * @public
 */
export interface ActiveVpnTunnelStatus {
  /**
   * The encryption algorithm negotiated in Phase 1 IKE negotiations.
   *
   * @public
   */
  Phase1EncryptionAlgorithm?: string | undefined;

  /**
   * The encryption algorithm negotiated in Phase 2 IKE negotiations.
   *
   * @public
   */
  Phase2EncryptionAlgorithm?: string | undefined;

  /**
   * The integrity algorithm negotiated in Phase 1 IKE negotiations.
   *
   * @public
   */
  Phase1IntegrityAlgorithm?: string | undefined;

  /**
   * The integrity algorithm negotiated in Phase 2 IKE negotiations.
   *
   * @public
   */
  Phase2IntegrityAlgorithm?: string | undefined;

  /**
   * The Diffie-Hellman group number being used in Phase 1 IKE negotiations.
   *
   * @public
   */
  Phase1DHGroup?: number | undefined;

  /**
   * The Diffie-Hellman group number being used in Phase 2 IKE negotiations.
   *
   * @public
   */
  Phase2DHGroup?: number | undefined;

  /**
   * The version of the Internet Key Exchange (IKE) protocol being used.
   *
   * @public
   */
  IkeVersion?: string | undefined;

  /**
   * The current provisioning status of the VPN tunnel.
   *
   * @public
   */
  ProvisioningStatus?: VpnTunnelProvisioningStatus | undefined;

  /**
   * The reason for the current provisioning status.
   *
   * @public
   */
  ProvisioningStatusReason?: string | undefined;
}

/**
 * Describes a principal.
 *
 * @public
 */
export interface AddedPrincipal {
  /**
   * The type of principal.
   *
   * @public
   */
  PrincipalType?: PrincipalType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the principal.
   *
   * @public
   */
  Principal?: string | undefined;

  /**
   * The ID of the service permission.
   *
   * @public
   */
  ServicePermissionId?: string | undefined;

  /**
   * The ID of the service.
   *
   * @public
   */
  ServiceId?: string | undefined;
}

/**
 * Add an operating Region to an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.
 *
 * For more information about operating Regions, see [Create an IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html) in the *Amazon VPC IPAM User Guide*.
 *
 * @public
 */
export interface AddIpamOperatingRegion {
  /**
   * The name of the operating Region.
   *
   * @public
   */
  RegionName?: string | undefined;
}

/**
 * Add an Organizational Unit (OU) exclusion to your IPAM. If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion. There is a limit on the number of exclusions you can create. For more information, see [Quotas for your IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html) in the *Amazon VPC IPAM User Guide*.
 *
 * @public
 */
export interface AddIpamOrganizationalUnitExclusion {
  /**
   * An Amazon Web Services Organizations entity path. Build the path for the OU(s) using Amazon Web Services Organizations IDs separated by a `/`. Include all child OUs by ending the path with `/*`.
   *
   * - Example 1
   *
   *   - Path to a child OU: `o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-ghi0-awsccccc/ou-jkl0-awsddddd/`
   *   - In this example, `o-a1b2c3d4e5` is the organization ID, `r-f6g7h8i9j0example` is the root ID , `ou-ghi0-awsccccc` is an OU ID, and `ou-jkl0-awsddddd` is a child OU ID.
   *   - IPAM will not manage the IP addresses in accounts in the child OU.
   * - Example 2
   *
   *   - Path where all child OUs will be part of the exclusion: `o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-ghi0-awsccccc/*`
   *   - In this example, IPAM will not manage the IP addresses in accounts in the OU (`ou-ghi0-awsccccc`) or in accounts in any OUs that are children of the OU.
   *
   * For more information on how to construct an entity path, see [Understand the Amazon Web Services Organizations entity path](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_last-accessed-view-data-orgs.html#access_policies_access-advisor-viewing-orgs-entity-path) in the *Amazon Web Services Identity and Access Management User Guide*.
   *
   * @public
   */
  OrganizationsEntityPath?: string | undefined;
}

/**
 * An entry for a prefix list.
 *
 * @public
 */
export interface AddPrefixListEntry {
  /**
   * The CIDR block.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * A description for the entry.
   *
   * Constraints: Up to 255 characters in length.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Describes an Elastic IP address, or a carrier IP address.
 *
 * @public
 */
export interface Address {
  /**
   * The ID representing the allocation of the address.
   *
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * The ID representing the association of the address with an instance.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The network (`vpc`).
   *
   * @public
   */
  Domain?: DomainType | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the network interface.
   *
   * @public
   */
  NetworkInterfaceOwnerId?: string | undefined;

  /**
   * The private IP address associated with the Elastic IP address.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * Any tags assigned to the Elastic IP address.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of an address pool.
   *
   * @public
   */
  PublicIpv4Pool?: string | undefined;

  /**
   * The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises IP addresses.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * The customer-owned IP address.
   *
   * @public
   */
  CustomerOwnedIp?: string | undefined;

  /**
   * The ID of the customer-owned address pool.
   *
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * The carrier IP address associated. This option is only available for network interfaces which reside in a subnet in a Wavelength Zone (for example an EC2 instance).
   *
   * @public
   */
  CarrierIp?: string | undefined;

  /**
   * The ID of the subnet where the IP address is allocated.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The service that manages the elastic IP address.
   *
   * > **Note:** The only option supported today is `alb`.
   *
   * @public
   */
  ServiceManaged?: ServiceManaged | undefined;

  /**
   * The ID of the instance that the address is associated with (if any).
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The Elastic IP address.
   *
   * @public
   */
  PublicIp?: string | undefined;
}

/**
 * The status of an updated pointer (PTR) record for an Elastic IP address.
 *
 * @public
 */
export interface PtrUpdateStatus {
  /**
   * The value for the PTR record update.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The status of the PTR record update.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The reason for the PTR record update.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * The attributes associated with an Elastic IP address.
 *
 * @public
 */
export interface AddressAttribute {
  /**
   * The public IP address.
   *
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * [EC2-VPC] The allocation ID.
   *
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * The pointer (PTR) record for the IP address.
   *
   * @public
   */
  PtrRecord?: string | undefined;

  /**
   * The updated PTR record for the IP address.
   *
   * @public
   */
  PtrRecordUpdate?: PtrUpdateStatus | undefined;
}

/**
 * @public
 */
export interface AdvertiseByoipCidrRequest {
  /**
   * The address range, in CIDR notation. This must be the exact range that you provisioned. You can't advertise only a portion of the provisioned range.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * The public 2-byte or 4-byte ASN that you want to advertise.
   *
   * @public
   */
  Asn?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * If you have [Local Zones](https://docs.aws.amazon.com/local-zones/latest/ug/how-local-zones-work.html) enabled, you can choose a network border group for Local Zones when you provision and advertise a BYOIPv4 CIDR. Choose the network border group carefully as the EIP and the Amazon Web Services resource it is associated with must reside in the same network border group.
   *
   * You can provision BYOIP address ranges to and advertise them in the following Local Zone network border groups:
   *
   * - us-east-1-dfw-2
   * - us-west-2-lax-1
   * - us-west-2-phx-2
   *
   * > **Note:** You cannot provision or advertise BYOIPv6 address ranges in Local Zones at this time.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;
}

/**
 * An Autonomous System Number (ASN) and BYOIP CIDR association.
 *
 * @public
 */
export interface AsnAssociation {
  /**
   * The association's ASN.
   *
   * @public
   */
  Asn?: string | undefined;

  /**
   * The association's CIDR.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The association's status message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The association's state.
   *
   * @public
   */
  State?: AsnAssociationState | undefined;
}

/**
 * Information about an address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP).
 *
 * @public
 */
export interface ByoipCidr {
  /**
   * The address range, in CIDR notation.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The description of the address range.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The BYOIP CIDR associations with ASNs.
   *
   * @public
   */
  AsnAssociations?: AsnAssociation[] | undefined;

  /**
   * Upon success, contains the ID of the address pool. Otherwise, contains an error message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The state of the address range.
   *
   * - `advertised`: The address range is being advertised to the internet by Amazon Web Services.
   * - `deprovisioned`: The address range is deprovisioned.
   * - `failed-deprovision`: The request to deprovision the address range was unsuccessful. Ensure that all EIPs from the range have been deallocated and try again.
   * - `failed-provision`: The request to provision the address range was unsuccessful.
   * - `pending-deprovision`: You’ve submitted a request to deprovision an address range and it's pending.
   * - `pending-provision`: You’ve submitted a request to provision an address range and it's pending.
   * - `provisioned`: The address range is provisioned and can be advertised. The range is not currently advertised.
   * - `provisioned-not-publicly-advertisable`: The address range is provisioned and cannot be advertised.
   *
   * @public
   */
  State?: ByoipCidrState | undefined;

  /**
   * If you have [Local Zones](https://docs.aws.amazon.com/local-zones/latest/ug/how-local-zones-work.html) enabled, you can choose a network border group for Local Zones when you provision and advertise a BYOIPv4 CIDR. Choose the network border group carefully as the EIP and the Amazon Web Services resource it is associated with must reside in the same network border group.
   *
   * You can provision BYOIP address ranges to and advertise them in the following Local Zone network border groups:
   *
   * - us-east-1-dfw-2
   * - us-west-2-lax-1
   * - us-west-2-phx-2
   *
   * > **Note:** You cannot provision or advertise BYOIPv6 address ranges in Local Zones at this time.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * Specifies the advertisement method for the BYOIP CIDR. Valid values are:
   *
   * - `unicast`: IP is advertised from a single location (regional services like EC2)
   * - `anycast`: IP is advertised from multiple global locations simultaneously (global services like CloudFront)
   *
   * For more information, see [Bring your own IP to CloudFront using IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoip-cloudfront.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  AdvertisementType?: string | undefined;

  /**
   * The ID of the address pool associated with the CIDR.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The ID of the IPAM pool associated with the CIDR.
   *
   * @public
   */
  IpamPoolId?: string | undefined;
}

/**
 * @public
 */
export interface AdvertiseByoipCidrResult {
  /**
   * Information about the address range.
   *
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * @public
 */
export interface AllocateAddressRequest {
  /**
   * The network (`vpc`).
   *
   * @public
   */
  Domain?: DomainType | undefined;

  /**
   * The Elastic IP address to recover or an IPv4 address from an address pool.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The ID of an address pool that you own. Use this parameter to let Amazon EC2 select an address from the address pool. To specify a specific address from the address pool, use the `Address` parameter instead.
   *
   * @public
   */
  PublicIpv4Pool?: string | undefined;

  /**
   * A unique set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises IP addresses. Use this parameter to limit the IP address to this location. IP addresses cannot move between network border groups.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * The ID of a customer-owned address pool. Use this parameter to let Amazon EC2 select an address from the address pool. Alternatively, specify a specific address from the address pool.
   *
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * The tags to assign to the Elastic IP address.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The ID of an IPAM pool which has an Amazon-provided or BYOIP public IPv4 CIDR provisioned to it. For more information, see [Allocate sequential Elastic IP addresses from an IPAM pool](https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-eip-pool.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AllocateAddressResult {
  /**
   * The ID that represents the allocation of the Elastic IP address.
   *
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * The ID of an address pool that you own.
   *
   * @public
   */
  PublicIpv4Pool?: string | undefined;

  /**
   * The set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises IP addresses.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * The network (`vpc`).
   *
   * @public
   */
  Domain?: DomainType | undefined;

  /**
   * The customer-owned IP address.
   *
   * @public
   */
  CustomerOwnedIp?: string | undefined;

  /**
   * The ID of the customer-owned address pool.
   *
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * The carrier IP address. Available only for network interfaces that reside in a subnet in a Wavelength Zone.
   *
   * @public
   */
  CarrierIp?: string | undefined;

  /**
   * The Amazon-owned IP address. Not available when using an address pool that you own.
   *
   * @public
   */
  PublicIp?: string | undefined;
}

/**
 * Contains the CPU configuration options for a Dedicated Host allocation request. Options include AMD Secure Encrypted Virtualization-Secure Nested Paging (AMD SEV-SNP) settings.
 *
 * @public
 */
export interface HostCpuOptionsRequest {
  /**
   * Specifies whether AMD Secure Encrypted Virtualization-Secure Nested Paging (AMD SEV-SNP) is enabled or disabled for the Dedicated Host. If you don't specify a value, AMD SEV-SNP is `disabled`.
   *
   * @public
   */
  AmdSevSnp?: AmdSevSnp | undefined;
}

/**
 * @public
 */
export interface AllocateHostsRequest {
  /**
   * Specifies the instance family to be supported by the Dedicated Hosts. If you specify an instance family, the Dedicated Hosts support multiple instance types within that instance family.
   *
   * If you want the Dedicated Hosts to support a specific instance type only, omit this parameter and specify **InstanceType** instead. You cannot specify **InstanceFamily** and **InstanceType** in the same request.
   *
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * The tags to apply to the Dedicated Host during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Indicates whether to enable or disable host recovery for the Dedicated Host. Host recovery is disabled by default. For more information, see [Host recovery](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html) in the *Amazon EC2 User Guide*.
   *
   * Default: `off`
   *
   * @public
   */
  HostRecovery?: HostRecovery | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate the Dedicated Host. If you specify **OutpostArn**, you can optionally specify **AssetIds**.
   *
   * If you are allocating the Dedicated Host in a Region, omit this parameter.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * Indicates whether to enable or disable host maintenance for the Dedicated Host. For more information, see [Host maintenance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-maintenance.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  HostMaintenance?: HostMaintenance | undefined;

  /**
   * The IDs of the Outpost hardware assets on which to allocate the Dedicated Hosts. Targeting specific hardware assets on an Outpost can help to minimize latency between your workloads. This parameter is supported only if you specify **OutpostArn**. If you are allocating the Dedicated Hosts in a Region, omit this parameter.
   *
   * - If you specify this parameter, you can omit **Quantity**. In this case, Amazon EC2 allocates a Dedicated Host on each specified hardware asset.
   * - If you specify both **AssetIds** and **Quantity**, then the value for **Quantity** must be equal to the number of asset IDs specified.
   *
   * @public
   */
  AssetIds?: string[] | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The CPU configuration options to apply to the Dedicated Host.
   *
   * @public
   */
  CpuOptions?: HostCpuOptionsRequest | undefined;

  /**
   * Indicates whether the host accepts any untargeted instance launches that match its instance type configuration, or if it only accepts Host tenancy instance launches that specify its unique host ID. For more information, see [Understanding auto-placement and affinity](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-dedicated-hosts-work.html#dedicated-hosts-understanding) in the *Amazon EC2 User Guide*.
   *
   * Default: `off`
   *
   * @public
   */
  AutoPlacement?: AutoPlacement | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Specifies the instance type to be supported by the Dedicated Hosts. If you specify an instance type, the Dedicated Hosts support instances of the specified instance type only.
   *
   * If you want the Dedicated Hosts to support multiple instance types in a specific instance family, omit this parameter and specify **InstanceFamily** instead. You cannot specify **InstanceType** and **InstanceFamily** in the same request.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The number of Dedicated Hosts to allocate to your account with these parameters. If you are allocating the Dedicated Hosts on an Outpost, and you specify **AssetIds**, you can omit this parameter. In this case, Amazon EC2 allocates a Dedicated Host on each specified hardware asset. If you specify both **AssetIds** and **Quantity**, then the value that you specify for **Quantity** must be equal to the number of asset IDs specified.
   *
   * @public
   */
  Quantity?: number | undefined;

  /**
   * The Availability Zone in which to allocate the Dedicated Host.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;
}

/**
 * Contains the output of AllocateHosts.
 *
 * @public
 */
export interface AllocateHostsResult {
  /**
   * The ID of the allocated Dedicated Host. This is used to launch an instance onto a specific host.
   *
   * @public
   */
  HostIds?: string[] | undefined;
}

/**
 * @public
 */
export interface AllocateIpamPoolCidrRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM pool from which you would like to allocate a CIDR.
   *
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * The CIDR you would like to allocate from the IPAM pool. Note the following:
   *
   * - If there is no DefaultNetmaskLength allocation rule set on the pool, you must specify either the NetmaskLength or the CIDR.
   * - If the DefaultNetmaskLength allocation rule is set on the pool, you can specify either the NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule will be ignored.
   *
   * Possible values: Any available IPv4 or IPv6 CIDR.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The netmask length of the CIDR you would like to allocate from the IPAM pool. Note the following:
   *
   * - If there is no DefaultNetmaskLength allocation rule set on the pool, you must specify either the NetmaskLength or the CIDR.
   * - If the DefaultNetmaskLength allocation rule is set on the pool, you can specify either the NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule will be ignored.
   *
   * Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.
   *
   * @public
   */
  NetmaskLength?: number | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A description for the allocation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A preview of the next available CIDR in a pool.
   *
   * @public
   */
  PreviewNextCidr?: boolean | undefined;

  /**
   * Include a particular CIDR range that can be returned by the pool. Allowed CIDRs are only allowed if using netmask length for allocation.
   *
   * @public
   */
  AllowedCidrs?: string[] | undefined;

  /**
   * Exclude a particular CIDR range from being returned by the pool. Disallowed CIDRs are only allowed if using netmask length for allocation.
   *
   * @public
   */
  DisallowedCidrs?: string[] | undefined;

  /**
   * The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * If you specify tags, the request is authorized against the allocation resource in addition to the pool resource.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * In IPAM, an allocation is a CIDR assignment from an IPAM pool to another IPAM pool or to a resource.
 *
 * @public
 */
export interface IpamPoolAllocation {
  /**
   * The CIDR for the allocation. A CIDR is a representation of an IP address and its associated network mask (or netmask) and refers to a range of IP addresses. An IPv4 CIDR example is `10.24.34.0/23`. An IPv6 CIDR example is `2001:DB8::/32`.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The ID of an allocation.
   *
   * @public
   */
  IpamPoolAllocationId?: string | undefined;

  /**
   * A description of the pool allocation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of the resource.
   *
   * @public
   */
  ResourceType?: IpamPoolAllocationResourceType | undefined;

  /**
   * The Amazon Web Services Region of the resource.
   *
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * The owner of the resource.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * The tags for the IPAM pool allocation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AllocateIpamPoolCidrResult {
  /**
   * Information about the allocation created.
   *
   * @public
   */
  IpamPoolAllocation?: IpamPoolAllocation | undefined;
}

/**
 * Describes a principal.
 *
 * @public
 */
export interface AllowedPrincipal {
  /**
   * The type of principal.
   *
   * @public
   */
  PrincipalType?: PrincipalType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the principal.
   *
   * @public
   */
  Principal?: string | undefined;

  /**
   * The ID of the service permission.
   *
   * @public
   */
  ServicePermissionId?: string | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the service.
   *
   * @public
   */
  ServiceId?: string | undefined;
}

/**
 * Describes an potential intermediate component of a feasible path.
 *
 * @public
 */
export interface AlternatePathHint {
  /**
   * The ID of the component.
   *
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the component.
   *
   * @public
   */
  ComponentArn?: string | undefined;
}

/**
 * @public
 */
export interface ApplySecurityGroupsToClientVpnTargetNetworkRequest {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * The ID of the VPC in which the associated target network is located.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The IDs of the security groups to apply to the associated target network. Up to 5 security groups can be applied to an associated target network.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ApplySecurityGroupsToClientVpnTargetNetworkResult {
  /**
   * The IDs of the applied security groups.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface AssignIpv6AddressesRequest {
  /**
   * The number of IPv6 prefixes that Amazon Web Services automatically assigns to the network interface. You cannot use this option if you use the `Ipv6Prefixes` option.
   *
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * One or more IPv6 prefixes assigned to the network interface. You can't use this option if you use the `Ipv6PrefixCount` option.
   *
   * @public
   */
  Ipv6Prefixes?: string[] | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * The IPv6 addresses to be assigned to the network interface. You can't use this option if you're specifying a number of IPv6 addresses.
   *
   * @public
   */
  Ipv6Addresses?: string[] | undefined;

  /**
   * The number of additional IPv6 addresses to assign to the network interface. The specified number of IPv6 addresses are assigned in addition to the existing IPv6 addresses that are already assigned to the network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't use this option if specifying specific IPv6 addresses.
   *
   * @public
   */
  Ipv6AddressCount?: number | undefined;
}

/**
 * @public
 */
export interface AssignIpv6AddressesResult {
  /**
   * The new IPv6 addresses assigned to the network interface. Existing IPv6 addresses that were assigned to the network interface before the request are not included.
   *
   * @public
   */
  AssignedIpv6Addresses?: string[] | undefined;

  /**
   * The IPv6 prefixes that are assigned to the network interface.
   *
   * @public
   */
  AssignedIpv6Prefixes?: string[] | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;
}

/**
 * Contains the parameters for AssignPrivateIpAddresses.
 *
 * @public
 */
export interface AssignPrivateIpAddressesRequest {
  /**
   * One or more IPv4 prefixes assigned to the network interface. You can't use this option if you use the `Ipv4PrefixCount` option.
   *
   * @public
   */
  Ipv4Prefixes?: string[] | undefined;

  /**
   * The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface. You can't use this option if you use the `Ipv4 Prefixes` option.
   *
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * The IP addresses to be assigned as a secondary private IP address to the network interface. You can't specify this parameter when also specifying a number of secondary IP addresses.
   *
   * If you don't specify an IP address, Amazon EC2 automatically selects an IP address within the subnet range.
   *
   * @public
   */
  PrivateIpAddresses?: string[] | undefined;

  /**
   * The number of secondary IP addresses to assign to the network interface. You can't specify this parameter when also specifying private IP addresses.
   *
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * Indicates whether to allow an IP address that is already assigned to another network interface or instance to be reassigned to the specified network interface.
   *
   * @public
   */
  AllowReassignment?: boolean | undefined;
}

/**
 * Describes an IPv4 prefix.
 *
 * @public
 */
export interface Ipv4PrefixSpecification {
  /**
   * The IPv4 prefix. For information, see [Assigning prefixes to network interfaces](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  Ipv4Prefix?: string | undefined;
}

/**
 * Describes the private IP addresses assigned to a network interface.
 *
 * @public
 */
export interface AssignedPrivateIpAddress {
  /**
   * The private IP address assigned to the network interface.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface AssignPrivateIpAddressesResult {
  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The private IP addresses assigned to the network interface.
   *
   * @public
   */
  AssignedPrivateIpAddresses?: AssignedPrivateIpAddress[] | undefined;

  /**
   * The IPv4 prefixes that are assigned to the network interface.
   *
   * @public
   */
  AssignedIpv4Prefixes?: Ipv4PrefixSpecification[] | undefined;
}

/**
 * @public
 */
export interface AssignPrivateNatGatewayAddressRequest {
  /**
   * The ID of the NAT gateway.
   *
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * The private IPv4 addresses you want to assign to the private NAT gateway.
   *
   * @public
   */
  PrivateIpAddresses?: string[] | undefined;

  /**
   * The number of private IP addresses to assign to the NAT gateway. You can't specify this parameter when also specifying private IP addresses.
   *
   * @public
   */
  PrivateIpAddressCount?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the IP addresses and network interface associated with a NAT gateway.
 *
 * @public
 */
export interface NatGatewayAddress {
  /**
   * [Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway.
   *
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * The ID of the network interface associated with the NAT gateway.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The private IP address associated with the NAT gateway.
   *
   * @public
   */
  PrivateIp?: string | undefined;

  /**
   * [Public NAT gateway only] The Elastic IP address associated with the NAT gateway.
   *
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * [Public NAT gateway only] The association ID of the Elastic IP address that's associated with the NAT gateway.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * Defines if the IP address is the primary address.
   *
   * @public
   */
  IsPrimary?: boolean | undefined;

  /**
   * The address failure message.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * The address status.
   *
   * @public
   */
  Status?: NatGatewayAddressStatus | undefined;

  /**
   * The Availability Zone where this Elastic IP address (EIP) is being used to handle outbound NAT traffic.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone where this Elastic IP address (EIP) is being used to handle outbound NAT traffic. Use this instead of AvailabilityZone for consistent identification of AZs across Amazon Web Services Regions.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * @public
 */
export interface AssignPrivateNatGatewayAddressResult {
  /**
   * The ID of the NAT gateway.
   *
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * NAT gateway IP addresses.
   *
   * @public
   */
  NatGatewayAddresses?: NatGatewayAddress[] | undefined;
}

/**
 * @public
 */
export interface AssociateAddressRequest {
  /**
   * The allocation ID. This is required.
   *
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * The ID of the instance. The instance must have exactly one attached network interface. You can specify either the instance ID or the network interface ID, but not both.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the network interface. If the instance has more than one network interface, you must specify a network interface ID.
   *
   * You can specify either the instance ID or the network interface ID, but not both.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * Reassociation is automatic, but you can specify false to ensure the operation fails if the Elastic IP address is already associated with another resource.
   *
   * @public
   */
  AllowReassociation?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateAddressResult {
  /**
   * The ID that represents the association of the Elastic IP address with an instance.
   *
   * @public
   */
  AssociationId?: string | undefined;
}

/**
 * Describes a tag key-value pair for an application status check association request.
 *
 * @public
 */
export interface CustomTagKeyValueRequestPair {
  /**
   * The key of the tag.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationStatusCheckRequest {
  /**
   * The ID of the application status check to associate.
   *
   * @public
   */
  ApplicationStatusCheckId: string | undefined;

  /**
   * The [tags](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html) to associate the application status check with. Each tag is a key-value pair. When you associate tags, the application status check automatically monitors all instances that have the specified tags.
   *
   * @public
   */
  TargetTagAssociations?: CustomTagKeyValueRequestPair[] | undefined;

  /**
   * The IDs of the instances to associate with the application status check.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If you retry a request with the same token, the service ignores the request but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a successful application status check association.
 *
 * @public
 */
export interface SuccessfulAssociationResponseObject {
  /**
   * The ID of the application status check.
   *
   * @public
   */
  ApplicationStatusCheckId?: string | undefined;

  /**
   * The type of association. Valid values: `EC2TAG` and `INSTANCE_ID`.
   *
   * @public
   */
  AssociationType?: string | undefined;

  /**
   * The association value. For `EC2TAG`, the value is formatted as `key=value`. For `INSTANCE_ID`, the value is the instance ID.
   *
   * @public
   */
  AssociationValue?: string | undefined;
}

/**
 * Describes an unsuccessful application status check association.
 *
 * @public
 */
export interface UnsuccessfulAssociationResponseObject {
  /**
   * The ID of the application status check.
   *
   * @public
   */
  ApplicationStatusCheckId?: string | undefined;

  /**
   * The type of association. Valid values: `EC2TAG` and `INSTANCE_ID`.
   *
   * @public
   */
  AssociationType?: string | undefined;

  /**
   * The association value. For `EC2TAG`, the value is formatted as `key=value`. For `INSTANCE_ID`, the value is the instance ID.
   *
   * @public
   */
  AssociationValue?: string | undefined;

  /**
   * The reason the association failed.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationStatusCheckResult {
  /**
   * The associations that were successfully created.
   *
   * @public
   */
  SuccessfulResults?: SuccessfulAssociationResponseObject[] | undefined;

  /**
   * The associations that failed to be created.
   *
   * @public
   */
  UnsuccessfulResults?: UnsuccessfulAssociationResponseObject[] | undefined;
}

/**
 * @public
 */
export interface AssociateCapacityReservationBillingOwnerRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * The ID of the consumer account to which to assign billing.
   *
   * @public
   */
  UnusedReservationBillingOwnerId: string | undefined;
}

/**
 * @public
 */
export interface AssociateCapacityReservationBillingOwnerResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateClientVpnTargetNetworkRequest {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * The ID of the subnet to associate with the Client VPN endpoint. Required for VPC-based endpoints. For Transit Gateway-based endpoints, use `AvailabilityZone` or `AvailabilityZoneId` instead.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The Availability Zone name for the Transit Gateway association. Required if when associating an Availability Zone with a Client VPN endpoint that uses a Transit Gateway. You cannot specify both `SubnetId` and `AvailabilityZone`.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The Availability Zone ID for the Transit Gateway association. Required if when associating an Availability Zone with a Client VPN endpoint that uses a Transit Gateway. You cannot specify both `AvailabilityZone` and `AvailabilityZoneId`.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * Describes the state of a target network association.
 *
 * @public
 */
export interface AssociationStatus {
  /**
   * The state of the target network association.
   *
   * @public
   */
  Code?: AssociationStatusCode | undefined;

  /**
   * A message about the status of the target network association, if applicable.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface AssociateClientVpnTargetNetworkResult {
  /**
   * The unique ID of the target network association.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The current state of the target network association.
   *
   * @public
   */
  Status?: AssociationStatus | undefined;
}

/**
 * @public
 */
export interface AssociateDhcpOptionsRequest {
  /**
   * The ID of the DHCP options set, or `default` to associate no DHCP options with the VPC.
   *
   * @public
   */
  DhcpOptionsId: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateEnclaveCertificateIamRoleRequest {
  /**
   * The ARN of the ACM certificate with which to associate the IAM role.
   *
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * The ARN of the IAM role to associate with the ACM certificate. You can associate up to 16 IAM roles with an ACM certificate.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateEnclaveCertificateIamRoleResult {
  /**
   * The name of the Amazon S3 bucket to which the certificate was uploaded.
   *
   * @public
   */
  CertificateS3BucketName?: string | undefined;

  /**
   * The Amazon S3 object key where the certificate, certificate chain, and encrypted private key bundle are stored. The object key is formatted as follows: `role_arn`/`certificate_arn`.
   *
   * @public
   */
  CertificateS3ObjectKey?: string | undefined;

  /**
   * The ID of the KMS key used to encrypt the private key of the certificate.
   *
   * @public
   */
  EncryptionKmsKeyId?: string | undefined;
}

/**
 * Describes an IAM instance profile.
 *
 * @public
 */
export interface IamInstanceProfileSpecification {
  /**
   * The Amazon Resource Name (ARN) of the instance profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the instance profile.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface AssociateIamInstanceProfileRequest {
  /**
   * The IAM instance profile.
   *
   * @public
   */
  IamInstanceProfile: IamInstanceProfileSpecification | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * Describes an IAM instance profile.
 *
 * @public
 */
export interface IamInstanceProfile {
  /**
   * The Amazon Resource Name (ARN) of the instance profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the instance profile.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Describes an association between an IAM instance profile and an instance.
 *
 * @public
 */
export interface IamInstanceProfileAssociation {
  /**
   * The ID of the association.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The IAM instance profile.
   *
   * @public
   */
  IamInstanceProfile?: IamInstanceProfile | undefined;

  /**
   * The state of the association.
   *
   * @public
   */
  State?: IamInstanceProfileAssociationState | undefined;

  /**
   * The time the IAM instance profile was associated with the instance.
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateIamInstanceProfileResult {
  /**
   * Information about the IAM instance profile association.
   *
   * @public
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation | undefined;
}

/**
 * One or more targets associated with the specified event window. Only one *type* of target (instance ID, instance tag, or Dedicated Host ID) can be associated with an event window.
 *
 * @public
 */
export interface InstanceEventWindowAssociationRequest {
  /**
   * The IDs of the instances to associate with the event window. If the instance is on a Dedicated Host, you can't specify the Instance ID parameter; you must use the Dedicated Host ID parameter.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The instance tags to associate with the event window. Any instances associated with the tags will be associated with the event window.
   *
   * Note that while you can't create tag keys beginning with `aws:`, you can specify existing Amazon Web Services managed tag keys (with the `aws:` prefix) when specifying them as targets to associate with the event window.
   *
   * @public
   */
  InstanceTags?: Tag[] | undefined;

  /**
   * The IDs of the Dedicated Hosts to associate with the event window.
   *
   * @public
   */
  DedicatedHostIds?: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateInstanceEventWindowRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the event window.
   *
   * @public
   */
  InstanceEventWindowId: string | undefined;

  /**
   * One or more targets associated with the specified event window.
   *
   * @public
   */
  AssociationTarget: InstanceEventWindowAssociationRequest | undefined;
}

/**
 * One or more targets associated with the event window.
 *
 * @public
 */
export interface InstanceEventWindowAssociationTarget {
  /**
   * The IDs of the instances associated with the event window.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The instance tags associated with the event window. Any instances associated with the tags will be associated with the event window.
   *
   * Note that while you can't create tag keys beginning with `aws:`, you can specify existing Amazon Web Services managed tag keys (with the `aws:` prefix) when specifying them as targets to associate with the event window.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The IDs of the Dedicated Hosts associated with the event window.
   *
   * @public
   */
  DedicatedHostIds?: string[] | undefined;
}

/**
 * The start day and time and the end day and time of the time range, in UTC.
 *
 * @public
 */
export interface InstanceEventWindowTimeRange {
  /**
   * The day on which the time range begins.
   *
   * @public
   */
  StartWeekDay?: WeekDay | undefined;

  /**
   * The hour when the time range begins.
   *
   * @public
   */
  StartHour?: number | undefined;

  /**
   * The day on which the time range ends.
   *
   * @public
   */
  EndWeekDay?: WeekDay | undefined;

  /**
   * The hour when the time range ends.
   *
   * @public
   */
  EndHour?: number | undefined;
}

/**
 * The event window.
 *
 * @public
 */
export interface InstanceEventWindow {
  /**
   * The ID of the event window.
   *
   * @public
   */
  InstanceEventWindowId?: string | undefined;

  /**
   * One or more time ranges defined for the event window.
   *
   * @public
   */
  TimeRanges?: InstanceEventWindowTimeRange[] | undefined;

  /**
   * The name of the event window.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The cron expression defined for the event window.
   *
   * @public
   */
  CronExpression?: string | undefined;

  /**
   * One or more targets associated with the event window.
   *
   * @public
   */
  AssociationTarget?: InstanceEventWindowAssociationTarget | undefined;

  /**
   * The current state of the event window.
   *
   * @public
   */
  State?: InstanceEventWindowState | undefined;

  /**
   * The instance tags associated with the event window.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AssociateInstanceEventWindowResult {
  /**
   * Information about the event window.
   *
   * @public
   */
  InstanceEventWindow?: InstanceEventWindow | undefined;
}

/**
 * @public
 */
export interface AssociateIpamByoasnRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A public 2-byte or 4-byte ASN.
   *
   * @public
   */
  Asn: string | undefined;

  /**
   * The BYOIP CIDR you want to associate with an ASN.
   *
   * @public
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface AssociateIpamByoasnResult {
  /**
   * The ASN and BYOIP CIDR association.
   *
   * @public
   */
  AsnAssociation?: AsnAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateIpamResourceDiscoveryRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * An IPAM ID.
   *
   * @public
   */
  IpamId: string | undefined;

  /**
   * A resource discovery ID.
   *
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * Tag specifications.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A client token.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * An IPAM resource discovery association. An associated resource discovery is a resource discovery that has been associated with an IPAM. IPAM aggregates the resource CIDRs discovered by the associated resource discovery.
 *
 * @public
 */
export interface IpamResourceDiscoveryAssociation {
  /**
   * The Amazon Web Services account ID of the resource discovery owner.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The resource discovery association ID.
   *
   * @public
   */
  IpamResourceDiscoveryAssociationId?: string | undefined;

  /**
   * The resource discovery association Amazon Resource Name (ARN).
   *
   * @public
   */
  IpamResourceDiscoveryAssociationArn?: string | undefined;

  /**
   * The resource discovery ID.
   *
   * @public
   */
  IpamResourceDiscoveryId?: string | undefined;

  /**
   * The IPAM ID.
   *
   * @public
   */
  IpamId?: string | undefined;

  /**
   * The IPAM ARN.
   *
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * The IPAM home Region.
   *
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * Defines if the resource discovery is the default. When you create an IPAM, a default resource discovery is created for your IPAM and it's associated with your IPAM.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The resource discovery status.
   *
   * - `active` - Connection or permissions required to read the results of the resource discovery are intact.
   * - `not-found` - Connection or permissions required to read the results of the resource discovery are broken. This may happen if the owner of the resource discovery stopped sharing it or deleted the resource discovery. Verify the resource discovery still exists and the Amazon Web Services RAM resource share is still intact.
   *
   * @public
   */
  ResourceDiscoveryStatus?: IpamAssociatedResourceDiscoveryStatus | undefined;

  /**
   * The lifecycle state of the association when you associate or disassociate a resource discovery.
   *
   * - `associate-in-progress` - Resource discovery is being associated.
   * - `associate-complete` - Resource discovery association is complete.
   * - `associate-failed` - Resource discovery association has failed.
   * - `disassociate-in-progress` - Resource discovery is being disassociated.
   * - `disassociate-complete` - Resource discovery disassociation is complete.
   * - `disassociate-failed` - Resource discovery disassociation has failed.
   * - `isolate-in-progress` - Amazon Web Services account that created the resource discovery association has been removed and the resource discovery association is being isolated.
   * - `isolate-complete` - Resource discovery isolation is complete.
   * - `restore-in-progress` - Resource discovery is being restored.
   *
   * @public
   */
  State?: IpamResourceDiscoveryAssociationState | undefined;

  /**
   * A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AssociateIpamResourceDiscoveryResult {
  /**
   * A resource discovery association. An associated resource discovery is a resource discovery that has been associated with an IPAM.
   *
   * @public
   */
  IpamResourceDiscoveryAssociation?: IpamResourceDiscoveryAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateNatGatewayAddressRequest {
  /**
   * The ID of the NAT gateway.
   *
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * The allocation IDs of EIPs that you want to associate with your NAT gateway.
   *
   * @public
   */
  AllocationIds: string[] | undefined;

  /**
   * The private IPv4 addresses that you want to assign to the NAT gateway.
   *
   * @public
   */
  PrivateIpAddresses?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * For regional NAT gateways only: The Availability Zone where you want to associate an Elastic IP address (EIP). The regional NAT gateway uses a separate EIP in each AZ to handle outbound NAT traffic from that AZ.
   *
   * A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * For regional NAT gateways only: The ID of the Availability Zone where you want to associate an Elastic IP address (EIP). The regional NAT gateway uses a separate EIP in each AZ to handle outbound NAT traffic from that AZ. Use this instead of AvailabilityZone for consistent identification of AZs across Amazon Web Services Regions.
   *
   * A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateNatGatewayAddressResult {
  /**
   * The ID of the NAT gateway.
   *
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * The IP addresses.
   *
   * @public
   */
  NatGatewayAddresses?: NatGatewayAddress[] | undefined;
}

/**
 * @public
 */
export interface AssociateRouteServerRequest {
  /**
   * The unique identifier for the route server to be associated.
   *
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * The ID of the VPC to associate with the route server.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the association between a route server and a VPC.
 *
 * A route server association is the connection established between a route server and a VPC.
 *
 * @public
 */
export interface RouteServerAssociation {
  /**
   * The ID of the associated route server.
   *
   * @public
   */
  RouteServerId?: string | undefined;

  /**
   * The ID of the associated VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The current state of the association.
   *
   * @public
   */
  State?: RouteServerAssociationState | undefined;
}

/**
 * @public
 */
export interface AssociateRouteServerResult {
  /**
   * Information about the association between the route server and the VPC.
   *
   * @public
   */
  RouteServerAssociation?: RouteServerAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateRouteTableRequest {
  /**
   * The ID of the internet gateway or virtual private gateway.
   *
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * The ID of a public IPv4 pool. A public IPv4 pool is a pool of IPv4 addresses that you've brought to Amazon Web Services with BYOIP.
   *
   * @public
   */
  PublicIpv4Pool?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the route table.
   *
   * @public
   */
  RouteTableId: string | undefined;
}

/**
 * Describes the state of an association between a route table and a subnet or gateway.
 *
 * @public
 */
export interface RouteTableAssociationState {
  /**
   * The state of the association.
   *
   * @public
   */
  State?: RouteTableAssociationStateCode | undefined;

  /**
   * The status message, if applicable.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface AssociateRouteTableResult {
  /**
   * The route table association ID. This ID is required for disassociating the route table.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The state of the association.
   *
   * @public
   */
  AssociationState?: RouteTableAssociationState | undefined;
}

/**
 * @public
 */
export interface AssociateSecurityGroupVpcRequest {
  /**
   * A security group ID.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * A VPC ID.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateSecurityGroupVpcResult {
  /**
   * The state of the association.
   *
   * @public
   */
  State?: SecurityGroupVpcAssociationState | undefined;
}

/**
 * @public
 */
export interface AssociateSubnetCidrBlockRequest {
  /**
   * An IPv6 IPAM pool ID.
   *
   * @public
   */
  Ipv6IpamPoolId?: string | undefined;

  /**
   * An IPv6 netmask length.
   *
   * @public
   */
  Ipv6NetmaskLength?: number | undefined;

  /**
   * The ID of your subnet.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * The IPv6 CIDR block for your subnet.
   *
   * @public
   */
  Ipv6CidrBlock?: string | undefined;
}

/**
 * Describes the state of a CIDR block.
 *
 * @public
 */
export interface SubnetCidrBlockState {
  /**
   * The state of a CIDR block.
   *
   * @public
   */
  State?: SubnetCidrBlockStateCode | undefined;

  /**
   * A message about the status of the CIDR block, if applicable.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * Describes an association between a subnet and an IPv6 CIDR block.
 *
 * @public
 */
export interface SubnetIpv6CidrBlockAssociation {
  /**
   * The ID of the association.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The IPv6 CIDR block.
   *
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * The state of the CIDR block.
   *
   * @public
   */
  Ipv6CidrBlockState?: SubnetCidrBlockState | undefined;

  /**
   * Public IPv6 addresses are those advertised on the internet from Amazon Web Services. Private IP addresses are not and cannot be advertised on the internet from Amazon Web Services.
   *
   * @public
   */
  Ipv6AddressAttribute?: Ipv6AddressAttribute | undefined;

  /**
   * The source that allocated the IP address space. `byoip` or `amazon` indicates public IP address space allocated by Amazon or space that you have allocated with Bring your own IP (BYOIP). `none` indicates private space.
   *
   * @public
   */
  IpSource?: IpSource | undefined;
}

/**
 * @public
 */
export interface AssociateSubnetCidrBlockResult {
  /**
   * Information about the IPv6 association.
   *
   * @public
   */
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation | undefined;

  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateTransitGatewayMulticastDomainRequest {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * The ID of the transit gateway attachment to associate with the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * The IDs of the subnets to associate with the transit gateway multicast domain.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateTransitGatewayMulticastDomainResult {
  /**
   * Information about the transit gateway multicast domain associations.
   *
   * @public
   */
  Associations?: TransitGatewayMulticastDomainAssociations | undefined;
}

/**
 * @public
 */
export interface AssociateTransitGatewayPolicyTableRequest {
  /**
   * The ID of the transit gateway policy table to associate with the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * The ID of the transit gateway attachment to associate with the policy table.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a transit gateway policy table association.
 *
 * @public
 */
export interface TransitGatewayPolicyTableAssociation {
  /**
   * The ID of the transit gateway policy table.
   *
   * @public
   */
  TransitGatewayPolicyTableId?: string | undefined;

  /**
   * The ID of the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The resource ID of the transit gateway attachment.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The resource type for the transit gateway policy table association.
   *
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * The state of the transit gateway policy table association.
   *
   * @public
   */
  State?: TransitGatewayAssociationState | undefined;
}

/**
 * @public
 */
export interface AssociateTransitGatewayPolicyTableResult {
  /**
   * Describes the association of a transit gateway and a transit gateway policy table.
   *
   * @public
   */
  Association?: TransitGatewayPolicyTableAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateTransitGatewayRouteTableRequest {
  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes an association between a resource attachment and a transit gateway route table.
 *
 * @public
 */
export interface TransitGatewayAssociation {
  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The resource type. Note that the `tgw-peering` resource type has been deprecated.
   *
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * The state of the association.
   *
   * @public
   */
  State?: TransitGatewayAssociationState | undefined;
}

/**
 * @public
 */
export interface AssociateTransitGatewayRouteTableResult {
  /**
   * The ID of the association.
   *
   * @public
   */
  Association?: TransitGatewayAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateTrunkInterfaceRequest {
  /**
   * The ID of the branch network interface.
   *
   * @public
   */
  BranchInterfaceId: string | undefined;

  /**
   * The ID of the trunk network interface.
   *
   * @public
   */
  TrunkInterfaceId: string | undefined;

  /**
   * The ID of the VLAN. This applies to the VLAN protocol.
   *
   * @public
   */
  VlanId?: number | undefined;

  /**
   * The application key. This applies to the GRE protocol.
   *
   * @public
   */
  GreKey?: number | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about an association between a branch network interface with a trunk network interface.
 *
 * @public
 */
export interface TrunkInterfaceAssociation {
  /**
   * The ID of the association.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The ID of the branch network interface.
   *
   * @public
   */
  BranchInterfaceId?: string | undefined;

  /**
   * The ID of the trunk network interface.
   *
   * @public
   */
  TrunkInterfaceId?: string | undefined;

  /**
   * The interface protocol. Valid values are `VLAN` and `GRE`.
   *
   * @public
   */
  InterfaceProtocol?: InterfaceProtocolType | undefined;

  /**
   * The ID of the VLAN when you use the VLAN protocol.
   *
   * @public
   */
  VlanId?: number | undefined;

  /**
   * The application key when you use the GRE protocol.
   *
   * @public
   */
  GreKey?: number | undefined;

  /**
   * The tags for the trunk interface association.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AssociateTrunkInterfaceResult {
  /**
   * Information about the association between the trunk network interface and branch network interface.
   *
   * @public
   */
  InterfaceAssociation?: TrunkInterfaceAssociation | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateVpcCidrBlockRequest {
  /**
   * An IPv4 CIDR block to associate with the VPC.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * The name of the location from which we advertise the IPV6 CIDR block. Use this parameter to limit the CIDR block to this location.
   *
   * You must set `AmazonProvidedIpv6CidrBlock` to `true` to use this parameter.
   *
   * You can have one IPv6 CIDR block association per network border group.
   *
   * @public
   */
  Ipv6CidrBlockNetworkBorderGroup?: string | undefined;

  /**
   * The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.
   *
   * @public
   */
  Ipv6Pool?: string | undefined;

  /**
   * An IPv6 CIDR block from the IPv6 address pool. You must also specify `Ipv6Pool` in the request.
   *
   * To let Amazon choose the IPv6 CIDR block for you, omit this parameter.
   *
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * Associate a CIDR allocated from an IPv4 IPAM pool to a VPC. For more information about Amazon VPC IP Address Manager (IPAM), see [What is IPAM?](https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  Ipv4IpamPoolId?: string | undefined;

  /**
   * The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see [What is IPAM?](https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  Ipv4NetmaskLength?: number | undefined;

  /**
   * Associates a CIDR allocated from an IPv6 IPAM pool to a VPC. For more information about Amazon VPC IP Address Manager (IPAM), see [What is IPAM?](https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  Ipv6IpamPoolId?: string | undefined;

  /**
   * The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see [What is IPAM?](https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  Ipv6NetmaskLength?: number | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IPv6 addresses or the size of the CIDR block.
   *
   * @public
   */
  AmazonProvidedIpv6CidrBlock?: boolean | undefined;
}

/**
 * Describes the state of a CIDR block.
 *
 * @public
 */
export interface VpcCidrBlockState {
  /**
   * The state of the CIDR block.
   *
   * @public
   */
  State?: VpcCidrBlockStateCode | undefined;

  /**
   * A message about the status of the CIDR block, if applicable.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * Describes an IPv4 CIDR block associated with a VPC.
 *
 * @public
 */
export interface VpcCidrBlockAssociation {
  /**
   * The association ID for the IPv4 CIDR block.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The IPv4 CIDR block.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * Information about the state of the CIDR block.
   *
   * @public
   */
  CidrBlockState?: VpcCidrBlockState | undefined;
}

/**
 * Describes an IPv6 CIDR block associated with a VPC.
 *
 * @public
 */
export interface VpcIpv6CidrBlockAssociation {
  /**
   * The association ID for the IPv6 CIDR block.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The IPv6 CIDR block.
   *
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * Information about the state of the CIDR block.
   *
   * @public
   */
  Ipv6CidrBlockState?: VpcCidrBlockState | undefined;

  /**
   * The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises IP addresses, for example, `us-east-1-wl1-bos-wlz-1`.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * The ID of the IPv6 address pool from which the IPv6 CIDR block is allocated.
   *
   * @public
   */
  Ipv6Pool?: string | undefined;

  /**
   * Public IPv6 addresses are those advertised on the internet from Amazon Web Services. Private IP addresses are not and cannot be advertised on the internet from Amazon Web Services.
   *
   * @public
   */
  Ipv6AddressAttribute?: Ipv6AddressAttribute | undefined;

  /**
   * The source that allocated the IP address space. `byoip` or `amazon` indicates public IP address space allocated by Amazon or space that you have allocated with Bring your own IP (BYOIP). `none` indicates private space.
   *
   * @public
   */
  IpSource?: IpSource | undefined;
}

/**
 * @public
 */
export interface AssociateVpcCidrBlockResult {
  /**
   * Information about the IPv6 CIDR block association.
   *
   * @public
   */
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation | undefined;

  /**
   * Information about the IPv4 CIDR block association.
   *
   * @public
   */
  CidrBlockAssociation?: VpcCidrBlockAssociation | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface AttachClassicLinkVpcRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the EC2-Classic instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The ID of the ClassicLink-enabled VPC.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The IDs of the security groups. You cannot specify security groups from a different VPC.
   *
   * @public
   */
  Groups: string[] | undefined;
}

/**
 * @public
 */
export interface AttachClassicLinkVpcResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface AttachImageWatermarkRequest {
  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * The name for the watermark. Combined with the caller's account ID to form the `WatermarkKey` (`accountId:watermarkName`).
   *
   * Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)
   *
   * @public
   */
  WatermarkName: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AttachImageWatermarkResult {
  /**
   * The watermark identifier, in `accountId:watermarkName` format (for example, `123456789012:approvedAmi`).
   *
   * @public
   */
  WatermarkKey?: string | undefined;
}

/**
 * @public
 */
export interface AttachInternetGatewayRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the internet gateway.
   *
   * @public
   */
  InternetGatewayId: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;
}

/**
 * ENA Express is compatible with both TCP and UDP transport protocols. When it's enabled, TCP traffic automatically uses it. However, some UDP-based applications are designed to handle network packets that are out of order, without a need for retransmission, such as live video broadcasting or other near-real-time applications. For UDP traffic, you can specify whether to use ENA Express, based on your application environment needs.
 *
 * @public
 */
export interface EnaSrdUdpSpecification {
  /**
   * Indicates whether UDP traffic to and from the instance uses ENA Express. To specify this setting, you must first enable ENA Express.
   *
   * @public
   */
  EnaSrdUdpEnabled?: boolean | undefined;
}

/**
 * ENA Express uses Amazon Web Services Scalable Reliable Datagram (SRD) technology to increase the maximum bandwidth used per stream and minimize tail latency of network traffic between EC2 instances. With ENA Express, you can communicate between two EC2 instances in the same subnet within the same account, or in different accounts. Both sending and receiving instances must have ENA Express enabled.
 *
 * To improve the reliability of network packet delivery, ENA Express reorders network packets on the receiving end by default. However, some UDP-based applications are designed to handle network packets that are out of order to reduce the overhead for packet delivery at the network layer. When ENA Express is enabled, you can specify whether UDP network traffic uses it.
 *
 * @public
 */
export interface EnaSrdSpecification {
  /**
   * Indicates whether ENA Express is enabled for the network interface.
   *
   * @public
   */
  EnaSrdEnabled?: boolean | undefined;

  /**
   * Configures ENA Express for UDP network traffic.
   *
   * @public
   */
  EnaSrdUdpSpecification?: EnaSrdUdpSpecification | undefined;
}

/**
 * Contains the parameters for AttachNetworkInterface.
 *
 * @public
 */
export interface AttachNetworkInterfaceRequest {
  /**
   * The index of the network card. Some instance types support multiple network cards. The primary network interface must be assigned to network card index 0. The default is network card index 0.
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * Configures ENA Express for the network interface that this action attaches to the instance.
   *
   * @public
   */
  EnaSrdSpecification?: EnaSrdSpecification | undefined;

  /**
   * The number of ENA queues to be created with the instance.
   *
   * @public
   */
  EnaQueueCount?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The index of the device for the network interface attachment.
   *
   * @public
   */
  DeviceIndex: number | undefined;
}

/**
 * Contains the output of AttachNetworkInterface.
 *
 * @public
 */
export interface AttachNetworkInterfaceResult {
  /**
   * The ID of the network interface attachment.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * The index of the network card.
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;
}

/**
 * @public
 */
export interface AttachVerifiedAccessTrustProviderRequest {
  /**
   * The ID of the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * The ID of the Verified Access trust provider.
   *
   * @public
   */
  VerifiedAccessTrustProviderId: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a custom subdomain for a network CIDR endpoint for Verified Access.
 *
 * @public
 */
export interface VerifiedAccessInstanceCustomSubDomain {
  /**
   * The subdomain.
   *
   * @public
   */
  SubDomain?: string | undefined;

  /**
   * The name servers.
   *
   * @public
   */
  Nameservers?: string[] | undefined;
}

/**
 * Condensed information about a trust provider.
 *
 * @public
 */
export interface VerifiedAccessTrustProviderCondensed {
  /**
   * The ID of the trust provider.
   *
   * @public
   */
  VerifiedAccessTrustProviderId?: string | undefined;

  /**
   * The description of trust provider.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of trust provider (user- or device-based).
   *
   * @public
   */
  TrustProviderType?: TrustProviderType | undefined;

  /**
   * The type of user-based trust provider.
   *
   * @public
   */
  UserTrustProviderType?: UserTrustProviderType | undefined;

  /**
   * The type of device-based trust provider.
   *
   * @public
   */
  DeviceTrustProviderType?: DeviceTrustProviderType | undefined;
}

/**
 * Describes a Verified Access instance.
 *
 * @public
 */
export interface VerifiedAccessInstance {
  /**
   * The ID of the Amazon Web Services Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * A description for the Amazon Web Services Verified Access instance.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The IDs of the Amazon Web Services Verified Access trust providers.
   *
   * @public
   */
  VerifiedAccessTrustProviders?: VerifiedAccessTrustProviderCondensed[] | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The last updated time.
   *
   * @public
   */
  LastUpdatedTime?: string | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Indicates whether support for Federal Information Processing Standards (FIPS) is enabled on the instance.
   *
   * @public
   */
  FipsEnabled?: boolean | undefined;

  /**
   * The custom subdomain.
   *
   * @public
   */
  CidrEndpointsCustomSubDomain?: VerifiedAccessInstanceCustomSubDomain | undefined;
}

/**
 * Describes the options for an Amazon Web Services Verified Access device-identity based trust provider.
 *
 * @public
 */
export interface DeviceOptions {
  /**
   * The ID of the tenant application with the device-identity provider.
   *
   * @public
   */
  TenantId?: string | undefined;

  /**
   * The URL Amazon Web Services Verified Access will use to verify the authenticity of the device tokens.
   *
   * @public
   */
  PublicSigningKeyUrl?: string | undefined;
}

/**
 * Describes the OpenID Connect (OIDC) options.
 *
 * @public
 */
export interface NativeApplicationOidcOptions {
  /**
   * The public signing key endpoint.
   *
   * @public
   */
  PublicSigningKeyEndpoint?: string | undefined;

  /**
   * The OIDC issuer identifier of the IdP.
   *
   * @public
   */
  Issuer?: string | undefined;

  /**
   * The authorization endpoint of the IdP.
   *
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * The token endpoint of the IdP.
   *
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * The user info endpoint of the IdP.
   *
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * The OAuth 2.0 client identifier.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The set of user claims to be requested from the IdP.
   *
   * @public
   */
  Scope?: string | undefined;
}

/**
 * Describes the options for an OpenID Connect-compatible user-identity trust provider.
 *
 * @public
 */
export interface OidcOptions {
  /**
   * The OIDC issuer.
   *
   * @public
   */
  Issuer?: string | undefined;

  /**
   * The OIDC authorization endpoint.
   *
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * The OIDC token endpoint.
   *
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * The OIDC user info endpoint.
   *
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * The client identifier.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The client secret.
   *
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * The OpenID Connect (OIDC) scope specified.
   *
   * @public
   */
  Scope?: string | undefined;
}

/**
 * The options in use for server side encryption.
 *
 * @public
 */
export interface VerifiedAccessSseSpecificationResponse {
  /**
   * Indicates whether customer managed KMS keys are in use for server side encryption.
   *
   * Valid values: `True` | `False`
   *
   * @public
   */
  CustomerManagedKeyEnabled?: boolean | undefined;

  /**
   * The ARN of the KMS key.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * Describes a Verified Access trust provider.
 *
 * @public
 */
export interface VerifiedAccessTrustProvider {
  /**
   * The ID of the Amazon Web Services Verified Access trust provider.
   *
   * @public
   */
  VerifiedAccessTrustProviderId?: string | undefined;

  /**
   * A description for the Amazon Web Services Verified Access trust provider.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of Verified Access trust provider.
   *
   * @public
   */
  TrustProviderType?: TrustProviderType | undefined;

  /**
   * The type of user-based trust provider.
   *
   * @public
   */
  UserTrustProviderType?: UserTrustProviderType | undefined;

  /**
   * The type of device-based trust provider.
   *
   * @public
   */
  DeviceTrustProviderType?: DeviceTrustProviderType | undefined;

  /**
   * The options for an OpenID Connect-compatible user-identity trust provider.
   *
   * @public
   */
  OidcOptions?: OidcOptions | undefined;

  /**
   * The options for device-identity trust provider.
   *
   * @public
   */
  DeviceOptions?: DeviceOptions | undefined;

  /**
   * The identifier to be used when working with policy rules.
   *
   * @public
   */
  PolicyReferenceName?: string | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The last updated time.
   *
   * @public
   */
  LastUpdatedTime?: string | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The options in use for server side encryption.
   *
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;

  /**
   * The OpenID Connect (OIDC) options.
   *
   * @public
   */
  NativeApplicationOidcOptions?: NativeApplicationOidcOptions | undefined;
}

/**
 * @public
 */
export interface AttachVerifiedAccessTrustProviderResult {
  /**
   * Details about the Verified Access trust provider.
   *
   * @public
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider | undefined;

  /**
   * Details about the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstance?: VerifiedAccessInstance | undefined;
}

/**
 * @public
 */
export interface AttachVolumeRequest {
  /**
   * The device name (for example, `/dev/sdh` or `xvdh`).
   *
   * @public
   */
  Device: string | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The ID of the EBS volume. The volume and instance must be within the same Availability Zone.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * The index of the EBS card. Some instance types support multiple EBS cards. The default EBS card index is 0.
   *
   * @public
   */
  EbsCardIndex?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes volume attachment details.
 *
 * @public
 */
export interface VolumeAttachment {
  /**
   * Indicates whether the EBS volume is deleted on instance termination.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The ARN of the Amazon Web Services-managed resource to which the volume is attached.
   *
   * @public
   */
  AssociatedResource?: string | undefined;

  /**
   * The service principal of the Amazon Web Services service that owns the underlying resource to which the volume is attached.
   *
   * This parameter is returned only for volumes that are attached to Amazon Web Services-managed resources.
   *
   * @public
   */
  InstanceOwningService?: string | undefined;

  /**
   * The index of the EBS card. Some instance types support multiple EBS cards. The default EBS card index is 0.
   *
   * @public
   */
  EbsCardIndex?: number | undefined;

  /**
   * The ID of the volume.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The ID of the instance.
   *
   * If the volume is attached to an Amazon Web Services-managed resource, this parameter returns `null`.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The device name.
   *
   * If the volume is attached to an Amazon Web Services-managed resource, this parameter returns `null`.
   *
   * @public
   */
  Device?: string | undefined;

  /**
   * The attachment state of the volume.
   *
   * @public
   */
  State?: VolumeAttachmentState | undefined;

  /**
   * The time stamp when the attachment initiated.
   *
   * @public
   */
  AttachTime?: Date | undefined;
}

/**
 * Contains the parameters for AttachVpnGateway.
 *
 * @public
 */
export interface AttachVpnGatewayRequest {
  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The ID of the virtual private gateway.
   *
   * @public
   */
  VpnGatewayId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes an attachment between a virtual private gateway and a VPC.
 *
 * @public
 */
export interface VpcAttachment {
  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The current state of the attachment.
   *
   * @public
   */
  State?: AttachmentStatus | undefined;
}

/**
 * Contains the output of AttachVpnGateway.
 *
 * @public
 */
export interface AttachVpnGatewayResult {
  /**
   * Information about the attachment.
   *
   * @public
   */
  VpcAttachment?: VpcAttachment | undefined;
}

/**
 * @public
 */
export interface AuthorizeClientVpnIngressRequest {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * The IPv4 address range, in CIDR notation, of the network for which access is being authorized.
   *
   * @public
   */
  TargetNetworkCidr: string | undefined;

  /**
   * The ID of the group to grant access to, for example, the Active Directory group or identity provider (IdP) group. Required if `AuthorizeAllGroups` is `false` or not specified.
   *
   * @public
   */
  AccessGroupId?: string | undefined;

  /**
   * Indicates whether to grant access to all clients. Specify `true` to grant all clients who successfully establish a VPN connection access to the network. Must be set to `true` if `AccessGroupId` is not specified.
   *
   * @public
   */
  AuthorizeAllGroups?: boolean | undefined;

  /**
   * A brief description of the authorization rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the state of an authorization rule.
 *
 * @public
 */
export interface ClientVpnAuthorizationRuleStatus {
  /**
   * The state of the authorization rule.
   *
   * @public
   */
  Code?: ClientVpnAuthorizationRuleStatusCode | undefined;

  /**
   * A message about the status of the authorization rule, if applicable.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface AuthorizeClientVpnIngressResult {
  /**
   * The current state of the authorization rule.
   *
   * @public
   */
  Status?: ClientVpnAuthorizationRuleStatus | undefined;
}

/**
 * Describes an IPv4 address range.
 *
 * @public
 */
export interface IpRange {
  /**
   * A description for the security group rule that references this IPv4 address range.
   *
   * Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;\{\}!$*
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The IPv4 address range. You can either specify a CIDR block or a source security group, not both. To specify a single IPv4 address, use the /32 prefix length.
   *
   * > **Note:** Amazon Web Services [canonicalizes](https://en.wikipedia.org/wiki/Canonicalization) IPv4 and IPv6 CIDRs. For example, if you specify 100.68.0.18/18 for the CIDR block, Amazon Web Services canonicalizes the CIDR block to 100.68.0.0/18. Any subsequent DescribeSecurityGroups and DescribeSecurityGroupRules calls will return the canonicalized form of the CIDR block. Additionally, if you attempt to add another rule with the non-canonical form of the CIDR (such as 100.68.0.18/18) and there is already a rule for the canonicalized form of the CIDR block (such as 100.68.0.0/18), the API throws an duplicate rule error.
   *
   * @public
   */
  CidrIp?: string | undefined;
}

/**
 * Describes an IPv6 address range.
 *
 * @public
 */
export interface Ipv6Range {
  /**
   * A description for the security group rule that references this IPv6 address range.
   *
   * Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;\{\}!$*
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The IPv6 address range. You can either specify a CIDR block or a source security group, not both. To specify a single IPv6 address, use the /128 prefix length.
   *
   * > **Note:** Amazon Web Services [canonicalizes](https://en.wikipedia.org/wiki/Canonicalization) IPv4 and IPv6 CIDRs. For example, if you specify 100.68.0.18/18 for the CIDR block, Amazon Web Services canonicalizes the CIDR block to 100.68.0.0/18. Any subsequent DescribeSecurityGroups and DescribeSecurityGroupRules calls will return the canonicalized form of the CIDR block. Additionally, if you attempt to add another rule with the non-canonical form of the CIDR (such as 100.68.0.18/18) and there is already a rule for the canonicalized form of the CIDR block (such as 100.68.0.0/18), the API throws an duplicate rule error.
   *
   * @public
   */
  CidrIpv6?: string | undefined;
}

/**
 * Describes a prefix list ID.
 *
 * @public
 */
export interface PrefixListId {
  /**
   * A description for the security group rule that references this prefix list ID.
   *
   * Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=;\{\}!$*
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the prefix.
   *
   * @public
   */
  PrefixListId?: string | undefined;
}

/**
 * Describes a security group and Amazon Web Services account ID pair.
 *
 * @public
 */
export interface UserIdGroupPair {
  /**
   * A description for the security group rule that references this user ID group pair.
   *
   * Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=;\{\}!$*
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of an Amazon Web Services account.
   *
   * For a referenced security group in another VPC, the account ID of the referenced security group is returned in the response. If the referenced security group is deleted, this value is not returned.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * [Default VPC] The name of the security group. For a security group in a nondefault VPC, use the security group ID.
   *
   * For a referenced security group in another VPC, this value is not returned if the referenced security group is deleted.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The ID of the VPC for the referenced security group, if applicable.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ID of the VPC peering connection, if applicable.
   *
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;

  /**
   * The status of a VPC peering connection, if applicable.
   *
   * @public
   */
  PeeringStatus?: string | undefined;
}

/**
 * Describes the permissions for a security group rule.
 *
 * @public
 */
export interface IpPermission {
  /**
   * The IP protocol name (`tcp`, `udp`, `icmp`, `icmpv6`) or number (see [Protocol Numbers](http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).
   *
   * Use `-1` to specify all protocols. When authorizing security group rules, specifying `-1` or a protocol number other than `tcp`, `udp`, `icmp`, or `icmpv6` allows traffic on all ports, regardless of any port range you specify. For `tcp`, `udp`, and `icmp`, you must specify a port range. For `icmpv6`, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.
   *
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * If the protocol is TCP or UDP, this is the start of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * If the protocol is TCP or UDP, this is the end of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).
   *
   * @public
   */
  ToPort?: number | undefined;

  /**
   * The security group and Amazon Web Services account ID pairs.
   *
   * @public
   */
  UserIdGroupPairs?: UserIdGroupPair[] | undefined;

  /**
   * The IPv4 address ranges.
   *
   * @public
   */
  IpRanges?: IpRange[] | undefined;

  /**
   * The IPv6 address ranges.
   *
   * @public
   */
  Ipv6Ranges?: Ipv6Range[] | undefined;

  /**
   * The prefix list IDs.
   *
   * @public
   */
  PrefixListIds?: PrefixListId[] | undefined;
}

/**
 * @public
 */
export interface AuthorizeSecurityGroupEgressRequest {
  /**
   * The tags applied to the security group rule.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * Not supported. Use IP permissions instead.
   *
   * @public
   */
  SourceSecurityGroupName?: string | undefined;

  /**
   * Not supported. Use IP permissions instead.
   *
   * @public
   */
  SourceSecurityGroupOwnerId?: string | undefined;

  /**
   * Not supported. Use IP permissions instead.
   *
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * Not supported. Use IP permissions instead.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * Not supported. Use IP permissions instead.
   *
   * @public
   */
  ToPort?: number | undefined;

  /**
   * Not supported. Use IP permissions instead.
   *
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * The permissions for the security group rules.
   *
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;
}

/**
 * Describes the security group that is referenced in the security group rule.
 *
 * @public
 */
export interface ReferencedSecurityGroup {
  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The status of a VPC peering connection, if applicable.
   *
   * @public
   */
  PeeringStatus?: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ID of the VPC peering connection (if applicable).
   *
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;
}

/**
 * Describes a security group rule.
 *
 * @public
 */
export interface SecurityGroupRule {
  /**
   * The ID of the security group rule.
   *
   * @public
   */
  SecurityGroupRuleId?: string | undefined;

  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the security group.
   *
   * @public
   */
  GroupOwnerId?: string | undefined;

  /**
   * Indicates whether the security group rule is an outbound rule.
   *
   * @public
   */
  IsEgress?: boolean | undefined;

  /**
   * The IP protocol name (`tcp`, `udp`, `icmp`, `icmpv6`) or number (see [Protocol Numbers](http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).
   *
   * Use `-1` to specify all protocols.
   *
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * If the protocol is TCP or UDP, this is the start of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * If the protocol is TCP or UDP, this is the end of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).
   *
   * @public
   */
  ToPort?: number | undefined;

  /**
   * The IPv4 CIDR range.
   *
   * @public
   */
  CidrIpv4?: string | undefined;

  /**
   * The IPv6 CIDR range.
   *
   * @public
   */
  CidrIpv6?: string | undefined;

  /**
   * The ID of the prefix list.
   *
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * Describes the security group that is referenced in the rule.
   *
   * @public
   */
  ReferencedGroupInfo?: ReferencedSecurityGroup | undefined;

  /**
   * The security group rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags applied to the security group rule.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ARN of the security group rule.
   *
   * @public
   */
  SecurityGroupRuleArn?: string | undefined;
}

/**
 * @public
 */
export interface AuthorizeSecurityGroupEgressResult {
  /**
   * Returns `true` if the request succeeds; otherwise, returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;

  /**
   * Information about the outbound (egress) security group rules that were added.
   *
   * @public
   */
  SecurityGroupRules?: SecurityGroupRule[] | undefined;
}

/**
 * @public
 */
export interface AuthorizeSecurityGroupIngressRequest {
  /**
   * The IPv4 address range, in CIDR format.
   *
   * > **Note:** Amazon Web Services [canonicalizes](https://en.wikipedia.org/wiki/Canonicalization) IPv4 and IPv6 CIDRs. For example, if you specify 100.68.0.18/18 for the CIDR block, Amazon Web Services canonicalizes the CIDR block to 100.68.0.0/18. Any subsequent DescribeSecurityGroups and DescribeSecurityGroupRules calls will return the canonicalized form of the CIDR block. Additionally, if you attempt to add another rule with the non-canonical form of the CIDR (such as 100.68.0.18/18) and there is already a rule for the canonicalized form of the CIDR block (such as 100.68.0.0/18), the API throws an duplicate rule error.
   *
   * To specify an IPv6 address range, use IP permissions instead.
   *
   * To specify multiple rules and descriptions for the rules, use IP permissions instead.
   *
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * If the protocol is TCP or UDP, this is the start of the port range. If the protocol is ICMP, this is the ICMP type or -1 (all ICMP types).
   *
   * To specify multiple rules and descriptions for the rules, use IP permissions instead.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * [Default VPC] The name of the security group. For security groups for a default VPC you can specify either the ID or the name of the security group. For security groups for a nondefault VPC, you must specify the ID of the security group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The permissions for the security group rules.
   *
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;

  /**
   * The IP protocol name (`tcp`, `udp`, `icmp`) or number (see [Protocol Numbers](http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)). To specify all protocols, use `-1`.
   *
   * To specify `icmpv6`, use IP permissions instead.
   *
   * If you specify a protocol other than one of the supported values, traffic is allowed on all ports, regardless of any ports that you specify.
   *
   * To specify multiple rules and descriptions for the rules, use IP permissions instead.
   *
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * [Default VPC] The name of the source security group.
   *
   * The rule grants full ICMP, UDP, and TCP access. To create a rule with a specific protocol and port range, specify a set of IP permissions instead.
   *
   * @public
   */
  SourceSecurityGroupName?: string | undefined;

  /**
   * The Amazon Web Services account ID for the source security group, if the source security group is in a different account.
   *
   * The rule grants full ICMP, UDP, and TCP access. To create a rule with a specific protocol and port range, use IP permissions instead.
   *
   * @public
   */
  SourceSecurityGroupOwnerId?: string | undefined;

  /**
   * If the protocol is TCP or UDP, this is the end of the port range. If the protocol is ICMP, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).
   *
   * To specify multiple rules and descriptions for the rules, use IP permissions instead.
   *
   * @public
   */
  ToPort?: number | undefined;

  /**
   * The tags applied to the security group rule.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AuthorizeSecurityGroupIngressResult {
  /**
   * Returns `true` if the request succeeds; otherwise, returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;

  /**
   * Information about the inbound (ingress) security group rules that were added.
   *
   * @public
   */
  SecurityGroupRules?: SecurityGroupRule[] | undefined;
}

/**
 * @public
 */
export interface BatchModifyIpamRoutingPolicyRegistrationsRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM internet registry association.
   *
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;

  /**
   * The batch modifications to apply, in JSON format.
   *
   * @public
   */
  DeltaJson: string | undefined;

  /**
   * Forces the batch modification even if individual changes conflict with announced routes. Default: `false`.
   *
   * @public
   */
  Force?: boolean | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the operation ignores the request, but does not return an error.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Contains information about a routing policy registration change, including the changes applied and their publication state.
 *
 * @public
 */
export interface IpamRoutingPolicyRegistrationDelta {
  /**
   * The unique identifier of the delta.
   *
   * @public
   */
  DeltaId?: string | undefined;

  /**
   * The JSON specification describing the changes applied in this delta.
   *
   * @public
   */
  DeltaJson?: string | undefined;

  /**
   * The state of the delta. Valid values: `pending` | `published` | `failed`.
   *
   * @public
   */
  State?: IpamRoutingPolicyRegistrationDeltaState | undefined;

  /**
   * A message describing the current state, including error information if the delta failed.
   *
   * @public
   */
  StateMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchModifyIpamRoutingPolicyRegistrationsResult {
  /**
   * Information about the routing policy registration delta created by this batch operation.
   *
   * @public
   */
  IpamRoutingPolicyRegistrationDelta?: IpamRoutingPolicyRegistrationDelta | undefined;
}

/**
 * Describes the storage parameters for Amazon S3 and Amazon S3 buckets for an instance store-backed AMI.
 *
 * @public
 */
export interface S3Storage {
  /**
   * The access key ID of the owner of the bucket. Before you specify a value for your access key ID, review and follow the guidance in [Best Practices for Amazon Web Services accounts](https://docs.aws.amazon.com/accounts/latest/reference/best-practices.html) in the *Account ManagementReference Guide*.
   *
   * @public
   */
  AWSAccessKeyId?: string | undefined;

  /**
   * The bucket in which to store the AMI. You can specify a bucket that you already own or a new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone else, Amazon EC2 returns an error.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The beginning of the file name of the AMI.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * An Amazon S3 upload policy that gives Amazon EC2 permission to upload items into Amazon S3 on your behalf.
   *
   * @public
   */
  UploadPolicy?: Uint8Array | undefined;

  /**
   * The signature of the JSON document.
   *
   * @public
   */
  UploadPolicySignature?: string | undefined;
}

/**
 * Describes the storage location for an instance store-backed AMI.
 *
 * @public
 */
export interface Storage {
  /**
   * An Amazon S3 storage location.
   *
   * @public
   */
  S3?: S3Storage | undefined;
}

/**
 * Contains the parameters for BundleInstance.
 *
 * @public
 */
export interface BundleInstanceRequest {
  /**
   * The ID of the instance to bundle.
   *
   * Default: None
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The bucket in which to store the AMI. You can specify a bucket that you already own or a new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone else, Amazon EC2 returns an error.
   *
   * @public
   */
  Storage: Storage | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes an error for BundleInstance.
 *
 * @public
 */
export interface BundleTaskError {
  /**
   * The error code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes a bundle task.
 *
 * @public
 */
export interface BundleTask {
  /**
   * The ID of the instance associated with this bundle task.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The ID of the bundle task.
   *
   * @public
   */
  BundleId?: string | undefined;

  /**
   * The state of the task.
   *
   * @public
   */
  State?: BundleTaskState | undefined;

  /**
   * The time this task started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time of the most recent update for the task.
   *
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * The Amazon S3 storage locations.
   *
   * @public
   */
  Storage?: Storage | undefined;

  /**
   * The level of task completion, as a percent (for example, 20%).
   *
   * @public
   */
  Progress?: string | undefined;

  /**
   * If the task fails, a description of the error.
   *
   * @public
   */
  BundleTaskError?: BundleTaskError | undefined;
}

/**
 * Contains the output of BundleInstance.
 *
 * @public
 */
export interface BundleInstanceResult {
  /**
   * Information about the bundle task.
   *
   * @public
   */
  BundleTask?: BundleTask | undefined;
}

/**
 * Contains the parameters for CancelBundleTask.
 *
 * @public
 */
export interface CancelBundleTaskRequest {
  /**
   * The ID of the bundle task.
   *
   * @public
   */
  BundleId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Contains the output of CancelBundleTask.
 *
 * @public
 */
export interface CancelBundleTaskResult {
  /**
   * Information about the bundle task.
   *
   * @public
   */
  BundleTask?: BundleTask | undefined;
}

/**
 * @public
 */
export interface CancelCapacityReservationRequest {
  /**
   * The ID of the Capacity Reservation to be cancelled.
   *
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Specifies the cancellation charge type to apply when cancelling a future-dated Capacity Reservation during its commitment duration. Possible values include `commitment-wind-down`, which continues billing for the remaining commitment duration without delivering capacity.
   *
   * @public
   */
  ApplyCancellationCharges?: ApplyCancellationCharges | undefined;

  /**
   * The ID of the cancellation quote to use for the cancellation. You can generate a cancellation quote by using the `CreateCapacityReservationCancellationQuote` action. The cancellation quote must be in an `active` state.
   *
   * @public
   */
  QuoteId?: string | undefined;
}

/**
 * @public
 */
export interface CancelCapacityReservationResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface CancelCapacityReservationFleetsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the Capacity Reservation Fleets to cancel.
   *
   * @public
   */
  CapacityReservationFleetIds: string[] | undefined;
}

/**
 * Describes a Capacity Reservation Fleet cancellation error.
 *
 * @public
 */
export interface CancelCapacityReservationFleetError {
  /**
   * The error code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes a Capacity Reservation Fleet that could not be cancelled.
 *
 * @public
 */
export interface FailedCapacityReservationFleetCancellationResult {
  /**
   * The ID of the Capacity Reservation Fleet that could not be cancelled.
   *
   * @public
   */
  CapacityReservationFleetId?: string | undefined;

  /**
   * Information about the Capacity Reservation Fleet cancellation error.
   *
   * @public
   */
  CancelCapacityReservationFleetError?: CancelCapacityReservationFleetError | undefined;
}

/**
 * Describes a Capacity Reservation Fleet that was successfully cancelled.
 *
 * @public
 */
export interface CapacityReservationFleetCancellationState {
  /**
   * The current state of the Capacity Reservation Fleet.
   *
   * @public
   */
  CurrentFleetState?: CapacityReservationFleetState | undefined;

  /**
   * The previous state of the Capacity Reservation Fleet.
   *
   * @public
   */
  PreviousFleetState?: CapacityReservationFleetState | undefined;

  /**
   * The ID of the Capacity Reservation Fleet that was successfully cancelled.
   *
   * @public
   */
  CapacityReservationFleetId?: string | undefined;
}

/**
 * @public
 */
export interface CancelCapacityReservationFleetsResult {
  /**
   * Information about the Capacity Reservation Fleets that were successfully cancelled.
   *
   * @public
   */
  SuccessfulFleetCancellations?: CapacityReservationFleetCancellationState[] | undefined;

  /**
   * Information about the Capacity Reservation Fleets that could not be cancelled.
   *
   * @public
   */
  FailedFleetCancellations?: FailedCapacityReservationFleetCancellationResult[] | undefined;
}

/**
 * @public
 */
export interface CancelConversionRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the conversion task.
   *
   * @public
   */
  ConversionTaskId: string | undefined;

  /**
   * The reason for canceling the conversion task.
   *
   * @public
   */
  ReasonMessage?: string | undefined;
}

/**
 * @public
 */
export interface CancelDeclarativePoliciesReportRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the report.
   *
   * @public
   */
  ReportId: string | undefined;
}

/**
 * @public
 */
export interface CancelDeclarativePoliciesReportResult {
  /**
   * Is `true` if the request succeeds, and an error otherwise.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface CancelExportTaskRequest {
  /**
   * The ID of the export task. This is the ID returned by the `CreateInstanceExportTask` and `ExportImage` operations.
   *
   * @public
   */
  ExportTaskId: string | undefined;
}

/**
 * @public
 */
export interface CancelImageLaunchPermissionRequest {
  /**
   * The ID of the AMI that was shared with your Amazon Web Services account.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CancelImageLaunchPermissionResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface CancelImportTaskRequest {
  /**
   * The reason for canceling the task.
   *
   * @public
   */
  CancelReason?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the import image or import snapshot task to be canceled.
   *
   * @public
   */
  ImportTaskId?: string | undefined;
}

/**
 * @public
 */
export interface CancelImportTaskResult {
  /**
   * The ID of the task being canceled.
   *
   * @public
   */
  ImportTaskId?: string | undefined;

  /**
   * The current state of the task being canceled.
   *
   * @public
   */
  PreviousState?: string | undefined;

  /**
   * The current state of the task being canceled.
   *
   * @public
   */
  State?: string | undefined;
}

/**
 * Contains the parameters for CancelReservedInstancesListing.
 *
 * @public
 */
export interface CancelReservedInstancesListingRequest {
  /**
   * The ID of the Reserved Instance listing.
   *
   * @public
   */
  ReservedInstancesListingId: string | undefined;
}

/**
 * Describes a Reserved Instance listing state.
 *
 * @public
 */
export interface InstanceCount {
  /**
   * The number of listed Reserved Instances in the state specified by the `state`.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The states of the listed Reserved Instances.
   *
   * @public
   */
  State?: ListingState | undefined;
}

/**
 * Describes the price for a Reserved Instance.
 *
 * @public
 */
export interface PriceSchedule {
  /**
   * The current price schedule, as determined by the term remaining for the Reserved Instance in the listing.
   *
   * A specific price schedule is always in effect, but only one price schedule can be active at any time. Take, for example, a Reserved Instance listing that has five months remaining in its term. When you specify price schedules for five months and two months, this means that schedule 1, covering the first three months of the remaining term, will be active during months 5, 4, and 3. Then schedule 2, covering the last two months of the term, will be active for months 2 and 1.
   *
   * @public
   */
  Active?: boolean | undefined;

  /**
   * The currency for transacting the Reserved Instance resale. At this time, the only supported currency is `USD`.
   *
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * The fixed price for the term.
   *
   * @public
   */
  Price?: number | undefined;

  /**
   * The number of months remaining in the reservation. For example, 2 is the second to the last month before the capacity reservation expires.
   *
   * @public
   */
  Term?: number | undefined;
}

/**
 * Describes a Reserved Instance listing.
 *
 * @public
 */
export interface ReservedInstancesListing {
  /**
   * A unique, case-sensitive key supplied by the client to ensure that the request is idempotent. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The time the listing was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The number of instances in this state.
   *
   * @public
   */
  InstanceCounts?: InstanceCount[] | undefined;

  /**
   * The price of the Reserved Instance listing.
   *
   * @public
   */
  PriceSchedules?: PriceSchedule[] | undefined;

  /**
   * The ID of the Reserved Instance.
   *
   * @public
   */
  ReservedInstancesId?: string | undefined;

  /**
   * The ID of the Reserved Instance listing.
   *
   * @public
   */
  ReservedInstancesListingId?: string | undefined;

  /**
   * The status of the Reserved Instance listing.
   *
   * @public
   */
  Status?: ListingStatus | undefined;

  /**
   * The reason for the current status of the Reserved Instance listing. The response can be blank.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Any tags assigned to the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The last modified timestamp of the listing.
   *
   * @public
   */
  UpdateDate?: Date | undefined;
}

/**
 * Contains the output of CancelReservedInstancesListing.
 *
 * @public
 */
export interface CancelReservedInstancesListingResult {
  /**
   * The Reserved Instance listing.
   *
   * @public
   */
  ReservedInstancesListings?: ReservedInstancesListing[] | undefined;
}

/**
 * Contains the parameters for CancelSpotFleetRequests.
 *
 * @public
 */
export interface CancelSpotFleetRequestsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the Spot Fleet requests.
   *
   * Constraint: You can specify up to 100 IDs in a single request.
   *
   * @public
   */
  SpotFleetRequestIds: string[] | undefined;

  /**
   * Indicates whether to terminate the associated instances when the Spot Fleet request is canceled. The default is to terminate the instances.
   *
   * To let the instances continue to run after the Spot Fleet request is canceled, specify `no-terminate-instances`.
   *
   * @public
   */
  TerminateInstances: boolean | undefined;
}

/**
 * Describes a Spot Fleet request that was successfully canceled.
 *
 * @public
 */
export interface CancelSpotFleetRequestsSuccessItem {
  /**
   * The current state of the Spot Fleet request.
   *
   * @public
   */
  CurrentSpotFleetRequestState?: BatchState | undefined;

  /**
   * The previous state of the Spot Fleet request.
   *
   * @public
   */
  PreviousSpotFleetRequestState?: BatchState | undefined;

  /**
   * The ID of the Spot Fleet request.
   *
   * @public
   */
  SpotFleetRequestId?: string | undefined;
}

/**
 * Describes a Spot Fleet error.
 *
 * @public
 */
export interface CancelSpotFleetRequestsError {
  /**
   * The error code.
   *
   * @public
   */
  Code?: CancelBatchErrorCode | undefined;

  /**
   * The description for the error code.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes a Spot Fleet request that was not successfully canceled.
 *
 * @public
 */
export interface CancelSpotFleetRequestsErrorItem {
  /**
   * The error.
   *
   * @public
   */
  Error?: CancelSpotFleetRequestsError | undefined;

  /**
   * The ID of the Spot Fleet request.
   *
   * @public
   */
  SpotFleetRequestId?: string | undefined;
}

/**
 * Contains the output of CancelSpotFleetRequests.
 *
 * @public
 */
export interface CancelSpotFleetRequestsResponse {
  /**
   * Information about the Spot Fleet requests that are successfully canceled.
   *
   * @public
   */
  SuccessfulFleetRequests?: CancelSpotFleetRequestsSuccessItem[] | undefined;

  /**
   * Information about the Spot Fleet requests that are not successfully canceled.
   *
   * @public
   */
  UnsuccessfulFleetRequests?: CancelSpotFleetRequestsErrorItem[] | undefined;
}

/**
 * Contains the parameters for CancelSpotInstanceRequests.
 *
 * @public
 */
export interface CancelSpotInstanceRequestsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the Spot Instance requests.
   *
   * @public
   */
  SpotInstanceRequestIds: string[] | undefined;
}

/**
 * Describes a request to cancel a Spot Instance.
 *
 * @public
 */
export interface CancelledSpotInstanceRequest {
  /**
   * The ID of the Spot Instance request.
   *
   * @public
   */
  SpotInstanceRequestId?: string | undefined;

  /**
   * The state of the Spot Instance request.
   *
   * @public
   */
  State?: CancelSpotInstanceRequestState | undefined;
}

/**
 * Contains the output of CancelSpotInstanceRequests.
 *
 * @public
 */
export interface CancelSpotInstanceRequestsResult {
  /**
   * The Spot Instance requests.
   *
   * @public
   */
  CancelledSpotInstanceRequests?: CancelledSpotInstanceRequest[] | undefined;
}

/**
 * @public
 */
export interface ConfirmProductInstanceRequest {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The product code. This must be a product code that you own.
   *
   * @public
   */
  ProductCode: string | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ConfirmProductInstanceResult {
  /**
   * The return value of the request. Returns `true` if the specified product code is owned by the requester and associated with the specified instance.
   *
   * @public
   */
  Return?: boolean | undefined;

  /**
   * The Amazon Web Services account ID of the instance owner. This is only present if the product code is attached to the instance.
   *
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * @public
 */
export interface CopyFpgaImageRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the source AFI.
   *
   * @public
   */
  SourceFpgaImageId: string | undefined;

  /**
   * The description for the new AFI.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name for the new AFI. The default is the name of the source AFI.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Region that contains the source AFI.
   *
   * @public
   */
  SourceRegion: string | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CopyFpgaImageResult {
  /**
   * The ID of the new AFI.
   *
   * @public
   */
  FpgaImageId?: string | undefined;
}

/**
 * Contains the parameters for CopyImage.
 *
 * @public
 */
export interface CopyImageRequest {
  /**
   * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A description for the new AMI.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether to encrypt the snapshots of the copied image.
   *
   * You can encrypt a copy of an unencrypted snapshot, but you cannot create an unencrypted copy of an encrypted snapshot. The default KMS key for Amazon EBS is used unless you specify a non-default Key Management Service (KMS) KMS key using `KmsKeyId`. For more information, see [Use encryption with EBS-backed AMIs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIEncryption.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The identifier of the symmetric Key Management Service (KMS) KMS key to use when creating encrypted volumes. If this parameter is not specified, your Amazon Web Services managed KMS key for Amazon EBS is used. If you specify a KMS key, you must also set the encrypted state to `true`.
   *
   * You can specify a KMS key using any of the following:
   *
   * - Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.
   * - Key alias. For example, alias/ExampleAlias.
   * - Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.
   * - Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.
   *
   * Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an identifier that is not valid, the action can appear to complete, but eventually fails.
   *
   * The specified KMS key must exist in the destination Region.
   *
   * Amazon EBS does not support asymmetric KMS keys.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The name of the new AMI.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ID of the AMI to copy.
   *
   * @public
   */
  SourceImageId: string | undefined;

  /**
   * The name of the Region that contains the AMI to copy.
   *
   * @public
   */
  SourceRegion: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost for the new AMI.
   *
   * Only specify this parameter when copying an AMI from an Amazon Web Services Region to an Outpost. The AMI must be in the Region of the destination Outpost. You can't copy an AMI from an Outpost to a Region, from one Outpost to another, or within the same Outpost.
   *
   * For more information, see [Copy AMIs from an Amazon Web Services Region to an Outpost](https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html#copy-amis) in the *Amazon EBS User Guide*.
   *
   * Only one of `DestinationAvailabilityZone`, `DestinationAvailabilityZoneId`, or `DestinationOutpostArn` can be specified.
   *
   * @public
   */
  DestinationOutpostArn?: string | undefined;

  /**
   * Specifies whether to copy your user-defined AMI tags to the new AMI.
   *
   * The following tags are not be copied:
   *
   * - System tags (prefixed with `aws:`)
   * - For public and shared AMIs, user-defined tags that are attached by other Amazon Web Services accounts, except tags with the `ec2:SharedTag/` prefix. For more information about tag sharing, see [Sharing tags](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#sharing-tags) in the *Amazon EC2 User Guide*.
   *
   * Default: Your user-defined AMI tags are not copied.
   *
   * @public
   */
  CopyImageTags?: boolean | undefined;

  /**
   * The tags to apply to the new AMI and new snapshots. You can tag the AMI, the snapshots, or both.
   *
   * - To tag the new AMI, the value for `ResourceType` must be `image`.
   * - To tag the new snapshots, the value for `ResourceType` must be `snapshot`. The same tag is applied to all the new snapshots.
   *
   * If you specify other values for `ResourceType`, the request fails.
   *
   * To tag an AMI or snapshot after it has been created, see [CreateTags](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html).
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Specify a completion duration, in 15 minute increments, to initiate a time-based AMI copy. The specified completion duration applies to each of the snapshots associated with the AMI. Each snapshot associated with the AMI will be completed within the specified completion duration, with copy throughput automatically adjusted for each snapshot based on its size to meet the timing target.
   *
   * If you do not specify a value, the AMI copy operation is completed on a best-effort basis.
   *
   * > **Note:** This parameter is not supported when copying an AMI to or from a Local Zone, or to an Outpost.
   *
   * For more information, see [Time-based copies for Amazon EBS snapshots and EBS-backed AMIs](https://docs.aws.amazon.com/ebs/latest/userguide/time-based-copies.html).
   *
   * @public
   */
  SnapshotCopyCompletionDurationMinutes?: number | undefined;

  /**
   * The Local Zone for the new AMI (for example, `cn-north-1-pkx-1a`).
   *
   * Only one of `DestinationAvailabilityZone`, `DestinationAvailabilityZoneId`, or `DestinationOutpostArn` can be specified.
   *
   * @public
   */
  DestinationAvailabilityZone?: string | undefined;

  /**
   * The ID of the Local Zone for the new AMI (for example, `cnn1-pkx1-az1`).
   *
   * Only one of `DestinationAvailabilityZone`, `DestinationAvailabilityZoneId`, or `DestinationOutpostArn` can be specified.
   *
   * @public
   */
  DestinationAvailabilityZoneId?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Contains the output of CopyImage.
 *
 * @public
 */
export interface CopyImageResult {
  /**
   * The ID of the new AMI.
   *
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * @public
 */
export interface CopySnapshotRequest {
  /**
   * A description for the EBS snapshot.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost to which to copy the snapshot.
   *
   * > **Note:** Only supported when copying a snapshot to an Outpost.
   *
   * For more information, see [Copy snapshots from an Amazon Web Services Region to an Outpost](https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html#copy-snapshots) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  DestinationOutpostArn?: string | undefined;

  /**
   * The destination Region to use in the `PresignedUrl` parameter of a snapshot copy operation. This parameter is only valid for specifying the destination Region in a `PresignedUrl` parameter, where it is required.
   *
   * The snapshot copy is sent to the regional endpoint that you sent the HTTP request to (for example, `ec2.us-east-1.amazonaws.com`). With the CLI, this is specified using the `--region` parameter or the default Region in your Amazon Web Services configuration file.
   *
   * @public
   */
  DestinationRegion?: string | undefined;

  /**
   * To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled, enable encryption using this parameter. Otherwise, omit this parameter. Copies of encrypted snapshots are encrypted, even if you omit this parameter and encryption by default is not enabled. You cannot set this parameter to false. For more information, see [Amazon EBS encryption](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The identifier of the KMS key to use for Amazon EBS encryption. If this parameter is not specified, your KMS key for Amazon EBS is used. If `KmsKeyId` is specified, the encrypted state must be `true`.
   *
   * You can specify the KMS key using any of the following:
   *
   * - Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.
   * - Key alias. For example, alias/ExampleAlias.
   * - Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.
   * - Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.
   *
   * Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * When you copy an encrypted source snapshot using the Amazon EC2 Query API, you must supply a pre-signed URL. This parameter is optional for unencrypted snapshots. For more information, see [Query requests](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html).
   *
   * The `PresignedUrl` should use the snapshot source endpoint, the `CopySnapshot` action, and include the `SourceRegion`, `SourceSnapshotId`, and `DestinationRegion` parameters. The `PresignedUrl` must be signed using Amazon Web Services Signature Version 4. Because EBS snapshots are stored in Amazon S3, the signing algorithm for this parameter uses the same logic that is described in [Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html) in the *Amazon S3 API Reference*. An invalid or improperly signed `PresignedUrl` will cause the copy operation to fail asynchronously, and the snapshot will move to an `error` state.
   *
   * @public
   */
  PresignedUrl?: string | undefined;

  /**
   * The ID of the Region that contains the snapshot to be copied.
   *
   * @public
   */
  SourceRegion: string | undefined;

  /**
   * The ID of the EBS snapshot to copy.
   *
   * @public
   */
  SourceSnapshotId: string | undefined;

  /**
   * The tags to apply to the new snapshot.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * > **Note:** Not supported when copying snapshots to or from Local Zones or Outposts.
   *
   * Specify a completion duration, in 15 minute increments, to initiate a time-based snapshot copy. Time-based snapshot copy operations complete within the specified duration. For more information, see [Time-based copies](https://docs.aws.amazon.com/ebs/latest/userguide/time-based-copies.html).
   *
   * If you do not specify a value, the snapshot copy operation is completed on a best-effort basis.
   *
   * @public
   */
  CompletionDurationMinutes?: number | undefined;

  /**
   * The Local Zone, for example, `cn-north-1-pkx-1a` to which to copy the snapshot.
   *
   * > **Note:** Only supported when copying a snapshot to a Local Zone.
   *
   * @public
   */
  DestinationAvailabilityZone?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CopySnapshotResult {
  /**
   * Any tags applied to the new snapshot.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the new snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;
}

/**
 * @public
 */
export interface CopyVolumesRequest {
  /**
   * The ID of the source EBS volume to copy.
   *
   * @public
   */
  SourceVolumeId: string | undefined;

  /**
   * The number of I/O operations per second (IOPS) to provision for the volume copy. Required for `io1` and `io2` volumes. Optional for `gp3` volumes. Omit for all other volume types. Full provisioned IOPS performance can be achieved only once the volume copy is fully initialized.
   *
   * Valid ranges:
   *
   * - gp3: `3,000`(*default*)`- 80,000` IOPS
   * - io1: `100 - 64,000` IOPS
   * - io2: `100 - 256,000` IOPS
   *
   * > **Note:** [Instances built on the Nitro System](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html) can support up to 256,000 IOPS. Other instances can support up to 32,000 IOPS.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The size of the volume copy, in GiBs. The size must be equal to or greater than the size of the source volume. If not specified, the size defaults to the size of the source volume.
   *
   * Maximum supported sizes:
   *
   * - gp2: `16,384` GiB
   * - gp3: `65,536` GiB
   * - io1: `16,384` GiB
   * - io2: `65,536` GiB
   * - st1 and sc1: `16,384` GiB
   * - standard: `1024` GiB
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The volume type for the volume copy. If not specified, the volume type defaults to `gp2`.
   *
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The tags to apply to the volume copy during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Indicates whether to enable Amazon EBS Multi-Attach for the volume copy. If you enable Multi-Attach, you can attach the volume to up to 16 Nitro instances in the same Availability Zone simultaneously. Supported with `io1` and `io2` volumes only. For more information, see [Amazon EBS Multi-Attach](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html).
   *
   * @public
   */
  MultiAttachEnabled?: boolean | undefined;

  /**
   * The throughput to provision for the volume copy, in MiB/s. Supported for `gp3` volumes only. Omit for all other volume types. Full provisioned throughput performance can be achieved only once the volume copy is fully initialized.
   *
   * Valid Range: `125 - 2000` MiB/s
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensure Idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Indicates whether to encrypt the volume copy. If the source volume is encrypted, the service always encrypts the copy regardless of this value. Set to `true` to encrypt a copy of an unencrypted source volume during the copy operation. If you set `Encrypted` to `true` but do not specify `KmsKeyId`, the service uses the default KMS key for EBS encryption in your account.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The identifier of the KMS key to use for encryption of the volume copy. Specify a symmetric encryption KMS key. You can specify a KMS key using the key ID, key ARN, alias name, or alias ARN. If you set `Encrypted` to `true` but do not specify this parameter, the service uses the default KMS key for EBS encryption in your account. For cross-account volume copies, this must be a KMS key in the calling account.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * Describes whether the resource is managed by a service provider and, if so, describes the service provider that manages it.
 *
 * @public
 */
export interface OperatorResponse {
  /**
   * If `true`, the resource is managed by a service provider.
   *
   * @public
   */
  Managed?: boolean | undefined;

  /**
   * If `managed` is `true`, then the principal is returned. The principal is the service provider that manages the resource.
   *
   * @public
   */
  Principal?: string | undefined;

  /**
   * If `true`, the resource is hidden by default based on the managed resource visibility settings for the account.
   *
   * @public
   */
  HiddenByDefault?: boolean | undefined;
}

/**
 * Describes a volume.
 *
 * @public
 */
export interface Volume {
  /**
   * The ID of the Availability Zone for the volume.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The ID of the source volume from which the volume copy was created. Only for volume copies.
   *
   * @public
   */
  SourceVolumeId?: string | undefined;

  /**
   * The number of I/O operations per second (IOPS). For `gp3`, `io1`, and `io2` volumes, this represents the number of IOPS that are provisioned for the volume. For `gp2` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Any tags assigned to the volume.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The volume type.
   *
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * > **Note:** This parameter is not returned by CreateVolume.
   *
   * Indicates whether the volume was created using fast snapshot restore.
   *
   * @public
   */
  FastRestored?: boolean | undefined;

  /**
   * Indicates whether Amazon EBS Multi-Attach is enabled.
   *
   * @public
   */
  MultiAttachEnabled?: boolean | undefined;

  /**
   * The throughput that the volume supports, in MiB/s.
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * > **Note:** This parameter is not returned by CreateVolume.
   *
   * Reserved for future use.
   *
   * @public
   */
  SseType?: SSEType | undefined;

  /**
   * The service provider that manages the volume.
   *
   * @public
   */
  Operator?: OperatorResponse | undefined;

  /**
   * The Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate) specified for the volume during creation, in MiB/s. If no volume initialization rate was specified, the value is `null`.
   *
   * @public
   */
  VolumeInitializationRate?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the volume.
   *
   * @public
   */
  VolumeArn?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the volume.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the volume.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The size of the volume, in GiBs.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The snapshot from which the volume was created, if applicable.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The Availability Zone for the volume.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The volume state.
   *
   * @public
   */
  State?: VolumeState | undefined;

  /**
   * The time stamp when volume creation was initiated.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * > **Note:** This parameter is not returned by CreateVolume.
   *
   * Information about the volume attachments.
   *
   * @public
   */
  Attachments?: VolumeAttachment[] | undefined;

  /**
   * Indicates whether the volume is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that was used to protect the volume encryption key for the volume.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CopyVolumesResult {
  /**
   * Information about the volume copy.
   *
   * @public
   */
  Volumes?: Volume[] | undefined;
}

/**
 * Describes a destination for a health check path in a request. Destinations can be in a different Availability Zone than the source (cross-AZ) or in a Local Zone (AZ to Local Zone), enabling remote health validation of your application.
 *
 * @public
 */
export interface HealthCheckPathDestinationRequestObject {
  /**
   * The ID of the subnet for the destination.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the security group for the destination.
   *
   * @public
   */
  SecurityGroupId?: string | undefined;
}

/**
 * Describes the source for a health check path in a request. The source defines the subnet and security group where a health check elastic network interface (ENI) is created to originate health check traffic.
 *
 * @public
 */
export interface HealthCheckPathSourceRequestObject {
  /**
   * The ID of the subnet for the source.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the security group for the source.
   *
   * @public
   */
  SecurityGroupId?: string | undefined;
}

/**
 * Describes a health check path for an application status check request.
 *
 * @public
 */
export interface HealthCheckPathRequestObject {
  /**
   * The source for the health check path.
   *
   * @public
   */
  Source?: HealthCheckPathSourceRequestObject | undefined;

  /**
   * The destinations for the health check path.
   *
   * @public
   */
  Destinations?: HealthCheckPathDestinationRequestObject[] | undefined;
}

/**
 * @public
 */
export interface CreateApplicationStatusCheckRequest {
  /**
   * The health check paths to use for the application status check. Health check paths define the network path from a source subnet to one or more destination subnets for cross-Availability Zone or Availability Zone to Local Zone health checking. If omitted, health checks are performed in the same subnet as the instance.
   *
   * @public
   */
  HealthCheckPaths?: HealthCheckPathRequestObject[] | undefined;

  /**
   * The aggregation setting for the application status check. When set to `included`, the result of this check contributes to the instance-level application status reported by `DescribeApplicationStatus`. When set to `excluded`, the check runs independently and does not affect the instance-level status. Valid values: `included` | `excluded`.
   *
   * @public
   */
  Aggregation?: AggregationStatusEnum | undefined;

  /**
   * The protocol to use for the health check. Valid values: `http` | `https`.
   *
   * @public
   */
  Protocol: NetworkProtocolEnum | undefined;

  /**
   * The port to use for the health check. Valid values: 1 to 65535.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The URL path to use for the health check HTTP request (for example, `/health` or `/status`).
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The index of the network device to use for the health check. The value must be greater than or equal to 0.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The IP version to use for the health check. Valid values: `ipv4` and `ipv6`.
   *
   * @public
   */
  IpVersion?: IpVersionEnum | undefined;

  /**
   * The IP scope to use for the health check. Valid value: `private`.
   *
   * @public
   */
  IpScope?: IpScopeEnum | undefined;

  /**
   * The interval, in seconds, between health checks. Valid value: 60.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The amount of time, in seconds, to wait for a health check response before considering it failed. Valid values: 1 to 30. The value must be less than `Interval`.
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The number of consecutive failed health checks before the application status is considered impaired. The value must be greater than 0.
   *
   * @public
   */
  FailureThreshold?: number | undefined;

  /**
   * The number of consecutive successful health checks before the application status is considered healthy. The value must be greater than 0.
   *
   * @public
   */
  SuccessThreshold?: number | undefined;

  /**
   * The HTTP status codes that indicate a successful health check response. Specify a comma-separated list of individual status codes or ranges, for example, `200,202,300-399`. For a range, the first value must be less than the second value. Maximum length: 64 characters. Default: `200`.
   *
   * @public
   */
  StatusCodeMatcher?: string | undefined;

  /**
   * The number of seconds to wait before starting health checks after an instance is launched. Valid values: 1 to 600.
   *
   * @public
   */
  InitializationGracePeriodSeconds?: number | undefined;

  /**
   * The tags to apply to the application status check.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If you retry a request with the same token, the service ignores the request but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a destination for a health check path.
 *
 * @public
 */
export interface HealthCheckPathDestinationResponseObject {
  /**
   * The ID of the subnet for the destination.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the security group for the destination.
   *
   * @public
   */
  SecurityGroupId?: string | undefined;
}

/**
 * Describes the source for a health check path.
 *
 * @public
 */
export interface HealthCheckPathSourceResponseObject {
  /**
   * The ID of the subnet for the source.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the security group for the source.
   *
   * @public
   */
  SecurityGroupId?: string | undefined;
}

/**
 * Describes a health check path for an application status check.
 *
 * @public
 */
export interface HealthCheckPathResponseObject {
  /**
   * The source for the health check path.
   *
   * @public
   */
  Source?: HealthCheckPathSourceResponseObject | undefined;

  /**
   * The destinations for the health check path.
   *
   * @public
   */
  Destinations?: HealthCheckPathDestinationResponseObject[] | undefined;
}

/**
 * Describes a tag key-value pair for an application status check association.
 *
 * @public
 */
export interface CustomTagKeyValueResponsePair {
  /**
   * The key of the tag.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Describes an application status check.
 *
 * @public
 */
export interface ApplicationStatusCheckResponseObject {
  /**
   * The ID of the application status check.
   *
   * @public
   */
  ApplicationStatusCheckId?: string | undefined;

  /**
   * The aggregation setting for the application status check. When set to `included`, the result of this check contributes to the instance-level application status. When set to `excluded`, the check runs independently and does not affect the instance-level status.
   *
   * @public
   */
  Aggregation?: AggregationStatusEnum | undefined;

  /**
   * The health check paths for the application status check.
   *
   * @public
   */
  HealthCheckPaths?: HealthCheckPathResponseObject[] | undefined;

  /**
   * The protocol used for the health check.
   *
   * @public
   */
  Protocol?: NetworkProtocolEnum | undefined;

  /**
   * The port used for the health check.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The URL path used for the health check HTTP request.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The index of the network device used for the health check. The value is greater than or equal to 0.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The IP version used for the health check.
   *
   * @public
   */
  IpVersion?: IpVersionEnum | undefined;

  /**
   * The IP scope used for the health check.
   *
   * @public
   */
  IpScope?: IpScopeEnum | undefined;

  /**
   * The interval, in seconds, between health checks. Valid value: 60.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The amount of time, in seconds, to wait for a health check response. Valid values: 1 to 30.
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The number of consecutive failed health checks before the application status is considered impaired. The value must be greater than 0.
   *
   * @public
   */
  FailureThreshold?: number | undefined;

  /**
   * The number of consecutive successful health checks before the application status is considered healthy. The value must be greater than 0.
   *
   * @public
   */
  SuccessThreshold?: number | undefined;

  /**
   * The comma-separated list of individual HTTP status codes or ranges that indicate a successful health check response.
   *
   * @public
   */
  StatusCodeMatcher?: string | undefined;

  /**
   * The number of seconds to wait before starting health checks after an instance is launched. Valid values: 1 to 600.
   *
   * @public
   */
  InitializationGracePeriodSeconds?: number | undefined;

  /**
   * The date and time when the application status check was last updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The [tags](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html) associated with the application status check. Instances with these tags are automatically monitored by this check.
   *
   * @public
   */
  TargetTagAssociations?: CustomTagKeyValueResponsePair[] | undefined;

  /**
   * The tags assigned to the application status check.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The date and time when the application status check was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time when the application status check was last modified.
   *
   * @public
   */
  ModifyTime?: Date | undefined;

  /**
   * The date and time when the application status check was deleted.
   *
   * @public
   */
  DeletionTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateApplicationStatusCheckResult {
  /**
   * Information about the application status check.
   *
   * @public
   */
  ApplicationStatusCheck?: ApplicationStatusCheckResponseObject | undefined;
}

/**
 * @public
 */
export interface CreateCapacityManagerDataExportRequest {
  /**
   * The name of the S3 bucket where the capacity data export files will be delivered. The bucket must exist and you must have write permissions to it.
   *
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * The S3 key prefix for the exported data files. This allows you to organize exports in a specific folder structure within your bucket. If not specified, files are placed at the bucket root.
   *
   * @public
   */
  S3BucketPrefix?: string | undefined;

  /**
   * The frequency at which data exports are generated.
   *
   * @public
   */
  Schedule: Schedule | undefined;

  /**
   * The file format for the exported data. Parquet format is recommended for large datasets and better compression.
   *
   * @public
   */
  OutputFormat: OutputFormat | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The tags to apply to the data export configuration. You can tag the export for organization and cost tracking purposes.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateCapacityManagerDataExportResult {
  /**
   * The unique identifier for the created data export configuration. Use this ID to reference the export in other API calls.
   *
   * @public
   */
  CapacityManagerDataExportId?: string | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensure Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The instance type for which to reserve capacity.
   *
   * > **Note:** You can request future-dated Capacity Reservations for instance types in the C, M, R, I, T, and G instance families only.
   *
   * For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  InstanceType: string | undefined;

  /**
   * The type of operating system for which to reserve capacity.
   *
   * @public
   */
  InstancePlatform: CapacityReservationInstancePlatform | undefined;

  /**
   * The Availability Zone in which to create the Capacity Reservation.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone in which to create the Capacity Reservation.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:
   *
   * - `default` - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts.
   * - `dedicated` - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.
   *
   * @public
   */
  Tenancy?: CapacityReservationTenancy | undefined;

  /**
   * The number of instances for which to reserve capacity.
   *
   * > **Note:** You can request future-dated Capacity Reservations for an instance count with a minimum of 32 vCPUs. For example, if you request a future-dated Capacity Reservation for `m5.xlarge` instances, you must request at least 8 instances (*8 * m5.xlarge = 32 vCPUs*).
   *
   * Valid range: 1 - 1000
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS- optimized instance.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * *Deprecated.*
   *
   * @public
   */
  EphemeralStorage?: boolean | undefined;

  /**
   * The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Reservation's state changes to `expired` when it reaches its end date and time.
   *
   * You must provide an `EndDate` value if `EndDateType` is `limited`. Omit `EndDate` if `EndDateType` is `unlimited`.
   *
   * If the `EndDateType` is `limited`, the Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify 5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019.
   *
   * If you are requesting a future-dated Capacity Reservation, you can't specify an end date and time that is within the commitment duration.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:
   *
   * - `unlimited` - The Capacity Reservation remains active until you explicitly cancel it. Do not provide an `EndDate` if the `EndDateType` is `unlimited`.
   * - `limited` - The Capacity Reservation expires automatically at a specified date and time. You must provide an `EndDate` value if the `EndDateType` value is `limited`.
   *
   * @public
   */
  EndDateType?: EndDateType | undefined;

  /**
   * Indicates the type of instance launches that the Capacity Reservation accepts. The options include:
   *
   * - `open` - The Capacity Reservation automatically matches all instances that have matching attributes (instance type, platform, and Availability Zone). Instances that have matching attributes run in the Capacity Reservation automatically without specifying any additional parameters.
   * - `targeted` - The Capacity Reservation only accepts instances that have matching attributes (instance type, platform, and Availability Zone), and explicitly target the Capacity Reservation. This ensures that only permitted instances can use the reserved capacity.
   *
   * > **Note:** If you are requesting a future-dated Capacity Reservation, you must specify `targeted`.
   *
   * Default: `open`
   *
   * @public
   */
  InstanceMatchCriteria?: InstanceMatchCriteria | undefined;

  /**
   * The tags to apply to the Capacity Reservation during launch.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * > **Note:** Not supported for future-dated Capacity Reservations.
   *
   * The Amazon Resource Name (ARN) of the Outpost on which to create the Capacity Reservation.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * > **Note:** Not supported for future-dated Capacity Reservations.
   *
   * The Amazon Resource Name (ARN) of the cluster placement group in which to create the Capacity Reservation. For more information, see [Capacity Reservations for cluster placement groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-cpg.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  PlacementGroupArn?: string | undefined;

  /**
   * > **Note:** Required for future-dated Capacity Reservations only. To create a Capacity Reservation for immediate use, omit this parameter.
   *
   * The date and time at which the future-dated Capacity Reservation should become available for use, in the ISO8601 format in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`).
   *
   * You can request a future-dated Capacity Reservation between 5 and 120 days in advance.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * > **Note:** Required for future-dated Capacity Reservations only. To create a Capacity Reservation for immediate use, omit this parameter.
   *
   * Specify a commitment duration, in seconds, for the future-dated Capacity Reservation.
   *
   * The commitment duration is a minimum duration for which you commit to having the future-dated Capacity Reservation in the `active` state in your account after it has been delivered.
   *
   * For more information, see [Commitment duration](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-concepts.html#cr-commitment-duration).
   *
   * @public
   */
  CommitmentDuration?: number | undefined;

  /**
   * > **Note:** Required for future-dated Capacity Reservations only. To create a Capacity Reservation for immediate use, omit this parameter.
   *
   * Indicates that the requested capacity will be delivered in addition to any running instances or reserved capacity that you have in your account at the requested date and time.
   *
   * The only supported value is `incremental`.
   *
   * @public
   */
  DeliveryPreference?: CapacityReservationDeliveryPreference | undefined;
}

/**
 * Describes the configuration that a Capacity Reservation will have after a pending adjustment is applied.
 *
 * @public
 */
export interface CapacityReservationAdjustmentDetails {
  /**
   * The start date that the Capacity Reservation will have after the adjustment.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The end date that the Capacity Reservation will have after the adjustment.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * The date and time at which the commitment duration will expire after the adjustment.
   *
   * @public
   */
  CommitmentEndDate?: Date | undefined;

  /**
   * Indicates the way in which the Capacity Reservation will end after the adjustment. Possible values are:
   *
   * - `unlimited` - The Capacity Reservation remains active until you explicitly cancel it.
   * - `limited` - The Capacity Reservation expires automatically at the date and time given by `endDate`.
   *
   * @public
   */
  EndDateType?: string | undefined;

  /**
   * The commitment duration, in seconds, that the Capacity Reservation will have after the adjustment.
   *
   * @public
   */
  CommitmentDuration?: number | undefined;
}

/**
 * A key-value pair that provides additional metadata about a capacity allocation.
 *
 * @public
 */
export interface CapacityAllocationMetadataEntry {
  /**
   * The key of the metadata entry.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the metadata entry.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Information about instance capacity usage for a Capacity Reservation.
 *
 * @public
 */
export interface CapacityAllocation {
  /**
   * The usage type. `used` indicates that the instance capacity is in use by instances that are running in the Capacity Reservation.
   *
   * @public
   */
  AllocationType?: AllocationType | undefined;

  /**
   * The amount of instance capacity associated with the usage. For example a value of `4` indicates that instance capacity for 4 instances is currently in use.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * Additional metadata associated with the capacity allocation. Each entry contains a key-value pair providing context about the allocation.
   *
   * @public
   */
  AllocationMetadata?: CapacityAllocationMetadataEntry[] | undefined;
}

/**
 * Information about your commitment for a future-dated Capacity Reservation.
 *
 * @public
 */
export interface CapacityReservationCommitmentInfo {
  /**
   * The instance capacity that you committed to when you requested the future-dated Capacity Reservation.
   *
   * @public
   */
  CommittedInstanceCount?: number | undefined;

  /**
   * The date and time at which the commitment duration expires, in the ISO8601 format in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`). You can't decrease the instance count or cancel the Capacity Reservation before this date and time.
   *
   * @public
   */
  CommitmentEndDate?: Date | undefined;

  /**
   * The commitment duration, in seconds, for the future-dated Capacity Reservation. This is the minimum duration for which you commit to having the Capacity Reservation in the `active` state in your account after it has been delivered.
   *
   * @public
   */
  CommitmentDuration?: number | undefined;
}

/**
 * Represents the allocation of capacity from a source reservation to an interruptible reservation, tracking current and target instance counts for allocation management.
 *
 * @public
 */
export interface InterruptibleCapacityAllocation {
  /**
   * The current number of instances allocated to the interruptible reservation.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * After your modify request, the requested number of instances allocated to interruptible reservation.
   *
   * @public
   */
  TargetInstanceCount?: number | undefined;

  /**
   * The current status of the allocation (updating during reclamation, active when complete).
   *
   * @public
   */
  Status?: InterruptibleCapacityReservationAllocationStatus | undefined;

  /**
   * The ID of the interruptible Capacity Reservation created from the allocation.
   *
   * @public
   */
  InterruptibleCapacityReservationId?: string | undefined;

  /**
   * The type of interruption policy applied to the interruptible reservation.
   *
   * @public
   */
  InterruptionType?: InterruptionType | undefined;

  /**
   * Specifies how Amazon EC2 handles the interruptible Capacity Reservation when you reduce its allocation to zero instances. A value of `retain` keeps the interruptible Capacity Reservation active at zero capacity so that you can allocate instances to it again later. A value of `default` cancels the interruptible Capacity Reservation and returns the capacity to your source Capacity Reservation.
   *
   * @public
   */
  ZeroSizePreference?: ZeroSizePreference | undefined;
}

/**
 * Contains information about how and when instances in an interruptible reservation can be terminated when capacity is reclaimed.
 *
 * @public
 */
export interface InterruptionInfo {
  /**
   * The ID of the source Capacity Reservation from which the interruptible reservation was created.
   *
   * @public
   */
  SourceCapacityReservationId?: string | undefined;

  /**
   * The interruption type that determines how instances are terminated when capacity is reclaimed.
   *
   * @public
   */
  InterruptionType?: InterruptionType | undefined;
}

/**
 * Describes a Capacity Reservation.
 *
 * @public
 */
export interface CapacityReservation {
  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the Capacity Reservation.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationArn?: string | undefined;

  /**
   * The ID of the Availability Zone in which the capacity is reserved.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The type of instance for which the Capacity Reservation reserves capacity.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The type of operating system for which the Capacity Reservation reserves capacity.
   *
   * @public
   */
  InstancePlatform?: CapacityReservationInstancePlatform | undefined;

  /**
   * The Availability Zone in which the capacity is reserved.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:
   *
   * - `default` - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts.
   * - `dedicated` - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.
   *
   * @public
   */
  Tenancy?: CapacityReservationTenancy | undefined;

  /**
   * The total number of instances for which the Capacity Reservation reserves capacity.
   *
   * @public
   */
  TotalInstanceCount?: number | undefined;

  /**
   * The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.
   *
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS- optimized instance.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * *Deprecated.*
   *
   * @public
   */
  EphemeralStorage?: boolean | undefined;

  /**
   * The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:
   *
   * - `active` - The capacity is available for use.
   * - `expired` - The Capacity Reservation expired automatically at the date and time specified in your reservation request. The reserved capacity is no longer available for your use.
   * - `cancelled` - The Capacity Reservation was canceled. The reserved capacity is no longer available for your use.
   * - `pending` - The Capacity Reservation request was successful but the capacity provisioning is still pending.
   * - `failed` - The Capacity Reservation request has failed. A request can fail due to request parameters that are not valid, capacity constraints, or instance limit constraints. You can view a failed request for 60 minutes.
   * - `scheduled` - (*Future-dated Capacity Reservations*) The future-dated Capacity Reservation request was approved and the Capacity Reservation is scheduled for delivery on the requested start date.
   * - `payment-pending` - (*Capacity Blocks*) The upfront payment has not been processed yet.
   * - `payment-failed` - (*Capacity Blocks*) The upfront payment was not processed in the 12-hour time frame. Your Capacity Block was released.
   * - `assessing` - (*Future-dated Capacity Reservations*) Amazon EC2 is assessing your request for a future-dated Capacity Reservation.
   * - `delayed` - (*Future-dated Capacity Reservations*) Amazon EC2 encountered a delay in provisioning the requested future-dated Capacity Reservation. Amazon EC2 is unable to deliver the requested capacity by the requested start date and time.
   * - `unsupported` - (*Future-dated Capacity Reservations*) Amazon EC2 can't support the future-dated Capacity Reservation request due to capacity constraints. You can view unsupported requests for 30 days. The Capacity Reservation will not be delivered.
   * - `cancelling` - (*Future-dated Capacity Reservations*) The Capacity Reservation is being cancelled. Capacity has been released but charges continue for the commitment wind-down period. The reservation transitions to `cancelled` when the wind-down completes.
   *
   * @public
   */
  State?: CapacityReservationState | undefined;

  /**
   * The date and time the Capacity Reservation was started.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The date and time the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Reservation's state changes to `expired` when it reaches its end date and time.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:
   *
   * - `unlimited` - The Capacity Reservation remains active until you explicitly cancel it.
   * - `limited` - The Capacity Reservation expires automatically at a specified date and time.
   *
   * @public
   */
  EndDateType?: EndDateType | undefined;

  /**
   * Indicates the type of instance launches that the Capacity Reservation accepts. The options include:
   *
   * - `open` - The Capacity Reservation accepts all instances that have matching attributes (instance type, platform, and Availability Zone). Instances that have matching attributes launch into the Capacity Reservation automatically without specifying any additional parameters.
   * - `targeted` - The Capacity Reservation only accepts instances that have matching attributes (instance type, platform, and Availability Zone), and explicitly target the Capacity Reservation. This ensures that only permitted instances can use the reserved capacity.
   *
   * @public
   */
  InstanceMatchCriteria?: InstanceMatchCriteria | undefined;

  /**
   * The date and time the Capacity Reservation was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * Any tags assigned to the Capacity Reservation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost on which the Capacity Reservation was created.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The ID of the Capacity Reservation Fleet to which the Capacity Reservation belongs. Only valid for Capacity Reservations that were created by a Capacity Reservation Fleet.
   *
   * @public
   */
  CapacityReservationFleetId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster placement group in which the Capacity Reservation was created. For more information, see [Capacity Reservations for cluster placement groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-cpg.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  PlacementGroupArn?: string | undefined;

  /**
   * Information about instance capacity usage.
   *
   * @public
   */
  CapacityAllocations?: CapacityAllocation[] | undefined;

  /**
   * The type of Capacity Reservation.
   *
   * @public
   */
  ReservationType?: CapacityReservationType | undefined;

  /**
   * The ID of the Amazon Web Services account to which billing of the unused capacity of the Capacity Reservation is assigned.
   *
   * @public
   */
  UnusedReservationBillingOwnerId?: string | undefined;

  /**
   * Information about your commitment for a future-dated Capacity Reservation.
   *
   * @public
   */
  CommitmentInfo?: CapacityReservationCommitmentInfo | undefined;

  /**
   * The delivery method for a future-dated Capacity Reservation. `incremental` indicates that the requested capacity is delivered in addition to any running instances and reserved capacity that you have in your account at the requested date and time.
   *
   * @public
   */
  DeliveryPreference?: CapacityReservationDeliveryPreference | undefined;

  /**
   * The ID of the Capacity Block.
   *
   * @public
   */
  CapacityBlockId?: string | undefined;

  /**
   * Indicates whether this Capacity Reservation is interruptible, meaning instances may be terminated when the owner reclaims capacity.
   *
   * @public
   */
  Interruptible?: boolean | undefined;

  /**
   * Contains allocation details for interruptible reservations, including current allocated instances and target instance counts within the interruptibleCapacityAllocation object.
   *
   * @public
   */
  InterruptibleCapacityAllocation?: InterruptibleCapacityAllocation | undefined;

  /**
   * Information about the interruption configuration and association with the source reservation for interruptible Capacity Reservations.
   *
   * @public
   */
  InterruptionInfo?: InterruptionInfo | undefined;

  /**
   * The status of the most recent modification to the Capacity Reservation. A Capacity Reservation can have one of the following adjustment statuses:
   *
   * - `requested` - The modification was requested and is being processed.
   * - `applied` - The modification was applied to the Capacity Reservation.
   * - `rejected` - The modification was not applied and the Capacity Reservation keeps its existing configuration.
   *
   * This field is not returned if the Capacity Reservation has never been modified.
   *
   * @public
   */
  AdjustmentStatus?: CapacityReservationAdjustmentStatus | undefined;

  /**
   * The configuration that the Capacity Reservation will have after the requested adjustment is applied.
   *
   * @public
   */
  AdjustmentDetails?: CapacityReservationAdjustmentDetails | undefined;

  /**
   * The start date that you originally requested for the Capacity Reservation, in the ISO8601 format in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`). This value doesn't change when you push out the start date.
   *
   * @public
   */
  OriginalStartDate?: Date | undefined;

  /**
   * The zero-size preference configured for the interruptible Capacity Reservation. A value of `retain` keeps the interruptible Capacity Reservation active at zero capacity when you reduce its allocation to zero. A value of `default` cancels the interruptible Capacity Reservation when you reduce its allocation to zero.
   *
   * @public
   */
  ZeroSizePreference?: ZeroSizePreference | undefined;

  /**
   * > **Note:** Only supported for UltraServers.
   *
   * Indicates whether you can launch instances into the Capacity Reservation. A Capacity Reservation can have the following launch statuses:
   *
   * - `launchable` - You can launch instances into the Capacity Reservation.
   * - `unlaunchable` - You can't launch instances into the Capacity Reservation. For example, the Capacity Reservation is not active.
   *
   * @public
   */
  LaunchStatus?: CapacityReservationLaunchStatus | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationResult {
  /**
   * Information about the Capacity Reservation.
   *
   * @public
   */
  CapacityReservation?: CapacityReservation | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationBySplittingRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensure Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The ID of the Capacity Reservation from which you want to split the capacity.
   *
   * @public
   */
  SourceCapacityReservationId: string | undefined;

  /**
   * The number of instances to split from the source Capacity Reservation.
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * The tags to apply to the new Capacity Reservation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationBySplittingResult {
  /**
   * Information about the source Capacity Reservation.
   *
   * @public
   */
  SourceCapacityReservation?: CapacityReservation | undefined;

  /**
   * Information about the destination Capacity Reservation.
   *
   * @public
   */
  DestinationCapacityReservation?: CapacityReservation | undefined;

  /**
   * The number of instances in the new Capacity Reservation. The number of instances in the source Capacity Reservation was reduced by this amount.
   *
   * @public
   */
  InstanceCount?: number | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationCancellationQuoteRequest {
  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensure Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to apply to the cancellation quote.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the cancellation terms for cancelling a future-dated Capacity Reservation during its commitment duration.
 *
 * @public
 */
export interface CancellationTerms {
  /**
   * The type of cancellation charge. Possible values include `commitment-wind-down`.
   *
   * @public
   */
  CancellationType?: ApplyCancellationCharges | undefined;

  /**
   * The state that the Capacity Reservation will transition to after cancellation.
   *
   * @public
   */
  ReservationState?: string | undefined;

  /**
   * The number of instances under commitment after cancellation.
   *
   * @public
   */
  CommittedInstanceCount?: number | undefined;

  /**
   * The number of hours for which cancellation charges will apply.
   *
   * @public
   */
  ChargeCommitmentDurationHours?: number | undefined;

  /**
   * The date and time at which cancellation charges will stop.
   *
   * @public
   */
  ChargeEndDate?: Date | undefined;
}

/**
 * Describes the configuration of a Capacity Reservation.
 *
 * @public
 */
export interface CapacityReservationConfiguration {
  /**
   * The number of instances in the Capacity Reservation.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The current state of the Capacity Reservation.
   *
   * @public
   */
  ReservationState?: string | undefined;
}

/**
 * Describes a Capacity Reservation cancellation quote, which provides the cancellation terms for cancelling a future-dated Capacity Reservation during its commitment duration.
 *
 * @public
 */
export interface CapacityReservationCancellationQuote {
  /**
   * The ID of the cancellation quote.
   *
   * @public
   */
  CapacityReservationCancellationQuoteId?: string | undefined;

  /**
   * The ID of the Capacity Reservation associated with the cancellation quote.
   *
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * The date and time at which the cancellation quote was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The date and time at which the cancellation quote expires.
   *
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * The state of the cancellation quote. Possible values include `pending`, `active`, and `expired`.
   *
   * @public
   */
  QuoteState?: CapacityReservationCancellationQuoteState | undefined;

  /**
   * The current configuration of the Capacity Reservation.
   *
   * @public
   */
  CurrentConfiguration?: CapacityReservationConfiguration | undefined;

  /**
   * The cancellation terms associated with the quote, including the fee type and charge details.
   *
   * @public
   */
  CancellationTerms?: CancellationTerms[] | undefined;

  /**
   * The tags assigned to the cancellation quote.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationCancellationQuoteResult {
  /**
   * Information about the Capacity Reservation cancellation quote.
   *
   * @public
   */
  CapacityReservationCancellationQuote?: CapacityReservationCancellationQuote | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationDateChangeQuoteRequest {
  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * The requested new start date for the Capacity Reservation, in the ISO8601 format in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`). The new start date must be later than the current start date and within the cumulative 30-day pushout limit.
   *
   * @public
   */
  NewStartDate: Date | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensure Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to apply to the date change quote.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the configuration that a Capacity Reservation has at the time a modification quote is generated.
 *
 * @public
 */
export interface ModificationQuoteCurrentConfiguration {
  /**
   * The number of instances in the Capacity Reservation.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The current state of the Capacity Reservation.
   *
   * @public
   */
  ReservationState?: string | undefined;

  /**
   * The start date that the Capacity Reservation has before the quoted modification is applied.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The start date that the Capacity Reservation was originally requested with. This value does not change when you push out the start date.
   *
   * @public
   */
  OriginalStartDate?: Date | undefined;
}

/**
 * Describes the changes that a Capacity Reservation modification quote will apply to a Capacity Reservation.
 *
 * @public
 */
export interface ModificationReservationUpdate {
  /**
   * The date and time at which the commitment duration will expire after the modification, in the ISO8601 format in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`).
   *
   * @public
   */
  NewCommitmentEndDate?: Date | undefined;

  /**
   * The start date that the Capacity Reservation will have after the modification, in the ISO8601 format in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`).
   *
   * @public
   */
  NewStartDate?: Date | undefined;

  /**
   * The commitment duration, in seconds, that the Capacity Reservation will have after the modification.
   *
   * @public
   */
  NewCommitmentDuration?: number | undefined;
}

/**
 * Describes the terms of a Capacity Reservation modification quote.
 *
 * @public
 */
export interface ModificationTerms {
  /**
   * The changes that will be applied to the Capacity Reservation if you accept the modification terms.
   *
   * @public
   */
  ReservationUpdate?: ModificationReservationUpdate | undefined;
}

/**
 * Describes a Capacity Reservation modification quote, which provides the terms for changing the start date or the commitment of a future-dated Capacity Reservation.
 *
 * @public
 */
export interface CapacityReservationModificationQuote {
  /**
   * The ID of the modification quote.
   *
   * @public
   */
  CapacityReservationModificationQuoteId?: string | undefined;

  /**
   * The ID of the Capacity Reservation associated with the modification quote.
   *
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * The date and time at which the modification quote was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The date and time at which the modification quote expires.
   *
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * The state of the modification quote itself. Possible values are:
   *
   * - `active` - The quote can still be used.
   * - `expired` - The quote can no longer be used. A quote becomes `expired` at its `expirationTime`.
   *
   * @public
   */
  QuoteState?: CapacityReservationModificationQuoteState | undefined;

  /**
   * The configuration that the Capacity Reservation has at the time the quote was generated.
   *
   * @public
   */
  CurrentConfiguration?: ModificationQuoteCurrentConfiguration | undefined;

  /**
   * The terms of the modification, including the configuration that the Capacity Reservation will have if you accept them by using `ModifyCapacityReservation`.
   *
   * @public
   */
  ModificationTerms?: ModificationTerms | undefined;

  /**
   * The tags assigned to the modification quote.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationDateChangeQuoteResult {
  /**
   * Information about the Capacity Reservation date change quote.
   *
   * @public
   */
  CapacityReservationModificationQuote?: CapacityReservationModificationQuote | undefined;
}

/**
 * The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface BaselineEbsBandwidthMbpsRequest {
  /**
   * The minimum baseline bandwidth, in Mbps. To specify no minimum limit, omit this parameter.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum baseline bandwidth, in Mbps. To specify no maximum limit, omit this parameter.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * Specify an instance family to use as the baseline reference for CPU performance. All instance types that match your specified attributes will be compared against the CPU performance of the referenced instance family, regardless of CPU manufacturer or architecture.
 *
 * > **Note:** Currently, only one instance family can be specified in the list.
 *
 * @public
 */
export interface PerformanceFactorReferenceRequest {
  /**
   * The instance family to use as a baseline reference.
   *
   * > **Note:** Ensure that you specify the correct value for the instance family. The instance family is everything before the period (`.`) in the instance type name. For example, in the instance type `c6i.large`, the instance family is `c6i`, not `c6`. For more information, see [Amazon EC2 instance type naming conventions](https://docs.aws.amazon.com/ec2/latest/instancetypes/instance-type-names.html) in *Amazon EC2 Instance Types*.
   *
   * The following instance families are *not supported* for performance protection:
   *
   * - `c1`
   * - `g3` | `g3s`
   * - `hpc7g`
   * - `m1` | `m2`
   * - `mac1` | `mac2` | `mac2-m1ultra` | `mac2-m2` | `mac2-m2pro`
   * - `p3dn` | `p4d` | `p5`
   * - `t1`
   * - `u-12tb1` | `u-18tb1` | `u-24tb1` | `u-3tb1` | `u-6tb1` | `u-9tb1` | `u7i-12tb` | `u7in-16tb` | `u7in-24tb` | `u7in-32tb`
   *
   * If you enable performance protection by specifying a supported instance family, the returned instance types will exclude the above unsupported instance families.
   *
   * If you specify an unsupported instance family as a value for baseline performance, the API returns an empty response for [GetInstanceTypesFromInstanceRequirements](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements) and an exception for [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet), [RequestSpotFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet), [ModifyFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyFleet), and [ModifySpotFleetRequest](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySpotFleetRequest).
   *
   * @public
   */
  InstanceFamily?: string | undefined;
}

/**
 * The CPU performance to consider, using an instance family as the baseline reference.
 *
 * @public
 */
export interface CpuPerformanceFactorRequest {
  /**
   * Specify an instance family to use as the baseline reference for CPU performance. All instance types that match your specified attributes will be compared against the CPU performance of the referenced instance family, regardless of CPU manufacturer or architecture differences.
   *
   * > **Note:** Currently, only one instance family can be specified in the list.
   *
   * @public
   */
  References?: PerformanceFactorReferenceRequest[] | undefined;
}

/**
 * The baseline performance to consider, using an instance family as a baseline reference. The instance family establishes the lowest acceptable level of performance. Amazon EC2 uses this baseline to guide instance type selection, but there is no guarantee that the selected instance types will always exceed the baseline for every application.
 *
 * Currently, this parameter only supports CPU performance as a baseline performance factor. For example, specifying `c6i` would use the CPU performance of the `c6i` family as the baseline reference.
 *
 * @public
 */
export interface BaselinePerformanceFactorsRequest {
  /**
   * The CPU performance to consider, using an instance family as the baseline reference.
   *
   * @public
   */
  Cpu?: CpuPerformanceFactorRequest | undefined;
}

/**
 * The minimum and maximum amount of memory per vCPU, in GiB.
 *
 * @public
 */
export interface MemoryGiBPerVCpuRequest {
  /**
   * The minimum amount of memory per vCPU, in GiB. To specify no minimum limit, omit this parameter.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum amount of memory per vCPU, in GiB. To specify no maximum limit, omit this parameter.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The minimum and maximum amount of memory, in MiB.
 *
 * @public
 */
export interface MemoryMiBRequest {
  /**
   * The minimum amount of memory, in MiB. To specify no minimum limit, specify `0`.
   *
   * @public
   */
  Min: number | undefined;

  /**
   * The maximum amount of memory, in MiB. To specify no maximum limit, omit this parameter.
   *
   * @public
   */
  Max?: number | undefined;
}
