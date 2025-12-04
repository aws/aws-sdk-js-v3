// smithy-typescript generated code
import {
  _InstanceType,
  ActivityStatus,
  AllocationStrategy,
  AnalysisStatus,
  ArchitectureType,
  ArchitectureValues,
  AttachmentLimitType,
  BandwidthWeightingType,
  BatchState,
  BootModeType,
  BootModeValues,
  CurrencyCodeValues,
  DeviceType,
  DiskType,
  EbsEncryptionSupport,
  EbsNvmeSupport,
  EbsOptimizedSupport,
  EnaSupport,
  EphemeralNvmeSupport,
  EventCode,
  EventType,
  ExcessCapacityTerminationPolicy,
  FindingsFound,
  FleetType,
  FlexibleEnaQueuesSupport,
  HaStatus,
  HostnameType,
  HypervisorType,
  InstanceBandwidthWeighting,
  InstanceBootModeValues,
  InstanceInterruptionBehavior,
  InstanceLifecycleType,
  InstanceStorageEncryptionSupport,
  InstanceTypeHypervisor,
  KeyType,
  LocationType,
  LockState,
  MoveStatus,
  NetworkInterfaceAttribute,
  NetworkInterfaceStatus,
  NitroEnclavesSupport,
  NitroTpmSupport,
  OfferingClassType,
  OfferingTypeValues,
  OnDemandAllocationStrategy,
  PermissionGroup,
  PhcSupport,
  PlacementGroupStrategy,
  PlatformValues,
  RebootMigrationSupport,
  RecurringChargeFrequency,
  ReplacementStrategy,
  ReservedInstanceState,
  ResourceType,
  RIProductDescription,
  RootDeviceType,
  Scope,
  SecurityGroupVpcAssociationState,
  ServiceLinkVirtualInterfaceConfigurationState,
  SnapshotAttributeName,
  SnapshotState,
  SpotInstanceState,
  SpotInstanceType,
  SqlServerLicenseUsage,
  StatusName,
  StatusType,
  StorageTier,
  SummaryStatus,
  SupportedAdditionalProcessorFeature,
  TargetCapacityUnitType,
  Tenancy,
  TieringOperationStatus,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  UsageClassType,
  VerifiedAccessLogDeliveryStatusCode,
  VirtualizationType,
} from "./enums";

import {
  type IamInstanceProfile,
  type IamInstanceProfileSpecification,
  type OperatorResponse,
  ActiveInstance,
  AlternatePathHint,
  Explanation,
  IpamResourceDiscoveryAssociation,
  IpPermission,
  MacModificationTask,
  PathComponent,
  ReservedInstancesListing,
  SecurityGroupRule,
  Subnet,
  Tag,
  TagSpecification,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  TrunkInterfaceAssociation,
  UserIdGroupPair,
} from "./models_0";

import {
  type AttributeValue,
  type ConnectionTrackingSpecificationRequest,
  type EnaSrdSpecificationRequest,
  type FleetLaunchTemplateSpecification,
  type InstanceRequirements,
  type NetworkInterfaceAttachment,
  type Placement,
  type SpotInstanceStateFault,
  type StateReason,
  BlockDeviceMapping,
  GroupIdentifier,
  InstanceIpv6Address,
  InternetGateway,
  Ipam,
  IpamExternalResourceVerificationToken,
  IpamPolicy,
  IpamPool,
  IpamPrefixListResolver,
  IpamPrefixListResolverTarget,
  IpamResourceDiscovery,
  IpamScope,
  Ipv4PrefixSpecificationRequest,
  Ipv6PrefixSpecificationRequest,
  LaunchTemplate,
  LaunchTemplateVersion,
  LocalGatewayRouteTable,
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation,
  LocalGatewayRouteTableVpcAssociation,
  LocalGatewayVirtualInterface,
  LocalGatewayVirtualInterfaceGroup,
  ManagedPrefixList,
  NatGateway,
  NetworkAcl,
  NetworkInsightsAccessScope,
  NetworkInsightsPath,
  NetworkInterface,
  NetworkInterfacePermission,
  PlacementGroup,
  PrivateIpAddressSpecification,
  ReplaceRootVolumeTask,
  RouteServer,
  RouteServerEndpoint,
  RouteServerPeer,
  RouteTable,
  Snapshot,
} from "./models_1";

import {
  type SpotDatafeedSubscription,
  TrafficMirrorFilter,
  TrafficMirrorFilterRule,
  TrafficMirrorSession,
  TrafficMirrorTarget,
  TransitGateway,
  TransitGatewayConnect,
  TransitGatewayConnectPeer,
  TransitGatewayMeteringPolicy,
  TransitGatewayMulticastDomain,
  TransitGatewayPolicyTable,
  TransitGatewayRouteTable,
  TransitGatewayRouteTableAnnouncement,
  VerifiedAccessEndpoint,
  VerifiedAccessGroup,
} from "./models_2";

import {
  type AttributeBooleanValue,
  type CapacityReservationSpecificationResponse,
  type ConnectionTrackingSpecificationResponse,
  type CpuOptions,
  type EnclaveOptions,
  type EventInformation,
  type HibernationOptions,
  type InstanceMaintenanceOptions,
  type InstanceMetadataOptionsResponse,
  type InstanceNetworkInterfaceAssociation,
  type InstanceNetworkInterfaceAttachment,
  type InstanceState,
  type Monitoring,
  Byoasn,
  ElasticGpuAssociation,
  ElasticInferenceAcceleratorAssociation,
  Filter,
  IdFormat,
  InstanceBlockDeviceMapping,
  InstanceIpv4Prefix,
  LicenseConfiguration,
  ProductCode,
} from "./models_3";

/**
 * <p>Information about an IPv6 prefix.</p>
 * @public
 */
export interface InstanceIpv6Prefix {
  /**
   * <p>One or more IPv6 prefixes assigned to the network interface.</p>
   * @public
   */
  Ipv6Prefix?: string | undefined;
}

/**
 * <p>Describes a private IPv4 address.</p>
 * @public
 */
export interface InstancePrivateIpAddress {
  /**
   * <p>The association information for an Elastic IP address for the network
   *             interface.</p>
   * @public
   */
  Association?: InstanceNetworkInterfaceAssociation | undefined;

  /**
   * <p>Indicates whether this IPv4 address is the primary private IP address of the network
   *             interface.</p>
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * <p>The private IPv4 DNS name.</p>
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * <p>The private IPv4 address of the network interface.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * <p>Describes a network interface.</p>
 * @public
 */
export interface InstanceNetworkInterface {
  /**
   * <p>The association information for an Elastic IPv4 associated with the network
   *             interface.</p>
   * @public
   */
  Association?: InstanceNetworkInterfaceAssociation | undefined;

  /**
   * <p>The network interface attachment.</p>
   * @public
   */
  Attachment?: InstanceNetworkInterfaceAttachment | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The security groups.</p>
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;

  /**
   * <p>The IPv6 addresses associated with the network interface.</p>
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * <p>The MAC address.</p>
   * @public
   */
  MacAddress?: string | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that created the network interface.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The private DNS name.</p>
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>The private IPv4 addresses associated with the network interface.</p>
   * @public
   */
  PrivateIpAddresses?: InstancePrivateIpAddress[] | undefined;

  /**
   * <p>Indicates whether source/destination checking is enabled.</p>
   * @public
   */
  SourceDestCheck?: boolean | undefined;

  /**
   * <p>The status of the network interface.</p>
   * @public
   */
  Status?: NetworkInterfaceStatus | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The type of network interface.</p>
   *          <p>Valid values: <code>interface</code> | <code>efa</code> | <code>efa-only</code> | <code>evs</code> |
   *                 <code>trunk</code>
   *          </p>
   * @public
   */
  InterfaceType?: string | undefined;

  /**
   * <p>The IPv4 delegated prefixes that are assigned to the network interface.</p>
   * @public
   */
  Ipv4Prefixes?: InstanceIpv4Prefix[] | undefined;

  /**
   * <p>The IPv6 delegated prefixes that are assigned to the network interface.</p>
   * @public
   */
  Ipv6Prefixes?: InstanceIpv6Prefix[] | undefined;

  /**
   * <p>A security group connection tracking configuration that enables you to set the timeout
   *             for connection tracking on an Elastic network interface. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Connection tracking timeouts</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ConnectionTrackingConfiguration?: ConnectionTrackingSpecificationResponse | undefined;

  /**
   * <p>The service provider that manages the network interface.</p>
   * @public
   */
  Operator?: OperatorResponse | undefined;
}

/**
 * <p>With network performance options, you can adjust your bandwidth preferences to meet
 *     		the needs of the workload that runs on your instance.</p>
 * @public
 */
export interface InstanceNetworkPerformanceOptions {
  /**
   * <p>When you configure network bandwidth weighting, you can boost your baseline bandwidth for either
   *     		networking or EBS by up to 25%. The total available baseline bandwidth for your instance remains
   *     		the same. The default option uses the standard bandwidth configuration for your instance type.</p>
   * @public
   */
  BandwidthWeighting?: InstanceBandwidthWeighting | undefined;
}

/**
 * <p>Describes the options for instance hostnames.</p>
 * @public
 */
export interface PrivateDnsNameOptionsResponse {
  /**
   * <p>The type of hostname to assign to an instance.</p>
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
 * <p>Describes an instance.</p>
 * @public
 */
export interface Instance {
  /**
   * <p>The architecture of the image.</p>
   * @public
   */
  Architecture?: ArchitectureValues | undefined;

  /**
   * <p>Any block device mapping entries for the instance.</p>
   * @public
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;

  /**
   * <p>The idempotency token you provided when you launched the instance, if
   *             applicable.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal I/O performance. This optimization isn't available with all instance
   *             types. Additional usage charges apply when using an EBS Optimized instance.</p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>Specifies whether enhanced networking with ENA is enabled.</p>
   * @public
   */
  EnaSupport?: boolean | undefined;

  /**
   * <p>The hypervisor type of the instance. The value <code>xen</code> is used for both Xen
   *             and Nitro hypervisors.</p>
   * @public
   */
  Hypervisor?: HypervisorType | undefined;

  /**
   * <p>The IAM instance profile associated with the instance, if
   *             applicable.</p>
   * @public
   */
  IamInstanceProfile?: IamInstanceProfile | undefined;

  /**
   * <p>Indicates whether this is a Spot Instance or a Scheduled Instance.</p>
   * @public
   */
  InstanceLifecycle?: InstanceLifecycleType | undefined;

  /**
   * <p>Deprecated.</p>
   *          <note>
   *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024.</p>
   *          </note>
   * @public
   */
  ElasticGpuAssociations?: ElasticGpuAssociation[] | undefined;

  /**
   * <p>Deprecated</p>
   *          <note>
   *             <p>Amazon Elastic Inference is no longer available.</p>
   *          </note>
   * @public
   */
  ElasticInferenceAcceleratorAssociations?: ElasticInferenceAcceleratorAssociation[] | undefined;

  /**
   * <p>The network interfaces for the instance.</p>
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterface[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The device name of the root device volume (for example,
   *             <code>/dev/sda1</code>).</p>
   * @public
   */
  RootDeviceName?: string | undefined;

  /**
   * <p>The root device type used by the AMI. The AMI can use an EBS volume or an instance
   *             store volume.</p>
   * @public
   */
  RootDeviceType?: DeviceType | undefined;

  /**
   * <p>The security groups for the instance.</p>
   * @public
   */
  SecurityGroups?: GroupIdentifier[] | undefined;

  /**
   * <p>Indicates whether source/destination checking is enabled.</p>
   * @public
   */
  SourceDestCheck?: boolean | undefined;

  /**
   * <p>If the request is a Spot Instance request, the ID of the request.</p>
   * @public
   */
  SpotInstanceRequestId?: string | undefined;

  /**
   * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface
   *             is enabled.</p>
   * @public
   */
  SriovNetSupport?: string | undefined;

  /**
   * <p>The reason for the most recent state transition.</p>
   * @public
   */
  StateReason?: StateReason | undefined;

  /**
   * <p>Any tags assigned to the instance.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The virtualization type of the instance.</p>
   * @public
   */
  VirtualizationType?: VirtualizationType | undefined;

  /**
   * <p>The CPU options for the instance.</p>
   * @public
   */
  CpuOptions?: CpuOptions | undefined;

  /**
   * <p>The ID of the Capacity Block.</p>
   *          <note>
   *             <p>For P5 instances, a Capacity Block ID refers to a group of instances. For Trn2u
   *                 instances, a capacity block ID refers to an EC2 UltraServer.</p>
   *          </note>
   * @public
   */
  CapacityBlockId?: string | undefined;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   * @public
   */
  CapacityReservationSpecification?: CapacityReservationSpecificationResponse | undefined;

  /**
   * <p>Indicates whether the instance is enabled for hibernation.</p>
   * @public
   */
  HibernationOptions?: HibernationOptions | undefined;

  /**
   * <p>The license configurations for the instance.</p>
   * @public
   */
  Licenses?: LicenseConfiguration[] | undefined;

  /**
   * <p>The metadata options for the instance.</p>
   * @public
   */
  MetadataOptions?: InstanceMetadataOptionsResponse | undefined;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro
   *             Enclaves.</p>
   * @public
   */
  EnclaveOptions?: EnclaveOptions | undefined;

  /**
   * <p>The boot mode that was specified by the AMI. If the value is <code>uefi-preferred</code>,
   *             the AMI supports both UEFI and Legacy BIOS. The <code>currentInstanceBootMode</code> parameter
   *             is the boot mode that is used to boot the instance at launch or start.</p>
   *          <note>
   *             <p>The operating system contained in the AMI must be configured to support the specified boot mode.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  BootMode?: BootModeValues | undefined;

  /**
   * <p>The platform details value for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html">AMI
   *                 billing information fields</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  PlatformDetails?: string | undefined;

  /**
   * <p>The usage operation value for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html">AMI
   *                 billing information fields</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * <p>The time that the usage operation was last updated.</p>
   * @public
   */
  UsageOperationUpdateTime?: Date | undefined;

  /**
   * <p>The options for the instance hostname.</p>
   * @public
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptionsResponse | undefined;

  /**
   * <p>The IPv6 address assigned to the instance.</p>
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * <p>If the instance is configured for NitroTPM support, the value is <code>v2.0</code>.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html">NitroTPM</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  TpmSupport?: string | undefined;

  /**
   * <p>Provides information on the recovery and maintenance options of your instance.</p>
   * @public
   */
  MaintenanceOptions?: InstanceMaintenanceOptions | undefined;

  /**
   * <p>The boot mode that is used to boot the instance at launch or start. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  CurrentInstanceBootMode?: InstanceBootModeValues | undefined;

  /**
   * <p>Contains settings for the network performance options for your instance.</p>
   * @public
   */
  NetworkPerformanceOptions?: InstanceNetworkPerformanceOptions | undefined;

  /**
   * <p>The service provider that manages the instance.</p>
   * @public
   */
  Operator?: OperatorResponse | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The ID of the AMI used to launch the instance.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The current state of the instance.</p>
   * @public
   */
  State?: InstanceState | undefined;

  /**
   * <p>[IPv4 only] The private DNS hostname name assigned to the instance. This DNS hostname
   *             can only be used inside the Amazon EC2 network. This name is not available until the
   *             instance enters the <code>running</code> state. </p>
   *          <p>The Amazon-provided DNS server resolves Amazon-provided private DNS
   *             hostnames if you've enabled DNS resolution and DNS hostnames in your VPC. If you are not
   *             using the Amazon-provided DNS server in your VPC, your custom domain name servers must
   *             resolve the hostname as appropriate.</p>
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * <p>The public DNS name assigned to the instance. This name is not available
   *             until the instance enters the <code>running</code> state. This name is only
   *             available if you've enabled DNS hostnames for your VPC. The format of this
   *             name depends on the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hostname-types.html#public-hostnames">public hostname type</a>.</p>
   * @public
   */
  PublicDnsName?: string | undefined;

  /**
   * <p>The reason for the most recent state transition. This might be an empty string.</p>
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * <p>The name of the key pair, if this instance was launched with an associated key
   *             pair.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>The AMI launch index, which can be used to find this instance in the launch
   *             group.</p>
   * @public
   */
  AmiLaunchIndex?: number | undefined;

  /**
   * <p>The product codes attached to this instance, if applicable.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The time that the instance was last launched. To determine the time that instance was first launched,
   *             see the attachment time for the primary network interface.</p>
   * @public
   */
  LaunchTime?: Date | undefined;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   * @public
   */
  Placement?: Placement | undefined;

  /**
   * <p>The kernel associated with this instance, if applicable.</p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>The RAM disk associated with this instance, if applicable.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>The platform. This value is <code>windows</code> for Windows instances; otherwise, it is empty.</p>
   * @public
   */
  Platform?: PlatformValues | undefined;

  /**
   * <p>The monitoring for the instance.</p>
   * @public
   */
  Monitoring?: Monitoring | undefined;

  /**
   * <p>The ID of the subnet in which the instance is running.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the VPC in which the instance is running.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The private IPv4 address assigned to the instance.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>The public IPv4 address, or the Carrier IP address assigned to the instance, if
   *             applicable.</p>
   *          <p>A Carrier IP address only applies to an instance launched in a subnet associated with
   *             a Wavelength Zone.</p>
   * @public
   */
  PublicIpAddress?: string | undefined;
}

/**
 * <p>Describes a launch request for one or more instances, and includes owner, requester,
 *             and security group information that applies to all instances in the launch
 *             request.</p>
 * @public
 */
export interface Reservation {
  /**
   * <p>The ID of the reservation.</p>
   * @public
   */
  ReservationId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the reservation.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the requester that launched the instances on your behalf (for example,
   *                 Amazon Web Services Management Console or Auto Scaling).</p>
   * @public
   */
  RequesterId?: string | undefined;

  /**
   * <p>Not supported.</p>
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;

  /**
   * <p>The instances.</p>
   * @public
   */
  Instances?: Instance[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstancesResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the reservations.</p>
   * @public
   */
  Reservations?: Reservation[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceSqlHaHistoryStatesRequest {
  /**
   * <p>The IDs of the SQL Server High Availability instances to describe. If omitted, the API returns
   *       historical states for all SQL Server High Availability instances.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The start data and time of the period for which to get the historical
   *       SQL Server High Availability states. If omitted, the API returns all available historical states.</p>
   *          <p>Timezone: UTC</p>
   *          <p>Format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end data and time of the period for which to get historical SQL Server High Availability
   *       states. If omitted, the API returns historical states up to the current
   *       date and time.</p>
   *          <p>Timezone: UTC</p>
   *          <p>Format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
   *          </p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for the request in a
   *     single page. The remaining results can be seen by sending another request with the
   *     returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters to apply to the results. Supported filters
   *     include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The tag key and value pair assigned to the
   *   instance. For example, to find all instances tagged with <code>Owner:TeamA</code>, specify
   *   <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The tag key assigned to the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>haStatus</code> - The SQL Server High Availability status of the SQL Server High Availability instance (<code>processing</code> |
   *       <code>active</code> | <code>standby</code> | <code>invalid</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlServerLicenseUsage</code> - The license type for the SQL Server license
   *       (<code>full</code> | <code>waived</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action,
   *     without actually making the request, and provides an error response. If you have the
   *     required permissions, the error response is <code>DryRunOperation</code>. Otherwise,
   *     it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes an Amazon EC2 instance that is enabled for SQL Server High Availability standby
 *       detection monitoring.</p>
 * @public
 */
export interface RegisteredInstance {
  /**
   * <p>The ID of the SQL Server High Availability instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The license type for the SQL Server license. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>full</code> - The SQL Server High Availability instance is using a full SQL Server license.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>waived</code> - The SQL Server High Availability instance is waived from the SQL Server license.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SqlServerLicenseUsage?: SqlServerLicenseUsage | undefined;

  /**
   * <p>The SQL Server High Availability status of the instance. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>processing</code> - The SQL Server High Availability status for the SQL Server High Availability instance is being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>active</code> - The SQL Server High Availability instance is an active node in an SQL Server High Availability cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standby</code> - The SQL Server High Availability instance is a standby failover node in an SQL Server High Availability
   *           cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>invalid</code> - An error occurred due to misconfigured permissions, or unable
   *           to dertemine SQL Server High Availability status for the SQL Server High Availability instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  HaStatus?: HaStatus | undefined;

  /**
   * <p>A brief description of the SQL Server High Availability status. If the instance is in the <code>invalid</code>
   *       High Availability status, this parameter includes the error message.</p>
   * @public
   */
  ProcessingStatus?: string | undefined;

  /**
   * <p>The date and time when the instance's SQL Server High Availability status was last updated, in the ISO 8601 format
   *       in the UTC time zone (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The ARN of the Secrets Manager secret containing the SQL Server access credentials for the SQL Server High Availability instance.
   *       If not specified, deafult local user credentials will be used by the Amazon Web Services Systems Manager agent.</p>
   * @public
   */
  SqlServerCredentials?: string | undefined;

  /**
   * <p>The tags assigned to the SQL Server High Availability instance.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceSqlHaHistoryStatesResult {
  /**
   * <p>Information about the historical SQL Server High Availability states of the SQL Server High Availability instances.</p>
   * @public
   */
  Instances?: RegisteredInstance[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.
   *     This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceSqlHaStatesRequest {
  /**
   * <p>The IDs of the SQL Server High Availability instances to describe. If omitted, the API returns
   *       SQL Server High Availability states for all SQL Server High Availability instances.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for the request in a
   *     single page. The remaining results can be seen by sending another request with the
   *     returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters to apply to the results. Supported filters
   *     include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The tag key and value pair assigned to the
   *   instance. For example, to find all instances tagged with <code>Owner:TeamA</code>, specify
   *   <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The tag key assigned to the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>haStatus</code> - The SQL Server High Availability status of the SQL Server High Availability instance (<code>processing</code> |
   *       <code>active</code> | <code>standby</code> | <code>invalid</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlServerLicenseUsage</code> - The license type for the SQL Server license
   *       (<code>full</code> | <code>waived</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action,
   *     without actually making the request, and provides an error response. If you have the
   *     required permissions, the error response is <code>DryRunOperation</code>. Otherwise,
   *     it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceSqlHaStatesResult {
  /**
   * <p>Information about the SQL Server High Availability instances.</p>
   * @public
   */
  Instances?: RegisteredInstance[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.
   *     This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceStatusRequest {
  /**
   * <p>The instance IDs.</p>
   *          <p>Default: Describes all your instances.</p>
   *          <p>Constraints: Maximum 100 explicitly specified instance IDs.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>You cannot specify this parameter and the instance IDs parameter in the same request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

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
   *                   <code>availability-zone</code> - The Availability Zone of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone-id</code> - The ID of the Availability Zone of the
   *                     instance.</p>
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
   *             <li>
   *                <p>
   *                   <code>attached-ebs-status.status</code> - The status of the attached EBS volume
   *                     for the instance (<code>ok</code> | <code>impaired</code> | <code>initializing</code> |
   *                     <code>insufficient-data</code> | <code>not-applicable</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>When <code>true</code>, includes the health status for all instances. When
   *                 <code>false</code>, includes the health status for running instances only.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  IncludeAllInstances?: boolean | undefined;
}

/**
 * <p>Describes the attached EBS status check for an instance.</p>
 * @public
 */
export interface EbsStatusDetails {
  /**
   * <p>The date and time when the attached EBS status check failed.</p>
   * @public
   */
  ImpairedSince?: Date | undefined;

  /**
   * <p>The name of the attached EBS status check.</p>
   * @public
   */
  Name?: StatusName | undefined;

  /**
   * <p>The result of the attached EBS status check.</p>
   * @public
   */
  Status?: StatusType | undefined;
}

/**
 * <p>Provides a summary of the attached EBS volume status for an instance.</p>
 * @public
 */
export interface EbsStatusSummary {
  /**
   * <p>Details about the attached EBS status check for an instance.</p>
   * @public
   */
  Details?: EbsStatusDetails[] | undefined;

  /**
   * <p>The current status.</p>
   * @public
   */
  Status?: SummaryStatus | undefined;
}

/**
 * <p>Describes a scheduled event for an instance.</p>
 * @public
 */
export interface InstanceStatusEvent {
  /**
   * <p>The ID of the event.</p>
   * @public
   */
  InstanceEventId?: string | undefined;

  /**
   * <p>The event code.</p>
   * @public
   */
  Code?: EventCode | undefined;

  /**
   * <p>A description of the event.</p>
   *          <p>After a scheduled event is completed, it can still be described for up to a week. If
   *             the event has been completed, this description starts with the following text:
   *             [Completed].</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The latest scheduled end time for the event.</p>
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * <p>The earliest scheduled start time for the event.</p>
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * <p>The deadline for starting the event.</p>
   * @public
   */
  NotBeforeDeadline?: Date | undefined;
}

/**
 * <p>Describes the instance status.</p>
 * @public
 */
export interface InstanceStatusDetails {
  /**
   * <p>The time when a status check failed. For an instance that was launched and impaired,
   *             this is the time when the instance was launched.</p>
   * @public
   */
  ImpairedSince?: Date | undefined;

  /**
   * <p>The type of instance status.</p>
   * @public
   */
  Name?: StatusName | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: StatusType | undefined;
}

/**
 * <p>Describes the status of an instance.</p>
 * @public
 */
export interface InstanceStatusSummary {
  /**
   * <p>The system instance health or application instance health.</p>
   * @public
   */
  Details?: InstanceStatusDetails[] | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: SummaryStatus | undefined;
}

/**
 * <p>Describes the status of an instance.</p>
 * @public
 */
export interface InstanceStatus {
  /**
   * <p>The Availability Zone of the instance.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone of the instance.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The service provider that manages the instance.</p>
   * @public
   */
  Operator?: OperatorResponse | undefined;

  /**
   * <p>Any scheduled events associated with the instance.</p>
   * @public
   */
  Events?: InstanceStatusEvent[] | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The intended state of the instance. <a>DescribeInstanceStatus</a> requires
   *             that an instance be in the <code>running</code> state.</p>
   * @public
   */
  InstanceState?: InstanceState | undefined;

  /**
   * <p>Reports impaired functionality that stems from issues internal to the instance, such
   *             as impaired reachability.</p>
   * @public
   */
  InstanceStatus?: InstanceStatusSummary | undefined;

  /**
   * <p>Reports impaired functionality that stems from issues related to the systems that
   *             support an instance, such as hardware failures and network connectivity problems.</p>
   * @public
   */
  SystemStatus?: InstanceStatusSummary | undefined;

  /**
   * <p>Reports impaired functionality that stems from an attached Amazon EBS volume that is
   *             unreachable and unable to complete I/O operations.</p>
   * @public
   */
  AttachedEbsStatus?: EbsStatusSummary | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceStatusResult {
  /**
   * <p>Information about the status of the instances.</p>
   * @public
   */
  InstanceStatuses?: InstanceStatus[] | undefined;

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
export interface DescribeInstanceTopologyRequest {
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
   *          <p>You can't specify this parameter and the instance IDs parameter in the same
   *             request.</p>
   *          <p>Default: <code>20</code>
   *          </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The instance IDs.</p>
   *          <p>Default: Describes all your instances.</p>
   *          <p>Constraints: Maximum 100 explicitly specified instance IDs.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The name of the placement group that each instance is in.</p>
   *          <p>Constraints: Maximum 100 explicitly specified placement group names.</p>
   * @public
   */
  GroupNames?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The name of the Availability Zone (for
   *                     example, <code>us-west-2a</code>) or Local Zone (for example,
   *                         <code>us-west-2-lax-1b</code>) that the instance is in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example,
   *                         <code>p4d.24xlarge</code>) or instance family (for example,
   *                         <code>p4d*</code>). You can use the <code>*</code> wildcard to match zero or
   *                     more characters, or the <code>?</code> wildcard to match zero or one
   *                     character.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-id</code> - The ID of the Availability Zone (for example,
   *                         <code>usw2-az2</code>) or Local Zone (for example,
   *                         <code>usw2-lax1-az1</code>) that the instance is in.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Information about the instance topology.</p>
 * @public
 */
export interface InstanceTopology {
  /**
   * <p>The instance ID.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The name of the placement group that the instance is in.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The network nodes. The nodes are hashed based on your account. Instances from
   *             different accounts running under the same server will return a different hashed list of
   *             strings.</p>
   *          <p>The value is <code>null</code> or empty if:</p>
   *          <ul>
   *             <li>
   *                <p>The instance type is not supported.</p>
   *             </li>
   *             <li>
   *                <p>The instance is in a state other than <code>running</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NetworkNodes?: string[] | undefined;

  /**
   * <p>The name of the Availability Zone or Local Zone that the instance is in.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone or Local Zone that the instance is in.</p>
   * @public
   */
  ZoneId?: string | undefined;

  /**
   * <p>The ID of the Capacity Block. This parameter is only supported for UltraServer
   *             instances and identifies instances within the UltraServer domain.</p>
   * @public
   */
  CapacityBlockId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceTopologyResult {
  /**
   * <p>Information about the topology of each instance.</p>
   * @public
   */
  Instances?: InstanceTopology[] | undefined;

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
export interface DescribeInstanceTypeOfferingsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *          and provides an error response. If you have the required permissions, the error response is
   *          <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The location type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone. When you specify a location
   *      filter, it must be an Availability Zone for the current Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone-id</code> - The AZ ID. When you specify a location filter, it must
   *      be an AZ ID for the current Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost</code> - The Outpost ARN. When you specify a location filter, it must be an
   *      Outpost ARN for the current Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region</code> - The current Region. If you specify a location filter, it must match
   *      the current Region.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LocationType?: LocationType | undefined;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type. For a list of possible values, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Instance.html">Instance</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>location</code> - The location. For a list of possible identifiers, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">Regions and Zones</a>.</p>
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
}

/**
 * <p>The instance types offered.</p>
 * @public
 */
export interface InstanceTypeOffering {
  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2
   *     User Guide</i>.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The location type.</p>
   * @public
   */
  LocationType?: LocationType | undefined;

  /**
   * <p>The identifier for the location. This depends on the location type. For example, if the
   *    location type is <code>region</code>, the location is the Region code (for example,
   *     <code>us-east-2</code>.)</p>
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceTypeOfferingsResult {
  /**
   * <p>The instance types offered in the location.</p>
   * @public
   */
  InstanceTypeOfferings?: InstanceTypeOffering[] | undefined;

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
export interface DescribeInstanceTypesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *          and provides an error response. If you have the required permissions, the error response is
   *          <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The instance types.</p>
   * @public
   */
  InstanceTypes?: _InstanceType[] | undefined;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>auto-recovery-supported</code> - Indicates whether Amazon CloudWatch action
   *      based recovery is supported  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bare-metal</code> - Indicates whether it is a bare metal instance type
   *       (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>burstable-performance-supported</code> - Indicates whether the instance type is a
   *      burstable performance T instance type  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>current-generation</code> - Indicates whether this instance type is the latest
   *      generation instance type of an instance family  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated-hosts-supported</code> - Indicates whether the instance type supports
   *      Dedicated Hosts.  (<code>true</code> | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.attachment-limit-type</code> - The type of Amazon EBS volume attachment limit
   *      (<code>shared</code> | <code>dedicated</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.maximum-ebs-attachments</code> - The maximum number of Amazon EBS volumes that
   *      can be attached to the instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.baseline-bandwidth-in-mbps</code> - The baseline
   *      bandwidth performance for an EBS-optimized instance type, in Mbps.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.baseline-iops</code> - The baseline input/output storage
   *      operations per second for an EBS-optimized instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.baseline-throughput-in-mbps</code> - The baseline
   *      throughput performance for an EBS-optimized instance type, in MB/s.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.maximum-bandwidth-in-mbps</code> - The maximum bandwidth
   *      performance for an EBS-optimized instance type, in Mbps.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.maximum-iops</code> - The maximum input/output storage
   *      operations per second for an EBS-optimized instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.maximum-throughput-in-mbps</code> - The maximum
   *      throughput performance for an EBS-optimized instance type, in MB/s.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-support</code> - Indicates whether the instance type is
   *      EBS-optimized (<code>supported</code> | <code>unsupported</code> |
   *      <code>default</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.encryption-support</code> - Indicates whether EBS encryption is supported
   *       (<code>supported</code> | <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.nvme-support</code> - Indicates whether non-volatile memory express (NVMe)
   *      is supported for EBS volumes (<code>required</code> | <code>supported</code> |
   *       <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>free-tier-eligible</code> - A Boolean that indicates whether this instance type can
   *      be used under the Amazon Web Services Free Tier  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hibernation-supported</code> - Indicates whether On-Demand hibernation is supported
   *       (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hypervisor</code> - The hypervisor (<code>nitro</code> | <code>xen</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.disk.count</code> - The number of local disks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.disk.size-in-gb</code> - The storage size of each instance
   *      storage disk, in GB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.disk.type</code> - The storage technology for the local
   *      instance storage disks (<code>hdd</code> | <code>ssd</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.encryption-support</code> - Indicates whether data is
   *      encrypted at rest (<code>required</code> | <code>supported</code> |
   *      <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.nvme-support</code> - Indicates whether non-volatile memory
   *      express (NVMe) is supported for instance store (<code>required</code> | <code>supported</code>
   *      | <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.total-size-in-gb</code> - The total amount of storage
   *      available from all local instance storage, in GB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-supported</code> - Indicates whether the instance type has local
   *      instance storage  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example <code>c5.2xlarge</code> or
   *      c5*).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>memory-info.size-in-mib</code> - The memory size.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.bandwidth-weightings</code> - For instances that support bandwidth
   *      weighting to boost performance (<code>default</code>, <code>vpc-1</code>,
   *      <code>ebs-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.efa-info.maximum-efa-interfaces</code> - The maximum number of Elastic
   *      Fabric Adapters (EFAs) per instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.efa-supported</code> - Indicates whether the instance type supports
   *      Elastic Fabric Adapter (EFA)  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ena-support</code> - Indicates whether Elastic Network Adapter (ENA) is
   *      supported or required (<code>required</code> | <code>supported</code> |
   *       <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.flexible-ena-queues-support</code> - Indicates whether an instance supports
   *      flexible ENA queues (<code>supported</code> | <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.encryption-in-transit-supported</code> - Indicates whether the instance
   *      type automatically encrypts in-transit traffic between instances  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ipv4-addresses-per-interface</code> - The maximum number of private
   *      IPv4 addresses per network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ipv6-addresses-per-interface</code> - The maximum number of private
   *      IPv6 addresses per network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ipv6-supported</code> - Indicates whether the instance type supports
   *      IPv6  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.maximum-network-cards</code> - The maximum number of network cards per
   *      instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.maximum-network-interfaces</code> - The maximum number of network
   *      interfaces per instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.network-performance</code> - The network performance (for example, "25
   *      Gigabit").</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>nitro-enclaves-support</code> - Indicates whether Nitro Enclaves is supported
   *       (<code>supported</code> | <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>nitro-tpm-support</code> - Indicates whether NitroTPM is supported
   *       (<code>supported</code> | <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>nitro-tpm-info.supported-versions</code> - The supported NitroTPM version
   *       (<code>2.0</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>processor-info.supported-architecture</code> - The CPU architecture
   *       (<code>arm64</code> | <code>i386</code> | <code>x86_64</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>processor-info.sustained-clock-speed-in-ghz</code> - The CPU clock speed, in
   *      GHz.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>processor-info.supported-features</code> - The supported CPU features
   *       (<code>amd-sev-snp</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reboot-migration-support</code> - Indicates whether enabling reboot migration is
   *      supported (<code>supported</code> | <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supported-boot-mode</code> - The boot mode (<code>legacy-bios</code> |
   *       <code>uefi</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supported-root-device-type</code> - The root device type (<code>ebs</code> |
   *       <code>instance-store</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supported-usage-class</code> - The usage class (<code>on-demand</code> |
   *       <code>spot</code> | <code>capacity-block</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supported-virtualization-type</code> - The virtualization type (<code>hvm</code> |
   *       <code>paravirtual</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.default-cores</code> - The default number of cores for the instance
   *      type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.default-threads-per-core</code> - The default number of threads per core
   *      for the instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.default-vcpus</code> - The default number of vCPUs for the instance
   *      type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.valid-cores</code> - The number of cores that can be configured for the
   *      instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.valid-threads-per-core</code> - The number of threads per core that can be
   *      configured for the instance type. For example, "1" or "1,2".</p>
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
}

/**
 * <p>Describes the optimized EBS performance for supported instance types.</p>
 * @public
 */
export interface EbsOptimizedInfo {
  /**
   * <p>The baseline bandwidth performance for an EBS-optimized instance type, in Mbps.</p>
   * @public
   */
  BaselineBandwidthInMbps?: number | undefined;

  /**
   * <p>The baseline throughput performance for an EBS-optimized instance type, in MB/s.</p>
   * @public
   */
  BaselineThroughputInMBps?: number | undefined;

  /**
   * <p>The baseline input/output storage operations per seconds for an EBS-optimized instance
   *    type.</p>
   * @public
   */
  BaselineIops?: number | undefined;

  /**
   * <p>The maximum bandwidth performance for an EBS-optimized instance type, in Mbps.</p>
   * @public
   */
  MaximumBandwidthInMbps?: number | undefined;

  /**
   * <p>The maximum throughput performance for an EBS-optimized instance type, in MB/s.</p>
   * @public
   */
  MaximumThroughputInMBps?: number | undefined;

  /**
   * <p>The maximum input/output storage operations per second for an EBS-optimized instance
   *    type.</p>
   * @public
   */
  MaximumIops?: number | undefined;
}

/**
 * <p>Describes the Amazon EBS features supported by the instance type.</p>
 * @public
 */
export interface EbsInfo {
  /**
   * <p>Indicates whether the instance type is Amazon EBS-optimized. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html">Amazon EBS-optimized
   *     instances</a> in <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  EbsOptimizedSupport?: EbsOptimizedSupport | undefined;

  /**
   * <p>Indicates whether Amazon EBS encryption is supported.</p>
   * @public
   */
  EncryptionSupport?: EbsEncryptionSupport | undefined;

  /**
   * <p>Describes the optimized EBS performance for the instance type.</p>
   * @public
   */
  EbsOptimizedInfo?: EbsOptimizedInfo | undefined;

  /**
   * <p>Indicates whether non-volatile memory express (NVMe) is supported.</p>
   * @public
   */
  NvmeSupport?: EbsNvmeSupport | undefined;

  /**
   * <p>Indicates the maximum number of Amazon EBS volumes that can be attached to
   *    the instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/volume_limits.html">Amazon EBS volume limits for
   *     Amazon EC2 instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  MaximumEbsAttachments?: number | undefined;

  /**
   * <p>Indicates whether the instance type features a shared or dedicated Amazon EBS
   *    volume attachment limit. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/volume_limits.html">Amazon EBS volume limits for
   *     Amazon EC2 instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  AttachmentLimitType?: AttachmentLimitType | undefined;
}

/**
 * <p>Describes the memory for the FPGA accelerator for the instance type.</p>
 * @public
 */
export interface FpgaDeviceMemoryInfo {
  /**
   * <p>The size of the memory available to the FPGA accelerator, in MiB.</p>
   * @public
   */
  SizeInMiB?: number | undefined;
}

/**
 * <p>Describes the FPGA accelerator for the instance type.</p>
 * @public
 */
export interface FpgaDeviceInfo {
  /**
   * <p>The name of the FPGA accelerator.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The manufacturer of the FPGA accelerator.</p>
   * @public
   */
  Manufacturer?: string | undefined;

  /**
   * <p>The count of FPGA accelerators for the instance type.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>Describes the memory for the FPGA accelerator for the instance type.</p>
   * @public
   */
  MemoryInfo?: FpgaDeviceMemoryInfo | undefined;
}

/**
 * <p>Describes the FPGAs for the instance type.</p>
 * @public
 */
export interface FpgaInfo {
  /**
   * <p>Describes the FPGAs for the instance type.</p>
   * @public
   */
  Fpgas?: FpgaDeviceInfo[] | undefined;

  /**
   * <p>The total memory of all FPGA accelerators for the instance type.</p>
   * @public
   */
  TotalFpgaMemoryInMiB?: number | undefined;
}

/**
 * <p>Describes the memory available to the GPU accelerator.</p>
 * @public
 */
export interface GpuDeviceMemoryInfo {
  /**
   * <p>The size of the memory available to the GPU accelerator, in MiB.</p>
   * @public
   */
  SizeInMiB?: number | undefined;
}

/**
 * <p>Describes the GPU accelerators for the instance type.</p>
 * @public
 */
export interface GpuDeviceInfo {
  /**
   * <p>The name of the GPU accelerator.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The manufacturer of the GPU accelerator.</p>
   * @public
   */
  Manufacturer?: string | undefined;

  /**
   * <p>The number of GPUs for the instance type.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>Describes the memory available to the GPU accelerator.</p>
   * @public
   */
  MemoryInfo?: GpuDeviceMemoryInfo | undefined;
}

/**
 * <p>Describes the GPU accelerators for the instance type.</p>
 * @public
 */
export interface GpuInfo {
  /**
   * <p>Describes the GPU accelerators for the instance type.</p>
   * @public
   */
  Gpus?: GpuDeviceInfo[] | undefined;

  /**
   * <p>The total size of the memory for the GPU accelerators for the instance type, in MiB.</p>
   * @public
   */
  TotalGpuMemoryInMiB?: number | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Inference is no longer available.</p>
 *          </note>
 *          <p>Describes the memory available to the inference accelerator.</p>
 * @public
 */
export interface InferenceDeviceMemoryInfo {
  /**
   * <p>The size of the memory available to the inference accelerator, in MiB.</p>
   * @public
   */
  SizeInMiB?: number | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Inference is no longer available.</p>
 *          </note>
 *          <p>Describes the Inference accelerators for the instance type.</p>
 * @public
 */
export interface InferenceDeviceInfo {
  /**
   * <p>The number of Inference accelerators for the instance type.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The name of the Inference accelerator.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The manufacturer of the Inference accelerator.</p>
   * @public
   */
  Manufacturer?: string | undefined;

  /**
   * <p>Describes the memory available to the inference accelerator.</p>
   * @public
   */
  MemoryInfo?: InferenceDeviceMemoryInfo | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Inference is no longer available.</p>
 *          </note>
 *          <p>Describes the Inference accelerators for the instance type.</p>
 * @public
 */
export interface InferenceAcceleratorInfo {
  /**
   * <p>Describes the Inference accelerators for the instance type.</p>
   * @public
   */
  Accelerators?: InferenceDeviceInfo[] | undefined;

  /**
   * <p>The total size of the memory for the inference accelerators for the instance type, in
   *    MiB.</p>
   * @public
   */
  TotalInferenceMemoryInMiB?: number | undefined;
}

/**
 * <p>Describes a disk.</p>
 * @public
 */
export interface DiskInfo {
  /**
   * <p>The size of the disk in GB.</p>
   * @public
   */
  SizeInGB?: number | undefined;

  /**
   * <p>The number of disks with this configuration.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The type of disk.</p>
   * @public
   */
  Type?: DiskType | undefined;
}

/**
 * <p>Describes the instance store features that are supported by the instance type.</p>
 * @public
 */
export interface InstanceStorageInfo {
  /**
   * <p>The total size of the disks, in GB.</p>
   * @public
   */
  TotalSizeInGB?: number | undefined;

  /**
   * <p>Describes the disks that are available for the instance type.</p>
   * @public
   */
  Disks?: DiskInfo[] | undefined;

  /**
   * <p>Indicates whether non-volatile memory express (NVMe) is supported.</p>
   * @public
   */
  NvmeSupport?: EphemeralNvmeSupport | undefined;

  /**
   * <p>Indicates whether data is encrypted at rest.</p>
   * @public
   */
  EncryptionSupport?: InstanceStorageEncryptionSupport | undefined;
}

/**
 * <p>Describes the memory available to the media accelerator.</p>
 * @public
 */
export interface MediaDeviceMemoryInfo {
  /**
   * <p>The size of the memory available to each media accelerator, in MiB.</p>
   * @public
   */
  SizeInMiB?: number | undefined;
}

/**
 * <p>Describes the media accelerators for the instance type.</p>
 * @public
 */
export interface MediaDeviceInfo {
  /**
   * <p>The number of media accelerators for the instance type.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The name of the media accelerator.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The manufacturer of the media accelerator.</p>
   * @public
   */
  Manufacturer?: string | undefined;

  /**
   * <p>Describes the memory available to the media accelerator.</p>
   * @public
   */
  MemoryInfo?: MediaDeviceMemoryInfo | undefined;
}

/**
 * <p>Describes the media accelerators for the instance type.</p>
 * @public
 */
export interface MediaAcceleratorInfo {
  /**
   * <p>Describes the media accelerators for the instance type.</p>
   * @public
   */
  Accelerators?: MediaDeviceInfo[] | undefined;

  /**
   * <p>The total size of the memory for the media accelerators for the instance type, in
   *    MiB.</p>
   * @public
   */
  TotalMediaMemoryInMiB?: number | undefined;
}

/**
 * <p>Describes the memory for the instance type.</p>
 * @public
 */
export interface MemoryInfo {
  /**
   * <p>The size of the memory, in MiB.</p>
   * @public
   */
  SizeInMiB?: number | undefined;
}

/**
 * <p>Describes the Elastic Fabric Adapters for the instance type.</p>
 * @public
 */
export interface EfaInfo {
  /**
   * <p>The maximum number of Elastic Fabric Adapters for the instance type.</p>
   * @public
   */
  MaximumEfaInterfaces?: number | undefined;
}

/**
 * <p>Describes the network card support of the instance type.</p>
 * @public
 */
export interface NetworkCardInfo {
  /**
   * <p>The index of the network card.</p>
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * <p>The network performance of the network card.</p>
   * @public
   */
  NetworkPerformance?: string | undefined;

  /**
   * <p>The maximum number of network interfaces for the network card.</p>
   * @public
   */
  MaximumNetworkInterfaces?: number | undefined;

  /**
   * <p>The baseline network performance of the network card, in Gbps.</p>
   * @public
   */
  BaselineBandwidthInGbps?: number | undefined;

  /**
   * <p>The peak (burst) network performance of the network card, in Gbps.</p>
   * @public
   */
  PeakBandwidthInGbps?: number | undefined;

  /**
   * <p>The default number of the ENA queues for each interface.</p>
   * @public
   */
  DefaultEnaQueueCountPerInterface?: number | undefined;

  /**
   * <p>The maximum number of the ENA queues.</p>
   * @public
   */
  MaximumEnaQueueCount?: number | undefined;

  /**
   * <p>The maximum number of the ENA queues for each interface.</p>
   * @public
   */
  MaximumEnaQueueCountPerInterface?: number | undefined;
}

/**
 * <p>Describes the networking features of the instance type.</p>
 * @public
 */
export interface NetworkInfo {
  /**
   * <p>The network performance.</p>
   * @public
   */
  NetworkPerformance?: string | undefined;

  /**
   * <p>The maximum number of network interfaces for the instance type.</p>
   * @public
   */
  MaximumNetworkInterfaces?: number | undefined;

  /**
   * <p>The maximum number of physical network cards that can be allocated to the instance.</p>
   * @public
   */
  MaximumNetworkCards?: number | undefined;

  /**
   * <p>The index of the default network card, starting at 0.</p>
   * @public
   */
  DefaultNetworkCardIndex?: number | undefined;

  /**
   * <p>Describes the network cards for the instance type.</p>
   * @public
   */
  NetworkCards?: NetworkCardInfo[] | undefined;

  /**
   * <p>The maximum number of IPv4 addresses per network interface.</p>
   * @public
   */
  Ipv4AddressesPerInterface?: number | undefined;

  /**
   * <p>The maximum number of IPv6 addresses per network interface.</p>
   * @public
   */
  Ipv6AddressesPerInterface?: number | undefined;

  /**
   * <p>Indicates whether IPv6 is supported.</p>
   * @public
   */
  Ipv6Supported?: boolean | undefined;

  /**
   * <p>Indicates whether Elastic Network Adapter (ENA) is supported.</p>
   * @public
   */
  EnaSupport?: EnaSupport | undefined;

  /**
   * <p>Indicates whether Elastic Fabric Adapter (EFA) is supported.</p>
   * @public
   */
  EfaSupported?: boolean | undefined;

  /**
   * <p>Describes the Elastic Fabric Adapters for the instance type.</p>
   * @public
   */
  EfaInfo?: EfaInfo | undefined;

  /**
   * <p>Indicates whether the instance type automatically encrypts in-transit traffic between
   *    instances.</p>
   * @public
   */
  EncryptionInTransitSupported?: boolean | undefined;

  /**
   * <p>Indicates whether the instance type supports ENA Express. ENA Express uses Amazon Web Services Scalable Reliable Datagram (SRD) technology to increase the maximum bandwidth used per stream
   *    and minimize tail latency of network traffic between EC2 instances.</p>
   * @public
   */
  EnaSrdSupported?: boolean | undefined;

  /**
   * <p>A list of valid settings for configurable bandwidth weighting for the instance type, if
   *    supported.</p>
   * @public
   */
  BandwidthWeightings?: BandwidthWeightingType[] | undefined;

  /**
   * <p>Indicates whether changing the number of ENA queues is supported.</p>
   * @public
   */
  FlexibleEnaQueuesSupport?: FlexibleEnaQueuesSupport | undefined;
}

/**
 * <p>Describes the cores available to the neuron accelerator.</p>
 * @public
 */
export interface NeuronDeviceCoreInfo {
  /**
   * <p>The number of cores available to the neuron accelerator.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The version of the neuron accelerator.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * <p>Describes the memory available to the neuron accelerator.</p>
 * @public
 */
export interface NeuronDeviceMemoryInfo {
  /**
   * <p>The size of the memory available to the neuron accelerator, in MiB.</p>
   * @public
   */
  SizeInMiB?: number | undefined;
}

/**
 * <p>Describes the neuron accelerators for the instance type.</p>
 * @public
 */
export interface NeuronDeviceInfo {
  /**
   * <p>The number of neuron accelerators for the instance type.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The name of the neuron accelerator.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Describes the cores available to each neuron accelerator.</p>
   * @public
   */
  CoreInfo?: NeuronDeviceCoreInfo | undefined;

  /**
   * <p>Describes the memory available to each neuron accelerator.</p>
   * @public
   */
  MemoryInfo?: NeuronDeviceMemoryInfo | undefined;
}

/**
 * <p>Describes the neuron accelerators for the instance type.</p>
 * @public
 */
export interface NeuronInfo {
  /**
   * <p>Describes the neuron accelerators for the instance type.</p>
   * @public
   */
  NeuronDevices?: NeuronDeviceInfo[] | undefined;

  /**
   * <p>The total size of the memory for the neuron accelerators for the instance type, in
   *    MiB.</p>
   * @public
   */
  TotalNeuronDeviceMemoryInMiB?: number | undefined;
}

/**
 * <p>Describes the supported NitroTPM versions for the instance type.</p>
 * @public
 */
export interface NitroTpmInfo {
  /**
   * <p>Indicates the supported NitroTPM versions.</p>
   * @public
   */
  SupportedVersions?: string[] | undefined;
}

/**
 * <p>Describes the placement group support of the instance type.</p>
 * @public
 */
export interface PlacementGroupInfo {
  /**
   * <p>The supported placement group types.</p>
   * @public
   */
  SupportedStrategies?: PlacementGroupStrategy[] | undefined;
}

/**
 * <p>Describes the processor used by the instance type.</p>
 * @public
 */
export interface ProcessorInfo {
  /**
   * <p>The architectures supported by the instance type.</p>
   * @public
   */
  SupportedArchitectures?: ArchitectureType[] | undefined;

  /**
   * <p>The speed of the processor, in GHz.</p>
   * @public
   */
  SustainedClockSpeedInGhz?: number | undefined;

  /**
   * <p>Indicates whether the instance type supports AMD SEV-SNP. If the request returns
   *     <code>amd-sev-snp</code>, AMD SEV-SNP is supported. Otherwise, it is not supported. For more
   *    information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html"> AMD
   *     SEV-SNP</a>.</p>
   * @public
   */
  SupportedFeatures?: SupportedAdditionalProcessorFeature[] | undefined;

  /**
   * <p>The manufacturer of the processor.</p>
   * @public
   */
  Manufacturer?: string | undefined;
}

/**
 * <p>Describes the vCPU configurations for the instance type.</p>
 * @public
 */
export interface VCpuInfo {
  /**
   * <p>The default number of vCPUs for the instance type.</p>
   * @public
   */
  DefaultVCpus?: number | undefined;

  /**
   * <p>The default number of cores for the instance type.</p>
   * @public
   */
  DefaultCores?: number | undefined;

  /**
   * <p>The default number of threads per core for the instance type.</p>
   * @public
   */
  DefaultThreadsPerCore?: number | undefined;

  /**
   * <p>The valid number of cores that can be configured for the instance type.</p>
   * @public
   */
  ValidCores?: number[] | undefined;

  /**
   * <p>The valid number of threads per core that can be configured for the instance type.</p>
   * @public
   */
  ValidThreadsPerCore?: number[] | undefined;
}

/**
 * <p>Describes the instance type.</p>
 * @public
 */
export interface InstanceTypeInfo {
  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2
   *     User Guide</i>.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>Indicates whether the instance type is current generation.</p>
   * @public
   */
  CurrentGeneration?: boolean | undefined;

  /**
   * <p>Indicates whether the instance type is eligible for the free tier.</p>
   * @public
   */
  FreeTierEligible?: boolean | undefined;

  /**
   * <p>Indicates whether the instance type is offered for spot, On-Demand, or Capacity
   *    Blocks.</p>
   * @public
   */
  SupportedUsageClasses?: UsageClassType[] | undefined;

  /**
   * <p>The supported root device types.</p>
   * @public
   */
  SupportedRootDeviceTypes?: RootDeviceType[] | undefined;

  /**
   * <p>The supported virtualization types.</p>
   * @public
   */
  SupportedVirtualizationTypes?: VirtualizationType[] | undefined;

  /**
   * <p>Indicates whether the instance is a bare metal instance type.</p>
   * @public
   */
  BareMetal?: boolean | undefined;

  /**
   * <p>The hypervisor for the instance type.</p>
   * @public
   */
  Hypervisor?: InstanceTypeHypervisor | undefined;

  /**
   * <p>Describes the processor.</p>
   * @public
   */
  ProcessorInfo?: ProcessorInfo | undefined;

  /**
   * <p>Describes the vCPU configurations for the instance type.</p>
   * @public
   */
  VCpuInfo?: VCpuInfo | undefined;

  /**
   * <p>Describes the memory for the instance type.</p>
   * @public
   */
  MemoryInfo?: MemoryInfo | undefined;

  /**
   * <p>Indicates whether instance storage is supported.</p>
   * @public
   */
  InstanceStorageSupported?: boolean | undefined;

  /**
   * <p>Describes the instance storage for the instance type.</p>
   * @public
   */
  InstanceStorageInfo?: InstanceStorageInfo | undefined;

  /**
   * <p>Describes the Amazon EBS settings for the instance type.</p>
   * @public
   */
  EbsInfo?: EbsInfo | undefined;

  /**
   * <p>Describes the network settings for the instance type.</p>
   * @public
   */
  NetworkInfo?: NetworkInfo | undefined;

  /**
   * <p>Describes the GPU accelerator settings for the instance type.</p>
   * @public
   */
  GpuInfo?: GpuInfo | undefined;

  /**
   * <p>Describes the FPGA accelerator settings for the instance type.</p>
   * @public
   */
  FpgaInfo?: FpgaInfo | undefined;

  /**
   * <p>Describes the placement group settings for the instance type.</p>
   * @public
   */
  PlacementGroupInfo?: PlacementGroupInfo | undefined;

  /**
   * <p>Describes the Inference accelerator settings for the instance type.</p>
   * @public
   */
  InferenceAcceleratorInfo?: InferenceAcceleratorInfo | undefined;

  /**
   * <p>Indicates whether On-Demand hibernation is supported.</p>
   * @public
   */
  HibernationSupported?: boolean | undefined;

  /**
   * <p>Indicates whether the instance type is a burstable performance T instance type. For more
   *    information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance
   *     instances</a>.</p>
   * @public
   */
  BurstablePerformanceSupported?: boolean | undefined;

  /**
   * <p>Indicates whether Dedicated Hosts are supported on the instance type.</p>
   * @public
   */
  DedicatedHostsSupported?: boolean | undefined;

  /**
   * <p>Indicates whether Amazon CloudWatch action based recovery is supported.</p>
   * @public
   */
  AutoRecoverySupported?: boolean | undefined;

  /**
   * <p>The supported boot modes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the <i>Amazon EC2 User
   *     Guide</i>.</p>
   * @public
   */
  SupportedBootModes?: BootModeType[] | undefined;

  /**
   * <p>Indicates whether Nitro Enclaves is supported.</p>
   * @public
   */
  NitroEnclavesSupport?: NitroEnclavesSupport | undefined;

  /**
   * <p>Indicates whether NitroTPM is supported.</p>
   * @public
   */
  NitroTpmSupport?: NitroTpmSupport | undefined;

  /**
   * <p>Describes the supported NitroTPM versions for the instance type.</p>
   * @public
   */
  NitroTpmInfo?: NitroTpmInfo | undefined;

  /**
   * <p>Describes the media accelerator settings for the instance type.</p>
   * @public
   */
  MediaAcceleratorInfo?: MediaAcceleratorInfo | undefined;

  /**
   * <p>Describes the Neuron accelerator settings for the instance type.</p>
   * @public
   */
  NeuronInfo?: NeuronInfo | undefined;

  /**
   * <p>Indicates whether a local Precision Time Protocol (PTP) hardware clock (PHC) is
   *    supported.</p>
   * @public
   */
  PhcSupport?: PhcSupport | undefined;

  /**
   * <p>Indicates whether reboot migration during a user-initiated reboot is supported for
   *    instances that have a scheduled <code>system-reboot</code> event. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/schedevents_actions_reboot.html#reboot-migration">Enable or disable reboot migration</a> in the
   *    <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  RebootMigrationSupport?: RebootMigrationSupport | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceTypesResult {
  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceTypes?: InstanceTypeInfo[] | undefined;

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
export interface DescribeInternetGatewaysRequest {
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
   * <p>The IDs of the internet gateways.</p>
   *          <p>Default: Describes all your internet gateways.</p>
   * @public
   */
  InternetGatewayIds?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attachment.state</code> - The current state of the attachment between the gateway
   *                     and the VPC (<code>available</code>). Present only if a VPC is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.vpc-id</code> - The ID of an attached VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>internet-gateway-id</code> - The ID of the Internet gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the internet gateway.</p>
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
export interface DescribeInternetGatewaysResult {
  /**
   * <p>Information about the internet gateways.</p>
   * @public
   */
  InternetGateways?: InternetGateway[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamByoasnRequest {
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
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamByoasnResult {
  /**
   * <p>ASN and BYOIP CIDR associations.</p>
   * @public
   */
  Byoasns?: Byoasn[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamExternalResourceVerificationTokensRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   *          <p>Available filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ipam-arn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipam-external-resource-verification-token-arn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipam-external-resource-verification-token-id</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipam-id</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipam-region</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>token-name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>token-value</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of tokens to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Verification token IDs.</p>
   * @public
   */
  IpamExternalResourceVerificationTokenIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamExternalResourceVerificationTokensResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Verification tokens.</p>
   * @public
   */
  IpamExternalResourceVerificationTokens?: IpamExternalResourceVerificationToken[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPoliciesRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters for the IPAM policy description.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The IDs of the IPAM policies to describe.</p>
   * @public
   */
  IpamPolicyIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPoliciesResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the IPAM policies.</p>
   *          <p>An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.</p>
   * @public
   */
  IpamPolicies?: IpamPolicy[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPoolsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The IDs of the IPAM pools you would like information on.</p>
   * @public
   */
  IpamPoolIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPoolsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the IPAM pools.</p>
   * @public
   */
  IpamPools?: IpamPool[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPrefixListResolversRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters to limit the results.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The IDs of the IPAM prefix list resolvers to describe. If not specified, all resolvers in your account are described.</p>
   * @public
   */
  IpamPrefixListResolverIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPrefixListResolversResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the IPAM prefix list resolvers.</p>
   * @public
   */
  IpamPrefixListResolvers?: IpamPrefixListResolver[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPrefixListResolverTargetsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters to limit the results.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The IDs of the IPAM prefix list resolver Targets to describe. If not specified, all targets in your account are described.</p>
   * @public
   */
  IpamPrefixListResolverTargetIds?: string[] | undefined;

  /**
   * <p>The ID of the IPAM prefix list resolver to filter targets by. Only targets associated with this resolver will be returned.</p>
   * @public
   */
  IpamPrefixListResolverId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPrefixListResolverTargetsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the IPAM prefix list resolver Targets.</p>
   * @public
   */
  IpamPrefixListResolverTargets?: IpamPrefixListResolverTarget[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamResourceDiscoveriesRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IPAM resource discovery IDs.</p>
   * @public
   */
  IpamResourceDiscoveryIds?: string[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of resource discoveries to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The resource discovery filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamResourceDiscoveriesResult {
  /**
   * <p>The resource discoveries.</p>
   * @public
   */
  IpamResourceDiscoveries?: IpamResourceDiscovery[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamResourceDiscoveryAssociationsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The resource discovery association IDs.</p>
   * @public
   */
  IpamResourceDiscoveryAssociationIds?: string[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of resource discovery associations to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The resource discovery association filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamResourceDiscoveryAssociationsResult {
  /**
   * <p>The resource discovery associations.</p>
   * @public
   */
  IpamResourceDiscoveryAssociations?: IpamResourceDiscoveryAssociation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The IDs of the IPAMs you want information on.</p>
   * @public
   */
  IpamIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the IPAMs.</p>
   * @public
   */
  Ipams?: Ipam[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamScopesRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The IDs of the scopes you want information on.</p>
   * @public
   */
  IpamScopeIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamScopesResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The scopes you want information on.</p>
   * @public
   */
  IpamScopes?: IpamScope[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpv6PoolsRequest {
  /**
   * <p>The IDs of the IPv6 address pools.</p>
   * @public
   */
  PoolIds?: string[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes a CIDR block for an address pool.</p>
 * @public
 */
export interface PoolCidrBlock {
  /**
   * <p>The CIDR block.</p>
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * <p>Describes an IPv6 address pool.</p>
 * @public
 */
export interface Ipv6Pool {
  /**
   * <p>The ID of the address pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The description for the address pool.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The CIDR blocks for the address pool.</p>
   * @public
   */
  PoolCidrBlocks?: PoolCidrBlock[] | undefined;

  /**
   * <p>Any tags for the address pool.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpv6PoolsResult {
  /**
   * <p>Information about the IPv6 address pools.</p>
   * @public
   */
  Ipv6Pools?: Ipv6Pool[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeKeyPairsRequest {
  /**
   * <p>The key pair names.</p>
   *          <p>Default: Describes all of your key pairs.</p>
   * @public
   */
  KeyNames?: string[] | undefined;

  /**
   * <p>The IDs of the key pairs.</p>
   * @public
   */
  KeyPairIds?: string[] | undefined;

  /**
   * <p>If <code>true</code>, the public key material is included in the response.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  IncludePublicKey?: boolean | undefined;

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
   *                   <code>key-pair-id</code> - The ID of the key pair.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fingerprint</code> - The fingerprint of the key pair.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>key-name</code> - The name of the key pair.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes a key pair.</p>
 * @public
 */
export interface KeyPairInfo {
  /**
   * <p>The ID of the key pair.</p>
   * @public
   */
  KeyPairId?: string | undefined;

  /**
   * <p>The type of key pair.</p>
   * @public
   */
  KeyType?: KeyType | undefined;

  /**
   * <p>Any tags applied to the key pair.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The public key material.</p>
   * @public
   */
  PublicKey?: string | undefined;

  /**
   * <p>If you used Amazon EC2 to create the key pair, this is the date and time when the key
   *             was created, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO
   *                 8601 date-time format</a>, in the UTC time zone.</p>
   *          <p>If you imported an existing key pair to Amazon EC2, this is the date and time the key
   *             was imported, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO
   *                 8601 date-time format</a>, in the UTC time zone.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The name of the key pair.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>If you used <a>CreateKeyPair</a> to create the key pair:</p>
   *          <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the SHA-1 digest of the DER encoded private key.</p>
   *             </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which
   *                    is the default for OpenSSH, starting with <a href="http://www.openssh.com/txt/release-6.8">OpenSSH 6.8</a>.</p>
   *             </li>
   *          </ul>
   *          <p>If you used <a>ImportKeyPair</a> to provide Amazon Web Services the public key:</p>
   *          <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the MD5 public key fingerprint as specified in section 4 of RFC4716.</p>
   *             </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256
   *                     digest, which is the default for OpenSSH, starting with <a href="http://www.openssh.com/txt/release-6.8">OpenSSH 6.8</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyFingerprint?: string | undefined;
}

/**
 * @public
 */
export interface DescribeKeyPairsResult {
  /**
   * <p>Information about the key pairs.</p>
   * @public
   */
  KeyPairs?: KeyPairInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchTemplatesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more launch template IDs.</p>
   * @public
   */
  LaunchTemplateIds?: string[] | undefined;

  /**
   * <p>One or more launch template names.</p>
   * @public
   */
  LaunchTemplateNames?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The time the launch template was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-template-name</code> - The name of the launch template.</p>
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
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 1 and 200.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchTemplatesResult {
  /**
   * <p>Information about the launch templates.</p>
   * @public
   */
  LaunchTemplates?: LaunchTemplate[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchTemplateVersionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the launch template.</p>
   *          <p>To describe one or more versions of a specified launch template, you must specify
   *             either the launch template ID or the launch template name, but not both.</p>
   *          <p>To describe all the latest or default launch template versions in your account, you
   *             must omit this parameter.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>To describe one or more versions of a specified launch template, you must specify
   *             either the launch template name or the launch template ID, but not both.</p>
   *          <p>To describe all the latest or default launch template versions in your account, you
   *             must omit this parameter.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>One or more versions of the launch template. Valid values depend on whether you are
   *             describing a specified launch template (by ID or name) or all launch templates in your
   *             account.</p>
   *          <p>To describe one or more versions of a specified launch template, valid values are
   *                 <code>$Latest</code>, <code>$Default</code>, and numbers.</p>
   *          <p>To describe all launch templates in your account that are defined as the latest
   *             version, the valid value is <code>$Latest</code>. To describe all launch templates in
   *             your account that are defined as the default version, the valid value is
   *                 <code>$Default</code>. You can specify <code>$Latest</code> and
   *                 <code>$Default</code> in the same request. You cannot specify numbers.</p>
   * @public
   */
  Versions?: string[] | undefined;

  /**
   * <p>The version number after which to describe launch template versions.</p>
   * @public
   */
  MinVersion?: string | undefined;

  /**
   * <p>The version number up to which to describe launch template versions.</p>
   * @public
   */
  MaxVersion?: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 1 and 200.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The time the launch template version was
   *                     created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-optimized</code> - A boolean that indicates whether the instance is
   *                     optimized for Amazon EBS I/O.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>http-endpoint</code> - Indicates whether the HTTP metadata endpoint on
   *                     your instances is enabled (<code>enabled</code> | <code>disabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>http-protocol-ipv4</code> - Indicates whether the IPv4 endpoint for the
   *                     instance metadata service is enabled (<code>enabled</code> |
   *                         <code>disabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>host-resource-group-arn</code> - The ARN of the host resource group in
   *                     which to launch the instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>http-tokens</code> - The state of token usage for your instance metadata
   *                     requests (<code>optional</code> | <code>required</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iam-instance-profile</code> - The ARN of the IAM instance
   *                     profile.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-id</code> - The ID of the AMI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-default-version</code> - A boolean that indicates whether the launch
   *                     template version is the default version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>license-configuration-arn</code> - The ARN of the license
   *                     configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-card-index</code> - The index of the network card.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ram-disk-id</code> - The RAM disk ID.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>If <code>true</code>, and if a Systems Manager parameter is specified for
   *                 <code>ImageId</code>, the AMI ID is displayed in the response for
   *                 <code>imageId</code>.</p>
   *          <p>If <code>false</code>, and if a Systems Manager parameter is specified for
   *                 <code>ImageId</code>, the parameter is displayed in the response for
   *                 <code>imageId</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems Manager parameter instead of an AMI ID</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  ResolveAlias?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchTemplateVersionsResult {
  /**
   * <p>Information about the launch template versions.</p>
   * @public
   */
  LaunchTemplateVersions?: LaunchTemplateVersion[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayRouteTablesRequest {
  /**
   * <p>The IDs of the local gateway route tables.</p>
   * @public
   */
  LocalGatewayRouteTableIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-arn</code> - The Amazon Resource Name (ARN) of the
   *                local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of a local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the local gateway route table.</p>
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
export interface DescribeLocalGatewayRouteTablesResult {
  /**
   * <p>Information about the local gateway route tables.</p>
   * @public
   */
  LocalGatewayRouteTables?: LocalGatewayRouteTable[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
  /**
   * <p>The IDs of the associations.</p>
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-arn</code> - The Amazon Resource Name (ARN) of the local
   *                gateway route table for the virtual interface group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-virtual-interface-group-association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-virtual-interface-group-id</code> - The ID of the virtual interface group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the local gateway virtual
   *                interface group association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association.</p>
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
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociations?:
    | LocalGatewayRouteTableVirtualInterfaceGroupAssociation[]
    | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayRouteTableVpcAssociationsRequest {
  /**
   * <p>The IDs of the associations.</p>
   * @public
   */
  LocalGatewayRouteTableVpcAssociationIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-arn</code> - The Amazon Resource Name (ARN) of the local
   *                gateway route table for the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-vpc-association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the local gateway route table
   *                for the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC.</p>
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
export interface DescribeLocalGatewayRouteTableVpcAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   * @public
   */
  LocalGatewayRouteTableVpcAssociations?: LocalGatewayRouteTableVpcAssociation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewaysRequest {
  /**
   * <p>The IDs of the local gateways.</p>
   * @public
   */
  LocalGatewayIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association.</p>
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
 * <p>Describes a local gateway.</p>
 * @public
 */
export interface LocalGateway {
  /**
   * <p>The ID of the local gateway.</p>
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The state of the local gateway.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The tags assigned to the local gateway.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewaysResult {
  /**
   * <p>Information about the local gateways.</p>
   * @public
   */
  LocalGateways?: LocalGateway[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayVirtualInterfaceGroupsRequest {
  /**
   * <p>The IDs of the virtual interface groups.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-group-id</code> - The ID of the virtual interface group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-id</code> - The ID of the virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the local gateway virtual interface group.</p>
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
export interface DescribeLocalGatewayVirtualInterfaceGroupsResult {
  /**
   * <p>The virtual interface groups.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroups?: LocalGatewayVirtualInterfaceGroup[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayVirtualInterfacesRequest {
  /**
   * <p>The IDs of the virtual interfaces.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-address</code> - The local address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-bgp-asn</code> - The Border Gateway Protocol (BGP) Autonomous System Number (ASN)
   *                of the local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of the local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-id</code> - The ID of the virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the local gateway virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>peer-address</code> - The peer address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>peer-bgp-asn</code> - The peer BGP ASN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vlan</code> - The ID of the VLAN.</p>
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
export interface DescribeLocalGatewayVirtualInterfacesResult {
  /**
   * <p>Information about the virtual interfaces.</p>
   * @public
   */
  LocalGatewayVirtualInterfaces?: LocalGatewayVirtualInterface[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLockedSnapshotsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>lock-state</code> - The state of the snapshot lock (<code>compliance-cooloff</code> |
   *           <code>governance</code> | <code>compliance</code> | <code>expired</code>).</p>
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
   * <p>The IDs of the snapshots for which to view the lock status.</p>
   * @public
   */
  SnapshotIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about a locked snapshot.</p>
 * @public
 */
export interface LockedSnapshotsInfo {
  /**
   * <p>The account ID of the Amazon Web Services account that owns the snapshot.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The state of the snapshot lock. Valid states include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>compliance-cooloff</code> - The snapshot has been locked in
   *           compliance mode but it is still within the cooling-off period. The snapshot can't be
   *           deleted, but it can be unlocked and the lock settings can be modified by users with
   *           appropriate permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>governance</code> - The snapshot is locked in governance mode. The
   *           snapshot can't be deleted, but it can be unlocked and the lock settings can be
   *           modified by users with appropriate permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>compliance</code> - The snapshot is locked in compliance mode and the
   *           cooling-off period has expired. The snapshot can't be unlocked or deleted. The lock
   *           duration can only be increased by users with appropriate permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The snapshot was locked in compliance or governance
   *           mode but the lock duration has expired. The snapshot is not locked and can be deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * <p>The period of time for which the snapshot is locked, in days.</p>
   * @public
   */
  LockDuration?: number | undefined;

  /**
   * <p>The compliance mode cooling-off period, in hours.</p>
   * @public
   */
  CoolOffPeriod?: number | undefined;

  /**
   * <p>The date and time at which the compliance mode cooling-off period expires, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   * @public
   */
  CoolOffPeriodExpiresOn?: Date | undefined;

  /**
   * <p>The date and time at which the snapshot was locked, in the UTC time zone (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   * @public
   */
  LockCreatedOn?: Date | undefined;

  /**
   * <p>The date and time at which the lock duration started, in the UTC time zone (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   *          <p>If you lock a snapshot that is in the <code>pending</code> state, the lock duration
   *       starts only once the snapshot enters the <code>completed</code> state.</p>
   * @public
   */
  LockDurationStartTime?: Date | undefined;

  /**
   * <p>The date and time at which the lock will expire, in the UTC time zone (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   * @public
   */
  LockExpiresOn?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeLockedSnapshotsResult {
  /**
   * <p>Information about the snapshots.</p>
   * @public
   */
  Snapshots?: LockedSnapshotsInfo[] | undefined;

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
export interface DescribeMacHostsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the EC2 Mac Dedicated Host.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type size that the EC2 Mac Dedicated Host is
   *                         configured to support.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>
   *             The IDs of the EC2 Mac Dedicated Hosts.
   *         </p>
   * @public
   */
  HostIds?: string[] | undefined;

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
 * <p>
 *             Information about the EC2 Mac Dedicated Host.
 *         </p>
 * @public
 */
export interface MacHost {
  /**
   * <p>
   *             The EC2 Mac Dedicated Host ID.
   *         </p>
   * @public
   */
  HostId?: string | undefined;

  /**
   * <p>
   *             The latest macOS versions that the EC2 Mac Dedicated Host can launch without being upgraded.
   *         </p>
   * @public
   */
  MacOSLatestSupportedVersions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeMacHostsResult {
  /**
   * <p>
   *             Information about the EC2 Mac Dedicated Hosts.
   *         </p>
   * @public
   */
  MacHosts?: MacHost[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMacModificationTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Specifies one or more filters for the request:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance for which the task was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>task-state</code> - The state of the task (<code>successful</code> | <code>failed</code> |
   *                <code>in-progress</code> | <code>pending</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mac-system-integrity-protection-configuration.sip-status</code> - The overall SIP
   *                state requested in the task (<code>enabled</code> | <code>disabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-time</code> - The date and time the task was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>task-type</code> - The type of task (<code>sip-modification</code> | <code>volume-ownership-delegation</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The ID of task.</p>
   * @public
   */
  MacModificationTaskIds?: string[] | undefined;

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
 * @public
 */
export interface DescribeMacModificationTasksResult {
  /**
   * <p>Information about the tasks.</p>
   * @public
   */
  MacModificationTasks?: MacModificationTask[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeManagedPrefixListsRequest {
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
   *                   <code>owner-id</code> - The ID of the prefix list owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-name</code> - The name of the prefix list.</p>
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
   * <p>One or more prefix list IDs.</p>
   * @public
   */
  PrefixListIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeManagedPrefixListsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the prefix lists.</p>
   * @public
   */
  PrefixLists?: ManagedPrefixList[] | undefined;
}

/**
 * @public
 */
export interface DescribeMovingAddressesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more Elastic IP addresses.</p>
   * @public
   */
  PublicIps?: string[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>moving-status</code> - The status of the Elastic IP address
   *           (<code>MovingToVpc</code> | <code>RestoringToClassic</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *       results of the initial request can be seen by sending another request with the returned
   *       <code>NextToken</code> value. This value can be between 5 and 1000; if
   *       <code>MaxResults</code> is given a value outside of this range, an error is returned.</p>
   *          <p>Default: If no value is provided, the default is 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Describes the status of a moving Elastic IP address.</p>
 * @public
 */
export interface MovingAddressStatus {
  /**
   * <p>The status of the Elastic IP address that's being moved or restored.</p>
   * @public
   */
  MoveStatus?: MoveStatus | undefined;

  /**
   * <p>The Elastic IP address.</p>
   * @public
   */
  PublicIp?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMovingAddressesResult {
  /**
   * <p>The status for each Elastic IP address.</p>
   * @public
   */
  MovingAddressStatuses?: MovingAddressStatus[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNatGatewaysRequest {
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
   *                   <code>nat-gateway-id</code> - The ID of the NAT gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the NAT gateway (<code>pending</code> |
   *               <code>failed</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet in which the NAT gateway resides.</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC in which the NAT gateway resides.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filter?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The IDs of the NAT gateways.</p>
   * @public
   */
  NatGatewayIds?: string[] | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNatGatewaysResult {
  /**
   * <p>Information about the NAT gateways.</p>
   * @public
   */
  NatGateways?: NatGateway[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkAclsRequest {
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
   * <p>The IDs of the network ACLs.</p>
   * @public
   */
  NetworkAclIds?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>association.association-id</code> - The ID of an association ID for the ACL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.network-acl-id</code> - The ID of the network ACL involved in the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.subnet-id</code> - The ID of the subnet involved in the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default</code> - Indicates whether the ACL is the default network ACL for the VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.cidr</code> - The IPv4 CIDR range specified in the entry.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.icmp.code</code> - The ICMP code specified in the entry, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.icmp.type</code> - The ICMP type specified in the entry, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.ipv6-cidr</code> - The IPv6 CIDR range specified in the entry.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.port-range.from</code> - The start of the port range specified in the entry. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.port-range.to</code> - The end of the port range specified in the entry. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.protocol</code> - The protocol specified in the entry (<code>tcp</code> | <code>udp</code> | <code>icmp</code> or a protocol number).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.rule-action</code> - Allows or denies the matching traffic (<code>allow</code> | <code>deny</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.egress</code> - A Boolean that indicates the type of rule. Specify <code>true</code>
   * 		                for egress rules, or <code>false</code> for ingress rules.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.rule-number</code> - The number of an entry (in other words, rule) in
   *                     the set of ACL entries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-acl-id</code> - The ID of the network ACL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the network ACL.</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC for the network ACL.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkAclsResult {
  /**
   * <p>Information about the network ACLs.</p>
   * @public
   */
  NetworkAcls?: NetworkAcl[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopeAnalysesRequest {
  /**
   * <p>The IDs of the Network Access Scope analyses.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysisIds?: string[] | undefined;

  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;

  /**
   * <p>Filters the results based on the start time. The analysis must have started on or after this time.</p>
   * @public
   */
  AnalysisStartTimeBegin?: Date | undefined;

  /**
   * <p>Filters the results based on the start time. The analysis must have started on or before this time.</p>
   * @public
   */
  AnalysisStartTimeEnd?: Date | undefined;

  /**
   * <p>There are no supported filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes a Network Access Scope analysis.</p>
 * @public
 */
export interface NetworkInsightsAccessScopeAnalysis {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Access Scope analysis.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysisArn?: string | undefined;

  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: AnalysisStatus | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The warning message.</p>
   * @public
   */
  WarningMessage?: string | undefined;

  /**
   * <p>The analysis start date.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The analysis end date.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>Indicates whether there are findings.</p>
   * @public
   */
  FindingsFound?: FindingsFound | undefined;

  /**
   * <p>The number of network interfaces analyzed.</p>
   * @public
   */
  AnalyzedEniCount?: number | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopeAnalysesResult {
  /**
   * <p>The Network Access Scope analyses.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalyses?: NetworkInsightsAccessScopeAnalysis[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopesRequest {
  /**
   * <p>The IDs of the Network Access Scopes.</p>
   * @public
   */
  NetworkInsightsAccessScopeIds?: string[] | undefined;

  /**
   * <p>There are no supported filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopesResult {
  /**
   * <p>The Network Access Scopes.</p>
   * @public
   */
  NetworkInsightsAccessScopes?: NetworkInsightsAccessScope[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAnalysesRequest {
  /**
   * <p>The ID of the network insights analyses. You must specify either analysis IDs or a path ID.</p>
   * @public
   */
  NetworkInsightsAnalysisIds?: string[] | undefined;

  /**
   * <p>The ID of the path. You must specify either a path ID or analysis IDs.</p>
   * @public
   */
  NetworkInsightsPathId?: string | undefined;

  /**
   * <p>The time when the network insights analyses started.</p>
   * @public
   */
  AnalysisStartTime?: Date | undefined;

  /**
   * <p>The time when the network insights analyses ended.</p>
   * @public
   */
  AnalysisEndTime?: Date | undefined;

  /**
   * <p>The filters. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>path-found - A Boolean value that indicates whether a feasible path is found.</p>
   *             </li>
   *             <li>
   *                <p>status - The status of the analysis (running | succeeded | failed).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes a network insights analysis.</p>
 * @public
 */
export interface NetworkInsightsAnalysis {
  /**
   * <p>The ID of the network insights analysis.</p>
   * @public
   */
  NetworkInsightsAnalysisId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network insights analysis.</p>
   * @public
   */
  NetworkInsightsAnalysisArn?: string | undefined;

  /**
   * <p>The ID of the path.</p>
   * @public
   */
  NetworkInsightsPathId?: string | undefined;

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
   * <p>The Amazon Resource Names (ARN) of the resources that the path must ignore.</p>
   * @public
   */
  FilterOutArns?: string[] | undefined;

  /**
   * <p>The time the analysis started.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The status of the network insights analysis.</p>
   * @public
   */
  Status?: AnalysisStatus | undefined;

  /**
   * <p>The status message, if the status is <code>failed</code>.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The warning message.</p>
   * @public
   */
  WarningMessage?: string | undefined;

  /**
   * <p>Indicates whether the destination is reachable from the source.</p>
   * @public
   */
  NetworkPathFound?: boolean | undefined;

  /**
   * <p>The components in the path from source to destination.</p>
   * @public
   */
  ForwardPathComponents?: PathComponent[] | undefined;

  /**
   * <p>The components in the path from destination to source.</p>
   * @public
   */
  ReturnPathComponents?: PathComponent[] | undefined;

  /**
   * <p>The explanations. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.</p>
   * @public
   */
  Explanations?: Explanation[] | undefined;

  /**
   * <p>Potential intermediate components.</p>
   * @public
   */
  AlternatePathHints?: AlternatePathHint[] | undefined;

  /**
   * <p>Potential intermediate accounts.</p>
   * @public
   */
  SuggestedAccounts?: string[] | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAnalysesResult {
  /**
   * <p>Information about the network insights analyses.</p>
   * @public
   */
  NetworkInsightsAnalyses?: NetworkInsightsAnalysis[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsPathsRequest {
  /**
   * <p>The IDs of the paths.</p>
   * @public
   */
  NetworkInsightsPathIds?: string[] | undefined;

  /**
   * <p>The filters. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>destination - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-source.source-address - The source IPv4 address at the source.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-source.source-port-range - The source port range at the source.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-source.destination-address - The destination IPv4 address at the source.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-source.destination-port-range - The destination port range at the source.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-destination.source-address - The source IPv4 address at the destination.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-destination.source-port-range - The source port range at the destination.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-destination.destination-address - The destination IPv4 address at the destination.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-destination.destination-port-range - The destination port range at the destination.</p>
   *             </li>
   *             <li>
   *                <p>protocol - The protocol.</p>
   *             </li>
   *             <li>
   *                <p>source - The ID of the resource.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsPathsResult {
  /**
   * <p>Information about the paths.</p>
   * @public
   */
  NetworkInsightsPaths?: NetworkInsightsPath[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the parameters for DescribeNetworkInterfaceAttribute.</p>
 * @public
 */
export interface DescribeNetworkInterfaceAttributeRequest {
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
   * <p>The attribute of the network interface. This parameter is required.</p>
   * @public
   */
  Attribute?: NetworkInterfaceAttribute | undefined;
}

/**
 * <p>Contains the output of DescribeNetworkInterfaceAttribute.</p>
 * @public
 */
export interface DescribeNetworkInterfaceAttributeResult {
  /**
   * <p>The attachment (if any) of the network interface.</p>
   * @public
   */
  Attachment?: NetworkInterfaceAttachment | undefined;

  /**
   * <p>The description of the network interface.</p>
   * @public
   */
  Description?: AttributeValue | undefined;

  /**
   * <p>The security groups associated with the network interface.</p>
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>Indicates whether source/destination checking is enabled.</p>
   * @public
   */
  SourceDestCheck?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether to assign a public IPv4 address to a network interface. This option
   *             can be enabled for any network interface but will only apply to the primary network
   *             interface (eth0).</p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;
}

/**
 * <p>Contains the parameters for DescribeNetworkInterfacePermissions.</p>
 * @public
 */
export interface DescribeNetworkInterfacePermissionsRequest {
  /**
   * <p>The network interface permission IDs.</p>
   * @public
   */
  NetworkInterfacePermissionIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.network-interface-permission-id</code> -
   *                     The ID of the permission.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.network-interface-id</code> - The ID of the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.aws-account-id</code> - The Amazon Web Services account ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.aws-service</code> - The Amazon Web Services
   *                     service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.permission</code> - The type of permission
   *                         (<code>INSTANCE-ATTACH</code> | <code>EIP-ASSOCIATE</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the
   *             end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *             make another request with the token returned in the output. If this parameter is not
   *             specified, up to 50 results are returned by default. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains the output for DescribeNetworkInterfacePermissions.</p>
 * @public
 */
export interface DescribeNetworkInterfacePermissionsResult {
  /**
   * <p>The network interface permissions.</p>
   * @public
   */
  NetworkInterfacePermissions?: NetworkInterfacePermission[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is
   *                 <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the parameters for DescribeNetworkInterfaces.</p>
 * @public
 */
export interface DescribeNetworkInterfacesRequest {
  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the
   *             end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *             make another request with the token returned in the output. You cannot specify this
   *             parameter and the network interface IDs parameter in the same request. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The network interface IDs.</p>
   *          <p>Default: Describes all your network interfaces.</p>
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>association.allocation-id</code> - The allocation ID returned when you
   *                     allocated the Elastic IP address (IPv4) for your network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.association-id</code> - The association ID returned when the
   *                     network interface was associated with an IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.association.owner-id</code> - The owner ID of the addresses
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.association.public-ip</code> - The association ID returned
   *                     when the network interface was associated with the Elastic IP address
   *                     (IPv4).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.primary</code> - Whether the private IPv4 address is the
   *                     primary IP address associated with the network interface. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.private-ip-address</code> - The private IPv4 addresses
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.ip-owner-id</code> - The owner of the Elastic IP address
   *                     (IPv4) associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.public-ip</code> - The address of the Elastic IP address
   *                     (IPv4) bound to the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.public-dns-name</code> - The public DNS name for the network
   *                     interface (IPv4).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.attach-time</code> - The time that the network interface was
   *                     attached to an instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.attachment-id</code> - The ID of the interface
   *                     attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.delete-on-termination</code> - Indicates whether the
   *                     attachment is deleted when an instance is terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.device-index</code> - The device index to which the network
   *                     interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.instance-id</code> - The ID of the instance to which the
   *                     network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.instance-owner-id</code> - The owner ID of the instance to
   *                     which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.status</code> - The status of the attachment
   *                         (<code>attaching</code> | <code>attached</code> | <code>detaching</code> |
   *                         <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone-id</code> - The ID of the Availability Zone of the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of a security group associated with the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-addresses.ipv6-address</code> - An IPv6 address associated with the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>interface-type</code> - The type of network interface
   *                         (<code>api_gateway_managed</code> |
   *                         <code>aws_codestar_connections_managed</code> | <code>branch</code> |
   *                         <code>ec2_instance_connect_endpoint</code> | <code>efa</code> |
   *                         <code>efa-only</code> | <code>efs</code> |
   *                         <code>evs</code> |
   *                         <code>gateway_load_balancer</code> |
   *                         <code>gateway_load_balancer_endpoint</code> |
   *                         <code>global_accelerator_managed</code> | <code>interface</code> |
   *                         <code>iot_rules_managed</code> | <code>lambda</code> |
   *                         <code>load_balancer</code> | <code>nat_gateway</code> |
   *                         <code>network_load_balancer</code> | <code>quicksight</code> |
   *                         <code>transit_gateway</code> | <code>trunk</code> |
   *                         <code>vpc_endpoint</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mac-address</code> - The MAC address of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code> - The ID of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>operator.managed</code> - A Boolean that indicates whether this is a
   *                     managed network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>operator.principal</code> - The principal that manages the network
   *                     interface. Only valid for managed network interfaces, where <code>managed</code>
   *                     is <code>true</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the network
   *                     interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name</code> - The private DNS name of the network interface
   *                     (IPv4).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - The private IPv4 address or addresses of the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-id</code> - The alias or Amazon Web Services account ID of the
   *                     principal or service that created the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-managed</code> - Indicates whether the network interface is
   *                     being managed by an Amazon Web Services service (for example, Amazon Web Services Management Console, Auto Scaling, and so on).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-dest-check</code> - Indicates whether the network interface
   *                     performs source/destination checking. A value of <code>true</code> means
   *                     checking is enabled, and <code>false</code> means checking is disabled. The
   *                     value must be <code>false</code> for the network interface to perform network
   *                     address translation (NAT) in your VPC. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the network interface. If the network
   *                     interface is not attached to an instance, the status is <code>available</code>;
   *                     if a network interface is attached to an instance the status is
   *                         <code>in-use</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet for the network
   *                     interface.</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC for the network interface.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInterfacesResult {
  /**
   * <p>Information about the network interfaces.</p>
   * @public
   */
  NetworkInterfaces?: NetworkInterface[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is
   *                 <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOutpostLagsRequest {
  /**
   * <p>The IDs of the Outpost LAGs.</p>
   * @public
   */
  OutpostLagIds?: string[] | undefined;

  /**
   * <p>The filters to use for narrowing down the request. The following filters are
   *          supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>service-link-virtual-interface-id</code> - The ID of the service link virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>service-link-virtual-interface-arn</code> - The ARN of the service link virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-id</code> - The Outpost ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Outpost ARN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the service link virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vlan</code> - The ID of the address pool.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-address</code> - The local address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>peer-address</code> - The peer address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>peer-bgp-asn</code> - The peer BGP ASN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-lag-id</code> - The Outpost LAG ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>configuration-state</code> - The configuration state of the service link virtual interface.</p>
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
 * <p>Describes an Outpost link aggregation group (LAG).</p>
 * @public
 */
export interface OutpostLag {
  /**
   * <p>The Amazon Resource Number (ARN) of the Outpost LAG.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The ID of the Outpost LAG owner.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The current state of the Outpost LAG.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The ID of the Outpost LAG.</p>
   * @public
   */
  OutpostLagId?: string | undefined;

  /**
   * <p>The IDs of the local gateway virtual interfaces associated with the Outpost LAG.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceIds?: string[] | undefined;

  /**
   * <p>The service link virtual interface IDs associated with the Outpost LAG.</p>
   * @public
   */
  ServiceLinkVirtualInterfaceIds?: string[] | undefined;

  /**
   * <p>The tags associated with the Outpost LAG.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeOutpostLagsResult {
  /**
   * <p>The Outpost LAGs.</p>
   * @public
   */
  OutpostLags?: OutpostLag[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePlacementGroupsRequest {
  /**
   * <p>The IDs of the placement groups.</p>
   * @public
   */
  GroupIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The names of the placement groups.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>You can specify a name only if the placement group is owned by your
   *                     account.</p>
   *             </li>
   *             <li>
   *                <p>If a placement group is <i>shared</i> with your account,
   *                     specifying the name results in an error. You must use the <code>GroupId</code>
   *                     parameter instead.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GroupNames?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-name</code> - The name of the placement group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-arn</code> - The Amazon Resource Name (ARN) of the placement
   *                     group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spread-level</code> - The spread level for the placement group
   *                         (<code>host</code> | <code>rack</code>). </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the placement group (<code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> |
   *                     <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>strategy</code> - The strategy of the placement group
   *                         (<code>cluster</code> | <code>spread</code> |
   *                     <code>partition</code>).</p>
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
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribePlacementGroupsResult {
  /**
   * <p>Information about the placement groups.</p>
   * @public
   */
  PlacementGroups?: PlacementGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribePrefixListsRequest {
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
   *                   <code>prefix-list-id</code>: The ID of a prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-name</code>: The name of a prefix list.</p>
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
   * <p>One or more prefix list IDs.</p>
   * @public
   */
  PrefixListIds?: string[] | undefined;
}

/**
 * <p>Describes prefixes for Amazon Web Services services.</p>
 * @public
 */
export interface PrefixList {
  /**
   * <p>The IP address range of the Amazon Web Services service.</p>
   * @public
   */
  Cidrs?: string[] | undefined;

  /**
   * <p>The ID of the prefix.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The name of the prefix.</p>
   * @public
   */
  PrefixListName?: string | undefined;
}

/**
 * @public
 */
export interface DescribePrefixListsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>All available prefix lists.</p>
   * @public
   */
  PrefixLists?: PrefixList[] | undefined;
}

/**
 * @public
 */
export interface DescribePrincipalIdFormatRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The type of resource: <code>bundle</code> |
   *             <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *             <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *             <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *             <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *             <code>network-acl</code> | <code>network-acl-association</code> |
   *             <code>network-interface</code> | <code>network-interface-attachment</code> |
   *             <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *             <code>route-table-association</code> | <code>security-group</code> |
   *             <code>snapshot</code> | <code>subnet</code> |
   *             <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *             | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *             <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
   *          </p>
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned NextToken value. </p>
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
 * <p>PrincipalIdFormat description</p>
 * @public
 */
export interface PrincipalIdFormat {
  /**
   * <p>PrincipalIdFormatARN description</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>PrincipalIdFormatStatuses description</p>
   * @public
   */
  Statuses?: IdFormat[] | undefined;
}

/**
 * @public
 */
export interface DescribePrincipalIdFormatResult {
  /**
   * <p>Information about the ID format settings for the ARN.</p>
   * @public
   */
  Principals?: PrincipalIdFormat[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePublicIpv4PoolsRequest {
  /**
   * <p>The IDs of the address pools.</p>
   * @public
   */
  PoolIds?: string[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes an address range of an IPv4 address pool.</p>
 * @public
 */
export interface PublicIpv4PoolRange {
  /**
   * <p>The first IP address in the range.</p>
   * @public
   */
  FirstAddress?: string | undefined;

  /**
   * <p>The last IP address in the range.</p>
   * @public
   */
  LastAddress?: string | undefined;

  /**
   * <p>The number of addresses in the range.</p>
   * @public
   */
  AddressCount?: number | undefined;

  /**
   * <p>The number of available addresses in the range.</p>
   * @public
   */
  AvailableAddressCount?: number | undefined;
}

/**
 * <p>Describes an IPv4 address pool.</p>
 * @public
 */
export interface PublicIpv4Pool {
  /**
   * <p>The ID of the address pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>A description of the address pool.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The address ranges.</p>
   * @public
   */
  PoolAddressRanges?: PublicIpv4PoolRange[] | undefined;

  /**
   * <p>The total number of addresses.</p>
   * @public
   */
  TotalAddressCount?: number | undefined;

  /**
   * <p>The total number of available addresses.</p>
   * @public
   */
  TotalAvailableAddressCount?: number | undefined;

  /**
   * <p>The name of the location from which the address pool is advertised.
   *             A network border group is a unique set of Availability Zones or Local Zones
   *             from where Amazon Web Services advertises public IP addresses.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * <p>Any tags for the address pool.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribePublicIpv4PoolsResult {
  /**
   * <p>Information about the address pools.</p>
   * @public
   */
  PublicIpv4Pools?: PublicIpv4Pool[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegionsRequest {
  /**
   * <p>The names of the Regions. You can specify any Regions, whether they are enabled and disabled for your account.</p>
   * @public
   */
  RegionNames?: string[] | undefined;

  /**
   * <p>Indicates whether to display all Regions, including Regions that are disabled for your account.</p>
   * @public
   */
  AllRegions?: boolean | undefined;

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
   *                   <code>endpoint</code> - The endpoint of the Region (for example, <code>ec2.us-east-1.amazonaws.com</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>opt-in-status</code> - The opt-in status of the Region (<code>opt-in-not-required</code> | <code>opted-in</code> |
   *                  <code>not-opted-in</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region-name</code> - The name of the Region (for example, <code>us-east-1</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes a Region.</p>
 * @public
 */
export interface Region {
  /**
   * <p>The Region opt-in status. The possible values are <code>opt-in-not-required</code>, <code>opted-in</code>, and
   *         <code>not-opted-in</code>.</p>
   * @public
   */
  OptInStatus?: string | undefined;

  /**
   * <p>The name of the Region.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>The Region service endpoint.</p>
   * @public
   */
  Endpoint?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegionsResult {
  /**
   * <p>Information about the Regions.</p>
   * @public
   */
  Regions?: Region[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplaceRootVolumeTasksRequest {
  /**
   * <p>The ID of the root volume replacement task to view.</p>
   * @public
   */
  ReplaceRootVolumeTaskIds?: string[] | undefined;

  /**
   * <p>Filter to use:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance for which the root volume replacement task was created.</p>
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
 * @public
 */
export interface DescribeReplaceRootVolumeTasksResult {
  /**
   * <p>Information about the root volume replacement task.</p>
   * @public
   */
  ReplaceRootVolumeTasks?: ReplaceRootVolumeTask[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the parameters for DescribeReservedInstances.</p>
 * @public
 */
export interface DescribeReservedInstancesRequest {
  /**
   * <p>Describes whether the Reserved Instance is Standard or Convertible.</p>
   * @public
   */
  OfferingClass?: OfferingClassType | undefined;

  /**
   * <p>One or more Reserved Instance IDs.</p>
   *          <p>Default: Describes all your Reserved Instances, or only those otherwise specified.</p>
   * @public
   */
  ReservedInstancesIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making
   *       the request, and provides an error response. If you have the required permissions, the error
   *       response is <code>DryRunOperation</code>. Otherwise, it is
   *       <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone where the Reserved Instance can
   *           be used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone-id</code> - The ID of the Availability Zone where the Reserved
   *           Instance can be used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>duration</code> - The duration of the Reserved Instance (one year or three
   *           years), in seconds (<code>31536000</code> | <code>94608000</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end</code> - The time when the Reserved Instance expires (for example,
   *           2015-08-07T11:54:42.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fixed-price</code> - The purchase price of the Reserved Instance (for example,
   *           9800.0).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type that is covered by the
   *           reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scope</code> - The scope of the Reserved Instance (<code>Region</code> or
   *             <code>Availability Zone</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The Reserved Instance product platform description
   *             (<code>Linux/UNIX</code> | <code>Linux with SQL Server Standard</code> | <code>Linux
   *             with SQL Server Web</code> | <code>Linux with SQL Server Enterprise</code> | <code>SUSE
   *             Linux</code> | <code>Red Hat Enterprise Linux</code> | <code>Red Hat Enterprise Linux
   *             with HA</code> | <code>Windows</code> | <code>Windows with SQL Server Standard</code> |
   *             <code>Windows with SQL Server Web</code> | <code>Windows with SQL Server
   *             Enterprise</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start</code> - The time at which the Reserved Instance purchase request was
   *           placed (for example, 2014-08-07T11:54:42.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Reserved Instance (<code>payment-pending</code>
   *           | <code>active</code> | <code>payment-failed</code> | <code>retired</code>).</p>
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
   *                   <code>usage-price</code> - The usage price of the Reserved Instance, per hour (for
   *           example, 0.84).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01
   *       API version, you only have access to the <code>Medium Utilization</code> Reserved Instance
   *       offering type.</p>
   * @public
   */
  OfferingType?: OfferingTypeValues | undefined;
}

/**
 * <p>Describes a recurring charge.</p>
 * @public
 */
export interface RecurringCharge {
  /**
   * <p>The amount of the recurring charge.</p>
   * @public
   */
  Amount?: number | undefined;

  /**
   * <p>The frequency of the recurring charge.</p>
   * @public
   */
  Frequency?: RecurringChargeFrequency | undefined;
}

/**
 * <p>Describes a Reserved Instance.</p>
 * @public
 */
export interface ReservedInstances {
  /**
   * <p>The currency of the Reserved Instance. It's specified using ISO 4217 standard currency
   *       codes. At this time, the only supported currency is <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The tenancy of the instance.</p>
   * @public
   */
  InstanceTenancy?: Tenancy | undefined;

  /**
   * <p>The offering class of the Reserved Instance.</p>
   * @public
   */
  OfferingClass?: OfferingClassType | undefined;

  /**
   * <p>The Reserved Instance offering type.</p>
   * @public
   */
  OfferingType?: OfferingTypeValues | undefined;

  /**
   * <p>The recurring charge tag assigned to the resource.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * <p>The scope of the Reserved Instance.</p>
   * @public
   */
  Scope?: Scope | undefined;

  /**
   * <p>Any tags assigned to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The ID of the Reserved Instance.</p>
   * @public
   */
  ReservedInstancesId?: string | undefined;

  /**
   * <p>The instance type on which the Reserved Instance can be used.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The date and time the Reserved Instance started.</p>
   * @public
   */
  Start?: Date | undefined;

  /**
   * <p>The time when the Reserved Instance expires.</p>
   * @public
   */
  End?: Date | undefined;

  /**
   * <p>The duration of the Reserved Instance, in seconds.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The usage price of the Reserved Instance, per hour.</p>
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * <p>The purchase price of the Reserved Instance.</p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The number of reservations purchased.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The Reserved Instance product platform description.</p>
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;

  /**
   * <p>The state of the Reserved Instance purchase.</p>
   * @public
   */
  State?: ReservedInstanceState | undefined;
}

/**
 * <p>Contains the output for DescribeReservedInstances.</p>
 * @public
 */
export interface DescribeReservedInstancesResult {
  /**
   * <p>A list of Reserved Instances.</p>
   * @public
   */
  ReservedInstances?: ReservedInstances[] | undefined;
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesListings.</p>
 * @public
 */
export interface DescribeReservedInstancesListingsRequest {
  /**
   * <p>One or more Reserved Instance IDs.</p>
   * @public
   */
  ReservedInstancesId?: string | undefined;

  /**
   * <p>One or more Reserved Instance listing IDs.</p>
   * @public
   */
  ReservedInstancesListingId?: string | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-listing-id</code> - The ID of the Reserved Instances
   *           listing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the Reserved Instance listing (<code>pending</code> |
   *             <code>active</code> | <code>cancelled</code> | <code>closed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - The reason for the status.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Contains the output of DescribeReservedInstancesListings.</p>
 * @public
 */
export interface DescribeReservedInstancesListingsResult {
  /**
   * <p>Information about the Reserved Instance listing.</p>
   * @public
   */
  ReservedInstancesListings?: ReservedInstancesListing[] | undefined;
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesModifications.</p>
 * @public
 */
export interface DescribeReservedInstancesModificationsRequest {
  /**
   * <p>IDs for the submitted modification request.</p>
   * @public
   */
  ReservedInstancesModificationIds?: string[] | undefined;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>client-token</code> - The idempotency token for the modification request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-date</code> - The time when the modification request was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>effective-date</code> - The time when the modification becomes effective.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.reserved-instances-id</code> - The ID for the Reserved Instances
   *           created as part of the modification request. This ID is only available when the status of
   *           the modification is <code>fulfilled</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.availability-zone</code> - The Availability
   *           Zone for the new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.availability-zone-id</code> - The ID of the
   *           Availability Zone for the new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.instance-count </code> - The number of new
   *           Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.instance-type</code> - The instance type of
   *           the new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instances modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-modification-id</code> - The ID of the modification
   *           request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the Reserved Instances modification request
   *             (<code>processing</code> | <code>fulfilled</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - The reason for the status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update-date</code> - The time when the modification request was last updated.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes the configuration settings for the modified Reserved Instances.</p>
 * @public
 */
export interface ReservedInstancesConfiguration {
  /**
   * <p>The Availability Zone for the modified Reserved Instances.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The number of modified Reserved Instances.</p>
   *          <note>
   *             <p>This is a required field for a request.</p>
   *          </note>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The instance type for the modified Reserved Instances.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The network platform of the modified Reserved Instances.</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>Whether the Reserved Instance is applied to instances in a Region or instances in a
   *       specific Availability Zone.</p>
   * @public
   */
  Scope?: Scope | undefined;

  /**
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * <p>Describes the modification request/s.</p>
 * @public
 */
export interface ReservedInstancesModificationResult {
  /**
   * <p>The ID for the Reserved Instances that were created as part of the modification request.
   *       This field is only available when the modification is fulfilled.</p>
   * @public
   */
  ReservedInstancesId?: string | undefined;

  /**
   * <p>The target Reserved Instances configurations supplied as part of the modification
   *       request.</p>
   * @public
   */
  TargetConfiguration?: ReservedInstancesConfiguration | undefined;
}

/**
 * <p>Describes the ID of a Reserved Instance.</p>
 * @public
 */
export interface ReservedInstancesId {
  /**
   * <p>The ID of the Reserved Instance.</p>
   * @public
   */
  ReservedInstancesId?: string | undefined;
}

/**
 * <p>Describes a Reserved Instance modification.</p>
 * @public
 */
export interface ReservedInstancesModification {
  /**
   * <p>A unique, case-sensitive key supplied by the client to ensure that the request is
   *       idempotent. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *       Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The time when the modification request was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The time for the modification to become effective.</p>
   * @public
   */
  EffectiveDate?: Date | undefined;

  /**
   * <p>Contains target configurations along with their corresponding new Reserved Instance
   *       IDs.</p>
   * @public
   */
  ModificationResults?: ReservedInstancesModificationResult[] | undefined;

  /**
   * <p>The IDs of one or more Reserved Instances.</p>
   * @public
   */
  ReservedInstancesIds?: ReservedInstancesId[] | undefined;

  /**
   * <p>A unique ID for the Reserved Instance modification.</p>
   * @public
   */
  ReservedInstancesModificationId?: string | undefined;

  /**
   * <p>The status of the Reserved Instances modification request.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The reason for the status.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The time when the modification request was last updated.</p>
   * @public
   */
  UpdateDate?: Date | undefined;
}

/**
 * <p>Contains the output of DescribeReservedInstancesModifications.</p>
 * @public
 */
export interface DescribeReservedInstancesModificationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *       when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Reserved Instance modification information.</p>
   * @public
   */
  ReservedInstancesModifications?: ReservedInstancesModification[] | undefined;
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesOfferings.</p>
 * @public
 */
export interface DescribeReservedInstancesOfferingsRequest {
  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> can be specified,
   *       but not both.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Include Reserved Instance Marketplace offerings in the response.</p>
   * @public
   */
  IncludeMarketplace?: boolean | undefined;

  /**
   * <p>The instance type that the reservation will cover (for example, <code>m1.small</code>).
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Amazon EC2 instance types</a> in the
   *         <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The maximum duration (in seconds) to filter when searching for offerings.</p>
   *          <p>Default: 94608000 (3 years)</p>
   * @public
   */
  MaxDuration?: number | undefined;

  /**
   * <p>The maximum number of instances to filter when searching for offerings.</p>
   *          <p>Default: 20</p>
   * @public
   */
  MaxInstanceCount?: number | undefined;

  /**
   * <p>The minimum duration (in seconds) to filter when searching for offerings.</p>
   *          <p>Default: 2592000 (1 month)</p>
   * @public
   */
  MinDuration?: number | undefined;

  /**
   * <p>The offering class of the Reserved Instance. Can be <code>standard</code> or
   *         <code>convertible</code>.</p>
   * @public
   */
  OfferingClass?: OfferingClassType | undefined;

  /**
   * <p>The Reserved Instance product platform description. Instances that include <code>(Amazon
   *         VPC)</code> in the description are for use with Amazon VPC.</p>
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;

  /**
   * <p>One or more Reserved Instances offering IDs.</p>
   * @public
   */
  ReservedInstancesOfferingIds?: string[] | undefined;

  /**
   * <p>The ID of the Availability Zone.</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> can be specified,
   *       but not both.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making
   *       the request, and provides an error response. If you have the required permissions, the error
   *       response is <code>DryRunOperation</code>. Otherwise, it is
   *       <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone where the Reserved Instance can be
   *           used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone-id</code> - The ID of the Availability Zone where the Reserved
   *           Instance can be used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>duration</code> - The duration of the Reserved Instance (for example, one year or
   *           three years), in seconds (<code>31536000</code> | <code>94608000</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fixed-price</code> - The purchase price of the Reserved Instance (for example,
   *           9800.0).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type that is covered by the reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>marketplace</code> - Set to <code>true</code> to show only Reserved Instance
   *           Marketplace offerings. When this filter is not used, which is the default behavior, all
   *           offerings from both Amazon Web Services and the Reserved Instance Marketplace are listed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The Reserved Instance product platform description
   *             (<code>Linux/UNIX</code> | <code>Linux with SQL Server Standard</code> | <code>Linux
   *             with SQL Server Web</code> | <code>Linux with SQL Server Enterprise</code> | <code>SUSE
   *             Linux</code> | <code>Red Hat Enterprise Linux</code> | <code>Red Hat Enterprise Linux
   *             with HA</code> | <code>Windows</code> | <code>Windows with SQL Server Standard</code> |
   *             <code>Windows with SQL Server Web</code> | <code>Windows with SQL Server
   *             Enterprise</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-offering-id</code> - The Reserved Instances offering ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scope</code> - The scope of the Reserved Instance (<code>Availability Zone</code> or
   *             <code>Region</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>usage-price</code> - The usage price of the Reserved Instance, per hour (for
   *           example, 0.84).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The tenancy of the instances covered by the reservation. A Reserved Instance with a
   *       tenancy of <code>dedicated</code> is applied to instances that run in a VPC on single-tenant
   *       hardware (i.e., Dedicated Instances).</p>
   *          <p>
   *             <b>Important:</b> The <code>host</code> value cannot be used with
   *       this parameter. Use the <code>default</code> or <code>dedicated</code> values only.</p>
   *          <p>Default: <code>default</code>
   *          </p>
   * @public
   */
  InstanceTenancy?: Tenancy | undefined;

  /**
   * <p>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01
   *       API version, you only have access to the <code>Medium Utilization</code> Reserved Instance
   *       offering type. </p>
   * @public
   */
  OfferingType?: OfferingTypeValues | undefined;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *       results of the initial request can be seen by sending another request with the returned
   *         <code>NextToken</code> value. The maximum is 100.</p>
   *          <p>Default: 100</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes a Reserved Instance offering.</p>
 * @public
 */
export interface PricingDetail {
  /**
   * <p>The number of reservations available for the price.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The price per instance.</p>
   * @public
   */
  Price?: number | undefined;
}

/**
 * <p>Describes a Reserved Instance offering.</p>
 * @public
 */
export interface ReservedInstancesOffering {
  /**
   * <p>The currency of the Reserved Instance offering you are purchasing. It's specified using
   *       ISO 4217 standard currency codes. At this time, the only supported currency is
   *         <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The tenancy of the instance.</p>
   * @public
   */
  InstanceTenancy?: Tenancy | undefined;

  /**
   * <p>Indicates whether the offering is available through the Reserved Instance Marketplace
   *       (resale) or Amazon Web Services. If it's a Reserved Instance Marketplace offering, this is
   *       <code>true</code>.</p>
   * @public
   */
  Marketplace?: boolean | undefined;

  /**
   * <p>If <code>convertible</code> it can be exchanged for Reserved Instances of the same or
   *       higher monetary value, with different configurations. If <code>standard</code>, it is not
   *       possible to perform an exchange.</p>
   * @public
   */
  OfferingClass?: OfferingClassType | undefined;

  /**
   * <p>The Reserved Instance offering type.</p>
   * @public
   */
  OfferingType?: OfferingTypeValues | undefined;

  /**
   * <p>The pricing details of the Reserved Instance offering.</p>
   * @public
   */
  PricingDetails?: PricingDetail[] | undefined;

  /**
   * <p>The recurring charge tag assigned to the resource.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * <p>Whether the Reserved Instance is applied to instances in a Region or an Availability
   *       Zone.</p>
   * @public
   */
  Scope?: Scope | undefined;

  /**
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The ID of the Reserved Instance offering. This is the offering ID used in <a>GetReservedInstancesExchangeQuote</a> to confirm that an exchange can be
   *       made.</p>
   * @public
   */
  ReservedInstancesOfferingId?: string | undefined;

  /**
   * <p>The instance type on which the Reserved Instance can be used.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The duration of the Reserved Instance, in seconds.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The usage price of the Reserved Instance, per hour.</p>
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * <p>The purchase price of the Reserved Instance.</p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The Reserved Instance product platform description.</p>
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;
}

/**
 * <p>Contains the output of DescribeReservedInstancesOfferings.</p>
 * @public
 */
export interface DescribeReservedInstancesOfferingsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *       when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of Reserved Instances offerings.</p>
   * @public
   */
  ReservedInstancesOfferings?: ReservedInstancesOffering[] | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServerEndpointsRequest {
  /**
   * <p>The IDs of the route server endpoints to describe.</p>
   * @public
   */
  RouteServerEndpointIds?: string[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters to apply to the describe request.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServerEndpointsResult {
  /**
   * <p>Information about the described route server endpoints.</p>
   * @public
   */
  RouteServerEndpoints?: RouteServerEndpoint[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServerPeersRequest {
  /**
   * <p>The IDs of the route server peers to describe.</p>
   * @public
   */
  RouteServerPeerIds?: string[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters to apply to the describe request.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServerPeersResult {
  /**
   * <p>Information about the described route server peers.</p>
   * @public
   */
  RouteServerPeers?: RouteServerPeer[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServersRequest {
  /**
   * <p>The IDs of the route servers to describe.</p>
   * @public
   */
  RouteServerIds?: string[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters to apply to the describe request.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServersResult {
  /**
   * <p>Information about the described route servers.</p>
   * @public
   */
  RouteServers?: RouteServer[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRouteTablesRequest {
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
   * <p>The IDs of the route tables.</p>
   * @public
   */
  RouteTableIds?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>association.gateway-id</code> - The ID of the gateway involved in the
   * 		                association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.route-table-association-id</code> - The ID of an association
   *                     ID for the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.route-table-id</code> - The ID of the route table involved in
   *                     the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.subnet-id</code> - The ID of the subnet involved in the
   *                     association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.main</code> - Indicates whether the route table is the main
   *                     route table for the VPC (<code>true</code> | <code>false</code>). Route tables
   *                     that do not have an association ID are not returned in the response.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-table-id</code> - The ID of the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.destination-cidr-block</code> - The IPv4 CIDR range specified in a
   *                     route in the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.destination-ipv6-cidr-block</code> - The IPv6 CIDR range specified in a route in the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.destination-prefix-list-id</code> - The ID (prefix) of the Amazon Web Services
   * 				      service specified in a route in the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.egress-only-internet-gateway-id</code> - The ID of an
   *                     egress-only Internet gateway specified in a route in the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.gateway-id</code> - The ID of a gateway specified in a route in the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.instance-id</code> - The ID of an instance specified in a route in the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.nat-gateway-id</code> - The ID of a NAT gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.transit-gateway-id</code> - The ID of a transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.origin</code> - Describes how the route was created.
   *                         <code>CreateRouteTable</code> indicates that the route was automatically
   *                     created when the route table was created; <code>CreateRoute</code> indicates
   *                     that the route was manually added to the route table;
   *                         <code>EnableVgwRoutePropagation</code> indicates that the route was
   *                     propagated by route propagation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.state</code> - The state of a route in the route table
   *                         (<code>active</code> | <code>blackhole</code>). The blackhole state
   *                     indicates that the route's target isn't available (for example, the specified
   *                     gateway isn't attached to the VPC, the specified NAT instance has been
   *                     terminated, and so on).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.vpc-peering-connection-id</code> - The ID of a VPC peering
   * 		                connection specified in a route in the table.</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC for the route table.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Contains the output of DescribeRouteTables.</p>
 * @public
 */
export interface DescribeRouteTablesResult {
  /**
   * <p>Information about the route tables.</p>
   * @public
   */
  RouteTables?: RouteTable[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes the time period for a Scheduled Instance to start its first schedule. The time period must span less than one day.</p>
 * @public
 */
export interface SlotDateTimeRangeRequest {
  /**
   * <p>The earliest date and time, in UTC, for the Scheduled Instance to start.</p>
   * @public
   */
  EarliestTime: Date | undefined;

  /**
   * <p>The latest date and time, in UTC, for the Scheduled Instance to start. This value must be later than or equal to the earliest date and at most three months in the future.</p>
   * @public
   */
  LatestTime: Date | undefined;
}

/**
 * <p>Describes the recurring schedule for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstanceRecurrenceRequest {
  /**
   * <p>The frequency (<code>Daily</code>, <code>Weekly</code>, or <code>Monthly</code>).</p>
   * @public
   */
  Frequency?: string | undefined;

  /**
   * <p>The interval quantity. The interval unit depends on the value of <code>Frequency</code>. For example, every 2
   *          weeks or every 2 months.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday). You can't specify this value with a daily schedule. If the occurrence is relative to the end of the month, you can specify only a single day.</p>
   * @public
   */
  OccurrenceDays?: number[] | undefined;

  /**
   * <p>Indicates whether the occurrence is relative to the end of the specified week or month. You can't specify this value with a daily schedule.</p>
   * @public
   */
  OccurrenceRelativeToEnd?: boolean | undefined;

  /**
   * <p>The unit for <code>OccurrenceDays</code> (<code>DayOfWeek</code> or <code>DayOfMonth</code>).
   *         This value is required for a monthly schedule.
   *         You can't specify <code>DayOfWeek</code> with a weekly schedule.
   *         You can't specify this value with a daily schedule.</p>
   * @public
   */
  OccurrenceUnit?: string | undefined;
}

/**
 * <p>Contains the parameters for DescribeScheduledInstanceAvailability.</p>
 * @public
 */
export interface DescribeScheduledInstanceAvailabilityRequest {
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
   *                   <code>availability-zone</code> - The Availability Zone (for example, <code>us-west-2a</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example, <code>c4.large</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The time period for the first schedule to start.</p>
   * @public
   */
  FirstSlotStartTimeRange: SlotDateTimeRangeRequest | undefined;

  /**
   * <p>The maximum number of results to return in a single call.
   *          This value can be between 5 and 300. The default value is 300.
   *          To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The maximum available duration, in hours. This value must be greater than <code>MinSlotDurationInHours</code>
   *          and less than 1,720.</p>
   * @public
   */
  MaxSlotDurationInHours?: number | undefined;

  /**
   * <p>The minimum available duration, in hours. The minimum required duration is 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p>
   * @public
   */
  MinSlotDurationInHours?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The schedule recurrence.</p>
   * @public
   */
  Recurrence: ScheduledInstanceRecurrenceRequest | undefined;
}

/**
 * <p>Describes the recurring schedule for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstanceRecurrence {
  /**
   * <p>The frequency (<code>Daily</code>, <code>Weekly</code>, or <code>Monthly</code>).</p>
   * @public
   */
  Frequency?: string | undefined;

  /**
   * <p>The interval quantity. The interval unit depends on the value of <code>frequency</code>. For example, every 2
   *          weeks or every 2 months.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday).</p>
   * @public
   */
  OccurrenceDaySet?: number[] | undefined;

  /**
   * <p>Indicates whether the occurrence is relative to the end of the specified week or month.</p>
   * @public
   */
  OccurrenceRelativeToEnd?: boolean | undefined;

  /**
   * <p>The unit for <code>occurrenceDaySet</code> (<code>DayOfWeek</code> or <code>DayOfMonth</code>).</p>
   * @public
   */
  OccurrenceUnit?: string | undefined;
}

/**
 * <p>Describes a schedule that is available for your Scheduled Instances.</p>
 * @public
 */
export interface ScheduledInstanceAvailability {
  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The number of available instances.</p>
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * <p>The time period for the first schedule to start.</p>
   * @public
   */
  FirstSlotStartTime?: Date | undefined;

  /**
   * <p>The hourly price for a single instance.</p>
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * <p>The instance type. You can specify one of the C3, C4, M4, or R3 instance types.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The maximum term. The only possible value is 365 days.</p>
   * @public
   */
  MaxTermDurationInDays?: number | undefined;

  /**
   * <p>The minimum term. The only possible value is 365 days.</p>
   * @public
   */
  MinTermDurationInDays?: number | undefined;

  /**
   * <p>The network platform.</p>
   * @public
   */
  NetworkPlatform?: string | undefined;

  /**
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>The purchase token. This token expires in two hours.</p>
   * @public
   */
  PurchaseToken?: string | undefined;

  /**
   * <p>The schedule recurrence.</p>
   * @public
   */
  Recurrence?: ScheduledInstanceRecurrence | undefined;

  /**
   * <p>The number of hours in the schedule.</p>
   * @public
   */
  SlotDurationInHours?: number | undefined;

  /**
   * <p>The total number of hours for a single instance for the entire term.</p>
   * @public
   */
  TotalScheduledInstanceHours?: number | undefined;
}

/**
 * <p>Contains the output of DescribeScheduledInstanceAvailability.</p>
 * @public
 */
export interface DescribeScheduledInstanceAvailabilityResult {
  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the available Scheduled Instances.</p>
   * @public
   */
  ScheduledInstanceAvailabilitySet?: ScheduledInstanceAvailability[] | undefined;
}

/**
 * <p>Describes the time period for a Scheduled Instance to start its first schedule.</p>
 * @public
 */
export interface SlotStartTimeRangeRequest {
  /**
   * <p>The earliest date and time, in UTC, for the Scheduled Instance to start.</p>
   * @public
   */
  EarliestTime?: Date | undefined;

  /**
   * <p>The latest date and time, in UTC, for the Scheduled Instance to start.</p>
   * @public
   */
  LatestTime?: Date | undefined;
}

/**
 * <p>Contains the parameters for DescribeScheduledInstances.</p>
 * @public
 */
export interface DescribeScheduledInstancesRequest {
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
   *                   <code>availability-zone</code> - The Availability Zone (for example, <code>us-west-2a</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example, <code>c4.large</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call.
   *          This value can be between 5 and 300. The default value is 100.
   *          To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Scheduled Instance IDs.</p>
   * @public
   */
  ScheduledInstanceIds?: string[] | undefined;

  /**
   * <p>The time period for the first schedule to start.</p>
   * @public
   */
  SlotStartTimeRange?: SlotStartTimeRangeRequest | undefined;
}

/**
 * <p>Describes a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstance {
  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The date when the Scheduled Instance was purchased.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The hourly price for a single instance.</p>
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * <p>The number of instances.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The network platform.</p>
   * @public
   */
  NetworkPlatform?: string | undefined;

  /**
   * <p>The time for the next schedule to start.</p>
   * @public
   */
  NextSlotStartTime?: Date | undefined;

  /**
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>The time that the previous schedule ended or will end.</p>
   * @public
   */
  PreviousSlotEndTime?: Date | undefined;

  /**
   * <p>The schedule recurrence.</p>
   * @public
   */
  Recurrence?: ScheduledInstanceRecurrence | undefined;

  /**
   * <p>The Scheduled Instance ID.</p>
   * @public
   */
  ScheduledInstanceId?: string | undefined;

  /**
   * <p>The number of hours in the schedule.</p>
   * @public
   */
  SlotDurationInHours?: number | undefined;

  /**
   * <p>The end date for the Scheduled Instance.</p>
   * @public
   */
  TermEndDate?: Date | undefined;

  /**
   * <p>The start date for the Scheduled Instance.</p>
   * @public
   */
  TermStartDate?: Date | undefined;

  /**
   * <p>The total number of hours for a single instance for the entire term.</p>
   * @public
   */
  TotalScheduledInstanceHours?: number | undefined;
}

/**
 * <p>Contains the output of DescribeScheduledInstances.</p>
 * @public
 */
export interface DescribeScheduledInstancesResult {
  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the Scheduled Instances.</p>
   * @public
   */
  ScheduledInstanceSet?: ScheduledInstance[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupReferencesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the security groups in your account.</p>
   * @public
   */
  GroupId: string[] | undefined;
}

/**
 * <p>Describes a VPC with a security group that references your security group.</p>
 * @public
 */
export interface SecurityGroupReference {
  /**
   * <p>The ID of your security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The ID of the VPC with the referencing security group.</p>
   * @public
   */
  ReferencingVpcId?: string | undefined;

  /**
   * <p>The ID of the VPC peering connection (if applicable). For more information about security group referencing for peering connections, see
   *           <a href="https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html">Update your security groups to reference peer security groups</a>
   *           in the <i>VPC Peering Guide</i>.</p>
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;

  /**
   * <p>The ID of the transit gateway (if applicable).</p>
   * @public
   */
  TransitGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupReferencesResult {
  /**
   * <p>Information about the VPCs with the referencing security groups.</p>
   * @public
   */
  SecurityGroupReferenceSet?: SecurityGroupReference[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupRulesRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of the security group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>security-group-rule-id</code> - The ID of the security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

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
   * <p>The token returned from a previous paginated request.
   *             Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of
   *             items, make another request with the token returned in the output. This value
   *             can be between 5 and 1000. If this parameter is not specified, then all items are
   *             returned. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupRulesResult {
  /**
   * <p>Information about security group rules.</p>
   * @public
   */
  SecurityGroupRules?: SecurityGroupRule[] | undefined;

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
export interface DescribeSecurityGroupsRequest {
  /**
   * <p>The IDs of the security groups. Required for security groups in a nondefault VPC.</p>
   *          <p>Default: Describes all of your security groups.</p>
   * @public
   */
  GroupIds?: string[] | undefined;

  /**
   * <p>[Default VPC] The names of the security groups. You can specify either
   * 			the security group name or the security group ID.</p>
   *          <p>Default: Describes all of your security groups.</p>
   * @public
   */
  GroupNames?: string[] | undefined;

  /**
   * <p>The token returned from a previous paginated request.
   *             Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *             make another request with the token returned in the output. This value can be between 5 and 1000.
   *             If this parameter is not specified, then all items are returned. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
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
   * <p>The filters. If using multiple filters for rules, the results include security groups for which any combination of rules - not necessarily a single rule - match all filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the security group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.cidr</code> - An IPv4 CIDR block for an outbound
   *                     security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.from-port</code> - For an outbound rule, the
   *                     start of port range for the TCP and UDP protocols, or an ICMP type
   *                     number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.group-id</code> - The ID of a security group
   *                     that has been referenced in an outbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.group-name</code> - The name of a security group
   *                     that is referenced in an outbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.ipv6-cidr</code> - An IPv6 CIDR block for an
   *                     outbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.prefix-list-id</code> - The ID of a prefix list to which a security group rule allows outbound access.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.protocol</code> - The IP protocol for an
   *                     outbound security group rule (<code>tcp</code> | <code>udp</code> |
   *                         <code>icmp</code>, a protocol number, or -1 for all protocols).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.to-port</code> - For an outbound rule, the end
   *                     of port range for the TCP and UDP protocols, or an ICMP code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.user-id</code> - The ID of an Amazon Web Services account that
   *                     has been referenced in an outbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of the security group. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-name</code> - The name of the security group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.cidr</code> - An IPv4 CIDR block for an inbound security
   *                     group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.from-port</code> - For an inbound rule, the start of port
   *                     range for the TCP and UDP protocols, or an ICMP type number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.group-id</code> - The ID of a security group that has been
   *                     referenced in an inbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.group-name</code> - The name of a security group that is
   *                     referenced in an inbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.ipv6-cidr</code> - An IPv6 CIDR block for an inbound security
   *                     group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.prefix-list-id</code> - The ID of a prefix list from which a security group rule allows inbound access.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.protocol</code> - The IP protocol for an inbound security
   *                 group rule (<code>tcp</code> | <code>udp</code> | <code>icmp</code>, a
   *                 protocol number, or -1 for all protocols).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.to-port</code> - For an inbound rule, the end of port range
   *                     for the TCP and UDP protocols, or an ICMP code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.user-id</code> - The ID of an Amazon Web Services account that has been
   *                     referenced in an inbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner of the security group.</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC specified when the security group was created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes a security group.</p>
 * @public
 */
export interface SecurityGroup {
  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The outbound rules associated with the security group.</p>
   * @public
   */
  IpPermissionsEgress?: IpPermission[] | undefined;

  /**
   * <p>Any tags assigned to the security group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the VPC for the security group.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ARN of the security group.</p>
   * @public
   */
  SecurityGroupArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the security group.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The name of the security group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>A description of the security group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The inbound rules associated with the security group.</p>
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupsResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the security groups.</p>
   * @public
   */
  SecurityGroups?: SecurityGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupVpcAssociationsRequest {
  /**
   * <p>Security group VPC association filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-id</code>: The security group ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-owner-id</code>: The group owner ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code>: The state of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code>: The ID of the associated VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-owner-id</code>: The account ID of the VPC owner.</p>
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
 * <p>A security group association with a VPC that you made with <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateSecurityGroupVpc.html">AssociateSecurityGroupVpc</a>.</p>
 * @public
 */
export interface SecurityGroupVpcAssociation {
  /**
   * <p>The association's security group ID.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The association's VPC ID.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the VPC.</p>
   * @public
   */
  VpcOwnerId?: string | undefined;

  /**
   * <p>The association's state.</p>
   * @public
   */
  State?: SecurityGroupVpcAssociationState | undefined;

  /**
   * <p>The association's state reason.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the security group.</p>
   * @public
   */
  GroupOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupVpcAssociationsResult {
  /**
   * <p>The security group VPC associations.</p>
   * @public
   */
  SecurityGroupVpcAssociations?: SecurityGroupVpcAssociation[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServiceLinkVirtualInterfacesRequest {
  /**
   * <p>The IDs of the service link virtual interfaces.</p>
   * @public
   */
  ServiceLinkVirtualInterfaceIds?: string[] | undefined;

  /**
   * <p>The filters to use for narrowing down the request. The following filters are
   *          supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>outpost-lag-id</code> - The ID of the Outpost LAG.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Outpost ARN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the service link virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The  state of the Outpost LAG.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vlan</code> - The ID of the address pool.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>service-link-virtual-interface-id</code> - The ID of the service link virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-id</code> - The ID of the local gateway virtual interface.</p>
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
 * <p>Describes the service link virtual interfaces that establish connectivity between Amazon Web Services Outpost and on-premises networks.</p>
 * @public
 */
export interface ServiceLinkVirtualInterface {
  /**
   * <p>The ID of the service link virtual interface.</p>
   * @public
   */
  ServiceLinkVirtualInterfaceId?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) for the service link virtual interface. </p>
   * @public
   */
  ServiceLinkVirtualInterfaceArn?: string | undefined;

  /**
   * <p>The Outpost ID for the service link virtual interface.</p>
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * <p>The Outpost Amazon Resource Number (ARN) for the service link virtual interface.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the service link virtual interface..</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The IPv4 address assigned to the local gateway virtual interface on the Outpost side.</p>
   * @public
   */
  LocalAddress?: string | undefined;

  /**
   * <p>The IPv4 peer address for the service link virtual interface.</p>
   * @public
   */
  PeerAddress?: string | undefined;

  /**
   * <p>The ASN for the Border Gateway Protocol (BGP) associated with the service link virtual interface.</p>
   * @public
   */
  PeerBgpAsn?: number | undefined;

  /**
   * <p>The virtual local area network for the service link virtual interface.</p>
   * @public
   */
  Vlan?: number | undefined;

  /**
   * <p>The link aggregation group (LAG) ID for the service link virtual interface.</p>
   * @public
   */
  OutpostLagId?: string | undefined;

  /**
   * <p>The tags associated with the service link virtual interface.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The current state of the service link virtual interface.</p>
   * @public
   */
  ConfigurationState?: ServiceLinkVirtualInterfaceConfigurationState | undefined;
}

/**
 * @public
 */
export interface DescribeServiceLinkVirtualInterfacesResult {
  /**
   * <p>Describes the service link virtual interfaces.</p>
   * @public
   */
  ServiceLinkVirtualInterfaces?: ServiceLinkVirtualInterface[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotAttributeRequest {
  /**
   * <p>The snapshot attribute you would like to view.</p>
   * @public
   */
  Attribute: SnapshotAttributeName | undefined;

  /**
   * <p>The ID of the EBS snapshot.</p>
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
 * <p>Describes the user or group to be added or removed from the list of create volume
 *       permissions for a volume.</p>
 * @public
 */
export interface CreateVolumePermission {
  /**
   * <p>The ID of the Amazon Web Services account to be added or removed.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The group to be added or removed. The possible value is <code>all</code>.</p>
   * @public
   */
  Group?: PermissionGroup | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotAttributeResult {
  /**
   * <p>The product codes.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * <p>The ID of the EBS snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The users and groups that have the permissions for creating volumes from the
   *       snapshot.</p>
   * @public
   */
  CreateVolumePermissions?: CreateVolumePermission[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotsRequest {
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
   * <p>Scopes the results to snapshots with the specified owners. You can specify a combination of
   *       Amazon Web Services account IDs, <code>self</code>, and <code>amazon</code>.</p>
   * @public
   */
  OwnerIds?: string[] | undefined;

  /**
   * <p>The IDs of the Amazon Web Services accounts that can create volumes from the snapshot.</p>
   * @public
   */
  RestorableByUserIds?: string[] | undefined;

  /**
   * <p>The snapshot IDs.</p>
   *          <p>Default: Describes the snapshots for which you have create volume permissions.</p>
   * @public
   */
  SnapshotIds?: string[] | undefined;

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
   *                   <code>description</code> - A description of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>encrypted</code> - Indicates whether the snapshot is encrypted
   *             (<code>true</code> | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-alias</code> - The owner alias, from an Amazon-maintained list
   *           (<code>amazon</code>).
   *           This is not the user-configured Amazon Web Services account alias set using the IAM console.
   *           We recommend that you use the related parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner. We recommend that
   *           you use the related parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>progress</code> - The progress of the snapshot, as a percentage (for example,
   *           80%).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-id</code> - The snapshot ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-time</code> - The time stamp when the snapshot was initiated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the snapshot (<code>pending</code> |
   *             <code>completed</code> | <code>error</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>storage-tier</code> - The storage tier of the snapshot (<code>archive</code> |
   *           <code>standard</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transfer-type</code> - The type of operation used to create the snapshot (<code>time-based</code> | <code>standard</code>).</p>
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
   *                   <code>volume-id</code> - The ID of the volume the snapshot is for.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-size</code> - The size of the volume, in GiB.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotsResult {
  /**
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the snapshots.</p>
   * @public
   */
  Snapshots?: Snapshot[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotTierStatusRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>snapshot-id</code> - The snapshot ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-id</code> - The ID of the volume the snapshot is for.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>last-tiering-operation</code> - The state of the last archive or restore action. (<code>archival-in-progress</code> | <code>archival-completed</code> |
   *           <code>archival-failed</code> | <code>permanent-restore-in-progress</code> | <code>permanent-restore-completed</code> | <code>permanent-restore-failed</code> |
   * 		<code>temporary-restore-in-progress</code> | <code>temporary-restore-completed</code> | <code>temporary-restore-failed</code>)</p>
   *             </li>
   *          </ul>
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

  /**
   * <p>The token returned from a previous paginated request.
   *   Pagination continues from the end of the items returned by the previous request.</p>
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
}

/**
 * <p>Provides information about a snapshot's storage tier.</p>
 * @public
 */
export interface SnapshotTierStatus {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The ID of the volume from which the snapshot was created.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>The state of the snapshot.</p>
   * @public
   */
  Status?: SnapshotState | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the snapshot.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The tags that are assigned to the snapshot.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The storage tier in which the snapshot is stored. <code>standard</code> indicates
   *       that the snapshot is stored in the standard snapshot storage tier and that it is ready
   *       for use. <code>archive</code> indicates that the snapshot is currently archived and that
   *       it must be restored before it can be used.</p>
   * @public
   */
  StorageTier?: StorageTier | undefined;

  /**
   * <p>The date and time when the last archive or restore process was started.</p>
   * @public
   */
  LastTieringStartTime?: Date | undefined;

  /**
   * <p>The progress of the last archive or restore process, as a percentage.</p>
   * @public
   */
  LastTieringProgress?: number | undefined;

  /**
   * <p>The status of the last archive or restore process.</p>
   * @public
   */
  LastTieringOperationStatus?: TieringOperationStatus | undefined;

  /**
   * <p>A message describing the status of the last archive or restore process.</p>
   * @public
   */
  LastTieringOperationStatusDetail?: string | undefined;

  /**
   * <p>The date and time when the last archive process was completed.</p>
   * @public
   */
  ArchivalCompleteTime?: Date | undefined;

  /**
   * <p>Only for archived snapshots that are temporarily restored. Indicates the date and
   *       time when a temporarily restored snapshot will be automatically re-archived.</p>
   * @public
   */
  RestoreExpiryTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotTierStatusResult {
  /**
   * <p>Information about the snapshot's storage tier.</p>
   * @public
   */
  SnapshotTierStatuses?: SnapshotTierStatus[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the parameters for DescribeSpotDatafeedSubscription.</p>
 * @public
 */
export interface DescribeSpotDatafeedSubscriptionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *             <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Contains the output of DescribeSpotDatafeedSubscription.</p>
 * @public
 */
export interface DescribeSpotDatafeedSubscriptionResult {
  /**
   * <p>The Spot Instance data feed subscription.</p>
   * @public
   */
  SpotDatafeedSubscription?: SpotDatafeedSubscription | undefined;
}

/**
 * <p>Contains the parameters for DescribeSpotFleetInstances.</p>
 * @public
 */
export interface DescribeSpotFleetInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId: string | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains the output of DescribeSpotFleetInstances.</p>
 * @public
 */
export interface DescribeSpotFleetInstancesResponse {
  /**
   * <p>The running instances. This list is refreshed periodically and might be out of
   *             date.</p>
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
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId?: string | undefined;
}

/**
 * <p>Contains the parameters for DescribeSpotFleetRequestHistory.</p>
 * @public
 */
export interface DescribeSpotFleetRequestHistoryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId: string | undefined;

  /**
   * <p>The type of events to describe. By default, all events are described.</p>
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * <p>The starting date and time for the events, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes an event in the history of the Spot Fleet request.</p>
 * @public
 */
export interface HistoryRecord {
  /**
   * <p>Information about the event.</p>
   * @public
   */
  EventInformation?: EventInformation | undefined;

  /**
   * <p>The event type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>error</code> - An error with the Spot Fleet request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fleetRequestChange</code> - A change in the status or configuration of
   *                     the Spot Fleet request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instanceChange</code> - An instance was launched or terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Information</code> - An informational event.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * <p>The date and time of the event, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * <p>Contains the output of DescribeSpotFleetRequestHistory.</p>
 * @public
 */
export interface DescribeSpotFleetRequestHistoryResponse {
  /**
   * <p>Information about the events in the history of the Spot Fleet request.</p>
   * @public
   */
  HistoryRecords?: HistoryRecord[] | undefined;

  /**
   * <p>The last date and time for the events, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             All records up to this time were retrieved.</p>
   *          <p>If <code>nextToken</code> indicates that there are more items, this value is not
   *             present.</p>
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
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId?: string | undefined;

  /**
   * <p>The starting date and time for the events, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * <p>Contains the parameters for DescribeSpotFleetRequests.</p>
 * @public
 */
export interface DescribeSpotFleetRequestsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the Spot Fleet requests.</p>
   * @public
   */
  SpotFleetRequestIds?: string[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes whether monitoring is enabled.</p>
 * @public
 */
export interface SpotFleetMonitoring {
  /**
   * <p>Enables monitoring for the instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Describes a network interface.</p>
 * @public
 */
export interface InstanceNetworkInterfaceSpecification {
  /**
   * <p>Indicates whether to assign a public IPv4 address to an instance you launch in a VPC.
   *             The public IP address can only be assigned to a network interface for eth0, and can only
   *             be assigned to a new network interface, not an existing one. You cannot specify more
   *             than one network interface in the request. If launching into a default subnet, the
   *             default value is <code>true</code>.</p>
   *          <p>Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses
   * associated with running instances and Elastic IP addresses. For more information, see the <i>Public IPv4 Address</i> tab on the <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing page</a>.</p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * <p>If set to <code>true</code>, the interface is deleted when the instance is terminated.
   *             You can specify <code>true</code> only if creating a new network interface when
   *             launching an instance.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The description of the network interface. Applies only if creating a network interface
   *             when launching an instance.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The position of the network interface in the attachment order. A primary network
   *             interface has a device index of 0.</p>
   *          <p>If you specify a network interface when launching an instance, you must specify the
   *             device index.</p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>The IDs of the security groups for the network interface. Applies only if creating a
   *             network interface when launching an instance.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>A number of IPv6 addresses to assign to the network interface. Amazon EC2 chooses the
   *             IPv6 addresses from the range of the subnet. You cannot specify this option and the
   *             option to assign specific IPv6 addresses in the same request. You can specify this
   *             option if you've specified a minimum number of instances to launch.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * <p>The IPv6 addresses to assign to the network interface. You cannot specify this option
   *             and the option to assign a number of IPv6 addresses in the same request. You cannot
   *             specify this option if you've specified a minimum number of instances to launch.</p>
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   *          <p>If you are creating a Spot Fleet, omit this parameter because you can’t specify a
   *             network interface ID in a launch specification.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The private IPv4 address of the network interface. Applies only if creating a network
   *             interface when launching an instance. You cannot specify this option if you're launching
   *             more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>
   *             request.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>The private IPv4 addresses to assign to the network interface. Only one private IPv4
   *             address can be designated as primary. You cannot specify this option if you're launching
   *             more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>
   *             request.</p>
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;

  /**
   * <p>The number of secondary private IPv4 addresses. You can’t specify this parameter and
   *             also specify a secondary private IP address using the <code>PrivateIpAddress</code>
   *             parameter.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * <p>The ID of the subnet associated with the network interface. Applies only if creating a
   *             network interface when launching an instance.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>Indicates whether to assign a carrier IP address to the network interface.</p>
   *          <p>You can only assign a carrier IP address to a network interface that is in a subnet in
   *             a Wavelength Zone. For more information about carrier IP addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP address</a> in the <i>Amazon Web Services Wavelength Developer
   *                 Guide</i>.</p>
   * @public
   */
  AssociateCarrierIpAddress?: boolean | undefined;

  /**
   * <p>The type of network interface.</p>
   *          <p>If you specify <code>efa-only</code>, do not assign any IP addresses to the network
   *             interface. EFA-only network interfaces do not support IP addresses.</p>
   *          <p>Valid values: <code>interface</code> | <code>efa</code> | <code>efa-only</code>
   *          </p>
   * @public
   */
  InterfaceType?: string | undefined;

  /**
   * <p>The index of the network card. Some instance types support multiple network cards. The
   *             primary network interface must be assigned to network card index 0. The default is
   *             network card index 0.</p>
   *          <p>If you are using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a> to create Spot Instances, omit this parameter because
   *             you can’t specify the network card index when using this API. To specify the network
   *             card index, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * <p>The IPv4 delegated prefixes to be assigned to the network interface. You cannot use
   *             this option if you use the <code>Ipv4PrefixCount</code> option.</p>
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[] | undefined;

  /**
   * <p>The number of IPv4 delegated prefixes to be automatically assigned to the network
   *             interface. You cannot use this option if you use the <code>Ipv4Prefix</code>
   *             option.</p>
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * <p>The IPv6 delegated prefixes to be assigned to the network interface. You cannot use
   *             this option if you use the <code>Ipv6PrefixCount</code> option.</p>
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[] | undefined;

  /**
   * <p>The number of IPv6 delegated prefixes to be automatically assigned to the network
   *             interface. You cannot use this option if you use the <code>Ipv6Prefix</code>
   *             option.</p>
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * <p>The primary IPv6 address of the network interface. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information about primary IPv6 addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   * @public
   */
  PrimaryIpv6?: boolean | undefined;

  /**
   * <p>Specifies the ENA Express settings for the network interface that's attached to
   *             the instance.</p>
   * @public
   */
  EnaSrdSpecification?: EnaSrdSpecificationRequest | undefined;

  /**
   * <p>A security group connection tracking specification that enables you to set the timeout
   *             for connection tracking on an Elastic network interface. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Connection tracking timeouts</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest | undefined;

  /**
   * <p>The number of ENA queues to be created with the instance.</p>
   * @public
   */
  EnaQueueCount?: number | undefined;
}

/**
 * <p>Describes Spot Instance placement.</p>
 * @public
 */
export interface SpotPlacement {
  /**
   * <p>The Availability Zone.</p>
   *          <p>[Spot Fleet only] To specify multiple Availability Zones, separate them using commas;
   *             for example, "us-west-2a, us-west-2b".</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The name of the placement group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a
   *             tenancy of <code>dedicated</code> runs on single-tenant hardware. The <code>host</code>
   *             tenancy is not supported for Spot Instances.</p>
   * @public
   */
  Tenancy?: Tenancy | undefined;
}

/**
 * <p>The tags for a Spot Fleet resource.</p>
 * @public
 */
export interface SpotFleetTagSpecification {
  /**
   * <p>The type of resource. Currently, the only resource type that is supported is
   *                 <code>instance</code>. To tag the Spot Fleet request on creation, use the
   *                 <code>TagSpecifications</code> parameter in <code>
   *                <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetRequestConfigData.html">SpotFleetRequestConfigData</a>
   *             </code>.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Describes the launch specification for one or more Spot Instances. If you include
 *           On-Demand capacity in your fleet request or want to specify an EFA network device, you
 *           can't use <code>SpotFleetLaunchSpecification</code>; you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.</p>
 * @public
 */
export interface SpotFleetLaunchSpecification {
  /**
   * <p>Deprecated.</p>
   * @public
   */
  AddressingType?: string | undefined;

  /**
   * <p>One or more block devices that are mapped to the Spot Instances. You can't specify both
   *             a snapshot ID and an encryption value. This is because only blank volumes can be
   *             encrypted on creation. If a snapshot is the basis for a volume, it is not blank and its
   *             encryption status is used for the volume encryption status.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
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
   * <p>The instance type.</p>
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
   * <p>Enable or disable monitoring for the instances.</p>
   * @public
   */
  Monitoring?: SpotFleetMonitoring | undefined;

  /**
   * <p>The network interfaces.</p>
   *          <note>
   *             <p>
   *                <code>SpotFleetLaunchSpecification</code> does not support Elastic Fabric Adapter (EFA).
   *              You must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a> instead.</p>
   *          </note>
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * <p>The placement information.</p>
   * @public
   */
  Placement?: SpotPlacement | undefined;

  /**
   * <p>The ID of the RAM disk. Some kernels require additional drivers at launch. Check the kernel
   *           requirements for information about whether you need to specify a RAM disk. To find kernel
   *           requirements, refer to the Amazon Web Services Resource Center and search for the kernel ID.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to
   *           increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * <p>The IDs of the subnets in which to launch the instances. To specify multiple subnets, separate
   *          them using commas; for example, "subnet-1234abcdeexample1, subnet-0987cdef6example2".</p>
   *          <p>If you specify a network interface, you must specify any subnets as part of the
   *          network interface instead of using this parameter.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The base64-encoded user data that instances use when starting up. User data is limited to 16 KB.</p>
   * @public
   */
  UserData?: string | undefined;

  /**
   * <p>The number of units provided by the specified instance type. These are the same units
   *         that you chose to set the target capacity in terms of instances, or a performance
   *         characteristic such as vCPUs, memory, or I/O.</p>
   *          <p>If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the
   *         number of instances to the next whole number. If this value is not specified, the default
   *         is 1.</p>
   *          <note>
   *             <p>When specifying weights, the price used in the <code>lowestPrice</code> and
   *            <code>priceCapacityOptimized</code> allocation strategies is per
   *            <i>unit</i> hour (where the instance price is divided by the specified
   *            weight). However, if all the specified weights are above the requested
   *            <code>TargetCapacity</code>, resulting in only 1 instance being launched, the price
   *            used is per <i>instance</i> hour.</p>
   *          </note>
   * @public
   */
  WeightedCapacity?: number | undefined;

  /**
   * <p>The tags to apply during creation.</p>
   * @public
   */
  TagSpecifications?: SpotFleetTagSpecification[] | undefined;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *          </note>
   * @public
   */
  InstanceRequirements?: InstanceRequirements | undefined;

  /**
   * <p>The security groups.</p>
   *          <p>If you specify a network interface, you must specify any security groups as part of
   *         the network interface instead of using this parameter.</p>
   * @public
   */
  SecurityGroups?: GroupIdentifier[] | undefined;
}

/**
 * <p>Describes overrides for a launch template.</p>
 * @public
 */
export interface LaunchTemplateOverrides {
  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to
   *          increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The Availability Zone in which to launch the instances.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The number of units provided by the specified instance type. These are the same units
   *          that you chose to set the target capacity in terms of instances, or a performance
   *          characteristic such as vCPUs, memory, or I/O.</p>
   *          <p>If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the
   *          number of instances to the next whole number. If this value is not specified, the default
   *          is 1.</p>
   *          <note>
   *             <p>When specifying weights, the price used in the <code>lowestPrice</code> and
   *             <code>priceCapacityOptimized</code> allocation strategies is per
   *             <i>unit</i> hour (where the instance price is divided by the specified
   *             weight). However, if all the specified weights are above the requested
   *             <code>TargetCapacity</code>, resulting in only 1 instance being launched, the price
   *             used is per <i>instance</i> hour.</p>
   *          </note>
   * @public
   */
  WeightedCapacity?: number | undefined;

  /**
   * <p>The priority for the launch template override. The highest priority is launched
   *          first.</p>
   *          <p>If <code>OnDemandAllocationStrategy</code> is set to <code>prioritized</code>, Spot Fleet
   *          uses priority to determine which launch template override to use first in fulfilling
   *          On-Demand capacity.</p>
   *          <p>If the Spot <code>AllocationStrategy</code> is set to
   *          <code>capacityOptimizedPrioritized</code>, Spot Fleet uses priority on a best-effort basis
   *          to determine which launch template override to use in fulfilling Spot capacity, but
   *          optimizes for capacity first.</p>
   *          <p>Valid values are whole numbers starting at <code>0</code>. The lower the number, the
   *          higher the priority. If no number is set, the launch template override has the lowest
   *          priority. You can set the same priority for different launch template overrides.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The instance requirements. When you specify instance requirements, Amazon EC2 will identify
   *          instance types with the provided requirements, and then use your On-Demand and Spot
   *          allocation strategies to launch instances from these instance types, in the same way as
   *          when you specify a list of instance types.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *          </note>
   * @public
   */
  InstanceRequirements?: InstanceRequirements | undefined;
}

/**
 * <p>Describes a launch template and overrides.</p>
 * @public
 */
export interface LaunchTemplateConfig {
  /**
   * <p>The launch template to use. Make sure that the launch template does not contain the
   *             <code>NetworkInterfaceId</code> parameter because you can't specify a network interface
   *          ID in a Spot Fleet.</p>
   * @public
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification | undefined;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   * @public
   */
  Overrides?: LaunchTemplateOverrides[] | undefined;
}

/**
 * <p>Describes a Classic Load Balancer.</p>
 * @public
 */
export interface ClassicLoadBalancer {
  /**
   * <p>The name of the load balancer.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Describes the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers
 *             the running Spot Instances with these Classic Load Balancers.</p>
 * @public
 */
export interface ClassicLoadBalancersConfig {
  /**
   * <p>One or more Classic Load Balancers.</p>
   * @public
   */
  ClassicLoadBalancers?: ClassicLoadBalancer[] | undefined;
}

/**
 * <p>Describes a load balancer target group.</p>
 * @public
 */
export interface TargetGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the
 *             running Spot Instances with these target groups.</p>
 * @public
 */
export interface TargetGroupsConfig {
  /**
   * <p>One or more target groups.</p>
   * @public
   */
  TargetGroups?: TargetGroup[] | undefined;
}

/**
 * <p>Describes the Classic Load Balancers and target groups to attach to a Spot Fleet
 *             request.</p>
 * @public
 */
export interface LoadBalancersConfig {
  /**
   * <p>The Classic Load Balancers.</p>
   * @public
   */
  ClassicLoadBalancersConfig?: ClassicLoadBalancersConfig | undefined;

  /**
   * <p>The target groups.</p>
   * @public
   */
  TargetGroupsConfig?: TargetGroupsConfig | undefined;
}

/**
 * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your
 *             Spot Instance is at an elevated risk of being interrupted. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-capacity-rebalance.html">Capacity
 *                 rebalancing</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface SpotCapacityRebalance {
  /**
   * <p>The replacement strategy to use. Only available for fleets of type
   *             <code>maintain</code>.</p>
   *          <p>
   *             <code>launch</code> - Spot Fleet launches a new replacement Spot Instance when a
   *             rebalance notification is emitted for an existing Spot Instance in the fleet. Spot Fleet
   *             does not terminate the instances that receive a rebalance notification. You can
   *             terminate the old instances, or you can leave them running. You are charged for all
   *             instances while they are running. </p>
   *          <p>
   *             <code>launch-before-terminate</code> - Spot Fleet launches a new replacement Spot
   *             Instance when a rebalance notification is emitted for an existing Spot Instance in the
   *             fleet, and then, after a delay that you specify (in <code>TerminationDelay</code>),
   *             terminates the instances that received a rebalance notification.</p>
   * @public
   */
  ReplacementStrategy?: ReplacementStrategy | undefined;

  /**
   * <p>The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot
   *             Instance after launching a new replacement Spot Instance.</p>
   *          <p>Required when <code>ReplacementStrategy</code> is set to <code>launch-before-terminate</code>.</p>
   *          <p>Not valid when <code>ReplacementStrategy</code> is set to <code>launch</code>.</p>
   *          <p>Valid values: Minimum value of <code>120</code> seconds. Maximum value of <code>7200</code> seconds.</p>
   * @public
   */
  TerminationDelay?: number | undefined;
}

/**
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
 *             interrupted.</p>
 * @public
 */
export interface SpotMaintenanceStrategies {
  /**
   * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your
   *             Spot Instance is at an elevated risk of being interrupted. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-capacity-rebalance.html">Capacity
   *                 rebalancing</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  CapacityRebalance?: SpotCapacityRebalance | undefined;
}

/**
 * <p>Describes the configuration of a Spot Fleet request.</p>
 * @public
 */
export interface SpotFleetRequestConfigData {
  /**
   * <p>The strategy that determines how to allocate the target Spot Instance capacity across the Spot Instance
   *             pools specified by the Spot Fleet launch configuration. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-allocation-strategy.html">Allocation
   *                 strategies for Spot Instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <dl>
   *             <dt>priceCapacityOptimized (recommended)</dt>
   *             <dd>
   *                <p>Spot Fleet identifies the pools with
   *                    the highest capacity availability for the number of instances that are launching. This means
   *                    that we will request Spot Instances from the pools that we believe have the lowest chance of interruption
   *                    in the near term. Spot Fleet then requests Spot Instances from the lowest priced of these pools.</p>
   *             </dd>
   *             <dt>capacityOptimized</dt>
   *             <dd>
   *                <p>Spot Fleet identifies the pools with
   *                    the highest capacity availability for the number of instances that are launching. This means
   *                    that we will request Spot Instances from the pools that we believe have the lowest chance of interruption
   *                    in the near term. To give certain
   *           instance types a higher chance of launching first, use
   *           <code>capacityOptimizedPrioritized</code>. Set a priority for each instance type by
   *           using the <code>Priority</code> parameter for <code>LaunchTemplateOverrides</code>. You can
   *           assign the same priority to different <code>LaunchTemplateOverrides</code>. EC2 implements
   *           the priorities on a best-effort basis, but optimizes for capacity first.
   *           <code>capacityOptimizedPrioritized</code> is supported only if your Spot Fleet uses a
   *           launch template. Note that if the <code>OnDemandAllocationStrategy</code> is set to
   *           <code>prioritized</code>, the same priority is applied when fulfilling On-Demand
   *           capacity.</p>
   *             </dd>
   *             <dt>diversified</dt>
   *             <dd>
   *                <p>Spot Fleet requests instances from all of the Spot Instance pools that you
   *           specify.</p>
   *             </dd>
   *             <dt>lowestPrice (not recommended)</dt>
   *             <dd>
   *                <important>
   *                   <p>We don't recommend the <code>lowestPrice</code> allocation strategy because
   *                      it has the highest risk of interruption for your Spot Instances.</p>
   *                </important>
   *                <p>Spot Fleet requests instances from the lowest priced Spot Instance pool that has available
   *                   capacity. If the lowest priced pool doesn't have available capacity, the Spot Instances
   *                   come from the next lowest priced pool that has available capacity. If a pool runs
   *                   out of capacity before fulfilling your desired capacity, Spot Fleet will continue to
   *                   fulfill your request by drawing from the next lowest priced pool. To ensure that
   *                   your desired capacity is met, you might receive Spot Instances from several pools. Because
   *                   this strategy only considers instance price and not capacity availability, it
   *                   might lead to high interruption rates.</p>
   *             </dd>
   *          </dl>
   *          <p>Default: <code>lowestPrice</code>
   *          </p>
   * @public
   */
  AllocationStrategy?: AllocationStrategy | undefined;

  /**
   * <p>The order of the launch template overrides to use in fulfilling On-Demand capacity. If
   *             you specify <code>lowestPrice</code>, Spot Fleet uses price to determine the order, launching
   *             the lowest price first. If you specify <code>prioritized</code>, Spot Fleet uses the priority
   *             that you assign to each Spot Fleet launch template override, launching the highest priority
   *             first. If you do not specify a value, Spot Fleet defaults to <code>lowestPrice</code>.</p>
   * @public
   */
  OnDemandAllocationStrategy?: OnDemandAllocationStrategy | undefined;

  /**
   * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
   *             interrupted.</p>
   * @public
   */
  SpotMaintenanceStrategies?: SpotMaintenanceStrategies | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of your
   *             listings. This helps to avoid duplicate listings. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Indicates whether running instances should be terminated if you decrease the
   *             target capacity of the Spot Fleet request below the current size of the Spot Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   * @public
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | undefined;

  /**
   * <p>The number of units fulfilled by this request compared to the set target capacity. You
   *             cannot set this value.</p>
   * @public
   */
  FulfilledCapacity?: number | undefined;

  /**
   * <p>The number of On-Demand units fulfilled by this request compared to the set target
   *             On-Demand capacity.</p>
   * @public
   */
  OnDemandFulfilledCapacity?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role
   *          that grants the Spot Fleet the permission to request, launch, terminate, and tag instances
   *          on your behalf. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html#spot-fleet-prerequisites">Spot
   *             Fleet prerequisites</a> in the <i>Amazon EC2 User Guide</i>. Spot Fleet can
   *          terminate Spot Instances on your behalf when you cancel its Spot Fleet request using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotFleetRequests">CancelSpotFleetRequests</a> or when the Spot Fleet request expires, if you set
   *             <code>TerminateInstancesWithExpiration</code>.</p>
   * @public
   */
  IamFleetRole: string | undefined;

  /**
   * <p>The launch specifications for the Spot Fleet request. If you specify
   *                 <code>LaunchSpecifications</code>, you can't specify
   *                 <code>LaunchTemplateConfigs</code>. If you include On-Demand capacity in your
   *             request, you must use <code>LaunchTemplateConfigs</code>.</p>
   *          <note>
   *             <p>If an AMI specified in a launch specification is deregistered or disabled, no new
   *             instances can be launched from the AMI. For fleets of type <code>maintain</code>, the
   *             target capacity will not be maintained.</p>
   *          </note>
   * @public
   */
  LaunchSpecifications?: SpotFleetLaunchSpecification[] | undefined;

  /**
   * <p>The launch template and overrides. If you specify <code>LaunchTemplateConfigs</code>,
   *             you can't specify <code>LaunchSpecifications</code>. If you include On-Demand capacity
   *             in your request, you must use <code>LaunchTemplateConfigs</code>.</p>
   * @public
   */
  LaunchTemplateConfigs?: LaunchTemplateConfig[] | undefined;

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
   * <p>The number of units to request for the Spot Fleet. You can choose to set the target
   *             capacity in terms of instances or a performance characteristic that is important to your
   *             application workload, such as vCPUs, memory, or I/O. If the request type is
   *                 <code>maintain</code>, you can specify a target capacity of 0 and add capacity
   *             later.</p>
   * @public
   */
  TargetCapacity: number | undefined;

  /**
   * <p>The number of On-Demand units to request. You can choose to set the target capacity in
   *             terms of instances or a performance characteristic that is important to your application
   *             workload, such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>,
   *             you can specify a target capacity of 0 and add capacity later.</p>
   * @public
   */
  OnDemandTargetCapacity?: number | undefined;

  /**
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay. You
   *             can use the <code>onDemandMaxTotalPrice</code> parameter, the
   *                 <code>spotMaxTotalPrice</code> parameter, or both parameters to ensure that your
   *             fleet cost does not exceed your budget. If you set a maximum price per hour for the
   *             On-Demand Instances and Spot Instances in your request, Spot Fleet will launch instances until it reaches the
   *             maximum amount you're willing to pay. When the maximum amount you're willing to pay is
   *             reached, the fleet stops launching instances even if it hasn’t met the target
   *             capacity.</p>
   *          <note>
   *             <p>If your fleet includes T instances that are configured as <code>unlimited</code>,
   *             and if their average CPU usage exceeds the baseline utilization, you will incur a charge
   *             for surplus credits. The <code>onDemandMaxTotalPrice</code> does not account for surplus
   *             credits, and, if you use surplus credits, your final cost might be higher than what you
   *             specified for <code>onDemandMaxTotalPrice</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits">Surplus credits can incur charges</a> in the
   *                <i>Amazon EC2 User Guide</i>.</p>
   *          </note>
   * @public
   */
  OnDemandMaxTotalPrice?: string | undefined;

  /**
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay. You can use
   *          the <code>spotMaxTotalPrice</code> parameter, the <code>onDemandMaxTotalPrice</code>
   *          parameter, or both parameters to ensure that your fleet cost does not exceed your budget.
   *          If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, Spot Fleet will
   *          launch instances until it reaches the maximum amount you're willing to pay. When the
   *          maximum amount you're willing to pay is reached, the fleet stops launching instances even
   *          if it hasn’t met the target capacity.</p>
   *          <note>
   *             <p>If your fleet includes T instances that are configured as <code>unlimited</code>,
   *             and if their average CPU usage exceeds the baseline utilization, you will incur a charge
   *             for surplus credits. The <code>spotMaxTotalPrice</code> does not account for surplus
   *             credits, and, if you use surplus credits, your final cost might be higher than what you
   *             specified for <code>spotMaxTotalPrice</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits">Surplus credits can incur charges</a> in the
   *                <i>Amazon EC2 User Guide</i>.</p>
   *          </note>
   * @public
   */
  SpotMaxTotalPrice?: string | undefined;

  /**
   * <p>Indicates whether running Spot Instances are terminated when the Spot Fleet request
   *             expires.</p>
   * @public
   */
  TerminateInstancesWithExpiration?: boolean | undefined;

  /**
   * <p>The type of request. Indicates whether the Spot Fleet only requests the target
   *             capacity or also attempts to maintain it. When this value is <code>request</code>, the
   *             Spot Fleet only places the required requests. It does not attempt to replenish Spot
   *             Instances if capacity is diminished, nor does it submit requests in alternative Spot
   *             pools if capacity is not available. When this value is <code>maintain</code>, the Spot
   *             Fleet maintains the target capacity. The Spot Fleet places the required requests to meet
   *             capacity and automatically replenishes any interrupted instances. Default:
   *                 <code>maintain</code>. <code>instant</code> is listed but is not used by Spot
   *             Fleet.</p>
   * @public
   */
  Type?: FleetType | undefined;

  /**
   * <p>The start date and time of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             By default, Amazon EC2 starts fulfilling the request immediately.</p>
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * <p>The end date and time of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             After the end date and time, no new Spot Instance requests are placed or able to fulfill
   *             the request. If no value is specified, the Spot Fleet request remains until you cancel
   *             it.</p>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>Indicates whether Spot Fleet should replace unhealthy instances.</p>
   * @public
   */
  ReplaceUnhealthyInstances?: boolean | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is
   *                 <code>terminate</code>.</p>
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;

  /**
   * <p>One or more Classic Load Balancers and target groups to attach to the Spot Fleet
   *             request. Spot Fleet registers the running Spot Instances with the specified Classic Load
   *             Balancers and target groups.</p>
   *          <p>With Network Load Balancers, Spot Fleet cannot register instances that have the
   *             following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2,
   *             M3, and T1.</p>
   * @public
   */
  LoadBalancersConfig?: LoadBalancersConfig | undefined;

  /**
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Valid
   *             only when Spot <b>AllocationStrategy</b> is set to
   *                 <code>lowest-price</code>. Spot Fleet selects the cheapest Spot pools and evenly
   *             allocates your target Spot capacity across the number of Spot pools that you
   *             specify.</p>
   *          <p>Note that Spot Fleet attempts to draw Spot Instances from the number of pools that you specify on a
   *             best effort basis. If a pool runs out of Spot capacity before fulfilling your target
   *             capacity, Spot Fleet will continue to fulfill your request by drawing from the next cheapest
   *             pool. To ensure that your target capacity is met, you might receive Spot Instances from more than
   *             the number of pools that you specified. Similarly, if most of the pools have no Spot
   *             capacity, you might receive your full target capacity from fewer than the number of
   *             pools that you specified.</p>
   * @public
   */
  InstancePoolsToUseCount?: number | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Context?: string | undefined;

  /**
   * <p>The unit for the target capacity. You can specify this parameter only when
   *          using attribute-based instance type selection.</p>
   *          <p>Default: <code>units</code> (the number of instances)</p>
   * @public
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | undefined;

  /**
   * <p>The key-value pair for tagging the Spot Fleet request on creation. The value for
   *                 <code>ResourceType</code> must be <code>spot-fleet-request</code>, otherwise the
   *             Spot Fleet request fails. To tag instances at launch, specify the tags in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template">launch
   *                 template</a> (valid only if you use <code>LaunchTemplateConfigs</code>) or in
   *             the <code>
   *                <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetTagSpecification.html">SpotFleetTagSpecification</a>
   *             </code> (valid only if you use
   *                 <code>LaunchSpecifications</code>). For information about tagging after launch, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources">Tag your resources</a>.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * <p>Describes a Spot Fleet request.</p>
 * @public
 */
export interface SpotFleetRequestConfig {
  /**
   * <p>The progress of the Spot Fleet request.
   *           If there is an error, the status is <code>error</code>.
   *           After all requests are placed, the status is <code>pending_fulfillment</code>.
   *           If the size of the fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>.
   *           If the size of the fleet is decreased, the status is <code>pending_termination</code>
   *           while Spot Instances are terminating.</p>
   * @public
   */
  ActivityStatus?: ActivityStatus | undefined;

  /**
   * <p>The creation date and time of the request.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The configuration of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestConfig?: SpotFleetRequestConfigData | undefined;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId?: string | undefined;

  /**
   * <p>The state of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestState?: BatchState | undefined;

  /**
   * <p>The tags for a Spot Fleet resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the output of DescribeSpotFleetRequests.</p>
 * @public
 */
export interface DescribeSpotFleetRequestsResponse {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the configuration of your Spot Fleet.</p>
   * @public
   */
  SpotFleetRequestConfigs?: SpotFleetRequestConfig[] | undefined;
}

/**
 * <p>Contains the parameters for DescribeSpotInstanceRequests.</p>
 * @public
 */
export interface DescribeSpotInstanceRequestsRequest {
  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the Spot Instance requests.</p>
   * @public
   */
  SpotInstanceRequestIds?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone-group</code> - The Availability Zone group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The time stamp when the Spot Instance request was
   *                     created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fault-code</code> - The fault code related to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fault-message</code> - The fault message related to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance that fulfilled the
   *                     request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-group</code> - The Spot Instance launch group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.delete-on-termination</code> - Indicates
   *                     whether the EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.device-name</code> - The device name for the
   *                     volume in the block device mapping (for example, <code>/dev/sdh</code> or
   *                         <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.snapshot-id</code> - The ID of the snapshot
   *                     for the EBS volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.volume-size</code> - The size of the EBS
   *                     volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.volume-type</code> - The type of EBS volume:
   *                     <code>gp2</code> or <code>gp3</code> for General Purpose SSD, <code>io1</code>
   *                     or <code>io2</code> for Provisioned IOPS SSD, <code>st1</code> for Throughput
   *                     Optimized HDD, <code>sc1</code> for Cold HDD, or <code>standard</code> for
   *                     Magnetic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.group-id</code> - The ID of the security group for the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.group-name</code> - The name of the security group for the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.image-id</code> - The ID of the AMI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.instance-type</code> - The type of instance (for example,
   *                         <code>m3.medium</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.key-name</code> - The name of the key pair the instance launched
   *                     with.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.monitoring-enabled</code> - Whether detailed monitoring is
   *                     enabled for the Spot Instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launched-availability-zone</code> - The Availability Zone in which the
   *                     request is launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launched-availability-zone-id</code> - The ID of the Availability Zone
   *                     in which the request is launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.primary</code> - Indicates whether the IP
   *                     address is the primary private IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.delete-on-termination</code> - Indicates whether the
   *                     network interface is deleted when the instance is terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.description</code> - A description of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.device-index</code> - The index of the device for the
   *                     network interface attachment on the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.group-id</code> - The ID of the security group
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.network-interface-id</code> - The ID of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.private-ip-address</code> - The primary private IP
   *                     address of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.subnet-id</code> - The ID of the subnet for the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The product description associated with the
   *                     instance (<code>Linux/UNIX</code> | <code>Windows</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-instance-request-id</code> - The Spot Instance request ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-price</code> - The maximum hourly price for any Spot Instance
   *                     launched to fulfill the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Spot Instance request (<code>open</code>
   *                     | <code>active</code> | <code>closed</code> | <code>cancelled</code> |
   *                         <code>failed</code>). Spot request status information can help you track
   *                     your Amazon EC2 Spot Instance requests. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html">Spot
   *                         request status</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-code</code> - The short code describing the most recent
   *                     evaluation of your Spot Instance request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - The message explaining the status of the Spot
   *                     Instance request.</p>
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
   *                   <code>type</code> - The type of Spot Instance request (<code>one-time</code> |
   *                         <code>persistent</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>valid-from</code> - The start date of the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>valid-until</code> - The end date of the request.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes the monitoring of an instance.</p>
 * @public
 */
export interface RunInstancesMonitoringEnabled {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>Describes the launch specification for an instance.</p>
 * @public
 */
export interface LaunchSpecification {
  /**
   * <p>The base64-encoded user data that instances use when starting up. User data is limited to 16 KB.</p>
   * @public
   */
  UserData?: string | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  AddressingType?: string | undefined;

  /**
   * <p>The block device mapping entries.</p>
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
   * <p>The IDs of the security groups.</p>
   * @public
   */
  SecurityGroups?: GroupIdentifier[] | undefined;

  /**
   * <p>Describes the monitoring of an instance.</p>
   * @public
   */
  Monitoring?: RunInstancesMonitoringEnabled | undefined;
}

/**
 * <p>Describes the status of a Spot Instance request.</p>
 * @public
 */
export interface SpotInstanceStatus {
  /**
   * <p>The status code. For a list of status codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html#spot-instance-request-status-understand">Spot request status codes</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The description for the status code.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The date and time of the most recent status update, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  UpdateTime?: Date | undefined;
}

/**
 * <p>Describes a Spot Instance request.</p>
 * @public
 */
export interface SpotInstanceRequest {
  /**
   * <p>Deprecated.</p>
   * @public
   */
  ActualBlockHourlyPrice?: string | undefined;

  /**
   * <p>The Availability Zone group. If you specify the same Availability Zone group for all Spot Instance requests, all Spot Instances are launched in the same Availability Zone.</p>
   * @public
   */
  AvailabilityZoneGroup?: string | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * <p>The date and time when the Spot Instance request was created, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The fault codes for the Spot Instance request, if any.</p>
   * @public
   */
  Fault?: SpotInstanceStateFault | undefined;

  /**
   * <p>The instance ID, if an instance has been launched to fulfill the Spot Instance request.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and terminate together.</p>
   * @public
   */
  LaunchGroup?: string | undefined;

  /**
   * <p>Additional information for launching instances.</p>
   * @public
   */
  LaunchSpecification?: LaunchSpecification | undefined;

  /**
   * <p>The Availability Zone in which the request is launched.</p>
   *          <p>Either <code>launchedAvailabilityZone</code> or <code>launchedAvailabilityZoneId</code> can be specified, but not both</p>
   * @public
   */
  LaunchedAvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone in which the request is launched.</p>
   *          <p>Either <code>launchedAvailabilityZone</code> or <code>launchedAvailabilityZoneId</code> can be specified, but not both</p>
   * @public
   */
  LaunchedAvailabilityZoneId?: string | undefined;

  /**
   * <p>The product description associated with the Spot Instance.</p>
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;

  /**
   * <p>The ID of the Spot Instance request.</p>
   * @public
   */
  SpotInstanceRequestId?: string | undefined;

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
   * <p>The state of the Spot Instance request. Spot request status information helps track your Spot
   *             Instance requests. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html">Spot request status</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  State?: SpotInstanceState | undefined;

  /**
   * <p>The status code and status message describing the Spot Instance request.</p>
   * @public
   */
  Status?: SpotInstanceStatus | undefined;

  /**
   * <p>Any tags assigned to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Spot Instance request type.</p>
   * @public
   */
  Type?: SpotInstanceType | undefined;

  /**
   * <p>The start date of the request, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             The request becomes active at this date and time.</p>
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   *          <ul>
   *             <li>
   *                <p>For a persistent request, the request remains active until the <code>validUntil</code> date
   *                     and time is reached. Otherwise, the request remains active until you cancel it.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>For a one-time request, the request remains active until all instances launch,
   *                     the request is canceled, or the <code>validUntil</code> date and time is reached. By default, the
   *                     request is valid for 7 days from the date the request was created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;
}

/**
 * <p>Contains the output of DescribeSpotInstanceRequests.</p>
 * @public
 */
export interface DescribeSpotInstanceRequestsResult {
  /**
   * <p>The Spot Instance requests.</p>
   * @public
   */
  SpotInstanceRequests?: SpotInstanceRequest[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the parameters for DescribeSpotPriceHistory.</p>
 * @public
 */
export interface DescribeSpotPriceHistoryRequest {
  /**
   * <p>Filters the results by the specified ID of the Availability Zone.</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> can be specified, but not both</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *             <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The date and time, up to the past 90 days, from which to start retrieving the price
   *             history data, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time, up to the current date, from which to stop retrieving the price
   *             history data, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Filters the results by the specified instance types.</p>
   * @public
   */
  InstanceTypes?: _InstanceType[] | undefined;

  /**
   * <p>Filters the results by the specified basic product descriptions.</p>
   * @public
   */
  ProductDescriptions?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone for which prices should
   *                     be returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone-id</code> - The ID of the Availability Zone for which
   *                     prices should be returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The type of instance (for example,
   *                     <code>m3.medium</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The product description for the Spot price
   *                     (<code>Linux/UNIX</code> | <code>Red Hat Enterprise Linux</code> |
   *                     <code>SUSE Linux</code> | <code>Windows</code> | <code>Linux/UNIX (Amazon
   *                         VPC)</code> | <code>Red Hat Enterprise Linux (Amazon VPC)</code> |
   *                     <code>SUSE Linux (Amazon VPC)</code> | <code>Windows (Amazon
   *                         VPC)</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-price</code> - The Spot price. The value must match exactly (or use
   *                     wildcards; greater than or less than comparison is not supported).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>timestamp</code> - The time stamp of the Spot price history, in UTC format
   *                     (for example, <i>ddd MMM dd
   *                         HH</i>:<i>mm</i>:<i>ss</i> UTC
   *                         <i>YYYY</i>). You can use wildcards (<code>*</code> and
   *                         <code>?</code>). Greater than or less than comparison is not
   *                     supported.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Filters the results by the specified Availability Zone.</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> can be specified, but not both</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

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
}

/**
 * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
 *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
 *          <important>
 *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
 *          </important>
 * @public
 */
export interface SpotPrice {
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
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>A general description of the AMI.</p>
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;

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
   * <p>The date and time the request was created, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * <p>Contains the output of DescribeSpotPriceHistory.</p>
 * @public
 */
export interface DescribeSpotPriceHistoryResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is
   *             an empty string (<code>""</code>) or <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The historical Spot prices.</p>
   * @public
   */
  SpotPriceHistory?: SpotPrice[] | undefined;
}

/**
 * @public
 */
export interface DescribeStaleSecurityGroupsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *           make another request with the token returned in the output. For more information,
   *           see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;
}

/**
 * <p>Describes a stale rule in a security group.</p>
 * @public
 */
export interface StaleIpPermission {
  /**
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *           If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>, <code>icmpv6</code>) or number
   *           (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers)</a>.</p>
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * <p>The IP ranges. Not applicable for stale security group rules.</p>
   * @public
   */
  IpRanges?: string[] | undefined;

  /**
   * <p>The prefix list IDs. Not applicable for stale security group rules.</p>
   * @public
   */
  PrefixListIds?: string[] | undefined;

  /**
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *           If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes).</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>The security group pairs. Returns the ID of the referenced security group and VPC, and the ID and status of the VPC peering connection.</p>
   * @public
   */
  UserIdGroupPairs?: UserIdGroupPair[] | undefined;
}

/**
 * <p>Describes a stale security group (a security group that contains stale rules).</p>
 * @public
 */
export interface StaleSecurityGroup {
  /**
   * <p>The description of the security group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The name of the security group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>Information about the stale inbound rules in the security group.</p>
   * @public
   */
  StaleIpPermissions?: StaleIpPermission[] | undefined;

  /**
   * <p>Information about the stale outbound rules in the security group.</p>
   * @public
   */
  StaleIpPermissionsEgress?: StaleIpPermission[] | undefined;

  /**
   * <p>The ID of the VPC for the security group.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStaleSecurityGroupsResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the stale security groups.</p>
   * @public
   */
  StaleSecurityGroupSet?: StaleSecurityGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeStoreImageTasksRequest {
  /**
   * <p>The AMI IDs for which to show progress. Up to 20 AMI IDs can be included in a
   *       request.</p>
   * @public
   */
  ImageIds?: string[] | undefined;

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
   *                   <code>task-state</code> - Returns tasks in a certain state (<code>InProgress</code> |
   *           <code>Completed</code> | <code>Failed</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bucket</code> - Returns task information for tasks that targeted a specific
   *           bucket. For the filter value, specify the bucket name.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>When you specify the <code>ImageIds</code> parameter, any filters that you specify are
   *         ignored. To use the filters, you must remove the <code>ImageIds</code> parameter.</p>
   *          </note>
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
   *          <p>You cannot specify this parameter and the <code>ImageIds</code> parameter in the same
   *       call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The information about the AMI store task, including the progress of the task.</p>
 * @public
 */
export interface StoreImageTaskResult {
  /**
   * <p>The ID of the AMI that is being stored.</p>
   * @public
   */
  AmiId?: string | undefined;

  /**
   * <p>The time the task started.</p>
   * @public
   */
  TaskStartTime?: Date | undefined;

  /**
   * <p>The name of the Amazon S3 bucket that contains the stored AMI object.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>The name of the stored AMI object in the bucket.</p>
   * @public
   */
  S3objectKey?: string | undefined;

  /**
   * <p>The progress of the task as a percentage.</p>
   * @public
   */
  ProgressPercentage?: number | undefined;

  /**
   * <p>The state of the store task (<code>InProgress</code>, <code>Completed</code>, or
   *       <code>Failed</code>).</p>
   * @public
   */
  StoreTaskState?: string | undefined;

  /**
   * <p>If the tasks fails, the reason for the failure is returned. If the task succeeds,
   *       <code>null</code> is returned.</p>
   * @public
   */
  StoreTaskFailureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStoreImageTasksResult {
  /**
   * <p>The information about the AMI store tasks.</p>
   * @public
   */
  StoreImageTaskResults?: StoreImageTaskResult[] | undefined;

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
export interface DescribeSubnetsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone for the subnet. You can also use
   *                     <code>availabilityZone</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone-id</code> - The ID of the Availability Zone for the subnet.
   *                     You can also use <code>availabilityZoneId</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available-ip-address-count</code> - The number of IPv4 addresses in the
   *                     subnet that are available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cidr-block</code> - The IPv4 CIDR block of the subnet. The CIDR block
   *                     you specify must exactly match the subnet's CIDR block for information to be
   *                     returned for the subnet. You can also use <code>cidr</code> or
   *                         <code>cidrBlock</code> as the filter names.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>customer-owned-ipv4-pool</code> - The customer-owned IPv4 address pool
   *                     associated with the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default-for-az</code> - Indicates whether this is the default subnet for
   *                     the Availability Zone (<code>true</code> | <code>false</code>). You can also use
   *                         <code>defaultForAz</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>enable-dns64</code> - Indicates whether DNS queries made to the
   *                     Amazon-provided DNS Resolver in this subnet should return synthetic IPv6
   *                     addresses for IPv4-only destinations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>enable-lni-at-device-index</code> - Indicates the device position for
   *                     local network interfaces in this subnet. For example, <code>1</code> indicates
   *                     local network interfaces in this subnet are the secondary network interface
   *                     (eth1). </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-cidr-block-association.ipv6-cidr-block</code> - An IPv6 CIDR
   *                     block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-cidr-block-association.association-id</code> - An association ID
   *                     for an IPv6 CIDR block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-cidr-block-association.state</code> - The state of an IPv6 CIDR
   *                     block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-native</code> - Indicates whether this is an IPv6 only subnet
   *                         (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>map-customer-owned-ip-on-launch</code> - Indicates whether a network
   *                     interface created in this subnet (including a network interface created by <a>RunInstances</a>) receives a customer-owned IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>map-public-ip-on-launch</code> - Indicates whether instances launched in
   *                     this subnet receive a public IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the
   *                     subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options-on-launch.hostname-type</code> - The type of
   *                     hostname to assign to instances in the subnet at launch. For IPv4-only and
   *                     dual-stack (IPv4 and IPv6) subnets, an instance DNS name can be based on the
   *                     instance IPv4 address (ip-name) or the instance ID (resource-name). For IPv6
   *                     only subnets, an instance DNS name must be based on the instance ID
   *                     (resource-name).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options-on-launch.enable-resource-name-dns-a-record</code>
   *                     - Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *                     records.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options-on-launch.enable-resource-name-dns-aaaa-record</code>
   *                     - Indicates whether to respond to DNS queries for instance hostnames with DNS
   *                     AAAA records.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the subnet (<code>pending</code> | <code>available</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-arn</code> - The Amazon Resource Name (ARN) of the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC for the subnet.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The IDs of the subnets.</p>
   *          <p>Default: Describes all your subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

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
}

/**
 * @public
 */
export interface DescribeSubnetsResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the subnets.</p>
   * @public
   */
  Subnets?: Subnet[] | undefined;
}

/**
 * @public
 */
export interface DescribeTagsRequest {
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
   *                   <code>key</code> - The tag key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type. For a list of possible values, see
   *                <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TagSpecification.html">TagSpecification</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of the tag. For example,
   *                 specify "tag:Owner" for the filter name and "TeamA" for the filter value to find
   *                 resources with the tag "Owner=TeamA".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>value</code> - The tag value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return for this request. This value can be between 5 and 1000.
   *          To get the next page of items, make another request with the token returned in the output.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request.
   *          Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes a tag.</p>
 * @public
 */
export interface TagDescription {
  /**
   * <p>The tag key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The tag value.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagsResult {
  /**
   * <p>The token to include in another request to get the next page of items.
   *          This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: TagDescription[] | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFilterRulesRequest {
  /**
   * <p>Traffic filter rule IDs.</p>
   * @public
   */
  TrafficMirrorFilterRuleIds?: string[] | undefined;

  /**
   * <p>Traffic filter ID.</p>
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Traffic mirror filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-filter-rule-id</code>: The ID of the Traffic Mirror rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-filter-id</code>: The ID of the filter that this rule is associated with.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rule-number</code>: The number of the Traffic Mirror rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rule-action</code>: The action taken on the filtered traffic. Possible actions are <code>accept</code> and <code>reject</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-direction</code>: The traffic direction. Possible directions are <code>ingress</code> and <code>egress</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>protocol</code>: The protocol, for example UDP, assigned to the Traffic Mirror rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-cidr-block</code>: The source CIDR block assigned to the Traffic Mirror rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>destination-cidr-block</code>: The destination CIDR block assigned to the Traffic Mirror rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>description</code>: The description of the Traffic Mirror rule.</p>
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
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFilterRulesResult {
  /**
   * <p>Traffic mirror rules.</p>
   * @public
   */
  TrafficMirrorFilterRules?: TrafficMirrorFilterRule[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFiltersRequest {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code>: The Traffic Mirror filter description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-filter-id</code>: The ID of the Traffic Mirror filter.</p>
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
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFiltersResult {
  /**
   * <p>Information about one or more Traffic Mirror filters.</p>
   * @public
   */
  TrafficMirrorFilters?: TrafficMirrorFilter[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorSessionsRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   * @public
   */
  TrafficMirrorSessionIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code>: The Traffic Mirror session description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code>: The ID of the Traffic Mirror session network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The ID of the account that owns the Traffic Mirror session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>packet-length</code>: The assigned number of packets to mirror. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>session-number</code>: The assigned session number. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-filter-id</code>: The ID of the Traffic Mirror filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-session-id</code>: The ID of the Traffic Mirror session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-target-id</code>: The ID of the Traffic Mirror target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>virtual-network-id</code>: The virtual network ID of the Traffic Mirror session.</p>
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
}

/**
 * @public
 */
export interface DescribeTrafficMirrorSessionsResult {
  /**
   * <p>Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.</p>
   * @public
   */
  TrafficMirrorSessions?: TrafficMirrorSession[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorTargetsRequest {
  /**
   * <p>The ID of the Traffic Mirror targets.</p>
   * @public
   */
  TrafficMirrorTargetIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code>: The Traffic Mirror target description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code>: The ID of the Traffic Mirror session network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-load-balancer-arn</code>: The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The ID of the account that owns the Traffic Mirror session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-target-id</code>: The ID of the Traffic Mirror target.</p>
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
}

/**
 * @public
 */
export interface DescribeTrafficMirrorTargetsResult {
  /**
   * <p>Information about one or more Traffic Mirror targets.</p>
   * @public
   */
  TrafficMirrorTargets?: TrafficMirrorTarget[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayAttachmentsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   * @public
   */
  TransitGatewayAttachmentIds?: string[] | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>association.state</code> - The state of the association (<code>associating</code> | <code>associated</code> |
   *                <code>disassociating</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.transit-gateway-route-table-id</code> - The ID of the route table for the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-owner-id</code> - The ID of the Amazon Web Services account that owns the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type. Valid values are <code>vpc</code>
   *                     | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>peering</code>
   *                     | <code>connect</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment. Valid values are <code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>failing</code> | <code>initiatingRequest</code> | <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-owner-id</code> - The ID of the Amazon Web Services account that owns the transit gateway.</p>
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
 * <p>Describes an association.</p>
 * @public
 */
export interface TransitGatewayAttachmentAssociation {
  /**
   * <p>The ID of the route table for the transit gateway.</p>
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  State?: TransitGatewayAssociationState | undefined;
}

/**
 * <p>Describes an attachment between a resource and a transit gateway.</p>
 * @public
 */
export interface TransitGatewayAttachment {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   * @public
   */
  TransitGatewayOwnerId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The attachment state. Note that the <code>initiating</code> state has been deprecated.</p>
   * @public
   */
  State?: TransitGatewayAttachmentState | undefined;

  /**
   * <p>The association.</p>
   * @public
   */
  Association?: TransitGatewayAttachmentAssociation | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The tags for the attachment.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayAttachmentsResult {
  /**
   * <p>Information about the attachments.</p>
   * @public
   */
  TransitGatewayAttachments?: TransitGatewayAttachment[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayConnectPeersRequest {
  /**
   * <p>The IDs of the Connect peers.</p>
   * @public
   */
  TransitGatewayConnectPeerIds?: string[] | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Connect peer (<code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> |
   *                     <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-connect-peer-id</code> - The ID of the Connect peer.</p>
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
export interface DescribeTransitGatewayConnectPeersResult {
  /**
   * <p>Information about the Connect peers.</p>
   * @public
   */
  TransitGatewayConnectPeers?: TransitGatewayConnectPeer[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayConnectsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   * @public
   */
  TransitGatewayAttachmentIds?: string[] | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>options.protocol</code> - The tunnel protocol (<code>gre</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment (<code>initiating</code> |
   *                         <code>initiatingRequest</code> | <code>pendingAcceptance</code> |
   *                         <code>rollingBack</code> | <code>pending</code> | <code>available</code> |
   *                         <code>modifying</code> | <code>deleting</code> | <code>deleted</code> |
   *                         <code>failed</code> | <code>rejected</code> | <code>rejecting</code> |
   *                         <code>failing</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the
   *                     Connect attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transport-transit-gateway-attachment-id</code> - The ID of the transit gateway attachment from which the Connect attachment was created.</p>
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
export interface DescribeTransitGatewayConnectsResult {
  /**
   * <p>Information about the Connect attachments.</p>
   * @public
   */
  TransitGatewayConnects?: TransitGatewayConnect[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayMeteringPoliciesRequest {
  /**
   * <p>The IDs of the transit gateway metering policies to describe.</p>
   * @public
   */
  TransitGatewayMeteringPolicyIds?: string[] | undefined;

  /**
   * <p>One or more filters to apply when describing transit gateway metering policies.</p>
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
export interface DescribeTransitGatewayMeteringPoliciesResult {
  /**
   * <p>Information about the transit gateway metering policies.</p>
   * @public
   */
  TransitGatewayMeteringPolicies?: TransitGatewayMeteringPolicy[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayMulticastDomainsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainIds?: string[] | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the transit gateway multicast domain. Valid values are <code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-multicast-domain-id</code> - The ID of the transit gateway multicast domain.</p>
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
export interface DescribeTransitGatewayMulticastDomainsResult {
  /**
   * <p>Information about the transit gateway multicast domains.</p>
   * @public
   */
  TransitGatewayMulticastDomains?: TransitGatewayMulticastDomain[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayPeeringAttachmentsRequest {
  /**
   * <p>One or more IDs of the transit gateway peering attachments.</p>
   * @public
   */
  TransitGatewayAttachmentIds?: string[] | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-owner-id</code> - The ID of your Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>remote-owner-id</code> - The ID of the Amazon Web Services account in the remote Region that owns the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the peering attachment. Valid values are <code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>failing</code> | <code>initiatingRequest</code> | <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
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
export interface DescribeTransitGatewayPeeringAttachmentsResult {
  /**
   * <p>The transit gateway peering attachments.</p>
   * @public
   */
  TransitGatewayPeeringAttachments?: TransitGatewayPeeringAttachment[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayPolicyTablesRequest {
  /**
   * <p>The IDs of the transit gateway policy tables.</p>
   * @public
   */
  TransitGatewayPolicyTableIds?: string[] | undefined;

  /**
   * <p>The filters associated with the transit gateway policy table.</p>
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
export interface DescribeTransitGatewayPolicyTablesResult {
  /**
   * <p>Describes the transit gateway policy tables.</p>
   * @public
   */
  TransitGatewayPolicyTables?: TransitGatewayPolicyTable[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayRouteTableAnnouncementsRequest {
  /**
   * <p>The IDs of the transit gateway route tables that are being advertised.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementIds?: string[] | undefined;

  /**
   * <p>The filters associated with the transit gateway policy table.</p>
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
export interface DescribeTransitGatewayRouteTableAnnouncementsResult {
  /**
   * <p>Describes the transit gateway route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncements?: TransitGatewayRouteTableAnnouncement[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayRouteTablesRequest {
  /**
   * <p>The IDs of the transit gateway route tables.</p>
   * @public
   */
  TransitGatewayRouteTableIds?: string[] | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default-association-route-table</code> - Indicates whether this is the default
   *                 association route table for the transit gateway (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default-propagation-route-table</code> - Indicates whether this is the default
   *                propagation route table for the transit gateway (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the route table (<code>available</code> | <code>deleting</code> | <code>deleted</code> | <code>pending</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table-id</code> - The ID of the transit gateway route table.</p>
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
export interface DescribeTransitGatewayRouteTablesResult {
  /**
   * <p>Information about the transit gateway route tables.</p>
   * @public
   */
  TransitGatewayRouteTables?: TransitGatewayRouteTable[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewaysRequest {
  /**
   * <p>The IDs of the transit gateways.</p>
   * @public
   */
  TransitGatewayIds?: string[] | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>options.propagation-default-route-table-id</code> - The ID of the default propagation route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.amazon-side-asn</code> - The private ASN for the Amazon side of a BGP session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.association-default-route-table-id</code> - The ID of the default association route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.auto-accept-shared-attachments</code> - Indicates whether there is automatic acceptance of attachment requests (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.default-route-table-association</code> - Indicates whether resource attachments are automatically
   *                associated with the default association route table (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.default-route-table-propagation</code> - Indicates whether resource attachments automatically propagate
   *                routes to the default propagation route table (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.dns-support</code> - Indicates whether DNS support is enabled (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.vpn-ecmp-support</code> - Indicates whether Equal Cost Multipath Protocol support is enabled  (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the transit gateway (<code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>modifying</code> | <code>pending</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key </code>- The key/value combination of a tag assigned to the resource. Use the
   *                tag key in the filter name and the tag value as the filter value. For example, to
   *                find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify
   *                <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
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
export interface DescribeTransitGatewaysResult {
  /**
   * <p>Information about the transit gateways.</p>
   * @public
   */
  TransitGateways?: TransitGateway[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayVpcAttachmentsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   * @public
   */
  TransitGatewayAttachmentIds?: string[] | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment. Valid values are <code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>failing</code> | <code>initiatingRequest</code> | <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC.</p>
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
export interface DescribeTransitGatewayVpcAttachmentsResult {
  /**
   * <p>Information about the VPC attachments.</p>
   * @public
   */
  TransitGatewayVpcAttachments?: TransitGatewayVpcAttachment[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrunkInterfaceAssociationsRequest {
  /**
   * <p>The IDs of the associations.</p>
   * @public
   */
  AssociationIds?: string[] | undefined;

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
   *                   <code>gre-key</code> - The ID of a trunk interface association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>interface-protocol</code> - The interface protocol. Valid values are <code>VLAN</code> and <code>GRE</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *             To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeTrunkInterfaceAssociationsResult {
  /**
   * <p>Information about the trunk associations.</p>
   * @public
   */
  InterfaceAssociations?: TrunkInterfaceAssociation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessEndpointsRequest {
  /**
   * <p>The ID of the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointIds?: string[] | undefined;

  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId?: string | undefined;

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
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
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
 * @public
 */
export interface DescribeVerifiedAccessEndpointsResult {
  /**
   * <p>Details about the Verified Access endpoints.</p>
   * @public
   */
  VerifiedAccessEndpoints?: VerifiedAccessEndpoint[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessGroupsRequest {
  /**
   * <p>The ID of the Verified Access groups.</p>
   * @public
   */
  VerifiedAccessGroupIds?: string[] | undefined;

  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

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
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
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
 * @public
 */
export interface DescribeVerifiedAccessGroupsResult {
  /**
   * <p>Details about the Verified Access groups.</p>
   * @public
   */
  VerifiedAccessGroups?: VerifiedAccessGroup[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessInstanceLoggingConfigurationsRequest {
  /**
   * <p>The IDs of the Verified Access instances.</p>
   * @public
   */
  VerifiedAccessInstanceIds?: string[] | undefined;

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
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
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
 * <p>Describes a log delivery status.</p>
 * @public
 */
export interface VerifiedAccessLogDeliveryStatus {
  /**
   * <p>The status code.</p>
   * @public
   */
  Code?: VerifiedAccessLogDeliveryStatusCode | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Options for CloudWatch Logs as a logging destination.</p>
 * @public
 */
export interface VerifiedAccessLogCloudWatchLogsDestination {
  /**
   * <p>Indicates whether logging is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The delivery status for access logs.</p>
   * @public
   */
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus | undefined;

  /**
   * <p>The ID of the CloudWatch Logs log group.</p>
   * @public
   */
  LogGroup?: string | undefined;
}
