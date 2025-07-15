// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccessScopePath,
  AccessScopePathRequest,
  AddPrefixListEntry,
  ApplianceModeSupportValue,
  AttachmentStatus,
  CurrencyCodeValues,
  DeviceTrustProviderType,
  DnsSupportValue,
  DynamicRoutingValue,
  Ipv4PrefixSpecification,
  Ipv6SupportValue,
  NatGatewayAddress,
  PortRange,
  Protocol,
  ReservedInstancesListing,
  ResourceType,
  RouteTableAssociationState,
  SecurityGroupReferencingSupportValue,
  Tag,
  TagSpecification,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  TrustProviderType,
  UserTrustProviderType,
  VerifiedAccessInstance,
  VerifiedAccessSseSpecificationResponse,
  VerifiedAccessTrustProvider,
  VerifiedAccessTrustProviderFilterSensitiveLog,
  VolumeAttachment,
} from "./models_0";

import {
  _InstanceType,
  ConnectionTrackingSpecification,
  ConnectionTrackingSpecificationRequest,
  CreditSpecification,
  ElasticGpuSpecificationResponse,
  HostnameType,
  InstanceBandwidthWeighting,
  InstanceRequirements,
  IpAddressType,
  Ipv4PrefixSpecificationRequest,
  Ipv6PrefixSpecificationRequest,
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
  LaunchTemplateLicenseConfiguration,
  LaunchTemplatesMonitoring,
  MacModificationTask,
  MacSystemIntegrityProtectionSettingStatus,
  OperatorRequest,
  OperatorResponse,
  PrivateIpAddressSpecification,
  ShutdownBehavior,
  SnapshotLocationEnum,
  Subnet,
  Tenancy,
  ValidationWarning,
  VolumeType,
  Vpc,
} from "./models_1";

/**
 * <p>ENA Express is compatible with both TCP and UDP transport protocols. When it's enabled, TCP traffic
 * 			automatically uses it. However, some UDP-based applications are designed to handle network packets that are
 * 			out of order, without a need for retransmission, such as live video broadcasting or other near-real-time
 * 			applications. For UDP traffic, you can specify whether to use ENA Express, based on your application
 * 			environment needs.</p>
 * @public
 */
export interface LaunchTemplateEnaSrdUdpSpecification {
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
export interface LaunchTemplateEnaSrdSpecification {
  /**
   * <p>Indicates whether ENA Express is enabled for the network interface.</p>
   * @public
   */
  EnaSrdEnabled?: boolean | undefined;

  /**
   * <p>Configures ENA Express for UDP network traffic.</p>
   * @public
   */
  EnaSrdUdpSpecification?: LaunchTemplateEnaSrdUdpSpecification | undefined;
}

/**
 * <p>Information about the IPv4 delegated prefixes assigned to a network interface.</p>
 * @public
 */
export interface Ipv4PrefixSpecificationResponse {
  /**
   * <p>The IPv4 delegated prefixes assigned to the network interface.</p>
   * @public
   */
  Ipv4Prefix?: string | undefined;
}

/**
 * <p>Describes an IPv6 address.</p>
 * @public
 */
export interface InstanceIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * <p>Determines if an IPv6 address associated with a network interface is the primary IPv6 address. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   * @public
   */
  IsPrimaryIpv6?: boolean | undefined;
}

/**
 * <p>Information about the IPv6 delegated prefixes assigned to a network interface.</p>
 * @public
 */
export interface Ipv6PrefixSpecificationResponse {
  /**
   * <p>The IPv6 delegated prefixes assigned to the network interface.</p>
   * @public
   */
  Ipv6Prefix?: string | undefined;
}

/**
 * <p>Describes a network interface.</p>
 * @public
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecification {
  /**
   * <p>Indicates whether to associate a Carrier IP address with eth0 for a new network
   *             interface.</p>
   *          <p>Use this option when you launch an instance in a Wavelength Zone and want to associate
   *             a Carrier IP address with the network interface. For more information about Carrier IP
   *             addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP address</a> in the <i>Wavelength Developer
   *             Guide</i>.</p>
   * @public
   */
  AssociateCarrierIpAddress?: boolean | undefined;

  /**
   * <p>Indicates whether to associate a public IPv4 address with eth0 for a new network
   *             interface.</p>
   *          <p>Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses
   * associated with running instances and Elastic IP addresses. For more information, see the <i>Public IPv4 Address</i> tab on the <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing page</a>.</p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is
   *             terminated.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>A description for the network interface.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The device index for the network interface attachment.</p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>The IDs of one or more security groups.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>The type of network interface.</p>
   * @public
   */
  InterfaceType?: string | undefined;

  /**
   * <p>The number of IPv6 addresses for the network interface.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * <p>The IPv6 addresses for the network interface.</p>
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The primary private IPv4 address of the network interface.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>One or more private IPv4 addresses.</p>
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;

  /**
   * <p>The number of secondary private IPv4 addresses for the network interface.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * <p>The ID of the subnet for the network interface.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The index of the network card.</p>
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * <p>One or more IPv4 prefixes assigned to the network interface.</p>
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationResponse[] | undefined;

  /**
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigned to the network
   *             interface.</p>
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * <p>One or more IPv6 prefixes assigned to the network interface.</p>
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationResponse[] | undefined;

  /**
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigned to the network
   *             interface.</p>
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * <p>The primary IPv6 address of the network interface. When you enable an IPv6 GUA address
   *             to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the
   *             instance is terminated or the network interface is detached. For more information about
   *             primary IPv6 addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   * @public
   */
  PrimaryIpv6?: boolean | undefined;

  /**
   * <p>Contains the ENA Express settings for instances launched from your launch
   *             template.</p>
   * @public
   */
  EnaSrdSpecification?: LaunchTemplateEnaSrdSpecification | undefined;

  /**
   * <p>A security group connection tracking specification that enables you to set the timeout
   *             for connection tracking on an Elastic network interface. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Idle connection tracking timeout</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecification | undefined;

  /**
   * <p>The number of ENA queues created with the instance.</p>
   * @public
   */
  EnaQueueCount?: number | undefined;
}

/**
 * <p>With network performance options, you can adjust your bandwidth preferences to meet
 *             the needs of the workload that runs on your instance at launch.</p>
 * @public
 */
export interface LaunchTemplateNetworkPerformanceOptions {
  /**
   * <p>When you configure network bandwidth weighting, you can boost baseline bandwidth for
   *             either networking or EBS by up to 25%. The total available baseline bandwidth for your
   *             instance remains the same. The default option uses the standard bandwidth configuration
   *             for your instance type.</p>
   * @public
   */
  BandwidthWeighting?: InstanceBandwidthWeighting | undefined;
}

/**
 * <p>Describes the placement of an instance.</p>
 * @public
 */
export interface LaunchTemplatePlacement {
  /**
   * <p>The Availability Zone of the instance.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The affinity setting for the instance on the Dedicated Host.</p>
   * @public
   */
  Affinity?: string | undefined;

  /**
   * <p>The name of the placement group for the instance.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The ID of the Dedicated Host for the instance.</p>
   * @public
   */
  HostId?: string | undefined;

  /**
   * <p>The tenancy of the instance. An instance with a tenancy of <code>dedicated</code> runs
   *             on single-tenant hardware. </p>
   * @public
   */
  Tenancy?: Tenancy | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  SpreadDomain?: string | undefined;

  /**
   * <p>The ARN of the host resource group in which to launch the instances. </p>
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * <p>The number of the partition the instance should launch in. Valid only if the placement
   *             group strategy is set to <code>partition</code>.</p>
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * <p>The Group ID of the placement group. You must specify the Placement Group <b>Group ID</b> to launch an instance in a shared placement
   *             group.</p>
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * <p>Describes the options for instance hostnames.</p>
 * @public
 */
export interface LaunchTemplatePrivateDnsNameOptions {
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
 * <p>The tags specification for the launch template.</p>
 * @public
 */
export interface LaunchTemplateTagSpecification {
  /**
   * <p>The type of resource to tag.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The information for a launch template. </p>
 * @public
 */
export interface ResponseLaunchTemplateData {
  /**
   * <p>The ID of the kernel, if applicable.</p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. </p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>The IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecification | undefined;

  /**
   * <p>The block device mappings.</p>
   * @public
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMapping[] | undefined;

  /**
   * <p>The network interfaces.</p>
   * @public
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * <p>The ID of the AMI or a Systems Manager parameter. The Systems Manager parameter will
   *             resolve to the ID of the AMI at instance launch.</p>
   *          <p>The value depends on what you specified in the request. The possible values
   *             are:</p>
   *          <ul>
   *             <li>
   *                <p>If an AMI ID was specified in the request, then this is the AMI ID.</p>
   *             </li>
   *             <li>
   *                <p>If a Systems Manager parameter was specified in the request, and
   *                         <code>ResolveAlias</code> was configured as <code>true</code>, then this is
   *                     the AMI ID that the parameter is mapped to in the Parameter Store.</p>
   *             </li>
   *             <li>
   *                <p>If a Systems Manager parameter was specified in the request, and
   *                         <code>ResolveAlias</code> was configured as <code>false</code>, then this is
   *                     the parameter value.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems Manager parameter instead of an AMI ID</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The name of the key pair.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>The monitoring for the instance.</p>
   * @public
   */
  Monitoring?: LaunchTemplatesMonitoring | undefined;

  /**
   * <p>The placement of the instance.</p>
   * @public
   */
  Placement?: LaunchTemplatePlacement | undefined;

  /**
   * <p>The ID of the RAM disk, if applicable.</p>
   * @public
   */
  RamDiskId?: string | undefined;

  /**
   * <p>If set to <code>true</code>, indicates that the instance cannot be terminated using
   *             the Amazon EC2 console, command line tool, or API.</p>
   * @public
   */
  DisableApiTermination?: boolean | undefined;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   * @public
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | undefined;

  /**
   * <p>The user data for the instance. </p>
   * @public
   */
  UserData?: string | undefined;

  /**
   * <p>The tags that are applied to the resources that are created during instance
   *             launch.</p>
   * @public
   */
  TagSpecifications?: LaunchTemplateTagSpecification[] | undefined;

  /**
   * <p>Deprecated.</p>
   *          <note>
   *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024.</p>
   *          </note>
   * @public
   */
  ElasticGpuSpecifications?: ElasticGpuSpecificationResponse[] | undefined;

  /**
   * <note>
   *             <p>Amazon Elastic Inference is no longer available.</p>
   *          </note>
   *          <p>An elastic inference accelerator to associate with the instance. Elastic inference
   *             accelerators are a resource you can attach to your Amazon EC2 instances to accelerate
   *             your Deep Learning (DL) inference workloads.</p>
   *          <p>You cannot specify accelerators from different generations in the same request.</p>
   * @public
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAcceleratorResponse[] | undefined;

  /**
   * <p>The security group IDs.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The security group names.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The market (purchasing) option for the instances.</p>
   * @public
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptions | undefined;

  /**
   * <p>The credit option for CPU usage of the instance.</p>
   * @public
   */
  CreditSpecification?: CreditSpecification | undefined;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">CPU
   *                 options for Amazon EC2 instances</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  CpuOptions?: LaunchTemplateCpuOptions | undefined;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   * @public
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationResponse | undefined;

  /**
   * <p>The license configurations.</p>
   * @public
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfiguration[] | undefined;

  /**
   * <p>Indicates whether an instance is configured for hibernation. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your Amazon EC2 instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  HibernationOptions?: LaunchTemplateHibernationOptions | undefined;

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure
   *                 the Instance Metadata Service options</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptions | undefined;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
   * @public
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptions | undefined;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with these attributes.</p>
   *          <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *          <code>InstanceTypes</code>.</p>
   * @public
   */
  InstanceRequirements?: InstanceRequirements | undefined;

  /**
   * <p>The options for the instance hostname.</p>
   * @public
   */
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptions | undefined;

  /**
   * <p>The maintenance options for your instance.</p>
   * @public
   */
  MaintenanceOptions?: LaunchTemplateInstanceMaintenanceOptions | undefined;

  /**
   * <p>Indicates whether the instance is enabled for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html">Enable stop protection for your EC2 instances</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  DisableApiStop?: boolean | undefined;

  /**
   * <p>The entity that manages the launch template.</p>
   * @public
   */
  Operator?: OperatorResponse | undefined;

  /**
   * <p>Contains the launch template settings for network performance options for your
   *             instance.</p>
   * @public
   */
  NetworkPerformanceOptions?: LaunchTemplateNetworkPerformanceOptions | undefined;
}

/**
 * <p>Describes a launch template version.</p>
 * @public
 */
export interface LaunchTemplateVersion {
  /**
   * <p>The ID of the launch template.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The version number.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The description for the version.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The time the version was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The principal that created the version.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>Indicates whether the version is the default version.</p>
   * @public
   */
  DefaultVersion?: boolean | undefined;

  /**
   * <p>Information about the launch template.</p>
   * @public
   */
  LaunchTemplateData?: ResponseLaunchTemplateData | undefined;

  /**
   * <p>The entity that manages the launch template.</p>
   * @public
   */
  Operator?: OperatorResponse | undefined;
}

/**
 * @public
 */
export interface CreateLaunchTemplateVersionResult {
  /**
   * <p>Information about the launch template version.</p>
   * @public
   */
  LaunchTemplateVersion?: LaunchTemplateVersion | undefined;

  /**
   * <p>If the new version of the launch template contains parameters or parameter
   *             combinations that are not valid, an error code and an error message are returned for
   *             each issue that's found.</p>
   * @public
   */
  Warning?: ValidationWarning | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteRequest {
  /**
   * <p>The CIDR range used for destination matches. Routing decisions are based on
   *         the most specific match.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the virtual interface group.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>
   *          The ID of the prefix list. Use a prefix list in place of <code>DestinationCidrBlock</code>. You
   *          cannot use <code>DestinationPrefixListId</code> and <code>DestinationCidrBlock</code> in the same request.
   *       </p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LocalGatewayRouteState = {
  active: "active",
  blackhole: "blackhole",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type LocalGatewayRouteState = (typeof LocalGatewayRouteState)[keyof typeof LocalGatewayRouteState];

/**
 * @public
 * @enum
 */
export const LocalGatewayRouteType = {
  propagated: "propagated",
  static: "static",
} as const;

/**
 * @public
 */
export type LocalGatewayRouteType = (typeof LocalGatewayRouteType)[keyof typeof LocalGatewayRouteType];

/**
 * <p>Describes a route for a local gateway route table.</p>
 * @public
 */
export interface LocalGatewayRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The ID of the virtual interface group.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * <p>The route type.</p>
   * @public
   */
  Type?: LocalGatewayRouteType | undefined;

  /**
   * <p>The state of the route.</p>
   * @public
   */
  State?: LocalGatewayRouteState | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableArn?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway route.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the customer-owned address pool.</p>
   * @public
   */
  CoipPoolId?: string | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>
   *          The ID of the prefix list.
   *       </p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   * @public
   */
  Route?: LocalGatewayRoute | undefined;
}

/**
 * @public
 * @enum
 */
export const LocalGatewayRouteTableMode = {
  coip: "coip",
  direct_vpc_routing: "direct-vpc-routing",
} as const;

/**
 * @public
 */
export type LocalGatewayRouteTableMode = (typeof LocalGatewayRouteTableMode)[keyof typeof LocalGatewayRouteTableMode];

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableRequest {
  /**
   * <p>
   *       The ID of the local gateway.
   *       </p>
   * @public
   */
  LocalGatewayId: string | undefined;

  /**
   * <p>
   *       The mode of the local gateway route table.
   *       </p>
   * @public
   */
  Mode?: LocalGatewayRouteTableMode | undefined;

  /**
   * <p>
   *       The tags assigned to the local gateway route table.
   *       </p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a state change.</p>
 * @public
 */
export interface StateReason {
  /**
   * <p>The reason code for the state change.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The message for the state change.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Server.InsufficientInstanceCapacity</code>: There was insufficient
   *                     capacity available to satisfy the launch request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Server.InternalError</code>: An internal error caused the instance to
   *                     terminate during launch.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Server.ScheduledStop</code>: The instance was stopped due to a scheduled
   *                     retirement.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Server.SpotInstanceShutdown</code>: The instance was stopped because the
   *                     number of Spot requests with a maximum price equal to or higher than the Spot
   *                     price exceeded available capacity or because of an increase in the Spot
   *                     price.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Server.SpotInstanceTermination</code>: The instance was terminated
   *                     because the number of Spot requests with a maximum price equal to or higher than
   *                     the Spot price exceeded available capacity or because of an increase in the Spot
   *                     price.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.InstanceInitiatedShutdown</code>: The instance was shut down
   *                     from the operating system of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.InstanceTerminated</code>: The instance was terminated or
   *                     rebooted during AMI creation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.InternalError</code>: A client error caused the instance to
   *                     terminate during launch.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.InvalidSnapshot.NotFound</code>: The specified snapshot was not
   *                     found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiatedHibernate</code>: Hibernation was initiated on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiatedShutdown</code>: The instance was shut down using
   *                     the Amazon EC2 API.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.VolumeLimitExceeded</code>: The limit on the number of EBS
   *                     volumes or total storage was exceeded. Decrease usage or request an increase in
   *                     your account limits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes a local gateway route table.</p>
 * @public
 */
export interface LocalGatewayRouteTable {
  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableArn?: string | undefined;

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
   * <p>The ID of the Amazon Web Services account that owns the local gateway route table.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The state of the local gateway route table.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The tags assigned to the local gateway route table.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The mode of the local gateway route table.</p>
   * @public
   */
  Mode?: LocalGatewayRouteTableMode | undefined;

  /**
   * <p>Information about the state change.</p>
   * @public
   */
  StateReason?: StateReason | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableResult {
  /**
   * <p>Information about the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTable?: LocalGatewayRouteTable | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest {
  /**
   * <p>
   *       The ID of the local gateway route table.
   *       </p>
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>
   *       The ID of the local gateway route table virtual interface group association.
   *       </p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId: string | undefined;

  /**
   * <p>
   *       The tags assigned to the local gateway route table virtual interface group association.
   *       </p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes an association between a local gateway route table and a virtual interface group.</p>
 * @public
 */
export interface LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId?: string | undefined;

  /**
   * <p>The ID of the virtual interface group.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * <p>The ID of the local gateway.</p>
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table for the virtual interface group.</p>
   * @public
   */
  LocalGatewayRouteTableArn?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface group association.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The tags assigned to the association.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult {
  /**
   * <p>Information about the local gateway route table virtual interface group association.</p>
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation?:
    | LocalGatewayRouteTableVirtualInterfaceGroupAssociation
    | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the local gateway route table VPC association.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes an association between a local gateway route table and a VPC.</p>
 * @public
 */
export interface LocalGatewayRouteTableVpcAssociation {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  LocalGatewayRouteTableVpcAssociationId?: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table for the association.</p>
   * @public
   */
  LocalGatewayRouteTableArn?: string | undefined;

  /**
   * <p>The ID of the local gateway.</p>
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway route table for the association.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The tags assigned to the association.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVpcAssociationResult {
  /**
   * <p>Information about the association.</p>
   * @public
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayVirtualInterfaceRequest {
  /**
   * <p>The ID of the local gateway virtual interface group.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId: string | undefined;

  /**
   * <p>References the Link Aggregation Group (LAG) that connects the Outpost to on-premises network devices.</p>
   * @public
   */
  OutpostLagId: string | undefined;

  /**
   * <p>The virtual local area network (VLAN) used for the local gateway virtual interface.</p>
   * @public
   */
  Vlan: number | undefined;

  /**
   * <p>The IP address assigned to the local gateway virtual interface on the Outpost side. Only IPv4 is supported.</p>
   * @public
   */
  LocalAddress: string | undefined;

  /**
   * <p>The peer IP address for the local gateway virtual interface. Only IPv4 is
   *          supported.</p>
   * @public
   */
  PeerAddress: string | undefined;

  /**
   * <p>The Autonomous System Number (ASN) of the Border Gateway Protocol (BGP) peer.</p>
   * @public
   */
  PeerBgpAsn?: number | undefined;

  /**
   * <p>The tags to apply to a resource when the local gateway virtual interface is being created. </p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The extended 32-bit ASN of the BGP peer for use with larger ASN values.</p>
   * @public
   */
  PeerBgpAsnExtended?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const LocalGatewayVirtualInterfaceConfigurationState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type LocalGatewayVirtualInterfaceConfigurationState =
  (typeof LocalGatewayVirtualInterfaceConfigurationState)[keyof typeof LocalGatewayVirtualInterfaceConfigurationState];

/**
 * <p>Describes a local gateway virtual interface.</p>
 * @public
 */
export interface LocalGatewayVirtualInterface {
  /**
   * <p>The ID of the virtual interface.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceId?: string | undefined;

  /**
   * <p>The ID of the local gateway.</p>
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * <p>The ID of the local gateway virtual interface group.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the local gateway virtual interface.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceArn?: string | undefined;

  /**
   * <p>The Outpost LAG ID.</p>
   * @public
   */
  OutpostLagId?: string | undefined;

  /**
   * <p>The ID of the VLAN.</p>
   * @public
   */
  Vlan?: number | undefined;

  /**
   * <p>The local address.</p>
   * @public
   */
  LocalAddress?: string | undefined;

  /**
   * <p>The peer address.</p>
   * @public
   */
  PeerAddress?: string | undefined;

  /**
   * <p>The Border Gateway Protocol (BGP) Autonomous System Number (ASN) of the local gateway.</p>
   * @public
   */
  LocalBgpAsn?: number | undefined;

  /**
   * <p>The peer BGP ASN.</p>
   * @public
   */
  PeerBgpAsn?: number | undefined;

  /**
   * <p>The extended 32-bit ASN of the BGP peer for use with larger ASN values.</p>
   * @public
   */
  PeerBgpAsnExtended?: number | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The tags assigned to the virtual interface.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The current state of the local gateway virtual interface.</p>
   * @public
   */
  ConfigurationState?: LocalGatewayVirtualInterfaceConfigurationState | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayVirtualInterfaceResult {
  /**
   * <p>Information about the local gateway virtual interface.</p>
   * @public
   */
  LocalGatewayVirtualInterface?: LocalGatewayVirtualInterface | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayVirtualInterfaceGroupRequest {
  /**
   * <p>The ID of the local gateway.</p>
   * @public
   */
  LocalGatewayId: string | undefined;

  /**
   * <p>The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP).</p>
   * @public
   */
  LocalBgpAsn?: number | undefined;

  /**
   * <p>The extended 32-bit ASN for the local BGP configuration.</p>
   * @public
   */
  LocalBgpAsnExtended?: number | undefined;

  /**
   * <p>The tags to apply to the local gateway virtual interface group when the resource is
   *          being created.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
export const LocalGatewayVirtualInterfaceGroupConfigurationState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  incomplete: "incomplete",
  pending: "pending",
} as const;

/**
 * @public
 */
export type LocalGatewayVirtualInterfaceGroupConfigurationState =
  (typeof LocalGatewayVirtualInterfaceGroupConfigurationState)[keyof typeof LocalGatewayVirtualInterfaceGroupConfigurationState];

/**
 * <p>Describes a local gateway virtual interface group.</p>
 * @public
 */
export interface LocalGatewayVirtualInterfaceGroup {
  /**
   * <p>The ID of the virtual interface group.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * <p>The IDs of the virtual interfaces.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceIds?: string[] | undefined;

  /**
   * <p>The ID of the local gateway.</p>
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface group.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP).</p>
   * @public
   */
  LocalBgpAsn?: number | undefined;

  /**
   * <p>The extended 32-bit ASN for the local BGP configuration.</p>
   * @public
   */
  LocalBgpAsnExtended?: number | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the local gateway virtual interface group.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupArn?: string | undefined;

  /**
   * <p>The tags assigned to the virtual interface group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The current state of the local gateway virtual interface group.</p>
   * @public
   */
  ConfigurationState?: LocalGatewayVirtualInterfaceGroupConfigurationState | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayVirtualInterfaceGroupResult {
  /**
   * <p>Information about the created local gateway virtual interface group.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroup?: LocalGatewayVirtualInterfaceGroup | undefined;
}

/**
 * <p>Describes a custom configuration for a System Integrity Protection (SIP) modification task.</p>
 * @public
 */
export interface MacSystemIntegrityProtectionConfigurationRequest {
  /**
   * <p>Enables or disables Apple Internal.</p>
   * @public
   */
  AppleInternal?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * <p>Enables or disables Base System.</p>
   * @public
   */
  BaseSystem?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * <p>Enables or disables Debugging Restrictions.</p>
   * @public
   */
  DebuggingRestrictions?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * <p>Enables or disables Dtrace Restrictions.</p>
   * @public
   */
  DTraceRestrictions?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * <p>Enables or disables Filesystem Protections.</p>
   * @public
   */
  FilesystemProtections?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * <p>Enables or disables Kext Signing.</p>
   * @public
   */
  KextSigning?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * <p>Enables or disables Nvram Protections.</p>
   * @public
   */
  NvramProtections?: MacSystemIntegrityProtectionSettingStatus | undefined;
}

/**
 * @public
 */
export interface CreateMacSystemIntegrityProtectionModificationTaskRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the Amazon EC2 Mac instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>
   *             <b>[Apple silicon Mac instances only]</b> Specifies the
   *          following credentials:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Internal disk administrative user</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>Username</b> - Only the default administrative
   *                      user (<code>aws-managed-user</code>) is supported and it is used by default. You
   *                      can't specify a different administrative user.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Password</b> - If you did not change the default
   *                      password for <code>aws-managed-user</code>, specify the default password, which
   *                      is <i>blank</i>. Otherwise, specify your password.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon EBS root volume administrative user</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>Username</b> - If you did not change the default
   *                      administrative user, specify <code>ec2-user</code>. Otherwise, specify the username
   *                      for your administrative user.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Password</b> - Specify the password for the
   *                      administrative user.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>The credentials must be specified in the following JSON format:</p>
   *          <p>
   *             <code>\{
   *   "internalDiskPassword":"<i>internal-disk-admin_password</i>",
   *   "rootVolumeUsername":"<i>root-volume-admin_username</i>",
   *   "rootVolumepassword":"<i>root-volume-admin_password</i>"
   * \}</code>
   *          </p>
   * @public
   */
  MacCredentials?: string | undefined;

  /**
   * <p>Specifies the overrides to selectively enable or disable individual SIP settings.
   *          The individual settings you specify here override the overall SIP status you specify
   *          for <b>MacSystemIntegrityProtectionStatus</b>.</p>
   * @public
   */
  MacSystemIntegrityProtectionConfiguration?: MacSystemIntegrityProtectionConfigurationRequest | undefined;

  /**
   * <p>Specifies the overall SIP status for the instance. To enable all SIP settings, specify
   *          <code>enabled</code>. To disable all SIP settings, specify <code>disabled</code>.</p>
   * @public
   */
  MacSystemIntegrityProtectionStatus: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * <p>Specifies tags to apply to the SIP modification task.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateMacSystemIntegrityProtectionModificationTaskResult {
  /**
   * <p>Information about the SIP modification task.</p>
   * @public
   */
  MacModificationTask?: MacModificationTask | undefined;
}

/**
 * @public
 */
export interface CreateManagedPrefixListRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A name for the prefix list.</p>
   *          <p>Constraints: Up to 255 characters in length. The name cannot start with <code>com.amazonaws</code>.</p>
   * @public
   */
  PrefixListName: string | undefined;

  /**
   * <p>One or more entries for the prefix list.</p>
   * @public
   */
  Entries?: AddPrefixListEntry[] | undefined;

  /**
   * <p>The maximum number of entries for the prefix list.</p>
   * @public
   */
  MaxEntries: number | undefined;

  /**
   * <p>The tags to apply to the prefix list during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The IP address type.</p>
   *          <p>Valid Values: <code>IPv4</code> | <code>IPv6</code>
   *          </p>
   * @public
   */
  AddressFamily: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *          <p>Constraints: Up to 255 UTF-8 characters in length.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PrefixListState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_complete: "restore-complete",
  restore_failed: "restore-failed",
  restore_in_progress: "restore-in-progress",
} as const;

/**
 * @public
 */
export type PrefixListState = (typeof PrefixListState)[keyof typeof PrefixListState];

/**
 * <p>Describes a managed prefix list.</p>
 * @public
 */
export interface ManagedPrefixList {
  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The IP address version.</p>
   * @public
   */
  AddressFamily?: string | undefined;

  /**
   * <p>The current state of the prefix list.</p>
   * @public
   */
  State?: PrefixListState | undefined;

  /**
   * <p>The state message.</p>
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the prefix list.</p>
   * @public
   */
  PrefixListArn?: string | undefined;

  /**
   * <p>The name of the prefix list.</p>
   * @public
   */
  PrefixListName?: string | undefined;

  /**
   * <p>The maximum number of entries for the prefix list.</p>
   * @public
   */
  MaxEntries?: number | undefined;

  /**
   * <p>The version of the prefix list.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The tags for the prefix list.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the owner of the prefix list.</p>
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * @public
 */
export interface CreateManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   * @public
   */
  PrefixList?: ManagedPrefixList | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectivityType = {
  PRIVATE: "private",
  PUBLIC: "public",
} as const;

/**
 * @public
 */
export type ConnectivityType = (typeof ConnectivityType)[keyof typeof ConnectivityType];

/**
 * @public
 */
export interface CreateNatGatewayRequest {
  /**
   * <p>[Public NAT gateways only] The allocation ID of an Elastic IP address to associate
   *           with the NAT gateway. You cannot specify an Elastic IP address with a private NAT gateway.
   *           If the Elastic IP address is associated with another resource, you must first disassociate it.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   *          <p>Constraint: Maximum 64 ASCII characters.</p>
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
   * <p>The ID of the subnet in which to create the NAT gateway.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>The tags to assign to the NAT gateway.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Indicates whether the NAT gateway supports public or private connectivity.
   *           The default is public connectivity.</p>
   * @public
   */
  ConnectivityType?: ConnectivityType | undefined;

  /**
   * <p>The private IPv4 address to assign to the NAT gateway. If you don't provide an address, a private IPv4 address will be automatically assigned.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>Secondary EIP allocation IDs. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html">Create a NAT gateway</a>
   *             in the <i>Amazon VPC User Guide</i>.</p>
   * @public
   */
  SecondaryAllocationIds?: string[] | undefined;

  /**
   * <p>Secondary private IPv4 addresses. For more information about secondary addresses, see
   *             <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html">Create a NAT gateway</a> in the <i>Amazon VPC User Guide</i>.</p>
   * @public
   */
  SecondaryPrivateIpAddresses?: string[] | undefined;

  /**
   * <p>[Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway.
   *             For more information about secondary addresses, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html">Create a NAT gateway</a>
   *             in the <i>Amazon VPC User Guide</i>.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;
}

/**
 * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-gateways">documented limits</a>,
 *           contact Amazon Web Services Support.</p>
 * @public
 */
export interface ProvisionedBandwidth {
  /**
   * <p>Reserved.</p>
   * @public
   */
  ProvisionTime?: Date | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Provisioned?: string | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  RequestTime?: Date | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Requested?: string | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NatGatewayState = {
  AVAILABLE: "available",
  DELETED: "deleted",
  DELETING: "deleting",
  FAILED: "failed",
  PENDING: "pending",
} as const;

/**
 * @public
 */
export type NatGatewayState = (typeof NatGatewayState)[keyof typeof NatGatewayState];

/**
 * <p>Describes a NAT gateway.</p>
 * @public
 */
export interface NatGateway {
  /**
   * <p>The date and time the NAT gateway was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The date and time the NAT gateway was deleted, if applicable.</p>
   * @public
   */
  DeleteTime?: Date | undefined;

  /**
   * <p>If the NAT gateway could not be created, specifies the error code for the failure.
   *         (<code>InsufficientFreeAddressesInSubnet</code> | <code>Gateway.NotAttached</code> |
   *          <code>InvalidAllocationID.NotFound</code> | <code>Resource.AlreadyAssociated</code> |
   *          <code>InternalError</code> | <code>InvalidSubnetID.NotFound</code>)</p>
   * @public
   */
  FailureCode?: string | undefined;

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
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * <p>Information about the IP addresses and network interface associated with the NAT gateway.</p>
   * @public
   */
  NatGatewayAddresses?: NatGatewayAddress[] | undefined;

  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-gateways">documented limits</a>,
   *           contact Amazon Web Services Support.</p>
   * @public
   */
  ProvisionedBandwidth?: ProvisionedBandwidth | undefined;

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
   * @public
   */
  State?: NatGatewayState | undefined;

  /**
   * <p>The ID of the subnet in which the NAT gateway is located.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the VPC in which the NAT gateway is located.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The tags for the NAT gateway.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether the NAT gateway supports public or private connectivity.</p>
   * @public
   */
  ConnectivityType?: ConnectivityType | undefined;
}

/**
 * @public
 */
export interface CreateNatGatewayResult {
  /**
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Information about the NAT gateway.</p>
   * @public
   */
  NatGateway?: NatGateway | undefined;
}

/**
 * @public
 */
export interface CreateNetworkAclRequest {
  /**
   * <p>The tags to assign to the network ACL.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
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
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;
}

/**
 * <p>Describes an association between a network ACL and a subnet.</p>
 * @public
 */
export interface NetworkAclAssociation {
  /**
   * <p>The ID of the association between a network ACL and a subnet.</p>
   * @public
   */
  NetworkAclAssociationId?: string | undefined;

  /**
   * <p>The ID of the network ACL.</p>
   * @public
   */
  NetworkAclId?: string | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * <p>Describes the ICMP type and code.</p>
 * @public
 */
export interface IcmpTypeCode {
  /**
   * <p>The ICMP code. A value of -1 means all codes for the specified ICMP type.</p>
   * @public
   */
  Code?: number | undefined;

  /**
   * <p>The ICMP type. A value of -1 means all types.</p>
   * @public
   */
  Type?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleAction = {
  allow: "allow",
  deny: "deny",
} as const;

/**
 * @public
 */
export type RuleAction = (typeof RuleAction)[keyof typeof RuleAction];

/**
 * <p>Describes an entry in a network ACL.</p>
 * @public
 */
export interface NetworkAclEntry {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>Indicates whether the rule is an egress rule (applied to traffic leaving the subnet).</p>
   * @public
   */
  Egress?: boolean | undefined;

  /**
   * <p>ICMP protocol: The ICMP type and code.</p>
   * @public
   */
  IcmpTypeCode?: IcmpTypeCode | undefined;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation.</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.</p>
   * @public
   */
  PortRange?: PortRange | undefined;

  /**
   * <p>The protocol number. A value of "-1" means all protocols.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   * @public
   */
  RuleAction?: RuleAction | undefined;

  /**
   * <p>The rule number for the entry. ACL entries are processed in ascending order by rule number.</p>
   * @public
   */
  RuleNumber?: number | undefined;
}

/**
 * <p>Describes a network ACL.</p>
 * @public
 */
export interface NetworkAcl {
  /**
   * <p>Any associations between the network ACL and your subnets</p>
   * @public
   */
  Associations?: NetworkAclAssociation[] | undefined;

  /**
   * <p>The entries (rules) in the network ACL.</p>
   * @public
   */
  Entries?: NetworkAclEntry[] | undefined;

  /**
   * <p>Indicates whether this is the default network ACL for the VPC.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The ID of the network ACL.</p>
   * @public
   */
  NetworkAclId?: string | undefined;

  /**
   * <p>Any tags assigned to the network ACL.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the VPC for the network ACL.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the network ACL.</p>
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkAclResult {
  /**
   * <p>Information about the network ACL.</p>
   * @public
   */
  NetworkAcl?: NetworkAcl | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkAclEntryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the network ACL.</p>
   * @public
   */
  NetworkAclId: string | undefined;

  /**
   * <p>The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.</p>
   *          <p>Constraints: Positive integer from 1 to 32766. The range 32767 to 65535 is reserved for internal use.</p>
   * @public
   */
  RuleNumber: number | undefined;

  /**
   * <p>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a
   *   			protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is
   * 			allowed, regardless of any ports or ICMP types or codes that you specify. If you specify
   * 			protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and
   * 			codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6)
   * 			and specify an IPv6 CIDR block, you must specify an ICMP type and code.</p>
   * @public
   */
  Protocol: string | undefined;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   * @public
   */
  RuleAction: RuleAction | undefined;

  /**
   * <p>Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet).</p>
   * @public
   */
  Egress: boolean | undefined;

  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation (for example
   * 		        <code>172.16.0.0/24</code>). We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation (for example
   *                 <code>2001:db8:1234:1a00::/64</code>).</p>
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
export interface CreateNetworkInsightsAccessScopeRequest {
  /**
   * <p>The paths to match.</p>
   * @public
   */
  MatchPaths?: AccessScopePathRequest[] | undefined;

  /**
   * <p>The paths to exclude.</p>
   * @public
   */
  ExcludePaths?: AccessScopePathRequest[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags to apply.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a Network Access Scope.</p>
 * @public
 */
export interface NetworkInsightsAccessScope {
  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeArn?: string | undefined;

  /**
   * <p>The creation date.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The last updated date.</p>
   * @public
   */
  UpdatedDate?: Date | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Describes the Network Access Scope content.</p>
 * @public
 */
export interface NetworkInsightsAccessScopeContent {
  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;

  /**
   * <p>The paths to match.</p>
   * @public
   */
  MatchPaths?: AccessScopePath[] | undefined;

  /**
   * <p>The paths to exclude.</p>
   * @public
   */
  ExcludePaths?: AccessScopePath[] | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInsightsAccessScopeResult {
  /**
   * <p>The Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScope?: NetworkInsightsAccessScope | undefined;

  /**
   * <p>The Network Access Scope content.</p>
   * @public
   */
  NetworkInsightsAccessScopeContent?: NetworkInsightsAccessScopeContent | undefined;
}

/**
 * <p>Describes a port range.</p>
 * @public
 */
export interface RequestFilterPortRange {
  /**
   * <p>The first port in the range.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The last port in the range.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * <p>Describes a set of filters for a path analysis. Use path filters to scope the analysis when
 *          there can be multiple resulting paths.</p>
 * @public
 */
export interface PathRequestFilter {
  /**
   * <p>The source IPv4 address.</p>
   * @public
   */
  SourceAddress?: string | undefined;

  /**
   * <p>The source port range.</p>
   * @public
   */
  SourcePortRange?: RequestFilterPortRange | undefined;

  /**
   * <p>The destination IPv4 address.</p>
   * @public
   */
  DestinationAddress?: string | undefined;

  /**
   * <p>The destination port range.</p>
   * @public
   */
  DestinationPortRange?: RequestFilterPortRange | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInsightsPathRequest {
  /**
   * <p>The IP address of the source.</p>
   * @public
   */
  SourceIp?: string | undefined;

  /**
   * <p>The IP address of the destination.</p>
   * @public
   */
  DestinationIp?: string | undefined;

  /**
   * <p>The ID or ARN of the source. If the resource is in another account, you must specify an ARN.</p>
   * @public
   */
  Source: string | undefined;

  /**
   * <p>The ID or ARN of the destination. If the resource is in another account, you must specify an ARN.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * <p>The destination port.</p>
   * @public
   */
  DestinationPort?: number | undefined;

  /**
   * <p>The tags to add to the path.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Scopes the analysis to network paths that match specific filters at the source. If you specify
   *           this parameter, you can't specify the parameters for the source IP address or the destination port.</p>
   * @public
   */
  FilterAtSource?: PathRequestFilter | undefined;

  /**
   * <p>Scopes the analysis to network paths that match specific filters at the destination. If you specify
   *           this parameter, you can't specify the parameter for the destination IP address.</p>
   * @public
   */
  FilterAtDestination?: PathRequestFilter | undefined;
}

/**
 * <p>Describes a port range.</p>
 * @public
 */
export interface FilterPortRange {
  /**
   * <p>The first port in the range.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The last port in the range.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * <p>Describes a set of filters for a path analysis. Use path filters to scope the analysis when
 *           there can be multiple resulting paths.</p>
 * @public
 */
export interface PathFilter {
  /**
   * <p>The source IPv4 address.</p>
   * @public
   */
  SourceAddress?: string | undefined;

  /**
   * <p>The source port range.</p>
   * @public
   */
  SourcePortRange?: FilterPortRange | undefined;

  /**
   * <p>The destination IPv4 address.</p>
   * @public
   */
  DestinationAddress?: string | undefined;

  /**
   * <p>The destination port range.</p>
   * @public
   */
  DestinationPortRange?: FilterPortRange | undefined;
}

/**
 * <p>Describes a path.</p>
 * @public
 */
export interface NetworkInsightsPath {
  /**
   * <p>The ID of the path.</p>
   * @public
   */
  NetworkInsightsPathId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the path.</p>
   * @public
   */
  NetworkInsightsPathArn?: string | undefined;

  /**
   * <p>The time stamp when the path was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The ID of the source.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The ID of the destination.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * <p>The IP address of the source.</p>
   * @public
   */
  SourceIp?: string | undefined;

  /**
   * <p>The IP address of the destination.</p>
   * @public
   */
  DestinationIp?: string | undefined;

  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * <p>The destination port.</p>
   * @public
   */
  DestinationPort?: number | undefined;

  /**
   * <p>The tags associated with the path.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Scopes the analysis to network paths that match specific filters at the source.</p>
   * @public
   */
  FilterAtSource?: PathFilter | undefined;

  /**
   * <p>Scopes the analysis to network paths that match specific filters at the destination.</p>
   * @public
   */
  FilterAtDestination?: PathFilter | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInsightsPathResult {
  /**
   * <p>Information about the path.</p>
   * @public
   */
  NetworkInsightsPath?: NetworkInsightsPath | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkInterfaceCreationType = {
  branch: "branch",
  efa: "efa",
  efa_only: "efa-only",
  trunk: "trunk",
} as const;

/**
 * @public
 */
export type NetworkInterfaceCreationType =
  (typeof NetworkInterfaceCreationType)[keyof typeof NetworkInterfaceCreationType];

/**
 * @public
 */
export interface CreateNetworkInterfaceRequest {
  /**
   * <p>The IPv4 prefixes assigned to the network interface.</p>
   *          <p>You can't specify IPv4 prefixes if you've specified one of the following: a count of
   *             IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4
   *             addresses.</p>
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[] | undefined;

  /**
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigns to the
   *             network interface.</p>
   *          <p>You can't specify a count of IPv4 prefixes if you've specified one of the following:
   *             specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4
   *             addresses.</p>
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * <p>The IPv6 prefixes assigned to the network interface.</p>
   *          <p>You can't specify IPv6 prefixes if you've specified one of the following: a count of
   *             IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.</p>
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[] | undefined;

  /**
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigns to the
   *             network interface.</p>
   *          <p>You can't specify a count of IPv6 prefixes if you've specified one of the following:
   *             specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.</p>
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * <p>The type of network interface. The default is <code>interface</code>.</p>
   *          <p>If you specify <code>efa-only</code>, do not assign any IP addresses to the network
   *             interface. EFA-only network interfaces do not support IP addresses.</p>
   *          <p>The only supported values are <code>interface</code>, <code>efa</code>,
   *                 <code>efa-only</code>, and <code>trunk</code>.</p>
   * @public
   */
  InterfaceType?: NetworkInterfaceCreationType | undefined;

  /**
   * <p>The tags to apply to the new network interface.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>If you’re creating a network interface in a dual-stack or IPv6-only subnet, you have
   *             the option to assign a primary IPv6 IP address. A primary IPv6 address is an IPv6 GUA
   *             address associated with an ENI that you have enabled to use a primary IPv6 address. Use
   *             this option if the instance that this ENI will be attached to relies on its IPv6 address
   *             not changing. Amazon Web Services will automatically assign an IPv6 address associated
   *             with the ENI attached to your instance to be the primary IPv6 address. Once you enable
   *             an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6
   *             GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6
   *             address until the instance is terminated or the network interface is detached. If you
   *             have multiple IPv6 addresses associated with an ENI attached to your instance and you
   *             enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI
   *             becomes the primary IPv6 address.</p>
   * @public
   */
  EnablePrimaryIpv6?: boolean | undefined;

  /**
   * <p>A connection tracking specification for the network interface.</p>
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest | undefined;

  /**
   * <p>Reserved for internal use.</p>
   * @public
   */
  Operator?: OperatorRequest | undefined;

  /**
   * <p>The ID of the subnet to associate with the network interface.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>A description for the network interface.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The primary private IPv4 address of the network interface. If you don't specify an
   *             IPv4 address, Amazon EC2 selects one for you from the subnet's IPv4 CIDR range. If you
   *             specify an IP address, you cannot indicate any IP addresses specified in
   *                 <code>privateIpAddresses</code> as primary (only one IP address can be designated as
   *             primary).</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>The private IPv4 addresses.</p>
   *          <p>You can't specify private IPv4 addresses if you've specified one of the following: a
   *             count of private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4
   *             prefixes.</p>
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;

  /**
   * <p>The number of secondary private IPv4 addresses to assign to a network interface. When
   *             you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses
   *             within the subnet's IPv4 CIDR range. You can't specify this option and specify more than
   *             one private IP address using <code>privateIpAddresses</code>.</p>
   *          <p>You can't specify a count of private IPv4 addresses if you've specified one of the
   *             following: specific private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4
   *             prefixes.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * <p>The IPv6 addresses from the IPv6 CIDR block range of your subnet.</p>
   *          <p>You can't specify IPv6 addresses using this parameter if you've specified one of the
   *             following: a count of IPv6 addresses, specific IPv6 prefixes, or a count of IPv6
   *             prefixes.</p>
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * <p>The number of IPv6 addresses to assign to a network interface. Amazon EC2
   *             automatically selects the IPv6 addresses from the subnet range.</p>
   *          <p>You can't specify a count of IPv6 addresses using this parameter if you've specified
   *             one of the following: specific IPv6 addresses, specific IPv6 prefixes, or a count of
   *             IPv6 prefixes.</p>
   *          <p>If your subnet has the <code>AssignIpv6AddressOnCreation</code> attribute set, you can
   *             override that setting by specifying 0 as the IPv6 address count.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

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
 * <p>Describes association information for an Elastic IP address (IPv4 only), or a Carrier
 *             IP address (for a network interface which resides in a subnet in a Wavelength
 *             Zone).</p>
 * @public
 */
export interface NetworkInterfaceAssociation {
  /**
   * <p>The allocation ID.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>The association ID.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The ID of the Elastic IP address owner.</p>
   * @public
   */
  IpOwnerId?: string | undefined;

  /**
   * <p>The public DNS name.</p>
   * @public
   */
  PublicDnsName?: string | undefined;

  /**
   * <p>The address of the Elastic IP address bound to the network interface.</p>
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * <p>The customer-owned IP address associated with the network interface.</p>
   * @public
   */
  CustomerOwnedIp?: string | undefined;

  /**
   * <p>The carrier IP address associated with the network interface.</p>
   *          <p>This option is only available when the network interface is in a subnet which is
   *             associated with a Wavelength Zone.</p>
   * @public
   */
  CarrierIp?: string | undefined;
}

/**
 * <p>ENA Express is compatible with both TCP and UDP transport protocols. When it's enabled, TCP traffic
 * 			automatically uses it. However, some UDP-based applications are designed to handle network packets that are
 * 			out of order, without a need for retransmission, such as live video broadcasting or other near-real-time
 * 			applications. For UDP traffic, you can specify whether to use ENA Express, based on your application
 * 			environment needs.</p>
 * @public
 */
export interface AttachmentEnaSrdUdpSpecification {
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
export interface AttachmentEnaSrdSpecification {
  /**
   * <p>Indicates whether ENA Express is enabled for the network interface.</p>
   * @public
   */
  EnaSrdEnabled?: boolean | undefined;

  /**
   * <p>Configures ENA Express for UDP network traffic.</p>
   * @public
   */
  EnaSrdUdpSpecification?: AttachmentEnaSrdUdpSpecification | undefined;
}

/**
 * <p>Describes a network interface attachment.</p>
 * @public
 */
export interface NetworkInterfaceAttachment {
  /**
   * <p>The timestamp indicating when the attachment initiated.</p>
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
   * <p>The device index of the network interface attachment on the instance.</p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>The index of the network card.</p>
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the instance.</p>
   * @public
   */
  InstanceOwnerId?: string | undefined;

  /**
   * <p>The attachment state.</p>
   * @public
   */
  Status?: AttachmentStatus | undefined;

  /**
   * <p>Configures ENA Express for the network interface that this action attaches to the
   *             instance.</p>
   * @public
   */
  EnaSrdSpecification?: AttachmentEnaSrdSpecification | undefined;

  /**
   * <p>The number of ENA queues created with the instance.</p>
   * @public
   */
  EnaQueueCount?: number | undefined;
}

/**
 * <p>A security group connection tracking configuration that enables you to set the idle
 *             timeout for connection tracking on an Elastic network interface. For more information,
 *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Connection tracking timeouts</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface ConnectionTrackingConfiguration {
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
 * <p>Describes a security group.</p>
 * @public
 */
export interface GroupIdentifier {
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
}

/**
 * @public
 * @enum
 */
export const NetworkInterfaceType = {
  api_gateway_managed: "api_gateway_managed",
  aws_codestar_connections_managed: "aws_codestar_connections_managed",
  branch: "branch",
  efa: "efa",
  efa_only: "efa-only",
  gateway_load_balancer: "gateway_load_balancer",
  gateway_load_balancer_endpoint: "gateway_load_balancer_endpoint",
  global_accelerator_managed: "global_accelerator_managed",
  interface: "interface",
  iot_rules_managed: "iot_rules_managed",
  lambda: "lambda",
  load_balancer: "load_balancer",
  natGateway: "natGateway",
  network_load_balancer: "network_load_balancer",
  quicksight: "quicksight",
  transit_gateway: "transit_gateway",
  trunk: "trunk",
  vpc_endpoint: "vpc_endpoint",
} as const;

/**
 * @public
 */
export type NetworkInterfaceType = (typeof NetworkInterfaceType)[keyof typeof NetworkInterfaceType];

/**
 * <p>Describes an IPv6 address associated with a network interface.</p>
 * @public
 */
export interface NetworkInterfaceIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * <p>An IPv6-enabled public hostname for a network interface. Requests from within the VPC or from the internet resolve to the IPv6 GUA of the network interface. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html">EC2 instance hostnames, DNS names, and domains</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  PublicIpv6DnsName?: string | undefined;

  /**
   * <p>Determines if an IPv6 address associated with a network interface is the primary IPv6
   *             address. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA
   *             will be made the primary IPv6 address until the instance is terminated or the network
   *             interface is detached. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyNetworkInterfaceAttribute.html">ModifyNetworkInterfaceAttribute</a>.</p>
   * @public
   */
  IsPrimaryIpv6?: boolean | undefined;
}

/**
 * <p>Describes the IPv6 prefix.</p>
 * @public
 */
export interface Ipv6PrefixSpecification {
  /**
   * <p>The IPv6 prefix.</p>
   * @public
   */
  Ipv6Prefix?: string | undefined;
}

/**
 * <p>Describes the private IPv4 address of a network interface.</p>
 * @public
 */
export interface NetworkInterfacePrivateIpAddress {
  /**
   * <p>The association information for an Elastic IP address (IPv4) associated with the
   *             network interface.</p>
   * @public
   */
  Association?: NetworkInterfaceAssociation | undefined;

  /**
   * <p>Indicates whether this IPv4 address is the primary private IPv4 address of the network
   *             interface.</p>
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * <p>The private DNS name.</p>
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * <p>The private IPv4 address.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * <p>Public hostname type options. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html">EC2 instance hostnames, DNS names, and domains</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface PublicIpDnsNameOptions {
  /**
   * <p>The public hostname type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html">EC2 instance hostnames, DNS names, and domains</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  DnsHostnameType?: string | undefined;

  /**
   * <p>An IPv4-enabled public hostname for a network interface. Requests from within the VPC resolve to the private primary IPv4 address of the network interface. Requests from the internet resolve to the public IPv4 address of the network interface.</p>
   * @public
   */
  PublicIpv4DnsName?: string | undefined;

  /**
   * <p>An IPv6-enabled public hostname for a network interface. Requests from within the VPC or from the internet resolve to the IPv6 GUA of the network interface.</p>
   * @public
   */
  PublicIpv6DnsName?: string | undefined;

  /**
   * <p>A dual-stack public hostname for a network interface. Requests from within the VPC resolve to both the private IPv4 address and the IPv6 Global Unicast Address of the network interface. Requests from the internet resolve to both the public IPv4 and the IPv6 GUA address of the network interface.</p>
   * @public
   */
  PublicDualStackDnsName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkInterfaceStatus = {
  associated: "associated",
  attaching: "attaching",
  available: "available",
  detaching: "detaching",
  in_use: "in-use",
} as const;

/**
 * @public
 */
export type NetworkInterfaceStatus = (typeof NetworkInterfaceStatus)[keyof typeof NetworkInterfaceStatus];

/**
 * <p>Describes a network interface.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The association information for an Elastic IP address (IPv4) associated with the
   *             network interface.</p>
   * @public
   */
  Association?: NetworkInterfaceAssociation | undefined;

  /**
   * <p>The network interface attachment.</p>
   * @public
   */
  Attachment?: NetworkInterfaceAttachment | undefined;

  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>A security group connection tracking configuration that enables you to set the timeout
   *             for connection tracking on an Elastic network interface. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Connection tracking timeouts</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ConnectionTrackingConfiguration?: ConnectionTrackingConfiguration | undefined;

  /**
   * <p>A description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Any security groups for the network interface.</p>
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;

  /**
   * <p>The type of network interface.</p>
   * @public
   */
  InterfaceType?: NetworkInterfaceType | undefined;

  /**
   * <p>The IPv6 addresses associated with the network interface.</p>
   * @public
   */
  Ipv6Addresses?: NetworkInterfaceIpv6Address[] | undefined;

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
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the network interface.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The private hostname. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html">EC2 instance hostnames, DNS names, and domains</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * <p>A public hostname. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html">EC2 instance hostnames, DNS names, and domains</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  PublicDnsName?: string | undefined;

  /**
   * <p>Public hostname type options. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html">EC2 instance hostnames, DNS names, and domains</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  PublicIpDnsNameOptions?: PublicIpDnsNameOptions | undefined;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>The private IPv4 addresses associated with the network interface.</p>
   * @public
   */
  PrivateIpAddresses?: NetworkInterfacePrivateIpAddress[] | undefined;

  /**
   * <p>The IPv4 prefixes that are assigned to the network interface.</p>
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecification[] | undefined;

  /**
   * <p>The IPv6 prefixes that are assigned to the network interface.</p>
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecification[] | undefined;

  /**
   * <p>The alias or Amazon Web Services account ID of the principal or service that created
   *             the network interface.</p>
   * @public
   */
  RequesterId?: string | undefined;

  /**
   * <p>Indicates whether the network interface is being managed by Amazon Web Services.</p>
   * @public
   */
  RequesterManaged?: boolean | undefined;

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
   * <p>Any tags assigned to the network interface.</p>
   * @public
   */
  TagSet?: Tag[] | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Indicates whether a network interface with an IPv6 address is unreachable from the
   *             public internet. If the value is <code>true</code>, inbound traffic from the internet is
   *             dropped and you cannot assign an elastic IP address to the network interface. The
   *             network interface is reachable from peered VPCs and resources connected through a
   *             transit gateway, including on-premises networks.</p>
   * @public
   */
  DenyAllIgwTraffic?: boolean | undefined;

  /**
   * <p>Indicates whether this is an IPv6 only network interface.</p>
   * @public
   */
  Ipv6Native?: boolean | undefined;

  /**
   * <p>The IPv6 globally unique address associated with the network interface.</p>
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * <p>The service provider that manages the network interface.</p>
   * @public
   */
  Operator?: OperatorResponse | undefined;

  /**
   * <p>The subnets associated with this network interface.</p>
   * @public
   */
  AssociatedSubnets?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInterfaceResult {
  /**
   * <p>Information about the network interface.</p>
   * @public
   */
  NetworkInterface?: NetworkInterface | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InterfacePermissionType = {
  EIP_ASSOCIATE: "EIP-ASSOCIATE",
  INSTANCE_ATTACH: "INSTANCE-ATTACH",
} as const;

/**
 * @public
 */
export type InterfacePermissionType = (typeof InterfacePermissionType)[keyof typeof InterfacePermissionType];

/**
 * <p>Contains the parameters for CreateNetworkInterfacePermission.</p>
 * @public
 */
export interface CreateNetworkInterfacePermissionRequest {
  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services service. Currently not supported.</p>
   * @public
   */
  AwsService?: string | undefined;

  /**
   * <p>The type of permission to grant.</p>
   * @public
   */
  Permission: InterfacePermissionType | undefined;

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
 * @enum
 */
export const NetworkInterfacePermissionStateCode = {
  granted: "granted",
  pending: "pending",
  revoked: "revoked",
  revoking: "revoking",
} as const;

/**
 * @public
 */
export type NetworkInterfacePermissionStateCode =
  (typeof NetworkInterfacePermissionStateCode)[keyof typeof NetworkInterfacePermissionStateCode];

/**
 * <p>Describes the state of a network interface permission.</p>
 * @public
 */
export interface NetworkInterfacePermissionState {
  /**
   * <p>The state of the permission.</p>
   * @public
   */
  State?: NetworkInterfacePermissionStateCode | undefined;

  /**
   * <p>A status message, if applicable.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>Describes a permission for a network interface.</p>
 * @public
 */
export interface NetworkInterfacePermission {
  /**
   * <p>The ID of the network interface permission.</p>
   * @public
   */
  NetworkInterfacePermissionId?: string | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services service.</p>
   * @public
   */
  AwsService?: string | undefined;

  /**
   * <p>The type of permission.</p>
   * @public
   */
  Permission?: InterfacePermissionType | undefined;

  /**
   * <p>Information about the state of the permission.</p>
   * @public
   */
  PermissionState?: NetworkInterfacePermissionState | undefined;
}

/**
 * <p>Contains the output of CreateNetworkInterfacePermission.</p>
 * @public
 */
export interface CreateNetworkInterfacePermissionResult {
  /**
   * <p>Information about the permission for the network interface.</p>
   * @public
   */
  InterfacePermission?: NetworkInterfacePermission | undefined;
}

/**
 * @public
 * @enum
 */
export const SpreadLevel = {
  host: "host",
  rack: "rack",
} as const;

/**
 * @public
 */
export type SpreadLevel = (typeof SpreadLevel)[keyof typeof SpreadLevel];

/**
 * @public
 * @enum
 */
export const PlacementStrategy = {
  cluster: "cluster",
  partition: "partition",
  spread: "spread",
} as const;

/**
 * @public
 */
export type PlacementStrategy = (typeof PlacementStrategy)[keyof typeof PlacementStrategy];

/**
 * @public
 */
export interface CreatePlacementGroupRequest {
  /**
   * <p>The number of partitions. Valid only when <b>Strategy</b> is
   *             set to <code>partition</code>.</p>
   * @public
   */
  PartitionCount?: number | undefined;

  /**
   * <p>The tags to apply to the new placement group.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Determines how placement groups spread instances. </p>
   *          <ul>
   *             <li>
   *                <p>Host – You can use <code>host</code> only with Outpost placement
   *                     groups.</p>
   *             </li>
   *             <li>
   *                <p>Rack – No usage restrictions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SpreadLevel?: SpreadLevel | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A name for the placement group. Must be unique within the scope of your account for
   *             the Region.</p>
   *          <p>Constraints: Up to 255 ASCII characters</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The placement strategy.</p>
   * @public
   */
  Strategy?: PlacementStrategy | undefined;
}

/**
 * @public
 * @enum
 */
export const PlacementGroupState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type PlacementGroupState = (typeof PlacementGroupState)[keyof typeof PlacementGroupState];

/**
 * <p>Describes a placement group.</p>
 * @public
 */
export interface PlacementGroup {
  /**
   * <p>The name of the placement group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The state of the placement group.</p>
   * @public
   */
  State?: PlacementGroupState | undefined;

  /**
   * <p>The placement strategy.</p>
   * @public
   */
  Strategy?: PlacementStrategy | undefined;

  /**
   * <p>The number of partitions. Valid only if <b>strategy</b> is
   *             set to <code>partition</code>.</p>
   * @public
   */
  PartitionCount?: number | undefined;

  /**
   * <p>The ID of the placement group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>Any tags applied to the placement group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the placement group.</p>
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * <p>The spread level for the placement group. <i>Only</i> Outpost placement
   *             groups can be spread across hosts.</p>
   * @public
   */
  SpreadLevel?: SpreadLevel | undefined;
}

/**
 * @public
 */
export interface CreatePlacementGroupResult {
  /**
   * <p>Information about the placement group.</p>
   * @public
   */
  PlacementGroup?: PlacementGroup | undefined;
}

/**
 * @public
 */
export interface CreatePublicIpv4PoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The Availability Zone (AZ) or Local Zone (LZ) network border group that the resource that the IP address is assigned to is in. Defaults to an AZ network border group. For more information on available Local Zones, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail">Local Zone availability</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;
}

/**
 * @public
 */
export interface CreatePublicIpv4PoolResult {
  /**
   * <p>The ID of the public IPv4 pool.</p>
   * @public
   */
  PoolId?: string | undefined;
}

/**
 * @public
 */
export interface CreateReplaceRootVolumeTaskRequest {
  /**
   * <p>The ID of the instance for which to replace the root volume.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the snapshot from which to restore the replacement root volume. The
   *       specified snapshot must be a snapshot that you previously created from the original
   *       root volume.</p>
   *          <p>If you want to restore the replacement root volume to the initial launch state,
   *       or if you want to restore the replacement root volume from an AMI, omit this
   *       parameter.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request.
   *       If you do not specify a client token, a randomly generated token is used for the request
   *       to ensure idempotency. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
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
   * <p>The tags to apply to the root volume replacement task.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The ID of the AMI to use to restore the root volume. The specified AMI must have the
   *       same product code, billing information, architecture type, and virtualization type as
   *       that of the instance.</p>
   *          <p>If you want to restore the replacement volume from a specific snapshot, or if you want
   *       to restore it to its launch state, omit this parameter.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>Indicates whether to automatically delete the original root volume after the root volume
   *       replacement task completes. To delete the original root volume, specify <code>true</code>.
   *       If you choose to keep the original root volume after the replacement task completes, you must
   *       manually delete it when you no longer need it.</p>
   * @public
   */
  DeleteReplacedRootVolume?: boolean | undefined;

  /**
   * <p>Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download
   *       the snapshot blocks from Amazon S3 to the replacement root volume. This is also known as
   *       <i>volume initialization</i>. Specifying a volume initialization rate ensures that
   *       the volume is initialized at a predictable and consistent rate after creation.</p>
   *          <p>Omit this parameter if:</p>
   *          <ul>
   *             <li>
   *                <p>You want to create the volume using fast snapshot restore. You must specify a snapshot
   *           that is enabled for fast snapshot restore. In this case, the volume is fully initialized at
   *           creation.</p>
   *                <note>
   *                   <p>If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate,
   *             the volume will be initialized at the specified rate instead of fast snapshot restore.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>You want to create a volume that is initialized at the default rate.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html">
   *       Initialize Amazon EBS volumes</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Valid range: 100 - 300 MiB/s</p>
   * @public
   */
  VolumeInitializationRate?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ReplaceRootVolumeTaskState = {
  failed: "failed",
  failed_detached: "failed-detached",
  failing: "failing",
  in_progress: "in-progress",
  pending: "pending",
  succeeded: "succeeded",
} as const;

/**
 * @public
 */
export type ReplaceRootVolumeTaskState = (typeof ReplaceRootVolumeTaskState)[keyof typeof ReplaceRootVolumeTaskState];

/**
 * <p>Information about a root volume replacement task.</p>
 * @public
 */
export interface ReplaceRootVolumeTask {
  /**
   * <p>The ID of the root volume replacement task.</p>
   * @public
   */
  ReplaceRootVolumeTaskId?: string | undefined;

  /**
   * <p>The ID of the instance for which the root volume replacement task was created.</p>
   * @public
   */
  InstanceId?: string | undefined;

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
   * @public
   */
  TaskState?: ReplaceRootVolumeTaskState | undefined;

  /**
   * <p>The time the task was started.</p>
   * @public
   */
  StartTime?: string | undefined;

  /**
   * <p>The time the task completed.</p>
   * @public
   */
  CompleteTime?: string | undefined;

  /**
   * <p>The tags assigned to the task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the AMI used to create the replacement root volume.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The ID of the snapshot used to create the replacement root volume.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>Indicates whether the original root volume is to be deleted after the root volume
   *       replacement task completes.</p>
   * @public
   */
  DeleteReplacedRootVolume?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateReplaceRootVolumeTaskResult {
  /**
   * <p>Information about the root volume replacement task.</p>
   * @public
   */
  ReplaceRootVolumeTask?: ReplaceRootVolumeTask | undefined;
}

/**
 * <p>Describes the price for a Reserved Instance.</p>
 * @public
 */
export interface PriceScheduleSpecification {
  /**
   * <p>The number of months remaining in the reservation. For example, 2 is the second to the
   *       last month before the capacity reservation expires.</p>
   * @public
   */
  Term?: number | undefined;

  /**
   * <p>The fixed price for the term.</p>
   * @public
   */
  Price?: number | undefined;

  /**
   * <p>The currency for transacting the Reserved Instance resale. At this time, the only
   *       supported currency is <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;
}

/**
 * <p>Contains the parameters for CreateReservedInstancesListing.</p>
 * @public
 */
export interface CreateReservedInstancesListingRequest {
  /**
   * <p>The ID of the active Standard Reserved Instance.</p>
   * @public
   */
  ReservedInstancesId: string | undefined;

  /**
   * <p>The number of instances that are a part of a Reserved Instance account to be listed in the
   *       Reserved Instance Marketplace. This number should be less than or equal to the instance count
   *       associated with the Reserved Instance ID specified in this call.</p>
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * <p>A list specifying the price of the Standard Reserved Instance for each month remaining in
   *       the Reserved Instance term.</p>
   * @public
   */
  PriceSchedules: PriceScheduleSpecification[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure idempotency of your listings. This
   *       helps avoid duplicate listings. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *       Idempotency</a>.</p>
   * @public
   */
  ClientToken: string | undefined;
}

/**
 * <p>Contains the output of CreateReservedInstancesListing.</p>
 * @public
 */
export interface CreateReservedInstancesListingResult {
  /**
   * <p>Information about the Standard Reserved Instance listing.</p>
   * @public
   */
  ReservedInstancesListings?: ReservedInstancesListing[] | undefined;
}

/**
 * @public
 */
export interface CreateRestoreImageTaskRequest {
  /**
   * <p>The name of the Amazon S3 bucket that contains the stored AMI object.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The name of the stored AMI object in the bucket.</p>
   * @public
   */
  ObjectKey: string | undefined;

  /**
   * <p>The name for the restored AMI. The name must be unique for AMIs in the Region for this
   *       account. If you do not provide a name, the new AMI gets the same name as the original
   *       AMI.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The tags to apply to the AMI and snapshots on restoration. You can tag the AMI, the
   *       snapshots, or both.</p>
   *          <ul>
   *             <li>
   *                <p>To tag the AMI, the value for <code>ResourceType</code> must be
   *           <code>image</code>.</p>
   *             </li>
   *             <li>
   *                <p>To tag the snapshots, the value for <code>ResourceType</code> must be
   *           <code>snapshot</code>. The same tag is applied to all of the snapshots that are
   *           created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
export interface CreateRestoreImageTaskResult {
  /**
   * <p>The AMI ID.</p>
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouteRequest {
  /**
   * <p>The ID of a prefix list used for the destination match.</p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * <p>The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

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
   * <p>The ID of the carrier gateway.</p>
   *          <p>You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.</p>
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
   * <p>The ID of the route table for the route.</p>
   * @public
   */
  RouteTableId: string | undefined;

  /**
   * <p>The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The ID of an internet gateway or virtual private gateway attached to your
   * 			VPC.</p>
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * <p>The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.</p>
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * <p>[IPv6 traffic only] The ID of an egress-only internet gateway.</p>
   * @public
   */
  EgressOnlyInternetGatewayId?: string | undefined;

  /**
   * <p>The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network interface is attached.</p>
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
export interface CreateRouteResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteServerPersistRoutesAction = {
  DISABLE: "disable",
  ENABLE: "enable",
  RESET: "reset",
} as const;

/**
 * @public
 */
export type RouteServerPersistRoutesAction =
  (typeof RouteServerPersistRoutesAction)[keyof typeof RouteServerPersistRoutesAction];

/**
 * @public
 */
export interface CreateRouteServerRequest {
  /**
   * <p>The private Autonomous System Number (ASN) for the Amazon side of the BGP session. Valid values are from 1 to 4294967295. We recommend using a private ASN in the 64512–65534 (16-bit ASN) or 4200000000–4294967294 (32-bit ASN) range.</p>
   * @public
   */
  AmazonSideAsn: number | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Indicates whether routes should be persisted after all BGP sessions are terminated.</p>
   * @public
   */
  PersistRoutes?: RouteServerPersistRoutesAction | undefined;

  /**
   * <p>The number of minutes a route server will wait after BGP is re-established to unpersist the routes in the FIB and RIB. Value must be in the range of 1-5. Required if PersistRoutes is <code>enabled</code>.</p>
   *          <p>If you set the duration to 1 minute, then when your network appliance re-establishes BGP with route server, it has 1 minute to relearn it's adjacent network and advertise those routes to route server before route server resumes normal functionality. In most cases, 1 minute is probably sufficient. If, however, you have concerns that your BGP network may not be capable of fully re-establishing and re-learning everything in 1 minute, you can increase the duration up to 5 minutes.</p>
   * @public
   */
  PersistRoutesDuration?: number | undefined;

  /**
   * <p>Indicates whether SNS notifications should be enabled for route server events. Enabling SNS notifications persists BGP status changes to an SNS topic provisioned by Amazon Web Services.</p>
   * @public
   */
  SnsNotificationsEnabled?: boolean | undefined;

  /**
   * <p>The tags to apply to the route server during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteServerPersistRoutesState = {
  DISABLED: "disabled",
  DISABLING: "disabling",
  ENABLED: "enabled",
  ENABLING: "enabling",
  MODIFYING: "modifying",
  RESETTING: "resetting",
} as const;

/**
 * @public
 */
export type RouteServerPersistRoutesState =
  (typeof RouteServerPersistRoutesState)[keyof typeof RouteServerPersistRoutesState];

/**
 * @public
 * @enum
 */
export const RouteServerState = {
  AVAILABLE: "available",
  DELETED: "deleted",
  DELETING: "deleting",
  MODIFYING: "modifying",
  PENDING: "pending",
} as const;

/**
 * @public
 */
export type RouteServerState = (typeof RouteServerState)[keyof typeof RouteServerState];

/**
 * <p>Describes a route server and its configuration.</p>
 *          <p>Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature,
 * VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads.</p>
 *          <p>Route server supports the follow route table types:</p>
 *          <ul>
 *             <li>
 *                <p>VPC route tables not associated with subnets</p>
 *             </li>
 *             <li>
 *                <p>Subnet route tables</p>
 *             </li>
 *             <li>
 *                <p>Internet gateway route tables</p>
 *             </li>
 *          </ul>
 *          <p>Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-connect.html">Transit Gateway Connect</a>.</p>
 * @public
 */
export interface RouteServer {
  /**
   * <p>The unique identifier of the route server.</p>
   * @public
   */
  RouteServerId?: string | undefined;

  /**
   * <p>The Border Gateway Protocol (BGP) Autonomous System Number (ASN) for the appliance. Valid values are from 1 to 4294967295. We recommend using a private ASN in the 64512–65534 (16-bit ASN) or 4200000000–4294967294 (32-bit ASN) range.</p>
   * @public
   */
  AmazonSideAsn?: number | undefined;

  /**
   * <p>The current state of the route server.</p>
   * @public
   */
  State?: RouteServerState | undefined;

  /**
   * <p>Any tags assigned to the route server.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The current state of route persistence for the route server.</p>
   * @public
   */
  PersistRoutesState?: RouteServerPersistRoutesState | undefined;

  /**
   * <p>The number of minutes a route server will wait after BGP is re-established to unpersist the routes in the FIB and RIB. Value must be in the range of 1-5. The default value is 1. Only valid if <code>persistRoutesState</code> is 'enabled'.</p>
   *          <p>If you set the duration to 1 minute, then when your network appliance re-establishes BGP with route server, it has 1 minute to relearn it's adjacent network and advertise those routes to route server before route server resumes normal functionality. In most cases, 1 minute is probably sufficient. If, however, you have concerns that your BGP network may not be capable of fully re-establishing and re-learning everything in 1 minute, you can increase the duration up to 5 minutes.</p>
   * @public
   */
  PersistRoutesDuration?: number | undefined;

  /**
   * <p>Indicates whether SNS notifications are enabled for the route server. Enabling SNS notifications persists BGP status changes to an SNS topic provisioned by Amazon Web Services.</p>
   * @public
   */
  SnsNotificationsEnabled?: boolean | undefined;

  /**
   * <p>The ARN of the SNS topic where notifications are published.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouteServerResult {
  /**
   * <p>Information about the created route server.</p>
   * @public
   */
  RouteServer?: RouteServer | undefined;
}

/**
 * @public
 */
export interface CreateRouteServerEndpointRequest {
  /**
   * <p>The ID of the route server for which to create an endpoint.</p>
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * <p>The ID of the subnet in which to create the route server endpoint.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The tags to apply to the route server endpoint during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteServerEndpointState = {
  AVAILABLE: "available",
  DELETED: "deleted",
  DELETE_FAILED: "delete-failed",
  DELETING: "deleting",
  FAILED: "failed",
  FAILING: "failing",
  PENDING: "pending",
} as const;

/**
 * @public
 */
export type RouteServerEndpointState = (typeof RouteServerEndpointState)[keyof typeof RouteServerEndpointState];

/**
 * <p>Describes a route server endpoint and its properties.</p>
 *          <p>A route server endpoint is an Amazon Web Services-managed component inside a subnet that facilitates <a href="https://en.wikipedia.org/wiki/Border_Gateway_Protocol">BGP (Border Gateway Protocol)</a> connections between your route server and your BGP peers.</p>
 * @public
 */
export interface RouteServerEndpoint {
  /**
   * <p>The ID of the route server associated with this endpoint.</p>
   * @public
   */
  RouteServerId?: string | undefined;

  /**
   * <p>The unique identifier of the route server endpoint.</p>
   * @public
   */
  RouteServerEndpointId?: string | undefined;

  /**
   * <p>The ID of the VPC containing the endpoint.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the subnet to place the route server endpoint into.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the Elastic network interface for the endpoint.</p>
   * @public
   */
  EniId?: string | undefined;

  /**
   * <p>The IP address of the Elastic network interface for the endpoint.</p>
   * @public
   */
  EniAddress?: string | undefined;

  /**
   * <p>The current state of the route server endpoint.</p>
   * @public
   */
  State?: RouteServerEndpointState | undefined;

  /**
   * <p>The reason for any failure in endpoint creation or operation.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Any tags assigned to the route server endpoint.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRouteServerEndpointResult {
  /**
   * <p>Information about the created route server endpoint.</p>
   * @public
   */
  RouteServerEndpoint?: RouteServerEndpoint | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteServerPeerLivenessMode = {
  BFD: "bfd",
  BGP_KEEPALIVE: "bgp-keepalive",
} as const;

/**
 * @public
 */
export type RouteServerPeerLivenessMode =
  (typeof RouteServerPeerLivenessMode)[keyof typeof RouteServerPeerLivenessMode];

/**
 * <p>The BGP configuration options requested for a route server peer.</p>
 * @public
 */
export interface RouteServerBgpOptionsRequest {
  /**
   * <p>The Border Gateway Protocol (BGP) Autonomous System Number (ASN) for the appliance. Valid values are from 1 to 4294967295. We recommend using a private ASN in the 64512–65534 (16-bit ASN) or 4200000000–4294967294 (32-bit ASN) range.</p>
   * @public
   */
  PeerAsn: number | undefined;

  /**
   * <p>The requested liveness detection protocol for the BGP peer.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>bgp-keepalive</code>: The standard BGP keep alive mechanism (<a href="https://www.rfc-editor.org/rfc/rfc4271#page-21">RFC4271</a>) that is stable but may take longer to fail-over in cases of network impact or router failure.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bfd</code>: An additional Bidirectional Forwarding Detection (BFD) protocol (<a href="https://www.rfc-editor.org/rfc/rfc5880">RFC5880</a>) that enables fast failover by using more sensitive liveness detection.</p>
   *             </li>
   *          </ul>
   *          <p>Defaults to <code>bgp-keepalive</code>.</p>
   * @public
   */
  PeerLivenessDetection?: RouteServerPeerLivenessMode | undefined;
}

/**
 * @public
 */
export interface CreateRouteServerPeerRequest {
  /**
   * <p>The ID of the route server endpoint for which to create a peer.</p>
   * @public
   */
  RouteServerEndpointId: string | undefined;

  /**
   * <p>The IPv4 address of the peer device.</p>
   * @public
   */
  PeerAddress: string | undefined;

  /**
   * <p>The BGP options for the peer, including ASN (Autonomous System Number) and BFD (Bidrectional Forwarding Detection) settings.</p>
   * @public
   */
  BgpOptions: RouteServerBgpOptionsRequest | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The tags to apply to the route server peer during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteServerBfdState = {
  DOWN: "down",
  UP: "up",
} as const;

/**
 * @public
 */
export type RouteServerBfdState = (typeof RouteServerBfdState)[keyof typeof RouteServerBfdState];

/**
 * <p>The current status of Bidirectional Forwarding Detection (BFD) for a BGP session.</p>
 * @public
 */
export interface RouteServerBfdStatus {
  /**
   * <p>The operational status of the BFD session.</p>
   * @public
   */
  Status?: RouteServerBfdState | undefined;
}

/**
 * <p>The BGP configuration options for a route server peer.</p>
 * @public
 */
export interface RouteServerBgpOptions {
  /**
   * <p>The Border Gateway Protocol (BGP) Autonomous System Number (ASN) for the appliance. Valid values are from 1 to 4294967295. We recommend using a private ASN in the 64512–65534 (16-bit ASN) or 4200000000–4294967294 (32-bit ASN) range.</p>
   * @public
   */
  PeerAsn?: number | undefined;

  /**
   * <p>The liveness detection protocol used for the BGP peer.</p>
   *          <p>The requested liveness detection protocol for the BGP peer.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>bgp-keepalive</code>: The standard BGP keep alive mechanism (<a href="https://www.rfc-editor.org/rfc/rfc4271#page-21">RFC4271</a>) that is stable but may take longer to fail-over in cases of network impact or router failure.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bfd</code>: An additional Bidirectional Forwarding Detection (BFD) protocol (<a href="https://www.rfc-editor.org/rfc/rfc5880">RFC5880</a>) that enables fast failover by using more sensitive liveness detection.</p>
   *             </li>
   *          </ul>
   *          <p>Defaults to <code>bgp-keepalive</code>.</p>
   * @public
   */
  PeerLivenessDetection?: RouteServerPeerLivenessMode | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteServerBgpState = {
  DOWN: "down",
  UP: "up",
} as const;

/**
 * @public
 */
export type RouteServerBgpState = (typeof RouteServerBgpState)[keyof typeof RouteServerBgpState];

/**
 * <p>The current status of a BGP session.</p>
 * @public
 */
export interface RouteServerBgpStatus {
  /**
   * <p>The operational status of the BGP session. The status enables you to monitor session liveness if you lack monitoring on your router/appliance.</p>
   * @public
   */
  Status?: RouteServerBgpState | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteServerPeerState = {
  AVAILABLE: "available",
  DELETED: "deleted",
  DELETING: "deleting",
  FAILED: "failed",
  FAILING: "failing",
  PENDING: "pending",
} as const;

/**
 * @public
 */
export type RouteServerPeerState = (typeof RouteServerPeerState)[keyof typeof RouteServerPeerState];

/**
 * <p>Describes a BGP peer configuration for a route server endpoint.</p>
 *          <p>A route server peer is a session between a route server endpoint and the device deployed in Amazon Web Services (such as a firewall appliance or other network security function running on an EC2 instance). The device must meet these requirements:</p>
 *          <ul>
 *             <li>
 *                <p>Have an elastic network interface in the VPC</p>
 *             </li>
 *             <li>
 *                <p>Support BGP (Border Gateway Protocol)</p>
 *             </li>
 *             <li>
 *                <p>Can initiate BGP sessions</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RouteServerPeer {
  /**
   * <p>The unique identifier of the route server peer.</p>
   * @public
   */
  RouteServerPeerId?: string | undefined;

  /**
   * <p>The ID of the route server endpoint associated with this peer.</p>
   * @public
   */
  RouteServerEndpointId?: string | undefined;

  /**
   * <p>The ID of the route server associated with this peer.</p>
   * @public
   */
  RouteServerId?: string | undefined;

  /**
   * <p>The ID of the VPC containing the route server peer.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the subnet containing the route server peer.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The current state of the route server peer.</p>
   * @public
   */
  State?: RouteServerPeerState | undefined;

  /**
   * <p>The reason for any failure in peer creation or operation.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The ID of the Elastic network interface for the route server endpoint.</p>
   * @public
   */
  EndpointEniId?: string | undefined;

  /**
   * <p>The IP address of the Elastic network interface for the route server endpoint.</p>
   * @public
   */
  EndpointEniAddress?: string | undefined;

  /**
   * <p>The IPv4 address of the peer device.</p>
   * @public
   */
  PeerAddress?: string | undefined;

  /**
   * <p>The BGP configuration options for this peer, including ASN (Autonomous System Number) and BFD (Bidrectional Forwarding Detection) settings.</p>
   * @public
   */
  BgpOptions?: RouteServerBgpOptions | undefined;

  /**
   * <p>The current status of the BGP session with this peer.</p>
   * @public
   */
  BgpStatus?: RouteServerBgpStatus | undefined;

  /**
   * <p>The current status of the BFD session with this peer.</p>
   * @public
   */
  BfdStatus?: RouteServerBfdStatus | undefined;

  /**
   * <p>Any tags assigned to the route server peer.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRouteServerPeerResult {
  /**
   * <p>Information about the created route server peer.</p>
   * @public
   */
  RouteServerPeer?: RouteServerPeer | undefined;
}

/**
 * @public
 */
export interface CreateRouteTableRequest {
  /**
   * <p>The tags to assign to the route table.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
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
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;
}

/**
 * <p>Describes an association between a route table and a subnet or gateway.</p>
 * @public
 */
export interface RouteTableAssociation {
  /**
   * <p>Indicates whether this is the main route table.</p>
   * @public
   */
  Main?: boolean | undefined;

  /**
   * <p>The ID of the association.</p>
   * @public
   */
  RouteTableAssociationId?: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * <p>The ID of the subnet. A subnet ID is not returned for an implicit association.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the internet gateway or virtual private gateway.</p>
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  AssociationState?: RouteTableAssociationState | undefined;
}

/**
 * <p>Describes a virtual private gateway propagating route.</p>
 * @public
 */
export interface PropagatingVgw {
  /**
   * <p>The ID of the virtual private gateway.</p>
   * @public
   */
  GatewayId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteOrigin = {
  CreateRoute: "CreateRoute",
  CreateRouteTable: "CreateRouteTable",
  EnableVgwRoutePropagation: "EnableVgwRoutePropagation",
} as const;

/**
 * @public
 */
export type RouteOrigin = (typeof RouteOrigin)[keyof typeof RouteOrigin];

/**
 * @public
 * @enum
 */
export const RouteState = {
  active: "active",
  blackhole: "blackhole",
} as const;

/**
 * @public
 */
export type RouteState = (typeof RouteState)[keyof typeof RouteState];

/**
 * <p>Describes a route in a route table.</p>
 * @public
 */
export interface Route {
  /**
   * <p>The IPv4 CIDR block used for the destination match.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The IPv6 CIDR block used for the destination match.</p>
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * <p>The prefix of the Amazon Web Services service.</p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   * @public
   */
  EgressOnlyInternetGatewayId?: string | undefined;

  /**
   * <p>The ID of a gateway attached to your VPC.</p>
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * <p>The ID of a NAT instance in your VPC.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The ID of Amazon Web Services account that owns the instance.</p>
   * @public
   */
  InstanceOwnerId?: string | undefined;

  /**
   * <p>The ID of a NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string | undefined;

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
   * <p>The ID of the carrier gateway.</p>
   * @public
   */
  CarrierGatewayId?: string | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

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
   * @public
   */
  Origin?: RouteOrigin | undefined;

  /**
   * <p>The state of the route. The <code>blackhole</code> state indicates that the
   * 				route's target isn't available (for example, the specified gateway isn't attached to the
   * 				VPC, or the specified NAT instance has been terminated).</p>
   * @public
   */
  State?: RouteState | undefined;

  /**
   * <p>The ID of a VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;

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
}

/**
 * <p>Describes a route table.</p>
 * @public
 */
export interface RouteTable {
  /**
   * <p>The associations between the route table and your subnets or gateways.</p>
   * @public
   */
  Associations?: RouteTableAssociation[] | undefined;

  /**
   * <p>Any virtual private gateway (VGW) propagating routes.</p>
   * @public
   */
  PropagatingVgws?: PropagatingVgw[] | undefined;

  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * <p>The routes in the route table.</p>
   * @public
   */
  Routes?: Route[] | undefined;

  /**
   * <p>Any tags assigned to the route table.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the route table.</p>
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouteTableResult {
  /**
   * <p>Information about the route table.</p>
   * @public
   */
  RouteTable?: RouteTable | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSecurityGroupRequest {
  /**
   * <p>A description for the security group.</p>
   *          <p>Constraints: Up to 255 characters in length</p>
   *          <p>Valid characters: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;\{\}!$*</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The name of the security group. Names are case-insensitive and must be unique within the VPC.</p>
   *          <p>Constraints: Up to 255 characters in length. Can't start with <code>sg-</code>.</p>
   *          <p>Valid characters: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;\{\}!$*</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The ID of the VPC. Required for a nondefault VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The tags to assign to the security group.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
export interface CreateSecurityGroupResult {
  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The tags assigned to the security group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The security group ARN.</p>
   * @public
   */
  SecurityGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotRequest {
  /**
   * <p>A description for the snapshot.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <note>
   *             <p>Only supported for volumes on Outposts. If the source volume is not on an Outpost,
   *         omit this parameter.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>To create the snapshot on the same Outpost as the source volume, specify the
   *           ARN of that Outpost. The snapshot must be created on the same Outpost as the volume.</p>
   *             </li>
   *             <li>
   *                <p>To create the snapshot in the parent Region of the Outpost, omit this parameter.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html#create-snapshot">Create local snapshots from volumes on an Outpost</a> in the <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The ID of the Amazon EBS volume.</p>
   * @public
   */
  VolumeId: string | undefined;

  /**
   * <p>The tags to apply to the snapshot during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <note>
   *             <p>Only supported for volumes in Local Zones. If the source volume is not in a Local Zone,
   *         omit this parameter.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>To create a local snapshot in the same Local Zone as the source volume, specify
   *           <code>local</code>.</p>
   *             </li>
   *             <li>
   *                <p>To create a regional snapshot in the parent Region of the Local Zone, specify
   *           <code>regional</code> or omit this parameter.</p>
   *             </li>
   *          </ul>
   *          <p>Default value: <code>regional</code>
   *          </p>
   * @public
   */
  Location?: SnapshotLocationEnum | undefined;

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
export const SSEType = {
  none: "none",
  sse_ebs: "sse-ebs",
  sse_kms: "sse-kms",
} as const;

/**
 * @public
 */
export type SSEType = (typeof SSEType)[keyof typeof SSEType];

/**
 * @public
 * @enum
 */
export const SnapshotState = {
  completed: "completed",
  error: "error",
  pending: "pending",
  recoverable: "recoverable",
  recovering: "recovering",
} as const;

/**
 * @public
 */
export type SnapshotState = (typeof SnapshotState)[keyof typeof SnapshotState];

/**
 * @public
 * @enum
 */
export const StorageTier = {
  archive: "archive",
  standard: "standard",
} as const;

/**
 * @public
 */
export type StorageTier = (typeof StorageTier)[keyof typeof StorageTier];

/**
 * @public
 * @enum
 */
export const TransferType = {
  standard: "standard",
  time_based: "time-based",
} as const;

/**
 * @public
 */
export type TransferType = (typeof TransferType)[keyof typeof TransferType];

/**
 * <p>Describes a snapshot.</p>
 * @public
 */
export interface Snapshot {
  /**
   * <p>The Amazon Web Services owner alias, from an Amazon-maintained list (<code>amazon</code>). This is not
   *       the user-configured Amazon Web Services account alias set using the IAM console.</p>
   * @public
   */
  OwnerAlias?: string | undefined;

  /**
   * <p>The ARN of the Outpost on which the snapshot is stored. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html">Amazon EBS local snapshots on Outposts</a> in the
   *   		<i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>Any tags assigned to the snapshot.</p>
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
   * <p>Only for archived snapshots that are temporarily restored. Indicates the date and
   *       time when a temporarily restored snapshot will be automatically re-archived.</p>
   * @public
   */
  RestoreExpiryTime?: Date | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  SseType?: SSEType | undefined;

  /**
   * <p>The Availability Zone or Local Zone of the snapshot. For example, <code>us-west-1a</code>
   *       (Availability Zone) or <code>us-west-2-lax-1a</code> (Local Zone).</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <note>
   *             <p>Only for snapshot copies.</p>
   *          </note>
   *          <p>Indicates whether the snapshot copy was created with a standard or time-based
   *       snapshot copy operation. Time-based snapshot copy operations complete within the
   *       completion duration specified in the request. Standard snapshot copy operations
   *       are completed on a best-effort basis.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>standard</code> - The snapshot copy was created with a standard
   *           snapshot copy operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>time-based</code> - The snapshot copy was created with a time-based
   *           snapshot copy operation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TransferType?: TransferType | undefined;

  /**
   * <note>
   *             <p>Only for snapshot copies created with time-based snapshot copy operations.</p>
   *          </note>
   *          <p>The completion duration requested for the time-based snapshot copy operation.</p>
   * @public
   */
  CompletionDurationMinutes?: number | undefined;

  /**
   * <p>The time stamp when the snapshot was completed.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>The full size of the snapshot, in bytes.</p>
   *          <important>
   *             <p>This is <b>not</b> the incremental size of the snapshot.
   *         This is the full snapshot size and represents the size of all the blocks that were
   *         written to the source volume at the time the snapshot was created.</p>
   *          </important>
   * @public
   */
  FullSnapshotSizeInBytes?: number | undefined;

  /**
   * <p>The ID of the snapshot. Each snapshot receives a unique identifier when it is
   *       created.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The ID of the volume that was used to create the snapshot. Snapshots created by the <a>CopySnapshot</a> action have an arbitrary volume ID that should not be used for any
   *       purpose.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>The snapshot state.</p>
   * @public
   */
  State?: SnapshotState | undefined;

  /**
   * <p>Encrypted Amazon EBS snapshots are copied asynchronously. If a snapshot copy operation fails
   *       (for example, if the proper KMS permissions are not obtained) this field displays error
   *       state details to help you diagnose why the error occurred. This parameter is only returned by
   *       <a>DescribeSnapshots</a>.</p>
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * <p>The time stamp when the snapshot was initiated.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The progress of the snapshot, as a percentage.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the EBS snapshot.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The description for the snapshot.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The size of the volume, in GiB.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that was used to protect the
   *       volume encryption key for the parent volume.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The data encryption key identifier for the snapshot. This value is a unique identifier
   *       that corresponds to the data encryption key that was used to encrypt the original volume or
   *       snapshot copy. Because data encryption keys are inherited by volumes created from snapshots,
   *       and vice versa, if snapshots share the same data encryption key identifier, then they belong
   *       to the same volume/snapshot lineage. This parameter is only returned by <a>DescribeSnapshots</a>.</p>
   * @public
   */
  DataEncryptionKeyId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CopyTagsFromSource = {
  volume: "volume",
} as const;

/**
 * @public
 */
export type CopyTagsFromSource = (typeof CopyTagsFromSource)[keyof typeof CopyTagsFromSource];

/**
 * <p>The instance details to specify which volumes should be snapshotted.</p>
 * @public
 */
export interface InstanceSpecification {
  /**
   * <p>The instance to specify which volumes should be snapshotted.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Excludes the root volume from being snapshotted.</p>
   * @public
   */
  ExcludeBootVolume?: boolean | undefined;

  /**
   * <p>The IDs of the data (non-root) volumes to exclude from the multi-volume snapshot set.
   *       If you specify the ID of the root volume, the request fails. To exclude the root volume,
   *       use <b>ExcludeBootVolume</b>.</p>
   *          <p>You can specify up to 40 volume IDs per request.</p>
   * @public
   */
  ExcludeDataVolumeIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotsRequest {
  /**
   * <p> A description propagated to every snapshot specified by the instance.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The instance to specify which volumes should be included in the snapshots.</p>
   * @public
   */
  InstanceSpecification: InstanceSpecification | undefined;

  /**
   * <note>
   *             <p>Only supported for instances on Outposts. If the source instance is not on an Outpost,
   *         omit this parameter.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>To create the snapshots on the same Outpost as the source instance, specify the
   *           ARN of that Outpost. The snapshots must be created on the same Outpost as the instance.</p>
   *             </li>
   *             <li>
   *                <p>To create the snapshots in the parent Region of the Outpost, omit this parameter.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html#create-snapshot">
   *       Create local snapshots from volumes on an Outpost</a> in the <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>Tags to apply to every snapshot specified by the instance.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Copies the tags from the specified volume to corresponding snapshot.</p>
   * @public
   */
  CopyTagsFromSource?: CopyTagsFromSource | undefined;

  /**
   * <note>
   *             <p>Only supported for instances in Local Zones. If the source instance is not in a Local Zone,
   *         omit this parameter.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>To create local snapshots in the same Local Zone as the source instance, specify
   *           <code>local</code>.</p>
   *             </li>
   *             <li>
   *                <p>To create regional snapshots in the parent Region of the Local Zone, specify
   *           <code>regional</code> or omit this parameter.</p>
   *             </li>
   *          </ul>
   *          <p>Default value: <code>regional</code>
   *          </p>
   * @public
   */
  Location?: SnapshotLocationEnum | undefined;
}

/**
 * <p>Information about a snapshot.</p>
 * @public
 */
export interface SnapshotInfo {
  /**
   * <p>Description specified by the CreateSnapshotRequest that has been applied to all
   *     snapshots.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Tags associated with this snapshot.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>Source volume from which this snapshot was created.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>Current state of the snapshot.</p>
   * @public
   */
  State?: SnapshotState | undefined;

  /**
   * <p>Size of the volume from which this snapshot was created.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>Time this snapshot was started. This is the same for all snapshots initiated by the
   *     same request.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>Progress this snapshot has made towards completing.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>Account id used when creating this snapshot.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Snapshot id that can be used to describe this snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The ARN of the Outpost on which the snapshot is stored. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html">Amazon EBS local snapshots on Outposts</a> in the
   *   		<i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  SseType?: SSEType | undefined;

  /**
   * <p>The Availability Zone or Local Zone of the snapshots. For example, <code>us-west-1a</code>
   *       (Availability Zone) or <code>us-west-2-lax-1a</code> (Local Zone).</p>
   * @public
   */
  AvailabilityZone?: string | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotsResult {
  /**
   * <p>List of snapshots.</p>
   * @public
   */
  Snapshots?: SnapshotInfo[] | undefined;
}

/**
 * <p>Contains the parameters for CreateSpotDatafeedSubscription.</p>
 * @public
 */
export interface CreateSpotDatafeedSubscriptionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *             <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The name of the Amazon S3 bucket in which to store the Spot Instance data feed. For
   *             more information about bucket names, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html">Bucket naming rules</a>
   *             in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The prefix for the data feed file names.</p>
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * <p>Describes a Spot Instance state change.</p>
 * @public
 */
export interface SpotInstanceStateFault {
  /**
   * <p>The reason code for the Spot Instance state change.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The message for the Spot Instance state change.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DatafeedSubscriptionState = {
  Active: "Active",
  Inactive: "Inactive",
} as const;

/**
 * @public
 */
export type DatafeedSubscriptionState = (typeof DatafeedSubscriptionState)[keyof typeof DatafeedSubscriptionState];

/**
 * <p>Describes the data feed for a Spot Instance.</p>
 * @public
 */
export interface SpotDatafeedSubscription {
  /**
   * <p>The name of the Amazon S3 bucket where the Spot Instance data feed is located.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>The fault codes for the Spot Instance request, if any.</p>
   * @public
   */
  Fault?: SpotInstanceStateFault | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The prefix for the data feed files.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The state of the Spot Instance data feed subscription.</p>
   * @public
   */
  State?: DatafeedSubscriptionState | undefined;
}

/**
 * <p>Contains the output of CreateSpotDatafeedSubscription.</p>
 * @public
 */
export interface CreateSpotDatafeedSubscriptionResult {
  /**
   * <p>The Spot Instance data feed subscription.</p>
   * @public
   */
  SpotDatafeedSubscription?: SpotDatafeedSubscription | undefined;
}

/**
 * <p>The tags to apply to the AMI object that will be stored in the Amazon S3 bucket. For more
 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html">Categorizing your storage using
 *         tags</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 * @public
 */
export interface S3ObjectTag {
  /**
   * <p>The key of the tag.</p>
   *          <p>Constraints: Tag keys are case-sensitive and can be up to 128 Unicode characters in
   *       length. May not begin with <code>aws</code>:.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value of the tag.</p>
   *          <p>Constraints: Tag values are case-sensitive and can be up to 256 Unicode characters in
   *       length.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateStoreImageTaskRequest {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket in which the AMI object will be stored. The bucket must be in
   *       the Region in which the request is being made. The AMI object appears in the bucket only after
   *       the upload task has completed. </p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The tags to apply to the AMI object that will be stored in the Amazon S3 bucket. </p>
   * @public
   */
  S3ObjectTags?: S3ObjectTag[] | undefined;

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
export interface CreateStoreImageTaskResult {
  /**
   * <p>The name of the stored AMI object in the S3 bucket.</p>
   * @public
   */
  ObjectKey?: string | undefined;
}

/**
 * @public
 */
export interface CreateSubnetRequest {
  /**
   * <p>The tags to assign to the subnet.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The Availability Zone or Local Zone for the subnet.</p>
   *          <p>Default: Amazon Web Services selects one for you. If you create more than one subnet in your VPC, we
   *           do not necessarily select a different zone for each subnet.</p>
   *          <p>To create a subnet in a Local Zone, set this value to the Local Zone ID, for example
   *           <code>us-west-2-lax-1a</code>. For information about the Regions that support Local Zones,
   *            see <a href="https://docs.aws.amazon.com/local-zones/latest/ug/available-local-zones.html">Available Local Zones</a>.</p>
   *          <p>To create a subnet in an Outpost, set this value to the Availability Zone for the
   *            Outpost and specify the Outpost ARN.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The AZ ID or the Local Zone ID of the subnet.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The IPv4 network range for the subnet, in CIDR notation. For example, <code>10.0.0.0/24</code>.
   *            We modify the specified CIDR block to its canonical form; for example, if you specify
   *            <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   *          <p>This parameter is not supported for an IPv6 only subnet.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>The IPv6 network range for the subnet, in CIDR notation. This parameter is required
   *             for an IPv6 only subnet.</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost. If you specify an Outpost ARN, you must also
   *         specify the Availability Zone of the Outpost subnet.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>Indicates whether to create an IPv6 only subnet.</p>
   * @public
   */
  Ipv6Native?: boolean | undefined;

  /**
   * <p>An IPv4 IPAM pool ID for the subnet.</p>
   * @public
   */
  Ipv4IpamPoolId?: string | undefined;

  /**
   * <p>An IPv4 netmask length for the subnet.</p>
   * @public
   */
  Ipv4NetmaskLength?: number | undefined;

  /**
   * <p>An IPv6 IPAM pool ID for the subnet.</p>
   * @public
   */
  Ipv6IpamPoolId?: string | undefined;

  /**
   * <p>An IPv6 netmask length for the subnet.</p>
   * @public
   */
  Ipv6NetmaskLength?: number | undefined;

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
export interface CreateSubnetResult {
  /**
   * <p>Information about the subnet.</p>
   * @public
   */
  Subnet?: Subnet | undefined;
}

/**
 * @public
 * @enum
 */
export const SubnetCidrReservationType = {
  explicit: "explicit",
  prefix: "prefix",
} as const;

/**
 * @public
 */
export type SubnetCidrReservationType = (typeof SubnetCidrReservationType)[keyof typeof SubnetCidrReservationType];

/**
 * @public
 */
export interface CreateSubnetCidrReservationRequest {
  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>The IPv4 or IPV6 CIDR range to reserve.</p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>The type of reservation. The reservation type determines how the reserved IP addresses are
   *             assigned to resources.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>prefix</code> - Amazon Web Services assigns the reserved IP addresses to
   *                     network interfaces.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>explicit</code> - You assign the reserved IP addresses to network interfaces.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ReservationType: SubnetCidrReservationType | undefined;

  /**
   * <p>The description to assign to the subnet CIDR reservation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The tags to assign to the subnet CIDR reservation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * <p>Describes a subnet CIDR reservation.</p>
 * @public
 */
export interface SubnetCidrReservation {
  /**
   * <p>The ID of the subnet CIDR reservation.</p>
   * @public
   */
  SubnetCidrReservationId?: string | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The CIDR that has been reserved.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The type of reservation. </p>
   * @public
   */
  ReservationType?: SubnetCidrReservationType | undefined;

  /**
   * <p>The ID of the account that owns the subnet CIDR reservation. </p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The description assigned to the subnet CIDR reservation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags assigned to the subnet CIDR reservation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSubnetCidrReservationResult {
  /**
   * <p>Information about the created subnet CIDR reservation.</p>
   * @public
   */
  SubnetCidrReservation?: SubnetCidrReservation | undefined;
}

/**
 * @public
 */
export interface CreateTagsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the resources, separated by spaces.</p>
   *          <p>Constraints: Up to 1000 resource IDs. We recommend breaking up this request into smaller batches.</p>
   * @public
   */
  Resources: string[] | undefined;

  /**
   * <p>The tags. The <code>value</code> parameter is required, but if you don't want the tag to have a value,
   *         specify the parameter with no value, and we set the value to an empty string.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterRequest {
  /**
   * <p>The description of the Traffic Mirror filter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags to assign to a Traffic Mirror filter.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Describes the Traffic Mirror port range.</p>
 * @public
 */
export interface TrafficMirrorPortRange {
  /**
   * <p>The start of the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The end of the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TrafficMirrorRuleAction = {
  accept: "accept",
  reject: "reject",
} as const;

/**
 * @public
 */
export type TrafficMirrorRuleAction = (typeof TrafficMirrorRuleAction)[keyof typeof TrafficMirrorRuleAction];

/**
 * @public
 * @enum
 */
export const TrafficDirection = {
  egress: "egress",
  ingress: "ingress",
} as const;

/**
 * @public
 */
export type TrafficDirection = (typeof TrafficDirection)[keyof typeof TrafficDirection];

/**
 * <p>Describes the Traffic Mirror rule.</p>
 * @public
 */
export interface TrafficMirrorFilterRule {
  /**
   * <p>The ID of the Traffic Mirror rule.</p>
   * @public
   */
  TrafficMirrorFilterRuleId?: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror filter that the rule is associated with.</p>
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * <p>The traffic direction assigned to the Traffic Mirror rule.</p>
   * @public
   */
  TrafficDirection?: TrafficDirection | undefined;

  /**
   * <p>The rule number of the Traffic Mirror rule.</p>
   * @public
   */
  RuleNumber?: number | undefined;

  /**
   * <p>The action assigned to the Traffic Mirror rule.</p>
   * @public
   */
  RuleAction?: TrafficMirrorRuleAction | undefined;

  /**
   * <p>The protocol assigned to the Traffic Mirror rule.</p>
   * @public
   */
  Protocol?: number | undefined;

  /**
   * <p>The destination port range assigned to the Traffic Mirror rule.</p>
   * @public
   */
  DestinationPortRange?: TrafficMirrorPortRange | undefined;

  /**
   * <p>The source port range assigned to the Traffic Mirror rule.</p>
   * @public
   */
  SourcePortRange?: TrafficMirrorPortRange | undefined;

  /**
   * <p>The destination CIDR block assigned to the Traffic Mirror rule.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The source CIDR block assigned to the Traffic Mirror rule.</p>
   * @public
   */
  SourceCidrBlock?: string | undefined;

  /**
   * <p>The description of the Traffic Mirror rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Tags on Traffic Mirroring filter rules.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TrafficMirrorNetworkService = {
  amazon_dns: "amazon-dns",
} as const;

/**
 * @public
 */
export type TrafficMirrorNetworkService =
  (typeof TrafficMirrorNetworkService)[keyof typeof TrafficMirrorNetworkService];

/**
 * <p>Describes the Traffic Mirror filter.</p>
 * @public
 */
export interface TrafficMirrorFilter {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * <p>Information about the ingress rules that are associated with the Traffic Mirror filter.</p>
   * @public
   */
  IngressFilterRules?: TrafficMirrorFilterRule[] | undefined;

  /**
   * <p>Information about the egress rules that are associated with the Traffic Mirror filter.</p>
   * @public
   */
  EgressFilterRules?: TrafficMirrorFilterRule[] | undefined;

  /**
   * <p>The network service traffic that is associated with the Traffic Mirror filter.</p>
   * @public
   */
  NetworkServices?: TrafficMirrorNetworkService[] | undefined;

  /**
   * <p>The description of the Traffic Mirror filter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags assigned to the Traffic Mirror filter.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterResult {
  /**
   * <p>Information about the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilter?: TrafficMirrorFilter | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Information about the Traffic Mirror filter rule port range.</p>
 * @public
 */
export interface TrafficMirrorPortRangeRequest {
  /**
   * <p>The first port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The last port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the filter that this rule is associated with.</p>
   * @public
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The type of traffic.</p>
   * @public
   */
  TrafficDirection: TrafficDirection | undefined;

  /**
   * <p>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given
   *          direction. The rules are processed in ascending order by rule number.</p>
   * @public
   */
  RuleNumber: number | undefined;

  /**
   * <p>The action to take on the filtered traffic.</p>
   * @public
   */
  RuleAction: TrafficMirrorRuleAction | undefined;

  /**
   * <p>The destination port range.</p>
   * @public
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest | undefined;

  /**
   * <p>The source port range.</p>
   * @public
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest | undefined;

  /**
   * <p>The protocol, for example UDP, to assign to the Traffic Mirror rule.</p>
   *          <p>For information about the protocol value, see <a href="https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a> on the  Internet Assigned Numbers Authority (IANA) website.</p>
   * @public
   */
  Protocol?: number | undefined;

  /**
   * <p>The destination CIDR block to assign to the Traffic Mirror rule.</p>
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The source CIDR block to assign to the Traffic Mirror rule.</p>
   * @public
   */
  SourceCidrBlock: string | undefined;

  /**
   * <p>The description of the Traffic Mirror rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Traffic Mirroring tags specifications.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterRuleResult {
  /**
   * <p>The Traffic Mirror rule.</p>
   * @public
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the source network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror target.</p>
   * @public
   */
  TrafficMirrorTargetId: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do
   *          not specify this parameter when you want to mirror the entire packet. To mirror a subset of
   *          the packet, set this to the length (in bytes) that you want to mirror. For example, if you
   *          set this value to 100, then the first 100 bytes that meet the filter criteria are copied to
   *          the target.</p>
   *          <p>If you do not want to mirror the entire packet, use the <code>PacketLength</code> parameter to specify the number of bytes in each packet to mirror.</p>
   *          <p>For sessions with Network Load Balancer (NLB) Traffic Mirror targets the default <code>PacketLength</code> will be set to 8500. Valid values are 1-8500. Setting a <code>PacketLength</code> greater than 8500 will result in an error response.</p>
   * @public
   */
  PacketLength?: number | undefined;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   * @public
   */
  SessionNumber: number | undefined;

  /**
   * <p>The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN
   *          protocol, see <a href="https://datatracker.ietf.org/doc/html/rfc7348">RFC 7348</a>. If you do
   *          not specify a <code>VirtualNetworkId</code>, an account-wide unique ID is chosen at
   *          random.</p>
   * @public
   */
  VirtualNetworkId?: number | undefined;

  /**
   * <p>The description of the Traffic Mirror session.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags to assign to a Traffic Mirror session.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Describes a Traffic Mirror session.</p>
 * @public
 */
export interface TrafficMirrorSession {
  /**
   * <p>The ID for the Traffic Mirror session.</p>
   * @public
   */
  TrafficMirrorSessionId?: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror target.</p>
   * @public
   */
  TrafficMirrorTargetId?: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror session's network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The ID of the account that owns the Traffic Mirror session.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The number of bytes in each packet to mirror. These are the bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet</p>
   * @public
   */
  PacketLength?: number | undefined;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   * @public
   */
  SessionNumber?: number | undefined;

  /**
   * <p>The virtual network ID associated with the Traffic Mirror session.</p>
   * @public
   */
  VirtualNetworkId?: number | undefined;

  /**
   * <p>The description of the Traffic Mirror session.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags assigned to the Traffic Mirror session.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorSessionResult {
  /**
   * <p>Information about the Traffic Mirror session.</p>
   * @public
   */
  TrafficMirrorSession?: TrafficMirrorSession | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorTargetRequest {
  /**
   * <p>The network interface ID that is associated with the target.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.</p>
   * @public
   */
  NetworkLoadBalancerArn?: string | undefined;

  /**
   * <p>The description of the Traffic Mirror target.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags to assign to the Traffic Mirror target.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The ID of the Gateway Load Balancer endpoint.</p>
   * @public
   */
  GatewayLoadBalancerEndpointId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TrafficMirrorTargetType = {
  gateway_load_balancer_endpoint: "gateway-load-balancer-endpoint",
  network_interface: "network-interface",
  network_load_balancer: "network-load-balancer",
} as const;

/**
 * @public
 */
export type TrafficMirrorTargetType = (typeof TrafficMirrorTargetType)[keyof typeof TrafficMirrorTargetType];

/**
 * <p>Describes a Traffic Mirror target.</p>
 * @public
 */
export interface TrafficMirrorTarget {
  /**
   * <p>The ID of the Traffic Mirror target.</p>
   * @public
   */
  TrafficMirrorTargetId?: string | undefined;

  /**
   * <p>The network interface ID that is attached to the target.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer.</p>
   * @public
   */
  NetworkLoadBalancerArn?: string | undefined;

  /**
   * <p>The type of Traffic Mirror target.</p>
   * @public
   */
  Type?: TrafficMirrorTargetType | undefined;

  /**
   * <p>Information about the Traffic Mirror target.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the account that owns the Traffic Mirror target.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The tags assigned to the Traffic Mirror target.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the Gateway Load Balancer endpoint.</p>
   * @public
   */
  GatewayLoadBalancerEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorTargetResult {
  /**
   * <p>Information about the Traffic Mirror target.</p>
   * @public
   */
  TrafficMirrorTarget?: TrafficMirrorTarget | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AutoAcceptSharedAttachmentsValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type AutoAcceptSharedAttachmentsValue =
  (typeof AutoAcceptSharedAttachmentsValue)[keyof typeof AutoAcceptSharedAttachmentsValue];

/**
 * @public
 * @enum
 */
export const DefaultRouteTableAssociationValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type DefaultRouteTableAssociationValue =
  (typeof DefaultRouteTableAssociationValue)[keyof typeof DefaultRouteTableAssociationValue];

/**
 * @public
 * @enum
 */
export const DefaultRouteTablePropagationValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type DefaultRouteTablePropagationValue =
  (typeof DefaultRouteTablePropagationValue)[keyof typeof DefaultRouteTablePropagationValue];

/**
 * @public
 * @enum
 */
export const MulticastSupportValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type MulticastSupportValue = (typeof MulticastSupportValue)[keyof typeof MulticastSupportValue];

/**
 * @public
 * @enum
 */
export const VpnEcmpSupportValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type VpnEcmpSupportValue = (typeof VpnEcmpSupportValue)[keyof typeof VpnEcmpSupportValue];

/**
 * <p>Describes the options for a transit gateway.</p>
 * @public
 */
export interface TransitGatewayRequestOptions {
  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *          The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs. The default is <code>64512</code>.</p>
   * @public
   */
  AmazonSideAsn?: number | undefined;

  /**
   * <p>Enable or disable automatic acceptance of attachment requests. Disabled by default.</p>
   * @public
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | undefined;

  /**
   * <p>Enable or disable automatic association with the default association route table. Enabled by default.</p>
   * @public
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | undefined;

  /**
   * <p>Enable or disable automatic propagation of routes to the default propagation route table. Enabled by default.</p>
   * @public
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | undefined;

  /**
   * <p>Enable or disable Equal Cost Multipath Protocol support. Enabled by default.</p>
   * @public
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | undefined;

  /**
   * <p>Enable or disable DNS support. Enabled by default.</p>
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * <p>Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * </p>
   *          <p>This option is disabled by default.</p>
   *          <p>For more information about security group referencing, see  <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security">Security group referencing</a> in the <i>Amazon Web Services Transit Gateways Guide</i>.</p>
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * <p>Indicates whether multicast is enabled on the transit gateway</p>
   * @public
   */
  MulticastSupport?: MulticastSupportValue | undefined;

  /**
   * <p>One or more IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.</p>
   * @public
   */
  TransitGatewayCidrBlocks?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRequest {
  /**
   * <p>A description of the transit gateway.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The transit gateway options.</p>
   * @public
   */
  Options?: TransitGatewayRequestOptions | undefined;

  /**
   * <p>The tags to apply to the transit gateway.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the options for a transit gateway.</p>
 * @public
 */
export interface TransitGatewayOptions {
  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *          The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.</p>
   * @public
   */
  AmazonSideAsn?: number | undefined;

  /**
   * <p>The transit gateway CIDR blocks.</p>
   * @public
   */
  TransitGatewayCidrBlocks?: string[] | undefined;

  /**
   * <p>Indicates whether attachment requests are automatically accepted.</p>
   * @public
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | undefined;

  /**
   * <p>Indicates whether resource attachments are automatically associated with the default
   *          association route table. Enabled by default. If <code>defaultRouteTableAssociation</code>
   *          is set to <code>enable</code>,
   *          Amazon Web Services Transit Gateway will create the default transit gateway route
   *          table.</p>
   * @public
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | undefined;

  /**
   * <p>The ID of the default association route table.</p>
   * @public
   */
  AssociationDefaultRouteTableId?: string | undefined;

  /**
   * <p>Indicates whether resource attachments automatically propagate routes to the default
   *          propagation route table. Enabled by default. If <code>defaultRouteTablePropagation</code>
   *          is set to <code>enable</code>,
   *          Amazon Web Services Transit Gateway will create the default transit gateway route
   *          table.</p>
   * @public
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | undefined;

  /**
   * <p>The ID of the default propagation route table.</p>
   * @public
   */
  PropagationDefaultRouteTableId?: string | undefined;

  /**
   * <p>Indicates whether Equal Cost Multipath Protocol support is enabled.</p>
   * @public
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | undefined;

  /**
   * <p>Indicates whether DNS support is enabled.</p>
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * <p>Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * </p>
   *          <p>This option is disabled by default.</p>
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * <p>Indicates whether multicast is enabled on the transit gateway</p>
   * @public
   */
  MulticastSupport?: MulticastSupportValue | undefined;
}

/**
 * @public
 * @enum
 */
export const TransitGatewayState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  modifying: "modifying",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayState = (typeof TransitGatewayState)[keyof typeof TransitGatewayState];

/**
 * <p>Describes a transit gateway.</p>
 * @public
 */
export interface TransitGateway {
  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   * @public
   */
  TransitGatewayArn?: string | undefined;

  /**
   * <p>The state of the transit gateway.</p>
   * @public
   */
  State?: TransitGatewayState | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The description of the transit gateway.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The transit gateway options.</p>
   * @public
   */
  Options?: TransitGatewayOptions | undefined;

  /**
   * <p>The tags for the transit gateway.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayResult {
  /**
   * <p>Information about the transit gateway.</p>
   * @public
   */
  TransitGateway?: TransitGateway | undefined;
}

/**
 * @public
 * @enum
 */
export const ProtocolValue = {
  gre: "gre",
} as const;

/**
 * @public
 */
export type ProtocolValue = (typeof ProtocolValue)[keyof typeof ProtocolValue];

/**
 * <p>The options for a Connect attachment.</p>
 * @public
 */
export interface CreateTransitGatewayConnectRequestOptions {
  /**
   * <p>The tunnel protocol.</p>
   * @public
   */
  Protocol: ProtocolValue | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectRequest {
  /**
   * <p>The ID of the transit gateway attachment. You can specify a VPC attachment or Amazon Web Services Direct Connect attachment.</p>
   * @public
   */
  TransportTransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The Connect attachment options.</p>
   * @public
   */
  Options: CreateTransitGatewayConnectRequestOptions | undefined;

  /**
   * <p>The tags to apply to the Connect attachment.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the Connect attachment options.</p>
 * @public
 */
export interface TransitGatewayConnectOptions {
  /**
   * <p>The tunnel protocol.</p>
   * @public
   */
  Protocol?: ProtocolValue | undefined;
}

/**
 * <p>Describes a transit gateway Connect attachment.</p>
 * @public
 */
export interface TransitGatewayConnect {
  /**
   * <p>The ID of the Connect attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the attachment from which the Connect attachment was created.</p>
   * @public
   */
  TransportTransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The state of the attachment.</p>
   * @public
   */
  State?: TransitGatewayAttachmentState | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The Connect attachment options.</p>
   * @public
   */
  Options?: TransitGatewayConnectOptions | undefined;

  /**
   * <p>The tags for the attachment.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectResult {
  /**
   * <p>Information about the Connect attachment.</p>
   * @public
   */
  TransitGatewayConnect?: TransitGatewayConnect | undefined;
}

/**
 * <p>The BGP options for the Connect attachment.</p>
 * @public
 */
export interface TransitGatewayConnectRequestBgpOptions {
  /**
   * <p>The peer Autonomous System Number (ASN).</p>
   * @public
   */
  PeerAsn?: number | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the Connect attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The peer IP address (GRE outer IP address) on the transit gateway side of the Connect peer, which must be
   *             specified from a transit gateway CIDR block. If not specified, Amazon automatically assigns
   *             the first available IP address from the transit gateway CIDR block.</p>
   * @public
   */
  TransitGatewayAddress?: string | undefined;

  /**
   * <p>The peer IP address (GRE outer IP address) on the appliance side of the Connect peer.</p>
   * @public
   */
  PeerAddress: string | undefined;

  /**
   * <p>The BGP options for the Connect peer.</p>
   * @public
   */
  BgpOptions?: TransitGatewayConnectRequestBgpOptions | undefined;

  /**
   * <p>The range of inside IP addresses that are used for BGP peering. You must specify a
   *             size /29 IPv4 CIDR block from the <code>169.254.0.0/16</code> range. The first address
   *             from the range must be configured on the appliance as the BGP IP address. You can also
   *             optionally specify a size /125 IPv6 CIDR block from the <code>fd00::/8</code>
   *             range.</p>
   * @public
   */
  InsideCidrBlocks: string[] | undefined;

  /**
   * <p>The tags to apply to the Connect peer.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
export const BgpStatus = {
  down: "down",
  up: "up",
} as const;

/**
 * @public
 */
export type BgpStatus = (typeof BgpStatus)[keyof typeof BgpStatus];

/**
 * <p>The BGP configuration information.</p>
 * @public
 */
export interface TransitGatewayAttachmentBgpConfiguration {
  /**
   * <p>The transit gateway Autonomous System Number (ASN).</p>
   * @public
   */
  TransitGatewayAsn?: number | undefined;

  /**
   * <p>The peer Autonomous System Number (ASN).</p>
   * @public
   */
  PeerAsn?: number | undefined;

  /**
   * <p>The interior BGP peer IP address for the transit gateway.</p>
   * @public
   */
  TransitGatewayAddress?: string | undefined;

  /**
   * <p>The interior BGP peer IP address for the appliance.</p>
   * @public
   */
  PeerAddress?: string | undefined;

  /**
   * <p>The BGP status.</p>
   * @public
   */
  BgpStatus?: BgpStatus | undefined;
}

/**
 * <p>Describes the Connect peer details.</p>
 * @public
 */
export interface TransitGatewayConnectPeerConfiguration {
  /**
   * <p>The Connect peer IP address on the transit gateway side of the tunnel.</p>
   * @public
   */
  TransitGatewayAddress?: string | undefined;

  /**
   * <p>The Connect peer IP address on the appliance side of the tunnel.</p>
   * @public
   */
  PeerAddress?: string | undefined;

  /**
   * <p>The range of interior BGP peer IP addresses.</p>
   * @public
   */
  InsideCidrBlocks?: string[] | undefined;

  /**
   * <p>The tunnel protocol.</p>
   * @public
   */
  Protocol?: ProtocolValue | undefined;

  /**
   * <p>The BGP configuration details.</p>
   * @public
   */
  BgpConfigurations?: TransitGatewayAttachmentBgpConfiguration[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TransitGatewayConnectPeerState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayConnectPeerState =
  (typeof TransitGatewayConnectPeerState)[keyof typeof TransitGatewayConnectPeerState];

/**
 * <p>Describes a transit gateway Connect peer.</p>
 * @public
 */
export interface TransitGatewayConnectPeer {
  /**
   * <p>The ID of the Connect attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the Connect peer.</p>
   * @public
   */
  TransitGatewayConnectPeerId?: string | undefined;

  /**
   * <p>The state of the Connect peer.</p>
   * @public
   */
  State?: TransitGatewayConnectPeerState | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The Connect peer details.</p>
   * @public
   */
  ConnectPeerConfiguration?: TransitGatewayConnectPeerConfiguration | undefined;

  /**
   * <p>The tags for the Connect peer.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectPeerResult {
  /**
   * <p>Information about the Connect peer.</p>
   * @public
   */
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer | undefined;
}

/**
 * @public
 * @enum
 */
export const AutoAcceptSharedAssociationsValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type AutoAcceptSharedAssociationsValue =
  (typeof AutoAcceptSharedAssociationsValue)[keyof typeof AutoAcceptSharedAssociationsValue];

/**
 * @public
 * @enum
 */
export const Igmpv2SupportValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type Igmpv2SupportValue = (typeof Igmpv2SupportValue)[keyof typeof Igmpv2SupportValue];

/**
 * @public
 * @enum
 */
export const StaticSourcesSupportValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type StaticSourcesSupportValue = (typeof StaticSourcesSupportValue)[keyof typeof StaticSourcesSupportValue];

/**
 * <p>The options for the transit gateway multicast domain.</p>
 * @public
 */
export interface CreateTransitGatewayMulticastDomainRequestOptions {
  /**
   * <p>Specify whether to enable Internet Group Management Protocol (IGMP) version 2 for the transit gateway multicast domain.</p>
   * @public
   */
  Igmpv2Support?: Igmpv2SupportValue | undefined;

  /**
   * <p>Specify whether to enable support for statically configuring multicast group sources for a domain.</p>
   * @public
   */
  StaticSourcesSupport?: StaticSourcesSupportValue | undefined;

  /**
   * <p>Indicates whether to automatically accept cross-account subnet associations that are associated with the transit gateway multicast domain.</p>
   * @public
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The options for the transit gateway multicast domain.</p>
   * @public
   */
  Options?: CreateTransitGatewayMulticastDomainRequestOptions | undefined;

  /**
   * <p>The tags for the transit gateway multicast domain.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the options for a transit gateway multicast domain.</p>
 * @public
 */
export interface TransitGatewayMulticastDomainOptions {
  /**
   * <p>Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain.</p>
   * @public
   */
  Igmpv2Support?: Igmpv2SupportValue | undefined;

  /**
   * <p>Indicates whether support for statically configuring transit gateway multicast group sources is turned on.</p>
   * @public
   */
  StaticSourcesSupport?: StaticSourcesSupportValue | undefined;

  /**
   * <p>Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain.</p>
   * @public
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue | undefined;
}

/**
 * @public
 * @enum
 */
export const TransitGatewayMulticastDomainState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayMulticastDomainState =
  (typeof TransitGatewayMulticastDomainState)[keyof typeof TransitGatewayMulticastDomainState];

/**
 * <p>Describes the transit gateway multicast domain.</p>
 * @public
 */
export interface TransitGatewayMulticastDomain {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainArn?: string | undefined;

  /**
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The options for the transit gateway multicast domain.</p>
   * @public
   */
  Options?: TransitGatewayMulticastDomainOptions | undefined;

  /**
   * <p>The state of the transit gateway multicast domain.</p>
   * @public
   */
  State?: TransitGatewayMulticastDomainState | undefined;

  /**
   * <p>The time the transit gateway multicast domain was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The tags for the transit gateway multicast domain.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain | undefined;
}

/**
 * <p>Describes whether dynamic routing is enabled or disabled for the transit gateway peering request.</p>
 * @public
 */
export interface CreateTransitGatewayPeeringAttachmentRequestOptions {
  /**
   * <p>Indicates whether dynamic routing is enabled or disabled.</p>
   * @public
   */
  DynamicRouting?: DynamicRoutingValue | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The ID of the peer transit gateway with which to create the peering attachment.</p>
   * @public
   */
  PeerTransitGatewayId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the peer transit gateway.</p>
   * @public
   */
  PeerAccountId: string | undefined;

  /**
   * <p>The Region where the peer transit gateway is located.</p>
   * @public
   */
  PeerRegion: string | undefined;

  /**
   * <p>Requests a transit gateway peering attachment.</p>
   * @public
   */
  Options?: CreateTransitGatewayPeeringAttachmentRequestOptions | undefined;

  /**
   * <p>The tags to apply to the transit gateway peering attachment.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
export interface CreateTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   * @public
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPolicyTableRequest {
  /**
   * <p>The ID of the transit gateway used for the policy table.</p>
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The tags specification for the transit gateway policy table created during the request.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
export const TransitGatewayPolicyTableState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayPolicyTableState =
  (typeof TransitGatewayPolicyTableState)[keyof typeof TransitGatewayPolicyTableState];

/**
 * <p>Describes a transit gateway policy table.</p>
 * @public
 */
export interface TransitGatewayPolicyTable {
  /**
   * <p>The ID of the transit gateway policy table.</p>
   * @public
   */
  TransitGatewayPolicyTableId?: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The state of the transit gateway policy table</p>
   * @public
   */
  State?: TransitGatewayPolicyTableState | undefined;

  /**
   * <p>The timestamp when the transit gateway policy table was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>he key-value pairs associated with the transit gateway policy table.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPolicyTableResult {
  /**
   * <p>Describes the created transit gateway policy table.</p>
   * @public
   */
  TransitGatewayPolicyTable?: TransitGatewayPolicyTable | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list that is used for destination matches.</p>
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * <p>The ID of the attachment to which traffic is routed.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
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
 * @enum
 */
export const TransitGatewayPrefixListReferenceState = {
  available: "available",
  deleting: "deleting",
  modifying: "modifying",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayPrefixListReferenceState =
  (typeof TransitGatewayPrefixListReferenceState)[keyof typeof TransitGatewayPrefixListReferenceState];

/**
 * <p>Describes a transit gateway prefix list attachment.</p>
 * @public
 */
export interface TransitGatewayPrefixListAttachment {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

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
}

/**
 * <p>Describes a prefix list reference.</p>
 * @public
 */
export interface TransitGatewayPrefixListReference {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The ID of the prefix list owner.</p>
   * @public
   */
  PrefixListOwnerId?: string | undefined;

  /**
   * <p>The state of the prefix list reference.</p>
   * @public
   */
  State?: TransitGatewayPrefixListReferenceState | undefined;

  /**
   * <p>Indicates whether traffic that matches this route is dropped.</p>
   * @public
   */
  Blackhole?: boolean | undefined;

  /**
   * <p>Information about the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachment?: TransitGatewayPrefixListAttachment | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the prefix list reference.</p>
   * @public
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteRequest {
  /**
   * <p>The CIDR range used for destination matches. Routing decisions are based on the
   *          most specific match.</p>
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
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
 * @enum
 */
export const TransitGatewayRouteState = {
  active: "active",
  blackhole: "blackhole",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayRouteState = (typeof TransitGatewayRouteState)[keyof typeof TransitGatewayRouteState];

/**
 * <p>Describes a route attachment.</p>
 * @public
 */
export interface TransitGatewayRouteAttachment {
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated. </p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;
}

/**
 * @public
 * @enum
 */
export const TransitGatewayRouteType = {
  propagated: "propagated",
  static: "static",
} as const;

/**
 * @public
 */
export type TransitGatewayRouteType = (typeof TransitGatewayRouteType)[keyof typeof TransitGatewayRouteType];

/**
 * <p>Describes a route for a transit gateway route table.</p>
 * @public
 */
export interface TransitGatewayRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The ID of the prefix list used for destination matches.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The ID of the transit gateway route table announcement. </p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;

  /**
   * <p>The attachments.</p>
   * @public
   */
  TransitGatewayAttachments?: TransitGatewayRouteAttachment[] | undefined;

  /**
   * <p>The route type.</p>
   * @public
   */
  Type?: TransitGatewayRouteType | undefined;

  /**
   * <p>The state of the route.</p>
   * @public
   */
  State?: TransitGatewayRouteState | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   * @public
   */
  Route?: TransitGatewayRoute | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The tags to apply to the transit gateway route table.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
export const TransitGatewayRouteTableState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayRouteTableState =
  (typeof TransitGatewayRouteTableState)[keyof typeof TransitGatewayRouteTableState];

/**
 * <p>Describes a transit gateway route table.</p>
 * @public
 */
export interface TransitGatewayRouteTable {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The state of the transit gateway route table.</p>
   * @public
   */
  State?: TransitGatewayRouteTableState | undefined;

  /**
   * <p>Indicates whether this is the default association route table for the transit gateway.</p>
   * @public
   */
  DefaultAssociationRouteTable?: boolean | undefined;

  /**
   * <p>Indicates whether this is the default propagation route table for the transit gateway.</p>
   * @public
   */
  DefaultPropagationRouteTable?: boolean | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Any tags assigned to the route table.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableResult {
  /**
   * <p>Information about the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableAnnouncementRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the peering attachment.</p>
   * @public
   */
  PeeringAttachmentId: string | undefined;

  /**
   * <p>The tags specifications applied to the transit gateway route table announcement.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
export const TransitGatewayRouteTableAnnouncementDirection = {
  incoming: "incoming",
  outgoing: "outgoing",
} as const;

/**
 * @public
 */
export type TransitGatewayRouteTableAnnouncementDirection =
  (typeof TransitGatewayRouteTableAnnouncementDirection)[keyof typeof TransitGatewayRouteTableAnnouncementDirection];

/**
 * @public
 * @enum
 */
export const TransitGatewayRouteTableAnnouncementState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  failed: "failed",
  failing: "failing",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayRouteTableAnnouncementState =
  (typeof TransitGatewayRouteTableAnnouncementState)[keyof typeof TransitGatewayRouteTableAnnouncementState];

/**
 * <p>Describes a transit gateway route table announcement.</p>
 * @public
 */
export interface TransitGatewayRouteTableAnnouncement {
  /**
   * <p>The ID of the transit gateway route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the core network for the transit gateway route table announcement.</p>
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * <p>The ID of the peer transit gateway.</p>
   * @public
   */
  PeerTransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the core network ID for the peer.</p>
   * @public
   */
  PeerCoreNetworkId?: string | undefined;

  /**
   * <p>The ID of the peering attachment.</p>
   * @public
   */
  PeeringAttachmentId?: string | undefined;

  /**
   * <p>The direction for the route table announcement.</p>
   * @public
   */
  AnnouncementDirection?: TransitGatewayRouteTableAnnouncementDirection | undefined;

  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * <p>The state of the transit gateway announcement.</p>
   * @public
   */
  State?: TransitGatewayRouteTableAnnouncementState | undefined;

  /**
   * <p>The timestamp when the transit gateway route table announcement was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The key-value pairs associated with the route table announcement.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableAnnouncementResult {
  /**
   * <p>Provides details about the transit gateway route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncement?: TransitGatewayRouteTableAnnouncement | undefined;
}

/**
 * <p>Describes the options for a VPC attachment.</p>
 * @public
 */
export interface CreateTransitGatewayVpcAttachmentRequestOptions {
  /**
   * <p>Enable or disable DNS support. The default is <code>enable</code>.</p>
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * <p>Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.</p>
   *          <p>This option is set to <code>enable</code> by default. However, at the transit gateway level the default is set to <code>disable</code>.</p>
   *          <p>For more information about security group referencing, see  <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security">Security group referencing </a> in the <i>Amazon Web Services Transit Gateways Guide</i>.</p>
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * <p>Enable or disable IPv6 support.  The default is <code>disable</code>.</p>
   * @public
   */
  Ipv6Support?: Ipv6SupportValue | undefined;

  /**
   * <p>Enable or disable support for appliance mode. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. The default is <code>disable</code>.</p>
   * @public
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The IDs of one or more subnets. You can specify only one subnet per Availability Zone.
   *          You must specify at least one subnet, but we recommend that you specify two subnets for better availability.
   *          The transit gateway uses one IP address from each specified subnet.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The VPC attachment options.</p>
   * @public
   */
  Options?: CreateTransitGatewayVpcAttachmentRequestOptions | undefined;

  /**
   * <p>The tags to apply to the VPC attachment.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
export interface CreateTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the VPC attachment.</p>
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}

/**
 * @public
 * @enum
 */
export const VerifiedAccessEndpointAttachmentType = {
  vpc: "vpc",
} as const;

/**
 * @public
 */
export type VerifiedAccessEndpointAttachmentType =
  (typeof VerifiedAccessEndpointAttachmentType)[keyof typeof VerifiedAccessEndpointAttachmentType];

/**
 * <p>Describes the port range for a Verified Access endpoint.</p>
 * @public
 */
export interface CreateVerifiedAccessEndpointPortRange {
  /**
   * <p>The start of the port range.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The end of the port range.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const VerifiedAccessEndpointProtocol = {
  http: "http",
  https: "https",
  tcp: "tcp",
} as const;

/**
 * @public
 */
export type VerifiedAccessEndpointProtocol =
  (typeof VerifiedAccessEndpointProtocol)[keyof typeof VerifiedAccessEndpointProtocol];

/**
 * <p>Describes the CIDR options for a Verified Access endpoint.</p>
 * @public
 */
export interface CreateVerifiedAccessEndpointCidrOptions {
  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IDs of the subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The CIDR.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: CreateVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * @public
 * @enum
 */
export const VerifiedAccessEndpointType = {
  cidr: "cidr",
  load_balancer: "load-balancer",
  network_interface: "network-interface",
  rds: "rds",
} as const;

/**
 * @public
 */
export type VerifiedAccessEndpointType = (typeof VerifiedAccessEndpointType)[keyof typeof VerifiedAccessEndpointType];

/**
 * <p>Describes the load balancer options when creating an Amazon Web Services Verified Access endpoint using the
 *             <code>load-balancer</code> type.</p>
 * @public
 */
export interface CreateVerifiedAccessEndpointLoadBalancerOptions {
  /**
   * <p>The IP protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IP port number.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The ARN of the load balancer.</p>
   * @public
   */
  LoadBalancerArn?: string | undefined;

  /**
   * <p>The IDs of the subnets. You can specify only one subnet per Availability Zone.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: CreateVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>Describes the network interface options when creating an Amazon Web Services Verified Access endpoint using the
 *             <code>network-interface</code> type.</p>
 * @public
 */
export interface CreateVerifiedAccessEndpointEniOptions {
  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The IP protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IP port number.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: CreateVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>Describes the RDS options for a Verified Access endpoint.</p>
 * @public
 */
export interface CreateVerifiedAccessEndpointRdsOptions {
  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The port.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The ARN of the RDS instance.</p>
   * @public
   */
  RdsDbInstanceArn?: string | undefined;

  /**
   * <p>The ARN of the DB cluster.</p>
   * @public
   */
  RdsDbClusterArn?: string | undefined;

  /**
   * <p>The ARN of the RDS proxy.</p>
   * @public
   */
  RdsDbProxyArn?: string | undefined;

  /**
   * <p>The RDS endpoint.</p>
   * @public
   */
  RdsEndpoint?: string | undefined;

  /**
   * <p>The IDs of the subnets. You can specify only one subnet per Availability Zone.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * <p>
 *          Verified Access provides server side encryption by default to data at rest using Amazon Web Services-owned KMS keys. You also have the option of using customer managed KMS keys, which can be specified using the options below.
 *       </p>
 * @public
 */
export interface VerifiedAccessSseSpecificationRequest {
  /**
   * <p>
   *          Enable or disable the use of customer managed KMS keys for server side encryption.
   *       </p>
   *          <p>Valid values: <code>True</code> | <code>False</code>
   *          </p>
   * @public
   */
  CustomerManagedKeyEnabled?: boolean | undefined;

  /**
   * <p>
   *          The ARN of the KMS key.
   *       </p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessEndpointRequest {
  /**
   * <p>The ID of the Verified Access group to associate the endpoint with.</p>
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * <p>The type of Verified Access endpoint to create.</p>
   * @public
   */
  EndpointType: VerifiedAccessEndpointType | undefined;

  /**
   * <p>The type of attachment.</p>
   * @public
   */
  AttachmentType: VerifiedAccessEndpointAttachmentType | undefined;

  /**
   * <p>The ARN of the public TLS/SSL certificate in Amazon Web Services Certificate Manager to associate with the endpoint.
   *          The CN in the certificate must match the DNS name your end users will use to reach your
   *          application.</p>
   * @public
   */
  DomainCertificateArn?: string | undefined;

  /**
   * <p>The DNS name for users to reach your application.</p>
   * @public
   */
  ApplicationDomain?: string | undefined;

  /**
   * <p>A custom identifier that is prepended to the DNS name that is generated for the
   *          endpoint.</p>
   * @public
   */
  EndpointDomainPrefix?: string | undefined;

  /**
   * <p>The IDs of the security groups to associate with the Verified Access endpoint. Required if <code>AttachmentType</code> is set to <code>vpc</code>.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The load balancer details. This parameter is required if the endpoint type is
   *             <code>load-balancer</code>.</p>
   * @public
   */
  LoadBalancerOptions?: CreateVerifiedAccessEndpointLoadBalancerOptions | undefined;

  /**
   * <p>The network interface details. This parameter is required if the endpoint type is
   *             <code>network-interface</code>.</p>
   * @public
   */
  NetworkInterfaceOptions?: CreateVerifiedAccessEndpointEniOptions | undefined;

  /**
   * <p>A description for the Verified Access endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Verified Access policy document.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * <p>The tags to assign to the Verified Access endpoint.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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

  /**
   * <p>The options for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;

  /**
   * <p>The RDS details. This parameter is required if the endpoint type is <code>rds</code>.</p>
   * @public
   */
  RdsOptions?: CreateVerifiedAccessEndpointRdsOptions | undefined;

  /**
   * <p>The CIDR options. This parameter is required if the endpoint type is <code>cidr</code>.</p>
   * @public
   */
  CidrOptions?: CreateVerifiedAccessEndpointCidrOptions | undefined;
}

/**
 * <p>Describes a port range.</p>
 * @public
 */
export interface VerifiedAccessEndpointPortRange {
  /**
   * <p>The start of the port range.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The end of the port range.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * <p>Describes the CIDR options for a Verified Access endpoint.</p>
 * @public
 */
export interface VerifiedAccessEndpointCidrOptions {
  /**
   * <p>The CIDR.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: VerifiedAccessEndpointPortRange[] | undefined;

  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IDs of the subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * <p>Describes a load balancer when creating an Amazon Web Services Verified Access endpoint using the
 *             <code>load-balancer</code> type.</p>
 * @public
 */
export interface VerifiedAccessEndpointLoadBalancerOptions {
  /**
   * <p>The IP protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IP port number.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The ARN of the load balancer.</p>
   * @public
   */
  LoadBalancerArn?: string | undefined;

  /**
   * <p>The IDs of the subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: VerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>Options for a network-interface type endpoint.</p>
 * @public
 */
export interface VerifiedAccessEndpointEniOptions {
  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The IP protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IP port number.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: VerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>Describes the RDS options for a Verified Access endpoint.</p>
 * @public
 */
export interface VerifiedAccessEndpointRdsOptions {
  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The port.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The ARN of the RDS instance.</p>
   * @public
   */
  RdsDbInstanceArn?: string | undefined;

  /**
   * <p>The ARN of the DB cluster.</p>
   * @public
   */
  RdsDbClusterArn?: string | undefined;

  /**
   * <p>The ARN of the RDS proxy.</p>
   * @public
   */
  RdsDbProxyArn?: string | undefined;

  /**
   * <p>The RDS endpoint.</p>
   * @public
   */
  RdsEndpoint?: string | undefined;

  /**
   * <p>The IDs of the subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const VerifiedAccessEndpointStatusCode = {
  active: "active",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
  updating: "updating",
} as const;

/**
 * @public
 */
export type VerifiedAccessEndpointStatusCode =
  (typeof VerifiedAccessEndpointStatusCode)[keyof typeof VerifiedAccessEndpointStatusCode];

/**
 * <p>Describes the status of a Verified Access endpoint.</p>
 * @public
 */
export interface VerifiedAccessEndpointStatus {
  /**
   * <p>The status code of the Verified Access endpoint.</p>
   * @public
   */
  Code?: VerifiedAccessEndpointStatusCode | undefined;

  /**
   * <p>The status message of the Verified Access endpoint.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>An Amazon Web Services Verified Access endpoint specifies the application that Amazon Web Services Verified Access provides access to. It must be
 *          attached to an Amazon Web Services Verified Access group. An Amazon Web Services Verified Access endpoint must also have an attached access policy
 *          before you attached it to a group.</p>
 * @public
 */
export interface VerifiedAccessEndpoint {
  /**
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointId?: string | undefined;

  /**
   * <p>The DNS name for users to reach your application.</p>
   * @public
   */
  ApplicationDomain?: string | undefined;

  /**
   * <p>The type of Amazon Web Services Verified Access endpoint. Incoming application requests will be sent to an IP
   *          address, load balancer or a network interface depending on the endpoint type
   *          specified.</p>
   * @public
   */
  EndpointType?: VerifiedAccessEndpointType | undefined;

  /**
   * <p>The type of attachment used to provide connectivity between the Amazon Web Services Verified Access endpoint and the
   *          application.</p>
   * @public
   */
  AttachmentType?: VerifiedAccessEndpointAttachmentType | undefined;

  /**
   * <p>The ARN of a public TLS/SSL certificate imported into or created with ACM.</p>
   * @public
   */
  DomainCertificateArn?: string | undefined;

  /**
   * <p>A DNS name that is generated for the endpoint.</p>
   * @public
   */
  EndpointDomain?: string | undefined;

  /**
   * <p>Returned if endpoint has a device trust provider attached.</p>
   * @public
   */
  DeviceValidationDomain?: string | undefined;

  /**
   * <p>The IDs of the security groups for the endpoint.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The load balancer details if creating the Amazon Web Services Verified Access endpoint as
   *          <code>load-balancer</code>type.</p>
   * @public
   */
  LoadBalancerOptions?: VerifiedAccessEndpointLoadBalancerOptions | undefined;

  /**
   * <p>The options for network-interface type endpoint.</p>
   * @public
   */
  NetworkInterfaceOptions?: VerifiedAccessEndpointEniOptions | undefined;

  /**
   * <p>The endpoint status.</p>
   * @public
   */
  Status?: VerifiedAccessEndpointStatus | undefined;

  /**
   * <p>A description for the Amazon Web Services Verified Access endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The last updated time.</p>
   * @public
   */
  LastUpdatedTime?: string | undefined;

  /**
   * <p>The deletion time.</p>
   * @public
   */
  DeletionTime?: string | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The options in use for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;

  /**
   * <p>The options for an RDS endpoint.</p>
   * @public
   */
  RdsOptions?: VerifiedAccessEndpointRdsOptions | undefined;

  /**
   * <p>The options for a CIDR endpoint.</p>
   * @public
   */
  CidrOptions?: VerifiedAccessEndpointCidrOptions | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessEndpointResult {
  /**
   * <p>Details about the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessGroupRequest {
  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * <p>A description for the Verified Access group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Verified Access policy document.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * <p>The tags to assign to the Verified Access group.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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

  /**
   * <p>The options for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;
}

/**
 * <p>Describes a Verified Access group.</p>
 * @public
 */
export interface VerifiedAccessGroup {
  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * <p>A description for the Amazon Web Services Verified Access group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Web Services account number that owns the group.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The ARN of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupArn?: string | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The last updated time.</p>
   * @public
   */
  LastUpdatedTime?: string | undefined;

  /**
   * <p>The deletion time.</p>
   * @public
   */
  DeletionTime?: string | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The options in use for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessGroupResult {
  /**
   * <p>Details about the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroup?: VerifiedAccessGroup | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessInstanceRequest {
  /**
   * <p>A description for the Verified Access instance.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags to assign to the Verified Access instance.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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

  /**
   * <p>Enable or disable support for Federal Information Processing Standards (FIPS) on the instance.</p>
   * @public
   */
  FIPSEnabled?: boolean | undefined;

  /**
   * <p>The custom subdomain.</p>
   * @public
   */
  CidrEndpointsCustomSubDomain?: string | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessInstanceResult {
  /**
   * <p>Details about the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstance?: VerifiedAccessInstance | undefined;
}

/**
 * <p>Describes the options when creating an Amazon Web Services Verified Access trust provider using the
 *             <code>device</code> type.</p>
 * @public
 */
export interface CreateVerifiedAccessTrustProviderDeviceOptions {
  /**
   * <p>The ID of the tenant application with the device-identity provider.</p>
   * @public
   */
  TenantId?: string | undefined;

  /**
   * <p>
   *          The URL Amazon Web Services Verified Access will use to verify the authenticity of the device tokens.
   *       </p>
   * @public
   */
  PublicSigningKeyUrl?: string | undefined;
}

/**
 * <p>Describes the OpenID Connect (OIDC) options.</p>
 * @public
 */
export interface CreateVerifiedAccessNativeApplicationOidcOptions {
  /**
   * <p>The public signing key endpoint.</p>
   * @public
   */
  PublicSigningKeyEndpoint?: string | undefined;

  /**
   * <p>The OIDC issuer identifier of the IdP.</p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p>The authorization endpoint of the IdP.</p>
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * <p>The token endpoint of the IdP.</p>
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * <p>The user info endpoint of the IdP.</p>
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * <p>The OAuth 2.0 client identifier.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The OAuth 2.0 client secret.</p>
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * <p>The set of user claims to be requested from the IdP.</p>
   * @public
   */
  Scope?: string | undefined;
}

/**
 * <p>Describes the options when creating an Amazon Web Services Verified Access trust provider using the <code>user</code>
 *          type.</p>
 * @public
 */
export interface CreateVerifiedAccessTrustProviderOidcOptions {
  /**
   * <p>The OIDC issuer.</p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p>The OIDC authorization endpoint.</p>
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * <p>The OIDC token endpoint.</p>
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * <p>The OIDC user info endpoint.</p>
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * <p>The client identifier.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The client secret.</p>
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * <p>OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to a user's details. Each scope returns a specific set of user attributes.</p>
   * @public
   */
  Scope?: string | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessTrustProviderRequest {
  /**
   * <p>The type of trust provider.</p>
   * @public
   */
  TrustProviderType: TrustProviderType | undefined;

  /**
   * <p>The type of user-based trust provider. This parameter is required when the provider type
   *          is <code>user</code>.</p>
   * @public
   */
  UserTrustProviderType?: UserTrustProviderType | undefined;

  /**
   * <p>The type of device-based trust provider. This parameter is required when the provider
   *          type is <code>device</code>.</p>
   * @public
   */
  DeviceTrustProviderType?: DeviceTrustProviderType | undefined;

  /**
   * <p>The options for a OpenID Connect-compatible user-identity trust provider. This parameter
   *          is required when the provider type is <code>user</code>.</p>
   * @public
   */
  OidcOptions?: CreateVerifiedAccessTrustProviderOidcOptions | undefined;

  /**
   * <p>The options for a device-based trust provider. This parameter is required when the
   *          provider type is <code>device</code>.</p>
   * @public
   */
  DeviceOptions?: CreateVerifiedAccessTrustProviderDeviceOptions | undefined;

  /**
   * <p>The identifier to be used when working with policy rules.</p>
   * @public
   */
  PolicyReferenceName: string | undefined;

  /**
   * <p>A description for the Verified Access trust provider.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags to assign to the Verified Access trust provider.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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

  /**
   * <p>The options for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;

  /**
   * <p>The OpenID Connect (OIDC) options.</p>
   * @public
   */
  NativeApplicationOidcOptions?: CreateVerifiedAccessNativeApplicationOidcOptions | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessTrustProviderResult {
  /**
   * <p>Details about the Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider | undefined;
}

/**
 * @public
 */
export interface CreateVolumeRequest {
  /**
   * <p>The ID of the Availability Zone in which to create the volume. For example, <code>us-east-1a</code>.</p>
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>Indicates whether the volume should be encrypted.
   *       The effect of setting the encryption state to <code>true</code> depends on
   * the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled.
   *       For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/work-with-ebs-encr.html#encryption-by-default">Encryption by default</a>
   *       in the <i>Amazon EBS User Guide</i>.</p>
   *          <p>Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption.
   *       For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption-requirements.html#ebs-encryption_supported_instances">Supported
   *         instance types</a>.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents
   *       the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline
   *       performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000 - 16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100 - 64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100 - 256,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>For <code>io2</code> volumes, you can achieve up to 256,000 IOPS on
   * <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html">instances
   * built on the Nitro System</a>. On other instances, you can achieve performance up to 32,000 IOPS.</p>
   *          <p>This parameter is required for <code>io1</code> and <code>io2</code> volumes. The default for <code>gp3</code> volumes is 3,000 IOPS.
   *       This parameter is not supported for <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The identifier of the KMS key to use for Amazon EBS encryption.
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
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost on which to create the volume.</p>
   *          <p>If you intend to use a volume with an instance running on an outpost, then you must
   *          create the volume on the same outpost as the instance. You can't use a volume created
   *          in an Amazon Web Services Region with an instance on an Amazon Web Services outpost, or the other way around.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size.
   *       If you specify a snapshot, the default is the snapshot size. You can specify a volume
   *       size that is equal to or larger than the snapshot size.</p>
   *          <p>The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 4 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 4 - 65,536 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1 - 1024 GiB</p>
   *             </li>
   *          </ul>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size.</p>
   * @public
   */
  SnapshotId?: string | undefined;

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
   *          <important>
   *             <p>Throughput Optimized HDD (<code>st1</code>) and Cold HDD (<code>sc1</code>) volumes can't be used as boot volumes.</p>
   *          </important>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html">Amazon EBS volume types</a> in the
   *       <i>Amazon EBS User Guide</i>.</p>
   *          <p>Default: <code>gp2</code>
   *          </p>
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * <p>The tags to apply to the volume during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Indicates whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the
   *       volume to up to 16 <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html">Instances built on the Nitro System</a> in the same Availability Zone. This parameter is
   *     	supported with <code>io1</code> and <code>io2</code> volumes only. For more information,
   *     	see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html">
   *     		Amazon EBS Multi-Attach</a> in the <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  MultiAttachEnabled?: boolean | undefined;

  /**
   * <p>The throughput to provision for a volume, with a maximum of 1,000 MiB/s.</p>
   *          <p>This parameter is valid only for <code>gp3</code> volumes.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency
   *       of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensure
   *         Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download
   *       the snapshot blocks from Amazon S3 to the volume. This is also known as <i>volume
   *         initialization</i>. Specifying a volume initialization rate ensures that the volume is
   *       initialized at a predictable and consistent rate after creation.</p>
   *          <p>This parameter is supported only for volumes created from snapshots. Omit this parameter
   *       if:</p>
   *          <ul>
   *             <li>
   *                <p>You want to create the volume using fast snapshot restore. You must specify a snapshot
   *           that is enabled for fast snapshot restore. In this case, the volume is fully initialized at
   *           creation.</p>
   *                <note>
   *                   <p>If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate,
   *             the volume will be initialized at the specified rate instead of fast snapshot restore.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>You want to create a volume that is initialized at the default rate.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html">
   *       Initialize Amazon EBS volumes</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Valid range: 100 - 300 MiB/s</p>
   * @public
   */
  VolumeInitializationRate?: number | undefined;

  /**
   * <p>Reserved for internal use.</p>
   * @public
   */
  Operator?: OperatorRequest | undefined;

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
export const VolumeState = {
  available: "available",
  creating: "creating",
  deleted: "deleted",
  deleting: "deleting",
  error: "error",
  in_use: "in-use",
} as const;

/**
 * @public
 */
export type VolumeState = (typeof VolumeState)[keyof typeof VolumeState];

/**
 * <p>Describes a volume.</p>
 * @public
 */
export interface Volume {
  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents
   *       the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline
   *       performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Any tags assigned to the volume.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The volume type.</p>
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * <note>
   *             <p>This parameter is not returned by CreateVolume.</p>
   *          </note>
   *          <p>Indicates whether the volume was created using fast snapshot restore.</p>
   * @public
   */
  FastRestored?: boolean | undefined;

  /**
   * <p>Indicates whether Amazon EBS Multi-Attach is enabled.</p>
   * @public
   */
  MultiAttachEnabled?: boolean | undefined;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * <note>
   *             <p>This parameter is not returned by CreateVolume.</p>
   *          </note>
   *          <p>Reserved for future use.</p>
   * @public
   */
  SseType?: SSEType | undefined;

  /**
   * <p>The service provider that manages the volume.</p>
   * @public
   */
  Operator?: OperatorResponse | undefined;

  /**
   * <p>The Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate) specified for the volume during creation,
   *       in MiB/s. If no volume initialization rate was specified, the value is <code>null</code>.</p>
   * @public
   */
  VolumeInitializationRate?: number | undefined;

  /**
   * <p>The ID of the volume.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>The size of the volume, in GiBs.</p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The snapshot from which the volume was created, if applicable.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The Availability Zone for the volume.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The volume state.</p>
   * @public
   */
  State?: VolumeState | undefined;

  /**
   * <p>The time stamp when volume creation was initiated.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <note>
   *             <p>This parameter is not returned by CreateVolume.</p>
   *          </note>
   *          <p>Information about the volume attachments.</p>
   * @public
   */
  Attachments?: VolumeAttachment[] | undefined;

  /**
   * <p>Indicates whether the volume is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that was used to protect the
   *       volume encryption key for the volume.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcRequest {
  /**
   * <p>The IPv4 network range for the VPC, in CIDR notation. For example,
   * 		        <code>10.0.0.0/16</code>. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.</p>
   * @public
   */
  Ipv6Pool?: string | undefined;

  /**
   * <p>The IPv6 CIDR block from the IPv6 address pool. You must also specify <code>Ipv6Pool</code> in the request.</p>
   *          <p>To let Amazon choose the IPv6 CIDR block for you, omit this parameter.</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * <p>The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *
   *       </p>
   * @public
   */
  Ipv4IpamPoolId?: string | undefined;

  /**
   * <p>The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  Ipv4NetmaskLength?: number | undefined;

  /**
   * <p>The ID of an IPv6 IPAM pool which will be used to allocate this VPC an IPv6 CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  Ipv6IpamPoolId?: string | undefined;

  /**
   * <p>The netmask length of the IPv6 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  Ipv6NetmaskLength?: number | undefined;

  /**
   * <p>The name of the location from which we advertise the IPV6 CIDR block. Use this parameter to limit the address to this location.</p>
   *          <p> You must set <code>AmazonProvidedIpv6CidrBlock</code> to <code>true</code> to use this parameter.</p>
   * @public
   */
  Ipv6CidrBlockNetworkBorderGroup?: string | undefined;

  /**
   * <p>The tags to assign to the VPC.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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
   * @public
   */
  InstanceTenancy?: Tenancy | undefined;

  /**
   * <p>Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.
   *             You cannot specify the range of IP addresses, or the size of the CIDR block.</p>
   * @public
   */
  AmazonProvidedIpv6CidrBlock?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateVpcResult {
  /**
   * <p>Information about the VPC.</p>
   * @public
   */
  Vpc?: Vpc | undefined;
}

/**
 * @public
 * @enum
 */
export const InternetGatewayExclusionMode = {
  allow_bidirectional: "allow-bidirectional",
  allow_egress: "allow-egress",
} as const;

/**
 * @public
 */
export type InternetGatewayExclusionMode =
  (typeof InternetGatewayExclusionMode)[keyof typeof InternetGatewayExclusionMode];

/**
 * @public
 */
export interface CreateVpcBlockPublicAccessExclusionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A subnet ID.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>A VPC ID.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The exclusion mode for internet gateway traffic.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allow-bidirectional</code>: Allow all internet traffic to and from the excluded VPCs and subnets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allow-egress</code>: Allow outbound internet traffic from the excluded VPCs and subnets. Block inbound internet traffic to the excluded VPCs and subnets. Only applies when VPC Block Public Access is set to Bidirectional.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InternetGatewayExclusionMode: InternetGatewayExclusionMode | undefined;

  /**
   * <p>
   *             <code>tag</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 * @enum
 */
export const VpcBlockPublicAccessExclusionState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_in_progress: "delete-in-progress",
  disable_complete: "disable-complete",
  disable_in_progress: "disable-in-progress",
  update_complete: "update-complete",
  update_failed: "update-failed",
  update_in_progress: "update-in-progress",
} as const;

/**
 * @public
 */
export type VpcBlockPublicAccessExclusionState =
  (typeof VpcBlockPublicAccessExclusionState)[keyof typeof VpcBlockPublicAccessExclusionState];

/**
 * <p>A VPC BPA exclusion is a mode that can be applied to a single VPC or subnet that exempts it from the account’s BPA mode and will allow bidirectional or egress-only access. You can create BPA exclusions for VPCs and subnets even when BPA is not enabled on the account to ensure that there is no traffic disruption to the exclusions when VPC BPA is turned on. To learn more about VPC BPA, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html">Block public access to VPCs and subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @public
 */
export interface VpcBlockPublicAccessExclusion {
  /**
   * <p>The ID of the exclusion.</p>
   * @public
   */
  ExclusionId?: string | undefined;

  /**
   * <p>The exclusion mode for internet gateway traffic.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allow-bidirectional</code>: Allow all internet traffic to and from the excluded VPCs and subnets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allow-egress</code>: Allow outbound internet traffic from the excluded VPCs and subnets. Block inbound internet traffic to the excluded VPCs and subnets. Only applies when VPC Block Public Access is set to Bidirectional.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InternetGatewayExclusionMode?: InternetGatewayExclusionMode | undefined;

  /**
   * <p>The ARN of the exclusion.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The state of the exclusion.</p>
   * @public
   */
  State?: VpcBlockPublicAccessExclusionState | undefined;

  /**
   * <p>The reason for the current exclusion state.</p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p>When the exclusion was created.</p>
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * <p>When the exclusion was last updated.</p>
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * <p>When the exclusion was deleted.</p>
   * @public
   */
  DeletionTimestamp?: Date | undefined;

  /**
   * <p>
   *             <code>tag</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateVpcBlockPublicAccessExclusionResult {
  /**
   * <p>Details about an exclusion.</p>
   * @public
   */
  VpcBlockPublicAccessExclusion?: VpcBlockPublicAccessExclusion | undefined;
}

/**
 * @public
 * @enum
 */
export const DnsRecordIpType = {
  dualstack: "dualstack",
  ipv4: "ipv4",
  ipv6: "ipv6",
  service_defined: "service-defined",
} as const;

/**
 * @public
 */
export type DnsRecordIpType = (typeof DnsRecordIpType)[keyof typeof DnsRecordIpType];

/**
 * <p>Describes the DNS options for an endpoint.</p>
 * @public
 */
export interface DnsOptionsSpecification {
  /**
   * <p>The DNS records created for the endpoint.</p>
   * @public
   */
  DnsRecordIpType?: DnsRecordIpType | undefined;

  /**
   * <p>Indicates whether to enable private DNS only for inbound endpoints. This option is
   *           available only for services that support both gateway and interface endpoints. It routes
   *           traffic that originates from the VPC to the gateway endpoint and traffic that originates
   *           from on-premises to the interface endpoint.</p>
   * @public
   */
  PrivateDnsOnlyForInboundResolverEndpoint?: boolean | undefined;
}

/**
 * <p>Describes the configuration of a subnet for a VPC endpoint.</p>
 * @public
 */
export interface SubnetConfiguration {
  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The IPv4 address to assign to the endpoint network interface in the subnet. You must provide
   *             an IPv4 address if the VPC endpoint supports IPv4.</p>
   *          <p>If you specify an IPv4 address when modifying a VPC endpoint, we replace the existing
   *             endpoint network interface with a new endpoint network interface with this IP address.
   *             This process temporarily disconnects the subnet and the VPC endpoint.</p>
   * @public
   */
  Ipv4?: string | undefined;

  /**
   * <p>The IPv6 address to assign to the endpoint network interface in the subnet. You must provide
   *             an IPv6 address if the VPC endpoint supports IPv6.</p>
   *          <p>If you specify an IPv6 address when modifying a VPC endpoint, we replace the existing
   *             endpoint network interface with a new endpoint network interface with this IP address.
   *             This process temporarily disconnects the subnet and the VPC endpoint.</p>
   * @public
   */
  Ipv6?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VpcEndpointType = {
  Gateway: "Gateway",
  GatewayLoadBalancer: "GatewayLoadBalancer",
  Interface: "Interface",
  Resource: "Resource",
  ServiceNetwork: "ServiceNetwork",
} as const;

/**
 * @public
 */
export type VpcEndpointType = (typeof VpcEndpointType)[keyof typeof VpcEndpointType];

/**
 * @public
 */
export interface CreateVpcEndpointRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The type of endpoint.</p>
   *          <p>Default: Gateway</p>
   * @public
   */
  VpcEndpointType?: VpcEndpointType | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The name of the endpoint service.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>(Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the
   *             service. The policy must be in valid JSON format. If this parameter is not specified, we
   *             attach a default policy that allows full access to the service.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * <p>(Gateway endpoint) The route table IDs.</p>
   * @public
   */
  RouteTableIds?: string[] | undefined;

  /**
   * <p>(Interface and Gateway Load Balancer endpoints) The IDs of the subnets in which to create endpoint
   *             network interfaces. For a Gateway Load Balancer endpoint, you can specify only one subnet.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>(Interface endpoint) The IDs of the security groups to associate with the
   *             endpoint network interfaces. If this parameter is not specified, we use the default
   *             security group for the VPC.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The IP address type for the endpoint.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The DNS options for the endpoint.</p>
   * @public
   */
  DnsOptions?: DnsOptionsSpecification | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>(Interface endpoint) Indicates whether to associate a private hosted zone with the
   *             specified VPC. The private hosted zone contains a record set for the default public DNS
   *             name for the service for the Region (for example,
   *                 <code>kinesis.us-east-1.amazonaws.com</code>), which resolves to the private IP
   *             addresses of the endpoint network interfaces in the VPC. This enables you to make
   *             requests to the default public DNS name for the service instead of the public DNS names
   *             that are automatically generated by the VPC endpoint service.</p>
   *          <p>To use a private hosted zone, you must set the following VPC attributes to
   *             <code>true</code>: <code>enableDnsHostnames</code> and
   *             <code>enableDnsSupport</code>. Use <a>ModifyVpcAttribute</a> to set the VPC
   *             attributes.</p>
   * @public
   */
  PrivateDnsEnabled?: boolean | undefined;

  /**
   * <p>The tags to associate with the endpoint.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The subnet configurations for the endpoint.</p>
   * @public
   */
  SubnetConfigurations?: SubnetConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a service network that will be associated with the VPC
   *          endpoint of type service-network.</p>
   * @public
   */
  ServiceNetworkArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a resource configuration that will be associated with
   *          the VPC endpoint of type resource.</p>
   * @public
   */
  ResourceConfigurationArn?: string | undefined;

  /**
   * <p>The Region where the service is hosted. The default is the current Region.</p>
   * @public
   */
  ServiceRegion?: string | undefined;
}

/**
 * <p>Describes a DNS entry.</p>
 * @public
 */
export interface DnsEntry {
  /**
   * <p>The DNS name.</p>
   * @public
   */
  DnsName?: string | undefined;

  /**
   * <p>The ID of the private hosted zone.</p>
   * @public
   */
  HostedZoneId?: string | undefined;
}

/**
 * <p>Describes the DNS options for an endpoint.</p>
 * @public
 */
export interface DnsOptions {
  /**
   * <p>The DNS records created for the endpoint.</p>
   * @public
   */
  DnsRecordIpType?: DnsRecordIpType | undefined;

  /**
   * <p>Indicates whether to enable private DNS only for inbound endpoints.</p>
   * @public
   */
  PrivateDnsOnlyForInboundResolverEndpoint?: boolean | undefined;
}

/**
 * <p>Describes a security group.</p>
 * @public
 */
export interface SecurityGroupIdentifier {
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
}

/**
 * <p>Prefixes of the subnet IP.</p>
 * @public
 */
export interface SubnetIpPrefixes {
  /**
   * <p>ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>Array of SubnetIpPrefixes objects.</p>
   * @public
   */
  IpPrefixes?: string[] | undefined;
}

/**
 * <p>The last error that occurred for a VPC endpoint.</p>
 * @public
 */
export interface LastError {
  /**
   * <p>The error message for the VPC endpoint error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The error code for the VPC endpoint error.</p>
   * @public
   */
  Code?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const State = {
  Available: "Available",
  Deleted: "Deleted",
  Deleting: "Deleting",
  Expired: "Expired",
  Failed: "Failed",
  Partial: "Partial",
  Pending: "Pending",
  PendingAcceptance: "PendingAcceptance",
  Rejected: "Rejected",
} as const;

/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * <p>Describes a VPC endpoint.</p>
 * @public
 */
export interface VpcEndpoint {
  /**
   * <p>The ID of the endpoint.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The type of endpoint.</p>
   * @public
   */
  VpcEndpointType?: VpcEndpointType | undefined;

  /**
   * <p>The ID of the VPC to which the endpoint is associated.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The name of the service to which the endpoint is associated.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>The state of the endpoint.</p>
   * @public
   */
  State?: State | undefined;

  /**
   * <p>The policy document associated with the endpoint, if applicable.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * <p>(Gateway endpoint) The IDs of the route tables associated with the endpoint.</p>
   * @public
   */
  RouteTableIds?: string[] | undefined;

  /**
   * <p>(Interface endpoint) The subnets for the endpoint.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>(Interface endpoint) Information about the security groups that are associated with
   *             the network interface.</p>
   * @public
   */
  Groups?: SecurityGroupIdentifier[] | undefined;

  /**
   * <p>The IP address type for the endpoint.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The DNS options for the endpoint.</p>
   * @public
   */
  DnsOptions?: DnsOptions | undefined;

  /**
   * <p>(Interface endpoint) Indicates whether the VPC is associated with a private hosted zone.</p>
   * @public
   */
  PrivateDnsEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether the endpoint is being managed by its service.</p>
   * @public
   */
  RequesterManaged?: boolean | undefined;

  /**
   * <p>(Interface endpoint) The network interfaces for the endpoint.</p>
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>(Interface endpoint) The DNS entries for the endpoint.</p>
   * @public
   */
  DnsEntries?: DnsEntry[] | undefined;

  /**
   * <p>The date and time that the endpoint was created.</p>
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * <p>The tags assigned to the endpoint.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the endpoint.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The last error that occurred for endpoint.</p>
   * @public
   */
  LastError?: LastError | undefined;

  /**
   * <p>Array of IPv4 prefixes.</p>
   * @public
   */
  Ipv4Prefixes?: SubnetIpPrefixes[] | undefined;

  /**
   * <p>Array of IPv6 prefixes.</p>
   * @public
   */
  Ipv6Prefixes?: SubnetIpPrefixes[] | undefined;

  /**
   * <p>Reason for the failure.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  ServiceNetworkArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource configuration.</p>
   * @public
   */
  ResourceConfigurationArn?: string | undefined;

  /**
   * <p>The Region where the service is hosted.</p>
   * @public
   */
  ServiceRegion?: string | undefined;
}

/**
 * @internal
 */
export const ResponseLaunchTemplateDataFilterSensitiveLog = (obj: ResponseLaunchTemplateData): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LaunchTemplateVersionFilterSensitiveLog = (obj: LaunchTemplateVersion): any => ({
  ...obj,
  ...(obj.LaunchTemplateData && {
    LaunchTemplateData: ResponseLaunchTemplateDataFilterSensitiveLog(obj.LaunchTemplateData),
  }),
});

/**
 * @internal
 */
export const CreateLaunchTemplateVersionResultFilterSensitiveLog = (obj: CreateLaunchTemplateVersionResult): any => ({
  ...obj,
  ...(obj.LaunchTemplateVersion && {
    LaunchTemplateVersion: LaunchTemplateVersionFilterSensitiveLog(obj.LaunchTemplateVersion),
  }),
});

/**
 * @internal
 */
export const CreateMacSystemIntegrityProtectionModificationTaskRequestFilterSensitiveLog = (
  obj: CreateMacSystemIntegrityProtectionModificationTaskRequest
): any => ({
  ...obj,
  ...(obj.MacCredentials && { MacCredentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateVerifiedAccessNativeApplicationOidcOptionsFilterSensitiveLog = (
  obj: CreateVerifiedAccessNativeApplicationOidcOptions
): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateVerifiedAccessTrustProviderOidcOptionsFilterSensitiveLog = (
  obj: CreateVerifiedAccessTrustProviderOidcOptions
): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateVerifiedAccessTrustProviderRequestFilterSensitiveLog = (
  obj: CreateVerifiedAccessTrustProviderRequest
): any => ({
  ...obj,
  ...(obj.OidcOptions && {
    OidcOptions: CreateVerifiedAccessTrustProviderOidcOptionsFilterSensitiveLog(obj.OidcOptions),
  }),
  ...(obj.NativeApplicationOidcOptions && {
    NativeApplicationOidcOptions: CreateVerifiedAccessNativeApplicationOidcOptionsFilterSensitiveLog(
      obj.NativeApplicationOidcOptions
    ),
  }),
});

/**
 * @internal
 */
export const CreateVerifiedAccessTrustProviderResultFilterSensitiveLog = (
  obj: CreateVerifiedAccessTrustProviderResult
): any => ({
  ...obj,
  ...(obj.VerifiedAccessTrustProvider && {
    VerifiedAccessTrustProvider: VerifiedAccessTrustProviderFilterSensitiveLog(obj.VerifiedAccessTrustProvider),
  }),
});
