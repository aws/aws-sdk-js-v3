// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  _InstanceType,
  ActiveInstance,
  ActivityStatus,
  AllocationStrategy,
  AlternatePathHint,
  AttachmentStatus,
  BatchState,
  CurrencyCodeValues,
  Explanation,
  IamInstanceProfile,
  IamInstanceProfileSpecification,
  IpamResourceDiscoveryAssociation,
  IpPermission,
  PathComponent,
  ReservedInstancesListing,
  ResourceType,
  SecurityGroupRule,
  Tag,
  TagSpecification,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  TrunkInterfaceAssociation,
  UserIdGroupPair,
} from "./models_0";
import {
  AttributeValue,
  BlockDeviceMapping,
  FleetLaunchTemplateSpecification,
  FleetType,
  GroupIdentifier,
  HostnameType,
  InstanceInterruptionBehavior,
  InstanceIpv6Address,
  InstanceRequirements,
  InternetGateway,
  Ipam,
  IpamPool,
  IpamResourceDiscovery,
  IpamScope,
  Ipv4PrefixSpecificationRequest,
  Ipv6PrefixSpecificationRequest,
  KeyType,
  LaunchTemplate,
  LaunchTemplateVersion,
  LaunchTemplateVersionFilterSensitiveLog,
  LocalGatewayRouteTable,
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation,
  LocalGatewayRouteTableVpcAssociation,
  ManagedPrefixList,
  NatGateway,
  NetworkAcl,
  NetworkInsightsAccessScope,
  NetworkInsightsPath,
  NetworkInterface,
  NetworkInterfaceAttachment,
  NetworkInterfacePermission,
  NetworkInterfaceStatus,
  Placement,
  PlacementGroup,
  PlatformValues,
  PrivateIpAddressSpecification,
  SpotInstanceType,
  StateReason,
  Subnet,
  TargetCapacityUnitType,
  Tenancy,
} from "./models_1";
import {
  ReplaceRootVolumeTask,
  RouteTable,
  Snapshot,
  SnapshotState,
  SpotDatafeedSubscription,
  SpotInstanceStateFault,
  StorageTier,
  TrafficMirrorFilter,
  TrafficMirrorSession,
  TrafficMirrorTarget,
  TransitGateway,
  TransitGatewayConnect,
  TransitGatewayConnectPeer,
  TransitGatewayMulticastDomain,
  TransitGatewayPolicyTable,
  TransitGatewayRouteTable,
  TransitGatewayRouteTableAnnouncement,
  VerifiedAccessEndpoint,
  VerifiedAccessGroup,
} from "./models_2";
import {
  ArchitectureValues,
  AttributeBooleanValue,
  BootModeValues,
  CapacityReservationSpecificationResponse,
  CpuOptions,
  DeviceType,
  ElasticGpuAssociation,
  ElasticInferenceAcceleratorAssociation,
  EnclaveOptions,
  EventInformation,
  Filter,
  HypervisorType,
  IdFormat,
  InstanceBlockDeviceMapping,
  InstanceBootModeValues,
  PermissionGroup,
  ProductCode,
  VirtualizationType,
} from "./models_3";

/**
 * @public
 * <p>Indicates whether your instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
 *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 */
export interface HibernationOptions {
  /**
   * @public
   * <p>If <code>true</code>, your instance is enabled for hibernation; otherwise, it is not
   *             enabled for hibernation.</p>
   */
  Configured?: boolean;
}

/**
 * @public
 * @enum
 */
export const InstanceLifecycleType = {
  scheduled: "scheduled",
  spot: "spot",
} as const;

/**
 * @public
 */
export type InstanceLifecycleType = (typeof InstanceLifecycleType)[keyof typeof InstanceLifecycleType];

/**
 * @public
 * <p>Describes a license configuration.</p>
 */
export interface LicenseConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

/**
 * @public
 * @enum
 */
export const InstanceAutoRecoveryState = {
  default: "default",
  disabled: "disabled",
} as const;

/**
 * @public
 */
export type InstanceAutoRecoveryState = (typeof InstanceAutoRecoveryState)[keyof typeof InstanceAutoRecoveryState];

/**
 * @public
 * <p>The maintenance options for the instance.</p>
 */
export interface InstanceMaintenanceOptions {
  /**
   * @public
   * <p>Provides information on the current automatic recovery behavior of your
   *             instance.</p>
   */
  AutoRecovery?: InstanceAutoRecoveryState | string;
}

/**
 * @public
 * @enum
 */
export const InstanceMetadataEndpointState = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type InstanceMetadataEndpointState =
  (typeof InstanceMetadataEndpointState)[keyof typeof InstanceMetadataEndpointState];

/**
 * @public
 * @enum
 */
export const InstanceMetadataProtocolState = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type InstanceMetadataProtocolState =
  (typeof InstanceMetadataProtocolState)[keyof typeof InstanceMetadataProtocolState];

/**
 * @public
 * @enum
 */
export const HttpTokensState = {
  optional: "optional",
  required: "required",
} as const;

/**
 * @public
 */
export type HttpTokensState = (typeof HttpTokensState)[keyof typeof HttpTokensState];

/**
 * @public
 * @enum
 */
export const InstanceMetadataTagsState = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type InstanceMetadataTagsState = (typeof InstanceMetadataTagsState)[keyof typeof InstanceMetadataTagsState];

/**
 * @public
 * @enum
 */
export const InstanceMetadataOptionsState = {
  applied: "applied",
  pending: "pending",
} as const;

/**
 * @public
 */
export type InstanceMetadataOptionsState =
  (typeof InstanceMetadataOptionsState)[keyof typeof InstanceMetadataOptionsState];

/**
 * @public
 * <p>The metadata options for the instance.</p>
 */
export interface InstanceMetadataOptionsResponse {
  /**
   * @public
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
   * @public
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
   * @public
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *          <p>Default: 1</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * @public
   * <p>Indicates whether the HTTP metadata endpoint on your instances is enabled or
   *             disabled.</p>
   *          <p>If the value is <code>disabled</code>, you cannot access your instance
   *             metadata.</p>
   */
  HttpEndpoint?: InstanceMetadataEndpointState | string;

  /**
   * @public
   * <p>Indicates whether the IPv6 endpoint for the instance metadata service is enabled or
   *             disabled.</p>
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | string;

  /**
   * @public
   * <p>Indicates whether access to instance tags from the instance metadata is enabled or
   *             disabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | string;
}

/**
 * @public
 * @enum
 */
export const MonitoringState = {
  disabled: "disabled",
  disabling: "disabling",
  enabled: "enabled",
  pending: "pending",
} as const;

/**
 * @public
 */
export type MonitoringState = (typeof MonitoringState)[keyof typeof MonitoringState];

/**
 * @public
 * <p>Describes the monitoring of an instance.</p>
 */
export interface Monitoring {
  /**
   * @public
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  State?: MonitoringState | string;
}

/**
 * @public
 * <p>Describes association information for an Elastic IP address (IPv4).</p>
 */
export interface InstanceNetworkInterfaceAssociation {
  /**
   * @public
   * <p>The carrier IP address associated with the network interface.</p>
   */
  CarrierIp?: string;

  /**
   * @public
   * <p>The customer-owned IP address associated with the network interface.</p>
   */
  CustomerOwnedIp?: string;

  /**
   * @public
   * <p>The ID of the owner of the Elastic IP address.</p>
   */
  IpOwnerId?: string;

  /**
   * @public
   * <p>The public DNS name.</p>
   */
  PublicDnsName?: string;

  /**
   * @public
   * <p>The public IP address or Elastic IP address bound to the network interface.</p>
   */
  PublicIp?: string;
}

/**
 * @public
 * <p>Describes a network interface attachment.</p>
 */
export interface InstanceNetworkInterfaceAttachment {
  /**
   * @public
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date;

  /**
   * @public
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * @public
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * @public
   * <p>The index of the device on the instance for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * @public
   * <p>The attachment state.</p>
   */
  Status?: AttachmentStatus | string;

  /**
   * @public
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;
}

/**
 * @public
 * <p>Information about an IPv4 prefix.</p>
 */
export interface InstanceIpv4Prefix {
  /**
   * @public
   * <p>One or more IPv4 prefixes assigned to the network interface.</p>
   */
  Ipv4Prefix?: string;
}

/**
 * @public
 * <p>Information about an IPv6 prefix.</p>
 */
export interface InstanceIpv6Prefix {
  /**
   * @public
   * <p>One or more IPv6 prefixes assigned to the network interface.</p>
   */
  Ipv6Prefix?: string;
}

/**
 * @public
 * <p>Describes a private IPv4 address.</p>
 */
export interface InstancePrivateIpAddress {
  /**
   * @public
   * <p>The association information for an Elastic IP address for the network interface.</p>
   */
  Association?: InstanceNetworkInterfaceAssociation;

  /**
   * @public
   * <p>Indicates whether this IPv4 address is the primary private IP address of the network interface.</p>
   */
  Primary?: boolean;

  /**
   * @public
   * <p>The private IPv4 DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * @public
   * <p>The private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;
}

/**
 * @public
 * <p>Describes a network interface.</p>
 */
export interface InstanceNetworkInterface {
  /**
   * @public
   * <p>The association information for an Elastic IPv4 associated with the network
   *             interface.</p>
   */
  Association?: InstanceNetworkInterfaceAssociation;

  /**
   * @public
   * <p>The network interface attachment.</p>
   */
  Attachment?: InstanceNetworkInterfaceAttachment;

  /**
   * @public
   * <p>The description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The security groups.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * @public
   * <p>The IPv6 addresses associated with the network interface.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * @public
   * <p>The MAC address.</p>
   */
  MacAddress?: string;

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that created the network interface.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The private DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * @public
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * @public
   * <p>The private IPv4 addresses associated with the network interface.</p>
   */
  PrivateIpAddresses?: InstancePrivateIpAddress[];

  /**
   * @public
   * <p>Indicates whether source/destination checking is enabled.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * @public
   * <p>The status of the network interface.</p>
   */
  Status?: NetworkInterfaceStatus | string;

  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The type of network interface.</p>
   *          <p>Valid values: <code>interface</code> | <code>efa</code> | <code>trunk</code>
   *          </p>
   */
  InterfaceType?: string;

  /**
   * @public
   * <p>The IPv4 delegated prefixes that are assigned to the network interface.</p>
   */
  Ipv4Prefixes?: InstanceIpv4Prefix[];

  /**
   * @public
   * <p>The IPv6 delegated prefixes that are assigned to the network interface.</p>
   */
  Ipv6Prefixes?: InstanceIpv6Prefix[];
}

/**
 * @public
 * <p>Describes the options for instance hostnames.</p>
 */
export interface PrivateDnsNameOptionsResponse {
  /**
   * @public
   * <p>The type of hostname to assign to an instance.</p>
   */
  HostnameType?: HostnameType | string;

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
 * @enum
 */
export const InstanceStateName = {
  pending: "pending",
  running: "running",
  shutting_down: "shutting-down",
  stopped: "stopped",
  stopping: "stopping",
  terminated: "terminated",
} as const;

/**
 * @public
 */
export type InstanceStateName = (typeof InstanceStateName)[keyof typeof InstanceStateName];

/**
 * @public
 * <p>Describes the current state of an instance.</p>
 */
export interface InstanceState {
  /**
   * @public
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
   * @public
   * <p>The current state of the instance.</p>
   */
  Name?: InstanceStateName | string;
}

/**
 * @public
 * <p>Describes an instance.</p>
 */
export interface Instance {
  /**
   * @public
   * <p>The AMI launch index, which can be used to find this instance in the launch
   *             group.</p>
   */
  AmiLaunchIndex?: number;

  /**
   * @public
   * <p>The ID of the AMI used to launch the instance.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * @public
   * <p>The kernel associated with this instance, if applicable.</p>
   */
  KernelId?: string;

  /**
   * @public
   * <p>The name of the key pair, if this instance was launched with an associated key
   *             pair.</p>
   */
  KeyName?: string;

  /**
   * @public
   * <p>The time the instance was launched.</p>
   */
  LaunchTime?: Date;

  /**
   * @public
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: Monitoring;

  /**
   * @public
   * <p>The location where the instance launched, if applicable.</p>
   */
  Placement?: Placement;

  /**
   * @public
   * <p>The value is <code>Windows</code> for Windows instances; otherwise blank.</p>
   */
  Platform?: PlatformValues | string;

  /**
   * @public
   * <p>[IPv4 only] The private DNS hostname name assigned to the instance. This DNS hostname
   *             can only be used inside the Amazon EC2 network. This name is not available until the
   *             instance enters the <code>running</code> state. </p>
   *          <p>The Amazon-provided DNS server resolves Amazon-provided private DNS
   *             hostnames if you've enabled DNS resolution and DNS hostnames in your VPC. If you are not
   *             using the Amazon-provided DNS server in your VPC, your custom domain name servers must
   *             resolve the hostname as appropriate.</p>
   */
  PrivateDnsName?: string;

  /**
   * @public
   * <p>The private IPv4 address assigned to the instance.</p>
   */
  PrivateIpAddress?: string;

  /**
   * @public
   * <p>The product codes attached to this instance, if applicable.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * @public
   * <p>[IPv4 only] The public DNS name assigned to the instance. This name is not available
   *             until the instance enters the <code>running</code> state. This name is only
   *             available if you've enabled DNS hostnames for your VPC.</p>
   */
  PublicDnsName?: string;

  /**
   * @public
   * <p>The public IPv4 address, or the Carrier IP address assigned to the instance, if
   *             applicable.</p>
   *          <p>A Carrier IP address only applies to an instance launched in a subnet associated with
   *             a Wavelength Zone.</p>
   */
  PublicIpAddress?: string;

  /**
   * @public
   * <p>The RAM disk associated with this instance, if applicable.</p>
   */
  RamdiskId?: string;

  /**
   * @public
   * <p>The current state of the instance.</p>
   */
  State?: InstanceState;

  /**
   * @public
   * <p>The reason for the most recent state transition. This might be an empty string.</p>
   */
  StateTransitionReason?: string;

  /**
   * @public
   * <p>The ID of the subnet in which the instance is running.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The ID of the VPC in which the instance is running.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The architecture of the image.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * @public
   * <p>Any block device mapping entries for the instance.</p>
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * @public
   * <p>The idempotency token you provided when you launched the instance, if
   *             applicable.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal I/O performance. This optimization isn't available with all instance
   *             types. Additional usage charges apply when using an EBS Optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * @public
   * <p>Specifies whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: boolean;

  /**
   * @public
   * <p>The hypervisor type of the instance. The value <code>xen</code> is used for both Xen
   *             and Nitro hypervisors.</p>
   */
  Hypervisor?: HypervisorType | string;

  /**
   * @public
   * <p>The IAM instance profile associated with the instance, if
   *             applicable.</p>
   */
  IamInstanceProfile?: IamInstanceProfile;

  /**
   * @public
   * <p>Indicates whether this is a Spot Instance or a Scheduled Instance.</p>
   */
  InstanceLifecycle?: InstanceLifecycleType | string;

  /**
   * @public
   * <p>The Elastic GPU associated with the instance.</p>
   */
  ElasticGpuAssociations?: ElasticGpuAssociation[];

  /**
   * @public
   * <p>The elastic inference accelerator associated with the instance.</p>
   */
  ElasticInferenceAcceleratorAssociations?: ElasticInferenceAcceleratorAssociation[];

  /**
   * @public
   * <p>The network interfaces for the instance.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterface[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>The device name of the root device volume (for example,
   *             <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * @public
   * <p>The root device type used by the AMI. The AMI can use an EBS volume or an instance
   *             store volume.</p>
   */
  RootDeviceType?: DeviceType | string;

  /**
   * @public
   * <p>The security groups for the instance.</p>
   */
  SecurityGroups?: GroupIdentifier[];

  /**
   * @public
   * <p>Indicates whether source/destination checking is enabled.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * @public
   * <p>If the request is a Spot Instance request, the ID of the request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * @public
   * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface
   *             is enabled.</p>
   */
  SriovNetSupport?: string;

  /**
   * @public
   * <p>The reason for the most recent state transition.</p>
   */
  StateReason?: StateReason;

  /**
   * @public
   * <p>Any tags assigned to the instance.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The virtualization type of the instance.</p>
   */
  VirtualizationType?: VirtualizationType | string;

  /**
   * @public
   * <p>The CPU options for the instance.</p>
   */
  CpuOptions?: CpuOptions;

  /**
   * @public
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * @public
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification?: CapacityReservationSpecificationResponse;

  /**
   * @public
   * <p>Indicates whether the instance is enabled for hibernation.</p>
   */
  HibernationOptions?: HibernationOptions;

  /**
   * @public
   * <p>The license configurations for the instance.</p>
   */
  Licenses?: LicenseConfiguration[];

  /**
   * @public
   * <p>The metadata options for the instance.</p>
   */
  MetadataOptions?: InstanceMetadataOptionsResponse;

  /**
   * @public
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro
   *             Enclaves.</p>
   */
  EnclaveOptions?: EnclaveOptions;

  /**
   * @public
   * <p>The boot mode that was specified by the AMI. If the value is <code>uefi-preferred</code>,
   *             the AMI supports both UEFI and Legacy BIOS. The <code>currentInstanceBootMode</code> parameter
   *             is the boot mode that is used to boot the instance at launch or start.</p>
   *          <note>
   *             <p>The operating system contained in the AMI must be configured to support the specified boot mode.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   */
  BootMode?: BootModeValues | string;

  /**
   * @public
   * <p>The platform details value for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html">AMI
   *                 billing information fields</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   */
  PlatformDetails?: string;

  /**
   * @public
   * <p>The usage operation value for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html">AMI
   *                 billing information fields</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   */
  UsageOperation?: string;

  /**
   * @public
   * <p>The time that the usage operation was last updated.</p>
   */
  UsageOperationUpdateTime?: Date;

  /**
   * @public
   * <p>The options for the instance hostname.</p>
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptionsResponse;

  /**
   * @public
   * <p>The IPv6 address assigned to the instance.</p>
   */
  Ipv6Address?: string;

  /**
   * @public
   * <p>If the instance is configured for NitroTPM support, the value is <code>v2.0</code>.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html">NitroTPM</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   */
  TpmSupport?: string;

  /**
   * @public
   * <p>Provides information on the recovery and maintenance options of your instance.</p>
   */
  MaintenanceOptions?: InstanceMaintenanceOptions;

  /**
   * @public
   * <p>The boot mode that is used to boot the instance at launch or start. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   */
  CurrentInstanceBootMode?: InstanceBootModeValues | string;
}

/**
 * @public
 * <p>Describes a launch request for one or more instances, and includes owner, requester,
 *             and security group information that applies to all instances in the launch
 *             request.</p>
 */
export interface Reservation {
  /**
   * @public
   * <p>Not supported.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * @public
   * <p>The instances.</p>
   */
  Instances?: Instance[];

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the reservation.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The ID of the requester that launched the instances on your behalf (for example,
   *                 Amazon Web Services Management Console or Auto Scaling).</p>
   */
  RequesterId?: string;

  /**
   * @public
   * <p>The ID of the reservation.</p>
   */
  ReservationId?: string;
}

/**
 * @public
 */
export interface DescribeInstancesResult {
  /**
   * @public
   * <p>Information about the reservations.</p>
   */
  Reservations?: Reservation[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeInstanceStatusRequest {
  /**
   * @public
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
   * @public
   * <p>The instance IDs.</p>
   *          <p>Default: Describes all your instances.</p>
   *          <p>Constraints: Maximum 100 explicitly specified instance IDs.</p>
   */
  InstanceIds?: string[];

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>You cannot specify this parameter and the instance IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>When <code>true</code>, includes the health status for all instances. When
   *                 <code>false</code>, includes the health status for running instances only.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  IncludeAllInstances?: boolean;
}

/**
 * @public
 * @enum
 */
export const EventCode = {
  instance_reboot: "instance-reboot",
  instance_retirement: "instance-retirement",
  instance_stop: "instance-stop",
  system_maintenance: "system-maintenance",
  system_reboot: "system-reboot",
} as const;

/**
 * @public
 */
export type EventCode = (typeof EventCode)[keyof typeof EventCode];

/**
 * @public
 * <p>Describes a scheduled event for an instance.</p>
 */
export interface InstanceStatusEvent {
  /**
   * @public
   * <p>The ID of the event.</p>
   */
  InstanceEventId?: string;

  /**
   * @public
   * <p>The event code.</p>
   */
  Code?: EventCode | string;

  /**
   * @public
   * <p>A description of the event.</p>
   *          <p>After a scheduled event is completed, it can still be described for up to a week. If
   *             the event has been completed, this description starts with the following text:
   *             [Completed].</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The latest scheduled end time for the event.</p>
   */
  NotAfter?: Date;

  /**
   * @public
   * <p>The earliest scheduled start time for the event.</p>
   */
  NotBefore?: Date;

  /**
   * @public
   * <p>The deadline for starting the event.</p>
   */
  NotBeforeDeadline?: Date;
}

/**
 * @public
 * @enum
 */
export const StatusName = {
  reachability: "reachability",
} as const;

/**
 * @public
 */
export type StatusName = (typeof StatusName)[keyof typeof StatusName];

/**
 * @public
 * @enum
 */
export const StatusType = {
  failed: "failed",
  initializing: "initializing",
  insufficient_data: "insufficient-data",
  passed: "passed",
} as const;

/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * @public
 * <p>Describes the instance status.</p>
 */
export interface InstanceStatusDetails {
  /**
   * @public
   * <p>The time when a status check failed. For an instance that was launched and impaired,
   *             this is the time when the instance was launched.</p>
   */
  ImpairedSince?: Date;

  /**
   * @public
   * <p>The type of instance status.</p>
   */
  Name?: StatusName | string;

  /**
   * @public
   * <p>The status.</p>
   */
  Status?: StatusType | string;
}

/**
 * @public
 * @enum
 */
export const SummaryStatus = {
  impaired: "impaired",
  initializing: "initializing",
  insufficient_data: "insufficient-data",
  not_applicable: "not-applicable",
  ok: "ok",
} as const;

/**
 * @public
 */
export type SummaryStatus = (typeof SummaryStatus)[keyof typeof SummaryStatus];

/**
 * @public
 * <p>Describes the status of an instance.</p>
 */
export interface InstanceStatusSummary {
  /**
   * @public
   * <p>The system instance health or application instance health.</p>
   */
  Details?: InstanceStatusDetails[];

  /**
   * @public
   * <p>The status.</p>
   */
  Status?: SummaryStatus | string;
}

/**
 * @public
 * <p>Describes the status of an instance.</p>
 */
export interface InstanceStatus {
  /**
   * @public
   * <p>The Availability Zone of the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>Any scheduled events associated with the instance.</p>
   */
  Events?: InstanceStatusEvent[];

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The intended state of the instance. <a>DescribeInstanceStatus</a> requires
   *             that an instance be in the <code>running</code> state.</p>
   */
  InstanceState?: InstanceState;

  /**
   * @public
   * <p>Reports impaired functionality that stems from issues internal to the instance, such
   *             as impaired reachability.</p>
   */
  InstanceStatus?: InstanceStatusSummary;

  /**
   * @public
   * <p>Reports impaired functionality that stems from issues related to the systems that
   *             support an instance, such as hardware failures and network connectivity problems.</p>
   */
  SystemStatus?: InstanceStatusSummary;
}

/**
 * @public
 */
export interface DescribeInstanceStatusResult {
  /**
   * @public
   * <p>Information about the status of the instances.</p>
   */
  InstanceStatuses?: InstanceStatus[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const LocationType = {
  availability_zone: "availability-zone",
  availability_zone_id: "availability-zone-id",
  region: "region",
} as const;

/**
 * @public
 */
export type LocationType = (typeof LocationType)[keyof typeof LocationType];

/**
 * @public
 */
export interface DescribeInstanceTypeOfferingsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *          and provides an error response. If you have the required permissions, the error response is
   *          <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The location type.</p>
   */
  LocationType?: LocationType | string;

  /**
   * @public
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>location</code> - This depends on the location type. For example, if the location type is
   *       <code>region</code> (default), the location is the Region code (for example, <code>us-east-2</code>.)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type. For example,
   *      <code>c5.2xlarge</code>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The instance types offered.</p>
 */
export interface InstanceTypeOffering {
  /**
   * @public
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * @public
   * <p>The location type.</p>
   */
  LocationType?: LocationType | string;

  /**
   * @public
   * <p>The identifier for the location. This depends on the location type. For example, if the location type is
   *     <code>region</code>, the location is the Region code (for example, <code>us-east-2</code>.)</p>
   */
  Location?: string;
}

/**
 * @public
 */
export interface DescribeInstanceTypeOfferingsResult {
  /**
   * @public
   * <p>The instance types offered.</p>
   */
  InstanceTypeOfferings?: InstanceTypeOffering[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeInstanceTypesRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *          and provides an error response. If you have the required permissions, the error response is
   *          <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The instance types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceTypes?: (_InstanceType | string)[];

  /**
   * @public
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>auto-recovery-supported</code> - Indicates whether Amazon CloudWatch action based recovery is supported  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bare-metal</code> - Indicates whether it is a bare metal instance type  (<code>true</code> | <code>false</code>).</p>
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
   *                   <code>ebs-info.ebs-optimized-info.baseline-bandwidth-in-mbps</code> - The baseline
   *                     bandwidth performance for an EBS-optimized instance type, in Mbps.</p>
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
   *                     performance for an EBS-optimized instance type, in Mbps.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.maximum-iops</code> - The maximum input/output storage
   *                     operations per second for an EBS-optimized instance type.</p>
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
   *      is supported for EBS volumes (<code>required</code> | <code>supported</code> | <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>free-tier-eligible</code> - Indicates whether the instance type is eligible to use
   *      in the free tier  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hibernation-supported</code> - Indicates whether On-Demand hibernation is supported  (<code>true</code> | <code>false</code>).</p>
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
   *                   <code>instance-storage-info.disk.size-in-gb</code> - The storage size of each instance storage disk, in
   *      GB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.disk.type</code> - The storage technology for the local
   *      instance storage disks (<code>hdd</code> | <code>ssd</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.encryption-support</code> - Indicates whether data is encrypted at rest
   *      (<code>required</code> | <code>supported</code> | <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.nvme-support</code> - Indicates whether non-volatile memory
   *      express (NVMe) is supported for instance store (<code>required</code> | <code>supported</code> |
   *      <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.total-size-in-gb</code> - The total amount of storage available from all local
   *      instance storage, in GB.</p>
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
   *                   <code>network-info.encryption-in-transit-supported</code> - Indicates whether the instance type
   *      automatically encrypts in-transit traffic between instances  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ipv4-addresses-per-interface</code> - The maximum number of private IPv4 addresses per
   *      network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ipv6-addresses-per-interface</code> - The maximum number of private IPv6 addresses per
   *      network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ipv6-supported</code> - Indicates whether the instance type supports IPv6  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.maximum-network-cards</code> - The maximum number of network cards per
   *      instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.maximum-network-interfaces</code> - The maximum number of network interfaces per instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.network-performance</code> - The network performance (for example, "25
   *      Gigabit").</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>nitro-enclaves-support</code> - Indicates whether Nitro Enclaves is supported (<code>supported</code> |
   *      <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>nitro-tpm-support</code> - Indicates whether NitroTPM is supported (<code>supported</code> |
   *      <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>nitro-tpm-info.supported-versions</code> - The supported NitroTPM version (<code>2.0</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>processor-info.supported-architecture</code> - The CPU architecture
   *       (<code>arm64</code> | <code>i386</code> | <code>x86_64</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>processor-info.sustained-clock-speed-in-ghz</code> - The CPU clock speed, in GHz.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>processor-info.supported-features</code> - The supported CPU features (<code>amd-sev-snp</code>).</p>
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
   *       <code>spot</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supported-virtualization-type</code> - The virtualization type (<code>hvm</code> |
   *       <code>paravirtual</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.default-cores</code> - The default number of cores for the instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.default-threads-per-core</code> - The default number of threads per core for the instance
   *      type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.default-vcpus</code> - The default number of vCPUs for the instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.valid-cores</code> - The number of cores that can be configured for the instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.valid-threads-per-core</code> - The number of threads per core that can be configured for the instance type.
   *         For example, "1" or "1,2".</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes the optimized EBS performance for supported instance types.</p>
 */
export interface EbsOptimizedInfo {
  /**
   * @public
   * <p>The baseline bandwidth performance for an EBS-optimized instance type, in Mbps.</p>
   */
  BaselineBandwidthInMbps?: number;

  /**
   * @public
   * <p>The baseline throughput performance for an EBS-optimized instance type, in MB/s.</p>
   */
  BaselineThroughputInMBps?: number;

  /**
   * @public
   * <p>The baseline input/output storage operations per seconds for an EBS-optimized instance type.</p>
   */
  BaselineIops?: number;

  /**
   * @public
   * <p>The maximum bandwidth performance for an EBS-optimized instance type, in Mbps.</p>
   */
  MaximumBandwidthInMbps?: number;

  /**
   * @public
   * <p>The maximum throughput performance for an EBS-optimized instance type, in MB/s.</p>
   */
  MaximumThroughputInMBps?: number;

  /**
   * @public
   * <p>The maximum input/output storage operations per second for an EBS-optimized instance type.</p>
   */
  MaximumIops?: number;
}

/**
 * @public
 * @enum
 */
export const EbsOptimizedSupport = {
  default: "default",
  supported: "supported",
  unsupported: "unsupported",
} as const;

/**
 * @public
 */
export type EbsOptimizedSupport = (typeof EbsOptimizedSupport)[keyof typeof EbsOptimizedSupport];

/**
 * @public
 * @enum
 */
export const EbsEncryptionSupport = {
  supported: "supported",
  unsupported: "unsupported",
} as const;

/**
 * @public
 */
export type EbsEncryptionSupport = (typeof EbsEncryptionSupport)[keyof typeof EbsEncryptionSupport];

/**
 * @public
 * @enum
 */
export const EbsNvmeSupport = {
  REQUIRED: "required",
  SUPPORTED: "supported",
  UNSUPPORTED: "unsupported",
} as const;

/**
 * @public
 */
export type EbsNvmeSupport = (typeof EbsNvmeSupport)[keyof typeof EbsNvmeSupport];

/**
 * @public
 * <p>Describes the Amazon EBS features supported by the instance type.</p>
 */
export interface EbsInfo {
  /**
   * @public
   * <p>Indicates whether the instance type is Amazon EBS-optimized. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html">Amazon EBS-optimized
   *     instances</a> in <i>Amazon EC2 User Guide</i>.</p>
   */
  EbsOptimizedSupport?: EbsOptimizedSupport | string;

  /**
   * @public
   * <p>Indicates whether Amazon EBS encryption is supported.</p>
   */
  EncryptionSupport?: EbsEncryptionSupport | string;

  /**
   * @public
   * <p>Describes the optimized EBS performance for the instance type.</p>
   */
  EbsOptimizedInfo?: EbsOptimizedInfo;

  /**
   * @public
   * <p>Indicates whether non-volatile memory express (NVMe) is supported.</p>
   */
  NvmeSupport?: EbsNvmeSupport | string;
}

/**
 * @public
 * <p>Describes the memory for the FPGA accelerator for the instance type.</p>
 */
export interface FpgaDeviceMemoryInfo {
  /**
   * @public
   * <p>The size of the memory available to the FPGA accelerator, in MiB.</p>
   */
  SizeInMiB?: number;
}

/**
 * @public
 * <p>Describes the FPGA accelerator for the instance type.</p>
 */
export interface FpgaDeviceInfo {
  /**
   * @public
   * <p>The name of the FPGA accelerator.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The manufacturer of the FPGA accelerator.</p>
   */
  Manufacturer?: string;

  /**
   * @public
   * <p>The count of FPGA accelerators for the instance type.</p>
   */
  Count?: number;

  /**
   * @public
   * <p>Describes the memory for the FPGA accelerator for the instance type.</p>
   */
  MemoryInfo?: FpgaDeviceMemoryInfo;
}

/**
 * @public
 * <p>Describes the FPGAs for the instance type.</p>
 */
export interface FpgaInfo {
  /**
   * @public
   * <p>Describes the FPGAs for the instance type.</p>
   */
  Fpgas?: FpgaDeviceInfo[];

  /**
   * @public
   * <p>The total memory of all FPGA accelerators for the instance type.</p>
   */
  TotalFpgaMemoryInMiB?: number;
}

/**
 * @public
 * <p>Describes the memory available to the GPU accelerator.</p>
 */
export interface GpuDeviceMemoryInfo {
  /**
   * @public
   * <p>The size of the memory available to the GPU accelerator, in MiB.</p>
   */
  SizeInMiB?: number;
}

/**
 * @public
 * <p>Describes the GPU accelerators for the instance type.</p>
 */
export interface GpuDeviceInfo {
  /**
   * @public
   * <p>The name of the GPU accelerator.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The manufacturer of the GPU accelerator.</p>
   */
  Manufacturer?: string;

  /**
   * @public
   * <p>The number of GPUs for the instance type.</p>
   */
  Count?: number;

  /**
   * @public
   * <p>Describes the memory available to the GPU accelerator.</p>
   */
  MemoryInfo?: GpuDeviceMemoryInfo;
}

/**
 * @public
 * <p>Describes the GPU accelerators for the instance type.</p>
 */
export interface GpuInfo {
  /**
   * @public
   * <p>Describes the GPU accelerators for the instance type.</p>
   */
  Gpus?: GpuDeviceInfo[];

  /**
   * @public
   * <p>The total size of the memory for the GPU accelerators for the instance type, in MiB.</p>
   */
  TotalGpuMemoryInMiB?: number;
}

/**
 * @public
 * @enum
 */
export const InstanceTypeHypervisor = {
  NITRO: "nitro",
  XEN: "xen",
} as const;

/**
 * @public
 */
export type InstanceTypeHypervisor = (typeof InstanceTypeHypervisor)[keyof typeof InstanceTypeHypervisor];

/**
 * @public
 * <p>Describes the memory available to the inference accelerator.</p>
 */
export interface InferenceDeviceMemoryInfo {
  /**
   * @public
   * <p>The size of the memory available to the inference accelerator, in MiB.</p>
   */
  SizeInMiB?: number;
}

/**
 * @public
 * <p>Describes the Inference accelerators for the instance type.</p>
 */
export interface InferenceDeviceInfo {
  /**
   * @public
   * <p>The number of Inference accelerators for the instance type.</p>
   */
  Count?: number;

  /**
   * @public
   * <p>The name of the Inference accelerator.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The manufacturer of the Inference accelerator.</p>
   */
  Manufacturer?: string;

  /**
   * @public
   * <p>Describes the memory available to the inference accelerator.</p>
   */
  MemoryInfo?: InferenceDeviceMemoryInfo;
}

/**
 * @public
 * <p>Describes the Inference accelerators for the instance type.</p>
 */
export interface InferenceAcceleratorInfo {
  /**
   * @public
   * <p>Describes the Inference accelerators for the instance type.</p>
   */
  Accelerators?: InferenceDeviceInfo[];

  /**
   * @public
   * <p>The total size of the memory for the inference accelerators for the instance type, in MiB.</p>
   */
  TotalInferenceMemoryInMiB?: number;
}

/**
 * @public
 * @enum
 */
export const DiskType = {
  hdd: "hdd",
  ssd: "ssd",
} as const;

/**
 * @public
 */
export type DiskType = (typeof DiskType)[keyof typeof DiskType];

/**
 * @public
 * <p>Describes a disk.</p>
 */
export interface DiskInfo {
  /**
   * @public
   * <p>The size of the disk in GB.</p>
   */
  SizeInGB?: number;

  /**
   * @public
   * <p>The number of disks with this configuration.</p>
   */
  Count?: number;

  /**
   * @public
   * <p>The type of disk.</p>
   */
  Type?: DiskType | string;
}

/**
 * @public
 * @enum
 */
export const InstanceStorageEncryptionSupport = {
  required: "required",
  unsupported: "unsupported",
} as const;

/**
 * @public
 */
export type InstanceStorageEncryptionSupport =
  (typeof InstanceStorageEncryptionSupport)[keyof typeof InstanceStorageEncryptionSupport];

/**
 * @public
 * @enum
 */
export const EphemeralNvmeSupport = {
  REQUIRED: "required",
  SUPPORTED: "supported",
  UNSUPPORTED: "unsupported",
} as const;

/**
 * @public
 */
export type EphemeralNvmeSupport = (typeof EphemeralNvmeSupport)[keyof typeof EphemeralNvmeSupport];

/**
 * @public
 * <p>Describes the instance store features that are supported by the instance type.</p>
 */
export interface InstanceStorageInfo {
  /**
   * @public
   * <p>The total size of the disks, in GB.</p>
   */
  TotalSizeInGB?: number;

  /**
   * @public
   * <p>Describes the disks that are available for the instance type.</p>
   */
  Disks?: DiskInfo[];

  /**
   * @public
   * <p>Indicates whether non-volatile memory express (NVMe) is supported.</p>
   */
  NvmeSupport?: EphemeralNvmeSupport | string;

  /**
   * @public
   * <p>Indicates whether data is encrypted at rest.</p>
   */
  EncryptionSupport?: InstanceStorageEncryptionSupport | string;
}

/**
 * @public
 * <p>Describes the memory for the instance type.</p>
 */
export interface MemoryInfo {
  /**
   * @public
   * <p>The size of the memory, in MiB.</p>
   */
  SizeInMiB?: number;
}

/**
 * @public
 * <p>Describes the Elastic Fabric Adapters for the instance type.</p>
 */
export interface EfaInfo {
  /**
   * @public
   * <p>The maximum number of Elastic Fabric Adapters for the instance type.</p>
   */
  MaximumEfaInterfaces?: number;
}

/**
 * @public
 * @enum
 */
export const EnaSupport = {
  required: "required",
  supported: "supported",
  unsupported: "unsupported",
} as const;

/**
 * @public
 */
export type EnaSupport = (typeof EnaSupport)[keyof typeof EnaSupport];

/**
 * @public
 * <p>Describes the network card support of the instance type.</p>
 */
export interface NetworkCardInfo {
  /**
   * @public
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;

  /**
   * @public
   * <p>The network performance of the network card.</p>
   */
  NetworkPerformance?: string;

  /**
   * @public
   * <p>The maximum number of network interfaces for the network card.</p>
   */
  MaximumNetworkInterfaces?: number;

  /**
   * @public
   * <p>The baseline network performance of the network card, in Gbps.</p>
   */
  BaselineBandwidthInGbps?: number;

  /**
   * @public
   * <p>The peak (burst) network performance of the network card, in Gbps.</p>
   */
  PeakBandwidthInGbps?: number;
}

/**
 * @public
 * <p>Describes the networking features of the instance type.</p>
 */
export interface NetworkInfo {
  /**
   * @public
   * <p>The network performance.</p>
   */
  NetworkPerformance?: string;

  /**
   * @public
   * <p>The maximum number of network interfaces for the instance type.</p>
   */
  MaximumNetworkInterfaces?: number;

  /**
   * @public
   * <p>The maximum number of physical network cards that can be allocated to the instance.</p>
   */
  MaximumNetworkCards?: number;

  /**
   * @public
   * <p>The index of the default network card, starting at 0.</p>
   */
  DefaultNetworkCardIndex?: number;

  /**
   * @public
   * <p>Describes the network cards for the instance type.</p>
   */
  NetworkCards?: NetworkCardInfo[];

  /**
   * @public
   * <p>The maximum number of IPv4 addresses per network interface.</p>
   */
  Ipv4AddressesPerInterface?: number;

  /**
   * @public
   * <p>The maximum number of IPv6 addresses per network interface.</p>
   */
  Ipv6AddressesPerInterface?: number;

  /**
   * @public
   * <p>Indicates whether IPv6 is supported.</p>
   */
  Ipv6Supported?: boolean;

  /**
   * @public
   * <p>Indicates whether Elastic Network Adapter (ENA) is supported.</p>
   */
  EnaSupport?: EnaSupport | string;

  /**
   * @public
   * <p>Indicates whether Elastic Fabric Adapter (EFA) is supported.</p>
   */
  EfaSupported?: boolean;

  /**
   * @public
   * <p>Describes the Elastic Fabric Adapters for the instance type.</p>
   */
  EfaInfo?: EfaInfo;

  /**
   * @public
   * <p>Indicates whether the instance type automatically encrypts in-transit traffic between instances.</p>
   */
  EncryptionInTransitSupported?: boolean;

  /**
   * @public
   * <p>Indicates whether the instance type supports ENA Express. ENA Express uses Amazon Web Services Scalable
   *     Reliable Datagram (SRD) technology to increase the maximum bandwidth used per stream and
   *     minimize tail latency of network traffic between EC2 instances.</p>
   */
  EnaSrdSupported?: boolean;
}

/**
 * @public
 * @enum
 */
export const NitroEnclavesSupport = {
  SUPPORTED: "supported",
  UNSUPPORTED: "unsupported",
} as const;

/**
 * @public
 */
export type NitroEnclavesSupport = (typeof NitroEnclavesSupport)[keyof typeof NitroEnclavesSupport];

/**
 * @public
 * <p>Describes the supported NitroTPM versions for the instance type.</p>
 */
export interface NitroTpmInfo {
  /**
   * @public
   * <p>Indicates the supported NitroTPM versions.</p>
   */
  SupportedVersions?: string[];
}

/**
 * @public
 * @enum
 */
export const NitroTpmSupport = {
  SUPPORTED: "supported",
  UNSUPPORTED: "unsupported",
} as const;

/**
 * @public
 */
export type NitroTpmSupport = (typeof NitroTpmSupport)[keyof typeof NitroTpmSupport];

/**
 * @public
 * @enum
 */
export const PlacementGroupStrategy = {
  cluster: "cluster",
  partition: "partition",
  spread: "spread",
} as const;

/**
 * @public
 */
export type PlacementGroupStrategy = (typeof PlacementGroupStrategy)[keyof typeof PlacementGroupStrategy];

/**
 * @public
 * <p>Describes the placement group support of the instance type.</p>
 */
export interface PlacementGroupInfo {
  /**
   * @public
   * <p>The supported placement group types.</p>
   */
  SupportedStrategies?: (PlacementGroupStrategy | string)[];
}

/**
 * @public
 * @enum
 */
export const ArchitectureType = {
  arm64: "arm64",
  arm64_mac: "arm64_mac",
  i386: "i386",
  x86_64: "x86_64",
  x86_64_mac: "x86_64_mac",
} as const;

/**
 * @public
 */
export type ArchitectureType = (typeof ArchitectureType)[keyof typeof ArchitectureType];

/**
 * @public
 * @enum
 */
export const SupportedAdditionalProcessorFeature = {
  AMD_SEV_SNP: "amd-sev-snp",
} as const;

/**
 * @public
 */
export type SupportedAdditionalProcessorFeature =
  (typeof SupportedAdditionalProcessorFeature)[keyof typeof SupportedAdditionalProcessorFeature];

/**
 * @public
 * <p>Describes the processor used by the instance type.</p>
 */
export interface ProcessorInfo {
  /**
   * @public
   * <p>The architectures supported by the instance type.</p>
   */
  SupportedArchitectures?: (ArchitectureType | string)[];

  /**
   * @public
   * <p>The speed of the processor, in GHz.</p>
   */
  SustainedClockSpeedInGhz?: number;

  /**
   * @public
   * <p>Indicates whether the instance type supports AMD SEV-SNP. If the request returns
   *    <code>amd-sev-snp</code>, AMD SEV-SNP is supported. Otherwise, it is not supported.
   *    For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html">
   *     AMD SEV-SNP</a>.</p>
   */
  SupportedFeatures?: (SupportedAdditionalProcessorFeature | string)[];
}

/**
 * @public
 * @enum
 */
export const BootModeType = {
  legacy_bios: "legacy-bios",
  uefi: "uefi",
} as const;

/**
 * @public
 */
export type BootModeType = (typeof BootModeType)[keyof typeof BootModeType];

/**
 * @public
 * @enum
 */
export const RootDeviceType = {
  ebs: "ebs",
  instance_store: "instance-store",
} as const;

/**
 * @public
 */
export type RootDeviceType = (typeof RootDeviceType)[keyof typeof RootDeviceType];

/**
 * @public
 * @enum
 */
export const UsageClassType = {
  on_demand: "on-demand",
  spot: "spot",
} as const;

/**
 * @public
 */
export type UsageClassType = (typeof UsageClassType)[keyof typeof UsageClassType];

/**
 * @public
 * <p>Describes the vCPU configurations for the instance type.</p>
 */
export interface VCpuInfo {
  /**
   * @public
   * <p>The default number of vCPUs for the instance type.</p>
   */
  DefaultVCpus?: number;

  /**
   * @public
   * <p>The default number of cores for the instance type.</p>
   */
  DefaultCores?: number;

  /**
   * @public
   * <p>The default number of threads per core for the instance type.</p>
   */
  DefaultThreadsPerCore?: number;

  /**
   * @public
   * <p>The valid number of cores that can be configured for the instance type.</p>
   */
  ValidCores?: number[];

  /**
   * @public
   * <p>The valid number of threads per core that can be configured for the instance type.</p>
   */
  ValidThreadsPerCore?: number[];
}

/**
 * @public
 * <p>Describes the instance type.</p>
 */
export interface InstanceTypeInfo {
  /**
   * @public
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * @public
   * <p>Indicates whether the instance type is current generation.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * @public
   * <p>Indicates whether the instance type is eligible for the free tier.</p>
   */
  FreeTierEligible?: boolean;

  /**
   * @public
   * <p>Indicates whether the instance type is offered for spot or On-Demand.</p>
   */
  SupportedUsageClasses?: (UsageClassType | string)[];

  /**
   * @public
   * <p>The supported root device types.</p>
   */
  SupportedRootDeviceTypes?: (RootDeviceType | string)[];

  /**
   * @public
   * <p>The supported virtualization types.</p>
   */
  SupportedVirtualizationTypes?: (VirtualizationType | string)[];

  /**
   * @public
   * <p>Indicates whether the instance is a bare metal instance type.</p>
   */
  BareMetal?: boolean;

  /**
   * @public
   * <p>The hypervisor for the instance type.</p>
   */
  Hypervisor?: InstanceTypeHypervisor | string;

  /**
   * @public
   * <p>Describes the processor.</p>
   */
  ProcessorInfo?: ProcessorInfo;

  /**
   * @public
   * <p>Describes the vCPU configurations for the instance type.</p>
   */
  VCpuInfo?: VCpuInfo;

  /**
   * @public
   * <p>Describes the memory for the instance type.</p>
   */
  MemoryInfo?: MemoryInfo;

  /**
   * @public
   * <p>Indicates whether instance storage is supported.</p>
   */
  InstanceStorageSupported?: boolean;

  /**
   * @public
   * <p>Describes the instance storage for the instance type.</p>
   */
  InstanceStorageInfo?: InstanceStorageInfo;

  /**
   * @public
   * <p>Describes the Amazon EBS settings for the instance type.</p>
   */
  EbsInfo?: EbsInfo;

  /**
   * @public
   * <p>Describes the network settings for the instance type.</p>
   */
  NetworkInfo?: NetworkInfo;

  /**
   * @public
   * <p>Describes the GPU accelerator settings for the instance type.</p>
   */
  GpuInfo?: GpuInfo;

  /**
   * @public
   * <p>Describes the FPGA accelerator settings for the instance type.</p>
   */
  FpgaInfo?: FpgaInfo;

  /**
   * @public
   * <p>Describes the placement group settings for the instance type.</p>
   */
  PlacementGroupInfo?: PlacementGroupInfo;

  /**
   * @public
   * <p>Describes the Inference accelerator settings for the instance type.</p>
   */
  InferenceAcceleratorInfo?: InferenceAcceleratorInfo;

  /**
   * @public
   * <p>Indicates whether On-Demand hibernation is supported.</p>
   */
  HibernationSupported?: boolean;

  /**
   * @public
   * <p>Indicates whether the instance type is a burstable performance T instance
   *    type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
   *     performance instances</a>.</p>
   */
  BurstablePerformanceSupported?: boolean;

  /**
   * @public
   * <p>Indicates whether Dedicated Hosts are supported on the instance type.</p>
   */
  DedicatedHostsSupported?: boolean;

  /**
   * @public
   * <p>Indicates whether Amazon CloudWatch action based recovery is supported.</p>
   */
  AutoRecoverySupported?: boolean;

  /**
   * @public
   * <p>The supported boot modes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *    <i>Amazon EC2 User Guide</i>.</p>
   */
  SupportedBootModes?: (BootModeType | string)[];

  /**
   * @public
   * <p>Indicates whether Nitro Enclaves is supported.</p>
   */
  NitroEnclavesSupport?: NitroEnclavesSupport | string;

  /**
   * @public
   * <p>Indicates whether NitroTPM is supported.</p>
   */
  NitroTpmSupport?: NitroTpmSupport | string;

  /**
   * @public
   * <p>Describes the supported NitroTPM versions for the instance type.</p>
   */
  NitroTpmInfo?: NitroTpmInfo;
}

/**
 * @public
 */
export interface DescribeInstanceTypesResult {
  /**
   * @public
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceTypes?: InstanceTypeInfo[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeInternetGatewaysRequest {
  /**
   * @public
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
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the internet gateways.</p>
   *          <p>Default: Describes all your internet gateways.</p>
   */
  InternetGatewayIds?: string[];

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeInternetGatewaysResult {
  /**
   * @public
   * <p>Information about one or more internet gateways.</p>
   */
  InternetGateways?: InternetGateway[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeIpamPoolsRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return in the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The IDs of the IPAM pools you would like information on.</p>
   */
  IpamPoolIds?: string[];
}

/**
 * @public
 */
export interface DescribeIpamPoolsResult {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the IPAM pools.</p>
   */
  IpamPools?: IpamPool[];
}

/**
 * @public
 */
export interface DescribeIpamResourceDiscoveriesRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IPAM resource discovery IDs.</p>
   */
  IpamResourceDiscoveryIds?: string[];

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of resource discoveries to return in one page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The resource discovery filters.</p>
   */
  Filters?: Filter[];
}

/**
 * @public
 */
export interface DescribeIpamResourceDiscoveriesResult {
  /**
   * @public
   * <p>The resource discoveries.</p>
   */
  IpamResourceDiscoveries?: IpamResourceDiscovery[];

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeIpamResourceDiscoveryAssociationsRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The resource discovery association IDs.</p>
   */
  IpamResourceDiscoveryAssociationIds?: string[];

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of resource discovery associations to return in one page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The resource discovery association filters.</p>
   */
  Filters?: Filter[];
}

/**
 * @public
 */
export interface DescribeIpamResourceDiscoveryAssociationsResult {
  /**
   * @public
   * <p>The resource discovery associations.</p>
   */
  IpamResourceDiscoveryAssociations?: IpamResourceDiscoveryAssociation[];

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeIpamsRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return in the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The IDs of the IPAMs you want information on.</p>
   */
  IpamIds?: string[];
}

/**
 * @public
 */
export interface DescribeIpamsResult {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the IPAMs.</p>
   */
  Ipams?: Ipam[];
}

/**
 * @public
 */
export interface DescribeIpamScopesRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return in the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The IDs of the scopes you want information on.</p>
   */
  IpamScopeIds?: string[];
}

/**
 * @public
 */
export interface DescribeIpamScopesResult {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The scopes you want information on.</p>
   */
  IpamScopes?: IpamScope[];
}

/**
 * @public
 */
export interface DescribeIpv6PoolsRequest {
  /**
   * @public
   * <p>The IDs of the IPv6 address pools.</p>
   */
  PoolIds?: string[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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

/**
 * @public
 * <p>Describes a CIDR block for an address pool.</p>
 */
export interface PoolCidrBlock {
  /**
   * @public
   * <p>The CIDR block.</p>
   */
  Cidr?: string;
}

/**
 * @public
 * <p>Describes an IPv6 address pool.</p>
 */
export interface Ipv6Pool {
  /**
   * @public
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>The description for the address pool.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The CIDR blocks for the address pool.</p>
   */
  PoolCidrBlocks?: PoolCidrBlock[];

  /**
   * @public
   * <p>Any tags for the address pool.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeIpv6PoolsResult {
  /**
   * @public
   * <p>Information about the IPv6 address pools.</p>
   */
  Ipv6Pools?: Ipv6Pool[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeKeyPairsRequest {
  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The key pair names.</p>
   *          <p>Default: Describes all of your key pairs.</p>
   */
  KeyNames?: string[];

  /**
   * @public
   * <p>The IDs of the key pairs.</p>
   */
  KeyPairIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>If <code>true</code>, the public key material is included in the response.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  IncludePublicKey?: boolean;
}

/**
 * @public
 * <p>Describes a key pair.</p>
 */
export interface KeyPairInfo {
  /**
   * @public
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;

  /**
   * @public
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
   */
  KeyFingerprint?: string;

  /**
   * @public
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * @public
   * <p>The type of key pair.</p>
   */
  KeyType?: KeyType | string;

  /**
   * @public
   * <p>Any tags applied to the key pair.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The public key material.</p>
   */
  PublicKey?: string;

  /**
   * @public
   * <p>If you used Amazon EC2 to create the key pair, this is the date and time when the key
   *             was created, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO
   *                 8601 date-time format</a>, in the UTC time zone.</p>
   *          <p>If you imported an existing key pair to Amazon EC2, this is the date and time the key
   *             was imported, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO
   *                 8601 date-time format</a>, in the UTC time zone.</p>
   */
  CreateTime?: Date;
}

/**
 * @public
 */
export interface DescribeKeyPairsResult {
  /**
   * @public
   * <p>Information about the key pairs.</p>
   */
  KeyPairs?: KeyPairInfo[];
}

/**
 * @public
 */
export interface DescribeLaunchTemplatesRequest {
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
   * <p>One or more launch template IDs.</p>
   */
  LaunchTemplateIds?: string[];

  /**
   * @public
   * <p>One or more launch template names.</p>
   */
  LaunchTemplateNames?: string[];

  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 1 and 200.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeLaunchTemplatesResult {
  /**
   * @public
   * <p>Information about the launch templates.</p>
   */
  LaunchTemplates?: LaunchTemplate[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeLaunchTemplateVersionsRequest {
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
   * <p>The ID of the launch template.</p>
   *          <p>To describe one or more versions of a specified launch template, you must specify
   *             either the <code>LaunchTemplateId</code> or the <code>LaunchTemplateName</code>, but not
   *             both.</p>
   *          <p>To describe all the latest or default launch template versions in your account, you
   *             must omit this parameter.</p>
   */
  LaunchTemplateId?: string;

  /**
   * @public
   * <p>The name of the launch template.</p>
   *          <p>To describe one or more versions of a specified launch template, you must specify
   *             either the <code>LaunchTemplateName</code> or the <code>LaunchTemplateId</code>, but not
   *             both.</p>
   *          <p>To describe all the latest or default launch template versions in your account, you
   *             must omit this parameter.</p>
   */
  LaunchTemplateName?: string;

  /**
   * @public
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
   */
  Versions?: string[];

  /**
   * @public
   * <p>The version number after which to describe launch template versions.</p>
   */
  MinVersion?: string;

  /**
   * @public
   * <p>The version number up to which to describe launch template versions.</p>
   */
  MaxVersion?: string;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 1 and 200.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>If <code>true</code>, and if a Systems Manager parameter is specified for <code>ImageId</code>,
   *             the AMI ID is displayed in the response for <code>imageId</code>.</p>
   *          <p>If <code>false</code>, and if a Systems Manager parameter is specified for <code>ImageId</code>,
   *             the parameter is displayed in the response for <code>imageId</code>.</p>
   *          <p> For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems
   *             Manager parameter instead of an AMI ID</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  ResolveAlias?: boolean;
}

/**
 * @public
 */
export interface DescribeLaunchTemplateVersionsResult {
  /**
   * @public
   * <p>Information about the launch template versions.</p>
   */
  LaunchTemplateVersions?: LaunchTemplateVersion[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeLocalGatewayRouteTablesRequest {
  /**
   * @public
   * <p>The IDs of the local gateway route tables.</p>
   */
  LocalGatewayRouteTableIds?: string[];

  /**
   * @public
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
export interface DescribeLocalGatewayRouteTablesResult {
  /**
   * @public
   * <p>Information about the local gateway route tables.</p>
   */
  LocalGatewayRouteTables?: LocalGatewayRouteTable[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
  /**
   * @public
   * <p>The IDs of the associations.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationIds?: string[];

  /**
   * @public
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
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult {
  /**
   * @public
   * <p>Information about the associations.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociations?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeLocalGatewayRouteTableVpcAssociationsRequest {
  /**
   * @public
   * <p>The IDs of the associations.</p>
   */
  LocalGatewayRouteTableVpcAssociationIds?: string[];

  /**
   * @public
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
export interface DescribeLocalGatewayRouteTableVpcAssociationsResult {
  /**
   * @public
   * <p>Information about the associations.</p>
   */
  LocalGatewayRouteTableVpcAssociations?: LocalGatewayRouteTableVpcAssociation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeLocalGatewaysRequest {
  /**
   * @public
   * <p>The IDs of the local gateways.</p>
   */
  LocalGatewayIds?: string[];

  /**
   * @public
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
 * <p>Describes a local gateway.</p>
 */
export interface LocalGateway {
  /**
   * @public
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the local gateway.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The state of the local gateway.</p>
   */
  State?: string;

  /**
   * @public
   * <p>The tags assigned to the local gateway.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeLocalGatewaysResult {
  /**
   * @public
   * <p>Information about the local gateways.</p>
   */
  LocalGateways?: LocalGateway[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeLocalGatewayVirtualInterfaceGroupsRequest {
  /**
   * @public
   * <p>The IDs of the virtual interface groups.</p>
   */
  LocalGatewayVirtualInterfaceGroupIds?: string[];

  /**
   * @public
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
 * <p>Describes a local gateway virtual interface group.</p>
 */
export interface LocalGatewayVirtualInterfaceGroup {
  /**
   * @public
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * @public
   * <p>The IDs of the virtual interfaces.</p>
   */
  LocalGatewayVirtualInterfaceIds?: string[];

  /**
   * @public
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface group.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The tags assigned to the virtual interface group.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeLocalGatewayVirtualInterfaceGroupsResult {
  /**
   * @public
   * <p>The virtual interface groups.</p>
   */
  LocalGatewayVirtualInterfaceGroups?: LocalGatewayVirtualInterfaceGroup[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeLocalGatewayVirtualInterfacesRequest {
  /**
   * @public
   * <p>The IDs of the virtual interfaces.</p>
   */
  LocalGatewayVirtualInterfaceIds?: string[];

  /**
   * @public
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
 * <p>Describes a local gateway virtual interface.</p>
 */
export interface LocalGatewayVirtualInterface {
  /**
   * @public
   * <p>The ID of the virtual interface.</p>
   */
  LocalGatewayVirtualInterfaceId?: string;

  /**
   * @public
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * @public
   * <p>The ID of the VLAN.</p>
   */
  Vlan?: number;

  /**
   * @public
   * <p>The local address.</p>
   */
  LocalAddress?: string;

  /**
   * @public
   * <p>The peer address.</p>
   */
  PeerAddress?: string;

  /**
   * @public
   * <p>The Border Gateway Protocol (BGP) Autonomous System Number (ASN) of the local gateway.</p>
   */
  LocalBgpAsn?: number;

  /**
   * @public
   * <p>The peer BGP ASN.</p>
   */
  PeerBgpAsn?: number;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The tags assigned to the virtual interface.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeLocalGatewayVirtualInterfacesResult {
  /**
   * @public
   * <p>Information about the virtual interfaces.</p>
   */
  LocalGatewayVirtualInterfaces?: LocalGatewayVirtualInterface[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeManagedPrefixListsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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
   * <p>One or more prefix list IDs.</p>
   */
  PrefixListIds?: string[];
}

/**
 * @public
 */
export interface DescribeManagedPrefixListsResult {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the prefix lists.</p>
   */
  PrefixLists?: ManagedPrefixList[];
}

/**
 * @public
 */
export interface DescribeMovingAddressesRequest {
  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>moving-status</code> - The status of the Elastic IP address
   *           (<code>MovingToVpc</code> | <code>RestoringToClassic</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *       results of the initial request can be seen by sending another request with the returned
   *       <code>NextToken</code> value. This value can be between 5 and 1000; if
   *       <code>MaxResults</code> is given a value outside of this range, an error is returned.</p>
   *          <p>Default: If no value is provided, the default is 1000.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>One or more Elastic IP addresses.</p>
   */
  PublicIps?: string[];
}

/**
 * @public
 * @enum
 */
export const MoveStatus = {
  movingToVpc: "movingToVpc",
  restoringToClassic: "restoringToClassic",
} as const;

/**
 * @public
 */
export type MoveStatus = (typeof MoveStatus)[keyof typeof MoveStatus];

/**
 * @public
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Describes the status of a moving Elastic IP address.</p>
 */
export interface MovingAddressStatus {
  /**
   * @public
   * <p>The status of the Elastic IP address that's being moved or restored.</p>
   */
  MoveStatus?: MoveStatus | string;

  /**
   * @public
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;
}

/**
 * @public
 */
export interface DescribeMovingAddressesResult {
  /**
   * @public
   * <p>The status for each Elastic IP address.</p>
   */
  MovingAddressStatuses?: MovingAddressStatus[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeNatGatewaysRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
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
   */
  Filter?: Filter[];

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The IDs of the NAT gateways.</p>
   */
  NatGatewayIds?: string[];

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeNatGatewaysResult {
  /**
   * @public
   * <p>Information about the NAT gateways.</p>
   */
  NatGateways?: NatGateway[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeNetworkAclsRequest {
  /**
   * @public
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
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the network ACLs.</p>
   *          <p>Default: Describes all your network ACLs.</p>
   */
  NetworkAclIds?: string[];

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeNetworkAclsResult {
  /**
   * @public
   * <p>Information about one or more network ACLs.</p>
   */
  NetworkAcls?: NetworkAcl[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopeAnalysesRequest {
  /**
   * @public
   * <p>The IDs of the Network Access Scope analyses.</p>
   */
  NetworkInsightsAccessScopeAnalysisIds?: string[];

  /**
   * @public
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * @public
   * <p>Filters the results based on the start time. The analysis must have started on or after this time.</p>
   */
  AnalysisStartTimeBegin?: Date;

  /**
   * @public
   * <p>Filters the results based on the start time. The analysis must have started on or before this time.</p>
   */
  AnalysisStartTimeEnd?: Date;

  /**
   * @public
   * <p>There are no supported filters.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const FindingsFound = {
  false: "false",
  true: "true",
  unknown: "unknown",
} as const;

/**
 * @public
 */
export type FindingsFound = (typeof FindingsFound)[keyof typeof FindingsFound];

/**
 * @public
 * @enum
 */
export const AnalysisStatus = {
  failed: "failed",
  running: "running",
  succeeded: "succeeded",
} as const;

/**
 * @public
 */
export type AnalysisStatus = (typeof AnalysisStatus)[keyof typeof AnalysisStatus];

/**
 * @public
 * <p>Describes a Network Access Scope analysis.</p>
 */
export interface NetworkInsightsAccessScopeAnalysis {
  /**
   * @public
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisArn?: string;

  /**
   * @public
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * @public
   * <p>The status.</p>
   */
  Status?: AnalysisStatus | string;

  /**
   * @public
   * <p>The status message.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The warning message.</p>
   */
  WarningMessage?: string;

  /**
   * @public
   * <p>The analysis start date.</p>
   */
  StartDate?: Date;

  /**
   * @public
   * <p>The analysis end date.</p>
   */
  EndDate?: Date;

  /**
   * @public
   * <p>Indicates whether there are findings.</p>
   */
  FindingsFound?: FindingsFound | string;

  /**
   * @public
   * <p>The number of network interfaces analyzed.</p>
   */
  AnalyzedEniCount?: number;

  /**
   * @public
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopeAnalysesResult {
  /**
   * @public
   * <p>The Network Access Scope analyses.</p>
   */
  NetworkInsightsAccessScopeAnalyses?: NetworkInsightsAccessScopeAnalysis[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopesRequest {
  /**
   * @public
   * <p>The IDs of the Network Access Scopes.</p>
   */
  NetworkInsightsAccessScopeIds?: string[];

  /**
   * @public
   * <p>There are no supported filters.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopesResult {
  /**
   * @public
   * <p>The Network Access Scopes.</p>
   */
  NetworkInsightsAccessScopes?: NetworkInsightsAccessScope[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAnalysesRequest {
  /**
   * @public
   * <p>The ID of the network insights analyses. You must specify either analysis IDs or a path ID.</p>
   */
  NetworkInsightsAnalysisIds?: string[];

  /**
   * @public
   * <p>The ID of the path. You must specify either a path ID or analysis IDs.</p>
   */
  NetworkInsightsPathId?: string;

  /**
   * @public
   * <p>The time when the network insights analyses started.</p>
   */
  AnalysisStartTime?: Date;

  /**
   * @public
   * <p>The time when the network insights analyses ended.</p>
   */
  AnalysisEndTime?: Date;

  /**
   * @public
   * <p>The filters. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>path-found - A Boolean value that indicates whether a feasible path is found.</p>
   *             </li>
   *             <li>
   *                <p>status - The status of the analysis (running | succeeded | failed).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes a network insights analysis.</p>
 */
export interface NetworkInsightsAnalysis {
  /**
   * @public
   * <p>The ID of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisArn?: string;

  /**
   * @public
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId?: string;

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
   * <p>The time the analysis started.</p>
   */
  StartDate?: Date;

  /**
   * @public
   * <p>The status of the network insights analysis.</p>
   */
  Status?: AnalysisStatus | string;

  /**
   * @public
   * <p>The status message, if the status is <code>failed</code>.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The warning message.</p>
   */
  WarningMessage?: string;

  /**
   * @public
   * <p>Indicates whether the destination is reachable from the source.</p>
   */
  NetworkPathFound?: boolean;

  /**
   * @public
   * <p>The components in the path from source to destination.</p>
   */
  ForwardPathComponents?: PathComponent[];

  /**
   * @public
   * <p>The components in the path from destination to source.</p>
   */
  ReturnPathComponents?: PathComponent[];

  /**
   * @public
   * <p>The explanations. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.</p>
   */
  Explanations?: Explanation[];

  /**
   * @public
   * <p>Potential intermediate components.</p>
   */
  AlternatePathHints?: AlternatePathHint[];

  /**
   * @public
   * <p>Potential intermediate accounts.</p>
   */
  SuggestedAccounts?: string[];

  /**
   * @public
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAnalysesResult {
  /**
   * @public
   * <p>Information about the network insights analyses.</p>
   */
  NetworkInsightsAnalyses?: NetworkInsightsAnalysis[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsPathsRequest {
  /**
   * @public
   * <p>The IDs of the paths.</p>
   */
  NetworkInsightsPathIds?: string[];

  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsPathsResult {
  /**
   * @public
   * <p>Information about the paths.</p>
   */
  NetworkInsightsPaths?: NetworkInsightsPath[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const NetworkInterfaceAttribute = {
  attachment: "attachment",
  description: "description",
  groupSet: "groupSet",
  sourceDestCheck: "sourceDestCheck",
} as const;

/**
 * @public
 */
export type NetworkInterfaceAttribute = (typeof NetworkInterfaceAttribute)[keyof typeof NetworkInterfaceAttribute];

/**
 * @public
 * <p>Contains the parameters for DescribeNetworkInterfaceAttribute.</p>
 */
export interface DescribeNetworkInterfaceAttributeRequest {
  /**
   * @public
   * <p>The attribute of the network interface. This parameter is required.</p>
   */
  Attribute?: NetworkInterfaceAttribute | string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

/**
 * @public
 * <p>Contains the output of DescribeNetworkInterfaceAttribute.</p>
 */
export interface DescribeNetworkInterfaceAttributeResult {
  /**
   * @public
   * <p>The attachment (if any) of the network interface.</p>
   */
  Attachment?: NetworkInterfaceAttachment;

  /**
   * @public
   * <p>The description of the network interface.</p>
   */
  Description?: AttributeValue;

  /**
   * @public
   * <p>The security groups associated with the network interface.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>Indicates whether source/destination checking is enabled.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;
}

/**
 * @public
 * <p>Contains the parameters for DescribeNetworkInterfacePermissions.</p>
 */
export interface DescribeNetworkInterfacePermissionsRequest {
  /**
   * @public
   * <p>The network interface permission IDs.</p>
   */
  NetworkInterfacePermissionIds?: string[];

  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.network-interface-permission-id</code> - The ID of the
   * 				permission.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.network-interface-id</code> - The ID of
   * 					the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.aws-account-id</code> - The Amazon Web Services account ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.aws-service</code> - The Amazon Web Service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.permission</code> - The type of
   * 					permission (<code>INSTANCE-ATTACH</code> |
   * 					<code>EIP-ASSOCIATE</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The token returned from a previous paginated request.
   * 		    Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request. To get the next page of items,
   * 			make another request with the token returned in the output. If this parameter is not specified,
   * 			up to 50 results are returned by default. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains the output for DescribeNetworkInterfacePermissions.</p>
 */
export interface DescribeNetworkInterfacePermissionsResult {
  /**
   * @public
   * <p>The network interface permissions.</p>
   */
  NetworkInterfacePermissions?: NetworkInterfacePermission[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items.
   * 		  This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains the parameters for DescribeNetworkInterfaces.</p>
 */
export interface DescribeNetworkInterfacesRequest {
  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>addresses.private-ip-address</code> - The private IPv4 addresses
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.primary</code> - Whether the private IPv4 address is the primary
   *                     IP address associated with the network interface. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.association.public-ip</code> - The association ID returned when
   *                     the network interface was associated with the Elastic IP address
   *                     (IPv4).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.association.owner-id</code> - The owner ID of the addresses associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.association-id</code> - The association ID returned when the
   *                     network interface was associated with an IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.allocation-id</code> - The allocation ID returned when you
   *                     allocated the Elastic IP address (IPv4) for your network interface.</p>
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
   *                   <code>attachment.attachment-id</code> - The ID of the interface attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.attach-time</code> - The time that the network interface was attached to an instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.delete-on-termination</code> - Indicates whether the attachment is deleted when an instance is terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.device-index</code> - The device index to which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.instance-id</code> - The ID of the instance to which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.instance-owner-id</code> - The owner ID of the instance to which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.status</code> - The status of the attachment (<code>attaching</code> | <code>attached</code> | <code>detaching</code> | <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of a security group associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-name</code> - The name of a security group associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-addresses.ipv6-address</code> - An IPv6 address associated with
   *                     the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>interface-type</code> - The type of network interface (<code>api_gateway_managed</code> |
   * 		               <code>aws_codestar_connections_managed</code> | <code>branch</code> | <code>efa</code> |
   * 		               <code>gateway_load_balancer</code> | <code>gateway_load_balancer_endpoint</code> | <code>global_accelerator_managed</code> |
   * 		               <code>interface</code> | <code>iot_rules_managed</code> | <code>lambda</code> | <code>load_balancer</code> |
   * 		               <code>nat_gateway</code> | <code>network_load_balancer</code> | <code>quicksight</code> |
   * 		               <code>transit_gateway</code> | <code>trunk</code> | <code>vpc_endpoint</code>).</p>
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
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the network interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - The private IPv4 address or addresses of the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name</code> - The private DNS name of the network interface (IPv4).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-id</code> - The alias or Amazon Web Services account ID of the principal or service that created the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-managed</code> - Indicates whether the network interface is being managed by an Amazon Web Service
   * 		               (for example, Amazon Web Services Management Console, Auto Scaling, and so on).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-dest-check</code> - Indicates whether the network interface performs source/destination checking.
   * 		            A value of <code>true</code> means checking is enabled, and <code>false</code> means checking is disabled.
   * 		            The value must be <code>false</code> for the network interface to perform network address translation (NAT) in your VPC. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the network interface. If the network interface is not attached to an instance, the status is <code>available</code>;
   * 		            if a network interface is attached to an instance the status is <code>in-use</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet for the network interface.</p>
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The network interface IDs.</p>
   *          <p>Default: Describes all your network interfaces.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * @public
   * <p>The token returned from a previous paginated request.
   * 		    Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request. To get the next page of items,
   * 		    make another request with the token returned in the output. You cannot specify this
   * 		    parameter and the network interface IDs parameter in the same request. For more information,
   * 		    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeNetworkInterfacesResult {
  /**
   * @public
   * <p>Information about one or more network interfaces.</p>
   */
  NetworkInterfaces?: NetworkInterface[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items.
   * 		    This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribePlacementGroupsRequest {
  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The names of the placement groups.</p>
   *          <p>Default: Describes all your placement groups, or only those otherwise
   *             specified.</p>
   */
  GroupNames?: string[];

  /**
   * @public
   * <p>The IDs of the placement groups.</p>
   */
  GroupIds?: string[];
}

/**
 * @public
 */
export interface DescribePlacementGroupsResult {
  /**
   * @public
   * <p>Information about the placement groups.</p>
   */
  PlacementGroups?: PlacementGroup[];
}

/**
 * @public
 */
export interface DescribePrefixListsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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
   * <p>One or more prefix list IDs.</p>
   */
  PrefixListIds?: string[];
}

/**
 * @public
 * <p>Describes prefixes for Amazon Web Services services.</p>
 */
export interface PrefixList {
  /**
   * @public
   * <p>The IP address range of the Amazon Web Service.</p>
   */
  Cidrs?: string[];

  /**
   * @public
   * <p>The ID of the prefix.</p>
   */
  PrefixListId?: string;

  /**
   * @public
   * <p>The name of the prefix.</p>
   */
  PrefixListName?: string;
}

/**
 * @public
 */
export interface DescribePrefixListsResult {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>All available prefix lists.</p>
   */
  PrefixLists?: PrefixList[];
}

/**
 * @public
 */
export interface DescribePrincipalIdFormatRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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
   */
  Resources?: string[];

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned NextToken value. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>PrincipalIdFormat description</p>
 */
export interface PrincipalIdFormat {
  /**
   * @public
   * <p>PrincipalIdFormatARN description</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>PrincipalIdFormatStatuses description</p>
   */
  Statuses?: IdFormat[];
}

/**
 * @public
 */
export interface DescribePrincipalIdFormatResult {
  /**
   * @public
   * <p>Information about the ID format settings for the ARN.</p>
   */
  Principals?: PrincipalIdFormat[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribePublicIpv4PoolsRequest {
  /**
   * @public
   * <p>The IDs of the address pools.</p>
   */
  PoolIds?: string[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
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

/**
 * @public
 * <p>Describes an address range of an IPv4 address pool.</p>
 */
export interface PublicIpv4PoolRange {
  /**
   * @public
   * <p>The first IP address in the range.</p>
   */
  FirstAddress?: string;

  /**
   * @public
   * <p>The last IP address in the range.</p>
   */
  LastAddress?: string;

  /**
   * @public
   * <p>The number of addresses in the range.</p>
   */
  AddressCount?: number;

  /**
   * @public
   * <p>The number of available addresses in the range.</p>
   */
  AvailableAddressCount?: number;
}

/**
 * @public
 * <p>Describes an IPv4 address pool.</p>
 */
export interface PublicIpv4Pool {
  /**
   * @public
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>A description of the address pool.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The address ranges.</p>
   */
  PoolAddressRanges?: PublicIpv4PoolRange[];

  /**
   * @public
   * <p>The total number of addresses.</p>
   */
  TotalAddressCount?: number;

  /**
   * @public
   * <p>The total number of available addresses.</p>
   */
  TotalAvailableAddressCount?: number;

  /**
   * @public
   * <p>The name of the location from which the address pool is advertised.
   *             A network border group is a unique set of Availability Zones or Local Zones
   *             from where Amazon Web Services advertises public IP addresses.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * @public
   * <p>Any tags for the address pool.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribePublicIpv4PoolsResult {
  /**
   * @public
   * <p>Information about the address pools.</p>
   */
  PublicIpv4Pools?: PublicIpv4Pool[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeRegionsRequest {
  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The names of the Regions. You can specify any Regions, whether they are enabled and disabled for your account.</p>
   */
  RegionNames?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Indicates whether to display all Regions, including Regions that are disabled for your account.</p>
   */
  AllRegions?: boolean;
}

/**
 * @public
 * <p>Describes a Region.</p>
 */
export interface Region {
  /**
   * @public
   * <p>The Region service endpoint.</p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>The name of the Region.</p>
   */
  RegionName?: string;

  /**
   * @public
   * <p>The Region opt-in status. The possible values are <code>opt-in-not-required</code>, <code>opted-in</code>, and
   *         <code>not-opted-in</code>.</p>
   */
  OptInStatus?: string;
}

/**
 * @public
 */
export interface DescribeRegionsResult {
  /**
   * @public
   * <p>Information about the Regions.</p>
   */
  Regions?: Region[];
}

/**
 * @public
 */
export interface DescribeReplaceRootVolumeTasksRequest {
  /**
   * @public
   * <p>The ID of the root volume replacement task to view.</p>
   */
  ReplaceRootVolumeTaskIds?: string[];

  /**
   * @public
   * <p>Filter to use:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance for which the root volume replacement task was created.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request.
   *   Pagination continues from the end of the items returned by the previous request.</p>
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
export interface DescribeReplaceRootVolumeTasksResult {
  /**
   * @public
   * <p>Information about the root volume replacement task.</p>
   */
  ReplaceRootVolumeTasks?: ReplaceRootVolumeTask[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const OfferingClassType = {
  CONVERTIBLE: "convertible",
  STANDARD: "standard",
} as const;

/**
 * @public
 */
export type OfferingClassType = (typeof OfferingClassType)[keyof typeof OfferingClassType];

/**
 * @public
 * @enum
 */
export const OfferingTypeValues = {
  All_Upfront: "All Upfront",
  Heavy_Utilization: "Heavy Utilization",
  Light_Utilization: "Light Utilization",
  Medium_Utilization: "Medium Utilization",
  No_Upfront: "No Upfront",
  Partial_Upfront: "Partial Upfront",
} as const;

/**
 * @public
 */
export type OfferingTypeValues = (typeof OfferingTypeValues)[keyof typeof OfferingTypeValues];

/**
 * @public
 * <p>Contains the parameters for DescribeReservedInstances.</p>
 */
export interface DescribeReservedInstancesRequest {
  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone where the Reserved Instance can be used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>duration</code> - The duration of the Reserved Instance (one year or three years), in seconds (<code>31536000</code> | <code>94608000</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end</code> - The time when the Reserved Instance expires (for example, 2015-08-07T11:54:42.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fixed-price</code> - The purchase price of the Reserved Instance (for example, 9800.0).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type that is covered by the reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scope</code> - The scope of the Reserved Instance (<code>Region</code> or <code>Availability Zone</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The Reserved Instance product platform description
   *              (<code>Linux/UNIX</code> | <code>Linux with SQL Server Standard</code> |
   *               <code>Linux with SQL Server Web</code> | <code>Linux with SQL Server Enterprise</code> |
   *               <code>SUSE Linux</code> |
   *               <code>Red Hat Enterprise Linux</code> | <code>Red Hat Enterprise Linux with HA</code> |
   *               <code>Windows</code> | <code>Windows with SQL Server Standard</code> |
   *               <code>Windows with SQL Server Web</code> | <code>Windows with SQL Server Enterprise</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start</code> - The time at which the Reserved Instance purchase request was placed (for example, 2014-08-07T11:54:42.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Reserved Instance (<code>payment-pending</code> | <code>active</code> | <code>payment-failed</code> | <code>retired</code>).</p>
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
   *                   <code>usage-price</code> - The usage price of the Reserved Instance, per hour (for example, 0.84).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Describes whether the Reserved Instance is Standard or Convertible.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * @public
   * <p>One or more Reserved Instance IDs.</p>
   *          <p>Default: Describes all your Reserved Instances, or only those otherwise specified.</p>
   */
  ReservedInstancesIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API
   * 			version, you only have access to the <code>Medium Utilization</code> Reserved Instance
   * 			offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;
}

/**
 * @public
 * @enum
 */
export const RIProductDescription = {
  Linux_UNIX: "Linux/UNIX",
  Linux_UNIX_Amazon_VPC_: "Linux/UNIX (Amazon VPC)",
  Windows: "Windows",
  Windows_Amazon_VPC_: "Windows (Amazon VPC)",
} as const;

/**
 * @public
 */
export type RIProductDescription = (typeof RIProductDescription)[keyof typeof RIProductDescription];

/**
 * @public
 * @enum
 */
export const RecurringChargeFrequency = {
  Hourly: "Hourly",
} as const;

/**
 * @public
 */
export type RecurringChargeFrequency = (typeof RecurringChargeFrequency)[keyof typeof RecurringChargeFrequency];

/**
 * @public
 * <p>Describes a recurring charge.</p>
 */
export interface RecurringCharge {
  /**
   * @public
   * <p>The amount of the recurring charge.</p>
   */
  Amount?: number;

  /**
   * @public
   * <p>The frequency of the recurring charge.</p>
   */
  Frequency?: RecurringChargeFrequency | string;
}

/**
 * @public
 * @enum
 */
export const Scope = {
  AVAILABILITY_ZONE: "Availability Zone",
  REGIONAL: "Region",
} as const;

/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];

/**
 * @public
 * @enum
 */
export const ReservedInstanceState = {
  active: "active",
  payment_failed: "payment-failed",
  payment_pending: "payment-pending",
  queued: "queued",
  queued_deleted: "queued-deleted",
  retired: "retired",
} as const;

/**
 * @public
 */
export type ReservedInstanceState = (typeof ReservedInstanceState)[keyof typeof ReservedInstanceState];

/**
 * @public
 * <p>Describes a Reserved Instance.</p>
 */
export interface ReservedInstances {
  /**
   * @public
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The duration of the Reserved Instance, in seconds.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The time when the Reserved Instance expires.</p>
   */
  End?: Date;

  /**
   * @public
   * <p>The purchase price of the Reserved Instance.</p>
   */
  FixedPrice?: number;

  /**
   * @public
   * <p>The number of reservations purchased.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>The instance type on which the Reserved Instance can be used.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * @public
   * <p>The Reserved Instance product platform description.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * @public
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;

  /**
   * @public
   * <p>The date and time the Reserved Instance started.</p>
   */
  Start?: Date;

  /**
   * @public
   * <p>The state of the Reserved Instance purchase.</p>
   */
  State?: ReservedInstanceState | string;

  /**
   * @public
   * <p>The usage price of the Reserved Instance, per hour.</p>
   */
  UsagePrice?: number;

  /**
   * @public
   * <p>The currency of the Reserved Instance. It's specified using ISO 4217 standard currency codes.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * @public
   * <p>The tenancy of the instance.</p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * @public
   * <p>The offering class of the Reserved Instance.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * @public
   * <p>The Reserved Instance offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;

  /**
   * @public
   * <p>The recurring charge tag assigned to the resource.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * @public
   * <p>The scope of the Reserved Instance.</p>
   */
  Scope?: Scope | string;

  /**
   * @public
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Contains the output for DescribeReservedInstances.</p>
 */
export interface DescribeReservedInstancesResult {
  /**
   * @public
   * <p>A list of Reserved Instances.</p>
   */
  ReservedInstances?: ReservedInstances[];
}

/**
 * @public
 * <p>Contains the parameters for DescribeReservedInstancesListings.</p>
 */
export interface DescribeReservedInstancesListingsRequest {
  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-listing-id</code> - The ID of the Reserved Instances listing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the Reserved Instance listing (<code>pending</code> | <code>active</code> |
   *            <code>cancelled</code> | <code>closed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - The reason for the status.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>One or more Reserved Instance IDs.</p>
   */
  ReservedInstancesId?: string;

  /**
   * @public
   * <p>One or more Reserved Instance listing IDs.</p>
   */
  ReservedInstancesListingId?: string;
}

/**
 * @public
 * <p>Contains the output of DescribeReservedInstancesListings.</p>
 */
export interface DescribeReservedInstancesListingsResult {
  /**
   * @public
   * <p>Information about the Reserved Instance listing.</p>
   */
  ReservedInstancesListings?: ReservedInstancesListing[];
}

/**
 * @public
 * <p>Contains the parameters for DescribeReservedInstancesModifications.</p>
 */
export interface DescribeReservedInstancesModificationsRequest {
  /**
   * @public
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
   *                   <code>modification-result.reserved-instances-id</code> - The ID for the Reserved Instances created as part of the modification request. This ID is only available when the status of the modification is <code>fulfilled</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.availability-zone</code> - The Availability Zone for the new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.instance-count </code> - The number of new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.instance-type</code> - The instance type of the new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instances modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-modification-id</code> - The ID of the modification request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the Reserved Instances modification request
   *            (<code>processing</code> | <code>fulfilled</code> | <code>failed</code>).</p>
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>IDs for the submitted modification request.</p>
   */
  ReservedInstancesModificationIds?: string[];

  /**
   * @public
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes the configuration settings for the modified Reserved Instances.</p>
 */
export interface ReservedInstancesConfiguration {
  /**
   * @public
   * <p>The Availability Zone for the modified Reserved Instances.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The number of modified Reserved Instances.</p>
   *          <note>
   *             <p>This is a required field for a request.</p>
   *          </note>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>The instance type for the modified Reserved Instances.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * @public
   * <p>The network platform of the modified Reserved Instances.</p>
   */
  Platform?: string;

  /**
   * @public
   * <p>Whether the Reserved Instance is applied to instances in a Region or instances in a specific Availability Zone.</p>
   */
  Scope?: Scope | string;
}

/**
 * @public
 * <p>Describes the modification request/s.</p>
 */
export interface ReservedInstancesModificationResult {
  /**
   * @public
   * <p>The ID for the Reserved Instances that were created as part of the modification request. This field is only available when the modification is fulfilled.</p>
   */
  ReservedInstancesId?: string;

  /**
   * @public
   * <p>The target Reserved Instances configurations supplied as part of the modification request.</p>
   */
  TargetConfiguration?: ReservedInstancesConfiguration;
}

/**
 * @public
 * <p>Describes the ID of a Reserved Instance.</p>
 */
export interface ReservedInstancesId {
  /**
   * @public
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;
}

/**
 * @public
 * <p>Describes a Reserved Instance modification.</p>
 */
export interface ReservedInstancesModification {
  /**
   * @public
   * <p>A unique, case-sensitive key supplied by the client to ensure that the request is idempotent.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   * 				Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The time when the modification request was created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The time for the modification to become effective.</p>
   */
  EffectiveDate?: Date;

  /**
   * @public
   * <p>Contains target configurations along with their corresponding new Reserved Instance IDs.</p>
   */
  ModificationResults?: ReservedInstancesModificationResult[];

  /**
   * @public
   * <p>The IDs of one or more Reserved Instances.</p>
   */
  ReservedInstancesIds?: ReservedInstancesId[];

  /**
   * @public
   * <p>A unique ID for the Reserved Instance modification.</p>
   */
  ReservedInstancesModificationId?: string;

  /**
   * @public
   * <p>The status of the Reserved Instances modification request.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The reason for the status.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The time when the modification request was last updated.</p>
   */
  UpdateDate?: Date;
}

/**
 * @public
 * <p>Contains the output of DescribeReservedInstancesModifications.</p>
 */
export interface DescribeReservedInstancesModificationsResult {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when
   * 			there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Reserved Instance modification information.</p>
   */
  ReservedInstancesModifications?: ReservedInstancesModification[];
}

/**
 * @public
 * <p>Contains the parameters for DescribeReservedInstancesOfferings.</p>
 */
export interface DescribeReservedInstancesOfferingsRequest {
  /**
   * @public
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone where the Reserved Instance can be
   *           used.</p>
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
   *                   <code>instance-type</code> - The instance type that is covered by the
   *           reservation.</p>
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
   *           (<code>Linux/UNIX</code> | <code>Linux with SQL Server Standard</code> |
   *           <code>Linux with SQL Server Web</code> | <code>Linux with SQL Server Enterprise</code> |
   *           <code>SUSE Linux</code> |
   *           <code>Red Hat Enterprise Linux</code> | <code>Red Hat Enterprise Linux with HA</code> |
   *           <code>Windows</code> | <code>Windows with SQL Server Standard</code> |
   *           <code>Windows with SQL Server Web</code> | <code>Windows with SQL Server Enterprise</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-offering-id</code> - The Reserved Instances offering
   *           ID.</p>
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Include Reserved Instance Marketplace offerings in the response.</p>
   */
  IncludeMarketplace?: boolean;

  /**
   * @public
   * <p>The instance type that the reservation will cover (for example, <code>m1.small</code>). For more information, see
   *        <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * @public
   * <p>The maximum duration (in seconds) to filter when searching for offerings.</p>
   *          <p>Default: 94608000 (3 years)</p>
   */
  MaxDuration?: number;

  /**
   * @public
   * <p>The maximum number of instances to filter when searching for offerings.</p>
   *          <p>Default: 20</p>
   */
  MaxInstanceCount?: number;

  /**
   * @public
   * <p>The minimum duration (in seconds) to filter when searching for offerings.</p>
   *          <p>Default: 2592000 (1 month)</p>
   */
  MinDuration?: number;

  /**
   * @public
   * <p>The offering class of the Reserved Instance. Can be <code>standard</code> or <code>convertible</code>.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * @public
   * <p>The Reserved Instance product platform description. Instances that include <code>(Amazon
   *         VPC)</code> in the description are for use with Amazon VPC.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * @public
   * <p>One or more Reserved Instances offering IDs.</p>
   */
  ReservedInstancesOfferingIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The tenancy of the instances covered by the reservation. A Reserved Instance with a tenancy
   *       of <code>dedicated</code> is applied to instances that run in a VPC on single-tenant hardware
   *       (i.e., Dedicated Instances).</p>
   *          <p>
   *             <b>Important:</b> The <code>host</code> value cannot be used with this parameter. Use the <code>default</code> or <code>dedicated</code> values only.</p>
   *          <p>Default: <code>default</code>
   *          </p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining
   * 			results of the initial request can be seen by sending another request with the returned
   * 				<code>NextToken</code> value. The maximum is 100.</p>
   *          <p>Default: 100</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API
   * 			version, you only have access to the <code>Medium Utilization</code> Reserved Instance
   * 			offering type. </p>
   */
  OfferingType?: OfferingTypeValues | string;
}

/**
 * @public
 * <p>Describes a Reserved Instance offering.</p>
 */
export interface PricingDetail {
  /**
   * @public
   * <p>The number of reservations available for the price.</p>
   */
  Count?: number;

  /**
   * @public
   * <p>The price per instance.</p>
   */
  Price?: number;
}

/**
 * @public
 * <p>Describes a Reserved Instance offering.</p>
 */
export interface ReservedInstancesOffering {
  /**
   * @public
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The duration of the Reserved Instance, in seconds.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The purchase price of the Reserved Instance.</p>
   */
  FixedPrice?: number;

  /**
   * @public
   * <p>The instance type on which the Reserved Instance can be used.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * @public
   * <p>The Reserved Instance product platform description.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * @public
   * <p>The ID of the Reserved Instance offering. This is the offering ID used in <a>GetReservedInstancesExchangeQuote</a>
   *      to confirm that an exchange can be made.</p>
   */
  ReservedInstancesOfferingId?: string;

  /**
   * @public
   * <p>The usage price of the Reserved Instance, per hour.</p>
   */
  UsagePrice?: number;

  /**
   * @public
   * <p>The currency of the Reserved Instance offering you are purchasing. It's
   * 				specified using ISO 4217 standard currency codes. At this time,
   * 				the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * @public
   * <p>The tenancy of the instance.</p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * @public
   * <p>Indicates whether the offering is available through the Reserved Instance Marketplace (resale) or Amazon Web Services.
   *         If it's a Reserved Instance Marketplace offering, this is <code>true</code>.</p>
   */
  Marketplace?: boolean;

  /**
   * @public
   * <p>If <code>convertible</code> it can be exchanged for Reserved Instances of
   *       the same or higher monetary value, with different configurations. If <code>standard</code>, it is not
   *       possible to perform an exchange.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * @public
   * <p>The Reserved Instance offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;

  /**
   * @public
   * <p>The pricing details of the Reserved Instance offering.</p>
   */
  PricingDetails?: PricingDetail[];

  /**
   * @public
   * <p>The recurring charge tag assigned to the resource.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * @public
   * <p>Whether the Reserved Instance is applied to instances in a Region or an Availability Zone.</p>
   */
  Scope?: Scope | string;
}

/**
 * @public
 * <p>Contains the output of DescribeReservedInstancesOfferings.</p>
 */
export interface DescribeReservedInstancesOfferingsResult {
  /**
   * @public
   * <p>A list of Reserved Instances offerings.</p>
   */
  ReservedInstancesOfferings?: ReservedInstancesOffering[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when
   * 			there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeRouteTablesRequest {
  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
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
   *                   <code>route.destination-prefix-list-id</code> - The ID (prefix) of the Amazon Web Service
   *                     specified in a route in the table.</p>
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
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the route tables.</p>
   *          <p>Default: Describes all your route tables.</p>
   */
  RouteTableIds?: string[];

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains the output of DescribeRouteTables.</p>
 */
export interface DescribeRouteTablesResult {
  /**
   * @public
   * <p>Information about one or more route tables.</p>
   */
  RouteTables?: RouteTable[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes the time period for a Scheduled Instance to start its first schedule. The time period must span less than one day.</p>
 */
export interface SlotDateTimeRangeRequest {
  /**
   * @public
   * <p>The earliest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  EarliestTime: Date | undefined;

  /**
   * @public
   * <p>The latest date and time, in UTC, for the Scheduled Instance to start. This value must be later than or equal to the earliest date and at most three months in the future.</p>
   */
  LatestTime: Date | undefined;
}

/**
 * @public
 * <p>Describes the recurring schedule for a Scheduled Instance.</p>
 */
export interface ScheduledInstanceRecurrenceRequest {
  /**
   * @public
   * <p>The frequency (<code>Daily</code>, <code>Weekly</code>, or <code>Monthly</code>).</p>
   */
  Frequency?: string;

  /**
   * @public
   * <p>The interval quantity. The interval unit depends on the value of <code>Frequency</code>. For example, every 2
   *          weeks or every 2 months.</p>
   */
  Interval?: number;

  /**
   * @public
   * <p>The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday). You can't specify this value with a daily schedule. If the occurrence is relative to the end of the month, you can specify only a single day.</p>
   */
  OccurrenceDays?: number[];

  /**
   * @public
   * <p>Indicates whether the occurrence is relative to the end of the specified week or month. You can't specify this value with a daily schedule.</p>
   */
  OccurrenceRelativeToEnd?: boolean;

  /**
   * @public
   * <p>The unit for <code>OccurrenceDays</code> (<code>DayOfWeek</code> or <code>DayOfMonth</code>).
   *         This value is required for a monthly schedule.
   *         You can't specify <code>DayOfWeek</code> with a weekly schedule.
   *         You can't specify this value with a daily schedule.</p>
   */
  OccurrenceUnit?: string;
}

/**
 * @public
 * <p>Contains the parameters for DescribeScheduledInstanceAvailability.</p>
 */
export interface DescribeScheduledInstanceAvailabilityRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The time period for the first schedule to start.</p>
   */
  FirstSlotStartTimeRange: SlotDateTimeRangeRequest | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.
   *          This value can be between 5 and 300. The default value is 300.
   *          To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The maximum available duration, in hours. This value must be greater than <code>MinSlotDurationInHours</code>
   *          and less than 1,720.</p>
   */
  MaxSlotDurationInHours?: number;

  /**
   * @public
   * <p>The minimum available duration, in hours. The minimum required duration is 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p>
   */
  MinSlotDurationInHours?: number;

  /**
   * @public
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The schedule recurrence.</p>
   */
  Recurrence: ScheduledInstanceRecurrenceRequest | undefined;
}

/**
 * @public
 * <p>Describes the recurring schedule for a Scheduled Instance.</p>
 */
export interface ScheduledInstanceRecurrence {
  /**
   * @public
   * <p>The frequency (<code>Daily</code>, <code>Weekly</code>, or <code>Monthly</code>).</p>
   */
  Frequency?: string;

  /**
   * @public
   * <p>The interval quantity. The interval unit depends on the value of <code>frequency</code>. For example, every 2
   *          weeks or every 2 months.</p>
   */
  Interval?: number;

  /**
   * @public
   * <p>The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday).</p>
   */
  OccurrenceDaySet?: number[];

  /**
   * @public
   * <p>Indicates whether the occurrence is relative to the end of the specified week or month.</p>
   */
  OccurrenceRelativeToEnd?: boolean;

  /**
   * @public
   * <p>The unit for <code>occurrenceDaySet</code> (<code>DayOfWeek</code> or <code>DayOfMonth</code>).</p>
   */
  OccurrenceUnit?: string;
}

/**
 * @public
 * <p>Describes a schedule that is available for your Scheduled Instances.</p>
 */
export interface ScheduledInstanceAvailability {
  /**
   * @public
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The number of available instances.</p>
   */
  AvailableInstanceCount?: number;

  /**
   * @public
   * <p>The time period for the first schedule to start.</p>
   */
  FirstSlotStartTime?: Date;

  /**
   * @public
   * <p>The hourly price for a single instance.</p>
   */
  HourlyPrice?: string;

  /**
   * @public
   * <p>The instance type. You can specify one of the C3, C4, M4, or R3 instance types.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The maximum term. The only possible value is 365 days.</p>
   */
  MaxTermDurationInDays?: number;

  /**
   * @public
   * <p>The minimum term. The only possible value is 365 days.</p>
   */
  MinTermDurationInDays?: number;

  /**
   * @public
   * <p>The network platform.</p>
   */
  NetworkPlatform?: string;

  /**
   * @public
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   */
  Platform?: string;

  /**
   * @public
   * <p>The purchase token. This token expires in two hours.</p>
   */
  PurchaseToken?: string;

  /**
   * @public
   * <p>The schedule recurrence.</p>
   */
  Recurrence?: ScheduledInstanceRecurrence;

  /**
   * @public
   * <p>The number of hours in the schedule.</p>
   */
  SlotDurationInHours?: number;

  /**
   * @public
   * <p>The total number of hours for a single instance for the entire term.</p>
   */
  TotalScheduledInstanceHours?: number;
}

/**
 * @public
 * <p>Contains the output of DescribeScheduledInstanceAvailability.</p>
 */
export interface DescribeScheduledInstanceAvailabilityResult {
  /**
   * @public
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the available Scheduled Instances.</p>
   */
  ScheduledInstanceAvailabilitySet?: ScheduledInstanceAvailability[];
}

/**
 * @public
 * <p>Describes the time period for a Scheduled Instance to start its first schedule.</p>
 */
export interface SlotStartTimeRangeRequest {
  /**
   * @public
   * <p>The earliest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  EarliestTime?: Date;

  /**
   * @public
   * <p>The latest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  LatestTime?: Date;
}

/**
 * @public
 * <p>Contains the parameters for DescribeScheduledInstances.</p>
 */
export interface DescribeScheduledInstancesRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return in a single call.
   *          This value can be between 5 and 300. The default value is 100.
   *          To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Scheduled Instance IDs.</p>
   */
  ScheduledInstanceIds?: string[];

  /**
   * @public
   * <p>The time period for the first schedule to start.</p>
   */
  SlotStartTimeRange?: SlotStartTimeRangeRequest;
}

/**
 * @public
 * <p>Describes a Scheduled Instance.</p>
 */
export interface ScheduledInstance {
  /**
   * @public
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The date when the Scheduled Instance was purchased.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The hourly price for a single instance.</p>
   */
  HourlyPrice?: string;

  /**
   * @public
   * <p>The number of instances.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The network platform.</p>
   */
  NetworkPlatform?: string;

  /**
   * @public
   * <p>The time for the next schedule to start.</p>
   */
  NextSlotStartTime?: Date;

  /**
   * @public
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   */
  Platform?: string;

  /**
   * @public
   * <p>The time that the previous schedule ended or will end.</p>
   */
  PreviousSlotEndTime?: Date;

  /**
   * @public
   * <p>The schedule recurrence.</p>
   */
  Recurrence?: ScheduledInstanceRecurrence;

  /**
   * @public
   * <p>The Scheduled Instance ID.</p>
   */
  ScheduledInstanceId?: string;

  /**
   * @public
   * <p>The number of hours in the schedule.</p>
   */
  SlotDurationInHours?: number;

  /**
   * @public
   * <p>The end date for the Scheduled Instance.</p>
   */
  TermEndDate?: Date;

  /**
   * @public
   * <p>The start date for the Scheduled Instance.</p>
   */
  TermStartDate?: Date;

  /**
   * @public
   * <p>The total number of hours for a single instance for the entire term.</p>
   */
  TotalScheduledInstanceHours?: number;
}

/**
 * @public
 * <p>Contains the output of DescribeScheduledInstances.</p>
 */
export interface DescribeScheduledInstancesResult {
  /**
   * @public
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the Scheduled Instances.</p>
   */
  ScheduledInstanceSet?: ScheduledInstance[];
}

/**
 * @public
 */
export interface DescribeSecurityGroupReferencesRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the security groups in your account.</p>
   */
  GroupId: string[] | undefined;
}

/**
 * @public
 * <p>Describes a VPC with a security group that references your security group.</p>
 */
export interface SecurityGroupReference {
  /**
   * @public
   * <p>The ID of your security group.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>The ID of the VPC with the referencing security group.</p>
   */
  ReferencingVpcId?: string;

  /**
   * @public
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

/**
 * @public
 */
export interface DescribeSecurityGroupReferencesResult {
  /**
   * @public
   * <p>Information about the VPCs with the referencing security groups.</p>
   */
  SecurityGroupReferenceSet?: SecurityGroupReference[];
}

/**
 * @public
 */
export interface DescribeSecurityGroupRulesRequest {
  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The IDs of the security group rules.</p>
   */
  SecurityGroupRuleIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The token returned from a previous paginated request.
   *             Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request. To get the next page of
   *             items, make another request with the token returned in the output. This value
   *             can be between 5 and 1000. If this parameter is not specified, then all items are
   *             returned. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeSecurityGroupRulesResult {
  /**
   * @public
   * <p>Information about security group rules.</p>
   */
  SecurityGroupRules?: SecurityGroupRule[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items.
   *             This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeSecurityGroupsRequest {
  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The IDs of the security groups. Required for security groups in a nondefault VPC.</p>
   *          <p>Default: Describes all of your security groups.</p>
   */
  GroupIds?: string[];

  /**
   * @public
   * <p>[Default VPC] The names of the security groups. You can specify either
   * 			the security group name or the security group ID.</p>
   *          <p>Default: Describes all of your security groups.</p>
   */
  GroupNames?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The token returned from a previous paginated request.
   *             Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *             make another request with the token returned in the output. This value can be between 5 and 1000.
   *             If this parameter is not specified, then all items are returned. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Describes a security group.</p>
 */
export interface SecurityGroup {
  /**
   * @public
   * <p>A description of the security group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The inbound rules associated with the security group.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * @public
   * <p>The Amazon Web Services account ID of the owner of the security group.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>The outbound rules associated with the security group.</p>
   */
  IpPermissionsEgress?: IpPermission[];

  /**
   * @public
   * <p>Any tags assigned to the security group.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The ID of the VPC for the security group.</p>
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface DescribeSecurityGroupsResult {
  /**
   * @public
   * <p>Information about the security groups.</p>
   */
  SecurityGroups?: SecurityGroup[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items.
   *             This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SnapshotAttributeName = {
  createVolumePermission: "createVolumePermission",
  productCodes: "productCodes",
} as const;

/**
 * @public
 */
export type SnapshotAttributeName = (typeof SnapshotAttributeName)[keyof typeof SnapshotAttributeName];

/**
 * @public
 */
export interface DescribeSnapshotAttributeRequest {
  /**
   * @public
   * <p>The snapshot attribute you would like to view.</p>
   */
  Attribute: SnapshotAttributeName | string | undefined;

  /**
   * @public
   * <p>The ID of the EBS snapshot.</p>
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
 * <p>Describes the user or group to be added or removed from the list of create volume
 *       permissions for a volume.</p>
 */
export interface CreateVolumePermission {
  /**
   * @public
   * <p>The group to be added or removed. The possible value is <code>all</code>.</p>
   */
  Group?: PermissionGroup | string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account to be added or removed.</p>
   */
  UserId?: string;
}

/**
 * @public
 */
export interface DescribeSnapshotAttributeResult {
  /**
   * @public
   * <p>The users and groups that have the permissions for creating volumes from the
   *       snapshot.</p>
   */
  CreateVolumePermissions?: CreateVolumePermission[];

  /**
   * @public
   * <p>The product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * @public
   * <p>The ID of the EBS snapshot.</p>
   */
  SnapshotId?: string;
}

/**
 * @public
 */
export interface DescribeSnapshotsRequest {
  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of snapshots to return for this request.
   *       This value can be between 5 and 1,000; if this value is larger than 1,000, only 1,000 results are returned.
   *       If this parameter is not used, then the request returns all snapshots.
   *       You cannot specify this parameter and the snapshot IDs parameter in the same request. For more information,
   *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request.
   *       Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Scopes the results to snapshots with the specified owners. You can specify a combination of
   *       Amazon Web Services account IDs, <code>self</code>, and <code>amazon</code>.</p>
   */
  OwnerIds?: string[];

  /**
   * @public
   * <p>The IDs of the Amazon Web Services accounts that can create volumes from the snapshot.</p>
   */
  RestorableByUserIds?: string[];

  /**
   * @public
   * <p>The snapshot IDs.</p>
   *          <p>Default: Describes the snapshots for which you have create volume permissions.</p>
   */
  SnapshotIds?: string[];

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
export interface DescribeSnapshotsResult {
  /**
   * @public
   * <p>Information about the snapshots.</p>
   */
  Snapshots?: Snapshot[];

  /**
   * @public
   * <p>The token to include in another request to return the next page of snapshots.
   *       This value is <code>null</code> when there are no more snapshots to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeSnapshotTierStatusRequest {
  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The token returned from a previous paginated request.
   *   Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const TieringOperationStatus = {
  archival_completed: "archival-completed",
  archival_failed: "archival-failed",
  archival_in_progress: "archival-in-progress",
  permanent_restore_completed: "permanent-restore-completed",
  permanent_restore_failed: "permanent-restore-failed",
  permanent_restore_in_progress: "permanent-restore-in-progress",
  temporary_restore_completed: "temporary-restore-completed",
  temporary_restore_failed: "temporary-restore-failed",
  temporary_restore_in_progress: "temporary-restore-in-progress",
} as const;

/**
 * @public
 */
export type TieringOperationStatus = (typeof TieringOperationStatus)[keyof typeof TieringOperationStatus];

/**
 * @public
 * <p>Provides information about a snapshot's storage tier.</p>
 */
export interface SnapshotTierStatus {
  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The ID of the volume from which the snapshot was created.</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>The state of the snapshot.</p>
   */
  Status?: SnapshotState | string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The tags that are assigned to the snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The storage tier in which the snapshot is stored. <code>standard</code> indicates
   *       that the snapshot is stored in the standard snapshot storage tier and that it is ready
   *       for use. <code>archive</code> indicates that the snapshot is currently archived and that
   *       it must be restored before it can be used.</p>
   */
  StorageTier?: StorageTier | string;

  /**
   * @public
   * <p>The date and time when the last archive or restore process was started.</p>
   */
  LastTieringStartTime?: Date;

  /**
   * @public
   * <p>The progress of the last archive or restore process, as a percentage.</p>
   */
  LastTieringProgress?: number;

  /**
   * @public
   * <p>The status of the last archive or restore process.</p>
   */
  LastTieringOperationStatus?: TieringOperationStatus | string;

  /**
   * @public
   * <p>A message describing the status of the last archive or restore process.</p>
   */
  LastTieringOperationStatusDetail?: string;

  /**
   * @public
   * <p>The date and time when the last archive process was completed.</p>
   */
  ArchivalCompleteTime?: Date;

  /**
   * @public
   * <p>Only for archived snapshots that are temporarily restored. Indicates the date and
   *       time when a temporarily restored snapshot will be automatically re-archived.</p>
   */
  RestoreExpiryTime?: Date;
}

/**
 * @public
 */
export interface DescribeSnapshotTierStatusResult {
  /**
   * @public
   * <p>Information about the snapshot's storage tier.</p>
   */
  SnapshotTierStatuses?: SnapshotTierStatus[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains the parameters for DescribeSpotDatafeedSubscription.</p>
 */
export interface DescribeSpotDatafeedSubscriptionRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *             <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Contains the output of DescribeSpotDatafeedSubscription.</p>
 */
export interface DescribeSpotDatafeedSubscriptionResult {
  /**
   * @public
   * <p>The Spot Instance data feed subscription.</p>
   */
  SpotDatafeedSubscription?: SpotDatafeedSubscription;
}

/**
 * @public
 * <p>Contains the parameters for DescribeSpotFleetInstances.</p>
 */
export interface DescribeSpotFleetInstancesRequest {
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
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId: string | undefined;
}

/**
 * @public
 * <p>Contains the output of DescribeSpotFleetInstances.</p>
 */
export interface DescribeSpotFleetInstancesResponse {
  /**
   * @public
   * <p>The running instances. This list is refreshed periodically and might be out of
   *             date.</p>
   */
  ActiveInstances?: ActiveInstance[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

/**
 * @public
 * @enum
 */
export const EventType = {
  BATCH_CHANGE: "fleetRequestChange",
  ERROR: "error",
  INFORMATION: "information",
  INSTANCE_CHANGE: "instanceChange",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * <p>Contains the parameters for DescribeSpotFleetRequestHistory.</p>
 */
export interface DescribeSpotFleetRequestHistoryRequest {
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
   * <p>The type of events to describe. By default, all events are described.</p>
   */
  EventType?: EventType | string;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId: string | undefined;

  /**
   * @public
   * <p>The starting date and time for the events, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime: Date | undefined;
}

/**
 * @public
 * <p>Describes an event in the history of the Spot Fleet request.</p>
 */
export interface HistoryRecord {
  /**
   * @public
   * <p>Information about the event.</p>
   */
  EventInformation?: EventInformation;

  /**
   * @public
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
   */
  EventType?: EventType | string;

  /**
   * @public
   * <p>The date and time of the event, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;
}

/**
 * @public
 * <p>Contains the output of DescribeSpotFleetRequestHistory.</p>
 */
export interface DescribeSpotFleetRequestHistoryResponse {
  /**
   * @public
   * <p>Information about the events in the history of the Spot Fleet request.</p>
   */
  HistoryRecords?: HistoryRecord[];

  /**
   * @public
   * <p>The last date and time for the events, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             All records up to this time were retrieved.</p>
   *          <p>If <code>nextToken</code> indicates that there are more items, this value is not
   *             present.</p>
   */
  LastEvaluatedTime?: Date;

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;

  /**
   * @public
   * <p>The starting date and time for the events, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime?: Date;
}

/**
 * @public
 * <p>Contains the parameters for DescribeSpotFleetRequests.</p>
 */
export interface DescribeSpotFleetRequestsRequest {
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
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The IDs of the Spot Fleet requests.</p>
   */
  SpotFleetRequestIds?: string[];
}

/**
 * @public
 * @enum
 */
export const ExcessCapacityTerminationPolicy = {
  DEFAULT: "default",
  NO_TERMINATION: "noTermination",
} as const;

/**
 * @public
 */
export type ExcessCapacityTerminationPolicy =
  (typeof ExcessCapacityTerminationPolicy)[keyof typeof ExcessCapacityTerminationPolicy];

/**
 * @public
 * <p>Describes whether monitoring is enabled.</p>
 */
export interface SpotFleetMonitoring {
  /**
   * @public
   * <p>Enables monitoring for the instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Describes a network interface.</p>
 */
export interface InstanceNetworkInterfaceSpecification {
  /**
   * @public
   * <p>Indicates whether to assign a public IPv4 address to an instance you launch in a VPC. The
   *             public IP address can only be assigned to a network interface for eth0, and can only be
   *             assigned to a new network interface, not an existing one. You cannot specify more than one
   *             network interface in the request. If launching into a default subnet, the default value is
   *             <code>true</code>.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * @public
   * <p>If set to <code>true</code>, the interface is deleted when the instance is terminated. You can
   *             specify <code>true</code> only if creating a new network interface when launching an
   *             instance.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * @public
   * <p>The description of the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The position of the network interface in the attachment order.
   *           A primary network interface has a device index of 0.</p>
   *          <p>If you specify a network interface when launching an instance,
   *           you must specify the device index.</p>
   */
  DeviceIndex?: number;

  /**
   * @public
   * <p>The IDs of the security groups for the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  Groups?: string[];

  /**
   * @public
   * <p>A number of IPv6 addresses to assign to the network interface. Amazon EC2 chooses
   *             the IPv6 addresses from the range of the subnet. You cannot specify this option and the
   *             option to assign specific IPv6 addresses in the same request. You can specify this
   *             option if you've specified a minimum number of instances to launch.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * @public
   * <p>The IPv6 addresses to assign to the network interface. You cannot specify
   *             this option and the option to assign a number of IPv6 addresses in the same request. You
   *             cannot specify this option if you've specified a minimum number of instances to
   *             launch.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * @public
   * <p>The ID of the network interface.</p>
   *          <p>If you are creating a Spot Fleet, omit this parameter because you can’t specify a network interface ID in a launch specification.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The private IPv4 address of the network interface. Applies only if creating a network interface when launching an instance. You cannot specify this option if you're launching
   *         	more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  PrivateIpAddress?: string;

  /**
   * @public
   * <p>The private IPv4 addresses to assign to the network interface. Only one private IPv4 address can be designated as primary. You cannot specify this option if you're
   *         	launching more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * @public
   * <p>The number of secondary private IPv4 addresses. You can't specify this option and specify more than one private IP address using the private IP addresses option. You cannot specify this option if you're
   *         	launching more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * @public
   * <p>The ID of the subnet associated with the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>Indicates whether to assign a carrier IP address to the network interface.</p>
   *          <p>You can only assign a carrier IP address to a network interface that is in a subnet in
   *             a Wavelength Zone. For more information about carrier IP addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP address</a> in the <i>Amazon Web Services Wavelength Developer
   *                 Guide</i>.</p>
   */
  AssociateCarrierIpAddress?: boolean;

  /**
   * @public
   * <p>The type of network interface.</p>
   *          <p>Valid values: <code>interface</code> | <code>efa</code>
   *          </p>
   */
  InterfaceType?: string;

  /**
   * @public
   * <p>The index of the network card. Some instance types support multiple network cards.
   *             The primary network interface must be assigned to network card index 0.
   *             The default is network card index 0.</p>
   *          <p>If you are using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a> to create Spot Instances, omit this parameter because
   *             you can’t specify the network card index when using this API. To specify the network
   *             card index, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   */
  NetworkCardIndex?: number;

  /**
   * @public
   * <p>The IPv4 delegated prefixes to be assigned to the network interface. You cannot
   *             use this option if you use the <code>Ipv4PrefixCount</code> option.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[];

  /**
   * @public
   * <p>The number of IPv4 delegated prefixes to be automatically assigned to the network interface.
   *             You cannot use this option if you use the <code>Ipv4Prefix</code> option.</p>
   */
  Ipv4PrefixCount?: number;

  /**
   * @public
   * <p>The IPv6 delegated prefixes to be assigned to the network interface. You cannot
   *             use this option if you use the <code>Ipv6PrefixCount</code> option.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[];

  /**
   * @public
   * <p>The number of IPv6 delegated prefixes to be automatically assigned to the network interface.
   *             You cannot use this option if you use the <code>Ipv6Prefix</code> option.</p>
   */
  Ipv6PrefixCount?: number;

  /**
   * @public
   * <p>The primary IPv6 address of the network interface. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information about primary IPv6 addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   */
  PrimaryIpv6?: boolean;
}

/**
 * @public
 * <p>Describes Spot Instance placement.</p>
 */
export interface SpotPlacement {
  /**
   * @public
   * <p>The Availability Zone.</p>
   *          <p>[Spot Fleet only] To specify multiple Availability Zones, separate them using commas;
   *             for example, "us-west-2a, us-west-2b".</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a
   *             tenancy of <code>dedicated</code> runs on single-tenant hardware. The <code>host</code>
   *             tenancy is not supported for Spot Instances.</p>
   */
  Tenancy?: Tenancy | string;
}

/**
 * @public
 * <p>The tags for a Spot Fleet resource.</p>
 */
export interface SpotFleetTagSpecification {
  /**
   * @public
   * <p>The type of resource. Currently, the only resource type that is supported is
   *                 <code>instance</code>. To tag the Spot Fleet request on creation, use the
   *                 <code>TagSpecifications</code> parameter in <code>
   *                <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetRequestConfigData.html">SpotFleetRequestConfigData</a>
   *             </code>.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * @public
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Describes the launch specification for one or more Spot Instances. If you include
 *           On-Demand capacity in your fleet request or want to specify an EFA network device, you
 *           can't use <code>SpotFleetLaunchSpecification</code>; you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.</p>
 */
export interface SpotFleetLaunchSpecification {
  /**
   * @public
   * <p>The security groups.</p>
   */
  SecurityGroups?: GroupIdentifier[];

  /**
   * @public
   * <p>Deprecated.</p>
   */
  AddressingType?: string;

  /**
   * @public
   * <p>One or more block devices that are mapped to the Spot Instances. You can't specify both
   *             a snapshot ID and an encryption value. This is because only blank volumes can be
   *             encrypted on creation. If a snapshot is the basis for a volume, it is not blank and its
   *             encryption status is used for the volume encryption status.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @public
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
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
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

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
  Monitoring?: SpotFleetMonitoring;

  /**
   * @public
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *           subnet IDs and security group IDs using the network interface.</p>
   *          <note>
   *             <p>
   *                <code>SpotFleetLaunchSpecification</code> currently does not support Elastic Fabric Adapter (EFA). To specify an EFA, you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.</p>
   *          </note>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * @public
   * <p>The placement information.</p>
   */
  Placement?: SpotPlacement;

  /**
   * @public
   * <p>The ID of the RAM disk. Some kernels require additional drivers at launch. Check the kernel
   *           requirements for information about whether you need to specify a RAM disk. To find kernel
   *           requirements, refer to the Amazon Web Services Resource Center and search for the kernel ID.</p>
   */
  RamdiskId?: string;

  /**
   * @public
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to
   *           increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  SpotPrice?: string;

  /**
   * @public
   * <p>The IDs of the subnets in which to launch the instances. To specify multiple subnets, separate
   *           them using commas; for example, "subnet-1234abcdeexample1, subnet-0987cdef6example2".</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The base64-encoded user data that instances use when starting up. User data is limited to 16 KB.</p>
   */
  UserData?: string;

  /**
   * @public
   * <p>The number of units provided by the specified instance type. These are the same units that you chose to set the target capacity in terms of instances, or a performance characteristic such as vCPUs, memory, or I/O.</p>
   *          <p>If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the number of instances to the next whole number. If this value is not specified, the default is 1.</p>
   */
  WeightedCapacity?: number;

  /**
   * @public
   * <p>The tags to apply during creation.</p>
   */
  TagSpecifications?: SpotFleetTagSpecification[];

  /**
   * @public
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *          </note>
   */
  InstanceRequirements?: InstanceRequirements;
}

/**
 * @public
 * <p>Describes overrides for a launch template.</p>
 */
export interface LaunchTemplateOverrides {
  /**
   * @public
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * @public
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to
   *          increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  SpotPrice?: string;

  /**
   * @public
   * <p>The ID of the subnet in which to launch the instances.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The Availability Zone in which to launch the instances.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The number of units provided by the specified instance type.</p>
   */
  WeightedCapacity?: number;

  /**
   * @public
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
   */
  Priority?: number;

  /**
   * @public
   * <p>The instance requirements. When you specify instance requirements, Amazon EC2 will identify
   *          instance types with the provided requirements, and then use your On-Demand and Spot
   *          allocation strategies to launch instances from these instance types, in the same way as
   *          when you specify a list of instance types.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *          </note>
   */
  InstanceRequirements?: InstanceRequirements;
}

/**
 * @public
 * <p>Describes a launch template and overrides.</p>
 */
export interface LaunchTemplateConfig {
  /**
   * @public
   * <p>The launch template to use. Make sure that the launch template does not contain the
   *             <code>NetworkInterfaceId</code> parameter because you can't specify a network interface
   *          ID in a Spot Fleet.</p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * @public
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   */
  Overrides?: LaunchTemplateOverrides[];
}

/**
 * @public
 * <p>Describes a Classic Load Balancer.</p>
 */
export interface ClassicLoadBalancer {
  /**
   * @public
   * <p>The name of the load balancer.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Describes the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers
 *             the running Spot Instances with these Classic Load Balancers.</p>
 */
export interface ClassicLoadBalancersConfig {
  /**
   * @public
   * <p>One or more Classic Load Balancers.</p>
   */
  ClassicLoadBalancers?: ClassicLoadBalancer[];
}

/**
 * @public
 * <p>Describes a load balancer target group.</p>
 */
export interface TargetGroup {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the
 *             running Spot Instances with these target groups.</p>
 */
export interface TargetGroupsConfig {
  /**
   * @public
   * <p>One or more target groups.</p>
   */
  TargetGroups?: TargetGroup[];
}

/**
 * @public
 * <p>Describes the Classic Load Balancers and target groups to attach to a Spot Fleet
 *             request.</p>
 */
export interface LoadBalancersConfig {
  /**
   * @public
   * <p>The Classic Load Balancers.</p>
   */
  ClassicLoadBalancersConfig?: ClassicLoadBalancersConfig;

  /**
   * @public
   * <p>The target groups.</p>
   */
  TargetGroupsConfig?: TargetGroupsConfig;
}

/**
 * @public
 * @enum
 */
export const OnDemandAllocationStrategy = {
  LOWEST_PRICE: "lowestPrice",
  PRIORITIZED: "prioritized",
} as const;

/**
 * @public
 */
export type OnDemandAllocationStrategy = (typeof OnDemandAllocationStrategy)[keyof typeof OnDemandAllocationStrategy];

/**
 * @public
 * @enum
 */
export const ReplacementStrategy = {
  LAUNCH: "launch",
  LAUNCH_BEFORE_TERMINATE: "launch-before-terminate",
} as const;

/**
 * @public
 */
export type ReplacementStrategy = (typeof ReplacementStrategy)[keyof typeof ReplacementStrategy];

/**
 * @public
 * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your
 *             Spot Instance is at an elevated risk of being interrupted. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-capacity-rebalance.html">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 */
export interface SpotCapacityRebalance {
  /**
   * @public
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
   */
  ReplacementStrategy?: ReplacementStrategy | string;

  /**
   * @public
   * <p>The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot
   *             Instance after launching a new replacement Spot Instance.</p>
   *          <p>Required when <code>ReplacementStrategy</code> is set to <code>launch-before-terminate</code>.</p>
   *          <p>Not valid when <code>ReplacementStrategy</code> is set to <code>launch</code>.</p>
   *          <p>Valid values: Minimum value of <code>120</code> seconds. Maximum value of <code>7200</code> seconds.</p>
   */
  TerminationDelay?: number;
}

/**
 * @public
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
 *             interrupted.</p>
 */
export interface SpotMaintenanceStrategies {
  /**
   * @public
   * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your
   *             Spot Instance is at an elevated risk of being interrupted. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-capacity-rebalance.html">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  CapacityRebalance?: SpotCapacityRebalance;
}

/**
 * @public
 * <p>Describes the configuration of a Spot Fleet request.</p>
 */
export interface SpotFleetRequestConfigData {
  /**
   * @public
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
   *             <dt>lowestPrice</dt>
   *             <dd>
   *                <p>Spot Fleet requests instances from the lowest priced Spot Instance pool that
   *           has available capacity. If the lowest priced pool doesn't have available capacity, the Spot Instances
   *           come from the next lowest priced pool that has available capacity. If a pool runs out of
   *           capacity before fulfilling your desired capacity, Spot Fleet will continue to fulfill your
   *           request by drawing from the next lowest priced pool. To ensure that your desired capacity is
   *           met, you might receive Spot Instances from several pools. Because this strategy only considers instance
   *           price and not capacity availability, it might lead to high interruption rates.</p>
   *             </dd>
   *          </dl>
   *          <p>Default: <code>lowestPrice</code>
   *          </p>
   */
  AllocationStrategy?: AllocationStrategy | string;

  /**
   * @public
   * <p>The order of the launch template overrides to use in fulfilling On-Demand capacity. If
   *             you specify <code>lowestPrice</code>, Spot Fleet uses price to determine the order, launching
   *             the lowest price first. If you specify <code>prioritized</code>, Spot Fleet uses the priority
   *             that you assign to each Spot Fleet launch template override, launching the highest priority
   *             first. If you do not specify a value, Spot Fleet defaults to <code>lowestPrice</code>.</p>
   */
  OnDemandAllocationStrategy?: OnDemandAllocationStrategy | string;

  /**
   * @public
   * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
   *             interrupted.</p>
   */
  SpotMaintenanceStrategies?: SpotMaintenanceStrategies;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of your
   *             listings. This helps to avoid duplicate listings. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Indicates whether running instances should be terminated if you decrease the
   *             target capacity of the Spot Fleet request below the current size of the Spot Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | string;

  /**
   * @public
   * <p>The number of units fulfilled by this request compared to the set target capacity. You
   *             cannot set this value.</p>
   */
  FulfilledCapacity?: number;

  /**
   * @public
   * <p>The number of On-Demand units fulfilled by this request compared to the set target
   *             On-Demand capacity.</p>
   */
  OnDemandFulfilledCapacity?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that
   *             grants the Spot Fleet the permission to request, launch, terminate, and tag instances on
   *             your behalf. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html#spot-fleet-prerequisites">Spot
   *                 Fleet prerequisites</a> in the <i>Amazon EC2 User Guide</i>. Spot Fleet
   *             can terminate Spot Instances on your behalf when you cancel its Spot Fleet request using
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotFleetRequests">CancelSpotFleetRequests</a> or when the Spot Fleet request expires, if you set
   *                 <code>TerminateInstancesWithExpiration</code>.</p>
   */
  IamFleetRole: string | undefined;

  /**
   * @public
   * <p>The launch specifications for the Spot Fleet request. If you specify
   *                 <code>LaunchSpecifications</code>, you can't specify
   *                 <code>LaunchTemplateConfigs</code>. If you include On-Demand capacity in your
   *             request, you must use <code>LaunchTemplateConfigs</code>.</p>
   */
  LaunchSpecifications?: SpotFleetLaunchSpecification[];

  /**
   * @public
   * <p>The launch template and overrides. If you specify <code>LaunchTemplateConfigs</code>,
   *             you can't specify <code>LaunchSpecifications</code>. If you include On-Demand capacity
   *             in your request, you must use <code>LaunchTemplateConfigs</code>.</p>
   */
  LaunchTemplateConfigs?: LaunchTemplateConfig[];

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
   * <p>The number of units to request for the Spot Fleet. You can choose to set the target
   *             capacity in terms of instances or a performance characteristic that is important to your
   *             application workload, such as vCPUs, memory, or I/O. If the request type is
   *                 <code>maintain</code>, you can specify a target capacity of 0 and add capacity
   *             later.</p>
   */
  TargetCapacity: number | undefined;

  /**
   * @public
   * <p>The number of On-Demand units to request. You can choose to set the target capacity in
   *             terms of instances or a performance characteristic that is important to your application
   *             workload, such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>,
   *             you can specify a target capacity of 0 and add capacity later.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * @public
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay. You
   *             can use the <code>onDemandMaxTotalPrice</code> parameter, the
   *                 <code>spotMaxTotalPrice</code> parameter, or both parameters to ensure that your
   *             fleet cost does not exceed your budget. If you set a maximum price per hour for the
   *             On-Demand Instances and Spot Instances in your request, Spot Fleet will launch instances until it reaches the
   *             maximum amount you're willing to pay. When the maximum amount you're willing to pay is
   *             reached, the fleet stops launching instances even if it hasn’t met the target
   *             capacity.</p>
   */
  OnDemandMaxTotalPrice?: string;

  /**
   * @public
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay. You can use
   *             the <code>spotdMaxTotalPrice</code> parameter, the <code>onDemandMaxTotalPrice</code>
   *             parameter, or both parameters to ensure that your fleet cost does not exceed your
   *             budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request,
   *             Spot Fleet will launch instances until it reaches the maximum amount you're willing to pay.
   *             When the maximum amount you're willing to pay is reached, the fleet stops launching
   *             instances even if it hasn’t met the target capacity.</p>
   */
  SpotMaxTotalPrice?: string;

  /**
   * @public
   * <p>Indicates whether running Spot Instances are terminated when the Spot Fleet request
   *             expires.</p>
   */
  TerminateInstancesWithExpiration?: boolean;

  /**
   * @public
   * <p>The type of request. Indicates whether the Spot Fleet only requests the target
   *             capacity or also attempts to maintain it. When this value is <code>request</code>, the
   *             Spot Fleet only places the required requests. It does not attempt to replenish Spot
   *             Instances if capacity is diminished, nor does it submit requests in alternative Spot
   *             pools if capacity is not available. When this value is <code>maintain</code>, the Spot
   *             Fleet maintains the target capacity. The Spot Fleet places the required requests to meet
   *             capacity and automatically replenishes any interrupted instances. Default:
   *                 <code>maintain</code>. <code>instant</code> is listed but is not used by Spot
   *             Fleet.</p>
   */
  Type?: FleetType | string;

  /**
   * @public
   * <p>The start date and time of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             By default, Amazon EC2 starts fulfilling the request immediately.</p>
   */
  ValidFrom?: Date;

  /**
   * @public
   * <p>The end date and time of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             After the end date and time, no new Spot Instance requests are placed or able to fulfill
   *             the request. If no value is specified, the Spot Fleet request remains until you cancel
   *             it.</p>
   */
  ValidUntil?: Date;

  /**
   * @public
   * <p>Indicates whether Spot Fleet should replace unhealthy instances.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * @public
   * <p>The behavior when a Spot Instance is interrupted. The default is
   *                 <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;

  /**
   * @public
   * <p>One or more Classic Load Balancers and target groups to attach to the Spot Fleet
   *             request. Spot Fleet registers the running Spot Instances with the specified Classic Load
   *             Balancers and target groups.</p>
   *          <p>With Network Load Balancers, Spot Fleet cannot register instances that have the
   *             following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2,
   *             M3, and T1.</p>
   */
  LoadBalancersConfig?: LoadBalancersConfig;

  /**
   * @public
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
   */
  InstancePoolsToUseCount?: number;

  /**
   * @public
   * <p>Reserved.</p>
   */
  Context?: string;

  /**
   * @public
   * <p>The unit for the target capacity. <code>TargetCapacityUnitType</code> can only be specified when <code>InstanceRequirements</code> is specified.</p>
   *          <p>Default: <code>units</code> (translates to number of instances)</p>
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | string;

  /**
   * @public
   * <p>The key-value pair for tagging the Spot Fleet request on creation. The value for
   *                 <code>ResourceType</code> must be <code>spot-fleet-request</code>, otherwise the
   *             Spot Fleet request fails. To tag instances at launch, specify the tags in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template">launch
   *                 template</a> (valid only if you use <code>LaunchTemplateConfigs</code>) or in
   *             the <code>
   *                <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetTagSpecification.html">SpotFleetTagSpecification</a>
   *             </code> (valid only if you use
   *                 <code>LaunchSpecifications</code>). For information about tagging after launch, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources">Tagging Your Resources</a>.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 * <p>Describes a Spot Fleet request.</p>
 */
export interface SpotFleetRequestConfig {
  /**
   * @public
   * <p>The progress of the Spot Fleet request.
   *           If there is an error, the status is <code>error</code>.
   *           After all requests are placed, the status is <code>pending_fulfillment</code>.
   *           If the size of the fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>.
   *           If the size of the fleet is decreased, the status is <code>pending_termination</code>
   *           while Spot Instances are terminating.</p>
   */
  ActivityStatus?: ActivityStatus | string;

  /**
   * @public
   * <p>The creation date and time of the request.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The configuration of the Spot Fleet request.</p>
   */
  SpotFleetRequestConfig?: SpotFleetRequestConfigData;

  /**
   * @public
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;

  /**
   * @public
   * <p>The state of the Spot Fleet request.</p>
   */
  SpotFleetRequestState?: BatchState | string;

  /**
   * @public
   * <p>The tags for a Spot Fleet resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Contains the output of DescribeSpotFleetRequests.</p>
 */
export interface DescribeSpotFleetRequestsResponse {
  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the configuration of your Spot Fleet.</p>
   */
  SpotFleetRequestConfigs?: SpotFleetRequestConfig[];
}

/**
 * @public
 * <p>Contains the parameters for DescribeSpotInstanceRequests.</p>
 */
export interface DescribeSpotInstanceRequestsRequest {
  /**
   * @public
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
   *                         <code>gp2</code> for General Purpose SSD, <code>io1</code> or
   *                         <code>io2</code> for Provisioned IOPS SSD, <code>st1</code> for Throughput
   *                     Optimized HDD, <code>sc1</code>for Cold HDD, or <code>standard</code> for
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
   *                         request status</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
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
   */
  Filters?: Filter[];

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
   * <p>The IDs of the Spot Instance requests.</p>
   */
  SpotInstanceRequestIds?: string[];

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Describes the monitoring of an instance.</p>
 */
export interface RunInstancesMonitoringEnabled {
  /**
   * @public
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 * <p>Describes the launch specification for an instance.</p>
 */
export interface LaunchSpecification {
  /**
   * @public
   * <p>The base64-encoded user data that instances use when starting up. User data is limited to 16 KB.</p>
   */
  UserData?: string;

  /**
   * @public
   * <p>The IDs of the security groups.</p>
   */
  SecurityGroups?: GroupIdentifier[];

  /**
   * @public
   * <p>Deprecated.</p>
   */
  AddressingType?: string;

  /**
   * @public
   * <p>The block device mapping entries.</p>
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
  InstanceType?: _InstanceType | string;

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
   * <p>Describes the monitoring of an instance.</p>
   */
  Monitoring?: RunInstancesMonitoringEnabled;
}

/**
 * @public
 * @enum
 */
export const SpotInstanceState = {
  active: "active",
  cancelled: "cancelled",
  closed: "closed",
  disabled: "disabled",
  failed: "failed",
  open: "open",
} as const;

/**
 * @public
 */
export type SpotInstanceState = (typeof SpotInstanceState)[keyof typeof SpotInstanceState];

/**
 * @public
 * <p>Describes the status of a Spot Instance request.</p>
 */
export interface SpotInstanceStatus {
  /**
   * @public
   * <p>The status code. For a list of status codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html#spot-instance-request-status-understand">Spot request status codes</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  Code?: string;

  /**
   * @public
   * <p>The description for the status code.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The date and time of the most recent status update, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  UpdateTime?: Date;
}

/**
 * @public
 * <p>Describes a Spot Instance request.</p>
 */
export interface SpotInstanceRequest {
  /**
   * @public
   * <p>Deprecated.</p>
   */
  ActualBlockHourlyPrice?: string;

  /**
   * @public
   * <p>The Availability Zone group. If you specify the same Availability Zone group for all Spot Instance requests, all Spot Instances are launched in the same Availability Zone.</p>
   */
  AvailabilityZoneGroup?: string;

  /**
   * @public
   * <p>Deprecated.</p>
   */
  BlockDurationMinutes?: number;

  /**
   * @public
   * <p>The date and time when the Spot Instance request was created, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The fault codes for the Spot Instance request, if any.</p>
   */
  Fault?: SpotInstanceStateFault;

  /**
   * @public
   * <p>The instance ID, if an instance has been launched to fulfill the Spot Instance request.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and terminate together.</p>
   */
  LaunchGroup?: string;

  /**
   * @public
   * <p>Additional information for launching instances.</p>
   */
  LaunchSpecification?: LaunchSpecification;

  /**
   * @public
   * <p>The Availability Zone in which the request is launched.</p>
   */
  LaunchedAvailabilityZone?: string;

  /**
   * @public
   * <p>The product description associated with the Spot Instance.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * @public
   * <p>The ID of the Spot Instance request.</p>
   */
  SpotInstanceRequestId?: string;

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
   * <p>The state of the Spot Instance request. Spot request status information helps track your Spot
   *             Instance requests. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html">Spot request status</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  State?: SpotInstanceState | string;

  /**
   * @public
   * <p>The status code and status message describing the Spot Instance request.</p>
   */
  Status?: SpotInstanceStatus;

  /**
   * @public
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The Spot Instance request type.</p>
   */
  Type?: SpotInstanceType | string;

  /**
   * @public
   * <p>The start date of the request, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             The request becomes active at this date and time.</p>
   */
  ValidFrom?: Date;

  /**
   * @public
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
   */
  ValidUntil?: Date;

  /**
   * @public
   * <p>The behavior when a Spot Instance is interrupted.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

/**
 * @public
 * <p>Contains the output of DescribeSpotInstanceRequests.</p>
 */
export interface DescribeSpotInstanceRequestsResult {
  /**
   * @public
   * <p>The Spot Instance requests.</p>
   */
  SpotInstanceRequests?: SpotInstanceRequest[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains the parameters for DescribeSpotPriceHistory.</p>
 */
export interface DescribeSpotPriceHistoryRequest {
  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone for which prices should
   *                     be returned.</p>
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
   *                     (for example,
   *                     <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *                     You can use wildcards (* and ?). Greater than or less than comparison is not
   *                     supported.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Filters the results by the specified Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *             <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The date and time, up to the current date, from which to stop retrieving the price
   *             history data, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>Filters the results by the specified instance types.</p>
   */
  InstanceTypes?: (_InstanceType | string)[];

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Filters the results by the specified basic product descriptions.</p>
   */
  ProductDescriptions?: string[];

  /**
   * @public
   * <p>The date and time, up to the past 90 days, from which to start retrieving the price
   *             history data, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime?: Date;
}

/**
 * @public
 * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
 *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
 *          <important>
 *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
 *          </important>
 */
export interface SpotPrice {
  /**
   * @public
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * @public
   * <p>A general description of the AMI.</p>
   */
  ProductDescription?: RIProductDescription | string;

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
   * <p>The date and time the request was created, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;
}

/**
 * @public
 * <p>Contains the output of DescribeSpotPriceHistory.</p>
 */
export interface DescribeSpotPriceHistoryResult {
  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The historical Spot prices.</p>
   */
  SpotPriceHistory?: SpotPrice[];
}

/**
 * @public
 */
export interface DescribeStaleSecurityGroupsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *           make another request with the token returned in the output. For more information,
   *           see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request.
   *           Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

/**
 * @public
 * <p>Describes a stale rule in a security group.</p>
 */
export interface StaleIpPermission {
  /**
   * @public
   * <p>The start of the port range for the TCP and UDP protocols, or an ICMP type number. A value of
   *         -1 indicates all ICMP types. </p>
   */
  FromPort?: number;

  /**
   * @public
   * <p>The IP protocol name (for <code>tcp</code>, <code>udp</code>, and <code>icmp</code>) or number  (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers)</a>.</p>
   */
  IpProtocol?: string;

  /**
   * @public
   * <p>The IP ranges. Not applicable for stale security group rules.</p>
   */
  IpRanges?: string[];

  /**
   * @public
   * <p>The prefix list IDs. Not applicable for stale security group rules.</p>
   */
  PrefixListIds?: string[];

  /**
   * @public
   * <p>The end of the port range for the TCP and UDP protocols, or an ICMP type number. A value of
   *         <code>-1</code> indicates all ICMP types. </p>
   */
  ToPort?: number;

  /**
   * @public
   * <p>The security group pairs. Returns the ID of the referenced security group and VPC, and the ID and status of the VPC peering connection.</p>
   */
  UserIdGroupPairs?: UserIdGroupPair[];
}

/**
 * @public
 * <p>Describes a stale security group (a security group that contains stale rules).</p>
 */
export interface StaleSecurityGroup {
  /**
   * @public
   * <p>The description of the security group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>Information about the stale inbound rules in the security group.</p>
   */
  StaleIpPermissions?: StaleIpPermission[];

  /**
   * @public
   * <p>Information about the stale outbound rules in the security group.</p>
   */
  StaleIpPermissionsEgress?: StaleIpPermission[];

  /**
   * @public
   * <p>The ID of the VPC for the security group.</p>
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface DescribeStaleSecurityGroupsResult {
  /**
   * @public
   * <p>The token to include in another request to get the next page of items.
   *           If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the stale security groups.</p>
   */
  StaleSecurityGroupSet?: StaleSecurityGroup[];
}

/**
 * @public
 */
export interface DescribeStoreImageTasksRequest {
  /**
   * @public
   * <p>The AMI IDs for which to show progress. Up to 20 AMI IDs can be included in a request.</p>
   */
  ImageIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>task-state</code> - Returns tasks in a certain state (<code>InProgress</code> |
   *             <code>Completed</code> | <code>Failed</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bucket</code> - Returns task information for tasks that targeted a specific
   *           bucket. For the filter value, specify the bucket name.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>You cannot specify this parameter and the <code>ImageIDs</code> parameter
   *       in the same call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The information about the AMI store task, including the progress of the task.</p>
 */
export interface StoreImageTaskResult {
  /**
   * @public
   * <p>The ID of the AMI that is being stored.</p>
   */
  AmiId?: string;

  /**
   * @public
   * <p>The time the task started.</p>
   */
  TaskStartTime?: Date;

  /**
   * @public
   * <p>The name of the Amazon S3 bucket that contains the stored AMI object.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>The name of the stored AMI object in the bucket.</p>
   */
  S3objectKey?: string;

  /**
   * @public
   * <p>The progress of the task as a percentage.</p>
   */
  ProgressPercentage?: number;

  /**
   * @public
   * <p>The state of the store task (<code>InProgress</code>, <code>Completed</code>, or
   *         <code>Failed</code>).</p>
   */
  StoreTaskState?: string;

  /**
   * @public
   * <p>If the tasks fails, the reason for the failure is returned. If the task succeeds,
   *         <code>null</code> is returned.</p>
   */
  StoreTaskFailureReason?: string;
}

/**
 * @public
 */
export interface DescribeStoreImageTasksResult {
  /**
   * @public
   * <p>The information about the AMI store tasks.</p>
   */
  StoreImageTaskResults?: StoreImageTaskResult[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeSubnetsRequest {
  /**
   * @public
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
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The IDs of the subnets.</p>
   *          <p>Default: Describes all your subnets.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeSubnetsResult {
  /**
   * @public
   * <p>Information about one or more subnets.</p>
   */
  Subnets?: Subnet[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTagsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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
   *                   <code>resource-type</code> - The resource type (<code>customer-gateway</code> | <code>dedicated-host</code> | <code>dhcp-options</code> | <code>elastic-ip</code> | <code>fleet</code> | <code>fpga-image</code> | <code>host-reservation</code> | <code>image</code> | <code>instance</code> | <code>internet-gateway</code> | <code>key-pair</code> | <code>launch-template</code> | <code>natgateway</code> | <code>network-acl</code> | <code>network-interface</code> | <code>placement-group</code> | <code>reserved-instances</code> | <code>route-table</code> | <code>security-group</code> | <code>snapshot</code> | <code>spot-instances-request</code> | <code>subnet</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-endpoint</code> | <code>vpc-endpoint-service</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>).</p>
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of items to return for this request. This value can be between 5 and 1000.
   *          To get the next page of items, make another request with the token returned in the output.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request.
   *          Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes a tag.</p>
 */
export interface TagDescription {
  /**
   * @public
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The resource type.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * @public
   * <p>The tag value.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface DescribeTagsResult {
  /**
   * @public
   * <p>The token to include in another request to get the next page of items.
   *          This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The tags.</p>
   */
  Tags?: TagDescription[];
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFiltersRequest {
  /**
   * @public
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFiltersResult {
  /**
   * @public
   * <p>Information about one or more Traffic Mirror filters.</p>
   */
  TrafficMirrorFilters?: TrafficMirrorFilter[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorSessionsRequest {
  /**
   * @public
   * <p>The ID of the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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
}

/**
 * @public
 */
export interface DescribeTrafficMirrorSessionsResult {
  /**
   * @public
   * <p>Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.</p>
   */
  TrafficMirrorSessions?: TrafficMirrorSession[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorTargetsRequest {
  /**
   * @public
   * <p>The ID of the Traffic Mirror targets.</p>
   */
  TrafficMirrorTargetIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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
}

/**
 * @public
 */
export interface DescribeTrafficMirrorTargetsResult {
  /**
   * @public
   * <p>Information about one or more Traffic Mirror targets.</p>
   */
  TrafficMirrorTargets?: TrafficMirrorTarget[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayAttachmentsRequest {
  /**
   * @public
   * <p>The IDs of the attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * @public
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
 * <p>Describes an association.</p>
 */
export interface TransitGatewayAttachmentAssociation {
  /**
   * @public
   * <p>The ID of the route table for the transit gateway.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * @public
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayAssociationState | string;
}

/**
 * @public
 * <p>Describes an attachment between a resource and a transit gateway.</p>
 */
export interface TransitGatewayAttachment {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   */
  TransitGatewayOwnerId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * @public
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The attachment state. Note that the <code>initiating</code> state has been deprecated.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * @public
   * <p>The association.</p>
   */
  Association?: TransitGatewayAttachmentAssociation;

  /**
   * @public
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The tags for the attachment.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeTransitGatewayAttachmentsResult {
  /**
   * @public
   * <p>Information about the attachments.</p>
   */
  TransitGatewayAttachments?: TransitGatewayAttachment[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayConnectPeersRequest {
  /**
   * @public
   * <p>The IDs of the Connect peers.</p>
   */
  TransitGatewayConnectPeerIds?: string[];

  /**
   * @public
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
export interface DescribeTransitGatewayConnectPeersResult {
  /**
   * @public
   * <p>Information about the Connect peers.</p>
   */
  TransitGatewayConnectPeers?: TransitGatewayConnectPeer[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayConnectsRequest {
  /**
   * @public
   * <p>The IDs of the attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * @public
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
export interface DescribeTransitGatewayConnectsResult {
  /**
   * @public
   * <p>Information about the Connect attachments.</p>
   */
  TransitGatewayConnects?: TransitGatewayConnect[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayMulticastDomainsRequest {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainIds?: string[];

  /**
   * @public
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
export interface DescribeTransitGatewayMulticastDomainsResult {
  /**
   * @public
   * <p>Information about the transit gateway multicast domains.</p>
   */
  TransitGatewayMulticastDomains?: TransitGatewayMulticastDomain[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayPeeringAttachmentsRequest {
  /**
   * @public
   * <p>One or more IDs of the transit gateway peering attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * @public
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
export interface DescribeTransitGatewayPeeringAttachmentsResult {
  /**
   * @public
   * <p>The transit gateway peering attachments.</p>
   */
  TransitGatewayPeeringAttachments?: TransitGatewayPeeringAttachment[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayPolicyTablesRequest {
  /**
   * @public
   * <p>The IDs of the transit gateway policy tables.</p>
   */
  TransitGatewayPolicyTableIds?: string[];

  /**
   * @public
   * <p>The filters associated with the transit gateway policy table.</p>
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
export interface DescribeTransitGatewayPolicyTablesResult {
  /**
   * @public
   * <p>Describes the transit gateway policy tables.</p>
   */
  TransitGatewayPolicyTables?: TransitGatewayPolicyTable[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayRouteTableAnnouncementsRequest {
  /**
   * @public
   * <p>The IDs of the transit gateway route tables that are being advertised.</p>
   */
  TransitGatewayRouteTableAnnouncementIds?: string[];

  /**
   * @public
   * <p>The filters associated with the transit gateway policy table.</p>
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
export interface DescribeTransitGatewayRouteTableAnnouncementsResult {
  /**
   * @public
   * <p>Describes the transit gateway route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncements?: TransitGatewayRouteTableAnnouncement[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayRouteTablesRequest {
  /**
   * @public
   * <p>The IDs of the transit gateway route tables.</p>
   */
  TransitGatewayRouteTableIds?: string[];

  /**
   * @public
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
export interface DescribeTransitGatewayRouteTablesResult {
  /**
   * @public
   * <p>Information about the transit gateway route tables.</p>
   */
  TransitGatewayRouteTables?: TransitGatewayRouteTable[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewaysRequest {
  /**
   * @public
   * <p>The IDs of the transit gateways.</p>
   */
  TransitGatewayIds?: string[];

  /**
   * @public
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
export interface DescribeTransitGatewaysResult {
  /**
   * @public
   * <p>Information about the transit gateways.</p>
   */
  TransitGateways?: TransitGateway[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayVpcAttachmentsRequest {
  /**
   * @public
   * <p>The IDs of the attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * @public
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
export interface DescribeTransitGatewayVpcAttachmentsResult {
  /**
   * @public
   * <p>Information about the VPC attachments.</p>
   */
  TransitGatewayVpcAttachments?: TransitGatewayVpcAttachment[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTrunkInterfaceAssociationsRequest {
  /**
   * @public
   * <p>The IDs of the associations.</p>
   */
  AssociationIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   *             To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeTrunkInterfaceAssociationsResult {
  /**
   * @public
   * <p>Information about the trunk associations.</p>
   */
  InterfaceAssociations?: TrunkInterfaceAssociation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessEndpointsRequest {
  /**
   * @public
   * <p>The ID of the Verified Access endpoint.</p>
   */
  VerifiedAccessEndpointIds?: string[];

  /**
   * @public
   * <p>The ID of the Verified Access instance.</p>
   */
  VerifiedAccessInstanceId?: string;

  /**
   * @public
   * <p>The ID of the Verified Access group.</p>
   */
  VerifiedAccessGroupId?: string;

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
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   */
  Filters?: Filter[];

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
export interface DescribeVerifiedAccessEndpointsResult {
  /**
   * @public
   * <p>The ID of the Verified Access endpoint.</p>
   */
  VerifiedAccessEndpoints?: VerifiedAccessEndpoint[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessGroupsRequest {
  /**
   * @public
   * <p>The ID of the Verified Access groups.</p>
   */
  VerifiedAccessGroupIds?: string[];

  /**
   * @public
   * <p>The ID of the Verified Access instance.</p>
   */
  VerifiedAccessInstanceId?: string;

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
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   */
  Filters?: Filter[];

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
export interface DescribeVerifiedAccessGroupsResult {
  /**
   * @public
   * <p>The ID of the Verified Access group.</p>
   */
  VerifiedAccessGroups?: VerifiedAccessGroup[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @internal
 */
export const DescribeLaunchTemplateVersionsResultFilterSensitiveLog = (
  obj: DescribeLaunchTemplateVersionsResult
): any => ({
  ...obj,
  ...(obj.LaunchTemplateVersions && {
    LaunchTemplateVersions: obj.LaunchTemplateVersions.map((item) => LaunchTemplateVersionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const SpotFleetLaunchSpecificationFilterSensitiveLog = (obj: SpotFleetLaunchSpecification): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SpotFleetRequestConfigDataFilterSensitiveLog = (obj: SpotFleetRequestConfigData): any => ({
  ...obj,
  ...(obj.LaunchSpecifications && {
    LaunchSpecifications: obj.LaunchSpecifications.map((item) => SpotFleetLaunchSpecificationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const SpotFleetRequestConfigFilterSensitiveLog = (obj: SpotFleetRequestConfig): any => ({
  ...obj,
  ...(obj.SpotFleetRequestConfig && {
    SpotFleetRequestConfig: SpotFleetRequestConfigDataFilterSensitiveLog(obj.SpotFleetRequestConfig),
  }),
});

/**
 * @internal
 */
export const DescribeSpotFleetRequestsResponseFilterSensitiveLog = (obj: DescribeSpotFleetRequestsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchSpecificationFilterSensitiveLog = (obj: LaunchSpecification): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SpotInstanceRequestFilterSensitiveLog = (obj: SpotInstanceRequest): any => ({
  ...obj,
  ...(obj.LaunchSpecification && {
    LaunchSpecification: LaunchSpecificationFilterSensitiveLog(obj.LaunchSpecification),
  }),
});

/**
 * @internal
 */
export const DescribeSpotInstanceRequestsResultFilterSensitiveLog = (obj: DescribeSpotInstanceRequestsResult): any => ({
  ...obj,
  ...(obj.SpotInstanceRequests && {
    SpotInstanceRequests: obj.SpotInstanceRequests.map((item) => SpotInstanceRequestFilterSensitiveLog(item)),
  }),
});
