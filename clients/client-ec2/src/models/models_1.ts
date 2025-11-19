// smithy-typescript generated code
import {
  _InstanceType,
  AcceleratorManufacturer,
  AcceleratorName,
  AcceleratorType,
  AddressFamily,
  AmdSevSnpSpecification,
  AttachmentStatus,
  AutoProvisionZonesState,
  AutoScalingIpsState,
  AvailabilityMode,
  BareMetal,
  BurstablePerformance,
  CapacityReservationPreference,
  ConnectivityType,
  ContainerFormat,
  CopyTagsFromSource,
  CpuManufacturer,
  CurrencyCodeValues,
  DatafeedSubscriptionState,
  DefaultTargetCapacityType,
  DestinationFileFormat,
  DiskImageFormat,
  Ec2InstanceConnectEndpointState,
  ExportEnvironment,
  ExportTaskState,
  FleetCapacityReservationUsageStrategy,
  FleetExcessCapacityTerminationPolicy,
  FleetOnDemandAllocationStrategy,
  FleetReplacementStrategy,
  FleetType,
  FlowLogsResourceType,
  HostnameType,
  InstanceBandwidthWeighting,
  InstanceGeneration,
  InstanceInterruptionBehavior,
  InstanceLifecycle,
  InterfacePermissionType,
  IpAddressType,
  IpamExternalResourceVerificationTokenState,
  IpamMeteredAccount,
  IpamPolicyState,
  IpamPoolAwsService,
  IpamPoolPublicIpSource,
  IpamPoolSourceResourceType,
  IpamPoolState,
  IpamPrefixListResolverRuleConditionOperation,
  IpamPrefixListResolverRuleType,
  IpamPrefixListResolverState,
  IpamPrefixListResolverTargetState,
  IpamPrefixListResolverVersionCreationStatus,
  IpamResourceDiscoveryState,
  IpamResourceType,
  IpamScopeExternalAuthorityType,
  IpamScopeState,
  IpamScopeType,
  IpamState,
  IpamTier,
  KeyFormat,
  KeyType,
  LaunchTemplateAutoRecoveryState,
  LaunchTemplateHttpTokensState,
  LaunchTemplateInstanceMetadataEndpointState,
  LaunchTemplateInstanceMetadataOptionsState,
  LaunchTemplateInstanceMetadataProtocolIpv6,
  LaunchTemplateInstanceMetadataTagsState,
  LocalGatewayRouteState,
  LocalGatewayRouteTableMode,
  LocalGatewayRouteType,
  LocalGatewayVirtualInterfaceConfigurationState,
  LocalGatewayVirtualInterfaceGroupConfigurationState,
  LocalStorage,
  LocalStorageType,
  LogDestinationType,
  MacSystemIntegrityProtectionSettingStatus,
  MarketType,
  NatGatewayState,
  NetworkInterfaceCreationType,
  NetworkInterfacePermissionStateCode,
  NetworkInterfaceStatus,
  NetworkInterfaceType,
  PlacementGroupState,
  PlacementStrategy,
  PlatformValues,
  PrefixListState,
  Protocol,
  ReplaceRootVolumeTaskState,
  ResourceType,
  RouteOrigin,
  RouteServerBfdState,
  RouteServerBgpState,
  RouteServerEndpointState,
  RouteServerPeerLivenessMode,
  RouteServerPeerState,
  RouteServerPersistRoutesAction,
  RouteServerPersistRoutesState,
  RouteServerState,
  RouteState,
  RuleAction,
  ShutdownBehavior,
  SnapshotLocationEnum,
  SnapshotState,
  SpotAllocationStrategy,
  SpotInstanceInterruptionBehavior,
  SpotInstanceType,
  SpreadLevel,
  SSEType,
  StorageTier,
  TargetCapacityUnitType,
  Tenancy,
  TokenState,
  TrafficType,
  TransferType,
  VolumeType,
  WeekDay,
} from "./enums";

import {
  AcceleratorCount,
  AcceleratorCountRequest,
  AcceleratorTotalMemoryMiB,
  AcceleratorTotalMemoryMiBRequest,
  AccessScopePath,
  AccessScopePathRequest,
  AddIpamOperatingRegion,
  AddPrefixListEntry,
  AttributeValue,
  InstanceEventWindow,
  Ipv4PrefixSpecification,
  MacModificationTask,
  NatGatewayAddress,
  OperatorResponse,
  PortRange,
  ReservedInstancesListing,
  RouteTableAssociationState,
  Tag,
  TagSpecification,
  UnsuccessfulItem,
} from "./models_0";

/**
 * <p>Describes a DHCP configuration option.</p>
 * @public
 */
export interface DhcpConfiguration {
  /**
   * <p>The name of a DHCP option.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The values for the DHCP option.</p>
   * @public
   */
  Values?: AttributeValue[] | undefined;
}

/**
 * <p>The set of DHCP options.</p>
 * @public
 */
export interface DhcpOptions {
  /**
   * <p>The ID of the Amazon Web Services account that owns the DHCP options set.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Any tags assigned to the DHCP options set.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the set of DHCP options.</p>
   * @public
   */
  DhcpOptionsId?: string | undefined;

  /**
   * <p>The DHCP options in the set.</p>
   * @public
   */
  DhcpConfigurations?: DhcpConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateDhcpOptionsResult {
  /**
   * <p>A set of DHCP options.</p>
   * @public
   */
  DhcpOptions?: DhcpOptions | undefined;
}

/**
 * @public
 */
export interface CreateEgressOnlyInternetGatewayRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
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
   * <p>The ID of the VPC for which to create the egress-only internet gateway.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the egress-only internet gateway.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * <p>Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.</p>
 * @public
 */
export interface InternetGatewayAttachment {
  /**
   * <p>The current state of the attachment. For an internet gateway, the state is
   * 				<code>available</code> when attached to a VPC; otherwise, this value is not
   * 			returned.</p>
   * @public
   */
  State?: AttachmentStatus | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>Describes an egress-only internet gateway.</p>
 * @public
 */
export interface EgressOnlyInternetGateway {
  /**
   * <p>Information about the attachment of the egress-only internet gateway.</p>
   * @public
   */
  Attachments?: InternetGatewayAttachment[] | undefined;

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   * @public
   */
  EgressOnlyInternetGatewayId?: string | undefined;

  /**
   * <p>The tags assigned to the egress-only internet gateway.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEgressOnlyInternetGatewayResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Information about the egress-only internet gateway.</p>
   * @public
   */
  EgressOnlyInternetGateway?: EgressOnlyInternetGateway | undefined;
}

/**
 * <p>The Amazon EC2 launch template that can be used by
 *          an EC2 Fleet to configure Amazon EC2 instances. You must specify either the ID or name of the launch template in the request, but not both.</p>
 *          <p>For information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launch
 *             an instance from a launch template</a> in the
 *          <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface FleetLaunchTemplateSpecificationRequest {
  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateId</code> or the <code>LaunchTemplateName</code>, but not both.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateName</code> or the <code>LaunchTemplateId</code>, but not both.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The launch template version number, <code>$Latest</code>, or <code>$Default</code>. You must specify a value, otherwise the request fails.</p>
   *          <p>If the value is <code>$Latest</code>, Amazon EC2 uses the latest version of the launch template.</p>
   *          <p>If the value is <code>$Default</code>, Amazon EC2 uses the default version of the launch template.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>Describes a block device for an EBS volume.</p>
 * @public
 */
export interface FleetEbsBlockDeviceRequest {
  /**
   * <p>Indicates whether the encryption state of an EBS volume is changed while being restored
   *          from a backing snapshot. The effect of setting the encryption state to <code>true</code>
   *          depends on the volume origin (new or from a snapshot), starting encryption state,
   *          ownership, and whether encryption by default is enabled. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html">Amazon EBS
   *             encryption</a> in the <i>Amazon EBS User Guide</i>.</p>
   *          <p>In no case can you remove encryption from an encrypted volume.</p>
   *          <p>Encrypted volumes can only be attached to instances that support Amazon EBS encryption. For
   *          more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption-requirements.html#ebs-encryption_supported_instances">Supported instance types</a>.</p>
   *          <p>This parameter is not returned by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImageAttribute">DescribeImageAttribute</a>.</p>
   *          <p>For <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage">CreateImage</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterImage">RegisterImage</a>, whether you
   *          can include this parameter, and the allowed values differ depending on the type of block
   *          device mapping you are creating.</p>
   *          <ul>
   *             <li>
   *                <p>If you are creating a block device mapping for a <b>new (empty)
   *                   volume</b>, you can include this parameter, and specify either
   *                   <code>true</code> for an encrypted volume, or <code>false</code> for an
   *                unencrypted volume. If you omit this parameter, it defaults to <code>false</code>
   *                (unencrypted).</p>
   *             </li>
   *             <li>
   *                <p>If you are creating a block device mapping from an <b>existing encrypted or
   *                   unencrypted snapshot</b>, you must omit this parameter. If you include this
   *                parameter, the request will fail, regardless of the value that you specify.</p>
   *             </li>
   *             <li>
   *                <p>If you are creating a block device mapping from an <b>existing unencrypted
   *                   volume</b>, you can include this parameter, but you must specify
   *                   <code>false</code>. If you specify <code>true</code>, the request will fail. In
   *                this case, we recommend that you omit the parameter.</p>
   *             </li>
   *             <li>
   *                <p>If you are creating a block device mapping from an <b>existing encrypted
   *                   volume</b>, you can include this parameter, and specify either
   *                   <code>true</code> or <code>false</code>. However, if you specify
   *                   <code>false</code>, the parameter is ignored and the block device mapping is
   *                always encrypted. In this case, we recommend that you omit the parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination. For more
   *          information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/preserving-volumes-on-termination.html">Preserve data when
   *             an instance is terminated</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes,
   *          this represents the number of IOPS that are provisioned for the volume. For <code>gp2</code>
   *          volumes, this represents the baseline performance of the volume and the rate at which
   *          the volume accumulates I/O credits for bursting.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000 - 80,000 IOPS</p>
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
   * <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">instances
   * built on the Nitro System</a>. On other instances, you can achieve performance up to 32,000 IOPS.</p>
   *          <p>This parameter is required for <code>io1</code> and <code>io2</code> volumes. The default for <code>gp3</code> volumes
   *          is 3,000 IOPS.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   *          <p>This parameter is valid only for <code>gp3</code> volumes.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 2,000.</p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * <p>Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key
   *          to use for EBS encryption.</p>
   *          <p>This parameter is only supported on <code>BlockDeviceMapping</code> objects called by
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html">CreateFleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume
   *          size. If you specify a snapshot, the default is the snapshot size. You can specify a
   *          volume size that is equal to or larger than the snapshot size.</p>
   *          <p>The following are the supported sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code>: 1 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 1 - 65,536 GiB</p>
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
  VolumeSize?: number | undefined;

  /**
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html">Amazon EBS volume types</a> in the
   *          <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  VolumeType?: VolumeType | undefined;
}

/**
 * <p>Describes a block device mapping, which defines the EBS volumes and instance store
 *          volumes to attach to an instance at launch.</p>
 *          <p>To override a block device mapping specified in the launch template:</p>
 *          <ul>
 *             <li>
 *                <p>Specify the exact same <code>DeviceName</code> here as specified in the launch
 *                template.</p>
 *             </li>
 *             <li>
 *                <p>Only specify the parameters you want to change.</p>
 *             </li>
 *             <li>
 *                <p>Any parameters you don't specify here will keep their original launch template
 *                values.</p>
 *             </li>
 *          </ul>
 *          <p>To add a new block device mapping:</p>
 *          <ul>
 *             <li>
 *                <p>Specify a <code>DeviceName</code> that doesn't exist in the launch
 *                template.</p>
 *             </li>
 *             <li>
 *                <p>Specify all desired parameters here.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface FleetBlockDeviceMappingRequest {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The virtual device name (<code>ephemeralN</code>). Instance store volumes are numbered
   *          starting from 0. An instance type with 2 available instance store volumes can specify
   *          mappings for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of available
   *          instance store volumes depends on the instance type. After you connect to the instance, you
   *          must mount the volume.</p>
   *          <p>NVMe instance store volumes are automatically enumerated and assigned a device name.
   *          Including them in your block device mapping has no effect.</p>
   *          <p>Constraints: For M3 instances, you must specify instance store volumes in the block
   *          device mapping for the instance. When you launch an M3 instance, we ignore any instance
   *          store volumes specified in the block device mapping for the AMI.</p>
   * @public
   */
  VirtualName?: string | undefined;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *          launched.</p>
   * @public
   */
  Ebs?: FleetEbsBlockDeviceRequest | undefined;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string. When this
   *          property is specified, the device is removed from the block device mapping regardless of
   *          the assigned value.</p>
   * @public
   */
  NoDevice?: string | undefined;
}

/**
 * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
 *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface BaselineEbsBandwidthMbpsRequest {
  /**
   * <p>The minimum baseline bandwidth, in Mbps. To specify no minimum limit, omit
   *          this parameter.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum baseline bandwidth, in Mbps. To specify no maximum limit, omit
   *          this parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>Specify an instance family to use as the baseline reference for CPU performance. All
 *          instance types that match your specified attributes will be compared against the CPU
 *          performance of the referenced instance family, regardless of CPU manufacturer or
 *          architecture.</p>
 *          <note>
 *             <p>Currently, only one instance family can be specified in the list.</p>
 *          </note>
 * @public
 */
export interface PerformanceFactorReferenceRequest {
  /**
   * <p>The instance family to use as a baseline reference.</p>
   *          <note>
   *             <p>Ensure that you specify the correct value for the instance family. The instance
   *             family is everything before the period (<code>.</code>) in the instance type name. For
   *             example, in the instance type <code>c6i.large</code>, the instance family is
   *             <code>c6i</code>, not <code>c6</code>. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/instance-type-names.html">Amazon EC2
   *                instance type naming conventions</a> in <i>Amazon EC2 Instance
   *                   Types</i>.</p>
   *          </note>
   *          <p>The following instance families are <i>not supported</i> for performance
   *          protection:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>c1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>g3</code> | <code>g3s</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hpc7g</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>m1</code> | <code>m2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mac1</code> | <code>mac2</code> | <code>mac2-m1ultra</code> |
   *                <code>mac2-m2</code> | <code>mac2-m2pro</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>p3dn</code> | <code>p4d</code> | <code>p5</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>t1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>u-12tb1</code> | <code>u-18tb1</code> | <code>u-24tb1</code> |
   *                <code>u-3tb1</code> | <code>u-6tb1</code> | <code>u-9tb1</code> |
   *                <code>u7i-12tb</code> | <code>u7in-16tb</code> | <code>u7in-24tb</code> |
   *                <code>u7in-32tb</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you enable performance protection by specifying a supported instance family, the
   *          returned instance types will exclude the above unsupported instance families.</p>
   *          <p>If you specify an unsupported instance family as a value for baseline performance, the
   *          API returns an empty response for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements">GetInstanceTypesFromInstanceRequirements</a> and an exception for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet">RequestSpotFleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyFleet">ModifyFleet</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySpotFleetRequest">ModifySpotFleetRequest</a>.</p>
   * @public
   */
  InstanceFamily?: string | undefined;
}

/**
 * <p>The CPU performance to consider, using an instance family as the baseline reference.</p>
 * @public
 */
export interface CpuPerformanceFactorRequest {
  /**
   * <p>Specify an instance family to use as the baseline reference for CPU performance. All
   *          instance types that match your specified attributes will be compared against the CPU
   *          performance of the referenced instance family, regardless of CPU manufacturer or
   *          architecture differences.</p>
   *          <note>
   *             <p>Currently, only one instance family can be specified in the list.</p>
   *          </note>
   * @public
   */
  References?: PerformanceFactorReferenceRequest[] | undefined;
}

/**
 * <p>The baseline performance to consider, using an instance family as a baseline reference.
 *          The instance family establishes the lowest acceptable level of performance. Amazon EC2 uses this
 *          baseline to guide instance type selection, but there is no guarantee that the selected
 *          instance types will always exceed the baseline for every application.</p>
 *          <p>Currently, this parameter only supports CPU performance as a baseline performance
 *          factor. For example, specifying <code>c6i</code> would use the CPU performance of the
 *          <code>c6i</code> family as the baseline reference.</p>
 * @public
 */
export interface BaselinePerformanceFactorsRequest {
  /**
   * <p>The CPU performance to consider, using an instance family as the baseline reference.</p>
   * @public
   */
  Cpu?: CpuPerformanceFactorRequest | undefined;
}

/**
 * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
 * @public
 */
export interface MemoryGiBPerVCpuRequest {
  /**
   * <p>The minimum amount of memory per vCPU, in GiB. To specify no minimum limit, omit this
   *          parameter.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of memory per vCPU, in GiB. To specify no maximum limit, omit this
   *          parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum amount of memory, in MiB.</p>
 * @public
 */
export interface MemoryMiBRequest {
  /**
   * <p>The minimum amount of memory, in MiB. To specify no minimum limit, specify
   *          <code>0</code>.</p>
   * @public
   */
  Min: number | undefined;

  /**
   * <p>The maximum amount of memory, in MiB. To specify no maximum limit, omit this
   *          parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).</p>
 *          <note>
 *             <p>Setting the minimum bandwidth does not guarantee that your instance will achieve the
 *             minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum
 *             bandwidth, but the actual bandwidth of your instance might go below the specified minimum
 *             at times. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth">Available instance bandwidth</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 *          </note>
 * @public
 */
export interface NetworkBandwidthGbpsRequest {
  /**
   * <p>The minimum amount of network bandwidth, in Gbps. To specify no minimum limit, omit this
   *          parameter.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of network bandwidth, in Gbps. To specify no maximum limit, omit this
   *          parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum number of network interfaces.</p>
 * @public
 */
export interface NetworkInterfaceCountRequest {
  /**
   * <p>The minimum number of network interfaces. To specify no minimum limit, omit this
   *          parameter.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum number of network interfaces. To specify no maximum limit, omit this
   *          parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum amount of total local storage, in GB.</p>
 * @public
 */
export interface TotalLocalStorageGBRequest {
  /**
   * <p>The minimum amount of total local storage, in GB. To specify no minimum limit, omit this
   *          parameter.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of total local storage, in GB. To specify no maximum limit, omit this
   *          parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum number of vCPUs.</p>
 * @public
 */
export interface VCpuCountRangeRequest {
  /**
   * <p>The minimum number of vCPUs. To specify no minimum limit, specify <code>0</code>.</p>
   * @public
   */
  Min: number | undefined;

  /**
   * <p>The maximum number of vCPUs. To specify no maximum limit, omit this parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
 *          identify instance types with these attributes.</p>
 *          <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes
 *          are optional. Any unspecified optional attribute is set to its default.</p>
 *          <p>When you specify multiple attributes, you get instance types that satisfy all of the
 *          specified attributes. If you specify multiple values for an attribute, you get instance
 *          types that satisfy any of the specified values.</p>
 *          <p>To limit the list of instance types from which Amazon EC2 can identify matching instance types,
 *          you can use one of the following parameters, but not both in the same request:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AllowedInstanceTypes</code> - The instance types to include in the list. All
 *                other instance types are ignored, even if they match your specified attributes.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExcludedInstanceTypes</code> - The instance types to exclude from the list,
 *                even if they match your specified attributes.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
 *             <code>InstanceType</code>.</p>
 *             <p>Attribute-based instance type selection is only supported when using Auto Scaling
 *             groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in
 *             the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html">launch instance
 *                wizard</a>, or with the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> API or
 *                <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html">AWS::EC2::Instance</a> Amazon Web Services CloudFormation resource, you can't specify
 *                <code>InstanceRequirements</code>.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Specify attributes for instance type selection for EC2 Fleet or Spot Fleet</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
 *             placement score</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface InstanceRequirementsRequest {
  /**
   * <p>The minimum and maximum number of vCPUs.</p>
   * @public
   */
  VCpuCount: VCpuCountRangeRequest | undefined;

  /**
   * <p>The minimum and maximum amount of memory, in MiB.</p>
   * @public
   */
  MemoryMiB: MemoryMiBRequest | undefined;

  /**
   * <p>The CPU manufacturers to include.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with Intel CPUs, specify <code>intel</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD CPUs, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services CPUs, specify <code>amazon-web-services</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Apple CPUs, specify <code>apple</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Don't confuse the CPU manufacturer with the CPU architecture. Instances will
   *          be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you
   *          specify in your launch template.</p>
   *          </note>
   *          <p>Default: Any manufacturer</p>
   * @public
   */
  CpuManufacturers?: CpuManufacturer[] | undefined;

  /**
   * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest | undefined;

  /**
   * <p>The instance types to exclude.</p>
   *          <p>You can use strings with one or more wild cards, represented by
   *          an asterisk (<code>*</code>), to exclude an instance family, type, size, or generation. The
   *          following are examples: <code>m5.8xlarge</code>, <code>c5*.*</code>, <code>m5a.*</code>,
   *             <code>r*</code>, <code>*3*</code>.</p>
   *          <p>For example, if you specify <code>c5*</code>,Amazon EC2 will exclude the entire C5 instance
   *       family, which includes all C5a and C5n instance types. If you specify
   *       <code>m5a.*</code>, Amazon EC2 will exclude all the M5a instance types, but not the M5n
   *       instance types.</p>
   *          <note>
   *             <p>If you specify <code>ExcludedInstanceTypes</code>, you can't specify <code>AllowedInstanceTypes</code>.</p>
   *          </note>
   *          <p>Default: No excluded instance types</p>
   * @public
   */
  ExcludedInstanceTypes?: string[] | undefined;

  /**
   * <p>Indicates whether current or previous generation instance types are included. The
   *       current generation instance types are recommended for use. Current generation instance types are
   *       typically the latest two to three generations in each instance family. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   *          <p>For current generation instance types, specify <code>current</code>.</p>
   *          <p>For previous generation instance types, specify <code>previous</code>.</p>
   *          <p>Default: Current and previous generation instance types</p>
   * @public
   */
  InstanceGenerations?: InstanceGeneration[] | undefined;

  /**
   * <p>[Price protection] The price protection threshold for Spot Instances, as a percentage higher than
   *          an identified Spot price. The identified Spot price is the Spot price of the lowest priced
   *          current generation C, M, or R instance type with your specified attributes. If no current
   *          generation C, M, or R instance type matches your attributes, then the identified Spot price
   *          is from the lowest priced current generation instance types, and failing that, from the
   *          lowest priced previous generation instance types that match your attributes. When Amazon EC2
   *          selects instance types with your attributes, it will exclude instance types whose Spot
   *          price exceeds your specified threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *          <code>memory-mib</code>, the price protection threshold is applied based on the
   *          per-vCPU or per-memory price instead of the per-instance price.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html">GetInstanceTypesFromInstanceRequirements</a>.</p>
   *          <note>
   *             <p>Only one of <code>SpotMaxPricePercentageOverLowestPrice</code> or
   *                <code>MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</code> can be specified. If you
   *             don't specify either, Amazon EC2 will automatically apply optimal price protection to
   *             consistently select from a wide range of instance types. To indicate no price protection
   *             threshold for Spot Instances, meaning you want to consider all instance types that match your
   *             attributes, include one of these parameters and specify a high value, such as
   *                <code>999999</code>.</p>
   *          </note>
   *          <p>Default: <code>100</code>
   *          </p>
   * @public
   */
  SpotMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * <p>[Price protection] The price protection threshold for On-Demand Instances, as a percentage higher than
   *          an identified On-Demand price. The identified On-Demand price is the price of the lowest
   *          priced current generation C, M, or R instance type with your specified attributes. When
   *          Amazon EC2 selects instance types with your attributes, it will exclude instance types whose
   *          price exceeds your specified threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>To indicate no price protection threshold, specify a high value, such as
   *             <code>999999</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html">GetInstanceTypesFromInstanceRequirements</a>.</p>
   *          <note>
   *             <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *          <code>memory-mib</code>, the price protection threshold is applied based on the
   *          per-vCPU or per-memory price instead of the per-instance price.</p>
   *          </note>
   *          <p>Default: <code>20</code>
   *          </p>
   * @public
   */
  OnDemandMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * <p>Indicates whether bare metal instance types must be included, excluded, or required.</p>
   *          <ul>
   *             <li>
   *                <p>To include bare metal instance types, specify <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only bare metal instance types, specify <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude bare metal instance types, specify <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>excluded</code>
   *          </p>
   * @public
   */
  BareMetal?: BareMetal | undefined;

  /**
   * <p>Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a>.</p>
   *          <ul>
   *             <li>
   *                <p>To include burstable performance instance types, specify <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only burstable performance instance types, specify <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude burstable performance instance types, specify <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>excluded</code>
   *          </p>
   * @public
   */
  BurstablePerformance?: BurstablePerformance | undefined;

  /**
   * <p>Indicates whether instance types must support hibernation for On-Demand Instances.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  RequireHibernateSupport?: boolean | undefined;

  /**
   * <p>The minimum and maximum number of network interfaces.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  NetworkInterfaceCount?: NetworkInterfaceCountRequest | undefined;

  /**
   * <p>Indicates whether instance types with instance store volumes are included, excluded, or required. For more information,
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html">Amazon
   *          EC2 instance store</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>To include instance types with instance store volumes, specify
   *                   <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only instance types with instance store volumes, specify
   *                   <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude instance types with instance store volumes, specify
   *                   <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>included</code>
   *          </p>
   * @public
   */
  LocalStorage?: LocalStorage | undefined;

  /**
   * <p>The type of local storage that is required.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with hard disk drive (HDD) storage, specify <code>hdd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with solid state drive (SSD) storage, specify
   *                <code>ssd</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>hdd</code> and <code>ssd</code>
   *          </p>
   * @public
   */
  LocalStorageTypes?: LocalStorageType[] | undefined;

  /**
   * <p>The minimum and maximum amount of total local storage, in GB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  TotalLocalStorageGB?: TotalLocalStorageGBRequest | undefined;

  /**
   * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
   *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest | undefined;

  /**
   * <p>The accelerator types that must be on the instance type.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with FPGA accelerators, specify <code>fpga</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with GPU accelerators, specify <code>gpu</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Inference accelerators, specify <code>inference</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Media accelerators, specify <code>media</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator type</p>
   * @public
   */
  AcceleratorTypes?: AcceleratorType[] | undefined;

  /**
   * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on
   *          an instance.</p>
   *          <p>To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  AcceleratorCount?: AcceleratorCountRequest | undefined;

  /**
   * <p>Indicates whether instance types must have accelerators by specific manufacturers.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with Amazon Web Services devices, specify <code>amazon-web-services</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD devices, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Habana devices, specify <code>habana</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA devices, specify <code>nvidia</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx devices, specify <code>xilinx</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any manufacturer</p>
   * @public
   */
  AcceleratorManufacturers?: AcceleratorManufacturer[] | undefined;

  /**
   * <p>The accelerators that must be on the instance type.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with NVIDIA A10G GPUs, specify <code>a10g</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA A100 GPUs, specify <code>a100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA H100 GPUs, specify <code>h100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services Inferentia chips, specify <code>inferentia</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services Inferentia2 chips, specify <code>inferentia2</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Habana Gaudi HL-205 GPUs, specify <code>gaudi-hl-205</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA GRID K520 GPUs, specify <code>k520</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA K80 GPUs, specify <code>k80</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA L4 GPUs, specify <code>l4</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA L40S GPUs, specify <code>l40s</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA M60 GPUs, specify <code>m60</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD Radeon Pro V520 GPUs, specify <code>radeon-pro-v520</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services Trainium chips, specify <code>trainium</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services Trainium2 chips, specify <code>trainium2</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA T4 GPUs, specify <code>t4</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA T4G GPUs, specify <code>t4g</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx U30 cards, specify <code>u30</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx VU9P FPGAs, specify <code>vu9p</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA V100 GPUs, specify <code>v100</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator</p>
   * @public
   */
  AcceleratorNames?: AcceleratorName[] | undefined;

  /**
   * <p>The minimum and maximum amount of total accelerator memory, in MiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest | undefined;

  /**
   * <p>The minimum and maximum amount of baseline network bandwidth, in gigabits per second
   *           (Gbps). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html">Amazon EC2 instance network bandwidth</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest | undefined;

  /**
   * <p>The instance types to apply your specified attributes against. All other instance types
   *          are ignored, even if they match your specified attributes.</p>
   *          <p>You can use strings with one or more wild cards, represented by
   *          an asterisk (<code>*</code>), to allow an instance type, size, or generation. The
   *          following are examples: <code>m5.8xlarge</code>, <code>c5*.*</code>, <code>m5a.*</code>,
   *          <code>r*</code>, <code>*3*</code>.</p>
   *          <p>For example, if you specify <code>c5*</code>,Amazon EC2 will allow the entire C5 instance
   *          family, which includes all C5a and C5n instance types. If you specify
   *          <code>m5a.*</code>, Amazon EC2 will allow all the M5a instance types, but not the M5n
   *          instance types.</p>
   *          <note>
   *             <p>If you specify <code>AllowedInstanceTypes</code>, you can't specify <code>ExcludedInstanceTypes</code>.</p>
   *          </note>
   *          <p>Default: All instance types</p>
   * @public
   */
  AllowedInstanceTypes?: string[] | undefined;

  /**
   * <p>[Price protection] The price protection threshold for Spot Instances, as a percentage of an
   *          identified On-Demand price. The identified On-Demand price is the price of the lowest
   *          priced current generation C, M, or R instance type with your specified attributes. If no
   *          current generation C, M, or R instance type matches your attributes, then the identified
   *          price is from the lowest priced current generation instance types, and failing that, from
   *          the lowest priced previous generation instance types that match your attributes. When Amazon EC2
   *          selects instance types with your attributes, it will exclude instance types whose price
   *          exceeds your specified threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *          <code>memory-mib</code>, the price protection threshold is based on the per vCPU or per
   *          memory price instead of the per instance price.</p>
   *          <note>
   *             <p>Only one of <code>SpotMaxPricePercentageOverLowestPrice</code> or
   *                <code>MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</code> can be specified. If you
   *             don't specify either, Amazon EC2 will automatically apply optimal price protection to
   *             consistently select from a wide range of instance types. To indicate no price protection
   *             threshold for Spot Instances, meaning you want to consider all instance types that match your
   *             attributes, include one of these parameters and specify a high value, such as
   *                <code>999999</code>.</p>
   *          </note>
   * @public
   */
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number | undefined;

  /**
   * <p>The baseline performance to consider, using an instance family as a baseline reference.
   *          The instance family establishes the lowest acceptable level of performance. Amazon EC2 uses this
   *          baseline to guide instance type selection, but there is no guarantee that the selected
   *          instance types will always exceed the baseline for every application. Currently, this
   *          parameter only supports CPU performance as a baseline performance factor. For more
   *          information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-abis-performance-protection">Performance protection</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  BaselinePerformanceFactors?: BaselinePerformanceFactorsRequest | undefined;

  /**
   * <p>Specifies whether instance types must support encrypting in-transit traffic between
   *          instances. For more information, including the supported instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/data-protection.html#encryption-transit">Encryption in
   *             transit</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  RequireEncryptionInTransit?: boolean | undefined;
}

/**
 * <p>Describes the placement of an instance.</p>
 * @public
 */
export interface Placement {
  /**
   * <p>The ID of the Availability Zone of the instance.</p>
   *          <p>On input, you can specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>,
   *             but not both. If you specify neither one, Amazon EC2 automatically selects an Availability Zone
   *             for you.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The affinity setting for the instance on the Dedicated Host.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a>.</p>
   * @public
   */
  Affinity?: string | undefined;

  /**
   * <p>The name of the placement group that the instance is in.</p>
   *          <p>On input, you can specify <code>GroupId</code> or <code>GroupName</code>,
   *             but not both.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The number of the partition that the instance is in. Valid only if the placement group
   *             strategy is set to <code>partition</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * <p>The ID of the Dedicated Host on which the instance resides.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a>.</p>
   * @public
   */
  HostId?: string | undefined;

  /**
   * <p>The tenancy of the instance. An instance with a
   *             tenancy of <code>dedicated</code> runs on single-tenant hardware.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>. The
   *                 <code>host</code> tenancy is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a> or
   *             for T3 instances that are configured for the <code>unlimited</code> CPU credit
   *             option.</p>
   * @public
   */
  Tenancy?: Tenancy | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  SpreadDomain?: string | undefined;

  /**
   * <p>The ARN of the host resource group in which to launch the instances.</p>
   *          <p>On input, if you specify this parameter, either omit the <b>Tenancy</b> parameter or set it to <code>host</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * <p>The ID of the placement group that the instance is in.</p>
   *          <p>On input, you can specify <code>GroupId</code> or <code>GroupName</code>,
   *             but not both.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The Availability Zone of the instance.</p>
   *          <p>On input, you can specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>,
   *             but not both. If you specify neither one, Amazon EC2 automatically selects an Availability Zone
   *             for you.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;
}

/**
 * <p>Describes overrides for a launch template.</p>
 * @public
 */
export interface FleetLaunchTemplateOverridesRequest {
  /**
   * <p>The instance type.</p>
   *          <p>
   *             <code>mac1.metal</code> is not supported as a launch template override.</p>
   *          <note>
   *             <p>If you specify <code>InstanceType</code>, you can't specify
   *                <code>InstanceRequirements</code>.</p>
   *          </note>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not
   *          recommend using this parameter because it can lead to increased interruptions. If you
   *          do not specify this parameter, you will pay the current Spot price.
   *       </p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more
   *             frequently than if you do not specify this parameter.</p>
   *             <p>If you specify a maximum price, it must be more than USD $0.001. Specifying a value
   *             below USD $0.001 will result in an <code>InvalidParameterValue</code> error
   *             message.</p>
   *          </important>
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * <p>The IDs of the subnets in which to launch the instances. Separate multiple subnet IDs using commas (for example, <code>subnet-1234abcdeexample1, subnet-0987cdef6example2</code>). A request of type <code>instant</code> can have only one subnet ID.</p>
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
   *             <p>When specifying weights, the price used in the <code>lowest-price</code> and
   *                <code>price-capacity-optimized</code> allocation strategies is per
   *                <i>unit</i> hour (where the instance price is divided by the specified
   *             weight). However, if all the specified weights are above the requested
   *                <code>TargetCapacity</code>, resulting in only 1 instance being launched, the price
   *             used is per <i>instance</i> hour.</p>
   *          </note>
   * @public
   */
  WeightedCapacity?: number | undefined;

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
   *          higher the priority. If no number is set, the launch template override has the lowest
   *          priority. You can set the same priority for different launch template overrides.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   * @public
   */
  Placement?: Placement | undefined;

  /**
   * <p>The block device mappings, which define the EBS volumes and instance store volumes to
   *          attach to the instance at launch.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block device mappings
   *             for volumes on Amazon EC2 instances</a> in the <i>Amazon EC2 User
   *          Guide</i>.</p>
   * @public
   */
  BlockDeviceMappings?: FleetBlockDeviceMappingRequest[] | undefined;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *          </note>
   * @public
   */
  InstanceRequirements?: InstanceRequirementsRequest | undefined;

  /**
   * <p>The ID of the AMI in the format <code>ami-17characters00000</code>.</p>
   *          <p>Alternatively, you can specify a Systems Manager parameter, using one of the following
   *          formats. The Systems Manager parameter will resolve to an AMI ID on launch.</p>
   *          <p>To reference a public parameter:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>public-parameter</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To reference a parameter stored in the same account:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name:version-number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name:label</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To reference a parameter shared from another Amazon Web Services account:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN:version-number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN:label</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems Manager parameter instead of an AMI ID</a> in the
   *          <i>Amazon EC2 User Guide</i>.</p>
   *          <note>
   *             <p>This parameter is only available for fleets of type <code>instant</code>. For fleets
   *             of type <code>maintain</code> and <code>request</code>, you must specify the AMI ID in
   *             the launch template.</p>
   *          </note>
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * <p>Describes a launch template and overrides.</p>
 * @public
 */
export interface FleetLaunchTemplateConfigRequest {
  /**
   * <p>The launch template to use. You must specify either the launch template ID or launch
   *          template name in the request. </p>
   * @public
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest | undefined;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   *          <p>For fleets of type <code>request</code> and <code>maintain</code>, a maximum of 300
   *          items is allowed across all launch templates.</p>
   * @public
   */
  Overrides?: FleetLaunchTemplateOverridesRequest[] | undefined;
}

/**
 * <p>Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand
 *          capacity.</p>
 *          <note>
 *             <p>This strategy can only be used if the EC2 Fleet is of type <code>instant</code>.</p>
 *          </note>
 *          <p>For more information about Capacity Reservations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">On-Demand Capacity
 *             Reservations</a> in the <i>Amazon EC2 User Guide</i>. For examples of using
 *          Capacity Reservations in an EC2 Fleet, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html">EC2 Fleet example
 *             configurations</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface CapacityReservationOptionsRequest {
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
export interface OnDemandOptionsRequest {
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
  CapacityReservationOptions?: CapacityReservationOptionsRequest | undefined;

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
   *             <p>If your fleet includes T instances that are configured as <code>unlimited</code>,
   *             and if their average CPU usage exceeds the baseline utilization, you will incur a charge
   *             for surplus credits. The <code>MaxTotalPrice</code> does not account for surplus
   *             credits, and, if you use surplus credits, your final cost might be higher than what you
   *             specified for <code>MaxTotalPrice</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits">Surplus credits can incur charges</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          </note>
   * @public
   */
  MaxTotalPrice?: string | undefined;
}

/**
 * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a rebalance
 *          notification signal that your Spot Instance is at an elevated risk of being interrupted.
 *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-capacity-rebalance.html">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface FleetSpotCapacityRebalanceRequest {
  /**
   * <p>The replacement strategy to use. Only available for fleets of type
   *          <code>maintain</code>.</p>
   *          <p>
   *             <code>launch</code> - EC2 Fleet launches a replacement Spot Instance when a rebalance
   *          notification is emitted for an existing Spot Instance in the fleet. EC2 Fleet does not
   *          terminate the instances that receive a rebalance notification. You can terminate the old
   *          instances, or you can leave them running. You are charged for all instances while they are
   *          running. </p>
   *          <p>
   *             <code>launch-before-terminate</code> - EC2 Fleet launches a replacement Spot Instance
   *          when a rebalance notification is emitted for an existing Spot Instance in the fleet, and
   *          then, after a delay that you specify (in <code>TerminationDelay</code>), terminates the
   *          instances that received a rebalance notification.</p>
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
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.</p>
 * @public
 */
export interface FleetSpotMaintenanceStrategiesRequest {
  /**
   * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
   *          elevated risk of being interrupted.</p>
   * @public
   */
  CapacityRebalance?: FleetSpotCapacityRebalanceRequest | undefined;
}

/**
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet request.</p>
 * @public
 */
export interface SpotOptionsRequest {
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
   * @public
   */
  AllocationStrategy?: SpotAllocationStrategy | undefined;

  /**
   * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
   *          interrupted.</p>
   * @public
   */
  MaintenanceStrategies?: FleetSpotMaintenanceStrategiesRequest | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   *          <p>Default: <code>terminate</code>
   *          </p>
   * @public
   */
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior | undefined;

  /**
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Supported
   *          only when Spot <code>AllocationStrategy</code> is set to <code>lowest-price</code>. EC2 Fleet
   *          selects the cheapest Spot pools and evenly allocates your target Spot capacity across the
   *          number of Spot pools that you specify.</p>
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
   *          <code>SingleInstanceType</code>
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
   *             surplus credits. The <code>MaxTotalPrice</code> does not account for surplus credits,
   *             and, if you use surplus credits, your final cost might be higher than what you specified
   *             for <code>MaxTotalPrice</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits">Surplus credits can incur charges</a> in the
   *                <i>Amazon EC2 User Guide</i>.</p>
   *          </note>
   * @public
   */
  MaxTotalPrice?: string | undefined;
}

/**
 * <p>The number of units to request. You can choose to set the target capacity as the number of
 *          instances. Or you can set the target capacity to a performance characteristic that is important to your application workload,
 *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
 *          specify a target capacity of 0 and add capacity later.</p>
 *          <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance
 *             <code>MaxTotalPrice</code> parameter, or both parameters to ensure that your fleet cost
 *          does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances
 *          in your request, EC2 Fleet will launch instances until it reaches the maximum amount that you're
 *          willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops
 *          launching instances even if it hasn't met the target capacity. The
 *          <code>MaxTotalPrice</code> parameters are located in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptionsRequest">OnDemandOptionsRequest</a>
 *          and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptionsRequest">SpotOptionsRequest</a>.</p>
 * @public
 */
export interface TargetCapacitySpecificationRequest {
  /**
   * <p>The number of units to request, filled using the default target capacity type.</p>
   * @public
   */
  TotalTargetCapacity: number | undefined;

  /**
   * <p>The number of On-Demand units to request.</p>
   * @public
   */
  OnDemandTargetCapacity?: number | undefined;

  /**
   * <p>The number of Spot units to request.</p>
   * @public
   */
  SpotTargetCapacity?: number | undefined;

  /**
   * <p>The default target capacity type.</p>
   * @public
   */
  DefaultTargetCapacityType?: DefaultTargetCapacityType | undefined;

  /**
   * <p>The unit for the target capacity. You can specify this parameter only when using
   *          attributed-based instance type selection.</p>
   *          <p>Default: <code>units</code> (the number of instances)</p>
   * @public
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | undefined;
}

/**
 * @public
 */
export interface CreateFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *           request. If you do not specify a client token, a randomly generated token is used for
   *           the request to ensure idempotency.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *             idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
   * @public
   */
  SpotOptions?: SpotOptionsRequest | undefined;

  /**
   * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
   * @public
   */
  OnDemandOptions?: OnDemandOptionsRequest | undefined;

  /**
   * <p>Indicates whether running instances should be terminated if the total target capacity of
   *          the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   * @public
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | undefined;

  /**
   * <p>The configuration for the EC2 Fleet.</p>
   * @public
   */
  LaunchTemplateConfigs: FleetLaunchTemplateConfigRequest[] | undefined;

  /**
   * <p>The number of units to request.</p>
   * @public
   */
  TargetCapacitySpecification: TargetCapacitySpecificationRequest | undefined;

  /**
   * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires.</p>
   * @public
   */
  TerminateInstancesWithExpiration?: boolean | undefined;

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
   * @public
   */
  Type?: FleetType | undefined;

  /**
   * <p>The start date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          The default is to start fulfilling the request immediately.</p>
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * <p>The end date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.</p>
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
   * <p>The key-value pair for tagging the EC2 Fleet request on creation. For more information, see
   *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources">Tag your resources</a>.</p>
   *          <p>If the fleet type is <code>instant</code>, specify a resource type of <code>fleet</code>
   *          to tag the fleet or <code>instance</code> to tag the instances at launch.</p>
   *          <p>If the fleet type is <code>maintain</code> or <code>request</code>, specify a resource
   *          type of <code>fleet</code> to tag the fleet. You cannot specify a resource type of
   *             <code>instance</code>. To tag instances at launch, specify the tags in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template">launch template</a>.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Context?: string | undefined;
}

/**
 * <p>The Amazon EC2 launch template that can be used by
 *             a Spot Fleet to configure Amazon EC2 instances. You must specify either the ID or name of the launch template in the request, but not both.</p>
 *          <p>For information about launch templates,
 *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launch an instance from a launch template</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface FleetLaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateId</code> or the <code>LaunchTemplateName</code>, but not both.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateName</code> or the <code>LaunchTemplateId</code>, but not both.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The launch template version number, <code>$Latest</code>, or <code>$Default</code>.
   *             You must specify a value, otherwise the request fails.</p>
   *          <p>If the value is <code>$Latest</code>, Amazon EC2 uses the latest version of the launch
   *             template.</p>
   *          <p>If the value is <code>$Default</code>, Amazon EC2 uses the default version of the launch
   *             template.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>Describes a block device for an EBS volume.</p>
 * @public
 */
export interface EbsBlockDeviceResponse {
  /**
   * <p>Indicates whether the volume is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes,
   *          this represents the number of IOPS that are provisioned for the volume. For <code>gp2</code>
   *          volumes, this represents the baseline performance of the volume and the rate at which
   *          the volume accumulates I/O credits for bursting.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * <p>Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key
   *          to use for EBS encryption.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The size of the volume, in GiBs.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html">Amazon EBS volume types</a> in the
   *          <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  VolumeType?: VolumeType | undefined;
}

/**
 * <p>Describes a block device mapping, which defines the EBS volumes and instance store
 *          volumes to attach to an instance at launch.</p>
 * @public
 */
export interface BlockDeviceMappingResponse {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The virtual device name.</p>
   * @public
   */
  VirtualName?: string | undefined;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *          launched.</p>
   * @public
   */
  Ebs?: EbsBlockDeviceResponse | undefined;

  /**
   * <p>Suppresses the specified device included in the block device mapping.</p>
   * @public
   */
  NoDevice?: string | undefined;
}

/**
 * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
 *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface BaselineEbsBandwidthMbps {
  /**
   * <p>The minimum baseline bandwidth, in Mbps. If this parameter is not specified, there is no
   *          minimum limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum baseline bandwidth, in Mbps. If this parameter is not specified, there is no
   *          maximum limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>Specify an instance family to use as the baseline reference for CPU performance. All
 *          instance types that match your specified attributes will be compared against the CPU
 *          performance of the referenced instance family, regardless of CPU manufacturer or
 *          architecture.</p>
 *          <note>
 *             <p>Currently, only one instance family can be specified in the list.</p>
 *          </note>
 * @public
 */
export interface PerformanceFactorReference {
  /**
   * <p>The instance family to use as a baseline reference.</p>
   *          <note>
   *             <p>Ensure that you specify the correct value for the instance family. The instance
   *             family is everything before the period (<code>.</code>) in the instance type name. For
   *             example, in the instance type <code>c6i.large</code>, the instance family is
   *             <code>c6i</code>, not <code>c6</code>. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/instance-type-names.html">Amazon EC2
   *                instance type naming conventions</a> in <i>Amazon EC2 Instance
   *                   Types</i>.</p>
   *          </note>
   *          <p>The following instance families are <i>not supported</i> for performance
   *          protection:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>c1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>g3</code> | <code>g3s</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hpc7g</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>m1</code> | <code>m2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mac1</code> | <code>mac2</code> | <code>mac2-m1ultra</code> |
   *                <code>mac2-m2</code> | <code>mac2-m2pro</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>p3dn</code> | <code>p4d</code> | <code>p5</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>t1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>u-12tb1</code> | <code>u-18tb1</code> | <code>u-24tb1</code> |
   *                <code>u-3tb1</code> | <code>u-6tb1</code> | <code>u-9tb1</code> |
   *                <code>u7i-12tb</code> | <code>u7in-16tb</code> | <code>u7in-24tb</code> |
   *                <code>u7in-32tb</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you enable performance protection by specifying a supported instance family, the
   *          returned instance types will exclude the above unsupported instance families.</p>
   *          <p>If you specify an unsupported instance family as a value for baseline performance, the
   *          API returns an empty response for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements">GetInstanceTypesFromInstanceRequirements</a> and an exception for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet">RequestSpotFleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyFleet">ModifyFleet</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySpotFleetRequest">ModifySpotFleetRequest</a>.</p>
   * @public
   */
  InstanceFamily?: string | undefined;
}

/**
 * <p>The CPU performance to consider, using an instance family as the baseline reference.</p>
 * @public
 */
export interface CpuPerformanceFactor {
  /**
   * <p>Specify an instance family to use as the baseline reference for CPU performance. All
   *          instance types that match your specified attributes will be compared against the CPU
   *          performance of the referenced instance family, regardless of CPU manufacturer or
   *          architecture differences.</p>
   *          <note>
   *             <p>Currently, only one instance family can be specified in the list.</p>
   *          </note>
   * @public
   */
  References?: PerformanceFactorReference[] | undefined;
}

/**
 * <p>The baseline performance to consider, using an instance family as a baseline reference.
 *          The instance family establishes the lowest acceptable level of performance. Amazon EC2 uses this
 *          baseline to guide instance type selection, but there is no guarantee that the selected
 *          instance types will always exceed the baseline for every application.</p>
 *          <p>Currently, this parameter only supports CPU performance as a baseline performance
 *          factor. For example, specifying <code>c6i</code> would use the CPU performance of the
 *          <code>c6i</code> family as the baseline reference.</p>
 * @public
 */
export interface BaselinePerformanceFactors {
  /**
   * <p>The CPU performance to consider, using an instance family as the baseline reference.</p>
   * @public
   */
  Cpu?: CpuPerformanceFactor | undefined;
}

/**
 * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
 *          <p></p>
 * @public
 */
export interface MemoryGiBPerVCpu {
  /**
   * <p>The minimum amount of memory per vCPU, in GiB. If this parameter is not specified, there is
   *          no minimum limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of memory per vCPU, in GiB. If this parameter is not specified, there is
   *          no maximum limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum amount of memory, in MiB.</p>
 * @public
 */
export interface MemoryMiB {
  /**
   * <p>The minimum amount of memory, in MiB. If this parameter is not specified, there is no minimum
   *          limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of memory, in MiB. If this parameter is not specified, there is no
   *          maximum limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).</p>
 *          <note>
 *             <p>Setting the minimum bandwidth does not guarantee that your instance will achieve the
 *             minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum
 *             bandwidth, but the actual bandwidth of your instance might go below the specified minimum
 *             at times. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth">Available instance bandwidth</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 *          </note>
 * @public
 */
export interface NetworkBandwidthGbps {
  /**
   * <p>The minimum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no minimum
   *          limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no
   *          maximum limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum number of network interfaces.</p>
 * @public
 */
export interface NetworkInterfaceCount {
  /**
   * <p>The minimum number of network interfaces. If this parameter is not specified, there is no
   *          minimum limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum number of network interfaces. If this parameter is not specified, there is no
   *          maximum limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum amount of total local storage, in GB.</p>
 * @public
 */
export interface TotalLocalStorageGB {
  /**
   * <p>The minimum amount of total local storage, in GB. If this parameter is not specified, there is
   *          no minimum limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of total local storage, in GB. If this parameter is not specified, there is
   *          no maximum limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum number of vCPUs.</p>
 * @public
 */
export interface VCpuCountRange {
  /**
   * <p>The minimum number of vCPUs. If the value is <code>0</code>, there is no minimum
   *          limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum number of vCPUs. If this parameter is not specified, there is no maximum
   *          limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
 *          identify instance types with these attributes.</p>
 *          <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes
 *          are optional. Any unspecified optional attribute is set to its default.</p>
 *          <p>When you specify multiple attributes, you get instance types that satisfy all of the
 *          specified attributes. If you specify multiple values for an attribute, you get instance
 *          types that satisfy any of the specified values.</p>
 *          <p>To limit the list of instance types from which Amazon EC2 can identify matching instance types,
 *          you can use one of the following parameters, but not both in the same request:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AllowedInstanceTypes</code> - The instance types to include in the list. All
 *                other instance types are ignored, even if they match your specified attributes.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExcludedInstanceTypes</code> - The instance types to exclude from the list,
 *                even if they match your specified attributes.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
 *             <code>InstanceType</code>.</p>
 *             <p>Attribute-based instance type selection is only supported when using Auto Scaling
 *             groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in
 *             the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html">launch instance
 *                wizard</a> or with the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances API</a>, you
 *             can't specify <code>InstanceRequirements</code>.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-mixed-instances-group-attribute-based-instance-type-selection.html">Create mixed instances group using attribute-based instance type selection</a> in
 *          the <i>Amazon EC2 Auto Scaling User Guide</i>, and also <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Specify attributes for instance type selection for EC2 Fleet or Spot Fleet</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
 *             placement score</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface InstanceRequirements {
  /**
   * <p>The minimum and maximum number of vCPUs.</p>
   * @public
   */
  VCpuCount?: VCpuCountRange | undefined;

  /**
   * <p>The minimum and maximum amount of memory, in MiB.</p>
   * @public
   */
  MemoryMiB?: MemoryMiB | undefined;

  /**
   * <p>The CPU manufacturers to include.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with Intel CPUs, specify <code>intel</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD CPUs, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services CPUs, specify <code>amazon-web-services</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Apple CPUs, specify <code>apple</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Don't confuse the CPU manufacturer with the CPU architecture. Instances will
   *          be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you
   *          specify in your launch template.</p>
   *          </note>
   *          <p>Default: Any manufacturer</p>
   * @public
   */
  CpuManufacturers?: CpuManufacturer[] | undefined;

  /**
   * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpu | undefined;

  /**
   * <p>The instance types to exclude.</p>
   *          <p>You can use strings with one or more wild cards, represented by
   *       an asterisk (<code>*</code>), to exclude an instance type, size, or generation. The
   *       following are examples: <code>m5.8xlarge</code>, <code>c5*.*</code>, <code>m5a.*</code>,
   *       <code>r*</code>, <code>*3*</code>.</p>
   *          <p>For example, if you specify <code>c5*</code>,Amazon EC2 will exclude the entire C5 instance
   *       family, which includes all C5a and C5n instance types. If you specify
   *       <code>m5a.*</code>, Amazon EC2 will exclude all the M5a instance types, but not the M5n
   *       instance types.</p>
   *          <note>
   *             <p>If you specify <code>ExcludedInstanceTypes</code>, you can't specify <code>AllowedInstanceTypes</code>.</p>
   *          </note>
   *          <p>Default: No excluded instance types</p>
   * @public
   */
  ExcludedInstanceTypes?: string[] | undefined;

  /**
   * <p>Indicates whether current or previous generation instance types are included. The
   *       current generation instance types are recommended for use. Current generation instance types are
   *       typically the latest two to three generations in each instance family. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   *          <p>For current generation instance types, specify <code>current</code>.</p>
   *          <p>For previous generation instance types, specify <code>previous</code>.</p>
   *          <p>Default: Current and previous generation instance types</p>
   * @public
   */
  InstanceGenerations?: InstanceGeneration[] | undefined;

  /**
   * <p>[Price protection] The price protection threshold for Spot Instances, as a percentage higher than
   *          an identified Spot price. The identified Spot price is the Spot price of the lowest priced
   *          current generation C, M, or R instance type with your specified attributes. If no current
   *          generation C, M, or R instance type matches your attributes, then the identified Spot price
   *          is from the lowest priced current generation instance types, and failing that, from the
   *          lowest priced previous generation instance types that match your attributes. When Amazon EC2
   *          selects instance types with your attributes, it will exclude instance types whose Spot
   *          price exceeds your specified threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *             <code>memory-mib</code>, the price protection threshold is applied based on the per-vCPU
   *          or per-memory price instead of the per-instance price.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html">GetInstanceTypesFromInstanceRequirements</a>.</p>
   *          <note>
   *             <p>Only one of <code>SpotMaxPricePercentageOverLowestPrice</code> or
   *                <code>MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</code> can be specified. If you
   *             don't specify either, Amazon EC2 will automatically apply optimal price protection to
   *             consistently select from a wide range of instance types. To indicate no price protection
   *             threshold for Spot Instances, meaning you want to consider all instance types that match your
   *             attributes, include one of these parameters and specify a high value, such as
   *                <code>999999</code>.</p>
   *          </note>
   *          <p>Default: <code>100</code>
   *          </p>
   * @public
   */
  SpotMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * <p>[Price protection] The price protection threshold for On-Demand Instances, as a percentage higher
   *          than an identified On-Demand price. The identified On-Demand price is the price of the
   *          lowest priced current generation C, M, or R instance type with your specified attributes.
   *          When Amazon EC2 selects instance types with your attributes, it will exclude instance types
   *          whose price exceeds your specified threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>To turn off price protection, specify a high value, such as <code>999999</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html">GetInstanceTypesFromInstanceRequirements</a>.</p>
   *          <note>
   *             <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *          <code>memory-mib</code>, the price protection threshold is applied based on the
   *          per-vCPU or per-memory price instead of the per-instance price.</p>
   *          </note>
   *          <p>Default: <code>20</code>
   *          </p>
   * @public
   */
  OnDemandMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * <p>Indicates whether bare metal instance types must be included, excluded, or required.</p>
   *          <ul>
   *             <li>
   *                <p>To include bare metal instance types, specify <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only bare metal instance types, specify <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude bare metal instance types, specify <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>excluded</code>
   *          </p>
   * @public
   */
  BareMetal?: BareMetal | undefined;

  /**
   * <p>Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a>.</p>
   *          <ul>
   *             <li>
   *                <p>To include burstable performance instance types, specify <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only burstable performance instance types, specify <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude burstable performance instance types, specify <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>excluded</code>
   *          </p>
   * @public
   */
  BurstablePerformance?: BurstablePerformance | undefined;

  /**
   * <p>Indicates whether instance types must support hibernation for On-Demand
   *          Instances.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  RequireHibernateSupport?: boolean | undefined;

  /**
   * <p>The minimum and maximum number of network interfaces.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  NetworkInterfaceCount?: NetworkInterfaceCount | undefined;

  /**
   * <p>Indicates whether instance types with instance store volumes are included, excluded, or required. For more information,
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html">Amazon
   *             EC2 instance store</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>To include instance types with instance store volumes, specify
   *                <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only instance types with instance store volumes, specify
   *                   <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude instance types with instance store volumes, specify
   *                <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>included</code>
   *          </p>
   * @public
   */
  LocalStorage?: LocalStorage | undefined;

  /**
   * <p>The type of local storage that is required.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with hard disk drive (HDD) storage, specify <code>hdd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with solid state drive (SSD) storage, specify
   *                <code>ssd</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>hdd</code> and <code>ssd</code>
   *          </p>
   * @public
   */
  LocalStorageTypes?: LocalStorageType[] | undefined;

  /**
   * <p>The minimum and maximum amount of total local storage, in GB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  TotalLocalStorageGB?: TotalLocalStorageGB | undefined;

  /**
   * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
   *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbps | undefined;

  /**
   * <p>The accelerator types that must be on the instance type.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with FPGA accelerators, specify <code>fpga</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with GPU accelerators, specify <code>gpu</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Inference accelerators, specify <code>inference</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Media accelerators, specify <code>media</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator type</p>
   * @public
   */
  AcceleratorTypes?: AcceleratorType[] | undefined;

  /**
   * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on
   *          an instance.</p>
   *          <p>To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  AcceleratorCount?: AcceleratorCount | undefined;

  /**
   * <p>Indicates whether instance types must have accelerators by specific manufacturers.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with Amazon Web Services devices, specify <code>amazon-web-services</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD devices, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Habana devices, specify <code>habana</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA devices, specify <code>nvidia</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx devices, specify <code>xilinx</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any manufacturer</p>
   * @public
   */
  AcceleratorManufacturers?: AcceleratorManufacturer[] | undefined;

  /**
   * <p>The accelerators that must be on the instance type.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with NVIDIA A10G GPUs, specify <code>a10g</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA A100 GPUs, specify <code>a100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA H100 GPUs, specify <code>h100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services Inferentia chips, specify <code>inferentia</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services Inferentia2 chips, specify <code>inferentia2</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Habana Gaudi HL-205 GPUs, specify <code>gaudi-hl-205</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA GRID K520 GPUs, specify <code>k520</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA K80 GPUs, specify <code>k80</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA L4 GPUs, specify <code>l4</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA L40S GPUs, specify <code>l40s</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA M60 GPUs, specify <code>m60</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD Radeon Pro V520 GPUs, specify <code>radeon-pro-v520</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services Trainium chips, specify <code>trainium</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services Trainium2 chips, specify <code>trainium2</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA T4 GPUs, specify <code>t4</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA T4G GPUs, specify <code>t4g</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx U30 cards, specify <code>u30</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx VU9P FPGAs, specify <code>vu9p</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA V100 GPUs, specify <code>v100</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator</p>
   * @public
   */
  AcceleratorNames?: AcceleratorName[] | undefined;

  /**
   * <p>The minimum and maximum amount of total accelerator memory, in MiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiB | undefined;

  /**
   * <p>The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).</p>
   *          <p>Default: No minimum or maximum limits</p>
   * @public
   */
  NetworkBandwidthGbps?: NetworkBandwidthGbps | undefined;

  /**
   * <p>The instance types to apply your specified attributes against. All other instance types
   *          are ignored, even if they match your specified attributes.</p>
   *          <p>You can use strings with one or more wild cards, represented by
   *          an asterisk (<code>*</code>), to allow an instance type, size, or generation. The
   *          following are examples: <code>m5.8xlarge</code>, <code>c5*.*</code>, <code>m5a.*</code>,
   *          <code>r*</code>, <code>*3*</code>.</p>
   *          <p>For example, if you specify <code>c5*</code>,Amazon EC2 will allow the entire C5 instance
   *          family, which includes all C5a and C5n instance types. If you specify
   *          <code>m5a.*</code>, Amazon EC2 will allow all the M5a instance types, but not the M5n
   *          instance types.</p>
   *          <note>
   *             <p>If you specify <code>AllowedInstanceTypes</code>, you can't specify <code>ExcludedInstanceTypes</code>.</p>
   *          </note>
   *          <p>Default: All instance types</p>
   * @public
   */
  AllowedInstanceTypes?: string[] | undefined;

  /**
   * <p>[Price protection] The price protection threshold for Spot Instances, as a percentage of an
   *          identified On-Demand price. The identified On-Demand price is the price of the lowest
   *          priced current generation C, M, or R instance type with your specified attributes. If no
   *          current generation C, M, or R instance type matches your attributes, then the identified
   *          price is from the lowest priced current generation instance types, and failing that, from
   *          the lowest priced previous generation instance types that match your attributes. When Amazon EC2
   *          selects instance types with your attributes, it will exclude instance types whose price
   *          exceeds your specified threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *             <code>memory-mib</code>, the price protection threshold is based on the per vCPU or per
   *          memory price instead of the per instance price.</p>
   *          <note>
   *             <p>Only one of <code>SpotMaxPricePercentageOverLowestPrice</code> or
   *                <code>MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</code> can be specified. If you
   *             don't specify either, Amazon EC2 will automatically apply optimal price protection to
   *             consistently select from a wide range of instance types. To indicate no price protection
   *             threshold for Spot Instances, meaning you want to consider all instance types that match your
   *             attributes, include one of these parameters and specify a high value, such as
   *                <code>999999</code>.</p>
   *          </note>
   * @public
   */
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number | undefined;

  /**
   * <p>The baseline performance to consider, using an instance family as a baseline reference.
   *          The instance family establishes the lowest acceptable level of performance. Amazon EC2 uses this
   *          baseline to guide instance type selection, but there is no guarantee that the selected
   *          instance types will always exceed the baseline for every application. Currently, this
   *          parameter only supports CPU performance as a baseline performance factor. For more
   *          information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-abis-performance-protection">Performance protection</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  BaselinePerformanceFactors?: BaselinePerformanceFactors | undefined;

  /**
   * <p>Specifies whether instance types must support encrypting in-transit traffic between
   *          instances. For more information, including the supported instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/data-protection.html#encryption-transit">Encryption in
   *             transit</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  RequireEncryptionInTransit?: boolean | undefined;
}

/**
 * <p>Describes the placement of an instance.</p>
 * @public
 */
export interface PlacementResponse {
  /**
   * <p>The name of the placement group that the instance is in.</p>
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * <p>Describes overrides for a launch template.</p>
 * @public
 */
export interface FleetLaunchTemplateOverrides {
  /**
   * <p>The instance type.</p>
   *          <p>
   *             <code>mac1.metal</code> is not supported as a launch template override.</p>
   *          <note>
   *             <p>If you specify <code>InstanceType</code>, you can't specify
   *                <code>InstanceRequirements</code>.</p>
   *          </note>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not
   *          recommend using this parameter because it can lead to increased interruptions. If you
   *          do not specify this parameter, you will pay the current Spot price.
   *       </p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently
   *          than if you do not specify this parameter.</p>
   *             <p>If you specify a maximum price, it must be more than USD $0.001. Specifying a value
   *          below USD $0.001 will result in an <code>InvalidParameterValue</code> error
   *          message.</p>
   *          </important>
   * @public
   */
  MaxPrice?: string | undefined;

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
   *             <p>When specifying weights, the price used in the <code>lowest-price</code> and
   *             <code>price-capacity-optimized</code> allocation strategies is per
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
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   * @public
   */
  Placement?: PlacementResponse | undefined;

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
   * <p>The ID of the AMI in the format <code>ami-17characters00000</code>.</p>
   *          <p>Alternatively, you can specify a Systems Manager parameter, using one of the following
   *          formats. The Systems Manager parameter will resolve to an AMI ID on launch.</p>
   *          <p>To reference a public parameter:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>public-parameter</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To reference a parameter stored in the same account:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name:version-number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name:label</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To reference a parameter shared from another Amazon Web Services account:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN:version-number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN:label</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems Manager parameter instead of an AMI ID</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   *          <note>
   *             <p>This parameter is only available for fleets of type <code>instant</code>. For fleets
   *             of type <code>maintain</code> and <code>request</code>, you must specify the AMI ID in
   *             the launch template.</p>
   *          </note>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The block device mappings, which define the EBS volumes and instance store volumes to
   *          attach to the instance at launch.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block device mappings
   *             for volumes on Amazon EC2 instances</a> in the <i>Amazon EC2 User
   *          Guide</i>.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMappingResponse[] | undefined;
}

/**
 * <p>Describes a launch template and overrides.</p>
 * @public
 */
export interface LaunchTemplateAndOverridesResponse {
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
  Overrides?: FleetLaunchTemplateOverrides | undefined;
}

/**
 * <p>Describes the instances that could not be launched by the fleet.</p>
 * @public
 */
export interface CreateFleetError {
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
   *          information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message that describes why the instance could not be launched. For more
   *          information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Describes the instances that were launched by the fleet.</p>
 * @public
 */
export interface CreateFleetInstance {
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
 * @public
 */
export interface CreateFleetResult {
  /**
   * <p>The ID of the EC2 Fleet.</p>
   * @public
   */
  FleetId?: string | undefined;

  /**
   * <p>Information about the instances that could not be launched by the fleet. Supported only for
   *             fleets of type <code>instant</code>.</p>
   * @public
   */
  Errors?: CreateFleetError[] | undefined;

  /**
   * <p>Information about the instances that were launched by the fleet. Supported only for
   *             fleets of type <code>instant</code>.</p>
   * @public
   */
  Instances?: CreateFleetInstance[] | undefined;
}

/**
 * <p>Describes the destination options for a flow log.</p>
 * @public
 */
export interface DestinationOptionsRequest {
  /**
   * <p>The format for the flow log. The default is <code>plain-text</code>.</p>
   * @public
   */
  FileFormat?: DestinationFileFormat | undefined;

  /**
   * <p>Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3.
   *             The default is <code>false</code>.</p>
   * @public
   */
  HiveCompatiblePartitions?: boolean | undefined;

  /**
   * <p>Indicates whether to partition the flow log per hour. This reduces the cost and response
   *             time for queries. The default is <code>false</code>.</p>
   * @public
   */
  PerHourPartition?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateFlowLogsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The ARN of the IAM role that allows Amazon EC2 to publish flow logs to the log destination.</p>
   *          <p>This parameter is required if the destination type is <code>cloud-watch-logs</code>,
   *             or if the destination type is <code>kinesis-data-firehose</code> and the delivery stream
   *             and the resources to monitor are in different accounts.</p>
   * @public
   */
  DeliverLogsPermissionArn?: string | undefined;

  /**
   * <p>The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.</p>
   * @public
   */
  DeliverCrossAccountRole?: string | undefined;

  /**
   * <p>The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.</p>
   *          <p>This parameter is valid only if the destination type is <code>cloud-watch-logs</code>.</p>
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * <p>The IDs of the resources to monitor. For example, if the resource type is
   *                 <code>VPC</code>, specify the IDs of the VPCs.</p>
   *          <p>Constraints: Maximum of 25 for transit gateway resource types. Maximum of 1000 for the
   *             other resource types.</p>
   * @public
   */
  ResourceIds: string[] | undefined;

  /**
   * <p>The type of resource to monitor.</p>
   * @public
   */
  ResourceType: FlowLogsResourceType | undefined;

  /**
   * <p>The type of traffic to monitor (accepted traffic, rejected traffic, or all traffic).
   *             This parameter is not supported for transit gateway resource types. It is required for
   *             the other resource types.</p>
   * @public
   */
  TrafficType?: TrafficType | undefined;

  /**
   * <p>The type of destination for the flow log data.</p>
   *          <p>Default: <code>cloud-watch-logs</code>
   *          </p>
   * @public
   */
  LogDestinationType?: LogDestinationType | undefined;

  /**
   * <p>The destination for the flow log data. The meaning of this parameter depends on the destination type.</p>
   *          <ul>
   *             <li>
   *                <p>If the destination type is <code>cloud-watch-logs</code>, specify the ARN of a CloudWatch Logs log group. For example:</p>
   *                <p>arn:aws:logs:<i>region</i>:<i>account_id</i>:log-group:<i>my_group</i>
   *                </p>
   *                <p>Alternatively, use the <code>LogGroupName</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>If the destination type is <code>s3</code>, specify the ARN of an S3 bucket. For example:</p>
   *                <p>arn:aws:s3:::<i>my_bucket</i>/<i>my_subfolder</i>/</p>
   *                <p>The subfolder is optional. Note that you can't use <code>AWSLogs</code> as a subfolder name.</p>
   *             </li>
   *             <li>
   *                <p>If the destination type is <code>kinesis-data-firehose</code>, specify the ARN of a Kinesis Data Firehose delivery stream. For example:</p>
   *                <p>arn:aws:firehose:<i>region</i>:<i>account_id</i>:deliverystream:<i>my_stream</i>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  LogDestination?: string | undefined;

  /**
   * <p>The fields to include in the flow log record. List the fields in the order in which
   *             they should appear. If you omit this parameter, the flow log is created using the
   *             default format. If you specify this parameter, you must include at least one
   *             field. For more information about the available fields, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-log-records.html">Flow log records</a>
   *             in the <i>Amazon VPC User Guide</i> or <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-flow-logs.html#flow-log-records">Transit Gateway Flow Log
   *                     records</a> in the <i>Amazon Web Services Transit Gateway Guide</i>.</p>
   *          <p>Specify the fields using the <code>$\{field-id\}</code> format, separated by spaces.</p>
   * @public
   */
  LogFormat?: string | undefined;

  /**
   * <p>The tags to apply to the flow logs.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record.
   *             The possible values are 60 seconds (1 minute) or 600 seconds (10 minutes).
   *             This parameter must be 60 seconds for transit gateway resource types.</p>
   *          <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html">Nitro-based
   *                 instance</a>, the aggregation interval is always 60 seconds or less, regardless
   *             of the value that you specify.</p>
   *          <p>Default: 600</p>
   * @public
   */
  MaxAggregationInterval?: number | undefined;

  /**
   * <p>The destination options.</p>
   * @public
   */
  DestinationOptions?: DestinationOptionsRequest | undefined;
}

/**
 * @public
 */
export interface CreateFlowLogsResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The IDs of the flow logs.</p>
   * @public
   */
  FlowLogIds?: string[] | undefined;

  /**
   * <p>Information about the flow logs that could not be created successfully.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * <p>Describes a storage location in Amazon S3.</p>
 * @public
 */
export interface StorageLocation {
  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>The key.</p>
   * @public
   */
  Key?: string | undefined;
}

/**
 * @public
 */
export interface CreateFpgaImageRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball.</p>
   * @public
   */
  InputStorageLocation: StorageLocation | undefined;

  /**
   * <p>The location in Amazon S3 for the output logs.</p>
   * @public
   */
  LogsStorageLocation?: StorageLocation | undefined;

  /**
   * <p>A description for the AFI.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A name for the AFI.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *       	For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags to apply to the FPGA image during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateFpgaImageResult {
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
}

/**
 * <p>Describes a block device for an EBS volume.</p>
 * @public
 */
export interface EbsBlockDevice {
  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#preserving-volumes-on-termination">Preserving Amazon EBS volumes on instance termination</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes,
   *             this represents the number of IOPS that are provisioned for the volume. For <code>gp2</code>
   *             volumes, this represents the baseline performance of the volume and the rate at which
   *             the volume accumulates I/O credits for bursting.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000 - 80,000 IOPS</p>
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
   * <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">instances
   * built on the Nitro System</a>. On other instances, you can achieve performance up to 32,000 IOPS.</p>
   *          <p>This parameter is required for <code>io1</code> and <code>io2</code> volumes. The default for <code>gp3</code> volumes
   *             is 3,000 IOPS.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume
   *             size. If you specify a snapshot, the default is the snapshot size. You can specify a
   *             volume size that is equal to or larger than the snapshot size.</p>
   *          <p>The following are the supported sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code>: 1 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 1 - 65,536 GiB</p>
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
  VolumeSize?: number | undefined;

  /**
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html">Amazon EBS volume types</a> in the
   *                 <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * <p>Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key
   *             to use for EBS encryption.</p>
   *          <p>This parameter is only supported on <code>BlockDeviceMapping</code> objects called by
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html">RequestSpotFleet</a>,
   *             and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a>.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   *          <p>This parameter is valid only for <code>gp3</code> volumes.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 2,000.</p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * <p>The ARN of the Outpost on which the snapshot is stored.</p>
   *          <p>This parameter is not supported when using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html">CreateImage</a>.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The Availability Zone where the EBS volume will be created (for example,
   *             <code>us-east-1a</code>).</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> can be specified,
   *             but not both. If neither is specified, Amazon EC2 automatically selects an Availability Zone within
   *             the Region.</p>
   *          <p>This parameter is not supported when using
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html">CreateFleet</a>,
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html">CreateImage</a>,
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html">DescribeImages</a>,
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html">RequestSpotFleet</a>,
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a>, and
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Indicates whether the encryption state of an EBS volume is changed while being
   *             restored from a backing snapshot. The effect of setting the encryption state to <code>true</code> depends on
   * the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html#encryption-parameters">Amazon EBS encryption</a> in the <i>Amazon EBS User Guide</i>.</p>
   *          <p>In no case can you remove encryption from an encrypted volume.</p>
   *          <p>Encrypted volumes can only be attached to instances that support Amazon EBS encryption. For
   *             more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption-requirements.html#ebs-encryption_supported_instances">Supported instance types</a>.</p>
   *          <p>This parameter is not returned by <a>DescribeImageAttribute</a>.</p>
   *          <p>For <a>CreateImage</a> and <a>RegisterImage</a>, whether you can
   *             include this parameter, and the allowed values differ depending on the type of block
   *             device mapping you are creating.</p>
   *          <ul>
   *             <li>
   *                <p>If you are creating a block device mapping for a <b>new (empty)
   *                     volume</b>, you can include this parameter, and specify either <code>true</code>
   *                     for an encrypted volume, or <code>false</code> for an unencrypted volume. If you omit
   *                     this parameter, it defaults to <code>false</code> (unencrypted).</p>
   *             </li>
   *             <li>
   *                <p>If you are creating a block device mapping from an <b>existing
   *                     encrypted or unencrypted snapshot</b>, you must omit this parameter. If you
   *                     include this parameter, the request will fail, regardless of the value that you
   *                     specify.</p>
   *             </li>
   *             <li>
   *                <p>If you are creating a block device mapping from an <b>existing
   *                     unencrypted volume</b>, you can include this parameter, but you must specify
   *                     <code>false</code>. If you specify <code>true</code>, the request will fail. In this
   *                     case, we recommend that you omit the parameter.</p>
   *             </li>
   *             <li>
   *                <p>If you are creating a block device mapping from an <b>existing
   *                     encrypted volume</b>, you can include this parameter, and specify either
   *                     <code>true</code> or <code>false</code>. However, if you specify <code>false</code>,
   *                     the parameter is ignored and the block device mapping is always encrypted. In this
   *                     case, we recommend that you omit the parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot
   *             blocks from Amazon S3 to the volume. This is also known as <i>volume
   *                 initialization</i>. Specifying a volume initialization rate ensures that the volume is initialized
   *             at a predictable and consistent rate after creation. For more information, see
   *             <a href="https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html">Initialize
   *                 Amazon EBS volumes</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>This parameter is supported only for volumes created from snapshots. Omit this parameter
   *             if:</p>
   *          <ul>
   *             <li>
   *                <p>You want to create the volume using fast snapshot restore. You must specify a snapshot
   *                     that is enabled for fast snapshot restore. In this case, the volume is fully initialized at
   *                     creation.</p>
   *                <note>
   *                   <p>If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate,
   *                         the volume will be initialized at the specified rate instead of fast snapshot restore.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>You want to create a volume that is initialized at the default rate.</p>
   *             </li>
   *          </ul>
   *          <p>This parameter is not supported when using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html">CreateImage</a>
   *             and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html">DescribeImages</a>.</p>
   *          <p>Valid range: 100 - 300 MiB/s</p>
   * @public
   */
  VolumeInitializationRate?: number | undefined;

  /**
   * <p>The ID of the Availability Zone where the EBS volume will be created (for example,
   *             <code>use1-az1</code>).</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> can be specified,
   *             but not both. If neither is specified, Amazon EC2 automatically selects an Availability Zone within
   *             the Region.</p>
   *          <p>This parameter is not supported when using
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html">CreateFleet</a>,
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html">CreateImage</a>,
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html">DescribeImages</a>,
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html">RequestSpotFleet</a>,
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a>, and
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * <p>Describes a block device mapping, which defines the EBS volumes and instance store
 *             volumes to attach to an instance at launch.</p>
 * @public
 */
export interface BlockDeviceMapping {
  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   * @public
   */
  Ebs?: EbsBlockDevice | undefined;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string. When this
   *             property is specified, the device is removed from the block device mapping regardless of
   *             the assigned value.</p>
   * @public
   */
  NoDevice?: string | undefined;

  /**
   * <p>The device name. For available device names, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html">Device names for volumes</a>.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The virtual device name (<code>ephemeral</code>N). Instance store volumes are numbered
   *             starting from 0. An instance type with 2 available instance store volumes can specify
   *             mappings for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of
   *             available instance store volumes depends on the instance type. After you connect to the
   *             instance, you must mount the volume.</p>
   *          <p>NVMe instance store volumes are automatically enumerated and assigned a device name.
   *             Including them in your block device mapping has no effect.</p>
   *          <p>Constraints: For M3 instances, you must specify instance store volumes in the block
   *             device mapping for the instance. When you launch an M3 instance, we ignore any instance
   *             store volumes specified in the block device mapping for the AMI.</p>
   * @public
   */
  VirtualName?: string | undefined;
}

/**
 * @public
 */
export interface CreateImageRequest {
  /**
   * <p>The tags to apply to the AMI and snapshots on creation. You can tag the AMI, the
   *       snapshots, or both.</p>
   *          <ul>
   *             <li>
   *                <p>To tag the AMI, the value for <code>ResourceType</code> must be
   *           <code>image</code>.</p>
   *             </li>
   *             <li>
   *                <p>To tag the snapshots that are created of the root volume and of other Amazon EBS volumes
   *           that are attached to the instance, the value for <code>ResourceType</code> must be
   *             <code>snapshot</code>. The same tag is applied to all of the snapshots that are
   *           created.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify other values for <code>ResourceType</code>, the request fails.</p>
   *          <p>To tag an AMI or snapshot after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>. </p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <note>
   *             <p>Only supported for instances in Local Zones. If the source instance is not in a Local
   *         Zone, omit this parameter.</p>
   *          </note>
   *          <p>The Amazon S3 location where the snapshots will be stored.</p>
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
   *          <p>Default: <code>regional</code>
   *          </p>
   * @public
   */
  SnapshotLocation?: SnapshotLocationEnum | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A name for the new image.</p>
   *          <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces
   *       ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or
   *       underscores(_)</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for the new image.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether or not the instance should be automatically rebooted before creating the
   *       image. Specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code> - The instance is not rebooted before creating the image. This
   *           creates crash-consistent snapshots that include only the data that has been written to the
   *           volumes at the time the snapshots are created. Buffered data and data in memory that has
   *           not yet been written to the volumes is not included in the snapshots.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code> - The instance is rebooted before creating the image. This ensures
   *           that all buffered data and data in memory is written to the volumes before the snapshots
   *           are created.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  NoReboot?: boolean | undefined;

  /**
   * <p>The block device mappings.</p>
   *          <p>When using the CreateImage action:</p>
   *          <ul>
   *             <li>
   *                <p>You can't change the volume size using the VolumeSize parameter. If you want a
   *           different volume size, you must first change the volume size of the source
   *           instance.</p>
   *             </li>
   *             <li>
   *                <p>You can't modify the encryption status of existing volumes or snapshots. To create an
   *           AMI with volumes or snapshots that have a different encryption status (for example, where
   *           the source volume and snapshots are unencrypted, and you want to create an AMI with
   *           encrypted volumes or snapshots), copy the image instead.</p>
   *             </li>
   *             <li>
   *                <p>The only option that can be changed for existing mappings or snapshots is
   *             <code>DeleteOnTermination</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;
}

/**
 * @public
 */
export interface CreateImageResult {
  /**
   * <p>The ID of the new AMI.</p>
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * <p>The options that affect the scope of the report.</p>
 * @public
 */
export interface ImageUsageResourceTypeOptionRequest {
  /**
   * <p>The name of the option.</p>
   *          <p>Valid value: <code>version-depth</code> - The number of launch template versions to
   *       check.</p>
   * @public
   */
  OptionName?: string | undefined;

  /**
   * <p>A value for the specified option.</p>
   *          <p>Valid values: Integers between <code>1</code> and <code>10000</code>
   *          </p>
   *          <p>Default: <code>20</code>
   *          </p>
   * @public
   */
  OptionValues?: string[] | undefined;
}

/**
 * <p>A resource type to include in the report. Associated options can also be specified if the
 *       resource type is a launch template.</p>
 * @public
 */
export interface ImageUsageResourceTypeRequest {
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
  ResourceTypeOptions?: ImageUsageResourceTypeOptionRequest[] | undefined;
}

/**
 * @public
 */
export interface CreateImageUsageReportRequest {
  /**
   * <p>The ID of the image to report on.</p>
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

  /**
   * <p>The resource types to include in the report.</p>
   * @public
   */
  ResourceTypes: ImageUsageResourceTypeRequest[] | undefined;

  /**
   * <p>The Amazon Web Services account IDs to include in the report. To include all accounts, omit this
   *       parameter.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags to apply to the report on creation. The <code>ResourceType</code> must be set to
   *       <code>image-usage-report</code>; any other value will cause the report creation to
   *       fail.</p>
   *          <p>To tag a report after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateImageUsageReportResult {
  /**
   * <p>The ID of the report.</p>
   * @public
   */
  ReportId?: string | undefined;
}

/**
 * @public
 */
export interface CreateInstanceConnectEndpointRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the subnet in which to create the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>One or more security groups to associate with the endpoint. If you don't specify a security group,
   *             the default security group for your VPC will be associated with the endpoint.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Indicates whether the client IP address is preserved as the source. The following are the possible values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code> - Use the client IP address as the source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code> - Use the network interface IP address as the source.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *                <code>PreserveClientIp</code> is only supported on IPv4 EC2 Instance Connect
   *                 Endpoints. To use <code>PreserveClientIp</code>, the value for
   *                     <code>IpAddressType</code> must be <code>ipv4</code>.</p>
   *          </note>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  PreserveClientIp?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags to apply to the EC2 Instance Connect Endpoint during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The IP address type of the endpoint.</p>
   *          <p>If no value is specified, the default value is determined by the IP address type of
   *             the subnet:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>dualstack</code> - If the subnet has both IPv4 and IPv6 CIDRs</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv4</code> - If the subnet has only IPv4 CIDRs</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6</code> - If the subnet has only IPv6 CIDRs</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *                <code>PreserveClientIp</code> is only supported on IPv4 EC2 Instance Connect
   *                 Endpoints. To use <code>PreserveClientIp</code>, the value for
   *                 <code>IpAddressType</code> must be <code>ipv4</code>.</p>
   *          </note>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;
}

/**
 * <p>The DNS names of the endpoint.</p>
 * @public
 */
export interface InstanceConnectEndpointDnsNames {
  /**
   * <p>The DNS name of the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  DnsName?: string | undefined;

  /**
   * <p>The Federal Information Processing Standards (FIPS) compliant DNS name of the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  FipsDnsName?: string | undefined;
}

/**
 * <p>The public DNS names of the endpoint, including IPv4-only and dualstack DNS
 *             names.</p>
 * @public
 */
export interface InstanceConnectEndpointPublicDnsNames {
  /**
   * <p>The IPv4-only DNS name of the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  Ipv4?: InstanceConnectEndpointDnsNames | undefined;

  /**
   * <p>The dualstack DNS name of the EC2 Instance Connect Endpoint. A dualstack DNS name supports connections from both IPv4 and IPv6 clients.</p>
   * @public
   */
  Dualstack?: InstanceConnectEndpointDnsNames | undefined;
}

/**
 * <p>Describes an EC2 Instance Connect Endpoint.</p>
 * @public
 */
export interface Ec2InstanceConnectEndpoint {
  /**
   * <p>The ID of the Amazon Web Services account that created the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  InstanceConnectEndpointId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  InstanceConnectEndpointArn?: string | undefined;

  /**
   * <p>The current state of the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  State?: Ec2InstanceConnectEndpointState | undefined;

  /**
   * <p>The message for the current state of the EC2 Instance Connect Endpoint.
   *         Can include a failure message.</p>
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * <p>The DNS name of the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  DnsName?: string | undefined;

  /**
   * <p>The Federal Information Processing Standards (FIPS) compliant DNS name of the EC2
   *             Instance Connect Endpoint.</p>
   * @public
   */
  FipsDnsName?: string | undefined;

  /**
   * <p>The ID of the elastic network interface that Amazon EC2 automatically created when creating the EC2
   *             Instance Connect Endpoint.</p>
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>The ID of the VPC in which the EC2 Instance Connect Endpoint was created.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The Availability Zone of the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The date and time that the EC2 Instance Connect Endpoint was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The ID of the subnet in which the EC2 Instance Connect Endpoint was created.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>Indicates whether your client's IP address is preserved as the source when you connect to a resource.
   *             The following are the possible values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code> - Use the IP address of the client. Your instance must have an IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code> - Use the IP address of the network interface.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  PreserveClientIp?: boolean | undefined;

  /**
   * <p>The security groups associated with the endpoint. If you didn't specify a security group,
   *             the default security group for your VPC is associated with the endpoint.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The tags assigned to the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The IP address type of the endpoint.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The public DNS names of the endpoint.</p>
   * @public
   */
  PublicDnsNames?: InstanceConnectEndpointPublicDnsNames | undefined;

  /**
   * <p>The ID of the Availability Zone of the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * @public
 */
export interface CreateInstanceConnectEndpointResult {
  /**
   * <p>Information about the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  InstanceConnectEndpoint?: Ec2InstanceConnectEndpoint | undefined;

  /**
   * <p>Unique, case-sensitive idempotency token provided by the client in the the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>The start day and time and the end day and time of the time range, in UTC.</p>
 * @public
 */
export interface InstanceEventWindowTimeRangeRequest {
  /**
   * <p>The day on which the time range begins.</p>
   * @public
   */
  StartWeekDay?: WeekDay | undefined;

  /**
   * <p>The hour when the time range begins.</p>
   * @public
   */
  StartHour?: number | undefined;

  /**
   * <p>The day on which the time range ends.</p>
   * @public
   */
  EndWeekDay?: WeekDay | undefined;

  /**
   * <p>The hour when the time range ends.</p>
   * @public
   */
  EndHour?: number | undefined;
}

/**
 * @public
 */
export interface CreateInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The name of the event window.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time range for the event window. If you specify a time range, you can't specify a
   *          cron expression.</p>
   * @public
   */
  TimeRanges?: InstanceEventWindowTimeRangeRequest[] | undefined;

  /**
   * <p>The cron expression for the event window, for example, <code>* 0-4,20-23 * * 1,5</code>.
   *          If you specify a cron expression, you can't specify a time range.</p>
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
   *                   <code>0-4,20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>Each hour range must be >= 2 hours, for example, <code>0-2</code> or
   *                   <code>20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>The event window must be >= 4 hours. The combined total time ranges in the event
   *                window must be >= 4 hours.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about cron expressions, see <a href="https://en.wikipedia.org/wiki/Cron">cron</a> on the <i>Wikipedia
   *             website</i>.</p>
   * @public
   */
  CronExpression?: string | undefined;

  /**
   * <p>The tags to apply to the event window.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   * @public
   */
  InstanceEventWindow?: InstanceEventWindow | undefined;
}

/**
 * <p>Describes an export instance task.</p>
 * @public
 */
export interface ExportToS3TaskSpecification {
  /**
   * <p>The format for the exported image.</p>
   * @public
   */
  DiskImageFormat?: DiskImageFormat | undefined;

  /**
   * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
   *    exported.</p>
   * @public
   */
  ContainerFormat?: ContainerFormat | undefined;

  /**
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and have
   *    an access control list (ACL) attached that specifies the Region-specific canonical account ID for
   *    the <code>Grantee</code>. For more information about the ACL to your S3 bucket, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html#vmexport-prerequisites">Prerequisites</a> in the VM Import/Export User Guide.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The image is written to a single object in the Amazon S3 bucket at the S3 key s3prefix +
   *    exportTaskId + '.' + diskImageFormat.</p>
   * @public
   */
  S3Prefix?: string | undefined;
}

/**
 * @public
 */
export interface CreateInstanceExportTaskRequest {
  /**
   * <p>The tags to apply to the export instance task during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A description for the conversion task or the resource being exported. The maximum length is 255 characters.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The target virtualization environment.</p>
   * @public
   */
  TargetEnvironment: ExportEnvironment | undefined;

  /**
   * <p>The format and location for an export instance task.</p>
   * @public
   */
  ExportToS3Task: ExportToS3TaskSpecification | undefined;
}

/**
 * <p>Describes the format and location for the export task.</p>
 * @public
 */
export interface ExportToS3Task {
  /**
   * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
   *    exported.</p>
   * @public
   */
  ContainerFormat?: ContainerFormat | undefined;

  /**
   * <p>The format for the exported image.</p>
   * @public
   */
  DiskImageFormat?: DiskImageFormat | undefined;

  /**
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and have
   *    an access control list (ACL) attached that specifies the Region-specific canonical account ID for
   *    the <code>Grantee</code>. For more information about the ACL to your S3 bucket, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html#vmexport-prerequisites">Prerequisites</a> in the VM Import/Export User Guide.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The encryption key for your S3 bucket.</p>
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * <p>Describes an instance to export.</p>
 * @public
 */
export interface InstanceExportDetails {
  /**
   * <p>The ID of the resource being exported.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The target virtualization environment.</p>
   * @public
   */
  TargetEnvironment?: ExportEnvironment | undefined;
}

/**
 * <p>Describes an export instance task.</p>
 * @public
 */
export interface ExportTask {
  /**
   * <p>A description of the resource being exported.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the export task.</p>
   * @public
   */
  ExportTaskId?: string | undefined;

  /**
   * <p>Information about the export task.</p>
   * @public
   */
  ExportToS3Task?: ExportToS3Task | undefined;

  /**
   * <p>Information about the instance to export.</p>
   * @public
   */
  InstanceExportDetails?: InstanceExportDetails | undefined;

  /**
   * <p>The state of the export task.</p>
   * @public
   */
  State?: ExportTaskState | undefined;

  /**
   * <p>The status message related to the export task.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The tags for the export task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInstanceExportTaskResult {
  /**
   * <p>Information about the export instance task.</p>
   * @public
   */
  ExportTask?: ExportTask | undefined;
}

/**
 * @public
 */
export interface CreateInternetGatewayRequest {
  /**
   * <p>The tags to assign to the internet gateway.</p>
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
 * <p>Describes an internet gateway.</p>
 * @public
 */
export interface InternetGateway {
  /**
   * <p>Any VPCs attached to the internet gateway.</p>
   * @public
   */
  Attachments?: InternetGatewayAttachment[] | undefined;

  /**
   * <p>The ID of the internet gateway.</p>
   * @public
   */
  InternetGatewayId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the internet gateway.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Any tags assigned to the internet gateway.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInternetGatewayResult {
  /**
   * <p>Information about the internet gateway.</p>
   * @public
   */
  InternetGateway?: InternetGateway | undefined;
}

/**
 * @public
 */
export interface CreateIpamRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A description for the IPAM.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions. </p>
   *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   * @public
   */
  OperatingRegions?: AddIpamOperatingRegion[] | undefined;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>IPAM is offered in a Free Tier and an Advanced Tier. For more information about the features available in each tier and the costs associated with the tiers, see <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing > IPAM tab</a>.</p>
   * @public
   */
  Tier?: IpamTier | undefined;

  /**
   * <p>Enable this option to use your own GUA ranges as private IPv6 addresses. This option is disabled by default.</p>
   * @public
   */
  EnablePrivateGua?: boolean | undefined;

  /**
   * <p>A metered account is an Amazon Web Services account that is charged for active IP addresses managed in IPAM. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/ipam-enable-cost-distro.html">Enable cost distribution</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   *          <p>Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ipam-owner</code> (default): The Amazon Web Services account which owns the IPAM is charged for all active IP addresses managed in IPAM.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-owner</code>: The Amazon Web Services account that owns the IP address is charged for the active IP address.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MeteredAccount?: IpamMeteredAccount | undefined;
}

/**
 * <p>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
 *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @public
 */
export interface IpamOperatingRegion {
  /**
   * <p>The name of the operating Region.</p>
   * @public
   */
  RegionName?: string | undefined;
}

/**
 * <p>IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @public
 */
export interface Ipam {
  /**
   * <p>The Amazon Web Services account ID of the owner of the IPAM.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the IPAM.</p>
   * @public
   */
  IpamId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IPAM.</p>
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the IPAM.</p>
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * <p>The ID of the IPAM's default public scope.</p>
   * @public
   */
  PublicDefaultScopeId?: string | undefined;

  /**
   * <p>The ID of the IPAM's default private scope.</p>
   * @public
   */
  PrivateDefaultScopeId?: string | undefined;

  /**
   * <p>The number of scopes in the IPAM. The scope quota is 5. For more information on quotas, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas in IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   * @public
   */
  ScopeCount?: number | undefined;

  /**
   * <p>The description for the IPAM.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  OperatingRegions?: IpamOperatingRegion[] | undefined;

  /**
   * <p>The state of the IPAM.</p>
   * @public
   */
  State?: IpamState | undefined;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The IPAM's default resource discovery ID.</p>
   * @public
   */
  DefaultResourceDiscoveryId?: string | undefined;

  /**
   * <p>The IPAM's default resource discovery association ID.</p>
   * @public
   */
  DefaultResourceDiscoveryAssociationId?: string | undefined;

  /**
   * <p>The IPAM's resource discovery association count.</p>
   * @public
   */
  ResourceDiscoveryAssociationCount?: number | undefined;

  /**
   * <p>The state message.</p>
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * <p>IPAM is offered in a Free Tier and an Advanced Tier. For more information about the features available in each tier and the costs associated with the tiers, see <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing > IPAM tab</a>.</p>
   * @public
   */
  Tier?: IpamTier | undefined;

  /**
   * <p>Enable this option to use your own GUA ranges as private IPv6 addresses. This option is disabled by default.</p>
   * @public
   */
  EnablePrivateGua?: boolean | undefined;

  /**
   * <p>A metered account is an Amazon Web Services account that is charged for active IP addresses managed in IPAM. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/ipam-enable-cost-distro.html">Enable cost distribution</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   *          <p>Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ipam-owner</code> (default): The Amazon Web Services account which owns the IPAM is charged for all active IP addresses managed in IPAM.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-owner</code>: The Amazon Web Services account that owns the IP address is charged for the active IP address.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MeteredAccount?: IpamMeteredAccount | undefined;
}

/**
 * @public
 */
export interface CreateIpamResult {
  /**
   * <p>Information about the IPAM created.</p>
   * @public
   */
  Ipam?: Ipam | undefined;
}

/**
 * @public
 */
export interface CreateIpamExternalResourceVerificationTokenRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM that will create the token.</p>
   * @public
   */
  IpamId: string | undefined;

  /**
   * <p>Token tags.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>A verification token is an Amazon Web Services-generated random value that you can use to prove ownership of an external resource. For example, you can use a verification token to validate that you control a public IP address range when you bring an IP address range to Amazon Web Services (BYOIP).
 * </p>
 * @public
 */
export interface IpamExternalResourceVerificationToken {
  /**
   * <p>The ID of the token.</p>
   * @public
   */
  IpamExternalResourceVerificationTokenId?: string | undefined;

  /**
   * <p>Token ARN.</p>
   * @public
   */
  IpamExternalResourceVerificationTokenArn?: string | undefined;

  /**
   * <p>The ID of the IPAM that created the token.</p>
   * @public
   */
  IpamId?: string | undefined;

  /**
   * <p>ARN of the IPAM that created the token.</p>
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * <p>Region of the IPAM that created the token.</p>
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * <p>Token value.</p>
   * @public
   */
  TokenValue?: string | undefined;

  /**
   * <p>Token name.</p>
   * @public
   */
  TokenName?: string | undefined;

  /**
   * <p>Token expiration.</p>
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * <p>Token status.</p>
   * @public
   */
  Status?: TokenState | undefined;

  /**
   * <p>Token tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Token state.</p>
   * @public
   */
  State?: IpamExternalResourceVerificationTokenState | undefined;
}

/**
 * @public
 */
export interface CreateIpamExternalResourceVerificationTokenResult {
  /**
   * <p>The verification token.</p>
   * @public
   */
  IpamExternalResourceVerificationToken?: IpamExternalResourceVerificationToken | undefined;
}

/**
 * @public
 */
export interface CreateIpamPolicyRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The tags to assign to the IPAM policy.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The ID of the IPAM for which you're creating the policy.</p>
   * @public
   */
  IpamId: string | undefined;
}

/**
 * <p>Information about an IPAM policy.</p>
 *          <p>An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.</p>
 * @public
 */
export interface IpamPolicy {
  /**
   * <p>The account ID that owns the IPAM policy.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the IPAM policy.</p>
   * @public
   */
  IpamPolicyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IPAM policy.</p>
   * @public
   */
  IpamPolicyArn?: string | undefined;

  /**
   * <p>The Region of the IPAM policy.</p>
   * @public
   */
  IpamPolicyRegion?: string | undefined;

  /**
   * <p>The state of the IPAM policy.</p>
   * @public
   */
  State?: IpamPolicyState | undefined;

  /**
   * <p>A message about the state of the IPAM policy.</p>
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * <p>The tags assigned to the IPAM policy.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the IPAM this policy belongs to.</p>
   * @public
   */
  IpamId?: string | undefined;
}

/**
 * @public
 */
export interface CreateIpamPolicyResult {
  /**
   * <p>Information about the created IPAM policy.</p>
   *          <p>An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.</p>
   * @public
   */
  IpamPolicy?: IpamPolicy | undefined;
}

/**
 * <p>A tag on an IPAM resource.</p>
 * @public
 */
export interface RequestIpamResourceTag {
  /**
   * <p>The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value for the tag.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The resource used to provision CIDRs to a resource planning pool.</p>
 * @public
 */
export interface IpamPoolSourceResourceRequest {
  /**
   * <p>The source resource ID.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The source resource type.</p>
   * @public
   */
  ResourceType?: IpamPoolSourceResourceType | undefined;

  /**
   * <p>The source resource Region.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>The source resource owner.</p>
   * @public
   */
  ResourceOwner?: string | undefined;
}

/**
 * @public
 */
export interface CreateIpamPoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the scope in which you would like to create the IPAM pool.</p>
   * @public
   */
  IpamScopeId: string | undefined;

  /**
   * <p>The locale for the pool should be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region where you want this IPAM pool to be available for allocations.</p>
   *             </li>
   *             <li>
   *                <p>The network border group for an Amazon Web Services Local Zone where you want this IPAM pool to be available for allocations (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail">supported Local Zones</a>). This option is only available for IPAM IPv4 pools in the public scope.</p>
   *             </li>
   *          </ul>
   *          <p>Possible values: Any Amazon Web Services Region or supported Amazon Web Services Local Zone. Default is <code>none</code> and means any locale.</p>
   * @public
   */
  Locale?: string | undefined;

  /**
   * <p>The ID of the source IPAM pool. Use this option to create a pool within an existing pool. Note that the CIDR you provision for the pool within the source pool must be available in the source pool's CIDR range.</p>
   * @public
   */
  SourceIpamPoolId?: string | undefined;

  /**
   * <p>A description for the IPAM pool.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The IP protocol assigned to this IPAM pool. You must choose either IPv4 or IPv6 protocol for a pool.</p>
   * @public
   */
  AddressFamily: AddressFamily | undefined;

  /**
   * <p>If selected, IPAM will continuously look for resources within the CIDR range of this pool
   *          and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for
   *          these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import
   *          a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently
   *          marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM
   *          discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.
   *       </p>
   *          <p>A locale must be set on the pool for this feature to work.</p>
   * @public
   */
  AutoImport?: boolean | undefined;

  /**
   * <p>Determines if the pool is publicly advertisable. The request can only contain <code>PubliclyAdvertisable</code> if <code>AddressFamily</code> is <code>ipv6</code> and <code>PublicIpSource</code> is <code>byoip</code>.</p>
   * @public
   */
  PubliclyAdvertisable?: boolean | undefined;

  /**
   * <p>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be
   *          less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   * @public
   */
  AllocationMinNetmaskLength?: number | undefined;

  /**
   * <p>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be
   *          greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   * @public
   */
  AllocationMaxNetmaskLength?: number | undefined;

  /**
   * <p>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here,
   *          new allocations will default to 10.0.0.0/16.</p>
   * @public
   */
  AllocationDefaultNetmaskLength?: number | undefined;

  /**
   * <p>Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.</p>
   * @public
   */
  AllocationResourceTags?: RequestIpamResourceTag[] | undefined;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.</p>
   * @public
   */
  AwsService?: IpamPoolAwsService | undefined;

  /**
   * <p>The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is <code>byoip</code>. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/intro-create-ipv6-pools.html">Create IPv6 pools</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *          By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool if PublicIpSource is <code>amazon</code>. For information on increasing the default limit, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html"> Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  PublicIpSource?: IpamPoolPublicIpSource | undefined;

  /**
   * <p>The resource used to provision CIDRs to a resource planning pool.</p>
   * @public
   */
  SourceResource?: IpamPoolSourceResourceRequest | undefined;
}

/**
 * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
 *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
 * @public
 */
export interface IpamResourceTag {
  /**
   * <p>The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The resource used to provision CIDRs to a resource planning pool.</p>
 * @public
 */
export interface IpamPoolSourceResource {
  /**
   * <p>The source resource ID.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The source resource type.</p>
   * @public
   */
  ResourceType?: IpamPoolSourceResourceType | undefined;

  /**
   * <p>The source resource Region.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>The source resource owner.</p>
   * @public
   */
  ResourceOwner?: string | undefined;
}

/**
 * <p>In IPAM, a pool is a collection of contiguous IP addresses CIDRs. Pools enable you to organize your IP addresses according to your routing and security needs. For example, if you have separate routing and security needs for development and production applications, you can create a pool for each.</p>
 * @public
 */
export interface IpamPool {
  /**
   * <p>The Amazon Web Services account ID of the owner of the IPAM pool.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the IPAM pool.</p>
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * <p>The ID of the source IPAM pool. You can use this option to create an IPAM pool within an existing source pool.</p>
   * @public
   */
  SourceIpamPoolId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IPAM pool.</p>
   * @public
   */
  IpamPoolArn?: string | undefined;

  /**
   * <p>The ARN of the scope of the IPAM pool.</p>
   * @public
   */
  IpamScopeArn?: string | undefined;

  /**
   * <p>In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.</p>
   * @public
   */
  IpamScopeType?: IpamScopeType | undefined;

  /**
   * <p>The ARN of the IPAM.</p>
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the IPAM pool.</p>
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * <p>The locale of the IPAM pool.</p>
   *          <p>The locale for the pool should be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region where you want this IPAM pool to be available for allocations.</p>
   *             </li>
   *             <li>
   *                <p>The network border group for an Amazon Web Services Local Zone where you want this IPAM pool to be available for allocations (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail">supported Local Zones</a>). This option is only available for IPAM IPv4 pools in the public scope.</p>
   *             </li>
   *          </ul>
   *          <p>If you choose an Amazon Web Services Region for locale that has not been configured as an operating Region for the IPAM, you'll get an error.</p>
   * @public
   */
  Locale?: string | undefined;

  /**
   * <p>The depth of pools in your IPAM pool. The pool depth quota is 10. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas in IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   * @public
   */
  PoolDepth?: number | undefined;

  /**
   * <p>The state of the IPAM pool.</p>
   * @public
   */
  State?: IpamPoolState | undefined;

  /**
   * <p>The state message.</p>
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * <p>The description of the IPAM pool.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>If selected, IPAM will continuously look for resources within the CIDR range of this pool
   *          and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for
   *          these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import
   *          a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently
   *          marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM
   *          discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.
   *       </p>
   *          <p>A locale must be set on the pool for this feature to work.</p>
   * @public
   */
  AutoImport?: boolean | undefined;

  /**
   * <p>Determines if a pool is publicly advertisable. This option is not available for pools with AddressFamily set to <code>ipv4</code>.</p>
   * @public
   */
  PubliclyAdvertisable?: boolean | undefined;

  /**
   * <p>The address family of the pool.</p>
   * @public
   */
  AddressFamily?: AddressFamily | undefined;

  /**
   * <p>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   * @public
   */
  AllocationMinNetmaskLength?: number | undefined;

  /**
   * <p>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   * @public
   */
  AllocationMaxNetmaskLength?: number | undefined;

  /**
   * <p>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and
   *          you enter 16 here, new allocations will default to 10.0.0.0/16.</p>
   * @public
   */
  AllocationDefaultNetmaskLength?: number | undefined;

  /**
   * <p>Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.</p>
   * @public
   */
  AllocationResourceTags?: IpamResourceTag[] | undefined;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.</p>
   * @public
   */
  AwsService?: IpamPoolAwsService | undefined;

  /**
   * <p>The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is <code>BYOIP</code>. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/intro-create-ipv6-pools.html">Create IPv6 pools</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *          By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool. For information on increasing the default limit, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  PublicIpSource?: IpamPoolPublicIpSource | undefined;

  /**
   * <p>The resource used to provision CIDRs to a resource planning pool.</p>
   * @public
   */
  SourceResource?: IpamPoolSourceResource | undefined;
}

/**
 * @public
 */
export interface CreateIpamPoolResult {
  /**
   * <p>Information about the IPAM pool created.</p>
   * @public
   */
  IpamPool?: IpamPool | undefined;
}

/**
 * <p>Describes a condition used when creating or modifying resolver rules.</p>
 *          <p>CIDR selection rules define the business logic for selecting CIDRs from IPAM. If a CIDR matches any of the rules, it will be included. If a rule has multiple conditions, the CIDR has to match every condition of that rule. You can create a prefix list resolver without any CIDR selection rules, but it will generate empty versions (containing no CIDRs) until you add rules.</p>
 *          <p>There are three rule types. Only 2 of the 3 rule types support conditions - <b>IPAM pool CIDR</b> and <b>Scope resource CIDR</b>. <b>Static CIDR</b> rules cannot have conditions.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Static CIDR</b>: A fixed list of CIDRs that do not change (like a manual list replicated across Regions)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>IPAM pool CIDR</b>: CIDRs from specific IPAM pools (like all CIDRs from your IPAM production pool)</p>
 *                <p>If you choose this option, choose the following:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>IPAM scope</b>: Select the IPAM scope to search for resources</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Conditions:</b>
 *                      </p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <b>Property</b>
 *                            </p>
 *                            <ul>
 *                               <li>
 *                                  <p>
 *                                     <b>IPAM pool ID</b>: Select an IPAM pool that contains the resources</p>
 *                               </li>
 *                               <li>
 *                                  <p>
 *                                     <b>CIDR</b> (like 10.24.34.0/23)</p>
 *                               </li>
 *                            </ul>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <b>Operation</b>: Equals/Not equals</p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <b>Value</b>: The value on which to match the condition</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Scope resource CIDR</b>: CIDRs from Amazon Web Services resources like VPCs, subnets, EIPs within an IPAM scope</p>
 *                <p>If you choose this option, choose the following:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>IPAM scope</b>: Select the IPAM scope to search for resources</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Resource type</b>: Select a resource, like a VPC or subnet.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Conditions</b>:</p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <b>Property</b>:</p>
 *                            <ul>
 *                               <li>
 *                                  <p>Resource ID: The unique ID of a resource (like vpc-1234567890abcdef0)</p>
 *                               </li>
 *                               <li>
 *                                  <p>Resource owner (like 111122223333)</p>
 *                               </li>
 *                               <li>
 *                                  <p>Resource region (like us-east-1)</p>
 *                               </li>
 *                               <li>
 *                                  <p>Resource tag (like key: name, value: dev-vpc-1)</p>
 *                               </li>
 *                               <li>
 *                                  <p>CIDR (like 10.24.34.0/23)</p>
 *                               </li>
 *                            </ul>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <b>Operation</b>: Equals/Not equals</p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <b>Value</b>: The value on which to match the condition</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 * @public
 */
export interface IpamPrefixListResolverRuleConditionRequest {
  /**
   * <p>The operation to perform when evaluating this condition.</p>
   * @public
   */
  Operation: IpamPrefixListResolverRuleConditionOperation | undefined;

  /**
   * <p>The ID of the IPAM pool to match against. This condition selects CIDRs that belong to the specified IPAM pool.</p>
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services resource to match against. This condition selects CIDRs associated with the specified resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resources to match against. This condition selects CIDRs from resources owned by the specified account.</p>
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the resources are located. This condition selects CIDRs from resources in the specified Region.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>A tag key-value pair to match against. This condition selects CIDRs from resources that have the specified tag.</p>
   * @public
   */
  ResourceTag?: RequestIpamResourceTag | undefined;

  /**
   * <p>A CIDR block to match against. This condition selects CIDRs that fall within or match the specified CIDR range.</p>
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * <p>Describes a CIDR selection rule to include in a request. This is used when creating or modifying resolver rules.</p>
 *          <p>CIDR selection rules define the business logic for selecting CIDRs from IPAM. If a CIDR matches any of the rules, it will be included. If a rule has multiple conditions, the CIDR has to match every condition of that rule. You can create a prefix list resolver without any CIDR selection rules, but it will generate empty versions (containing no CIDRs) until you add rules.</p>
 *          <p>There are three rule types. Only 2 of the 3 rule types support conditions - <b>IPAM pool CIDR</b> and <b>Scope resource CIDR</b>. <b>Static CIDR</b> rules cannot have conditions.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Static CIDR</b>: A fixed list of CIDRs that do not change (like a manual list replicated across Regions)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>IPAM pool CIDR</b>: CIDRs from specific IPAM pools (like all CIDRs from your IPAM production pool)</p>
 *                <p>If you choose this option, choose the following:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>IPAM scope</b>: Select the IPAM scope to search for resources</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Conditions:</b>
 *                      </p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <b>Property</b>
 *                            </p>
 *                            <ul>
 *                               <li>
 *                                  <p>
 *                                     <b>IPAM pool ID</b>: Select an IPAM pool that contains the resources</p>
 *                               </li>
 *                               <li>
 *                                  <p>
 *                                     <b>CIDR</b> (like 10.24.34.0/23)</p>
 *                               </li>
 *                            </ul>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <b>Operation</b>: Equals/Not equals</p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <b>Value</b>: The value on which to match the condition</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Scope resource CIDR</b>: CIDRs from Amazon Web Services resources like VPCs, subnets, EIPs within an IPAM scope</p>
 *                <p>If you choose this option, choose the following:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>IPAM scope</b>: Select the IPAM scope to search for resources</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Resource type</b>: Select a resource, like a VPC or subnet.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Conditions</b>:</p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <b>Property</b>:</p>
 *                            <ul>
 *                               <li>
 *                                  <p>Resource ID: The unique ID of a resource (like vpc-1234567890abcdef0)</p>
 *                               </li>
 *                               <li>
 *                                  <p>Resource owner (like 111122223333)</p>
 *                               </li>
 *                               <li>
 *                                  <p>Resource region (like us-east-1)</p>
 *                               </li>
 *                               <li>
 *                                  <p>Resource tag (like key: name, value: dev-vpc-1)</p>
 *                               </li>
 *                               <li>
 *                                  <p>CIDR (like 10.24.34.0/23)</p>
 *                               </li>
 *                            </ul>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <b>Operation</b>: Equals/Not equals</p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <b>Value</b>: The value on which to match the condition</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 * @public
 */
export interface IpamPrefixListResolverRuleRequest {
  /**
   * <p>The type of CIDR selection rule. Valid values include <code>include</code> for selecting CIDRs that match the conditions, and <code>exclude</code> for excluding CIDRs that match the conditions.</p>
   * @public
   */
  RuleType: IpamPrefixListResolverRuleType | undefined;

  /**
   * <p>A fixed list of CIDRs that do not change (like a manual list replicated across Regions).</p>
   * @public
   */
  StaticCidr?: string | undefined;

  /**
   * <p>The ID of the IPAM scope from which to select CIDRs. This determines whether to select from public or private IP address space.</p>
   * @public
   */
  IpamScopeId?: string | undefined;

  /**
   * <p>For rules of type <code>ipam-resource-cidr</code>, this is the resource type.</p>
   * @public
   */
  ResourceType?: IpamResourceType | undefined;

  /**
   * <p>The conditions that determine which CIDRs are selected by this rule. Conditions specify criteria such as resource type, tags, account IDs, and Regions.</p>
   * @public
   */
  Conditions?: IpamPrefixListResolverRuleConditionRequest[] | undefined;
}

/**
 * @public
 */
export interface CreateIpamPrefixListResolverRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM that will serve as the source of the IP address database for CIDR selection. The IPAM must be in the Advanced tier to use this feature.</p>
   * @public
   */
  IpamId: string | undefined;

  /**
   * <p>A description for the IPAM prefix list resolver to help you identify its purpose and configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The address family for the IPAM prefix list resolver. Valid values are <code>ipv4</code> and <code>ipv6</code>. You must create separate resolvers for IPv4 and IPv6 CIDRs as they cannot be mixed in the same resolver.</p>
   * @public
   */
  AddressFamily: AddressFamily | undefined;

  /**
   * <p>The CIDR selection rules for the resolver.</p>
   *          <p>CIDR selection rules define the business logic for selecting CIDRs from IPAM. If a CIDR matches any of the rules, it will be included. If a rule has multiple conditions, the CIDR has to match every condition of that rule. You can create a prefix list resolver without any CIDR selection rules, but it will generate empty versions (containing no CIDRs) until you add rules.</p>
   * @public
   */
  Rules?: IpamPrefixListResolverRuleRequest[] | undefined;

  /**
   * <p>The tags to apply to the IPAM prefix list resolver during creation. Tags help you organize and manage your Amazon Web Services resources.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Describes an IPAM prefix list resolver.</p>
 *          <p>An IPAM prefix list resolver is a component that manages the synchronization between IPAM's CIDR selection rules and customer-managed prefix lists. It automates connectivity configurations by selecting CIDRs from IPAM's database based on your business logic and synchronizing them with prefix lists used in resources such as VPC route tables and security groups.</p>
 * @public
 */
export interface IpamPrefixListResolver {
  /**
   * <p>The ID of the Amazon Web Services account that owns the IPAM prefix list resolver.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the IPAM prefix list resolver.</p>
   * @public
   */
  IpamPrefixListResolverId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IPAM prefix list resolver.</p>
   * @public
   */
  IpamPrefixListResolverArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IPAM associated with this resolver.</p>
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the associated IPAM is located.</p>
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * <p>The description of the IPAM prefix list resolver.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The address family (IPv4 or IPv6) for the IPAM prefix list resolver.</p>
   * @public
   */
  AddressFamily?: AddressFamily | undefined;

  /**
   * <p>The current state of the IPAM prefix list resolver. Valid values include <code>create-in-progress</code>, <code>create-complete</code>, <code>create-failed</code>, <code>modify-in-progress</code>, <code>modify-complete</code>, <code>modify-failed</code>, <code>delete-in-progress</code>, <code>delete-complete</code>, and <code>delete-failed</code>.</p>
   * @public
   */
  State?: IpamPrefixListResolverState | undefined;

  /**
   * <p>The tags assigned to the IPAM prefix list resolver.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The status for the last time a version was created.</p>
   *          <p>Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list
   * changes due to infrastructure changes.</p>
   * @public
   */
  LastVersionCreationStatus?: IpamPrefixListResolverVersionCreationStatus | undefined;

  /**
   * <p>The status message for the last time a version was created.</p>
   *          <p>Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list
   * changes due to infrastructure changes.</p>
   * @public
   */
  LastVersionCreationStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface CreateIpamPrefixListResolverResult {
  /**
   * <p>Information about the IPAM prefix list resolver that was created.</p>
   * @public
   */
  IpamPrefixListResolver?: IpamPrefixListResolver | undefined;
}

/**
 * @public
 */
export interface CreateIpamPrefixListResolverTargetRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM prefix list resolver that will manage the synchronization of CIDRs to the target prefix list.</p>
   * @public
   */
  IpamPrefixListResolverId: string | undefined;

  /**
   * <p>The ID of the managed prefix list that will be synchronized with CIDRs selected by the IPAM prefix list resolver. This prefix list becomes an IPAM managed prefix list.</p>
   *          <p>An IPAM-managed prefix list is a customer-managed prefix list that has been associated with an IPAM prefix list resolver target. When a prefix list becomes IPAM managed, its CIDRs are automatically synchronized based on the IPAM prefix list resolver's CIDR selection rules, and direct CIDR modifications are restricted.</p>
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the prefix list is located. This is required when referencing a prefix list in a different Region.</p>
   * @public
   */
  PrefixListRegion: string | undefined;

  /**
   * <p>The specific version of the prefix list to target. If not specified, the resolver will target the latest version.</p>
   * @public
   */
  DesiredVersion?: number | undefined;

  /**
   * <p>Indicates whether the resolver target should automatically track the latest version of the prefix list. When enabled, the target will always synchronize with the most current version of the prefix list.</p>
   *          <p>Choose this for automatic updates when you want your prefix lists to stay current with infrastructure changes without manual intervention.</p>
   * @public
   */
  TrackLatestVersion: boolean | undefined;

  /**
   * <p>The tags to apply to the IPAM prefix list resolver target during creation. Tags help you organize and manage your Amazon Web Services resources.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Describes an IPAM prefix list resolver target.</p>
 *          <p>An IPAM prefix list resolver target is an association between a specific customer-managed prefix list and an IPAM prefix list resolver. The target enables the resolver to synchronize CIDRs selected by its rules into the specified prefix list, which can then be referenced in Amazon Web Services resources.</p>
 * @public
 */
export interface IpamPrefixListResolverTarget {
  /**
   * <p>The ID of the IPAM prefix list resolver target.</p>
   * @public
   */
  IpamPrefixListResolverTargetId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IPAM prefix list resolver target.</p>
   * @public
   */
  IpamPrefixListResolverTargetArn?: string | undefined;

  /**
   * <p>The ID of the IPAM prefix list resolver associated with this target.</p>
   * @public
   */
  IpamPrefixListResolverId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the IPAM prefix list resolver target.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the managed prefix list associated with this target.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the prefix list associated with this target is located.</p>
   * @public
   */
  PrefixListRegion?: string | undefined;

  /**
   * <p>The desired version of the prefix list that this target should synchronize with.</p>
   * @public
   */
  DesiredVersion?: number | undefined;

  /**
   * <p>The version of the prefix list that was last successfully synchronized by this target.</p>
   * @public
   */
  LastSyncedVersion?: number | undefined;

  /**
   * <p>Indicates whether this target automatically tracks the latest version of the prefix list.</p>
   * @public
   */
  TrackLatestVersion?: boolean | undefined;

  /**
   * <p>A message describing the current state of the IPAM prefix list resolver target, including any error information.</p>
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * <p>The current state of the IPAM prefix list resolver target. Valid values include <code>create-in-progress</code>, <code>create-complete</code>, <code>create-failed</code>, <code>modify-in-progress</code>, <code>modify-complete</code>, <code>modify-failed</code>, <code>delete-in-progress</code>, <code>delete-complete</code>, and <code>delete-failed</code>.</p>
   * @public
   */
  State?: IpamPrefixListResolverTargetState | undefined;

  /**
   * <p>The tags assigned to the IPAM prefix list resolver target.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateIpamPrefixListResolverTargetResult {
  /**
   * <p>Information about the IPAM prefix list resolver target that was created.</p>
   * @public
   */
  IpamPrefixListResolverTarget?: IpamPrefixListResolverTarget | undefined;
}

/**
 * @public
 */
export interface CreateIpamResourceDiscoveryRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A description for the IPAM resource discovery.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Operating Regions for the IPAM resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   * @public
   */
  OperatingRegions?: AddIpamOperatingRegion[] | undefined;

  /**
   * <p>Tag specifications for the IPAM resource discovery.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A client token for the IPAM resource discovery.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion.</p>
 * @public
 */
export interface IpamOrganizationalUnitExclusion {
  /**
   * <p>An Amazon Web Services Organizations entity path. For more information on the entity path, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_last-accessed-view-data-orgs.html#access_policies_access-advisor-viewing-orgs-entity-path">Understand the Amazon Web Services Organizations entity path</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
   * @public
   */
  OrganizationsEntityPath?: string | undefined;
}

/**
 * <p>A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</p>
 * @public
 */
export interface IpamResourceDiscovery {
  /**
   * <p>The ID of the owner.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId?: string | undefined;

  /**
   * <p>The resource discovery Amazon Resource Name (ARN).</p>
   * @public
   */
  IpamResourceDiscoveryArn?: string | undefined;

  /**
   * <p>The resource discovery Region.</p>
   * @public
   */
  IpamResourceDiscoveryRegion?: string | undefined;

  /**
   * <p>The resource discovery description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The operating Regions for the resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   * @public
   */
  OperatingRegions?: IpamOperatingRegion[] | undefined;

  /**
   * <p>Defines if the resource discovery is the default. The default resource discovery is the resource discovery automatically created when you create an IPAM.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The lifecycle state of the resource discovery.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>create-in-progress</code> - Resource discovery is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-complete</code> - Resource discovery creation is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-failed</code> - Resource discovery creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modify-in-progress</code> - Resource discovery is being modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modify-complete</code> - Resource discovery modification is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modify-failed</code> - Resource discovery modification has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>delete-in-progress</code> - Resource discovery is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>delete-complete</code> - Resource discovery deletion is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>delete-failed</code> - Resource discovery deletion has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>isolate-in-progress</code> - Amazon Web Services account that created the resource discovery has been removed and the resource discovery is being isolated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>isolate-complete</code> - Resource discovery isolation is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>restore-in-progress</code> - Amazon Web Services account that created the resource discovery and was isolated has been restored.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: IpamResourceDiscoveryState | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion.</p>
   * @public
   */
  OrganizationalUnitExclusions?: IpamOrganizationalUnitExclusion[] | undefined;
}

/**
 * @public
 */
export interface CreateIpamResourceDiscoveryResult {
  /**
   * <p>An IPAM resource discovery.</p>
   * @public
   */
  IpamResourceDiscovery?: IpamResourceDiscovery | undefined;
}

/**
 * <p>The configuration that links an Amazon VPC IPAM scope to an external authority system. It specifies the type of external system and the external resource identifier that identifies your account or instance in that system.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/integrate-infoblox-ipam.html">Integrate VPC IPAM with Infoblox infrastructure</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @public
 */
export interface ExternalAuthorityConfiguration {
  /**
   * <p>The type of external authority.</p>
   * @public
   */
  Type?: IpamScopeExternalAuthorityType | undefined;

  /**
   * <p>The identifier for the external resource managing this scope. For Infoblox integrations, this is the Infoblox resource identifier in the format <code><version>.identity.account.<entity_realm>.<entity_id></code>.</p>
   * @public
   */
  ExternalResourceIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateIpamScopeRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM for which you're creating this scope.</p>
   * @public
   */
  IpamId: string | undefined;

  /**
   * <p>A description for the scope you're creating.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The configuration that links an Amazon VPC IPAM scope to an external authority system. It specifies the type of external system and the external resource identifier that identifies your account or instance in that system.</p>
   *          <p>In IPAM, an external authority is a third-party IP address management system that provides CIDR blocks when you provision address space for top-level IPAM pools. This allows you to use your existing IP management system to control which address ranges are allocated to Amazon Web Services while using Amazon VPC IPAM to manage subnets within those ranges.</p>
   * @public
   */
  ExternalAuthorityConfiguration?: ExternalAuthorityConfiguration | undefined;
}

/**
 * <p>The configuration that links an Amazon VPC IPAM scope to an external authority system. It specifies the type of external system and the external resource identifier that identifies your account or instance in that system.</p>
 *          <p>In IPAM, an external authority is a third-party IP address management system that provides CIDR blocks when you provision address space for top-level IPAM pools. This allows you to use your existing IP management system to control which address ranges are allocated to Amazon Web Services while using Amazon VPC IPAM to manage subnets within those ranges.</p>
 * @public
 */
export interface IpamScopeExternalAuthorityConfiguration {
  /**
   * <p>The type of external authority managing this scope. Currently supports <code>Infoblox</code> for integration with Infoblox Universal DDI.</p>
   * @public
   */
  Type?: IpamScopeExternalAuthorityType | undefined;

  /**
   * <p>The identifier for the external resource managing this scope. For Infoblox integrations, this is the Infoblox resource identifier in the format <code><version>.identity.account.<entity_realm>.<entity_id></code>.</p>
   * @public
   */
  ExternalResourceIdentifier?: string | undefined;
}

/**
 * <p>In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/how-it-works-ipam.html">How IPAM works</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @public
 */
export interface IpamScope {
  /**
   * <p>The Amazon Web Services account ID of the owner of the scope.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the scope.</p>
   * @public
   */
  IpamScopeId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scope.</p>
   * @public
   */
  IpamScopeArn?: string | undefined;

  /**
   * <p>The ARN of the IPAM.</p>
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the IPAM scope.</p>
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * <p>The type of the scope.</p>
   * @public
   */
  IpamScopeType?: IpamScopeType | undefined;

  /**
   * <p>Defines if the scope is the default scope or not.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The description of the scope.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The number of pools in the scope.</p>
   * @public
   */
  PoolCount?: number | undefined;

  /**
   * <p>The state of the IPAM scope.</p>
   * @public
   */
  State?: IpamScopeState | undefined;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The external authority configuration for this IPAM scope, if configured.</p>
   *          <p>The configuration that links an Amazon VPC IPAM scope to an external authority system. It specifies the type of external system and the external resource identifier that identifies your account or instance in that system.</p>
   *          <p>In IPAM, an external authority is a third-party IP address management system that provides CIDR blocks when you provision address space for top-level IPAM pools. This allows you to use your existing IP management system to control which address ranges are allocated to Amazon Web Services while using Amazon VPC IPAM to manage subnets within those ranges.</p>
   * @public
   */
  ExternalAuthorityConfiguration?: IpamScopeExternalAuthorityConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateIpamScopeResult {
  /**
   * <p>Information about the created scope.</p>
   * @public
   */
  IpamScope?: IpamScope | undefined;
}

/**
 * @public
 */
export interface CreateKeyPairRequest {
  /**
   * <p>A unique name for the key pair.</p>
   *          <p>Constraints: Up to 255 ASCII characters</p>
   * @public
   */
  KeyName: string | undefined;

  /**
   * <p>The type of key pair. Note that ED25519 keys are not supported for Windows instances.</p>
   *          <p>Default: <code>rsa</code>
   *          </p>
   * @public
   */
  KeyType?: KeyType | undefined;

  /**
   * <p>The tags to apply to the new key pair.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The format of the key pair.</p>
   *          <p>Default: <code>pem</code>
   *          </p>
   * @public
   */
  KeyFormat?: KeyFormat | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a key pair.</p>
 * @public
 */
export interface KeyPair {
  /**
   * <p>The ID of the key pair.</p>
   * @public
   */
  KeyPairId?: string | undefined;

  /**
   * <p>Any tags applied to the key pair.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The name of the key pair.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the SHA-1 digest of the DER encoded private key.</p>
   *             </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which is the default for OpenSSH, starting with OpenSSH 6.8.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyFingerprint?: string | undefined;

  /**
   * <p>An unencrypted PEM encoded RSA or ED25519 private key.</p>
   * @public
   */
  KeyMaterial?: string | undefined;
}

/**
 * <p>The parameters for a block device for an EBS volume.</p>
 * @public
 */
export interface LaunchTemplateEbsBlockDeviceRequest {
  /**
   * <p>Indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached
   *             to instances that support Amazon EBS encryption. If you are creating a volume from a
   *             snapshot, you can't specify an encryption value.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>,
   *             <code>io1</code>, and <code>io2</code> volumes, this represents the number of IOPS that
   *             are provisioned for the volume. For <code>gp2</code> volumes, this represents the
   *             baseline performance of the volume and the rate at which the volume accumulates I/O
   *             credits for bursting.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000 - 80,000 IOPS</p>
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
   *          <p>This parameter is supported for <code>io1</code>, <code>io2</code>, and <code>gp3</code> volumes only.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key to use for EBS encryption.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume
   *             size. The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code>: 1 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 1 - 65,536 GiB</p>
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
  VolumeSize?: number | undefined;

  /**
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html">Amazon EBS volume types</a> in the
   *                 <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * <p>The throughput to provision for a <code>gp3</code> volume, with a maximum of 2,000
   *             MiB/s.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 2,000.</p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * <p>Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download
   *             the snapshot blocks from Amazon S3 to the volume. This is also known as <i>volume
   *                 initialization</i>. Specifying a volume initialization rate ensures that the volume is
   *             initialized at a predictable and consistent rate after creation.</p>
   *          <p>This parameter is supported only for volumes created from snapshots. Omit this parameter
   *             if:</p>
   *          <ul>
   *             <li>
   *                <p>You want to create the volume using fast snapshot restore. You must specify a snapshot
   *                     that is enabled for fast snapshot restore. In this case, the volume is fully initialized
   *                     at creation.</p>
   *                <note>
   *                   <p>If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate,
   *                         the volume will be initialized at the specified rate instead of fast snapshot restore.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>You want to create a volume that is initialized at the default rate.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html">
   *             Initialize Amazon EBS volumes</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Valid range: 100 - 300 MiB/s</p>
   * @public
   */
  VolumeInitializationRate?: number | undefined;
}

/**
 * <p>Describes a block device mapping.</p>
 * @public
 */
export interface LaunchTemplateBlockDeviceMappingRequest {
  /**
   * <p>The device name (for example, /dev/sdh or xvdh).</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The virtual device name (ephemeralN). Instance store volumes are numbered starting
   *             from 0. An instance type with 2 available instance store volumes can specify mappings
   *             for ephemeral0 and ephemeral1. The number of available instance store volumes depends on
   *             the instance type. After you connect to the instance, you must mount the volume.</p>
   * @public
   */
  VirtualName?: string | undefined;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   * @public
   */
  Ebs?: LaunchTemplateEbsBlockDeviceRequest | undefined;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   * @public
   */
  NoDevice?: string | undefined;
}

/**
 * <p>Describes a target Capacity Reservation or Capacity Reservation group.</p>
 * @public
 */
export interface CapacityReservationTarget {
  /**
   * <p>The ID of the Capacity Reservation in which to run the instance.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The ARN of the Capacity Reservation resource group in which to run the
   * 			instance.</p>
   * @public
   */
  CapacityReservationResourceGroupArn?: string | undefined;
}

/**
 * <p>Describes an instance's Capacity Reservation targeting option. You can specify only
 *             one option at a time. Use the <code>CapacityReservationPreference</code> parameter to
 *             configure the instance to run in On-Demand capacity or to run in any <code>open</code>
 *             Capacity Reservation that has matching attributes (instance type, platform, Availability
 *             Zone). Use the <code>CapacityReservationTarget</code> parameter to explicitly target a
 *             specific Capacity Reservation or a Capacity Reservation group.</p>
 * @public
 */
export interface LaunchTemplateCapacityReservationSpecificationRequest {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>capacity-reservations-only</code> - The instance will only run in a
   *                     Capacity Reservation or Capacity Reservation group. If capacity isn't available,
   *                     the instance will fail to launch.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity
   *                     Reservation that has matching attributes (instance type, platform, Availability
   *                     Zone, tenancy).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even
   *                     if one is available. The instance runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation
   *             group.</p>
   * @public
   */
  CapacityReservationTarget?: CapacityReservationTarget | undefined;
}

/**
 * <p>The CPU options for the instance. Both the core count and threads per core must be
 *             specified in the request.</p>
 * @public
 */
export interface LaunchTemplateCpuOptionsRequest {
  /**
   * <p>The number of CPU cores for the instance.</p>
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * <p>The number of threads per CPU core. To disable multithreading for the instance,
   *             specify a value of <code>1</code>. Otherwise, specify the default value of
   *                 <code>2</code>.</p>
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * <p>Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported
   *             with M6a, R6a, and C6a instance types only. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html">AMD SEV-SNP for
   *                 Amazon EC2 instances</a>.</p>
   * @public
   */
  AmdSevSnp?: AmdSevSnpSpecification | undefined;
}

/**
 * <p>The credit option for CPU usage of a T instance.</p>
 * @public
 */
export interface CreditSpecificationRequest {
  /**
   * <p>The credit option for CPU usage of a T instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   * @public
   */
  CpuCredits: string | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024.</p>
 *          </note>
 *          <p>A specification for an Elastic Graphics accelerator.</p>
 * @public
 */
export interface ElasticGpuSpecification {
  /**
   * <p>The type of Elastic Graphics accelerator.</p>
   * @public
   */
  Type: string | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Inference is no longer available.</p>
 *          </note>
 *          <p> Describes an elastic inference accelerator. </p>
 * @public
 */
export interface LaunchTemplateElasticInferenceAccelerator {
  /**
   * <p> The type of elastic inference accelerator. The possible values are eia1.medium,
   *             eia1.large, and eia1.xlarge. </p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>The number of elastic inference accelerators to attach to the instance. </p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more
 *             information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">What is Nitro Enclaves?</a> in the
 *                 <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
 * @public
 */
export interface LaunchTemplateEnclaveOptionsRequest {
  /**
   * <p>To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to
   *                 <code>true</code>.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Indicates whether the instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
 *                 prerequisites</a>.</p>
 * @public
 */
export interface LaunchTemplateHibernationOptionsRequest {
  /**
   * <p>If you set this parameter to <code>true</code>, the instance is enabled for
   *             hibernation.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * <p>An IAM instance profile.</p>
 * @public
 */
export interface LaunchTemplateIamInstanceProfileSpecificationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the instance profile.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The options for Spot Instances.</p>
 * @public
 */
export interface LaunchTemplateSpotMarketOptionsRequest {
  /**
   * <p>The maximum hourly price you're willing to pay for a Spot Instance. We do not
   *             recommend using this parameter because it can lead to increased interruptions. If you do
   *             not specify this parameter, you will pay the current Spot price. If you do specify this
   *             parameter, it must be more than USD $0.001. Specifying a value below USD $0.001 will
   *             result in an <code>InvalidParameterValue</code> error message when the launch template
   *             is used to launch an instance.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more
   *                 frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * <p>The Spot Instance request type.</p>
   * @public
   */
  SpotInstanceType?: SpotInstanceType | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY-MM-DD</i>T<i>HH:MM:SS</i>Z). Supported only for
   *             persistent requests.</p>
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
   *          <p>Default: 7 days from the current date</p>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is
   *                 <code>terminate</code>.</p>
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;
}

/**
 * <p>The market (purchasing) option for the instances.</p>
 * @public
 */
export interface LaunchTemplateInstanceMarketOptionsRequest {
  /**
   * <p>The market type.</p>
   * @public
   */
  MarketType?: MarketType | undefined;

  /**
   * <p>The options for Spot Instances.</p>
   * @public
   */
  SpotOptions?: LaunchTemplateSpotMarketOptionsRequest | undefined;
}

/**
 * <p>Describes a license configuration.</p>
 * @public
 */
export interface LaunchTemplateLicenseConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * <p>The maintenance options of your instance.</p>
 * @public
 */
export interface LaunchTemplateInstanceMaintenanceOptionsRequest {
  /**
   * <p>Disables the automatic recovery behavior of your instance or sets it to default. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html#instance-configuration-recovery">Simplified automatic recovery</a>.</p>
   * @public
   */
  AutoRecovery?: LaunchTemplateAutoRecoveryState | undefined;
}

/**
 * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Use
 *                 instance metadata to manage your EC2 instance</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface LaunchTemplateInstanceMetadataOptionsRequest {
  /**
   * <p>Indicates whether IMDSv2 is required.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - IMDSv2 is optional. You can choose whether to send a
   *                     session token in your instance metadata retrieval requests. If you retrieve IAM
   *                     role credentials without a session token, you receive the IMDSv1 role
   *                     credentials. If you retrieve IAM role credentials using a valid session token,
   *                     you receive the IMDSv2 role credentials.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - IMDSv2 is required. You must send a session token in
   *                     your instance metadata retrieval requests. With this option, retrieving the IAM
   *                     role credentials always returns IMDSv2 credentials; IMDSv1 credentials are not
   *                     available.</p>
   *             </li>
   *          </ul>
   *          <p>Default: If the value of <code>ImdsSupport</code> for the Amazon Machine Image (AMI)
   *             for your instance is <code>v2.0</code>, the default is <code>required</code>.</p>
   * @public
   */
  HttpTokens?: LaunchTemplateHttpTokensState | undefined;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   *          <p>Possible values: Integers from 1 to 64</p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If the parameter is
   *             not specified, the default state is <code>enabled</code>.</p>
   *          <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access
   *                 your instance metadata. </p>
   *          </note>
   * @public
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState | undefined;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   * @public
   */
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6 | undefined;

  /**
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-tags-in-IMDS.html">View tags for your EC2
   *                 instances using instance metadata</a>.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   * @public
   */
  InstanceMetadataTags?: LaunchTemplateInstanceMetadataTagsState | undefined;
}

/**
 * <p>Describes the monitoring for the instance.</p>
 * @public
 */
export interface LaunchTemplatesMonitoringRequest {
  /**
   * <p>Specify <code>true</code> to enable detailed monitoring. Otherwise, basic monitoring
   *             is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>A security group connection tracking specification request that enables you to set the
 *             idle timeout for connection tracking on an Elastic network interface. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Connection tracking timeouts</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface ConnectionTrackingSpecificationRequest {
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
 * <p>Configures ENA Express for UDP network traffic from your launch template.</p>
 * @public
 */
export interface EnaSrdUdpSpecificationRequest {
  /**
   * <p>Indicates whether UDP traffic uses ENA Express for your instance. To ensure that UDP
   *             traffic can use ENA Express when you launch an instance, you must also set <b>EnaSrdEnabled</b> in the <b>EnaSrdSpecificationRequest</b> to <code>true</code>.</p>
   * @public
   */
  EnaSrdUdpEnabled?: boolean | undefined;
}

/**
 * <p>Launch instances with ENA Express settings configured from your launch
 *             template.</p>
 * @public
 */
export interface EnaSrdSpecificationRequest {
  /**
   * <p>Specifies whether ENA Express is enabled for the network interface when you launch an
   *             instance.</p>
   * @public
   */
  EnaSrdEnabled?: boolean | undefined;

  /**
   * <p>Contains ENA Express settings for UDP network traffic for the network interface
   *             attached to the instance.</p>
   * @public
   */
  EnaSrdUdpSpecification?: EnaSrdUdpSpecificationRequest | undefined;
}

/**
 * <p>Describes the IPv4 prefix option for a network interface.</p>
 * @public
 */
export interface Ipv4PrefixSpecificationRequest {
  /**
   * <p>The IPv4 prefix. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html">
   *             Assigning prefixes to network interfaces</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Ipv4Prefix?: string | undefined;
}

/**
 * <p>Describes an IPv6 address.</p>
 * @public
 */
export interface InstanceIpv6AddressRequest {
  /**
   * <p>The IPv6 address.</p>
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * <p>Describes the IPv6 prefix option for a network interface.</p>
 * @public
 */
export interface Ipv6PrefixSpecificationRequest {
  /**
   * <p>The IPv6 prefix.</p>
   * @public
   */
  Ipv6Prefix?: string | undefined;
}

/**
 * <p>Describes a secondary private IPv4 address for a network interface.</p>
 * @public
 */
export interface PrivateIpAddressSpecification {
  /**
   * <p>Indicates whether the private IPv4 address is the primary private IPv4 address. Only
   *             one IPv4 address can be designated as primary.</p>
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * <p>The private IPv4 address.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * <p>The parameters for a network interface.</p>
 * @public
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  /**
   * <p>Associates a Carrier IP address with eth0 for a new network interface.</p>
   *          <p>Use this option when you launch an instance in a Wavelength Zone and want to associate
   *             a Carrier IP address with the network interface. For more information about Carrier IP
   *             addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP addresses</a> in the <i>Wavelength Developer
   *             Guide</i>.</p>
   * @public
   */
  AssociateCarrierIpAddress?: boolean | undefined;

  /**
   * <p>Associates a public IPv4 address with eth0 for a new network interface.</p>
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
   * <p>The device index for the network interface attachment. The primary network interface
   *             has a device index of 0. Each network interface is of type <code>interface</code>, you
   *             must specify a device index. If you create a launch template that includes secondary
   *             network interfaces but not a primary network interface, then you must add a primary
   *             network interface as a launch parameter when you launch an instance from the
   *             template.</p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>The IDs of one or more security groups.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>The type of network interface. To create an Elastic Fabric Adapter (EFA), specify
   *                 <code>efa</code> or <code>efa</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html">Elastic Fabric Adapter for AI/ML
   *                 and HPC workloads on Amazon EC2</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   *          <p>If you are not creating an EFA, specify <code>interface</code> or omit this
   *             parameter.</p>
   *          <p>If you specify <code>efa-only</code>, do not assign any IP addresses to the network
   *             interface. EFA-only network interfaces do not support IP addresses.</p>
   *          <p>Valid values: <code>interface</code> | <code>efa</code> | <code>efa-only</code>
   *          </p>
   * @public
   */
  InterfaceType?: string | undefined;

  /**
   * <p>The number of IPv6 addresses to assign to a network interface. Amazon EC2
   *             automatically selects the IPv6 addresses from the subnet range. You can't use this
   *             option if specifying specific IPv6 addresses.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * <p>One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You
   *             can't use this option if you're specifying a number of IPv6 addresses.</p>
   * @public
   */
  Ipv6Addresses?: InstanceIpv6AddressRequest[] | undefined;

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
   * <p>The number of secondary private IPv4 addresses to assign to a network
   *             interface.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * <p>The ID of the subnet for the network interface.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The index of the network card. Some instance types support multiple network cards. The
   *             primary network interface must be assigned to network card index 0. The default is
   *             network card index 0.</p>
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * <p>One or more IPv4 prefixes to be assigned to the network interface. You cannot use this
   *             option if you use the <code>Ipv4PrefixCount</code> option.</p>
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[] | undefined;

  /**
   * <p>The number of IPv4 prefixes to be automatically assigned to the network interface. You
   *             cannot use this option if you use the <code>Ipv4Prefix</code> option.</p>
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * <p>One or more IPv6 prefixes to be assigned to the network interface. You cannot use this
   *             option if you use the <code>Ipv6PrefixCount</code> option.</p>
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[] | undefined;

  /**
   * <p>The number of IPv6 prefixes to be automatically assigned to the network interface. You
   *             cannot use this option if you use the <code>Ipv6Prefix</code> option.</p>
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
   * <p>Configure ENA Express settings for your launch template.</p>
   * @public
   */
  EnaSrdSpecification?: EnaSrdSpecificationRequest | undefined;

  /**
   * <p>A security group connection tracking specification that enables you to set the timeout
   *             for connection tracking on an Elastic network interface. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Idle connection tracking timeout</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
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
 * <p>When you configure network performance options in your launch template, your instance
 *             is geared for performance improvements based on the workload that it runs as soon as
 *             it's available.</p>
 * @public
 */
export interface LaunchTemplateNetworkPerformanceOptionsRequest {
  /**
   * <p>Specify the bandwidth weighting option to boost the associated type of baseline
   *             bandwidth, as follows:</p>
   *          <dl>
   *             <dt>default</dt>
   *             <dd>
   *                <p>This option uses the standard bandwidth configuration for your instance
   *                         type.</p>
   *             </dd>
   *             <dt>vpc-1</dt>
   *             <dd>
   *                <p>This option boosts your networking baseline bandwidth and reduces your EBS
   *                         baseline bandwidth.</p>
   *             </dd>
   *             <dt>ebs-1</dt>
   *             <dd>
   *                <p>This option boosts your EBS baseline bandwidth and reduces your networking
   *                         baseline bandwidth.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  BandwidthWeighting?: InstanceBandwidthWeighting | undefined;
}

/**
 * <p>The service provider that manages the resource.</p>
 * @public
 */
export interface OperatorRequest {
  /**
   * <p>The service provider that manages the resource.</p>
   * @public
   */
  Principal?: string | undefined;
}

/**
 * <p>Describes the placement of an instance.</p>
 * @public
 */
export interface LaunchTemplatePlacementRequest {
  /**
   * <p>The Availability Zone for the instance.</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> can be specified, but not both</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone for the instance.</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> can be specified, but not both</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The affinity setting for an instance on a Dedicated Host.</p>
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
   * <p>The tenancy of the instance. An instance with a tenancy of dedicated runs on
   *             single-tenant hardware.</p>
   * @public
   */
  Tenancy?: Tenancy | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  SpreadDomain?: string | undefined;

  /**
   * <p>The ARN of the host resource group in which to launch the instances. If you specify a
   *             host resource group ARN, omit the <b>Tenancy</b> parameter or
   *             set it to <code>host</code>.</p>
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
   * <p>The Group Id of a placement group. You must specify the Placement Group <b>Group Id</b> to launch an instance in a shared placement
   *             group.</p>
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * <p>Describes the options for instance hostnames.</p>
 * @public
 */
export interface LaunchTemplatePrivateDnsNameOptionsRequest {
  /**
   * <p>The type of hostname for Amazon EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 native subnets, an instance DNS
   *             name must be based on the instance ID. For dual-stack subnets, you can specify whether
   *             DNS names use the instance IPv4 address or the instance ID.</p>
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
 * <p>The tags specification for the resources that are created during instance
 *             launch.</p>
 * @public
 */
export interface LaunchTemplateTagSpecificationRequest {
  /**
   * <p>The type of resource to tag.</p>
   *          <p>Valid Values lists all resource types for Amazon EC2 that can be tagged. When you
   *             create a launch template, you can specify tags for the following resource types only:
   *                 <code>instance</code> | <code>volume</code> |
   *             <code>network-interface</code> | <code>spot-instances-request</code>. If the instance
   *             does not include the resource type that you specify, the instance launch fails. For
   *             example, not all instance types include a volume.</p>
   *          <p>To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The tags to apply to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The information to include in the launch template.</p>
 *          <note>
 *             <p>You must specify at least one parameter for the launch template data.</p>
 *          </note>
 * @public
 */
export interface RequestLaunchTemplateData {
  /**
   * <p>The ID of the kernel.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/linux/al2/ug/UserProvidedKernels.html">User provided kernels</a> in the
   *                     <i>Amazon Linux 2 User Guide</i>.</p>
   *          </important>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal Amazon EBS I/O performance. This optimization isn't available with all
   *             instance types. Additional usage charges apply when using an EBS-optimized
   *             instance.</p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of an IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecificationRequest | undefined;

  /**
   * <p>The block device mapping.</p>
   * @public
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMappingRequest[] | undefined;

  /**
   * <p>The network interfaces for the instance.</p>
   * @public
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecificationRequest[] | undefined;

  /**
   * <p>The ID of the AMI in the format <code>ami-0ac394d6a3example</code>.</p>
   *          <p>Alternatively, you can specify a Systems Manager parameter, using one of the following
   *             formats. The Systems Manager parameter will resolve to an AMI ID on launch.</p>
   *          <p>To reference a public parameter:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>public-parameter</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To reference a parameter stored in the same account:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name:version-number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-name:label</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To reference a parameter shared from another Amazon Web Services account:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN:version-number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:<i>parameter-ARN:label</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems Manager parameter instead of an AMI ID</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   *          <note>
   *             <p>If the launch template will be used for an EC2 Fleet or Spot Fleet, note the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Only EC2 Fleets of type <code>instant</code> support specifying a Systems
   *                         Manager parameter.</p>
   *                </li>
   *                <li>
   *                   <p>For EC2 Fleets of type <code>maintain</code> or <code>request</code>, or
   *                         for Spot Fleets, you must specify the AMI ID.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Amazon EC2 instance types</a> in
   *             the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>If you specify <code>InstanceType</code>, you can't specify
   *                 <code>InstanceRequirements</code>.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p>
   *          <important>
   *             <p>If you do not specify a key pair, you can't connect to the instance unless you
   *                 choose an AMI that is configured to allow users another way to log in.</p>
   *          </important>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>The monitoring for the instance.</p>
   * @public
   */
  Monitoring?: LaunchTemplatesMonitoringRequest | undefined;

  /**
   * <p>The placement for the instance.</p>
   * @public
   */
  Placement?: LaunchTemplatePlacementRequest | undefined;

  /**
   * <p>The ID of the RAM disk.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User provided
   *                     kernels</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          </important>
   * @public
   */
  RamDiskId?: string | undefined;

  /**
   * <p>Indicates whether termination protection is enabled for the instance. The default is
   *                 <code>false</code>, which means that you can terminate the instance using the Amazon EC2
   *             console, command line tools, or API. You can enable termination protection when you
   *             launch an instance, while the instance is running, or while the instance is
   *             stopped.</p>
   * @public
   */
  DisableApiTermination?: boolean | undefined;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   *          <p>Default: <code>stop</code>
   *          </p>
   * @public
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | undefined;

  /**
   * <p>The user data to make available to the instance. You must provide base64-encoded text.
   *             User data is limited to 16 KB. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html">Run commands when you launch an EC2
   *                 instance with user data input</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   *          <p>If you are creating the launch template for use with Batch, the user
   *             data must be provided in the <a href="https://cloudinit.readthedocs.io/en/latest/topics/format.html#mime-multi-part-archive">MIME multi-part archive format</a>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html#lt-user-data">Amazon EC2 user data in launch templates</a> in the
   *                     <i>Batch User Guide</i>.</p>
   * @public
   */
  UserData?: string | undefined;

  /**
   * <p>The tags to apply to the resources that are created during instance launch. These tags
   *             are not applied to the launch template.</p>
   * @public
   */
  TagSpecifications?: LaunchTemplateTagSpecificationRequest[] | undefined;

  /**
   * <p>Deprecated.</p>
   *          <note>
   *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024.</p>
   *          </note>
   *
   * @deprecated Specifying Elastic Graphics accelerators is no longer supported on the RunInstances API.
   * @public
   */
  ElasticGpuSpecifications?: ElasticGpuSpecification[] | undefined;

  /**
   * <note>
   *             <p>Amazon Elastic Inference is no longer available.</p>
   *          </note>
   *          <p>An elastic inference accelerator to associate with the instance. Elastic inference
   *             accelerators are a resource you can attach to your Amazon EC2 instances to accelerate
   *             your Deep Learning (DL) inference workloads.</p>
   *          <p>You cannot specify accelerators from different generations in the same request.</p>
   *
   * @deprecated Specifying Elastic Inference accelerators is no longer supported on the RunInstances API.
   * @public
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAccelerator[] | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   *          <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface instead of using this parameter.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The names of the security groups. For a nondefault VPC, you must use security group
   *             IDs instead.</p>
   *          <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface instead of using this parameter.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The market (purchasing) option for the instances.</p>
   * @public
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptionsRequest | undefined;

  /**
   * <p>The credit option for CPU usage of the instance. Valid only for T instances.</p>
   * @public
   */
  CreditSpecification?: CreditSpecificationRequest | undefined;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">CPU
   *                 options for Amazon EC2 instances</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  CpuOptions?: LaunchTemplateCpuOptionsRequest | undefined;

  /**
   * <p>The Capacity Reservation targeting option. If you do not specify this parameter, the
   *             instance's Capacity Reservation preference defaults to <code>open</code>, which enables
   *             it to run in any open Capacity Reservation that has matching attributes (instance type,
   *             platform, Availability Zone).</p>
   * @public
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationRequest | undefined;

  /**
   * <p>The license configurations.</p>
   * @public
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfigurationRequest[] | undefined;

  /**
   * <p>Indicates whether an instance is enabled for hibernation. This parameter is valid only
   *             if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
   *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your Amazon EC2 instance</a>
   *             in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  HibernationOptions?: LaunchTemplateHibernationOptionsRequest | undefined;

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure
   *                 the Instance Metadata Service options</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptionsRequest | undefined;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more
   *             information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">What is Nitro Enclaves?</a> in the
   *                 <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
   *          <p>You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same instance.</p>
   * @public
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptionsRequest | undefined;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with these attributes.</p>
   *          <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes
   *          are optional. Any unspecified optional attribute is set to its default.</p>
   *          <p>When you specify multiple attributes, you get instance types that satisfy all of the
   *          specified attributes. If you specify multiple values for an attribute, you get instance
   *          types that satisfy any of the specified values.</p>
   *          <p>To limit the list of instance types from which Amazon EC2 can identify matching instance types,
   *          you can use one of the following parameters, but not both in the same request:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AllowedInstanceTypes</code> - The instance types to include in the list. All
   *                other instance types are ignored, even if they match your specified attributes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ExcludedInstanceTypes</code> - The instance types to exclude from the list,
   *                even if they match your specified attributes.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *             <p>Attribute-based instance type selection is only supported when using Auto Scaling
   *             groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in
   *             the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html">launch instance
   *                wizard</a>, or with the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> API or
   *               <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html">AWS::EC2::Instance</a> Amazon Web Services CloudFormation resource, you can't specify <code>InstanceRequirements</code>.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Specify attributes for instance type selection for EC2 Fleet or Spot Fleet</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
   *             placement score</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  InstanceRequirements?: InstanceRequirementsRequest | undefined;

  /**
   * <p>The options for the instance hostname. The default values are inherited from the
   *             subnet.</p>
   * @public
   */
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptionsRequest | undefined;

  /**
   * <p>The maintenance options for the instance.</p>
   * @public
   */
  MaintenanceOptions?: LaunchTemplateInstanceMaintenanceOptionsRequest | undefined;

  /**
   * <p>Indicates whether to enable the instance for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html">Enable stop protection for your EC2 instances</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  DisableApiStop?: boolean | undefined;

  /**
   * <p>The entity that manages the launch template.</p>
   * @public
   */
  Operator?: OperatorRequest | undefined;

  /**
   * <p>Contains launch template settings to boost network performance for the type of
   *             workload that runs on your instance.</p>
   * @public
   */
  NetworkPerformanceOptions?: LaunchTemplateNetworkPerformanceOptionsRequest | undefined;
}

/**
 * @public
 */
export interface CreateLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. If a client token isn't specified, a randomly generated token is used in the
   *             request to ensure idempotency.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *          <p>Constraint: Maximum 128 ASCII characters.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A name for the launch template.</p>
   * @public
   */
  LaunchTemplateName: string | undefined;

  /**
   * <p>A description for the first version of the launch template.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The information for the launch template.</p>
   * @public
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;

  /**
   * <p>Reserved for internal use.</p>
   * @public
   */
  Operator?: OperatorRequest | undefined;

  /**
   * <p>The tags to apply to the launch template on creation. To tag the launch template, the
   *             resource type must be <code>launch-template</code>.</p>
   *          <p>To specify the tags for the resources that are created when an instance is launched,
   *             you must use the <code>TagSpecifications</code> parameter in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestLaunchTemplateData.html">launch template
   *                 data</a> structure.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * <p>Describes a launch template.</p>
 * @public
 */
export interface LaunchTemplate {
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
   * <p>The time launch template was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The principal that created the launch template. </p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The version number of the default version of the launch template.</p>
   * @public
   */
  DefaultVersionNumber?: number | undefined;

  /**
   * <p>The version number of the latest version of the launch template.</p>
   * @public
   */
  LatestVersionNumber?: number | undefined;

  /**
   * <p>The tags for the launch template.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The entity that manages the launch template.</p>
   * @public
   */
  Operator?: OperatorResponse | undefined;
}

/**
 * <p>The error code and error message that is returned for a parameter or parameter
 *             combination that is not valid when a new launch template or new version of a launch
 *             template is created.</p>
 * @public
 */
export interface ValidationError {
  /**
   * <p>The error code that indicates why the parameter or parameter combination is not valid.
   *             For more information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The error message that describes why the parameter or parameter combination is not
   *             valid. For more information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The error codes and error messages that are returned for the parameters or parameter
 *             combinations that are not valid when a new launch template or new version of a launch
 *             template is created.</p>
 * @public
 */
export interface ValidationWarning {
  /**
   * <p>The error codes and error messages.</p>
   * @public
   */
  Errors?: ValidationError[] | undefined;
}

/**
 * @public
 */
export interface CreateLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   * @public
   */
  LaunchTemplate?: LaunchTemplate | undefined;

  /**
   * <p>If the launch template contains parameters or parameter combinations that are not
   *             valid, an error code and an error message are returned for each issue that's
   *             found.</p>
   * @public
   */
  Warning?: ValidationWarning | undefined;
}

/**
 * @public
 */
export interface CreateLaunchTemplateVersionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. If a client token isn't specified, a randomly generated token is used in the
   *             request to ensure idempotency.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *          <p>Constraint: Maximum 128 ASCII characters.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the launch template ID or the launch template name, but not
   *             both.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify either the launch template ID or the launch template name, but not
   *             both.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The version of the launch template on which to base the new version. Snapshots applied
   *             to the block device mapping are ignored when creating a new version unless they are
   *             explicitly included.</p>
   *          <p>If you specify this parameter, the new version inherits the launch parameters from the
   *             source version. If you specify additional launch parameters for the new version, they
   *             overwrite any corresponding launch parameters inherited from the source version.</p>
   *          <p>If you omit this parameter, the new version contains only the launch parameters that
   *             you specify for the new version.</p>
   * @public
   */
  SourceVersion?: string | undefined;

  /**
   * <p>A description for the version of the launch template.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The information for the launch template.</p>
   * @public
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;

  /**
   * <p>If <code>true</code>, and if a Systems Manager parameter is specified for
   *                 <code>ImageId</code>, the AMI ID is displayed in the response for
   *                 <code>imageID</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems Manager parameter instead of an AMI ID</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  ResolveAlias?: boolean | undefined;
}

/**
 * <p>Describes a block device for an EBS volume.</p>
 * @public
 */
export interface LaunchTemplateEbsBlockDevice {
  /**
   * <p>Indicates whether the EBS volume is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports. </p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key to use for EBS encryption.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The size of the volume, in GiB.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>The volume type.</p>
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * <p>The Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate) specified for the volume, in MiB/s.
   *             If no volume initialization rate was specified, the value is <code>null</code>.</p>
   * @public
   */
  VolumeInitializationRate?: number | undefined;
}

/**
 * <p>Describes a block device mapping.</p>
 * @public
 */
export interface LaunchTemplateBlockDeviceMapping {
  /**
   * <p>The device name.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The virtual device name (ephemeralN).</p>
   * @public
   */
  VirtualName?: string | undefined;

  /**
   * <p>Information about the block device for an EBS volume.</p>
   * @public
   */
  Ebs?: LaunchTemplateEbsBlockDevice | undefined;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   * @public
   */
  NoDevice?: string | undefined;
}

/**
 * <p>Describes a target Capacity Reservation or Capacity Reservation group.</p>
 * @public
 */
export interface CapacityReservationTargetResponse {
  /**
   * <p>The ID of the targeted Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The ARN of the targeted Capacity Reservation group.</p>
   * @public
   */
  CapacityReservationResourceGroupArn?: string | undefined;
}

/**
 * <p>Information about the Capacity Reservation targeting option.</p>
 * @public
 */
export interface LaunchTemplateCapacityReservationSpecificationResponse {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity
   *                     Reservation that has matching attributes (instance type, platform, Availability
   *                     Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even
   *                     if one is available. The instance runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation
   *             group.</p>
   * @public
   */
  CapacityReservationTarget?: CapacityReservationTargetResponse | undefined;
}

/**
 * <p>The CPU options for the instance.</p>
 * @public
 */
export interface LaunchTemplateCpuOptions {
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
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html">AMD SEV-SNP
   *                 for Amazon EC2 instances</a>.</p>
   * @public
   */
  AmdSevSnp?: AmdSevSnpSpecification | undefined;
}

/**
 * <p>Describes the credit option for CPU usage of a T instance.</p>
 * @public
 */
export interface CreditSpecification {
  /**
   * <p>The credit option for CPU usage of a T instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   * @public
   */
  CpuCredits?: string | undefined;
}

/**
 * <p>Deprecated.</p>
 *          <note>
 *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024.</p>
 *          </note>
 * @public
 */
export interface ElasticGpuSpecificationResponse {
  /**
   * <p>Deprecated.</p>
   *          <note>
   *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024.</p>
   *          </note>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Inference is no longer available.</p>
 *          </note>
 *          <p> Describes an elastic inference accelerator. </p>
 * @public
 */
export interface LaunchTemplateElasticInferenceAcceleratorResponse {
  /**
   * <p>The type of elastic inference accelerator. The possible values are eia1.medium,
   *             eia1.large, and eia1.xlarge. </p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The number of elastic inference accelerators to attach to the instance. </p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
 * @public
 */
export interface LaunchTemplateEnclaveOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for Amazon Web Services Nitro
   *             Enclaves; otherwise, it is not enabled for Amazon Web Services Nitro Enclaves.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Indicates whether an instance is configured for hibernation.</p>
 * @public
 */
export interface LaunchTemplateHibernationOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for
   *             hibernation; otherwise, it is not enabled for hibernation.</p>
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * <p>Describes an IAM instance profile.</p>
 * @public
 */
export interface LaunchTemplateIamInstanceProfileSpecification {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the instance profile.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The options for Spot Instances.</p>
 * @public
 */
export interface LaunchTemplateSpotMarketOptions {
  /**
   * <p>The maximum hourly price you're willing to pay for a Spot Instance. We do not
   *             recommend using this parameter because it can lead to increased interruptions. If you do
   *             not specify this parameter, you will pay the current Spot price. If you do specify this
   *             parameter, it must be more than USD $0.001. Specifying a value below USD $0.001 will
   *             result in an <code>InvalidParameterValue</code> error message when the launch template
   *             is used to launch an instance.</p>
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * <p>The Spot Instance request type.</p>
   * @public
   */
  SpotInstanceType?: SpotInstanceType | undefined;

  /**
   * <p>The required duration for the Spot Instances (also known as Spot blocks), in minutes.
   *             This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).</p>
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * <p>The end date of the request. For a one-time request, the request remains active until
   *             all instances launch, the request is canceled, or this date is reached. If the request
   *             is persistent, it remains active until it is canceled or this date and time is
   *             reached.</p>
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
 * <p>The market (purchasing) option for the instances.</p>
 * @public
 */
export interface LaunchTemplateInstanceMarketOptions {
  /**
   * <p>The market type.</p>
   * @public
   */
  MarketType?: MarketType | undefined;

  /**
   * <p>The options for Spot Instances.</p>
   * @public
   */
  SpotOptions?: LaunchTemplateSpotMarketOptions | undefined;
}

/**
 * <p>Describes a license configuration.</p>
 * @public
 */
export interface LaunchTemplateLicenseConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * <p>The maintenance options of your instance.</p>
 * @public
 */
export interface LaunchTemplateInstanceMaintenanceOptions {
  /**
   * <p>Disables the automatic recovery behavior of your instance or sets it to
   *             default.</p>
   * @public
   */
  AutoRecovery?: LaunchTemplateAutoRecoveryState | undefined;
}

/**
 * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Use
 *                 instance metadata to manage your EC2 instance</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface LaunchTemplateInstanceMetadataOptions {
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
  State?: LaunchTemplateInstanceMetadataOptionsState | undefined;

  /**
   * <p>Indicates whether IMDSv2 is required.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - IMDSv2 is optional. You can choose whether to send a
   *                     session token in your instance metadata retrieval requests. If you retrieve IAM
   *                     role credentials without a session token, you receive the IMDSv1 role
   *                     credentials. If you retrieve IAM role credentials using a valid session token,
   *                     you receive the IMDSv2 role credentials.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - IMDSv2 is required. You must send a session token in
   *                     your instance metadata retrieval requests. With this option, retrieving the IAM
   *                     role credentials always returns IMDSv2 credentials; IMDSv1 credentials are not
   *                     available.</p>
   *             </li>
   *          </ul>
   * @public
   */
  HttpTokens?: LaunchTemplateHttpTokensState | undefined;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If the parameter is
   *             not specified, the default state is <code>enabled</code>.</p>
   *          <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access
   *                 your instance metadata. </p>
   *          </note>
   * @public
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState | undefined;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   * @public
   */
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6 | undefined;

  /**
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-tags-in-IMDS.html">View tags for your EC2
   *                 instances using instance metadata</a>.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   * @public
   */
  InstanceMetadataTags?: LaunchTemplateInstanceMetadataTagsState | undefined;
}

/**
 * <p>Describes the monitoring for the instance.</p>
 * @public
 */
export interface LaunchTemplatesMonitoring {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>A security group connection tracking specification that enables you to set the idle
 *             timeout for connection tracking on an Elastic network interface. For more information,
 *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Connection tracking timeouts</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface ConnectionTrackingSpecification {
  /**
   * <p>Timeout (in seconds) for idle TCP
   * 						connections in an established state. Min: 60 seconds. Max: 432000 seconds (5
   * 						days). Default: 432000 seconds. Recommended: Less than 432000 seconds.</p>
   * @public
   */
  TcpEstablishedTimeout?: number | undefined;

  /**
   * <p>Timeout (in seconds) for idle UDP flows that
   * 						have seen traffic only in a single direction or a single request-response
   * 						transaction. Min: 30 seconds. Max: 60 seconds. Default: 30 seconds.</p>
   * @public
   */
  UdpTimeout?: number | undefined;

  /**
   * <p>Timeout (in seconds) for idle UDP
   * 						flows classified as streams which have seen more than one request-response
   * 						transaction. Min: 60 seconds. Max: 180 seconds (3 minutes). Default: 180
   * 						seconds.</p>
   * @public
   */
  UdpStreamTimeout?: number | undefined;
}

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
   * <p>The ID of the Availability Zone of the instance.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

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

  /**
   * <p>The ID of the IPAM prefix list resolver target associated with this managed prefix list. When set, this prefix list becomes an IPAM managed prefix list.</p>
   *          <p>An IPAM-managed prefix list is a customer-managed prefix list that has been associated with an IPAM prefix list resolver target. When a prefix list becomes IPAM managed, its CIDRs are automatically synchronized based on the IPAM prefix list resolver's CIDR selection rules, and direct CIDR modifications are restricted.</p>
   * @public
   */
  IpamPrefixListResolverTargetId?: string | undefined;

  /**
   * <p>Indicates whether synchronization with an IPAM prefix list resolver is enabled for this managed prefix list. When enabled, the prefix list CIDRs are automatically updated based on the resolver's CIDR selection rules.</p>
   * @public
   */
  IpamPrefixListResolverSyncEnabled?: boolean | undefined;
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
 * <p>For regional NAT gateways only: The configuration specifying which Elastic IP address (EIP) to use for handling outbound NAT traffic from a specific Availability Zone. </p>
 *          <p>A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html">Regional NAT gateways for automatic multi-AZ expansion</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @public
 */
export interface AvailabilityZoneAddress {
  /**
   * <p>For regional NAT gateways only: The Availability Zone where this specific NAT gateway configuration will be active. Each AZ in a regional NAT gateway has its own configuration to handle outbound NAT traffic from that AZ. </p>
   *          <p>A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>For regional NAT gateways only: The ID of the Availability Zone where this specific NAT gateway configuration will be active. Each AZ in a regional NAT gateway has its own configuration to handle outbound NAT traffic from that AZ. Use this instead of AvailabilityZone for consistent identification of AZs across Amazon Web Services Regions. </p>
   *          <p>A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The allocation IDs of the Elastic IP addresses (EIPs) to be used for handling outbound NAT traffic in this specific Availability Zone.</p>
   * @public
   */
  AllocationIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateNatGatewayRequest {
  /**
   * <p>Specifies whether to create a zonal (single-AZ) or regional (multi-AZ) NAT gateway. Defaults to <code>zonal</code>.</p>
   *          <p>A zonal NAT gateway is a NAT Gateway that provides redundancy and scalability within a single availability zone. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html">Regional NAT gateways for automatic multi-AZ expansion</a> in the <i>Amazon VPC User Guide</i>.</p>
   * @public
   */
  AvailabilityMode?: AvailabilityMode | undefined;

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
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the VPC where you want to create a regional NAT gateway.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ. The regional NAT gateway uses these EIPs to handle outbound NAT traffic from their respective AZs. If not specified, the NAT gateway will automatically expand to new AZs and associate EIPs upon detection of an elastic network interface. If you specify this parameter, auto-expansion is disabled and you must manually manage AZ coverage.</p>
   *          <p>A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html">Regional NAT gateways for automatic multi-AZ expansion</a> in the <i>Amazon VPC User Guide</i>.</p>
   * @public
   */
  AvailabilityZoneAddresses?: AvailabilityZoneAddress[] | undefined;

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

  /**
   * <p>Indicates whether this is a zonal (single-AZ) or regional (multi-AZ) NAT gateway.</p>
   *          <p>A zonal NAT gateway is a NAT Gateway that provides redundancy and scalability within a single availability zone. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html">Regional NAT gateways for automatic multi-AZ expansion</a> in the <i>Amazon VPC User Guide</i>.</p>
   * @public
   */
  AvailabilityMode?: AvailabilityMode | undefined;

  /**
   * <p>For regional NAT gateways only: Indicates whether Amazon Web Services automatically allocates additional Elastic IP addresses (EIPs) in an AZ when the NAT gateway needs more ports due to increased concurrent connections to a single destination from that AZ.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html">Regional NAT gateways for automatic multi-AZ expansion</a> in the <i>Amazon VPC User Guide</i>.</p>
   * @public
   */
  AutoScalingIps?: AutoScalingIpsState | undefined;

  /**
   * <p>For regional NAT gateways only: Indicates whether Amazon Web Services automatically manages AZ coverage. When enabled, the NAT gateway associates EIPs in all AZs where your VPC has subnets to handle outbound NAT traffic, expands to new AZs when you create subnets there, and retracts from AZs where you've removed all subnets. When disabled, you must manually manage which AZs the NAT gateway supports and their corresponding EIPs.</p>
   *          <p>A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html">Regional NAT gateways for automatic multi-AZ expansion</a> in the <i>Amazon VPC User Guide</i>.</p>
   * @public
   */
  AutoProvisionZones?: AutoProvisionZonesState | undefined;

  /**
   * <p>For regional NAT gateways only, this is the ID of the NAT gateway.</p>
   * @public
   */
  RouteTableId?: string | undefined;
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

  /**
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;
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
   * <p>The ID of a public IPv4 pool. A public IPv4 pool is a pool of IPv4 addresses that you've brought to Amazon Web Services with BYOIP.</p>
   * @public
   */
  PublicIpv4Pool?: string | undefined;

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
   *             <li>
   *                <p>
   *                   <code>Advertisement</code> - The route was created dynamically by Amazon VPC Route Server.</p>
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

  /**
   * <p>The next hop IP address for routes propagated by VPC Route
   *             Server into VPC route tables.</p>
   * @public
   */
  IpAddress?: string | undefined;
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
   * <p>The ID of the volume that was used to create the snapshot. Snapshots created by a copy
   *       snapshot operation have an arbitrary volume ID that you should not use for any purpose.</p>
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
