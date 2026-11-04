// smithy-typescript generated code
import type {
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
  BlockPublicAccessMode,
  BootModeOverrideValues,
  BurstablePerformance,
  CapacityReservationFleetState,
  CapacityReservationInstancePlatform,
  CapacityReservationPreference,
  CarrierGatewayState,
  ClientVpnAuthenticationType,
  ClientVpnDeviceTrustProviderType,
  ClientVpnEndpointStatusCode,
  ClientVpnRouteStatusCode,
  ConnectivityType,
  ContainerFormat,
  CpuManufacturer,
  DefaultTargetCapacityType,
  DestinationFileFormat,
  DiskImageFormat,
  Ec2InstanceConnectEndpointState,
  EndpointIpAddressType,
  ExportEnvironment,
  ExportTaskState,
  FleetCapacityReservationTenancy,
  FleetCapacityReservationUsageStrategy,
  FleetExcessCapacityTerminationPolicy,
  FleetHttpTokensState,
  FleetInstanceMatchCriteria,
  FleetInstanceMetadataEndpointState,
  FleetOnDemandAllocationStrategy,
  FleetReplacementStrategy,
  FleetReservationType,
  FleetType,
  FlowLogsResourceType,
  GatewayType,
  HostnameType,
  InstanceBandwidthWeighting,
  InstanceGeneration,
  InstanceInterruptionBehavior,
  InstanceLifecycle,
  InterruptibleCapacityReservationAllocationStatus,
  InterruptionType,
  IpAddressType,
  IpamExternalResourceVerificationTokenState,
  IpamInternetRegistryAssociationState,
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
  MacModificationTaskState,
  MacModificationTaskType,
  MacSystemIntegrityProtectionSettingStatus,
  MarketType,
  NatGatewayApplianceModifyState,
  NatGatewayApplianceState,
  NatGatewayApplianceType,
  NatGatewayState,
  NestedVirtualizationSpecification,
  NetworkInterfaceCreationType,
  PlatformValues,
  PrefixListState,
  Protocol,
  ReservedCapacityAllocationStrategy,
  ReservedCapacityFallbackMarketType,
  ResourceType,
  Rir,
  RuleAction,
  SecondaryInterfaceType,
  SelfServicePortal,
  ShutdownBehavior,
  SnapshotLocationEnum,
  SpotAllocationStrategy,
  SpotInstanceInterruptionBehavior,
  SpotInstanceType,
  SubnetState,
  TaggableResourceType,
  TargetCapacityUnitType,
  Tenancy,
  TokenState,
  TrafficIpAddressType,
  TrafficType,
  TransportProtocol,
  VolumeType,
  VpcEncryptionControlExclusionState,
  VpcEncryptionControlMode,
  VpcEncryptionControlState,
  VpcState,
  WeekDay,
  ZeroSizePreference,
} from "./enums";
import type {
  AcceleratorCount,
  AcceleratorCountRequest,
  AcceleratorTotalMemoryMiB,
  AcceleratorTotalMemoryMiBRequest,
  AccessScopePath,
  AccessScopePathRequest,
  AddIpamOperatingRegion,
  AddPrefixListEntry,
  BaselineEbsBandwidthMbpsRequest,
  BaselinePerformanceFactorsRequest,
  InstanceEventWindow,
  IpamRoutingPolicyRegistrationDelta,
  MemoryGiBPerVCpuRequest,
  MemoryMiBRequest,
  NatGatewayAddress,
  OperatorResponse,
  PortRange,
  SubnetIpv6CidrBlockAssociation,
  Tag,
  TagSpecification,
  UnsuccessfulItem,
  VpcCidrBlockAssociation,
  VpcIpv6CidrBlockAssociation,
} from "./models_0";

/**
 * The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
 *
 * > **Note:** Setting the minimum bandwidth does not guarantee that your instance will achieve the minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum bandwidth, but the actual bandwidth of your instance might go below the specified minimum at times. For more information, see [Available instance bandwidth](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface NetworkBandwidthGbpsRequest {
  /**
   * The minimum amount of network bandwidth, in Gbps. To specify no minimum limit, omit this parameter.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum amount of network bandwidth, in Gbps. To specify no maximum limit, omit this parameter.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The minimum and maximum number of network interfaces.
 *
 * @public
 */
export interface NetworkInterfaceCountRequest {
  /**
   * The minimum number of network interfaces. To specify no minimum limit, omit this parameter.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum number of network interfaces. To specify no maximum limit, omit this parameter.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The minimum and maximum amount of total local storage, in GB.
 *
 * @public
 */
export interface TotalLocalStorageGBRequest {
  /**
   * The minimum amount of total local storage, in GB. To specify no minimum limit, omit this parameter.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum amount of total local storage, in GB. To specify no maximum limit, omit this parameter.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The minimum and maximum number of vCPUs.
 *
 * @public
 */
export interface VCpuCountRangeRequest {
  /**
   * The minimum number of vCPUs. To specify no minimum limit, specify `0`.
   *
   * @public
   */
  Min: number | undefined;

  /**
   * The maximum number of vCPUs. To specify no maximum limit, omit this parameter.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes.
 *
 * You must specify `VCpuCount` and `MemoryMiB`. All other attributes are optional. Any unspecified optional attribute is set to its default.
 *
 * When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.
 *
 * To limit the list of instance types from which Amazon EC2 can identify matching instance types, you can use one of the following parameters, but not both in the same request:
 *
 * - `AllowedInstanceTypes` - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.
 * - `ExcludedInstanceTypes` - The instance types to exclude from the list, even if they match your specified attributes.
 *
 * > **Note:**
 * >
 * > If you specify `InstanceRequirements`, you can't specify `InstanceType`.
 * >
 * > Attribute-based instance type selection is only supported when using Auto Scaling groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in the [launch instance wizard](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html), or with the [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) API or [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) Amazon Web Services CloudFormation resource, you can't specify `InstanceRequirements`.
 *
 * For more information, see [Specify attributes for instance type selection for EC2 Fleet or Spot Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html) and [Spot placement score](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface InstanceRequirementsRequest {
  /**
   * The minimum and maximum number of vCPUs.
   *
   * @public
   */
  VCpuCount: VCpuCountRangeRequest | undefined;

  /**
   * The minimum and maximum amount of memory, in MiB.
   *
   * @public
   */
  MemoryMiB: MemoryMiBRequest | undefined;

  /**
   * The CPU manufacturers to include.
   *
   * - For instance types with Intel CPUs, specify `intel`.
   * - For instance types with AMD CPUs, specify `amd`.
   * - For instance types with Amazon Web Services CPUs, specify `amazon-web-services`.
   * - For instance types with Apple CPUs, specify `apple`.
   *
   * > **Note:** Don't confuse the CPU manufacturer with the CPU architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template.
   *
   * Default: Any manufacturer
   *
   * @public
   */
  CpuManufacturers?: CpuManufacturer[] | undefined;

  /**
   * The minimum and maximum amount of memory per vCPU, in GiB.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest | undefined;

  /**
   * The instance types to exclude.
   *
   * You can use strings with one or more wild cards, represented by an asterisk (`*`), to exclude an instance family, type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`.
   *
   * For example, if you specify `c5*`,Amazon EC2 will exclude the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, Amazon EC2 will exclude all the M5a instance types, but not the M5n instance types.
   *
   * > **Note:** If you specify `ExcludedInstanceTypes`, you can't specify `AllowedInstanceTypes`.
   *
   * Default: No excluded instance types
   *
   * @public
   */
  ExcludedInstanceTypes?: string[] | undefined;

  /**
   * Indicates whether current or previous generation instance types are included. The current generation instance types are recommended for use. Current generation instance types are typically the latest two to three generations in each instance family. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
   *
   * For current generation instance types, specify `current`.
   *
   * For previous generation instance types, specify `previous`.
   *
   * Default: Current and previous generation instance types
   *
   * @public
   */
  InstanceGenerations?: InstanceGeneration[] | undefined;

  /**
   * [Price protection] The price protection threshold for Spot Instances, as a percentage higher than an identified Spot price. The identified Spot price is the Spot price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified Spot price is from the lowest priced current generation instance types, and failing that, from the lowest priced previous generation instance types that match your attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose Spot price exceeds your specified threshold.
   *
   * The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
   *
   * If you set `TargetCapacityUnitType` to `vcpu` or `memory-mib`, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.
   *
   * This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html) and [GetInstanceTypesFromInstanceRequirements](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html).
   *
   * > **Note:** Only one of `SpotMaxPricePercentageOverLowestPrice` or `MaxSpotPriceAsPercentageOfOptimalOnDemandPrice` can be specified. If you don't specify either, Amazon EC2 will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as `999999`.
   *
   * Default: `100`
   *
   * @public
   */
  SpotMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * [Price protection] The price protection threshold for On-Demand Instances, as a percentage higher than an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose price exceeds your specified threshold.
   *
   * The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
   *
   * To indicate no price protection threshold, specify a high value, such as `999999`.
   *
   * This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html) and [GetInstanceTypesFromInstanceRequirements](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html).
   *
   * > **Note:** If you set `TargetCapacityUnitType` to `vcpu` or `memory-mib`, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.
   *
   * Default: `20`
   *
   * @public
   */
  OnDemandMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * Indicates whether bare metal instance types must be included, excluded, or required.
   *
   * - To include bare metal instance types, specify `included`.
   * - To require only bare metal instance types, specify `required`.
   * - To exclude bare metal instance types, specify `excluded`.
   *
   * Default: `excluded`
   *
   * @public
   */
  BareMetal?: BareMetal | undefined;

  /**
   * Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html).
   *
   * - To include burstable performance instance types, specify `included`.
   * - To require only burstable performance instance types, specify `required`.
   * - To exclude burstable performance instance types, specify `excluded`.
   *
   * Default: `excluded`
   *
   * @public
   */
  BurstablePerformance?: BurstablePerformance | undefined;

  /**
   * Indicates whether instance types must support hibernation for On-Demand Instances.
   *
   * This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html).
   *
   * Default: `false`
   *
   * @public
   */
  RequireHibernateSupport?: boolean | undefined;

  /**
   * The minimum and maximum number of network interfaces.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  NetworkInterfaceCount?: NetworkInterfaceCountRequest | undefined;

  /**
   * Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, [Amazon EC2 instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html) in the *Amazon EC2 User Guide*.
   *
   * - To include instance types with instance store volumes, specify `included`.
   * - To require only instance types with instance store volumes, specify `required`.
   * - To exclude instance types with instance store volumes, specify `excluded`.
   *
   * Default: `included`
   *
   * @public
   */
  LocalStorage?: LocalStorage | undefined;

  /**
   * The type of local storage that is required.
   *
   * - For instance types with hard disk drive (HDD) storage, specify `hdd`.
   * - For instance types with solid state drive (SSD) storage, specify `ssd`.
   *
   * Default: `hdd` and `ssd`
   *
   * @public
   */
  LocalStorageTypes?: LocalStorageType[] | undefined;

  /**
   * The minimum and maximum amount of total local storage, in GB.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  TotalLocalStorageGB?: TotalLocalStorageGBRequest | undefined;

  /**
   * The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the *Amazon EC2 User Guide*.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest | undefined;

  /**
   * The accelerator types that must be on the instance type.
   *
   * - For instance types with FPGA accelerators, specify `fpga`.
   * - For instance types with GPU accelerators, specify `gpu`.
   * - For instance types with Inference accelerators, specify `inference`.
   * - For instance types with Media accelerators, specify `media`.
   *
   * Default: Any accelerator type
   *
   * @public
   */
  AcceleratorTypes?: AcceleratorType[] | undefined;

  /**
   * The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an instance.
   *
   * To exclude accelerator-enabled instance types, set `Max` to `0`.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  AcceleratorCount?: AcceleratorCountRequest | undefined;

  /**
   * Indicates whether instance types must have accelerators by specific manufacturers.
   *
   * - For instance types with Amazon Web Services devices, specify `amazon-web-services`.
   * - For instance types with AMD devices, specify `amd`.
   * - For instance types with Habana devices, specify `habana`.
   * - For instance types with NVIDIA devices, specify `nvidia`.
   * - For instance types with Xilinx devices, specify `xilinx`.
   *
   * Default: Any manufacturer
   *
   * @public
   */
  AcceleratorManufacturers?: AcceleratorManufacturer[] | undefined;

  /**
   * The accelerators that must be on the instance type.
   *
   * - For instance types with NVIDIA A10G GPUs, specify `a10g`.
   * - For instance types with NVIDIA A100 GPUs, specify `a100`.
   * - For instance types with NVIDIA H100 GPUs, specify `h100`.
   * - For instance types with Amazon Web Services Inferentia chips, specify `inferentia`.
   * - For instance types with Amazon Web Services Inferentia2 chips, specify `inferentia2`.
   * - For instance types with Habana Gaudi HL-205 GPUs, specify `gaudi-hl-205`.
   * - For instance types with NVIDIA GRID K520 GPUs, specify `k520`.
   * - For instance types with NVIDIA K80 GPUs, specify `k80`.
   * - For instance types with NVIDIA L4 GPUs, specify `l4`.
   * - For instance types with NVIDIA L40S GPUs, specify `l40s`.
   * - For instance types with NVIDIA M60 GPUs, specify `m60`.
   * - For instance types with AMD Radeon Pro V520 GPUs, specify `radeon-pro-v520`.
   * - For instance types with Amazon Web Services Trainium chips, specify `trainium`.
   * - For instance types with Amazon Web Services Trainium2 chips, specify `trainium2`.
   * - For instance types with NVIDIA T4 GPUs, specify `t4`.
   * - For instance types with NVIDIA T4G GPUs, specify `t4g`.
   * - For instance types with Xilinx U30 cards, specify `u30`.
   * - For instance types with Xilinx VU9P FPGAs, specify `vu9p`.
   * - For instance types with NVIDIA V100 GPUs, specify `v100`.
   *
   * Default: Any accelerator
   *
   * @public
   */
  AcceleratorNames?: AcceleratorName[] | undefined;

  /**
   * The minimum and maximum amount of total accelerator memory, in MiB.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest | undefined;

  /**
   * The minimum and maximum amount of baseline network bandwidth, in gigabits per second (Gbps). For more information, see [Amazon EC2 instance network bandwidth](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html) in the *Amazon EC2 User Guide*.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest | undefined;

  /**
   * The instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes.
   *
   * You can use strings with one or more wild cards, represented by an asterisk (`*`), to allow an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`.
   *
   * For example, if you specify `c5*`,Amazon EC2 will allow the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, Amazon EC2 will allow all the M5a instance types, but not the M5n instance types.
   *
   * > **Note:** If you specify `AllowedInstanceTypes`, you can't specify `ExcludedInstanceTypes`.
   *
   * Default: All instance types
   *
   * @public
   */
  AllowedInstanceTypes?: string[] | undefined;

  /**
   * [Price protection] The price protection threshold for Spot Instances, as a percentage of an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from the lowest priced current generation instance types, and failing that, from the lowest priced previous generation instance types that match your attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose price exceeds your specified threshold.
   *
   * The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
   *
   * If you set `TargetCapacityUnitType` to `vcpu` or `memory-mib`, the price protection threshold is based on the per vCPU or per memory price instead of the per instance price.
   *
   * > **Note:** Only one of `SpotMaxPricePercentageOverLowestPrice` or `MaxSpotPriceAsPercentageOfOptimalOnDemandPrice` can be specified. If you don't specify either, Amazon EC2 will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as `999999`.
   *
   * @public
   */
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number | undefined;

  /**
   * The baseline performance to consider, using an instance family as a baseline reference. The instance family establishes the lowest acceptable level of performance. Amazon EC2 uses this baseline to guide instance type selection, but there is no guarantee that the selected instance types will always exceed the baseline for every application. Currently, this parameter only supports CPU performance as a baseline performance factor. For more information, see [Performance protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-abis-performance-protection) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  BaselinePerformanceFactors?: BaselinePerformanceFactorsRequest | undefined;

  /**
   * Specifies whether instance types must support encrypting in-transit traffic between instances. For more information, including the supported instance types, see [Encryption in transit](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/data-protection.html#encryption-transit) in the *Amazon EC2 User Guide*.
   *
   * Default: `false`
   *
   * @public
   */
  RequireEncryptionInTransit?: boolean | undefined;
}

/**
 * Information about an instance type to use in a Capacity Reservation Fleet.
 *
 * @public
 */
export interface ReservationFleetInstanceSpecification {
  /**
   * The instance type for which the Capacity Reservation Fleet reserves capacity.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The type of operating system for which the Capacity Reservation Fleet reserves capacity.
   *
   * @public
   */
  InstancePlatform?: CapacityReservationInstancePlatform | undefined;

  /**
   * The number of capacity units provided by the specified instance type. This value, together with the total target capacity that you specify for the Fleet determine the number of instances for which the Fleet reserves capacity. Both values are based on units that make sense for your workload. For more information, see [Total target capacity](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  Weight?: number | undefined;

  /**
   * The Availability Zone in which the Capacity Reservation Fleet reserves the capacity. A Capacity Reservation Fleet can't span Availability Zones. All instance type specifications that you specify for the Fleet must use the same Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone in which the Capacity Reservation Fleet reserves the capacity. A Capacity Reservation Fleet can't span Availability Zones. All instance type specifications that you specify for the Fleet must use the same Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * Indicates whether the Capacity Reservation Fleet supports EBS-optimized instances types. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using EBS-optimized instance types.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * The priority to assign to the instance type. This value is used to determine which of the instance types specified for the Fleet should be prioritized for use. A lower value indicates a high priority. For more information, see [Instance type priority](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#instance-priority) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  Priority?: number | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationFleetRequest {
  /**
   * The strategy used by the Capacity Reservation Fleet to determine which of the specified instance types to use. Currently, only the `prioritized` allocation strategy is supported. For more information, see [Allocation strategy](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#allocation-strategy) in the *Amazon EC2 User Guide*.
   *
   * Valid values: `prioritized`
   *
   * @public
   */
  AllocationStrategy?: string | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensure Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Information about the instance types for which to reserve the capacity.
   *
   * @public
   */
  InstanceTypeSpecifications?: ReservationFleetInstanceSpecification[] | undefined;

  /**
   * Reserved for internal use.
   *
   * @public
   */
  InstanceRequirements?: InstanceRequirementsRequest | undefined;

  /**
   * Reserved for internal use.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Reserved for internal use.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * Indicates the tenancy of the Capacity Reservation Fleet. All Capacity Reservations in the Fleet inherit this tenancy. The Capacity Reservation Fleet can have one of the following tenancy settings:
   *
   * - `default` - The Capacity Reservation Fleet is created on hardware that is shared with other Amazon Web Services accounts.
   * - `dedicated` - The Capacity Reservations are created on single-tenant hardware that is dedicated to a single Amazon Web Services account.
   *
   * @public
   */
  Tenancy?: FleetCapacityReservationTenancy | undefined;

  /**
   * The total number of capacity units to be reserved by the Capacity Reservation Fleet. This value, together with the instance type weights that you assign to each instance type used by the Fleet determine the number of instances for which the Fleet reserves capacity. Both values are based on units that make sense for your workload. For more information, see [Total target capacity](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  TotalTargetCapacity: number | undefined;

  /**
   * The date and time at which the Capacity Reservation Fleet expires. When the Capacity Reservation Fleet expires, its state changes to `expired` and all of the Capacity Reservations in the Fleet expire.
   *
   * The Capacity Reservation Fleet expires within an hour after the specified time. For example, if you specify `5/31/2019`, `13:30:55`, the Capacity Reservation Fleet is guaranteed to expire between `13:30:55` and `14:30:55` on `5/31/2019`.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * Indicates the type of instance launches that the Capacity Reservation Fleet accepts. All Capacity Reservations in the Fleet inherit this instance matching criteria.
   *
   * Currently, Capacity Reservation Fleets support `open` instance matching criteria only. This means that instances that have matching attributes (instance type, platform, and Availability Zone) run in the Capacity Reservations automatically. Instances do not need to explicitly target a Capacity Reservation Fleet to use its reserved capacity.
   *
   * @public
   */
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | undefined;

  /**
   * The tags to assign to the Capacity Reservation Fleet. The tags are automatically assigned to the Capacity Reservations in the Fleet.
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
 * Information about a Capacity Reservation in a Capacity Reservation Fleet.
 *
 * @public
 */
export interface FleetCapacityReservation {
  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * The ID of the Availability Zone in which the Capacity Reservation reserves capacity.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The instance type for which the Capacity Reservation reserves capacity.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The type of operating system for which the Capacity Reservation reserves capacity.
   *
   * @public
   */
  InstancePlatform?: CapacityReservationInstancePlatform | undefined;

  /**
   * The Availability Zone in which the Capacity Reservation reserves capacity.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The total number of instances for which the Capacity Reservation reserves capacity.
   *
   * @public
   */
  TotalInstanceCount?: number | undefined;

  /**
   * The number of capacity units fulfilled by the Capacity Reservation. For more information, see [Total target capacity](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  FulfilledCapacity?: number | undefined;

  /**
   * Indicates whether the Capacity Reservation reserves capacity for EBS-optimized instance types.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * The date and time at which the Capacity Reservation was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The weight of the instance type in the Capacity Reservation Fleet. For more information, see [Instance type weight](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#instance-weight) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  Weight?: number | undefined;

  /**
   * The priority of the instance type in the Capacity Reservation Fleet. For more information, see [Instance type priority](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#instance-priority) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  Priority?: number | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationFleetResult {
  /**
   * The ID of the Capacity Reservation Fleet.
   *
   * @public
   */
  CapacityReservationFleetId?: string | undefined;

  /**
   * The status of the Capacity Reservation Fleet.
   *
   * @public
   */
  State?: CapacityReservationFleetState | undefined;

  /**
   * The total number of capacity units for which the Capacity Reservation Fleet reserves capacity.
   *
   * @public
   */
  TotalTargetCapacity?: number | undefined;

  /**
   * The requested capacity units that have been successfully reserved.
   *
   * @public
   */
  TotalFulfilledCapacity?: number | undefined;

  /**
   * The instance matching criteria for the Capacity Reservation Fleet.
   *
   * @public
   */
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | undefined;

  /**
   * The allocation strategy used by the Capacity Reservation Fleet.
   *
   * @public
   */
  AllocationStrategy?: string | undefined;

  /**
   * The date and time at which the Capacity Reservation Fleet was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The date and time at which the Capacity Reservation Fleet expires.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * Indicates the tenancy of Capacity Reservation Fleet.
   *
   * @public
   */
  Tenancy?: FleetCapacityReservationTenancy | undefined;

  /**
   * Information about the individual Capacity Reservations in the Capacity Reservation Fleet.
   *
   * @public
   */
  FleetCapacityReservations?: FleetCapacityReservation[] | undefined;

  /**
   * The tags assigned to the Capacity Reservation Fleet.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCarrierGatewayRequest {
  /**
   * The ID of the VPC to associate with the carrier gateway.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The tags to associate with the carrier gateway.
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
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Describes a carrier gateway.
 *
 * @public
 */
export interface CarrierGateway {
  /**
   * The ID of the carrier gateway.
   *
   * @public
   */
  CarrierGatewayId?: string | undefined;

  /**
   * The ID of the VPC associated with the carrier gateway.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The state of the carrier gateway.
   *
   * @public
   */
  State?: CarrierGatewayState | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the carrier gateway.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The tags assigned to the carrier gateway.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCarrierGatewayResult {
  /**
   * Information about the carrier gateway.
   *
   * @public
   */
  CarrierGateway?: CarrierGateway | undefined;
}

/**
 * Describes the Active Directory to be used for client authentication.
 *
 * @public
 */
export interface DirectoryServiceAuthenticationRequest {
  /**
   * The ID of the Active Directory to be used for authentication.
   *
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * The IAM SAML identity provider used for federated authentication.
 *
 * @public
 */
export interface FederatedAuthenticationRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM SAML identity provider.
   *
   * @public
   */
  SAMLProviderArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM SAML identity provider for the self-service portal.
   *
   * @public
   */
  SelfServiceSAMLProviderArn?: string | undefined;
}

/**
 * Information about the client certificate to be used for authentication.
 *
 * @public
 */
export interface CertificateAuthenticationRequest {
  /**
   * The ARN of the client certificate. The certificate must be signed by a certificate authority (CA) and it must be provisioned in Certificate Manager (ACM).
   *
   * @public
   */
  ClientRootCertificateChainArn?: string | undefined;
}

/**
 * Describes the authentication method to be used by a Client VPN endpoint. For more information, see [Authentication](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/authentication-authrization.html#client-authentication) in the *Client VPN Administrator Guide*.
 *
 * @public
 */
export interface ClientVpnAuthenticationRequest {
  /**
   * The type of client authentication to be used.
   *
   * @public
   */
  Type?: ClientVpnAuthenticationType | undefined;

  /**
   * Information about the Active Directory to be used, if applicable. You must provide this information if **Type** is `directory-service-authentication`.
   *
   * @public
   */
  ActiveDirectory?: DirectoryServiceAuthenticationRequest | undefined;

  /**
   * Information about the authentication certificates to be used, if applicable. You must provide this information if **Type** is `certificate-authentication`.
   *
   * @public
   */
  MutualAuthentication?: CertificateAuthenticationRequest | undefined;

  /**
   * Information about the IAM SAML identity provider to be used, if applicable. You must provide this information if **Type** is `federated-authentication`.
   *
   * @public
   */
  FederatedAuthentication?: FederatedAuthenticationRequest | undefined;
}

/**
 * The options for managing connection authorization for new client connections.
 *
 * @public
 */
export interface ClientConnectOptions {
  /**
   * Indicates whether client connect options are enabled. The default is `false` (not enabled).
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function used for connection authorization.
   *
   * @public
   */
  LambdaFunctionArn?: string | undefined;
}

/**
 * Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.
 *
 * @public
 */
export interface ClientLoginBannerOptions {
  /**
   * Enable or disable a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.
   *
   * Valid values: `true | false`
   *
   * Default value: `false`
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Customizable text that will be displayed in a banner on Amazon Web Services provided clients when a VPN session is established. UTF-8 encoded characters only. Maximum of 1400 characters.
   *
   * @public
   */
  BannerText?: string | undefined;
}

/**
 * Client Route Enforcement is a feature of Client VPN that helps enforce administrator defined routes on devices connected through the VPN. This feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel.
 *
 * Client Route Enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table, reverting it back to the expected route configurations.
 *
 * @public
 */
export interface ClientRouteEnforcementOptions {
  /**
   * Enable or disable Client Route Enforcement. The state can either be `true` (enabled) or `false` (disabled). The default is `false`.
   *
   * Valid values: `true | false`
   *
   * Default value: `false`
   *
   * @public
   */
  Enforced?: boolean | undefined;
}

/**
 * Describes the client connection logging options for the Client VPN endpoint.
 *
 * @public
 */
export interface ConnectionLogOptions {
  /**
   * Indicates whether connection logging is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The name of the CloudWatch Logs log group. Required if connection logging is enabled.
   *
   * @public
   */
  CloudwatchLogGroup?: string | undefined;

  /**
   * The name of the CloudWatch Logs log stream to which the connection data is published.
   *
   * @public
   */
  CloudwatchLogStream?: string | undefined;

  /**
   * Specifies whether to include the authorization policy evaluation context in the connection logs for the Client VPN endpoint.
   *
   * @public
   */
  IncludeAuthorizationPolicyContext?: boolean | undefined;
}

/**
 * Describes a device trust provider to configure for a Client VPN endpoint.
 *
 * @public
 */
export interface ClientVpnTrustProviderRequest {
  /**
   * The type of the device trust provider. Possible values include:
   *
   * - `crowdstrike` - CrowdStrike device trust provider.
   * - `jamf` - Jamf device trust provider.
   * - `jumpcloud` - JumpCloud device trust provider.
   *
   * @public
   */
  TrustProviderType?: ClientVpnDeviceTrustProviderType | undefined;

  /**
   * The tenant ID associated with your device trust provider account.
   *
   * @public
   */
  TenantId?: string | undefined;

  /**
   * The URL of the public signing key that is used to verify the identity token issued by the device trust provider.
   *
   * @public
   */
  PublicSigningKeyUrl?: string | undefined;
}

/**
 * Describes the device posture options for a Client VPN endpoint. Device posture options specify the device trust providers that the endpoint uses to evaluate the security posture of connecting devices.
 *
 * @public
 */
export interface DevicePostureOptions {
  /**
   * The device trust providers to configure for the Client VPN endpoint.
   *
   * @public
   */
  TrustProviders?: ClientVpnTrustProviderRequest[] | undefined;

  /**
   * Indicates whether device posture evaluation is enabled for the Client VPN endpoint. Specify `false` to disable device posture, which clears the configured device trust providers.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * The Transit Gateway configuration for a Client VPN endpoint.
 *
 * @public
 */
export interface TransitGatewayConfigurationInputStructure {
  /**
   * The ID of the Transit Gateway to associate with the Client VPN endpoint.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The Availability Zone names for the Transit Gateway association. You can specify up to the maximum number of Availability Zones supported by the Transit Gateway. You cannot specify both `AvailabilityZones` and `AvailabilityZoneIds`.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The Availability Zone IDs for the Transit Gateway association. You can specify up to the maximum number of Availability Zones supported by the Transit Gateway. You cannot specify both `AvailabilityZones` and `AvailabilityZoneIds`.
   *
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateClientVpnEndpointRequest {
  /**
   * The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. Client CIDR range must have a size of at least /22 and must not be greater than /12.
   *
   * @public
   */
  ClientCidrBlock?: string | undefined;

  /**
   * The ARN of the server certificate. For more information, see the [Certificate Manager User Guide](https://docs.aws.amazon.com/acm/latest/userguide/).
   *
   * @public
   */
  ServerCertificateArn: string | undefined;

  /**
   * Information about the authentication method to be used to authenticate clients.
   *
   * @public
   */
  AuthenticationOptions: ClientVpnAuthenticationRequest[] | undefined;

  /**
   * Information about the client connection logging options.
   *
   * If you enable client connection logging, data about client connections is sent to a Cloudwatch Logs log stream. The following information is logged:
   *
   * - Client connection requests
   * - Client connection results (successful and unsuccessful)
   * - Reasons for unsuccessful client connection requests
   * - Client connection termination time
   *
   * @public
   */
  ConnectionLogOptions: ConnectionLogOptions | undefined;

  /**
   * Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.
   *
   * @public
   */
  DnsServers?: string[] | undefined;

  /**
   * The transport protocol to be used by the VPN session.
   *
   * Default value: `udp`
   *
   * @public
   */
  TransportProtocol?: TransportProtocol | undefined;

  /**
   * The port number to assign to the Client VPN endpoint for TCP and UDP traffic.
   *
   * Valid Values: `443` | `1194`
   *
   * Default Value: `443`
   *
   * @public
   */
  VpnPort?: number | undefined;

  /**
   * A brief description of the Client VPN endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether split-tunnel is enabled on the Client VPN endpoint.
   *
   * By default, split-tunnel on a VPN endpoint is disabled.
   *
   * For information about split-tunnel VPN endpoints, see [Split-tunnel Client VPN endpoint](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html) in the *Client VPN Administrator Guide*.
   *
   * @public
   */
  SplitTunnel?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to apply to the Client VPN endpoint during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Specify whether to enable the self-service portal for the Client VPN endpoint.
   *
   * Default Value: `enabled`
   *
   * @public
   */
  SelfServicePortal?: SelfServicePortal | undefined;

  /**
   * The options for managing connection authorization for new client connections.
   *
   * @public
   */
  ClientConnectOptions?: ClientConnectOptions | undefined;

  /**
   * The maximum VPN session duration time in hours.
   *
   * Valid values: `8 | 10 | 12 | 24`
   *
   * Default value: `24`
   *
   * @public
   */
  SessionTimeoutHours?: number | undefined;

  /**
   * Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.
   *
   * @public
   */
  ClientLoginBannerOptions?: ClientLoginBannerOptions | undefined;

  /**
   * Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. T his feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel.
   *
   * Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table, reverting it back to the expected route configurations.
   *
   * @public
   */
  ClientRouteEnforcementOptions?: ClientRouteEnforcementOptions | undefined;

  /**
   * Indicates whether the client VPN session is disconnected after the maximum timeout specified in `SessionTimeoutHours` is reached. If `true`, users are prompted to reconnect client VPN. If `false`, client VPN attempts to reconnect automatically. The default value is `true`.
   *
   * @public
   */
  DisconnectOnSessionTimeout?: boolean | undefined;

  /**
   * The IP address type for the Client VPN endpoint. Valid values are `ipv4` (default) for IPv4 addressing only, `ipv6` for IPv6 addressing only, or `dual-stack` for both IPv4 and IPv6 addressing. When set to `dual-stack,` clients can connect to the endpoint using either IPv4 or IPv6 addresses..
   *
   * @public
   */
  EndpointIpAddressType?: EndpointIpAddressType | undefined;

  /**
   * The IP address type for traffic within the Client VPN tunnel. Valid values are `ipv4` (default) for IPv4 traffic only, `ipv6` for IPv6 addressing only, or `dual-stack` for both IPv4 and IPv6 traffic. When set to `dual-stack`, clients can access both IPv4 and IPv6 resources through the VPN .
   *
   * @public
   */
  TrafficIpAddressType?: TrafficIpAddressType | undefined;

  /**
   * The Transit Gateway configuration for the Client VPN endpoint. Use this parameter to associate the endpoint with a Transit Gateway instead of a VPC. You cannot specify both `TransitGatewayConfiguration` and `VpcId`/`SecurityGroupIds`.
   *
   * @public
   */
  TransitGatewayConfiguration?: TransitGatewayConfigurationInputStructure | undefined;

  /**
   * The device posture options for the Client VPN endpoint. Use this parameter to specify the device trust providers that the endpoint uses to evaluate the security posture of connecting devices.
   *
   * @public
   */
  DevicePostureOptions?: DevicePostureOptions | undefined;
}

/**
 * Describes the state of a Client VPN endpoint.
 *
 * @public
 */
export interface ClientVpnEndpointStatus {
  /**
   * The state of the Client VPN endpoint. Possible states include:
   *
   * - `pending-associate` - The Client VPN endpoint has been created but no target networks have been associated. The Client VPN endpoint cannot accept connections.
   * - `available` - The Client VPN endpoint has been created and a target network has been associated. The Client VPN endpoint can accept connections.
   * - `deleting` - The Client VPN endpoint is being deleted. The Client VPN endpoint cannot accept connections.
   * - `deleted` - The Client VPN endpoint has been deleted. The Client VPN endpoint cannot accept connections.
   * - `pending` - The Client VPN endpoint has been created with a Transit Gateway configuration and is waiting for the Transit Gateway attachment to be accepted. The Client VPN endpoint cannot accept connections.
   *
   * @public
   */
  Code?: ClientVpnEndpointStatusCode | undefined;

  /**
   * A message about the status of the Client VPN endpoint.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface CreateClientVpnEndpointResult {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * The current state of the Client VPN endpoint.
   *
   * @public
   */
  Status?: ClientVpnEndpointStatus | undefined;

  /**
   * The DNS name to be used by clients when establishing their VPN session.
   *
   * @public
   */
  DnsName?: string | undefined;
}

/**
 * @public
 */
export interface CreateClientVpnRouteRequest {
  /**
   * The ID of the Client VPN endpoint to which to add the route.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * The IPv4 address range, in CIDR notation, of the route destination. For example:
   *
   * - To add a route for Internet access, enter `0.0.0.0/0`
   * - To add a route for a peered VPC, enter the peered VPC's IPv4 CIDR range
   * - To add a route for an on-premises network, enter the Amazon Web Services Site-to-Site VPN connection's IPv4 CIDR range
   * - To add a route for the local network, enter the client CIDR range
   *
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * The ID of the subnet through which you want to route traffic. The specified subnet must be an existing target network of the Client VPN endpoint.
   *
   * Alternatively, if you're adding a route for the local network, specify `local`.
   *
   * This parameter is required for VPC-based Client VPN endpoints. For Transit Gateway-based endpoints, this parameter is not required.
   *
   * @public
   */
  TargetVpcSubnetId?: string | undefined;

  /**
   * A brief description of the route.
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
 * Describes the state of a Client VPN endpoint route.
 *
 * @public
 */
export interface ClientVpnRouteStatus {
  /**
   * The state of the Client VPN endpoint route.
   *
   * @public
   */
  Code?: ClientVpnRouteStatusCode | undefined;

  /**
   * A message about the status of the Client VPN endpoint route, if applicable.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface CreateClientVpnRouteResult {
  /**
   * The current state of the route.
   *
   * @public
   */
  Status?: ClientVpnRouteStatus | undefined;
}

/**
 * @public
 */
export interface CreateCoipCidrRequest {
  /**
   * A customer-owned IP address range to create.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * The ID of the address pool.
   *
   * @public
   */
  CoipPoolId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about a customer-owned IP address range.
 *
 * @public
 */
export interface CoipCidr {
  /**
   * An address range in a customer-owned IP address space.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The ID of the address pool.
   *
   * @public
   */
  CoipPoolId?: string | undefined;

  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;
}

/**
 * @public
 */
export interface CreateCoipCidrResult {
  /**
   * Information about a range of customer-owned IP addresses.
   *
   * @public
   */
  CoipCidr?: CoipCidr | undefined;
}

/**
 * @public
 */
export interface CreateCoipPoolRequest {
  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * The tags to assign to the CoIP address pool.
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
 * Describes a customer-owned address pool.
 *
 * @public
 */
export interface CoipPool {
  /**
   * The ID of the address pool.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The address ranges of the address pool.
   *
   * @public
   */
  PoolCidrs?: string[] | undefined;

  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ARN of the address pool.
   *
   * @public
   */
  PoolArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateCoipPoolResult {
  /**
   * Information about the CoIP address pool.
   *
   * @public
   */
  CoipPool?: CoipPool | undefined;
}

/**
 * Contains the parameters for CreateCustomerGateway.
 *
 * @public
 */
export interface CreateCustomerGatewayRequest {
  /**
   * For customer gateway devices that support BGP, specify the device's ASN. You must specify either `BgpAsn` or `BgpAsnExtended` when creating the customer gateway. If the ASN is larger than `2,147,483,647`, you must use `BgpAsnExtended`.
   *
   * Default: 65000
   *
   * Valid values: `1` to `2,147,483,647`
   *
   * @public
   */
  BgpAsn?: number | undefined;

  /**
   * *This member has been deprecated.* The Internet-routable IP address for the customer gateway's outside interface. The address must be static.
   *
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the customer gateway certificate.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The type of VPN connection that this customer gateway supports (`ipsec.1`).
   *
   * @public
   */
  Type: GatewayType | undefined;

  /**
   * The tags to apply to the customer gateway.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A name for the customer gateway device.
   *
   * Length Constraints: Up to 255 characters.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * The IP address for the customer gateway device's outside interface. The address must be static. If `OutsideIpAddressType` in your VPN connection options is set to `PrivateIpv4`, you can use an RFC6598 or RFC1918 private IPv4 address. If `OutsideIpAddressType` is set to `Ipv6`, you can use an IPv6 address.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * For customer gateway devices that support BGP, specify the device's ASN. You must specify either `BgpAsn` or `BgpAsnExtended` when creating the customer gateway. If the ASN is larger than `2,147,483,647`, you must use `BgpAsnExtended`.
   *
   * Valid values: `2,147,483,648` to `4,294,967,295`
   *
   * @public
   */
  BgpAsnExtended?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a customer gateway.
 *
 * @public
 */
export interface CustomerGateway {
  /**
   * The Amazon Resource Name (ARN) for the customer gateway certificate.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The name of customer gateway device.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * Any tags assigned to the customer gateway.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The customer gateway device's Border Gateway Protocol (BGP) Autonomous System Number (ASN).
   *
   * Valid values: `2,147,483,648` to `4,294,967,295`
   *
   * @public
   */
  BgpAsnExtended?: string | undefined;

  /**
   * The ID of the customer gateway.
   *
   * @public
   */
  CustomerGatewayId?: string | undefined;

  /**
   * The current state of the customer gateway (`pending | available | deleting | deleted`).
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The type of VPN connection the customer gateway supports (`ipsec.1`).
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The IP address for the customer gateway device's outside interface. The address must be static. If `OutsideIpAddressType` in your VPN connection options is set to `PrivateIpv4`, you can use an RFC6598 or RFC1918 private IPv4 address. If `OutsideIpAddressType` is set to `PublicIpv4`, you can use a public IPv4 address. If `OutsideIpAddressType` is set to `Ipv6`, you can use a public IPv6 address.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The customer gateway device's Border Gateway Protocol (BGP) Autonomous System Number (ASN).
   *
   * Valid values: `1` to `2,147,483,647`
   *
   * @public
   */
  BgpAsn?: string | undefined;
}

/**
 * Contains the output of CreateCustomerGateway.
 *
 * @public
 */
export interface CreateCustomerGatewayResult {
  /**
   * Information about the customer gateway.
   *
   * @public
   */
  CustomerGateway?: CustomerGateway | undefined;
}

/**
 * @public
 */
export interface CreateDefaultSubnetRequest {
  /**
   * The Availability Zone in which to create the default subnet.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified, but not both.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Indicates whether to create an IPv6 only subnet. If you already have a default subnet for this Availability Zone, you must delete it before you can create an IPv6 only subnet.
   *
   * @public
   */
  Ipv6Native?: boolean | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified, but not both.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * The state of VPC Block Public Access (BPA).
 *
 * @public
 */
export interface BlockPublicAccessStates {
  /**
   * The mode of VPC BPA.
   *
   * - `off`: VPC BPA is not enabled and traffic is allowed to and from internet gateways and egress-only internet gateways in this Region.
   * - `block-bidirectional`: Block all traffic to and from internet gateways and egress-only internet gateways in this Region (except for excluded VPCs and subnets).
   * - `block-ingress`: Block all internet traffic to the VPCs in this Region (except for VPCs or subnets which are excluded). Only traffic to and from NAT gateways and egress-only internet gateways is allowed because these gateways only allow outbound connections to be established.
   *
   * @public
   */
  InternetGatewayBlockMode?: BlockPublicAccessMode | undefined;
}

/**
 * Describes the options for instance hostnames.
 *
 * @public
 */
export interface PrivateDnsNameOptionsOnLaunch {
  /**
   * The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID.
   *
   * @public
   */
  HostnameType?: HostnameType | undefined;

  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
   *
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * Indicates whether to respond to DNS queries for instance hostname with DNS AAAA records.
   *
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}

/**
 * Describes a subnet.
 *
 * @public
 */
export interface Subnet {
  /**
   * The AZ ID of the subnet.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * Indicates the device position for local network interfaces in this subnet. For example, `1` indicates local network interfaces in this subnet are the secondary network interface (eth1).
   *
   * @public
   */
  EnableLniAtDeviceIndex?: number | undefined;

  /**
   * Indicates whether a network interface created in this subnet (including a network interface created by RunInstances) receives a customer-owned IPv4 address.
   *
   * @public
   */
  MapCustomerOwnedIpOnLaunch?: boolean | undefined;

  /**
   * The customer-owned IPv4 address pool associated with the subnet.
   *
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the subnet.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Indicates whether a network interface created in this subnet (including a network interface created by RunInstances) receives an IPv6 address.
   *
   * @public
   */
  AssignIpv6AddressOnCreation?: boolean | undefined;

  /**
   * Information about the IPv6 CIDR blocks associated with the subnet.
   *
   * @public
   */
  Ipv6CidrBlockAssociationSet?: SubnetIpv6CidrBlockAssociation[] | undefined;

  /**
   * Any tags assigned to the subnet.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the subnet.
   *
   * @public
   */
  SubnetArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
   *
   * @public
   */
  EnableDns64?: boolean | undefined;

  /**
   * Indicates whether this is an IPv6 only subnet.
   *
   * @public
   */
  Ipv6Native?: boolean | undefined;

  /**
   * The type of hostnames to assign to instances in the subnet at launch. An instance hostname is based on the IPv4 address or ID of the instance.
   *
   * @public
   */
  PrivateDnsNameOptionsOnLaunch?: PrivateDnsNameOptionsOnLaunch | undefined;

  /**
   * The state of VPC Block Public Access (BPA).
   *
   * @public
   */
  BlockPublicAccessStates?: BlockPublicAccessStates | undefined;

  /**
   * Indicates if this is a subnet used with Amazon Elastic VMware Service (EVS). Possible values are `Elastic VMware Service` or no value. For more information about Amazon EVS, see [*Amazon Elastic VMware Service API Reference*](https://docs.aws.amazon.com/evs/latest/APIReference/Welcome.html).
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The current state of the subnet.
   *
   * - `failed`: The underlying infrastructure to support the subnet failed to provision as expected.
   * - `failed-insufficient-capacity`: The underlying infrastructure to support the subnet failed to provision due to a shortage of EC2 instance capacity.
   *
   * @public
   */
  State?: SubnetState | undefined;

  /**
   * The ID of the VPC the subnet is in.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The IPv4 CIDR block assigned to the subnet.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * The number of unused private IPv4 addresses in the subnet. The IPv4 addresses for any stopped instances are considered unavailable.
   *
   * @public
   */
  AvailableIpAddressCount?: number | undefined;

  /**
   * The Availability Zone of the subnet.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Indicates whether this is the default subnet for the Availability Zone.
   *
   * @public
   */
  DefaultForAz?: boolean | undefined;

  /**
   * Indicates whether instances launched in this subnet receive a public IPv4 address.
   *
   * Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the *Public IPv4 Address* tab on the [Amazon VPC pricing page](http://aws.amazon.com/vpc/pricing/).
   *
   * @public
   */
  MapPublicIpOnLaunch?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDefaultSubnetResult {
  /**
   * Information about the subnet.
   *
   * @public
   */
  Subnet?: Subnet | undefined;
}

/**
 * @public
 */
export interface CreateDefaultVpcRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes an exclusion configuration for VPC Encryption Control.
 *
 * For more information, see [Enforce VPC encryption in transit](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html) in the *Amazon VPC User Guide*.
 *
 * @public
 */
export interface VpcEncryptionControlExclusion {
  /**
   * The current state of the exclusion configuration.
   *
   * @public
   */
  State?: VpcEncryptionControlExclusionState | undefined;

  /**
   * A message providing additional information about the exclusion state.
   *
   * @public
   */
  StateMessage?: string | undefined;
}

/**
 * Describes the exclusion configurations for various resource types in VPC Encryption Control.
 *
 * For more information, see [Enforce VPC encryption in transit](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html) in the *Amazon VPC User Guide*.
 *
 * @public
 */
export interface VpcEncryptionControlExclusions {
  /**
   * The exclusion configuration for internet gateway traffic.
   *
   * @public
   */
  InternetGateway?: VpcEncryptionControlExclusion | undefined;

  /**
   * The exclusion configuration for egress-only internet gateway traffic.
   *
   * @public
   */
  EgressOnlyInternetGateway?: VpcEncryptionControlExclusion | undefined;

  /**
   * The exclusion configuration for NAT gateway traffic.
   *
   * @public
   */
  NatGateway?: VpcEncryptionControlExclusion | undefined;

  /**
   * The exclusion configuration for virtual private gateway traffic.
   *
   * @public
   */
  VirtualPrivateGateway?: VpcEncryptionControlExclusion | undefined;

  /**
   * The exclusion configuration for VPC peering connection traffic.
   *
   * @public
   */
  VpcPeering?: VpcEncryptionControlExclusion | undefined;

  /**
   * The exclusion configuration for Lambda function traffic.
   *
   * @public
   */
  Lambda?: VpcEncryptionControlExclusion | undefined;

  /**
   * The exclusion configuration for VPC Lattice traffic.
   *
   * @public
   */
  VpcLattice?: VpcEncryptionControlExclusion | undefined;

  /**
   * The exclusion configuration for Elastic File System traffic.
   *
   * @public
   */
  ElasticFileSystem?: VpcEncryptionControlExclusion | undefined;
}

/**
 * Describes the configuration and state of VPC encryption controls.
 *
 * For more information, see [Enforce VPC encryption in transit](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html) in the *Amazon VPC User Guide*.
 *
 * @public
 */
export interface VpcEncryptionControl {
  /**
   * The ID of the VPC associated with the encryption control configuration.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ID of the VPC Encryption Control configuration.
   *
   * @public
   */
  VpcEncryptionControlId?: string | undefined;

  /**
   * The encryption mode for the VPC Encryption Control configuration.
   *
   * @public
   */
  Mode?: VpcEncryptionControlMode | undefined;

  /**
   * The current state of the VPC Encryption Control configuration.
   *
   * @public
   */
  State?: VpcEncryptionControlState | undefined;

  /**
   * A message providing additional information about the encryption control state.
   *
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * Information about resource exclusions for the VPC Encryption Control configuration.
   *
   * @public
   */
  ResourceExclusions?: VpcEncryptionControlExclusions | undefined;

  /**
   * The tags assigned to the VPC Encryption Control configuration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes a VPC.
 *
 * @public
 */
export interface Vpc {
  /**
   * The ID of the Amazon Web Services account that owns the VPC.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The allowed tenancy of instances launched into the VPC.
   *
   * @public
   */
  InstanceTenancy?: Tenancy | undefined;

  /**
   * Information about the IPv6 CIDR blocks associated with the VPC.
   *
   * @public
   */
  Ipv6CidrBlockAssociationSet?: VpcIpv6CidrBlockAssociation[] | undefined;

  /**
   * Information about the IPv4 CIDR blocks associated with the VPC.
   *
   * @public
   */
  CidrBlockAssociationSet?: VpcCidrBlockAssociation[] | undefined;

  /**
   * Indicates whether the VPC is the default VPC.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * Describes the configuration and state of VPC encryption controls.
   *
   * For more information, see [Enforce VPC encryption in transit](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  EncryptionControl?: VpcEncryptionControl | undefined;

  /**
   * Any tags assigned to the VPC.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The state of VPC Block Public Access (BPA).
   *
   * @public
   */
  BlockPublicAccessStates?: BlockPublicAccessStates | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The current state of the VPC.
   *
   * @public
   */
  State?: VpcState | undefined;

  /**
   * The primary IPv4 CIDR block for the VPC.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * The ID of the set of DHCP options you've associated with the VPC.
   *
   * @public
   */
  DhcpOptionsId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDefaultVpcResult {
  /**
   * Information about the VPC.
   *
   * @public
   */
  Vpc?: Vpc | undefined;
}

/**
 * @public
 */
export interface CreateDelegateMacVolumeOwnershipTaskRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
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
   * The ID of the Amazon EC2 Mac instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Specifies the following credentials:
   *
   * - **Internal disk administrative user**
   *
   *   - **Username** - Only the default administrative user (`aws-managed-user`) is supported and it is used by default. You can't specify a different administrative user.
   *   - **Password** - If you did not change the default password for `aws-managed-user`, specify the default password, which is *blank*. Otherwise, specify your password.
   * - **Amazon EBS root volume administrative user**
   *
   *   - **Username** - If you did not change the default administrative user, specify `ec2-user`. Otherwise, specify the username for your administrative user.
   *   - **Password** - Specify the password for the administrative user.
   *
   * The credentials must be specified in the following JSON format:
   *
   * `\{ "internalDiskPassword":"internal-disk-admin_password", "rootVolumeUsername":"root-volume-admin_username", "rootVolumepassword":"root-volume-admin_password" \}`
   *
   * @public
   */
  MacCredentials: string | undefined;

  /**
   * The tags to assign to the volume ownership delegation task.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * Describes the configuration for a System Integrity Protection (SIP) modification task.
 *
 * @public
 */
export interface MacSystemIntegrityProtectionConfiguration {
  /**
   * Indicates whether Apple Internal was enabled or disabled by the task.
   *
   * @public
   */
  AppleInternal?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * Indicates whether Base System was enabled or disabled by the task.
   *
   * @public
   */
  BaseSystem?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * Indicates whether Debugging Restrictions was enabled or disabled by the task.
   *
   * @public
   */
  DebuggingRestrictions?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * Indicates whether Dtrace Restrictions was enabled or disabled by the task.
   *
   * @public
   */
  DTraceRestrictions?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * Indicates whether Filesystem Protections was enabled or disabled by the task.
   *
   * @public
   */
  FilesystemProtections?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * Indicates whether Kext Signing was enabled or disabled by the task.
   *
   * @public
   */
  KextSigning?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * Indicates whether NVRAM Protections was enabled or disabled by the task.
   *
   * @public
   */
  NvramProtections?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * Indicates SIP was enabled or disabled by the task.
   *
   * @public
   */
  Status?: MacSystemIntegrityProtectionSettingStatus | undefined;
}

/**
 * Information about a System Integrity Protection (SIP) modification task or volume ownership delegation task for an Amazon EC2 Mac instance.
 *
 * @public
 */
export interface MacModificationTask {
  /**
   * The ID of the Amazon EC2 Mac instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The ID of task.
   *
   * @public
   */
  MacModificationTaskId?: string | undefined;

  /**
   * [SIP modification tasks only] Information about the SIP configuration.
   *
   * @public
   */
  MacSystemIntegrityProtectionConfig?: MacSystemIntegrityProtectionConfiguration | undefined;

  /**
   * The date and time the task was created, in the UTC timezone (`YYYY-MM-DDThh:mm:ss.sssZ`).
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The tags assigned to the task.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The state of the task.
   *
   * @public
   */
  TaskState?: MacModificationTaskState | undefined;

  /**
   * The type of task.
   *
   * @public
   */
  TaskType?: MacModificationTaskType | undefined;
}

/**
 * @public
 */
export interface CreateDelegateMacVolumeOwnershipTaskResult {
  /**
   * Information about the volume ownership delegation task.
   *
   * @public
   */
  MacModificationTask?: MacModificationTask | undefined;
}

/**
 * Describes a DHCP configuration option.
 *
 * @public
 */
export interface NewDhcpConfiguration {
  /**
   * The name of a DHCP option.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The values for the DHCP option.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDhcpOptionsRequest {
  /**
   * A DHCP configuration option.
   *
   * @public
   */
  DhcpConfigurations: NewDhcpConfiguration[] | undefined;

  /**
   * The tags to assign to the DHCP option.
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
 * Describes a value for a resource attribute that is a String.
 *
 * @public
 */
export interface AttributeValue {
  /**
   * The attribute value. The value is case-sensitive.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Describes a DHCP configuration option.
 *
 * @public
 */
export interface DhcpConfiguration {
  /**
   * The name of a DHCP option.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The values for the DHCP option.
   *
   * @public
   */
  Values?: AttributeValue[] | undefined;
}

/**
 * The set of DHCP options.
 *
 * @public
 */
export interface DhcpOptions {
  /**
   * The ID of the Amazon Web Services account that owns the DHCP options set.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Any tags assigned to the DHCP options set.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the set of DHCP options.
   *
   * @public
   */
  DhcpOptionsId?: string | undefined;

  /**
   * The DHCP options in the set.
   *
   * @public
   */
  DhcpConfigurations?: DhcpConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateDhcpOptionsResult {
  /**
   * A set of DHCP options.
   *
   * @public
   */
  DhcpOptions?: DhcpOptions | undefined;
}

/**
 * @public
 */
export interface CreateEgressOnlyInternetGatewayRequest {
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
   * The ID of the VPC for which to create the egress-only internet gateway.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The tags to assign to the egress-only internet gateway.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.
 *
 * @public
 */
export interface InternetGatewayAttachment {
  /**
   * The current state of the attachment. For an internet gateway, the state is `available` when attached to a VPC; otherwise, this value is not returned.
   *
   * @public
   */
  State?: AttachmentStatus | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * Describes an egress-only internet gateway.
 *
 * @public
 */
export interface EgressOnlyInternetGateway {
  /**
   * Information about the attachment of the egress-only internet gateway.
   *
   * @public
   */
  Attachments?: InternetGatewayAttachment[] | undefined;

  /**
   * The ID of the egress-only internet gateway.
   *
   * @public
   */
  EgressOnlyInternetGatewayId?: string | undefined;

  /**
   * The tags assigned to the egress-only internet gateway.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEgressOnlyInternetGatewayResult {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Information about the egress-only internet gateway.
   *
   * @public
   */
  EgressOnlyInternetGateway?: EgressOnlyInternetGateway | undefined;
}

/**
 * The Amazon EC2 launch template that can be used by an EC2 Fleet to configure Amazon EC2 instances. You must specify either the ID or name of the launch template in the request, but not both.
 *
 * For information about launch templates, see [Launch an instance from a launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface FleetLaunchTemplateSpecificationRequest {
  /**
   * The ID of the launch template.
   *
   * You must specify the `LaunchTemplateId` or the `LaunchTemplateName`, but not both.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template.
   *
   * You must specify the `LaunchTemplateName` or the `LaunchTemplateId`, but not both.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * The launch template version number, `$Latest`, or `$Default`. You must specify a value, otherwise the request fails.
   *
   * If the value is `$Latest`, Amazon EC2 uses the latest version of the launch template.
   *
   * If the value is `$Default`, Amazon EC2 uses the default version of the launch template.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The base64-encoded user data for instances launched by the fleet. User data is limited to 16 KB, in raw form, before it is base64-encoded.
   *
   * Supported only for fleets of type `instant`.
   *
   * @public
   */
  LaunchTemplateSpecificationUserData?: string | undefined;
}

/**
 * Describes a block device for an EBS volume.
 *
 * @public
 */
export interface FleetEbsBlockDeviceRequest {
  /**
   * Indicates whether the encryption state of an EBS volume is changed while being restored from a backing snapshot. The effect of setting the encryption state to `true` depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see [Amazon EBS encryption](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html) in the *Amazon EBS User Guide*.
   *
   * In no case can you remove encryption from an encrypted volume.
   *
   * Encrypted volumes can only be attached to instances that support Amazon EBS encryption. For more information, see [Supported instance types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption-requirements.html#ebs-encryption_supported_instances).
   *
   * This parameter is not returned by [DescribeImageAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImageAttribute).
   *
   * For [CreateImage](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage) and [RegisterImage](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterImage), whether you can include this parameter, and the allowed values differ depending on the type of block device mapping you are creating.
   *
   * - If you are creating a block device mapping for a **new (empty) volume**, you can include this parameter, and specify either `true` for an encrypted volume, or `false` for an unencrypted volume. If you omit this parameter, it defaults to `false` (unencrypted).
   * - If you are creating a block device mapping from an **existing encrypted or unencrypted snapshot**, you must omit this parameter. If you include this parameter, the request will fail, regardless of the value that you specify.
   * - If you are creating a block device mapping from an **existing unencrypted volume**, you can include this parameter, but you must specify `false`. If you specify `true`, the request will fail. In this case, we recommend that you omit the parameter.
   * - If you are creating a block device mapping from an **existing encrypted volume**, you can include this parameter, and specify either `true` or `false`. However, if you specify `false`, the parameter is ignored and the block device mapping is always encrypted. In this case, we recommend that you omit the parameter.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * Indicates whether the EBS volume is deleted on instance termination. For more information, see [Preserve data when an instance is terminated](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/preserving-volumes-on-termination.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The number of I/O operations per second (IOPS). For `gp3`, `io1`, and `io2` volumes, this represents the number of IOPS that are provisioned for the volume. For `gp2` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
   *
   * The following are the supported values for each volume type:
   *
   * - `gp3`: 3,000 - 80,000 IOPS
   * - `io1`: 100 - 64,000 IOPS
   * - `io2`: 100 - 256,000 IOPS
   *
   * For `io2` volumes, you can achieve up to 256,000 IOPS on [instances built on the Nitro System](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances). On other instances, you can achieve performance up to 32,000 IOPS.
   *
   * This parameter is required for `io1` and `io2` volumes. The default for `gp3` volumes is 3,000 IOPS.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The throughput that the volume supports, in MiB/s.
   *
   * This parameter is valid only for `gp3` volumes.
   *
   * Valid Range: Minimum value of 125. Maximum value of 2,000.
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key to use for EBS encryption.
   *
   * This parameter is only supported on `BlockDeviceMapping` objects called by [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html), [RequestSpotInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html), and [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html).
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.
   *
   * The following are the supported sizes for each volume type:
   *
   * - `gp2`: 1 - 16,384 GiB
   * - `gp3`: 1 - 65,536 GiB
   * - `io1`: 4 - 16,384 GiB
   * - `io2`: 4 - 65,536 GiB
   * - `st1` and `sc1`: 125 - 16,384 GiB
   * - `standard`: 1 - 1024 GiB
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * The volume type. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  VolumeType?: VolumeType | undefined;
}

/**
 * Describes a block device mapping, which defines the EBS volumes and instance store volumes to attach to an instance at launch.
 *
 * To override a block device mapping specified in the launch template:
 *
 * - Specify the exact same `DeviceName` here as specified in the launch template.
 * - Only specify the parameters you want to change.
 * - Any parameters you don't specify here will keep their original launch template values.
 *
 * To add a new block device mapping:
 *
 * - Specify a `DeviceName` that doesn't exist in the launch template.
 * - Specify all desired parameters here.
 *
 * @public
 */
export interface FleetBlockDeviceMappingRequest {
  /**
   * The device name (for example, `/dev/sdh` or `xvdh`).
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * The virtual device name (`ephemeralN`). Instance store volumes are numbered starting from 0. An instance type with 2 available instance store volumes can specify mappings for `ephemeral0` and `ephemeral1`. The number of available instance store volumes depends on the instance type. After you connect to the instance, you must mount the volume.
   *
   * NVMe instance store volumes are automatically enumerated and assigned a device name. Including them in your block device mapping has no effect.
   *
   * Constraints: For M3 instances, you must specify instance store volumes in the block device mapping for the instance. When you launch an M3 instance, we ignore any instance store volumes specified in the block device mapping for the AMI.
   *
   * @public
   */
  VirtualName?: string | undefined;

  /**
   * Parameters used to automatically set up EBS volumes when the instance is launched.
   *
   * @public
   */
  Ebs?: FleetEbsBlockDeviceRequest | undefined;

  /**
   * To omit the device from the block device mapping, specify an empty string. When this property is specified, the device is removed from the block device mapping regardless of the assigned value.
   *
   * @public
   */
  NoDevice?: string | undefined;
}

/**
 * Describes an IAM instance profile. Supported only for fleets of type `instant`.
 *
 * @public
 */
export interface FleetIamInstanceProfileSpecificationRequest {
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
 * Describes the metadata options for the instances. Supported only for fleets of type `instant`.
 *
 * @public
 */
export interface FleetInstanceMetadataOptionsRequest {
  /**
   * Indicates whether IMDSv2 is required.
   *
   * - `optional` - IMDSv2 is optional, which means that you can use either IMDSv2 or IMDSv1.
   * - `required` - IMDSv2 is required, which means that IMDSv1 is disabled, and you must use IMDSv2.
   *
   * @public
   */
  HttpTokens?: FleetHttpTokensState | undefined;

  /**
   * The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.
   *
   * Default: `1`
   *
   * Possible values: Integers from 1 to 64
   *
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * Enables or disables the HTTP metadata endpoint on your instances.
   *
   * - `enabled` - The HTTP metadata endpoint is enabled.
   * - `disabled` - The HTTP metadata endpoint is disabled.
   *
   * @public
   */
  HttpEndpoint?: FleetInstanceMetadataEndpointState | undefined;
}

/**
 * Describes the placement of an instance.
 *
 * @public
 */
export interface Placement {
  /**
   * The ID of the Availability Zone of the instance.
   *
   * On input, you can specify `AvailabilityZone` or `AvailabilityZoneId`, but not both. If you specify neither one, Amazon EC2 automatically selects an Availability Zone for you.
   *
   * This parameter is not supported for [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet).
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The affinity setting for the instance on the Dedicated Host.
   *
   * This parameter is not supported for [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet) or [ImportInstance](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html).
   *
   * @public
   */
  Affinity?: string | undefined;

  /**
   * The name of the placement group that the instance is in.
   *
   * On input, you can specify `GroupId` or `GroupName`, but not both.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The number of the partition that the instance is in. Valid only if the placement group strategy is set to `partition`.
   *
   * This parameter is not supported for [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet).
   *
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * The ID of the Dedicated Host on which the instance resides.
   *
   * This parameter is not supported for [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet) or [ImportInstance](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html).
   *
   * @public
   */
  HostId?: string | undefined;

  /**
   * The tenancy of the instance. An instance with a tenancy of `dedicated` runs on single-tenant hardware.
   *
   * This parameter is not supported for [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet). The `host` tenancy is not supported for [ImportInstance](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html) or for T3 instances that are configured for the `unlimited` CPU credit option.
   *
   * @public
   */
  Tenancy?: Tenancy | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  SpreadDomain?: string | undefined;

  /**
   * The ARN of the host resource group in which to launch the instances.
   *
   * On input, if you specify this parameter, either omit the **Tenancy** parameter or set it to `host`.
   *
   * This parameter is not supported for [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet).
   *
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * The ID of the placement group that the instance is in.
   *
   * On input, you can specify `GroupId` or `GroupName`, but not both.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The Availability Zone of the instance.
   *
   * On input, you can specify `AvailabilityZone` or `AvailabilityZoneId`, but not both. If you specify neither one, Amazon EC2 automatically selects an Availability Zone for you.
   *
   * This parameter is not supported for [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet).
   *
   * @public
   */
  AvailabilityZone?: string | undefined;
}

/**
 * Describes overrides for a launch template.
 *
 * @public
 */
export interface FleetLaunchTemplateOverridesRequest {
  /**
   * The instance type.
   *
   * `mac1.metal` is not supported as a launch template override.
   *
   * > **Note:** If you specify `InstanceType`, you can't specify `InstanceRequirements`.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *
   * > **Important:**
   * >
   * > If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.
   * >
   * > If you specify a maximum price, it must be more than USD $0.001. Specifying a value below USD $0.001 will result in an `InvalidParameterValue` error message.
   *
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * The IDs of the subnets in which to launch the instances. Separate multiple subnet IDs using commas (for example, `subnet-1234abcdeexample1, subnet-0987cdef6example2`). A request of type `instant` can have only one subnet ID.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The Availability Zone in which to launch the instances. For example, `us-east-2a`.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified in the request, but not both.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The number of units provided by the specified instance type. These are the same units that you chose to set the target capacity in terms of instances, or a performance characteristic such as vCPUs, memory, or I/O.
   *
   * If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the number of instances to the next whole number. If this value is not specified, the default is 1.
   *
   * > **Note:** When specifying weights, the price used in the `lowest-price` and `price-capacity-optimized` allocation strategies is per *unit* hour (where the instance price is divided by the specified weight). However, if all the specified weights are above the requested `TargetCapacity`, resulting in only 1 instance being launched, the price used is per *instance* hour.
   *
   * @public
   */
  WeightedCapacity?: number | undefined;

  /**
   * The priority for the launch template override. The highest priority is launched first.
   *
   * If the On-Demand `AllocationStrategy` is set to `prioritized`, EC2 Fleet uses priority to determine which launch template override to use first in fulfilling On-Demand capacity.
   *
   * If the Spot `AllocationStrategy` is set to `capacity-optimized-prioritized`, EC2 Fleet uses priority on a best-effort basis to determine which launch template override to use in fulfilling Spot capacity, but optimizes for capacity first.
   *
   * Valid values are whole numbers starting at `0`. The lower the number, the higher the priority. If no number is set, the launch template override has the lowest priority. You can set the same priority for different launch template overrides.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The location where the instance launched, if applicable.
   *
   * @public
   */
  Placement?: Placement | undefined;

  /**
   * The name of the key pair to use for the instances.
   *
   * Supported only for fleets of type `instant`.
   *
   * For more information, see [Amazon EC2 key pairs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * The block device mappings, which define the EBS volumes and instance store volumes to attach to the instance at launch.
   *
   * Supported only for fleets of type `instant`.
   *
   * For more information, see [Block device mappings for volumes on Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  BlockDeviceMappings?: FleetBlockDeviceMappingRequest[] | undefined;

  /**
   * The IAM instance profile to associate with the instances.
   *
   * Supported only for fleets of type `instant`.
   *
   * For more information, see [IAM roles for Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  IamInstanceProfile?: FleetIamInstanceProfileSpecificationRequest | undefined;

  /**
   * The metadata options for the instances.
   *
   * Supported only for fleets of type `instant`.
   *
   * For more information, see [Configure the instance metadata service](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  MetadataOptions?: FleetInstanceMetadataOptionsRequest | undefined;

  /**
   * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with those attributes.
   *
   * > **Note:** If you specify `InstanceRequirements`, you can't specify `InstanceType`.
   *
   * @public
   */
  InstanceRequirements?: InstanceRequirementsRequest | undefined;

  /**
   * The ID of the AMI in the format `ami-17characters00000`.
   *
   * Alternatively, you can specify a Systems Manager parameter, using one of the following formats. The Systems Manager parameter will resolve to an AMI ID on launch.
   *
   * To reference a public parameter:
   *
   * - `resolve:ssm:public-parameter`
   *
   * To reference a parameter stored in the same account:
   *
   * - `resolve:ssm:parameter-name`
   * - `resolve:ssm:parameter-name:version-number`
   * - `resolve:ssm:parameter-name:label`
   *
   * To reference a parameter shared from another Amazon Web Services account:
   *
   * - `resolve:ssm:parameter-ARN`
   * - `resolve:ssm:parameter-ARN:version-number`
   * - `resolve:ssm:parameter-ARN:label`
   *
   * For more information, see [Use a Systems Manager parameter instead of an AMI ID](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id) in the *Amazon EC2 User Guide*.
   *
   * > **Note:** This parameter is only available for fleets of type `instant`. For fleets of type `maintain` and `request`, you must specify the AMI ID in the launch template.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The ID of the Availability Zone in which to launch the instances. For example, `use2-az1`.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified in the request, but not both.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * Describes a launch template and overrides.
 *
 * @public
 */
export interface FleetLaunchTemplateConfigRequest {
  /**
   * The launch template to use. You must specify either the launch template ID or launch template name in the request.
   *
   * @public
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest | undefined;

  /**
   * Any parameters that you specify override the same parameters in the launch template.
   *
   * For fleets of type `request` and `maintain`, a maximum of 300 items is allowed across all launch templates.
   *
   * @public
   */
  Overrides?: FleetLaunchTemplateOverridesRequest[] | undefined;
}

/**
 * Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
 *
 * > **Note:** This strategy can only be used if the EC2 Fleet is of type `instant`.
 *
 * For more information about Capacity Reservations, see [On-Demand Capacity Reservations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html) in the *Amazon EC2 User Guide*. For examples of using Capacity Reservations in an EC2 Fleet, see [EC2 Fleet example configurations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface CapacityReservationOptionsRequest {
  /**
   * Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity.
   *
   * If you specify `use-capacity-reservations-first`, the fleet uses unused Capacity Reservations to fulfill On-Demand capacity up to the target On-Demand capacity. If multiple instance pools have unused Capacity Reservations, the On-Demand allocation strategy (`lowest-price` or `prioritized`) is applied. If the number of unused Capacity Reservations is less than the On-Demand target capacity, the remaining On-Demand target capacity is launched according to the On-Demand allocation strategy (`lowest-price` or `prioritized`).
   *
   * If you do not specify a value, the fleet fulfils the On-Demand capacity according to the chosen On-Demand allocation strategy.
   *
   * @public
   */
  UsageStrategy?: FleetCapacityReservationUsageStrategy | undefined;
}

/**
 * Describes the configuration of On-Demand Instances in an EC2 Fleet.
 *
 * @public
 */
export interface OnDemandOptionsRequest {
  /**
   * The strategy that determines the order of the launch template overrides to use in fulfilling On-Demand capacity.
   *
   * `lowest-price` - EC2 Fleet uses price to determine the order, launching the lowest price first.
   *
   * `prioritized` - EC2 Fleet uses the priority that you assigned to each launch template override, launching the highest priority first.
   *
   * Default: `lowest-price`
   *
   * @public
   */
  AllocationStrategy?: FleetOnDemandAllocationStrategy | undefined;

  /**
   * The strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
   *
   * Supported only for fleets of type `instant`.
   *
   * @public
   */
  CapacityReservationOptions?: CapacityReservationOptionsRequest | undefined;

  /**
   * Indicates that the fleet uses a single instance type to launch all On-Demand Instances in the fleet.
   *
   * Supported only for fleets of type `instant`.
   *
   * @public
   */
  SingleInstanceType?: boolean | undefined;

  /**
   * Indicates that the fleet launches all On-Demand Instances into a single Availability Zone.
   *
   * Supported only for fleets of type `instant`.
   *
   * @public
   */
  SingleAvailabilityZone?: boolean | undefined;

  /**
   * The minimum target capacity for On-Demand Instances in the fleet. If this minimum capacity isn't reached, no instances are launched.
   *
   * Constraints: Maximum value of `1000`. Supported only for fleets of type `instant`.
   *
   * At least one of the following must be specified: `SingleAvailabilityZone` | `SingleInstanceType`
   *
   * @public
   */
  MinTargetCapacity?: number | undefined;

  /**
   * The maximum amount per hour for On-Demand Instances that you're willing to pay.
   *
   * > **Note:** If your fleet includes T instances that are configured as `unlimited`, and if their average CPU usage exceeds the baseline utilization, you will incur a charge for surplus credits. The `MaxTotalPrice` does not account for surplus credits, and, if you use surplus credits, your final cost might be higher than what you specified for `MaxTotalPrice`. For more information, see [Surplus credits can incur charges](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  MaxTotalPrice?: string | undefined;
}

/**
 * Describes the target Capacity Reservations or Capacity Reservation Resource Groups for an EC2 Fleet that launches into reserved capacity. You can specify Capacity Reservation IDs or a Capacity Reservation Resource Group ARN, but not both.
 *
 * @public
 */
export interface FleetCapacityReservationTargetRequest {
  /**
   * The IDs of the Capacity Reservations in which to launch the instances.
   *
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * The ARNs of the Capacity Reservation Resource Groups in which to launch the instances.
   *
   * @public
   */
  CapacityReservationResourceGroupArns?: string[] | undefined;
}

/**
 * Describes the fallback behavior for an EC2 Fleet that uses reserved capacity when the reserved capacity is not enough to meet the target capacity. If you don't specify fallback options, EC2 Fleet does not fall back to any other market type after the specified reservation types are exhausted.
 *
 * @public
 */
export interface ReservedCapacityFallbackOptionsRequest {
  /**
   * The instance purchasing options to fall back to when the reserved capacity is not enough to meet the target capacity. The only supported value is `on-demand`, which launches On-Demand Instances to fulfill the remaining target capacity.
   *
   * @public
   */
  MarketTypes?: ReservedCapacityFallbackMarketType[] | undefined;
}

/**
 * Defines EC2 Fleet preferences for utilizing reserved capacity when `DefaultTargetCapacityType` is set to `reserved-capacity`. EC2 Fleet can fulfill reserved capacity using On-Demand Capacity Reservations, Capacity Blocks for ML, and interruptible Capacity Reservations.
 *
 * > **Note:** This configuration can only be used if the EC2 Fleet is of type `instant`.
 *
 * When you specify `ReservedCapacityOptions`, you must also set `DefaultTargetCapacityType` to `reserved-capacity` in the `TargetCapacitySpecification`.
 *
 * For more information about interruptible Capacity Reservations, see [Launch instances into an interruptible Capacity Reservation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-launch-instances-interruptible-cr-walkthrough.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface ReservedCapacityOptionsRequest {
  /**
   * The strategy that determines the order in which EC2 Fleet launches instances across the reservation types that you specify. The only supported value is `prioritized`, which launches instances in the priority order that you specify in your launch template overrides. If you don't specify an allocation strategy, instances are launched in a random order.
   *
   * @public
   */
  AllocationStrategy?: ReservedCapacityAllocationStrategy | undefined;

  /**
   * The types of Capacity Reservations to use for fulfilling the EC2 Fleet request. This is an ordered list: EC2 Fleet attempts to launch instances into each Capacity Reservation type in the order that you specify them before moving on to the next type.
   *
   * @public
   */
  ReservationTypes?: FleetReservationType[] | undefined;

  /**
   * The Capacity Reservations or Capacity Reservation Resource Groups to use for fulfilling the EC2 Fleet request. You can specify Capacity Reservation IDs or a Capacity Reservation Resource Group ARN, but not both.
   *
   * @public
   */
  CapacityReservationTarget?: FleetCapacityReservationTargetRequest | undefined;

  /**
   * The fallback behavior for the EC2 Fleet when there is not enough reserved capacity available to meet the target capacity. This member takes a `ReservedCapacityFallbackOptionsRequest` structure, in which you set `MarketTypes` to the instance purchasing options to fall back to.
   *
   * @public
   */
  ReservedCapacityFallbackOptions?: ReservedCapacityFallbackOptionsRequest | undefined;
}

/**
 * The Spot Instance replacement strategy to use when Amazon EC2 emits a rebalance notification signal that your Spot Instance is at an elevated risk of being interrupted. For more information, see [Capacity rebalancing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-capacity-rebalance.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface FleetSpotCapacityRebalanceRequest {
  /**
   * The replacement strategy to use. Only available for fleets of type `maintain`.
   *
   * `launch` - EC2 Fleet launches a replacement Spot Instance when a rebalance notification is emitted for an existing Spot Instance in the fleet. EC2 Fleet does not terminate the instances that receive a rebalance notification. You can terminate the old instances, or you can leave them running. You are charged for all instances while they are running.
   *
   * `launch-before-terminate` - EC2 Fleet launches a replacement Spot Instance when a rebalance notification is emitted for an existing Spot Instance in the fleet, and then, after a delay that you specify (in `TerminationDelay`), terminates the instances that received a rebalance notification.
   *
   * @public
   */
  ReplacementStrategy?: FleetReplacementStrategy | undefined;

  /**
   * The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot Instance after launching a new replacement Spot Instance.
   *
   * Required when `ReplacementStrategy` is set to `launch-before-terminate`.
   *
   * Not valid when `ReplacementStrategy` is set to `launch`.
   *
   * Valid values: Minimum value of `120` seconds. Maximum value of `7200` seconds.
   *
   * @public
   */
  TerminationDelay?: number | undefined;
}

/**
 * The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
 *
 * @public
 */
export interface FleetSpotMaintenanceStrategiesRequest {
  /**
   * The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted.
   *
   * @public
   */
  CapacityRebalance?: FleetSpotCapacityRebalanceRequest | undefined;
}

/**
 * Describes the configuration of Spot Instances in an EC2 Fleet request.
 *
 * @public
 */
export interface SpotOptionsRequest {
  /**
   * The strategy that determines how to allocate the target Spot Instance capacity across the Spot Instance pools specified by the EC2 Fleet launch configuration. For more information, see [Allocation strategies for Spot Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-allocation-strategy.html) in the *Amazon EC2 User Guide*.
   *
   * - **price-capacity-optimized (recommended)**
   *
   *   EC2 Fleet identifies the pools with the highest capacity availability for the number of instances that are launching. This means that we will request Spot Instances from the pools that we believe have the lowest chance of interruption in the near term. EC2 Fleet then requests Spot Instances from the lowest priced of these pools.
   *
   * - **capacity-optimized**
   *
   *   EC2 Fleet identifies the pools with the highest capacity availability for the number of instances that are launching. This means that we will request Spot Instances from the pools that we believe have the lowest chance of interruption in the near term. To give certain instance types a higher chance of launching first, use `capacity-optimized-prioritized`. Set a priority for each instance type by using the `Priority` parameter for `LaunchTemplateOverrides`. You can assign the same priority to different `LaunchTemplateOverrides`. EC2 implements the priorities on a best-effort basis, but optimizes for capacity first. `capacity-optimized-prioritized` is supported only if your EC2 Fleet uses a launch template. Note that if the On-Demand `AllocationStrategy` is set to `prioritized`, the same priority is applied when fulfilling On-Demand capacity.
   *
   * - **diversified**
   *
   *   EC2 Fleet requests instances from all of the Spot Instance pools that you specify.
   *
   * - **lowest-price (not recommended)**
   *
   *   > **Important:** We don't recommend the `lowest-price` allocation strategy because it has the highest risk of interruption for your Spot Instances.
   *
   *   EC2 Fleet requests instances from the lowest priced Spot Instance pool that has available capacity. If the lowest priced pool doesn't have available capacity, the Spot Instances come from the next lowest priced pool that has available capacity. If a pool runs out of capacity before fulfilling your desired capacity, EC2 Fleet will continue to fulfill your request by drawing from the next lowest priced pool. To ensure that your desired capacity is met, you might receive Spot Instances from several pools. Because this strategy only considers instance price and not capacity availability, it might lead to high interruption rates.
   *
   * Default: `lowest-price`
   *
   * @public
   */
  AllocationStrategy?: SpotAllocationStrategy | undefined;

  /**
   * The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
   *
   * @public
   */
  MaintenanceStrategies?: FleetSpotMaintenanceStrategiesRequest | undefined;

  /**
   * The behavior when a Spot Instance is interrupted.
   *
   * Default: `terminate`
   *
   * @public
   */
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior | undefined;

  /**
   * The number of Spot pools across which to allocate your target Spot capacity. Supported only when Spot `AllocationStrategy` is set to `lowest-price`. EC2 Fleet selects the cheapest Spot pools and evenly allocates your target Spot capacity across the number of Spot pools that you specify.
   *
   * Note that EC2 Fleet attempts to draw Spot Instances from the number of pools that you specify on a best effort basis. If a pool runs out of Spot capacity before fulfilling your target capacity, EC2 Fleet will continue to fulfill your request by drawing from the next cheapest pool. To ensure that your target capacity is met, you might receive Spot Instances from more than the number of pools that you specified. Similarly, if most of the pools have no Spot capacity, you might receive your full target capacity from fewer than the number of pools that you specified.
   *
   * @public
   */
  InstancePoolsToUseCount?: number | undefined;

  /**
   * Indicates that the fleet uses a single instance type to launch all Spot Instances in the fleet.
   *
   * Supported only for fleets of type `instant`.
   *
   * @public
   */
  SingleInstanceType?: boolean | undefined;

  /**
   * Indicates that the fleet launches all Spot Instances into a single Availability Zone.
   *
   * Supported only for fleets of type `instant`.
   *
   * @public
   */
  SingleAvailabilityZone?: boolean | undefined;

  /**
   * The minimum target capacity for Spot Instances in the fleet. If this minimum capacity isn't reached, no instances are launched.
   *
   * Constraints: Maximum value of `1000`. Supported only for fleets of type `instant`.
   *
   * At least one of the following must be specified: `SingleAvailabilityZone` | `SingleInstanceType`
   *
   * @public
   */
  MinTargetCapacity?: number | undefined;

  /**
   * The maximum amount per hour for Spot Instances that you're willing to pay. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *
   * > **Important:** If you specify a maximum price, your Spot Instances will be interrupted more frequently than if you do not specify this parameter.
   *
   * > **Note:** If your fleet includes T instances that are configured as `unlimited`, and if their average CPU usage exceeds the baseline utilization, you will incur a charge for surplus credits. The `MaxTotalPrice` does not account for surplus credits, and, if you use surplus credits, your final cost might be higher than what you specified for `MaxTotalPrice`. For more information, see [Surplus credits can incur charges](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  MaxTotalPrice?: string | undefined;
}

/**
 * The number of units to request. You can choose to set the target capacity as the number of instances. Or you can set the target capacity to a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is `maintain`, you can specify a target capacity of 0 and add capacity later.
 *
 * You can use the On-Demand Instance `MaxTotalPrice` parameter, the Spot Instance `MaxTotalPrice` parameter, or both parameters to ensure that your fleet cost does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, EC2 Fleet will launch instances until it reaches the maximum amount that you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn't met the target capacity. The `MaxTotalPrice` parameters are located in [OnDemandOptionsRequest](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptionsRequest) and [SpotOptionsRequest](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptionsRequest).
 *
 * @public
 */
export interface TargetCapacitySpecificationRequest {
  /**
   * The number of units to request, filled using the default target capacity type.
   *
   * @public
   */
  TotalTargetCapacity: number | undefined;

  /**
   * The number of On-Demand units to request.
   *
   * @public
   */
  OnDemandTargetCapacity?: number | undefined;

  /**
   * The number of Spot units to request.
   *
   * @public
   */
  SpotTargetCapacity?: number | undefined;

  /**
   * The default target capacity type.
   *
   * @public
   */
  DefaultTargetCapacityType?: DefaultTargetCapacityType | undefined;

  /**
   * The unit for the target capacity. You can specify this parameter only when using attributed-based instance type selection.
   *
   * Default: `units` (the number of instances)
   *
   * @public
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | undefined;
}

/**
 * @public
 */
export interface CreateFleetRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Describes the configuration of Spot Instances in an EC2 Fleet.
   *
   * @public
   */
  SpotOptions?: SpotOptionsRequest | undefined;

  /**
   * Describes the configuration of On-Demand Instances in an EC2 Fleet.
   *
   * @public
   */
  OnDemandOptions?: OnDemandOptionsRequest | undefined;

  /**
   * Defines EC2 Fleet preferences for utilizing reserved capacity when DefaultTargetCapacityType is set to `reserved-capacity`.
   *
   * Supported only for fleets of type `instant`.
   *
   * @public
   */
  ReservedCapacityOptions?: ReservedCapacityOptionsRequest | undefined;

  /**
   * Indicates whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2 Fleet.
   *
   * Supported only for fleets of type `maintain`.
   *
   * @public
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | undefined;

  /**
   * The configuration for the EC2 Fleet.
   *
   * @public
   */
  LaunchTemplateConfigs: FleetLaunchTemplateConfigRequest[] | undefined;

  /**
   * The number of units to request.
   *
   * @public
   */
  TargetCapacitySpecification: TargetCapacitySpecificationRequest | undefined;

  /**
   * Indicates whether running instances should be terminated when the EC2 Fleet expires.
   *
   * @public
   */
  TerminateInstancesWithExpiration?: boolean | undefined;

  /**
   * The fleet type. The default value is `maintain`.
   *
   * - `maintain` - The EC2 Fleet places an asynchronous request for your desired capacity, and continues to maintain your desired Spot capacity by replenishing interrupted Spot Instances.
   * - `request` - The EC2 Fleet places an asynchronous one-time request for your desired capacity, but does submit Spot requests in alternative capacity pools if Spot capacity is unavailable, and does not maintain Spot capacity if Spot Instances are interrupted.
   * - `instant` - The EC2 Fleet places a synchronous one-time request for your desired capacity, and returns errors for any instances that could not be launched.
   *
   * For more information, see [EC2 Fleet request types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-request-type.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  Type?: FleetType | undefined;

  /**
   * The start date and time of the request, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z). The default is to start fulfilling the request immediately.
   *
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * The end date and time of the request, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z). At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.
   *
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for fleets of type `maintain`. For more information, see [EC2 Fleet health checks](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#ec2-fleet-health-checks) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  ReplaceUnhealthyInstances?: boolean | undefined;

  /**
   * The key-value pair for tagging the EC2 Fleet request on creation. For more information, see [Tag your resources](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources).
   *
   * If the fleet type is `instant`, specify a resource type of `fleet` to tag the fleet, `instance` to tag the instances at launch, `volume` to tag the volumes at launch, or `network-interface` to tag the network interfaces at launch.
   *
   * If the fleet type is `maintain` or `request`, specify a resource type of `fleet` to tag the fleet. You cannot specify a resource type of `instance`, `volume`, or `network-interface`. To tag instances at launch, specify the tags in a [launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template).
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Context?: string | undefined;
}

/**
 * The Amazon EC2 launch template that can be used by a Spot Fleet to configure Amazon EC2 instances. You must specify either the ID or name of the launch template in the request, but not both.
 *
 * For information about launch templates, see [Launch an instance from a launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface FleetLaunchTemplateSpecification {
  /**
   * The ID of the launch template.
   *
   * You must specify the `LaunchTemplateId` or the `LaunchTemplateName`, but not both.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template.
   *
   * You must specify the `LaunchTemplateName` or the `LaunchTemplateId`, but not both.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * The launch template version number, `$Latest`, or `$Default`. You must specify a value, otherwise the request fails.
   *
   * If the value is `$Latest`, Amazon EC2 uses the latest version of the launch template.
   *
   * If the value is `$Default`, Amazon EC2 uses the default version of the launch template.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Describes a block device for an EBS volume.
 *
 * @public
 */
export interface EbsBlockDeviceResponse {
  /**
   * Indicates whether the volume is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * Indicates whether the volume is deleted on instance termination.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The number of I/O operations per second (IOPS). For `gp3`, `io1`, and `io2` volumes, this represents the number of IOPS that are provisioned for the volume. For `gp2` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The throughput that the volume supports, in MiB/s.
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key to use for EBS encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The size of the volume, in GiBs.
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * The volume type. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  VolumeType?: VolumeType | undefined;
}

/**
 * Describes a block device mapping, which defines the EBS volumes and instance store volumes to attach to an instance at launch.
 *
 * @public
 */
export interface BlockDeviceMappingResponse {
  /**
   * The device name (for example, `/dev/sdh` or `xvdh`).
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * The virtual device name.
   *
   * @public
   */
  VirtualName?: string | undefined;

  /**
   * Parameters used to automatically set up EBS volumes when the instance is launched.
   *
   * @public
   */
  Ebs?: EbsBlockDeviceResponse | undefined;

  /**
   * Suppresses the specified device included in the block device mapping.
   *
   * @public
   */
  NoDevice?: string | undefined;
}

/**
 * The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface BaselineEbsBandwidthMbps {
  /**
   * The minimum baseline bandwidth, in Mbps. If this parameter is not specified, there is no minimum limit.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum baseline bandwidth, in Mbps. If this parameter is not specified, there is no maximum limit.
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
export interface PerformanceFactorReference {
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
export interface CpuPerformanceFactor {
  /**
   * Specify an instance family to use as the baseline reference for CPU performance. All instance types that match your specified attributes will be compared against the CPU performance of the referenced instance family, regardless of CPU manufacturer or architecture differences.
   *
   * > **Note:** Currently, only one instance family can be specified in the list.
   *
   * @public
   */
  References?: PerformanceFactorReference[] | undefined;
}

/**
 * The baseline performance to consider, using an instance family as a baseline reference. The instance family establishes the lowest acceptable level of performance. Amazon EC2 uses this baseline to guide instance type selection, but there is no guarantee that the selected instance types will always exceed the baseline for every application.
 *
 * Currently, this parameter only supports CPU performance as a baseline performance factor. For example, specifying `c6i` would use the CPU performance of the `c6i` family as the baseline reference.
 *
 * @public
 */
export interface BaselinePerformanceFactors {
  /**
   * The CPU performance to consider, using an instance family as the baseline reference.
   *
   * @public
   */
  Cpu?: CpuPerformanceFactor | undefined;
}

/**
 * The minimum and maximum amount of memory per vCPU, in GiB.
 *
 * @public
 */
export interface MemoryGiBPerVCpu {
  /**
   * The minimum amount of memory per vCPU, in GiB. If this parameter is not specified, there is no minimum limit.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum amount of memory per vCPU, in GiB. If this parameter is not specified, there is no maximum limit.
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
export interface MemoryMiB {
  /**
   * The minimum amount of memory, in MiB. If this parameter is not specified, there is no minimum limit.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum amount of memory, in MiB. If this parameter is not specified, there is no maximum limit.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
 *
 * > **Note:** Setting the minimum bandwidth does not guarantee that your instance will achieve the minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum bandwidth, but the actual bandwidth of your instance might go below the specified minimum at times. For more information, see [Available instance bandwidth](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface NetworkBandwidthGbps {
  /**
   * The minimum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no minimum limit.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no maximum limit.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The minimum and maximum number of network interfaces.
 *
 * @public
 */
export interface NetworkInterfaceCount {
  /**
   * The minimum number of network interfaces. If this parameter is not specified, there is no minimum limit.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum number of network interfaces. If this parameter is not specified, there is no maximum limit.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The minimum and maximum amount of total local storage, in GB.
 *
 * @public
 */
export interface TotalLocalStorageGB {
  /**
   * The minimum amount of total local storage, in GB. If this parameter is not specified, there is no minimum limit.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum amount of total local storage, in GB. If this parameter is not specified, there is no maximum limit.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The minimum and maximum number of vCPUs.
 *
 * @public
 */
export interface VCpuCountRange {
  /**
   * The minimum number of vCPUs. If the value is `0`, there is no minimum limit.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum number of vCPUs. If this parameter is not specified, there is no maximum limit.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes.
 *
 * You must specify `VCpuCount` and `MemoryMiB`. All other attributes are optional. Any unspecified optional attribute is set to its default.
 *
 * When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.
 *
 * To limit the list of instance types from which Amazon EC2 can identify matching instance types, you can use one of the following parameters, but not both in the same request:
 *
 * - `AllowedInstanceTypes` - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.
 * - `ExcludedInstanceTypes` - The instance types to exclude from the list, even if they match your specified attributes.
 *
 * > **Note:**
 * >
 * > If you specify `InstanceRequirements`, you can't specify `InstanceType`.
 * >
 * > Attribute-based instance type selection is only supported when using Auto Scaling groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in the [launch instance wizard](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html) or with the [RunInstances API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html), you can't specify `InstanceRequirements`.
 *
 * For more information, see [Create mixed instances group using attribute-based instance type selection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-mixed-instances-group-attribute-based-instance-type-selection.html) in the *Amazon EC2 Auto Scaling User Guide*, and also [Specify attributes for instance type selection for EC2 Fleet or Spot Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html) and [Spot placement score](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface InstanceRequirements {
  /**
   * The minimum and maximum number of vCPUs.
   *
   * @public
   */
  VCpuCount?: VCpuCountRange | undefined;

  /**
   * The minimum and maximum amount of memory, in MiB.
   *
   * @public
   */
  MemoryMiB?: MemoryMiB | undefined;

  /**
   * The CPU manufacturers to include.
   *
   * - For instance types with Intel CPUs, specify `intel`.
   * - For instance types with AMD CPUs, specify `amd`.
   * - For instance types with Amazon Web Services CPUs, specify `amazon-web-services`.
   * - For instance types with Apple CPUs, specify `apple`.
   *
   * > **Note:** Don't confuse the CPU manufacturer with the CPU architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template.
   *
   * Default: Any manufacturer
   *
   * @public
   */
  CpuManufacturers?: CpuManufacturer[] | undefined;

  /**
   * The minimum and maximum amount of memory per vCPU, in GiB.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpu | undefined;

  /**
   * The instance types to exclude.
   *
   * You can use strings with one or more wild cards, represented by an asterisk (`*`), to exclude an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`.
   *
   * For example, if you specify `c5*`,Amazon EC2 will exclude the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, Amazon EC2 will exclude all the M5a instance types, but not the M5n instance types.
   *
   * > **Note:** If you specify `ExcludedInstanceTypes`, you can't specify `AllowedInstanceTypes`.
   *
   * Default: No excluded instance types
   *
   * @public
   */
  ExcludedInstanceTypes?: string[] | undefined;

  /**
   * Indicates whether current or previous generation instance types are included. The current generation instance types are recommended for use. Current generation instance types are typically the latest two to three generations in each instance family. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
   *
   * For current generation instance types, specify `current`.
   *
   * For previous generation instance types, specify `previous`.
   *
   * Default: Current and previous generation instance types
   *
   * @public
   */
  InstanceGenerations?: InstanceGeneration[] | undefined;

  /**
   * [Price protection] The price protection threshold for Spot Instances, as a percentage higher than an identified Spot price. The identified Spot price is the Spot price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified Spot price is from the lowest priced current generation instance types, and failing that, from the lowest priced previous generation instance types that match your attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose Spot price exceeds your specified threshold.
   *
   * The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
   *
   * If you set `TargetCapacityUnitType` to `vcpu` or `memory-mib`, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.
   *
   * This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html) and [GetInstanceTypesFromInstanceRequirements](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html).
   *
   * > **Note:** Only one of `SpotMaxPricePercentageOverLowestPrice` or `MaxSpotPriceAsPercentageOfOptimalOnDemandPrice` can be specified. If you don't specify either, Amazon EC2 will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as `999999`.
   *
   * Default: `100`
   *
   * @public
   */
  SpotMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * [Price protection] The price protection threshold for On-Demand Instances, as a percentage higher than an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose price exceeds your specified threshold.
   *
   * The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
   *
   * To turn off price protection, specify a high value, such as `999999`.
   *
   * This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html) and [GetInstanceTypesFromInstanceRequirements](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html).
   *
   * > **Note:** If you set `TargetCapacityUnitType` to `vcpu` or `memory-mib`, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.
   *
   * Default: `20`
   *
   * @public
   */
  OnDemandMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * Indicates whether bare metal instance types must be included, excluded, or required.
   *
   * - To include bare metal instance types, specify `included`.
   * - To require only bare metal instance types, specify `required`.
   * - To exclude bare metal instance types, specify `excluded`.
   *
   * Default: `excluded`
   *
   * @public
   */
  BareMetal?: BareMetal | undefined;

  /**
   * Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html).
   *
   * - To include burstable performance instance types, specify `included`.
   * - To require only burstable performance instance types, specify `required`.
   * - To exclude burstable performance instance types, specify `excluded`.
   *
   * Default: `excluded`
   *
   * @public
   */
  BurstablePerformance?: BurstablePerformance | undefined;

  /**
   * Indicates whether instance types must support hibernation for On-Demand Instances.
   *
   * This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html).
   *
   * Default: `false`
   *
   * @public
   */
  RequireHibernateSupport?: boolean | undefined;

  /**
   * The minimum and maximum number of network interfaces.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  NetworkInterfaceCount?: NetworkInterfaceCount | undefined;

  /**
   * Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, [Amazon EC2 instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html) in the *Amazon EC2 User Guide*.
   *
   * - To include instance types with instance store volumes, specify `included`.
   * - To require only instance types with instance store volumes, specify `required`.
   * - To exclude instance types with instance store volumes, specify `excluded`.
   *
   * Default: `included`
   *
   * @public
   */
  LocalStorage?: LocalStorage | undefined;

  /**
   * The type of local storage that is required.
   *
   * - For instance types with hard disk drive (HDD) storage, specify `hdd`.
   * - For instance types with solid state drive (SSD) storage, specify `ssd`.
   *
   * Default: `hdd` and `ssd`
   *
   * @public
   */
  LocalStorageTypes?: LocalStorageType[] | undefined;

  /**
   * The minimum and maximum amount of total local storage, in GB.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  TotalLocalStorageGB?: TotalLocalStorageGB | undefined;

  /**
   * The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the *Amazon EC2 User Guide*.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbps | undefined;

  /**
   * The accelerator types that must be on the instance type.
   *
   * - For instance types with FPGA accelerators, specify `fpga`.
   * - For instance types with GPU accelerators, specify `gpu`.
   * - For instance types with Inference accelerators, specify `inference`.
   * - For instance types with Media accelerators, specify `media`.
   *
   * Default: Any accelerator type
   *
   * @public
   */
  AcceleratorTypes?: AcceleratorType[] | undefined;

  /**
   * The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an instance.
   *
   * To exclude accelerator-enabled instance types, set `Max` to `0`.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  AcceleratorCount?: AcceleratorCount | undefined;

  /**
   * Indicates whether instance types must have accelerators by specific manufacturers.
   *
   * - For instance types with Amazon Web Services devices, specify `amazon-web-services`.
   * - For instance types with AMD devices, specify `amd`.
   * - For instance types with Habana devices, specify `habana`.
   * - For instance types with NVIDIA devices, specify `nvidia`.
   * - For instance types with Xilinx devices, specify `xilinx`.
   *
   * Default: Any manufacturer
   *
   * @public
   */
  AcceleratorManufacturers?: AcceleratorManufacturer[] | undefined;

  /**
   * The accelerators that must be on the instance type.
   *
   * - For instance types with NVIDIA A10G GPUs, specify `a10g`.
   * - For instance types with NVIDIA A100 GPUs, specify `a100`.
   * - For instance types with NVIDIA H100 GPUs, specify `h100`.
   * - For instance types with Amazon Web Services Inferentia chips, specify `inferentia`.
   * - For instance types with Amazon Web Services Inferentia2 chips, specify `inferentia2`.
   * - For instance types with Habana Gaudi HL-205 GPUs, specify `gaudi-hl-205`.
   * - For instance types with NVIDIA GRID K520 GPUs, specify `k520`.
   * - For instance types with NVIDIA K80 GPUs, specify `k80`.
   * - For instance types with NVIDIA L4 GPUs, specify `l4`.
   * - For instance types with NVIDIA L40S GPUs, specify `l40s`.
   * - For instance types with NVIDIA M60 GPUs, specify `m60`.
   * - For instance types with AMD Radeon Pro V520 GPUs, specify `radeon-pro-v520`.
   * - For instance types with Amazon Web Services Trainium chips, specify `trainium`.
   * - For instance types with Amazon Web Services Trainium2 chips, specify `trainium2`.
   * - For instance types with NVIDIA T4 GPUs, specify `t4`.
   * - For instance types with NVIDIA T4G GPUs, specify `t4g`.
   * - For instance types with Xilinx U30 cards, specify `u30`.
   * - For instance types with Xilinx VU9P FPGAs, specify `vu9p`.
   * - For instance types with NVIDIA V100 GPUs, specify `v100`.
   *
   * Default: Any accelerator
   *
   * @public
   */
  AcceleratorNames?: AcceleratorName[] | undefined;

  /**
   * The minimum and maximum amount of total accelerator memory, in MiB.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiB | undefined;

  /**
   * The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  NetworkBandwidthGbps?: NetworkBandwidthGbps | undefined;

  /**
   * The instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes.
   *
   * You can use strings with one or more wild cards, represented by an asterisk (`*`), to allow an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`.
   *
   * For example, if you specify `c5*`,Amazon EC2 will allow the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, Amazon EC2 will allow all the M5a instance types, but not the M5n instance types.
   *
   * > **Note:** If you specify `AllowedInstanceTypes`, you can't specify `ExcludedInstanceTypes`.
   *
   * Default: All instance types
   *
   * @public
   */
  AllowedInstanceTypes?: string[] | undefined;

  /**
   * [Price protection] The price protection threshold for Spot Instances, as a percentage of an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from the lowest priced current generation instance types, and failing that, from the lowest priced previous generation instance types that match your attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose price exceeds your specified threshold.
   *
   * The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
   *
   * If you set `TargetCapacityUnitType` to `vcpu` or `memory-mib`, the price protection threshold is based on the per vCPU or per memory price instead of the per instance price.
   *
   * > **Note:** Only one of `SpotMaxPricePercentageOverLowestPrice` or `MaxSpotPriceAsPercentageOfOptimalOnDemandPrice` can be specified. If you don't specify either, Amazon EC2 will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as `999999`.
   *
   * @public
   */
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number | undefined;

  /**
   * The baseline performance to consider, using an instance family as a baseline reference. The instance family establishes the lowest acceptable level of performance. Amazon EC2 uses this baseline to guide instance type selection, but there is no guarantee that the selected instance types will always exceed the baseline for every application. Currently, this parameter only supports CPU performance as a baseline performance factor. For more information, see [Performance protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-abis-performance-protection) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  BaselinePerformanceFactors?: BaselinePerformanceFactors | undefined;

  /**
   * Specifies whether instance types must support encrypting in-transit traffic between instances. For more information, including the supported instance types, see [Encryption in transit](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/data-protection.html#encryption-transit) in the *Amazon EC2 User Guide*.
   *
   * Default: `false`
   *
   * @public
   */
  RequireEncryptionInTransit?: boolean | undefined;
}

/**
 * Describes the placement of an instance.
 *
 * @public
 */
export interface PlacementResponse {
  /**
   * The name of the placement group that the instance is in.
   *
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * Describes overrides for a launch template.
 *
 * @public
 */
export interface FleetLaunchTemplateOverrides {
  /**
   * The instance type.
   *
   * `mac1.metal` is not supported as a launch template override.
   *
   * > **Note:** If you specify `InstanceType`, you can't specify `InstanceRequirements`.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *
   * > **Important:**
   * >
   * > If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.
   * >
   * > If you specify a maximum price, it must be more than USD $0.001. Specifying a value below USD $0.001 will result in an `InvalidParameterValue` error message.
   *
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * The ID of the subnet in which to launch the instances.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The Availability Zone in which to launch the instances. For example, `us-east-2a`.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified in the request, but not both.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The number of units provided by the specified instance type. These are the same units that you chose to set the target capacity in terms of instances, or a performance characteristic such as vCPUs, memory, or I/O.
   *
   * If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the number of instances to the next whole number. If this value is not specified, the default is 1.
   *
   * > **Note:** When specifying weights, the price used in the `lowest-price` and `price-capacity-optimized` allocation strategies is per *unit* hour (where the instance price is divided by the specified weight). However, if all the specified weights are above the requested `TargetCapacity`, resulting in only 1 instance being launched, the price used is per *instance* hour.
   *
   * @public
   */
  WeightedCapacity?: number | undefined;

  /**
   * The priority for the launch template override. The highest priority is launched first.
   *
   * If the On-Demand `AllocationStrategy` is set to `prioritized`, EC2 Fleet uses priority to determine which launch template override to use first in fulfilling On-Demand capacity.
   *
   * If the Spot `AllocationStrategy` is set to `capacity-optimized-prioritized`, EC2 Fleet uses priority on a best-effort basis to determine which launch template override to use in fulfilling Spot capacity, but optimizes for capacity first.
   *
   * Valid values are whole numbers starting at `0`. The lower the number, the higher the priority. If no number is set, the override has the lowest priority. You can set the same priority for different launch template overrides.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The location where the instance launched, if applicable.
   *
   * @public
   */
  Placement?: PlacementResponse | undefined;

  /**
   * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with those attributes.
   *
   * > **Note:** If you specify `InstanceRequirements`, you can't specify `InstanceType`.
   *
   * @public
   */
  InstanceRequirements?: InstanceRequirements | undefined;

  /**
   * The ID of the AMI in the format `ami-17characters00000`.
   *
   * Alternatively, you can specify a Systems Manager parameter, using one of the following formats. The Systems Manager parameter will resolve to an AMI ID on launch.
   *
   * To reference a public parameter:
   *
   * - `resolve:ssm:public-parameter`
   *
   * To reference a parameter stored in the same account:
   *
   * - `resolve:ssm:parameter-name`
   * - `resolve:ssm:parameter-name:version-number`
   * - `resolve:ssm:parameter-name:label`
   *
   * To reference a parameter shared from another Amazon Web Services account:
   *
   * - `resolve:ssm:parameter-ARN`
   * - `resolve:ssm:parameter-ARN:version-number`
   * - `resolve:ssm:parameter-ARN:label`
   *
   * For more information, see [Use a Systems Manager parameter instead of an AMI ID](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id) in the *Amazon EC2 User Guide*.
   *
   * > **Note:** This parameter is only available for fleets of type `instant`. For fleets of type `maintain` and `request`, you must specify the AMI ID in the launch template.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The block device mappings, which define the EBS volumes and instance store volumes to attach to the instance at launch.
   *
   * Supported only for fleets of type `instant`.
   *
   * For more information, see [Block device mappings for volumes on Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMappingResponse[] | undefined;

  /**
   * The ID of the Availability Zone in which to launch the instances. For example, `use2-az1`.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified in the request, but not both.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * Describes a launch template and overrides.
 *
 * @public
 */
export interface LaunchTemplateAndOverridesResponse {
  /**
   * The launch template.
   *
   * @public
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification | undefined;

  /**
   * Any parameters that you specify override the same parameters in the launch template.
   *
   * @public
   */
  Overrides?: FleetLaunchTemplateOverrides | undefined;
}

/**
 * Describes the instances that could not be launched by the fleet.
 *
 * @public
 */
export interface CreateFleetError {
  /**
   * The launch templates and overrides that were used for launching the instances. The values that you specify in the Overrides replace the values in the launch template.
   *
   * @public
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse | undefined;

  /**
   * Indicates if the instance that could not be launched was a Spot, On-Demand, Capacity Block for ML, or interruptible Capacity Reservation instance. If you are using `ReservedCapacityOptions` with `on-demand-capacity-reservation` in the `ReservationTypes` list, the value can also be `on-demand-capacity-reservation`.
   *
   * @public
   */
  Lifecycle?: InstanceLifecycle | undefined;

  /**
   * The error code that indicates why the instance could not be launched. For more information about error codes, see [Error codes](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html).
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message that describes why the instance could not be launched. For more information about error messages, see [Error codes](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html).
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Describes the instances that were launched by the fleet.
 *
 * @public
 */
export interface CreateFleetInstance {
  /**
   * The launch templates and overrides that were used for launching the instances. The values that you specify in the Overrides replace the values in the launch template.
   *
   * @public
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse | undefined;

  /**
   * Indicates if the instance that was launched is a Spot, On-Demand, Capacity Block for ML, or interruptible Capacity Reservation instance.
   *
   * @public
   */
  Lifecycle?: InstanceLifecycle | undefined;

  /**
   * The IDs of the instances.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The value is `windows` for Windows instances in an EC2 Fleet. Otherwise, the value is blank.
   *
   * @public
   */
  Platform?: PlatformValues | undefined;

  /**
   * The ID of the Availability Zone in which the instance was launched. For example, `use2-az1`.
   *
   * Supported only for fleets of type `instant`.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The name of the Availability Zone in which the instance was launched. For example, `us-east-2a`.
   *
   * Supported only for fleets of type `instant`.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the subnet in which the instance was launched.
   *
   * Supported only for fleets of type `instant`.
   *
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * @public
 */
export interface CreateFleetResult {
  /**
   * The ID of the EC2 Fleet.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * Information about the instances that could not be launched by the fleet. Supported only for fleets of type `instant`.
   *
   * @public
   */
  Errors?: CreateFleetError[] | undefined;

  /**
   * Information about the instances that were launched by the fleet. Supported only for fleets of type `instant`.
   *
   * @public
   */
  Instances?: CreateFleetInstance[] | undefined;
}

/**
 * Describes the destination options for a flow log.
 *
 * @public
 */
export interface DestinationOptionsRequest {
  /**
   * The format for the flow log. The default is `plain-text`.
   *
   * @public
   */
  FileFormat?: DestinationFileFormat | undefined;

  /**
   * Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3. The default is `false`.
   *
   * @public
   */
  HiveCompatiblePartitions?: boolean | undefined;

  /**
   * Indicates whether to partition the flow log per hour. This reduces the cost and response time for queries. The default is `false`.
   *
   * @public
   */
  PerHourPartition?: boolean | undefined;
}

/**
 * A single resource's tag configuration associated with the Flow Logs Amazon EC2 Tags feature fields in your custom log format.
 *
 * @public
 */
export interface TagFieldSpecificationRequest {
  /**
   * The resource type for the tag keys associated with the Flow Logs Amazon EC2 Tags feature fields in your custom log format.
   *
   * @public
   */
  ResourceType?: TaggableResourceType | undefined;

  /**
   * The tag keys on your tagged resources to be displayed by the Flow Logs Amazon EC2 Tags feature fields in your custom log format.
   *
   * @public
   */
  TagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateFlowLogsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The ARN of the IAM role that allows Amazon EC2 to publish flow logs to the log destination.
   *
   * This parameter is required if the destination type is `cloud-watch-logs`, or if the destination type is `kinesis-data-firehose` and the delivery stream and the resources to monitor are in different accounts.
   *
   * @public
   */
  DeliverLogsPermissionArn?: string | undefined;

  /**
   * The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.
   *
   * @public
   */
  DeliverCrossAccountRole?: string | undefined;

  /**
   * The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.
   *
   * This parameter is valid only if the destination type is `cloud-watch-logs`.
   *
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * The IDs of the resources to monitor. For example, if the resource type is `VPC`, specify the IDs of the VPCs.
   *
   * Constraints: Maximum of 25 for transit gateway resource types. Maximum of 300 for the other resource types.
   *
   * @public
   */
  ResourceIds: string[] | undefined;

  /**
   * The type of resource to monitor.
   *
   * @public
   */
  ResourceType: FlowLogsResourceType | undefined;

  /**
   * The type of traffic to monitor (accepted traffic, rejected traffic, or all traffic). This parameter is not supported for transit gateway resource types. It is required for the other resource types.
   *
   * @public
   */
  TrafficType?: TrafficType | undefined;

  /**
   * The type of destination for the flow log data.
   *
   * Default: `cloud-watch-logs`
   *
   * @public
   */
  LogDestinationType?: LogDestinationType | undefined;

  /**
   * The destination for the flow log data. The meaning of this parameter depends on the destination type.
   *
   * - If the destination type is `cloud-watch-logs`, specify the ARN of a CloudWatch Logs log group. For example:
   *
   *   arn:aws:logs:*region*:*account_id*:log-group:*my_group*
   *
   *   Alternatively, use the `LogGroupName` parameter.
   * - If the destination type is `s3`, specify the ARN of an S3 bucket. For example:
   *
   *   arn:aws:s3:::*my_bucket*\/*my_subfolder*\/
   *
   *   The subfolder is optional. Note that you can't use `AWSLogs` as a subfolder name.
   * - If the destination type is `kinesis-data-firehose`, specify the ARN of a Kinesis Data Firehose delivery stream. For example:
   *
   *   arn:aws:firehose:*region*:*account_id*:deliverystream:*my_stream*
   *
   * @public
   */
  LogDestination?: string | undefined;

  /**
   * The fields to include in the flow log record. List the fields in the order in which they should appear. If you omit this parameter, the flow log is created using the default format. If you specify this parameter, you must include at least one field. For more information about the available fields, see [Flow log records](https://docs.aws.amazon.com/vpc/latest/userguide/flow-log-records.html) in the *Amazon VPC User Guide* or [Transit Gateway Flow Log records](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-flow-logs.html#flow-log-records) in the *Amazon Web Services Transit Gateway Guide*.
   *
   * Specify the fields using the `$\{field-id\}` format, separated by spaces.
   *
   * @public
   */
  LogFormat?: string | undefined;

  /**
   * The tags to apply to the flow logs.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. The possible values are 60 seconds (1 minute) or 600 seconds (10 minutes). This parameter must be 60 seconds for transit gateway resource types.
   *
   * When a network interface is attached to a [Nitro-based instance](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html), the aggregation interval is always 60 seconds or less, regardless of the value that you specify.
   *
   * Default: 600
   *
   * @public
   */
  MaxAggregationInterval?: number | undefined;

  /**
   * The destination options.
   *
   * @public
   */
  DestinationOptions?: DestinationOptionsRequest | undefined;

  /**
   * The tag configuration associated with the Flow Logs Amazon EC2 Tags feature fields in your custom log format.
   *
   * @public
   */
  TagFieldSpecifications?: TagFieldSpecificationRequest[] | undefined;
}

/**
 * @public
 */
export interface CreateFlowLogsResult {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The IDs of the flow logs.
   *
   * @public
   */
  FlowLogIds?: string[] | undefined;

  /**
   * Information about the flow logs that could not be created successfully.
   *
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * Describes a storage location in Amazon S3.
 *
 * @public
 */
export interface StorageLocation {
  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The key.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * @public
 */
export interface CreateFpgaImageRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball.
   *
   * @public
   */
  InputStorageLocation: StorageLocation | undefined;

  /**
   * The location in Amazon S3 for the output logs.
   *
   * @public
   */
  LogsStorageLocation?: StorageLocation | undefined;

  /**
   * A description for the AFI.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A name for the AFI.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to apply to the FPGA image during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateFpgaImageResult {
  /**
   * The FPGA image identifier (AFI ID).
   *
   * @public
   */
  FpgaImageId?: string | undefined;

  /**
   * The global FPGA image identifier (AGFI ID).
   *
   * @public
   */
  FpgaImageGlobalId?: string | undefined;
}

/**
 * Describes a block device for an EBS volume.
 *
 * @public
 */
export interface EbsBlockDevice {
  /**
   * Indicates whether the EBS volume is deleted on instance termination. For more information, see [Preserving Amazon EBS volumes on instance termination](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#preserving-volumes-on-termination) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The number of I/O operations per second (IOPS). For `gp3`, `io1`, and `io2` volumes, this represents the number of IOPS that are provisioned for the volume. For `gp2` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
   *
   * The following are the supported values for each volume type:
   *
   * - `gp3`: 3,000 - 80,000 IOPS
   * - `io1`: 100 - 64,000 IOPS
   * - `io2`: 100 - 256,000 IOPS
   *
   * For `io2` volumes, you can achieve up to 256,000 IOPS on [instances built on the Nitro System](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances). On other instances, you can achieve performance up to 32,000 IOPS.
   *
   * This parameter is required for `io1` and `io2` volumes. The default for `gp3` volumes is 3,000 IOPS.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.
   *
   * The following are the supported sizes for each volume type:
   *
   * - `gp2`: 1 - 16,384 GiB
   * - `gp3`: 1 - 65,536 GiB
   * - `io1`: 4 - 16,384 GiB
   * - `io2`: 4 - 65,536 GiB
   * - `st1` and `sc1`: 125 - 16,384 GiB
   * - `standard`: 1 - 1024 GiB
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * The volume type. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key to use for EBS encryption.
   *
   * This parameter is only supported on `BlockDeviceMapping` objects called by [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html), [RequestSpotFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html), and [RequestSpotInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html).
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The throughput that the volume supports, in MiB/s.
   *
   * This parameter is valid only for `gp3` volumes.
   *
   * Valid Range: Minimum value of 125. Maximum value of 2,000.
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * The ARN of the Outpost on which the snapshot is stored.
   *
   * This parameter is not supported when using [CreateImage](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html).
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The Availability Zone where the EBS volume will be created (for example, `us-east-1a`).
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` can be specified, but not both. If neither is specified, Amazon EC2 automatically selects an Availability Zone within the Region.
   *
   * This parameter is not supported when using [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html), [CreateImage](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html), [DescribeImages](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html), [RequestSpotFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html), [RequestSpotInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html), and [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html).
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Indicates whether the encryption state of an EBS volume is changed while being restored from a backing snapshot. The effect of setting the encryption state to `true` depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see [Amazon EBS encryption](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html#encryption-parameters) in the *Amazon EBS User Guide*.
   *
   * In no case can you remove encryption from an encrypted volume.
   *
   * Encrypted volumes can only be attached to instances that support Amazon EBS encryption. For more information, see [Supported instance types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption-requirements.html#ebs-encryption_supported_instances).
   *
   * This parameter is not returned by DescribeImageAttribute.
   *
   * For CreateImage and RegisterImage, whether you can include this parameter, and the allowed values differ depending on the type of block device mapping you are creating.
   *
   * - If you are creating a block device mapping for a **new (empty) volume**, you can include this parameter, and specify either `true` for an encrypted volume, or `false` for an unencrypted volume. If you omit this parameter, it defaults to `false` (unencrypted).
   * - If you are creating a block device mapping from an **existing encrypted or unencrypted snapshot**, you must omit this parameter. If you include this parameter, the request will fail, regardless of the value that you specify.
   * - If you are creating a block device mapping from an **existing unencrypted volume**, you can include this parameter, but you must specify `false`. If you specify `true`, the request will fail. In this case, we recommend that you omit the parameter.
   * - If you are creating a block device mapping from an **existing encrypted volume**, you can include this parameter, and specify either `true` or `false`. However, if you specify `false`, the parameter is ignored and the block device mapping is always encrypted. In this case, we recommend that you omit the parameter.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. This is also known as *volume initialization*. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation. For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the *Amazon EC2 User Guide*.
   *
   * This parameter is supported only for volumes created from snapshots. Omit this parameter if:
   *
   * - You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation.
   *
   *   > **Note:** If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore.
   * - You want to create a volume that is initialized at the default rate.
   *
   * This parameter is not supported when using [CreateImage](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html) and [DescribeImages](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html).
   *
   * Valid range: 100 - 300 MiB/s
   *
   * @public
   */
  VolumeInitializationRate?: number | undefined;

  /**
   * The ID of the Availability Zone where the EBS volume will be created (for example, `use1-az1`).
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` can be specified, but not both. If neither is specified, Amazon EC2 automatically selects an Availability Zone within the Region.
   *
   * This parameter is not supported when using [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html), [CreateImage](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html), [DescribeImages](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html), [RequestSpotFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html), [RequestSpotInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html), and [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html).
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The index of the EBS card. Some instance types support multiple EBS cards. The default EBS card index is 0.
   *
   * @public
   */
  EbsCardIndex?: number | undefined;
}

/**
 * Describes a block device mapping, which defines the EBS volumes and instance store volumes to attach to an instance at launch.
 *
 * @public
 */
export interface BlockDeviceMapping {
  /**
   * Parameters used to automatically set up EBS volumes when the instance is launched.
   *
   * @public
   */
  Ebs?: EbsBlockDevice | undefined;

  /**
   * To omit the device from the block device mapping, specify an empty string. When this property is specified, the device is removed from the block device mapping regardless of the assigned value.
   *
   * @public
   */
  NoDevice?: string | undefined;

  /**
   * The device name. For available device names, see [Device names for volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html).
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * The virtual device name (`ephemeral`N). Instance store volumes are numbered starting from 0. An instance type with 2 available instance store volumes can specify mappings for `ephemeral0` and `ephemeral1`. The number of available instance store volumes depends on the instance type. After you connect to the instance, you must mount the volume.
   *
   * NVMe instance store volumes are automatically enumerated and assigned a device name. Including them in your block device mapping has no effect.
   *
   * Constraints: For M3 instances, you must specify instance store volumes in the block device mapping for the instance. When you launch an M3 instance, we ignore any instance store volumes specified in the block device mapping for the AMI.
   *
   * @public
   */
  VirtualName?: string | undefined;
}

/**
 * @public
 */
export interface CreateImageRequest {
  /**
   * The tags to apply to the AMI and snapshots on creation. You can tag the AMI, the snapshots, or both.
   *
   * - To tag the AMI, the value for `ResourceType` must be `image`.
   * - To tag the snapshots that are created of the root volume and of other Amazon EBS volumes that are attached to the instance, the value for `ResourceType` must be `snapshot`. The same tag is applied to all of the snapshots that are created.
   *
   * If you specify other values for `ResourceType`, the request fails.
   *
   * To tag an AMI or snapshot after it has been created, see [CreateTags](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html).
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * > **Note:** Only supported for instances in Local Zones and for instances on Outposts that support local snapshots. If the source instance is not in one of these locations, omit this parameter.
   *
   * The Amazon S3 location where the snapshots will be stored.
   *
   * - To create local snapshots in the same Local Zone or on the same Outpost as the source instance, specify `local`.
   * - To create regional snapshots in the parent Region of the Local Zone or Outpost, specify `regional`.
   *
   * If the source instance is in a Local Zone and you omit this parameter, regional snapshots are created in the parent Region of the Local Zone.
   *
   * If the source instance is on an Outpost that supports local snapshots, this parameter is required. If you omit it, the request fails with an `InvalidParameterValue` error.
   *
   * Default: `regional` (for instances in Local Zones only)
   *
   * @public
   */
  SnapshotLocation?: SnapshotLocationEnum | undefined;

  /**
   * The boot mode of the new image, which overrides the default boot mode. By default, if you do not specify this parameter, the new image inherits the `boot-mode` from the source instance.
   *
   * A value of `uefi` indicates that the image only supports UEFI boot mode. You can specify this parameter only if the `current-instance-boot-mode` of the source instance is `uefi`. To find the `boot-mode` or `current-instance-boot-mode` of an instance, see [DescribeInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html).
   *
   * > **Note:** The operating system contained in the AMI must be configured to support the specified boot mode.
   *
   * For more information, see [Instance launch behavior with Amazon EC2 boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  BootModeOverride?: BootModeOverrideValues | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A name for the new image.
   *
   * Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description for the new image.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether or not the instance should be automatically rebooted before creating the image. Specify one of the following values:
   *
   * - `true` - The instance is not rebooted before creating the image. This creates crash-consistent snapshots that include only the data that has been written to the volumes at the time the snapshots are created. Buffered data and data in memory that has not yet been written to the volumes is not included in the snapshots.
   * - `false` - The instance is rebooted before creating the image. This ensures that all buffered data and data in memory is written to the volumes before the snapshots are created.
   *
   * Default: `false`
   *
   * @public
   */
  NoReboot?: boolean | undefined;

  /**
   * The block device mappings.
   *
   * When using the CreateImage action:
   *
   * - You can't change the volume size using the VolumeSize parameter. If you want a different volume size, you must first change the volume size of the source instance.
   * - You can't modify the encryption status of existing volumes or snapshots. To create an AMI with volumes or snapshots that have a different encryption status (for example, where the source volume and snapshots are unencrypted, and you want to create an AMI with encrypted volumes or snapshots), copy the image instead.
   * - The only option that can be changed for existing mappings or snapshots is `DeleteOnTermination`.
   *
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;
}

/**
 * @public
 */
export interface CreateImageResult {
  /**
   * The ID of the new AMI.
   *
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * The options that affect the scope of the report.
 *
 * @public
 */
export interface ImageUsageResourceTypeOptionRequest {
  /**
   * The name of the option.
   *
   * Valid value: `version-depth` - The number of launch template versions to check.
   *
   * @public
   */
  OptionName?: string | undefined;

  /**
   * A value for the specified option.
   *
   * Valid values: Integers between `1` and `10000`
   *
   * Default: `20`
   *
   * @public
   */
  OptionValues?: string[] | undefined;
}

/**
 * A resource type to include in the report. Associated options can also be specified if the resource type is a launch template.
 *
 * @public
 */
export interface ImageUsageResourceTypeRequest {
  /**
   * The resource type.
   *
   * Valid values: `ec2:Instance` | `ec2:LaunchTemplate`
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The options that affect the scope of the report. Valid only when `ResourceType` is `ec2:LaunchTemplate`.
   *
   * @public
   */
  ResourceTypeOptions?: ImageUsageResourceTypeOptionRequest[] | undefined;
}

/**
 * @public
 */
export interface CreateImageUsageReportRequest {
  /**
   * The ID of the image to report on.
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

  /**
   * The resource types to include in the report.
   *
   * @public
   */
  ResourceTypes: ImageUsageResourceTypeRequest[] | undefined;

  /**
   * The Amazon Web Services account IDs to include in the report. To include all accounts, omit this parameter.
   *
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to apply to the report on creation. The `ResourceType` must be set to `image-usage-report`; any other value will cause the report creation to fail.
   *
   * To tag a report after it has been created, see [CreateTags](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html).
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateImageUsageReportResult {
  /**
   * The ID of the report.
   *
   * @public
   */
  ReportId?: string | undefined;
}

/**
 * @public
 */
export interface CreateInstanceConnectEndpointRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the subnet in which to create the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * One or more security groups to associate with the endpoint. If you don't specify a security group, the default security group for your VPC will be associated with the endpoint.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Indicates whether the client IP address is preserved as the source. The following are the possible values.
   *
   * - `true` - Use the client IP address as the source.
   * - `false` - Use the network interface IP address as the source.
   *
   * > **Note:** `PreserveClientIp` is only supported on IPv4 EC2 Instance Connect Endpoints. To use `PreserveClientIp`, the value for `IpAddressType` must be `ipv4`.
   *
   * Default: `false`
   *
   * @public
   */
  PreserveClientIp?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to apply to the EC2 Instance Connect Endpoint during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The IP address type of the endpoint.
   *
   * If no value is specified, the default value is determined by the IP address type of the subnet:
   *
   * - `dualstack` - If the subnet has both IPv4 and IPv6 CIDRs
   * - `ipv4` - If the subnet has only IPv4 CIDRs
   * - `ipv6` - If the subnet has only IPv6 CIDRs
   *
   * > **Note:** `PreserveClientIp` is only supported on IPv4 EC2 Instance Connect Endpoints. To use `PreserveClientIp`, the value for `IpAddressType` must be `ipv4`.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;
}

/**
 * The DNS names of the endpoint.
 *
 * @public
 */
export interface InstanceConnectEndpointDnsNames {
  /**
   * The DNS name of the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * The Federal Information Processing Standards (FIPS) compliant DNS name of the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  FipsDnsName?: string | undefined;
}

/**
 * The public DNS names of the endpoint, including IPv4-only and dualstack DNS names.
 *
 * @public
 */
export interface InstanceConnectEndpointPublicDnsNames {
  /**
   * The IPv4-only DNS name of the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  Ipv4?: InstanceConnectEndpointDnsNames | undefined;

  /**
   * The dualstack DNS name of the EC2 Instance Connect Endpoint. A dualstack DNS name supports connections from both IPv4 and IPv6 clients.
   *
   * @public
   */
  Dualstack?: InstanceConnectEndpointDnsNames | undefined;
}

/**
 * Describes an EC2 Instance Connect Endpoint.
 *
 * @public
 */
export interface Ec2InstanceConnectEndpoint {
  /**
   * The ID of the Amazon Web Services account that created the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  InstanceConnectEndpointId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  InstanceConnectEndpointArn?: string | undefined;

  /**
   * The current state of the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  State?: Ec2InstanceConnectEndpointState | undefined;

  /**
   * The message for the current state of the EC2 Instance Connect Endpoint. Can include a failure message.
   *
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * The DNS name of the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * The Federal Information Processing Standards (FIPS) compliant DNS name of the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  FipsDnsName?: string | undefined;

  /**
   * The ID of the elastic network interface that Amazon EC2 automatically created when creating the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * The ID of the VPC in which the EC2 Instance Connect Endpoint was created.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The Availability Zone of the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The date and time that the EC2 Instance Connect Endpoint was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The ID of the subnet in which the EC2 Instance Connect Endpoint was created.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * Indicates whether your client's IP address is preserved as the source when you connect to a resource. The following are the possible values.
   *
   * - `true` - Use the IP address of the client. Your instance must have an IPv4 address.
   * - `false` - Use the IP address of the network interface.
   *
   * Default: `false`
   *
   * @public
   */
  PreserveClientIp?: boolean | undefined;

  /**
   * The security groups associated with the endpoint. If you didn't specify a security group, the default security group for your VPC is associated with the endpoint.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The tags assigned to the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The IP address type of the endpoint.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The public DNS names of the endpoint.
   *
   * @public
   */
  PublicDnsNames?: InstanceConnectEndpointPublicDnsNames | undefined;

  /**
   * The ID of the Availability Zone of the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * @public
 */
export interface CreateInstanceConnectEndpointResult {
  /**
   * Information about the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  InstanceConnectEndpoint?: Ec2InstanceConnectEndpoint | undefined;

  /**
   * Unique, case-sensitive idempotency token provided by the client in the the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * The start day and time and the end day and time of the time range, in UTC.
 *
 * @public
 */
export interface InstanceEventWindowTimeRangeRequest {
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
 * @public
 */
export interface CreateInstanceEventWindowRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The name of the event window.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time range for the event window. If you specify a time range, you can't specify a cron expression.
   *
   * @public
   */
  TimeRanges?: InstanceEventWindowTimeRangeRequest[] | undefined;

  /**
   * The cron expression for the event window, for example, `* 0-4,20-23 * * 1,5`. If you specify a cron expression, you can't specify a time range.
   *
   * Constraints:
   *
   * - Only hour and day of the week values are supported.
   * - For day of the week values, you can specify either integers `0` through `6`, or alternative single values `SUN` through `SAT`.
   * - The minute, month, and year must be specified by `*`.
   * - The hour value must be one or a multiple range, for example, `0-4` or `0-4,20-23`.
   * - Each hour range must be >= 2 hours, for example, `0-2` or `20-23`.
   * - The event window must be >= 4 hours. The combined total time ranges in the event window must be >= 4 hours.
   *
   * For more information about cron expressions, see [cron](https://en.wikipedia.org/wiki/Cron) on the *Wikipedia website*.
   *
   * @public
   */
  CronExpression?: string | undefined;

  /**
   * The tags to apply to the event window.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateInstanceEventWindowResult {
  /**
   * Information about the event window.
   *
   * @public
   */
  InstanceEventWindow?: InstanceEventWindow | undefined;
}

/**
 * Describes an export instance task.
 *
 * @public
 */
export interface ExportToS3TaskSpecification {
  /**
   * The format for the exported image.
   *
   * @public
   */
  DiskImageFormat?: DiskImageFormat | undefined;

  /**
   * The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is exported.
   *
   * @public
   */
  ContainerFormat?: ContainerFormat | undefined;

  /**
   * The Amazon S3 bucket for the destination image. The destination bucket must exist and have an access control list (ACL) attached that specifies the Region-specific canonical account ID for the `Grantee`. For more information about the ACL to your S3 bucket, see [Prerequisites](https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html#vmexport-prerequisites) in the VM Import/Export User Guide.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The image is written to a single object in the Amazon S3 bucket at the S3 key s3prefix + exportTaskId + '.' + diskImageFormat.
   *
   * @public
   */
  S3Prefix?: string | undefined;
}

/**
 * @public
 */
export interface CreateInstanceExportTaskRequest {
  /**
   * The tags to apply to the export instance task during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A description for the conversion task or the resource being exported. The maximum length is 255 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The target virtualization environment.
   *
   * @public
   */
  TargetEnvironment: ExportEnvironment | undefined;

  /**
   * The format and location for an export instance task.
   *
   * @public
   */
  ExportToS3Task: ExportToS3TaskSpecification | undefined;
}

/**
 * Describes the format and location for the export task.
 *
 * @public
 */
export interface ExportToS3Task {
  /**
   * The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is exported.
   *
   * @public
   */
  ContainerFormat?: ContainerFormat | undefined;

  /**
   * The format for the exported image.
   *
   * @public
   */
  DiskImageFormat?: DiskImageFormat | undefined;

  /**
   * The Amazon S3 bucket for the destination image. The destination bucket must exist and have an access control list (ACL) attached that specifies the Region-specific canonical account ID for the `Grantee`. For more information about the ACL to your S3 bucket, see [Prerequisites](https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html#vmexport-prerequisites) in the VM Import/Export User Guide.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The encryption key for your S3 bucket.
   *
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * Describes an instance to export.
 *
 * @public
 */
export interface InstanceExportDetails {
  /**
   * The ID of the resource being exported.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The target virtualization environment.
   *
   * @public
   */
  TargetEnvironment?: ExportEnvironment | undefined;
}

/**
 * Describes an export instance task.
 *
 * @public
 */
export interface ExportTask {
  /**
   * A description of the resource being exported.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the export task.
   *
   * @public
   */
  ExportTaskId?: string | undefined;

  /**
   * Information about the export task.
   *
   * @public
   */
  ExportToS3Task?: ExportToS3Task | undefined;

  /**
   * Information about the instance to export.
   *
   * @public
   */
  InstanceExportDetails?: InstanceExportDetails | undefined;

  /**
   * The state of the export task.
   *
   * @public
   */
  State?: ExportTaskState | undefined;

  /**
   * The status message related to the export task.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The tags for the export task.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInstanceExportTaskResult {
  /**
   * Information about the export instance task.
   *
   * @public
   */
  ExportTask?: ExportTask | undefined;
}

/**
 * @public
 */
export interface CreateInternetGatewayRequest {
  /**
   * The tags to assign to the internet gateway.
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
 * Describes an internet gateway.
 *
 * @public
 */
export interface InternetGateway {
  /**
   * Any VPCs attached to the internet gateway.
   *
   * @public
   */
  Attachments?: InternetGatewayAttachment[] | undefined;

  /**
   * The ID of the internet gateway.
   *
   * @public
   */
  InternetGatewayId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the internet gateway.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Any tags assigned to the internet gateway.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInternetGatewayResult {
  /**
   * Information about the internet gateway.
   *
   * @public
   */
  InternetGateway?: InternetGateway | undefined;
}

/**
 * @public
 */
export interface CreateInterruptibleCapacityReservationAllocationRequest {
  /**
   * The ID of the source Capacity Reservation from which to create the interruptible Capacity Reservation. Your Capacity Reservation must be in active state with no end date set and have available capacity for allocation.
   *
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * The number of instances to allocate from your source reservation. You can only allocate available instances (also called unused capacity).
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The tags to apply to the interruptible Capacity Reservation during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Specifies the behavior for the interruptible Capacity Reservation when you reduce its allocation to zero instances. Specify `retain` to keep the interruptible Capacity Reservation active at zero capacity so that you can allocate instances to it again later. Specify `default` to cancel the interruptible Capacity Reservation and return the capacity to your source Capacity Reservation. The default value is `default`.
   *
   * @public
   */
  ZeroSizePreference?: ZeroSizePreference | undefined;
}

/**
 * @public
 */
export interface CreateInterruptibleCapacityReservationAllocationResult {
  /**
   * The ID of the source Capacity Reservation from which the interruptible Capacity Reservation was created.
   *
   * @public
   */
  SourceCapacityReservationId?: string | undefined;

  /**
   * The number of instances allocated to the interruptible reservation.
   *
   * @public
   */
  TargetInstanceCount?: number | undefined;

  /**
   * The current status of the allocation request (creating, active, updating).
   *
   * @public
   */
  Status?: InterruptibleCapacityReservationAllocationStatus | undefined;

  /**
   * The type of interruption applied to the interruptible reservation.
   *
   * @public
   */
  InterruptionType?: InterruptionType | undefined;
}

/**
 * @public
 */
export interface CreateIpamRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A description for the IPAM.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.
   *
   * For more information about operating Regions, see [Create an IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  OperatingRegions?: AddIpamOperatingRegion[] | undefined;

  /**
   * The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * IPAM is offered in a Free Tier and an Advanced Tier. For more information about the features available in each tier and the costs associated with the tiers, see [Amazon VPC pricing > IPAM tab](http://aws.amazon.com/vpc/pricing/).
   *
   * @public
   */
  Tier?: IpamTier | undefined;

  /**
   * Enable this option to use your own GUA ranges as private IPv6 addresses. This option is disabled by default.
   *
   * @public
   */
  EnablePrivateGua?: boolean | undefined;

  /**
   * A metered account is an Amazon Web Services account that is charged for active IP addresses managed in IPAM. For more information, see [Enable cost distribution](https://docs.aws.amazon.com/vpc/latest/ipam/ipam-enable-cost-distro.html) in the *Amazon VPC IPAM User Guide*.
   *
   * Possible values:
   *
   * - `ipam-owner` (default): The Amazon Web Services account which owns the IPAM is charged for all active IP addresses managed in IPAM.
   * - `resource-owner`: The Amazon Web Services account that owns the IP address is charged for the active IP address.
   *
   * @public
   */
  MeteredAccount?: IpamMeteredAccount | undefined;
}

/**
 * The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.
 *
 * For more information about operating Regions, see [Create an IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html) in the *Amazon VPC IPAM User Guide*.
 *
 * @public
 */
export interface IpamOperatingRegion {
  /**
   * The name of the operating Region.
   *
   * @public
   */
  RegionName?: string | undefined;
}

/**
 * IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see [What is IPAM?](https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.
 *
 * @public
 */
export interface Ipam {
  /**
   * The Amazon Web Services account ID of the owner of the IPAM.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the IPAM.
   *
   * @public
   */
  IpamId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IPAM.
   *
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * The Amazon Web Services Region of the IPAM.
   *
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * The ID of the IPAM's default public scope.
   *
   * @public
   */
  PublicDefaultScopeId?: string | undefined;

  /**
   * The ID of the IPAM's default private scope.
   *
   * @public
   */
  PrivateDefaultScopeId?: string | undefined;

  /**
   * The number of scopes in the IPAM. The scope quota is 5. For more information on quotas, see [Quotas in IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  ScopeCount?: number | undefined;

  /**
   * The description for the IPAM.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.
   *
   * For more information about operating Regions, see [Create an IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  OperatingRegions?: IpamOperatingRegion[] | undefined;

  /**
   * The state of the IPAM.
   *
   * @public
   */
  State?: IpamState | undefined;

  /**
   * The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The IPAM's default resource discovery ID.
   *
   * @public
   */
  DefaultResourceDiscoveryId?: string | undefined;

  /**
   * The IPAM's default resource discovery association ID.
   *
   * @public
   */
  DefaultResourceDiscoveryAssociationId?: string | undefined;

  /**
   * The IPAM's resource discovery association count.
   *
   * @public
   */
  ResourceDiscoveryAssociationCount?: number | undefined;

  /**
   * The state message.
   *
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * IPAM is offered in a Free Tier and an Advanced Tier. For more information about the features available in each tier and the costs associated with the tiers, see [Amazon VPC pricing > IPAM tab](http://aws.amazon.com/vpc/pricing/).
   *
   * @public
   */
  Tier?: IpamTier | undefined;

  /**
   * Enable this option to use your own GUA ranges as private IPv6 addresses. This option is disabled by default.
   *
   * @public
   */
  EnablePrivateGua?: boolean | undefined;

  /**
   * A metered account is an Amazon Web Services account that is charged for active IP addresses managed in IPAM. For more information, see [Enable cost distribution](https://docs.aws.amazon.com/vpc/latest/ipam/ipam-enable-cost-distro.html) in the *Amazon VPC IPAM User Guide*.
   *
   * Possible values:
   *
   * - `ipam-owner` (default): The Amazon Web Services account which owns the IPAM is charged for all active IP addresses managed in IPAM.
   * - `resource-owner`: The Amazon Web Services account that owns the IP address is charged for the active IP address.
   *
   * @public
   */
  MeteredAccount?: IpamMeteredAccount | undefined;
}

/**
 * @public
 */
export interface CreateIpamResult {
  /**
   * Information about the IPAM created.
   *
   * @public
   */
  Ipam?: Ipam | undefined;
}

/**
 * @public
 */
export interface CreateIpamExternalResourceVerificationTokenRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM that will create the token.
   *
   * @public
   */
  IpamId: string | undefined;

  /**
   * Token tags.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * A verification token is an Amazon Web Services-generated random value that you can use to prove ownership of an external resource. For example, you can use a verification token to validate that you control a public IP address range when you bring an IP address range to Amazon Web Services (BYOIP).
 *
 * @public
 */
export interface IpamExternalResourceVerificationToken {
  /**
   * The ID of the token.
   *
   * @public
   */
  IpamExternalResourceVerificationTokenId?: string | undefined;

  /**
   * Token ARN.
   *
   * @public
   */
  IpamExternalResourceVerificationTokenArn?: string | undefined;

  /**
   * The ID of the IPAM that created the token.
   *
   * @public
   */
  IpamId?: string | undefined;

  /**
   * ARN of the IPAM that created the token.
   *
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * Region of the IPAM that created the token.
   *
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * Token value.
   *
   * @public
   */
  TokenValue?: string | undefined;

  /**
   * Token name.
   *
   * @public
   */
  TokenName?: string | undefined;

  /**
   * Token expiration.
   *
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * Token status.
   *
   * @public
   */
  Status?: TokenState | undefined;

  /**
   * Token tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Token state.
   *
   * @public
   */
  State?: IpamExternalResourceVerificationTokenState | undefined;
}

/**
 * @public
 */
export interface CreateIpamExternalResourceVerificationTokenResult {
  /**
   * The verification token.
   *
   * @public
   */
  IpamExternalResourceVerificationToken?: IpamExternalResourceVerificationToken | undefined;
}

/**
 * @public
 */
export interface CreateIpamInternetRegistryAssociationRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM to associate with the internet registry.
   *
   * @public
   */
  IpamId: string | undefined;

  /**
   * The Regional Internet Registry to associate with. Possible values:
   *
   * - `ripe` - RIPE NCC (Europe, the Middle East, and Central Asia).
   * - `apnic` - APNIC (Asia Pacific).
   * - `arin` - ARIN (North America).
   * - `lacnic` - LACNIC (Latin America and the Caribbean).
   *
   * @public
   */
  Rir: Rir | undefined;

  /**
   * The organization handle at the internet registry (for example, a RIPE NCC organization ID or ARIN Org ID).
   *
   * @public
   */
  OrganizationHandle: string | undefined;

  /**
   * A description for the internet registry association.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags to assign to the internet registry association.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the operation ignores the request, but does not return an error.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Contains information about an association between an IPAM and a Regional Internet Registry (RIR) for delegated RPKI management.
 *
 * @public
 */
export interface IpamInternetRegistryAssociation {
  /**
   * The ID of the Amazon Web Services account that owns the internet registry association.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the internet registry association.
   *
   * @public
   */
  IpamInternetRegistryAssociationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the internet registry association.
   *
   * @public
   */
  IpamInternetRegistryAssociationArn?: string | undefined;

  /**
   * The ID of the associated IPAM.
   *
   * @public
   */
  IpamId?: string | undefined;

  /**
   * The Amazon Web Services Region of the IPAM.
   *
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * The Regional Internet Registry. Possible values:
   *
   * - `ripe` - RIPE NCC (Europe, the Middle East, and Central Asia).
   * - `apnic` - APNIC (Asia Pacific).
   * - `arin` - ARIN (North America).
   * - `lacnic` - LACNIC (Latin America and the Caribbean).
   *
   * @public
   */
  Rir?: Rir | undefined;

  /**
   * The organization handle at the internet registry.
   *
   * @public
   */
  OrganizationHandle?: string | undefined;

  /**
   * The description of the internet registry association.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The state of the internet registry association. Valid values: `pending-activation` | `pending-enable` | `create-in-progress` | `create-failed` | `enable-in-progress` | `enable-complete` | `enable-failed` | `delete-in-progress` | `delete-complete` | `delete-failed`.
   *
   * @public
   */
  State?: IpamInternetRegistryAssociationState | undefined;

  /**
   * A message describing the current state of the internet registry association, including additional details such as the reason for a failure.
   *
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * The XML content for the child request to be submitted to the internet registry to complete the BPKI setup.
   *
   * @public
   */
  ChildRequestXml?: string | undefined;

  /**
   * The tags assigned to the internet registry association.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateIpamInternetRegistryAssociationResult {
  /**
   * Information about the internet registry association.
   *
   * @public
   */
  IpamInternetRegistryAssociation?: IpamInternetRegistryAssociation | undefined;
}

/**
 * @public
 */
export interface CreateIpamPolicyRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The tags to assign to the IPAM policy.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The ID of the IPAM for which you're creating the policy.
   *
   * @public
   */
  IpamId: string | undefined;
}

/**
 * Information about an IPAM policy.
 *
 * An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.
 *
 * @public
 */
export interface IpamPolicy {
  /**
   * The account ID that owns the IPAM policy.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the IPAM policy.
   *
   * @public
   */
  IpamPolicyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IPAM policy.
   *
   * @public
   */
  IpamPolicyArn?: string | undefined;

  /**
   * The Region of the IPAM policy.
   *
   * @public
   */
  IpamPolicyRegion?: string | undefined;

  /**
   * The state of the IPAM policy.
   *
   * @public
   */
  State?: IpamPolicyState | undefined;

  /**
   * A message about the state of the IPAM policy.
   *
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * The tags assigned to the IPAM policy.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the IPAM this policy belongs to.
   *
   * @public
   */
  IpamId?: string | undefined;
}

/**
 * @public
 */
export interface CreateIpamPolicyResult {
  /**
   * Information about the created IPAM policy.
   *
   * An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.
   *
   * @public
   */
  IpamPolicy?: IpamPolicy | undefined;
}

/**
 * A tag on an IPAM resource.
 *
 * @public
 */
export interface RequestIpamResourceTag {
  /**
   * The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value for the tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The resource used to provision CIDRs to a resource planning pool.
 *
 * @public
 */
export interface IpamPoolSourceResourceRequest {
  /**
   * The source resource ID.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The source resource type.
   *
   * @public
   */
  ResourceType?: IpamPoolSourceResourceType | undefined;

  /**
   * The source resource Region.
   *
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * The source resource owner.
   *
   * @public
   */
  ResourceOwner?: string | undefined;
}

/**
 * @public
 */
export interface CreateIpamPoolRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the scope in which you would like to create the IPAM pool.
   *
   * @public
   */
  IpamScopeId: string | undefined;

  /**
   * The locale for the pool should be one of the following:
   *
   * - An Amazon Web Services Region where you want this IPAM pool to be available for allocations.
   * - The network border group for an Amazon Web Services Local Zone where you want this IPAM pool to be available for allocations ([supported Local Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail)). This option is only available for IPAM IPv4 pools in the public scope.
   *
   * Possible values: Any Amazon Web Services Region or supported Amazon Web Services Local Zone. Default is `none` and means any locale.
   *
   * @public
   */
  Locale?: string | undefined;

  /**
   * The ID of the source IPAM pool. Use this option to create a pool within an existing pool. Note that the CIDR you provision for the pool within the source pool must be available in the source pool's CIDR range.
   *
   * @public
   */
  SourceIpamPoolId?: string | undefined;

  /**
   * A description for the IPAM pool.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The IP protocol assigned to this IPAM pool. You must choose either IPv4 or IPv6 protocol for a pool.
   *
   * @public
   */
  AddressFamily: AddressFamily | undefined;

  /**
   * If selected, IPAM will continuously look for resources within the CIDR range of this pool and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.
   *
   * A locale must be set on the pool for this feature to work.
   *
   * @public
   */
  AutoImport?: boolean | undefined;

  /**
   * Determines if the pool is publicly advertisable. The request can only contain `PubliclyAdvertisable` if `AddressFamily` is `ipv6` and `PublicIpSource` is `byoip`.
   *
   * @public
   */
  PubliclyAdvertisable?: boolean | undefined;

  /**
   * The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.
   *
   * @public
   */
  AllocationMinNetmaskLength?: number | undefined;

  /**
   * The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.
   *
   * @public
   */
  AllocationMaxNetmaskLength?: number | undefined;

  /**
   * The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16.
   *
   * @public
   */
  AllocationDefaultNetmaskLength?: number | undefined;

  /**
   * Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.
   *
   * @public
   */
  AllocationResourceTags?: RequestIpamResourceTag[] | undefined;

  /**
   * The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.
   *
   * @public
   */
  AwsService?: IpamPoolAwsService | undefined;

  /**
   * The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is `byoip`. For more information, see [Create IPv6 pools](https://docs.aws.amazon.com/vpc/latest/ipam/intro-create-ipv6-pools.html) in the *Amazon VPC IPAM User Guide*. By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool if PublicIpSource is `amazon`. For information on increasing the default limit, see [Quotas for your IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  PublicIpSource?: IpamPoolPublicIpSource | undefined;

  /**
   * The resource used to provision CIDRs to a resource planning pool.
   *
   * @public
   */
  SourceResource?: IpamPoolSourceResourceRequest | undefined;
}

/**
 * The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
 *
 * @public
 */
export interface IpamResourceTag {
  /**
   * The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
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
 * The resource used to provision CIDRs to a resource planning pool.
 *
 * @public
 */
export interface IpamPoolSourceResource {
  /**
   * The source resource ID.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The source resource type.
   *
   * @public
   */
  ResourceType?: IpamPoolSourceResourceType | undefined;

  /**
   * The source resource Region.
   *
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * The source resource owner.
   *
   * @public
   */
  ResourceOwner?: string | undefined;
}

/**
 * In IPAM, a pool is a collection of contiguous IP addresses CIDRs. Pools enable you to organize your IP addresses according to your routing and security needs. For example, if you have separate routing and security needs for development and production applications, you can create a pool for each.
 *
 * @public
 */
export interface IpamPool {
  /**
   * The Amazon Web Services account ID of the owner of the IPAM pool.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the IPAM pool.
   *
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * The ID of the source IPAM pool. You can use this option to create an IPAM pool within an existing source pool.
   *
   * @public
   */
  SourceIpamPoolId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IPAM pool.
   *
   * @public
   */
  IpamPoolArn?: string | undefined;

  /**
   * The ARN of the scope of the IPAM pool.
   *
   * @public
   */
  IpamScopeArn?: string | undefined;

  /**
   * In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.
   *
   * @public
   */
  IpamScopeType?: IpamScopeType | undefined;

  /**
   * The ARN of the IPAM.
   *
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * The Amazon Web Services Region of the IPAM pool.
   *
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * The locale of the IPAM pool.
   *
   * The locale for the pool should be one of the following:
   *
   * - An Amazon Web Services Region where you want this IPAM pool to be available for allocations.
   * - The network border group for an Amazon Web Services Local Zone where you want this IPAM pool to be available for allocations ([supported Local Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail)). This option is only available for IPAM IPv4 pools in the public scope.
   *
   * If you choose an Amazon Web Services Region for locale that has not been configured as an operating Region for the IPAM, you'll get an error.
   *
   * @public
   */
  Locale?: string | undefined;

  /**
   * The depth of pools in your IPAM pool. The pool depth quota is 10. For more information, see [Quotas in IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  PoolDepth?: number | undefined;

  /**
   * The state of the IPAM pool.
   *
   * @public
   */
  State?: IpamPoolState | undefined;

  /**
   * The state message.
   *
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * The description of the IPAM pool.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * If selected, IPAM will continuously look for resources within the CIDR range of this pool and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.
   *
   * A locale must be set on the pool for this feature to work.
   *
   * @public
   */
  AutoImport?: boolean | undefined;

  /**
   * Determines if a pool is publicly advertisable. This option is not available for pools with AddressFamily set to `ipv4`.
   *
   * @public
   */
  PubliclyAdvertisable?: boolean | undefined;

  /**
   * The address family of the pool.
   *
   * @public
   */
  AddressFamily?: AddressFamily | undefined;

  /**
   * The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.
   *
   * @public
   */
  AllocationMinNetmaskLength?: number | undefined;

  /**
   * The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.
   *
   * @public
   */
  AllocationMaxNetmaskLength?: number | undefined;

  /**
   * The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16.
   *
   * @public
   */
  AllocationDefaultNetmaskLength?: number | undefined;

  /**
   * Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.
   *
   * @public
   */
  AllocationResourceTags?: IpamResourceTag[] | undefined;

  /**
   * The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.
   *
   * @public
   */
  AwsService?: IpamPoolAwsService | undefined;

  /**
   * The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is `BYOIP`. For more information, see [Create IPv6 pools](https://docs.aws.amazon.com/vpc/latest/ipam/intro-create-ipv6-pools.html) in the *Amazon VPC IPAM User Guide*. By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool. For information on increasing the default limit, see [Quotas for your IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  PublicIpSource?: IpamPoolPublicIpSource | undefined;

  /**
   * The resource used to provision CIDRs to a resource planning pool.
   *
   * @public
   */
  SourceResource?: IpamPoolSourceResource | undefined;
}

/**
 * @public
 */
export interface CreateIpamPoolResult {
  /**
   * Information about the IPAM pool created.
   *
   * @public
   */
  IpamPool?: IpamPool | undefined;
}

/**
 * Describes a condition used when creating or modifying resolver rules.
 *
 * CIDR selection rules define the business logic for selecting CIDRs from IPAM. If a CIDR matches any of the rules, it will be included. If a rule has multiple conditions, the CIDR has to match every condition of that rule. You can create a prefix list resolver without any CIDR selection rules, but it will generate empty versions (containing no CIDRs) until you add rules.
 *
 * There are three rule types. Only 2 of the 3 rule types support conditions - **IPAM pool CIDR** and **Scope resource CIDR**. **Static CIDR** rules cannot have conditions.
 *
 * - **Static CIDR**: A fixed list of CIDRs that do not change (like a manual list replicated across Regions)
 * - **IPAM pool CIDR**: CIDRs from specific IPAM pools (like all CIDRs from your IPAM production pool)
 *
 *   If you choose this option, choose the following:
 *
 *   - **IPAM scope**: Select the IPAM scope to search for resources
 *   - **Conditions:**
 *
 *     - **Property**
 *
 *       - **IPAM pool ID**: Select an IPAM pool that contains the resources
 *       - **CIDR** (like 10.24.34.0/23)
 *     - **Operation**: Equals/Not equals
 *     - **Value**: The value on which to match the condition
 * - **Scope resource CIDR**: CIDRs from Amazon Web Services resources like VPCs, subnets, EIPs within an IPAM scope
 *
 *   If you choose this option, choose the following:
 *
 *   - **IPAM scope**: Select the IPAM scope to search for resources
 *   - **Resource type**: Select a resource, like a VPC or subnet.
 *   - **Conditions**:
 *
 *     - **Property**:
 *
 *       - Resource ID: The unique ID of a resource (like vpc-1234567890abcdef0)
 *       - Resource owner (like 111122223333)
 *       - Resource region (like us-east-1)
 *       - Resource tag (like key: name, value: dev-vpc-1)
 *       - CIDR (like 10.24.34.0/23)
 *     - **Operation**: Equals/Not equals
 *     - **Value**: The value on which to match the condition
 *
 * @public
 */
export interface IpamPrefixListResolverRuleConditionRequest {
  /**
   * The operation to perform when evaluating this condition.
   *
   * @public
   */
  Operation: IpamPrefixListResolverRuleConditionOperation | undefined;

  /**
   * The ID of the IPAM pool to match against. This condition selects CIDRs that belong to the specified IPAM pool.
   *
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * The ID of the Amazon Web Services resource to match against. This condition selects CIDRs associated with the specified resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the resources to match against. This condition selects CIDRs from resources owned by the specified account.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * The Amazon Web Services Region where the resources are located. This condition selects CIDRs from resources in the specified Region.
   *
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * A tag key-value pair to match against. This condition selects CIDRs from resources that have the specified tag.
   *
   * @public
   */
  ResourceTag?: RequestIpamResourceTag | undefined;

  /**
   * A CIDR block to match against. This condition selects CIDRs that fall within or match the specified CIDR range.
   *
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * Describes a CIDR selection rule to include in a request. This is used when creating or modifying resolver rules.
 *
 * CIDR selection rules define the business logic for selecting CIDRs from IPAM. If a CIDR matches any of the rules, it will be included. If a rule has multiple conditions, the CIDR has to match every condition of that rule. You can create a prefix list resolver without any CIDR selection rules, but it will generate empty versions (containing no CIDRs) until you add rules.
 *
 * There are three rule types. Only 2 of the 3 rule types support conditions - **IPAM pool CIDR** and **Scope resource CIDR**. **Static CIDR** rules cannot have conditions.
 *
 * - **Static CIDR**: A fixed list of CIDRs that do not change (like a manual list replicated across Regions)
 * - **IPAM pool CIDR**: CIDRs from specific IPAM pools (like all CIDRs from your IPAM production pool)
 *
 *   If you choose this option, choose the following:
 *
 *   - **IPAM scope**: Select the IPAM scope to search for resources
 *   - **Conditions:**
 *
 *     - **Property**
 *
 *       - **IPAM pool ID**: Select an IPAM pool that contains the resources
 *       - **CIDR** (like 10.24.34.0/23)
 *     - **Operation**: Equals/Not equals
 *     - **Value**: The value on which to match the condition
 * - **Scope resource CIDR**: CIDRs from Amazon Web Services resources like VPCs, subnets, EIPs within an IPAM scope
 *
 *   If you choose this option, choose the following:
 *
 *   - **IPAM scope**: Select the IPAM scope to search for resources
 *   - **Resource type**: Select a resource, like a VPC or subnet.
 *   - **Conditions**:
 *
 *     - **Property**:
 *
 *       - Resource ID: The unique ID of a resource (like vpc-1234567890abcdef0)
 *       - Resource owner (like 111122223333)
 *       - Resource region (like us-east-1)
 *       - Resource tag (like key: name, value: dev-vpc-1)
 *       - CIDR (like 10.24.34.0/23)
 *     - **Operation**: Equals/Not equals
 *     - **Value**: The value on which to match the condition
 *
 * @public
 */
export interface IpamPrefixListResolverRuleRequest {
  /**
   * The type of CIDR selection rule. Valid values include `include` for selecting CIDRs that match the conditions, and `exclude` for excluding CIDRs that match the conditions.
   *
   * @public
   */
  RuleType: IpamPrefixListResolverRuleType | undefined;

  /**
   * A fixed list of CIDRs that do not change (like a manual list replicated across Regions).
   *
   * @public
   */
  StaticCidr?: string | undefined;

  /**
   * The ID of the IPAM scope from which to select CIDRs. This determines whether to select from public or private IP address space.
   *
   * @public
   */
  IpamScopeId?: string | undefined;

  /**
   * For rules of type `ipam-resource-cidr`, this is the resource type.
   *
   * @public
   */
  ResourceType?: IpamResourceType | undefined;

  /**
   * The conditions that determine which CIDRs are selected by this rule. Conditions specify criteria such as resource type, tags, account IDs, and Regions.
   *
   * @public
   */
  Conditions?: IpamPrefixListResolverRuleConditionRequest[] | undefined;
}

/**
 * @public
 */
export interface CreateIpamPrefixListResolverRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM that will serve as the source of the IP address database for CIDR selection. The IPAM must be in the Advanced tier to use this feature.
   *
   * @public
   */
  IpamId: string | undefined;

  /**
   * A description for the IPAM prefix list resolver to help you identify its purpose and configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The address family for the IPAM prefix list resolver. Valid values are `ipv4` and `ipv6`. You must create separate resolvers for IPv4 and IPv6 CIDRs as they cannot be mixed in the same resolver.
   *
   * @public
   */
  AddressFamily: AddressFamily | undefined;

  /**
   * The CIDR selection rules for the resolver.
   *
   * CIDR selection rules define the business logic for selecting CIDRs from IPAM. If a CIDR matches any of the rules, it will be included. If a rule has multiple conditions, the CIDR has to match every condition of that rule. You can create a prefix list resolver without any CIDR selection rules, but it will generate empty versions (containing no CIDRs) until you add rules.
   *
   * @public
   */
  Rules?: IpamPrefixListResolverRuleRequest[] | undefined;

  /**
   * The tags to apply to the IPAM prefix list resolver during creation. Tags help you organize and manage your Amazon Web Services resources.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Describes an IPAM prefix list resolver.
 *
 * An IPAM prefix list resolver is a component that manages the synchronization between IPAM's CIDR selection rules and customer-managed prefix lists. It automates connectivity configurations by selecting CIDRs from IPAM's database based on your business logic and synchronizing them with prefix lists used in resources such as VPC route tables and security groups.
 *
 * @public
 */
export interface IpamPrefixListResolver {
  /**
   * The ID of the Amazon Web Services account that owns the IPAM prefix list resolver.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the IPAM prefix list resolver.
   *
   * @public
   */
  IpamPrefixListResolverId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IPAM prefix list resolver.
   *
   * @public
   */
  IpamPrefixListResolverArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IPAM associated with this resolver.
   *
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * The Amazon Web Services Region where the associated IPAM is located.
   *
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * The description of the IPAM prefix list resolver.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The address family (IPv4 or IPv6) for the IPAM prefix list resolver.
   *
   * @public
   */
  AddressFamily?: AddressFamily | undefined;

  /**
   * The current state of the IPAM prefix list resolver. Valid values include `create-in-progress`, `create-complete`, `create-failed`, `modify-in-progress`, `modify-complete`, `modify-failed`, `delete-in-progress`, `delete-complete`, and `delete-failed`.
   *
   * @public
   */
  State?: IpamPrefixListResolverState | undefined;

  /**
   * The tags assigned to the IPAM prefix list resolver.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The status for the last time a version was created.
   *
   * Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list changes due to infrastructure changes.
   *
   * @public
   */
  LastVersionCreationStatus?: IpamPrefixListResolverVersionCreationStatus | undefined;

  /**
   * The status message for the last time a version was created.
   *
   * Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list changes due to infrastructure changes.
   *
   * @public
   */
  LastVersionCreationStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface CreateIpamPrefixListResolverResult {
  /**
   * Information about the IPAM prefix list resolver that was created.
   *
   * @public
   */
  IpamPrefixListResolver?: IpamPrefixListResolver | undefined;
}

/**
 * @public
 */
export interface CreateIpamPrefixListResolverTargetRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM prefix list resolver that will manage the synchronization of CIDRs to the target prefix list.
   *
   * @public
   */
  IpamPrefixListResolverId: string | undefined;

  /**
   * The ID of the managed prefix list that will be synchronized with CIDRs selected by the IPAM prefix list resolver. This prefix list becomes an IPAM managed prefix list.
   *
   * An IPAM-managed prefix list is a customer-managed prefix list that has been associated with an IPAM prefix list resolver target. When a prefix list becomes IPAM managed, its CIDRs are automatically synchronized based on the IPAM prefix list resolver's CIDR selection rules, and direct CIDR modifications are restricted.
   *
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * The Amazon Web Services Region where the prefix list is located. This is required when referencing a prefix list in a different Region.
   *
   * @public
   */
  PrefixListRegion: string | undefined;

  /**
   * The specific version of the prefix list to target. If not specified, the resolver will target the latest version.
   *
   * @public
   */
  DesiredVersion?: number | undefined;

  /**
   * Indicates whether the resolver target should automatically track the latest version of the prefix list. When enabled, the target will always synchronize with the most current version of the prefix list.
   *
   * Choose this for automatic updates when you want your prefix lists to stay current with infrastructure changes without manual intervention.
   *
   * @public
   */
  TrackLatestVersion: boolean | undefined;

  /**
   * The tags to apply to the IPAM prefix list resolver target during creation. Tags help you organize and manage your Amazon Web Services resources.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Describes an IPAM prefix list resolver target.
 *
 * An IPAM prefix list resolver target is an association between a specific customer-managed prefix list and an IPAM prefix list resolver. The target enables the resolver to synchronize CIDRs selected by its rules into the specified prefix list, which can then be referenced in Amazon Web Services resources.
 *
 * @public
 */
export interface IpamPrefixListResolverTarget {
  /**
   * The ID of the IPAM prefix list resolver target.
   *
   * @public
   */
  IpamPrefixListResolverTargetId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IPAM prefix list resolver target.
   *
   * @public
   */
  IpamPrefixListResolverTargetArn?: string | undefined;

  /**
   * The ID of the IPAM prefix list resolver associated with this target.
   *
   * @public
   */
  IpamPrefixListResolverId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the IPAM prefix list resolver target.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the managed prefix list associated with this target.
   *
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * The Amazon Web Services Region where the prefix list associated with this target is located.
   *
   * @public
   */
  PrefixListRegion?: string | undefined;

  /**
   * The desired version of the prefix list that this target should synchronize with.
   *
   * @public
   */
  DesiredVersion?: number | undefined;

  /**
   * The version of the prefix list that was last successfully synchronized by this target.
   *
   * @public
   */
  LastSyncedVersion?: number | undefined;

  /**
   * Indicates whether this target automatically tracks the latest version of the prefix list.
   *
   * @public
   */
  TrackLatestVersion?: boolean | undefined;

  /**
   * A message describing the current state of the IPAM prefix list resolver target, including any error information.
   *
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * The current state of the IPAM prefix list resolver target. Valid values include `create-in-progress`, `create-complete`, `create-failed`, `modify-in-progress`, `modify-complete`, `modify-failed`, `delete-in-progress`, `delete-complete`, and `delete-failed`.
   *
   * @public
   */
  State?: IpamPrefixListResolverTargetState | undefined;

  /**
   * The tags assigned to the IPAM prefix list resolver target.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateIpamPrefixListResolverTargetResult {
  /**
   * Information about the IPAM prefix list resolver target that was created.
   *
   * @public
   */
  IpamPrefixListResolverTarget?: IpamPrefixListResolverTarget | undefined;
}

/**
 * @public
 */
export interface CreateIpamResourceDiscoveryRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A description for the IPAM resource discovery.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Operating Regions for the IPAM resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.
   *
   * @public
   */
  OperatingRegions?: AddIpamOperatingRegion[] | undefined;

  /**
   * Tag specifications for the IPAM resource discovery.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A client token for the IPAM resource discovery.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion.
 *
 * @public
 */
export interface IpamOrganizationalUnitExclusion {
  /**
   * An Amazon Web Services Organizations entity path. For more information on the entity path, see [Understand the Amazon Web Services Organizations entity path](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_last-accessed-view-data-orgs.html#access_policies_access-advisor-viewing-orgs-entity-path) in the *Amazon Web Services Identity and Access Management User Guide*.
   *
   * @public
   */
  OrganizationsEntityPath?: string | undefined;
}

/**
 * A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.
 *
 * @public
 */
export interface IpamResourceDiscovery {
  /**
   * The ID of the owner.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The resource discovery ID.
   *
   * @public
   */
  IpamResourceDiscoveryId?: string | undefined;

  /**
   * The resource discovery Amazon Resource Name (ARN).
   *
   * @public
   */
  IpamResourceDiscoveryArn?: string | undefined;

  /**
   * The resource discovery Region.
   *
   * @public
   */
  IpamResourceDiscoveryRegion?: string | undefined;

  /**
   * The resource discovery description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The operating Regions for the resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.
   *
   * @public
   */
  OperatingRegions?: IpamOperatingRegion[] | undefined;

  /**
   * Defines if the resource discovery is the default. The default resource discovery is the resource discovery automatically created when you create an IPAM.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The lifecycle state of the resource discovery.
   *
   * - `create-in-progress` - Resource discovery is being created.
   * - `create-complete` - Resource discovery creation is complete.
   * - `create-failed` - Resource discovery creation has failed.
   * - `modify-in-progress` - Resource discovery is being modified.
   * - `modify-complete` - Resource discovery modification is complete.
   * - `modify-failed` - Resource discovery modification has failed.
   * - `delete-in-progress` - Resource discovery is being deleted.
   * - `delete-complete` - Resource discovery deletion is complete.
   * - `delete-failed` - Resource discovery deletion has failed.
   * - `isolate-in-progress` - Amazon Web Services account that created the resource discovery has been removed and the resource discovery is being isolated.
   * - `isolate-complete` - Resource discovery isolation is complete.
   * - `restore-in-progress` - Amazon Web Services account that created the resource discovery and was isolated has been restored.
   *
   * @public
   */
  State?: IpamResourceDiscoveryState | undefined;

  /**
   * A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion.
   *
   * @public
   */
  OrganizationalUnitExclusions?: IpamOrganizationalUnitExclusion[] | undefined;
}

/**
 * @public
 */
export interface CreateIpamResourceDiscoveryResult {
  /**
   * An IPAM resource discovery.
   *
   * @public
   */
  IpamResourceDiscovery?: IpamResourceDiscovery | undefined;
}

/**
 * @public
 */
export interface CreateIpamRoutingPolicyRegistrationRequest {
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
   * The IP address prefix in CIDR notation to authorize in the ROA.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * The Autonomous System Numbers (ASNs) authorized to originate the prefix.
   *
   * @public
   */
  Asns: string[] | undefined;

  /**
   * Specifies whether to permit more specific route announcements than the CIDR prefix. When enabled, ASNs can announce sub-prefixes of the authorized CIDR up to the specified maximum length. Default: `false`.
   *
   * @public
   */
  PermitMoreSpecificAnnouncements?: boolean | undefined;

  /**
   * The maximum prefix length that the ASNs are authorized to announce. Must be greater than or equal to the prefix length of the CIDR. If not specified, defaults to the prefix length of the CIDR (exact match only).
   *
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * A description for the routing policy registration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Forces the creation of the routing policy registration even if it conflicts with an announced route. Default: `false`.
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
 * @public
 */
export interface CreateIpamRoutingPolicyRegistrationResult {
  /**
   * Information about the routing policy registration delta created by this operation.
   *
   * @public
   */
  IpamRoutingPolicyRegistrationDelta?: IpamRoutingPolicyRegistrationDelta | undefined;
}

/**
 * The configuration that links an Amazon VPC IPAM scope to an external authority system. It specifies the type of external system and the external resource identifier that identifies your account or instance in that system.
 *
 * For more information, see [Integrate VPC IPAM with Infoblox infrastructure](https://docs.aws.amazon.com/vpc/latest/ipam/integrate-infoblox-ipam.html) in the *Amazon VPC IPAM User Guide*.
 *
 * @public
 */
export interface ExternalAuthorityConfiguration {
  /**
   * The type of external authority.
   *
   * @public
   */
  Type?: IpamScopeExternalAuthorityType | undefined;

  /**
   * The identifier for the external resource managing this scope. For Infoblox integrations, this is the Infoblox resource identifier in the format `<version>.identity.account.<entity_realm>.<entity_id>`.
   *
   * @public
   */
  ExternalResourceIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateIpamScopeRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM for which you're creating this scope.
   *
   * @public
   */
  IpamId: string | undefined;

  /**
   * A description for the scope you're creating.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The configuration that links an Amazon VPC IPAM scope to an external authority system. It specifies the type of external system and the external resource identifier that identifies your account or instance in that system.
   *
   * In IPAM, an external authority is a third-party IP address management system that provides CIDR blocks when you provision address space for top-level IPAM pools. This allows you to use your existing IP management system to control which address ranges are allocated to Amazon Web Services while using Amazon VPC IPAM to manage subnets within those ranges.
   *
   * @public
   */
  ExternalAuthorityConfiguration?: ExternalAuthorityConfiguration | undefined;
}

/**
 * The configuration that links an Amazon VPC IPAM scope to an external authority system. It specifies the type of external system and the external resource identifier that identifies your account or instance in that system.
 *
 * In IPAM, an external authority is a third-party IP address management system that provides CIDR blocks when you provision address space for top-level IPAM pools. This allows you to use your existing IP management system to control which address ranges are allocated to Amazon Web Services while using Amazon VPC IPAM to manage subnets within those ranges.
 *
 * @public
 */
export interface IpamScopeExternalAuthorityConfiguration {
  /**
   * The type of external authority managing this scope. Currently supports `Infoblox` for integration with Infoblox Universal DDI.
   *
   * @public
   */
  Type?: IpamScopeExternalAuthorityType | undefined;

  /**
   * The identifier for the external resource managing this scope. For Infoblox integrations, this is the Infoblox resource identifier in the format `<version>.identity.account.<entity_realm>.<entity_id>`.
   *
   * @public
   */
  ExternalResourceIdentifier?: string | undefined;
}

/**
 * In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.
 *
 * For more information, see [How IPAM works](https://docs.aws.amazon.com/vpc/latest/ipam/how-it-works-ipam.html) in the *Amazon VPC IPAM User Guide*.
 *
 * @public
 */
export interface IpamScope {
  /**
   * The Amazon Web Services account ID of the owner of the scope.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the scope.
   *
   * @public
   */
  IpamScopeId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scope.
   *
   * @public
   */
  IpamScopeArn?: string | undefined;

  /**
   * The ARN of the IPAM.
   *
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * The Amazon Web Services Region of the IPAM scope.
   *
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * The type of the scope.
   *
   * @public
   */
  IpamScopeType?: IpamScopeType | undefined;

  /**
   * Defines if the scope is the default scope or not.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The description of the scope.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of pools in the scope.
   *
   * @public
   */
  PoolCount?: number | undefined;

  /**
   * The state of the IPAM scope.
   *
   * @public
   */
  State?: IpamScopeState | undefined;

  /**
   * The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The external authority configuration for this IPAM scope, if configured.
   *
   * The configuration that links an Amazon VPC IPAM scope to an external authority system. It specifies the type of external system and the external resource identifier that identifies your account or instance in that system.
   *
   * In IPAM, an external authority is a third-party IP address management system that provides CIDR blocks when you provision address space for top-level IPAM pools. This allows you to use your existing IP management system to control which address ranges are allocated to Amazon Web Services while using Amazon VPC IPAM to manage subnets within those ranges.
   *
   * @public
   */
  ExternalAuthorityConfiguration?: IpamScopeExternalAuthorityConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateIpamScopeResult {
  /**
   * Information about the created scope.
   *
   * @public
   */
  IpamScope?: IpamScope | undefined;
}

/**
 * @public
 */
export interface CreateKeyPairRequest {
  /**
   * A unique name for the key pair.
   *
   * Constraints: Up to 255 ASCII characters
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * The type of key pair. Note that ED25519 keys are not supported for Windows instances.
   *
   * Default: `rsa`
   *
   * @public
   */
  KeyType?: KeyType | undefined;

  /**
   * The tags to apply to the new key pair.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The format of the key pair.
   *
   * Default: `pem`
   *
   * @public
   */
  KeyFormat?: KeyFormat | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a key pair.
 *
 * @public
 */
export interface KeyPair {
  /**
   * The ID of the key pair.
   *
   * @public
   */
  KeyPairId?: string | undefined;

  /**
   * Any tags applied to the key pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The name of the key pair.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * - For RSA key pairs, the key fingerprint is the SHA-1 digest of the DER encoded private key.
   * - For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which is the default for OpenSSH, starting with OpenSSH 6.8.
   *
   * @public
   */
  KeyFingerprint?: string | undefined;

  /**
   * An unencrypted PEM encoded RSA or ED25519 private key.
   *
   * @public
   */
  KeyMaterial?: string | undefined;
}

/**
 * The parameters for a block device for an EBS volume.
 *
 * @public
 */
export interface LaunchTemplateEbsBlockDeviceRequest {
  /**
   * Indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached to instances that support Amazon EBS encryption. If you are creating a volume from a snapshot, you can't specify an encryption value.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * Indicates whether the EBS volume is deleted on instance termination.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The number of I/O operations per second (IOPS). For `gp3`, `io1`, and `io2` volumes, this represents the number of IOPS that are provisioned for the volume. For `gp2` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
   *
   * The following are the supported values for each volume type:
   *
   * - `gp3`: 3,000 - 80,000 IOPS
   * - `io1`: 100 - 64,000 IOPS
   * - `io2`: 100 - 256,000 IOPS
   *
   * For `io2` volumes, you can achieve up to 256,000 IOPS on [instances built on the Nitro System](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html). On other instances, you can achieve performance up to 32,000 IOPS.
   *
   * This parameter is supported for `io1`, `io2`, and `gp3` volumes only.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key to use for EBS encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. The following are the supported volumes sizes for each volume type:
   *
   * - `gp2`: 1 - 16,384 GiB
   * - `gp3`: 1 - 65,536 GiB
   * - `io1`: 4 - 16,384 GiB
   * - `io2`: 4 - 65,536 GiB
   * - `st1` and `sc1`: 125 - 16,384 GiB
   * - `standard`: 1 - 1024 GiB
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * The volume type. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * The throughput to provision for a `gp3` volume, with a maximum of 2,000 MiB/s.
   *
   * Valid Range: Minimum value of 125. Maximum value of 2,000.
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. This is also known as *volume initialization*. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation.
   *
   * This parameter is supported only for volumes created from snapshots. Omit this parameter if:
   *
   * - You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation.
   *
   *   > **Note:** If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore.
   * - You want to create a volume that is initialized at the default rate.
   *
   * For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the *Amazon EC2 User Guide*.
   *
   * Valid range: 100 - 300 MiB/s
   *
   * @public
   */
  VolumeInitializationRate?: number | undefined;

  /**
   * The index of the EBS card. Some instance types support multiple EBS cards. The default EBS card index is 0.
   *
   * @public
   */
  EbsCardIndex?: number | undefined;
}

/**
 * Describes a block device mapping.
 *
 * @public
 */
export interface LaunchTemplateBlockDeviceMappingRequest {
  /**
   * The device name (for example, /dev/sdh or xvdh).
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * The virtual device name (ephemeralN). Instance store volumes are numbered starting from 0. An instance type with 2 available instance store volumes can specify mappings for ephemeral0 and ephemeral1. The number of available instance store volumes depends on the instance type. After you connect to the instance, you must mount the volume.
   *
   * @public
   */
  VirtualName?: string | undefined;

  /**
   * Parameters used to automatically set up EBS volumes when the instance is launched.
   *
   * @public
   */
  Ebs?: LaunchTemplateEbsBlockDeviceRequest | undefined;

  /**
   * To omit the device from the block device mapping, specify an empty string.
   *
   * @public
   */
  NoDevice?: string | undefined;
}

/**
 * Describes a target Capacity Reservation or Capacity Reservation group.
 *
 * @public
 */
export interface CapacityReservationTarget {
  /**
   * The ID of the Capacity Reservation in which to run the instance.
   *
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * The ARN of the Capacity Reservation resource group in which to run the instance.
   *
   * @public
   */
  CapacityReservationResourceGroupArn?: string | undefined;
}

/**
 * Describes an instance's Capacity Reservation targeting option. You can specify only one option at a time. Use the `CapacityReservationPreference` parameter to configure the instance to run in On-Demand capacity or to run in any `open` Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). Use the `CapacityReservationTarget` parameter to explicitly target a specific Capacity Reservation or a Capacity Reservation group.
 *
 * @public
 */
export interface LaunchTemplateCapacityReservationSpecificationRequest {
  /**
   * Indicates the instance's Capacity Reservation preferences. Possible preferences include:
   *
   * - `capacity-reservations-only` - The instance will only run in a Capacity Reservation or Capacity Reservation group. If capacity isn't available, the instance will fail to launch.
   * - `open` - The instance can run in any `open` Capacity Reservation that has matching attributes (instance type, platform, Availability Zone, tenancy).
   * - `none` - The instance avoids running in a Capacity Reservation even if one is available. The instance runs in On-Demand capacity.
   *
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * Information about the target Capacity Reservation or Capacity Reservation group.
   *
   * @public
   */
  CapacityReservationTarget?: CapacityReservationTarget | undefined;
}

/**
 * The CPU options for the instance. Both the core count and threads per core must be specified in the request.
 *
 * @public
 */
export interface LaunchTemplateCpuOptionsRequest {
  /**
   * The number of CPU cores for the instance.
   *
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * The number of threads per CPU core. To disable multithreading for the instance, specify a value of `1`. Otherwise, specify the default value of `2`.
   *
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported with M6a, R6a, and C6a instance types only. For more information, see [AMD SEV-SNP for Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html).
   *
   * @public
   */
  AmdSevSnp?: AmdSevSnpSpecification | undefined;

  /**
   * Indicates whether to enable the instance for nested virtualization. Nested virtualization is supported only on 8th generation Intel-based instance types (c8i, m8i, r8i, and their flex variants). When nested virtualization is enabled, Virtual Secure Mode (VSM) is automatically disabled for the instance.
   *
   * @public
   */
  NestedVirtualization?: NestedVirtualizationSpecification | undefined;
}

/**
 * The credit option for CPU usage of a T instance.
 *
 * @public
 */
export interface CreditSpecificationRequest {
  /**
   * The credit option for CPU usage of a T instance.
   *
   * Valid values: `standard` | `unlimited`
   *
   * @public
   */
  CpuCredits: string | undefined;
}

/**
 * > **Note:** Amazon Elastic Graphics reached end of life on January 8, 2024.
 *
 * A specification for an Elastic Graphics accelerator.
 *
 * @public
 */
export interface ElasticGpuSpecification {
  /**
   * The type of Elastic Graphics accelerator.
   *
   * @public
   */
  Type: string | undefined;
}

/**
 * > **Note:** Amazon Elastic Inference is no longer available.
 *
 * Describes an elastic inference accelerator.
 *
 * @public
 */
export interface LaunchTemplateElasticInferenceAccelerator {
  /**
   * The type of elastic inference accelerator. The possible values are eia1.medium, eia1.large, and eia1.xlarge.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The number of elastic inference accelerators to attach to the instance.
   *
   * @public
   */
  Count?: number | undefined;
}

/**
 * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more information, see [What is Nitro Enclaves?](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html) in the *Amazon Web Services Nitro Enclaves User Guide*.
 *
 * @public
 */
export interface LaunchTemplateEnclaveOptionsRequest {
  /**
   * To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to `true`.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Indicates whether the instance is configured for hibernation. This parameter is valid only if the instance meets the [hibernation prerequisites](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html).
 *
 * @public
 */
export interface LaunchTemplateHibernationOptionsRequest {
  /**
   * If you set this parameter to `true`, the instance is enabled for hibernation.
   *
   * Default: `false`
   *
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * An IAM instance profile.
 *
 * @public
 */
export interface LaunchTemplateIamInstanceProfileSpecificationRequest {
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
 * The options for Spot Instances.
 *
 * @public
 */
export interface LaunchTemplateSpotMarketOptionsRequest {
  /**
   * The maximum hourly price you're willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price. If you do specify this parameter, it must be more than USD $0.001. Specifying a value below USD $0.001 will result in an `InvalidParameterValue` error message when the launch template is used to launch an instance.
   *
   * > **Important:** If you specify a maximum price, your Spot Instances will be interrupted more frequently than if you do not specify this parameter.
   *
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * The Spot Instance request type.
   *
   * @public
   */
  SpotInstanceType?: SpotInstanceType | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * The end date of the request, in UTC format (*YYYY-MM-DD*T*HH:MM:SS*Z). Supported only for persistent requests.
   *
   * - For a persistent request, the request remains active until the `ValidUntil` date and time is reached. Otherwise, the request remains active until you cancel it.
   * - For a one-time request, `ValidUntil` is not supported. The request remains active until all instances launch or you cancel the request.
   *
   * Default: 7 days from the current date
   *
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * The behavior when a Spot Instance is interrupted. The default is `terminate`.
   *
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;
}

/**
 * The market (purchasing) option for the instances.
 *
 * @public
 */
export interface LaunchTemplateInstanceMarketOptionsRequest {
  /**
   * The market type.
   *
   * @public
   */
  MarketType?: MarketType | undefined;

  /**
   * The options for Spot Instances.
   *
   * @public
   */
  SpotOptions?: LaunchTemplateSpotMarketOptionsRequest | undefined;
}

/**
 * Describes a license configuration.
 *
 * @public
 */
export interface LaunchTemplateLicenseConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the license configuration.
   *
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * The maintenance options of your instance.
 *
 * @public
 */
export interface LaunchTemplateInstanceMaintenanceOptionsRequest {
  /**
   * Disables the automatic recovery behavior of your instance or sets it to default. For more information, see [Simplified automatic recovery](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html#instance-configuration-recovery).
   *
   * @public
   */
  AutoRecovery?: LaunchTemplateAutoRecoveryState | undefined;
}

/**
 * The metadata options for the instance. For more information, see [Use instance metadata to manage your EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface LaunchTemplateInstanceMetadataOptionsRequest {
  /**
   * Indicates whether IMDSv2 is required.
   *
   * - `optional` - IMDSv2 is optional. You can choose whether to send a session token in your instance metadata retrieval requests. If you retrieve IAM role credentials without a session token, you receive the IMDSv1 role credentials. If you retrieve IAM role credentials using a valid session token, you receive the IMDSv2 role credentials.
   * - `required` - IMDSv2 is required. You must send a session token in your instance metadata retrieval requests. With this option, retrieving the IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.
   *
   * Default: If the value of `ImdsSupport` for the Amazon Machine Image (AMI) for your instance is `v2.0`, the default is `required`.
   *
   * @public
   */
  HttpTokens?: LaunchTemplateHttpTokensState | undefined;

  /**
   * The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.
   *
   * Default: `1`
   *
   * Possible values: Integers from 1 to 64
   *
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * Enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is `enabled`.
   *
   * > **Note:** If you specify a value of `disabled`, you will not be able to access your instance metadata.
   *
   * @public
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState | undefined;

  /**
   * Enables or disables the IPv6 endpoint for the instance metadata service.
   *
   * Default: `disabled`
   *
   * @public
   */
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6 | undefined;

  /**
   * Set to `enabled` to allow access to instance tags from the instance metadata. Set to `disabled` to turn off access to instance tags from the instance metadata. For more information, see [View tags for your EC2 instances using instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-tags-in-IMDS.html).
   *
   * Default: `disabled`
   *
   * @public
   */
  InstanceMetadataTags?: LaunchTemplateInstanceMetadataTagsState | undefined;
}

/**
 * Describes the monitoring for the instance.
 *
 * @public
 */
export interface LaunchTemplatesMonitoringRequest {
  /**
   * Specify `true` to enable detailed monitoring. Otherwise, basic monitoring is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * A security group connection tracking specification request that enables you to set the idle timeout for connection tracking on an Elastic network interface. For more information, see [Connection tracking timeouts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface ConnectionTrackingSpecificationRequest {
  /**
   * Timeout (in seconds) for idle TCP connections in an established state. Min: 60 seconds. Max: 432000 seconds (5 days). Default: 350 seconds for Nitro v6 instance types (excluding P6e-GB200); 432000 seconds for all other instance types (including P6e-GB200). Recommended: Less than 432000 seconds.
   *
   * @public
   */
  TcpEstablishedTimeout?: number | undefined;

  /**
   * Timeout (in seconds) for idle UDP flows classified as streams which have seen more than one request-response transaction. Min: 60 seconds. Max: 180 seconds (3 minutes). Default: 180 seconds.
   *
   * @public
   */
  UdpStreamTimeout?: number | undefined;

  /**
   * Timeout (in seconds) for idle UDP flows that have seen traffic only in a single direction or a single request-response transaction. Min: 30 seconds. Max: 60 seconds. Default: 30 seconds.
   *
   * @public
   */
  UdpTimeout?: number | undefined;
}

/**
 * Configures ENA Express for UDP network traffic from your launch template.
 *
 * @public
 */
export interface EnaSrdUdpSpecificationRequest {
  /**
   * Indicates whether UDP traffic uses ENA Express for your instance. To ensure that UDP traffic can use ENA Express when you launch an instance, you must also set **EnaSrdEnabled** in the **EnaSrdSpecificationRequest** to `true`.
   *
   * @public
   */
  EnaSrdUdpEnabled?: boolean | undefined;
}

/**
 * Launch instances with ENA Express settings configured from your launch template.
 *
 * @public
 */
export interface EnaSrdSpecificationRequest {
  /**
   * Specifies whether ENA Express is enabled for the network interface when you launch an instance.
   *
   * @public
   */
  EnaSrdEnabled?: boolean | undefined;

  /**
   * Contains ENA Express settings for UDP network traffic for the network interface attached to the instance.
   *
   * @public
   */
  EnaSrdUdpSpecification?: EnaSrdUdpSpecificationRequest | undefined;
}

/**
 * Describes the IPv4 prefix option for a network interface.
 *
 * @public
 */
export interface Ipv4PrefixSpecificationRequest {
  /**
   * The IPv4 prefix. For information, see [Assigning prefixes to network interfaces](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  Ipv4Prefix?: string | undefined;
}

/**
 * Describes an IPv6 address.
 *
 * @public
 */
export interface InstanceIpv6AddressRequest {
  /**
   * The IPv6 address.
   *
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * Describes the IPv6 prefix option for a network interface.
 *
 * @public
 */
export interface Ipv6PrefixSpecificationRequest {
  /**
   * The IPv6 prefix.
   *
   * @public
   */
  Ipv6Prefix?: string | undefined;
}

/**
 * Describes a secondary private IPv4 address for a network interface.
 *
 * @public
 */
export interface PrivateIpAddressSpecification {
  /**
   * Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.
   *
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * The private IPv4 address.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * The parameters for a network interface.
 *
 * @public
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  /**
   * Associates a Carrier IP address with eth0 for a new network interface.
   *
   * Use this option when you launch an instance in a Wavelength Zone and want to associate a Carrier IP address with the network interface. For more information about Carrier IP addresses, see [Carrier IP addresses](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip) in the *Wavelength Developer Guide*.
   *
   * @public
   */
  AssociateCarrierIpAddress?: boolean | undefined;

  /**
   * Associates a public IPv4 address with eth0 for a new network interface.
   *
   * Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the *Public IPv4 Address* tab on the [Amazon VPC pricing page](http://aws.amazon.com/vpc/pricing/).
   *
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * Indicates whether the network interface is deleted when the instance is terminated.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * A description for the network interface.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The device index for the network interface attachment. The primary network interface has a device index of 0. Each network interface is of type `interface`, you must specify a device index. If you create a launch template that includes secondary network interfaces but not a primary network interface, then you must add a primary network interface as a launch parameter when you launch an instance from the template.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The IDs of one or more security groups.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * The type of network interface. To create an Elastic Fabric Adapter (EFA), specify `efa` or `efa`. For more information, see [Elastic Fabric Adapter for AI/ML and HPC workloads on Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html) in the *Amazon EC2 User Guide*.
   *
   * If you are not creating an EFA, specify `interface` or omit this parameter.
   *
   * If you specify `efa-only`, do not assign any IP addresses to the network interface. EFA-only network interfaces do not support IP addresses.
   *
   * Valid values: `interface` | `efa` | `efa-only`
   *
   * @public
   */
  InterfaceType?: string | undefined;

  /**
   * The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't use this option if specifying specific IPv6 addresses.
   *
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you're specifying a number of IPv6 addresses.
   *
   * @public
   */
  Ipv6Addresses?: InstanceIpv6AddressRequest[] | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The primary private IPv4 address of the network interface.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * One or more private IPv4 addresses.
   *
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;

  /**
   * The number of secondary private IPv4 addresses to assign to a network interface.
   *
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * The ID of the subnet for the network interface.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The index of the network card. Some instance types support multiple network cards. The primary network interface must be assigned to network card index 0. The default is network card index 0.
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * One or more IPv4 prefixes to be assigned to the network interface. You cannot use this option if you use the `Ipv4PrefixCount` option.
   *
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[] | undefined;

  /**
   * The number of IPv4 prefixes to be automatically assigned to the network interface. You cannot use this option if you use the `Ipv4Prefix` option.
   *
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * One or more IPv6 prefixes to be assigned to the network interface. You cannot use this option if you use the `Ipv6PrefixCount` option.
   *
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[] | undefined;

  /**
   * The number of IPv6 prefixes to be automatically assigned to the network interface. You cannot use this option if you use the `Ipv6Prefix` option.
   *
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * The primary IPv6 address of the network interface. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information about primary IPv6 addresses, see [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html).
   *
   * @public
   */
  PrimaryIpv6?: boolean | undefined;

  /**
   * Configure ENA Express settings for your launch template.
   *
   * @public
   */
  EnaSrdSpecification?: EnaSrdSpecificationRequest | undefined;

  /**
   * A security group connection tracking specification that enables you to set the timeout for connection tracking on an Elastic network interface. For more information, see [Idle connection tracking timeout](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest | undefined;

  /**
   * The number of ENA queues to be created with the instance.
   *
   * @public
   */
  EnaQueueCount?: number | undefined;
}

/**
 * When you configure network performance options in your launch template, your instance is geared for performance improvements based on the workload that it runs as soon as it's available.
 *
 * @public
 */
export interface LaunchTemplateNetworkPerformanceOptionsRequest {
  /**
   * Specify the bandwidth weighting option to boost the associated type of baseline bandwidth, as follows:
   *
   * - **default**
   *
   *   This option uses the standard bandwidth configuration for your instance type.
   *
   * - **vpc-1**
   *
   *   This option boosts your networking baseline bandwidth and reduces your EBS baseline bandwidth.
   *
   * - **ebs-1**
   *
   *   This option boosts your EBS baseline bandwidth and reduces your networking baseline bandwidth.
   *
   * @public
   */
  BandwidthWeighting?: InstanceBandwidthWeighting | undefined;
}

/**
 * The service provider that manages the resource.
 *
 * @public
 */
export interface OperatorRequest {
  /**
   * The service provider that manages the resource.
   *
   * @public
   */
  Principal?: string | undefined;
}

/**
 * Describes the placement of an instance.
 *
 * @public
 */
export interface LaunchTemplatePlacementRequest {
  /**
   * The Availability Zone for the instance.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` can be specified, but not both
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone for the instance.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` can be specified, but not both
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The affinity setting for an instance on a Dedicated Host.
   *
   * @public
   */
  Affinity?: string | undefined;

  /**
   * The name of the placement group for the instance.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The ID of the Dedicated Host for the instance.
   *
   * @public
   */
  HostId?: string | undefined;

  /**
   * The tenancy of the instance. An instance with a tenancy of dedicated runs on single-tenant hardware.
   *
   * @public
   */
  Tenancy?: Tenancy | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  SpreadDomain?: string | undefined;

  /**
   * The ARN of the host resource group in which to launch the instances. If you specify a host resource group ARN, omit the **Tenancy** parameter or set it to `host`.
   *
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * The number of the partition the instance should launch in. Valid only if the placement group strategy is set to `partition`.
   *
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * The Group Id of a placement group. You must specify the Placement Group **Group Id** to launch an instance in a shared placement group.
   *
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * Describes the options for instance hostnames.
 *
 * @public
 */
export interface LaunchTemplatePrivateDnsNameOptionsRequest {
  /**
   * The type of hostname for Amazon EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 native subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID.
   *
   * @public
   */
  HostnameType?: HostnameType | undefined;

  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
   *
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
   *
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}

/**
 * Describes a private IPv4 address specification for a secondary interface request.
 *
 * @public
 */
export interface SecondaryInterfacePrivateIpAddressSpecificationRequest {
  /**
   * The private IPv4 address.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * Describes a secondary interface specification for a launch template request.
 *
 * @public
 */
export interface LaunchTemplateInstanceSecondaryInterfaceSpecificationRequest {
  /**
   * Indicates whether the secondary interface is deleted when the instance is terminated.
   *
   * The only supported value for this field is `true`.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The device index for the secondary interface attachment.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The private IPv4 addresses to assign to the secondary interface.
   *
   * @public
   */
  PrivateIpAddresses?: SecondaryInterfacePrivateIpAddressSpecificationRequest[] | undefined;

  /**
   * The number of private IPv4 addresses to assign to the secondary interface.
   *
   * @public
   */
  PrivateIpAddressCount?: number | undefined;

  /**
   * The ID of the secondary subnet.
   *
   * @public
   */
  SecondarySubnetId?: string | undefined;

  /**
   * The type of secondary interface.
   *
   * @public
   */
  InterfaceType?: SecondaryInterfaceType | undefined;

  /**
   * The index of the network card.
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;
}

/**
 * The tags specification for the resources that are created during instance launch.
 *
 * @public
 */
export interface LaunchTemplateTagSpecificationRequest {
  /**
   * The type of resource to tag.
   *
   * Valid Values lists all resource types for Amazon EC2 that can be tagged. When you create a launch template, you can specify tags for the following resource types only: `instance` | `volume` | `network-interface` | `spot-instances-request`. If the instance does not include the resource type that you specify, the instance launch fails. For example, not all instance types include a volume.
   *
   * To tag a resource after it has been created, see [CreateTags](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html).
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
 * The information to include in the launch template.
 *
 * > **Note:** You must specify at least one parameter for the launch template data.
 *
 * @public
 */
export interface RequestLaunchTemplateData {
  /**
   * The ID of the kernel.
   *
   * > **Important:** We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [User provided kernels](https://docs.aws.amazon.com/linux/al2/ug/UserProvidedKernels.html) in the *Amazon Linux 2 User Guide*.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of an IAM instance profile.
   *
   * @public
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecificationRequest | undefined;

  /**
   * The block device mapping.
   *
   * @public
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMappingRequest[] | undefined;

  /**
   * The network interfaces for the instance.
   *
   * @public
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecificationRequest[] | undefined;

  /**
   * The ID of the AMI in the format `ami-0ac394d6a3example`.
   *
   * Alternatively, you can specify a Systems Manager parameter, using one of the following formats. The Systems Manager parameter will resolve to an AMI ID on launch.
   *
   * To reference a public parameter:
   *
   * - `resolve:ssm:public-parameter`
   *
   * To reference a parameter stored in the same account:
   *
   * - `resolve:ssm:parameter-name`
   * - `resolve:ssm:parameter-name:version-number`
   * - `resolve:ssm:parameter-name:label`
   *
   * To reference a parameter shared from another Amazon Web Services account:
   *
   * - `resolve:ssm:parameter-ARN`
   * - `resolve:ssm:parameter-ARN:version-number`
   * - `resolve:ssm:parameter-ARN:label`
   *
   * For more information, see [Use a Systems Manager parameter instead of an AMI ID](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id) in the *Amazon EC2 User Guide*.
   *
   * > **Note:**
   * >
   * > If the launch template will be used for an EC2 Fleet or Spot Fleet, note the following:
   * >
   * > - Only EC2 Fleets of type `instant` support specifying a Systems Manager parameter.
   * > - For EC2 Fleets of type `maintain` or `request`, or for Spot Fleets, you must specify the AMI ID.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The instance type. For more information, see [Amazon EC2 instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
   *
   * If you specify `InstanceType`, you can't specify `InstanceRequirements`.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The name of the key pair. You can create a key pair using [CreateKeyPair](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html) or [ImportKeyPair](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html).
   *
   * > **Important:** If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * The monitoring for the instance.
   *
   * @public
   */
  Monitoring?: LaunchTemplatesMonitoringRequest | undefined;

  /**
   * The placement for the instance.
   *
   * @public
   */
  Placement?: LaunchTemplatePlacementRequest | undefined;

  /**
   * The ID of the RAM disk.
   *
   * > **Important:** We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [User provided kernels](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  RamDiskId?: string | undefined;

  /**
   * Indicates whether termination protection is enabled for the instance. The default is `false`, which means that you can terminate the instance using the Amazon EC2 console, command line tools, or API. You can enable termination protection when you launch an instance, while the instance is running, or while the instance is stopped.
   *
   * @public
   */
  DisableApiTermination?: boolean | undefined;

  /**
   * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
   *
   * Default: `stop`
   *
   * @public
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | undefined;

  /**
   * The user data to make available to the instance. You must provide base64-encoded text. User data is limited to 16 KB. For more information, see [Run commands when you launch an EC2 instance with user data input](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html) in the *Amazon EC2 User Guide*.
   *
   * If you are creating the launch template for use with Batch, the user data must be provided in the [MIME multi-part archive format](https://cloudinit.readthedocs.io/en/latest/topics/format.html#mime-multi-part-archive). For more information, see [Amazon EC2 user data in launch templates](https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html#lt-user-data) in the *Batch User Guide*.
   *
   * @public
   */
  UserData?: string | undefined;

  /**
   * The tags to apply to the resources that are created during instance launch. These tags are not applied to the launch template.
   *
   * @public
   */
  TagSpecifications?: LaunchTemplateTagSpecificationRequest[] | undefined;

  /**
   * Deprecated.
   *
   * > **Note:** Amazon Elastic Graphics reached end of life on January 8, 2024.
   *
   * @deprecated (since 2024-01-08) Specifying Elastic Graphics accelerators is no longer supported on the RunInstances API.
   * @public
   */
  ElasticGpuSpecifications?: ElasticGpuSpecification[] | undefined;

  /**
   * > **Note:** Amazon Elastic Inference is no longer available.
   *
   * An elastic inference accelerator to associate with the instance. Elastic inference accelerators are a resource you can attach to your Amazon EC2 instances to accelerate your Deep Learning (DL) inference workloads.
   *
   * You cannot specify accelerators from different generations in the same request.
   *
   * @deprecated (since 2024-01-08) Specifying Elastic Inference accelerators is no longer supported on the RunInstances API.
   * @public
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAccelerator[] | undefined;

  /**
   * The IDs of the security groups.
   *
   * If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The names of the security groups. For a nondefault VPC, you must use security group IDs instead.
   *
   * If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The market (purchasing) option for the instances.
   *
   * @public
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptionsRequest | undefined;

  /**
   * The credit option for CPU usage of the instance. Valid only for T instances.
   *
   * @public
   */
  CreditSpecification?: CreditSpecificationRequest | undefined;

  /**
   * The CPU options for the instance. For more information, see [CPU options for Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  CpuOptions?: LaunchTemplateCpuOptionsRequest | undefined;

  /**
   * The Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to `open`, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
   *
   * @public
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationRequest | undefined;

  /**
   * The license configurations.
   *
   * @public
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfigurationRequest[] | undefined;

  /**
   * Indicates whether an instance is enabled for hibernation. This parameter is valid only if the instance meets the [hibernation prerequisites](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html). For more information, see [Hibernate your Amazon EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  HibernationOptions?: LaunchTemplateHibernationOptionsRequest | undefined;

  /**
   * The metadata options for the instance. For more information, see [Configure the Instance Metadata Service options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptionsRequest | undefined;

  /**
   * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more information, see [What is Nitro Enclaves?](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html) in the *Amazon Web Services Nitro Enclaves User Guide*.
   *
   * You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same instance.
   *
   * @public
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptionsRequest | undefined;

  /**
   * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes.
   *
   * You must specify `VCpuCount` and `MemoryMiB`. All other attributes are optional. Any unspecified optional attribute is set to its default.
   *
   * When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.
   *
   * To limit the list of instance types from which Amazon EC2 can identify matching instance types, you can use one of the following parameters, but not both in the same request:
   *
   * - `AllowedInstanceTypes` - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.
   * - `ExcludedInstanceTypes` - The instance types to exclude from the list, even if they match your specified attributes.
   *
   * > **Note:**
   * >
   * > If you specify `InstanceRequirements`, you can't specify `InstanceType`.
   * >
   * > Attribute-based instance type selection is only supported when using Auto Scaling groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in the [launch instance wizard](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html), or with the [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) API or [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) Amazon Web Services CloudFormation resource, you can't specify `InstanceRequirements`.
   *
   * For more information, see [Specify attributes for instance type selection for EC2 Fleet or Spot Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html) and [Spot placement score](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  InstanceRequirements?: InstanceRequirementsRequest | undefined;

  /**
   * The options for the instance hostname. The default values are inherited from the subnet.
   *
   * @public
   */
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptionsRequest | undefined;

  /**
   * The maintenance options for the instance.
   *
   * @public
   */
  MaintenanceOptions?: LaunchTemplateInstanceMaintenanceOptionsRequest | undefined;

  /**
   * Indicates whether to enable the instance for stop protection. For more information, see [Enable stop protection for your EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  DisableApiStop?: boolean | undefined;

  /**
   * The entity that manages the launch template.
   *
   * @public
   */
  Operator?: OperatorRequest | undefined;

  /**
   * Contains launch template settings to boost network performance for the type of workload that runs on your instance.
   *
   * @public
   */
  NetworkPerformanceOptions?: LaunchTemplateNetworkPerformanceOptionsRequest | undefined;

  /**
   * The secondary interfaces to associate with instances launched from the template.
   *
   * @public
   */
  SecondaryInterfaces?: LaunchTemplateInstanceSecondaryInterfaceSpecificationRequest[] | undefined;
}

/**
 * @public
 */
export interface CreateLaunchTemplateRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If a client token isn't specified, a randomly generated token is used in the request to ensure idempotency.
   *
   * For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * Constraint: Maximum 128 ASCII characters.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A name for the launch template.
   *
   * @public
   */
  LaunchTemplateName: string | undefined;

  /**
   * A description for the first version of the launch template.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * The information for the launch template.
   *
   * @public
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;

  /**
   * Reserved for internal use.
   *
   * @public
   */
  Operator?: OperatorRequest | undefined;

  /**
   * The tags to apply to the launch template on creation. To tag the launch template, the resource type must be `launch-template`.
   *
   * To specify the tags for the resources that are created when an instance is launched, you must use the `TagSpecifications` parameter in the [launch template data](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestLaunchTemplateData.html) structure.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * Describes a launch template.
 *
 * @public
 */
export interface LaunchTemplate {
  /**
   * The ID of the launch template.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * The time launch template was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The principal that created the launch template.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The version number of the default version of the launch template.
   *
   * @public
   */
  DefaultVersionNumber?: number | undefined;

  /**
   * The version number of the latest version of the launch template.
   *
   * @public
   */
  LatestVersionNumber?: number | undefined;

  /**
   * The tags for the launch template.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The entity that manages the launch template.
   *
   * @public
   */
  Operator?: OperatorResponse | undefined;
}

/**
 * The error code and error message that is returned for a parameter or parameter combination that is not valid when a new launch template or new version of a launch template is created.
 *
 * @public
 */
export interface ValidationError {
  /**
   * The error code that indicates why the parameter or parameter combination is not valid. For more information about error codes, see [Error codes](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html).
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The error message that describes why the parameter or parameter combination is not valid. For more information about error messages, see [Error codes](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html).
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The error codes and error messages that are returned for the parameters or parameter combinations that are not valid when a new launch template or new version of a launch template is created.
 *
 * @public
 */
export interface ValidationWarning {
  /**
   * The error codes and error messages.
   *
   * @public
   */
  Errors?: ValidationError[] | undefined;
}

/**
 * @public
 */
export interface CreateLaunchTemplateResult {
  /**
   * Information about the launch template.
   *
   * @public
   */
  LaunchTemplate?: LaunchTemplate | undefined;

  /**
   * If the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
   *
   * @public
   */
  Warning?: ValidationWarning | undefined;
}

/**
 * @public
 */
export interface CreateLaunchTemplateVersionRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If a client token isn't specified, a randomly generated token is used in the request to ensure idempotency.
   *
   * For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * Constraint: Maximum 128 ASCII characters.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The ID of the launch template.
   *
   * You must specify either the launch template ID or the launch template name, but not both.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template.
   *
   * You must specify either the launch template ID or the launch template name, but not both.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * The version of the launch template on which to base the new version. Snapshots applied to the block device mapping are ignored when creating a new version unless they are explicitly included.
   *
   * If you specify this parameter, the new version inherits the launch parameters from the source version. If you specify additional launch parameters for the new version, they overwrite any corresponding launch parameters inherited from the source version.
   *
   * If you omit this parameter, the new version contains only the launch parameters that you specify for the new version.
   *
   * @public
   */
  SourceVersion?: string | undefined;

  /**
   * A description for the version of the launch template.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * The information for the launch template.
   *
   * @public
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;

  /**
   * If `true`, and if a Systems Manager parameter is specified for `ImageId`, the AMI ID is displayed in the response for `imageID`. For more information, see [Use a Systems Manager parameter instead of an AMI ID](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id) in the *Amazon EC2 User Guide*.
   *
   * Default: `false`
   *
   * @public
   */
  ResolveAlias?: boolean | undefined;
}

/**
 * Describes a block device for an EBS volume.
 *
 * @public
 */
export interface LaunchTemplateEbsBlockDevice {
  /**
   * Indicates whether the EBS volume is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * Indicates whether the EBS volume is deleted on instance termination.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The number of I/O operations per second (IOPS) that the volume supports.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key to use for EBS encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The size of the volume, in GiB.
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * The volume type.
   *
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * The throughput that the volume supports, in MiB/s.
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * The Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate) specified for the volume, in MiB/s. If no volume initialization rate was specified, the value is `null`.
   *
   * @public
   */
  VolumeInitializationRate?: number | undefined;

  /**
   * The index of the EBS card. Some instance types support multiple EBS cards. The default EBS card index is 0.
   *
   * @public
   */
  EbsCardIndex?: number | undefined;
}

/**
 * Describes a block device mapping.
 *
 * @public
 */
export interface LaunchTemplateBlockDeviceMapping {
  /**
   * The device name.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * The virtual device name (ephemeralN).
   *
   * @public
   */
  VirtualName?: string | undefined;

  /**
   * Information about the block device for an EBS volume.
   *
   * @public
   */
  Ebs?: LaunchTemplateEbsBlockDevice | undefined;

  /**
   * To omit the device from the block device mapping, specify an empty string.
   *
   * @public
   */
  NoDevice?: string | undefined;
}

/**
 * Describes a target Capacity Reservation or Capacity Reservation group.
 *
 * @public
 */
export interface CapacityReservationTargetResponse {
  /**
   * The ID of the targeted Capacity Reservation.
   *
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * The ARN of the targeted Capacity Reservation group.
   *
   * @public
   */
  CapacityReservationResourceGroupArn?: string | undefined;
}

/**
 * Information about the Capacity Reservation targeting option.
 *
 * @public
 */
export interface LaunchTemplateCapacityReservationSpecificationResponse {
  /**
   * Indicates the instance's Capacity Reservation preferences. Possible preferences include:
   *
   * - `open` - The instance can run in any `open` Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
   * - `none` - The instance avoids running in a Capacity Reservation even if one is available. The instance runs in On-Demand capacity.
   *
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * Information about the target Capacity Reservation or Capacity Reservation group.
   *
   * @public
   */
  CapacityReservationTarget?: CapacityReservationTargetResponse | undefined;
}

/**
 * The CPU options for the instance.
 *
 * @public
 */
export interface LaunchTemplateCpuOptions {
  /**
   * The number of CPU cores for the instance.
   *
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * The number of threads per CPU core.
   *
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * Indicates whether the instance is enabled for AMD SEV-SNP. For more information, see [AMD SEV-SNP for Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html).
   *
   * @public
   */
  AmdSevSnp?: AmdSevSnpSpecification | undefined;

  /**
   * Indicates whether the instance is enabled for nested virtualization.
   *
   * @public
   */
  NestedVirtualization?: NestedVirtualizationSpecification | undefined;
}

/**
 * Describes the credit option for CPU usage of a T instance.
 *
 * @public
 */
export interface CreditSpecification {
  /**
   * The credit option for CPU usage of a T instance.
   *
   * Valid values: `standard` | `unlimited`
   *
   * @public
   */
  CpuCredits?: string | undefined;
}

/**
 * Deprecated.
 *
 * > **Note:** Amazon Elastic Graphics reached end of life on January 8, 2024.
 *
 * @public
 */
export interface ElasticGpuSpecificationResponse {
  /**
   * Deprecated.
   *
   * > **Note:** Amazon Elastic Graphics reached end of life on January 8, 2024.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * > **Note:** Amazon Elastic Inference is no longer available.
 *
 * Describes an elastic inference accelerator.
 *
 * @public
 */
export interface LaunchTemplateElasticInferenceAcceleratorResponse {
  /**
   * The type of elastic inference accelerator. The possible values are eia1.medium, eia1.large, and eia1.xlarge.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The number of elastic inference accelerators to attach to the instance.
   *
   * @public
   */
  Count?: number | undefined;
}

/**
 * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
 *
 * @public
 */
export interface LaunchTemplateEnclaveOptions {
  /**
   * If this parameter is set to `true`, the instance is enabled for Amazon Web Services Nitro Enclaves; otherwise, it is not enabled for Amazon Web Services Nitro Enclaves.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Indicates whether an instance is configured for hibernation.
 *
 * @public
 */
export interface LaunchTemplateHibernationOptions {
  /**
   * If this parameter is set to `true`, the instance is enabled for hibernation; otherwise, it is not enabled for hibernation.
   *
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * Describes an IAM instance profile.
 *
 * @public
 */
export interface LaunchTemplateIamInstanceProfileSpecification {
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
 * The options for Spot Instances.
 *
 * @public
 */
export interface LaunchTemplateSpotMarketOptions {
  /**
   * The maximum hourly price you're willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price. If you do specify this parameter, it must be more than USD $0.001. Specifying a value below USD $0.001 will result in an `InvalidParameterValue` error message when the launch template is used to launch an instance.
   *
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * The Spot Instance request type.
   *
   * @public
   */
  SpotInstanceType?: SpotInstanceType | undefined;

  /**
   * The required duration for the Spot Instances (also known as Spot blocks), in minutes. This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).
   *
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * The end date of the request. For a one-time request, the request remains active until all instances launch, the request is canceled, or this date is reached. If the request is persistent, it remains active until it is canceled or this date and time is reached.
   *
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * The behavior when a Spot Instance is interrupted.
   *
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;
}

/**
 * The market (purchasing) option for the instances.
 *
 * @public
 */
export interface LaunchTemplateInstanceMarketOptions {
  /**
   * The market type.
   *
   * @public
   */
  MarketType?: MarketType | undefined;

  /**
   * The options for Spot Instances.
   *
   * @public
   */
  SpotOptions?: LaunchTemplateSpotMarketOptions | undefined;
}

/**
 * Describes a license configuration.
 *
 * @public
 */
export interface LaunchTemplateLicenseConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the license configuration.
   *
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * The maintenance options of your instance.
 *
 * @public
 */
export interface LaunchTemplateInstanceMaintenanceOptions {
  /**
   * Disables the automatic recovery behavior of your instance or sets it to default.
   *
   * @public
   */
  AutoRecovery?: LaunchTemplateAutoRecoveryState | undefined;
}

/**
 * The metadata options for the instance. For more information, see [Use instance metadata to manage your EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface LaunchTemplateInstanceMetadataOptions {
  /**
   * The state of the metadata option changes.
   *
   * `pending` - The metadata options are being updated and the instance is not ready to process metadata traffic with the new selection.
   *
   * `applied` - The metadata options have been successfully applied on the instance.
   *
   * @public
   */
  State?: LaunchTemplateInstanceMetadataOptionsState | undefined;

  /**
   * Indicates whether IMDSv2 is required.
   *
   * - `optional` - IMDSv2 is optional. You can choose whether to send a session token in your instance metadata retrieval requests. If you retrieve IAM role credentials without a session token, you receive the IMDSv1 role credentials. If you retrieve IAM role credentials using a valid session token, you receive the IMDSv2 role credentials.
   * - `required` - IMDSv2 is required. You must send a session token in your instance metadata retrieval requests. With this option, retrieving the IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.
   *
   * @public
   */
  HttpTokens?: LaunchTemplateHttpTokensState | undefined;

  /**
   * The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.
   *
   * Possible values: Integers from 1 to 64
   *
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * Enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is `enabled`.
   *
   * > **Note:** If you specify a value of `disabled`, you will not be able to access your instance metadata.
   *
   * @public
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState | undefined;

  /**
   * Enables or disables the IPv6 endpoint for the instance metadata service.
   *
   * Default: `disabled`
   *
   * @public
   */
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6 | undefined;

  /**
   * Set to `enabled` to allow access to instance tags from the instance metadata. Set to `disabled` to turn off access to instance tags from the instance metadata. For more information, see [View tags for your EC2 instances using instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-tags-in-IMDS.html).
   *
   * Default: `disabled`
   *
   * @public
   */
  InstanceMetadataTags?: LaunchTemplateInstanceMetadataTagsState | undefined;
}

/**
 * Describes the monitoring for the instance.
 *
 * @public
 */
export interface LaunchTemplatesMonitoring {
  /**
   * Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * A security group connection tracking specification that enables you to set the idle timeout for connection tracking on an Elastic network interface. For more information, see [Connection tracking timeouts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface ConnectionTrackingSpecification {
  /**
   * Timeout (in seconds) for idle TCP connections in an established state. Min: 60 seconds. Max: 432000 seconds (5 days). Default: 350 seconds for Nitro v6 instance types (excluding P6e-GB200); 432000 seconds for all other instance types (including P6e-GB200). Recommended: Less than 432000 seconds.
   *
   * @public
   */
  TcpEstablishedTimeout?: number | undefined;

  /**
   * Timeout (in seconds) for idle UDP flows that have seen traffic only in a single direction or a single request-response transaction. Min: 30 seconds. Max: 60 seconds. Default: 30 seconds.
   *
   * @public
   */
  UdpTimeout?: number | undefined;

  /**
   * Timeout (in seconds) for idle UDP flows classified as streams which have seen more than one request-response transaction. Min: 60 seconds. Max: 180 seconds (3 minutes). Default: 180 seconds.
   *
   * @public
   */
  UdpStreamTimeout?: number | undefined;
}

/**
 * ENA Express is compatible with both TCP and UDP transport protocols. When it's enabled, TCP traffic automatically uses it. However, some UDP-based applications are designed to handle network packets that are out of order, without a need for retransmission, such as live video broadcasting or other near-real-time applications. For UDP traffic, you can specify whether to use ENA Express, based on your application environment needs.
 *
 * @public
 */
export interface LaunchTemplateEnaSrdUdpSpecification {
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
export interface LaunchTemplateEnaSrdSpecification {
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
  EnaSrdUdpSpecification?: LaunchTemplateEnaSrdUdpSpecification | undefined;
}

/**
 * Information about the IPv4 delegated prefixes assigned to a network interface.
 *
 * @public
 */
export interface Ipv4PrefixSpecificationResponse {
  /**
   * The IPv4 delegated prefixes assigned to the network interface.
   *
   * @public
   */
  Ipv4Prefix?: string | undefined;
}

/**
 * Describes an IPv6 address.
 *
 * @public
 */
export interface InstanceIpv6Address {
  /**
   * The IPv6 address.
   *
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * Determines if an IPv6 address associated with a network interface is the primary IPv6 address. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information, see [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html).
   *
   * @public
   */
  IsPrimaryIpv6?: boolean | undefined;
}

/**
 * Information about the IPv6 delegated prefixes assigned to a network interface.
 *
 * @public
 */
export interface Ipv6PrefixSpecificationResponse {
  /**
   * The IPv6 delegated prefixes assigned to the network interface.
   *
   * @public
   */
  Ipv6Prefix?: string | undefined;
}

/**
 * Describes a network interface.
 *
 * @public
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecification {
  /**
   * Indicates whether to associate a Carrier IP address with eth0 for a new network interface.
   *
   * Use this option when you launch an instance in a Wavelength Zone and want to associate a Carrier IP address with the network interface. For more information about Carrier IP addresses, see [Carrier IP address](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip) in the *Wavelength Developer Guide*.
   *
   * @public
   */
  AssociateCarrierIpAddress?: boolean | undefined;

  /**
   * Indicates whether to associate a public IPv4 address with eth0 for a new network interface.
   *
   * Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the *Public IPv4 Address* tab on the [Amazon VPC pricing page](http://aws.amazon.com/vpc/pricing/).
   *
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * Indicates whether the network interface is deleted when the instance is terminated.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * A description for the network interface.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The device index for the network interface attachment.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The IDs of one or more security groups.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * The type of network interface.
   *
   * @public
   */
  InterfaceType?: string | undefined;

  /**
   * The number of IPv6 addresses for the network interface.
   *
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * The IPv6 addresses for the network interface.
   *
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The primary private IPv4 address of the network interface.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * One or more private IPv4 addresses.
   *
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;

  /**
   * The number of secondary private IPv4 addresses for the network interface.
   *
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * The ID of the subnet for the network interface.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The index of the network card.
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * One or more IPv4 prefixes assigned to the network interface.
   *
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationResponse[] | undefined;

  /**
   * The number of IPv4 prefixes that Amazon Web Services automatically assigned to the network interface.
   *
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * One or more IPv6 prefixes assigned to the network interface.
   *
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationResponse[] | undefined;

  /**
   * The number of IPv6 prefixes that Amazon Web Services automatically assigned to the network interface.
   *
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * The primary IPv6 address of the network interface. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information about primary IPv6 addresses, see [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html).
   *
   * @public
   */
  PrimaryIpv6?: boolean | undefined;

  /**
   * Contains the ENA Express settings for instances launched from your launch template.
   *
   * @public
   */
  EnaSrdSpecification?: LaunchTemplateEnaSrdSpecification | undefined;

  /**
   * A security group connection tracking specification that enables you to set the timeout for connection tracking on an Elastic network interface. For more information, see [Idle connection tracking timeout](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecification | undefined;

  /**
   * The number of ENA queues created with the instance.
   *
   * @public
   */
  EnaQueueCount?: number | undefined;
}

/**
 * With network performance options, you can adjust your bandwidth preferences to meet the needs of the workload that runs on your instance at launch.
 *
 * @public
 */
export interface LaunchTemplateNetworkPerformanceOptions {
  /**
   * When you configure network bandwidth weighting, you can boost baseline bandwidth for either networking or EBS by up to 25%. The total available baseline bandwidth for your instance remains the same. The default option uses the standard bandwidth configuration for your instance type.
   *
   * @public
   */
  BandwidthWeighting?: InstanceBandwidthWeighting | undefined;
}

/**
 * Describes the placement of an instance.
 *
 * @public
 */
export interface LaunchTemplatePlacement {
  /**
   * The Availability Zone of the instance.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone of the instance.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The affinity setting for the instance on the Dedicated Host.
   *
   * @public
   */
  Affinity?: string | undefined;

  /**
   * The name of the placement group for the instance.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The ID of the Dedicated Host for the instance.
   *
   * @public
   */
  HostId?: string | undefined;

  /**
   * The tenancy of the instance. An instance with a tenancy of `dedicated` runs on single-tenant hardware.
   *
   * @public
   */
  Tenancy?: Tenancy | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  SpreadDomain?: string | undefined;

  /**
   * The ARN of the host resource group in which to launch the instances.
   *
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * The number of the partition the instance should launch in. Valid only if the placement group strategy is set to `partition`.
   *
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * The Group ID of the placement group. You must specify the Placement Group **Group ID** to launch an instance in a shared placement group.
   *
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * Describes the options for instance hostnames.
 *
 * @public
 */
export interface LaunchTemplatePrivateDnsNameOptions {
  /**
   * The type of hostname to assign to an instance.
   *
   * @public
   */
  HostnameType?: HostnameType | undefined;

  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
   *
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
   *
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}

/**
 * Describes a private IPv4 address specification for a secondary interface.
 *
 * @public
 */
export interface SecondaryInterfacePrivateIpAddressSpecification {
  /**
   * The private IPv4 address.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * Describes a secondary interface specification in a launch template.
 *
 * @public
 */
export interface LaunchTemplateInstanceSecondaryInterfaceSpecification {
  /**
   * Indicates whether the secondary interface is deleted when the instance is terminated.
   *
   * The only supported value for this field is `true`.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The device index for the secondary interface attachment.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The private IPv4 addresses to assign to the secondary interface.
   *
   * If you specify `privateIpAddresses` you cannot specify `privateIpAddressCount`
   *
   * @public
   */
  PrivateIpAddresses?: SecondaryInterfacePrivateIpAddressSpecification[] | undefined;

  /**
   * The number of private IPv4 addresses to assign to the secondary interface.
   *
   * If you specify `privateIpAddressCount` you cannot specify `privateIpAddresses`
   *
   * @public
   */
  PrivateIpAddressCount?: number | undefined;

  /**
   * The ID of the secondary subnet.
   *
   * @public
   */
  SecondarySubnetId?: string | undefined;

  /**
   * The type of secondary interface.
   *
   * @public
   */
  InterfaceType?: SecondaryInterfaceType | undefined;

  /**
   * The index of the network card.
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;
}

/**
 * The tags specification for the launch template.
 *
 * @public
 */
export interface LaunchTemplateTagSpecification {
  /**
   * The type of resource to tag.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The tags for the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The information for a launch template.
 *
 * @public
 */
export interface ResponseLaunchTemplateData {
  /**
   * The ID of the kernel, if applicable.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * Indicates whether the instance is optimized for Amazon EBS I/O.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * The IAM instance profile.
   *
   * @public
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecification | undefined;

  /**
   * The block device mappings.
   *
   * @public
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMapping[] | undefined;

  /**
   * The network interfaces.
   *
   * @public
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * The ID of the AMI or a Systems Manager parameter. The Systems Manager parameter will resolve to the ID of the AMI at instance launch.
   *
   * The value depends on what you specified in the request. The possible values are:
   *
   * - If an AMI ID was specified in the request, then this is the AMI ID.
   * - If a Systems Manager parameter was specified in the request, and `ResolveAlias` was configured as `true`, then this is the AMI ID that the parameter is mapped to in the Parameter Store.
   * - If a Systems Manager parameter was specified in the request, and `ResolveAlias` was configured as `false`, then this is the parameter value.
   *
   * For more information, see [Use a Systems Manager parameter instead of an AMI ID](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The name of the key pair.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * The monitoring for the instance.
   *
   * @public
   */
  Monitoring?: LaunchTemplatesMonitoring | undefined;

  /**
   * The placement of the instance.
   *
   * @public
   */
  Placement?: LaunchTemplatePlacement | undefined;

  /**
   * The ID of the RAM disk, if applicable.
   *
   * @public
   */
  RamDiskId?: string | undefined;

  /**
   * If set to `true`, indicates that the instance cannot be terminated using the Amazon EC2 console, command line tool, or API.
   *
   * @public
   */
  DisableApiTermination?: boolean | undefined;

  /**
   * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
   *
   * @public
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | undefined;

  /**
   * The user data for the instance.
   *
   * @public
   */
  UserData?: string | undefined;

  /**
   * The tags that are applied to the resources that are created during instance launch.
   *
   * @public
   */
  TagSpecifications?: LaunchTemplateTagSpecification[] | undefined;

  /**
   * Deprecated.
   *
   * > **Note:** Amazon Elastic Graphics reached end of life on January 8, 2024.
   *
   * @public
   */
  ElasticGpuSpecifications?: ElasticGpuSpecificationResponse[] | undefined;

  /**
   * > **Note:** Amazon Elastic Inference is no longer available.
   *
   * An elastic inference accelerator to associate with the instance. Elastic inference accelerators are a resource you can attach to your Amazon EC2 instances to accelerate your Deep Learning (DL) inference workloads.
   *
   * You cannot specify accelerators from different generations in the same request.
   *
   * @public
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAcceleratorResponse[] | undefined;

  /**
   * The security group IDs.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The security group names.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The market (purchasing) option for the instances.
   *
   * @public
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptions | undefined;

  /**
   * The credit option for CPU usage of the instance.
   *
   * @public
   */
  CreditSpecification?: CreditSpecification | undefined;

  /**
   * The CPU options for the instance. For more information, see [CPU options for Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  CpuOptions?: LaunchTemplateCpuOptions | undefined;

  /**
   * Information about the Capacity Reservation targeting option.
   *
   * @public
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationResponse | undefined;

  /**
   * The license configurations.
   *
   * @public
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfiguration[] | undefined;

  /**
   * Indicates whether an instance is configured for hibernation. For more information, see [Hibernate your Amazon EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  HibernationOptions?: LaunchTemplateHibernationOptions | undefined;

  /**
   * The metadata options for the instance. For more information, see [Configure the Instance Metadata Service options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptions | undefined;

  /**
   * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
   *
   * @public
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptions | undefined;

  /**
   * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes.
   *
   * If you specify `InstanceRequirements`, you can't specify `InstanceTypes`.
   *
   * @public
   */
  InstanceRequirements?: InstanceRequirements | undefined;

  /**
   * The options for the instance hostname.
   *
   * @public
   */
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptions | undefined;

  /**
   * The maintenance options for your instance.
   *
   * @public
   */
  MaintenanceOptions?: LaunchTemplateInstanceMaintenanceOptions | undefined;

  /**
   * Indicates whether the instance is enabled for stop protection. For more information, see [Enable stop protection for your EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  DisableApiStop?: boolean | undefined;

  /**
   * The entity that manages the launch template.
   *
   * @public
   */
  Operator?: OperatorResponse | undefined;

  /**
   * Contains the launch template settings for network performance options for your instance.
   *
   * @public
   */
  NetworkPerformanceOptions?: LaunchTemplateNetworkPerformanceOptions | undefined;

  /**
   * The secondary interfaces associated with the launch template.
   *
   * @public
   */
  SecondaryInterfaces?: LaunchTemplateInstanceSecondaryInterfaceSpecification[] | undefined;
}

/**
 * Describes a launch template version.
 *
 * @public
 */
export interface LaunchTemplateVersion {
  /**
   * The ID of the launch template.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * The version number.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The description for the version.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * The time the version was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The principal that created the version.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * Indicates whether the version is the default version.
   *
   * @public
   */
  DefaultVersion?: boolean | undefined;

  /**
   * Information about the launch template.
   *
   * @public
   */
  LaunchTemplateData?: ResponseLaunchTemplateData | undefined;

  /**
   * The entity that manages the launch template.
   *
   * @public
   */
  Operator?: OperatorResponse | undefined;
}

/**
 * @public
 */
export interface CreateLaunchTemplateVersionResult {
  /**
   * Information about the launch template version.
   *
   * @public
   */
  LaunchTemplateVersion?: LaunchTemplateVersion | undefined;

  /**
   * If the new version of the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
   *
   * @public
   */
  Warning?: ValidationWarning | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteRequest {
  /**
   * The CIDR range used for destination matches. Routing decisions are based on the most specific match.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * The ID of the virtual interface group.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

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
  NetworkInterfaceId?: string | undefined;

  /**
   * The ID of the prefix list. Use a prefix list in place of `DestinationCidrBlock`. You cannot use `DestinationPrefixListId` and `DestinationCidrBlock` in the same request.
   *
   * @public
   */
  DestinationPrefixListId?: string | undefined;
}

/**
 * Describes a route for a local gateway route table.
 *
 * @public
 */
export interface LocalGatewayRoute {
  /**
   * The CIDR block used for destination matches.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The ID of the virtual interface group.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * The route type.
   *
   * @public
   */
  Type?: LocalGatewayRouteType | undefined;

  /**
   * The state of the route.
   *
   * @public
   */
  State?: LocalGatewayRouteState | undefined;

  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableArn?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the local gateway route.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the customer-owned address pool.
   *
   * @public
   */
  CoipPoolId?: string | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The ID of the prefix list.
   *
   * @public
   */
  DestinationPrefixListId?: string | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteResult {
  /**
   * Information about the route.
   *
   * @public
   */
  Route?: LocalGatewayRoute | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableRequest {
  /**
   * The ID of the local gateway.
   *
   * @public
   */
  LocalGatewayId: string | undefined;

  /**
   * The mode of the local gateway route table.
   *
   * @public
   */
  Mode?: LocalGatewayRouteTableMode | undefined;

  /**
   * The tags assigned to the local gateway route table.
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
 * Describes a state change.
 *
 * @public
 */
export interface StateReason {
  /**
   * The reason code for the state change.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The message for the state change.
   *
   * - `Server.InsufficientInstanceCapacity`: There was insufficient capacity available to satisfy the launch request.
   * - `Server.InternalError`: An internal error caused the instance to terminate during launch.
   * - `Server.ScheduledStop`: The instance was stopped due to a scheduled retirement.
   * - `Server.SpotInstanceShutdown`: The instance was stopped because the number of Spot requests with a maximum price equal to or higher than the Spot price exceeded available capacity or because of an increase in the Spot price.
   * - `Server.SpotInstanceTermination`: The instance was terminated because the number of Spot requests with a maximum price equal to or higher than the Spot price exceeded available capacity or because of an increase in the Spot price.
   * - `Client.InstanceInitiatedShutdown`: The instance was shut down from the operating system of the instance.
   * - `Client.InstanceTerminated`: The instance was terminated or rebooted during AMI creation.
   * - `Client.InternalError`: A client error caused the instance to terminate during launch.
   * - `Client.InvalidSnapshot.NotFound`: The specified snapshot was not found.
   * - `Client.UserInitiatedHibernate`: Hibernation was initiated on the instance.
   * - `Client.UserInitiatedShutdown`: The instance was shut down using the Amazon EC2 API.
   * - `Client.VolumeLimitExceeded`: The limit on the number of EBS volumes or total storage was exceeded. Decrease usage or request an increase in your account limits.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes a local gateway route table.
 *
 * @public
 */
export interface LocalGatewayRouteTable {
  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableArn?: string | undefined;

  /**
   * The ID of the local gateway.
   *
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the local gateway route table.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The state of the local gateway route table.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The tags assigned to the local gateway route table.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The mode of the local gateway route table.
   *
   * @public
   */
  Mode?: LocalGatewayRouteTableMode | undefined;

  /**
   * Information about the state change.
   *
   * @public
   */
  StateReason?: StateReason | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableResult {
  /**
   * Information about the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTable?: LocalGatewayRouteTable | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest {
  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * The ID of the local gateway route table virtual interface group association.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId: string | undefined;

  /**
   * The tags assigned to the local gateway route table virtual interface group association.
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
 * Describes an association between a local gateway route table and a virtual interface group.
 *
 * @public
 */
export interface LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  /**
   * The ID of the association.
   *
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId?: string | undefined;

  /**
   * The ID of the virtual interface group.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * The ID of the local gateway.
   *
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the local gateway route table for the virtual interface group.
   *
   * @public
   */
  LocalGatewayRouteTableArn?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the local gateway virtual interface group association.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The state of the association.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The tags assigned to the association.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult {
  /**
   * Information about the local gateway route table virtual interface group association.
   *
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The tags to assign to the local gateway route table VPC association.
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
 * Describes an association between a local gateway route table and a VPC.
 *
 * @public
 */
export interface LocalGatewayRouteTableVpcAssociation {
  /**
   * The ID of the association.
   *
   * @public
   */
  LocalGatewayRouteTableVpcAssociationId?: string | undefined;

  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the local gateway route table for the association.
   *
   * @public
   */
  LocalGatewayRouteTableArn?: string | undefined;

  /**
   * The ID of the local gateway.
   *
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the local gateway route table for the association.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The state of the association.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The tags assigned to the association.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVpcAssociationResult {
  /**
   * Information about the association.
   *
   * @public
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayVirtualInterfaceRequest {
  /**
   * The ID of the local gateway virtual interface group.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId: string | undefined;

  /**
   * References the Link Aggregation Group (LAG) that connects the Outpost to on-premises network devices.
   *
   * @public
   */
  OutpostLagId: string | undefined;

  /**
   * The virtual local area network (VLAN) used for the local gateway virtual interface.
   *
   * @public
   */
  Vlan: number | undefined;

  /**
   * The IP address assigned to the local gateway virtual interface on the Outpost side. Only IPv4 is supported.
   *
   * @public
   */
  LocalAddress: string | undefined;

  /**
   * The peer IP address for the local gateway virtual interface. Only IPv4 is supported.
   *
   * @public
   */
  PeerAddress: string | undefined;

  /**
   * The Autonomous System Number (ASN) of the Border Gateway Protocol (BGP) peer.
   *
   * @public
   */
  PeerBgpAsn?: number | undefined;

  /**
   * The tags to apply to a resource when the local gateway virtual interface is being created.
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
   * The extended 32-bit ASN of the BGP peer for use with larger ASN values.
   *
   * @public
   */
  PeerBgpAsnExtended?: number | undefined;
}

/**
 * Describes a local gateway virtual interface.
 *
 * @public
 */
export interface LocalGatewayVirtualInterface {
  /**
   * The ID of the virtual interface.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceId?: string | undefined;

  /**
   * The ID of the local gateway.
   *
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * The ID of the local gateway virtual interface group.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the local gateway virtual interface.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceArn?: string | undefined;

  /**
   * The Outpost LAG ID.
   *
   * @public
   */
  OutpostLagId?: string | undefined;

  /**
   * The ID of the VLAN.
   *
   * @public
   */
  Vlan?: number | undefined;

  /**
   * The local address.
   *
   * @public
   */
  LocalAddress?: string | undefined;

  /**
   * The peer address.
   *
   * @public
   */
  PeerAddress?: string | undefined;

  /**
   * The Border Gateway Protocol (BGP) Autonomous System Number (ASN) of the local gateway.
   *
   * @public
   */
  LocalBgpAsn?: number | undefined;

  /**
   * The peer BGP ASN.
   *
   * @public
   */
  PeerBgpAsn?: number | undefined;

  /**
   * The extended 32-bit ASN of the BGP peer for use with larger ASN values.
   *
   * @public
   */
  PeerBgpAsnExtended?: number | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the local gateway virtual interface.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The tags assigned to the virtual interface.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The current state of the local gateway virtual interface.
   *
   * @public
   */
  ConfigurationState?: LocalGatewayVirtualInterfaceConfigurationState | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayVirtualInterfaceResult {
  /**
   * Information about the local gateway virtual interface.
   *
   * @public
   */
  LocalGatewayVirtualInterface?: LocalGatewayVirtualInterface | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayVirtualInterfaceGroupRequest {
  /**
   * The ID of the local gateway.
   *
   * @public
   */
  LocalGatewayId: string | undefined;

  /**
   * The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP).
   *
   * @public
   */
  LocalBgpAsn?: number | undefined;

  /**
   * The extended 32-bit ASN for the local BGP configuration.
   *
   * @public
   */
  LocalBgpAsnExtended?: number | undefined;

  /**
   * The tags to apply to the local gateway virtual interface group when the resource is being created.
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
 * Describes a local gateway virtual interface group.
 *
 * @public
 */
export interface LocalGatewayVirtualInterfaceGroup {
  /**
   * The ID of the virtual interface group.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * The IDs of the virtual interfaces.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceIds?: string[] | undefined;

  /**
   * The ID of the local gateway.
   *
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the local gateway virtual interface group.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP).
   *
   * @public
   */
  LocalBgpAsn?: number | undefined;

  /**
   * The extended 32-bit ASN for the local BGP configuration.
   *
   * @public
   */
  LocalBgpAsnExtended?: number | undefined;

  /**
   * The Amazon Resource Number (ARN) of the local gateway virtual interface group.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceGroupArn?: string | undefined;

  /**
   * The tags assigned to the virtual interface group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The current state of the local gateway virtual interface group.
   *
   * @public
   */
  ConfigurationState?: LocalGatewayVirtualInterfaceGroupConfigurationState | undefined;
}

/**
 * @public
 */
export interface CreateLocalGatewayVirtualInterfaceGroupResult {
  /**
   * Information about the created local gateway virtual interface group.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceGroup?: LocalGatewayVirtualInterfaceGroup | undefined;
}

/**
 * Describes a custom configuration for a System Integrity Protection (SIP) modification task.
 *
 * @public
 */
export interface MacSystemIntegrityProtectionConfigurationRequest {
  /**
   * Enables or disables Apple Internal.
   *
   * @public
   */
  AppleInternal?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * Enables or disables Base System.
   *
   * @public
   */
  BaseSystem?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * Enables or disables Debugging Restrictions.
   *
   * @public
   */
  DebuggingRestrictions?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * Enables or disables Dtrace Restrictions.
   *
   * @public
   */
  DTraceRestrictions?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * Enables or disables Filesystem Protections.
   *
   * @public
   */
  FilesystemProtections?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * Enables or disables Kext Signing.
   *
   * @public
   */
  KextSigning?: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * Enables or disables Nvram Protections.
   *
   * @public
   */
  NvramProtections?: MacSystemIntegrityProtectionSettingStatus | undefined;
}

/**
 * @public
 */
export interface CreateMacSystemIntegrityProtectionModificationTaskRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
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
   * The ID of the Amazon EC2 Mac instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * **[Apple silicon Mac instances only]** Specifies the following credentials:
   *
   * - **Internal disk administrative user**
   *
   *   - **Username** - Only the default administrative user (`aws-managed-user`) is supported and it is used by default. You can't specify a different administrative user.
   *   - **Password** - If you did not change the default password for `aws-managed-user`, specify the default password, which is *blank*. Otherwise, specify your password.
   * - **Amazon EBS root volume administrative user**
   *
   *   - **Username** - If you did not change the default administrative user, specify `ec2-user`. Otherwise, specify the username for your administrative user.
   *   - **Password** - Specify the password for the administrative user.
   *
   * The credentials must be specified in the following JSON format:
   *
   * `\{ "internalDiskPassword":"internal-disk-admin_password", "rootVolumeUsername":"root-volume-admin_username", "rootVolumepassword":"root-volume-admin_password" \}`
   *
   * @public
   */
  MacCredentials?: string | undefined;

  /**
   * Specifies the overrides to selectively enable or disable individual SIP settings. The individual settings you specify here override the overall SIP status you specify for **MacSystemIntegrityProtectionStatus**.
   *
   * @public
   */
  MacSystemIntegrityProtectionConfiguration?: MacSystemIntegrityProtectionConfigurationRequest | undefined;

  /**
   * Specifies the overall SIP status for the instance. To enable all SIP settings, specify `enabled`. To disable all SIP settings, specify `disabled`.
   *
   * @public
   */
  MacSystemIntegrityProtectionStatus: MacSystemIntegrityProtectionSettingStatus | undefined;

  /**
   * Specifies tags to apply to the SIP modification task.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateMacSystemIntegrityProtectionModificationTaskResult {
  /**
   * Information about the SIP modification task.
   *
   * @public
   */
  MacModificationTask?: MacModificationTask | undefined;
}

/**
 * @public
 */
export interface CreateManagedPrefixListRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A name for the prefix list.
   *
   * Constraints: Up to 255 characters in length. The name cannot start with `com.amazonaws`.
   *
   * @public
   */
  PrefixListName: string | undefined;

  /**
   * One or more entries for the prefix list.
   *
   * @public
   */
  Entries?: AddPrefixListEntry[] | undefined;

  /**
   * The maximum number of entries for the prefix list.
   *
   * @public
   */
  MaxEntries: number | undefined;

  /**
   * The tags to apply to the prefix list during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The IP address type.
   *
   * Valid Values: `IPv4` | `IPv6`
   *
   * @public
   */
  AddressFamily: string | undefined;

  /**
   * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * Constraints: Up to 255 UTF-8 characters in length.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Describes a managed prefix list.
 *
 * @public
 */
export interface ManagedPrefixList {
  /**
   * The ID of the prefix list.
   *
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * The IP address version.
   *
   * @public
   */
  AddressFamily?: string | undefined;

  /**
   * The current state of the prefix list.
   *
   * @public
   */
  State?: PrefixListState | undefined;

  /**
   * The state message.
   *
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the prefix list.
   *
   * @public
   */
  PrefixListArn?: string | undefined;

  /**
   * The name of the prefix list.
   *
   * @public
   */
  PrefixListName?: string | undefined;

  /**
   * The maximum number of entries for the prefix list.
   *
   * @public
   */
  MaxEntries?: number | undefined;

  /**
   * The version of the prefix list.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The tags for the prefix list.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the owner of the prefix list.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the IPAM prefix list resolver target associated with this managed prefix list. When set, this prefix list becomes an IPAM managed prefix list.
   *
   * An IPAM-managed prefix list is a customer-managed prefix list that has been associated with an IPAM prefix list resolver target. When a prefix list becomes IPAM managed, its CIDRs are automatically synchronized based on the IPAM prefix list resolver's CIDR selection rules, and direct CIDR modifications are restricted.
   *
   * @public
   */
  IpamPrefixListResolverTargetId?: string | undefined;

  /**
   * Indicates whether synchronization with an IPAM prefix list resolver is enabled for this managed prefix list. When enabled, the prefix list CIDRs are automatically updated based on the resolver's CIDR selection rules.
   *
   * @public
   */
  IpamPrefixListResolverSyncEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateManagedPrefixListResult {
  /**
   * Information about the prefix list.
   *
   * @public
   */
  PrefixList?: ManagedPrefixList | undefined;
}

/**
 * For regional NAT gateways only: The configuration specifying which Elastic IP address (EIP) to use for handling outbound NAT traffic from a specific Availability Zone.
 *
 * A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
 *
 * For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.
 *
 * @public
 */
export interface AvailabilityZoneAddress {
  /**
   * For regional NAT gateways only: The Availability Zone where this specific NAT gateway configuration will be active. Each AZ in a regional NAT gateway has its own configuration to handle outbound NAT traffic from that AZ.
   *
   * A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * For regional NAT gateways only: The ID of the Availability Zone where this specific NAT gateway configuration will be active. Each AZ in a regional NAT gateway has its own configuration to handle outbound NAT traffic from that AZ. Use this instead of AvailabilityZone for consistent identification of AZs across Amazon Web Services Regions.
   *
   * A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The allocation IDs of the Elastic IP addresses (EIPs) to be used for handling outbound NAT traffic in this specific Availability Zone.
   *
   * @public
   */
  AllocationIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateNatGatewayRequest {
  /**
   * Specifies whether to create a zonal (single-AZ) or regional (multi-AZ) NAT gateway. Defaults to `zonal`.
   *
   * A zonal NAT gateway is a NAT Gateway that provides redundancy and scalability within a single availability zone. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
   *
   * For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  AvailabilityMode?: AvailabilityMode | undefined;

  /**
   * [Public NAT gateways only] The allocation ID of an Elastic IP address to associate with the NAT gateway. You cannot specify an Elastic IP address with a private NAT gateway. If the Elastic IP address is associated with another resource, you must first disassociate it.
   *
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * Constraint: Maximum 64 ASCII characters.
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
   * The ID of the subnet in which to create the NAT gateway.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the VPC where you want to create a regional NAT gateway.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ. The regional NAT gateway uses these EIPs to handle outbound NAT traffic from their respective AZs. If not specified, the NAT gateway will automatically expand to new AZs and associate EIPs upon detection of an elastic network interface. If you specify this parameter, auto-expansion is disabled and you must manually manage AZ coverage.
   *
   * A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
   *
   * For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  AvailabilityZoneAddresses?: AvailabilityZoneAddress[] | undefined;

  /**
   * The tags to assign to the NAT gateway.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity.
   *
   * @public
   */
  ConnectivityType?: ConnectivityType | undefined;

  /**
   * The private IPv4 address to assign to the NAT gateway. If you don't provide an address, a private IPv4 address will be automatically assigned.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * Secondary EIP allocation IDs. For more information, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  SecondaryAllocationIds?: string[] | undefined;

  /**
   * Secondary private IPv4 addresses. For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  SecondaryPrivateIpAddresses?: string[] | undefined;

  /**
   * [Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway. For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;
}

/**
 * Information about an appliance attached to a NAT Gateway, providing managed security solutions for traffic filtering and inspection.
 *
 * @public
 */
export interface NatGatewayAttachedAppliance {
  /**
   * The type of appliance attached to the NAT Gateway. For network firewall proxy functionality, this will be "network-firewall-proxy".
   *
   * @public
   */
  Type?: NatGatewayApplianceType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the attached appliance, identifying the specific proxy or security appliance resource.
   *
   * @public
   */
  ApplianceArn?: string | undefined;

  /**
   * The VPC endpoint ID used to route traffic from application VPCs to the proxy for inspection and filtering.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The current attachment state of the appliance.
   *
   * @public
   */
  AttachmentState?: NatGatewayApplianceState | undefined;

  /**
   * The current modification state of the appliance.
   *
   * @public
   */
  ModificationState?: NatGatewayApplianceModifyState | undefined;

  /**
   * The failure code if the appliance attachment or modification operation failed.
   *
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * A descriptive message explaining the failure if the appliance attachment or modification operation failed.
   *
   * @public
   */
  FailureMessage?: string | undefined;
}

/**
 * Reserved. If you need to sustain traffic greater than the [documented limits](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-gateways), contact Amazon Web Services Support.
 *
 * @public
 */
export interface ProvisionedBandwidth {
  /**
   * Reserved.
   *
   * @public
   */
  ProvisionTime?: Date | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Provisioned?: string | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  RequestTime?: Date | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Requested?: string | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Describes a NAT gateway.
 *
 * @public
 */
export interface NatGateway {
  /**
   * The date and time the NAT gateway was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The date and time the NAT gateway was deleted, if applicable.
   *
   * @public
   */
  DeleteTime?: Date | undefined;

  /**
   * If the NAT gateway could not be created, specifies the error code for the failure. (`InsufficientFreeAddressesInSubnet` | `Gateway.NotAttached` | `InvalidAllocationID.NotFound` | `Resource.AlreadyAssociated` | `InternalError` | `InvalidSubnetID.NotFound`)
   *
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * If the NAT gateway could not be created, specifies the error message for the failure, that corresponds to the error code.
   *
   * - For InsufficientFreeAddressesInSubnet: "Subnet has insufficient free addresses to create this NAT gateway"
   * - For Gateway.NotAttached: "Network vpc-xxxxxxxx has no Internet gateway attached"
   * - For InvalidAllocationID.NotFound: "Elastic IP address eipalloc-xxxxxxxx could not be associated with this NAT gateway"
   * - For Resource.AlreadyAssociated: "Elastic IP address eipalloc-xxxxxxxx is already associated"
   * - For InternalError: "Network interface eni-xxxxxxxx, created and used internally by this NAT gateway is in an invalid state. Please try again."
   * - For InvalidSubnetID.NotFound: "The specified subnet subnet-xxxxxxxx does not exist or could not be found."
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * Information about the IP addresses and network interface associated with the NAT gateway.
   *
   * @public
   */
  NatGatewayAddresses?: NatGatewayAddress[] | undefined;

  /**
   * The ID of the NAT gateway.
   *
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * Reserved. If you need to sustain traffic greater than the [documented limits](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-gateways), contact Amazon Web Services Support.
   *
   * @public
   */
  ProvisionedBandwidth?: ProvisionedBandwidth | undefined;

  /**
   * The state of the NAT gateway.
   *
   * - `pending`: The NAT gateway is being created and is not ready to process traffic.
   * - `failed`: The NAT gateway could not be created. Check the `failureCode` and `failureMessage` fields for the reason.
   * - `available`: The NAT gateway is able to process traffic. This status remains until you delete the NAT gateway, and does not indicate the health of the NAT gateway.
   * - `deleting`: The NAT gateway is in the process of being terminated and may still be processing traffic.
   * - `deleted`: The NAT gateway has been terminated and is no longer processing traffic.
   *
   * @public
   */
  State?: NatGatewayState | undefined;

  /**
   * The ID of the subnet in which the NAT gateway is located.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the VPC in which the NAT gateway is located.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The tags for the NAT gateway.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Indicates whether the NAT gateway supports public or private connectivity.
   *
   * @public
   */
  ConnectivityType?: ConnectivityType | undefined;

  /**
   * Indicates whether this is a zonal (single-AZ) or regional (multi-AZ) NAT gateway.
   *
   * A zonal NAT gateway is a NAT Gateway that provides redundancy and scalability within a single availability zone. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
   *
   * For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  AvailabilityMode?: AvailabilityMode | undefined;

  /**
   * For regional NAT gateways only: Indicates whether Amazon Web Services automatically allocates additional Elastic IP addresses (EIPs) in an AZ when the NAT gateway needs more ports due to increased concurrent connections to a single destination from that AZ.
   *
   * For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  AutoScalingIps?: AutoScalingIpsState | undefined;

  /**
   * For regional NAT gateways only: Indicates whether Amazon Web Services automatically manages AZ coverage. When enabled, the NAT gateway associates EIPs in all AZs where your VPC has subnets to handle outbound NAT traffic, expands to new AZs when you create subnets there, and retracts from AZs where you've removed all subnets. When disabled, you must manually manage which AZs the NAT gateway supports and their corresponding EIPs.
   *
   * A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
   *
   * For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  AutoProvisionZones?: AutoProvisionZonesState | undefined;

  /**
   * The proxy appliances attached to the NAT Gateway for filtering and inspecting traffic to prevent data exfiltration.
   *
   * @public
   */
  AttachedAppliances?: NatGatewayAttachedAppliance[] | undefined;

  /**
   * For regional NAT gateways only, this is the ID of the NAT gateway.
   *
   * @public
   */
  RouteTableId?: string | undefined;
}

/**
 * @public
 */
export interface CreateNatGatewayResult {
  /**
   * Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Information about the NAT gateway.
   *
   * @public
   */
  NatGateway?: NatGateway | undefined;
}

/**
 * @public
 */
export interface CreateNetworkAclRequest {
  /**
   * The tags to assign to the network ACL.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;
}

/**
 * Describes an association between a network ACL and a subnet.
 *
 * @public
 */
export interface NetworkAclAssociation {
  /**
   * The ID of the association between a network ACL and a subnet.
   *
   * @public
   */
  NetworkAclAssociationId?: string | undefined;

  /**
   * The ID of the network ACL.
   *
   * @public
   */
  NetworkAclId?: string | undefined;

  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * Describes the ICMP type and code.
 *
 * @public
 */
export interface IcmpTypeCode {
  /**
   * The ICMP code. A value of -1 means all codes for the specified ICMP type.
   *
   * @public
   */
  Code?: number | undefined;

  /**
   * The ICMP type. A value of -1 means all types.
   *
   * @public
   */
  Type?: number | undefined;
}

/**
 * Describes an entry in a network ACL.
 *
 * @public
 */
export interface NetworkAclEntry {
  /**
   * The IPv4 network range to allow or deny, in CIDR notation.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * Indicates whether the rule is an egress rule (applied to traffic leaving the subnet).
   *
   * @public
   */
  Egress?: boolean | undefined;

  /**
   * ICMP protocol: The ICMP type and code.
   *
   * @public
   */
  IcmpTypeCode?: IcmpTypeCode | undefined;

  /**
   * The IPv6 network range to allow or deny, in CIDR notation.
   *
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * TCP or UDP protocols: The range of ports the rule applies to.
   *
   * @public
   */
  PortRange?: PortRange | undefined;

  /**
   * The protocol number. A value of "-1" means all protocols.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * Indicates whether to allow or deny the traffic that matches the rule.
   *
   * @public
   */
  RuleAction?: RuleAction | undefined;

  /**
   * The rule number for the entry. ACL entries are processed in ascending order by rule number.
   *
   * @public
   */
  RuleNumber?: number | undefined;
}

/**
 * Describes a network ACL.
 *
 * @public
 */
export interface NetworkAcl {
  /**
   * Any associations between the network ACL and your subnets
   *
   * @public
   */
  Associations?: NetworkAclAssociation[] | undefined;

  /**
   * The entries (rules) in the network ACL.
   *
   * @public
   */
  Entries?: NetworkAclEntry[] | undefined;

  /**
   * Indicates whether this is the default network ACL for the VPC.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The ID of the network ACL.
   *
   * @public
   */
  NetworkAclId?: string | undefined;

  /**
   * Any tags assigned to the network ACL.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the VPC for the network ACL.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the network ACL.
   *
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkAclResult {
  /**
   * Information about the network ACL.
   *
   * @public
   */
  NetworkAcl?: NetworkAcl | undefined;

  /**
   * Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkAclEntryRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the network ACL.
   *
   * @public
   */
  NetworkAclId: string | undefined;

  /**
   * The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.
   *
   * Constraints: Positive integer from 1 to 32766. The range 32767 to 65535 is reserved for internal use.
   *
   * @public
   */
  RuleNumber: number | undefined;

  /**
   * The protocol number. A value of "-1" means all protocols. If you specify "-1" or a protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is allowed, regardless of any ports or ICMP types or codes that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv6 CIDR block, you must specify an ICMP type and code.
   *
   * @public
   */
  Protocol: string | undefined;

  /**
   * Indicates whether to allow or deny the traffic that matches the rule.
   *
   * @public
   */
  RuleAction: RuleAction | undefined;

  /**
   * Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet).
   *
   * @public
   */
  Egress: boolean | undefined;

  /**
   * The IPv4 network range to allow or deny, in CIDR notation (for example `172.16.0.0/24`). We modify the specified CIDR block to its canonical form; for example, if you specify `100.68.0.18/18`, we modify it to `100.68.0.0/18`.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * The IPv6 network range to allow or deny, in CIDR notation (for example `2001:db8:1234:1a00::/64`).
   *
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol 1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.
   *
   * @public
   */
  IcmpTypeCode?: IcmpTypeCode | undefined;

  /**
   * TCP or UDP protocols: The range of ports the rule applies to. Required if specifying protocol 6 (TCP) or 17 (UDP).
   *
   * @public
   */
  PortRange?: PortRange | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInsightsAccessScopeRequest {
  /**
   * The paths to match.
   *
   * @public
   */
  MatchPaths?: AccessScopePathRequest[] | undefined;

  /**
   * The paths to exclude.
   *
   * @public
   */
  ExcludePaths?: AccessScopePathRequest[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to apply.
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
 * Describes a Network Access Scope.
 *
 * @public
 */
export interface NetworkInsightsAccessScope {
  /**
   * The ID of the Network Access Scope.
   *
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Network Access Scope.
   *
   * @public
   */
  NetworkInsightsAccessScopeArn?: string | undefined;

  /**
   * The creation date.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The last updated date.
   *
   * @public
   */
  UpdatedDate?: Date | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes the Network Access Scope content.
 *
 * @public
 */
export interface NetworkInsightsAccessScopeContent {
  /**
   * The ID of the Network Access Scope.
   *
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;

  /**
   * The paths to match.
   *
   * @public
   */
  MatchPaths?: AccessScopePath[] | undefined;

  /**
   * The paths to exclude.
   *
   * @public
   */
  ExcludePaths?: AccessScopePath[] | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInsightsAccessScopeResult {
  /**
   * The Network Access Scope.
   *
   * @public
   */
  NetworkInsightsAccessScope?: NetworkInsightsAccessScope | undefined;

  /**
   * The Network Access Scope content.
   *
   * @public
   */
  NetworkInsightsAccessScopeContent?: NetworkInsightsAccessScopeContent | undefined;
}

/**
 * Describes a port range.
 *
 * @public
 */
export interface RequestFilterPortRange {
  /**
   * The first port in the range.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The last port in the range.
   *
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * Describes a set of filters for a path analysis. Use path filters to scope the analysis when there can be multiple resulting paths.
 *
 * @public
 */
export interface PathRequestFilter {
  /**
   * The source IPv4 address.
   *
   * @public
   */
  SourceAddress?: string | undefined;

  /**
   * The source port range.
   *
   * @public
   */
  SourcePortRange?: RequestFilterPortRange | undefined;

  /**
   * The destination IPv4 address.
   *
   * @public
   */
  DestinationAddress?: string | undefined;

  /**
   * The destination port range.
   *
   * @public
   */
  DestinationPortRange?: RequestFilterPortRange | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInsightsPathRequest {
  /**
   * The IP address of the source.
   *
   * @public
   */
  SourceIp?: string | undefined;

  /**
   * The IP address of the destination.
   *
   * @public
   */
  DestinationIp?: string | undefined;

  /**
   * The ID or ARN of the source. If the resource is in another account, you must specify an ARN.
   *
   * @public
   */
  Source: string | undefined;

  /**
   * The ID or ARN of the destination. If the resource is in another account, you must specify an ARN.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The protocol.
   *
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * The destination port.
   *
   * @public
   */
  DestinationPort?: number | undefined;

  /**
   * The tags to add to the path.
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
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Scopes the analysis to network paths that match specific filters at the source. If you specify this parameter, you can't specify the parameters for the source IP address or the destination port.
   *
   * @public
   */
  FilterAtSource?: PathRequestFilter | undefined;

  /**
   * Scopes the analysis to network paths that match specific filters at the destination. If you specify this parameter, you can't specify the parameter for the destination IP address.
   *
   * @public
   */
  FilterAtDestination?: PathRequestFilter | undefined;
}

/**
 * Describes a port range.
 *
 * @public
 */
export interface FilterPortRange {
  /**
   * The first port in the range.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The last port in the range.
   *
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * Describes a set of filters for a path analysis. Use path filters to scope the analysis when there can be multiple resulting paths.
 *
 * @public
 */
export interface PathFilter {
  /**
   * The source IPv4 address.
   *
   * @public
   */
  SourceAddress?: string | undefined;

  /**
   * The source port range.
   *
   * @public
   */
  SourcePortRange?: FilterPortRange | undefined;

  /**
   * The destination IPv4 address.
   *
   * @public
   */
  DestinationAddress?: string | undefined;

  /**
   * The destination port range.
   *
   * @public
   */
  DestinationPortRange?: FilterPortRange | undefined;
}

/**
 * Describes a path.
 *
 * @public
 */
export interface NetworkInsightsPath {
  /**
   * The ID of the path.
   *
   * @public
   */
  NetworkInsightsPathId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the path.
   *
   * @public
   */
  NetworkInsightsPathArn?: string | undefined;

  /**
   * The time stamp when the path was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The ID of the source.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The ID of the destination.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination.
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * The IP address of the source.
   *
   * @public
   */
  SourceIp?: string | undefined;

  /**
   * The IP address of the destination.
   *
   * @public
   */
  DestinationIp?: string | undefined;

  /**
   * The protocol.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The destination port.
   *
   * @public
   */
  DestinationPort?: number | undefined;

  /**
   * The tags associated with the path.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Scopes the analysis to network paths that match specific filters at the source.
   *
   * @public
   */
  FilterAtSource?: PathFilter | undefined;

  /**
   * Scopes the analysis to network paths that match specific filters at the destination.
   *
   * @public
   */
  FilterAtDestination?: PathFilter | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInsightsPathResult {
  /**
   * Information about the path.
   *
   * @public
   */
  NetworkInsightsPath?: NetworkInsightsPath | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInterfaceRequest {
  /**
   * The IPv4 prefixes assigned to the network interface.
   *
   * You can't specify IPv4 prefixes if you've specified one of the following: a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.
   *
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[] | undefined;

  /**
   * The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface.
   *
   * You can't specify a count of IPv4 prefixes if you've specified one of the following: specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.
   *
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * The IPv6 prefixes assigned to the network interface.
   *
   * You can't specify IPv6 prefixes if you've specified one of the following: a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.
   *
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[] | undefined;

  /**
   * The number of IPv6 prefixes that Amazon Web Services automatically assigns to the network interface.
   *
   * You can't specify a count of IPv6 prefixes if you've specified one of the following: specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.
   *
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * The type of network interface. The default is `interface`.
   *
   * If you specify `efa-only`, do not assign any IP addresses to the network interface. EFA-only network interfaces do not support IP addresses.
   *
   * The only supported values are `interface`, `efa`, `efa-only`, and `trunk`.
   *
   * @public
   */
  InterfaceType?: NetworkInterfaceCreationType | undefined;

  /**
   * The tags to apply to the new network interface.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * If you’re creating a network interface in a dual-stack or IPv6-only subnet, you have the option to assign a primary IPv6 IP address. A primary IPv6 address is an IPv6 GUA address associated with an ENI that you have enabled to use a primary IPv6 address. Use this option if the instance that this ENI will be attached to relies on its IPv6 address not changing. Amazon Web Services will automatically assign an IPv6 address associated with the ENI attached to your instance to be the primary IPv6 address. Once you enable an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. If you have multiple IPv6 addresses associated with an ENI attached to your instance and you enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI becomes the primary IPv6 address.
   *
   * @public
   */
  EnablePrimaryIpv6?: boolean | undefined;

  /**
   * A connection tracking specification for the network interface.
   *
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest | undefined;

  /**
   * Reserved for internal use.
   *
   * @public
   */
  Operator?: OperatorRequest | undefined;

  /**
   * The ID of the subnet to associate with the network interface.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * A description for the network interface.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The primary private IPv4 address of the network interface. If you don't specify an IPv4 address, Amazon EC2 selects one for you from the subnet's IPv4 CIDR range. If you specify an IP address, you cannot indicate any IP addresses specified in `privateIpAddresses` as primary (only one IP address can be designated as primary).
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * The IDs of the security groups.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * The private IPv4 addresses.
   *
   * You can't specify private IPv4 addresses if you've specified one of the following: a count of private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4 prefixes.
   *
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;

  /**
   * The number of secondary private IPv4 addresses to assign to a network interface. When you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses within the subnet's IPv4 CIDR range. You can't specify this option and specify more than one private IP address using `privateIpAddresses`.
   *
   * You can't specify a count of private IPv4 addresses if you've specified one of the following: specific private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4 prefixes.
   *
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * The IPv6 addresses from the IPv6 CIDR block range of your subnet.
   *
   * You can't specify IPv6 addresses using this parameter if you've specified one of the following: a count of IPv6 addresses, specific IPv6 prefixes, or a count of IPv6 prefixes.
   *
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range.
   *
   * You can't specify a count of IPv6 addresses using this parameter if you've specified one of the following: specific IPv6 addresses, specific IPv6 prefixes, or a count of IPv6 prefixes.
   *
   * If your subnet has the `AssignIpv6AddressOnCreation` attribute set, you can override that setting by specifying 0 as the IPv6 address count.
   *
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes association information for an Elastic IP address (IPv4 only), or a Carrier IP address (for a network interface which resides in a subnet in a Wavelength Zone).
 *
 * @public
 */
export interface NetworkInterfaceAssociation {
  /**
   * The allocation ID.
   *
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * The association ID.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The ID of the Elastic IP address owner.
   *
   * @public
   */
  IpOwnerId?: string | undefined;

  /**
   * The public DNS name.
   *
   * @public
   */
  PublicDnsName?: string | undefined;

  /**
   * The address of the Elastic IP address bound to the network interface.
   *
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * The customer-owned IP address associated with the network interface.
   *
   * @public
   */
  CustomerOwnedIp?: string | undefined;

  /**
   * The carrier IP address associated with the network interface.
   *
   * This option is only available when the network interface is in a subnet which is associated with a Wavelength Zone.
   *
   * @public
   */
  CarrierIp?: string | undefined;
}

/**
 * ENA Express is compatible with both TCP and UDP transport protocols. When it's enabled, TCP traffic automatically uses it. However, some UDP-based applications are designed to handle network packets that are out of order, without a need for retransmission, such as live video broadcasting or other near-real-time applications. For UDP traffic, you can specify whether to use ENA Express, based on your application environment needs.
 *
 * @public
 */
export interface AttachmentEnaSrdUdpSpecification {
  /**
   * Indicates whether UDP traffic to and from the instance uses ENA Express. To specify this setting, you must first enable ENA Express.
   *
   * @public
   */
  EnaSrdUdpEnabled?: boolean | undefined;
}
