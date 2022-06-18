// smithy-typescript generated code
import {
  _InstanceType,
  AttributeValue,
  BlockDeviceMapping,
  FleetLaunchTemplateSpecification,
  GroupIdentifier,
  IKEVersionsRequestListValue,
  InstanceRequirements,
  IpPermission,
  Phase1DHGroupNumbersRequestListValue,
  Phase1EncryptionAlgorithmsRequestListValue,
  Phase1IntegrityAlgorithmsRequestListValue,
  Phase2DHGroupNumbersRequestListValue,
  Phase2EncryptionAlgorithmsRequestListValue,
  Phase2IntegrityAlgorithmsRequestListValue,
  PortRange,
  Protocol,
  SpotFleetRequestConfigData,
  Storage,
  Tag,
  TrafficMirrorNetworkService,
  VirtualizationType,
} from "./models_3";
import {
  ActivityStatus,
  AddressFamily,
  AllocationState,
  AllowsMultipleInstanceTypes,
  AssociationStatusCode,
  AttachmentStatus,
  AutoPlacement,
  BatchState,
  BundleTaskState,
  ByoipCidrState,
  CancelBatchErrorCode,
  CancelSpotInstanceRequestState,
  CapacityReservationFleetState,
  CapacityReservationInstancePlatform,
  CapacityReservationPreference,
  CapacityReservationState,
  CapacityReservationTenancy,
  CarrierGatewayState,
  ClientVpnAuthenticationType,
  ClientVpnAuthorizationRuleStatusCode,
  ClientVpnEndpointStatusCode,
  ClientVpnRouteStatusCode,
  ConnectionNotificationState,
  ConnectionNotificationType,
  ConnectivityType,
  ContainerFormat,
  CurrencyCodeValues,
  DatafeedSubscriptionState,
  DefaultTargetCapacityType,
  DeleteFleetErrorCode,
  DestinationFileFormat,
  DiskImageFormat,
  DnsNameState,
  DnsRecordIpType,
  DomainType,
  EndDateType,
  ExportEnvironment,
  ExportTaskState,
  FleetCapacityReservationTenancy,
  FleetCapacityReservationUsageStrategy,
  FleetExcessCapacityTerminationPolicy,
  FleetInstanceMatchCriteria,
  FleetOnDemandAllocationStrategy,
  FleetReplacementStrategy,
  FleetStateCode,
  FleetType,
  GatewayAssociationState,
  GatewayType,
  HostRecovery,
  IamInstanceProfileAssociationState,
  ImportImageLicenseConfigurationResponse,
  ImportInstanceVolumeDetailItem,
  InferenceAcceleratorInfo,
  InstanceCount,
  InstanceEventWindowAssociationTarget,
  InstanceEventWindowState,
  InstanceEventWindowTimeRange,
  InstanceHealthStatus,
  InstanceInterruptionBehavior,
  InstanceLifecycle,
  InstanceMatchCriteria,
  InstanceState,
  InstanceStatusEvent,
  InstanceStatusSummary,
  InstanceStorageInfo,
  InterfacePermissionType,
  InterfaceProtocolType,
  IpAddressType,
  IpamOperatingRegion,
  IpamPoolAllocationResourceType,
  IpamPoolAwsService,
  IpamPoolCidrFailureReason,
  IpamPoolState,
  IpamResourceTag,
  IpamScopeState,
  IpamScopeType,
  IpamState,
  Ipv6PrefixSpecification,
  KeyType,
  LastError,
  LaunchSpecification,
  LaunchTemplateBlockDeviceMapping,
  LaunchTemplateCapacityReservationSpecificationResponse,
  LaunchTemplateCpuOptions,
  LaunchTemplateElasticInferenceAcceleratorResponse,
  LaunchTemplateEnclaveOptions,
  LaunchTemplateHibernationOptions,
  LaunchTemplateIamInstanceProfileSpecification,
  LaunchTemplateInstanceMaintenanceOptions,
  LaunchTemplateInstanceMarketOptions,
  LaunchTemplateInstanceMetadataOptions,
  LaunchTemplateInstanceNetworkInterfaceSpecification,
  LaunchTemplateLicenseConfiguration,
  LaunchTemplatePlacement,
  LaunchTemplatePrivateDnsNameOptions,
  LaunchTemplatesMonitoring,
  LaunchTemplateTagSpecification,
  ListingStatus,
  LocalGatewayRouteState,
  LocalGatewayRouteType,
  LogDestinationType,
  MemoryInfo,
  NatGatewayAddress,
  NatGatewayState,
  NetworkAclAssociation,
  NetworkAclEntry,
  NetworkInfo,
  NetworkInterfaceAssociation,
  NetworkInterfaceIpv6Address,
  NetworkInterfacePermissionState,
  NetworkInterfacePrivateIpAddress,
  NetworkInterfaceStatus,
  NetworkInterfaceType,
  PacketHeaderStatement,
  PayerResponsibility,
  PeeringAttachmentStatus,
  PeeringTgwInfo,
  PlacementGroupInfo,
  PlacementGroupState,
  PlacementStrategy,
  PlatformValues,
  PoolCidrBlock,
  PrefixListState,
  PriceSchedule,
  PricingDetail,
  PrincipalType,
  PrivateDnsDetails,
  PrivateDnsNameConfiguration,
  PrivateDnsNameOptionsOnLaunch,
  ProcessorInfo,
  PropagatingVgw,
  ProvisionedBandwidth,
  PublicIpv4PoolRange,
  RecurringCharge,
  ReferencedSecurityGroup,
  ReplaceRootVolumeTaskState,
  ReservedInstancesId,
  ReservedInstancesModificationResult,
  ResourceStatement,
  ResourceType,
  RootDeviceType,
  Route,
  RouteTableAssociation,
  RouteTableAssociationStateCode,
  ScheduledInstanceRecurrence,
  ServiceConnectivityType,
  ServiceState,
  ServiceTypeDetail,
  ShutdownBehavior,
  SnapshotDetail,
  SnapshotState,
  SnapshotTaskDetail,
  SpotAllocationStrategy,
  SpotInstanceInterruptionBehavior,
  SpotInstanceStateFault,
  SpotInstanceStatus,
  SpotInstanceType,
  StaleIpPermission,
  State,
  StorageTier,
  SubnetAssociation,
  SubnetCidrBlockState,
  SubnetCidrReservationType,
  SubnetState,
  TargetCapacityUnitType,
  TargetConfiguration,
  Tenancy,
  TrafficDirection,
  TrafficMirrorPortRange,
  TrafficMirrorRuleAction,
  TrafficMirrorTargetType,
  TrafficType,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentAssociation,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayConnectOptions,
  TransitGatewayConnectPeerConfiguration,
  TransitGatewayConnectPeerState,
  TransitGatewayMulticastDomainOptions,
  TransitGatewayMulticastDomainState,
  TransitGatewayOptions,
  TransitGatewayPrefixListAttachment,
  TransitGatewayPrefixListReferenceState,
  TransitGatewayRouteAttachment,
  TransitGatewayRouteState,
  TransitGatewayRouteTableState,
  TransitGatewayRouteType,
  TransitGatewayState,
  TransitGatewayVpcAttachmentOptions,
  TransportProtocol,
  UnsuccessfulItemError,
  UsageClassType,
  VCpuInfo,
  VgwTelemetry,
  VolumeStatusAction,
  VolumeStatusAttachmentStatus,
  VolumeStatusEvent,
  VolumeStatusInfo,
  VolumeType,
  VpcCidrBlockState,
  VpcEndpointType,
  VpcPeeringConnectionStateReason,
  VpcPeeringConnectionVpcInfo,
  VpcState,
  VpnConnectionOptions,
  VpnState,
  VpnStaticRoute,
} from "./models_5";
import {
  AnalysisStatus,
  ArchitectureValues,
  AssociatedNetworkType,
  AvailabilityZoneOptInStatus,
  AvailabilityZoneState,
  BootModeValues,
  ClientCertificateRevocationListStatusCode,
  ClientVpnConnectionStatusCode,
  ClientVpnEndpointAttributeStatusCode,
  ConversionTaskState,
  DeleteQueuedReservedInstancesErrorCode,
  DeviceType,
  DiskType,
  EbsEncryptionSupport,
  EbsNvmeSupport,
  EbsOptimizedSupport,
  ElasticGpuState,
  ElasticGpuStatus,
  EventType,
  FastLaunchResourceType,
  FastLaunchStateCode,
  FastSnapshotRestoreStateCode,
  FindingsFound,
  FleetActivityStatus,
  FleetEventType,
  FpgaImageStateCode,
  HypervisorType,
  ImageState,
  ImageTypeValues,
  InstanceTypeHypervisor,
  IpamAddressHistoryResourceType,
  IpamComplianceStatus,
  IpamManagementState,
  IpamOverlapStatus,
  IpamPoolCidrState,
  IpamResourceType,
  LaunchTemplateErrorCode,
  LocationType,
  MoveStatus,
  OfferingClassType,
  OfferingTypeValues,
  PaymentOption,
  PermissionGroup,
  ProductCodeValues,
  ReplacementStrategy,
  ReservationState,
  ReservedInstanceState,
  RIProductDescription,
  Scope,
  SpotInstanceState,
  TieringOperationStatus,
  TpmSupportValues,
  TransitGatewayPropagationState,
  UnlimitedSupportedInstanceFamily,
  VolumeModificationState,
  VpnProtocol,
} from "./models_6";

/**
 * <p>Describes the multicast domain associations.</p>
 */
export interface TransitGatewayMulticastDomainAssociations {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p> The ID of the Amazon Web Services account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The subnets associated with the multicast domain.</p>
   */
  Subnets?: SubnetAssociation[];
}

export namespace TransitGatewayMulticastDomainAssociations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDomainAssociations): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the transit gateway peering attachment.</p>
 */
export interface TransitGatewayPeeringAttachment {
  /**
   * <p>The ID of the transit gateway peering attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Information about the requester transit gateway.</p>
   */
  RequesterTgwInfo?: PeeringTgwInfo;

  /**
   * <p>Information about the accepter transit gateway.</p>
   */
  AccepterTgwInfo?: PeeringTgwInfo;

  /**
   * <p>The status of the transit gateway peering attachment.</p>
   */
  Status?: PeeringAttachmentStatus;

  /**
   * <p>The state of the transit gateway peering attachment. Note that the <code>initiating</code> state has been deprecated.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * <p>The time the transit gateway peering attachment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The tags for the transit gateway peering attachment.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayPeeringAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayPeeringAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC attachment.</p>
 */
export interface TransitGatewayVpcAttachment {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC.</p>
   */
  VpcOwnerId?: string;

  /**
   * <p>The state of the VPC attachment. Note that the <code>initiating</code> state has been deprecated.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * <p>The IDs of the subnets.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The VPC attachment options.</p>
   */
  Options?: TransitGatewayVpcAttachmentOptions;

  /**
   * <p>The tags for the VPC attachment.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayVpcAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayVpcAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Information about items that were not successfully processed in a batch call.</p>
 */
export interface UnsuccessfulItem {
  /**
   * <p>Information about the error.</p>
   */
  Error?: UnsuccessfulItemError;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;
}

export namespace UnsuccessfulItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsuccessfulItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv4 CIDR block.</p>
 */
export interface CidrBlock {
  /**
   * <p>The IPv4 CIDR block.</p>
   */
  CidrBlock?: string;
}

export namespace CidrBlock {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CidrBlock): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC peering connection.</p>
 */
export interface VpcPeeringConnection {
  /**
   * <p>Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
   */
  AccepterVpcInfo?: VpcPeeringConnectionVpcInfo;

  /**
   * <p>The time that an unaccepted VPC peering connection will expire.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
   */
  RequesterVpcInfo?: VpcPeeringConnectionVpcInfo;

  /**
   * <p>The status of the VPC peering connection.</p>
   */
  Status?: VpcPeeringConnectionStateReason;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export namespace VpcPeeringConnection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcPeeringConnection): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network access control (ACL) rule.</p>
 */
export interface AnalysisAclRule {
  /**
   * <p>The IPv4 address range, in CIDR notation.</p>
   */
  Cidr?: string;

  /**
   * <p>Indicates whether the rule is an outbound rule.</p>
   */
  Egress?: boolean;

  /**
   * <p>The range of ports.</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol.</p>
   */
  Protocol?: string;

  /**
   * <p>Indicates whether to allow or deny traffic that matches the rule.</p>
   */
  RuleAction?: string;

  /**
   * <p>The rule number.</p>
   */
  RuleNumber?: number;
}

export namespace AnalysisAclRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisAclRule): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a path component.</p>
 */
export interface AnalysisComponent {
  /**
   * <p>The ID of the component.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the analysis component.</p>
   */
  Name?: string;
}

export namespace AnalysisComponent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisComponent): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an additional detail for a path analysis.</p>
 */
export interface AdditionalDetail {
  /**
   * <p>The information type.</p>
   */
  AdditionalDetailType?: string;

  /**
   * <p>The path component.</p>
   */
  Component?: AnalysisComponent;
}

export namespace AdditionalDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdditionalDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a header. Reflects any changes made by a component as traffic passes through.
 *          The fields of an inbound header are null except for the first component of a path.</p>
 */
export interface AnalysisPacketHeader {
  /**
   * <p>The destination addresses.</p>
   */
  DestinationAddresses?: string[];

  /**
   * <p>The destination port ranges.</p>
   */
  DestinationPortRanges?: PortRange[];

  /**
   * <p>The protocol.</p>
   */
  Protocol?: string;

  /**
   * <p>The source addresses.</p>
   */
  SourceAddresses?: string[];

  /**
   * <p>The source port ranges.</p>
   */
  SourcePortRanges?: PortRange[];
}

export namespace AnalysisPacketHeader {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisPacketHeader): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route table route.</p>
 */
export interface AnalysisRouteTableRoute {
  /**
   * <p>The destination IPv4 address, in CIDR notation.</p>
   */
  DestinationCidr?: string;

  /**
   * <p>The prefix of the Amazon Web Service.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>The ID of an egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of the gateway, such as an internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of the instance, such as a NAT instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Describes how the route was created. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>CreateRouteTable - The route was automatically created when the route table was created.</p>
   *             </li>
   *             <li>
   *                <p>CreateRoute - The route was manually added to the route table.</p>
   *             </li>
   *             <li>
   *                <p>EnableVgwRoutePropagation - The route was propagated by route propagation.</p>
   *             </li>
   *          </ul>
   */
  Origin?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export namespace AnalysisRouteTableRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisRouteTableRoute): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group rule.</p>
 */
export interface AnalysisSecurityGroupRule {
  /**
   * <p>The IPv4 address range, in CIDR notation.</p>
   */
  Cidr?: string;

  /**
   * <p>The direction. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>egress</p>
   *             </li>
   *             <li>
   *                <p>ingress</p>
   *             </li>
   *          </ul>
   */
  Direction?: string;

  /**
   * <p>The security group ID.</p>
   */
  SecurityGroupId?: string;

  /**
   * <p>The port range.</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The prefix list ID.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The protocol name.</p>
   */
  Protocol?: string;
}

export namespace AnalysisSecurityGroupRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisSecurityGroupRule): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route in a transit gateway route table.</p>
 */
export interface TransitGatewayRouteTableRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   */
  DestinationCidr?: string;

  /**
   * <p>The state of the route.</p>
   */
  State?: string;

  /**
   * <p>The route origin. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>static</p>
   *             </li>
   *             <li>
   *                <p>propagated</p>
   *             </li>
   *          </ul>
   */
  RouteOrigin?: string;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The ID of the route attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>The ID of the resource for the route attachment.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type for the route attachment.</p>
   */
  ResourceType?: string;
}

export namespace TransitGatewayRouteTableRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayRouteTableRoute): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a path component.</p>
 */
export interface PathComponent {
  /**
   * <p>The sequence number.</p>
   */
  SequenceNumber?: number;

  /**
   * <p>The network ACL rule.</p>
   */
  AclRule?: AnalysisAclRule;

  /**
   * <p>The resource to which the path component is attached.</p>
   */
  AttachedTo?: AnalysisComponent;

  /**
   * <p>The component.</p>
   */
  Component?: AnalysisComponent;

  /**
   * <p>The destination VPC.</p>
   */
  DestinationVpc?: AnalysisComponent;

  /**
   * <p>The outbound header.</p>
   */
  OutboundHeader?: AnalysisPacketHeader;

  /**
   * <p>The inbound header.</p>
   */
  InboundHeader?: AnalysisPacketHeader;

  /**
   * <p>The route table route.</p>
   */
  RouteTableRoute?: AnalysisRouteTableRoute;

  /**
   * <p>The security group rule.</p>
   */
  SecurityGroupRule?: AnalysisSecurityGroupRule;

  /**
   * <p>The source VPC.</p>
   */
  SourceVpc?: AnalysisComponent;

  /**
   * <p>The subnet.</p>
   */
  Subnet?: AnalysisComponent;

  /**
   * <p>The component VPC.</p>
   */
  Vpc?: AnalysisComponent;

  /**
   * <p>The additional details.</p>
   */
  AdditionalDetails?: AdditionalDetail[];

  /**
   * <p>Describes a path component.</p>
   */
  TransitGateway?: AnalysisComponent;

  /**
   * <p>The route in a transit gateway route table.</p>
   */
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute;
}

export namespace PathComponent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PathComponent): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a finding for a Network Access Scope.</p>
 */
export interface AccessScopeAnalysisFinding {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId?: string;

  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * <p>The ID of the finding.</p>
   */
  FindingId?: string;

  /**
   * <p>The finding components.</p>
   */
  FindingComponents?: PathComponent[];
}

export namespace AccessScopeAnalysisFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessScopeAnalysisFinding): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a path statement.</p>
 */
export interface PathStatement {
  /**
   * <p>The packet header statement.</p>
   */
  PacketHeaderStatement?: PacketHeaderStatement;

  /**
   * <p>The resource statement.</p>
   */
  ResourceStatement?: ResourceStatement;
}

export namespace PathStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PathStatement): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a through resource statement.</p>
 */
export interface ThroughResourcesStatement {
  /**
   * <p>The resource statement.</p>
   */
  ResourceStatement?: ResourceStatement;
}

export namespace ThroughResourcesStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThroughResourcesStatement): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a path.</p>
 */
export interface AccessScopePath {
  /**
   * <p>The source.</p>
   */
  Source?: PathStatement;

  /**
   * <p>The destination.</p>
   */
  Destination?: PathStatement;

  /**
   * <p>The through resources.</p>
   */
  ThroughResources?: ThroughResourcesStatement[];
}

export namespace AccessScopePath {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessScopePath): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a value of an account attribute.</p>
 */
export interface AccountAttributeValue {
  /**
   * <p>The value of the attribute.</p>
   */
  AttributeValue?: string;
}

export namespace AccountAttributeValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountAttributeValue): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an account attribute.</p>
 */
export interface AccountAttribute {
  /**
   * <p>The name of the account attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The values for the account attribute.</p>
   */
  AttributeValues?: AccountAttributeValue[];
}

export namespace AccountAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a running instance in a Spot Fleet.</p>
 */
export interface ActiveInstance {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the Spot Instance request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>The health status of the instance. If the status of either the instance status check
   *             or the system status check is <code>impaired</code>, the health status of the instance
   *             is <code>unhealthy</code>. Otherwise, the health status is <code>healthy</code>.</p>
   */
  InstanceHealth?: InstanceHealthStatus | string;
}

export namespace ActiveInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActiveInstance): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Elastic IP address, or a carrier IP address.</p>
 */
export interface Address {
  /**
   * <p>The ID of the instance that the address is associated with (if any).</p>
   */
  InstanceId?: string;

  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;

  /**
   * <p>The ID representing the allocation of the address for use with EC2-VPC.</p>
   */
  AllocationId?: string;

  /**
   * <p>The ID representing the association of the address with an instance in a VPC.</p>
   */
  AssociationId?: string;

  /**
   * <p>Indicates whether this Elastic IP address is for use with instances
   * 				in EC2-Classic (<code>standard</code>) or instances in a VPC (<code>vpc</code>).</p>
   */
  Domain?: DomainType | string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the network interface.</p>
   */
  NetworkInterfaceOwnerId?: string;

  /**
   * <p>The private IP address associated with the Elastic IP address.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>Any tags assigned to the Elastic IP address.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of an address pool.</p>
   */
  PublicIpv4Pool?: string;

  /**
   * <p>The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from
   *       which Amazon Web Services advertises IP addresses.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The customer-owned IP address.</p>
   */
  CustomerOwnedIp?: string;

  /**
   * <p>The ID of the customer-owned address pool.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>The carrier IP address associated. This option is only available for network interfaces
   *       which  reside in a subnet in a Wavelength Zone (for example an EC2 instance). </p>
   */
  CarrierIp?: string;
}

export namespace Address {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Address): any => ({
    ...obj,
  });
}

/**
 * <p>The status of an updated pointer (PTR) record for an Elastic IP address.</p>
 */
export interface PtrUpdateStatus {
  /**
   * <p>The value for the PTR record update.</p>
   */
  Value?: string;

  /**
   * <p>The status of the PTR record update.</p>
   */
  Status?: string;

  /**
   * <p>The reason for the PTR record update.</p>
   */
  Reason?: string;
}

export namespace PtrUpdateStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PtrUpdateStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The attributes associated with an Elastic IP address.</p>
 */
export interface AddressAttribute {
  /**
   * <p>The public IP address.</p>
   */
  PublicIp?: string;

  /**
   * <p>[EC2-VPC] The allocation ID.</p>
   */
  AllocationId?: string;

  /**
   * <p>The pointer (PTR) record for the IP address.</p>
   */
  PtrRecord?: string;

  /**
   * <p>The updated PTR record for the IP address.</p>
   */
  PtrRecordUpdate?: PtrUpdateStatus;
}

export namespace AddressAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddressAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an address range that is provisioned for use with your Amazon Web Services resources
 *          through bring your own IP addresses (BYOIP).</p>
 */
export interface ByoipCidr {
  /**
   * <p>The address range, in CIDR notation.</p>
   */
  Cidr?: string;

  /**
   * <p>The description of the address range.</p>
   */
  Description?: string;

  /**
   * <p>Upon success, contains the ID of the address pool. Otherwise, contains an error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The state of the address pool.</p>
   */
  State?: ByoipCidrState | string;
}

export namespace ByoipCidr {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ByoipCidr): any => ({
    ...obj,
  });
}

/**
 * <p>In IPAM, an allocation is a CIDR assignment from an IPAM pool to another resource or IPAM pool.</p>
 */
export interface IpamPoolAllocation {
  /**
   * <p>The CIDR for the allocation. A CIDR is a representation of an IP address and its associated network mask (or netmask) and
   *          refers to a range of IP addresses. An IPv4 CIDR example is <code>10.24.34.0/23</code>. An IPv6 CIDR example is <code>2001:DB8::/32</code>.</p>
   */
  Cidr?: string;

  /**
   * <p>The ID of an allocation.</p>
   */
  IpamPoolAllocationId?: string;

  /**
   * <p>A description of the pool allocation.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType?: IpamPoolAllocationResourceType | string;

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   */
  ResourceRegion?: string;

  /**
   * <p>The owner of the resource.</p>
   */
  ResourceOwner?: string;
}

export namespace IpamPoolAllocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpamPoolAllocation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a principal.</p>
 */
export interface AllowedPrincipal {
  /**
   * <p>The type of principal.</p>
   */
  PrincipalType?: PrincipalType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal.</p>
   */
  Principal?: string;
}

export namespace AllowedPrincipal {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllowedPrincipal): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an potential intermediate component of a feasible path.</p>
 */
export interface AlternatePathHint {
  /**
   * <p>The ID of the component.</p>
   */
  ComponentId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  ComponentArn?: string;
}

export namespace AlternatePathHint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlternatePathHint): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv4 prefix.</p>
 */
export interface Ipv4PrefixSpecification {
  /**
   * <p>The IPv4 prefix. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html">
   *             Assigning prefixes to Amazon EC2 network interfaces</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Ipv4Prefix?: string;
}

export namespace Ipv4PrefixSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv4PrefixSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the private IP addresses assigned to a network interface.</p>
 */
export interface AssignedPrivateIpAddress {
  /**
   * <p>The private IP address assigned to the network interface.</p>
   */
  PrivateIpAddress?: string;
}

export namespace AssignedPrivateIpAddress {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssignedPrivateIpAddress): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the state of a target network association.</p>
 */
export interface AssociationStatus {
  /**
   * <p>The state of the target network association.</p>
   */
  Code?: AssociationStatusCode | string;

  /**
   * <p>A message about the status of the target network association, if applicable.</p>
   */
  Message?: string;
}

export namespace AssociationStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociationStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IAM instance profile.</p>
 */
export interface IamInstanceProfile {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the instance profile.</p>
   */
  Id?: string;
}

export namespace IamInstanceProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IamInstanceProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between an IAM instance profile and an instance.</p>
 */
export interface IamInstanceProfileAssociation {
  /**
   * <p>The ID of the association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfile;

  /**
   * <p>The state of the association.</p>
   */
  State?: IamInstanceProfileAssociationState | string;

  /**
   * <p>The time the IAM instance profile was associated with the instance.</p>
   */
  Timestamp?: Date;
}

export namespace IamInstanceProfileAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IamInstanceProfileAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>The event window.</p>
 */
export interface InstanceEventWindow {
  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId?: string;

  /**
   * <p>One or more time ranges defined for the event window.</p>
   */
  TimeRanges?: InstanceEventWindowTimeRange[];

  /**
   * <p>The name of the event window.</p>
   */
  Name?: string;

  /**
   * <p>The cron expression defined for the event window.</p>
   */
  CronExpression?: string;

  /**
   * <p>One or more targets associated with the event window.</p>
   */
  AssociationTarget?: InstanceEventWindowAssociationTarget;

  /**
   * <p>The current state of the event window.</p>
   */
  State?: InstanceEventWindowState | string;

  /**
   * <p>The instance tags associated with the event window.</p>
   */
  Tags?: Tag[];
}

export namespace InstanceEventWindow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceEventWindow): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the state of an association between a route table and a subnet or gateway.</p>
 */
export interface RouteTableAssociationState {
  /**
   * <p>The state of the association.</p>
   */
  State?: RouteTableAssociationStateCode | string;

  /**
   * <p>The status message, if applicable.</p>
   */
  StatusMessage?: string;
}

export namespace RouteTableAssociationState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteTableAssociationState): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a subnet and an IPv6 CIDR block.</p>
 */
export interface SubnetIpv6CidrBlockAssociation {
  /**
   * <p>The ID of the association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The state of the CIDR block.</p>
   */
  Ipv6CidrBlockState?: SubnetCidrBlockState;
}

export namespace SubnetIpv6CidrBlockAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetIpv6CidrBlockAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a resource attachment and a transit gateway route table.</p>
 */
export interface TransitGatewayAssociation {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayAssociationState | string;
}

export namespace TransitGatewayAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayAssociation): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>Currently available in <b>limited preview only</b>.
 *                 If you are interested in using this feature, contact your account manager.</p>
 *         </note>
 *         <p>Information about an association between a branch network interface with a trunk network interface.</p>
 */
export interface TrunkInterfaceAssociation {
  /**
   * <p>The ID of the association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the branch network interface.</p>
   */
  BranchInterfaceId?: string;

  /**
   * <p>The ID of the trunk network interface.</p>
   */
  TrunkInterfaceId?: string;

  /**
   * <p>The interface protocol. Valid values are <code>VLAN</code> and <code>GRE</code>.</p>
   */
  InterfaceProtocol?: InterfaceProtocolType | string;

  /**
   * <p>The ID of the VLAN when you use the VLAN protocol.</p>
   */
  VlanId?: number;

  /**
   * <p>The application key when you use the GRE protocol.</p>
   */
  GreKey?: number;

  /**
   * <p>The tags for the trunk interface association.</p>
   */
  Tags?: Tag[];
}

export namespace TrunkInterfaceAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrunkInterfaceAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv4 CIDR block associated with a VPC.</p>
 */
export interface VpcCidrBlockAssociation {
  /**
   * <p>The association ID for the IPv4 CIDR block.</p>
   */
  AssociationId?: string;

  /**
   * <p>The IPv4 CIDR block.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Information about the state of the CIDR block.</p>
   */
  CidrBlockState?: VpcCidrBlockState;
}

export namespace VpcCidrBlockAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcCidrBlockAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 CIDR block associated with a VPC.</p>
 */
export interface VpcIpv6CidrBlockAssociation {
  /**
   * <p>The association ID for the IPv6 CIDR block.</p>
   */
  AssociationId?: string;

  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>Information about the state of the CIDR block.</p>
   */
  Ipv6CidrBlockState?: VpcCidrBlockState;

  /**
   * <p>The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from
   *       which Amazon Web Services advertises IP addresses, for example, <code>us-east-1-wl1-bos-wlz-1</code>.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The ID of the IPv6 address pool from which the IPv6 CIDR block is allocated.</p>
   */
  Ipv6Pool?: string;
}

export namespace VpcIpv6CidrBlockAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcIpv6CidrBlockAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an attachment between a virtual private gateway and a VPC.</p>
 */
export interface VpcAttachment {
  /**
   * <p>The current state of the attachment.</p>
   */
  State?: AttachmentStatus | string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace VpcAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the state of an authorization rule.</p>
 */
export interface ClientVpnAuthorizationRuleStatus {
  /**
   * <p>The state of the authorization rule.</p>
   */
  Code?: ClientVpnAuthorizationRuleStatusCode | string;

  /**
   * <p>A message about the status of the authorization rule, if applicable.</p>
   */
  Message?: string;
}

export namespace ClientVpnAuthorizationRuleStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnAuthorizationRuleStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group rule.</p>
 */
export interface SecurityGroupRule {
  /**
   * <p>The ID of the security group rule.</p>
   */
  SecurityGroupRuleId?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the security group. </p>
   */
  GroupOwnerId?: string;

  /**
   * <p>Indicates whether the security group rule is an outbound rule.</p>
   */
  IsEgress?: boolean;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>,
   *                 <code>icmpv6</code>) or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). </p>
   *         <p>Use <code>-1</code> to specify all protocols.</p>
   */
  IpProtocol?: string;

  /**
   * <p>The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type. A value
   *             of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must
   *             specify all codes.</p>
   */
  FromPort?: number;

  /**
   * <p>The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of <code>-1</code> indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types, you must specify all codes. </p>
   */
  ToPort?: number;

  /**
   * <p>The IPv4 CIDR range.</p>
   */
  CidrIpv4?: string;

  /**
   * <p>The IPv6 CIDR range.</p>
   */
  CidrIpv6?: string;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>Describes the security group that is referenced in the rule.</p>
   */
  ReferencedGroupInfo?: ReferencedSecurityGroup;

  /**
   * <p>The security group rule description.</p>
   */
  Description?: string;

  /**
   * <p>The tags applied to the security group rule.</p>
   */
  Tags?: Tag[];
}

export namespace SecurityGroupRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroupRule): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an error for <a>BundleInstance</a>.</p>
 */
export interface BundleTaskError {
  /**
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace BundleTaskError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BundleTaskError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a bundle task.</p>
 */
export interface BundleTask {
  /**
   * <p>The ID of the bundle task.</p>
   */
  BundleId?: string;

  /**
   * <p>If the task fails, a description of the error.</p>
   */
  BundleTaskError?: BundleTaskError;

  /**
   * <p>The ID of the instance associated with this bundle task.</p>
   */
  InstanceId?: string;

  /**
   * <p>The level of task completion, as a percent (for example, 20%).</p>
   */
  Progress?: string;

  /**
   * <p>The time this task started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The state of the task.</p>
   */
  State?: BundleTaskState | string;

  /**
   * <p>The Amazon S3 storage locations.</p>
   */
  Storage?: Storage;

  /**
   * <p>The time of the most recent update for the task.</p>
   */
  UpdateTime?: Date;
}

export namespace BundleTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BundleTask): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Capacity Reservation Fleet cancellation error.</p>
 */
export interface CancelCapacityReservationFleetError {
  /**
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace CancelCapacityReservationFleetError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelCapacityReservationFleetError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Capacity Reservation Fleet that could not be cancelled.</p>
 */
export interface FailedCapacityReservationFleetCancellationResult {
  /**
   * <p>The ID of the Capacity Reservation Fleet that could not be cancelled.</p>
   */
  CapacityReservationFleetId?: string;

  /**
   * <p>Information about the Capacity Reservation Fleet cancellation error.</p>
   */
  CancelCapacityReservationFleetError?: CancelCapacityReservationFleetError;
}

export namespace FailedCapacityReservationFleetCancellationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailedCapacityReservationFleetCancellationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Capacity Reservation Fleet that was successfully cancelled.</p>
 */
export interface CapacityReservationFleetCancellationState {
  /**
   * <p>The current state of the Capacity Reservation Fleet.</p>
   */
  CurrentFleetState?: CapacityReservationFleetState | string;

  /**
   * <p>The previous state of the Capacity Reservation Fleet.</p>
   */
  PreviousFleetState?: CapacityReservationFleetState | string;

  /**
   * <p>The ID of the Capacity Reservation Fleet that was successfully cancelled.</p>
   */
  CapacityReservationFleetId?: string;
}

export namespace CapacityReservationFleetCancellationState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityReservationFleetCancellationState): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance listing.</p>
 */
export interface ReservedInstancesListing {
  /**
   * <p>A unique, case-sensitive key supplied by the client to ensure that the request is
   * 			idempotent. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The time the listing was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The number of instances in this state.</p>
   */
  InstanceCounts?: InstanceCount[];

  /**
   * <p>The price of the Reserved Instance listing.</p>
   */
  PriceSchedules?: PriceSchedule[];

  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;

  /**
   * <p>The ID of the Reserved Instance listing.</p>
   */
  ReservedInstancesListingId?: string;

  /**
   * <p>The status of the Reserved Instance listing.</p>
   */
  Status?: ListingStatus | string;

  /**
   * <p>The reason for the current status of the Reserved Instance listing. The response can be blank.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The last modified timestamp of the listing.</p>
   */
  UpdateDate?: Date;
}

export namespace ReservedInstancesListing {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedInstancesListing): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Spot Fleet request that was successfully canceled.</p>
 */
export interface CancelSpotFleetRequestsSuccessItem {
  /**
   * <p>The current state of the Spot Fleet request.</p>
   */
  CurrentSpotFleetRequestState?: BatchState | string;

  /**
   * <p>The previous state of the Spot Fleet request.</p>
   */
  PreviousSpotFleetRequestState?: BatchState | string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

export namespace CancelSpotFleetRequestsSuccessItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelSpotFleetRequestsSuccessItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Spot Fleet error.</p>
 */
export interface CancelSpotFleetRequestsError {
  /**
   * <p>The error code.</p>
   */
  Code?: CancelBatchErrorCode | string;

  /**
   * <p>The description for the error code.</p>
   */
  Message?: string;
}

export namespace CancelSpotFleetRequestsError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelSpotFleetRequestsError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Spot Fleet request that was not successfully canceled.</p>
 */
export interface CancelSpotFleetRequestsErrorItem {
  /**
   * <p>The error.</p>
   */
  Error?: CancelSpotFleetRequestsError;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

export namespace CancelSpotFleetRequestsErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelSpotFleetRequestsErrorItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a request to cancel a Spot Instance.</p>
 */
export interface CancelledSpotInstanceRequest {
  /**
   * <p>The ID of the Spot Instance request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>The state of the Spot Instance request.</p>
   */
  State?: CancelSpotInstanceRequestState | string;
}

export namespace CancelledSpotInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelledSpotInstanceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Capacity Reservation.</p>
 */
export interface CapacityReservation {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Capacity Reservation.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Capacity Reservation.</p>
   */
  CapacityReservationArn?: string;

  /**
   * <p>The Availability Zone ID of the Capacity Reservation.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
   */
  InstanceType?: string;

  /**
   * <p>The type of operating system for which the Capacity Reservation reserves capacity.</p>
   */
  InstancePlatform?: CapacityReservationInstancePlatform | string;

  /**
   * <p>The Availability Zone in which the capacity is reserved.</p>
   */
  AvailabilityZone?: string;

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
   * <p>The total number of instances for which the Capacity Reservation reserves capacity.</p>
   */
  TotalInstanceCount?: number;

  /**
   * <p>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</p>
   */
  AvailableInstanceCount?: number;

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
   * <p>The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <code>active</code> - The Capacity Reservation is active and the capacity is available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The Capacity Reservation expired automatically at the date and time specified
   * 					in your request. The reserved capacity is no longer available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelled</code> - The Capacity Reservation was cancelled. The reserved capacity is no
   * 					longer available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code> - The Capacity Reservation request was successful but the capacity
   * 					provisioning is still pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - The Capacity Reservation request has failed. A request might fail
   * 					due to invalid request parameters, capacity constraints, or instance limit constraints.
   * 					Failed requests are retained for 60 minutes.</p>
   *             </li>
   *          </ul>
   */
  State?: CapacityReservationState | string;

  /**
   * <p>The date and time at which the Capacity Reservation was started.</p>
   */
  StartDate?: Date;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
   * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
   * 				<code>expired</code> when it reaches its end date and time.</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
   * 			types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time.</p>
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
   *                   <code>open</code> - The Capacity Reservation accepts all instances that have matching attributes (instance type, platform,
   * 				and Availability Zone). Instances that have matching attributes launch into the Capacity Reservation automatically without specifying
   * 				any additional parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targeted</code> - The Capacity Reservation only accepts instances that have matching attributes
   * 					(instance type, platform, and Availability Zone), and explicitly target the
   * 					Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. </p>
   *             </li>
   *          </ul>
   */
  InstanceMatchCriteria?: InstanceMatchCriteria | string;

  /**
   * <p>The date and time at which the Capacity Reservation was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>Any tags assigned to the Capacity Reservation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost on which the Capacity
   * 	  		Reservation was created.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the Capacity Reservation Fleet to which the Capacity Reservation belongs.
   * 			Only valid for Capacity Reservations that were created by a Capacity Reservation Fleet.</p>
   */
  CapacityReservationFleetId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster placement group in which
   * 			the Capacity Reservation was created. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-cpg.html">
   * 				Capacity Reservations for cluster placement groups</a> in the
   * 			<i>Amazon EC2 User Guide</i>.</p>
   */
  PlacementGroupArn?: string;
}

export namespace CapacityReservation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityReservation): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a Capacity Reservation in a Capacity Reservation Fleet.</p>
 */
export interface FleetCapacityReservation {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The ID of the Availability Zone in which the Capacity Reservation reserves capacity.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The instance type for which the Capacity Reservation reserves capacity.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The type of operating system for which the Capacity Reservation reserves capacity.</p>
   */
  InstancePlatform?: CapacityReservationInstancePlatform | string;

  /**
   * <p>The Availability Zone in which the Capacity Reservation reserves capacity.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The total number of instances for which the Capacity Reservation reserves capacity.</p>
   */
  TotalInstanceCount?: number;

  /**
   * <p>The number of capacity units fulfilled by the Capacity Reservation. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">
   * 				Total target capacity</a> in the Amazon EC2 User Guide.</p>
   */
  FulfilledCapacity?: number;

  /**
   * <p>Indicates whether the Capacity Reservation reserves capacity for EBS-optimized instance types.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The date and time at which the Capacity Reservation was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The weight of the instance type in the Capacity Reservation Fleet. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#instance-weight">
   * 				Instance type weight</a> in the Amazon EC2 User Guide.</p>
   */
  Weight?: number;

  /**
   * <p>The priority of the instance type in the Capacity Reservation Fleet. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#instance-priority">
   * 				Instance type priority</a> in the Amazon EC2 User Guide.</p>
   */
  Priority?: number;
}

export namespace FleetCapacityReservation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FleetCapacityReservation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a carrier gateway.</p>
 */
export interface CarrierGateway {
  /**
   * <p>The ID of the carrier gateway.</p>
   */
  CarrierGatewayId?: string;

  /**
   * <p>The ID of the VPC associated with the carrier gateway.</p>
   */
  VpcId?: string;

  /**
   * <p>The state of the carrier gateway.</p>
   */
  State?: CarrierGatewayState | string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the carrier gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the carrier gateway.</p>
   */
  Tags?: Tag[];
}

export namespace CarrierGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CarrierGateway): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the state of a Client VPN endpoint.</p>
 */
export interface ClientVpnEndpointStatus {
  /**
   * <p>The state of the Client VPN endpoint. Possible states include:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>pending-associate</code> - The Client VPN endpoint has been created but no target networks
   * 					have been associated. The Client VPN endpoint cannot accept connections.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>available</code> - The Client VPN endpoint has been created and a target network has been
   * 					associated. The Client VPN endpoint can accept connections.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>deleting</code> - The Client VPN endpoint is being deleted. The Client VPN endpoint cannot accept
   * 					connections.</p>
   *             </li>
   *             <li>
   * 				           <p>
   *                   <code>deleted</code> - The Client VPN endpoint has been deleted. The Client VPN endpoint cannot accept
   * 					connections.</p>
   * 			         </li>
   *          </ul>
   */
  Code?: ClientVpnEndpointStatusCode | string;

  /**
   * <p>A message about the status of the Client VPN endpoint.</p>
   */
  Message?: string;
}

export namespace ClientVpnEndpointStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnEndpointStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the state of a Client VPN endpoint route.</p>
 */
export interface ClientVpnRouteStatus {
  /**
   * <p>The state of the Client VPN endpoint route.</p>
   */
  Code?: ClientVpnRouteStatusCode | string;

  /**
   * <p>A message about the status of the Client VPN endpoint route, if applicable.</p>
   */
  Message?: string;
}

export namespace ClientVpnRouteStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnRouteStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a customer gateway.</p>
 */
export interface CustomerGateway {
  /**
   * <p>The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number
   *             (ASN).</p>
   */
  BgpAsn?: string;

  /**
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId?: string;

  /**
   * <p>The Internet-routable IP address of the customer gateway's outside interface.</p>
   */
  IpAddress?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the customer gateway certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The current state of the customer gateway (<code>pending | available | deleting |
   *                 deleted</code>).</p>
   */
  State?: string;

  /**
   * <p>The type of VPN connection the customer gateway supports
   *             (<code>ipsec.1</code>).</p>
   */
  Type?: string;

  /**
   * <p>The name of customer gateway device.</p>
   */
  DeviceName?: string;

  /**
   * <p>Any tags assigned to the customer gateway.</p>
   */
  Tags?: Tag[];
}

export namespace CustomerGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomerGateway): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a subnet.</p>
 */
export interface Subnet {
  /**
   * <p>The Availability Zone of the subnet.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The AZ ID of the subnet.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The number of unused private IPv4 addresses in the subnet. The IPv4 addresses for any
   * 			stopped instances are considered unavailable.</p>
   */
  AvailableIpAddressCount?: number;

  /**
   * <p>The IPv4 CIDR block assigned to the subnet.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Indicates whether this is the default subnet for the Availability Zone.</p>
   */
  DefaultForAz?: boolean;

  /**
   * <p>
   *             Indicates the device position for local network interfaces in this subnet. For example,
   *             <code>1</code> indicates local network interfaces in this subnet are the secondary
   *             network interface (eth1).
   *         </p>
   */
  EnableLniAtDeviceIndex?: number;

  /**
   * <p>Indicates whether instances launched in this subnet receive a public IPv4 address.</p>
   */
  MapPublicIpOnLaunch?: boolean;

  /**
   * <p>Indicates whether a network interface created in this subnet (including a network
   *             interface created by <a>RunInstances</a>) receives a customer-owned IPv4 address.</p>
   */
  MapCustomerOwnedIpOnLaunch?: boolean;

  /**
   * <p>The customer-owned IPv4 address pool associated with the subnet.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>The current state of the subnet.</p>
   */
  State?: SubnetState | string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the VPC the subnet is in.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the subnet.</p>
   */
  OwnerId?: string;

  /**
   * <p>Indicates whether a network interface created in this subnet (including a network
   *             interface created by <a>RunInstances</a>) receives an IPv6 address.</p>
   */
  AssignIpv6AddressOnCreation?: boolean;

  /**
   * <p>Information about the IPv6 CIDR blocks associated with the subnet.</p>
   */
  Ipv6CidrBlockAssociationSet?: SubnetIpv6CidrBlockAssociation[];

  /**
   * <p>Any tags assigned to the subnet.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the subnet.</p>
   */
  SubnetArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet
   *             should return synthetic IPv6 addresses for IPv4-only destinations.</p>
   */
  EnableDns64?: boolean;

  /**
   * <p>Indicates whether this is an IPv6 only subnet.</p>
   */
  Ipv6Native?: boolean;

  /**
   * <p>The type of hostnames to assign to instances in the subnet at launch. An instance hostname
   *             is based on the IPv4 address or ID of the instance.</p>
   */
  PrivateDnsNameOptionsOnLaunch?: PrivateDnsNameOptionsOnLaunch;
}

export namespace Subnet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Subnet): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC.</p>
 */
export interface Vpc {
  /**
   * <p>The primary IPv4 CIDR block for the VPC.</p>
   */
  CidrBlock?: string;

  /**
   * <p>The ID of the set of DHCP options you've associated with the VPC.</p>
   */
  DhcpOptionsId?: string;

  /**
   * <p>The current state of the VPC.</p>
   */
  State?: VpcState | string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC.</p>
   */
  OwnerId?: string;

  /**
   * <p>The allowed tenancy of instances launched into the VPC.</p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>Information about the IPv6 CIDR blocks associated with the VPC.</p>
   */
  Ipv6CidrBlockAssociationSet?: VpcIpv6CidrBlockAssociation[];

  /**
   * <p>Information about the IPv4 CIDR blocks associated with the VPC.</p>
   */
  CidrBlockAssociationSet?: VpcCidrBlockAssociation[];

  /**
   * <p>Indicates whether the VPC is the default VPC.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Tag[];
}

export namespace Vpc {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Vpc): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a DHCP configuration option.</p>
 */
export interface DhcpConfiguration {
  /**
   * <p>The name of a DHCP option.</p>
   */
  Key?: string;

  /**
   * <p>One or more values for the DHCP option.</p>
   */
  Values?: AttributeValue[];
}

export namespace DhcpConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DhcpConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a set of DHCP options.</p>
 */
export interface DhcpOptions {
  /**
   * <p>One or more DHCP options in the set.</p>
   */
  DhcpConfigurations?: DhcpConfiguration[];

  /**
   * <p>The ID of the set of DHCP options.</p>
   */
  DhcpOptionsId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the DHCP options set.</p>
   */
  OwnerId?: string;

  /**
   * <p>Any tags assigned to the DHCP options set.</p>
   */
  Tags?: Tag[];
}

export namespace DhcpOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DhcpOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the attachment of a VPC to an internet gateway or an egress-only internet
 * 			gateway.</p>
 */
export interface InternetGatewayAttachment {
  /**
   * <p>The current state of the attachment. For an internet gateway, the state is
   * 				<code>available</code> when attached to a VPC; otherwise, this value is not
   * 			returned.</p>
   */
  State?: AttachmentStatus | string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace InternetGatewayAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternetGatewayAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an egress-only internet gateway.</p>
 */
export interface EgressOnlyInternetGateway {
  /**
   * <p>Information about the attachment of the egress-only internet gateway.</p>
   */
  Attachments?: InternetGatewayAttachment[];

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The tags assigned to the egress-only internet gateway.</p>
   */
  Tags?: Tag[];
}

export namespace EgressOnlyInternetGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EgressOnlyInternetGateway): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the placement of an instance.</p>
 */
export interface PlacementResponse {
  /**
   * <p>The name of the placement group that the instance is in.</p>
   */
  GroupName?: string;
}

export namespace PlacementResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlacementResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes overrides for a launch template.</p>
 */
export interface FleetLaunchTemplateOverrides {
  /**
   * <p>The instance type.</p>
   *          <note>
   *             <p>If you specify <code>InstanceTypes</code>, you can't specify
   *                <code>InstanceRequirements</code>.</p>
   *          </note>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance.</p>
   */
  MaxPrice?: string;

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Availability Zone in which to launch the instances.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of units provided by the specified instance type.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The priority for the launch template override. The highest priority is launched
   *          first.</p>
   *          <p>If the On-Demand <code>AllocationStrategy</code> is set to <code>prioritized</code>,
   *          EC2 Fleet uses priority to determine which launch template override to use first in fulfilling
   *          On-Demand capacity.</p>
   *          <p>If the Spot <code>AllocationStrategy</code> is set to
   *             <code>capacity-optimized-prioritized</code>, EC2 Fleet uses priority on a best-effort basis
   *          to determine which launch template override to use in fulfilling Spot capacity, but
   *          optimizes for capacity first.</p>
   *          <p>Valid values are whole numbers starting at <code>0</code>. The lower the number, the
   *          higher the priority. If no number is set, the override has the lowest priority. You can set
   *          the same priority for different launch template overrides.</p>
   */
  Priority?: number;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   */
  Placement?: PlacementResponse;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceTypes</code>.</p>
   *          </note>
   */
  InstanceRequirements?: InstanceRequirements;
}

export namespace FleetLaunchTemplateOverrides {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FleetLaunchTemplateOverrides): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface LaunchTemplateAndOverridesResponse {
  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   */
  Overrides?: FleetLaunchTemplateOverrides;
}

export namespace LaunchTemplateAndOverridesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateAndOverridesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the instances that could not be launched by the fleet.</p>
 */
export interface CreateFleetError {
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

export namespace CreateFleetError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the instances that were launched by the fleet.</p>
 */
export interface CreateFleetInstance {
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

export namespace CreateFleetInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetInstance): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the format and location for the export task.</p>
 */
export interface ExportToS3Task {
  /**
   * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
   *    exported.</p>
   */
  ContainerFormat?: ContainerFormat | string;

  /**
   * <p>The format for the exported image.</p>
   */
  DiskImageFormat?: DiskImageFormat | string;

  /**
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and grant
   *    WRITE and READ_ACP permissions to the Amazon Web Services account <code>vm-import-export@amazon.com</code>.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The encryption key for your S3 bucket.</p>
   */
  S3Key?: string;
}

export namespace ExportToS3Task {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportToS3Task): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance to export.</p>
 */
export interface InstanceExportDetails {
  /**
   * <p>The ID of the resource being exported.</p>
   */
  InstanceId?: string;

  /**
   * <p>The target virtualization environment.</p>
   */
  TargetEnvironment?: ExportEnvironment | string;
}

export namespace InstanceExportDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceExportDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an export instance task.</p>
 */
export interface ExportTask {
  /**
   * <p>A description of the resource being exported.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the export task.</p>
   */
  ExportTaskId?: string;

  /**
   * <p>Information about the export task.</p>
   */
  ExportToS3Task?: ExportToS3Task;

  /**
   * <p>Information about the instance to export.</p>
   */
  InstanceExportDetails?: InstanceExportDetails;

  /**
   * <p>The state of the export task.</p>
   */
  State?: ExportTaskState | string;

  /**
   * <p>The status message related to the export task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The tags for the export task.</p>
   */
  Tags?: Tag[];
}

export namespace ExportTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportTask): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an internet gateway.</p>
 */
export interface InternetGateway {
  /**
   * <p>Any VPCs attached to the internet gateway.</p>
   */
  Attachments?: InternetGatewayAttachment[];

  /**
   * <p>The ID of the internet gateway.</p>
   */
  InternetGatewayId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the internet gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>Any tags assigned to the internet gateway.</p>
   */
  Tags?: Tag[];
}

export namespace InternetGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternetGateway): any => ({
    ...obj,
  });
}

/**
 * <p>IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see <a href="/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 */
export interface Ipam {
  /**
   * <p>The Amazon Web Services account ID of the owner of the IPAM.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the IPAM.</p>
   */
  IpamId?: string;

  /**
   * <p>The ARN of the IPAM.</p>
   */
  IpamArn?: string;

  /**
   * <p>The Amazon Web Services Region of the IPAM.</p>
   */
  IpamRegion?: string;

  /**
   * <p>The ID of the IPAM's default public scope.</p>
   */
  PublicDefaultScopeId?: string;

  /**
   * <p>The ID of the IPAM's default private scope.</p>
   */
  PrivateDefaultScopeId?: string;

  /**
   * <p>The number of scopes in the IPAM. The scope quota is 5. For more information on quotas, see <a href="/vpc/latest/ipam/quotas-ipam.html">Quotas in IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   */
  ScopeCount?: number;

  /**
   * <p>The description for the IPAM.</p>
   */
  Description?: string;

  /**
   * <p>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only
   *          discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   *          <p>For more information about operating Regions, see <a href="/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  OperatingRegions?: IpamOperatingRegion[];

  /**
   * <p>The state of the IPAM.</p>
   */
  State?: IpamState | string;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  Tags?: Tag[];
}

export namespace Ipam {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipam): any => ({
    ...obj,
  });
}

/**
 * <p>In IPAM, a pool is a collection of contiguous IP addresses CIDRs. Pools enable you to organize your IP addresses according to your routing and security needs. For example, if you have separate routing and security needs for development and production applications, you can create a pool for each.</p>
 */
export interface IpamPool {
  /**
   * <p>The Amazon Web Services account ID of the owner of the IPAM pool.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the IPAM pool.</p>
   */
  IpamPoolId?: string;

  /**
   * <p>The ID of the source IPAM pool. You can use this option to create an IPAM pool within an existing source pool.</p>
   */
  SourceIpamPoolId?: string;

  /**
   * <p>The ARN of the IPAM pool.</p>
   */
  IpamPoolArn?: string;

  /**
   * <p>The ARN of the scope of the IPAM pool.</p>
   */
  IpamScopeArn?: string;

  /**
   * <p>In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.</p>
   */
  IpamScopeType?: IpamScopeType | string;

  /**
   * <p>The ARN of the IPAM.</p>
   */
  IpamArn?: string;

  /**
   * <p>The Amazon Web Services Region of the IPAM pool.</p>
   */
  IpamRegion?: string;

  /**
   * <p>The locale of the IPAM pool. In IPAM, the locale is the Amazon Web Services Region where you want to make an IPAM pool available for allocations. Only resources in the same Region as the locale of the pool can get IP address allocations from the pool. You can only allocate a CIDR for a VPC, for example, from an IPAM pool that shares a locale with the VPC’s Region. Note that once you choose a Locale for a pool, you cannot modify it. If you choose an Amazon Web Services Region for locale that has not been configured as an operating Region for the IPAM, you'll get an error.</p>
   */
  Locale?: string;

  /**
   * <p>The depth of pools in your IPAM pool. The pool depth quota is 10. For more information, see <a href="/vpc/latest/ipam/quotas-ipam.html">Quotas in IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   */
  PoolDepth?: number;

  /**
   * <p>The state of the IPAM pool.</p>
   */
  State?: IpamPoolState | string;

  /**
   * <p>A message related to the failed creation of an IPAM pool.</p>
   */
  StateMessage?: string;

  /**
   * <p>The description of the IPAM pool.</p>
   */
  Description?: string;

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
   * <p>Determines if a pool is publicly advertisable. This option is not available for pools with AddressFamily set to <code>ipv4</code>.</p>
   */
  PubliclyAdvertisable?: boolean;

  /**
   * <p>The address family of the pool.</p>
   */
  AddressFamily?: AddressFamily | string;

  /**
   * <p>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   */
  AllocationMinNetmaskLength?: number;

  /**
   * <p>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   */
  AllocationMaxNetmaskLength?: number;

  /**
   * <p>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and
   *          you enter 16 here, new allocations will default to 10.0.0.0/16.</p>
   */
  AllocationDefaultNetmaskLength?: number;

  /**
   * <p>Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.</p>
   */
  AllocationResourceTags?: IpamResourceTag[];

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.</p>
   */
  AwsService?: IpamPoolAwsService | string;
}

export namespace IpamPool {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpamPool): any => ({
    ...obj,
  });
}

/**
 * <p>In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.</p>
 *          <p>For more information, see <a href="/vpc/latest/ipam/how-it-works-ipam.html">How IPAM works</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 */
export interface IpamScope {
  /**
   * <p>The Amazon Web Services account ID of the owner of the scope.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the scope.</p>
   */
  IpamScopeId?: string;

  /**
   * <p>The ARN of the scope.</p>
   */
  IpamScopeArn?: string;

  /**
   * <p>The ARN of the IPAM.</p>
   */
  IpamArn?: string;

  /**
   * <p>The Amazon Web Services Region of the IPAM scope.</p>
   */
  IpamRegion?: string;

  /**
   * <p>The type of the scope.</p>
   */
  IpamScopeType?: IpamScopeType | string;

  /**
   * <p>Defines if the scope is the default scope or not.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The description of the scope.</p>
   */
  Description?: string;

  /**
   * <p>The number of pools in the scope.</p>
   */
  PoolCount?: number;

  /**
   * <p>The state of the IPAM scope.</p>
   */
  State?: IpamScopeState | string;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  Tags?: Tag[];
}

export namespace IpamScope {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpamScope): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template.</p>
 */
export interface LaunchTemplate {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The time launch template was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The principal that created the launch template. </p>
   */
  CreatedBy?: string;

  /**
   * <p>The version number of the default version of the launch template.</p>
   */
  DefaultVersionNumber?: number;

  /**
   * <p>The version number of the latest version of the launch template.</p>
   */
  LatestVersionNumber?: number;

  /**
   * <p>The tags for the launch template.</p>
   */
  Tags?: Tag[];
}

export namespace LaunchTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplate): any => ({
    ...obj,
  });
}

/**
 * <p>The error code and error message that is returned for a parameter or parameter
 *             combination that is not valid when a new launch template or new version of a launch
 *             template is created.</p>
 */
export interface ValidationError {
  /**
   * <p>The error code that indicates why the parameter or parameter combination is not valid.
   *             For more information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error
   *             codes</a>.</p>
   */
  Code?: string;

  /**
   * <p>The error message that describes why the parameter or parameter combination is not
   *             valid. For more information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error
   *             codes</a>.</p>
   */
  Message?: string;
}

export namespace ValidationError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj,
  });
}

/**
 * <p>The error codes and error messages that are returned for the parameters or parameter
 *             combinations that are not valid when a new launch template or new version of a launch
 *             template is created.</p>
 */
export interface ValidationWarning {
  /**
   * <p>The error codes and error messages.</p>
   */
  Errors?: ValidationError[];
}

export namespace ValidationWarning {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationWarning): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a target Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationTargetResponse {
  /**
   * <p>The ID of the targeted Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The ARN of the targeted Capacity Reservation group.</p>
   */
  CapacityReservationResourceGroupArn?: string;
}

export namespace CapacityReservationTargetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityReservationTargetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the credit option for CPU usage of a T2, T3, or T3a instance.</p>
 */
export interface CreditSpecification {
  /**
   * <p>The credit option for CPU usage of a T2, T3, or T3a instance. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

export namespace CreditSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreditSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an elastic GPU.</p>
 */
export interface ElasticGpuSpecificationResponse {
  /**
   * <p>The elastic GPU type.</p>
   */
  Type?: string;
}

export namespace ElasticGpuSpecificationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticGpuSpecificationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The information for a launch template. </p>
 */
export interface ResponseLaunchTemplateData {
  /**
   * <p>The ID of the kernel, if applicable.</p>
   */
  KernelId?: string;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecification;

  /**
   * <p>The block device mappings.</p>
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMapping[];

  /**
   * <p>The network interfaces.</p>
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecification[];

  /**
   * <p>The ID of the AMI that was used to launch the instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: LaunchTemplatesMonitoring;

  /**
   * <p>The placement of the instance.</p>
   */
  Placement?: LaunchTemplatePlacement;

  /**
   * <p>The ID of the RAM disk, if applicable.</p>
   */
  RamDiskId?: string;

  /**
   * <p>If set to <code>true</code>, indicates that the instance cannot be terminated using
   *             the Amazon EC2 console, command line tool, or API.</p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | string;

  /**
   * <p>The user data for the instance. </p>
   */
  UserData?: string;

  /**
   * <p>The tags.</p>
   */
  TagSpecifications?: LaunchTemplateTagSpecification[];

  /**
   * <p>The elastic GPU specification.</p>
   */
  ElasticGpuSpecifications?: ElasticGpuSpecificationResponse[];

  /**
   * <p> The elastic inference accelerator for the instance. </p>
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAcceleratorResponse[];

  /**
   * <p>The security group IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The security group names.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The market (purchasing) option for the instances.</p>
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptions;

  /**
   * <p>The credit option for CPU usage of the instance.</p>
   */
  CreditSpecification?: CreditSpecification;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   */
  CpuOptions?: LaunchTemplateCpuOptions;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationResponse;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfiguration[];

  /**
   * <p>Indicates whether an instance is configured for hibernation. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: LaunchTemplateHibernationOptions;

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptions;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptions;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with these attributes.</p>
   *          <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *          <code>InstanceTypes</code>.</p>
   */
  InstanceRequirements?: InstanceRequirements;

  /**
   * <p>The options for the instance hostname.</p>
   */
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptions;

  /**
   * <p>The maintenance options for your instance.</p>
   */
  MaintenanceOptions?: LaunchTemplateInstanceMaintenanceOptions;

  /**
   * <p>Indicates whether the instance is enabled for stop protection.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection">Stop Protection</a>.</p>
   */
  DisableApiStop?: boolean;
}

export namespace ResponseLaunchTemplateData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseLaunchTemplateData): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template version.</p>
 */
export interface LaunchTemplateVersion {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The description for the version.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The time the version was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The principal that created the version.</p>
   */
  CreatedBy?: string;

  /**
   * <p>Indicates whether the version is the default version.</p>
   */
  DefaultVersion?: boolean;

  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplateData?: ResponseLaunchTemplateData;
}

export namespace LaunchTemplateVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateVersion): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route for a local gateway route table.</p>
 */
export interface LocalGatewayRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * <p>The route type.</p>
   */
  Type?: LocalGatewayRouteType | string;

  /**
   * <p>The state of the route.</p>
   */
  State?: LocalGatewayRouteState | string;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway route.</p>
   */
  OwnerId?: string;
}

export namespace LocalGatewayRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalGatewayRoute): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a local gateway route table and a VPC.</p>
 */
export interface LocalGatewayRouteTableVpcAssociation {
  /**
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVpcAssociationId?: string;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table for the association.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway route table for the association.</p>
   */
  OwnerId?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: string;

  /**
   * <p>The tags assigned to the association.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGatewayRouteTableVpcAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalGatewayRouteTableVpcAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a managed prefix list.</p>
 */
export interface ManagedPrefixList {
  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The IP address version.</p>
   */
  AddressFamily?: string;

  /**
   * <p>The current state of the prefix list.</p>
   */
  State?: PrefixListState | string;

  /**
   * <p>The state message.</p>
   */
  StateMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the prefix list.</p>
   */
  PrefixListArn?: string;

  /**
   * <p>The name of the prefix list.</p>
   */
  PrefixListName?: string;

  /**
   * <p>The maximum number of entries for the prefix list.</p>
   */
  MaxEntries?: number;

  /**
   * <p>The version of the prefix list.</p>
   */
  Version?: number;

  /**
   * <p>The tags for the prefix list.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the owner of the prefix list.</p>
   */
  OwnerId?: string;
}

export namespace ManagedPrefixList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManagedPrefixList): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a NAT gateway.</p>
 */
export interface NatGateway {
  /**
   * <p>The date and time the NAT gateway was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The date and time the NAT gateway was deleted, if applicable.</p>
   */
  DeleteTime?: Date;

  /**
   * <p>If the NAT gateway could not be created, specifies the error code for the failure.
   *         (<code>InsufficientFreeAddressesInSubnet</code> | <code>Gateway.NotAttached</code> |
   *          <code>InvalidAllocationID.NotFound</code> | <code>Resource.AlreadyAssociated</code> |
   *          <code>InternalError</code> | <code>InvalidSubnetID.NotFound</code>)</p>
   */
  FailureCode?: string;

  /**
   * <p>If the NAT gateway could not be created, specifies the error message for the failure, that corresponds to the error code.</p>
   *          <ul>
   *             <li>
   *                <p>For InsufficientFreeAddressesInSubnet: "Subnet has insufficient free addresses to create this NAT gateway"</p>
   *             </li>
   *             <li>
   *                <p>For Gateway.NotAttached: "Network vpc-xxxxxxxx has no Internet gateway attached"</p>
   *             </li>
   *             <li>
   *                <p>For InvalidAllocationID.NotFound: "Elastic IP address eipalloc-xxxxxxxx could not be associated with this NAT gateway"</p>
   *             </li>
   *             <li>
   *                <p>For Resource.AlreadyAssociated: "Elastic IP address eipalloc-xxxxxxxx is already associated"</p>
   *             </li>
   *             <li>
   *                <p>For InternalError: "Network interface eni-xxxxxxxx, created and used internally by this NAT gateway is in an invalid state. Please try again."</p>
   *             </li>
   *             <li>
   *                <p>For InvalidSubnetID.NotFound: "The specified subnet subnet-xxxxxxxx does not exist or could not be found."</p>
   *             </li>
   *          </ul>
   */
  FailureMessage?: string;

  /**
   * <p>Information about the IP addresses and network interface associated with the NAT gateway.</p>
   */
  NatGatewayAddresses?: NatGatewayAddress[];

  /**
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through
   *           the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  ProvisionedBandwidth?: ProvisionedBandwidth;

  /**
   * <p>The state of the NAT gateway.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The NAT gateway is being created and is not ready to process
   *           traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code>: The NAT gateway could not be created. Check the
   *             <code>failureCode</code> and <code>failureMessage</code> fields for the reason.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The NAT gateway is able to process traffic. This status remains
   *           until you delete the NAT gateway, and does not indicate the health of the NAT gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The NAT gateway is in the process of being terminated and may
   *           still be processing traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The NAT gateway has been terminated and is no longer processing
   *           traffic.</p>
   *             </li>
   *          </ul>
   */
  State?: NatGatewayState | string;

  /**
   * <p>The ID of the subnet in which the NAT gateway is located.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the VPC in which the NAT gateway is located.</p>
   */
  VpcId?: string;

  /**
   * <p>The tags for the NAT gateway.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether the NAT gateway supports public or private connectivity.</p>
   */
  ConnectivityType?: ConnectivityType | string;
}

export namespace NatGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NatGateway): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network ACL.</p>
 */
export interface NetworkAcl {
  /**
   * <p>Any associations between the network ACL and one or more subnets</p>
   */
  Associations?: NetworkAclAssociation[];

  /**
   * <p>One or more entries (rules) in the network ACL.</p>
   */
  Entries?: NetworkAclEntry[];

  /**
   * <p>Indicates whether this is the default network ACL for the VPC.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId?: string;

  /**
   * <p>Any tags assigned to the network ACL.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC for the network ACL.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the network ACL.</p>
   */
  OwnerId?: string;
}

export namespace NetworkAcl {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkAcl): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Network Access Scope.</p>
 */
export interface NetworkInsightsAccessScope {
  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeArn?: string;

  /**
   * <p>The creation date.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The last updated date.</p>
   */
  UpdatedDate?: Date;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

export namespace NetworkInsightsAccessScope {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInsightsAccessScope): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Network Access Scope content.</p>
 */
export interface NetworkInsightsAccessScopeContent {
  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * <p>The paths to match.</p>
   */
  MatchPaths?: AccessScopePath[];

  /**
   * <p>The paths to exclude.</p>
   */
  ExcludePaths?: AccessScopePath[];
}

export namespace NetworkInsightsAccessScopeContent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInsightsAccessScopeContent): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a path.</p>
 */
export interface NetworkInsightsPath {
  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the path.</p>
   */
  NetworkInsightsPathArn?: string;

  /**
   * <p>The time stamp when the path was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The Amazon Web Services resource that is the source of the path.</p>
   */
  Source?: string;

  /**
   * <p>The Amazon Web Services resource that is the destination of the path.</p>
   */
  Destination?: string;

  /**
   * <p>The IP address of the Amazon Web Services resource that is the source of the path.</p>
   */
  SourceIp?: string;

  /**
   * <p>The IP address of the Amazon Web Services resource that is the destination of the path.</p>
   */
  DestinationIp?: string;

  /**
   * <p>The protocol.</p>
   */
  Protocol?: Protocol | string;

  /**
   * <p>The destination port.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The tags associated with the path.</p>
   */
  Tags?: Tag[];
}

export namespace NetworkInsightsPath {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInsightsPath): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface attachment.</p>
 */
export interface NetworkInterfaceAttachment {
  /**
   * <p>The timestamp indicating when the attachment initiated.</p>
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
   * <p>The device index of the network interface attachment on the instance.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the instance.</p>
   */
  InstanceOwnerId?: string;

  /**
   * <p>The attachment state.</p>
   */
  Status?: AttachmentStatus | string;
}

export namespace NetworkInterfaceAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterfaceAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface.</p>
 */
export interface NetworkInterface {
  /**
   * <p>The association information for an Elastic IP address (IPv4) associated with the network interface.</p>
   */
  Association?: NetworkInterfaceAssociation;

  /**
   * <p>The network interface attachment.</p>
   */
  Attachment?: NetworkInterfaceAttachment;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A description.</p>
   */
  Description?: string;

  /**
   * <p>Any security groups for the network interface.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The type of network interface.</p>
   */
  InterfaceType?: NetworkInterfaceType | string;

  /**
   * <p>The IPv6 addresses associated with the network interface.</p>
   */
  Ipv6Addresses?: NetworkInterfaceIpv6Address[];

  /**
   * <p>The MAC address.</p>
   */
  MacAddress?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the network interface.</p>
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
  PrivateIpAddresses?: NetworkInterfacePrivateIpAddress[];

  /**
   * <p>The IPv4 prefixes that are assigned to the network interface.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecification[];

  /**
   * <p>The IPv6 prefixes that are assigned to the network interface.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecification[];

  /**
   * <p>The alias or Amazon Web Services account ID of the principal or service that created the network interface.</p>
   */
  RequesterId?: string;

  /**
   * <p>Indicates whether the network interface is being managed by Amazon Web Services.</p>
   */
  RequesterManaged?: boolean;

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
   * <p>Any tags assigned to the network interface.</p>
   */
  TagSet?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Indicates whether a network interface with an IPv6 address is unreachable from the
   *             public internet. If the value is <code>true</code>, inbound traffic from the internet
   *             is dropped and you cannot assign an elastic IP address to the network interface. The
   *             network interface is reachable from peered VPCs and resources connected through a
   *             transit gateway, including on-premises networks.</p>
   */
  DenyAllIgwTraffic?: boolean;

  /**
   * <p>Indicates whether this is an IPv6 only network interface.</p>
   */
  Ipv6Native?: boolean;

  /**
   * <p>The IPv6 globally unique address associated with the network interface.</p>
   */
  Ipv6Address?: string;
}

export namespace NetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a permission for a network interface.</p>
 */
export interface NetworkInterfacePermission {
  /**
   * <p>The ID of the network interface permission.</p>
   */
  NetworkInterfacePermissionId?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The Amazon Web Service.</p>
   */
  AwsService?: string;

  /**
   * <p>The type of permission.</p>
   */
  Permission?: InterfacePermissionType | string;

  /**
   * <p>Information about the state of the permission.</p>
   */
  PermissionState?: NetworkInterfacePermissionState;
}

export namespace NetworkInterfacePermission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterfacePermission): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a placement group.</p>
 */
export interface PlacementGroup {
  /**
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;

  /**
   * <p>The state of the placement group.</p>
   */
  State?: PlacementGroupState | string;

  /**
   * <p>The placement strategy.</p>
   */
  Strategy?: PlacementStrategy | string;

  /**
   * <p>The number of partitions. Valid only if <b>strategy</b> is
   *             set to <code>partition</code>.</p>
   */
  PartitionCount?: number;

  /**
   * <p>The ID of the placement group.</p>
   */
  GroupId?: string;

  /**
   * <p>Any tags applied to the placement group.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the placement group.</p>
   */
  GroupArn?: string;
}

export namespace PlacementGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlacementGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a root volume replacement task.</p>
 */
export interface ReplaceRootVolumeTask {
  /**
   * <p>The ID of the root volume replacement task.</p>
   */
  ReplaceRootVolumeTaskId?: string;

  /**
   * <p>The ID of the instance for which the root volume replacement task was created.</p>
   */
  InstanceId?: string;

  /**
   * <p>The state of the task. The task can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code> - the replacement volume is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>in-progress</code> - the original volume is being detached and the
   *           replacement volume is being attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>succeeded</code> - the replacement volume has been successfully attached
   *           to the instance and the instance is available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failing</code> - the replacement task is in the process of failing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - the replacement task has failed but the original root
   *           volume is still attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failing-detached</code> - the replacement task is in the process of failing.
   *           The instance might have no root volume attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed-detached</code> - the replacement task has failed and the instance
   *           has no root volume attached.</p>
   *             </li>
   *          </ul>
   */
  TaskState?: ReplaceRootVolumeTaskState | string;

  /**
   * <p>The time the task was started.</p>
   */
  StartTime?: string;

  /**
   * <p>The time the task completed.</p>
   */
  CompleteTime?: string;

  /**
   * <p>The tags assigned to the task.</p>
   */
  Tags?: Tag[];
}

export namespace ReplaceRootVolumeTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplaceRootVolumeTask): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route table.</p>
 */
export interface RouteTable {
  /**
   * <p>The associations between the route table and one or more subnets or a gateway.</p>
   */
  Associations?: RouteTableAssociation[];

  /**
   * <p>Any virtual private gateway (VGW) propagating routes.</p>
   */
  PropagatingVgws?: PropagatingVgw[];

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * <p>The routes in the route table.</p>
   */
  Routes?: Route[];

  /**
   * <p>Any tags assigned to the route table.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the route table.</p>
   */
  OwnerId?: string;
}

export namespace RouteTable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteTable): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a snapshot.</p>
 */
export interface SnapshotInfo {
  /**
   * <p>Description specified by the CreateSnapshotRequest that has been applied to all
   *     snapshots.</p>
   */
  Description?: string;

  /**
   * <p>Tags associated with this snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Source volume from which this snapshot was created.</p>
   */
  VolumeId?: string;

  /**
   * <p>Current state of the snapshot.</p>
   */
  State?: SnapshotState | string;

  /**
   * <p>Size of the volume from which this snapshot was created.</p>
   */
  VolumeSize?: number;

  /**
   * <p>Time this snapshot was started. This is the same for all snapshots initiated by the
   *     same request.</p>
   */
  StartTime?: Date;

  /**
   * <p>Progress this snapshot has made towards completing.</p>
   */
  Progress?: string;

  /**
   * <p>Account id used when creating this snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>Snapshot id that can be used to describe this snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The ARN of the Outpost on which the snapshot is stored. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html">Amazon EBS local snapshots on Outposts</a> in the
   *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  OutpostArn?: string;
}

export namespace SnapshotInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the data feed for a Spot Instance.</p>
 */
export interface SpotDatafeedSubscription {
  /**
   * <p>The name of the Amazon S3 bucket where the Spot Instance data feed is located.</p>
   */
  Bucket?: string;

  /**
   * <p>The fault codes for the Spot Instance request, if any.</p>
   */
  Fault?: SpotInstanceStateFault;

  /**
   * <p>The Amazon Web Services account ID of the account.</p>
   */
  OwnerId?: string;

  /**
   * <p>The prefix for the data feed files.</p>
   */
  Prefix?: string;

  /**
   * <p>The state of the Spot Instance data feed subscription.</p>
   */
  State?: DatafeedSubscriptionState | string;
}

export namespace SpotDatafeedSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotDatafeedSubscription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a subnet CIDR reservation.</p>
 */
export interface SubnetCidrReservation {
  /**
   * <p>The ID of the subnet CIDR reservation.</p>
   */
  SubnetCidrReservationId?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The CIDR that has been reserved.</p>
   */
  Cidr?: string;

  /**
   * <p>The type of reservation. </p>
   */
  ReservationType?: SubnetCidrReservationType | string;

  /**
   * <p>The ID of the account that owns the subnet CIDR reservation. </p>
   */
  OwnerId?: string;

  /**
   * <p>The
   *             description
   *             assigned to the subnet CIDR
   *             reservation.</p>
   */
  Description?: string;

  /**
   * <p>The tags assigned to the subnet CIDR reservation.</p>
   */
  Tags?: Tag[];
}

export namespace SubnetCidrReservation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetCidrReservation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Traffic Mirror rule.</p>
 */
export interface TrafficMirrorFilterRule {
  /**
   * <p>The ID of the Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId?: string;

  /**
   * <p>The ID of the Traffic Mirror filter that the rule is associated with.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * <p>The traffic direction assigned to the Traffic Mirror rule.</p>
   */
  TrafficDirection?: TrafficDirection | string;

  /**
   * <p>The rule number of the Traffic Mirror rule.</p>
   */
  RuleNumber?: number;

  /**
   * <p>The action assigned to the Traffic Mirror rule.</p>
   */
  RuleAction?: TrafficMirrorRuleAction | string;

  /**
   * <p>The protocol assigned to the Traffic Mirror rule.</p>
   */
  Protocol?: number;

  /**
   * <p>The destination port range assigned to the Traffic Mirror rule.</p>
   */
  DestinationPortRange?: TrafficMirrorPortRange;

  /**
   * <p>The source port range assigned to the Traffic Mirror rule.</p>
   */
  SourcePortRange?: TrafficMirrorPortRange;

  /**
   * <p>The destination CIDR block assigned to the Traffic Mirror rule.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The source CIDR block assigned to the Traffic Mirror rule.</p>
   */
  SourceCidrBlock?: string;

  /**
   * <p>The description of the Traffic Mirror rule.</p>
   */
  Description?: string;
}

export namespace TrafficMirrorFilterRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficMirrorFilterRule): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Traffic Mirror filter.</p>
 */
export interface TrafficMirrorFilter {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * <p>Information about the ingress rules that are associated with the Traffic Mirror filter.</p>
   */
  IngressFilterRules?: TrafficMirrorFilterRule[];

  /**
   * <p>Information about the egress rules that are associated with the Traffic Mirror filter.</p>
   */
  EgressFilterRules?: TrafficMirrorFilterRule[];

  /**
   * <p>The network service traffic that is associated with the Traffic Mirror filter.</p>
   */
  NetworkServices?: (TrafficMirrorNetworkService | string)[];

  /**
   * <p>The description of the Traffic Mirror filter.</p>
   */
  Description?: string;

  /**
   * <p>The tags assigned to the Traffic Mirror filter.</p>
   */
  Tags?: Tag[];
}

export namespace TrafficMirrorFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficMirrorFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Traffic Mirror session.</p>
 */
export interface TrafficMirrorSession {
  /**
   * <p>The ID for the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId?: string;

  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * <p>The ID of the Traffic Mirror session's network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the account that owns the Traffic Mirror session.</p>
   */
  OwnerId?: string;

  /**
   * <p>The number of bytes in each packet to mirror. These are the bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet</p>
   */
  PacketLength?: number;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   */
  SessionNumber?: number;

  /**
   * <p>The virtual network ID associated with the Traffic Mirror session.</p>
   */
  VirtualNetworkId?: number;

  /**
   * <p>The description of the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * <p>The tags assigned to the Traffic Mirror session.</p>
   */
  Tags?: Tag[];
}

export namespace TrafficMirrorSession {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficMirrorSession): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Traffic Mirror target.</p>
 */
export interface TrafficMirrorTarget {
  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * <p>The network interface ID that is attached to the target.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer.</p>
   */
  NetworkLoadBalancerArn?: string;

  /**
   * <p>The type of Traffic Mirror target.</p>
   */
  Type?: TrafficMirrorTargetType | string;

  /**
   * <p>Information about the Traffic Mirror target.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the account that owns the Traffic Mirror target.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the Traffic Mirror target.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the Gateway Load Balancer endpoint.</p>
   */
  GatewayLoadBalancerEndpointId?: string;
}

export namespace TrafficMirrorTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficMirrorTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a transit gateway.</p>
 */
export interface TransitGateway {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * <p>The state of the transit gateway.</p>
   */
  State?: TransitGatewayState | string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>The description of the transit gateway.</p>
   */
  Description?: string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The transit gateway options.</p>
   */
  Options?: TransitGatewayOptions;

  /**
   * <p>The tags for the transit gateway.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGateway): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a transit gateway Connect attachment.</p>
 */
export interface TransitGatewayConnect {
  /**
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the attachment from which the Connect attachment was created.</p>
   */
  TransportTransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The state of the attachment.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Connect attachment options.</p>
   */
  Options?: TransitGatewayConnectOptions;

  /**
   * <p>The tags for the attachment.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayConnect {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayConnect): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a transit gateway Connect peer.</p>
 */
export interface TransitGatewayConnectPeer {
  /**
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the Connect peer.</p>
   */
  TransitGatewayConnectPeerId?: string;

  /**
   * <p>The state of the Connect peer.</p>
   */
  State?: TransitGatewayConnectPeerState | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Connect peer details.</p>
   */
  ConnectPeerConfiguration?: TransitGatewayConnectPeerConfiguration;

  /**
   * <p>The tags for the Connect peer.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayConnectPeer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayConnectPeer): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomain {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainArn?: string;

  /**
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain.</p>
   */
  OwnerId?: string;

  /**
   * <p>The options for the transit gateway multicast domain.</p>
   */
  Options?: TransitGatewayMulticastDomainOptions;

  /**
   * <p>The state of the transit gateway multicast domain.</p>
   */
  State?: TransitGatewayMulticastDomainState | string;

  /**
   * <p>The time the transit gateway multicast domain was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The tags for the transit gateway multicast domain.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayMulticastDomain {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDomain): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a prefix list reference.</p>
 */
export interface TransitGatewayPrefixListReference {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The ID of the prefix list owner.</p>
   */
  PrefixListOwnerId?: string;

  /**
   * <p>The state of the prefix list reference.</p>
   */
  State?: TransitGatewayPrefixListReferenceState | string;

  /**
   * <p>Indicates whether traffic that matches this route is dropped.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Information about the transit gateway attachment.</p>
   */
  TransitGatewayAttachment?: TransitGatewayPrefixListAttachment;
}

export namespace TransitGatewayPrefixListReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayPrefixListReference): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route for a transit gateway route table.</p>
 */
export interface TransitGatewayRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The ID of the prefix list used for destination matches.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The attachments.</p>
   */
  TransitGatewayAttachments?: TransitGatewayRouteAttachment[];

  /**
   * <p>The route type.</p>
   */
  Type?: TransitGatewayRouteType | string;

  /**
   * <p>The state of the route.</p>
   */
  State?: TransitGatewayRouteState | string;
}

export namespace TransitGatewayRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayRoute): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a transit gateway route table.</p>
 */
export interface TransitGatewayRouteTable {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The state of the transit gateway route table.</p>
   */
  State?: TransitGatewayRouteTableState | string;

  /**
   * <p>Indicates whether this is the default association route table for the transit gateway.</p>
   */
  DefaultAssociationRouteTable?: boolean;

  /**
   * <p>Indicates whether this is the default propagation route table for the transit gateway.</p>
   */
  DefaultPropagationRouteTable?: boolean;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Any tags assigned to the route table.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayRouteTable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayRouteTable): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a DNS entry.</p>
 */
export interface DnsEntry {
  /**
   * <p>The DNS name.</p>
   */
  DnsName?: string;

  /**
   * <p>The ID of the private hosted zone.</p>
   */
  HostedZoneId?: string;
}

export namespace DnsEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DnsEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the DNS options for an endpoint.</p>
 */
export interface DnsOptions {
  /**
   * <p>The DNS records created for the endpoint.</p>
   */
  DnsRecordIpType?: DnsRecordIpType | string;
}

export namespace DnsOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DnsOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group.</p>
 */
export interface SecurityGroupIdentifier {
  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;
}

export namespace SecurityGroupIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroupIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC endpoint.</p>
 */
export interface VpcEndpoint {
  /**
   * <p>The ID of the endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The type of endpoint.</p>
   */
  VpcEndpointType?: VpcEndpointType | string;

  /**
   * <p>The ID of the VPC to which the endpoint is associated.</p>
   */
  VpcId?: string;

  /**
   * <p>The name of the service to which the endpoint is associated.</p>
   */
  ServiceName?: string;

  /**
   * <p>The state of the endpoint.</p>
   */
  State?: State | string;

  /**
   * <p>The policy document associated with the endpoint, if applicable.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>(Gateway endpoint) One or more route tables associated with the endpoint.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>(Interface endpoint) The subnets for the endpoint.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>(Interface endpoint) Information about the security groups that are associated with
   *             the network interface.</p>
   */
  Groups?: SecurityGroupIdentifier[];

  /**
   * <p>The IP address type for the endpoint.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>The DNS options for the endpoint.</p>
   */
  DnsOptions?: DnsOptions;

  /**
   * <p>(Interface endpoint) Indicates whether the VPC is associated with a private hosted zone.</p>
   */
  PrivateDnsEnabled?: boolean;

  /**
   * <p>Indicates whether the endpoint is being managed by its service.</p>
   */
  RequesterManaged?: boolean;

  /**
   * <p>(Interface endpoint) One or more network interfaces for the endpoint.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>(Interface endpoint) The DNS entries for the endpoint.</p>
   */
  DnsEntries?: DnsEntry[];

  /**
   * <p>The date and time that the endpoint was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>Any tags assigned to the endpoint.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the Amazon Web Services account that owns the endpoint.</p>
   */
  OwnerId?: string;

  /**
   * <p>The last error that occurred for endpoint.</p>
   */
  LastError?: LastError;
}

export namespace VpcEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a connection notification for a VPC endpoint or VPC endpoint
 *             service.</p>
 */
export interface ConnectionNotification {
  /**
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId?: string;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The type of notification.</p>
   */
  ConnectionNotificationType?: ConnectionNotificationType | string;

  /**
   * <p>The ARN of the SNS topic for the notification.</p>
   */
  ConnectionNotificationArn?: string;

  /**
   * <p>The events for the notification. Valid values are <code>Accept</code>,
   *                 <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.</p>
   */
  ConnectionEvents?: string[];

  /**
   * <p>The state of the notification.</p>
   */
  ConnectionNotificationState?: ConnectionNotificationState | string;
}

export namespace ConnectionNotification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionNotification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a service configuration for a VPC endpoint service.</p>
 */
export interface ServiceConfiguration {
  /**
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceTypeDetail[];

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The name of the service.</p>
   */
  ServiceName?: string;

  /**
   * <p>The service state.</p>
   */
  ServiceState?: ServiceState | string;

  /**
   * <p>The Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Indicates whether requests from other Amazon Web Services accounts to create an endpoint to the service must first be accepted.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>Indicates whether the service manages its VPC endpoints. Management of the service VPC
   *             endpoints using the VPC endpoint API is restricted.</p>
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Network Load Balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * <p>The supported IP address types.</p>
   */
  SupportedIpAddressTypes?: (ServiceConnectivityType | string)[];

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: string[];

  /**
   * <p>The private DNS name for the service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>Information about the endpoint service private DNS name configuration.</p>
   */
  PrivateDnsNameConfiguration?: PrivateDnsNameConfiguration;

  /**
   * <p>The payer responsibility.</p>
   */
  PayerResponsibility?: PayerResponsibility | string;

  /**
   * <p>Any tags assigned to the service.</p>
   */
  Tags?: Tag[];
}

export namespace ServiceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The tunnel options for a single VPN tunnel.</p>
 */
export interface VpnTunnelOptionsSpecification {
  /**
   * <p>The range of inside IPv4 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same virtual private gateway. </p>
   *         <p>Constraints: A size /30 CIDR block from the <code>169.254.0.0/16</code> range. The
   *             following CIDR blocks are reserved and cannot be used:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>169.254.0.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.1.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.2.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.3.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.4.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.5.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.169.252/30</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  TunnelInsideCidr?: string;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same transit gateway.</p>
   *         <p>Constraints: A size /126 CIDR block from the local <code>fd00::/8</code> range.</p>
   */
  TunnelInsideIpv6Cidr?: string;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and customer gateway.</p>
   *         <p>Constraints: Allowed characters are alphanumeric characters, periods (.), and
   *             underscores (_). Must be between 8 and 64 characters in length and cannot start with
   *             zero (0).</p>
   */
  PreSharedKey?: string;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   *         <p>Constraints: A value between 900 and 28,800.</p>
   *         <p>Default: <code>28800</code>
   *          </p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   *         <p>Constraints: A value between 900 and 3,600. The value must be less than the value for
   *                 <code>Phase1LifetimeSeconds</code>.</p>
   *         <p>Default: <code>3600</code>
   *          </p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the
   *                 Amazon Web Services side of the VPN connection performs an IKE rekey. The exact time
   *             of the rekey is randomly selected based on the value for
   *                 <code>RekeyFuzzPercentage</code>.</p>
   *         <p>Constraints: A value between 60 and half of <code>Phase2LifetimeSeconds</code>.</p>
   *         <p>Default: <code>540</code>
   *          </p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * <p>The percentage of the rekey window (determined by <code>RekeyMarginTimeSeconds</code>)
   *             during which the rekey time is randomly selected.</p>
   *         <p>Constraints: A value between 0 and 100.</p>
   *         <p>Default: <code>100</code>
   *          </p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   *         <p>Constraints: A value between 64 and 2048.</p>
   *         <p>Default: <code>1024</code>
   *          </p>
   */
  ReplayWindowSize?: number;

  /**
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   *         <p>Constraints: A value greater than or equal to 30.</p>
   *         <p>Default: <code>30</code>
   *          </p>
   */
  DPDTimeoutSeconds?: number;

  /**
   * <p>The action to take after DPD timeout occurs. Specify <code>restart</code> to restart
   *             the IKE initiation. Specify <code>clear</code> to end the IKE session.</p>
   *         <p>Valid Values: <code>clear</code> | <code>none</code> | <code>restart</code>
   *          </p>
   *         <p>Default: <code>clear</code>
   *          </p>
   */
  DPDTimeoutAction?: string;

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 1
   *             IKE negotiations.</p>
   *         <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 2
   *             IKE negotiations.</p>
   *         <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   *         <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   *         <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 1 IKE negotiations.</p>
   *         <p>Valid values: <code>2</code> | <code>14</code> | <code>15</code> | <code>16</code> |
   *                 <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> |
   *                 <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 2 IKE negotiations.</p>
   *         <p>Valid values: <code>2</code> | <code>5</code> | <code>14</code> | <code>15</code> |
   *                 <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> |
   *                 <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> |
   *                 <code>24</code>
   *          </p>
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValue[];

  /**
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   *         <p>Valid values: <code>ikev1</code> | <code>ikev2</code>
   *          </p>
   */
  IKEVersions?: IKEVersionsRequestListValue[];

  /**
   * <p>The action to take when the establishing the tunnel for the VPN connection. By
   *             default, your customer gateway device must initiate the IKE negotiation and bring up the
   *             tunnel. Specify <code>start</code> for Amazon Web Services to initiate the IKE
   *             negotiation.</p>
   *         <p>Valid Values: <code>add</code> | <code>start</code>
   *          </p>
   *         <p>Default: <code>add</code>
   *          </p>
   */
  StartupAction?: string;
}

export namespace VpnTunnelOptionsSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpnTunnelOptionsSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The internet key exchange (IKE) version permitted for the VPN tunnel.</p>
 */
export interface IKEVersionsListValue {
  /**
   * <p>The IKE version.</p>
   */
  Value?: string;
}

export namespace IKEVersionsListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IKEVersionsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPN connection.</p>
 */
export interface VpnConnection {
  /**
   * <p>The configuration information for the VPN connection's customer gateway (in the native
   *             XML format). This element is always present in the <a>CreateVpnConnection</a>
   *             response; however, it's present in the <a>DescribeVpnConnections</a> response
   *             only if the VPN connection is in the <code>pending</code> or <code>available</code>
   *             state.</p>
   */
  CustomerGatewayConfiguration?: string;

  /**
   * <p>The ID of the customer gateway at your end of the VPN connection.</p>
   */
  CustomerGatewayId?: string;

  /**
   * <p>The category of the VPN connection. A value of <code>VPN</code> indicates an Amazon Web Services VPN connection. A value of <code>VPN-Classic</code> indicates an Amazon Web Services Classic VPN connection.</p>
   */
  Category?: string;

  /**
   * <p>The current state of the VPN connection.</p>
   */
  State?: VpnState | string;

  /**
   * <p>The type of VPN connection.</p>
   */
  Type?: GatewayType | string;

  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId?: string;

  /**
   * <p>The ID of the virtual private gateway at the Amazon Web Services side of the VPN
   *             connection.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The ID of the transit gateway associated with the VPN connection.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ARN of the core network.</p>
   */
  CoreNetworkArn?: string;

  /**
   * <p>The ARN of the core network attachment.</p>
   */
  CoreNetworkAttachmentArn?: string;

  /**
   * <p>The current state of the gateway association.</p>
   */
  GatewayAssociationState?: GatewayAssociationState | string;

  /**
   * <p>The VPN connection options.</p>
   */
  Options?: VpnConnectionOptions;

  /**
   * <p>The static routes associated with the VPN connection.</p>
   */
  Routes?: VpnStaticRoute[];

  /**
   * <p>Any tags assigned to the VPN connection.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Information about the VPN tunnel.</p>
   */
  VgwTelemetry?: VgwTelemetry[];
}

export namespace VpnConnection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpnConnection): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a virtual private gateway.</p>
 */
export interface VpnGateway {
  /**
   * <p>The Availability Zone where the virtual private gateway was created, if applicable.
   *             This field may be empty or not returned.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The current state of the virtual private gateway.</p>
   */
  State?: VpnState | string;

  /**
   * <p>The type of VPN connection the virtual private gateway supports.</p>
   */
  Type?: GatewayType | string;

  /**
   * <p>Any VPCs attached to the virtual private gateway.</p>
   */
  VpcAttachments?: VpcAttachment[];

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The private Autonomous System Number (ASN) for the Amazon side of a BGP
   *             session.</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>Any tags assigned to the virtual private gateway.</p>
   */
  Tags?: Tag[];
}

export namespace VpnGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpnGateway): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an EC2 Fleet that was successfully deleted.</p>
 */
export interface DeleteFleetSuccessItem {
  /**
   * <p>The current state of the EC2 Fleet.</p>
   */
  CurrentFleetState?: FleetStateCode | string;

  /**
   * <p>The previous state of the EC2 Fleet.</p>
   */
  PreviousFleetState?: FleetStateCode | string;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

export namespace DeleteFleetSuccessItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetSuccessItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an EC2 Fleet error.</p>
 */
export interface DeleteFleetError {
  /**
   * <p>The error code.</p>
   */
  Code?: DeleteFleetErrorCode | string;

  /**
   * <p>The description for the error code.</p>
   */
  Message?: string;
}

export namespace DeleteFleetError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an EC2 Fleet that was not successfully deleted.</p>
 */
export interface DeleteFleetErrorItem {
  /**
   * <p>The error.</p>
   */
  Error?: DeleteFleetError;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

export namespace DeleteFleetErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetErrorItem): any => ({
    ...obj,
  });
}

/**
 * <p>The state of the event window.</p>
 */
export interface InstanceEventWindowStateChange {
  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId?: string;

  /**
   * <p>The current state of the event window.</p>
   */
  State?: InstanceEventWindowState | string;
}

export namespace InstanceEventWindowStateChange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceEventWindowStateChange): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template version that was successfully deleted.</p>
 */
export interface DeleteLaunchTemplateVersionsResponseSuccessItem {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template.</p>
   */
  VersionNumber?: number;
}

export namespace DeleteLaunchTemplateVersionsResponseSuccessItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateVersionsResponseSuccessItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the error that's returned when you cannot delete a launch template
 *             version.</p>
 */
export interface ResponseError {
  /**
   * <p>The error code.</p>
   */
  Code?: LaunchTemplateErrorCode | string;

  /**
   * <p>The error message, if applicable.</p>
   */
  Message?: string;
}

export namespace ResponseError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template version that could not be deleted.</p>
 */
export interface DeleteLaunchTemplateVersionsResponseErrorItem {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template.</p>
   */
  VersionNumber?: number;

  /**
   * <p>Information about the error.</p>
   */
  ResponseError?: ResponseError;
}

export namespace DeleteLaunchTemplateVersionsResponseErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateVersionsResponseErrorItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the error for a Reserved Instance whose queued purchase could not be deleted.</p>
 */
export interface DeleteQueuedReservedInstancesError {
  /**
   * <p>The error code.</p>
   */
  Code?: DeleteQueuedReservedInstancesErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace DeleteQueuedReservedInstancesError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteQueuedReservedInstancesError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance whose queued purchase was not deleted.</p>
 */
export interface FailedQueuedPurchaseDeletion {
  /**
   * <p>The error.</p>
   */
  Error?: DeleteQueuedReservedInstancesError;

  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;
}

export namespace FailedQueuedPurchaseDeletion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailedQueuedPurchaseDeletion): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance whose queued purchase was successfully deleted.</p>
 */
export interface SuccessfulQueuedPurchaseDeletion {
  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;
}

export namespace SuccessfulQueuedPurchaseDeletion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuccessfulQueuedPurchaseDeletion): any => ({
    ...obj,
  });
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
}

export namespace IpamPoolCidr {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpamPoolCidr): any => ({
    ...obj,
  });
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

export namespace InstanceTagNotificationAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceTagNotificationAttribute): any => ({
    ...obj,
  });
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

export namespace TransitGatewayMulticastDeregisteredGroupMembers {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDeregisteredGroupMembers): any => ({
    ...obj,
  });
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

export namespace TransitGatewayMulticastDeregisteredGroupSources {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDeregisteredGroupSources): any => ({
    ...obj,
  });
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

export namespace IdFormat {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdFormat): any => ({
    ...obj,
  });
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

export namespace AvailabilityZoneMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailabilityZoneMessage): any => ({
    ...obj,
  });
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

export namespace AvailabilityZone {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj,
  });
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
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>submitted</code> - The Capacity Reservation Fleet request has been submitted
   * 					and Amazon Elastic Compute Cloud is preparing to create the Capacity Reservations.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>modifying</code> - The Capacity Reservation Fleet is being modified. The Fleet
   * 					remains in this state until the modification is complete.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>active</code> - The Capacity Reservation Fleet has fulfilled its total target
   * 					capacity and it is attempting to maintain this capacity. The Fleet remains in this
   * 					state until it is modified or deleted.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>partially_fulfilled</code> - The Capacity Reservation Fleet has partially
   * 					fulfilled its total target capacity. There is insufficient Amazon EC2 to
   * 					fulfill the total target capacity. The Fleet is attempting to asynchronously fulfill
   * 					its total target capacity.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>expiring</code> - The Capacity Reservation Fleet has reach its end date and it
   * 					is in the process of expiring. One or more of its Capacity reservations might still
   * 					be active.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>expired</code> - The Capacity Reservation Fleet has reach its end date. The Fleet
   * 					and its Capacity Reservations are expired. The Fleet can't create new Capacity
   * 					Reservations.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>cancelling</code> - The Capacity Reservation Fleet is in the process of being
   * 					cancelled. One or more of its Capacity reservations might still be active.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>cancelled</code> - The Capacity Reservation Fleet has been manually cancelled.
   * 					The Fleet and its Capacity Reservations are cancelled and the Fleet can't create new
   * 					Capacity Reservations.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>failed</code> - The Capacity Reservation Fleet failed to reserve capacity for
   * 					the specified instance types.</p>
   * 			         </li>
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
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>default</code> - The Capacity Reservation Fleet is created on hardware that is
   * 					shared with other Amazon Web Services accounts.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>dedicated</code> - The Capacity Reservation Fleet is created on single-tenant
   * 					hardware that is dedicated to a single Amazon Web Services account.</p>
   * 			         </li>
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
   * 		       <p>Currently, Capacity Reservation Fleets support <code>open</code> instance matching criteria
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

export namespace CapacityReservationFleet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityReservationFleet): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a linked EC2-Classic instance.</p>
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

export namespace ClassicLinkInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassicLinkInstance): any => ({
    ...obj,
  });
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

export namespace AuthorizationRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizationRule): any => ({
    ...obj,
  });
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

export namespace ClientVpnConnectionStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnConnectionStatus): any => ({
    ...obj,
  });
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

export namespace ClientVpnConnection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnConnection): any => ({
    ...obj,
  });
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

export namespace AssociatedTargetNetwork {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatedTargetNetwork): any => ({
    ...obj,
  });
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

export namespace DirectoryServiceAuthentication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryServiceAuthentication): any => ({
    ...obj,
  });
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

export namespace FederatedAuthentication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FederatedAuthentication): any => ({
    ...obj,
  });
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

export namespace CertificateAuthentication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateAuthentication): any => ({
    ...obj,
  });
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

export namespace ClientVpnAuthentication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnAuthentication): any => ({
    ...obj,
  });
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

export namespace ClientVpnEndpointAttributeStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnEndpointAttributeStatus): any => ({
    ...obj,
  });
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

export namespace ClientConnectResponseOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientConnectResponseOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Current state of options for customizable text banner that will be displayed on
 * 			Amazon Web Services provided clients when a VPN session is established.</p>
 */
export interface ClientLoginBannerResponseOptions {
  /**
   * <p>Current state of text banner feature.</p>
   * 		       <p>Valid values: <code>true | false</code>
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

export namespace ClientLoginBannerResponseOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientLoginBannerResponseOptions): any => ({
    ...obj,
  });
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

export namespace ConnectionLogResponseOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionLogResponseOptions): any => ({
    ...obj,
  });
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
   * 		       <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-Tunnel Client VPN endpoint</a>
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
   * 		       <p>Valid values: <code>8 | 10 | 12 | 24</code>
   *          </p>
   * 		       <p>Default value: <code>24</code>
   *          </p>
   */
  SessionTimeoutHours?: number;

  /**
   * <p>Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is
   * 			established.</p>
   */
  ClientLoginBannerOptions?: ClientLoginBannerResponseOptions;
}

export namespace ClientVpnEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnEndpoint): any => ({
    ...obj,
  });
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

export namespace ClientVpnRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnRoute): any => ({
    ...obj,
  });
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

export namespace TargetNetwork {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetNetwork): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a customer-owned address pool.</p>
 */
export interface CoipPool {
  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * <p>The address ranges of the address pool.</p>
   */
  PoolCidrs?: string[];

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ARN of the address pool.</p>
   */
  PoolArn?: string;
}

export namespace CoipPool {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoipPool): any => ({
    ...obj,
  });
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

export namespace DiskImageDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiskImageDescription): any => ({
    ...obj,
  });
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

export namespace DiskImageVolumeDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiskImageVolumeDescription): any => ({
    ...obj,
  });
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

export namespace ImportInstanceTaskDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportInstanceTaskDetails): any => ({
    ...obj,
  });
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

export namespace ImportVolumeTaskDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportVolumeTaskDetails): any => ({
    ...obj,
  });
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

export namespace ConversionTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConversionTask): any => ({
    ...obj,
  });
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

export namespace ElasticGpuHealth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticGpuHealth): any => ({
    ...obj,
  });
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

export namespace ElasticGpus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticGpus): any => ({
    ...obj,
  });
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

export namespace ExportTaskS3Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportTaskS3Location): any => ({
    ...obj,
  });
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

export namespace ExportImageTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportImageTask): any => ({
    ...obj,
  });
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

export namespace FastLaunchLaunchTemplateSpecificationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FastLaunchLaunchTemplateSpecificationResponse): any => ({
    ...obj,
  });
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

export namespace FastLaunchSnapshotConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FastLaunchSnapshotConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace DescribeFastLaunchImagesSuccessItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFastLaunchImagesSuccessItem): any => ({
    ...obj,
  });
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

export namespace DescribeFastSnapshotRestoreSuccessItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFastSnapshotRestoreSuccessItem): any => ({
    ...obj,
  });
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
   *
   *         <p>
   *             <code>error</code> events:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>iamFleetRoleInvalid</code> - The EC2 Fleet or Spot Fleet does not have the required
   *                     permissions either to launch or terminate an instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>allLaunchSpecsTemporarilyBlacklisted</code> - None of the configurations
   *                     are valid, and several attempts to launch instances have failed. For more
   *                     information, see the description of the event.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>spotInstanceCountLimitExceeded</code> - You've reached the limit on the
   *                     number of Spot Instances that you can launch.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>spotFleetRequestConfigurationInvalid</code> - The configuration is not
   *                     valid. For more information, see the description of the event.</p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <code>fleetRequestChange</code> events:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>active</code> - The EC2 Fleet or Spot Fleet request has been validated and Amazon EC2 is
   *                     attempting to maintain the target number of running instances.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>cancelled</code> - The EC2 Fleet or Spot Fleet request is canceled and has no running
   *                     instances. The EC2 Fleet or Spot Fleet will be deleted two days after its instances are
   *                     terminated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>cancelled_running</code> - The EC2 Fleet or Spot Fleet request is canceled and does
   *                     not launch additional instances. Its existing instances continue to run until
   *                     they are interrupted or terminated. The request remains in this state until all
   *                     instances are interrupted or terminated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>cancelled_terminating</code> - The EC2 Fleet or Spot Fleet request is canceled and
   *                     its instances are terminating. The request remains in this state until all
   *                     instances are terminated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>expired</code> - The EC2 Fleet or Spot Fleet request has expired. If the request was
   *                     created with <code>TerminateInstancesWithExpiration</code> set, a subsequent
   *                         <code>terminated</code> event indicates that the instances are
   *                     terminated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>modify_in_progress</code> - The EC2 Fleet or Spot Fleet request is being modified.
   *                     The request remains in this state until the modification is fully
   *                     processed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>modify_succeeded</code> - The EC2 Fleet or Spot Fleet request was modified.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>submitted</code> - The EC2 Fleet or Spot Fleet request is being evaluated and Amazon EC2
   *                     is preparing to launch the target number of instances.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>progress</code> - The EC2 Fleet or Spot Fleet request is in the process of being fulfilled.</p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <code>instanceChange</code> events:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>launched</code> - A new instance was launched.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>terminated</code> - An instance was terminated by the user.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>termination_notified</code> - An instance termination notification was
   *                     sent when a Spot Instance was terminated by Amazon EC2 during scale-down, when the target
   *                     capacity of the fleet was modified down, for example, from a target capacity of
   *                     4 to a target capacity of 3.</p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <code>Information</code> events:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>fleetProgressHalted</code> - The price in every launch specification is
   *                     not valid because it is below the Spot price (all the launch specifications have
   *                     produced <code>launchSpecUnusable</code> events). A launch specification might
   *                     become valid if the Spot price changes.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launchSpecTemporarilyBlacklisted</code> - The configuration is not valid
   *                     and several attempts to launch instances have failed. For more information, see
   *                     the description of the event.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launchSpecUnusable</code> - The price in a launch specification is not
   *                     valid because it is below the Spot price.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>registerWithLoadBalancersFailed</code> - An attempt to register
   *                     instances with load balancers failed. For more information, see the description
   *                     of the event.</p>
   *             </li>
   *          </ul>
   */
  EventSubType?: string;

  /**
   * <p>The ID of the instance. This information is available only for
   *                 <code>instanceChange</code> events.</p>
   */
  InstanceId?: string;
}

export namespace EventInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventInformation): any => ({
    ...obj,
  });
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

export namespace HistoryRecordEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HistoryRecordEntry): any => ({
    ...obj,
  });
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

export namespace DescribeFleetError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetError): any => ({
    ...obj,
  });
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

export namespace DescribeFleetsInstances {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetsInstances): any => ({
    ...obj,
  });
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

export namespace FleetLaunchTemplateConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FleetLaunchTemplateConfig): any => ({
    ...obj,
  });
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

export namespace CapacityReservationOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityReservationOptions): any => ({
    ...obj,
  });
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

export namespace OnDemandOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OnDemandOptions): any => ({
    ...obj,
  });
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

export namespace FleetSpotCapacityRebalance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FleetSpotCapacityRebalance): any => ({
    ...obj,
  });
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

export namespace FleetSpotMaintenanceStrategies {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FleetSpotMaintenanceStrategies): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
 */
export interface SpotOptions {
  /**
   * <p>The strategy that determines how to allocate the target Spot Instance capacity across the Spot Instance
   *          pools specified by the EC2 Fleet.</p>
   *          <p>
   *             <code>lowest-price</code> - EC2 Fleet launches instances from the Spot Instance pools with the lowest
   *          price.</p>
   *          <p>
   *             <code>diversified</code> - EC2 Fleet launches instances from all of the Spot Instance pools that you
   *          specify.</p>
   *          <p>
   *             <code>capacity-optimized</code> (recommended) - EC2 Fleet launches instances from Spot Instance pools
   *          with optimal capacity for the number of instances that are launching. To give certain
   *          instance types a higher chance of launching first, use
   *             <code>capacity-optimized-prioritized</code>. Set a priority for each instance type by
   *          using the <code>Priority</code> parameter for <code>LaunchTemplateOverrides</code>. You can
   *          assign the same priority to different <code>LaunchTemplateOverrides</code>. EC2 implements
   *          the priorities on a best-effort basis, but optimizes for capacity first.
   *             <code>capacity-optimized-prioritized</code> is supported only if your fleet uses a
   *          launch template. Note that if the On-Demand <code>AllocationStrategy</code> is set to
   *             <code>prioritized</code>, the same priority is applied when fulfilling On-Demand
   *          capacity.</p>
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
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay.</p>
   */
  MaxTotalPrice?: string;
}

export namespace SpotOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotOptions): any => ({
    ...obj,
  });
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
   *             <code>On-Demand</code>.</p>
   */
  DefaultTargetCapacityType?: DefaultTargetCapacityType | string;

  /**
   * <p>The unit for the target capacity.</p>
   *          <p>Default: <code>units</code> (translates to number of instances)</p>
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | string;
}

export namespace TargetCapacitySpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetCapacitySpecification): any => ({
    ...obj,
  });
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

export namespace FleetData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FleetData): any => ({
    ...obj,
  });
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

export namespace DestinationOptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DestinationOptionsResponse): any => ({
    ...obj,
  });
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
   * <p>The ARN of the IAM role that posts logs to CloudWatch Logs.</p>
   */
  DeliverLogsPermissionArn?: string;

  /**
   * <p>The status of the logs delivery (<code>SUCCESS</code> | <code>FAILED</code>).</p>
   */
  DeliverLogsStatus?: string;

  /**
   * <p>The flow log ID.</p>
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
   * <p>The ID of the resource on which the flow log was created.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of traffic captured for the flow log.</p>
   */
  TrafficType?: TrafficType | string;

  /**
   * <p>The type of destination to which the flow log data is published. Flow log data can be
   *             published to CloudWatch Logs or Amazon S3.</p>
   */
  LogDestinationType?: LogDestinationType | string;

  /**
   * <p>The destination to which the flow log data is published. Flow log data can be
   *             published to an CloudWatch Logs log group or an Amazon S3 bucket. If the flow log publishes to CloudWatch Logs,
   *             this element indicates the Amazon Resource Name (ARN) of the CloudWatch Logs log group to which
   *             the data is published. If the flow log publishes to Amazon S3, this element indicates the ARN
   *             of the Amazon S3 bucket to which the data is published.</p>
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
   *         <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based
   *                 instance</a>, the aggregation interval is always 60 seconds (1 minute) or less,
   *             regardless of the specified value.</p>
   *         <p>Valid Values: <code>60</code> | <code>600</code>
   *          </p>
   */
  MaxAggregationInterval?: number;

  /**
   * <p>The destination options.</p>
   */
  DestinationOptions?: DestinationOptionsResponse;
}

export namespace FlowLog {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlowLog): any => ({
    ...obj,
  });
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

export namespace LoadPermission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoadPermission): any => ({
    ...obj,
  });
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

export namespace ProductCode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProductCode): any => ({
    ...obj,
  });
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

export namespace FpgaImageAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FpgaImageAttribute): any => ({
    ...obj,
  });
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

export namespace PciId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PciId): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).</p>
 */
export interface FpgaImageState {
  /**
   * <p>The state. The following are the possible values:</p>
   * 		       <ul>
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

export namespace FpgaImageState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FpgaImageState): any => ({
    ...obj,
  });
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
}

export namespace FpgaImage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FpgaImage): any => ({
    ...obj,
  });
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
   * <p>The upfront price of the offering. Does not apply to No Upfront
   *             offerings.</p>
   */
  UpfrontPrice?: string;
}

export namespace HostOffering {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostOffering): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the Dedicated Host Reservation and associated Dedicated
 *             Hosts.</p>
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
   * <p>The length of the reservation's term, specified in seconds. Can be <code>31536000
   *                 (1 year)</code> | <code>94608000 (3 years)</code>.</p>
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
   *             Dedicated Host must be the same in order for it to benefit from the
   *             reservation.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The ID of the reservation. This remains the same regardless of which Dedicated
   *             Hosts are associated with it.</p>
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

export namespace HostReservation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostReservation): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the number of instances that can be launched onto the Dedicated
 *     		Host.</p>
 */
export interface InstanceCapacity {
  /**
   * <p>The number of instances that can be launched onto the Dedicated Host based on the
   *     		host's available capacity.</p>
   */
  AvailableCapacity?: number;

  /**
   * <p>The instance type supported by the Dedicated Host.</p>
   */
  InstanceType?: string;

  /**
   * <p>The total number of instances that can be launched onto the Dedicated Host if there
   *     		are no instances running on it.</p>
   */
  TotalCapacity?: number;
}

export namespace InstanceCapacity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceCapacity): any => ({
    ...obj,
  });
}

/**
 * <p>The capacity information for instances that can be launched onto the Dedicated Host. </p>
 */
export interface AvailableCapacity {
  /**
   * <p>The number of instances that can be launched onto the Dedicated Host depending on
   *     		the host's available capacity. For Dedicated Hosts that support multiple instance types,
   *     		this parameter represents the number of instances for each instance size that is
   *     		supported on the host.</p>
   */
  AvailableInstanceCapacity?: InstanceCapacity[];

  /**
   * <p>The number of vCPUs available for launching instances onto the Dedicated Host.</p>
   */
  AvailableVCpus?: number;
}

export namespace AvailableCapacity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailableCapacity): any => ({
    ...obj,
  });
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
   *         	If the host supports multiple instance types, no <b>instanceType</b>
   *         	is returned.</p>
   */
  InstanceType?: string;

  /**
   * <p>The instance family supported by the Dedicated Host. For example, <code>m5</code>.</p>
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

export namespace HostProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostProperties): any => ({
    ...obj,
  });
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
   * <p>The instance type (for example, <code>m3.medium</code>) of the running instance.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the instance.</p>
   */
  OwnerId?: string;
}

export namespace HostInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostInstance): any => ({
    ...obj,
  });
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
   * <p>The reservation ID of the Dedicated Host. This returns a <code>null</code> response
   *             if the Dedicated Host doesn't have an associated reservation.</p>
   */
  HostReservationId?: string;

  /**
   * <p>The IDs and instance type that are currently running on the Dedicated
   *             Host.</p>
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
   * <p>Indicates whether the Dedicated Host supports multiple instance types of the same instance family.
   * 			If the value is <code>on</code>, the Dedicated Host supports multiple instance types in the instance family.
   * 		    If the value is <code>off</code>, the Dedicated Host supports a single instance type only.</p>
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
   * <p>Indicates whether the Dedicated Host is in a host resource group. If
   * 			<b>memberOfServiceLinkedResourceGroup</b> is
   * 			<code>true</code>, the host is in a host resource group; otherwise, it is not.</p>
   */
  MemberOfServiceLinkedResourceGroup?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which the Dedicated Host is allocated.</p>
   */
  OutpostArn?: string;
}

export namespace Host {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Host): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a state change.</p>
 */
export interface StateReason {
  /**
   * <p>The reason code for the state change.</p>
   */
  Code?: string;

  /**
   * <p>The message for the state change.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Server.InsufficientInstanceCapacity</code>: There was insufficient
   *                     capacity available to satisfy the launch request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Server.InternalError</code>: An internal error caused the instance to
   *                     terminate during launch.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Server.ScheduledStop</code>: The instance was stopped due to a scheduled
   *                     retirement.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Server.SpotInstanceShutdown</code>: The instance was stopped because the
   *                     number of Spot requests with a maximum price equal to or higher than the Spot
   *                     price exceeded available capacity or because of an increase in the Spot
   *                     price.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Server.SpotInstanceTermination</code>: The instance was terminated
   *                     because the number of Spot requests with a maximum price equal to or higher than
   *                     the Spot price exceeded available capacity or because of an increase in the Spot
   *                     price.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.InstanceInitiatedShutdown</code>: The instance was shut down
   *                     using the <code>shutdown -h</code> command from the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.InstanceTerminated</code>: The instance was terminated or
   *                     rebooted during AMI creation.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.InternalError</code>: A client error caused the instance to
   *                     terminate during launch.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.InvalidSnapshot.NotFound</code>: The specified snapshot was not
   *                     found.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.UserInitiatedHibernate</code>: Hibernation was initiated on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.UserInitiatedShutdown</code>: The instance was shut down using
   *                     the Amazon EC2 API.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.VolumeLimitExceeded</code>: The limit on the number of EBS
   *                     volumes or total storage was exceeded. Decrease usage or request an increase in
   *                     your account limits.</p>
   *             </li>
   *          </ul>
   */
  Message?: string;
}

export namespace StateReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StateReason): any => ({
    ...obj,
  });
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
   *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html">Understanding
   *         AMI billing</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
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
   *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  BootMode?: BootModeValues | string;

  /**
   * <p>If the image is configured for NitroTPM support, the value is <code>v2.0</code>.
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html">NitroTPM</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  TpmSupport?: TpmSupportValues | string;

  /**
   * <p>The date and time to deprecate the AMI, in UTC, in the following format:
   *      <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.
   *       If you specified a value for seconds, Amazon EC2 rounds the seconds to the
   *       nearest minute.</p>
   */
  DeprecationTime?: string;
}

export namespace Image {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Image): any => ({
    ...obj,
  });
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

export namespace ImportImageTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportImageTask): any => ({
    ...obj,
  });
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

export namespace ImportSnapshotTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportSnapshotTask): any => ({
    ...obj,
  });
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

export namespace EbsInstanceBlockDevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EbsInstanceBlockDevice): any => ({
    ...obj,
  });
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

export namespace EnclaveOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnclaveOptions): any => ({
    ...obj,
  });
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
   * <p>The credit option for CPU usage of the instance. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

export namespace InstanceCreditSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceCreditSpecification): any => ({
    ...obj,
  });
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
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that
   *                     has matching attributes (instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                 <p>
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

export namespace CapacityReservationSpecificationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityReservationSpecificationResponse): any => ({
    ...obj,
  });
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

export namespace CpuOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CpuOptions): any => ({
    ...obj,
  });
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

export namespace ElasticGpuAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticGpuAssociation): any => ({
    ...obj,
  });
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

export namespace ElasticInferenceAcceleratorAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticInferenceAcceleratorAssociation): any => ({
    ...obj,
  });
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

export namespace HibernationOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HibernationOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of an instance.</p>
 */
export interface InstanceStatus {
  /**
   * <p>The Availability Zone of the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>Any scheduled events associated with the instance.</p>
   */
  Events?: InstanceStatusEvent[];

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The intended state of the instance. <a>DescribeInstanceStatus</a> requires
   *             that an instance be in the <code>running</code> state.</p>
   */
  InstanceState?: InstanceState;

  /**
   * <p>Reports impaired functionality that stems from issues internal to the instance, such
   *             as impaired reachability.</p>
   */
  InstanceStatus?: InstanceStatusSummary;

  /**
   * <p>Reports impaired functionality that stems from issues related to the systems that
   *             support an instance, such as hardware failures and network connectivity problems.</p>
   */
  SystemStatus?: InstanceStatusSummary;
}

export namespace InstanceStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The instance types offered.</p>
 */
export interface InstanceTypeOffering {
  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The location type.</p>
   */
  LocationType?: LocationType | string;

  /**
   * <p>The identifier for the location. This depends on the location type. For example, if the location type is
   *     <code>region</code>, the location is the Region code (for example, <code>us-east-2</code>.)</p>
   */
  Location?: string;
}

export namespace InstanceTypeOffering {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceTypeOffering): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the optimized EBS performance for supported instance types.</p>
 */
export interface EbsOptimizedInfo {
  /**
   * <p>The baseline bandwidth performance for an EBS-optimized instance type, in Mbps.</p>
   */
  BaselineBandwidthInMbps?: number;

  /**
   * <p>The baseline throughput performance for an EBS-optimized instance type, in MB/s.</p>
   */
  BaselineThroughputInMBps?: number;

  /**
   * <p>The baseline input/output storage operations per seconds for an EBS-optimized instance type.</p>
   */
  BaselineIops?: number;

  /**
   * <p>The maximum bandwidth performance for an EBS-optimized instance type, in Mbps.</p>
   */
  MaximumBandwidthInMbps?: number;

  /**
   * <p>The maximum throughput performance for an EBS-optimized instance type, in MB/s.</p>
   */
  MaximumThroughputInMBps?: number;

  /**
   * <p>The maximum input/output storage operations per second for an EBS-optimized instance type.</p>
   */
  MaximumIops?: number;
}

export namespace EbsOptimizedInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EbsOptimizedInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Amazon EBS features supported by the instance type.</p>
 */
export interface EbsInfo {
  /**
   * <p>Indicates whether the instance type is Amazon EBS-optimized. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html">Amazon EBS-optimized
   *     instances</a> in <i>Amazon EC2 User Guide</i>.</p>
   */
  EbsOptimizedSupport?: EbsOptimizedSupport | string;

  /**
   * <p>Indicates whether Amazon EBS encryption is supported.</p>
   */
  EncryptionSupport?: EbsEncryptionSupport | string;

  /**
   * <p>Describes the optimized EBS performance for the instance type.</p>
   */
  EbsOptimizedInfo?: EbsOptimizedInfo;

  /**
   * <p>Indicates whether non-volatile memory express (NVMe) is supported.</p>
   */
  NvmeSupport?: EbsNvmeSupport | string;
}

export namespace EbsInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EbsInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the memory for the FPGA accelerator for the instance type.</p>
 */
export interface FpgaDeviceMemoryInfo {
  /**
   * <p>The size of the memory available to the FPGA accelerator, in MiB.</p>
   */
  SizeInMiB?: number;
}

export namespace FpgaDeviceMemoryInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FpgaDeviceMemoryInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the FPGA accelerator for the instance type.</p>
 */
export interface FpgaDeviceInfo {
  /**
   * <p>The name of the FPGA accelerator.</p>
   */
  Name?: string;

  /**
   * <p>The manufacturer of the FPGA accelerator.</p>
   */
  Manufacturer?: string;

  /**
   * <p>The count of FPGA accelerators for the instance type.</p>
   */
  Count?: number;

  /**
   * <p>Describes the memory for the FPGA accelerator for the instance type.</p>
   */
  MemoryInfo?: FpgaDeviceMemoryInfo;
}

export namespace FpgaDeviceInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FpgaDeviceInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the FPGAs for the instance type.</p>
 */
export interface FpgaInfo {
  /**
   * <p>Describes the FPGAs for the instance type.</p>
   */
  Fpgas?: FpgaDeviceInfo[];

  /**
   * <p>The total memory of all FPGA accelerators for the instance type.</p>
   */
  TotalFpgaMemoryInMiB?: number;
}

export namespace FpgaInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FpgaInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the memory available to the GPU accelerator.</p>
 */
export interface GpuDeviceMemoryInfo {
  /**
   * <p>The size of the memory available to the GPU accelerator, in MiB.</p>
   */
  SizeInMiB?: number;
}

export namespace GpuDeviceMemoryInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GpuDeviceMemoryInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the GPU accelerators for the instance type.</p>
 */
export interface GpuDeviceInfo {
  /**
   * <p>The name of the GPU accelerator.</p>
   */
  Name?: string;

  /**
   * <p>The manufacturer of the GPU accelerator.</p>
   */
  Manufacturer?: string;

  /**
   * <p>The number of GPUs for the instance type.</p>
   */
  Count?: number;

  /**
   * <p>Describes the memory available to the GPU accelerator.</p>
   */
  MemoryInfo?: GpuDeviceMemoryInfo;
}

export namespace GpuDeviceInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GpuDeviceInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the GPU accelerators for the instance type.</p>
 */
export interface GpuInfo {
  /**
   * <p>Describes the GPU accelerators for the instance type.</p>
   */
  Gpus?: GpuDeviceInfo[];

  /**
   * <p>The total size of the memory for the GPU accelerators for the instance type, in MiB.</p>
   */
  TotalGpuMemoryInMiB?: number;
}

export namespace GpuInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GpuInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a disk.</p>
 */
export interface DiskInfo {
  /**
   * <p>The size of the disk in GB.</p>
   */
  SizeInGB?: number;

  /**
   * <p>The number of disks with this configuration.</p>
   */
  Count?: number;

  /**
   * <p>The type of disk.</p>
   */
  Type?: DiskType | string;
}

export namespace DiskInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiskInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Elastic Fabric Adapters for the instance type.</p>
 */
export interface EfaInfo {
  /**
   * <p>The maximum number of Elastic Fabric Adapters for the instance type.</p>
   */
  MaximumEfaInterfaces?: number;
}

export namespace EfaInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EfaInfo): any => ({
    ...obj,
  });
}

export type BootModeType = "legacy-bios" | "uefi";

/**
 * <p>Describes the instance type.</p>
 */
export interface InstanceTypeInfo {
  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>Indicates whether the instance type is current generation.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>Indicates whether the instance type is eligible for the free tier.</p>
   */
  FreeTierEligible?: boolean;

  /**
   * <p>Indicates whether the instance type is offered for spot or On-Demand.</p>
   */
  SupportedUsageClasses?: (UsageClassType | string)[];

  /**
   * <p>The supported root device types.</p>
   */
  SupportedRootDeviceTypes?: (RootDeviceType | string)[];

  /**
   * <p>The supported virtualization types.</p>
   */
  SupportedVirtualizationTypes?: (VirtualizationType | string)[];

  /**
   * <p>Indicates whether the instance is a bare metal instance type.</p>
   */
  BareMetal?: boolean;

  /**
   * <p>The hypervisor for the instance type.</p>
   */
  Hypervisor?: InstanceTypeHypervisor | string;

  /**
   * <p>Describes the processor.</p>
   */
  ProcessorInfo?: ProcessorInfo;

  /**
   * <p>Describes the vCPU configurations for the instance type.</p>
   */
  VCpuInfo?: VCpuInfo;

  /**
   * <p>Describes the memory for the instance type.</p>
   */
  MemoryInfo?: MemoryInfo;

  /**
   * <p>Indicates whether instance storage is supported.</p>
   */
  InstanceStorageSupported?: boolean;

  /**
   * <p>Describes the instance storage for the instance type.</p>
   */
  InstanceStorageInfo?: InstanceStorageInfo;

  /**
   * <p>Describes the Amazon EBS settings for the instance type.</p>
   */
  EbsInfo?: EbsInfo;

  /**
   * <p>Describes the network settings for the instance type.</p>
   */
  NetworkInfo?: NetworkInfo;

  /**
   * <p>Describes the GPU accelerator settings for the instance type.</p>
   */
  GpuInfo?: GpuInfo;

  /**
   * <p>Describes the FPGA accelerator settings for the instance type.</p>
   */
  FpgaInfo?: FpgaInfo;

  /**
   * <p>Describes the placement group settings for the instance type.</p>
   */
  PlacementGroupInfo?: PlacementGroupInfo;

  /**
   * <p>Describes the Inference accelerator settings for the instance type.</p>
   */
  InferenceAcceleratorInfo?: InferenceAcceleratorInfo;

  /**
   * <p>Indicates whether On-Demand hibernation is supported.</p>
   */
  HibernationSupported?: boolean;

  /**
   * <p>Indicates whether the instance type is a burstable performance instance type.</p>
   */
  BurstablePerformanceSupported?: boolean;

  /**
   * <p>Indicates whether Dedicated Hosts are supported on the instance type.</p>
   */
  DedicatedHostsSupported?: boolean;

  /**
   * <p>Indicates whether auto recovery is supported.</p>
   */
  AutoRecoverySupported?: boolean;

  /**
   * <p>The supported boot modes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *    <i>Amazon EC2 User Guide</i>.</p>
   */
  SupportedBootModes?: (BootModeType | string)[];
}

export namespace InstanceTypeInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceTypeInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 address pool.</p>
 */
export interface Ipv6Pool {
  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * <p>The description for the address pool.</p>
   */
  Description?: string;

  /**
   * <p>The CIDR blocks for the address pool.</p>
   */
  PoolCidrBlocks?: PoolCidrBlock[];

  /**
   * <p>Any tags for the address pool.</p>
   */
  Tags?: Tag[];
}

export namespace Ipv6Pool {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv6Pool): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a key pair.</p>
 */
export interface KeyPairInfo {
  /**
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>If you used <a>CreateKeyPair</a> to create the key pair:</p>
   *          <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the SHA-1 digest of the DER encoded private key.</p>
   *            </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which
   *                    is the default for OpenSSH, starting with <a href="http://www.openssh.com/txt/release-6.8">OpenSSH 6.8</a>.</p>
   *            </li>
   *          </ul>
   *          <p>If you used <a>ImportKeyPair</a> to provide Amazon Web Services the public key:</p>
   *          <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the MD5 public key fingerprint as specified in section 4 of RFC4716.</p>
   *            </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256
   *                     digest, which is the default for OpenSSH, starting with <a href="http://www.openssh.com/txt/release-6.8">OpenSSH 6.8</a>.</p>
   *            </li>
   *          </ul>
   */
  KeyFingerprint?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The type of key pair.</p>
   */
  KeyType?: KeyType | string;

  /**
   * <p>Any tags applied to the key pair.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The public key material.</p>
   */
  PublicKey?: string;

  /**
   * <p>If you used Amazon EC2 to create the key pair, this is the date and time when the key
   *             was created, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO
   *                 8601 date-time format</a>, in the UTC time zone.</p>
   *         <p>If you imported an existing key pair to Amazon EC2, this is the date and time the key
   *             was imported, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO
   *                 8601 date-time format</a>, in the UTC time zone.</p>
   */
  CreateTime?: Date;
}

export namespace KeyPairInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyPairInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a local gateway route table.</p>
 */
export interface LocalGatewayRouteTable {
  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway route table.</p>
   */
  OwnerId?: string;

  /**
   * <p>The state of the local gateway route table.</p>
   */
  State?: string;

  /**
   * <p>The tags assigned to the local gateway route table.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGatewayRouteTable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalGatewayRouteTable): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a local gateway route table and a virtual interface group.</p>
 */
export interface LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  /**
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;

  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table for the virtual interface group.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface group association.</p>
   */
  OwnerId?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: string;

  /**
   * <p>The tags assigned to the association.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalGatewayRouteTableVirtualInterfaceGroupAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a local gateway.</p>
 */
export interface LocalGateway {
  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>The state of the local gateway.</p>
   */
  State?: string;

  /**
   * <p>The tags assigned to the local gateway.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalGateway): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a local gateway virtual interface group.</p>
 */
export interface LocalGatewayVirtualInterfaceGroup {
  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * <p>The IDs of the virtual interfaces.</p>
   */
  LocalGatewayVirtualInterfaceIds?: string[];

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface group.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the virtual interface group.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGatewayVirtualInterfaceGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalGatewayVirtualInterfaceGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a local gateway virtual interface.</p>
 */
export interface LocalGatewayVirtualInterface {
  /**
   * <p>The ID of the virtual interface.</p>
   */
  LocalGatewayVirtualInterfaceId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the VLAN.</p>
   */
  Vlan?: number;

  /**
   * <p>The local address.</p>
   */
  LocalAddress?: string;

  /**
   * <p>The peer address.</p>
   */
  PeerAddress?: string;

  /**
   * <p>The Border Gateway Protocol (BGP) Autonomous System Number (ASN) of the local gateway.</p>
   */
  LocalBgpAsn?: number;

  /**
   * <p>The peer BGP ASN.</p>
   */
  PeerBgpAsn?: number;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the virtual interface.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGatewayVirtualInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalGatewayVirtualInterface): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of a moving Elastic IP address.</p>
 */
export interface MovingAddressStatus {
  /**
   * <p>The status of the Elastic IP address that's being moved to the EC2-VPC platform, or restored to the EC2-Classic platform.</p>
   */
  MoveStatus?: MoveStatus | string;

  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;
}

export namespace MovingAddressStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MovingAddressStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Network Access Scope analysis.</p>
 */
export interface NetworkInsightsAccessScopeAnalysis {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisArn?: string;

  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * <p>The status.</p>
   */
  Status?: AnalysisStatus | string;

  /**
   * <p>The status message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The warning message.</p>
   */
  WarningMessage?: string;

  /**
   * <p>The analysis start date.</p>
   */
  StartDate?: Date;

  /**
   * <p>The analysis end date.</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates whether there are findings.</p>
   */
  FindingsFound?: FindingsFound | string;

  /**
   * <p>The number of network interfaces analyzed.</p>
   */
  AnalyzedEniCount?: number;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

export namespace NetworkInsightsAccessScopeAnalysis {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInsightsAccessScopeAnalysis): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a load balancer listener.</p>
 */
export interface AnalysisLoadBalancerListener {
  /**
   * <p>The port on which the load balancer is listening.</p>
   */
  LoadBalancerPort?: number;

  /**
   * <p>[Classic Load Balancers] The back-end port for the listener.</p>
   */
  InstancePort?: number;
}

export namespace AnalysisLoadBalancerListener {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisLoadBalancerListener): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a load balancer target.</p>
 */
export interface AnalysisLoadBalancerTarget {
  /**
   * <p>The IP address.</p>
   */
  Address?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Information about the instance.</p>
   */
  Instance?: AnalysisComponent;

  /**
   * <p>The port on which the target is listening.</p>
   */
  Port?: number;
}

export namespace AnalysisLoadBalancerTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisLoadBalancerTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.</p>
 */
export interface Explanation {
  /**
   * <p>The network ACL.</p>
   */
  Acl?: AnalysisComponent;

  /**
   * <p>The network ACL rule.</p>
   */
  AclRule?: AnalysisAclRule;

  /**
   * <p>The IPv4 address, in CIDR notation.</p>
   */
  Address?: string;

  /**
   * <p>The IPv4 addresses, in CIDR notation.</p>
   */
  Addresses?: string[];

  /**
   * <p>The resource to which the component is attached.</p>
   */
  AttachedTo?: AnalysisComponent;

  /**
   * <p>The Availability Zones.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The CIDR ranges.</p>
   */
  Cidrs?: string[];

  /**
   * <p>The component.</p>
   */
  Component?: AnalysisComponent;

  /**
   * <p>The customer gateway.</p>
   */
  CustomerGateway?: AnalysisComponent;

  /**
   * <p>The destination.</p>
   */
  Destination?: AnalysisComponent;

  /**
   * <p>The destination VPC.</p>
   */
  DestinationVpc?: AnalysisComponent;

  /**
   * <p>The direction. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>egress</p>
   *             </li>
   *             <li>
   *                <p>ingress</p>
   *             </li>
   *          </ul>
   */
  Direction?: string;

  /**
   * <p>The explanation code.</p>
   */
  ExplanationCode?: string;

  /**
   * <p>The route table.</p>
   */
  IngressRouteTable?: AnalysisComponent;

  /**
   * <p>The internet gateway.</p>
   */
  InternetGateway?: AnalysisComponent;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * <p>The listener for a Classic Load Balancer.</p>
   */
  ClassicLoadBalancerListener?: AnalysisLoadBalancerListener;

  /**
   * <p>The listener port of the load balancer.</p>
   */
  LoadBalancerListenerPort?: number;

  /**
   * <p>The target.</p>
   */
  LoadBalancerTarget?: AnalysisLoadBalancerTarget;

  /**
   * <p>The target group.</p>
   */
  LoadBalancerTargetGroup?: AnalysisComponent;

  /**
   * <p>The target groups.</p>
   */
  LoadBalancerTargetGroups?: AnalysisComponent[];

  /**
   * <p>The target port.</p>
   */
  LoadBalancerTargetPort?: number;

  /**
   * <p>The load balancer listener.</p>
   */
  ElasticLoadBalancerListener?: AnalysisComponent;

  /**
   * <p>The missing component.</p>
   */
  MissingComponent?: string;

  /**
   * <p>The NAT gateway.</p>
   */
  NatGateway?: AnalysisComponent;

  /**
   * <p>The network interface.</p>
   */
  NetworkInterface?: AnalysisComponent;

  /**
   * <p>The packet field.</p>
   */
  PacketField?: string;

  /**
   * <p>The VPC peering connection.</p>
   */
  VpcPeeringConnection?: AnalysisComponent;

  /**
   * <p>The port.</p>
   */
  Port?: number;

  /**
   * <p>The port ranges.</p>
   */
  PortRanges?: PortRange[];

  /**
   * <p>The prefix list.</p>
   */
  PrefixList?: AnalysisComponent;

  /**
   * <p>The protocols.</p>
   */
  Protocols?: string[];

  /**
   * <p>The route table route.</p>
   */
  RouteTableRoute?: AnalysisRouteTableRoute;

  /**
   * <p>The route table.</p>
   */
  RouteTable?: AnalysisComponent;

  /**
   * <p>The security group.</p>
   */
  SecurityGroup?: AnalysisComponent;

  /**
   * <p>The security group rule.</p>
   */
  SecurityGroupRule?: AnalysisSecurityGroupRule;

  /**
   * <p>The security groups.</p>
   */
  SecurityGroups?: AnalysisComponent[];

  /**
   * <p>The source VPC.</p>
   */
  SourceVpc?: AnalysisComponent;

  /**
   * <p>The state.</p>
   */
  State?: string;

  /**
   * <p>The subnet.</p>
   */
  Subnet?: AnalysisComponent;

  /**
   * <p>The route table for the subnet.</p>
   */
  SubnetRouteTable?: AnalysisComponent;

  /**
   * <p>The component VPC.</p>
   */
  Vpc?: AnalysisComponent;

  /**
   * <p>The VPC endpoint.</p>
   */
  VpcEndpoint?: AnalysisComponent;

  /**
   * <p>The VPN connection.</p>
   */
  VpnConnection?: AnalysisComponent;

  /**
   * <p>The VPN gateway.</p>
   */
  VpnGateway?: AnalysisComponent;

  /**
   * <p>The transit gateway.</p>
   */
  TransitGateway?: AnalysisComponent;

  /**
   * <p>The transit gateway route table.</p>
   */
  TransitGatewayRouteTable?: AnalysisComponent;

  /**
   * <p>The transit gateway route table route.</p>
   */
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute;

  /**
   * <p>The transit gateway attachment.</p>
   */
  TransitGatewayAttachment?: AnalysisComponent;
}

export namespace Explanation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Explanation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network insights analysis.</p>
 */
export interface NetworkInsightsAnalysis {
  /**
   * <p>The ID of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisArn?: string;

  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the Amazon Web Services resources that the path must traverse.</p>
   */
  FilterInArns?: string[];

  /**
   * <p>The time the analysis started.</p>
   */
  StartDate?: Date;

  /**
   * <p>The status of the network insights analysis.</p>
   */
  Status?: AnalysisStatus | string;

  /**
   * <p>The status message, if the status is <code>failed</code>.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The warning message.</p>
   */
  WarningMessage?: string;

  /**
   * <p>Indicates whether the destination is reachable from the source.</p>
   */
  NetworkPathFound?: boolean;

  /**
   * <p>The components in the path from source to destination.</p>
   */
  ForwardPathComponents?: PathComponent[];

  /**
   * <p>The components in the path from destination to source.</p>
   */
  ReturnPathComponents?: PathComponent[];

  /**
   * <p>The explanations. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.</p>
   */
  Explanations?: Explanation[];

  /**
   * <p>Potential intermediate components.</p>
   */
  AlternatePathHints?: AlternatePathHint[];

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

export namespace NetworkInsightsAnalysis {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInsightsAnalysis): any => ({
    ...obj,
  });
}

/**
 * <p>Describes prefixes for Amazon Web Services services.</p>
 */
export interface PrefixList {
  /**
   * <p>The IP address range of the Amazon Web Service.</p>
   */
  Cidrs?: string[];

  /**
   * <p>The ID of the prefix.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The name of the prefix.</p>
   */
  PrefixListName?: string;
}

export namespace PrefixList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrefixList): any => ({
    ...obj,
  });
}

/**
 * <p>PrincipalIdFormat description</p>
 */
export interface PrincipalIdFormat {
  /**
   * <p>PrincipalIdFormatARN description</p>
   */
  Arn?: string;

  /**
   * <p>PrincipalIdFormatStatuses description</p>
   */
  Statuses?: IdFormat[];
}

export namespace PrincipalIdFormat {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrincipalIdFormat): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv4 address pool.</p>
 */
export interface PublicIpv4Pool {
  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * <p>A description of the address pool.</p>
   */
  Description?: string;

  /**
   * <p>The address ranges.</p>
   */
  PoolAddressRanges?: PublicIpv4PoolRange[];

  /**
   * <p>The total number of addresses.</p>
   */
  TotalAddressCount?: number;

  /**
   * <p>The total number of available addresses.</p>
   */
  TotalAvailableAddressCount?: number;

  /**
   * <p>The name of the location from which the address pool is advertised.
   *             A network border group is a unique set of Availability Zones or Local Zones
   *             from where Amazon Web Services advertises public IP addresses.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>Any tags for the address pool.</p>
   */
  Tags?: Tag[];
}

export namespace PublicIpv4Pool {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublicIpv4Pool): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Region.</p>
 */
export interface Region {
  /**
   * <p>The Region service endpoint.</p>
   */
  Endpoint?: string;

  /**
   * <p>The name of the Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The Region opt-in status. The possible values are <code>opt-in-not-required</code>, <code>opted-in</code>, and
   *         <code>not-opted-in</code>.</p>
   */
  OptInStatus?: string;
}

export namespace Region {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Region): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance.</p>
 */
export interface ReservedInstances {
  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The duration of the Reserved Instance, in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The time when the Reserved Instance expires.</p>
   */
  End?: Date;

  /**
   * <p>The purchase price of the Reserved Instance.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The number of reservations purchased.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance type on which the Reserved Instance can be used.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The Reserved Instance product platform description.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;

  /**
   * <p>The date and time the Reserved Instance started.</p>
   */
  Start?: Date;

  /**
   * <p>The state of the Reserved Instance purchase.</p>
   */
  State?: ReservedInstanceState | string;

  /**
   * <p>The usage price of the Reserved Instance, per hour.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency of the Reserved Instance. It's specified using ISO 4217 standard currency codes.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The tenancy of the instance.</p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>The offering class of the Reserved Instance.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * <p>The Reserved Instance offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;

  /**
   * <p>The recurring charge tag assigned to the resource.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>The scope of the Reserved Instance.</p>
   */
  Scope?: Scope | string;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];
}

export namespace ReservedInstances {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedInstances): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance modification.</p>
 */
export interface ReservedInstancesModification {
  /**
   * <p>A unique, case-sensitive key supplied by the client to ensure that the request is idempotent.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   * 				Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The time when the modification request was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The time for the modification to become effective.</p>
   */
  EffectiveDate?: Date;

  /**
   * <p>Contains target configurations along with their corresponding new Reserved Instance IDs.</p>
   */
  ModificationResults?: ReservedInstancesModificationResult[];

  /**
   * <p>The IDs of one or more Reserved Instances.</p>
   */
  ReservedInstancesIds?: ReservedInstancesId[];

  /**
   * <p>A unique ID for the Reserved Instance modification.</p>
   */
  ReservedInstancesModificationId?: string;

  /**
   * <p>The status of the Reserved Instances modification request.</p>
   */
  Status?: string;

  /**
   * <p>The reason for the status.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The time when the modification request was last updated.</p>
   */
  UpdateDate?: Date;
}

export namespace ReservedInstancesModification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedInstancesModification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance offering.</p>
 */
export interface ReservedInstancesOffering {
  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The duration of the Reserved Instance, in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The purchase price of the Reserved Instance.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The instance type on which the Reserved Instance can be used.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The Reserved Instance product platform description.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The ID of the Reserved Instance offering. This is the offering ID used in <a>GetReservedInstancesExchangeQuote</a>
   *      to confirm that an exchange can be made.</p>
   */
  ReservedInstancesOfferingId?: string;

  /**
   * <p>The usage price of the Reserved Instance, per hour.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency of the Reserved Instance offering you are purchasing. It's
   * 				specified using ISO 4217 standard currency codes. At this time,
   * 				the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The tenancy of the instance.</p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>Indicates whether the offering is available through the Reserved Instance Marketplace (resale) or Amazon Web Services.
   *         If it's a Reserved Instance Marketplace offering, this is <code>true</code>.</p>
   */
  Marketplace?: boolean;

  /**
   * <p>If <code>convertible</code> it can be exchanged for Reserved Instances of
   *       the same or higher monetary value, with different configurations. If <code>standard</code>, it is not
   *       possible to perform an exchange.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * <p>The Reserved Instance offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;

  /**
   * <p>The pricing details of the Reserved Instance offering.</p>
   */
  PricingDetails?: PricingDetail[];

  /**
   * <p>The recurring charge tag assigned to the resource.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>Whether the Reserved Instance is applied to instances in a Region or an Availability Zone.</p>
   */
  Scope?: Scope | string;
}

export namespace ReservedInstancesOffering {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedInstancesOffering): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a schedule that is available for your Scheduled Instances.</p>
 */
export interface ScheduledInstanceAvailability {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of available instances.</p>
   */
  AvailableInstanceCount?: number;

  /**
   * <p>The time period for the first schedule to start.</p>
   */
  FirstSlotStartTime?: Date;

  /**
   * <p>The hourly price for a single instance.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance type. You can specify one of the C3, C4, M4, or R3 instance types.</p>
   */
  InstanceType?: string;

  /**
   * <p>The maximum term. The only possible value is 365 days.</p>
   */
  MaxTermDurationInDays?: number;

  /**
   * <p>The minimum term. The only possible value is 365 days.</p>
   */
  MinTermDurationInDays?: number;

  /**
   * <p>The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   */
  NetworkPlatform?: string;

  /**
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   */
  Platform?: string;

  /**
   * <p>The purchase token. This token expires in two hours.</p>
   */
  PurchaseToken?: string;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence?: ScheduledInstanceRecurrence;

  /**
   * <p>The number of hours in the schedule.</p>
   */
  SlotDurationInHours?: number;

  /**
   * <p>The total number of hours for a single instance for the entire term.</p>
   */
  TotalScheduledInstanceHours?: number;
}

export namespace ScheduledInstanceAvailability {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstanceAvailability): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Scheduled Instance.</p>
 */
export interface ScheduledInstance {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The date when the Scheduled Instance was purchased.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The hourly price for a single instance.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The number of instances.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   */
  NetworkPlatform?: string;

  /**
   * <p>The time for the next schedule to start.</p>
   */
  NextSlotStartTime?: Date;

  /**
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   */
  Platform?: string;

  /**
   * <p>The time that the previous schedule ended or will end.</p>
   */
  PreviousSlotEndTime?: Date;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence?: ScheduledInstanceRecurrence;

  /**
   * <p>The Scheduled Instance ID.</p>
   */
  ScheduledInstanceId?: string;

  /**
   * <p>The number of hours in the schedule.</p>
   */
  SlotDurationInHours?: number;

  /**
   * <p>The end date for the Scheduled Instance.</p>
   */
  TermEndDate?: Date;

  /**
   * <p>The start date for the Scheduled Instance.</p>
   */
  TermStartDate?: Date;

  /**
   * <p>The total number of hours for a single instance for the entire term.</p>
   */
  TotalScheduledInstanceHours?: number;
}

export namespace ScheduledInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstance): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC with a security group that references your security group.</p>
 */
export interface SecurityGroupReference {
  /**
   * <p>The ID of your security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The ID of the VPC with the referencing security group.</p>
   */
  ReferencingVpcId?: string;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export namespace SecurityGroupReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroupReference): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group.</p>
 */
export interface SecurityGroup {
  /**
   * <p>A description of the security group.</p>
   */
  Description?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>The inbound rules associated with the security group.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The Amazon Web Services account ID of the owner of the security group.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>[VPC only] The outbound rules associated with the security group.</p>
   */
  IpPermissionsEgress?: IpPermission[];

  /**
   * <p>Any tags assigned to the security group.</p>
   */
  Tags?: Tag[];

  /**
   * <p>[VPC only] The ID of the VPC for the security group.</p>
   */
  VpcId?: string;
}

export namespace SecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a snapshot's storage tier.</p>
 */
export interface SnapshotTierStatus {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The ID of the volume from which the snapshot was created.</p>
   */
  VolumeId?: string;

  /**
   * <p>The state of the snapshot.</p>
   */
  Status?: SnapshotState | string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags that are assigned to the snapshot.</p>
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
   * <p>The date and time when the last archive or restore process was started.</p>
   */
  LastTieringStartTime?: Date;

  /**
   * <p>The progress of the last archive or restore process, as a percentage.</p>
   */
  LastTieringProgress?: number;

  /**
   * <p>The status of the last archive or restore process.</p>
   */
  LastTieringOperationStatus?: TieringOperationStatus | string;

  /**
   * <p>A message describing the status of the last archive or restore process.</p>
   */
  LastTieringOperationStatusDetail?: string;

  /**
   * <p>The date and time when the last archive process was completed.</p>
   */
  ArchivalCompleteTime?: Date;

  /**
   * <p>Only for archived snapshots that are temporarily restored. Indicates the date and
   *       time when a temporarily restored snapshot will be automatically re-archived.</p>
   */
  RestoreExpiryTime?: Date;
}

export namespace SnapshotTierStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotTierStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an event in the history of the Spot Fleet request.</p>
 */
export interface HistoryRecord {
  /**
   * <p>Information about the event.</p>
   */
  EventInformation?: EventInformation;

  /**
   * <p>The event type.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>error</code> - An error with the Spot Fleet request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>fleetRequestChange</code> - A change in the status or configuration of
   *                     the Spot Fleet request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instanceChange</code> - An instance was launched or terminated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Information</code> - An informational event.</p>
   *             </li>
   *          </ul>
   */
  EventType?: EventType | string;

  /**
   * <p>The date and time of the event, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;
}

export namespace HistoryRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HistoryRecord): any => ({
    ...obj,
  });
}

/**
 * <p>Describes whether monitoring is enabled.</p>
 */
export interface SpotFleetMonitoring {
  /**
   * <p>Enables monitoring for the instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  Enabled?: boolean;
}

export namespace SpotFleetMonitoring {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotFleetMonitoring): any => ({
    ...obj,
  });
}

/**
 * <p>The tags for a Spot Fleet resource.</p>
 */
export interface SpotFleetTagSpecification {
  /**
   * <p>The type of resource. Currently, the only resource type that is supported is
   *                 <code>instance</code>. To tag the Spot Fleet request on creation, use the
   *                 <code>TagSpecifications</code> parameter in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetRequestConfigData.html">
   *                <code>SpotFleetRequestConfigData</code>
   *             </a>.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

export namespace SpotFleetTagSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotFleetTagSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a load balancer target group.</p>
 */
export interface TargetGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  Arn?: string;
}

export namespace TargetGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetGroup): any => ({
    ...obj,
  });
}

/**
 * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your
 *             Spot Instance is at an elevated risk of being interrupted. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-capacity-rebalance.html">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 */
export interface SpotCapacityRebalance {
  /**
   * <p>The replacement strategy to use. Only available for fleets of type
   *             <code>maintain</code>.</p>
   *         <p>
   *             <code>launch</code> - Spot Fleet launches a new replacement Spot Instance when a
   *             rebalance notification is emitted for an existing Spot Instance in the fleet. Spot Fleet
   *             does not terminate the instances that receive a rebalance notification. You can
   *             terminate the old instances, or you can leave them running. You are charged for all
   *             instances while they are running. </p>
   *         <p>
   *             <code>launch-before-terminate</code> - Spot Fleet launches a new replacement Spot
   *             Instance when a rebalance notification is emitted for an existing Spot Instance in the
   *             fleet, and then, after a delay that you specify (in <code>TerminationDelay</code>),
   *             terminates the instances that received a rebalance notification.</p>
   */
  ReplacementStrategy?: ReplacementStrategy | string;

  /**
   * <p>The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot
   *             Instance after launching a new replacement Spot Instance.</p>
   *         <p>Required when <code>ReplacementStrategy</code> is set to <code>launch-before-terminate</code>.</p>
   *         <p>Not valid when <code>ReplacementStrategy</code> is set to <code>launch</code>.</p>
   *         <p>Valid values: Minimum value of <code>120</code> seconds. Maximum value of <code>7200</code> seconds.</p>
   */
  TerminationDelay?: number;
}

export namespace SpotCapacityRebalance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotCapacityRebalance): any => ({
    ...obj,
  });
}

/**
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
 *             interrupted.</p>
 */
export interface SpotMaintenanceStrategies {
  /**
   * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your
   *             Spot Instance is at an elevated risk of being interrupted. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-capacity-rebalance.html">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  CapacityRebalance?: SpotCapacityRebalance;
}

export namespace SpotMaintenanceStrategies {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotMaintenanceStrategies): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Spot Fleet request.</p>
 */
export interface SpotFleetRequestConfig {
  /**
   * <p>The progress of the Spot Fleet request.
   *           If there is an error, the status is <code>error</code>.
   *           After all requests are placed, the status is <code>pending_fulfillment</code>.
   *           If the size of the fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>.
   *           If the size of the fleet is decreased, the status is <code>pending_termination</code>
   *           while Spot Instances are terminating.</p>
   */
  ActivityStatus?: ActivityStatus | string;

  /**
   * <p>The creation date and time of the request.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The configuration of the Spot Fleet request.</p>
   */
  SpotFleetRequestConfig?: SpotFleetRequestConfigData;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;

  /**
   * <p>The state of the Spot Fleet request.</p>
   */
  SpotFleetRequestState?: BatchState | string;

  /**
   * <p>The tags for a Spot Fleet resource.</p>
   */
  Tags?: Tag[];
}

export namespace SpotFleetRequestConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotFleetRequestConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Spot Instance request.</p>
 */
export interface SpotInstanceRequest {
  /**
   * <p>Deprecated.</p>
   */
  ActualBlockHourlyPrice?: string;

  /**
   * <p>The Availability Zone group. If you specify the same Availability Zone group for all Spot Instance requests, all Spot Instances are launched in the same Availability Zone.</p>
   */
  AvailabilityZoneGroup?: string;

  /**
   * <p>Deprecated.</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The date and time when the Spot Instance request was created, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  CreateTime?: Date;

  /**
   * <p>The fault codes for the Spot Instance request, if any.</p>
   */
  Fault?: SpotInstanceStateFault;

  /**
   * <p>The instance ID, if an instance has been launched to fulfill the Spot Instance request.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and terminate together.</p>
   */
  LaunchGroup?: string;

  /**
   * <p>Additional information for launching instances.</p>
   */
  LaunchSpecification?: LaunchSpecification;

  /**
   * <p>The Availability Zone in which the request is launched.</p>
   */
  LaunchedAvailabilityZone?: string;

  /**
   * <p>The product description associated with the Spot Instance.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The ID of the Spot Instance request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>The maximum price per hour that you are willing to pay for a Spot Instance.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The state of the Spot Instance request. Spot request status information helps track your Spot
   *             Instance requests. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html">Spot request status</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  State?: SpotInstanceState | string;

  /**
   * <p>The status code and status message describing the Spot Instance request.</p>
   */
  Status?: SpotInstanceStatus;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Spot Instance request type.</p>
   */
  Type?: SpotInstanceType | string;

  /**
   * <p>The start date of the request, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             The request becomes active at this date and time.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   *          <ul>
   *             <li>
   *                 <p>For a persistent request, the request remains active until the <code>validUntil</code> date
   *                     and time is reached. Otherwise, the request remains active until you cancel it.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>For a one-time request, the request remains active until all instances launch,
   *                     the request is canceled, or the <code>validUntil</code> date and time is reached. By default, the
   *                     request is valid for 7 days from the date the request was created.</p>
   *            </li>
   *          </ul>
   */
  ValidUntil?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

export namespace SpotInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotInstanceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the maximum price per hour that you are willing to pay for a Spot
 *             Instance.</p>
 */
export interface SpotPrice {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>A general description of the AMI.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The maximum price per hour that you are willing to pay for a Spot Instance.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The date and time the request was created, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;
}

export namespace SpotPrice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotPrice): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a stale security group (a security group that contains stale rules).</p>
 */
export interface StaleSecurityGroup {
  /**
   * <p>The description of the security group.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>Information about the stale inbound rules in the security group.</p>
   */
  StaleIpPermissions?: StaleIpPermission[];

  /**
   * <p>Information about the stale outbound rules in the security group.</p>
   */
  StaleIpPermissionsEgress?: StaleIpPermission[];

  /**
   * <p>The ID of the VPC for the security group.</p>
   */
  VpcId?: string;
}

export namespace StaleSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StaleSecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>The information about the AMI store task, including the progress of the task.</p>
 */
export interface StoreImageTaskResult {
  /**
   * <p>The ID of the AMI that is being stored.</p>
   */
  AmiId?: string;

  /**
   * <p>The time the task started.</p>
   */
  TaskStartTime?: Date;

  /**
   * <p>The name of the Amazon S3 bucket that contains the stored AMI object.</p>
   */
  Bucket?: string;

  /**
   * <p>The name of the stored AMI object in the bucket.</p>
   */
  S3objectKey?: string;

  /**
   * <p>The progress of the task as a percentage.</p>
   */
  ProgressPercentage?: number;

  /**
   * <p>The state of the store task (<code>InProgress</code>, <code>Completed</code>, or
   *         <code>Failed</code>).</p>
   */
  StoreTaskState?: string;

  /**
   * <p>If the tasks fails, the reason for the failure is returned. If the task succeeds,
   *         <code>null</code> is returned.</p>
   */
  StoreTaskFailureReason?: string;
}

export namespace StoreImageTaskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StoreImageTaskResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a tag.</p>
 */
export interface TagDescription {
  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tag value.</p>
   */
  Value?: string;
}

export namespace TagDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an attachment between a resource and a transit gateway.</p>
 */
export interface TransitGatewayAttachment {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   */
  TransitGatewayOwnerId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The attachment state. Note that the <code>initiating</code> state has been deprecated.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * <p>The association.</p>
   */
  Association?: TransitGatewayAttachmentAssociation;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The tags for the attachment.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the modification status of an EBS volume.</p>
 *          <p>If the volume has never been modified, some element values will be null.</p>
 */
export interface VolumeModification {
  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>The current modification state. The modification state is null for unmodified
   *       volumes.</p>
   */
  ModificationState?: VolumeModificationState | string;

  /**
   * <p>A status message about the modification progress or failure.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The target size of the volume, in GiB.</p>
   */
  TargetSize?: number;

  /**
   * <p>The target IOPS rate of the volume.</p>
   */
  TargetIops?: number;

  /**
   * <p>The target EBS volume type of the volume.</p>
   */
  TargetVolumeType?: VolumeType | string;

  /**
   * <p>The target throughput of the volume, in MiB/s.</p>
   */
  TargetThroughput?: number;

  /**
   * <p>The target setting for Amazon EBS Multi-Attach.</p>
   */
  TargetMultiAttachEnabled?: boolean;

  /**
   * <p>The original size of the volume, in GiB.</p>
   */
  OriginalSize?: number;

  /**
   * <p>The original IOPS rate of the volume.</p>
   */
  OriginalIops?: number;

  /**
   * <p>The original EBS volume type of the volume.</p>
   */
  OriginalVolumeType?: VolumeType | string;

  /**
   * <p>The original throughput of the volume, in MiB/s.</p>
   */
  OriginalThroughput?: number;

  /**
   * <p>The original setting for Amazon EBS Multi-Attach.</p>
   */
  OriginalMultiAttachEnabled?: boolean;

  /**
   * <p>The modification progress, from 0 to 100 percent complete.</p>
   */
  Progress?: number;

  /**
   * <p>The modification start time.</p>
   */
  StartTime?: Date;

  /**
   * <p>The modification completion or failure time.</p>
   */
  EndTime?: Date;
}

export namespace VolumeModification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VolumeModification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the volume status.</p>
 */
export interface VolumeStatusItem {
  /**
   * <p>The details of the operation.</p>
   */
  Actions?: VolumeStatusAction[];

  /**
   * <p>The Availability Zone of the volume.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>A list of events associated with the volume.</p>
   */
  Events?: VolumeStatusEvent[];

  /**
   * <p>The volume ID.</p>
   */
  VolumeId?: string;

  /**
   * <p>The volume status.</p>
   */
  VolumeStatus?: VolumeStatusInfo;

  /**
   * <p>Information about the instances to which the volume is attached.</p>
   */
  AttachmentStatuses?: VolumeStatusAttachmentStatus[];
}

export namespace VolumeStatusItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VolumeStatusItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes whether a VPC is enabled for ClassicLink.</p>
 */
export interface VpcClassicLink {
  /**
   * <p>Indicates whether the VPC is enabled for ClassicLink.</p>
   */
  ClassicLinkEnabled?: boolean;

  /**
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace VpcClassicLink {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcClassicLink): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the ClassicLink DNS support status of a VPC.</p>
 */
export interface ClassicLinkDnsSupport {
  /**
   * <p>Indicates whether ClassicLink DNS support is enabled for the VPC.</p>
   */
  ClassicLinkDnsSupported?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace ClassicLinkDnsSupport {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassicLinkDnsSupport): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC endpoint connection to a service.</p>
 */
export interface VpcEndpointConnection {
  /**
   * <p>The ID of the service to which the endpoint is connected.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC endpoint.</p>
   */
  VpcEndpointOwner?: string;

  /**
   * <p>The state of the VPC endpoint.</p>
   */
  VpcEndpointState?: State | string;

  /**
   * <p>The date and time that the VPC endpoint was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The DNS entries for the VPC endpoint.</p>
   */
  DnsEntries?: DnsEntry[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the network load balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * <p>The IP address type for the endpoint.</p>
   */
  IpAddressType?: IpAddressType | string;
}

export namespace VpcEndpointConnection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcEndpointConnection): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC endpoint service.</p>
 */
export interface ServiceDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  ServiceName?: string;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceTypeDetail[];

  /**
   * <p>The Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The Amazon Web Services account ID of the service owner.</p>
   */
  Owner?: string;

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: string[];

  /**
   * <p>The private DNS name for the service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private DNS names assigned to the VPC endpoint service. </p>
   */
  PrivateDnsNames?: PrivateDnsDetails[];

  /**
   * <p>Indicates whether the service supports endpoint policies.</p>
   */
  VpcEndpointPolicySupported?: boolean;

  /**
   * <p>Indicates whether VPC endpoint connection requests to the service must be accepted by the service owner.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>Indicates whether the service manages its VPC endpoints. Management of the service VPC
   *             endpoints using the VPC endpoint API is restricted.</p>
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * <p>The payer responsibility.</p>
   */
  PayerResponsibility?: PayerResponsibility | string;

  /**
   * <p>Any tags assigned to the service.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The verification state of the VPC endpoint service.</p>
   *         <p>Consumers of the endpoint service cannot use the private name when the state is not <code>verified</code>.</p>
   */
  PrivateDnsNameVerificationState?: DnsNameState | string;

  /**
   * <p>The supported IP address types.</p>
   */
  SupportedIpAddressTypes?: (ServiceConnectivityType | string)[];
}

export namespace ServiceDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes fast snapshot restores that were successfully disabled.</p>
 */
export interface DisableFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The state of fast snapshot restores for the snapshot.</p>
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

export namespace DisableFastSnapshotRestoreSuccessItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreSuccessItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an error that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreStateError {
  /**
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace DisableFastSnapshotRestoreStateError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreStateError): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an error that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreStateErrorItem {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The error.</p>
   */
  Error?: DisableFastSnapshotRestoreStateError;
}

export namespace DisableFastSnapshotRestoreStateErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreStateErrorItem): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the errors that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreErrorItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The errors.</p>
   */
  FastSnapshotRestoreStateErrors?: DisableFastSnapshotRestoreStateErrorItem[];
}

export namespace DisableFastSnapshotRestoreErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreErrorItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes route propagation.</p>
 */
export interface TransitGatewayPropagation {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state.</p>
   */
  State?: TransitGatewayPropagationState | string;
}

export namespace TransitGatewayPropagation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayPropagation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes fast snapshot restores that were successfully enabled.</p>
 */
export interface EnableFastSnapshotRestoreSuccessItem {
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

export namespace EnableFastSnapshotRestoreSuccessItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreSuccessItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an error that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreStateError {
  /**
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace EnableFastSnapshotRestoreStateError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreStateError): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an error that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreStateErrorItem {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The error.</p>
   */
  Error?: EnableFastSnapshotRestoreStateError;
}

export namespace EnableFastSnapshotRestoreStateErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreStateErrorItem): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the errors that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreErrorItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The errors.</p>
   */
  FastSnapshotRestoreStateErrors?: EnableFastSnapshotRestoreStateErrorItem[];
}

export namespace EnableFastSnapshotRestoreErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreErrorItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the state of a client certificate revocation list.</p>
 */
export interface ClientCertificateRevocationListStatus {
  /**
   * <p>The state of the client certificate revocation list.</p>
   */
  Code?: ClientCertificateRevocationListStatusCode | string;

  /**
   * <p>A message about the status of the client certificate revocation list, if applicable.</p>
   */
  Message?: string;
}

export namespace ClientCertificateRevocationListStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientCertificateRevocationListStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the associated IAM roles.</p>
 */
export interface AssociatedRole {
  /**
   * <p>The ARN of the associated IAM role.</p>
   */
  AssociatedRoleArn?: string;

  /**
   * <p>The name of the Amazon S3 bucket in which the Amazon S3 object is stored.</p>
   */
  CertificateS3BucketName?: string;

  /**
   * <p>The key of the Amazon S3 object ey where the certificate, certificate chain, and encrypted private key bundle
   * 			is stored. The object key is formated as follows:  <code>role_arn</code>/<code>certificate_arn</code>.
   * 		</p>
   */
  CertificateS3ObjectKey?: string;

  /**
   * <p>The ID of the KMS customer master key (CMK) used to encrypt the private key.</p>
   */
  EncryptionKmsKeyId?: string;
}

export namespace AssociatedRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatedRole): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 CIDR block association.</p>
 */
export interface Ipv6CidrAssociation {
  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6Cidr?: string;

  /**
   * <p>The resource that's associated with the IPv6 CIDR block.</p>
   */
  AssociatedResource?: string;
}

export namespace Ipv6CidrAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv6CidrAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Capacity Reservation usage.</p>
 */
export interface InstanceUsage {
  /**
   * <p>The ID of the Amazon Web Services account that is making use of the Capacity Reservation.</p>
   */
  AccountId?: string;

  /**
   * <p>The number of instances the Amazon Web Services account currently has in the Capacity Reservation.</p>
   */
  UsedInstanceCount?: number;
}

export namespace InstanceUsage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceUsage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes address usage for a customer-owned address pool.</p>
 */
export interface CoipAddressUsage {
  /**
   * <p>The allocation ID of the address.</p>
   */
  AllocationId?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The Amazon Web Services service.</p>
   */
  AwsService?: string;

  /**
   * <p>The customer-owned IP address.</p>
   */
  CoIp?: string;
}

export namespace CoipAddressUsage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoipAddressUsage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the default credit option for CPU usage of a burstable performance instance
 *             family.</p>
 */
export interface InstanceFamilyCreditSpecification {
  /**
   * <p>The instance family.</p>
   */
  InstanceFamily?: UnlimitedSupportedInstanceFamily | string;

  /**
   * <p>The default credit option for CPU usage of the instance family. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

export namespace InstanceFamilyCreditSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceFamilyCreditSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resource group to which a Capacity Reservation has been added.</p>
 */
export interface CapacityReservationGroup {
  /**
   * <p>The ARN of the resource group.</p>
   */
  GroupArn?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource group.</p>
   */
  OwnerId?: string;
}

export namespace CapacityReservationGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityReservationGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the result of the purchase.</p>
 */
export interface Purchase {
  /**
   * <p>The currency in which the <code>UpfrontPrice</code> and <code>HourlyPrice</code>
   *             amounts are specified. At this time, the only supported currency is
   *             <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The duration of the reservation's term in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   */
  HostIdSet?: string[];

  /**
   * <p>The ID of the reservation.</p>
   */
  HostReservationId?: string;

  /**
   * <p>The hourly price of the reservation per hour.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance family on the Dedicated Host that the reservation can be associated
   *             with.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The payment option for the reservation.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The upfront price of the reservation.</p>
   */
  UpfrontPrice?: string;
}

export namespace Purchase {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Purchase): any => ({
    ...obj,
  });
}

/**
 * <p>The list of instance types with the specified instance attributes.</p>
 */
export interface InstanceTypeInfoFromInstanceRequirements {
  /**
   * <p>The matching instance type.</p>
   */
  InstanceType?: string;
}

export namespace InstanceTypeInfoFromInstanceRequirements {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceTypeInfoFromInstanceRequirements): any => ({
    ...obj,
  });
}

/**
 * <p>The historical record of a CIDR within an IPAM scope. For more information, see <a href="/vpc/latest/ipam/view-history-cidr-ipam.html">View the history of IP addresses</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 */
export interface IpamAddressHistoryRecord {
  /**
   * <p>The ID of the resource owner.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   */
  ResourceRegion?: string;

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType?: IpamAddressHistoryResourceType | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The CIDR of the resource.</p>
   */
  ResourceCidr?: string;

  /**
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The compliance status of a resource. For more information on compliance statuses, see <a href="/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  ResourceComplianceStatus?: IpamComplianceStatus | string;

  /**
   * <p>The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see <a href="/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  ResourceOverlapStatus?: IpamOverlapStatus | string;

  /**
   * <p>The VPC ID of the resource.</p>
   */
  VpcId?: string;

  /**
   * <p>Sampled start time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the start time may have occurred before this specific time.</p>
   */
  SampledStartTime?: Date;

  /**
   * <p>Sampled end time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the end time may have occurred before this specific time.</p>
   */
  SampledEndTime?: Date;
}

export namespace IpamAddressHistoryRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpamAddressHistoryRecord): any => ({
    ...obj,
  });
}

/**
 * <p>The CIDR for an IPAM resource.</p>
 */
export interface IpamResourceCidr {
  /**
   * <p>The IPAM ID for an IPAM resource.</p>
   */
  IpamId?: string;

  /**
   * <p>The scope ID for an IPAM resource.</p>
   */
  IpamScopeId?: string;

  /**
   * <p>The pool ID for an IPAM resource.</p>
   */
  IpamPoolId?: string;

  /**
   * <p>The Amazon Web Services Region for an IPAM resource.</p>
   */
  ResourceRegion?: string;

  /**
   * <p>The Amazon Web Services account number of the owner of an IPAM resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The ID of an IPAM resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The name of an IPAM resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The CIDR for an IPAM resource.</p>
   */
  ResourceCidr?: string;

  /**
   * <p>The type of IPAM resource.</p>
   */
  ResourceType?: IpamResourceType | string;

  /**
   * <p>The tags for an IPAM resource.</p>
   */
  ResourceTags?: IpamResourceTag[];

  /**
   * <p>The IP address space in the IPAM pool that is allocated to this resource. To convert the decimal to a percentage, multiply the decimal by 100.</p>
   */
  IpUsage?: number;

  /**
   * <p>The compliance status of the IPAM resource. For more information on compliance statuses, see <a href="/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  ComplianceStatus?: IpamComplianceStatus | string;

  /**
   * <p>The management state of the resource. For more information about management states, see <a href="/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  ManagementState?: IpamManagementState | string;

  /**
   * <p>The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see <a href="/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  OverlapStatus?: IpamOverlapStatus | string;

  /**
   * <p>The ID of a VPC.</p>
   */
  VpcId?: string;
}

export namespace IpamResourceCidr {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpamResourceCidr): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the resource with which a prefix list is associated.</p>
 */
export interface PrefixListAssociation {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The owner of the resource.</p>
   */
  ResourceOwner?: string;
}

export namespace PrefixListAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrefixListAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a prefix list entry.</p>
 */
export interface PrefixListEntry {
  /**
   * <p>The CIDR block.</p>
   */
  Cidr?: string;

  /**
   * <p>The description.</p>
   */
  Description?: string;
}

export namespace PrefixListEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrefixListEntry): any => ({
    ...obj,
  });
}

/**
 * <p>The cost associated with the Reserved Instance.</p>
 */
export interface ReservationValue {
  /**
   * <p>The hourly rate of the reservation.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The balance of the total value (the sum of remainingUpfrontValue + hourlyPrice * number of hours remaining).</p>
   */
  RemainingTotalValue?: string;

  /**
   * <p>The remaining upfront cost of the reservation.</p>
   */
  RemainingUpfrontValue?: string;
}

export namespace ReservationValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservationValue): any => ({
    ...obj,
  });
}

/**
 * <p>The total value of the Convertible Reserved Instance.</p>
 */
export interface ReservedInstanceReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservationValue?: ReservationValue;

  /**
   * <p>The ID of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservedInstanceId?: string;
}

export namespace ReservedInstanceReservationValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedInstanceReservationValue): any => ({
    ...obj,
  });
}

/**
 * <p>The total value of the new Convertible Reserved Instances.</p>
 */
export interface TargetReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instances that make up the exchange. This is the sum of
   *       the list value, remaining upfront price, and additional upfront cost of the exchange.</p>
   */
  ReservationValue?: ReservationValue;

  /**
   * <p>The configuration of the Convertible Reserved Instances that make up the exchange.</p>
   */
  TargetConfiguration?: TargetConfiguration;
}

export namespace TargetReservationValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetReservationValue): any => ({
    ...obj,
  });
}

/**
 * <p>The Spot placement score for this Region or Availability Zone. The score is calculated
 *          based on the assumption that the <code>capacity-optimized</code> allocation strategy is
 *          used and that all of the Availability Zones in the Region can be used.</p>
 */
export interface SpotPlacementScore {
  /**
   * <p>The Region.</p>
   */
  Region?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The placement score, on a scale from <code>1</code> to <code>10</code>. A score of
   *             <code>10</code> indicates that your Spot request is highly likely to succeed in this
   *          Region or Availability Zone. A score of <code>1</code> indicates that your Spot request is
   *          not likely to succeed. </p>
   */
  Score?: number;
}

export namespace SpotPlacementScore {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotPlacementScore): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a propagation route table.</p>
 */
export interface TransitGatewayAttachmentPropagation {
  /**
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state of the propagation route table.</p>
   */
  State?: TransitGatewayPropagationState | string;
}

export namespace TransitGatewayAttachmentPropagation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayAttachmentPropagation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the resources associated with the transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomainAssociation {
  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain association resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The subnet associated with the transit gateway multicast domain.</p>
   */
  Subnet?: SubnetAssociation;
}

export namespace TransitGatewayMulticastDomainAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDomainAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a route table and a resource attachment.</p>
 */
export interface TransitGatewayRouteTableAssociation {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayAssociationState | string;
}

export namespace TransitGatewayRouteTableAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayRouteTableAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route table propagation.</p>
 */
export interface TransitGatewayRouteTablePropagation {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The state of the resource.</p>
   */
  State?: TransitGatewayPropagationState | string;
}

export namespace TransitGatewayRouteTablePropagation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayRouteTablePropagation): any => ({
    ...obj,
  });
}

/**
 * <p>List of customer gateway devices that have a sample configuration file available for
 *             use. You can also see the list of device types with sample configuration files available
 *             under <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html">Your customer
 *                 gateway device</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
 */
export interface VpnConnectionDeviceType {
  /**
   * <p>Customer gateway device identifier.</p>
   */
  VpnConnectionDeviceTypeId?: string;

  /**
   * <p>Customer gateway device vendor.</p>
   */
  Vendor?: string;

  /**
   * <p>Customer gateway device platform.</p>
   */
  Platform?: string;

  /**
   * <p>Customer gateway device software version.</p>
   */
  Software?: string;
}

export namespace VpnConnectionDeviceType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpnConnectionDeviceType): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an AMI that is currently in the Recycle Bin.</p>
 */
export interface ImageRecycleBinInfo {
  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the AMI.</p>
   */
  Name?: string;

  /**
   * <p>The description of the AMI.</p>
   */
  Description?: string;

  /**
   * <p>The date and time when the AMI entered the Recycle Bin.</p>
   */
  RecycleBinEnterTime?: Date;

  /**
   * <p>The date and time when the AMI is to be permanently deleted from the Recycle Bin.</p>
   */
  RecycleBinExitTime?: Date;
}

export namespace ImageRecycleBinInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageRecycleBinInfo): any => ({
    ...obj,
  });
}
