// smithy-typescript generated code
import {
  _InstanceType,
  ArchitectureType,
  BlockDeviceMapping,
  GroupIdentifier,
  IamInstanceProfileSpecification,
  IcmpTypeCode,
  InstanceIpv6Address,
  InstanceNetworkInterfaceSpecification,
  Placement,
  PortRange,
  PrivateIpAddressSpecification,
  Protocol,
  ReservedInstancesConfiguration,
  RunInstancesMonitoringEnabled,
  SpotPlacement,
  Tag,
  UserIdGroupPair,
  VirtualizationType,
} from "./models_3";
import {
  CapacityReservationSpecificationResponse,
  CapacityReservationTargetResponse,
  CidrBlock,
  ClientVpnConnectionStatus,
  CpuOptions,
  DiskImageDescription,
  DiskImageVolumeDescription,
  DiskInfo,
  EbsInstanceBlockDevice,
  EfaInfo,
  ElasticGpuAssociation,
  ElasticInferenceAcceleratorAssociation,
  EnclaveOptions,
  HibernationOptions,
  IamInstanceProfile,
  IKEVersionsListValue,
  ProductCode,
  RouteTableAssociationState,
  StateReason,
} from "./models_4";
import {
  ArchitectureValues,
  BootModeValues,
  DeviceType,
  EnaSupport,
  EphemeralNvmeSupport,
  EventCode,
  HttpTokensState,
  HypervisorType,
  InstanceAutoRecoveryState,
  InstanceLifecycleType,
  InstanceMetadataEndpointState,
  InstanceMetadataOptionsState,
  InstanceMetadataProtocolState,
  InstanceMetadataTagsState,
  InstanceStateName,
  InstanceStorageEncryptionSupport,
  IpamPoolCidrFailureCode,
  MembershipType,
  MonitoringState,
  RecurringChargeFrequency,
  StatusName,
  StatusType,
  SummaryStatus,
  UnsuccessfulInstanceCreditSpecificationErrorCode,
  VolumeStatusInfoStatus,
  VolumeStatusName,
} from "./models_6";

export type TransitGatewayAttachmentResourceType =
  | "connect"
  | "direct-connect-gateway"
  | "peering"
  | "tgw-peering"
  | "vpc"
  | "vpn";

export type TransitGatewayMulitcastDomainAssociationState =
  | "associated"
  | "associating"
  | "disassociated"
  | "disassociating"
  | "failed"
  | "pendingAcceptance"
  | "rejected";

/**
 * <p>Describes the subnet association with the transit gateway multicast domain.</p>
 */
export interface SubnetAssociation {
  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The state of the subnet association.</p>
   */
  State?: TransitGatewayMulitcastDomainAssociationState | string;
}

export namespace SubnetAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the transit gateway in the peering attachment.</p>
 */
export interface PeeringTgwInfo {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Region of the transit gateway.</p>
   */
  Region?: string;
}

export namespace PeeringTgwInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PeeringTgwInfo): any => ({
    ...obj,
  });
}

export type TransitGatewayAttachmentState =
  | "available"
  | "deleted"
  | "deleting"
  | "failed"
  | "failing"
  | "initiating"
  | "initiatingRequest"
  | "modifying"
  | "pending"
  | "pendingAcceptance"
  | "rejected"
  | "rejecting"
  | "rollingBack";

/**
 * <p>The status of the transit gateway peering attachment.</p>
 */
export interface PeeringAttachmentStatus {
  /**
   * <p>The status code.</p>
   */
  Code?: string;

  /**
   * <p>The status message, if applicable.</p>
   */
  Message?: string;
}

export namespace PeeringAttachmentStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PeeringAttachmentStatus): any => ({
    ...obj,
  });
}

export type ApplianceModeSupportValue = "disable" | "enable";

export type DnsSupportValue = "disable" | "enable";

export type Ipv6SupportValue = "disable" | "enable";

/**
 * <p>Describes the VPC attachment options.</p>
 */
export interface TransitGatewayVpcAttachmentOptions {
  /**
   * <p>Indicates whether DNS support is enabled.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Indicates whether IPv6 support is disabled.</p>
   */
  Ipv6Support?: Ipv6SupportValue | string;

  /**
   * <p>Indicates whether appliance mode support is enabled.</p>
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | string;
}

export namespace TransitGatewayVpcAttachmentOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayVpcAttachmentOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the error that occurred. For more information about errors, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
 */
export interface UnsuccessfulItemError {
  /**
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * <p>The error message accompanying the error code.</p>
   */
  Message?: string;
}

export namespace UnsuccessfulItemError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsuccessfulItemError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 CIDR block.</p>
 */
export interface Ipv6CidrBlock {
  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6CidrBlock?: string;
}

export namespace Ipv6CidrBlock {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv6CidrBlock): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the VPC peering connection options.</p>
 */
export interface VpcPeeringConnectionOptionsDescription {
  /**
   * <p>Indicates whether a local VPC can resolve public DNS hostnames to private IP addresses when queried from instances in a peer VPC.</p>
   */
  AllowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * <p>Indicates whether a local ClassicLink connection can communicate with the peer VPC over the VPC peering connection.</p>
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * <p>Indicates whether a local VPC can communicate with a ClassicLink connection in the peer VPC over the VPC peering connection.</p>
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

export namespace VpcPeeringConnectionOptionsDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcPeeringConnectionOptionsDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC in a VPC peering connection.</p>
 */
export interface VpcPeeringConnectionVpcInfo {
  /**
   * <p>The IPv4 CIDR block for the VPC.</p>
   */
  CidrBlock?: string;

  /**
   * <p>The IPv6 CIDR block for the VPC.</p>
   */
  Ipv6CidrBlockSet?: Ipv6CidrBlock[];

  /**
   * <p>Information about the IPv4 CIDR blocks for the VPC.</p>
   */
  CidrBlockSet?: CidrBlock[];

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC.</p>
   */
  OwnerId?: string;

  /**
   * <p>Information about the VPC peering connection options for the accepter or requester VPC.</p>
   */
  PeeringOptions?: VpcPeeringConnectionOptionsDescription;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The Region in which the VPC is located.</p>
   */
  Region?: string;
}

export namespace VpcPeeringConnectionVpcInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcPeeringConnectionVpcInfo): any => ({
    ...obj,
  });
}

export type VpcPeeringConnectionStateReasonCode =
  | "active"
  | "deleted"
  | "deleting"
  | "expired"
  | "failed"
  | "initiating-request"
  | "pending-acceptance"
  | "provisioning"
  | "rejected";

/**
 * <p>Describes the status of a VPC peering connection.</p>
 */
export interface VpcPeeringConnectionStateReason {
  /**
   * <p>The status of the VPC peering connection.</p>
   */
  Code?: VpcPeeringConnectionStateReasonCode | string;

  /**
   * <p>A message that provides more information about the status, if applicable.</p>
   */
  Message?: string;
}

export namespace VpcPeeringConnectionStateReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcPeeringConnectionStateReason): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a packet header statement.</p>
 */
export interface PacketHeaderStatement {
  /**
   * <p>The source addresses.</p>
   */
  SourceAddresses?: string[];

  /**
   * <p>The destination addresses.</p>
   */
  DestinationAddresses?: string[];

  /**
   * <p>The source ports.</p>
   */
  SourcePorts?: string[];

  /**
   * <p>The destination ports.</p>
   */
  DestinationPorts?: string[];

  /**
   * <p>The source prefix lists.</p>
   */
  SourcePrefixLists?: string[];

  /**
   * <p>The destination prefix lists.</p>
   */
  DestinationPrefixLists?: string[];

  /**
   * <p>The protocols.</p>
   */
  Protocols?: (Protocol | string)[];
}

export namespace PacketHeaderStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PacketHeaderStatement): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resource statement.</p>
 */
export interface ResourceStatement {
  /**
   * <p>The resources.</p>
   */
  Resources?: string[];

  /**
   * <p>The resource types.</p>
   */
  ResourceTypes?: string[];
}

export namespace ResourceStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceStatement): any => ({
    ...obj,
  });
}

export enum InstanceHealthStatus {
  HEALTHY_STATUS = "healthy",
  UNHEALTHY_STATUS = "unhealthy",
}

export enum ActivityStatus {
  ERROR = "error",
  FULFILLED = "fulfilled",
  PENDING_FULFILLMENT = "pending_fulfillment",
  PENDING_TERMINATION = "pending_termination",
}

export type DomainType = "standard" | "vpc";

export type AddressAttributeName = "domain-name";

export enum AddressFamily {
  ipv4 = "ipv4",
  ipv6 = "ipv6",
}

export type ByoipCidrState =
  | "advertised"
  | "deprovisioned"
  | "failed-deprovision"
  | "failed-provision"
  | "pending-deprovision"
  | "pending-provision"
  | "provisioned"
  | "provisioned-not-publicly-advertisable";

export type Affinity = "default" | "host";

export type ResourceType =
  | "capacity-reservation"
  | "carrier-gateway"
  | "client-vpn-endpoint"
  | "customer-gateway"
  | "dedicated-host"
  | "dhcp-options"
  | "egress-only-internet-gateway"
  | "elastic-gpu"
  | "elastic-ip"
  | "export-image-task"
  | "export-instance-task"
  | "fleet"
  | "fpga-image"
  | "host-reservation"
  | "image"
  | "import-image-task"
  | "import-snapshot-task"
  | "instance"
  | "instance-event-window"
  | "internet-gateway"
  | "ipam"
  | "ipam-pool"
  | "ipam-scope"
  | "ipv4pool-ec2"
  | "ipv6pool-ec2"
  | "key-pair"
  | "launch-template"
  | "local-gateway"
  | "local-gateway-route-table"
  | "local-gateway-route-table-virtual-interface-group-association"
  | "local-gateway-route-table-vpc-association"
  | "local-gateway-virtual-interface"
  | "local-gateway-virtual-interface-group"
  | "natgateway"
  | "network-acl"
  | "network-insights-access-scope"
  | "network-insights-access-scope-analysis"
  | "network-insights-analysis"
  | "network-insights-path"
  | "network-interface"
  | "placement-group"
  | "prefix-list"
  | "replace-root-volume-task"
  | "reserved-instances"
  | "route-table"
  | "security-group"
  | "security-group-rule"
  | "snapshot"
  | "spot-fleet-request"
  | "spot-instances-request"
  | "subnet"
  | "subnet-cidr-reservation"
  | "traffic-mirror-filter"
  | "traffic-mirror-session"
  | "traffic-mirror-target"
  | "transit-gateway"
  | "transit-gateway-attachment"
  | "transit-gateway-connect-peer"
  | "transit-gateway-multicast-domain"
  | "transit-gateway-route-table"
  | "volume"
  | "vpc"
  | "vpc-endpoint"
  | "vpc-endpoint-service"
  | "vpc-flow-log"
  | "vpc-peering-connection"
  | "vpn-connection"
  | "vpn-gateway";

export type AutoPlacement = "off" | "on";

export type HostRecovery = "off" | "on";

export enum IpamPoolAllocationResourceType {
  custom = "custom",
  ec2_public_ipv4_pool = "ec2-public-ipv4-pool",
  ipam_pool = "ipam-pool",
  vpc = "vpc",
}

export type AllocationState =
  | "available"
  | "pending"
  | "permanent-failure"
  | "released"
  | "released-permanent-failure"
  | "under-assessment";

export enum AllocationStrategy {
  CAPACITY_OPTIMIZED = "capacityOptimized",
  CAPACITY_OPTIMIZED_PRIORITIZED = "capacityOptimizedPrioritized",
  DIVERSIFIED = "diversified",
  LOWEST_PRICE = "lowestPrice",
}

export enum PrincipalType {
  Account = "Account",
  All = "All",
  OrganizationUnit = "OrganizationUnit",
  Role = "Role",
  Service = "Service",
  User = "User",
}

export type AllowsMultipleInstanceTypes = "off" | "on";

export type AssociationStatusCode =
  | "associated"
  | "associating"
  | "association-failed"
  | "disassociated"
  | "disassociating";

export enum IamInstanceProfileAssociationState {
  ASSOCIATED = "associated",
  ASSOCIATING = "associating",
  DISASSOCIATED = "disassociated",
  DISASSOCIATING = "disassociating",
}

/**
 * <p>One or more targets associated with the event window.</p>
 */
export interface InstanceEventWindowAssociationTarget {
  /**
   * <p>The IDs of the instances associated with the event window.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The instance tags associated with the event window. Any instances associated with the tags
   *          will be associated with the event window.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The IDs of the Dedicated Hosts associated with the event window.</p>
   */
  DedicatedHostIds?: string[];
}

export namespace InstanceEventWindowAssociationTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceEventWindowAssociationTarget): any => ({
    ...obj,
  });
}

export enum InstanceEventWindowState {
  active = "active",
  creating = "creating",
  deleted = "deleted",
  deleting = "deleting",
}

export enum WeekDay {
  friday = "friday",
  monday = "monday",
  saturday = "saturday",
  sunday = "sunday",
  thursday = "thursday",
  tuesday = "tuesday",
  wednesday = "wednesday",
}

/**
 * <p>The start day and time and the end day and time of the time range, in UTC.</p>
 */
export interface InstanceEventWindowTimeRange {
  /**
   * <p>The day on which the time range begins.</p>
   */
  StartWeekDay?: WeekDay | string;

  /**
   * <p>The hour when the time range begins.</p>
   */
  StartHour?: number;

  /**
   * <p>The day on which the time range ends.</p>
   */
  EndWeekDay?: WeekDay | string;

  /**
   * <p>The hour when the time range ends.</p>
   */
  EndHour?: number;
}

export namespace InstanceEventWindowTimeRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceEventWindowTimeRange): any => ({
    ...obj,
  });
}

export type RouteTableAssociationStateCode =
  | "associated"
  | "associating"
  | "disassociated"
  | "disassociating"
  | "failed";

export type SubnetCidrBlockStateCode =
  | "associated"
  | "associating"
  | "disassociated"
  | "disassociating"
  | "failed"
  | "failing";

/**
 * <p>Describes the state of a CIDR block.</p>
 */
export interface SubnetCidrBlockState {
  /**
   * <p>The state of a CIDR block.</p>
   */
  State?: SubnetCidrBlockStateCode | string;

  /**
   * <p>A message about the status of the CIDR block, if applicable.</p>
   */
  StatusMessage?: string;
}

export namespace SubnetCidrBlockState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetCidrBlockState): any => ({
    ...obj,
  });
}

export type TransitGatewayAssociationState = "associated" | "associating" | "disassociated" | "disassociating";

export enum InterfaceProtocolType {
  GRE = "GRE",
  VLAN = "VLAN",
}

export type VpcCidrBlockStateCode =
  | "associated"
  | "associating"
  | "disassociated"
  | "disassociating"
  | "failed"
  | "failing";

/**
 * <p>Describes the state of a CIDR block.</p>
 */
export interface VpcCidrBlockState {
  /**
   * <p>The state of the CIDR block.</p>
   */
  State?: VpcCidrBlockStateCode | string;

  /**
   * <p>A message about the status of the CIDR block, if applicable.</p>
   */
  StatusMessage?: string;
}

export namespace VpcCidrBlockState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcCidrBlockState): any => ({
    ...obj,
  });
}

export type VolumeAttachmentState = "attached" | "attaching" | "busy" | "detached" | "detaching";

export type AttachmentStatus = "attached" | "attaching" | "detached" | "detaching";

export type ClientVpnAuthorizationRuleStatusCode = "active" | "authorizing" | "failed" | "revoking";

/**
 * <p> Describes the security group that is referenced in the security group rule.</p>
 */
export interface ReferencedSecurityGroup {
  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The status of a VPC peering connection, if applicable.</p>
   */
  PeeringStatus?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  UserId?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export namespace ReferencedSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReferencedSecurityGroup): any => ({
    ...obj,
  });
}

export type BundleTaskState =
  | "bundling"
  | "cancelling"
  | "complete"
  | "failed"
  | "pending"
  | "storing"
  | "waiting-for-shutdown";

export enum CapacityReservationFleetState {
  ACTIVE = "active",
  CANCELLED = "cancelled",
  CANCELLING = "cancelling",
  EXPIRED = "expired",
  EXPIRING = "expiring",
  FAILED = "failed",
  MODIFYING = "modifying",
  PARTIALLY_FULFILLED = "partially_fulfilled",
  SUBMITTED = "submitted",
}

export type ListingState = "available" | "cancelled" | "pending" | "sold";

/**
 * <p>Describes a Reserved Instance listing state.</p>
 */
export interface InstanceCount {
  /**
   * <p>The number of listed Reserved Instances in the state specified by the <code>state</code>.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The states of the listed Reserved Instances.</p>
   */
  State?: ListingState | string;
}

export namespace InstanceCount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceCount): any => ({
    ...obj,
  });
}

export type CurrencyCodeValues = "USD";

/**
 * <p>Describes the price for a Reserved Instance.</p>
 */
export interface PriceSchedule {
  /**
   * <p>The current price schedule, as determined by the term remaining for the Reserved Instance in the listing.</p>
   *          <p>A specific price schedule is always in effect, but only one price schedule can be active at any time. Take, for example, a Reserved Instance listing that has five months remaining in its term. When you specify price schedules for five months and two months, this means that schedule 1, covering the first three months of the remaining term, will be active during months 5, 4, and 3. Then schedule 2, covering the last two months of the term, will be active for months 2 and 1.</p>
   */
  Active?: boolean;

  /**
   * <p>The currency for transacting the Reserved Instance resale.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The fixed price for the term.</p>
   */
  Price?: number;

  /**
   * <p>The number of months remaining in the reservation. For example, 2 is the second to the last month before the capacity reservation expires.</p>
   */
  Term?: number;
}

export namespace PriceSchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PriceSchedule): any => ({
    ...obj,
  });
}

export type ListingStatus = "active" | "cancelled" | "closed" | "pending";

export enum BatchState {
  ACTIVE = "active",
  CANCELLED = "cancelled",
  CANCELLED_RUNNING = "cancelled_running",
  CANCELLED_TERMINATING_INSTANCES = "cancelled_terminating",
  FAILED = "failed",
  MODIFYING = "modifying",
  SUBMITTED = "submitted",
}

export enum CancelBatchErrorCode {
  FLEET_REQUEST_ID_DOES_NOT_EXIST = "fleetRequestIdDoesNotExist",
  FLEET_REQUEST_ID_MALFORMED = "fleetRequestIdMalformed",
  FLEET_REQUEST_NOT_IN_CANCELLABLE_STATE = "fleetRequestNotInCancellableState",
  UNEXPECTED_ERROR = "unexpectedError",
}

export type CancelSpotInstanceRequestState = "active" | "cancelled" | "closed" | "completed" | "open";

export type EndDateType = "limited" | "unlimited";

export type InstanceMatchCriteria = "open" | "targeted";

export enum CapacityReservationInstancePlatform {
  LINUX_UNIX = "Linux/UNIX",
  LINUX_WITH_SQL_SERVER_ENTERPRISE = "Linux with SQL Server Enterprise",
  LINUX_WITH_SQL_SERVER_STANDARD = "Linux with SQL Server Standard",
  LINUX_WITH_SQL_SERVER_WEB = "Linux with SQL Server Web",
  RED_HAT_ENTERPRISE_LINUX = "Red Hat Enterprise Linux",
  RHEL_WITH_HA = "RHEL with HA",
  RHEL_WITH_HA_AND_SQL_SERVER_ENTERPRISE = "RHEL with HA and SQL Server Enterprise",
  RHEL_WITH_HA_AND_SQL_SERVER_STANDARD = "RHEL with HA and SQL Server Standard",
  RHEL_WITH_SQL_SERVER_ENTERPRISE = "RHEL with SQL Server Enterprise",
  RHEL_WITH_SQL_SERVER_STANDARD = "RHEL with SQL Server Standard",
  RHEL_WITH_SQL_SERVER_WEB = "RHEL with SQL Server Web",
  SUSE_LINUX = "SUSE Linux",
  WINDOWS = "Windows",
  WINDOWS_WITH_SQL_SERVER = "Windows with SQL Server",
  WINDOWS_WITH_SQL_SERVER_ENTERPRISE = "Windows with SQL Server Enterprise",
  WINDOWS_WITH_SQL_SERVER_STANDARD = "Windows with SQL Server Standard",
  WINDOWS_WITH_SQL_SERVER_WEB = "Windows with SQL Server Web",
}

export type CapacityReservationTenancy = "dedicated" | "default";

export type CapacityReservationState = "active" | "cancelled" | "expired" | "failed" | "pending";

export enum FleetInstanceMatchCriteria {
  open = "open",
}

export enum FleetCapacityReservationTenancy {
  default = "default",
}

export type CarrierGatewayState = "available" | "deleted" | "deleting" | "pending";

export type ClientVpnAuthenticationType =
  | "certificate-authentication"
  | "directory-service-authentication"
  | "federated-authentication";

export type SelfServicePortal = "disabled" | "enabled";

export type TransportProtocol = "tcp" | "udp";

export type ClientVpnEndpointStatusCode = "available" | "deleted" | "deleting" | "pending-associate";

export type ClientVpnRouteStatusCode = "active" | "creating" | "deleting" | "failed";

export type GatewayType = "ipsec.1";

export enum HostnameType {
  ip_name = "ip-name",
  resource_name = "resource-name",
}

/**
 * <p>Describes the options for instance hostnames.</p>
 */
export interface PrivateDnsNameOptionsOnLaunch {
  /**
   * <p>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name
   *             must be based on the instance ID. For dual-stack subnets, you can specify whether DNS
   *             names use the instance IPv4 address or the instance ID.</p>
   */
  HostnameType?: HostnameType | string;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostname with DNS AAAA
   *             records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

export namespace PrivateDnsNameOptionsOnLaunch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateDnsNameOptionsOnLaunch): any => ({
    ...obj,
  });
}

export type SubnetState = "available" | "pending";

export type Tenancy = "dedicated" | "default" | "host";

export type VpcState = "available" | "pending";

export enum FleetExcessCapacityTerminationPolicy {
  NO_TERMINATION = "no-termination",
  TERMINATION = "termination",
}

export enum BareMetal {
  EXCLUDED = "excluded",
  INCLUDED = "included",
  REQUIRED = "required",
}

export enum BurstablePerformance {
  EXCLUDED = "excluded",
  INCLUDED = "included",
  REQUIRED = "required",
}

export enum LocalStorage {
  EXCLUDED = "excluded",
  INCLUDED = "included",
  REQUIRED = "required",
}

export enum FleetOnDemandAllocationStrategy {
  LOWEST_PRICE = "lowest-price",
  PRIORITIZED = "prioritized",
}

export enum FleetCapacityReservationUsageStrategy {
  USE_CAPACITY_RESERVATIONS_FIRST = "use-capacity-reservations-first",
}

export enum SpotAllocationStrategy {
  CAPACITY_OPTIMIZED = "capacity-optimized",
  CAPACITY_OPTIMIZED_PRIORITIZED = "capacity-optimized-prioritized",
  DIVERSIFIED = "diversified",
  LOWEST_PRICE = "lowest-price",
}

export type SpotInstanceInterruptionBehavior = "hibernate" | "stop" | "terminate";

export enum FleetReplacementStrategy {
  LAUNCH = "launch",
  LAUNCH_BEFORE_TERMINATE = "launch-before-terminate",
}

export enum DefaultTargetCapacityType {
  ON_DEMAND = "on-demand",
  SPOT = "spot",
}

export enum TargetCapacityUnitType {
  MEMORY_MIB = "memory-mib",
  UNITS = "units",
  VCPU = "vcpu",
}

export enum FleetType {
  INSTANT = "instant",
  MAINTAIN = "maintain",
  REQUEST = "request",
}

export enum InstanceLifecycle {
  ON_DEMAND = "on-demand",
  SPOT = "spot",
}

export type PlatformValues = "Windows";

export enum DestinationFileFormat {
  parquet = "parquet",
  plain_text = "plain-text",
}

export type LogDestinationType = "cloud-watch-logs" | "s3";

export type FlowLogsResourceType = "NetworkInterface" | "Subnet" | "VPC";

export type TrafficType = "ACCEPT" | "ALL" | "REJECT";

export type VolumeType = "gp2" | "gp3" | "io1" | "io2" | "sc1" | "st1" | "standard";

export type ContainerFormat = "ova";

export type DiskImageFormat = "RAW" | "VHD" | "VMDK";

export type ExportEnvironment = "citrix" | "microsoft" | "vmware";

export type ExportTaskState = "active" | "cancelled" | "cancelling" | "completed";

/**
 * <p>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only
 *          discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
 *          <p>For more information about operating Regions, see <a href="/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 */
export interface IpamOperatingRegion {
  /**
   * <p>The name of the operating Region.</p>
   */
  RegionName?: string;
}

export namespace IpamOperatingRegion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpamOperatingRegion): any => ({
    ...obj,
  });
}

export enum IpamState {
  create_complete = "create-complete",
  create_failed = "create-failed",
  create_in_progress = "create-in-progress",
  delete_complete = "delete-complete",
  delete_failed = "delete-failed",
  delete_in_progress = "delete-in-progress",
  isolate_complete = "isolate-complete",
  isolate_in_progress = "isolate-in-progress",
  modify_complete = "modify-complete",
  modify_failed = "modify-failed",
  modify_in_progress = "modify-in-progress",
  restore_in_progress = "restore-in-progress",
}

export enum IpamPoolAwsService {
  ec2 = "ec2",
}

/**
 * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
 *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
 */
export interface IpamResourceTag {
  /**
   * <p>The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   */
  Key?: string;

  /**
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

export namespace IpamResourceTag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpamResourceTag): any => ({
    ...obj,
  });
}

export enum IpamScopeType {
  private = "private",
  public = "public",
}

export enum IpamPoolState {
  create_complete = "create-complete",
  create_failed = "create-failed",
  create_in_progress = "create-in-progress",
  delete_complete = "delete-complete",
  delete_failed = "delete-failed",
  delete_in_progress = "delete-in-progress",
  isolate_complete = "isolate-complete",
  isolate_in_progress = "isolate-in-progress",
  modify_complete = "modify-complete",
  modify_failed = "modify-failed",
  modify_in_progress = "modify-in-progress",
  restore_in_progress = "restore-in-progress",
}

export enum IpamScopeState {
  create_complete = "create-complete",
  create_failed = "create-failed",
  create_in_progress = "create-in-progress",
  delete_complete = "delete-complete",
  delete_failed = "delete-failed",
  delete_in_progress = "delete-in-progress",
  isolate_complete = "isolate-complete",
  isolate_in_progress = "isolate-in-progress",
  modify_complete = "modify-complete",
  modify_failed = "modify-failed",
  modify_in_progress = "modify-in-progress",
  restore_in_progress = "restore-in-progress",
}

export enum KeyFormat {
  pem = "pem",
  ppk = "ppk",
}

export enum KeyType {
  ed25519 = "ed25519",
  rsa = "rsa",
}

export type CapacityReservationPreference = "none" | "open";

export type ShutdownBehavior = "stop" | "terminate";

export type MarketType = "spot";

export type InstanceInterruptionBehavior = "hibernate" | "stop" | "terminate";

export type SpotInstanceType = "one-time" | "persistent";

export enum LaunchTemplateAutoRecoveryState {
  default = "default",
  disabled = "disabled",
}

export type LaunchTemplateInstanceMetadataEndpointState = "disabled" | "enabled";

export enum LaunchTemplateInstanceMetadataProtocolIpv6 {
  disabled = "disabled",
  enabled = "enabled",
}

export enum LaunchTemplateHttpTokensState {
  optional = "optional",
  required = "required",
}

export enum LaunchTemplateInstanceMetadataTagsState {
  disabled = "disabled",
  enabled = "enabled",
}

/**
 * <p>Describes a block device for an EBS volume.</p>
 */
export interface LaunchTemplateEbsBlockDevice {
  /**
   * <p>Indicates whether the EBS volume is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports. </p>
   */
  Iops?: number;

  /**
   * <p>The ARN of the Key Management Service (KMS) CMK used for encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   */
  Throughput?: number;
}

export namespace LaunchTemplateEbsBlockDevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateEbsBlockDevice): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device mapping.</p>
 */
export interface LaunchTemplateBlockDeviceMapping {
  /**
   * <p>The device name.</p>
   */
  DeviceName?: string;

  /**
   * <p>The virtual device name (ephemeralN).</p>
   */
  VirtualName?: string;

  /**
   * <p>Information about the block device for an EBS volume.</p>
   */
  Ebs?: LaunchTemplateEbsBlockDevice;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   */
  NoDevice?: string;
}

export namespace LaunchTemplateBlockDeviceMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateBlockDeviceMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Capacity Reservation targeting option.</p>
 */
export interface LaunchTemplateCapacityReservationSpecificationResponse {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences
   *             include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity
   *                     Reservation that has matching attributes (instance type, platform, Availability
   *                     Zone).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even
   *                     if one is available. The instance runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference | string;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation
   *             group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTargetResponse;
}

export namespace LaunchTemplateCapacityReservationSpecificationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateCapacityReservationSpecificationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The CPU options for the instance.</p>
 */
export interface LaunchTemplateCpuOptions {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core.</p>
   */
  ThreadsPerCore?: number;
}

export namespace LaunchTemplateCpuOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateCpuOptions): any => ({
    ...obj,
  });
}

/**
 * <p> Describes an elastic inference accelerator. </p>
 */
export interface LaunchTemplateElasticInferenceAcceleratorResponse {
  /**
   * <p> The type of elastic inference accelerator. The possible values are eia1.medium,
   *             eia1.large, and eia1.xlarge. </p>
   */
  Type?: string;

  /**
   * <p> The number of elastic inference accelerators to attach to the instance. </p>
   *         <p>Default: 1</p>
   */
  Count?: number;
}

export namespace LaunchTemplateElasticInferenceAcceleratorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateElasticInferenceAcceleratorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
 */
export interface LaunchTemplateEnclaveOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for Amazon Web Services Nitro
   *             Enclaves; otherwise, it is not enabled for Amazon Web Services Nitro Enclaves.</p>
   */
  Enabled?: boolean;
}

export namespace LaunchTemplateEnclaveOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateEnclaveOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether an instance is configured for hibernation.</p>
 */
export interface LaunchTemplateHibernationOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for
   *             hibernation; otherwise, it is not enabled for hibernation.</p>
   */
  Configured?: boolean;
}

export namespace LaunchTemplateHibernationOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateHibernationOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IAM instance profile.</p>
 */
export interface LaunchTemplateIamInstanceProfileSpecification {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the instance profile.</p>
   */
  Name?: string;
}

export namespace LaunchTemplateIamInstanceProfileSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateIamInstanceProfileSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The options for Spot Instances.</p>
 */
export interface LaunchTemplateSpotMarketOptions {
  /**
   * <p>The maximum hourly price you're willing to pay for the Spot Instances.</p>
   */
  MaxPrice?: string;

  /**
   * <p>The Spot Instance request type.</p>
   */
  SpotInstanceType?: SpotInstanceType | string;

  /**
   * <p>The required duration for the Spot Instances (also known as Spot blocks), in minutes.
   *             This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The end date of the request. For a one-time request, the request remains active until
   *             all instances launch, the request is canceled, or this date is reached. If the request
   *             is persistent, it remains active until it is canceled or this date and time is
   *             reached.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

export namespace LaunchTemplateSpotMarketOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateSpotMarketOptions): any => ({
    ...obj,
  });
}

/**
 * <p>The market (purchasing) option for the instances.</p>
 */
export interface LaunchTemplateInstanceMarketOptions {
  /**
   * <p>The market type.</p>
   */
  MarketType?: MarketType | string;

  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: LaunchTemplateSpotMarketOptions;
}

export namespace LaunchTemplateInstanceMarketOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceMarketOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a license configuration.</p>
 */
export interface LaunchTemplateLicenseConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace LaunchTemplateLicenseConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateLicenseConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The maintenance options of your instance.</p>
 */
export interface LaunchTemplateInstanceMaintenanceOptions {
  /**
   * <p>Disables the automatic recovery behavior of your instance or sets it to
   *             default.</p>
   */
  AutoRecovery?: LaunchTemplateAutoRecoveryState | string;
}

export namespace LaunchTemplateInstanceMaintenanceOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceMaintenanceOptions): any => ({
    ...obj,
  });
}

export type LaunchTemplateInstanceMetadataOptionsState = "applied" | "pending";

/**
 * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface LaunchTemplateInstanceMetadataOptions {
  /**
   * <p>The state of the metadata option changes.</p>
   *         <p>
   *             <code>pending</code> - The metadata options are being updated and the instance is not
   *             ready to process metadata traffic with the new selection.</p>
   *         <p>
   *             <code>applied</code> - The metadata options have been successfully applied on the
   *             instance.</p>
   */
  State?: LaunchTemplateInstanceMetadataOptionsState | string;

  /**
   * <p>The state of token usage for your instance metadata requests. If the parameter is not
   *             specified in the request, the default state is <code>optional</code>.</p>
   *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata
   *             with or without a signed token header on your request. If you retrieve the IAM role
   *             credentials without a token, the version 1.0 role credentials are returned. If you
   *             retrieve the IAM role credentials using a valid signed token, the version 2.0 role
   *             credentials are returned.</p>
   *         <p>If the state is <code>required</code>, you must send a signed token header with any
   *             instance metadata retrieval requests. In this state, retrieving the IAM role credentials
   *             always returns the version 2.0 credentials; the version 1.0 credentials are not
   *             available.</p>
   */
  HttpTokens?: LaunchTemplateHttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *         <p>Default: 1</p>
   *         <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If the parameter is
   *             not specified, the default state is <code>enabled</code>.</p>
   *         <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access
   *                 your instance metadata. </p>
   *         </note>
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState | string;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   *         <p>Default: <code>disabled</code>
   *          </p>
   */
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6 | string;

  /**
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   *         <p>Default: <code>disabled</code>
   *          </p>
   */
  InstanceMetadataTags?: LaunchTemplateInstanceMetadataTagsState | string;
}

export namespace LaunchTemplateInstanceMetadataOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceMetadataOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the monitoring for the instance.</p>
 */
export interface LaunchTemplatesMonitoring {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  Enabled?: boolean;
}

export namespace LaunchTemplatesMonitoring {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplatesMonitoring): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the IPv4 delegated prefixes assigned
 *             to a network interface.</p>
 */
export interface Ipv4PrefixSpecificationResponse {
  /**
   * <p>One or more IPv4 delegated prefixes assigned to the network interface.</p>
   */
  Ipv4Prefix?: string;
}

export namespace Ipv4PrefixSpecificationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv4PrefixSpecificationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the IPv6 delegated prefixes assigned
 *             to a network interface.</p>
 */
export interface Ipv6PrefixSpecificationResponse {
  /**
   * <p>One or more IPv6 delegated prefixes assigned to the network interface.</p>
   */
  Ipv6Prefix?: string;
}

export namespace Ipv6PrefixSpecificationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv6PrefixSpecificationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface.</p>
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecification {
  /**
   * <p>Indicates whether to associate a Carrier IP address with eth0 for a new network
   *             interface.</p>
   *         <p>Use this option when you launch an instance in a Wavelength Zone and want to associate
   *             a Carrier IP address with the network interface. For more information about Carrier IP
   *             addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP addresses</a> in the <i>Wavelength Developer
   *             Guide</i>.</p>
   */
  AssociateCarrierIpAddress?: boolean;

  /**
   * <p>Indicates whether to associate a public IPv4 address with eth0 for a new network
   *             interface.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is
   *             terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * <p>The device index for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>The type of network interface.</p>
   */
  InterfaceType?: string;

  /**
   * <p>The number of IPv6 addresses for the network interface.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>The IPv6 addresses for the network interface.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The primary private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The number of secondary private IPv4 addresses for the network interface.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet for the network interface.</p>
   */
  SubnetId?: string;

  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;

  /**
   * <p>One or more IPv4 prefixes assigned to the network interface.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationResponse[];

  /**
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigned to the network
   *             interface.</p>
   */
  Ipv4PrefixCount?: number;

  /**
   * <p>One or more IPv6 prefixes assigned to the network interface.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationResponse[];

  /**
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigned to the network
   *             interface.</p>
   */
  Ipv6PrefixCount?: number;
}

export namespace LaunchTemplateInstanceNetworkInterfaceSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceNetworkInterfaceSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the placement of an instance.</p>
 */
export interface LaunchTemplatePlacement {
  /**
   * <p>The Availability Zone of the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The affinity setting for the instance on the Dedicated Host.</p>
   */
  Affinity?: string;

  /**
   * <p>The name of the placement group for the instance.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the Dedicated Host for the instance.</p>
   */
  HostId?: string;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a
   *             tenancy of <code>dedicated</code> runs on single-tenant hardware. </p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>Reserved for future use.</p>
   */
  SpreadDomain?: string;

  /**
   * <p>The ARN of the host resource group in which to launch the instances. </p>
   */
  HostResourceGroupArn?: string;

  /**
   * <p>The number of the partition the instance should launch in. Valid only if the placement
   *             group strategy is set to <code>partition</code>.</p>
   */
  PartitionNumber?: number;
}

export namespace LaunchTemplatePlacement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplatePlacement): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the options for instance hostnames.</p>
 */
export interface LaunchTemplatePrivateDnsNameOptions {
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

export namespace LaunchTemplatePrivateDnsNameOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplatePrivateDnsNameOptions): any => ({
    ...obj,
  });
}

/**
 * <p>The tag specification for the launch template.</p>
 */
export interface LaunchTemplateTagSpecification {
  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tags for the resource.</p>
   */
  Tags?: Tag[];
}

export namespace LaunchTemplateTagSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateTagSpecification): any => ({
    ...obj,
  });
}

export type LocalGatewayRouteState = "active" | "blackhole" | "deleted" | "deleting" | "pending";

export type LocalGatewayRouteType = "propagated" | "static";

export type PrefixListState =
  | "create-complete"
  | "create-failed"
  | "create-in-progress"
  | "delete-complete"
  | "delete-failed"
  | "delete-in-progress"
  | "modify-complete"
  | "modify-failed"
  | "modify-in-progress"
  | "restore-complete"
  | "restore-failed"
  | "restore-in-progress";

export enum ConnectivityType {
  PRIVATE = "private",
  PUBLIC = "public",
}

/**
 * <p>Describes the IP addresses and network interface associated with a NAT gateway.</p>
 */
export interface NatGatewayAddress {
  /**
   * <p>[Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway.</p>
   */
  AllocationId?: string;

  /**
   * <p>The ID of the network interface associated with the NAT gateway.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private IP address associated with the NAT gateway.</p>
   */
  PrivateIp?: string;

  /**
   * <p>[Public NAT gateway only] The Elastic IP address associated with the NAT gateway.</p>
   */
  PublicIp?: string;
}

export namespace NatGatewayAddress {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NatGatewayAddress): any => ({
    ...obj,
  });
}

/**
 * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
 */
export interface ProvisionedBandwidth {
  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  ProvisionTime?: Date;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Provisioned?: string;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  RequestTime?: Date;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Requested?: string;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Status?: string;
}

export namespace ProvisionedBandwidth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionedBandwidth): any => ({
    ...obj,
  });
}

export enum NatGatewayState {
  AVAILABLE = "available",
  DELETED = "deleted",
  DELETING = "deleting",
  FAILED = "failed",
  PENDING = "pending",
}

/**
 * <p>Describes an association between a network ACL and a subnet.</p>
 */
export interface NetworkAclAssociation {
  /**
   * <p>The ID of the association between a network ACL and a subnet.</p>
   */
  NetworkAclAssociationId?: string;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export namespace NetworkAclAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkAclAssociation): any => ({
    ...obj,
  });
}

export type RuleAction = "allow" | "deny";

/**
 * <p>Describes an entry in a network ACL.</p>
 */
export interface NetworkAclEntry {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Indicates whether the rule is an egress rule (applied to traffic leaving the subnet).</p>
   */
  Egress?: boolean;

  /**
   * <p>ICMP protocol: The ICMP type and code.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol number. A value of "-1" means all protocols.</p>
   */
  Protocol?: string;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction?: RuleAction | string;

  /**
   * <p>The rule number for the entry. ACL entries are processed in ascending order by rule number.</p>
   */
  RuleNumber?: number;
}

export namespace NetworkAclEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkAclEntry): any => ({
    ...obj,
  });
}

export type NetworkInterfaceCreationType = "branch" | "efa" | "trunk";

/**
 * <p>Describes association information for an Elastic IP address (IPv4 only), or a Carrier
 *             IP address (for a network interface which resides in a subnet in a Wavelength
 *             Zone).</p>
 */
export interface NetworkInterfaceAssociation {
  /**
   * <p>The allocation ID.</p>
   */
  AllocationId?: string;

  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the Elastic IP address owner.</p>
   */
  IpOwnerId?: string;

  /**
   * <p>The public DNS name.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The address of the Elastic IP address bound to the network
   *             interface.</p>
   */
  PublicIp?: string;

  /**
   * <p>The customer-owned IP address associated with the network interface.</p>
   */
  CustomerOwnedIp?: string;

  /**
   * <p>The carrier IP address associated with the network interface.</p>
   *         <p>This option is only available when the network interface is in a subnet which is associated with a Wavelength Zone.</p>
   */
  CarrierIp?: string;
}

export namespace NetworkInterfaceAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterfaceAssociation): any => ({
    ...obj,
  });
}

export type NetworkInterfaceType =
  | "api_gateway_managed"
  | "aws_codestar_connections_managed"
  | "branch"
  | "efa"
  | "gateway_load_balancer"
  | "gateway_load_balancer_endpoint"
  | "global_accelerator_managed"
  | "interface"
  | "iot_rules_managed"
  | "lambda"
  | "load_balancer"
  | "natGateway"
  | "network_load_balancer"
  | "quicksight"
  | "transit_gateway"
  | "trunk"
  | "vpc_endpoint";

/**
 * <p>Describes an IPv6 address associated with a network interface.</p>
 */
export interface NetworkInterfaceIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

export namespace NetworkInterfaceIpv6Address {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterfaceIpv6Address): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the IPv6 prefix.</p>
 */
export interface Ipv6PrefixSpecification {
  /**
   * <p>The IPv6 prefix.</p>
   */
  Ipv6Prefix?: string;
}

export namespace Ipv6PrefixSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv6PrefixSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the private IPv4 address of a network interface.</p>
 */
export interface NetworkInterfacePrivateIpAddress {
  /**
   * <p>The association information for an Elastic IP address (IPv4) associated with the network interface.</p>
   */
  Association?: NetworkInterfaceAssociation;

  /**
   * <p>Indicates whether this IPv4 address is the primary private IPv4 address of the network interface.</p>
   */
  Primary?: boolean;

  /**
   * <p>The private DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IPv4 address.</p>
   */
  PrivateIpAddress?: string;
}

export namespace NetworkInterfacePrivateIpAddress {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterfacePrivateIpAddress): any => ({
    ...obj,
  });
}

export type NetworkInterfaceStatus = "associated" | "attaching" | "available" | "detaching" | "in-use";

export type InterfacePermissionType = "EIP-ASSOCIATE" | "INSTANCE-ATTACH";

export type NetworkInterfacePermissionStateCode = "granted" | "pending" | "revoked" | "revoking";

/**
 * <p>Describes the state of a network interface permission.</p>
 */
export interface NetworkInterfacePermissionState {
  /**
   * <p>The state of the permission.</p>
   */
  State?: NetworkInterfacePermissionStateCode | string;

  /**
   * <p>A status message, if applicable.</p>
   */
  StatusMessage?: string;
}

export namespace NetworkInterfacePermissionState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterfacePermissionState): any => ({
    ...obj,
  });
}

export type PlacementStrategy = "cluster" | "partition" | "spread";

export type PlacementGroupState = "available" | "deleted" | "deleting" | "pending";

export enum ReplaceRootVolumeTaskState {
  failed = "failed",
  failed_detached = "failed-detached",
  failing = "failing",
  in_progress = "in-progress",
  pending = "pending",
  succeeded = "succeeded",
}

/**
 * <p>Describes an association between a route table and a subnet or gateway.</p>
 */
export interface RouteTableAssociation {
  /**
   * <p>Indicates whether this is the main route table.</p>
   */
  Main?: boolean;

  /**
   * <p>The ID of the association.</p>
   */
  RouteTableAssociationId?: string;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * <p>The ID of the subnet. A subnet ID is not returned for an implicit association.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;

  /**
   * <p>The state of the association.</p>
   */
  AssociationState?: RouteTableAssociationState;
}

export namespace RouteTableAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteTableAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a virtual private gateway propagating route.</p>
 */
export interface PropagatingVgw {
  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  GatewayId?: string;
}

export namespace PropagatingVgw {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropagatingVgw): any => ({
    ...obj,
  });
}

export type RouteOrigin = "CreateRoute" | "CreateRouteTable" | "EnableVgwRoutePropagation";

export type RouteState = "active" | "blackhole";

/**
 * <p>Describes a route in a route table.</p>
 */
export interface Route {
  /**
   * <p>The IPv4 CIDR block used for the destination match.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR block used for the destination match.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The prefix of the Amazon Web Service.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of a gateway attached to your VPC.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of a NAT instance in your VPC.</p>
   */
  InstanceId?: string;

  /**
   * <p>The ID of Amazon Web Services account that owns the instance.</p>
   */
  InstanceOwnerId?: string;

  /**
   * <p>The ID of a NAT gateway.</p>
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
   */
  CarrierGatewayId?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Describes how the route was created.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreateRouteTable</code> - The route was automatically created when the route table was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreateRoute</code> - The route was manually added to the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EnableVgwRoutePropagation</code> - The route was propagated by route propagation.</p>
   *             </li>
   *          </ul>
   */
  Origin?: RouteOrigin | string;

  /**
   * <p>The state of the route. The <code>blackhole</code> state indicates that the
   * 				route's target isn't available (for example, the specified gateway isn't attached to the
   * 				VPC, or the specified NAT instance has been terminated).</p>
   */
  State?: RouteState | string;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the core network.</p>
   */
  CoreNetworkArn?: string;
}

export namespace Route {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Route): any => ({
    ...obj,
  });
}

export type SnapshotState = "completed" | "error" | "pending" | "recoverable" | "recovering";

export enum StorageTier {
  archive = "archive",
  standard = "standard",
}

export type CopyTagsFromSource = "volume";

/**
 * <p>Describes a Spot Instance state change.</p>
 */
export interface SpotInstanceStateFault {
  /**
   * <p>The reason code for the Spot Instance state change.</p>
   */
  Code?: string;

  /**
   * <p>The message for the Spot Instance state change.</p>
   */
  Message?: string;
}

export namespace SpotInstanceStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotInstanceStateFault): any => ({
    ...obj,
  });
}

export type DatafeedSubscriptionState = "Active" | "Inactive";

export enum SubnetCidrReservationType {
  explicit = "explicit",
  prefix = "prefix",
}

/**
 * <p>Describes the Traffic Mirror port range.</p>
 */
export interface TrafficMirrorPortRange {
  /**
   * <p>The start of the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  FromPort?: number;

  /**
   * <p>The end of the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  ToPort?: number;
}

export namespace TrafficMirrorPortRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficMirrorPortRange): any => ({
    ...obj,
  });
}

export type TrafficMirrorRuleAction = "accept" | "reject";

export type TrafficDirection = "egress" | "ingress";

export type TrafficMirrorTargetType = "gateway-load-balancer-endpoint" | "network-interface" | "network-load-balancer";

export type AutoAcceptSharedAttachmentsValue = "disable" | "enable";

export type DefaultRouteTableAssociationValue = "disable" | "enable";

export type DefaultRouteTablePropagationValue = "disable" | "enable";

export type MulticastSupportValue = "disable" | "enable";

export type VpnEcmpSupportValue = "disable" | "enable";

/**
 * <p>Describes the options for a transit gateway.</p>
 */
export interface TransitGatewayOptions {
  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *          The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>The transit gateway CIDR blocks.</p>
   */
  TransitGatewayCidrBlocks?: string[];

  /**
   * <p>Indicates whether attachment requests are automatically accepted.</p>
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | string;

  /**
   * <p>Indicates whether resource attachments are automatically associated with the default association route table.</p>
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | string;

  /**
   * <p>The ID of the default association route table.</p>
   */
  AssociationDefaultRouteTableId?: string;

  /**
   * <p>Indicates whether resource attachments automatically propagate routes to the default propagation route table.</p>
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | string;

  /**
   * <p>The ID of the default propagation route table.</p>
   */
  PropagationDefaultRouteTableId?: string;

  /**
   * <p>Indicates whether Equal Cost Multipath Protocol support is enabled.</p>
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | string;

  /**
   * <p>Indicates whether DNS support is enabled.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Indicates whether multicast is enabled on the transit gateway</p>
   */
  MulticastSupport?: MulticastSupportValue | string;
}

export namespace TransitGatewayOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayOptions): any => ({
    ...obj,
  });
}

export type TransitGatewayState = "available" | "deleted" | "deleting" | "modifying" | "pending";

export type ProtocolValue = "gre";

/**
 * <p>Describes the Connect attachment options.</p>
 */
export interface TransitGatewayConnectOptions {
  /**
   * <p>The tunnel protocol.</p>
   */
  Protocol?: ProtocolValue | string;
}

export namespace TransitGatewayConnectOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayConnectOptions): any => ({
    ...obj,
  });
}

export type BgpStatus = "down" | "up";

/**
 * <p>The BGP configuration information.</p>
 */
export interface TransitGatewayAttachmentBgpConfiguration {
  /**
   * <p>The transit gateway Autonomous System Number (ASN).</p>
   */
  TransitGatewayAsn?: number;

  /**
   * <p>The peer Autonomous System Number (ASN).</p>
   */
  PeerAsn?: number;

  /**
   * <p>The interior BGP peer IP address for the transit gateway.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * <p>The interior BGP peer IP address for the appliance.</p>
   */
  PeerAddress?: string;

  /**
   * <p>The BGP status.</p>
   */
  BgpStatus?: BgpStatus | string;
}

export namespace TransitGatewayAttachmentBgpConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayAttachmentBgpConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Connect peer details.</p>
 */
export interface TransitGatewayConnectPeerConfiguration {
  /**
   * <p>The Connect peer IP address on the transit gateway side of the tunnel.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * <p>The Connect peer IP address on the appliance side of the tunnel.</p>
   */
  PeerAddress?: string;

  /**
   * <p>The range of interior BGP peer IP addresses.</p>
   */
  InsideCidrBlocks?: string[];

  /**
   * <p>The tunnel protocol.</p>
   */
  Protocol?: ProtocolValue | string;

  /**
   * <p>The BGP configuration details.</p>
   */
  BgpConfigurations?: TransitGatewayAttachmentBgpConfiguration[];
}

export namespace TransitGatewayConnectPeerConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayConnectPeerConfiguration): any => ({
    ...obj,
  });
}

export type TransitGatewayConnectPeerState = "available" | "deleted" | "deleting" | "pending";

export type AutoAcceptSharedAssociationsValue = "disable" | "enable";

export type Igmpv2SupportValue = "disable" | "enable";

export type StaticSourcesSupportValue = "disable" | "enable";

/**
 * <p>Describes the options for a transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomainOptions {
  /**
   * <p>Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain.</p>
   */
  Igmpv2Support?: Igmpv2SupportValue | string;

  /**
   * <p>Indicates whether support for statically configuring transit gateway multicast group sources is turned on.</p>
   */
  StaticSourcesSupport?: StaticSourcesSupportValue | string;

  /**
   * <p>Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain.</p>
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue | string;
}

export namespace TransitGatewayMulticastDomainOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDomainOptions): any => ({
    ...obj,
  });
}

export type TransitGatewayMulticastDomainState = "available" | "deleted" | "deleting" | "pending";

export type TransitGatewayPrefixListReferenceState = "available" | "deleting" | "modifying" | "pending";

/**
 * <p>Describes a transit gateway prefix list attachment.</p>
 */
export interface TransitGatewayPrefixListAttachment {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;
}

export namespace TransitGatewayPrefixListAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayPrefixListAttachment): any => ({
    ...obj,
  });
}

export type TransitGatewayRouteState = "active" | "blackhole" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes a route attachment.</p>
 */
export interface TransitGatewayRouteAttachment {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated. </p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;
}

export namespace TransitGatewayRouteAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayRouteAttachment): any => ({
    ...obj,
  });
}

export type TransitGatewayRouteType = "propagated" | "static";

export type TransitGatewayRouteTableState = "available" | "deleted" | "deleting" | "pending";

export type VolumeState = "available" | "creating" | "deleted" | "deleting" | "error" | "in-use";

export enum DnsRecordIpType {
  dualstack = "dualstack",
  ipv4 = "ipv4",
  ipv6 = "ipv6",
  service_defined = "service-defined",
}

export enum IpAddressType {
  dualstack = "dualstack",
  ipv4 = "ipv4",
  ipv6 = "ipv6",
}

export enum VpcEndpointType {
  Gateway = "Gateway",
  GatewayLoadBalancer = "GatewayLoadBalancer",
  Interface = "Interface",
}

/**
 * <p>The last error that occurred for a VPC endpoint.</p>
 */
export interface LastError {
  /**
   * <p>The error message for the VPC endpoint error.</p>
   */
  Message?: string;

  /**
   * <p>The error code for the VPC endpoint error.</p>
   */
  Code?: string;
}

export namespace LastError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LastError): any => ({
    ...obj,
  });
}

export enum State {
  Available = "Available",
  Deleted = "Deleted",
  Deleting = "Deleting",
  Expired = "Expired",
  Failed = "Failed",
  Pending = "Pending",
  PendingAcceptance = "PendingAcceptance",
  Rejected = "Rejected",
}

export enum ConnectionNotificationState {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

export enum ConnectionNotificationType {
  Topic = "Topic",
}

export enum PayerResponsibility {
  ServiceOwner = "ServiceOwner",
}

export enum DnsNameState {
  Failed = "failed",
  PendingVerification = "pendingVerification",
  Verified = "verified",
}

/**
 * <p>Information about the private DNS name for the service endpoint.</p>
 */
export interface PrivateDnsNameConfiguration {
  /**
   * <p>The verification state of the VPC endpoint service.</p>
   *         <p>>Consumers
   *             of the endpoint service can use the private name only when the state is
   *                 <code>verified</code>.</p>
   */
  State?: DnsNameState | string;

  /**
   * <p>The endpoint service verification type, for example TXT.</p>
   */
  Type?: string;

  /**
   * <p>The value the service provider adds to the private DNS name domain record before verification.</p>
   */
  Value?: string;

  /**
   * <p>The name of the record subdomain the service provider needs to create. The service provider adds the <code>value</code> text to the <code>name</code>.</p>
   */
  Name?: string;
}

export namespace PrivateDnsNameConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateDnsNameConfiguration): any => ({
    ...obj,
  });
}

export enum ServiceState {
  Available = "Available",
  Deleted = "Deleted",
  Deleting = "Deleting",
  Failed = "Failed",
  Pending = "Pending",
}

export enum ServiceType {
  Gateway = "Gateway",
  GatewayLoadBalancer = "GatewayLoadBalancer",
  Interface = "Interface",
}

/**
 * <p>Describes the type of service for a VPC endpoint.</p>
 */
export interface ServiceTypeDetail {
  /**
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceType | string;
}

export namespace ServiceTypeDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceTypeDetail): any => ({
    ...obj,
  });
}

export enum ServiceConnectivityType {
  ipv4 = "ipv4",
  ipv6 = "ipv6",
}

export type TunnelInsideIpVersion = "ipv4" | "ipv6";

export enum GatewayAssociationState {
  associated = "associated",
  associating = "associating",
  disassociating = "disassociating",
  not_associated = "not-associated",
}

/**
 * <p>The Diffie-Hellmann group number for phase 1 IKE negotiations.</p>
 */
export interface Phase1DHGroupNumbersListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

export namespace Phase1DHGroupNumbersListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase1DHGroupNumbersListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption algorithm for phase 1 IKE negotiations.</p>
 */
export interface Phase1EncryptionAlgorithmsListValue {
  /**
   * <p>The value for the encryption algorithm.</p>
   */
  Value?: string;
}

export namespace Phase1EncryptionAlgorithmsListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase1EncryptionAlgorithmsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The integrity algorithm for phase 1 IKE negotiations.</p>
 */
export interface Phase1IntegrityAlgorithmsListValue {
  /**
   * <p>The value for the integrity algorithm.</p>
   */
  Value?: string;
}

export namespace Phase1IntegrityAlgorithmsListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase1IntegrityAlgorithmsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The Diffie-Hellmann group number for phase 2 IKE negotiations.</p>
 */
export interface Phase2DHGroupNumbersListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

export namespace Phase2DHGroupNumbersListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase2DHGroupNumbersListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption algorithm for phase 2 IKE negotiations.</p>
 */
export interface Phase2EncryptionAlgorithmsListValue {
  /**
   * <p>The encryption algorithm.</p>
   */
  Value?: string;
}

export namespace Phase2EncryptionAlgorithmsListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase2EncryptionAlgorithmsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The integrity algorithm for phase 2 IKE negotiations.</p>
 */
export interface Phase2IntegrityAlgorithmsListValue {
  /**
   * <p>The integrity algorithm.</p>
   */
  Value?: string;
}

export namespace Phase2IntegrityAlgorithmsListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase2IntegrityAlgorithmsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The VPN tunnel options.</p>
 */
export interface TunnelOption {
  /**
   * <p>The external IP address of the VPN tunnel.</p>
   */
  OutsideIpAddress?: string;

  /**
   * <p>The range of inside IPv4 addresses for the tunnel.</p>
   */
  TunnelInsideCidr?: string;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel.</p>
   */
  TunnelInsideIpv6Cidr?: string;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and the customer gateway.</p>
   */
  PreSharedKey?: string;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the
   *                 Amazon Web Services side of the VPN connection performs an IKE rekey.</p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * <p>The percentage of the rekey window determined by <code>RekeyMarginTimeSeconds</code>
   *             during which the rekey time is randomly selected.</p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   */
  ReplayWindowSize?: number;

  /**
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   */
  DpdTimeoutSeconds?: number;

  /**
   * <p>The action to take after a DPD timeout occurs.</p>
   */
  DpdTimeoutAction?: string;

  /**
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsListValue[];

  /**
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsListValue[];

  /**
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsListValue[];

  /**
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsListValue[];

  /**
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersListValue[];

  /**
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersListValue[];

  /**
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   */
  IkeVersions?: IKEVersionsListValue[];

  /**
   * <p>The action to take when the establishing the VPN tunnels for a VPN connection.</p>
   */
  StartupAction?: string;
}

export namespace TunnelOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TunnelOption): any => ({
    ...obj,
  });
}

/**
 * <p>Describes VPN connection options.</p>
 */
export interface VpnConnectionOptions {
  /**
   * <p>Indicates whether acceleration is enabled for the VPN connection.</p>
   */
  EnableAcceleration?: boolean;

  /**
   * <p>Indicates whether the VPN connection uses static routes only. Static routes must be
   *             used for devices that don't support BGP.</p>
   */
  StaticRoutesOnly?: boolean;

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   */
  LocalIpv4NetworkCidr?: string;

  /**
   * <p>The IPv4 CIDR on the Amazon Web Services side of the VPN connection.</p>
   */
  RemoteIpv4NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   */
  LocalIpv6NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the Amazon Web Services side of the VPN connection.</p>
   */
  RemoteIpv6NetworkCidr?: string;

  /**
   * <p>Indicates whether the VPN tunnels process IPv4 or IPv6 traffic.</p>
   */
  TunnelInsideIpVersion?: TunnelInsideIpVersion | string;

  /**
   * <p>Indicates the VPN tunnel options.</p>
   */
  TunnelOptions?: TunnelOption[];
}

export namespace VpnConnectionOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpnConnectionOptions): any => ({
    ...obj,
  });
}

export type VpnStaticRouteSource = "Static";

export type VpnState = "available" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes a static route for a VPN connection.</p>
 */
export interface VpnStaticRoute {
  /**
   * <p>The CIDR block associated with the local subnet of the customer data center.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>Indicates how the routes were provided.</p>
   */
  Source?: VpnStaticRouteSource | string;

  /**
   * <p>The current state of the static route.</p>
   */
  State?: VpnState | string;
}

export namespace VpnStaticRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpnStaticRoute): any => ({
    ...obj,
  });
}

export type TelemetryStatus = "DOWN" | "UP";

/**
 * <p>Describes telemetry for a VPN tunnel.</p>
 */
export interface VgwTelemetry {
  /**
   * <p>The number of accepted routes.</p>
   */
  AcceptedRouteCount?: number;

  /**
   * <p>The date and time of the last change in status.</p>
   */
  LastStatusChange?: Date;

  /**
   * <p>The Internet-routable IP address of the virtual private gateway's outside
   *             interface.</p>
   */
  OutsideIpAddress?: string;

  /**
   * <p>The status of the VPN tunnel.</p>
   */
  Status?: TelemetryStatus | string;

  /**
   * <p>If an error occurs, a description of the error.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the VPN tunnel endpoint certificate.</p>
   */
  CertificateArn?: string;
}

export namespace VgwTelemetry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VgwTelemetry): any => ({
    ...obj,
  });
}

export enum FleetStateCode {
  ACTIVE = "active",
  DELETED = "deleted",
  DELETED_RUNNING = "deleted_running",
  DELETED_TERMINATING_INSTANCES = "deleted_terminating",
  FAILED = "failed",
  MODIFYING = "modifying",
  SUBMITTED = "submitted",
}

export enum DeleteFleetErrorCode {
  FLEET_ID_DOES_NOT_EXIST = "fleetIdDoesNotExist",
  FLEET_ID_MALFORMED = "fleetIdMalformed",
  FLEET_NOT_IN_DELETABLE_STATE = "fleetNotInDeletableState",
  UNEXPECTED_ERROR = "unexpectedError",
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

export namespace IpamPoolCidrFailureReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpamPoolCidrFailureReason): any => ({
    ...obj,
  });
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

export namespace ImportInstanceVolumeDetailItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportInstanceVolumeDetailItem): any => ({
    ...obj,
  });
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

export namespace ImportImageLicenseConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportImageLicenseConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace UserBucketDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserBucketDetails): any => ({
    ...obj,
  });
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

export namespace SnapshotDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotDetail): any => ({
    ...obj,
  });
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

export namespace SnapshotTaskDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotTaskDetail): any => ({
    ...obj,
  });
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

export namespace InstanceBlockDeviceMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceBlockDeviceMapping): any => ({
    ...obj,
  });
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

export namespace LicenseConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LicenseConfiguration): any => ({
    ...obj,
  });
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

export namespace InstanceMaintenanceOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceMaintenanceOptions): any => ({
    ...obj,
  });
}

/**
 * <p>The metadata options for the instance.</p>
 */
export interface InstanceMetadataOptionsResponse {
  /**
   * <p>The state of the metadata option changes.</p>
   *         <p>
   *             <code>pending</code> - The metadata options are being updated and the instance is not
   *             ready to process metadata traffic with the new selection.</p>
   *         <p>
   *             <code>applied</code> - The metadata options have been successfully applied on the
   *             instance.</p>
   */
  State?: InstanceMetadataOptionsState | string;

  /**
   * <p>The state of token usage for your instance metadata requests.</p>
   *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata
   *             with or without a signed token header on your request. If you retrieve the IAM role credentials without a token, the version 1.0 role credentials are
   *             returned. If you retrieve the IAM role credentials using a valid signed
   *             token, the version 2.0 role credentials are returned.</p>
   *         <p>If the state is <code>required</code>, you must send a signed token header with any
   *             instance metadata retrieval requests. In this state, retrieving the IAM
   *             role credential always returns the version 2.0 credentials; the version 1.0 credentials
   *             are not available.</p>
   *         <p>Default: <code>optional</code>
   *          </p>
   */
  HttpTokens?: HttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *         <p>Default: 1</p>
   *         <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>Indicates whether the HTTP metadata endpoint on your instances is enabled or
   *             disabled.</p>
   *         <p>If the value is <code>disabled</code>, you cannot access your instance
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

export namespace InstanceMetadataOptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceMetadataOptionsResponse): any => ({
    ...obj,
  });
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

export namespace Monitoring {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Monitoring): any => ({
    ...obj,
  });
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

export namespace InstanceNetworkInterfaceAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceNetworkInterfaceAssociation): any => ({
    ...obj,
  });
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

export namespace InstanceNetworkInterfaceAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceNetworkInterfaceAttachment): any => ({
    ...obj,
  });
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

export namespace InstanceIpv4Prefix {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceIpv4Prefix): any => ({
    ...obj,
  });
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

export namespace InstanceIpv6Prefix {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceIpv6Prefix): any => ({
    ...obj,
  });
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

export namespace InstancePrivateIpAddress {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstancePrivateIpAddress): any => ({
    ...obj,
  });
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
   * <p>One or more security groups.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>One or more IPv6 addresses associated with the network interface.</p>
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
   * <p>One or more private IPv4 addresses associated with the network interface.</p>
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
   * 	        <p>Valid values: <code>interface</code> | <code>efa</code> | <code>trunk</code>
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

export namespace InstanceNetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceNetworkInterface): any => ({
    ...obj,
  });
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

export namespace PrivateDnsNameOptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateDnsNameOptionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the current state of an instance.</p>
 */
export interface InstanceState {
  /**
   * <p>The state of the instance as a 16-bit unsigned integer. </p>
   *         <p>The high byte is all of the bits between 2^8 and (2^16)-1, which equals decimal values
   *             between 256 and 65,535. These numerical values are used for internal purposes and should
   *             be ignored.</p>
   *         <p>The low byte is all of the bits between 2^0 and (2^8)-1, which equals decimal values
   *             between 0 and 255. </p>
   *         <p>The valid values for instance-state-code will all be in the range of the low byte and
   *             they are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>0</code> : <code>pending</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>16</code> : <code>running</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>32</code> : <code>shutting-down</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>48</code> : <code>terminated</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>64</code> : <code>stopping</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>80</code> : <code>stopped</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>You can ignore the high byte value by zeroing out all of the bits above 2^8 or 256 in
   *             decimal.</p>
   */
  Code?: number;

  /**
   * <p>The current state of the instance.</p>
   */
  Name?: InstanceStateName | string;
}

export namespace InstanceState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceState): any => ({
    ...obj,
  });
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
   *         <p>[EC2-VPC] The Amazon-provided DNS server resolves Amazon-provided private DNS
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
   *         <p>A Carrier IP address only applies to an instance launched in a subnet associated with
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

export namespace Instance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Instance): any => ({
    ...obj,
  });
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
   *         <p>After a scheduled event is completed, it can still be described for up to a week. If
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

export namespace InstanceStatusEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStatusEvent): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the instance status.</p>
 */
export interface InstanceStatusDetails {
  /**
   * <p>The time when a status check failed. For an instance that was launched and impaired,
   *             this is the time when the instance was launched.</p>
   */
  ImpairedSince?: Date;

  /**
   * <p>The type of instance status.</p>
   */
  Name?: StatusName | string;

  /**
   * <p>The status.</p>
   */
  Status?: StatusType | string;
}

export namespace InstanceStatusDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStatusDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of an instance.</p>
 */
export interface InstanceStatusSummary {
  /**
   * <p>The system instance health or application instance health.</p>
   */
  Details?: InstanceStatusDetails[];

  /**
   * <p>The status.</p>
   */
  Status?: SummaryStatus | string;
}

export namespace InstanceStatusSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStatusSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Inference accelerators for the instance type.</p>
 */
export interface InferenceDeviceInfo {
  /**
   * <p>The number of Inference accelerators for the instance type.</p>
   */
  Count?: number;

  /**
   * <p>The name of the Inference accelerator.</p>
   */
  Name?: string;

  /**
   * <p>The manufacturer of the Inference accelerator.</p>
   */
  Manufacturer?: string;
}

export namespace InferenceDeviceInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceDeviceInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Inference accelerators for the instance type.</p>
 */
export interface InferenceAcceleratorInfo {
  /**
   * <p>Describes the Inference accelerators for the instance type.</p>
   */
  Accelerators?: InferenceDeviceInfo[];
}

export namespace InferenceAcceleratorInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceAcceleratorInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the instance store features that are supported by the instance type.</p>
 */
export interface InstanceStorageInfo {
  /**
   * <p>The total size of the disks, in GB.</p>
   */
  TotalSizeInGB?: number;

  /**
   * <p>Describes the disks that are available for the instance type.</p>
   */
  Disks?: DiskInfo[];

  /**
   * <p>Indicates whether non-volatile memory express (NVMe) is supported.</p>
   */
  NvmeSupport?: EphemeralNvmeSupport | string;

  /**
   * <p>Indicates whether data is encrypted at rest.</p>
   */
  EncryptionSupport?: InstanceStorageEncryptionSupport | string;
}

export namespace InstanceStorageInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStorageInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the memory for the instance type.</p>
 */
export interface MemoryInfo {
  /**
   * <p>The size of the memory, in MiB.</p>
   */
  SizeInMiB?: number;
}

export namespace MemoryInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MemoryInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the network card support of the instance type.</p>
 */
export interface NetworkCardInfo {
  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;

  /**
   * <p>The network performance of the network card.</p>
   */
  NetworkPerformance?: string;

  /**
   * <p>The maximum number of network interfaces for the network card.</p>
   */
  MaximumNetworkInterfaces?: number;
}

export namespace NetworkCardInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkCardInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the networking features of the instance type.</p>
 */
export interface NetworkInfo {
  /**
   * <p>The network performance.</p>
   */
  NetworkPerformance?: string;

  /**
   * <p>The maximum number of network interfaces for the instance type.</p>
   */
  MaximumNetworkInterfaces?: number;

  /**
   * <p>The maximum number of physical network cards that can be allocated to the instance.</p>
   */
  MaximumNetworkCards?: number;

  /**
   * <p>The index of the default network card, starting at 0.</p>
   */
  DefaultNetworkCardIndex?: number;

  /**
   * <p>Describes the network cards for the instance type.</p>
   */
  NetworkCards?: NetworkCardInfo[];

  /**
   * <p>The maximum number of IPv4 addresses per network interface.</p>
   */
  Ipv4AddressesPerInterface?: number;

  /**
   * <p>The maximum number of IPv6 addresses per network interface.</p>
   */
  Ipv6AddressesPerInterface?: number;

  /**
   * <p>Indicates whether IPv6 is supported.</p>
   */
  Ipv6Supported?: boolean;

  /**
   * <p>Indicates whether Elastic Network Adapter (ENA) is supported.</p>
   */
  EnaSupport?: EnaSupport | string;

  /**
   * <p>Indicates whether Elastic Fabric Adapter (EFA) is supported.</p>
   */
  EfaSupported?: boolean;

  /**
   * <p>Describes the Elastic Fabric Adapters for the instance type.</p>
   */
  EfaInfo?: EfaInfo;

  /**
   * <p>Indicates whether the instance type automatically encrypts in-transit traffic between instances.</p>
   */
  EncryptionInTransitSupported?: boolean;
}

export namespace NetworkInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInfo): any => ({
    ...obj,
  });
}

export type PlacementGroupStrategy = "cluster" | "partition" | "spread";

/**
 * <p>Describes the placement group support of the instance type.</p>
 */
export interface PlacementGroupInfo {
  /**
   * <p>The supported placement group types.</p>
   */
  SupportedStrategies?: (PlacementGroupStrategy | string)[];
}

export namespace PlacementGroupInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlacementGroupInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the processor used by the instance type.</p>
 */
export interface ProcessorInfo {
  /**
   * <p>The architectures supported by the instance type.</p>
   */
  SupportedArchitectures?: (ArchitectureType | string)[];

  /**
   * <p>The speed of the processor, in GHz.</p>
   */
  SustainedClockSpeedInGhz?: number;
}

export namespace ProcessorInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessorInfo): any => ({
    ...obj,
  });
}

export type RootDeviceType = "ebs" | "instance-store";

export type UsageClassType = "on-demand" | "spot";

/**
 * <p>Describes the vCPU configurations for the instance type.</p>
 */
export interface VCpuInfo {
  /**
   * <p>The default number of vCPUs for the instance type.</p>
   */
  DefaultVCpus?: number;

  /**
   * <p>The default number of cores for the instance type.</p>
   */
  DefaultCores?: number;

  /**
   * <p>The default number of threads per core for the instance type.</p>
   */
  DefaultThreadsPerCore?: number;

  /**
   * <p>The valid number of cores that can be configured for the instance type.</p>
   */
  ValidCores?: number[];

  /**
   * <p>The valid number of threads per core that can be configured for the instance type. </p>
   */
  ValidThreadsPerCore?: number[];
}

export namespace VCpuInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VCpuInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a CIDR block for an address pool.</p>
 */
export interface PoolCidrBlock {
  /**
   * <p>The CIDR block.</p>
   */
  Cidr?: string;
}

export namespace PoolCidrBlock {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PoolCidrBlock): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an address range of an IPv4 address pool.</p>
 */
export interface PublicIpv4PoolRange {
  /**
   * <p>The first IP address in the range.</p>
   */
  FirstAddress?: string;

  /**
   * <p>The last IP address in the range.</p>
   */
  LastAddress?: string;

  /**
   * <p>The number of addresses in the range.</p>
   */
  AddressCount?: number;

  /**
   * <p>The number of available addresses in the range.</p>
   */
  AvailableAddressCount?: number;
}

export namespace PublicIpv4PoolRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublicIpv4PoolRange): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a recurring charge.</p>
 */
export interface RecurringCharge {
  /**
   * <p>The amount of the recurring charge.</p>
   */
  Amount?: number;

  /**
   * <p>The frequency of the recurring charge.</p>
   */
  Frequency?: RecurringChargeFrequency | string;
}

export namespace RecurringCharge {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecurringCharge): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the modification request/s.</p>
 */
export interface ReservedInstancesModificationResult {
  /**
   * <p>The ID for the Reserved Instances that were created as part of the modification request. This field is only available when the modification is fulfilled.</p>
   */
  ReservedInstancesId?: string;

  /**
   * <p>The target Reserved Instances configurations supplied as part of the modification request.</p>
   */
  TargetConfiguration?: ReservedInstancesConfiguration;
}

export namespace ReservedInstancesModificationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedInstancesModificationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the ID of a Reserved Instance.</p>
 */
export interface ReservedInstancesId {
  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;
}

export namespace ReservedInstancesId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedInstancesId): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance offering.</p>
 */
export interface PricingDetail {
  /**
   * <p>The number of reservations available for the price.</p>
   */
  Count?: number;

  /**
   * <p>The price per instance.</p>
   */
  Price?: number;
}

export namespace PricingDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PricingDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the recurring schedule for a Scheduled Instance.</p>
 */
export interface ScheduledInstanceRecurrence {
  /**
   * <p>The frequency (<code>Daily</code>, <code>Weekly</code>, or <code>Monthly</code>).</p>
   */
  Frequency?: string;

  /**
   * <p>The interval quantity. The interval unit depends on the value of <code>frequency</code>. For example, every 2
   *          weeks or every 2 months.</p>
   */
  Interval?: number;

  /**
   * <p>The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday).</p>
   */
  OccurrenceDaySet?: number[];

  /**
   * <p>Indicates whether the occurrence is relative to the end of the specified week or month.</p>
   */
  OccurrenceRelativeToEnd?: boolean;

  /**
   * <p>The unit for <code>occurrenceDaySet</code> (<code>DayOfWeek</code> or <code>DayOfMonth</code>).</p>
   */
  OccurrenceUnit?: string;
}

export namespace ScheduledInstanceRecurrence {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstanceRecurrence): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the launch specification for an instance.</p>
 */
export interface LaunchSpecification {
  /**
   * <p>The Base64-encoded user data for the instance.</p>
   */
  UserData?: string;

  /**
   * <p>One or more security groups. When requesting instances in a VPC, you must specify the IDs of the security groups. When requesting instances in EC2-Classic, you can specify the names or the IDs of the security groups.</p>
   */
  SecurityGroups?: GroupIdentifier[];

  /**
   * <p>Deprecated.</p>
   */
  AddressingType?: string;

  /**
   * <p>One or more block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>Indicates whether the instance is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type. Only one instance type can be specified.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *            subnet IDs and security group IDs using the network interface.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * <p>The placement information for the instance.</p>
   */
  Placement?: SpotPlacement;

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The ID of the subnet in which to launch the instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>Describes the monitoring of an instance.</p>
   */
  Monitoring?: RunInstancesMonitoringEnabled;
}

export namespace LaunchSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of a Spot Instance request.</p>
 */
export interface SpotInstanceStatus {
  /**
   * <p>The status code. For a list of status codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html#spot-instance-request-status-understand">Spot request status codes</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  Code?: string;

  /**
   * <p>The description for the status code.</p>
   */
  Message?: string;

  /**
   * <p>The date and time of the most recent status update, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  UpdateTime?: Date;
}

export namespace SpotInstanceStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotInstanceStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a stale rule in a security group.</p>
 */
export interface StaleIpPermission {
  /**
   * <p>The start of the port range for the TCP and UDP protocols, or an ICMP type number. A value of
   *         <code>-1</code> indicates all ICMP types. </p>
   */
  FromPort?: number;

  /**
   * <p>The IP protocol name (for <code>tcp</code>, <code>udp</code>, and <code>icmp</code>) or number  (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers)</a>.</p>
   */
  IpProtocol?: string;

  /**
   * <p>The IP ranges. Not applicable for stale security group rules.</p>
   */
  IpRanges?: string[];

  /**
   * <p>The prefix list IDs. Not applicable for stale security group rules.</p>
   */
  PrefixListIds?: string[];

  /**
   * <p>The end of the port range for the TCP and UDP protocols, or an ICMP type number. A value of
   *         <code>-1</code> indicates all ICMP types. </p>
   */
  ToPort?: number;

  /**
   * <p>The security group pairs. Returns the ID of the referenced security group and VPC, and the ID and status of the VPC peering connection.</p>
   */
  UserIdGroupPairs?: UserIdGroupPair[];
}

export namespace StaleIpPermission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StaleIpPermission): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association.</p>
 */
export interface TransitGatewayAttachmentAssociation {
  /**
   * <p>The ID of the route table for the transit gateway.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayAssociationState | string;
}

export namespace TransitGatewayAttachmentAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayAttachmentAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a volume status operation code.</p>
 */
export interface VolumeStatusAction {
  /**
   * <p>The code identifying the operation, for example, <code>enable-volume-io</code>.</p>
   */
  Code?: string;

  /**
   * <p>A description of the operation.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the event associated with this operation.</p>
   */
  EventId?: string;

  /**
   * <p>The event type associated with this operation.</p>
   */
  EventType?: string;
}

export namespace VolumeStatusAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VolumeStatusAction): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the instances to which the volume is attached.</p>
 */
export interface VolumeStatusAttachmentStatus {
  /**
   * <p>The maximum IOPS supported by the attached instance.</p>
   */
  IoPerformance?: string;

  /**
   * <p>The ID of the attached instance.</p>
   */
  InstanceId?: string;
}

export namespace VolumeStatusAttachmentStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VolumeStatusAttachmentStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a volume status event.</p>
 */
export interface VolumeStatusEvent {
  /**
   * <p>A description of the event.</p>
   */
  Description?: string;

  /**
   * <p>The ID of this event.</p>
   */
  EventId?: string;

  /**
   * <p>The type of this event.</p>
   */
  EventType?: string;

  /**
   * <p>The latest end time of the event.</p>
   */
  NotAfter?: Date;

  /**
   * <p>The earliest start time of the event.</p>
   */
  NotBefore?: Date;

  /**
   * <p>The ID of the instance associated with the event.</p>
   */
  InstanceId?: string;
}

export namespace VolumeStatusEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VolumeStatusEvent): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a volume status.</p>
 */
export interface VolumeStatusDetails {
  /**
   * <p>The name of the volume status.</p>
   */
  Name?: VolumeStatusName | string;

  /**
   * <p>The intended status of the volume status.</p>
   */
  Status?: string;
}

export namespace VolumeStatusDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VolumeStatusDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of a volume.</p>
 */
export interface VolumeStatusInfo {
  /**
   * <p>The details of the volume status.</p>
   */
  Details?: VolumeStatusDetails[];

  /**
   * <p>The status of the volume.</p>
   */
  Status?: VolumeStatusInfoStatus | string;
}

export namespace VolumeStatusInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VolumeStatusInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Private DNS name for interface endpoints.</p>
 */
export interface PrivateDnsDetails {
  /**
   * <p>The private DNS name assigned to the VPC endpoint service.</p>
   */
  PrivateDnsName?: string;
}

export namespace PrivateDnsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateDnsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Convertible Reserved Instance offering.</p>
 */
export interface TargetConfiguration {
  /**
   * <p>The number of instances the Convertible Reserved Instance offering can be applied to. This parameter is
   *       reserved and cannot be specified in a request</p>
   */
  InstanceCount?: number;

  /**
   * <p>The ID of the Convertible Reserved Instance offering.</p>
   */
  OfferingId?: string;
}

export namespace TargetConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a snapshot that is currently in the Recycle Bin.</p>
 */
export interface SnapshotRecycleBinInfo {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The date and time when the snaphsot entered the Recycle Bin.</p>
   */
  RecycleBinEnterTime?: Date;

  /**
   * <p>The date and time when the snapshot is to be permanently deleted from the Recycle Bin.</p>
   */
  RecycleBinExitTime?: Date;

  /**
   * <p>The description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the volume from which the snapshot was created.</p>
   */
  VolumeId?: string;
}

export namespace SnapshotRecycleBinInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotRecycleBinInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the burstable performance instance whose credit option for CPU usage was
 *             successfully modified.</p>
 */
export interface SuccessfulInstanceCreditSpecificationItem {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;
}

export namespace SuccessfulInstanceCreditSpecificationItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuccessfulInstanceCreditSpecificationItem): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the error for the burstable performance instance whose credit option
 *             for CPU usage was not modified.</p>
 */
export interface UnsuccessfulInstanceCreditSpecificationItemError {
  /**
   * <p>The error code.</p>
   */
  Code?: UnsuccessfulInstanceCreditSpecificationErrorCode | string;

  /**
   * <p>The applicable error message.</p>
   */
  Message?: string;
}

export namespace UnsuccessfulInstanceCreditSpecificationItemError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsuccessfulInstanceCreditSpecificationItemError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the burstable performance instance whose credit option for CPU usage was not
 *             modified.</p>
 */
export interface UnsuccessfulInstanceCreditSpecificationItem {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The applicable error for the burstable performance instance whose credit option for
   *             CPU usage was not modified.</p>
   */
  Error?: UnsuccessfulInstanceCreditSpecificationItemError;
}

export namespace UnsuccessfulInstanceCreditSpecificationItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsuccessfulInstanceCreditSpecificationItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the VPC peering connection options.</p>
 */
export interface PeeringConnectionOptions {
  /**
   * <p>If true, the public DNS hostnames of instances in the specified VPC resolve to private
   *             IP addresses when queried from instances in the peer VPC.</p>
   */
  AllowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from an EC2-Classic instance that's linked to
   *             a local VPC using ClassicLink to instances in a peer VPC.</p>
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from instances in a local VPC to an
   *             EC2-Classic instance that's linked to a peer VPC using ClassicLink.</p>
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

export namespace PeeringConnectionOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PeeringConnectionOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the monitoring of an instance.</p>
 */
export interface InstanceMonitoring {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: Monitoring;
}

export namespace InstanceMonitoring {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceMonitoring): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the registered  transit gateway multicast group members.</p>
 */
export interface TransitGatewayMulticastRegisteredGroupMembers {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the registered network interfaces.</p>
   */
  RegisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export namespace TransitGatewayMulticastRegisteredGroupMembers {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastRegisteredGroupMembers): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the members registered with the  transit gateway multicast group.</p>
 */
export interface TransitGatewayMulticastRegisteredGroupSources {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IDs of the network interfaces members registered with the  transit gateway multicast group.</p>
   */
  RegisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export namespace TransitGatewayMulticastRegisteredGroupSources {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastRegisteredGroupSources): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the  transit gateway multicast group resources.</p>
 */
export interface TransitGatewayMulticastGroup {
  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain group resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   */
  GroupMember?: boolean;

  /**
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   */
  GroupSource?: boolean;

  /**
   * <p>The member type (for example, <code>static</code>).</p>
   */
  MemberType?: MembershipType | string;

  /**
   * <p>The source type.</p>
   */
  SourceType?: MembershipType | string;
}

export namespace TransitGatewayMulticastGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance state change.</p>
 */
export interface InstanceStateChange {
  /**
   * <p>The current state of the instance.</p>
   */
  CurrentState?: InstanceState;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The previous state of the instance.</p>
   */
  PreviousState?: InstanceState;
}

export namespace InstanceStateChange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStateChange): any => ({
    ...obj,
  });
}

/**
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

export namespace TerminateConnectionStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateConnectionStatus): any => ({
    ...obj,
  });
}
