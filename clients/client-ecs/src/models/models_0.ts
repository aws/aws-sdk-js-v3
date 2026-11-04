// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AcceleratorManufacturer,
  AcceleratorName,
  AcceleratorType,
  AccessType,
  AgentUpdateStatus,
  ApplicationProtocol,
  AssignPublicIp,
  AutoRepairActionsStatus,
  BareMetal,
  BurstablePerformance,
  CapacityOptionType,
  CapacityProviderField,
  CapacityProviderStatus,
  CapacityProviderType,
  CapacityProviderUpdateStatus,
  CapacityReservationPreference,
  ClusterField,
  ClusterSettingName,
  Compatibility,
  ContainerCondition,
  ContainerInstanceField,
  ContainerInstanceStatus,
  CPUArchitecture,
  CpuManufacturer,
  DaemonDeploymentRollbackMonitorsStatus,
  DaemonDeploymentStatus,
  DaemonIpcMode,
  DaemonPidMode,
  DaemonPropagateTags,
  DaemonStatus,
  DaemonTaskDefinitionRevisionFilter,
  DaemonTaskDefinitionStatus,
  DaemonTaskDefinitionStatusFilter,
  DeploymentControllerType,
  DeploymentLifecycleHookAction,
  DeploymentLifecycleHookStage,
  DeploymentLifecycleHookStatus,
  DeploymentLifecycleHookTargetType,
  DeploymentStrategy,
  DesiredStatus,
  DeviceCgroupPermission,
  EFSAuthorizationConfigIAM,
  EFSTransitEncryption,
  EnvironmentFileType,
  ExecuteCommandLogging,
  ExpressCpuArchitecture,
  ExpressGatewayServiceScalingMetric,
  ExpressGatewayServiceStatusCode,
  FirelensConfigurationType,
  GatewayAlbDesyncMitigationMode,
  GatewayAlbProtocol,
  GatewayClusterAssociationStatus,
  GatewayConnectorHealthCheckProtocol,
  GatewayElbIpAddressType,
  GatewayElbScheme,
  GatewayRouteStatus,
  GatewayStatus,
  GpuSharingMode,
  InstanceGeneration,
  InstanceHealthCheckState,
  InstanceHealthCheckType,
  IpcMode,
  LaunchType,
  LocalStorage,
  LocalStorageType,
  LogDriver,
  ManagedAgentName,
  ManagedDraining,
  ManagedInstancesMonitoringOptions,
  ManagedScalingStatus,
  ManagedTerminationProtection,
  NetworkMode,
  OSFamily,
  PidMode,
  PlacementConstraintType,
  PlacementStrategyType,
  PlatformDeviceType,
  PropagateGatewayTags,
  PropagateMITags,
  ProxyConfigurationType,
  ResourceType,
  Scope,
  ServiceConnectAccessLoggingFormat,
  ServiceConnectContainerLogLevel,
  ServiceConnectIncludeQueryParameters,
  ServiceDeploymentLifecycleStage,
  ServiceDeploymentRollbackMonitorsStatus,
  ServiceDeploymentStatus,
  ServiceRevisionCleanup,
  SettingName,
  SettingType,
  SortOrder,
  TargetType,
  TaskDefinitionFamilyStatus,
  TaskDefinitionField,
  TaskDefinitionPlacementConstraintType,
  TaskDefinitionStatus,
  ThresholdType,
  TransportProtocol,
  UlimitName,
  VersionConsistency,
} from "./enums";

/**
 * The minimum and maximum number of accelerators (such as GPUs) for instance type selection. This is used for workloads that require specific numbers of accelerators.
 *
 * @public
 */
export interface AcceleratorCountRequest {
  /**
   * The minimum number of accelerators. Instance types with fewer accelerators are excluded from selection.
   *
   * @public
   */
  min?: number | undefined;

  /**
   * The maximum number of accelerators. Instance types with more accelerators are excluded from selection.
   *
   * @public
   */
  max?: number | undefined;
}

/**
 * The minimum and maximum total accelerator memory in mebibytes (MiB) for instance type selection. This is important for GPU workloads that require specific amounts of video memory.
 *
 * @public
 */
export interface AcceleratorTotalMemoryMiBRequest {
  /**
   * The minimum total accelerator memory in MiB. Instance types with less accelerator memory are excluded from selection.
   *
   * @public
   */
  min?: number | undefined;

  /**
   * The maximum total accelerator memory in MiB. Instance types with more accelerator memory are excluded from selection.
   *
   * @public
   */
  max?: number | undefined;
}

/**
 * The advanced settings for a load balancer used in blue/green deployments. Specify the alternate target group, listener rules, and IAM role required for traffic shifting during blue/green deployments. For more information, see [Required resources for Amazon ECS blue/green deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/blue-green-deployment-implementation.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface AdvancedConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the alternate target group for Amazon ECS blue/green deployments.
   *
   * @public
   */
  alternateTargetGroupArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that that identifies the production listener rule (in the case of an Application Load Balancer) or listener (in the case for an Network Load Balancer) for routing production traffic.
   *
   * @public
   */
  productionListenerRule?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies ) that identifies the test listener rule (in the case of an Application Load Balancer) or listener (in the case for an Network Load Balancer) for routing test traffic.
   *
   * @public
   */
  testListenerRule?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon ECS permission to call the Elastic Load Balancing APIs for you.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * The managed scaling settings for the Auto Scaling group capacity provider.
 *
 * When managed scaling is turned on, Amazon ECS manages the scale-in and scale-out actions of the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an Amazon ECS managed CloudWatch metric with the specified `targetCapacity` value as the target value for the metric. For more information, see [Using managed scaling](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * If managed scaling is off, the user must manage the scaling of the Auto Scaling group.
 *
 * @public
 */
export interface ManagedScaling {
  /**
   * Determines whether to use managed scaling for the capacity provider.
   *
   * @public
   */
  status?: ManagedScalingStatus | undefined;

  /**
   * The target capacity utilization as a percentage for the capacity provider. The specified value must be greater than `0` and less than or equal to `100`. For example, if you want the capacity provider to maintain 10% spare capacity, then that means the utilization is 90%, so use a `targetCapacity` of `90`. The default value of `100` percent results in the Amazon EC2 instances in your Auto Scaling group being completely used.
   *
   * @public
   */
  targetCapacity?: number | undefined;

  /**
   * The minimum number of Amazon EC2 instances that Amazon ECS will scale out at one time. The scale in process is not affected by this parameter If this parameter is omitted, the default value of `1` is used.
   *
   * When additional capacity is required, Amazon ECS will scale up the minimum scaling step size even if the actual demand is less than the minimum scaling step size.
   *
   * @public
   */
  minimumScalingStepSize?: number | undefined;

  /**
   * The maximum number of Amazon EC2 instances that Amazon ECS will scale out at one time. If this parameter is omitted, the default value of `10000` is used.
   *
   * @public
   */
  maximumScalingStepSize?: number | undefined;

  /**
   * The period of time, in seconds, after a newly launched Amazon EC2 instance can contribute to CloudWatch metrics for Auto Scaling group. If this parameter is omitted, the default value of `300` seconds is used.
   *
   * @public
   */
  instanceWarmupPeriod?: number | undefined;
}

/**
 * The details of the Auto Scaling group for the capacity provider.
 *
 * @public
 */
export interface AutoScalingGroupProvider {
  /**
   * The Amazon Resource Name (ARN) that identifies the Auto Scaling group, or the Auto Scaling group name.
   *
   * @public
   */
  autoScalingGroupArn: string | undefined;

  /**
   * The managed scaling settings for the Auto Scaling group capacity provider.
   *
   * @public
   */
  managedScaling?: ManagedScaling | undefined;

  /**
   * The managed termination protection setting to use for the Auto Scaling group capacity provider. This determines whether the Auto Scaling group has managed termination protection. The default is off.
   *
   * > **Important:** When using managed termination protection, managed scaling must also be used otherwise managed termination protection doesn't work.
   *
   * When managed termination protection is on, Amazon ECS prevents the Amazon EC2 instances in an Auto Scaling group that contain tasks from being terminated during a scale-in action. The Auto Scaling group and each instance in the Auto Scaling group must have instance protection from scale-in actions on as well. For more information, see [Instance Protection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection) in the *Auto Scaling User Guide*.
   *
   * When managed termination protection is off, your Amazon EC2 instances aren't protected from termination when the Auto Scaling group scales in.
   *
   * @public
   */
  managedTerminationProtection?: ManagedTerminationProtection | undefined;

  /**
   * The managed draining option for the Auto Scaling group capacity provider. When you enable this, Amazon ECS manages and gracefully drains the EC2 container instances that are in the Auto Scaling group capacity provider.
   *
   * @public
   */
  managedDraining?: ManagedDraining | undefined;
}

/**
 * The auto repair configuration for an Amazon ECS Managed Instances capacity provider. When enabled, Amazon ECS automatically replaces container instances that are detected as unhealthy based on container instance health checks, including accelerated compute device and daemon health checks.
 *
 * @public
 */
export interface AutoRepairConfiguration {
  /**
   * The status of auto repair actions for the capacity provider. When set to `ENABLED`, Amazon ECS automatically replaces container instances with an `IMPAIRED` health status. When set to `DISABLED`, Amazon ECS still monitors container instance health but does not automatically replace impaired instances.
   *
   * @public
   */
  actionsStatus?: AutoRepairActionsStatus | undefined;
}

/**
 * The configuration that controls how Amazon ECS optimizes your infrastructure.
 *
 * @public
 */
export interface InfrastructureOptimization {
  /**
   * This parameter defines the number of seconds Amazon ECS Managed Instances waits before optimizing EC2 instances that have become idle or underutilized. A longer delay increases the likelihood of placing new tasks on idle or underutilized instances instances, reducing startup time. A shorter delay helps reduce infrastructure costs by optimizing idle or underutilized instances,instances more quickly.
   *
   * Valid values are:
   *
   * - `null` - Uses the default optimization behavior.
   * - `-1` - Disables automatic infrastructure optimization.
   * - A value between `0` and `3600` (inclusive) - Specifies the number of seconds to wait before optimizing instances.
   *
   * @public
   */
  scaleInAfter?: number | undefined;
}

/**
 * The Capacity Reservation configurations to be used when using the `RESERVED` capacity option type.
 *
 * @public
 */
export interface CapacityReservationRequest {
  /**
   * The ARN of the Capacity Reservation resource group in which to run the instance.
   *
   * @public
   */
  reservationGroupArn?: string | undefined;

  /**
   * The preference on when capacity reservations should be used.
   *
   * Valid values are:
   *
   * - `RESERVATIONS_ONLY` - Exclusively launch instances into capacity reservations that match the instance requirements configured for the capacity provider. If none exist, instances will fail to provision.
   * - `RESERVATIONS_FIRST` - Prefer to launch instances into a capacity reservation if any exist that match the instance requirements configured for the capacity provider. If none exist, fall back to launching instances On-Demand.
   * - `RESERVATIONS_EXCLUDED` - Avoid using capacity reservations and launch exclusively On-Demand.
   *
   * @public
   */
  reservationPreference?: CapacityReservationPreference | undefined;
}

/**
 * The minimum and maximum baseline Amazon EBS bandwidth in megabits per second (Mbps) for instance type selection. This is important for workloads with high storage I/O requirements.
 *
 * @public
 */
export interface BaselineEbsBandwidthMbpsRequest {
  /**
   * The minimum baseline Amazon EBS bandwidth in Mbps. Instance types with lower Amazon EBS bandwidth are excluded from selection.
   *
   * @public
   */
  min?: number | undefined;

  /**
   * The maximum baseline Amazon EBS bandwidth in Mbps. Instance types with higher Amazon EBS bandwidth are excluded from selection.
   *
   * @public
   */
  max?: number | undefined;
}

/**
 * The minimum and maximum amount of memory per vCPU in gibibytes (GiB). This helps ensure that instance types have the appropriate memory-to-CPU ratio for your workloads.
 *
 * @public
 */
export interface MemoryGiBPerVCpuRequest {
  /**
   * The minimum amount of memory per vCPU in GiB. Instance types with a lower memory-to-vCPU ratio are excluded from selection.
   *
   * @public
   */
  min?: number | undefined;

  /**
   * The maximum amount of memory per vCPU in GiB. Instance types with a higher memory-to-vCPU ratio are excluded from selection.
   *
   * @public
   */
  max?: number | undefined;
}

/**
 * The minimum and maximum amount of memory in mebibytes (MiB) for instance type selection. This ensures that selected instance types have adequate memory for your workloads.
 *
 * @public
 */
export interface MemoryMiBRequest {
  /**
   * The minimum amount of memory in MiB. Instance types with less memory than this value are excluded from selection.
   *
   * @public
   */
  min: number | undefined;

  /**
   * The maximum amount of memory in MiB. Instance types with more memory than this value are excluded from selection.
   *
   * @public
   */
  max?: number | undefined;
}

/**
 * The minimum and maximum network bandwidth in gigabits per second (Gbps) for instance type selection. This is important for network-intensive workloads.
 *
 * @public
 */
export interface NetworkBandwidthGbpsRequest {
  /**
   * The minimum network bandwidth in Gbps. Instance types with lower network bandwidth are excluded from selection.
   *
   * @public
   */
  min?: number | undefined;

  /**
   * The maximum network bandwidth in Gbps. Instance types with higher network bandwidth are excluded from selection.
   *
   * @public
   */
  max?: number | undefined;
}

/**
 * The minimum and maximum number of network interfaces for instance type selection. This is useful for workloads that require multiple network interfaces.
 *
 * @public
 */
export interface NetworkInterfaceCountRequest {
  /**
   * The minimum number of network interfaces. Instance types that support fewer network interfaces are excluded from selection.
   *
   * @public
   */
  min?: number | undefined;

  /**
   * The maximum number of network interfaces. Instance types that support more network interfaces are excluded from selection.
   *
   * @public
   */
  max?: number | undefined;
}

/**
 * The minimum and maximum total local storage in gigabytes (GB) for instance types with local storage. This is useful for workloads that require local storage for temporary data or caching.
 *
 * @public
 */
export interface TotalLocalStorageGBRequest {
  /**
   * The minimum total local storage in GB. Instance types with less local storage are excluded from selection.
   *
   * @public
   */
  min?: number | undefined;

  /**
   * The maximum total local storage in GB. Instance types with more local storage are excluded from selection.
   *
   * @public
   */
  max?: number | undefined;
}

/**
 * The minimum and maximum number of vCPUs for instance type selection. This allows you to specify a range of vCPU counts that meet your workload requirements.
 *
 * @public
 */
export interface VCpuCountRangeRequest {
  /**
   * The minimum number of vCPUs. Instance types with fewer vCPUs than this value are excluded from selection.
   *
   * @public
   */
  min: number | undefined;

  /**
   * The maximum number of vCPUs. Instance types with more vCPUs than this value are excluded from selection.
   *
   * @public
   */
  max?: number | undefined;
}

/**
 * The instance requirements for attribute-based instance type selection. Instead of specifying exact instance types, you define requirements such as vCPU count, memory size, network performance, and accelerator specifications. Amazon ECS automatically selects Amazon EC2 instance types that match these requirements, providing flexibility and helping to mitigate capacity constraints.
 *
 * @public
 */
export interface InstanceRequirementsRequest {
  /**
   * The minimum and maximum number of vCPUs for the instance types. Amazon ECS selects instance types that have vCPU counts within this range.
   *
   * @public
   */
  vCpuCount: VCpuCountRangeRequest | undefined;

  /**
   * The minimum and maximum amount of memory in mebibytes (MiB) for the instance types. Amazon ECS selects instance types that have memory within this range.
   *
   * @public
   */
  memoryMiB: MemoryMiBRequest | undefined;

  /**
   * The CPU manufacturers to include or exclude. You can specify `intel`, `amd`, or `amazon-web-services` to control which CPU types are used for your workloads.
   *
   * @public
   */
  cpuManufacturers?: CpuManufacturer[] | undefined;

  /**
   * The minimum and maximum amount of memory per vCPU in gibibytes (GiB). This helps ensure that instance types have the appropriate memory-to-CPU ratio for your workloads.
   *
   * @public
   */
  memoryGiBPerVCpu?: MemoryGiBPerVCpuRequest | undefined;

  /**
   * The instance types to exclude from selection. Use this to prevent Amazon ECS from selecting specific instance types that may not be suitable for your workloads.
   *
   * @public
   */
  excludedInstanceTypes?: string[] | undefined;

  /**
   * The instance generations to include. You can specify `current` to use the latest generation instances, or `previous` to include previous generation instances for cost optimization.
   *
   * @public
   */
  instanceGenerations?: InstanceGeneration[] | undefined;

  /**
   * The maximum price for Spot instances as a percentage over the lowest priced On-Demand instance. This helps control Spot instance costs while maintaining access to capacity.
   *
   * @public
   */
  spotMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * The price protection threshold for On-Demand Instances, as a percentage higher than an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from either the lowest priced current generation instance types or, failing that, the lowest priced previous generation instance types that match your attributes. When Amazon ECS selects instance types with your attributes, we will exclude instance types whose price exceeds your specified threshold.
   *
   * @public
   */
  onDemandMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * Indicates whether to include bare metal instance types. Set to `included` to allow bare metal instances, `excluded` to exclude them, or `required` to use only bare metal instances.
   *
   * @public
   */
  bareMetal?: BareMetal | undefined;

  /**
   * Indicates whether to include burstable performance instance types (T2, T3, T3a, T4g). Set to `included` to allow burstable instances, `excluded` to exclude them, or `required` to use only burstable instances.
   *
   * @public
   */
  burstablePerformance?: BurstablePerformance | undefined;

  /**
   * Indicates whether the instance types must support hibernation. When set to `true`, only instance types that support hibernation are selected.
   *
   * @public
   */
  requireHibernateSupport?: boolean | undefined;

  /**
   * The minimum and maximum number of network interfaces for the instance types. This is useful for workloads that require multiple network interfaces.
   *
   * @public
   */
  networkInterfaceCount?: NetworkInterfaceCountRequest | undefined;

  /**
   * Indicates whether to include instance types with local storage. Set to `included` to allow local storage, `excluded` to exclude it, or `required` to use only instances with local storage.
   *
   * @public
   */
  localStorage?: LocalStorage | undefined;

  /**
   * The local storage types to include. You can specify `hdd` for hard disk drives, `ssd` for solid state drives, or both.
   *
   * @public
   */
  localStorageTypes?: LocalStorageType[] | undefined;

  /**
   * The minimum and maximum total local storage in gigabytes (GB) for instance types with local storage.
   *
   * @public
   */
  totalLocalStorageGB?: TotalLocalStorageGBRequest | undefined;

  /**
   * The minimum and maximum baseline Amazon EBS bandwidth in megabits per second (Mbps). This is important for workloads with high storage I/O requirements.
   *
   * @public
   */
  baselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest | undefined;

  /**
   * The accelerator types to include. You can specify `gpu` for graphics processing units, `fpga` for field programmable gate arrays, or `inference` for machine learning inference accelerators.
   *
   * @public
   */
  acceleratorTypes?: AcceleratorType[] | undefined;

  /**
   * The minimum and maximum number of accelerators for the instance types. This is used when you need instances with specific numbers of GPUs or other accelerators.
   *
   * @public
   */
  acceleratorCount?: AcceleratorCountRequest | undefined;

  /**
   * The accelerator manufacturers to include. You can specify `nvidia`, `amd`, `amazon-web-services`, or `xilinx` depending on your accelerator requirements.
   *
   * @public
   */
  acceleratorManufacturers?: AcceleratorManufacturer[] | undefined;

  /**
   * The specific accelerator names to include. For example, you can specify `a100`, `v100`, `k80`, or other specific accelerator models.
   *
   * @public
   */
  acceleratorNames?: AcceleratorName[] | undefined;

  /**
   * The minimum and maximum total accelerator memory in mebibytes (MiB). This is important for GPU workloads that require specific amounts of video memory.
   *
   * @public
   */
  acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest | undefined;

  /**
   * The minimum and maximum network bandwidth in gigabits per second (Gbps). This is crucial for network-intensive workloads that require high throughput.
   *
   * @public
   */
  networkBandwidthGbps?: NetworkBandwidthGbpsRequest | undefined;

  /**
   * The instance types to include in the selection. When specified, Amazon ECS only considers these instance types, subject to the other requirements specified.
   *
   * @public
   */
  allowedInstanceTypes?: string[] | undefined;

  /**
   * The maximum price for Spot instances as a percentage of the optimal On-Demand price. This provides more precise cost control for Spot instance selection.
   *
   * @public
   */
  maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number | undefined;
}

/**
 * The local storage configuration for Amazon ECS Managed Instances. This defines how ECS uses and configures instance store volumes available on container instance.
 *
 * @public
 */
export interface ManagedInstancesLocalStorageConfiguration {
  /**
   * Use instance store volumes for data storage when available. EBS volumes are not provisioned for data storage. If the container instance has multiple instance store volumes, a single data volume is created. Consider defining instance store requirements using the `localStorage`, `localStorageTypes` and `totalLocalStorageGB` properties.
   *
   * @public
   */
  useLocalStorage?: boolean | undefined;
}

/**
 * The network configuration for Amazon ECS Managed Instances. This specifies the VPC subnets and security groups that instances use for network connectivity. Amazon ECS Managed Instances support multiple network modes including `awsvpc` (instances receive ENIs for task isolation), `host` (instances share network namespace with tasks), and `none` (no external network connectivity), ensuring backward compatibility for migrating workloads from Fargate or Amazon EC2.
 *
 * @public
 */
export interface ManagedInstancesNetworkConfiguration {
  /**
   * The list of subnet IDs where Amazon ECS can launch Amazon ECS Managed Instances. Instances are distributed across the specified subnets for high availability. All subnets must be in the same VPC.
   *
   * @public
   */
  subnets?: string[] | undefined;

  /**
   * The list of security group IDs to apply to Amazon ECS Managed Instances. These security groups control the network traffic allowed to and from the instances.
   *
   * @public
   */
  securityGroups?: string[] | undefined;
}

/**
 * The storage configuration for Amazon ECS Managed Instances. This defines the data volume configuration for the instances.
 *
 * @public
 */
export interface ManagedInstancesStorageConfiguration {
  /**
   * The size of the data volume.
   *
   * @public
   */
  storageSizeGiB?: number | undefined;
}

/**
 * The launch template configuration for Amazon ECS Managed Instances. This defines how Amazon ECS launches Amazon EC2 instances, including the instance profile for your tasks, network and storage configuration, capacity options, and instance requirements for flexible instance type selection.
 *
 * @public
 */
export interface InstanceLaunchTemplate {
  /**
   * The Amazon Resource Name (ARN) of the instance profile that Amazon ECS applies to Amazon ECS Managed Instances. This instance profile must include the necessary permissions for your tasks to access Amazon Web Services services and resources.
   *
   * For more information, see [Amazon ECS instance profile for Managed Instances](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/managed-instances-instance-profile.html) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  ec2InstanceProfileArn: string | undefined;

  /**
   * The network configuration for Amazon ECS Managed Instances. This specifies the subnets and security groups that instances use for network connectivity.
   *
   * @public
   */
  networkConfiguration: ManagedInstancesNetworkConfiguration | undefined;

  /**
   * The storage configuration for Amazon ECS Managed Instances. This defines the data volume properties for the instances.
   *
   * @public
   */
  storageConfiguration?: ManagedInstancesStorageConfiguration | undefined;

  /**
   * The local storage configuration for Amazon ECS Managed Instances. This defines how ECS uses instance store volumes available on the container instance.
   *
   * @public
   */
  localStorageConfiguration?: ManagedInstancesLocalStorageConfiguration | undefined;

  /**
   * CloudWatch provides two categories of monitoring: basic monitoring and detailed monitoring. By default, your managed instance is configured for basic monitoring. You can optionally enable detailed monitoring to help you more quickly identify and act on operational issues. You can enable or turn off detailed monitoring at launch or when the managed instance is running or stopped. For more information, see [Detailed monitoring for Amazon ECS Managed Instances](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/detailed-monitoring-managed-instances.html) in the Amazon ECS Developer Guide.
   *
   * @public
   */
  monitoring?: ManagedInstancesMonitoringOptions | undefined;

  /**
   * The capacity option type. This determines whether Amazon ECS launches On-Demand, Spot or Capacity Reservation Instances for your managed instance capacity provider.
   *
   * Valid values are:
   *
   * - `ON_DEMAND` - Launches standard On-Demand Instances. On-Demand Instances provide predictable pricing and availability.
   * - `SPOT` - Launches Spot Instances that use spare Amazon EC2 capacity at reduced cost. Spot Instances can be interrupted by Amazon EC2 with a two-minute notification when the capacity is needed back.
   * - `RESERVED` - Launches Instances using Amazon EC2 Capacity Reservations. Capacity Reservations allow you to reserve compute capacity for Amazon EC2 instances in a specific Availability Zone.
   *
   * The default is On-Demand
   *
   * For more information about Amazon EC2 capacity options, see [Instance purchasing options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  capacityOptionType?: CapacityOptionType | undefined;

  /**
   * Determines whether tags are propagated to the instance metadata service (IMDS) for Amazon EC2 instances launched by the Managed Instances capacity provider. When enabled, all tags associated with the instance are available through the instance metadata service. When disabled, tags are not propagated to IMDS.
   *
   * Disable this setting if your tags contain characters that are not compatible with IMDS, such as `/`. IMDS requires tag keys to match the pattern `[0-9a-zA-Z\-_+=,.@:]\{1,255\}`.
   *
   * The default value is `true`.
   *
   * For more information, see [Work with instance tags in instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  instanceMetadataTagsPropagation?: boolean | undefined;

  /**
   * The instance requirements. You can specify:
   *
   * - The instance types
   * - Instance requirements such as vCPU count, memory, network performance, and accelerator specifications
   *
   * Amazon ECS automatically selects the instances that match the specified criteria.
   *
   * @public
   */
  instanceRequirements?: InstanceRequirementsRequest | undefined;

  /**
   * Determines whether to enable FIPS 140-2 validated cryptographic modules on EC2 instances launched by the capacity provider. If `true`, instances use FIPS-compliant cryptographic algorithms and modules for enhanced security compliance. If `false`, instances use standard cryptographic implementations.
   *
   * If not specified, instances are launched with FIPS enabled in Amazon Web Services GovCloud (US) regions and FIPS disabled in other regions.
   *
   * @public
   */
  fipsEnabled?: boolean | undefined;

  /**
   * Capacity reservation specifications. You can specify:
   *
   * - Capacity reservation preference
   * - Reservation resource group to be used for targeted capacity reservations
   *
   * Amazon ECS will launch instances according to the specified criteria.
   *
   * @public
   */
  capacityReservations?: CapacityReservationRequest | undefined;
}

/**
 * The configuration for creating a Amazon ECS Managed Instances provider. This specifies how Amazon ECS should manage Amazon EC2 instances, including the infrastructure role, instance launch template, and whether to propagate tags from the capacity provider to the instances.
 *
 * @public
 */
export interface CreateManagedInstancesProviderConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the infrastructure role that Amazon ECS uses to manage instances on your behalf. This role must have permissions to launch, terminate, and manage Amazon EC2 instances, as well as access to other Amazon Web Services services required for Amazon ECS Managed Instances functionality.
   *
   * For more information, see [Amazon ECS infrastructure IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  infrastructureRoleArn: string | undefined;

  /**
   * The launch template configuration that specifies how Amazon ECS should launch Amazon EC2 instances. This includes the instance profile, network configuration, storage settings, and instance requirements for attribute-based instance type selection.
   *
   * For more information, see [Store instance launch parameters in Amazon EC2 launch templates](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  instanceLaunchTemplate: InstanceLaunchTemplate | undefined;

  /**
   * Specifies whether to propagate tags from the capacity provider to the Amazon ECS Managed Instances. When enabled, tags applied to the capacity provider are automatically applied to all instances launched by this provider.
   *
   * @public
   */
  propagateTags?: PropagateMITags | undefined;

  /**
   * Defines how Amazon ECS Managed Instances optimizes the infrastastructure in your capacity provider. Provides control over the delay between when EC2 instances become idle or underutilized and when Amazon ECS optimizes them.
   *
   * @public
   */
  infrastructureOptimization?: InfrastructureOptimization | undefined;

  /**
   * The auto repair configuration for the Amazon ECS Managed Instances capacity provider. Use this to enable or disable automatic replacement of container instances that are detected as unhealthy.
   *
   * @public
   */
  autoRepairConfiguration?: AutoRepairConfiguration | undefined;
}

/**
 * The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them.
 *
 * The following basic restrictions apply to tags:
 *
 * - Maximum number of tags per resource - 50
 * - For each resource, each tag key must be unique, and each tag key can have only one value.
 * - Maximum key length - 128 Unicode characters in UTF-8
 * - Maximum value length - 256 Unicode characters in UTF-8
 * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
 * - Tag keys and values are case-sensitive.
 * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
 *
 * @public
 */
export interface Tag {
  /**
   * One part of a key-value pair that make up a tag. A `key` is a general label that acts like a category for more specific tag values.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The optional part of a key-value pair that make up a tag. A `value` acts as a descriptor within a tag category (key).
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateCapacityProviderRequest {
  /**
   * The name of the capacity provider. Up to 255 characters are allowed. They include letters (both upper and lowercase letters), numbers, underscores (_), and hyphens (-). The name can't be prefixed with "`aws`", "`ecs`", or "`fargate`".
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the cluster to associate with the capacity provider. When you create a capacity provider with Amazon ECS Managed Instances, it becomes available only within the specified cluster.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The details of the Auto Scaling group for the capacity provider.
   *
   * @public
   */
  autoScalingGroupProvider?: AutoScalingGroupProvider | undefined;

  /**
   * The configuration for the Amazon ECS Managed Instances provider. This configuration specifies how Amazon ECS manages Amazon EC2 instances on your behalf, including the infrastructure role, instance launch template, and tag propagation settings.
   *
   * @public
   */
  managedInstancesProvider?: CreateManagedInstancesProviderConfiguration | undefined;

  /**
   * The metadata that you apply to the capacity provider to categorize and organize them more conveniently. Each tag consists of a key and an optional value. You define both of them.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * The configuration for a Amazon ECS Managed Instances provider. Amazon ECS uses this configuration to automatically launch, manage, and terminate Amazon EC2 instances on your behalf. Managed instances provide access to the full range of Amazon EC2 instance types and features while offloading infrastructure management to Amazon Web Services.
 *
 * @public
 */
export interface ManagedInstancesProvider {
  /**
   * The Amazon Resource Name (ARN) of the infrastructure role that Amazon ECS assumes to manage instances. This role must include permissions for Amazon EC2 instance lifecycle management, networking, and any additional Amazon Web Services services required for your workloads.
   *
   * For more information, see [Amazon ECS infrastructure IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  infrastructureRoleArn?: string | undefined;

  /**
   * The launch template that defines how Amazon ECS launches Amazon ECS Managed Instances. This includes the instance profile for your tasks, network and storage configuration, and instance requirements that determine which Amazon EC2 instance types can be used.
   *
   * For more information, see [Store instance launch parameters in Amazon EC2 launch templates](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  instanceLaunchTemplate?: InstanceLaunchTemplate | undefined;

  /**
   * Determines whether tags from the capacity provider are automatically applied to Amazon ECS Managed Instances. This helps with cost allocation and resource management by ensuring consistent tagging across your infrastructure.
   *
   * @public
   */
  propagateTags?: PropagateMITags | undefined;

  /**
   * Defines how Amazon ECS Managed Instances optimizes the infrastastructure in your capacity provider. Configure it to turn on or off the infrastructure optimization in your capacity provider, and to control the idle or underutilized EC2 instances optimization delay.
   *
   * @public
   */
  infrastructureOptimization?: InfrastructureOptimization | undefined;

  /**
   * The auto repair configuration for the Amazon ECS Managed Instances capacity provider. Indicates whether Amazon ECS automatically replaces container instances that are detected as unhealthy.
   *
   * @public
   */
  autoRepairConfiguration?: AutoRepairConfiguration | undefined;
}

/**
 * The details for a capacity provider.
 *
 * @public
 */
export interface CapacityProvider {
  /**
   * The Amazon Resource Name (ARN) that identifies the capacity provider.
   *
   * @public
   */
  capacityProviderArn?: string | undefined;

  /**
   * The name of the capacity provider.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The cluster that this capacity provider is associated with. Managed instances capacity providers are cluster-scoped, meaning they can only be used within their associated cluster.
   *
   * This is required for Managed instances.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The current status of the capacity provider. Only capacity providers in an `ACTIVE` state can be used in a cluster. When a capacity provider is successfully deleted, it has an `INACTIVE` status.
   *
   * @public
   */
  status?: CapacityProviderStatus | undefined;

  /**
   * The Auto Scaling group settings for the capacity provider.
   *
   * @public
   */
  autoScalingGroupProvider?: AutoScalingGroupProvider | undefined;

  /**
   * The configuration for the Amazon ECS Managed Instances provider. This includes the infrastructure role, the launch template configuration, and tag propagation settings.
   *
   * @public
   */
  managedInstancesProvider?: ManagedInstancesProvider | undefined;

  /**
   * The update status of the capacity provider. The following are the possible states that is returned.
   *
   * - **DELETE_IN_PROGRESS**
   *
   *   The capacity provider is in the process of being deleted.
   *
   * - **DELETE_COMPLETE**
   *
   *   The capacity provider was successfully deleted and has an `INACTIVE` status.
   *
   * - **DELETE_FAILED**
   *
   *   The capacity provider can't be deleted. The update status reason provides further details about why the delete failed.
   *
   * @public
   */
  updateStatus?: CapacityProviderUpdateStatus | undefined;

  /**
   * The update status reason. This provides further details about the update status for the capacity provider.
   *
   * @public
   */
  updateStatusReason?: string | undefined;

  /**
   * The metadata that you apply to the capacity provider to help you categorize and organize it. Each tag consists of a key and an optional value. You define both.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The type of capacity provider. For Amazon ECS Managed Instances, this value is `MANAGED_INSTANCES`, indicating that Amazon ECS manages the underlying Amazon EC2 instances on your behalf.
   *
   * @public
   */
  type?: CapacityProviderType | undefined;
}

/**
 * @public
 */
export interface CreateCapacityProviderResponse {
  /**
   * The full description of the new capacity provider.
   *
   * @public
   */
  capacityProvider?: CapacityProvider | undefined;
}

/**
 * @public
 */
export interface DeleteCapacityProviderRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the capacity provider to delete.
   *
   * @public
   */
  capacityProvider: string | undefined;

  /**
   * The name of the cluster that contains the capacity provider to delete. Managed instances capacity providers are cluster-scoped and can only be deleted from their associated cluster.
   *
   * @public
   */
  cluster?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCapacityProviderResponse {
  /**
   * The details of the capacity provider.
   *
   * @public
   */
  capacityProvider?: CapacityProvider | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityProvidersRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of one or more capacity providers. Up to `100` capacity providers can be described in an action.
   *
   * @public
   */
  capacityProviders?: string[] | undefined;

  /**
   * The name of the cluster to describe capacity providers for. When specified, only capacity providers associated with this cluster are returned, including Amazon ECS Managed Instances capacity providers.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * Specifies whether or not you want to see the resource tags for the capacity provider. If `TAGS` is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response.
   *
   * @public
   */
  include?: CapacityProviderField[] | undefined;

  /**
   * The maximum number of account setting results returned by `DescribeCapacityProviders` in paginated output. When this parameter is used, `DescribeCapacityProviders` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `DescribeCapacityProviders` request with the returned `nextToken` value. This value can be between 1 and 10. If this parameter is not used, then `DescribeCapacityProviders` returns up to 10 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `DescribeCapacityProviders` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A failed resource. For a list of common causes, see [API failure reasons](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface Failure {
  /**
   * The Amazon Resource Name (ARN) of the failed resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The reason for the failure.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The details of the failure.
   *
   * @public
   */
  detail?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityProvidersResponse {
  /**
   * The list of capacity providers.
   *
   * @public
   */
  capacityProviders?: CapacityProvider[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: Failure[] | undefined;

  /**
   * The `nextToken` value to include in a future `DescribeCapacityProviders` request. When the results of a `DescribeCapacityProviders` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The details of the Auto Scaling group capacity provider to update.
 *
 * @public
 */
export interface AutoScalingGroupProviderUpdate {
  /**
   * The managed scaling settings for the Auto Scaling group capacity provider.
   *
   * @public
   */
  managedScaling?: ManagedScaling | undefined;

  /**
   * The managed termination protection setting to use for the Auto Scaling group capacity provider. This determines whether the Auto Scaling group has managed termination protection.
   *
   * > **Important:** When using managed termination protection, managed scaling must also be used otherwise managed termination protection doesn't work.
   *
   * When managed termination protection is on, Amazon ECS prevents the Amazon EC2 instances in an Auto Scaling group that contain tasks from being terminated during a scale-in action. The Auto Scaling group and each instance in the Auto Scaling group must have instance protection from scale-in actions on. For more information, see [Instance Protection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection) in the *Auto Scaling User Guide*.
   *
   * When managed termination protection is off, your Amazon EC2 instances aren't protected from termination when the Auto Scaling group scales in.
   *
   * @public
   */
  managedTerminationProtection?: ManagedTerminationProtection | undefined;

  /**
   * The managed draining option for the Auto Scaling group capacity provider. When you enable this, Amazon ECS manages and gracefully drains the EC2 container instances that are in the Auto Scaling group capacity provider.
   *
   * @public
   */
  managedDraining?: ManagedDraining | undefined;
}

/**
 * The updated launch template configuration for Amazon ECS Managed Instances. You can modify the instance profile, network configuration, storage settings, and instance requirements. Changes apply to new instances launched after the update.
 *
 * For more information, see [Store instance launch parameters in Amazon EC2 launch templates](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface InstanceLaunchTemplateUpdate {
  /**
   * The updated Amazon Resource Name (ARN) of the instance profile. The new instance profile must have the necessary permissions for your tasks.
   *
   * For more information, see [Amazon ECS instance profile for Managed Instances](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/managed-instances-instance-profile.html) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  ec2InstanceProfileArn?: string | undefined;

  /**
   * The updated network configuration for Amazon ECS Managed Instances. Changes to subnets and security groups affect new instances launched after the update.
   *
   * @public
   */
  networkConfiguration?: ManagedInstancesNetworkConfiguration | undefined;

  /**
   * The updated storage configuration for Amazon ECS Managed Instances. Changes to storage settings apply to new instances launched after the update.
   *
   * @public
   */
  storageConfiguration?: ManagedInstancesStorageConfiguration | undefined;

  /**
   * Determines whether tags are propagated to the instance metadata service (IMDS) for Amazon EC2 instances launched by the Managed Instances capacity provider. When enabled, all tags associated with the instance are available through the instance metadata service. When disabled, tags are not propagated to IMDS.
   *
   * Disable this setting if your tags contain characters that are not compatible with IMDS, such as `/`. IMDS requires tag keys to match the pattern `[0-9a-zA-Z\-_+=,.@:]\{1,255\}`.
   *
   * The default value is `true`.
   *
   * For more information, see [Work with instance tags in instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  instanceMetadataTagsPropagation?: boolean | undefined;

  /**
   * The updated local storage configuration for Amazon ECS Managed Instances. Changes to local storage settings apply to new instances launched after the update.
   *
   * @public
   */
  localStorageConfiguration?: ManagedInstancesLocalStorageConfiguration | undefined;

  /**
   * CloudWatch provides two categories of monitoring: basic monitoring and detailed monitoring. By default, your managed instance is configured for basic monitoring. You can optionally enable detailed monitoring to help you more quickly identify and act on operational issues. You can enable or turn off detailed monitoring at launch or when the managed instance is running or stopped. For more information, see [Detailed monitoring for Amazon ECS Managed Instances](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/detailed-monitoring-managed-instances.html) in the Amazon ECS Developer Guide.
   *
   * @public
   */
  monitoring?: ManagedInstancesMonitoringOptions | undefined;

  /**
   * The updated instance requirements for attribute-based instance type selection. Changes to instance requirements affect which instance types Amazon ECS selects for new instances.
   *
   * @public
   */
  instanceRequirements?: InstanceRequirementsRequest | undefined;

  /**
   * The updated capacity reservations specifications for Amazon ECS Managed Instances. Changes to capacity reservations settings apply to new instances launched after the update.
   *
   * @public
   */
  capacityReservations?: CapacityReservationRequest | undefined;
}

/**
 * The updated configuration for a Amazon ECS Managed Instances provider. You can modify the infrastructure role, instance launch template, and tag propagation settings. Changes apply to new instances launched after the update.
 *
 * @public
 */
export interface UpdateManagedInstancesProviderConfiguration {
  /**
   * The updated Amazon Resource Name (ARN) of the infrastructure role. The new role must have the necessary permissions to manage instances and access required Amazon Web Services services.
   *
   * For more information, see [Amazon ECS infrastructure IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  infrastructureRoleArn: string | undefined;

  /**
   * The updated launch template configuration. Changes to the launch template affect new instances launched after the update, while existing instances continue to use their original configuration.
   *
   * @public
   */
  instanceLaunchTemplate: InstanceLaunchTemplateUpdate | undefined;

  /**
   * The updated tag propagation setting. When changed, this affects only new instances launched after the update.
   *
   * @public
   */
  propagateTags?: PropagateMITags | undefined;

  /**
   * The updated infrastructure optimization configuration. Changes to this setting affect how Amazon ECS optimizes instances going forward.
   *
   * @public
   */
  infrastructureOptimization?: InfrastructureOptimization | undefined;

  /**
   * The updated auto repair configuration for the Amazon ECS Managed Instances capacity provider.
   *
   * @public
   */
  autoRepairConfiguration?: AutoRepairConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityProviderRequest {
  /**
   * The name of the capacity provider to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the cluster that contains the capacity provider to update. Managed instances capacity providers are cluster-scoped and can only be updated within their associated cluster.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * An object that represent the parameters to update for the Auto Scaling group capacity provider.
   *
   * @public
   */
  autoScalingGroupProvider?: AutoScalingGroupProviderUpdate | undefined;

  /**
   * The updated configuration for the Amazon ECS Managed Instances provider. You can modify the infrastructure role, instance launch template, and tag propagation settings. Changes take effect for new instances launched after the update.
   *
   * @public
   */
  managedInstancesProvider?: UpdateManagedInstancesProviderConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityProviderResponse {
  /**
   * Details about the capacity provider.
   *
   * @public
   */
  capacityProvider?: CapacityProvider | undefined;
}

/**
 * The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket.
 *
 * @public
 */
export interface ExecuteCommandLogConfiguration {
  /**
   * The name of the CloudWatch log group to send logs to.
   *
   * > **Note:** The CloudWatch log group must already be created.
   *
   * @public
   */
  cloudWatchLogGroupName?: string | undefined;

  /**
   * Determines whether to use encryption on the CloudWatch logs. If not specified, encryption will be off.
   *
   * @public
   */
  cloudWatchEncryptionEnabled?: boolean | undefined;

  /**
   * The name of the S3 bucket to send logs to.
   *
   * > **Note:** The S3 bucket must already be created.
   *
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * Determines whether to use encryption on the S3 logs. If not specified, encryption is not used.
   *
   * @public
   */
  s3EncryptionEnabled?: boolean | undefined;

  /**
   * An optional folder in the S3 bucket to place logs in.
   *
   * @public
   */
  s3KeyPrefix?: string | undefined;
}

/**
 * The details of the execute command configuration.
 *
 * @public
 */
export interface ExecuteCommandConfiguration {
  /**
   * Specify an Key Management Service key ID to encrypt the data between the local client and the container.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The log setting to use for redirecting logs for your execute command results. The following log settings are available.
   *
   * - `NONE`: The execute command session is not logged.
   * - `DEFAULT`: The `awslogs` configuration in the task definition is used. If no logging parameter is specified, it defaults to this value. If no `awslogs` log driver is configured in the task definition, the output won't be logged.
   * - `OVERRIDE`: Specify the logging details as a part of `logConfiguration`. If the `OVERRIDE` logging option is specified, the `logConfiguration` is required.
   *
   * @public
   */
  logging?: ExecuteCommandLogging | undefined;

  /**
   * The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket. When `logging=OVERRIDE` is specified, a `logConfiguration` must be provided.
   *
   * @public
   */
  logConfiguration?: ExecuteCommandLogConfiguration | undefined;
}

/**
 * The managed storage configuration for the cluster.
 *
 * @public
 */
export interface ManagedStorageConfiguration {
  /**
   * Specify a Key Management Service key ID to encrypt Amazon ECS managed storage.
   *
   * When you specify a `kmsKeyId`, Amazon ECS uses the key to encrypt data volumes managed by Amazon ECS that are attached to tasks in the cluster. The following data volumes are managed by Amazon ECS: Amazon EBS. For more information about encryption of Amazon EBS volumes attached to Amazon ECS tasks, see [Encrypt data stored in Amazon EBS volumes for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * The key must be a single Region key.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Specify the Key Management Service key ID for Fargate ephemeral storage.
   *
   * When you specify a `fargateEphemeralStorageKmsKeyId`, Amazon Web Services Fargate uses the key to encrypt data at rest in ephemeral storage. For more information about Fargate ephemeral storage encryption, see [Customer managed keys for Amazon Web Services Fargate ephemeral storage for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-storage-encryption.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * The key must be a single Region key.
   *
   * @public
   */
  fargateEphemeralStorageKmsKeyId?: string | undefined;
}

/**
 * The execute command and managed storage configuration for the cluster.
 *
 * @public
 */
export interface ClusterConfiguration {
  /**
   * The details of the execute command configuration.
   *
   * @public
   */
  executeCommandConfiguration?: ExecuteCommandConfiguration | undefined;

  /**
   * The details of the managed storage configuration.
   *
   * @public
   */
  managedStorageConfiguration?: ManagedStorageConfiguration | undefined;
}

/**
 * The details of a capacity provider strategy. A capacity provider strategy can be set when using the [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html)or [CreateCluster](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCluster.html) APIs or as the default capacity provider strategy for a cluster with the `CreateCluster` API.
 *
 * Only capacity providers that are already associated with a cluster and have an `ACTIVE` or `UPDATING` status can be used in a capacity provider strategy. The [PutClusterCapacityProviders](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html) API is used to associate a capacity provider with a cluster.
 *
 * If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New Auto Scaling group capacity providers can be created with the [CreateClusterCapacityProvider](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateClusterCapacityProvider.html) API operation.
 *
 * To use a Fargate capacity provider, specify either the `FARGATE` or `FARGATE_SPOT` capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used in a capacity provider strategy.
 *
 * With `FARGATE_SPOT`, you can run interruption tolerant tasks at a rate that's discounted compared to the `FARGATE` price. `FARGATE_SPOT` runs tasks on spare compute capacity. When Amazon Web Services needs the capacity back, your tasks are interrupted with a two-minute warning. `FARGATE_SPOT` supports Linux tasks with the X86_64 architecture on platform version 1.3.0 or later. `FARGATE_SPOT` supports Linux tasks with the ARM64 architecture on platform version 1.4.0 or later.
 *
 * A capacity provider strategy can contain a maximum of 20 capacity providers.
 *
 * @public
 */
export interface CapacityProviderStrategyItem {
  /**
   * The short name of the capacity provider.
   *
   * @public
   */
  capacityProvider: string | undefined;

  /**
   * The *weight* value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The `weight` value is taken into consideration after the `base` value, if defined, is satisfied.
   *
   * If no `weight` value is specified, the default value of `0` is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of `0` can't be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of `0`, any `RunTask` or `CreateService` actions using the capacity provider strategy will fail.
   *
   * Weight value characteristics:
   *
   * - Weight is considered after the base value is satisfied
   * - The default value is `0` if not specified
   * - The valid range is 0 to 1,000
   * - At least one capacity provider must have a weight greater than zero
   * - Capacity providers with weight of `0` cannot place tasks
   *
   * Task distribution logic:
   *
   * 1. Base satisfaction: The minimum number of tasks specified by the base value are placed on that capacity provider
   * 2. Weight distribution: After base requirements are met, additional tasks are distributed according to weight ratios
   *
   * Examples:
   *
   * Equal Distribution: Two capacity providers both with weight `1` will split tasks evenly after base requirements are met.
   *
   * Weighted Distribution: If capacityProviderA has weight `1` and capacityProviderB has weight `4`, then for every 1 task on A, 4 tasks will run on B.
   *
   * @public
   */
  weight?: number | undefined;

  /**
   * The *base* value designates how many tasks, at a minimum, to run on the specified capacity provider for each service. Only one capacity provider in a capacity provider strategy can have a *base* defined. If no value is specified, the default value of `0` is used.
   *
   * Base value characteristics:
   *
   * - Only one capacity provider in a strategy can have a base defined
   * - The default value is `0` if not specified
   * - The valid range is 0 to 100,000
   * - Base requirements are satisfied first before weight distribution
   *
   * @public
   */
  base?: number | undefined;
}

/**
 * Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the `enabled` parameter to `true` in the `ServiceConnectConfiguration`. You can set the namespace of each service individually in the `ServiceConnectConfiguration` to override this default parameter.
 *
 * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface ClusterServiceConnectDefaultsRequest {
  /**
   * The namespace name or full Amazon Resource Name (ARN) of the Cloud Map namespace that's used when you create a service and don't specify a Service Connect configuration. The namespace name can include up to 1024 characters. The name is case-sensitive. The name can't include greater than (&gt;), less than (&lt;), double quotation marks ("), or slash (/).
   *
   * If you enter an existing namespace name or ARN, then that namespace will be used. Any namespace type is supported. The namespace must be in this account and this Amazon Web Services Region.
   *
   * If you enter a new name, a Cloud Map namespace will be created. Amazon ECS creates a Cloud Map namespace with the "API calls" method of instance discovery only. This instance discovery method is the "HTTP" namespace type in the Command Line Interface. Other types of instance discovery aren't used by Service Connect.
   *
   * If you update the cluster with an empty string `""` for the namespace name, the cluster configuration for Service Connect is removed. Note that the namespace will remain in Cloud Map and must be deleted separately.
   *
   * For more information about Cloud Map, see [Working with Services](https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html) in the *Cloud Map Developer Guide*.
   *
   * @public
   */
  namespace: string | undefined;
}

/**
 * The settings to use when creating a cluster. This parameter is used to turn on CloudWatch Container Insights with enhanced observability or CloudWatch Container Insights for a cluster.
 *
 * Container Insights with enhanced observability provides all the Container Insights metrics, plus additional task and container metrics. This version supports enhanced observability for Amazon ECS clusters using the Amazon EC2 and Fargate launch types. After you configure Container Insights with enhanced observability on Amazon ECS, Container Insights auto-collects detailed infrastructure telemetry from the cluster level down to the container level in your environment and displays these critical performance data in curated dashboards removing the heavy lifting in observability set-up.
 *
 * For more information, see [Monitor Amazon ECS containers using Container Insights with enhanced observability](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface ClusterSetting {
  /**
   * The name of the cluster setting. The value is `containerInsights`.
   *
   * @public
   */
  name?: ClusterSettingName | undefined;

  /**
   * The value to set for the cluster setting. The supported values are `enhanced`, `enabled`, and `disabled`.
   *
   * To use Container Insights with enhanced observability, set the `containerInsights` account setting to `enhanced`.
   *
   * To use Container Insights, set the `containerInsights` account setting to `enabled`.
   *
   * If a cluster value is specified, it will override the `containerInsights` value set with [PutAccountSetting](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html) or [PutAccountSettingDefault](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html).
   *
   * @public
   */
  value?: string | undefined;
}

/**
 *
 * @public
 */
export interface CreateClusterRequest {
  /**
   * The name of your cluster. If you don't specify a name for your cluster, you create a cluster that's named `default`. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value. You define both.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The setting to use when creating a cluster. This parameter is used to turn on CloudWatch Container Insights for a cluster. If this value is specified, it overrides the `containerInsights` value set with [PutAccountSetting](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html) or [PutAccountSettingDefault](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html).
   *
   * @public
   */
  settings?: ClusterSetting[] | undefined;

  /**
   * The `execute` command configuration for the cluster.
   *
   * @public
   */
  configuration?: ClusterConfiguration | undefined;

  /**
   * The short name of one or more capacity providers to associate with the cluster. A capacity provider must be associated with a cluster before it can be included as part of the default capacity provider strategy of the cluster or used in a capacity provider strategy when calling the [CreateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html) or [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) actions.
   *
   * If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must be created but not associated with another cluster. New Auto Scaling group capacity providers can be created with the [CreateCapacityProvider](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html) API operation.
   *
   * To use a Fargate capacity provider, specify either the `FARGATE` or `FARGATE_SPOT` capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used.
   *
   * The [PutCapacityProvider](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutCapacityProvider.html) API operation is used to update the list of available capacity providers for a cluster after the cluster is created.
   *
   * @public
   */
  capacityProviders?: string[] | undefined;

  /**
   * The capacity provider strategy to set as the default for the cluster. After a default capacity provider strategy is set for a cluster, when you call the [CreateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html) or [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) APIs with no capacity provider strategy or launch type specified, the default capacity provider strategy for the cluster is used.
   *
   * If a default capacity provider strategy isn't defined for a cluster when it was created, it can be defined later with the [PutClusterCapacityProviders](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html) API operation.
   *
   * @public
   */
  defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the `enabled` parameter to `true` in the `ServiceConnectConfiguration`. You can set the namespace of each service individually in the `ServiceConnectConfiguration` to override this default parameter.
   *
   * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  serviceConnectDefaults?: ClusterServiceConnectDefaultsRequest | undefined;
}

/**
 * A key-value pair object.
 *
 * @public
 */
export interface KeyValuePair {
  /**
   * The name of the key-value pair. For environment variables, this is the name of the environment variable.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The value of the key-value pair. For environment variables, this is the value of the environment variable.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * An object representing a container instance or task attachment.
 *
 * @public
 */
export interface Attachment {
  /**
   * The unique identifier for the attachment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The type of the attachment, such as `ElasticNetworkInterface`, `Service Connect`, and `AmazonElasticBlockStorage`.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The status of the attachment. Valid values are `PRECREATED`, `CREATED`, `ATTACHING`, `ATTACHED`, `DETACHING`, `DETACHED`, `DELETED`, and `FAILED`.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * Details of the attachment.
   *
   * For elastic network interfaces, this includes the network interface ID, the MAC address, the subnet ID, and the private IPv4 address.
   *
   * For Service Connect services, this includes `portName`, `clientAliases`, `discoveryName`, and `ingressPortOverride`.
   *
   * For Elastic Block Storage, this includes `roleArn`, `deleteOnTermination`, `volumeName`, `volumeId`, and `statusReason` (only when the attachment fails to create or attach).
   *
   * @public
   */
  details?: KeyValuePair[] | undefined;
}

/**
 * Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the `enabled` parameter to `true` in the `ServiceConnectConfiguration`. You can set the namespace of each service individually in the `ServiceConnectConfiguration` to override this default parameter.
 *
 * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface ClusterServiceConnectDefaults {
  /**
   * The namespace name or full Amazon Resource Name (ARN) of the Cloud Map namespace. When you create a service and don't specify a Service Connect configuration, this namespace is used.
   *
   * @public
   */
  namespace?: string | undefined;
}

/**
 * A regional grouping of one or more container instances where you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously.
 *
 * @public
 */
export interface Cluster {
  /**
   * The Amazon Resource Name (ARN) that identifies the cluster. For more information about the ARN format, see [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * A user-generated string that you use to identify your cluster.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The execute command and managed storage configuration for the cluster.
   *
   * @public
   */
  configuration?: ClusterConfiguration | undefined;

  /**
   * The status of the cluster. The following are the possible states that are returned.
   *
   * - **ACTIVE**
   *
   *   The cluster is ready to accept tasks and if applicable you can register container instances with the cluster.
   *
   * - **PROVISIONING**
   *
   *   The cluster has capacity providers that are associated with it and the resources needed for the capacity provider are being created.
   *
   * - **DEPROVISIONING**
   *
   *   The cluster has capacity providers that are associated with it and the resources needed for the capacity provider are being deleted.
   *
   * - **FAILED**
   *
   *   The cluster has capacity providers that are associated with it and the resources needed for the capacity provider have failed to create.
   *
   * - **INACTIVE**
   *
   *   The cluster has been deleted. Clusters with an `INACTIVE` status may remain discoverable in your account for a period of time. However, this behavior is subject to change in the future. We don't recommend that you rely on `INACTIVE` clusters persisting.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The number of container instances registered into the cluster. This includes container instances in both `ACTIVE` and `DRAINING` status.
   *
   * @public
   */
  registeredContainerInstancesCount?: number | undefined;

  /**
   * The number of tasks in the cluster that are in the `RUNNING` state.
   *
   * @public
   */
  runningTasksCount?: number | undefined;

  /**
   * The number of tasks in the cluster that are in the `PENDING` state.
   *
   * @public
   */
  pendingTasksCount?: number | undefined;

  /**
   * The number of services that are running on the cluster in an `ACTIVE` state. You can view these services with [ListServices](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html).
   *
   * @public
   */
  activeServicesCount?: number | undefined;

  /**
   * Additional information about your clusters that are separated by launch type. They include the following:
   *
   * - runningEC2TasksCount
   * - RunningFargateTasksCount
   * - pendingEC2TasksCount
   * - pendingFargateTasksCount
   * - activeEC2ServiceCount
   * - activeFargateServiceCount
   * - drainingEC2ServiceCount
   * - drainingFargateServiceCount
   *
   * @public
   */
  statistics?: KeyValuePair[] | undefined;

  /**
   * The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value. You define both.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The settings for the cluster. This parameter indicates whether CloudWatch Container Insights is on or off for a cluster.
   *
   * @public
   */
  settings?: ClusterSetting[] | undefined;

  /**
   * The capacity providers associated with the cluster.
   *
   * @public
   */
  capacityProviders?: string[] | undefined;

  /**
   * The default capacity provider strategy for the cluster. When services or tasks are run in the cluster with no launch type or capacity provider strategy specified, the default capacity provider strategy is used.
   *
   * @public
   */
  defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * The resources attached to a cluster. When using a capacity provider with a cluster, the capacity provider and associated resources are returned as cluster attachments.
   *
   * @public
   */
  attachments?: Attachment[] | undefined;

  /**
   * The status of the capacity providers associated with the cluster. The following are the states that are returned.
   *
   * - **UPDATE_IN_PROGRESS**
   *
   *   The available capacity providers for the cluster are updating.
   *
   * - **UPDATE_COMPLETE**
   *
   *   The capacity providers have successfully updated.
   *
   * - **UPDATE_FAILED**
   *
   *   The capacity provider updates failed.
   *
   * @public
   */
  attachmentsStatus?: string | undefined;

  /**
   * Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the `enabled` parameter to `true` in the `ServiceConnectConfiguration`. You can set the namespace of each service individually in the `ServiceConnectConfiguration` to override this default parameter.
   *
   * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  serviceConnectDefaults?: ClusterServiceConnectDefaults | undefined;
}

/**
 *
 * @public
 */
export interface CreateClusterResponse {
  /**
   * The full description of your new cluster.
   *
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 *
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster to delete.
   *
   * @public
   */
  cluster: string | undefined;
}

/**
 *
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * The full description of the deleted cluster.
   *
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 *
 * @public
 */
export interface DeregisterContainerInstanceRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instance to deregister. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The container instance ID or full ARN of the container instance to deregister. For more information about the ARN format, see [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  containerInstance: string | undefined;

  /**
   * Forces the container instance to be deregistered. If you have tasks running on the container instance when you deregister it with the `force` option, these tasks remain running until you terminate the instance or the tasks stop through some other means, but they're orphaned (no longer monitored or accounted for by Amazon ECS). If an orphaned task on your container instance is part of an Amazon ECS service, then the service scheduler starts another copy of that task, on a different container instance if possible.
   *
   * Any containers in orphaned service tasks that are registered with a Classic Load Balancer or an Application Load Balancer target group are deregistered. They begin connection draining according to the settings on the load balancer or target group.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * An attribute is a name-value pair that's associated with an Amazon ECS object. Use attributes to extend the Amazon ECS data model by adding custom metadata to your resources. For more information, see [Attributes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface Attribute {
  /**
   * The name of the attribute. The `name` must contain between 1 and 128 characters. The name may contain letters (uppercase and lowercase), numbers, hyphens (-), underscores (_), forward slashes (/), back slashes (\), or periods (.).
   *
   * @public
   */
  name: string | undefined;

  /**
   * The value of the attribute. The `value` must contain between 1 and 128 characters. It can contain letters (uppercase and lowercase), numbers, hyphens (-), underscores (_), periods (.), at signs (@), forward slashes (/), back slashes (\), colons (:), or spaces. The value can't start or end with a space.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The type of the target to attach the attribute with. This parameter is required if you use the short form ID for a resource instead of the full ARN.
   *
   * @public
   */
  targetType?: TargetType | undefined;

  /**
   * The ID of the target. You can specify the short form ID for a resource or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  targetId?: string | undefined;
}

/**
 * The state of a GPU on a container instance, including its sharing mode and the memory that's available for new containers.
 *
 * @public
 */
export interface GpuDevice {
  /**
   * The ID of the GPU. This ID matches the GPU IDs in the `gpuIds` of the containers that Amazon ECS assigned to the GPU.
   *
   * @public
   */
  gpuId?: string | undefined;

  /**
   * How the GPU is shared between containers.
   *
   * Valid values:
   *
   * - `IDLE` - No containers are assigned to the GPU, and all of its memory is available.
   * - `NVIDIA_MPS` - One or more containers share the GPU by using NVIDIA Multi-Process Service (MPS).
   * - `DEDICATED` - One container has exclusive use of the GPU.
   *
   * @public
   */
  sharingMode?: GpuSharingMode | undefined;

  /**
   * The total amount of GPU memory, in MiB, that the Amazon ECS container agent reported for the GPU. This is the memory that's available to containers, and it can be less than the nominal memory of the GPU.
   *
   * @public
   */
  totalMemoryInMiB?: number | undefined;

  /**
   * The amount of GPU memory, in MiB, that's available to allocate to new containers that use the `nvidiaMps` sharing strategy. Amazon ECS calculates this value from the memory that it allocated to containers on the GPU, not from the memory that the containers use.
   *
   * @public
   */
  remainingMemoryInMiB?: number | undefined;

  /**
   * The number of containers that Amazon ECS assigned to the GPU. This value is `0` when the sharing mode is `IDLE` and `1` when the sharing mode is `DEDICATED`. Amazon ECS counts the containers that it assigned to the GPU, not the processes that are running on it.
   *
   * @public
   */
  containerCount?: number | undefined;
}

/**
 * An object representing the result of a container instance health status check.
 *
 * @public
 */
export interface InstanceHealthCheckResult {
  /**
   * The type of container instance health status that was verified.
   *
   * @public
   */
  type?: InstanceHealthCheckType | undefined;

  /**
   * The container instance health status.
   *
   * @public
   */
  status?: InstanceHealthCheckState | undefined;

  /**
   * The reason for the container instance health status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix timestamp for when the container instance health status was last updated.
   *
   * @public
   */
  lastUpdated?: Date | undefined;

  /**
   * The Unix timestamp for when the container instance health status last changed.
   *
   * @public
   */
  lastStatusChange?: Date | undefined;
}

/**
 * An object representing the health status of the container instance.
 *
 * @public
 */
export interface ContainerInstanceHealthStatus {
  /**
   * The overall health status of the container instance. This is an aggregate status of all container instance health checks.
   *
   * @public
   */
  overallStatus?: InstanceHealthCheckState | undefined;

  /**
   * An array of objects representing the details of the container instance health status.
   *
   * @public
   */
  details?: InstanceHealthCheckResult[] | undefined;
}

/**
 * Describes the resources available for a container instance.
 *
 * @public
 */
export interface Resource {
  /**
   * The name of the resource, such as `CPU`, `MEMORY`, `PORTS`, `PORTS_UDP`, or a user-defined resource.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of the resource. Valid values: `INTEGER`, `DOUBLE`, `LONG`, or `STRINGSET`.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * When the `doubleValue` type is set, the value of the resource must be a double precision floating-point type.
   *
   * @public
   */
  doubleValue?: number | undefined;

  /**
   * When the `longValue` type is set, the value of the resource must be an extended precision floating-point type.
   *
   * @public
   */
  longValue?: number | undefined;

  /**
   * When the `integerValue` type is set, the value of the resource must be an integer.
   *
   * @public
   */
  integerValue?: number | undefined;

  /**
   * When the `stringSetValue` type is set, the value of the resource must be a string type.
   *
   * @public
   */
  stringSetValue?: string[] | undefined;
}

/**
 * The Docker and Amazon ECS container agent version information about a container instance.
 *
 * @public
 */
export interface VersionInfo {
  /**
   * The version number of the Amazon ECS container agent.
   *
   * @public
   */
  agentVersion?: string | undefined;

  /**
   * The Git commit hash for the Amazon ECS container agent build on the [amazon-ecs-agent](https://github.com/aws/amazon-ecs-agent) GitHub repository.
   *
   * @public
   */
  agentHash?: string | undefined;

  /**
   * The Docker version that's running on the container instance.
   *
   * @public
   */
  dockerVersion?: string | undefined;
}

/**
 * An Amazon EC2 or External instance that's running the Amazon ECS agent and has been registered with a cluster.
 *
 * @public
 */
export interface ContainerInstance {
  /**
   * The Amazon Resource Name (ARN) of the container instance. For more information about the ARN format, see [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  containerInstanceArn?: string | undefined;

  /**
   * The ID of the container instance. For Amazon EC2 instances, this value is the Amazon EC2 instance ID. For external instances, this value is the Amazon Web Services Systems Manager managed instance ID.
   *
   * @public
   */
  ec2InstanceId?: string | undefined;

  /**
   * The capacity provider that's associated with the container instance.
   *
   * @public
   */
  capacityProviderName?: string | undefined;

  /**
   * The version counter for the container instance. Every time a container instance experiences a change that triggers a CloudWatch event, the version counter is incremented. If you're replicating your Amazon ECS container instance state with CloudWatch Events, you can compare the version of a container instance reported by the Amazon ECS APIs with the version reported in CloudWatch Events for the container instance (inside the `detail` object) to verify that the version in your event stream is current.
   *
   * @public
   */
  version?: number | undefined;

  /**
   * The version information for the Amazon ECS container agent and Docker daemon running on the container instance.
   *
   * @public
   */
  versionInfo?: VersionInfo | undefined;

  /**
   * For CPU and memory resource types, this parameter describes the remaining CPU and memory that wasn't already allocated to tasks and is therefore available for new tasks. For port resource types, this parameter describes the ports that were reserved by the Amazon ECS container agent (at instance registration time) and any task containers that have reserved port mappings on the host (with the `host` or `bridge` network mode). Any port that's not specified here is available for new tasks.
   *
   * @public
   */
  remainingResources?: Resource[] | undefined;

  /**
   * For CPU and memory resource types, this parameter describes the amount of each resource that was available on the container instance when the container agent registered it with Amazon ECS. This value represents the total amount of CPU and memory that can be allocated on this container instance to tasks. For port resource types, this parameter describes the ports that were reserved by the Amazon ECS container agent when it registered the container instance with Amazon ECS.
   *
   * @public
   */
  registeredResources?: Resource[] | undefined;

  /**
   * The status of the container instance. The valid values are `REGISTERING`, `REGISTRATION_FAILED`, `ACTIVE`, `INACTIVE`, `DEREGISTERING`, or `DRAINING`.
   *
   * If your account has opted in to the `awsvpcTrunking` account setting, then any newly registered container instance will transition to a `REGISTERING` status while the trunk elastic network interface is provisioned for the instance. If the registration fails, the instance will transition to a `REGISTRATION_FAILED` status. You can describe the container instance and see the reason for failure in the `statusReason` parameter. Once the container instance is terminated, the instance transitions to a `DEREGISTERING` status while the trunk elastic network interface is deprovisioned. The instance then transitions to an `INACTIVE` status.
   *
   * The `ACTIVE` status indicates that the container instance can accept tasks. The `DRAINING` indicates that new tasks aren't placed on the container instance and any service tasks running on the container instance are removed if possible. For more information, see [Container instance draining](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-draining.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The reason that the container instance reached its current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * This parameter returns `true` if the agent is connected to Amazon ECS. An instance with an agent that may be unhealthy or stopped return `false`. Only instances connected to an agent can accept task placement requests.
   *
   * @public
   */
  agentConnected?: boolean | undefined;

  /**
   * The number of tasks on the container instance that have a desired status (`desiredStatus`) of `RUNNING`.
   *
   * @public
   */
  runningTasksCount?: number | undefined;

  /**
   * The number of tasks on the container instance that are in the `PENDING` status.
   *
   * @public
   */
  pendingTasksCount?: number | undefined;

  /**
   * The status of the most recent agent update. If an update wasn't ever requested, this value is `NULL`.
   *
   * @public
   */
  agentUpdateStatus?: AgentUpdateStatus | undefined;

  /**
   * The attributes set for the container instance, either by the Amazon ECS container agent at instance registration or manually with the [PutAttributes](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAttributes.html) operation.
   *
   * @public
   */
  attributes?: Attribute[] | undefined;

  /**
   * The Unix timestamp for the time when the container instance was registered.
   *
   * @public
   */
  registeredAt?: Date | undefined;

  /**
   * The resources attached to a container instance, such as an elastic network interface.
   *
   * @public
   */
  attachments?: Attachment[] | undefined;

  /**
   * The metadata that you apply to the container instance to help you categorize and organize them. Each tag consists of a key and an optional value. You define both.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * An object representing the health status of the container instance.
   *
   * @public
   */
  healthStatus?: ContainerInstanceHealthStatus | undefined;

  /**
   * The state of each GPU on the container instance, including its sharing mode and available memory. This field is present only for container instances that support GPU sharing.
   *
   * @public
   */
  gpuDevices?: GpuDevice[] | undefined;
}

/**
 *
 * @public
 */
export interface DeregisterContainerInstanceResponse {
  /**
   * The container instance that was deregistered.
   *
   * @public
   */
  containerInstance?: ContainerInstance | undefined;
}

/**
 *
 * @public
 */
export interface DescribeClustersRequest {
  /**
   * A list of up to 100 cluster names or full cluster Amazon Resource Name (ARN) entries. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  clusters?: string[] | undefined;

  /**
   * Determines whether to include additional information about the clusters in the response. If this field is omitted, this information isn't included.
   *
   * If `ATTACHMENTS` is specified, the attachments for the container instances or tasks within the cluster are included, for example the capacity providers.
   *
   * If `SETTINGS` is specified, the settings for the cluster are included.
   *
   * If `CONFIGURATIONS` is specified, the configuration for the cluster is included.
   *
   * If `STATISTICS` is specified, the task and service count is included, separated by launch type.
   *
   * If `TAGS` is specified, the metadata tags associated with the cluster are included.
   *
   * @public
   */
  include?: ClusterField[] | undefined;
}

/**
 *
 * @public
 */
export interface DescribeClustersResponse {
  /**
   * The list of clusters.
   *
   * @public
   */
  clusters?: Cluster[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface ExecuteCommandRequest {
  /**
   * The Amazon Resource Name (ARN) or short name of the cluster the task is running in. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The name of the container to execute the command on. A container name only needs to be specified for tasks containing multiple containers.
   *
   * @public
   */
  container?: string | undefined;

  /**
   * The command to run on the container.
   *
   * @public
   */
  command: string | undefined;

  /**
   * Use this flag to run your command in interactive mode.
   *
   * @public
   */
  interactive: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) or ID of the task the container is part of.
   *
   * @public
   */
  task: string | undefined;
}

/**
 * The details for the execute command session.
 *
 * @public
 */
export interface Session {
  /**
   * The ID of the execute command session.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * A URL to the managed agent on the container that the SSM Session Manager client uses to send commands and receive output from the container.
   *
   * @public
   */
  streamUrl?: string | undefined;

  /**
   * An encrypted token value containing session and caller information. It's used to authenticate the connection to the container.
   *
   * @public
   */
  tokenValue?: string | undefined;
}

/**
 * @public
 */
export interface ExecuteCommandResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container.
   *
   * @public
   */
  containerArn?: string | undefined;

  /**
   * The name of the container.
   *
   * @public
   */
  containerName?: string | undefined;

  /**
   * Determines whether the execute command session is running in interactive mode. Amazon ECS only supports initiating interactive sessions, so you must specify `true` for this value.
   *
   * @public
   */
  interactive?: boolean | undefined;

  /**
   * The details of the SSM session that was created for this instance of execute-command.
   *
   * @public
   */
  session?: Session | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task.
   *
   * @public
   */
  taskArn?: string | undefined;
}

/**
 * @public
 */
export interface ListAttributesRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster to list attributes. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The type of the target to list attributes with.
   *
   * @public
   */
  targetType: TargetType | undefined;

  /**
   * The name of the attribute to filter the results with.
   *
   * @public
   */
  attributeName?: string | undefined;

  /**
   * The value of the attribute to filter results with. You must also specify an attribute name to use this parameter.
   *
   * @public
   */
  attributeValue?: string | undefined;

  /**
   * The `nextToken` value returned from a `ListAttributes` request indicating that more results are available to fulfill the request and further calls are needed. If `maxResults` was provided, it's possible the number of results to be fewer than `maxResults`.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of cluster results that `ListAttributes` returned in paginated output. When this parameter is used, `ListAttributes` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListAttributes` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListAttributes` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 *
 * @public
 */
export interface ListAttributesResponse {
  /**
   * A list of attribute objects that meet the criteria of the request.
   *
   * @public
   */
  attributes?: Attribute[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListAttributes` request. When the results of a `ListAttributes` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 *
 * @public
 */
export interface ListClustersRequest {
  /**
   * The `nextToken` value returned from a `ListClusters` request indicating that more results are available to fulfill the request and further calls are needed. If `maxResults` was provided, it's possible the number of results to be fewer than `maxResults`.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of cluster results that `ListClusters` returned in paginated output. When this parameter is used, `ListClusters` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListClusters` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListClusters` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 *
 * @public
 */
export interface ListClustersResponse {
  /**
   * The list of full Amazon Resource Name (ARN) entries for each cluster that's associated with your account.
   *
   * @public
   */
  clusterArns?: string[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListClusters` request. When the results of a `ListClusters` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 *
 * @public
 */
export interface ListContainerInstancesRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instances to list. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * You can filter the results of a `ListContainerInstances` operation with cluster query language statements. For more information, see [Cluster Query Language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  filter?: string | undefined;

  /**
   * The `nextToken` value returned from a `ListContainerInstances` request indicating that more results are available to fulfill the request and further calls are needed. If `maxResults` was provided, it's possible the number of results to be fewer than `maxResults`.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of container instance results that `ListContainerInstances` returned in paginated output. When this parameter is used, `ListContainerInstances` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListContainerInstances` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListContainerInstances` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Filters the container instances by status. For example, if you specify the `DRAINING` status, the results include only container instances that have been set to `DRAINING` using [UpdateContainerInstancesState](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerInstancesState.html). If you don't specify this parameter, the The default is to include container instances set to all states other than `INACTIVE`.
   *
   * @public
   */
  status?: ContainerInstanceStatus | undefined;
}

/**
 *
 * @public
 */
export interface ListContainerInstancesResponse {
  /**
   * The list of container instances with full ARN entries for each container instance associated with the specified cluster.
   *
   * @public
   */
  containerInstanceArns?: string[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListContainerInstances` request. When the results of a `ListContainerInstances` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutClusterCapacityProvidersRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster to modify the capacity provider settings for. If you don't specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster: string | undefined;

  /**
   * The name of one or more capacity providers to associate with the cluster.
   *
   * If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New capacity providers can be created with the [CreateCapacityProvider](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html) API operation.
   *
   * To use a Fargate capacity provider, specify either the `FARGATE` or `FARGATE_SPOT` capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used.
   *
   * @public
   */
  capacityProviders: string[] | undefined;

  /**
   * The capacity provider strategy to use by default for the cluster.
   *
   * When creating a service or running a task on a cluster, if no capacity provider or launch type is specified then the default capacity provider strategy for the cluster is used.
   *
   * A capacity provider strategy consists of one or more capacity providers along with the `base` and `weight` to assign to them. A capacity provider must be associated with the cluster to be used in a capacity provider strategy. The [PutClusterCapacityProviders](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html) API is used to associate a capacity provider with a cluster. Only capacity providers with an `ACTIVE` or `UPDATING` status can be used.
   *
   * If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New capacity providers can be created with the [CreateCapacityProvider](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html) API operation.
   *
   * To use a Fargate capacity provider, specify either the `FARGATE` or `FARGATE_SPOT` capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used.
   *
   * @public
   */
  defaultCapacityProviderStrategy: CapacityProviderStrategyItem[] | undefined;
}

/**
 * @public
 */
export interface PutClusterCapacityProvidersResponse {
  /**
   * Details about the cluster.
   *
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * An object representing a change in state for a task attachment.
 *
 * @public
 */
export interface AttachmentStateChange {
  /**
   * The Amazon Resource Name (ARN) of the attachment.
   *
   * @public
   */
  attachmentArn: string | undefined;

  /**
   * The status of the attachment.
   *
   * @public
   */
  status: string | undefined;
}

/**
 * @public
 */
export interface SubmitAttachmentStateChangesRequest {
  /**
   * The short name or full ARN of the cluster that hosts the container instance the attachment belongs to.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * Any attachments associated with the state change request.
   *
   * @public
   */
  attachments: AttachmentStateChange[] | undefined;
}

/**
 * @public
 */
export interface SubmitAttachmentStateChangesResponse {
  /**
   * Acknowledgement of the state change.
   *
   * @public
   */
  acknowledgment?: string | undefined;
}

/**
 * Details on the network bindings between a container and its host container instance. After a task reaches the `RUNNING` status, manual and automatic host and container port assignments are visible in the `networkBindings` section of [DescribeTasks](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html) API responses.
 *
 * @public
 */
export interface NetworkBinding {
  /**
   * The IP address that the container is bound to on the container instance.
   *
   * @public
   */
  bindIP?: string | undefined;

  /**
   * The port number on the container that's used with the network binding.
   *
   * @public
   */
  containerPort?: number | undefined;

  /**
   * The port number on the host that's used with the network binding.
   *
   * @public
   */
  hostPort?: number | undefined;

  /**
   * The protocol used for the network binding.
   *
   * @public
   */
  protocol?: TransportProtocol | undefined;

  /**
   * The port number range on the container that's bound to the dynamically mapped host port range.
   *
   * The following rules apply when you specify a `containerPortRange`:
   *
   * - You must use either the `bridge` network mode or the `awsvpc` network mode.
   * - This parameter is available for both the EC2 and Fargate launch types.
   * - This parameter is available for both the Linux and Windows operating systems.
   * - The container instance must have at least version 1.67.0 of the container agent and at least version 1.67.0-1 of the `ecs-init` package
   * - You can specify a maximum of 100 port ranges per container.
   * - You do not specify a `hostPortRange`. The value of the `hostPortRange` is set as follows:
   *
   *   - For containers in a task with the `awsvpc` network mode, the `hostPortRange` is set to the same value as the `containerPortRange`. This is a static mapping strategy.
   *   - For containers in a task with the `bridge` network mode, the Amazon ECS agent finds open host ports from the default ephemeral range and passes it to docker to bind them to the container ports.
   * - The `containerPortRange` valid values are between 1 and 65535.
   * - A port can only be included in one port mapping per container.
   * - You cannot specify overlapping port ranges.
   * - The first port in the range must be less than last port in the range.
   * - Docker recommends that you turn off the docker-proxy in the Docker daemon config file when you have a large number of ports.
   *
   *   For more information, see [Issue #11185](https://github.com/moby/moby/issues/11185) on the Github website.
   *
   *   For information about how to turn off the docker-proxy in the Docker daemon config file, see [Docker daemon](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/bootstrap_container_instance.html#bootstrap_docker_daemon) in the *Amazon ECS Developer Guide*.
   *
   * You can call [`DescribeTasks`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html) to view the `hostPortRange` which are the host ports that are bound to the container ports.
   *
   * @public
   */
  containerPortRange?: string | undefined;

  /**
   * The port number range on the host that's used with the network binding. This is assigned is assigned by Docker and delivered by the Amazon ECS agent.
   *
   * @public
   */
  hostPortRange?: string | undefined;
}

/**
 *
 * @public
 */
export interface SubmitContainerStateChangeRequest {
  /**
   * The short name or full ARN of the cluster that hosts the container.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The task ID or full Amazon Resource Name (ARN) of the task that hosts the container.
   *
   * @public
   */
  task?: string | undefined;

  /**
   * The name of the container.
   *
   * @public
   */
  containerName?: string | undefined;

  /**
   * The ID of the Docker container.
   *
   * @public
   */
  runtimeId?: string | undefined;

  /**
   * The status of the state change request.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The exit code that's returned for the state change request.
   *
   * @public
   */
  exitCode?: number | undefined;

  /**
   * The reason for the state change request.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The network bindings of the container.
   *
   * @public
   */
  networkBindings?: NetworkBinding[] | undefined;
}

/**
 *
 * @public
 */
export interface SubmitContainerStateChangeResponse {
  /**
   * Acknowledgement of the state change.
   *
   * @public
   */
  acknowledgment?: string | undefined;
}

/**
 * An object that represents a change in state for a container.
 *
 * @public
 */
export interface ContainerStateChange {
  /**
   * The name of the container.
   *
   * @public
   */
  containerName?: string | undefined;

  /**
   * The container image SHA 256 digest.
   *
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * The ID of the Docker container.
   *
   * @public
   */
  runtimeId?: string | undefined;

  /**
   * The exit code for the container, if the state change is a result of the container exiting.
   *
   * @public
   */
  exitCode?: number | undefined;

  /**
   * Any network bindings that are associated with the container.
   *
   * @public
   */
  networkBindings?: NetworkBinding[] | undefined;

  /**
   * The reason for the state change.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The status of the container.
   *
   * @public
   */
  status?: string | undefined;
}

/**
 * An object representing a change in state for a managed agent.
 *
 * @public
 */
export interface ManagedAgentStateChange {
  /**
   * The name of the container that's associated with the managed agent.
   *
   * @public
   */
  containerName: string | undefined;

  /**
   * The name of the managed agent.
   *
   * @public
   */
  managedAgentName: ManagedAgentName | undefined;

  /**
   * The status of the managed agent.
   *
   * @public
   */
  status: string | undefined;

  /**
   * The reason for the status of the managed agent.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 *
 * @public
 */
export interface SubmitTaskStateChangeRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The task ID or full ARN of the task in the state change request.
   *
   * @public
   */
  task?: string | undefined;

  /**
   * The status of the state change request.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The reason for the state change request.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * Any containers that's associated with the state change request.
   *
   * @public
   */
  containers?: ContainerStateChange[] | undefined;

  /**
   * Any attachments associated with the state change request.
   *
   * @public
   */
  attachments?: AttachmentStateChange[] | undefined;

  /**
   * The details for the managed agent that's associated with the task.
   *
   * @public
   */
  managedAgents?: ManagedAgentStateChange[] | undefined;

  /**
   * The Unix timestamp for the time when the container image pull started.
   *
   * @public
   */
  pullStartedAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the container image pull completed.
   *
   * @public
   */
  pullStoppedAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the task execution stopped.
   *
   * @public
   */
  executionStoppedAt?: Date | undefined;
}

/**
 *
 * @public
 */
export interface SubmitTaskStateChangeResponse {
  /**
   * Acknowledgement of the state change.
   *
   * @public
   */
  acknowledgment?: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * The name of the cluster to modify the settings for.
   *
   * @public
   */
  cluster: string | undefined;

  /**
   * The cluster settings for your cluster.
   *
   * @public
   */
  settings?: ClusterSetting[] | undefined;

  /**
   * The execute command configuration for the cluster.
   *
   * @public
   */
  configuration?: ClusterConfiguration | undefined;

  /**
   * Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the `enabled` parameter to `true` in the `ServiceConnectConfiguration`. You can set the namespace of each service individually in the `ServiceConnectConfiguration` to override this default parameter.
   *
   * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  serviceConnectDefaults?: ClusterServiceConnectDefaultsRequest | undefined;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * Details about the cluster.
   *
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface UpdateClusterSettingsRequest {
  /**
   * The name of the cluster to modify the settings for.
   *
   * @public
   */
  cluster: string | undefined;

  /**
   * The setting to use by default for a cluster. This parameter is used to turn on CloudWatch Container Insights for a cluster. If this value is specified, it overrides the `containerInsights` value set with [PutAccountSetting](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html) or [PutAccountSettingDefault](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html).
   *
   * > **Important:** Currently, if you delete an existing cluster that does not have Container Insights turned on, and then create a new cluster with the same name with Container Insights tuned on, Container Insights will not actually be turned on. If you want to preserve the same name for your existing cluster and turn on Container Insights, you must wait 7 days before you can re-create it.
   *
   * @public
   */
  settings: ClusterSetting[] | undefined;
}

/**
 * @public
 */
export interface UpdateClusterSettingsResponse {
  /**
   * Details about the cluster
   *
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 *
 * @public
 */
export interface DeleteAttributesRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that contains the resource to delete attributes. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The attributes to delete from your resource. You can specify up to 10 attributes for each request. For custom attributes, specify the attribute name and target ID, but don't specify the value. If you specify the target ID using the short form, you must also specify the target type.
   *
   * @public
   */
  attributes: Attribute[] | undefined;
}

/**
 *
 * @public
 */
export interface DeleteAttributesResponse {
  /**
   * A list of attribute objects that were successfully deleted from your resource.
   *
   * @public
   */
  attributes?: Attribute[] | undefined;
}

/**
 *
 * @public
 */
export interface DescribeContainerInstancesRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instances to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the container instance or container instances you are describing were launched in any cluster other than the default cluster.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * A list of up to 100 container instance IDs or full Amazon Resource Name (ARN) entries.
   *
   * @public
   */
  containerInstances: string[] | undefined;

  /**
   * Specifies whether you want to see the resource tags for the container instance. If `TAGS` is specified, the tags are included in the response. If `CONTAINER_INSTANCE_HEALTH` is specified, the container instance health is included in the response. If this field is omitted, tags and container instance health status aren't included in the response.
   *
   * @public
   */
  include?: ContainerInstanceField[] | undefined;
}

/**
 *
 * @public
 */
export interface DescribeContainerInstancesResponse {
  /**
   * The list of container instances.
   *
   * @public
   */
  containerInstances?: ContainerInstance[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 *
 * @public
 */
export interface ListTasksRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster to use when filtering the `ListTasks` results. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The container instance ID or full ARN of the container instance to use when filtering the `ListTasks` results. Specifying a `containerInstance` limits the results to tasks that belong to that container instance.
   *
   * @public
   */
  containerInstance?: string | undefined;

  /**
   * The name of the task definition family to use when filtering the `ListTasks` results. Specifying a `family` limits the results to tasks that belong to that family.
   *
   * @public
   */
  family?: string | undefined;

  /**
   * The `nextToken` value returned from a `ListTasks` request indicating that more results are available to fulfill the request and further calls will be needed. If `maxResults` was provided, it's possible the number of results to be fewer than `maxResults`.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of task results that `ListTasks` returned in paginated output. When this parameter is used, `ListTasks` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListTasks` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListTasks` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `startedBy` value to filter the task results with. Specifying a `startedBy` value limits the results to tasks that were started with that value.
   *
   * When you specify `startedBy` as the filter, it must be the only filter that you use.
   *
   * @public
   */
  startedBy?: string | undefined;

  /**
   * The name of the service to use when filtering the `ListTasks` results. Specifying a `serviceName` limits the results to tasks that belong to that service.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The task desired status to use when filtering the `ListTasks` results. Specifying a `desiredStatus` of `STOPPED` limits the results to tasks that Amazon ECS has set the desired status to `STOPPED`. This can be useful for debugging tasks that aren't starting properly or have died or finished. The default status filter is `RUNNING`, which shows tasks that Amazon ECS has set the desired status to `RUNNING`.
   *
   * > **Note:** Although you can filter results based on a desired status of `PENDING`, this doesn't return any results. Amazon ECS never sets the desired status of a task to that value (only a task's `lastStatus` may have a value of `PENDING`).
   *
   * @public
   */
  desiredStatus?: DesiredStatus | undefined;

  /**
   * The launch type to use when filtering the `ListTasks` results.
   *
   * @public
   */
  launchType?: LaunchType | undefined;

  /**
   * The name of the daemon to use when filtering the `ListTasks` results. Specifying a `daemonName` limits the results to tasks that belong to that daemon.
   *
   * @public
   */
  daemonName?: string | undefined;
}

/**
 *
 * @public
 */
export interface ListTasksResponse {
  /**
   * The list of task ARN entries for the `ListTasks` request.
   *
   * @public
   */
  taskArns?: string[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListTasks` request. When the results of a `ListTasks` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 *
 * @public
 */
export interface PutAttributesRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that contains the resource to apply attributes. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The attributes to apply to your resource. You can specify up to 10 custom attributes for each resource. You can specify up to 10 attributes in a single call.
   *
   * @public
   */
  attributes: Attribute[] | undefined;
}

/**
 *
 * @public
 */
export interface PutAttributesResponse {
  /**
   * The attributes applied to your resource.
   *
   * @public
   */
  attributes?: Attribute[] | undefined;
}

/**
 * The devices that are available on the container instance. The supported device types are GPUs and Neuron devices.
 *
 * @public
 */
export interface PlatformDevice {
  /**
   * The ID for the GPU or Neuron device on the container instance. For GPUs, the available GPU IDs can also be obtained on the container instance in the `/var/lib/ecs/gpu/nvidia_gpu_info.json` file. For Neuron devices, the ID corresponds to the device index (for example, `0` for `/dev/neuron0`).
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of device that's available on the container instance. The supported values are `GPU` and `NEURON_DEVICE`.
   *
   * @public
   */
  type: PlatformDeviceType | undefined;
}

/**
 *
 * @public
 */
export interface RegisterContainerInstanceRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster to register your container instance with. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The instance identity document for the EC2 instance to register. This document can be found by running the following command from the instance: `curl http://169.254.169.254/latest/dynamic/instance-identity/document/`
   *
   * @public
   */
  instanceIdentityDocument?: string | undefined;

  /**
   * The instance identity document signature for the EC2 instance to register. This signature can be found by running the following command from the instance: `curl http://169.254.169.254/latest/dynamic/instance-identity/signature/`
   *
   * @public
   */
  instanceIdentityDocumentSignature?: string | undefined;

  /**
   * The resources available on the instance.
   *
   * @public
   */
  totalResources?: Resource[] | undefined;

  /**
   * The version information for the Amazon ECS container agent and Docker daemon that runs on the container instance.
   *
   * @public
   */
  versionInfo?: VersionInfo | undefined;

  /**
   * The ARN of the container instance (if it was previously registered).
   *
   * @public
   */
  containerInstanceArn?: string | undefined;

  /**
   * The container instance attributes that this container instance supports.
   *
   * @public
   */
  attributes?: Attribute[] | undefined;

  /**
   * The devices that are available on the container instance. The supported device types are GPUs and Neuron devices.
   *
   * @public
   */
  platformDevices?: PlatformDevice[] | undefined;

  /**
   * The metadata that you apply to the container instance to help you categorize and organize them. Each tag consists of a key and an optional value. You define both.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 *
 * @public
 */
export interface RegisterContainerInstanceResponse {
  /**
   * The container instance that was registered.
   *
   * @public
   */
  containerInstance?: ContainerInstance | undefined;
}

/**
 *
 * @public
 */
export interface UpdateContainerAgentRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that your container instance is running on. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The container instance ID or full ARN entries for the container instance where you would like to update the Amazon ECS container agent.
   *
   * @public
   */
  containerInstance: string | undefined;
}

/**
 *
 * @public
 */
export interface UpdateContainerAgentResponse {
  /**
   * The container instance that the container agent was updated for.
   *
   * @public
   */
  containerInstance?: ContainerInstance | undefined;
}

/**
 *
 * @public
 */
export interface UpdateContainerInstancesStateRequest {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instance to update. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * A list of up to 10 container instance IDs or full ARN entries.
   *
   * @public
   */
  containerInstances: string[] | undefined;

  /**
   * The container instance state to update the container instance with. The only valid values for this action are `ACTIVE` and `DRAINING`. A container instance can only be updated to `DRAINING` status once it has reached an `ACTIVE` state. If a container instance is in `REGISTERING`, `DEREGISTERING`, or `REGISTRATION_FAILED` state you can describe the container instance but can't update the container instance state.
   *
   * @public
   */
  status: ContainerInstanceStatus | undefined;
}

/**
 *
 * @public
 */
export interface UpdateContainerInstancesStateResponse {
  /**
   * The list of container instances.
   *
   * @public
   */
  containerInstances?: ContainerInstance[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface ContinueServiceDeploymentRequest {
  /**
   * The ARN of the service deployment to continue or roll back.
   *
   * @public
   */
  serviceDeploymentArn: string | undefined;

  /**
   * The ID of the paused lifecycle hook to act on. You can find the `hookId` by calling [DescribeServiceDeployments](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServiceDeployments.html) and inspecting the `lifecycleHookDetails` field of the service deployment.
   *
   * @public
   */
  hookId: string | undefined;

  /**
   * The action to take on the paused lifecycle hook. Valid values are:
   *
   * - `CONTINUE` - Proceeds the deployment to the next lifecycle stage.
   * - `ROLLBACK` - Rolls back the deployment to the previous service revision.
   *
   * If no value is specified, the default action is `CONTINUE`.
   *
   * @public
   */
  action?: DeploymentLifecycleHookAction | undefined;
}

/**
 * @public
 */
export interface ContinueServiceDeploymentResponse {
  /**
   * The ARN of the service deployment that was continued or rolled back.
   *
   * @public
   */
  serviceDeploymentArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDaemonDeploymentsRequest {
  /**
   * The ARN of the daemon deployments to describe. You can specify up to 20 ARNs.
   *
   * @public
   */
  daemonDeploymentArns: string[] | undefined;
}

/**
 * The CloudWatch alarms used to determine a daemon deployment failed.
 *
 * @public
 */
export interface DaemonDeploymentAlarms {
  /**
   * The status of the alarms check. Amazon ECS is not using alarms for daemon deployment failures when the status is `DISABLED`.
   *
   * @public
   */
  status?: DaemonDeploymentRollbackMonitorsStatus | undefined;

  /**
   * The name of the CloudWatch alarms that determine when a daemon deployment failed.
   *
   * @public
   */
  alarmNames?: string[] | undefined;

  /**
   * One or more CloudWatch alarm names that have been triggered during the daemon deployment.
   *
   * @public
   */
  triggeredAlarmNames?: string[] | undefined;
}

/**
 * Information about the circuit breaker used to determine when a daemon deployment has failed.
 *
 * @public
 */
export interface DaemonCircuitBreaker {
  /**
   * The number of times the circuit breaker detected a daemon deployment failure.
   *
   * @public
   */
  failureCount?: number | undefined;

  /**
   * The circuit breaker status. Amazon ECS is not using the circuit breaker for daemon deployment failures when the status is `DISABLED`.
   *
   * @public
   */
  status?: DaemonDeploymentRollbackMonitorsStatus | undefined;

  /**
   * The threshold which determines that the daemon deployment failed.
   *
   * @public
   */
  threshold?: number | undefined;
}

/**
 * The CloudWatch alarm configuration for a daemon. When enabled, CloudWatch alarms determine whether a daemon deployment has failed.
 *
 * @public
 */
export interface DaemonAlarmConfiguration {
  /**
   * The CloudWatch alarm names to monitor during a daemon deployment.
   *
   * @public
   */
  alarmNames?: string[] | undefined;

  /**
   * Determines whether to use the CloudWatch alarm option in the daemon deployment process. The default value is `false`.
   *
   * @public
   */
  enable?: boolean | undefined;
}

/**
 * Optional deployment parameters that control how a daemon rolls out updates across container instances.
 *
 * @public
 */
export interface DaemonDeploymentConfiguration {
  /**
   * The percentage of container instances to drain simultaneously during a daemon deployment. Valid values are between 0.0 and 100.0.
   *
   * @public
   */
  drainPercent?: number | undefined;

  /**
   * The CloudWatch alarm configuration for the daemon deployment. When alarms are triggered during a deployment, the deployment can be automatically rolled back.
   *
   * @public
   */
  alarms?: DaemonAlarmConfiguration | undefined;

  /**
   * The amount of time (in minutes) to wait after a successful deployment step before proceeding. This allows time to monitor for issues before continuing. The default value is 0.
   *
   * @public
   */
  bakeTimeInMinutes?: number | undefined;
}

/**
 * Information about a daemon deployment rollback.
 *
 * @public
 */
export interface DaemonRollback {
  /**
   * The reason the rollback happened. For example, the circuit breaker initiated the rollback operation.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The time that the rollback started. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The ARN of the daemon revision deployed as part of the rollback.
   *
   * @public
   */
  rollbackTargetDaemonRevisionArn?: string | undefined;

  /**
   * The capacity providers involved in the rollback.
   *
   * @public
   */
  rollbackCapacityProviders?: string[] | undefined;
}

/**
 * Information about a capacity provider during a daemon deployment.
 *
 * @public
 */
export interface DaemonDeploymentCapacityProvider {
  /**
   * The Amazon Resource Name (ARN) of the capacity provider.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The number of instances running daemon tasks on this capacity provider.
   *
   * @public
   */
  runningInstanceCount?: number | undefined;

  /**
   * The number of instances on this capacity provider that are running without the daemon task. This applies to daemons that aren't critical, where the instance remains available for your other tasks even if the daemon task can't start or stops. These instances aren't included in `runningInstanceCount`.
   *
   * @public
   */
  withoutDaemonInstanceCount?: number | undefined;

  /**
   * The number of instances being drained on this capacity provider during the deployment.
   *
   * @public
   */
  drainingInstanceCount?: number | undefined;
}

/**
 * Details about a daemon revision during a deployment, including running and draining instance counts per capacity provider.
 *
 * @public
 */
export interface DaemonDeploymentRevisionDetail {
  /**
   * The Amazon Resource Name (ARN) of the daemon revision.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The capacity providers associated with this daemon revision during the deployment.
   *
   * @public
   */
  capacityProviders?: DaemonDeploymentCapacityProvider[] | undefined;

  /**
   * The total number of instances running daemon tasks for this revision.
   *
   * @public
   */
  totalRunningInstanceCount?: number | undefined;

  /**
   * The total number of instances running without the daemon task for this revision, across all capacity providers. These instances aren't included in `totalRunningInstanceCount`.
   *
   * @public
   */
  totalWithoutDaemonInstanceCount?: number | undefined;

  /**
   * The total number of instances being drained for this revision during the deployment.
   *
   * @public
   */
  totalDrainingInstanceCount?: number | undefined;
}

/**
 * Information about a daemon deployment. A daemon deployment orchestrates the progressive rollout of daemon task updates across container instances.
 *
 * @public
 */
export interface DaemonDeployment {
  /**
   * The Amazon Resource Name (ARN) of the daemon deployment.
   *
   * @public
   */
  daemonDeploymentArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster that hosts the daemon.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The status of the daemon deployment.
   *
   * @public
   */
  status?: DaemonDeploymentStatus | undefined;

  /**
   * Information about why the daemon deployment is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The daemon revision being deployed.
   *
   * @public
   */
  targetDaemonRevision?: DaemonDeploymentRevisionDetail | undefined;

  /**
   * The currently deployed daemon revisions that are being replaced.
   *
   * @public
   */
  sourceDaemonRevisions?: DaemonDeploymentRevisionDetail[] | undefined;

  /**
   * The circuit breaker configuration that determines when a daemon deployment has failed.
   *
   * @public
   */
  circuitBreaker?: DaemonCircuitBreaker | undefined;

  /**
   * The CloudWatch alarms that determine when a daemon deployment fails.
   *
   * @public
   */
  alarms?: DaemonDeploymentAlarms | undefined;

  /**
   * The rollback options for the daemon deployment.
   *
   * @public
   */
  rollback?: DaemonRollback | undefined;

  /**
   * The deployment configuration used for this daemon deployment.
   *
   * @public
   */
  deploymentConfiguration?: DaemonDeploymentConfiguration | undefined;

  /**
   * The time the daemon deployment was created. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time the daemon deployment started. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The time the daemon deployment stopped. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  stoppedAt?: Date | undefined;

  /**
   * The time the daemon deployment finished. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  finishedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDaemonDeploymentsResponse {
  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: Failure[] | undefined;

  /**
   * The list of daemon deployments.
   *
   * @public
   */
  daemonDeployments?: DaemonDeployment[] | undefined;
}

/**
 * @public
 */
export interface CreateDaemonRequest {
  /**
   * The name of the daemon. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
   *
   * @public
   */
  daemonName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster to create the daemon in.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the daemon task definition to use for the daemon.
   *
   * @public
   */
  daemonTaskDefinitionArn: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the capacity providers to associate with the daemon. The daemon deploys tasks on container instances managed by these capacity providers.
   *
   * @public
   */
  capacityProviderArns: string[] | undefined;

  /**
   * Optional deployment parameters that control how the daemon rolls out updates, including the drain percentage, alarm-based rollback, and bake time.
   *
   * @public
   */
  deploymentConfiguration?: DaemonDeploymentConfiguration | undefined;

  /**
   * The metadata that you apply to the daemon to help you categorize and organize them. Each tag consists of a key and an optional value. You define both of them.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Specifies whether to propagate the tags from the daemon to the daemon tasks. If you don't specify a value, the tags aren't propagated. You can only propagate tags to daemon tasks during task creation. To add tags to a task after task creation, use the [TagResource](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html) API action.
   *
   * @public
   */
  propagateTags?: DaemonPropagateTags | undefined;

  /**
   * Specifies whether to turn on Amazon ECS managed tags for the tasks in the daemon. For more information, see [Tagging your Amazon ECS resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * Determines whether the execute command functionality is turned on for the daemon. If `true`, the execute command functionality is turned on for all tasks in the daemon.
   *
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * An identifier that you provide to ensure the idempotency of the request. It must be unique and is case sensitive. Up to 36 ASCII characters in the range of 33-126 (inclusive) are allowed.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * If the `critical` parameter of a daemon is `true`, and the daemon task fails, stops, or becomes unhealthy, Amazon ECS drains the container instance and stops the other tasks running on it. If the `critical` parameter is `false`, the daemon task failure doesn't affect the other tasks on the instance. The default value is `true`.
   *
   * A non-critical daemon doesn't block instance registration. The container instance becomes active and continues to run your other tasks, whether the daemon task fails during scale-out or during a deployment.
   *
   * Amazon ECS emits an EventBridge event when a daemon task fails to start, for both critical and non-critical daemons.
   *
   * Daemon task launch failures during a deployment are still counted by the deployment circuit breaker. The circuit breaker can roll back an unstable target revision.
   *
   * @public
   */
  critical?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDaemonResponse {
  /**
   * The Amazon Resource Name (ARN) of the daemon.
   *
   * @public
   */
  daemonArn?: string | undefined;

  /**
   * The status of the daemon.
   *
   * @public
   */
  status?: DaemonStatus | undefined;

  /**
   * The Unix timestamp for the time when the daemon was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the initial daemon deployment. This deployment places daemon tasks on each container instance of the specified capacity providers.
   *
   * @public
   */
  deploymentArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDaemonRequest {
  /**
   * The Amazon Resource Name (ARN) of the daemon to delete.
   *
   * @public
   */
  daemonArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDaemonResponse {
  /**
   * The Amazon Resource Name (ARN) of the daemon.
   *
   * @public
   */
  daemonArn?: string | undefined;

  /**
   * The status of the daemon. After you call `DeleteDaemon`, the status changes to `DELETE_IN_PROGRESS`.
   *
   * @public
   */
  status?: DaemonStatus | undefined;

  /**
   * The Unix timestamp for the time when the daemon was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the daemon was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the daemon deployment that was triggered by the delete operation. This deployment drains existing daemon tasks from the container instances.
   *
   * @public
   */
  deploymentArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDaemonRequest {
  /**
   * The Amazon Resource Name (ARN) of the daemon to describe.
   *
   * @public
   */
  daemonArn: string | undefined;
}

/**
 * Information about a capacity provider associated with a daemon revision.
 *
 * @public
 */
export interface DaemonCapacityProvider {
  /**
   * The Amazon Resource Name (ARN) of the capacity provider.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The number of daemon tasks running on this capacity provider.
   *
   * @public
   */
  runningCount?: number | undefined;

  /**
   * The number of instances on this capacity provider that are running without the daemon task. This applies to daemons that aren't critical, where the instance remains available for your other tasks even if the daemon task can't start or stops. These instances aren't included in `runningCount`.
   *
   * @public
   */
  withoutDaemonCount?: number | undefined;
}

/**
 * Details about a daemon revision, including the running task counts per capacity provider.
 *
 * @public
 */
export interface DaemonRevisionDetail {
  /**
   * The Amazon Resource Name (ARN) of the daemon revision.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The capacity providers associated with this daemon revision.
   *
   * @public
   */
  capacityProviders?: DaemonCapacityProvider[] | undefined;

  /**
   * The total number of daemon tasks running for this revision.
   *
   * @public
   */
  totalRunningCount?: number | undefined;

  /**
   * The total number of instances running without the daemon task for this revision, across all capacity providers. These instances aren't included in `totalRunningCount`.
   *
   * @public
   */
  totalWithoutDaemonCount?: number | undefined;
}

/**
 * The detailed information about a daemon.
 *
 * @public
 */
export interface DaemonDetail {
  /**
   * The Amazon Resource Name (ARN) of the daemon.
   *
   * @public
   */
  daemonArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster that the daemon is running in.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The status of the daemon.
   *
   * @public
   */
  status?: DaemonStatus | undefined;

  /**
   * The current daemon revision details, including the running task counts per capacity provider.
   *
   * @public
   */
  currentRevisions?: DaemonRevisionDetail[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the most recent daemon deployment.
   *
   * @public
   */
  deploymentArn?: string | undefined;

  /**
   * The Unix timestamp for the time when the daemon was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the daemon was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDaemonResponse {
  /**
   * The full description of the daemon, including the current revisions, deployment ARN, cluster, and status information.
   *
   * @public
   */
  daemon?: DaemonDetail | undefined;
}

/**
 * The optional filter to narrow the `ListServiceDeployment` results.
 *
 * If you do not specify a value, service deployments that were created before the current time are included in the result.
 *
 * @public
 */
export interface CreatedAt {
  /**
   * Include service deployments in the result that were created before this time. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  before?: Date | undefined;

  /**
   * Include service deployments in the result that were created after this time. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  after?: Date | undefined;
}

/**
 * @public
 */
export interface ListDaemonDeploymentsRequest {
  /**
   * The Amazon Resource Name (ARN) of the daemon to list deployments for.
   *
   * @public
   */
  daemonArn: string | undefined;

  /**
   * An optional filter to narrow the `ListDaemonDeployments` results by deployment status. If you don't specify a status, all deployments are returned.
   *
   * @public
   */
  status?: DaemonDeploymentStatus[] | undefined;

  /**
   * An optional filter to narrow the `ListDaemonDeployments` results by creation time. If you don't specify a time range, all deployments are returned.
   *
   * @public
   */
  createdAt?: CreatedAt | undefined;

  /**
   * The maximum number of daemon deployment results that `ListDaemonDeployments` returned in paginated output. When this parameter is used, `ListDaemonDeployments` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListDaemonDeployments` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListDaemonDeployments` returns up to 20 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a `ListDaemonDeployments` request indicating that more results are available to fulfill the request and further calls will be needed. If `maxResults` was provided, it's possible for the number of results to be fewer than `maxResults`.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of a daemon deployment.
 *
 * @public
 */
export interface DaemonDeploymentSummary {
  /**
   * The Amazon Resource Name (ARN) of the daemon deployment.
   *
   * @public
   */
  daemonDeploymentArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the daemon.
   *
   * @public
   */
  daemonArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster that hosts the daemon.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The status of the daemon deployment.
   *
   * @public
   */
  status?: DaemonDeploymentStatus | undefined;

  /**
   * Information about why the daemon deployment is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The ARN of the daemon revision being deployed.
   *
   * @public
   */
  targetDaemonRevisionArn?: string | undefined;

  /**
   * The time the daemon deployment was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time the daemon deployment started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The time the daemon deployment stopped.
   *
   * @public
   */
  stoppedAt?: Date | undefined;

  /**
   * The time the daemon deployment finished.
   *
   * @public
   */
  finishedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDaemonDeploymentsResponse {
  /**
   * The `nextToken` value to include in a future `ListDaemonDeployments` request. When the results of a `ListDaemonDeployments` request exceed `maxResults`, this value can be used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of daemon deployment summaries.
   *
   * @public
   */
  daemonDeployments?: DaemonDeploymentSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDaemonsRequest {
  /**
   * The Amazon Resource Name (ARN) of the cluster to filter daemons by. If you do not specify a cluster, the default cluster is assumed.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the capacity providers to filter daemons by. Only daemons associated with the specified capacity providers are returned.
   *
   * @public
   */
  capacityProviderArns?: string[] | undefined;

  /**
   * The maximum number of daemon results that `ListDaemons` returned in paginated output. When this parameter is used, `ListDaemons` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListDaemons` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListDaemons` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a `ListDaemons` request indicating that more results are available to fulfill the request and further calls will be needed. If `maxResults` was provided, it's possible for the number of results to be fewer than `maxResults`.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of a daemon.
 *
 * @public
 */
export interface DaemonSummary {
  /**
   * The Amazon Resource Name (ARN) of the daemon.
   *
   * @public
   */
  daemonArn?: string | undefined;

  /**
   * The status of the daemon.
   *
   * @public
   */
  status?: DaemonStatus | undefined;

  /**
   * The Unix timestamp for the time when the daemon was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the daemon was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDaemonsResponse {
  /**
   * The list of daemon summaries.
   *
   * @public
   */
  daemonSummariesList?: DaemonSummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListDaemons` request. When the results of a `ListDaemons` request exceed `maxResults`, this value can be used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDaemonRequest {
  /**
   * The Amazon Resource Name (ARN) of the daemon to update.
   *
   * @public
   */
  daemonArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the daemon task definition to use for the updated daemon.
   *
   * @public
   */
  daemonTaskDefinitionArn: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the capacity providers to associate with the daemon.
   *
   * @public
   */
  capacityProviderArns: string[] | undefined;

  /**
   * Optional deployment parameters that control how the daemon rolls out updates, including the drain percentage, alarm-based rollback, and bake time.
   *
   * @public
   */
  deploymentConfiguration?: DaemonDeploymentConfiguration | undefined;

  /**
   * Specifies whether to propagate the tags from the daemon to the daemon tasks. If you don't specify a value, the tags aren't propagated. You can only propagate tags to daemon tasks during task creation.
   *
   * @public
   */
  propagateTags?: DaemonPropagateTags | undefined;

  /**
   * Specifies whether to turn on Amazon ECS managed tags for the tasks in the daemon. For more information, see [Tagging your Amazon ECS resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * If `true`, the execute command functionality is turned on for all tasks in the daemon. If `false`, the execute command functionality is turned off.
   *
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * If the `critical` parameter of a daemon is `true`, and the daemon task fails, stops, or becomes unhealthy, Amazon ECS drains the container instance and stops the other tasks running on it. If the `critical` parameter is `false`, the daemon task failure doesn't affect the other tasks on the instance. The default value is `true`.
   *
   * A non-critical daemon doesn't block instance registration. The container instance becomes active and continues to run your other tasks, whether the daemon task fails during scale-out or during a deployment.
   *
   * Amazon ECS emits an EventBridge event when a daemon task fails to start, for both critical and non-critical daemons.
   *
   * Daemon task launch failures during a deployment are still counted by the deployment circuit breaker. The circuit breaker can roll back an unstable target revision.
   *
   * @public
   */
  critical?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDaemonResponse {
  /**
   * The Amazon Resource Name (ARN) of the daemon.
   *
   * @public
   */
  daemonArn?: string | undefined;

  /**
   * The status of the daemon.
   *
   * @public
   */
  status?: DaemonStatus | undefined;

  /**
   * The Unix timestamp for the time when the daemon was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the daemon was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the daemon deployment that was triggered by the update.
   *
   * @public
   */
  deploymentArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDaemonRevisionsRequest {
  /**
   * The ARN of the daemon revisions to describe. You can specify up to 20 ARNs.
   *
   * @public
   */
  daemonRevisionArns: string[] | undefined;
}

/**
 * The details about the container image a daemon revision uses.
 *
 * @public
 */
export interface DaemonContainerImage {
  /**
   * The name of the container.
   *
   * @public
   */
  containerName?: string | undefined;

  /**
   * The container image digest.
   *
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * The container image.
   *
   * @public
   */
  image?: string | undefined;
}

/**
 * Information about a daemon revision. A daemon revision is a snapshot of the daemon's configuration at the time a deployment was initiated.
 *
 * @public
 */
export interface DaemonRevision {
  /**
   * The Amazon Resource Name (ARN) of the daemon revision.
   *
   * @public
   */
  daemonRevisionArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster that hosts the daemon.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the daemon for this revision.
   *
   * @public
   */
  daemonArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the daemon task definition used by this revision.
   *
   * @public
   */
  daemonTaskDefinitionArn?: string | undefined;

  /**
   * The Unix timestamp for the time when the daemon revision was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The container images used by the daemon revision.
   *
   * @public
   */
  containerImages?: DaemonContainerImage[] | undefined;

  /**
   * Specifies whether tags are propagated from the daemon to the daemon tasks.
   *
   * @public
   */
  propagateTags?: DaemonPropagateTags | undefined;

  /**
   * Specifies whether Amazon ECS managed tags are turned on for the daemon tasks.
   *
   * @public
   */
  enableECSManagedTags?: boolean | undefined;

  /**
   * Specifies whether the execute command functionality is turned on for the daemon tasks.
   *
   * @public
   */
  enableExecuteCommand?: boolean | undefined;

  /**
   * If the `critical` parameter of this daemon revision is `true`, and the daemon task fails, stops, or becomes unhealthy, Amazon ECS drains the container instance and stops the other tasks running on it. If the parameter is `false`, the daemon task failure doesn't affect the other tasks on the instance, and doesn't block instance registration. The default value is `true`.
   *
   * @public
   */
  critical?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeDaemonRevisionsResponse {
  /**
   * The list of daemon revisions.
   *
   * @public
   */
  daemonRevisions?: DaemonRevision[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * @public
 */
export interface DeleteDaemonTaskDefinitionRequest {
  /**
   * The `family` and `revision` (`family:revision`) or full Amazon Resource Name (ARN) of the daemon task definition to delete.
   *
   * @public
   */
  daemonTaskDefinition: string | undefined;
}

/**
 * @public
 */
export interface DeleteDaemonTaskDefinitionResponse {
  /**
   * The full Amazon Resource Name (ARN) of the deleted daemon task definition.
   *
   * @public
   */
  daemonTaskDefinitionArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDaemonTaskDefinitionRequest {
  /**
   * The `family` for the latest `ACTIVE` revision, `family` and `revision` (`family:revision`) for a specific revision in the family, or full Amazon Resource Name (ARN) of the daemon task definition to describe.
   *
   * @public
   */
  daemonTaskDefinition: string | undefined;
}

/**
 * The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.
 *
 * Your Amazon ECS container instances require at least version 1.26.0 of the container agent to use container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide*. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the `ecs-init` package. If your container instances are launched from version `20190301` or later, then they contain the required versions of the container agent and `ecs-init`. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * > **Note:**
 * >
 * > For tasks that use the Fargate launch type, the task or service requires the following platforms:
 * >
 * > - Linux platform version `1.3.0` or later.
 * > - Windows platform version `1.0.0` or later.
 *
 * For more information about how to create a container dependency, see [Container dependency](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/example_task_definitions.html#example_task_definition-containerdependency) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface ContainerDependency {
  /**
   * The name of a container.
   *
   * @public
   */
  containerName: string | undefined;

  /**
   * The dependency condition of the container. The following are the available conditions and their behavior:
   *
   * - `START` - This condition emulates the behavior of links and volumes today. It validates that a dependent container is started before permitting other containers to start.
   * - `COMPLETE` - This condition validates that a dependent container runs to completion (exits) before permitting other containers to start. This can be useful for nonessential containers that run a script and then exit. This condition can't be set on an essential container.
   * - `SUCCESS` - This condition is the same as `COMPLETE`, but it also requires that the container exits with a `zero` status. This condition can't be set on an essential container.
   * - `HEALTHY` - This condition validates that the dependent container passes its Docker health check before permitting other containers to start. This requires that the dependent container has health checks configured. This condition is confirmed only at task startup.
   *
   * @public
   */
  condition: ContainerCondition | undefined;
}

/**
 * A list of files containing the environment variables to pass to a container. You can specify up to ten environment files. The file must have a `.env` file extension. Each line in an environment file should contain an environment variable in `VARIABLE=VALUE` format. Lines beginning with `#` are treated as comments and are ignored.
 *
 * If there are environment variables specified using the `environment` parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see [Use a file to pass environment variables to a container](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/use-environment-file.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * Environment variable files are objects in Amazon S3 and all Amazon S3 security considerations apply.
 *
 * You must use the following platforms for the Fargate launch type:
 *
 * - Linux platform version `1.4.0` or later.
 * - Windows platform version `1.0.0` or later.
 *
 * Consider the following when using the Fargate launch type:
 *
 * - The file is handled like a native Docker env-file.
 * - There is no support for shell escape handling.
 * - The container entry point interperts the `VARIABLE` values.
 *
 * @public
 */
export interface EnvironmentFile {
  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment variable file.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The file type to use. Environment files are objects in Amazon S3. The only supported value is `s3`.
   *
   * @public
   */
  type: EnvironmentFileType | undefined;
}

/**
 * The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see [Custom log routing](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface FirelensConfiguration {
  /**
   * The log router to use. The valid values are `fluentd` or `fluentbit`.
   *
   * @public
   */
  type: FirelensConfigurationType | undefined;

  /**
   * The options to use when configuring the log router. This field is optional and can be used to specify a custom configuration file or to add additional metadata, such as the task, task definition, cluster, and container instance details to the log event. If specified, the syntax to use is `"options":\{"enable-ecs-log-metadata":"true|false","config-file-type:"s3|file","config-file-value":"arn:aws:s3:::mybucket/fluent.conf|filepath"\}`. For more information, see [Creating a task definition that uses a FireLens configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html#firelens-taskdef) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * > **Note:** Tasks hosted on Fargate only support the `file` configuration file type.
   *
   * @public
   */
  options?: Record<string, string> | undefined;
}

/**
 * An object representing a container health check. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image (such as those specified in a parent image or from the image's Dockerfile). This configuration maps to the `HEALTHCHECK` parameter of docker run.
 *
 * > **Note:** The Amazon ECS container agent only monitors and reports on the health checks specified in the task definition. Amazon ECS does not monitor Docker health checks that are embedded in a container image and not specified in the container definition. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image.
 *
 * You can view the health status of both individual containers and a task with the DescribeTasks API operation or when viewing the task details in the console.
 *
 * The health check is designed to make sure that your containers survive agent restarts, upgrades, or temporary unavailability.
 *
 * Amazon ECS performs health checks on containers with the default that launched the container instance or the task.
 *
 * The following describes the possible `healthStatus` values for a container:
 *
 * - `HEALTHY`-The container health check has passed successfully.
 * - `UNHEALTHY`-The container health check has failed.
 * - `UNKNOWN`-The container health check is being evaluated, there's no container health check defined, or Amazon ECS doesn't have the health status of the container.
 *
 * The following describes the possible `healthStatus` values based on the container health checker status of essential containers in the task with the following priority order (high to low):
 *
 * - `UNHEALTHY`-One or more essential containers have failed their health check.
 * - `UNKNOWN`-Any essential container running within the task is in an `UNKNOWN` state and no other essential containers have an `UNHEALTHY` state.
 * - `HEALTHY`-All essential containers within the task have passed their health checks.
 *
 * Consider the following task health example with 2 containers.
 *
 * - If Container1 is `UNHEALTHY` and Container2 is `UNKNOWN`, the task health is `UNHEALTHY`.
 * - If Container1 is `UNHEALTHY` and Container2 is `HEALTHY`, the task health is `UNHEALTHY`.
 * - If Container1 is `HEALTHY` and Container2 is `UNKNOWN`, the task health is `UNKNOWN`.
 * - If Container1 is `HEALTHY` and Container2 is `HEALTHY`, the task health is `HEALTHY`.
 *
 * Consider the following task health example with 3 containers.
 *
 * - If Container1 is `UNHEALTHY` and Container2 is `UNKNOWN`, and Container3 is `UNKNOWN`, the task health is `UNHEALTHY`.
 * - If Container1 is `UNHEALTHY` and Container2 is `UNKNOWN`, and Container3 is `HEALTHY`, the task health is `UNHEALTHY`.
 * - If Container1 is `UNHEALTHY` and Container2 is `HEALTHY`, and Container3 is `HEALTHY`, the task health is `UNHEALTHY`.
 * - If Container1 is `HEALTHY` and Container2 is `UNKNOWN`, and Container3 is `HEALTHY`, the task health is `UNKNOWN`.
 * - If Container1 is `HEALTHY` and Container2 is `UNKNOWN`, and Container3 is `UNKNOWN`, the task health is `UNKNOWN`.
 * - If Container1 is `HEALTHY` and Container2 is `HEALTHY`, and Container3 is `HEALTHY`, the task health is `HEALTHY`.
 *
 * If a task is run manually, and not as part of a service, the task will continue its lifecycle regardless of its health status. For tasks that are part of a service, if the task reports as unhealthy then the task will be stopped and the service scheduler will replace it.
 *
 * When a container health check fails for a task that is part of a service, the following process occurs:
 *
 * 1. The task is marked as `UNHEALTHY`.
 * 2. The unhealthy task will be stopped, and during the stopping process, it will go through the following states:
 *
 *    - `DEACTIVATING` - In this state, Amazon ECS performs additional steps before stopping the task. For example, for tasks that are part of services configured to use Elastic Load Balancing target groups, target groups will be deregistered in this state.
 *    - `STOPPING` - The task is in the process of being stopped.
 *    - `DEPROVISIONING` - Resources associated with the task are being cleaned up.
 *    - `STOPPED` - The task has been completely stopped.
 * 3. After the old task stops, a new task will be launched to ensure service operation, and the new task will go through the following lifecycle:
 *
 *    - `PROVISIONING` - Resources required for the task are being provisioned.
 *    - `PENDING` - The task is waiting to be placed on a container instance.
 *    - `ACTIVATING` - In this state, Amazon ECS pulls container images, creates containers, configures task networking, registers load balancer target groups, and configures service discovery status.
 *    - `RUNNING` - The task is running and performing its work.
 *
 * For more detailed information about task lifecycle states, see [Task lifecycle](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-lifecycle-explanation.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * The following are notes about container health check support:
 *
 * - If the Amazon ECS container agent becomes disconnected from the Amazon ECS service, this won't cause a container to transition to an `UNHEALTHY` status. This is by design, to ensure that containers remain running during agent restarts or temporary unavailability. The health check status is the "last heard from" response from the Amazon ECS agent, so if the container was considered `HEALTHY` prior to the disconnect, that status will remain until the agent reconnects and another health check occurs. There are no assumptions made about the status of the container health checks.
 * - Container health checks require version `1.17.0` or greater of the Amazon ECS container agent. For more information, see [Updating the Amazon ECS container agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html).
 * - Container health checks are supported for Fargate tasks if you're using platform version `1.1.0` or greater. For more information, see [Fargate platform versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html).
 * - Container health checks aren't supported for tasks that are part of a service that's configured to use a Classic Load Balancer.
 *
 * For an example of how to specify a task definition with multiple containers where container dependency is specified, see [Container dependency](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/example_task_definitions.html#example_task_definition-containerdependency) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface HealthCheck {
  /**
   * A string array representing the command that the container runs to determine if it is healthy. The string array must start with `CMD` to run the command arguments directly, or `CMD-SHELL` to run the command with the container's default shell.
   *
   * When you use the Amazon Web Services Management Console JSON panel, the Command Line Interface, or the APIs, enclose the list of commands in double quotes and brackets.
   *
   * `[ "CMD-SHELL", "curl -f http://localhost/ || exit 1" ]`
   *
   * You don't include the double quotes and brackets when you use the Amazon Web Services Management Console.
   *
   * `CMD-SHELL, curl -f http://localhost/ || exit 1`
   *
   * An exit code of 0 indicates success, and non-zero exit code indicates failure. For more information, see `HealthCheck` in the docker container create command.
   *
   * @public
   */
  command: string[] | undefined;

  /**
   * The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds. This value applies only when you specify a `command`.
   *
   * @public
   */
  interval?: number | undefined;

  /**
   * The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5. This value applies only when you specify a `command`.
   *
   * @public
   */
  timeout?: number | undefined;

  /**
   * The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is 3. This value applies only when you specify a `command`.
   *
   * @public
   */
  retries?: number | undefined;

  /**
   * The optional grace period to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You can specify between 0 and 300 seconds. By default, the `startPeriod` is off. This value applies only when you specify a `command`.
   *
   * > **Note:** If a health check succeeds within the `startPeriod`, then the container is considered healthy and any subsequent failures count toward the maximum number of retries.
   *
   * @public
   */
  startPeriod?: number | undefined;
}

/**
 * The Linux capabilities to add or remove from the default Docker configuration for a container defined in the task definition. For more detailed information about these Linux capabilities, see the [capabilities(7)](http://man7.org/linux/man-pages/man7/capabilities.7.html) Linux manual page.
 *
 * The following describes how Docker processes the Linux capabilities specified in the `add` and `drop` request parameters. For information about the latest behavior, see [Docker Compose: order of cap_drop and cap_add](https://forums.docker.com/t/docker-compose-order-of-cap-drop-and-cap-add/97136/1) in the Docker Community Forum.
 *
 * - When the container is a privleged container, the container capabilities are all of the default Docker capabilities. The capabilities specified in the `add` request parameter, and the `drop` request parameter are ignored.
 * - When the `add` request parameter is set to ALL, the container capabilities are all of the default Docker capabilities, excluding those specified in the `drop` request parameter.
 * - When the `drop` request parameter is set to ALL, the container capabilities are the capabilities specified in the `add` request parameter.
 * - When the `add` request parameter and the `drop` request parameter are both empty, the capabilities the container capabilities are all of the default Docker capabilities.
 * - The default is to first drop the capabilities specified in the `drop` request parameter, and then add the capabilities specified in the `add` request parameter.
 *
 * @public
 */
export interface KernelCapabilities {
  /**
   * The Linux capabilities for the container that have been added to the default configuration provided by Docker. This parameter maps to `CapAdd` in the docker container create command and the `--cap-add` option to docker run.
   *
   * > **Note:** Tasks launched on Fargate only support adding the `SYS_PTRACE` kernel capability.
   *
   * Valid values: `"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM"`
   *
   * @public
   */
  add?: string[] | undefined;

  /**
   * The Linux capabilities for the container that have been removed from the default configuration provided by Docker. This parameter maps to `CapDrop` in the docker container create command and the `--cap-drop` option to docker run.
   *
   * Valid values: `"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM"`
   *
   * @public
   */
  drop?: string[] | undefined;
}

/**
 * An object representing a container instance host device.
 *
 * @public
 */
export interface Device {
  /**
   * The path for the device on the host container instance.
   *
   * @public
   */
  hostPath: string | undefined;

  /**
   * The path inside the container at which to expose the host device.
   *
   * @public
   */
  containerPath?: string | undefined;

  /**
   * The explicit permissions to provide to the container for the device. By default, the container has permissions for `read`, `write`, and `mknod` for the device.
   *
   * @public
   */
  permissions?: DeviceCgroupPermission[] | undefined;
}

/**
 * The container path, mount options, and size of the tmpfs mount.
 *
 * @public
 */
export interface Tmpfs {
  /**
   * The absolute file path where the tmpfs volume is to be mounted.
   *
   * @public
   */
  containerPath: string | undefined;

  /**
   * The maximum size (in MiB) of the tmpfs volume.
   *
   * @public
   */
  size: number | undefined;

  /**
   * The list of tmpfs volume mount options.
   *
   * Valid values: `"defaults" | "ro" | "rw" | "suid" | "nosuid" | "dev" | "nodev" | "exec" | "noexec" | "sync" | "async" | "dirsync" | "remount" | "mand" | "nomand" | "atime" | "noatime" | "diratime" | "nodiratime" | "bind" | "rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime" | "norelatime" | "strictatime" | "nostrictatime" | "mode" | "uid" | "gid" | "nr_inodes" | "nr_blocks" | "mpol"`
   *
   * @public
   */
  mountOptions?: string[] | undefined;
}

/**
 * The Linux-specific options that are applied to the daemon container, such as Linux kernel capabilities.
 *
 * @public
 */
export interface DaemonLinuxParameters {
  /**
   * The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
   *
   * @public
   */
  capabilities?: KernelCapabilities | undefined;

  /**
   * Any host devices to expose to the container.
   *
   * @public
   */
  devices?: Device[] | undefined;

  /**
   * Run an `init` process inside the container that forwards signals and reaps processes.
   *
   * @public
   */
  initProcessEnabled?: boolean | undefined;

  /**
   * The container path, mount options, and size (in MiB) of the tmpfs mount.
   *
   * @public
   */
  tmpfs?: Tmpfs[] | undefined;
}

/**
 * An object representing the secret to expose to your container. Secrets can be exposed to a container in the following ways:
 *
 * - To inject sensitive data into your containers as environment variables, use the `secrets` container definition parameter.
 * - To reference sensitive information in the log configuration of a container, use the `secretOptions` container definition parameter.
 *
 * For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface Secret {
  /**
   * The name of the secret.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The secret to expose to the container. The supported values are either the full ARN of the Secrets Manager secret or the full ARN of the parameter in the SSM Parameter Store.
   *
   * For information about the require Identity and Access Management permissions, see [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html#secrets-iam) (for Secrets Manager) or [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html) (for Systems Manager Parameter store) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * > **Note:** If the SSM Parameter Store parameter exists in the same Region as the task you're launching, then you can use either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.
   *
   * @public
   */
  valueFrom: string | undefined;
}

/**
 * The log configuration for the container. This parameter maps to `LogConfig` in the docker container create command and the `--log-driver` option to docker run.
 *
 * By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition.
 *
 * Understand the following when specifying a log configuration for your containers.
 *
 * - Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.
 *
 *   For tasks on Fargate, the supported log drivers are `awslogs`, `splunk`, and `awsfirelens`.
 *
 *   For tasks hosted on Amazon EC2 instances, the supported log drivers are `awslogs`, `fluentd`, `gelf`, `json-file`, `journald`,`syslog`, `splunk`, and `awsfirelens`.
 * - This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.
 * - For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the `ECS_AVAILABLE_LOGGING_DRIVERS` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS container agent configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
 * - For tasks that are on Fargate, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.
 *
 * @public
 */
export interface LogConfiguration {
  /**
   * The log driver to use for the container.
   *
   * For tasks on Fargate, the supported log drivers are `awslogs`, `splunk`, and `awsfirelens`.
   *
   * For tasks hosted on Amazon EC2 instances, the supported log drivers are `awslogs`, `fluentd`, `gelf`, `json-file`, `journald`, `syslog`, `splunk`, and `awsfirelens`.
   *
   * For more information about using the `awslogs` log driver, see [Send Amazon ECS logs to CloudWatch](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * For more information about using the `awsfirelens` log driver, see [Send Amazon ECS logs to an Amazon Web Services service or Amazon Web Services Partner](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html).
   *
   * > **Note:** If you have a custom driver that isn't listed, you can fork the Amazon ECS container agent project that's [available on GitHub](https://github.com/aws/amazon-ecs-agent) and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, we don't currently provide support for running modified copies of this software.
   *
   * @public
   */
  logDriver: LogDriver | undefined;

  /**
   * The configuration options to send to the log driver.
   *
   * The options you can specify depend on the log driver. Some of the options you can specify when you use the `awslogs` log driver to route logs to Amazon CloudWatch include the following:
   *
   * - **awslogs-create-group**
   *
   *   Required: No
   *
   *   Specify whether you want the log group to be created automatically. If this option isn't specified, it defaults to `false`.
   *
   *   > **Note:** Your IAM policy must include the `logs:CreateLogGroup` permission before you attempt to use `awslogs-create-group`.
   *
   * - **awslogs-region**
   *
   *   Required: Yes
   *
   *   Specify the Amazon Web Services Region that the `awslogs` log driver is to send your Docker logs to. You can choose to send all of your logs from clusters in different Regions to a single region in CloudWatch Logs. This is so that they're all visible in one location. Otherwise, you can separate them by Region for more granularity. Make sure that the specified log group exists in the Region that you specify with this option.
   *
   * - **awslogs-group**
   *
   *   Required: Yes
   *
   *   Make sure to specify a log group that the `awslogs` log driver sends its log streams to.
   *
   * - **awslogs-stream-prefix**
   *
   *   Required: Yes, when using Fargate.Optional when using EC2.
   *
   *   Use the `awslogs-stream-prefix` option to associate a log stream with the specified prefix, the container name, and the ID of the Amazon ECS task that the container belongs to. If you specify a prefix with this option, then the log stream takes the format `prefix-name/container-name/ecs-task-id`.
   *
   *   If you don't specify a prefix with this option, then the log stream is named after the container ID that's assigned by the Docker daemon on the container instance. Because it's difficult to trace logs back to the container that sent them with just the Docker container ID (which is only available on the container instance), we recommend that you specify a prefix with this option.
   *
   *   For Amazon ECS services, you can use the service name as the prefix. Doing so, you can trace log streams to the service that the container belongs to, the name of the container that sent them, and the ID of the task that the container belongs to.
   *
   *   You must specify a stream-prefix for your logs to have your logs appear in the Log pane when using the Amazon ECS console.
   *
   * - **awslogs-datetime-format**
   *
   *   Required: No
   *
   *   This option defines a multiline start pattern in Python `strftime` format. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages.
   *
   *   One example of a use case for using this format is for parsing output such as a stack dump, which might otherwise be logged in multiple entries. The correct pattern allows it to be captured in a single entry.
   *
   *   For more information, see [awslogs-datetime-format](https://docs.docker.com/config/containers/logging/awslogs/#awslogs-datetime-format).
   *
   *   You cannot configure both the `awslogs-datetime-format` and `awslogs-multiline-pattern` options.
   *
   *   > **Note:** Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance.
   *
   * - **awslogs-multiline-pattern**
   *
   *   Required: No
   *
   *   This option defines a multiline start pattern that uses a regular expression. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages.
   *
   *   For more information, see [awslogs-multiline-pattern](https://docs.docker.com/config/containers/logging/awslogs/#awslogs-multiline-pattern).
   *
   *   This option is ignored if `awslogs-datetime-format` is also configured.
   *
   *   You cannot configure both the `awslogs-datetime-format` and `awslogs-multiline-pattern` options.
   *
   *   > **Note:** Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance.
   *
   * The following options apply to all supported log drivers.
   *
   * - **mode**
   *
   *   Required: No
   *
   *   Valid values: `non-blocking` | `blocking`
   *
   *   This option defines the delivery mode of log messages from the container to the log driver specified using `logDriver`. The delivery mode you choose affects application availability when the flow of logs from container is interrupted.
   *
   *   If you use the `blocking` mode and the flow of logs is interrupted, calls from container code to write to the `stdout` and `stderr` streams will block. The logging thread of the application will block as a result. This may cause the application to become unresponsive and lead to container healthcheck failure.
   *
   *   If you use the `non-blocking` mode, the container's logs are instead stored in an in-memory intermediate buffer configured with the `max-buffer-size` option. This prevents the application from becoming unresponsive when logs cannot be sent. We recommend using this mode if you want to ensure service availability and are okay with some log loss. For more information, see [Preventing log loss with non-blocking mode in the `awslogs` container log driver](http://aws.amazon.com/blogs/containers/preventing-log-loss-with-non-blocking-mode-in-the-awslogs-container-log-driver/).
   *
   *   You can set a default `mode` for all containers in a specific Amazon Web Services Region by using the `defaultLogDriverMode` account setting. If you don't specify the `mode` option or configure the account setting, Amazon ECS will default to the `non-blocking` mode. For more information about the account setting, see [Default log driver mode](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#default-log-driver-mode) in the *Amazon Elastic Container Service Developer Guide*.
   *
   *   > **Note:**
   *   >
   *   > On June 25, 2025, Amazon ECS changed the default log driver mode from `blocking` to `non-blocking` to prioritize task availability over logging. To continue using the `blocking` mode after this change, do one of the following:
   *   >
   *   > - Set the `mode` option in your container definition's `logConfiguration` as `blocking`.
   *   > - Set the `defaultLogDriverMode` account setting to `blocking`.
   *
   * - **max-buffer-size**
   *
   *   Required: No
   *
   *   Default value: `10m`
   *
   *   When `non-blocking` mode is used, the `max-buffer-size` log option controls the size of the buffer that's used for intermediate message storage. Make sure to specify an adequate buffer size based on your application. When the buffer fills up, further logs cannot be stored. Logs that cannot be stored are lost.
   *
   * To route logs using the `splunk` log router, you need to specify a `splunk-token` and a `splunk-url`.
   *
   * When you use the `awsfirelens` log router to route logs to an Amazon Web Services Service or Amazon Web Services Partner Network destination for log storage and analytics, you can set the `log-driver-buffer-limit` option to limit the number of events that are buffered in memory, before being sent to the log router container. It can help to resolve potential log loss issue because high throughput might result in memory running out for the buffer inside of Docker.
   *
   * Other options you can specify when using `awsfirelens` to route logs depend on the destination. When you export logs to Amazon Data Firehose, you can specify the Amazon Web Services Region with `region` and a name for the log stream with `delivery_stream`.
   *
   * When you export logs to Amazon Kinesis Data Streams, you can specify an Amazon Web Services Region with `region` and a data stream name with `stream`.
   *
   * When you export logs to Amazon OpenSearch Service, you can specify options like `Name`, `Host` (OpenSearch Service endpoint without protocol), `Port`, `Index`, `Type`, `Aws_auth`, `Aws_region`, `Suppress_Type_Name`, and `tls`. For more information, see [Under the hood: FireLens for Amazon ECS Tasks](http://aws.amazon.com/blogs/containers/under-the-hood-firelens-for-amazon-ecs-tasks/).
   *
   * When you export logs to Amazon S3, you can specify the bucket using the `bucket` option. You can also specify `region`, `total_file_size`, `upload_timeout`, and `use_put_object` as options.
   *
   * This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version --format '\{\{.Server.APIVersion\}\}'`
   *
   * @public
   */
  options?: Record<string, string> | undefined;

  /**
   * The secrets to pass to the log configuration. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  secretOptions?: Secret[] | undefined;
}

/**
 * The details for a volume mount point that's used in a container definition.
 *
 * @public
 */
export interface MountPoint {
  /**
   * The name of the volume to mount. Must be a volume name referenced in the `name` parameter of task definition `volume`.
   *
   * @public
   */
  sourceVolume?: string | undefined;

  /**
   * The path on the container to mount the host volume at.
   *
   * @public
   */
  containerPath?: string | undefined;

  /**
   * If this value is `true`, the container has read-only access to the volume. If this value is `false`, then the container can write to the volume. The default value is `false`.
   *
   * @public
   */
  readOnly?: boolean | undefined;
}

/**
 * The repository credentials for private registry authentication.
 *
 * @public
 */
export interface RepositoryCredentials {
  /**
   * The Amazon Resource Name (ARN) of the secret containing the private repository credentials.
   *
   * > **Note:** When you use the Amazon ECS API, CLI, or Amazon Web Services SDK, if the secret exists in the same Region as the task that you're launching then you can use either the full ARN or the name of the secret. When you use the Amazon Web Services Management Console, you must specify the full ARN of the secret.
   *
   * @public
   */
  credentialsParameter: string | undefined;
}

/**
 * You can enable a restart policy for each container defined in your task definition, to overcome transient failures faster and maintain task availability. When you enable a restart policy for a container, Amazon ECS can restart the container if it exits, without needing to replace the task. For more information, see [Restart individual containers in Amazon ECS tasks with container restart policies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-restart-policy.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface ContainerRestartPolicy {
  /**
   * Specifies whether a restart policy is enabled for the container.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * A list of exit codes that Amazon ECS will ignore and not attempt a restart on. You can specify a maximum of 50 container exit codes. By default, Amazon ECS does not ignore any exit codes.
   *
   * @public
   */
  ignoredExitCodes?: number[] | undefined;

  /**
   * A period of time (in seconds) that the container must run for before a restart can be attempted. A container can be restarted only once every `restartAttemptPeriod` seconds. If a container isn't able to run for this time period and exits early, it will not be restarted. You can set a minimum `restartAttemptPeriod` of 60 seconds and a maximum `restartAttemptPeriod` of 1800 seconds. By default, a container must run for 300 seconds before it can be restarted.
   *
   * @public
   */
  restartAttemptPeriod?: number | undefined;
}

/**
 * A list of namespaced kernel parameters to set in the container. This parameter maps to `Sysctls` in the docker container create command and the `--sysctl` option to docker run. For example, you can configure `net.ipv4.tcp_keepalive_time` setting to maintain longer lived connections.
 *
 * We don't recommend that you specify network-related `systemControls` parameters for multiple containers in a single task that also uses either the `awsvpc` or `host` network mode. Doing this has the following disadvantages:
 *
 * - For tasks that use the `awsvpc` network mode including Fargate, if you set `systemControls` for any container, it applies to all containers in the task. If you set different `systemControls` for multiple containers in a single task, the container that's started last determines which `systemControls` take effect.
 * - For tasks that use the `host` network mode, the network namespace `systemControls` aren't supported.
 *
 * If you're setting an IPC resource namespace to use for the containers in the task, the following conditions apply to your system controls. For more information, see [IPC mode](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_definition_ipcmode).
 *
 * - For tasks that use the `host` IPC mode, IPC namespace `systemControls` aren't supported.
 * - For tasks that use the `task` IPC mode, IPC namespace `systemControls` values apply to all containers within a task.
 *
 * > **Note:** This parameter is not supported for Windows containers.
 *
 * > **Note:** This parameter is only supported for tasks that are hosted on Fargate if the tasks are using platform version `1.4.0` or later (Linux). This isn't supported for Windows containers on Fargate.
 *
 * @public
 */
export interface SystemControl {
  /**
   * The namespaced kernel parameter to set a `value` for.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The namespaced kernel parameter to set a `value` for.
   *
   * Valid IPC namespace values: `"kernel.msgmax" | "kernel.msgmnb" | "kernel.msgmni" | "kernel.sem" | "kernel.shmall" | "kernel.shmmax" | "kernel.shmmni" | "kernel.shm_rmid_forced"`, and `Sysctls` that start with `"fs.mqueue.*"`
   *
   * Valid network namespace values: `Sysctls` that start with `"net.*"`. Only namespaced `Sysctls` that exist within the container starting with "net.* are accepted.
   *
   * All of these values are supported by Fargate.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * The `ulimit` settings to pass to the container.
 *
 * Amazon ECS tasks hosted on Fargate use the default resource limit values set by the operating system with the exception of the `nofile` resource limit parameter which Fargate overrides. The `nofile` resource limit sets a restriction on the number of open files that a container can use. The default `nofile` soft limit is `65535` and the default hard limit is `65535`.
 *
 * You can specify the `ulimit` settings for a container in a task definition.
 *
 * @public
 */
export interface Ulimit {
  /**
   * The `type` of the `ulimit`.
   *
   * @public
   */
  name: UlimitName | undefined;

  /**
   * The soft limit for the `ulimit` type. The value can be specified in bytes, seconds, or as a count, depending on the `type` of the `ulimit`.
   *
   * @public
   */
  softLimit: number | undefined;

  /**
   * The hard limit for the `ulimit` type. The value can be specified in bytes, seconds, or as a count, depending on the `type` of the `ulimit`.
   *
   * @public
   */
  hardLimit: number | undefined;
}

/**
 * A container definition for a daemon task. Daemon container definitions describe the containers that run as part of a daemon task on container instances managed by capacity providers.
 *
 * @public
 */
export interface DaemonContainerDefinition {
  /**
   * The name of the container. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The image used to start the container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with either `repository-url/image:tag` or `repository-url/image@digest`.
   *
   * @public
   */
  image: string | undefined;

  /**
   * The amount (in MiB) of memory to present to the container. If the container attempts to exceed the memory specified here, the container is killed.
   *
   * @public
   */
  memory?: number | undefined;

  /**
   * The soft limit (in MiB) of memory to reserve for the container.
   *
   * @public
   */
  memoryReservation?: number | undefined;

  /**
   * The private repository authentication credentials to use.
   *
   * @public
   */
  repositoryCredentials?: RepositoryCredentials | undefined;

  /**
   * The container health check command and associated configuration parameters for the container.
   *
   * @public
   */
  healthCheck?: HealthCheck | undefined;

  /**
   * The number of `cpu` units reserved for the container.
   *
   * @public
   */
  cpu?: number | undefined;

  /**
   * If the `essential` parameter of a container is marked as `true`, and that container fails or stops for any reason, all other containers that are part of the task are stopped.
   *
   * @public
   */
  essential?: boolean | undefined;

  /**
   * The entry point that's passed to the container.
   *
   * @public
   */
  entryPoint?: string[] | undefined;

  /**
   * The command that's passed to the container.
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * The working directory to run commands inside the container in.
   *
   * @public
   */
  workingDirectory?: string | undefined;

  /**
   * A list of files containing the environment variables to pass to a container.
   *
   * @public
   */
  environmentFiles?: EnvironmentFile[] | undefined;

  /**
   * The environment variables to pass to a container.
   *
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * The secrets to pass to the container.
   *
   * @public
   */
  secrets?: Secret[] | undefined;

  /**
   * When this parameter is true, the container is given read-only access to its root file system.
   *
   * @public
   */
  readonlyRootFilesystem?: boolean | undefined;

  /**
   * The mount points for data volumes in your container.
   *
   * @public
   */
  mountPoints?: MountPoint[] | undefined;

  /**
   * The log configuration specification for the container.
   *
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * The FireLens configuration for the container. This is used to specify and configure a log router for container logs.
   *
   * @public
   */
  firelensConfiguration?: FirelensConfiguration | undefined;

  /**
   * When this parameter is true, the container is given elevated privileges on the host container instance (similar to the `root` user).
   *
   * @public
   */
  privileged?: boolean | undefined;

  /**
   * The user to use inside the container.
   *
   * @public
   */
  user?: string | undefined;

  /**
   * A list of `ulimits` to set in the container.
   *
   * @public
   */
  ulimits?: Ulimit[] | undefined;

  /**
   * Linux-specific modifications that are applied to the container configuration, such as Linux kernel capabilities.
   *
   * @public
   */
  linuxParameters?: DaemonLinuxParameters | undefined;

  /**
   * The dependencies defined for container startup and shutdown. A container can contain multiple dependencies on other containers in a task definition.
   *
   * @public
   */
  dependsOn?: ContainerDependency[] | undefined;

  /**
   * Time duration (in seconds) to wait before giving up on resolving dependencies for a container.
   *
   * @public
   */
  startTimeout?: number | undefined;

  /**
   * Time duration (in seconds) to wait before the container is forcefully killed if it doesn't exit normally on its own.
   *
   * @public
   */
  stopTimeout?: number | undefined;

  /**
   * A list of namespaced kernel parameters to set in the container.
   *
   * @public
   */
  systemControls?: SystemControl[] | undefined;

  /**
   * When this parameter is `true`, you can deploy containerized applications that require `stdin` or a `tty` to be allocated.
   *
   * @public
   */
  interactive?: boolean | undefined;

  /**
   * When this parameter is `true`, a TTY is allocated.
   *
   * @public
   */
  pseudoTerminal?: boolean | undefined;

  /**
   * The restart policy for the container. When you set up a restart policy, Amazon ECS can restart the container without needing to replace the task.
   *
   * @public
   */
  restartPolicy?: ContainerRestartPolicy | undefined;
}

/**
 * Details on a container instance bind mount host volume.
 *
 * @public
 */
export interface HostVolumeProperties {
  /**
   * When the `host` parameter is used, specify a `sourcePath` to declare the path on the host container instance that's presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the `host` parameter contains a `sourcePath` file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the `sourcePath` value doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.
   *
   * If you're using the Fargate launch type, the `sourcePath` parameter is not supported.
   *
   * @public
   */
  sourcePath?: string | undefined;
}

/**
 * A data volume definition for a daemon task.
 *
 * @public
 */
export interface DaemonVolume {
  /**
   * The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The contents of the `host` parameter determine whether your bind mount host volume persists on the host container instance and where it's stored.
   *
   * @public
   */
  host?: HostVolumeProperties | undefined;
}

/**
 * The details of a daemon task definition. A daemon task definition is a template that describes the containers that form a daemon. Daemons deploy cross-cutting software agents independently across your Amazon ECS infrastructure.
 *
 * @public
 */
export interface DaemonTaskDefinition {
  /**
   * The full Amazon Resource Name (ARN) of the daemon task definition.
   *
   * @public
   */
  daemonTaskDefinitionArn?: string | undefined;

  /**
   * The name of a family that this daemon task definition is registered to.
   *
   * @public
   */
  family?: string | undefined;

  /**
   * The revision of the daemon task in a particular family. The revision is a version number of a daemon task definition in a family. When you register a daemon task definition for the first time, the revision is `1`. Each time that you register a new revision of a daemon task definition in the same family, the revision value always increases by one.
   *
   * @public
   */
  revision?: number | undefined;

  /**
   * The short name or full Amazon Resource Name (ARN) of the IAM role that grants containers in the daemon task permission to call Amazon Web Services APIs on your behalf.
   *
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make Amazon Web Services API calls on your behalf.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * A list of container definitions in JSON format that describe the containers that make up the daemon task.
   *
   * @public
   */
  containerDefinitions?: DaemonContainerDefinition[] | undefined;

  /**
   * The list of data volume definitions for the daemon task.
   *
   * @public
   */
  volumes?: DaemonVolume[] | undefined;

  /**
   * The number of CPU units used by the daemon task.
   *
   * @public
   */
  cpu?: string | undefined;

  /**
   * The amount of memory (in MiB) used by the daemon task.
   *
   * @public
   */
  memory?: string | undefined;

  /**
   * The status of the daemon task definition. The valid values are `ACTIVE`, `DELETE_IN_PROGRESS`, and `DELETED`.
   *
   * @public
   */
  status?: DaemonTaskDefinitionStatus | undefined;

  /**
   * The Unix timestamp for the time when the daemon task definition was registered.
   *
   * @public
   */
  registeredAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the daemon task definition delete was requested.
   *
   * @public
   */
  deleteRequestedAt?: Date | undefined;

  /**
   * The principal that registered the daemon task definition.
   *
   * @public
   */
  registeredBy?: string | undefined;

  /**
   * The PID namespace mode for the daemon. The valid values are `none` and `shared`. The default is `none`.
   *
   * If `none` is specified or no value is provided, the daemon runs with its own PID namespace, isolated from other tasks. If `shared` is specified, the daemon joins the host PID namespace, making it accessible to non-daemon tasks that use `pidMode: "host"` or other daemons that use `pidMode: "shared"`.
   *
   * @public
   */
  pidMode?: DaemonPidMode | undefined;

  /**
   * The IPC namespace mode for the daemon. The valid values are `none` and `shared`. The default is `none`.
   *
   * If `none` is specified or no value is provided, the daemon runs with its own IPC namespace, isolated from other tasks. If `shared` is specified, the daemon joins the host IPC namespace, making it accessible to non-daemon tasks that use `ipcMode: "host"` or other daemons that use `ipcMode: "shared"`.
   *
   * @public
   */
  ipcMode?: DaemonIpcMode | undefined;
}

/**
 * @public
 */
export interface DescribeDaemonTaskDefinitionResponse {
  /**
   * The full daemon task definition description.
   *
   * @public
   */
  daemonTaskDefinition?: DaemonTaskDefinition | undefined;
}

/**
 * @public
 */
export interface ListDaemonTaskDefinitionsRequest {
  /**
   * The full family name to filter the `ListDaemonTaskDefinitions` results with. Specifying a `familyPrefix` limits the listed daemon task definitions to daemon task definition families that start with the `familyPrefix` string.
   *
   * @public
   */
  familyPrefix?: string | undefined;

  /**
   * The exact name of the daemon task definition family to filter results with.
   *
   * @public
   */
  family?: string | undefined;

  /**
   * The revision filter to apply. Specify `LAST_REGISTERED` to return only the last registered revision for each daemon task definition family.
   *
   * @public
   */
  revision?: DaemonTaskDefinitionRevisionFilter | undefined;

  /**
   * The daemon task definition status to filter the `ListDaemonTaskDefinitions` results with. By default, only `ACTIVE` daemon task definitions are listed. If you set this parameter to `DELETE_IN_PROGRESS`, only daemon task definitions that are in the process of being deleted are listed. If you set this parameter to `ALL`, all daemon task definitions are listed regardless of status.
   *
   * @public
   */
  status?: DaemonTaskDefinitionStatusFilter | undefined;

  /**
   * The order to sort the results. Valid values are `ASC` and `DESC`. By default (`ASC`), daemon task definitions are listed in ascending order by family name and revision number.
   *
   * @public
   */
  sort?: SortOrder | undefined;

  /**
   * The `nextToken` value returned from a `ListDaemonTaskDefinitions` request indicating that more results are available to fulfill the request and further calls will be needed. If `maxResults` was provided, it's possible for the number of results to be fewer than `maxResults`.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of daemon task definition results that `ListDaemonTaskDefinitions` returned in paginated output. When this parameter is used, `ListDaemonTaskDefinitions` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListDaemonTaskDefinitions` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListDaemonTaskDefinitions` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of a daemon task definition.
 *
 * @public
 */
export interface DaemonTaskDefinitionSummary {
  /**
   * The Amazon Resource Name (ARN) of the daemon task definition.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The Unix timestamp for the time when the daemon task definition was registered.
   *
   * @public
   */
  registeredAt?: Date | undefined;

  /**
   * The principal that registered the daemon task definition.
   *
   * @public
   */
  registeredBy?: string | undefined;

  /**
   * The Unix timestamp for the time when the daemon task definition delete was requested.
   *
   * @public
   */
  deleteRequestedAt?: Date | undefined;

  /**
   * The status of the daemon task definition.
   *
   * @public
   */
  status?: DaemonTaskDefinitionStatus | undefined;
}

/**
 * @public
 */
export interface ListDaemonTaskDefinitionsResponse {
  /**
   * The list of daemon task definition summaries.
   *
   * @public
   */
  daemonTaskDefinitions?: DaemonTaskDefinitionSummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListDaemonTaskDefinitions` request. When the results of a `ListDaemonTaskDefinitions` request exceed `maxResults`, this value can be used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterDaemonTaskDefinitionRequest {
  /**
   * You must specify a `family` for a daemon task definition. This family is used as a name for your daemon task definition. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
   *
   * @public
   */
  family: string | undefined;

  /**
   * The short name or full Amazon Resource Name (ARN) of the IAM role that containers in this daemon task can assume. All containers in this daemon task are granted the permissions that are specified in this role.
   *
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make Amazon Web Services API calls on your behalf. The task execution role is required for daemon tasks that pull container images from Amazon ECR or send container logs to CloudWatch.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * A list of container definitions in JSON format that describe the containers that make up your daemon task.
   *
   * @public
   */
  containerDefinitions: DaemonContainerDefinition[] | undefined;

  /**
   * The number of CPU units used by the daemon task. It can be expressed as an integer using CPU units (for example, `1024`).
   *
   * @public
   */
  cpu?: string | undefined;

  /**
   * The amount of memory (in MiB) used by the daemon task. It can be expressed as an integer using MiB (for example, `1024`).
   *
   * @public
   */
  memory?: string | undefined;

  /**
   * A list of volume definitions in JSON format that containers in your daemon task can use.
   *
   * @public
   */
  volumes?: DaemonVolume[] | undefined;

  /**
   * The metadata that you apply to the daemon task definition to help you categorize and organize them. Each tag consists of a key and an optional value. You define both of them.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The PID namespace mode for the daemon. The valid values are `none` and `shared`. The default is `none`.
   *
   * If `none` is specified or no value is provided, the daemon runs with its own PID namespace, isolated from other tasks. If `shared` is specified, the daemon joins the host PID namespace, making it accessible to non-daemon tasks that use `pidMode: "host"` or other daemons that use `pidMode: "shared"`.
   *
   * @public
   */
  pidMode?: DaemonPidMode | undefined;

  /**
   * The IPC namespace mode for the daemon. The valid values are `none` and `shared`. The default is `none`.
   *
   * If `none` is specified or no value is provided, the daemon runs with its own IPC namespace, isolated from other tasks. If `shared` is specified, the daemon joins the host IPC namespace, making it accessible to non-daemon tasks that use `ipcMode: "host"` or other daemons that use `ipcMode: "shared"`.
   *
   * @public
   */
  ipcMode?: DaemonIpcMode | undefined;
}

/**
 * @public
 */
export interface RegisterDaemonTaskDefinitionResponse {
  /**
   * The full Amazon Resource Name (ARN) of the registered daemon task definition.
   *
   * @public
   */
  daemonTaskDefinitionArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountSettingRequest {
  /**
   * The resource name to disable the account setting for. If `serviceLongArnFormat` is specified, the ARN for your Amazon ECS services is affected. If `taskLongArnFormat` is specified, the ARN and resource ID for your Amazon ECS tasks is affected. If `containerInstanceLongArnFormat` is specified, the ARN and resource ID for your Amazon ECS container instances is affected. If `awsvpcTrunking` is specified, the ENI limit for your Amazon ECS container instances is affected.
   *
   * @public
   */
  name: SettingName | undefined;

  /**
   * The Amazon Resource Name (ARN) of the principal. It can be a user, role, or the root user. If you specify the root user, it disables the account setting for all users, roles, and the root user of the account unless a user or role explicitly overrides these settings. If this field is omitted, the setting is changed only for the authenticated user.
   *
   * In order to use this parameter, you must be the root user, or the principal.
   *
   * @public
   */
  principalArn?: string | undefined;
}

/**
 * The current account setting for a resource.
 *
 * @public
 */
export interface Setting {
  /**
   * The Amazon ECS resource name.
   *
   * @public
   */
  name?: SettingName | undefined;

  /**
   * Determines whether the account setting is on or off for the specified resource.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The ARN of the principal. It can be a user, role, or the root user. If this field is omitted, the authenticated user is assumed.
   *
   * @public
   */
  principalArn?: string | undefined;

  /**
   * Indicates whether Amazon Web Services manages the account setting, or if the user manages it.
   *
   * `aws_managed` account settings are read-only, as Amazon Web Services manages such on the customer's behalf. Currently, the `guardDutyActivate` account setting is the only one Amazon Web Services manages.
   *
   * @public
   */
  type?: SettingType | undefined;
}

/**
 * @public
 */
export interface DeleteAccountSettingResponse {
  /**
   * The account setting for the specified principal ARN.
   *
   * @public
   */
  setting?: Setting | undefined;
}

/**
 *
 * @public
 */
export interface DeregisterTaskDefinitionRequest {
  /**
   * The `family` and `revision` (`family:revision`) or full Amazon Resource Name (ARN) of the task definition to deregister. You must specify a `revision`.
   *
   * @public
   */
  taskDefinition: string | undefined;
}

/**
 * Hostnames and IP address entries that are added to the `/etc/hosts` file of a container via the `extraHosts` parameter of its [ContainerDefinition](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html).
 *
 * @public
 */
export interface HostEntry {
  /**
   * The hostname to use in the `/etc/hosts` entry.
   *
   * @public
   */
  hostname: string | undefined;

  /**
   * The IP address to use in the `/etc/hosts` entry.
   *
   * @public
   */
  ipAddress: string | undefined;
}

/**
 * The Linux-specific options that are applied to the container, such as Linux [KernelCapabilities](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html).
 *
 * @public
 */
export interface LinuxParameters {
  /**
   * The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
   *
   * > **Note:** For tasks that use the Fargate launch type, `capabilities` is supported for all platform versions but the `add` parameter is only supported if using platform version 1.4.0 or later.
   *
   * @public
   */
  capabilities?: KernelCapabilities | undefined;

  /**
   * Any host devices to expose to the container. This parameter maps to `Devices` in the docker container create command and the `--device` option to docker run.
   *
   * > **Note:** If you're using tasks that use the Fargate launch type, the `devices` parameter isn't supported.
   *
   * @public
   */
  devices?: Device[] | undefined;

  /**
   * Run an `init` process inside the container that forwards signals and reaps processes. This parameter maps to the `--init` option to docker run. This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version --format '\{\{.Server.APIVersion\}\}'`
   *
   * @public
   */
  initProcessEnabled?: boolean | undefined;

  /**
   * The value for the size (in MiB) of the `/dev/shm` volume. This parameter maps to the `--shm-size` option to docker run.
   *
   * > **Note:** If you are using tasks that use the Fargate launch type, the `sharedMemorySize` parameter is not supported.
   *
   * @public
   */
  sharedMemorySize?: number | undefined;

  /**
   * The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the `--tmpfs` option to docker run.
   *
   * @public
   */
  tmpfs?: Tmpfs[] | undefined;

  /**
   * The total amount of swap memory (in MiB) a container can use. This parameter will be translated to the `--memory-swap` option to docker run where the value would be the sum of the container memory plus the `maxSwap` value.
   *
   * If a `maxSwap` value of `0` is specified, the container will not use swap. Accepted values are `0` or any positive integer. If the `maxSwap` parameter is omitted, the container will use the swap configuration for the container instance it is running on. A `maxSwap` value must be set for the `swappiness` parameter to be used.
   *
   * > **Note:**
   * >
   * > If you're using tasks that use the Fargate launch type, the `maxSwap` parameter isn't supported.
   * >
   * > If you're using tasks on Amazon Linux 2023 the `swappiness` parameter isn't supported.
   *
   * @public
   */
  maxSwap?: number | undefined;

  /**
   * This allows you to tune a container's memory swappiness behavior. A `swappiness` value of `0` will cause swapping to not happen unless absolutely necessary. A `swappiness` value of `100` will cause pages to be swapped very aggressively. Accepted values are whole numbers between `0` and `100`. If the `swappiness` parameter is not specified, a default value of `60` is used. If a value is not specified for `maxSwap` then this parameter is ignored. This parameter maps to the `--memory-swappiness` option to docker run.
   *
   * > **Note:**
   * >
   * > If you're using tasks that use the Fargate launch type, the `swappiness` parameter isn't supported.
   * >
   * > If you're using tasks on Amazon Linux 2023 the `swappiness` parameter isn't supported.
   *
   * @public
   */
  swappiness?: number | undefined;
}

/**
 * Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings are specified as part of the container definition.
 *
 * If you use containers in a task with the `awsvpc` or `host` network mode, specify the exposed ports using `containerPort`. The `hostPort` can be left blank or it must be the same value as the `containerPort`.
 *
 * Most fields of this parameter (`containerPort`, `hostPort`, `protocol`) maps to `PortBindings` in the docker container create command and the `--publish` option to `docker run`. If the network mode of a task definition is set to `host`, host ports must either be undefined or match the container port in the port mapping.
 *
 * > **Note:** You can't expose the same container port for multiple protocols. If you attempt this, an error is returned.
 *
 * After a task reaches the `RUNNING` status, manual and automatic host and container port assignments are visible in the `networkBindings` section of [DescribeTasks](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html) API responses.
 *
 * @public
 */
export interface PortMapping {
  /**
   * The port number on the container that's bound to the user-specified or automatically assigned host port.
   *
   * If you use containers in a task with the `awsvpc` or `host` network mode, specify the exposed ports using `containerPort`.
   *
   * If you use containers in a task with the `bridge` network mode and you specify a container port and not a host port, your container automatically receives a host port in the ephemeral port range. For more information, see `hostPort`. Port mappings that are automatically assigned in this way do not count toward the 100 reserved ports limit of a container instance.
   *
   * @public
   */
  containerPort?: number | undefined;

  /**
   * The port number on the container instance to reserve for your container.
   *
   * If you specify a `containerPortRange`, leave this field empty and the value of the `hostPort` is set as follows:
   *
   * - For containers in a task with the `awsvpc` network mode, the `hostPort` is set to the same value as the `containerPort`. This is a static mapping strategy.
   * - For containers in a task with the `bridge` network mode, the Amazon ECS agent finds open ports on the host and automatically binds them to the container ports. This is a dynamic mapping strategy.
   *
   * If you use containers in a task with the `awsvpc` or `host` network mode, the `hostPort` can either be left blank or set to the same value as the `containerPort`.
   *
   * If you use containers in a task with the `bridge` network mode, you can specify a non-reserved host port for your container port mapping, or you can omit the `hostPort` (or set it to `0`) while specifying a `containerPort` and your container automatically receives a port in the ephemeral port range for your container instance operating system and Docker version.
   *
   * The default ephemeral port range for Docker version 1.6.0 and later is listed on the instance under `/proc/sys/net/ipv4/ip_local_port_range`. If this kernel parameter is unavailable, the default ephemeral port range from 49153 through 65535 (Linux) or 49152 through 65535 (Windows) is used. Do not attempt to specify a host port in the ephemeral port range as these are reserved for automatic assignment. In general, ports below 32768 are outside of the ephemeral port range.
   *
   * The default reserved ports are 22 for SSH, the Docker ports 2375 and 2376, and the Amazon ECS container agent ports 51678-51680. Any host port that was previously specified in a running task is also reserved while the task is running. That is, after a task stops, the host port is released. The current reserved ports are displayed in the `remainingResources` of [DescribeContainerInstances](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html) output. A container instance can have up to 100 reserved ports at a time. This number includes the default reserved ports. Automatically assigned ports aren't included in the 100 reserved ports quota.
   *
   * @public
   */
  hostPort?: number | undefined;

  /**
   * The protocol that's used for the port mapping. Valid values are `tcp` and `udp` (case-sensitive). The default is `tcp`. Amazon ECS treats any other specified value as `tcp`. `protocol` is immutable in a Service Connect service. To update this field, you must delete and redeploy the service.
   *
   * @public
   */
  protocol?: TransportProtocol | undefined;

  /**
   * The name that's used for the port mapping. This parameter is the name that you use in the `serviceConnectConfiguration` and the `vpcLatticeConfigurations` of a service. The name can include up to 64 characters. The characters can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The application protocol that's used for the port mapping. This parameter only applies to Service Connect. We recommend that you set this parameter to be consistent with the protocol that your application uses. If you set this parameter, Amazon ECS adds protocol-specific connection handling to the Service Connect proxy. If you set this parameter, Amazon ECS adds protocol-specific telemetry in the Amazon ECS console and CloudWatch.
   *
   * If you don't set a value for this parameter, then TCP is used. However, Amazon ECS doesn't add protocol-specific telemetry for TCP.
   *
   * `appProtocol` is immutable in a Service Connect service. Updating this field requires a service deletion and redeployment.
   *
   * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  appProtocol?: ApplicationProtocol | undefined;

  /**
   * The port number range on the container that's bound to the dynamically mapped host port range.
   *
   * The following rules apply when you specify a `containerPortRange`:
   *
   * - You must use either the `bridge` network mode or the `awsvpc` network mode.
   * - This parameter is available for both the EC2 and Fargate launch types.
   * - This parameter is available for both the Linux and Windows operating systems.
   * - The container instance must have at least version 1.67.0 of the container agent and at least version 1.67.0-1 of the `ecs-init` package
   * - You can specify a maximum of 100 port ranges per container.
   * - You do not specify a `hostPortRange`. The value of the `hostPortRange` is set as follows:
   *
   *   - For containers in a task with the `awsvpc` network mode, the `hostPortRange` is set to the same value as the `containerPortRange`. This is a static mapping strategy.
   *   - For containers in a task with the `bridge` network mode, the Amazon ECS agent finds open host ports from the default ephemeral range and passes it to docker to bind them to the container ports.
   * - The `containerPortRange` valid values are between 1 and 65535.
   * - A port can only be included in one port mapping per container.
   * - You cannot specify overlapping port ranges.
   * - The first port in the range must be less than last port in the range.
   * - Docker recommends that you turn off the docker-proxy in the Docker daemon config file when you have a large number of ports.
   *
   *   For more information, see [Issue #11185](https://github.com/moby/moby/issues/11185) on the Github website.
   *
   *   For information about how to turn off the docker-proxy in the Docker daemon config file, see [Docker daemon](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/bootstrap_container_instance.html#bootstrap_docker_daemon) in the *Amazon ECS Developer Guide*.
   *
   * You can call [`DescribeTasks`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html) to view the `hostPortRange` which are the host ports that are bound to the container ports.
   *
   * @public
   */
  containerPortRange?: string | undefined;
}

/**
 * The GPU memory and compute limits for a container that shares a GPU by using NVIDIA Multi-Process Service (MPS). Amazon ECS assigns the container a single GPU that has enough memory available. Other containers that use MPS can share the same GPU.
 *
 * @public
 */
export interface NvidiaMpsAllocation {
  /**
   * The amount of GPU memory, in MiB, to allocate to the container. Amazon ECS assigns the container a GPU that has at least the specified amount of memory available, and sets the `CUDA_MPS_PINNED_DEVICE_MEM_LIMIT` environment variable in the container to limit its memory to this amount. The memory must be available on a single GPU. If more than one container in a task uses `nvidiaMps`, Amazon ECS assigns them the same GPU, which must have enough memory available for all of them.
   *
   * @public
   */
  memory: number | undefined;

  /**
   * The maximum percentage of the GPU's compute capacity that the container can use. Amazon ECS sets the `CUDA_MPS_ACTIVE_THREAD_PERCENTAGE` environment variable in the container to this value. This value is a limit, not a reservation.
   *
   * If you don't specify this parameter, Amazon ECS doesn't set `CUDA_MPS_ACTIVE_THREAD_PERCENTAGE`, and the active thread percentage of the MPS server on the container instance applies. By default, this is 100 percent.
   *
   * @public
   */
  maxComputePercent?: number | undefined;
}

/**
 * The strategy that a container uses to share a GPU with other containers. Specify exactly one member.
 *
 * @public
 */
export type SharingStrategy =
  | SharingStrategy.NvidiaMpsMember
  | SharingStrategy.$UnknownMember;

/**
 * @public
 */
export namespace SharingStrategy {
  /**
   * Shares a GPU between containers by using NVIDIA Multi-Process Service (MPS). You specify the GPU memory to allocate to the container and, optionally, the maximum percentage of the GPU's compute capacity that the container can use.
   *
   * @public
   */
  export interface NvidiaMpsMember {
    nvidiaMps: NvidiaMpsAllocation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    nvidiaMps?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    nvidiaMps: (value: NvidiaMpsAllocation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The type and amount of a resource to assign to a container. The supported resource types are GPUs, Neuron devices, and Elastic Inference accelerators. For more information, see [Working with GPUs on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html) or [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html) in the *Amazon Elastic Container Service Developer Guide*
 *
 * @public
 */
export interface ResourceRequirement {
  /**
   * The value for the specified resource type.
   *
   * You must specify this parameter unless the type is `GPU` and you specify `sharingStrategy`.
   *
   * When the type is `GPU`, the value is the number of physical `GPUs` the Amazon ECS container agent reserves for the container. The number of GPUs that's reserved for all containers in a task can't exceed the number of available GPUs on the container instance that the task is launched on. You can also specify `ALL` to allocate all available GPUs on the instance to the container.
   *
   * When the type is `NeuronDevice`, the value must be `ALL`. This allocates all available Neuron devices on the instance to the container. Only one container in a task can specify `NeuronDevice` resources. This resource type is only supported on Managed Instances.
   *
   * When the type is `InferenceAccelerator`, the `value` matches the `deviceName` for an [InferenceAccelerator](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_InferenceAccelerator.html) specified in a task definition.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The type of resource to assign to a container.
   *
   * @public
   */
  type: ResourceType | undefined;

  /**
   * The strategy that the container uses to share a GPU with other containers. Specify a sharing strategy only when the type is `GPU`. For a GPU resource requirement, specify either `value` or `sharingStrategy`, but not both. If you don't specify a sharing strategy, the container has exclusive use of each GPU that Amazon ECS assigns to it. The containers in a task that request GPUs must all use the same option.
   *
   * You can use GPU sharing with tasks that run on Amazon EC2 instances or Amazon ECS Managed Instances. Task definitions that require `EXTERNAL` compatibility don't support GPU sharing.
   *
   * @public
   */
  sharingStrategy?: SharingStrategy | undefined;
}

/**
 * Details on a data volume from another container in the same task definition.
 *
 * @public
 */
export interface VolumeFrom {
  /**
   * The name of another container within the same task definition to mount volumes from.
   *
   * @public
   */
  sourceContainer?: string | undefined;

  /**
   * If this value is `true`, the container has read-only access to the volume. If this value is `false`, then the container can write to the volume. The default value is `false`.
   *
   * @public
   */
  readOnly?: boolean | undefined;
}

/**
 * Container definitions are used in task definitions to describe the different containers that are launched as part of a task.
 *
 * @public
 */
export interface ContainerDefinition {
  /**
   * The name of a container. If you're linking multiple containers together in a task definition, the `name` of one container can be entered in the `links` of another container to connect the containers. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. This parameter maps to `name` in the docker container create command and the `--name` option to docker run.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The image used to start a container. This string is passed directly to the Docker daemon. By default, images in the Docker Hub registry are available. Other repositories are specified with either `repository-url/image:tag` or `repository-url/image@digest`. For images using tags (repository-url/image:tag), up to 255 characters total are allowed, including letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs (#). For images using digests (repository-url/image@digest), the 255 character limit applies only to the repository URL and image name (everything before the @ sign). The only supported hash function is sha256, and the hash value after sha256: must be exactly 64 characters (only letters A-F, a-f, and numbers 0-9 are allowed). This parameter maps to `Image` in the docker container create command and the `IMAGE` parameter of docker run.
   *
   * - When a new task starts, the Amazon ECS container agent pulls the latest version of the specified image and tag for the container to use. However, subsequent updates to a repository image aren't propagated to already running tasks.
   * - Images in Amazon ECR repositories can be specified by either using the full `registry/repository:tag` or `registry/repository@digest`. For example, `012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name>:latest` or `012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name>@sha256:94afd1f2e64d908bc90dbca0035a5b567EXAMPLE`.
   * - Images in official repositories on Docker Hub use a single name (for example, `ubuntu` or `mongo`).
   * - Images in other repositories on Docker Hub are qualified with an organization name (for example, `amazon/amazon-ecs-agent`).
   * - Images in other online repositories are qualified further by a domain name (for example, `quay.io/assemblyline/ubuntu`).
   *
   * @public
   */
  image?: string | undefined;

  /**
   * The private repository authentication credentials to use.
   *
   * @public
   */
  repositoryCredentials?: RepositoryCredentials | undefined;

  /**
   * The number of `cpu` units reserved for the container. This parameter maps to `CpuShares` in the docker container create command and the `--cpu-shares` option to docker run.
   *
   * This field is optional for tasks using the Fargate launch type, and the only requirement is that the total amount of CPU reserved for all containers within a task be lower than the task-level `cpu` value.
   *
   * > **Note:** You can determine the number of CPU units that are available per EC2 instance type by multiplying the vCPUs listed for that instance type on the [Amazon EC2 Instances](http://aws.amazon.com/ec2/instance-types/) detail page by 1,024.
   *
   * Linux containers share unallocated CPU units with other containers on the container instance with the same ratio as their allocated amount. For example, if you run a single-container task on a single-core instance type with 512 CPU units specified for that container, and that's the only task running on the container instance, that container could use the full 1,024 CPU unit share at any given time. However, if you launched another copy of the same task on that container instance, each task is guaranteed a minimum of 512 CPU units when needed. Moreover, each container could float to higher CPU usage if the other container was not using it. If both tasks were 100% active all of the time, they would be limited to 512 CPU units.
   *
   * On Linux container instances, the Docker daemon on the container instance uses the CPU value to calculate the relative CPU share ratios for running containers. The minimum valid CPU share value that the Linux kernel allows is 2, and the maximum valid CPU share value that the Linux kernel allows is 262144. However, the CPU parameter isn't required, and you can use CPU values below 2 or above 262144 in your container definitions. For CPU values below 2 (including null) or above 262144, the behavior varies based on your Amazon ECS container agent version:
   *
   * - **Agent versions less than or equal to 1.1.0:** Null and zero CPU values are passed to Docker as 0, which Docker then converts to 1,024 CPU shares. CPU values of 1 are passed to Docker as 1, which the Linux kernel converts to two CPU shares.
   * - **Agent versions greater than or equal to 1.2.0:** Null, zero, and CPU values of 1 are passed to Docker as 2.
   * - **Agent versions greater than or equal to 1.84.0:** CPU values greater than 256 vCPU are passed to Docker as 256, which is equivalent to 262144 CPU shares.
   *
   * On Windows container instances, the CPU limit is enforced as an absolute limit, or a quota. Windows containers only have access to the specified amount of CPU that's described in the task definition. A null or zero CPU value is passed to Docker as `0`, which Windows interprets as 1% of one CPU.
   *
   * @public
   */
  cpu?: number | undefined;

  /**
   * The amount (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed. The total amount of memory reserved for all containers within a task must be lower than the task `memory` value, if one is specified. This parameter maps to `Memory` in the docker container create command and the `--memory` option to docker run.
   *
   * If using the Fargate launch type, this parameter is optional.
   *
   * If using the EC2 launch type, you must specify either a task-level memory value or a container-level memory value. If you specify both a container-level `memory` and `memoryReservation` value, `memory` must be greater than `memoryReservation`. If you specify `memoryReservation`, then that value is subtracted from the available memory resources for the container instance where the container is placed. Otherwise, the value of `memory` is used.
   *
   * The Docker 20.10.0 or later daemon reserves a minimum of 6 MiB of memory for a container. So, don't specify less than 6 MiB of memory for your containers.
   *
   * The Docker 19.03.13-ce or earlier daemon reserves a minimum of 4 MiB of memory for a container. So, don't specify less than 4 MiB of memory for your containers.
   *
   * @public
   */
  memory?: number | undefined;

  /**
   * The soft limit (in MiB) of memory to reserve for the container. When system memory is under heavy contention, Docker attempts to keep the container memory to this soft limit. However, your container can consume more memory when it needs to, up to either the hard limit specified with the `memory` parameter (if applicable), or all of the available memory on the container instance, whichever comes first. This parameter maps to `MemoryReservation` in the docker container create command and the `--memory-reservation` option to docker run.
   *
   * If a task-level memory value is not specified, you must specify a non-zero integer for one or both of `memory` or `memoryReservation` in a container definition. If you specify both, `memory` must be greater than `memoryReservation`. If you specify `memoryReservation`, then that value is subtracted from the available memory resources for the container instance where the container is placed. Otherwise, the value of `memory` is used.
   *
   * For example, if your container normally uses 128 MiB of memory, but occasionally bursts to 256 MiB of memory for short periods of time, you can set a `memoryReservation` of 128 MiB, and a `memory` hard limit of 300 MiB. This configuration would allow the container to only reserve 128 MiB of memory from the remaining resources on the container instance, but also allow the container to consume more memory resources when needed.
   *
   * The Docker 20.10.0 or later daemon reserves a minimum of 6 MiB of memory for a container. So, don't specify less than 6 MiB of memory for your containers.
   *
   * The Docker 19.03.13-ce or earlier daemon reserves a minimum of 4 MiB of memory for a container. So, don't specify less than 4 MiB of memory for your containers.
   *
   * @public
   */
  memoryReservation?: number | undefined;

  /**
   * The `links` parameter allows containers to communicate with each other without the need for port mappings. This parameter is only supported if the network mode of a task definition is `bridge`. The `name:internalName` construct is analogous to `name:alias` in Docker links. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.. This parameter maps to `Links` in the docker container create command and the `--link` option to docker run.
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * > **Important:** Containers that are collocated on a single container instance may be able to communicate with each other without requiring links or host port mappings. Network isolation is achieved on the container instance using security groups and VPC settings.
   *
   * @public
   */
  links?: string[] | undefined;

  /**
   * The list of port mappings for the container. Port mappings allow containers to access ports on the host container instance to send or receive traffic.
   *
   * For task definitions that use the `awsvpc` network mode, only specify the `containerPort`. The `hostPort` can be left blank or it must be the same value as the `containerPort`.
   *
   * Port mappings on Windows use the `NetNAT` gateway address rather than `localhost`. There's no loopback for port mappings on Windows, so you can't access a container's mapped port from the host itself.
   *
   * This parameter maps to `PortBindings` in the docker container create command and the `--publish` option to docker run. If the network mode of a task definition is set to `none`, then you can't specify port mappings. If the network mode of a task definition is set to `host`, then host ports must either be undefined or they must match the container port in the port mapping.
   *
   * > **Note:** After a task reaches the `RUNNING` status, manual and automatic host and container port assignments are visible in the **Network Bindings** section of a container description for a selected task in the Amazon ECS console. The assignments are also visible in the `networkBindings` section [DescribeTasks](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html) responses.
   *
   * @public
   */
  portMappings?: PortMapping[] | undefined;

  /**
   * If the `essential` parameter of a container is marked as `true`, and that container fails or stops for any reason, all other containers that are part of the task are stopped. If the `essential` parameter of a container is marked as `false`, its failure doesn't affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential.
   *
   * All tasks must have at least one essential container. If you have an application that's composed of multiple containers, group containers that are used for a common purpose into components, and separate the different components into multiple task definitions. For more information, see [Application Architecture](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  essential?: boolean | undefined;

  /**
   * The restart policy for a container. When you set up a restart policy, Amazon ECS can restart the container without needing to replace the task. For more information, see [Restart individual containers in Amazon ECS tasks with container restart policies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-restart-policy.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  restartPolicy?: ContainerRestartPolicy | undefined;

  /**
   * > **Important:** Early versions of the Amazon ECS container agent don't properly handle `entryPoint` parameters. If you have problems using `entryPoint`, update your container agent or enter your commands and arguments as `command` array items instead.
   *
   * The entry point that's passed to the container. This parameter maps to `Entrypoint` in the docker container create command and the `--entrypoint` option to docker run.
   *
   * @public
   */
  entryPoint?: string[] | undefined;

  /**
   * The command that's passed to the container. This parameter maps to `Cmd` in the docker container create command and the `COMMAND` parameter to docker run. If there are multiple arguments, each argument is a separated string in the array.
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * The environment variables to pass to a container. This parameter maps to `Env` in the docker container create command and the `--env` option to docker run.
   *
   * > **Important:** We don't recommend that you use plaintext environment variables for sensitive information, such as credential data.
   *
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * A list of files containing the environment variables to pass to a container. This parameter maps to the `--env-file` option to docker run.
   *
   * You can specify up to ten environment files. The file must have a `.env` file extension. Each line in an environment file contains an environment variable in `VARIABLE=VALUE` format. Lines beginning with `#` are treated as comments and are ignored.
   *
   * If there are environment variables specified using the `environment` parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see [Specifying Environment Variables](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  environmentFiles?: EnvironmentFile[] | undefined;

  /**
   * The mount points for data volumes in your container.
   *
   * This parameter maps to `Volumes` in the docker container create command and the `--volume` option to docker run.
   *
   * Windows containers can mount whole directories on the same drive as `$env:ProgramData`. Windows containers can't mount directories on a different drive, and mount point can't be across drives.
   *
   * @public
   */
  mountPoints?: MountPoint[] | undefined;

  /**
   * Data volumes to mount from another container. This parameter maps to `VolumesFrom` in the docker container create command and the `--volumes-from` option to docker run.
   *
   * @public
   */
  volumesFrom?: VolumeFrom[] | undefined;

  /**
   * Linux-specific modifications that are applied to the default Docker container configuration, such as Linux kernel capabilities. For more information see [KernelCapabilities](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html).
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * @public
   */
  linuxParameters?: LinuxParameters | undefined;

  /**
   * The secrets to pass to the container. For more information, see [Specifying Sensitive Data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  secrets?: Secret[] | undefined;

  /**
   * The dependencies defined for container startup and shutdown. A container can contain multiple dependencies on other containers in a task definition. When a dependency is defined for container startup, for container shutdown it is reversed.
   *
   * For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent to turn on container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide*. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the `ecs-init` package. If your container instances are launched from version `20190301` or later, then they contain the required versions of the container agent and `ecs-init`. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * For tasks using the Fargate launch type, the task or service requires the following platforms:
   *
   * - Linux platform version `1.3.0` or later.
   * - Windows platform version `1.0.0` or later.
   *
   * @public
   */
  dependsOn?: ContainerDependency[] | undefined;

  /**
   * Time duration (in seconds) to wait before giving up on resolving dependencies for a container. For example, you specify two containers in a task definition with containerA having a dependency on containerB reaching a `COMPLETE`, `SUCCESS`, or `HEALTHY` status. If a `startTimeout` value is specified for containerB and it doesn't reach the desired status within that time then containerA gives up and not start. This results in the task transitioning to a `STOPPED` state.
   *
   * > **Note:** When the `ECS_CONTAINER_START_TIMEOUT` container agent configuration variable is used, it's enforced independently from this start timeout value.
   *
   * For tasks using the Fargate launch type, the task or service requires the following platforms:
   *
   * - Linux platform version `1.3.0` or later.
   * - Windows platform version `1.0.0` or later.
   *
   * For tasks using the EC2 launch type, your container instances require at least version `1.26.0` of the container agent to use a container start timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide*. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version `1.26.0-1` of the `ecs-init` package. If your container instances are launched from version `20190301` or later, then they contain the required versions of the container agent and `ecs-init`. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * The valid values for Fargate are 2-120 seconds.
   *
   * @public
   */
  startTimeout?: number | undefined;

  /**
   * Time duration (in seconds) to wait before the container is forcefully killed if it doesn't exit normally on its own.
   *
   * For tasks using the Fargate launch type, the task or service requires the following platforms:
   *
   * - Linux platform version `1.3.0` or later.
   * - Windows platform version `1.0.0` or later.
   *
   * For tasks that use the Fargate launch type, the max stop timeout value is 120 seconds and if the parameter is not specified, the default value of 30 seconds is used.
   *
   * For tasks that use the EC2 launch type, if the `stopTimeout` parameter isn't specified, the value set for the Amazon ECS container agent configuration variable `ECS_CONTAINER_STOP_TIMEOUT` is used. If neither the `stopTimeout` parameter or the `ECS_CONTAINER_STOP_TIMEOUT` agent configuration variable are set, then the default values of 30 seconds for Linux containers and 30 seconds on Windows containers are used. Your container instances require at least version 1.26.0 of the container agent to use a container stop timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide*. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the `ecs-init` package. If your container instances are launched from version `20190301` or later, then they contain the required versions of the container agent and `ecs-init`. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * The valid values for Fargate are 2-120 seconds.
   *
   * @public
   */
  stopTimeout?: number | undefined;

  /**
   * Specifies whether Amazon ECS will resolve the container image tag provided in the container definition to an image digest. By default, the value is `enabled`. If you set the value for a container as `disabled`, Amazon ECS will not resolve the provided container image tag to a digest and will use the original image URI specified in the container definition for deployment. For more information about container image resolution, see [Container image resolution](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html#deployment-container-image-stability) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  versionConsistency?: VersionConsistency | undefined;

  /**
   * The hostname to use for your container. This parameter maps to `Hostname` in the docker container create command and the `--hostname` option to docker run.
   *
   * > **Note:** The `hostname` parameter is not supported if you're using the `awsvpc` network mode.
   *
   * @public
   */
  hostname?: string | undefined;

  /**
   * The user to use inside the container. This parameter maps to `User` in the docker container create command and the `--user` option to docker run.
   *
   * > **Important:** When running tasks using the `host` network mode, don't run containers using the root user (UID 0). We recommend using a non-root user for better security.
   *
   * You can specify the `user` using the following formats. If specifying a UID or GID, you must specify it as a positive integer.
   *
   * - `user`
   * - `user:group`
   * - `uid`
   * - `uid:gid`
   * - `user:gid`
   * - `uid:group`
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * @public
   */
  user?: string | undefined;

  /**
   * The working directory to run commands inside the container in. This parameter maps to `WorkingDir` in the docker container create command and the `--workdir` option to docker run.
   *
   * @public
   */
  workingDirectory?: string | undefined;

  /**
   * When this parameter is true, networking is off within the container. This parameter maps to `NetworkDisabled` in the docker container create command.
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * @public
   */
  disableNetworking?: boolean | undefined;

  /**
   * When this parameter is true, the container is given elevated privileges on the host container instance (similar to the `root` user). This parameter maps to `Privileged` in the docker container create command and the `--privileged` option to docker run
   *
   * > **Note:** This parameter is not supported for Windows containers or tasks run on Fargate.
   *
   * @public
   */
  privileged?: boolean | undefined;

  /**
   * When this parameter is true, the container is given read-only access to its root file system. This parameter maps to `ReadonlyRootfs` in the docker container create command and the `--read-only` option to docker run.
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * @public
   */
  readonlyRootFilesystem?: boolean | undefined;

  /**
   * A list of DNS servers that are presented to the container. This parameter maps to `Dns` in the docker container create command and the `--dns` option to docker run.
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * @public
   */
  dnsServers?: string[] | undefined;

  /**
   * A list of DNS search domains that are presented to the container. This parameter maps to `DnsSearch` in the docker container create command and the `--dns-search` option to docker run.
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * @public
   */
  dnsSearchDomains?: string[] | undefined;

  /**
   * A list of hostnames and IP address mappings to append to the `/etc/hosts` file on the container. This parameter maps to `ExtraHosts` in the docker container create command and the `--add-host` option to docker run.
   *
   * > **Note:** This parameter isn't supported for Windows containers or tasks that use the `awsvpc` network mode.
   *
   * @public
   */
  extraHosts?: HostEntry[] | undefined;

  /**
   * A list of strings to provide custom configuration for multiple security systems. This field isn't valid for containers in tasks using the Fargate launch type.
   *
   * For Linux tasks on EC2, this parameter can be used to reference custom labels for SELinux and AppArmor multi-level security systems.
   *
   * For any tasks on EC2, this parameter can be used to reference a credential spec file that configures a container for Active Directory authentication. For more information, see [Using gMSAs for Windows Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html) and [Using gMSAs for Linux Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linux-gmsa.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * This parameter maps to `SecurityOpt` in the docker container create command and the `--security-opt` option to docker run.
   *
   * > **Note:** The Amazon ECS container agent running on a container instance must register with the `ECS_SELINUX_CAPABLE=true` or `ECS_APPARMOR_CAPABLE=true` environment variables before containers placed on that instance can use these security options. For more information, see [Amazon ECS Container Agent Configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * Valid values: "no-new-privileges" | "apparmor:PROFILE" | "label:value" | "credentialspec:CredentialSpecFilePath"
   *
   * @public
   */
  dockerSecurityOptions?: string[] | undefined;

  /**
   * When this parameter is `true`, you can deploy containerized applications that require `stdin` or a `tty` to be allocated. This parameter maps to `OpenStdin` in the docker container create command and the `--interactive` option to docker run.
   *
   * @public
   */
  interactive?: boolean | undefined;

  /**
   * When this parameter is `true`, a TTY is allocated. This parameter maps to `Tty` in the docker container create command and the `--tty` option to docker run.
   *
   * @public
   */
  pseudoTerminal?: boolean | undefined;

  /**
   * A key/value map of labels to add to the container. This parameter maps to `Labels` in the docker container create command and the `--label` option to docker run. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version --format '\{\{.Server.APIVersion\}\}'`
   *
   * @public
   */
  dockerLabels?: Record<string, string> | undefined;

  /**
   * A list of `ulimits` to set in the container. If a `ulimit` value is specified in a task definition, it overrides the default values set by Docker. This parameter maps to `Ulimits` in the docker container create command and the `--ulimit` option to docker run. Valid naming values are displayed in the [Ulimit](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Ulimit.html) data type.
   *
   * Amazon ECS tasks hosted on Fargate use the default resource limit values set by the operating system with the exception of the `nofile` resource limit parameter which Fargate overrides. The `nofile` resource limit sets a restriction on the number of open files that a container can use. The default `nofile` soft limit is `65535` and the default hard limit is `65535`.
   *
   * This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version --format '\{\{.Server.APIVersion\}\}'`
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * @public
   */
  ulimits?: Ulimit[] | undefined;

  /**
   * The log configuration specification for the container.
   *
   * This parameter maps to `LogConfig` in the docker container create command and the `--log-driver` option to docker run. By default, containers use the same logging driver that the Docker daemon uses. However the container can use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options).
   *
   * > **Note:** Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the [LogConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LogConfiguration.html) data type). Additional log drivers may be available in future releases of the Amazon ECS container agent.
   *
   * This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version --format '\{\{.Server.APIVersion\}\}'`
   *
   * > **Note:** The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the `ECS_AVAILABLE_LOGGING_DRIVERS` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS Container Agent Configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * The container health check command and associated configuration parameters for the container. This parameter maps to `HealthCheck` in the docker container create command and the `HEALTHCHECK` parameter of docker run.
   *
   * @public
   */
  healthCheck?: HealthCheck | undefined;

  /**
   * A list of namespaced kernel parameters to set in the container. This parameter maps to `Sysctls` in the docker container create command and the `--sysctl` option to docker run. For example, you can configure `net.ipv4.tcp_keepalive_time` setting to maintain longer lived connections.
   *
   * @public
   */
  systemControls?: SystemControl[] | undefined;

  /**
   * The type and amount of a resource to assign to a container. The supported resources are GPUs and Neuron devices.
   *
   * @public
   */
  resourceRequirements?: ResourceRequirement[] | undefined;

  /**
   * The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see [Custom Log Routing](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  firelensConfiguration?: FirelensConfiguration | undefined;

  /**
   * A list of ARNs in SSM or Amazon S3 to a credential spec (`CredSpec`) file that configures the container for Active Directory authentication. We recommend that you use this parameter instead of the `dockerSecurityOptions`. The maximum number of ARNs is 1.
   *
   * There are two formats for each ARN.
   *
   * - **credentialspecdomainless:MyARN**
   *
   *   You use `credentialspecdomainless:MyARN` to provide a `CredSpec` with an additional section for a secret in Secrets Manager. You provide the login credentials to the domain in the secret.
   *
   *   Each task that runs on any container instance can join different domains.
   *
   *   You can use this format without joining the container instance to a domain.
   *
   * - **credentialspec:MyARN**
   *
   *   You use `credentialspec:MyARN` to provide a `CredSpec` for a single domain.
   *
   *   You must join the container instance to the domain before you start any tasks that use this task definition.
   *
   * In both formats, replace `MyARN` with the ARN in SSM or Amazon S3.
   *
   * If you provide a `credentialspecdomainless:MyARN`, the `credspec` must provide a ARN in Secrets Manager for a secret containing the username, password, and the domain to connect to. For better security, the instance isn't joined to the domain for domainless authentication. Other applications on the instance can't use the domainless credentials. You can use this parameter to run tasks on the same instance, even it the tasks need to join different domains. For more information, see [Using gMSAs for Windows Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html) and [Using gMSAs for Linux Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linux-gmsa.html).
   *
   * @public
   */
  credentialSpecs?: string[] | undefined;
}

/**
 * The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see [Using data volumes in tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html) in the *Amazon ECS Developer Guide;*.
 *
 * > **Note:**
 * >
 * > For tasks using the Fargate launch type, the task requires the following platforms:
 * >
 * > - Linux platform version `1.4.0` or later.
 * > - Windows platform version `1.0.0` or later.
 *
 * @public
 */
export interface EphemeralStorage {
  /**
   * The total amount, in GiB, of ephemeral storage to set for the task. The minimum supported value is `21` GiB and the maximum supported value is `200` GiB.
   *
   * @public
   */
  sizeInGiB: number | undefined;
}

/**
 * Details on an Elastic Inference accelerator. For more information, see [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @deprecated (since 2023-04-15) This feature is no longer available.
 * @public
 */
export interface InferenceAccelerator {
  /**
   * The Elastic Inference accelerator device name. The `deviceName` must also be referenced in a container definition as a [ResourceRequirement](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ResourceRequirement.html).
   *
   * @public
   */
  deviceName: string | undefined;

  /**
   * The Elastic Inference accelerator type to use.
   *
   * @public
   */
  deviceType: string | undefined;
}

/**
 * The constraint on task placement in the task definition. For more information, see [Task placement constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * > **Note:** Task placement constraints aren't supported for tasks run on Fargate.
 *
 * @public
 */
export interface TaskDefinitionPlacementConstraint {
  /**
   * The type of constraint. The `MemberOf` constraint restricts selection to be from a group of valid candidates.
   *
   * @public
   */
  type?: TaskDefinitionPlacementConstraintType | undefined;

  /**
   * A cluster query language expression to apply to the constraint. For more information, see [Cluster query language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  expression?: string | undefined;
}

/**
 * The configuration details for the App Mesh proxy.
 *
 * For tasks that use the EC2 launch type, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the `ecs-init` package to use a proxy configuration. If your container instances are launched from the Amazon ECS optimized AMI version `20190301` or later, then they contain the required versions of the container agent and `ecs-init`. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html)
 *
 * @public
 */
export interface ProxyConfiguration {
  /**
   * The proxy type. The only supported value is `APPMESH`.
   *
   * @public
   */
  type?: ProxyConfigurationType | undefined;

  /**
   * The name of the container that will serve as the App Mesh proxy.
   *
   * @public
   */
  containerName: string | undefined;

  /**
   * The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified as key-value pairs.
   *
   * - `IgnoredUID` - (Required) The user ID (UID) of the proxy container as defined by the `user` parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If `IgnoredGID` is specified, this field can be empty.
   * - `IgnoredGID` - (Required) The group ID (GID) of the proxy container as defined by the `user` parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If `IgnoredUID` is specified, this field can be empty.
   * - `AppPorts` - (Required) The list of ports that the application uses. Network traffic to these ports is forwarded to the `ProxyIngressPort` and `ProxyEgressPort`.
   * - `ProxyIngressPort` - (Required) Specifies the port that incoming traffic to the `AppPorts` is directed to.
   * - `ProxyEgressPort` - (Required) Specifies the port that outgoing traffic from the `AppPorts` is directed to.
   * - `EgressIgnoredPorts` - (Required) The egress traffic going to the specified ports is ignored and not redirected to the `ProxyEgressPort`. It can be an empty list.
   * - `EgressIgnoredIPs` - (Required) The egress traffic going to the specified IP addresses is ignored and not redirected to the `ProxyEgressPort`. It can be an empty list.
   *
   * @public
   */
  properties?: KeyValuePair[] | undefined;
}

/**
 * Information about the platform for the Amazon ECS service or task.
 *
 * For more information about `RuntimePlatform`, see [RuntimePlatform](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#runtime-platform) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface RuntimePlatform {
  /**
   * The CPU architecture.
   *
   * You can run your Linux tasks on an ARM-based platform by setting the value to `ARM64`. This option is available for tasks that run on Linux Amazon EC2 instance, Amazon ECS Managed Instances, or Linux containers on Fargate.
   *
   * @public
   */
  cpuArchitecture?: CPUArchitecture | undefined;

  /**
   * The operating system.
   *
   * @public
   */
  operatingSystemFamily?: OSFamily | undefined;
}

/**
 * This parameter is specified when you're using Docker volumes. Docker volumes are only supported when you're using the EC2 launch type. Windows containers only support the use of the `local` driver. To use bind mounts, specify a `host` instead.
 *
 * @public
 */
export interface DockerVolumeConfiguration {
  /**
   * The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a `task` are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as `shared` persist after the task stops.
   *
   * @public
   */
  scope?: Scope | undefined;

  /**
   * If this value is `true`, the Docker volume is created if it doesn't already exist.
   *
   * > **Note:** This field is only used if the `scope` is `shared`.
   *
   * @public
   */
  autoprovision?: boolean | undefined;

  /**
   * The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement. If the driver was installed using the Docker plugin CLI, use `docker plugin ls` to retrieve the driver name from your container instance. If the driver was installed using another method, use Docker plugin discovery to retrieve the driver name. This parameter maps to `Driver` in the docker container create command and the `xxdriver` option to docker volume create.
   *
   * @public
   */
  driver?: string | undefined;

  /**
   * A map of Docker driver-specific options passed through. This parameter maps to `DriverOpts` in the docker create-volume command and the `xxopt` option to docker volume create.
   *
   * @public
   */
  driverOpts?: Record<string, string> | undefined;

  /**
   * Custom metadata to add to your Docker volume. This parameter maps to `Labels` in the docker container create command and the `xxlabel` option to docker volume create.
   *
   * @public
   */
  labels?: Record<string, string> | undefined;
}

/**
 * The authorization configuration details for the Amazon EFS file system.
 *
 * @public
 */
export interface EFSAuthorizationConfig {
  /**
   * The Amazon EFS access point ID to use. If an access point is specified, the root directory value specified in the `EFSVolumeConfiguration` must either be omitted or set to `/` which will enforce the path set on the EFS access point. If an access point is used, transit encryption must be on in the `EFSVolumeConfiguration`. For more information, see [Working with Amazon EFS access points](https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html) in the *Amazon Elastic File System User Guide*.
   *
   * @public
   */
  accessPointId?: string | undefined;

  /**
   * Determines whether to use the Amazon ECS task role defined in a task definition when mounting the Amazon EFS file system. If it is turned on, transit encryption must be turned on in the `EFSVolumeConfiguration`. If this parameter is omitted, the default value of `DISABLED` is used. For more information, see [Using Amazon EFS access points](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html#efs-volume-accesspoints) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  iam?: EFSAuthorizationConfigIAM | undefined;
}

/**
 * This parameter is specified when you're using an Amazon Elastic File System file system for task storage. For more information, see [Amazon EFS volumes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface EFSVolumeConfiguration {
  /**
   * The Amazon EFS file system ID to use.
   *
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * The directory within the Amazon EFS file system to mount as the root directory inside the host. If this parameter is omitted, the root of the Amazon EFS volume will be used. Specifying `/` will have the same effect as omitting this parameter.
   *
   * > **Important:** If an EFS access point is specified in the `authorizationConfig`, the root directory parameter must either be omitted or set to `/` which will enforce the path set on the EFS access point.
   *
   * @public
   */
  rootDirectory?: string | undefined;

  /**
   * Determines whether to use encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. Transit encryption must be turned on if Amazon EFS IAM authorization is used. If this parameter is omitted, the default value of `DISABLED` is used. For more information, see [Encrypting data in transit](https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html) in the *Amazon Elastic File System User Guide*.
   *
   * @public
   */
  transitEncryption?: EFSTransitEncryption | undefined;

  /**
   * The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server. If you do not specify a transit encryption port, it will use the port selection strategy that the Amazon EFS mount helper uses. For more information, see [EFS mount helper](https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html) in the *Amazon Elastic File System User Guide*.
   *
   * @public
   */
  transitEncryptionPort?: number | undefined;

  /**
   * The authorization configuration details for the Amazon EFS file system.
   *
   * @public
   */
  authorizationConfig?: EFSAuthorizationConfig | undefined;
}

/**
 * The authorization configuration details for Amazon FSx for Windows File Server file system. See [FSxWindowsFileServerVolumeConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_FSxWindowsFileServerVolumeConfiguration.html) in the *Amazon ECS API Reference*.
 *
 * For more information and the input format, see [Amazon FSx for Windows File Server Volumes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface FSxWindowsFileServerAuthorizationConfig {
  /**
   * The authorization credential option to use. The authorization credential options can be provided using either the Amazon Resource Name (ARN) of an Secrets Manager secret or SSM Parameter Store parameter. The ARN refers to the stored credentials.
   *
   * @public
   */
  credentialsParameter: string | undefined;

  /**
   * A fully qualified domain name hosted by an [Directory Service](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html) Managed Microsoft AD (Active Directory) or self-hosted AD on Amazon EC2.
   *
   * @public
   */
  domain: string | undefined;
}

/**
 * This parameter is specified when you're using [Amazon FSx for Windows File Server](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html) file system for task storage.
 *
 * For more information and the input format, see [Amazon FSx for Windows File Server volumes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface FSxWindowsFileServerVolumeConfiguration {
  /**
   * The Amazon FSx for Windows File Server file system ID to use.
   *
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * The directory within the Amazon FSx for Windows File Server file system to mount as the root directory inside the host.
   *
   * @public
   */
  rootDirectory: string | undefined;

  /**
   * The authorization configuration details for the Amazon FSx for Windows File Server file system.
   *
   * @public
   */
  authorizationConfig: FSxWindowsFileServerAuthorizationConfig | undefined;
}

/**
 * This parameter is specified when you're using an Amazon S3 Files file system for task storage. For more information, see [Amazon S3 Files volumes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/s3files-volumes.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * > **Important:** Your task definition must include a Task IAM Role. See [IAM role for attaching your file system to Amazon Web Services compute resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-files-prereq-policies.html#s3-files-prereq-iam-compute-role) for required permissions.
 *
 * @public
 */
export interface S3FilesVolumeConfiguration {
  /**
   * The full ARN of the S3 Files file system to mount.
   *
   * @public
   */
  fileSystemArn: string | undefined;

  /**
   * The directory within the Amazon S3 Files file system to mount as the root directory. If this parameter is omitted, the root of the Amazon S3 Files file system will be used. Specifying `/` will have the same effect as omitting this parameter.
   *
   * > **Important:** If a S3 Files access point is specified in the `accessPointArn`, the root directory parameter must either be omitted or set to `/` which will enforce the path set on the S3 Files access point.
   *
   * @public
   */
  rootDirectory?: string | undefined;

  /**
   * The port to use for sending encrypted data between the ECS host and the S3 Files file system. If you do not specify a transit encryption port, it will use the port selection strategy that the Amazon S3 Files mount helper uses. For more information, see [S3 Files mount helper](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-files-mounting.html).
   *
   * @public
   */
  transitEncryptionPort?: number | undefined;

  /**
   * The full ARN of the S3 Files access point to use. If an access point is specified, the root directory value specified in the `S3FilesVolumeConfiguration` must either be omitted or set to `/` which will enforce the path set on the S3 Files access point. For more information, see [Creating S3 Files access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-files-access-points-creating.html).
   *
   * @public
   */
  accessPointArn?: string | undefined;
}

/**
 * The data volume configuration for tasks launched using this task definition. Specifying a volume configuration in a task definition is optional. The volume configuration may contain multiple volumes but only one volume configured at launch is supported. Each volume defined in the volume configuration may only specify a `name` and one of either `configuredAtLaunch`, `dockerVolumeConfiguration`, `efsVolumeConfiguration`, `s3filesVolumeConfiguration`, `fsxWindowsFileServerVolumeConfiguration`, or `host`. If an empty volume configuration is specified, by default Amazon ECS uses a host volume. For more information, see [Using data volumes in tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html).
 *
 * @public
 */
export interface Volume {
  /**
   * The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
   *
   * When using a volume configured at launch, the `name` is required and must also be specified as the volume name in the `ServiceVolumeConfiguration` or `TaskVolumeConfiguration` parameter when creating your service or standalone task.
   *
   * For all other types of volumes, this name is referenced in the `sourceVolume` parameter of the `mountPoints` object in the container definition.
   *
   * When a volume is using the `efsVolumeConfiguration`, the name is required.
   *
   * When a volume is using the `s3filesVolumeConfiguration`, the name is required.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * This parameter is specified when you use bind mount host volumes. The contents of the `host` parameter determine whether your bind mount host volume persists on the host container instance and where it's stored. If the `host` parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.
   *
   * Windows containers can mount whole directories on the same drive as `$env:ProgramData`. Windows containers can't mount directories on a different drive, and mount point can't be across drives. For example, you can mount `C:\my\path:C:\my\path` and `D:\:D:\`, but not `D:\my\path:C:\my\path` or `D:\:C:\my\path`.
   *
   * @public
   */
  host?: HostVolumeProperties | undefined;

  /**
   * This parameter is specified when you use Docker volumes.
   *
   * Windows containers only support the use of the `local` driver. To use bind mounts, specify the `host` parameter instead.
   *
   * > **Note:** Docker volumes aren't supported by tasks run on Fargate.
   *
   * @public
   */
  dockerVolumeConfiguration?: DockerVolumeConfiguration | undefined;

  /**
   * This parameter is specified when you use an Amazon Elastic File System file system for task storage.
   *
   * @public
   */
  efsVolumeConfiguration?: EFSVolumeConfiguration | undefined;

  /**
   * This parameter is specified when you use an Amazon S3 Files file system for task storage.
   *
   * @public
   */
  s3filesVolumeConfiguration?: S3FilesVolumeConfiguration | undefined;

  /**
   * This parameter is specified when you use Amazon FSx for Windows File Server file system for task storage.
   *
   * @public
   */
  fsxWindowsFileServerVolumeConfiguration?: FSxWindowsFileServerVolumeConfiguration | undefined;

  /**
   * Indicates whether the volume should be configured at launch time. This is used to create Amazon EBS volumes for standalone tasks or tasks created as part of a service. Each task definition revision may only have one volume configured at launch in the volume configuration.
   *
   * To configure a volume at launch time, use this task definition revision and specify a `volumeConfigurations` object when calling the `CreateService`, `UpdateService`, `RunTask` or `StartTask` APIs.
   *
   * @public
   */
  configuredAtLaunch?: boolean | undefined;
}

/**
 * The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
 *
 * @public
 */
export interface TaskDefinition {
  /**
   * The full Amazon Resource Name (ARN) of the task definition.
   *
   * @public
   */
  taskDefinitionArn?: string | undefined;

  /**
   * A list of container definitions in JSON format that describe the different containers that make up your task. For more information about container definition parameters and defaults, see [Amazon ECS Task Definitions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  containerDefinitions?: ContainerDefinition[] | undefined;

  /**
   * The name of a family that this task definition is registered to. Up to 255 characters are allowed. Letters (both uppercase and lowercase letters), numbers, hyphens (-), and underscores (_) are allowed.
   *
   * A family groups multiple versions of a task definition. Amazon ECS gives the first task definition that you registered to a family a revision number of 1. Amazon ECS gives sequential revision numbers to each task definition that you add.
   *
   * @public
   */
  family?: string | undefined;

  /**
   * The short name or full Amazon Resource Name (ARN) of the Identity and Access Management role that grants containers in the task permission to call Amazon Web Services APIs on your behalf. For informationabout the required IAM roles for Amazon ECS, see [IAM roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-ecs-iam-role-overview.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make Amazon Web Services API calls on your behalf. For informationabout the required IAM roles for Amazon ECS, see [IAM roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-ecs-iam-role-overview.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The Docker networking mode to use for the containers in the task. The valid values are `none`, `bridge`, `awsvpc`, and `host`. If no network mode is specified, the default is `bridge`.
   *
   * For Amazon ECS tasks on Fargate, the `awsvpc` network mode is required. For Amazon ECS tasks on Amazon EC2 Linux instances, any network mode can be used. For Amazon ECS tasks on Amazon EC2 Windows instances, `<default>` or `awsvpc` can be used. If the network mode is set to `none`, you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The `host` and `awsvpc` network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the `bridge` mode.
   *
   * With the `host` and `awsvpc` network modes, exposed container ports are mapped directly to the corresponding host port (for the `host` network mode) or the attached elastic network interface port (for the `awsvpc` network mode), so you cannot take advantage of dynamic host port mappings.
   *
   * > **Important:** When using the `host` network mode, you should not run containers using the root user (UID 0). It is considered best practice to use a non-root user.
   *
   * If the network mode is `awsvpc`, the task is allocated an elastic network interface, and you must specify a [NetworkConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_NetworkConfiguration.html) value when you create a service or run a task with the task definition. For more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * If the network mode is `host`, you cannot run multiple instantiations of the same task on a single container instance when port mappings are used.
   *
   * @public
   */
  networkMode?: NetworkMode | undefined;

  /**
   * The revision of the task in a particular family. The revision is a version number of a task definition in a family. When you register a task definition for the first time, the revision is `1`. Each time that you register a new revision of a task definition in the same family, the revision value always increases by one. This is even if you deregistered previous revisions in this family.
   *
   * @public
   */
  revision?: number | undefined;

  /**
   * The list of data volume definitions for the task. For more information, see [Using data volumes in tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * > **Note:** The `host` and `sourcePath` parameters aren't supported for tasks run on Fargate.
   *
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * The status of the task definition.
   *
   * @public
   */
  status?: TaskDefinitionStatus | undefined;

  /**
   * The container instance attributes required by your task. When an Amazon EC2 instance is registered to your cluster, the Amazon ECS container agent assigns some standard attributes to the instance. You can apply custom attributes. These are specified as key-value pairs using the Amazon ECS console or the [PutAttributes](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAttributes.html) API. These attributes are used when determining task placement for tasks hosted on Amazon EC2 instances. For more information, see [Attributes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * > **Note:** This parameter isn't supported for tasks run on Fargate.
   *
   * @public
   */
  requiresAttributes?: Attribute[] | undefined;

  /**
   * An array of placement constraint objects to use for tasks.
   *
   * > **Note:** This parameter isn't supported for tasks run on Fargate.
   *
   * @public
   */
  placementConstraints?: TaskDefinitionPlacementConstraint[] | undefined;

  /**
   * Amazon ECS validates the task definition parameters with those supported by the launch type. For more information, see [Amazon ECS launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  compatibilities?: Compatibility[] | undefined;

  /**
   * The operating system that your task definitions are running on. A platform family is specified only for tasks using the Fargate launch type.
   *
   * When you specify a task in a service, this value must match the `runtimePlatform` value of the service.
   *
   * @public
   */
  runtimePlatform?: RuntimePlatform | undefined;

  /**
   * The task launch types the task definition was validated against. The valid values are `MANAGED_INSTANCES`, `EC2`, `FARGATE`, and `EXTERNAL`. For more information, see [Amazon ECS launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  requiresCompatibilities?: Compatibility[] | undefined;

  /**
   * The number of `cpu` units used by the task. If you use the EC2 launch type, this field is optional. Any value can be used. If you use the Fargate launch type, this field is required. You must use one of the following values. The value that you choose determines your range of valid values for the `memory` parameter.
   *
   * If you're using the EC2 launch type or the external launch type, this field is optional. Supported values are between `128` CPU units (`0.125` vCPUs) and `196608` CPU units (`192` vCPUs).
   *
   * This field is required for Fargate. For information about the valid values, see [Task size](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  cpu?: string | undefined;

  /**
   * The amount (in MiB) of memory used by the task.
   *
   * If your tasks runs on Amazon EC2 instances, you must specify either a task-level memory value or a container-level memory value. This field is optional and any value can be used. If a task-level memory value is specified, the container-level memory value is optional. For more information regarding container-level memory and memory reservation, see [ContainerDefinition](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html).
   *
   * If your tasks runs on Fargate, this field is required. You must use one of the following values. The value you choose determines your range of valid values for the `cpu` parameter.
   *
   * - 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available `cpu` values: 256 (.25 vCPU)
   * - 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available `cpu` values: 512 (.5 vCPU)
   * - 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available `cpu` values: 1024 (1 vCPU)
   * - Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available `cpu` values: 2048 (2 vCPU)
   * - Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available `cpu` values: 4096 (4 vCPU)
   * - Between 16 GB and 60 GB in 4 GB increments - Available `cpu` values: 8192 (8 vCPU)
   *
   *   This option requires Linux platform `1.4.0` or later.
   * - Between 32GB and 120 GB in 8 GB increments - Available `cpu` values: 16384 (16 vCPU)
   *
   *   This option requires Linux platform `1.4.0` or later.
   *
   * @public
   */
  memory?: string | undefined;

  /**
   * The Elastic Inference accelerator that's associated with the task.
   *
   * @deprecated (since 2023-04-15) This feature is no longer available.
   * @public
   */
  inferenceAccelerators?: InferenceAccelerator[] | undefined;

  /**
   * The process namespace to use for the containers in the task. The valid values are `host` or `task`. On Fargate for Linux containers, the only valid value is `task`. For example, monitoring sidecars might need `pidMode` to access information about other containers running in the same task.
   *
   * If `host` is specified, all containers within the tasks that specified the `host` PID mode on the same container instance share the same process namespace with the host Amazon EC2 instance.
   *
   * If `task` is specified, all containers within the specified task share the same process namespace.
   *
   * If no value is specified, the The default is a private namespace for each container.
   *
   * If the `host` PID mode is used, there's a heightened risk of undesired process namespace exposure.
   *
   * > **Note:** This parameter is not supported for Windows containers.
   *
   * > **Note:** This parameter is only supported for tasks that are hosted on Fargate if the tasks are using platform version `1.4.0` or later (Linux). This isn't supported for Windows containers on Fargate.
   *
   * @public
   */
  pidMode?: PidMode | undefined;

  /**
   * The IPC resource namespace to use for the containers in the task. The valid values are `host`, `task`, or `none`. If `host` is specified, then all containers within the tasks that specified the `host` IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If `task` is specified, all containers within the specified task share the same IPC resources. If `none` is specified, then IPC resources within the containers of a task are private and not shared with other containers in a task or on the container instance. If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance.
   *
   * If the `host` IPC mode is used, be aware that there is a heightened risk of undesired IPC namespace expose.
   *
   * If you are setting namespaced kernel parameters using `systemControls` for the containers in the task, the following will apply to your IPC resource namespace. For more information, see [System Controls](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * - For tasks that use the `host` IPC mode, IPC namespace related `systemControls` are not supported.
   * - For tasks that use the `task` IPC mode, IPC namespace related `systemControls` will apply to all containers within a task.
   *
   * > **Note:** This parameter is not supported for Windows containers or tasks run on Fargate.
   *
   * @public
   */
  ipcMode?: IpcMode | undefined;

  /**
   * The configuration details for the App Mesh proxy.
   *
   * Your Amazon ECS container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the `ecs-init` package to use a proxy configuration. If your container instances are launched from the Amazon ECS optimized AMI version `20190301` or later, they contain the required versions of the container agent and `ecs-init`. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * The Unix timestamp for the time when the task definition was registered.
   *
   * @public
   */
  registeredAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the task definition was deregistered.
   *
   * @public
   */
  deregisteredAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the task definition delete was requested.
   *
   * @public
   */
  deleteRequestedAt?: Date | undefined;

  /**
   * The principal that registered the task definition.
   *
   * @public
   */
  registeredBy?: string | undefined;

  /**
   * The ephemeral storage settings to use for tasks run with the task definition.
   *
   * @public
   */
  ephemeralStorage?: EphemeralStorage | undefined;

  /**
   * Enables fault injection and allows for fault injection requests to be accepted from the task's containers. The default value is `false`.
   *
   * @public
   */
  enableFaultInjection?: boolean | undefined;
}

/**
 *
 * @public
 */
export interface DeregisterTaskDefinitionResponse {
  /**
   * The full description of the deregistered task.
   *
   * @public
   */
  taskDefinition?: TaskDefinition | undefined;
}

/**
 *
 * @public
 */
export interface DescribeTaskDefinitionRequest {
  /**
   * The `family` for the latest `ACTIVE` revision, `family` and `revision` (`family:revision`) for a specific revision in the family, or full Amazon Resource Name (ARN) of the task definition to describe.
   *
   * @public
   */
  taskDefinition: string | undefined;

  /**
   * Determines whether to see the resource tags for the task definition. If `TAGS` is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response.
   *
   * @public
   */
  include?: TaskDefinitionField[] | undefined;
}

/**
 *
 * @public
 */
export interface DescribeTaskDefinitionResponse {
  /**
   * The full task definition description.
   *
   * @public
   */
  taskDefinition?: TaskDefinition | undefined;

  /**
   * The metadata that's applied to the task definition to help you categorize and organize them. Each tag consists of a key and an optional value. You define both.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8
   * - Maximum value length - 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 *
 * @public
 */
export interface DiscoverPollEndpointRequest {
  /**
   * The container instance ID or full ARN of the container instance. For more information about the ARN format, see [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  containerInstance?: string | undefined;

  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that the container instance belongs to.
   *
   * @public
   */
  cluster?: string | undefined;
}

/**
 *
 * @public
 */
export interface DiscoverPollEndpointResponse {
  /**
   * The endpoint for the Amazon ECS agent to poll.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The telemetry endpoint for the Amazon ECS agent.
   *
   * @public
   */
  telemetryEndpoint?: string | undefined;

  /**
   * The endpoint for the Amazon ECS agent to poll for Service Connect configuration. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  serviceConnectEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface AssociateGatewayWithClusterRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the gateway to associate.
   *
   * @public
   */
  gateway: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the cluster to associate the gateway with.
   *
   * @public
   */
  cluster: string | undefined;
}

/**
 * @public
 */
export interface AssociateGatewayWithClusterResponse {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The status of the association. A new association is `ACTIVE`.
   *
   * @public
   */
  status?: GatewayClusterAssociationStatus | undefined;
}

/**
 * The Amazon S3 destination for the access logs of a gateway's load balancers.
 *
 * @public
 */
export interface GatewayElbAccessLogS3Destination {
  /**
   * The name of the Amazon S3 bucket where access logs are delivered.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The object key prefix for the access logs in the Amazon S3 bucket.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * The destination where the access logs for a gateway's load balancers are delivered.
 *
 * @public
 */
export type GatewayElbAccessLogDestination =
  | GatewayElbAccessLogDestination.S3Member
  | GatewayElbAccessLogDestination.$UnknownMember;

/**
 * @public
 */
export namespace GatewayElbAccessLogDestination {
  /**
   * The Amazon S3 destination for access logs.
   *
   * @public
   */
  export interface S3Member {
    s3: GatewayElbAccessLogS3Destination;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: GatewayElbAccessLogS3Destination) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The access log configuration for the load balancers that a gateway manages.
 *
 * @public
 */
export interface GatewayElbAccessLogConfiguration {
  /**
   * The destination where access logs are delivered.
   *
   * @public
   */
  destination?: GatewayElbAccessLogDestination | undefined;
}

/**
 * The network configuration for the load balancers that a gateway manages.
 *
 * @public
 */
export interface GatewayElbNetworkConfiguration {
  /**
   * The ID of a security group that you provide to control inbound traffic to the load balancers that the gateway manages. When you specify a security group, the gateway doesn't create inbound rules on the security group it manages.
   *
   * @public
   */
  inboundSecurityGroup?: string | undefined;

  /**
   * The subnets for the load balancers that the gateway manages. The default is the subnets in the default VPC.
   *
   * @public
   */
  subnets?: string[] | undefined;

  /**
   * The IP address type for the load balancers that the gateway manages. The default is `dualstack`.
   *
   * @public
   */
  ipAddressType?: GatewayElbIpAddressType | undefined;
}

/**
 * A header-based rule that identifies test traffic for progressive deployments.
 *
 * @public
 */
export interface GatewayTestTrafficHeader {
  /**
   * The name of the header to match for test traffic routing.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The header values to match for test traffic routing.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * The rules that route test traffic to services behind a gateway during progressive deployments.
 *
 * @public
 */
export interface GatewayAlbTestTrafficRules {
  /**
   * The header-based rule that identifies test traffic.
   *
   * @public
   */
  header?: GatewayTestTrafficHeader | undefined;
}

/**
 * The configuration for a gateway that uses shared Application Load Balancers with host-based routing. Where they apply, the field names and values are kept consistent with the Elastic Load Balancing API.
 *
 * @public
 */
export interface HostSharedAlbConfiguration {
  /**
   * The network configuration for the load balancers that the gateway manages.
   *
   * @public
   */
  networkConfiguration?: GatewayElbNetworkConfiguration | undefined;

  /**
   * Specifies whether the load balancers the gateway manages are `internet-facing` or `internal`. The default is `internet-facing`.
   *
   * @public
   */
  scheme?: GatewayElbScheme | undefined;

  /**
   * The Amazon Resource Name (ARN) of the WAF web ACL to associate with the load balancers that the gateway manages.
   *
   * @public
   */
  webACLArn?: string | undefined;

  /**
   * The access log configuration for the load balancers that the gateway manages.
   *
   * @public
   */
  accessLogs?: GatewayElbAccessLogConfiguration | undefined;

  /**
   * The port that the load balancer listener uses is 443. The gateway supports only HTTPS at port 443.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The protocol for the load balancer listener is `HTTPS`. No other protocol is supported.
   *
   * @public
   */
  protocol?: GatewayAlbProtocol | undefined;

  /**
   * The maximum number of Application Load Balancers that the gateway manages. The default is 10.
   *
   * @public
   */
  maxAlbCount?: number | undefined;

  /**
   * The desync mitigation mode for the load balancers that the gateway manages, which determines how the load balancers handle requests that might pose a security risk. The default is `defensive`.
   *
   * @public
   */
  httpDesync?: GatewayAlbDesyncMitigationMode | undefined;

  /**
   * The rules that route test traffic for progressive deployments. During a progressive deployment, requests whose headers match these rules are routed to the new service revision so that it can be validated before production traffic shifts to it.
   *
   * @public
   */
  testTrafficRules?: GatewayAlbTestTrafficRules | undefined;
}

/**
 * The type-specific configuration for a gateway that you provide when you create it. Exactly one variant is set, and it determines the gateway type.
 *
 * @public
 */
export type GatewayConfiguration =
  | GatewayConfiguration.HostSharedAlbMember
  | GatewayConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace GatewayConfiguration {
  /**
   * The configuration for a host-based, shared Application Load Balancer gateway. Each service that uses the gateway is assigned a unique DNS host name.
   *
   * @public
   */
  export interface HostSharedAlbMember {
    hostSharedAlb: HostSharedAlbConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    hostSharedAlb?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    hostSharedAlb: (value: HostSharedAlbConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateGatewayRequest {
  /**
   * The name for the gateway. The name must be unique within your account and can be up to 255 characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the gateway assumes to create and manage infrastructure on your behalf.
   *
   * @public
   */
  infrastructureRoleArn: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies whether to enable deletion protection for the gateway. When enabled, the gateway can't be deleted, and the gateway propagates this setting to the load balancers it manages. The default is `true`.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The type-specific configuration for the gateway. Exactly one configuration variant must be set, and it determines the gateway type. For example, `hostSharedAlb` configures a gateway that uses Application Load Balancers with host-based routing.
   *
   * @public
   */
  configuration: GatewayConfiguration | undefined;

  /**
   * The metadata that you apply to the gateway to help you categorize and organize it. Each tag consists of a key and an optional value. Depending on `propagateTags`, these tags can be applied to the infrastructure the gateway manages.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Specifies whether to propagate the tags from the gateway to the infrastructure that the gateway manages. The default is `GATEWAY`.
   *
   * @public
   */
  propagateTags?: PropagateGatewayTags | undefined;
}

/**
 * @public
 */
export interface CreateGatewayResponse {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn?: string | undefined;

  /**
   * The name of the gateway.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status of the gateway. A newly created gateway is always `ACTIVE`.
   *
   * @public
   */
  status?: GatewayStatus | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the gateway to delete.
   *
   * @public
   */
  gateway: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted gateway.
   *
   * @public
   */
  gatewayArn?: string | undefined;

  /**
   * The name of the deleted gateway.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status of the gateway. After a successful delete, the status is `DELETED`.
   *
   * @public
   */
  status?: GatewayStatus | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the gateway to describe.
   *
   * @public
   */
  gateway: string | undefined;
}

/**
 * The configuration for a gateway that uses shared Application Load Balancers, as returned by `DescribeGateway`. This includes the current number of load balancers in addition to the configured settings.
 *
 * @public
 */
export interface DescribeGatewayAlbConfiguration {
  /**
   * The network configuration for the load balancers that the gateway manages.
   *
   * @public
   */
  networkConfiguration?: GatewayElbNetworkConfiguration | undefined;

  /**
   * Specifies whether the load balancers the gateway manages are `internet-facing` or `internal`.
   *
   * @public
   */
  scheme?: GatewayElbScheme | undefined;

  /**
   * The access log configuration for the load balancers that the gateway manages.
   *
   * @public
   */
  accessLogs?: GatewayElbAccessLogConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the WAF web ACL associated with the load balancers that the gateway manages.
   *
   * @public
   */
  webACLArn?: string | undefined;

  /**
   * The port that the load balancer listener uses is 443. The gateway supports only HTTPS at port 443.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The protocol for the load balancer listener is `HTTPS`. No other protocol is supported.
   *
   * @public
   */
  protocol?: GatewayAlbProtocol | undefined;

  /**
   * The maximum number of Application Load Balancers that the gateway manages.
   *
   * @public
   */
  maxAlbCount?: number | undefined;

  /**
   * The current number of Application Load Balancers that the gateway has allocated.
   *
   * @public
   */
  currentAlbCount?: number | undefined;

  /**
   * The desync mitigation mode for the load balancers that the gateway manages.
   *
   * @public
   */
  httpDesync?: GatewayAlbDesyncMitigationMode | undefined;

  /**
   * The rules that route test traffic for progressive deployments.
   *
   * @public
   */
  testTrafficRules?: GatewayAlbTestTrafficRules | undefined;
}

/**
 * The type-specific configuration for a gateway that is returned by `DescribeGateway`.
 *
 * @public
 */
export type DescribeGatewayConfiguration =
  | DescribeGatewayConfiguration.HostSharedAlbMember
  | DescribeGatewayConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace DescribeGatewayConfiguration {
  /**
   * The configuration for a host-based, shared Application Load Balancer gateway.
   *
   * @public
   */
  export interface HostSharedAlbMember {
    hostSharedAlb: DescribeGatewayAlbConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    hostSharedAlb?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    hostSharedAlb: (value: DescribeGatewayAlbConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A single failed operation against a resource that a gateway manages.
 *
 * @public
 */
export interface GatewayOperationError {
  /**
   * The IAM-style action identifier of the operation that failed, such as `elasticloadbalancing:ModifyLoadBalancerAttributes`.
   *
   * @public
   */
  operation?: string | undefined;

  /**
   * The error code returned by the failed operation, passed through from the downstream service, such as `AccessDenied`.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The detailed error message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * The failures for a single resource that was touched by an asynchronous gateway process.
 *
 * @public
 */
export interface GatewayResourceFailure {
  /**
   * The Amazon Resource Name (ARN) of the resource that failed to update, such as a load balancer ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The errors that were encountered while operating on the resource.
   *
   * @public
   */
  errors?: GatewayOperationError[] | undefined;
}

/**
 * The details of a gateway, including its configuration, status, and the infrastructure settings for its type.
 *
 * @public
 */
export interface Gateway {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn?: string | undefined;

  /**
   * The name of the gateway.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status of the gateway.
   *
   * @public
   */
  status?: GatewayStatus | undefined;

  /**
   * A human-readable explanation of the current status. This value is populated when the gateway is in a failure state, such as `UPDATE_FAILED`.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The per-resource failure details for asynchronous gateway processes, such as an `UpdateGateway` operation that couldn't update every load balancer.
   *
   * @public
   */
  failures?: GatewayResourceFailure[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the gateway uses to manage infrastructure on your behalf.
   *
   * @public
   */
  infrastructureRoleArn?: string | undefined;

  /**
   * Specifies whether deletion protection is enabled for the gateway.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The type-specific configuration for the gateway.
   *
   * @public
   */
  configuration?: DescribeGatewayConfiguration | undefined;

  /**
   * Specifies whether the gateway is publicly accessible (`PUBLIC`) or private (`PRIVATE`). The gateway derives this value from its scheme when you create the gateway, and the value is immutable.
   *
   * @public
   */
  accessType?: AccessType | undefined;

  /**
   * Specifies whether the gateway propagates its tags to the infrastructure it manages.
   *
   * @public
   */
  propagateTags?: PropagateGatewayTags | undefined;

  /**
   * The metadata applied to the gateway. Each tag consists of a key and an optional value.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The Unix timestamp for the time when the gateway was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the gateway was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayResponse {
  /**
   * The details of the gateway.
   *
   * @public
   */
  gateway?: Gateway | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayResourcesRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gateway: string | undefined;

  /**
   * The maximum number of results that the operation returns in a single page. The maximum value is 20 and the default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An Application Load Balancer and its associated resources that a gateway manages.
 *
 * @public
 */
export interface ElbGatewayResources {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  loadBalancerArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the listener on the load balancer.
   *
   * @public
   */
  listenerArn?: string | undefined;

  /**
   * The ID of the security group attached to the load balancer.
   *
   * @public
   */
  securityGroup?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the gateway routes that use this load balancer for ingress.
   *
   * @public
   */
  gatewayRouteArns?: string[] | undefined;
}

/**
 * The gateway-managed infrastructure in a `DescribeGatewayResources` response, as a union keyed by gateway type.
 *
 * @public
 */
export type GatewayInfrastructureResources =
  | GatewayInfrastructureResources.HostSharedAlbMember
  | GatewayInfrastructureResources.$UnknownMember;

/**
 * @public
 */
export namespace GatewayInfrastructureResources {
  /**
   * The Application Load Balancer resource groups for a host-based, shared ALB gateway.
   *
   * @public
   */
  export interface HostSharedAlbMember {
    hostSharedAlb: ElbGatewayResources[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    hostSharedAlb?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    hostSharedAlb: (value: ElbGatewayResources[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * `DescribeGatewayResources` returns the gateway-managed infrastructure, grouped by gateway type.
 *
 * @public
 */
export interface GatewayResources {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn?: string | undefined;

  /**
   * The infrastructure resources that the gateway manages.
   *
   * @public
   */
  resources?: GatewayInfrastructureResources | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayResourcesResponse {
  /**
   * The infrastructure resources that the gateway manages, grouped by gateway type.
   *
   * @public
   */
  gatewayResources?: GatewayResources | undefined;

  /**
   * The `nextToken` value to include in a future request to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateGatewayFromClusterRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the gateway to disassociate.
   *
   * @public
   */
  gateway: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the cluster to disassociate the gateway from.
   *
   * @public
   */
  cluster: string | undefined;
}

/**
 * @public
 */
export interface DisassociateGatewayFromClusterResponse {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The status of the association. After a successful request, the status is `DISASSOCIATING` until all routes are removed, after which the association is deleted.
   *
   * @public
   */
  status?: GatewayClusterAssociationStatus | undefined;
}

/**
 * @public
 */
export interface ListGatewayClusterAssociationsRequest {
  /**
   * The name or Amazon Resource Name (ARN) of a gateway to filter the results by.
   *
   * @public
   */
  gateway?: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of a cluster to filter the results by.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The association status to filter the results by.
   *
   * @public
   */
  status?: GatewayClusterAssociationStatus[] | undefined;

  /**
   * The maximum number of results that the operation returns in a single page. The default is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of an association between a gateway and a cluster.
 *
 * @public
 */
export interface GatewayClusterAssociationSummary {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The status of the association.
   *
   * @public
   */
  status?: GatewayClusterAssociationStatus | undefined;
}

/**
 * @public
 */
export interface ListGatewayClusterAssociationsResponse {
  /**
   * The gateway-cluster associations that match the request.
   *
   * @public
   */
  gatewayClusterAssociations?: GatewayClusterAssociationSummary[] | undefined;

  /**
   * The `nextToken` value to include in a future request to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewaysRequest {
  /**
   * The gateway names to filter the results by. You can specify up to 10 names.
   *
   * @public
   */
  names?: string[] | undefined;

  /**
   * The gateway statuses to filter the results by.
   *
   * @public
   */
  status?: GatewayStatus[] | undefined;

  /**
   * The maximum number of gateway results that `ListGateways` returns in a single page. The default is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListGateways` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of a gateway that is returned by the `ListGateways` operation.
 *
 * @public
 */
export interface GatewaySummary {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn?: string | undefined;

  /**
   * The name of the gateway.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status of the gateway.
   *
   * @public
   */
  status?: GatewayStatus | undefined;

  /**
   * The Unix timestamp for the time when the gateway was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewaysResponse {
  /**
   * The list of gateways that match the request.
   *
   * @public
   */
  gateways?: GatewaySummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListGateways` request. When the results of a `ListGateways` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The mutable network configuration for the load balancers that a gateway manages.
 *
 * @public
 */
export interface UpdateGatewayNetworkConfiguration {
  /**
   * The ID of a security group that you provide to control inbound traffic to the load balancers that the gateway manages. When you specify a security group, the gateway doesn't create inbound rules on the security group it manages.
   *
   * @public
   */
  inboundSecurityGroup?: string | undefined;
}

/**
 * The mutable configuration fields for a gateway that uses shared Application Load Balancers. Only fields that can be changed without interrupting traffic are included.
 *
 * @public
 */
export interface UpdateGatewayAlbConfiguration {
  /**
   * The mutable network configuration for the load balancers that the gateway manages.
   *
   * @public
   */
  networkConfiguration?: UpdateGatewayNetworkConfiguration | undefined;

  /**
   * The maximum number of Application Load Balancers that the gateway manages.
   *
   * @public
   */
  maxAlbCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the WAF web ACL to associate with the load balancers that the gateway manages.
   *
   * @public
   */
  webACLArn?: string | undefined;

  /**
   * The access log configuration for the load balancers that the gateway manages.
   *
   * @public
   */
  accessLogs?: GatewayElbAccessLogConfiguration | undefined;

  /**
   * The desync mitigation mode for the load balancers that the gateway manages.
   *
   * @public
   */
  httpDesync?: GatewayAlbDesyncMitigationMode | undefined;

  /**
   * The rules that route test traffic for progressive deployments.
   *
   * @public
   */
  testTrafficRules?: GatewayAlbTestTrafficRules | undefined;
}

/**
 * The type-specific configuration to change on a gateway. The variant must match the gateway's existing type.
 *
 * @public
 */
export type UpdateGatewayConfiguration =
  | UpdateGatewayConfiguration.HostSharedAlbMember
  | UpdateGatewayConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace UpdateGatewayConfiguration {
  /**
   * The mutable configuration for a host-based, shared Application Load Balancer gateway.
   *
   * @public
   */
  export interface HostSharedAlbMember {
    hostSharedAlb: UpdateGatewayAlbConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    hostSharedAlb?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    hostSharedAlb: (value: UpdateGatewayAlbConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateGatewayRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the gateway to update.
   *
   * @public
   */
  gateway: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the gateway assumes to manage infrastructure on your behalf.
   *
   * @public
   */
  infrastructureRoleArn?: string | undefined;

  /**
   * Specifies whether to enable deletion protection for the gateway. When enabled, the gateway can't be deleted.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The updated type-specific configuration for the gateway. The configuration variant must match the gateway's existing type, and only mutable fields can be changed.
   *
   * @public
   */
  configuration?: UpdateGatewayConfiguration | undefined;

  /**
   * Specifies whether to propagate the tags from the gateway to the infrastructure that the gateway manages. If you don't specify a value, the gateway's existing setting is unchanged.
   *
   * @public
   */
  propagateTags?: PropagateGatewayTags | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayResponse {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn?: string | undefined;

  /**
   * The name of the gateway.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status of the gateway. After a successful update request, the status is `UPDATE_IN_PROGRESS`.
   *
   * @public
   */
  status?: GatewayStatus | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayRouteRequest {
  /**
   * The Amazon Resource Name (ARN) of the gateway route to describe.
   *
   * @public
   */
  gatewayRouteArn: string | undefined;
}

/**
 * A security group attached to the load balancer for a gateway route.
 *
 * @public
 */
export interface GatewayRouteLoadBalancerSecurityGroup {
  /**
   * The Amazon Resource Name (ARN) of the security group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the security group rules.
   *
   * @public
   */
  ruleArns?: string[] | undefined;
}

/**
 * The Application Load Balancer resources that a gateway manages for a route.
 *
 * @public
 */
export interface GatewayRouteAlbResources {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager certificate.
   *
   * @public
   */
  acmCertificateArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  loadBalancerArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  listenerArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the listener rule for production traffic.
   *
   * @public
   */
  listenerRuleArn?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the listener rules for test traffic. There is one rule except when a test header configuration is being changed to another.
   *
   * @public
   */
  testListenerRuleArns?: string[] | undefined;

  /**
   * The security groups attached to the load balancer.
   *
   * @public
   */
  loadBalancerSecurityGroups?: GatewayRouteLoadBalancerSecurityGroup[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service security group in which the gateway manages the ingress rule for this route.
   *
   * @public
   */
  serviceSecurityGroupArn?: string | undefined;
}

/**
 * The service-specific infrastructure that a gateway manages for a route, keyed by gateway type.
 *
 * @public
 */
export type GatewayRouteResources =
  | GatewayRouteResources.HostSharedAlbMember
  | GatewayRouteResources.$UnknownMember;

/**
 * @public
 */
export namespace GatewayRouteResources {
  /**
   * The Application Load Balancer resources for a host-based, shared ALB gateway.
   *
   * @public
   */
  export interface HostSharedAlbMember {
    hostSharedAlb: GatewayRouteAlbResources[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    hostSharedAlb?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    hostSharedAlb: (value: GatewayRouteAlbResources[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A gateway route, which represents the association between a service and a gateway and the service-specific infrastructure that the gateway manages for the service's revisions.
 *
 * @public
 */
export interface GatewayRoute {
  /**
   * The Amazon Resource Name (ARN) of the gateway route.
   *
   * @public
   */
  gatewayRouteArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service associated with the route.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The task definition container port name that the route targets on the service.
   *
   * @public
   */
  serviceContainerPortName?: string | undefined;

  /**
   * The status of the gateway route.
   *
   * @public
   */
  status?: GatewayRouteStatus | undefined;

  /**
   * The URL for accessing the service, including the `https://` scheme.
   *
   * @public
   */
  serviceUrl?: string | undefined;

  /**
   * The service-specific infrastructure that the gateway manages for the route, keyed by gateway type.
   *
   * @public
   */
  resources?: GatewayRouteResources | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayRouteResponse {
  /**
   * The details of the gateway route.
   *
   * @public
   */
  gatewayRoute?: GatewayRoute | undefined;
}

/**
 * @public
 */
export interface ListGatewayRoutesRequest {
  /**
   * The name or Amazon Resource Name (ARN) of a gateway to filter the results by.
   *
   * @public
   */
  gateway?: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of a cluster to filter the results by.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of a service to filter the results by. Because services can span clusters, a service name isn't necessarily unique and can match multiple services.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The name of a task definition container port to filter the results by.
   *
   * @public
   */
  serviceContainerPortName?: string | undefined;

  /**
   * The gateway route status to filter the results by.
   *
   * @public
   */
  status?: GatewayRouteStatus[] | undefined;

  /**
   * The maximum number of results that the operation returns in a single page. The default is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of a gateway route that is returned by the `ListGatewayRoutes` operation.
 *
 * @public
 */
export interface GatewayRouteSummary {
  /**
   * The Amazon Resource Name (ARN) of the gateway route.
   *
   * @public
   */
  gatewayRouteArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The task definition container port name that the route targets on the service.
   *
   * @public
   */
  serviceContainerPortName?: string | undefined;

  /**
   * The status of the gateway route.
   *
   * @public
   */
  status?: GatewayRouteStatus | undefined;
}

/**
 * @public
 */
export interface ListGatewayRoutesResponse {
  /**
   * The gateway routes that match the request.
   *
   * @public
   */
  gatewayRoutes?: GatewayRouteSummary[] | undefined;

  /**
   * The `nextToken` value to include in a future request to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountSettingsRequest {
  /**
   * The name of the account setting you want to list the settings for.
   *
   * @public
   */
  name?: SettingName | undefined;

  /**
   * The value of the account settings to filter results with. You must also specify an account setting name to use this parameter.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The ARN of the principal, which can be a user, role, or the root user. If this field is omitted, the account settings are listed only for the authenticated user.
   *
   * In order to use this parameter, you must be the root user, or the principal.
   *
   * > **Note:** Federated users assume the account setting of the root user and can't have explicit account settings set for them.
   *
   * @public
   */
  principalArn?: string | undefined;

  /**
   * Determines whether to return the effective settings. If `true`, the account settings for the root user or the default setting for the `principalArn` are returned. If `false`, the account settings for the `principalArn` are returned if they're set. Otherwise, no account settings are returned.
   *
   * @public
   */
  effectiveSettings?: boolean | undefined;

  /**
   * The `nextToken` value returned from a `ListAccountSettings` request indicating that more results are available to fulfill the request and further calls will be needed. If `maxResults` was provided, it's possible the number of results to be fewer than `maxResults`.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of account setting results returned by `ListAccountSettings` in paginated output. When this parameter is used, `ListAccountSettings` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListAccountSettings` request with the returned `nextToken` value. This value can be between 1 and 10. If this parameter isn't used, then `ListAccountSettings` returns up to 10 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountSettingsResponse {
  /**
   * The account settings for the resource.
   *
   * @public
   */
  settings?: Setting[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListAccountSettings` request. When the results of a `ListAccountSettings` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesByNamespaceRequest {
  /**
   * The namespace name or full Amazon Resource Name (ARN) of the Cloud Map namespace to list the services in.
   *
   * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The `nextToken` value that's returned from a `ListServicesByNamespace` request. It indicates that more results are available to fulfill the request and further calls are needed. If `maxResults` is returned, it is possible the number of results is less than `maxResults`.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of service results that `ListServicesByNamespace` returns in paginated output. When this parameter is used, `ListServicesByNamespace` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListServicesByNamespace` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListServicesByNamespace` returns up to 10 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListServicesByNamespaceResponse {
  /**
   * The list of full ARN entries for each service that's associated with the specified namespace.
   *
   * @public
   */
  serviceArns?: string[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListServicesByNamespace` request. When the results of a `ListServicesByNamespace` request exceed `maxResults`, this value can be used to retrieve the next page of results. When there are no more results to return, this value is `null`.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resources are Amazon ECS tasks, services, task definitions, clusters, and container instances.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags for the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 *
 * @public
 */
export interface ListTaskDefinitionFamiliesRequest {
  /**
   * The `familyPrefix` is a string that's used to filter the results of `ListTaskDefinitionFamilies`. If you specify a `familyPrefix`, only task definition family names that begin with the `familyPrefix` string are returned.
   *
   * @public
   */
  familyPrefix?: string | undefined;

  /**
   * The task definition family status to filter the `ListTaskDefinitionFamilies` results with. By default, both `ACTIVE` and `INACTIVE` task definition families are listed. If this parameter is set to `ACTIVE`, only task definition families that have an `ACTIVE` task definition revision are returned. If this parameter is set to `INACTIVE`, only task definition families that do not have any `ACTIVE` task definition revisions are returned. If you paginate the resulting output, be sure to keep the `status` value constant in each subsequent request.
   *
   * @public
   */
  status?: TaskDefinitionFamilyStatus | undefined;

  /**
   * The `nextToken` value returned from a `ListTaskDefinitionFamilies` request indicating that more results are available to fulfill the request and further calls will be needed. If `maxResults` was provided, it is possible the number of results to be fewer than `maxResults`.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of task definition family results that `ListTaskDefinitionFamilies` returned in paginated output. When this parameter is used, `ListTaskDefinitions` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListTaskDefinitionFamilies` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter isn't used, then `ListTaskDefinitionFamilies` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 *
 * @public
 */
export interface ListTaskDefinitionFamiliesResponse {
  /**
   * The list of task definition family names that match the `ListTaskDefinitionFamilies` request.
   *
   * @public
   */
  families?: string[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListTaskDefinitionFamilies` request. When the results of a `ListTaskDefinitionFamilies` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingRequest {
  /**
   * The Amazon ECS account setting name to modify.
   *
   * The following are the valid values for the account setting name.
   *
   * - `serviceLongArnFormat` - When modified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.
   * - `taskLongArnFormat` - When modified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.
   * - `containerInstanceLongArnFormat` - When modified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.
   * - `awsvpcTrunking` - When modified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If `awsvpcTrunking` is turned on, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see [Elastic Network Interface Trunking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html) in the *Amazon Elastic Container Service Developer Guide*.
   * - `containerInsights` - Container Insights with enhanced observability provides all the Container Insights metrics, plus additional task and container metrics. This version supports enhanced observability for Amazon ECS clusters using the Amazon EC2 and Fargate launch types. After you configure Container Insights with enhanced observability on Amazon ECS, Container Insights auto-collects detailed infrastructure telemetry from the cluster level down to the container level in your environment and displays these critical performance data in curated dashboards removing the heavy lifting in observability set-up.
   *
   *   To use Container Insights with enhanced observability, set the `containerInsights` account setting to `enhanced`.
   *
   *   To use Container Insights, set the `containerInsights` account setting to `enabled`.
   *
   *   For more information, see [Monitor Amazon ECS containers using Container Insights with enhanced observability](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html) in the *Amazon Elastic Container Service Developer Guide*.
   * - `dualStackIPv6` - When turned on, when using a VPC in dual stack mode, your tasks using the `awsvpc` network mode can have an IPv6 address assigned. For more information on using IPv6 with tasks launched on Amazon EC2 instances, see [Using a VPC in dual-stack mode](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking-awsvpc.html#task-networking-vpc-dual-stack). For more information on using IPv6 with tasks launched on Fargate, see [Using a VPC in dual-stack mode](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-task-networking.html#fargate-task-networking-vpc-dual-stack).
   * - `fargateTaskRetirementWaitPeriod` - When Amazon Web Services determines that a security or infrastructure update is needed for an Amazon ECS task hosted on Fargate, the tasks need to be stopped and new tasks launched to replace them. Use `fargateTaskRetirementWaitPeriod` to configure the wait time to retire a Fargate task. For information about the Fargate tasks maintenance, see [Amazon Web Services Fargate task maintenance](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-maintenance.html) in the *Amazon ECS Developer Guide*.
   * - `fargateEventWindows` - When Amazon Web Services determines that a security or infrastructure update is needed for an Amazon ECS task hosted on Fargate, the tasks need to be stopped and new tasks launched to replace them. Use `fargateEventWindows` to use EC2 Event Windows associated with Fargate tasks to configure time windows for task retirement.
   * - `tagResourceAuthorization` - Amazon ECS is introducing tagging authorization for resource creation. Users must have permissions for actions that create the resource, such as `ecsCreateCluster`. If tags are specified when you create a resource, Amazon Web Services performs additional authorization to verify if users or roles have permissions to create tags. Therefore, you must grant explicit permissions to use the `ecs:TagResource` action. For more information, see [Grant permission to tag resources on creation](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/supported-iam-actions-tagging.html) in the *Amazon ECS Developer Guide*.
   * - `defaultLogDriverMode` - Amazon ECS supports setting a default delivery mode of log messages from a container to the `logDriver` that you specify in the container's `logConfiguration`. The delivery mode affects application stability when the flow of logs from the container to the log driver is interrupted. The `defaultLogDriverMode` setting supports two values: `blocking` and `non-blocking`. If you don't specify a delivery mode in your container definition's `logConfiguration`, the mode you specify using this account setting will be used as the default. For more information about log delivery modes, see [LogConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LogConfiguration.html).
   *
   *   > **Note:**
   *   >
   *   > On June 25, 2025, Amazon ECS changed the default log driver mode from `blocking` to `non-blocking` to prioritize task availability over logging. To continue using the `blocking` mode after this change, do one of the following:
   *   >
   *   > - Set the `mode` option in your container definition's `logConfiguration` as `blocking`.
   *   > - Set the `defaultLogDriverMode` account setting to `blocking`.
   * - `guardDutyActivate` - The `guardDutyActivate` parameter is read-only in Amazon ECS and indicates whether Amazon ECS Runtime Monitoring is enabled or disabled by your security administrator in your Amazon ECS account. Amazon GuardDuty controls this account setting on your behalf. For more information, see [Protecting Amazon ECS workloads with Amazon ECS Runtime Monitoring](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-guard-duty-integration.html).
   *
   * @public
   */
  name: SettingName | undefined;

  /**
   * The account setting value for the specified principal ARN. Accepted values are `enabled`, `disabled`, `enhanced`, `on`, and `off`.
   *
   * When you specify `fargateTaskRetirementWaitPeriod` for the `name`, the following are the valid values:
   *
   * - `0` - Amazon Web Services sends the notification, and immediately retires the affected tasks.
   * - `7` - Amazon Web Services sends the notification, and waits 7 calendar days to retire the tasks.
   * - `14` - Amazon Web Services sends the notification, and waits 14 calendar days to retire the tasks.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The ARN of the principal, which can be a user, role, or the root user. If you specify the root user, it modifies the account setting for all users, roles, and the root user of the account unless a user or role explicitly overrides these settings. If this field is omitted, the setting is changed only for the authenticated user.
   *
   * In order to use this parameter, you must be the root user, or the principal.
   *
   * > **Note:**
   * >
   * > You must use the root user when you set the Fargate wait time (`fargateTaskRetirementWaitPeriod`).
   * >
   * > Federated users assume the account setting of the root user and can't have explicit account settings set for them.
   *
   * @public
   */
  principalArn?: string | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingResponse {
  /**
   * The current account setting for a resource.
   *
   * @public
   */
  setting?: Setting | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingDefaultRequest {
  /**
   * The resource name for which to modify the account setting.
   *
   * The following are the valid values for the account setting name.
   *
   * - `serviceLongArnFormat` - When modified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.
   * - `taskLongArnFormat` - When modified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.
   * - `containerInstanceLongArnFormat` - When modified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.
   * - `awsvpcTrunking` - When modified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If `awsvpcTrunking` is turned on, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see [Elastic Network Interface Trunking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html) in the *Amazon Elastic Container Service Developer Guide*.
   * - `containerInsights` - Container Insights with enhanced observability provides all the Container Insights metrics, plus additional task and container metrics. This version supports enhanced observability for Amazon ECS clusters using the Amazon EC2 and Fargate launch types. After you configure Container Insights with enhanced observability on Amazon ECS, Container Insights auto-collects detailed infrastructure telemetry from the cluster level down to the container level in your environment and displays these critical performance data in curated dashboards removing the heavy lifting in observability set-up.
   *
   *   To use Container Insights with enhanced observability, set the `containerInsights` account setting to `enhanced`.
   *
   *   To use Container Insights, set the `containerInsights` account setting to `enabled`.
   *
   *   For more information, see [Monitor Amazon ECS containers using Container Insights with enhanced observability](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html) in the *Amazon Elastic Container Service Developer Guide*.
   * - `dualStackIPv6` - When turned on, when using a VPC in dual stack mode, your tasks using the `awsvpc` network mode can have an IPv6 address assigned. For more information on using IPv6 with tasks launched on Amazon EC2 instances, see [Using a VPC in dual-stack mode](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking-awsvpc.html#task-networking-vpc-dual-stack). For more information on using IPv6 with tasks launched on Fargate, see [Using a VPC in dual-stack mode](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-task-networking.html#fargate-task-networking-vpc-dual-stack).
   * - `fargateFIPSMode` - If you specify `fargateFIPSMode`, Fargate FIPS 140 compliance is affected.
   * - `fargateTaskRetirementWaitPeriod` - When Amazon Web Services determines that a security or infrastructure update is needed for an Amazon ECS task hosted on Fargate, the tasks need to be stopped and new tasks launched to replace them. Use `fargateTaskRetirementWaitPeriod` to configure the wait time to retire a Fargate task. For information about the Fargate tasks maintenance, see [Amazon Web Services Fargate task maintenance](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-maintenance.html) in the *Amazon ECS Developer Guide*.
   * - `fargateEventWindows` - When Amazon Web Services determines that a security or infrastructure update is needed for an Amazon ECS task hosted on Fargate, the tasks need to be stopped and new tasks launched to replace them. Use `fargateEventWindows` to use EC2 Event Windows associated with Fargate tasks to configure time windows for task retirement.
   * - `tagResourceAuthorization` - Amazon ECS is introducing tagging authorization for resource creation. Users must have permissions for actions that create the resource, such as `ecsCreateCluster`. If tags are specified when you create a resource, Amazon Web Services performs additional authorization to verify if users or roles have permissions to create tags. Therefore, you must grant explicit permissions to use the `ecs:TagResource` action. For more information, see [Grant permission to tag resources on creation](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/supported-iam-actions-tagging.html) in the *Amazon ECS Developer Guide*.
   * - `defaultLogDriverMode` -Amazon ECS supports setting a default delivery mode of log messages from a container to the `logDriver` that you specify in the container's `logConfiguration`. The delivery mode affects application stability when the flow of logs from the container to the log driver is interrupted. The `defaultLogDriverMode` setting supports two values: `blocking` and `non-blocking`. If you don't specify a delivery mode in your container definition's `logConfiguration`, the mode you specify using this account setting will be used as the default. For more information about log delivery modes, see [LogConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LogConfiguration.html).
   *
   *   > **Note:**
   *   >
   *   > On June 25, 2025, Amazon ECS changed the default log driver mode from `blocking` to `non-blocking` to prioritize task availability over logging. To continue using the `blocking` mode after this change, do one of the following:
   *   >
   *   > - Set the `mode` option in your container definition's `logConfiguration` as `blocking`.
   *   > - Set the `defaultLogDriverMode` account setting to `blocking`.
   * - `guardDutyActivate` - The `guardDutyActivate` parameter is read-only in Amazon ECS and indicates whether Amazon ECS Runtime Monitoring is enabled or disabled by your security administrator in your Amazon ECS account. Amazon GuardDuty controls this account setting on your behalf. For more information, see [Protecting Amazon ECS workloads with Amazon ECS Runtime Monitoring](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-guard-duty-integration.html).
   *
   * @public
   */
  name: SettingName | undefined;

  /**
   * The account setting value for the specified principal ARN. Accepted values are `enabled`, `disabled`, `on`, `enhanced`, and `off`.
   *
   * When you specify `fargateTaskRetirementWaitPeriod` for the `name`, the following are the valid values:
   *
   * - `0` - Amazon Web Services sends the notification, and immediately retires the affected tasks.
   * - `7` - Amazon Web Services sends the notification, and waits 7 calendar days to retire the tasks.
   * - `14` - Amazon Web Services sends the notification, and waits 14 calendar days to retire the tasks.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingDefaultResponse {
  /**
   * The current setting for a resource.
   *
   * @public
   */
  setting?: Setting | undefined;
}

/**
 * @public
 */
export interface DescribeServiceDeploymentsRequest {
  /**
   * The ARN of the service deployment.
   *
   * You can specify a maximum of 20 ARNs.
   *
   * @public
   */
  serviceDeploymentArns: string[] | undefined;
}

/**
 * The CloudWatch alarms used to determine a service deployment failed.
 *
 * Amazon ECS considers the service deployment as failed when any of the alarms move to the `ALARM` state. For more information, see [How CloudWatch alarms detect Amazon ECS deployment failures](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-alarm-failure.html) in the Amazon ECS Developer Guide.
 *
 * @public
 */
export interface ServiceDeploymentAlarms {
  /**
   * The status of the alarms check. Amazon ECS is not using alarms for service deployment failures when the status is `DISABLED`.
   *
   * @public
   */
  status?: ServiceDeploymentRollbackMonitorsStatus | undefined;

  /**
   * The name of the CloudWatch alarms that determine when a service deployment failed. A "," separates the alarms.
   *
   * @public
   */
  alarmNames?: string[] | undefined;

  /**
   * One or more CloudWatch alarm names that have been triggered during the service deployment. A "," separates the alarm names.
   *
   * @public
   */
  triggeredAlarmNames?: string[] | undefined;
}

/**
 * Information about the circuit breaker used to determine when a service deployment has failed.
 *
 * The deployment circuit breaker is the rolling update mechanism that determines if the tasks reach a steady state. The deployment circuit breaker has an option that will automatically roll back a failed deployment to the last cpompleted service revision. For more information, see [How the Amazon ECS deployment circuit breaker detects failures](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-circuit-breaker.html) in the *Amazon ECS Developer Guide*.
 *
 * @public
 */
export interface ServiceDeploymentCircuitBreaker {
  /**
   * The circuit breaker status. Amazon ECS is not using the circuit breaker for service deployment failures when the status is `DISABLED`.
   *
   * @public
   */
  status?: ServiceDeploymentRollbackMonitorsStatus | undefined;

  /**
   * The number of times the circuit breaker detected a service deploymeny failure.
   *
   * @public
   */
  failureCount?: number | undefined;

  /**
   * The threshhold which determines that the service deployment failed.
   *
   * The deployment circuit breaker calculates the threshold value, and then uses the value to determine when to move the deployment to a FAILED state. The deployment circuit breaker has a minimum threshold of 3 and a maximum threshold of 200. and uses the values in the following formula to determine the deployment failure.
   *
   * `0.5 * desired task count`
   *
   * @public
   */
  threshold?: number | undefined;
}

/**
 * One of the methods which provide a way for you to quickly identify when a deployment has failed, and then to optionally roll back the failure to the last working deployment.
 *
 * When the alarms are generated, Amazon ECS sets the service deployment to failed. Set the rollback parameter to have Amazon ECS to roll back your service to the last completed deployment after a failure.
 *
 * You can only use the `DeploymentAlarms` method to detect failures when the `DeploymentController` is set to `ECS`.
 *
 * For more information, see [Rolling update](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html) in the **Amazon Elastic Container Service Developer Guide** .
 *
 * @public
 */
export interface DeploymentAlarms {
  /**
   * One or more CloudWatch alarm names. Use a "," to separate the alarms.
   *
   * @public
   */
  alarmNames: string[] | undefined;

  /**
   * Determines whether to configure Amazon ECS to roll back the service if a service deployment fails. If rollback is used, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.
   *
   * @public
   */
  rollback: boolean | undefined;

  /**
   * Determines whether to use the CloudWatch alarm option in the service deployment process.
   *
   * @public
   */
  enable: boolean | undefined;
}

/**
 * Configuration for a canary deployment strategy that shifts a fixed percentage of traffic to the new service revision, waits for a specified bake time, then shifts the remaining traffic.
 *
 * This is only valid when you run `CreateService` or `UpdateService` with `deploymentController` set to `ECS` and a `deploymentConfiguration` with a strategy set to `CANARY`.
 *
 * @public
 */
export interface CanaryConfiguration {
  /**
   * The percentage of production traffic to shift to the new service revision during the canary phase. Valid values are multiples of 0.1 from 0.1 to 100.0. The default value is 5.0.
   *
   * @public
   */
  canaryPercent?: number | undefined;

  /**
   * The amount of time in minutes to wait during the canary phase before shifting the remaining production traffic to the new service revision. Valid values are 0 to 1440 minutes (24 hours). The default value is 10.
   *
   * @public
   */
  canaryBakeTimeInMinutes?: number | undefined;
}

/**
 * Defines the failure threshold that the deployment circuit breaker uses to monitor a deployment. The `type` and `value` together determine the number of task failures that are tolerated before the circuit breaker triggers.
 *
 * By default, the threshold configuration uses a `type` of `BOUNDED_PERCENT` with a `value` of `50`.
 *
 * @public
 */
export interface ThresholdConfiguration {
  /**
   * Determines how Amazon ECS uses `value` to calculate the failure threshold. For the percentage types (`BOUNDED_PERCENT` and `UNBOUNDED_PERCENT`), Amazon ECS multiplies `value` by the latest service desired count. For `COUNT`, Amazon ECS uses `value` directly as the threshold. The default is `BOUNDED_PERCENT`.
   *
   * @public
   */
  type: ThresholdType | undefined;

  /**
   * Specifies the integer that Amazon ECS uses to calculate the failure threshold. When `type` is `COUNT`, this value is the failure threshold itself. When `type` is a percentage type, Amazon ECS multiplies this value by the latest service desired count to produce the failure threshold. The default is `50`.
   *
   * @public
   */
  value: number | undefined;
}

/**
 * > **Note:** The deployment circuit breaker can only be used for services using the rolling update (`ECS`) deployment type.
 *
 * The **deployment circuit breaker** determines whether a service deployment will fail if the service can't reach a steady state. If it is turned on, a service deployment will transition to a failed state and stop launching new tasks. You can also configure Amazon ECS to roll back your service to the last completed deployment after a failure. For more information, see [Rolling update](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * For more information about API failure reasons, see [API failure reasons](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface DeploymentCircuitBreaker {
  /**
   * Determines whether to use the deployment circuit breaker logic for the service.
   *
   * @public
   */
  enable: boolean | undefined;

  /**
   * Determines whether to configure Amazon ECS to roll back the service if a service deployment fails. If rollback is on, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.
   *
   * @public
   */
  rollback: boolean | undefined;

  /**
   * Specifies whether the deployment circuit breaker resets its failure count when a task reaches a healthy state. When set to `true`, a task that reaches a healthy state resets the failure count to `0`. When set to `false`, Amazon ECS does not reset the failure count. The default is `true`.
   *
   * @public
   */
  resetOnHealthyTask?: boolean | undefined;

  /**
   * The threshold configuration that controls when the deployment circuit breaker triggers. The `type` and `value` together determine how many task failures are tolerated before the circuit breaker activates.
   *
   * @public
   */
  thresholdConfiguration?: ThresholdConfiguration | undefined;
}

/**
 * > **Note:** You can use early success criteria only with rolling deployment strategy.
 *
 * The configuration that determines when a rolling update deployment is considered successful. Early success criteria defines the percentage of tasks that must be healthy before a deployment completes. It also controls whether Amazon ECS must remove the previous tasks before a deployment completes.
 *
 * @public
 */
export interface DeploymentEarlySuccessCriteria {
  /**
   * Specifies whether to use the early success criteria for the service deployment. When set to `false`, the deployment uses the default behavior, where Amazon ECS considers the deployment successful when the target service revision fully stabilizes and the previous tasks are removed. The default value is `false`.
   *
   * When set to `true`, Amazon ECS monitors the deployment to meet early success criteria. You must also specify `healthyPercent` and `sourceServiceRevisionCleanup`.
   *
   * @public
   */
  enable: boolean | undefined;

  /**
   * The percentage of healthy tasks that the target service revision must reach before Amazon ECS considers the deployment successful. This percentage is relative to the service's `desiredCount` and must be an integer between `0` and `100`. This value must be greater than or equal to the `minimumHealthyPercent` value.
   *
   * After this percentage of tasks is healthy and the bake time elapses, Amazon ECS completes the deployment. Amazon ECS continues to scale the target service revision to 100 percent in the background.
   *
   * @public
   */
  healthyPercent?: number | undefined;

  /**
   * The time when Amazon ECS removes the source revisions' tasks relative to deployment completion. The valid values are:
   *
   * - `BLOCKING`—Amazon ECS removes the previous tasks before it marks the deployment as successful.
   * - `DEFERRED`—Amazon ECS marks the deployment successful, and then removes the previous tasks in the background.
   *
   * @public
   */
  sourceServiceRevisionCleanup?: ServiceRevisionCleanup | undefined;
}

/**
 * The timeout configuration for a deployment lifecycle hook. This determines how long Amazon ECS waits for the hook to complete before taking the specified timeout action.
 *
 * @public
 */
export interface DeploymentLifecycleHookTimeoutConfiguration {
  /**
   * The number of minutes Amazon ECS waits for the lifecycle hook to complete before taking the timeout action.
   *
   * Default: 1440 (24 hours)
   *
   * @public
   */
  timeoutInMinutes?: number | undefined;

  /**
   * The action Amazon ECS takes when the lifecycle hook times out. Valid values are:
   *
   * - `CONTINUE` - Proceeds the deployment to the next lifecycle stage.
   * - `ROLLBACK` - Rolls back the deployment to the previous service revision.
   *
   * Default: `ROLLBACK`
   *
   * @public
   */
  action?: DeploymentLifecycleHookAction | undefined;
}

/**
 * A deployment lifecycle hook runs custom logic or pauses the deployment at specific stages of the deployment process. You can use Lambda functions or pause hooks as hook targets.
 *
 * For more information, see [Lifecycle hooks for Amazon ECS service deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-lifecycle-hooks.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface DeploymentLifecycleHook {
  /**
   * The type of action the lifecycle hook performs. Valid values are:
   *
   * - `AWS_LAMBDA` - Invokes a Lambda function at the specified lifecycle stage. This is the default value.
   * - `PAUSE` - Pauses the deployment at the specified lifecycle stage until you call `ContinueServiceDeployment` to continue or roll back.
   *
   * This field is optional. If not specified, the default value is `AWS_LAMBDA`.
   *
   * @public
   */
  targetType?: DeploymentLifecycleHookTargetType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hook target. For `AWS_LAMBDA` hooks, this is the Lambda function ARN. This field is not applicable for `PAUSE` hooks.
   *
   * You must provide this parameter when configuring an `AWS_LAMBDA` lifecycle hook.
   *
   * @public
   */
  hookTargetArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon ECS permission to call Lambda functions on your behalf.
   *
   * For more information, see [Permissions required for Lambda functions in Amazon ECS blue/green deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/blue-green-permissions.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The lifecycle stages at which to run the hook. Choose from these valid values:
   *
   * - RECONCILE_SERVICE
   *
   *   The reconciliation stage that only happens when you start a new service deployment with more than 1 service revision in an ACTIVE state.
   *
   *   You can use a lifecycle hook for this stage.
   * - PRE_SCALE_UP
   *
   *   The green service revision has not started. The blue service revision is handling 100% of the production traffic. There is no test traffic.
   *
   *   You can use a lifecycle hook for this stage.
   * - POST_SCALE_UP
   *
   *   The green service revision has started. The blue service revision is handling 100% of the production traffic. There is no test traffic.
   *
   *   You can use a lifecycle hook for this stage.
   * - TEST_TRAFFIC_SHIFT
   *
   *   The blue and green service revisions are running. The blue service revision handles 100% of the production traffic. The green service revision is migrating from 0% to 100% of test traffic.
   *
   *   You can use a lifecycle hook for this stage.
   * - POST_TEST_TRAFFIC_SHIFT
   *
   *   The test traffic shift is complete. The green service revision handles 100% of the test traffic.
   *
   *   You can use a lifecycle hook for this stage.
   * - PRE_PRODUCTION_TRAFFIC_SHIFT
   *
   *   Occurs before production traffic shift. For linear and canary deployments, this stage is invoked before every traffic shift step.
   *
   *   You can use a lifecycle hook for this stage.
   * - PRODUCTION_TRAFFIC_SHIFT
   *
   *   Production traffic is shifting to the green service revision. The green service revision is migrating from 0% to 100% of production traffic. For linear and canary deployments, this stage is invoked at every traffic shift step.
   *
   *   You can use a lifecycle hook for this stage.
   * - POST_PRODUCTION_TRAFFIC_SHIFT
   *
   *   The production traffic shift is complete.
   *
   *   You can use a lifecycle hook for this stage.
   *
   * > **Note:** `PAUSE` hooks cannot be configured at `TEST_TRAFFIC_SHIFT` or `PRODUCTION_TRAFFIC_SHIFT` stages. These stages are only valid for `AWS_LAMBDA` hooks.
   *
   * You must provide this parameter when configuring a deployment lifecycle hook.
   *
   * @public
   */
  lifecycleStages?: DeploymentLifecycleHookStage[] | undefined;

  /**
   * Use this field to specify custom parameters that Amazon ECS passes to your Lambda function on each invocation. This field is not used for `PAUSE` hooks.
   *
   * @public
   */
  hookDetails?: __DocumentType | undefined;

  /**
   * The timeout configuration for the lifecycle hook. This specifies how long Amazon ECS waits before taking the timeout action if the hook is not resolved.
   *
   * @public
   */
  timeoutConfiguration?: DeploymentLifecycleHookTimeoutConfiguration | undefined;
}

/**
 * Configuration for linear deployment strategy that shifts production traffic in equal percentage increments with configurable wait times between each step until 100% of traffic is shifted to the new service revision. This is only valid when you run `CreateService` or `UpdateService` with `deploymentController` set to `ECS` and a `deploymentConfiguration` with a strategy set to `LINEAR`.
 *
 * @public
 */
export interface LinearConfiguration {
  /**
   * The percentage of production traffic to shift in each step during a linear deployment. Valid values are multiples of 0.1 from 3.0 to 100.0. The default value is 10.0.
   *
   * @public
   */
  stepPercent?: number | undefined;

  /**
   * The amount of time in minutes to wait between each traffic shifting step during a linear deployment. Valid values are 0 to 1440 minutes (24 hours). The default value is 6. This bake time is not applied after reaching 100 percent traffic.
   *
   * @public
   */
  stepBakeTimeInMinutes?: number | undefined;
}

/**
 * Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks.
 *
 * @public
 */
export interface DeploymentConfiguration {
  /**
   * > **Note:** The deployment circuit breaker can only be used for services using the rolling update (`ECS`) deployment type.
   *
   * The **deployment circuit breaker** determines whether a service deployment will fail if the service can't reach a steady state. If you use the deployment circuit breaker, a service deployment will transition to a failed state and stop launching new tasks. If you use the rollback option, when a service deployment fails, the service is rolled back to the last deployment that completed successfully. For more information, see [Rolling update](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html) in the *Amazon Elastic Container Service Developer Guide*
   *
   * @public
   */
  deploymentCircuitBreaker?: DeploymentCircuitBreaker | undefined;

  /**
   * If a service is using the rolling update (`ECS`) deployment type, the `maximumPercent` parameter represents an upper limit on the number of your service's tasks that are allowed in the `RUNNING` or `PENDING` state during a deployment, as a percentage of the `desiredCount` (rounded down to the nearest integer). This parameter enables you to define the deployment batch size. For example, if your service is using the `REPLICA` service scheduler and has a `desiredCount` of four tasks and a `maximumPercent` value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default `maximumPercent` value for a service using the `REPLICA` service scheduler is 200%.
   *
   * The Amazon ECS scheduler uses this parameter to replace unhealthy tasks by starting replacement tasks first and then stopping the unhealthy tasks, as long as cluster resources for starting replacement tasks are available. For more information about how the scheduler replaces unhealthy tasks, see [Amazon ECS services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).
   *
   * If a service is using either the blue/green (`CODE_DEPLOY`) or `EXTERNAL` deployment types, and tasks in the service use the EC2 launch type, the **maximum percent** value is set to the default value. The **maximum percent** value is used to define the upper limit on the number of the tasks in the service that remain in the `RUNNING` state while the container instances are in the `DRAINING` state.
   *
   * > **Note:** You can't specify a custom `maximumPercent` value for a service that uses either the blue/green (`CODE_DEPLOY`) or `EXTERNAL` deployment types and has tasks that use the EC2 launch type.
   *
   * If the service uses either the blue/green (`CODE_DEPLOY`) or `EXTERNAL` deployment types, and the tasks in the service use the Fargate launch type, the maximum percent value is not used. The value is still returned when describing your service.
   *
   * @public
   */
  maximumPercent?: number | undefined;

  /**
   * If a service is using the rolling update (`ECS`) deployment type, the `minimumHealthyPercent` represents a lower limit on the number of your service's tasks that must remain in the `RUNNING` state during a deployment, as a percentage of the `desiredCount` (rounded up to the nearest integer). This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a `desiredCount` of four tasks and a `minimumHealthyPercent` of 50%, the service scheduler may stop two existing tasks to free up cluster capacity before starting two new tasks.
   *
   * If any tasks are unhealthy and if `maximumPercent` doesn't allow the Amazon ECS scheduler to start replacement tasks, the scheduler stops the unhealthy tasks one-by-one — using the `minimumHealthyPercent` as a constraint — to clear up capacity to launch replacement tasks. For more information about how the scheduler replaces unhealthy tasks, see [Amazon ECS services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).
   *
   * For services that *do not* use a load balancer, the following should be noted:
   *
   * - A service is considered healthy if all essential containers within the tasks in the service pass their health checks.
   * - If a task has no essential containers with a health check defined, the service scheduler will wait for 40 seconds after a task reaches a `RUNNING` state before the task is counted towards the minimum healthy percent total.
   * - If a task has one or more essential containers with a health check defined, the service scheduler will wait for the task to reach a healthy status before counting it towards the minimum healthy percent total. A task is considered healthy when all essential containers within the task have passed their health checks. The amount of time the service scheduler can wait for is determined by the container health check settings.
   *
   * For services that *do* use a load balancer, the following should be noted:
   *
   * - If a task has no essential containers with a health check defined, the service scheduler will wait for the load balancer target group health check to return a healthy status before counting the task towards the minimum healthy percent total.
   * - If a task has an essential container with a health check defined, the service scheduler will wait for both the task to reach a healthy status and the load balancer target group health check to return a healthy status before counting the task towards the minimum healthy percent total.
   *
   * The default value for a replica service for `minimumHealthyPercent` is 100%. The default `minimumHealthyPercent` value for a service using the `DAEMON` service schedule is 0% for the CLI, the Amazon Web Services SDKs, and the APIs and 50% for the Amazon Web Services Management Console.
   *
   * The minimum number of healthy tasks during a deployment is the `desiredCount` multiplied by the `minimumHealthyPercent`/100, rounded up to the nearest integer value.
   *
   * If a service is using either the blue/green (`CODE_DEPLOY`) or `EXTERNAL` deployment types and is running tasks that use the EC2 launch type, the **minimum healthy percent** value is set to the default value. The **minimum healthy percent** value is used to define the lower limit on the number of the tasks in the service that remain in the `RUNNING` state while the container instances are in the `DRAINING` state.
   *
   * > **Note:** You can't specify a custom `minimumHealthyPercent` value for a service that uses either the blue/green (`CODE_DEPLOY`) or `EXTERNAL` deployment types and has tasks that use the EC2 launch type.
   *
   * If a service is using either the blue/green (`CODE_DEPLOY`) or `EXTERNAL` deployment types and is running tasks that use the Fargate launch type, the minimum healthy percent value is not used, although it is returned when describing your service.
   *
   * @public
   */
  minimumHealthyPercent?: number | undefined;

  /**
   * Information about the CloudWatch alarms.
   *
   * @public
   */
  alarms?: DeploymentAlarms | undefined;

  /**
   * The deployment strategy for the service. Choose from these valid values:
   *
   * - `ROLLING` - When you create a service which uses the rolling update (`ROLLING`) deployment strategy, the Amazon ECS service scheduler replaces the currently running tasks with new tasks. The number of tasks that Amazon ECS adds or removes from the service during a rolling update is controlled by the service deployment configuration.
   * - `BLUE_GREEN` - A blue/green deployment strategy (`BLUE_GREEN`) is a release methodology that reduces downtime and risk by running two identical production environments called blue and green. With Amazon ECS blue/green deployments, you can validate new service revisions before directing production traffic to them. This approach provides a safer way to deploy changes with the ability to quickly roll back if needed.
   * - `LINEAR` - A *linear* deployment strategy (`LINEAR`) gradually shifts traffic from the current production environment to a new environment in equal percentages over time. With Amazon ECS linear deployments, you can control the pace of traffic shifting and validate new service revisions with increasing amounts of production traffic.
   * - `CANARY` - A *canary* deployment strategy (`CANARY`) shifts a small percentage of traffic to the new service revision first, then shifts the remaining traffic all at once after a specified time period. This allows you to test the new version with a subset of users before full deployment.
   *
   * @public
   */
  strategy?: DeploymentStrategy | undefined;

  /**
   * The time period when both blue and green service revisions are running simultaneously after the production traffic has shifted.
   *
   * You must provide this parameter when you use the `BLUE_GREEN` deployment strategy.
   *
   * @public
   */
  bakeTimeInMinutes?: number | undefined;

  /**
   * An array of deployment lifecycle hook objects to run custom logic or pause the deployment at specific stages of the deployment lifecycle.
   *
   * @public
   */
  lifecycleHooks?: DeploymentLifecycleHook[] | undefined;

  /**
   * Configuration for linear deployment strategy. Only valid when the deployment strategy is `LINEAR`. This configuration enables progressive traffic shifting in equal percentage increments with configurable bake times between each step.
   *
   * @public
   */
  linearConfiguration?: LinearConfiguration | undefined;

  /**
   * Configuration for canary deployment strategy. Only valid when the deployment strategy is `CANARY`. This configuration enables shifting a fixed percentage of traffic for testing, followed by shifting the remaining traffic after a bake period.
   *
   * @public
   */
  canaryConfiguration?: CanaryConfiguration | undefined;

  /**
   * The early success criteria configuration for a rolling deployment. With early success criteria, you can configure an Amazon ECS deployment to complete faster. Amazon ECS declares a deployment successful once a target percentage of tasks are healthy, instead of waiting for the service to fully stabilize.
   *
   * @public
   */
  earlySuccessCriteria?: DeploymentEarlySuccessCriteria | undefined;
}

/**
 * The details of a deployment lifecycle hook that is active during a service deployment.
 *
 * You can view lifecycle hook details by calling [DescribeServiceDeployments](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServiceDeployments.html).
 *
 * @public
 */
export interface DeploymentLifecycleHookDetail {
  /**
   * The ID of the lifecycle hook. Use this value when calling `ContinueServiceDeployment` to continue or roll back a paused deployment.
   *
   * @public
   */
  hookId?: string | undefined;

  /**
   * The type of action the lifecycle hook performs, such as `AWS_LAMBDA` or `PAUSE`.
   *
   * @public
   */
  targetType?: DeploymentLifecycleHookTargetType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hook target. For `AWS_LAMBDA` hooks, this is the Lambda function ARN. For `PAUSE` hooks, this field is not set.
   *
   * @public
   */
  targetArn?: string | undefined;

  /**
   * The status of the lifecycle hook. Valid values include `AWAITING_ACTION`, `IN_PROGRESS`, `SUCCEEDED`, `FAILED`, and `TIMED_OUT`.
   *
   * @public
   */
  status?: DeploymentLifecycleHookStatus | undefined;

  /**
   * The time when the lifecycle hook times out. If the hook has not been completed by this time, Amazon ECS takes the timeout action.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * The action Amazon ECS takes when the lifecycle hook times out. Valid values are `CONTINUE` and `ROLLBACK`.
   *
   * @public
   */
  timeoutAction?: DeploymentLifecycleHookAction | undefined;
}

/**
 * Information about the service deployment rollback.
 *
 * @public
 */
export interface Rollback {
  /**
   * The reason the rollback happened. For example, the circuit breaker initiated the rollback operation.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * Time time that the rollback started. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The ARN of the service revision deployed as part of the rollback.
   *
   * @public
   */
  serviceRevisionArn?: string | undefined;
}

/**
 * The information about the number of requested, pending, and running tasks for a service revision.
 *
 * @public
 */
export interface ServiceRevisionSummary {
  /**
   * The ARN of the service revision.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The number of requested tasks for the service revision.
   *
   * @public
   */
  requestedTaskCount?: number | undefined;

  /**
   * The number of running tasks for the service revision.
   *
   * @public
   */
  runningTaskCount?: number | undefined;

  /**
   * The number of pending tasks for the service revision.
   *
   * @public
   */
  pendingTaskCount?: number | undefined;

  /**
   * The percentage of test traffic that is directed to this service revision. This value represents a snapshot of the traffic distribution and may not reflect real-time changes during active deployments. Valid values are 0.0 to 100.0.
   *
   * @public
   */
  requestedTestTrafficWeight?: number | undefined;

  /**
   * The percentage of production traffic that is directed to this service revision. This value represents a snapshot of the traffic distribution and may not reflect real-time changes during active deployments. Valid values are 0.0 to 100.0.
   *
   * @public
   */
  requestedProductionTrafficWeight?: number | undefined;
}

/**
 * Information about the service deployment.
 *
 * Service deployments provide a comprehensive view of your deployments. For information about service deployments, see [View service history using Amazon ECS service deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-deployment.html) in the **Amazon Elastic Container Service Developer Guide** .
 *
 * @public
 */
export interface ServiceDeployment {
  /**
   * The ARN of the service deployment.
   *
   * @public
   */
  serviceDeploymentArn?: string | undefined;

  /**
   * The ARN of the service for this service deployment.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The ARN of the cluster that hosts the service.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The time the service deployment was created. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time the service deployment statred. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The time the service deployment finished. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  finishedAt?: Date | undefined;

  /**
   * The time the service deployment stopped. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * The service deployment stops when any of the following actions happen:
   *
   * - A user manually stops the deployment
   * - The rollback option is not in use for the failure detection mechanism (the circuit breaker or alarm-based) and the service fails.
   *
   * @public
   */
  stoppedAt?: Date | undefined;

  /**
   * The time that the service deployment was last updated. The format is yyyy-MM-dd HH:mm:ss.SSSSSS.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The currently deployed workload configuration.
   *
   * @public
   */
  sourceServiceRevisions?: ServiceRevisionSummary[] | undefined;

  /**
   * The workload configuration being deployed.
   *
   * @public
   */
  targetServiceRevision?: ServiceRevisionSummary | undefined;

  /**
   * The service deployment state.
   *
   * @public
   */
  status?: ServiceDeploymentStatus | undefined;

  /**
   * Information about why the service deployment is in the current status. For example, the circuit breaker detected a failure.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The current lifecycle stage of the deployment. Possible values include:
   *
   * - RECONCILE_SERVICE
   *
   *   The reconciliation stage that only happens when you start a new service deployment with more than 1 service revision in an ACTIVE state.
   * - PRE_SCALE_UP
   *
   *   The green service revision has not started. The blue service revision is handling 100% of the production traffic. There is no test traffic.
   * - SCALE_UP
   *
   *   The stage when the green service revision scales up to 100% and launches new tasks. The green service revision is not serving any traffic at this point.
   * - POST_SCALE_UP
   *
   *   The green service revision has started. The blue service revision is handling 100% of the production traffic. There is no test traffic.
   * - TEST_TRAFFIC_SHIFT
   *
   *   The blue and green service revisions are running. The blue service revision handles 100% of the production traffic. The green service revision is migrating from 0% to 100% of test traffic.
   * - POST_TEST_TRAFFIC_SHIFT
   *
   *   The test traffic shift is complete. The green service revision handles 100% of the test traffic.
   * - PRE_PRODUCTION_TRAFFIC_SHIFT
   *
   *   Occurs before production traffic shift. For linear and canary deployments, this stage is invoked before every traffic shift step.
   * - PRODUCTION_TRAFFIC_SHIFT
   *
   *   Production traffic is shifting to the green service revision. The green service revision is migrating from 0% to 100% of production traffic. For linear and canary deployments, this stage is invoked at every traffic shift step.
   * - POST_PRODUCTION_TRAFFIC_SHIFT
   *
   *   The production traffic shift is complete.
   * - BAKE_TIME
   *
   *   The stage when both blue and green service revisions are running simultaneously after the production traffic has shifted.
   * - CLEAN_UP
   *
   *   The stage when the blue service revision has completely scaled down to 0 running tasks. The green service revision is now the production service revision after this stage.
   *
   * @public
   */
  lifecycleStage?: ServiceDeploymentLifecycleStage | undefined;

  /**
   * The details of the lifecycle hooks for the current service deployment.
   *
   * @public
   */
  lifecycleHookDetails?: DeploymentLifecycleHookDetail[] | undefined;

  /**
   * Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * The rollback options the service deployment uses when the deployment fails.
   *
   * @public
   */
  rollback?: Rollback | undefined;

  /**
   * The circuit breaker configuration that determines a service deployment failed.
   *
   * @public
   */
  deploymentCircuitBreaker?: ServiceDeploymentCircuitBreaker | undefined;

  /**
   * The CloudWatch alarms that determine when a service deployment fails.
   *
   * @public
   */
  alarms?: ServiceDeploymentAlarms | undefined;
}

/**
 * @public
 */
export interface DescribeServiceDeploymentsResponse {
  /**
   * The list of service deployments described.
   *
   * @public
   */
  serviceDeployments?: ServiceDeployment[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * If you decsribe a deployment with a service revision created before October 25, 2024, the call fails. The failure includes the service revision ARN and the reason set to `MISSING`.
   *
   * @public
   */
  failures?: Failure[] | undefined;
}

/**
 * The network configuration for an Express service. By default, an Express service utilizes subnets and security groups associated with the default VPC.
 *
 * @public
 */
export interface ExpressGatewayServiceNetworkConfiguration {
  /**
   * The IDs of the security groups associated with the Express service.
   *
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * The IDs of the subnets associated with the Express service.
   *
   * @public
   */
  subnets?: string[] | undefined;
}

/**
 * Specifies the Amazon CloudWatch Logs configuration for the Express service container.
 *
 * @public
 */
export interface ExpressGatewayServiceAwsLogsConfiguration {
  /**
   * The name of the CloudWatch Logs log group to send container logs to.
   *
   * @public
   */
  logGroup: string | undefined;

  /**
   * The prefix for the CloudWatch Logs log stream names. The default for an Express service is `ecs`.
   *
   * @public
   */
  logStreamPrefix: string | undefined;
}

/**
 * The repository credentials for private registry authentication to pass to the container.
 *
 * @public
 */
export interface ExpressGatewayRepositoryCredentials {
  /**
   * The Amazon Resource Name (ARN) of the secret containing the private repository credentials.
   *
   * @public
   */
  credentialsParameter?: string | undefined;
}

/**
 * Defines the configuration for the primary container in an Express service. This container receives traffic from the Application Load Balancer and runs your application code.
 *
 * The container configuration includes the container image, port mapping, logging settings, environment variables, and secrets. The container image is the only required parameter, with sensible defaults provided for other settings.
 *
 * @public
 */
export interface ExpressGatewayContainer {
  /**
   * The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with either `repository-url/image:tag` or `repository-url/image@digest`.
   *
   * For Express services, the image typically contains a web application that listens on the specified container port. The image can be stored in Amazon ECR, Docker Hub, or any other container registry accessible to your execution role.
   *
   * @public
   */
  image: string | undefined;

  /**
   * The port number on the container that receives traffic from the load balancer. Default is 80.
   *
   * @public
   */
  containerPort?: number | undefined;

  /**
   * The log configuration for the container.
   *
   * @public
   */
  awsLogsConfiguration?: ExpressGatewayServiceAwsLogsConfiguration | undefined;

  /**
   * The configuration for repository credentials for private registry authentication.
   *
   * @public
   */
  repositoryCredentials?: ExpressGatewayRepositoryCredentials | undefined;

  /**
   * The command that is passed to the container.
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * The environment variables to pass to the container.
   *
   * @public
   */
  environment?: KeyValuePair[] | undefined;

  /**
   * The secrets to pass to the container.
   *
   * @public
   */
  secrets?: Secret[] | undefined;
}

/**
 * Defines the auto-scaling configuration for an Express service. This determines how the service automatically adjusts the number of running tasks based on demand metrics such as CPU utilization, memory utilization, or request count per target.
 *
 * Auto-scaling helps ensure your application can handle varying levels of traffic while optimizing costs by scaling down during low-demand periods. You can specify the minimum and maximum number of tasks, the scaling metric, and the target value for that metric.
 *
 * @public
 */
export interface ExpressGatewayScalingTarget {
  /**
   * The minimum number of tasks to run in the Express service.
   *
   * @public
   */
  minTaskCount?: number | undefined;

  /**
   * The maximum number of tasks to run in the Express service.
   *
   * @public
   */
  maxTaskCount?: number | undefined;

  /**
   * The metric used for auto-scaling decisions. The default metric used for an Express service is `CPUUtilization`.
   *
   * @public
   */
  autoScalingMetric?: ExpressGatewayServiceScalingMetric | undefined;

  /**
   * The target value for the auto-scaling metric. The default value for an Express service is 60.
   *
   * @public
   */
  autoScalingTargetValue?: number | undefined;
}

/**
 * @public
 */
export interface CreateExpressGatewayServiceRequest {
  /**
   * The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make Amazon Web Services API calls on your behalf. This role is required for Amazon ECS to pull container images from Amazon ECR, send container logs to Amazon CloudWatch Logs, and retrieve sensitive data from Amazon Web Services Systems Manager Parameter Store or Amazon Web Services Secrets Manager.
   *
   * The execution role must include the `AmazonECSTaskExecutionRolePolicy` managed policy or equivalent permissions. For Express services, this role is used during task startup and runtime for container management operations.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the infrastructure role that grants Amazon ECS permission to create and manage Amazon Web Services resources on your behalf for the Express service. This role is used to provision and manage Application Load Balancers, target groups, security groups, auto-scaling policies, and other Amazon Web Services infrastructure components.
   *
   * The infrastructure role must include permissions for Elastic Load Balancing, Application Auto Scaling, Amazon EC2 (for security groups), and other services required for managed infrastructure. This role is only used during Express service creation, updates, and deletion operations.
   *
   * @public
   */
  infrastructureRoleArn: string | undefined;

  /**
   * The name of the Express service. This name must be unique within the specified cluster and can contain up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens. The name is used to identify the service in the Amazon ECS console and API operations.
   *
   * If you don't specify a service name, Amazon ECS generates a unique name for the service. The service name becomes part of the service ARN and cannot be changed after the service is created.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster on which to create the Express service. If you do not specify a cluster, the `default` cluster is assumed.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The path on the container that the Application Load Balancer uses for health checks. This should be a valid HTTP endpoint that returns a successful response (HTTP 200) when the application is healthy.
   *
   * If not specified, the default health check path is `/ping`. The health check path must start with a forward slash and can include query parameters. Examples: `/health`, `/api/status`, `/ping?format=json`.
   *
   * @public
   */
  healthCheckPath?: string | undefined;

  /**
   * The primary container configuration for the Express service. This defines the main application container that will receive traffic from the Application Load Balancer.
   *
   * The primary container must specify at minimum a container image. You can also configure the container port (defaults to 80), logging configuration, environment variables, secrets, and startup commands. The container image can be from Amazon ECR, Docker Hub, or any other container registry accessible to your execution role.
   *
   * @public
   */
  primaryContainer?: ExpressGatewayContainer | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. This role allows your application code to access other Amazon Web Services services securely.
   *
   * The task role is different from the execution role. While the execution role is used by the Amazon ECS agent to set up the task, the task role is used by your application code running inside the container to make Amazon Web Services API calls. If your application doesn't need to access Amazon Web Services services, you can omit this parameter.
   *
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * The network configuration for the Express service tasks. This specifies the VPC subnets and security groups for the tasks.
   *
   * For Express services, you can specify custom security groups and subnets. If not provided, Amazon ECS will use the default VPC configuration and create appropriate security groups automatically. The network configuration determines how your service integrates with your VPC and what network access it has.
   *
   * @public
   */
  networkConfiguration?: ExpressGatewayServiceNetworkConfiguration | undefined;

  /**
   * The number of CPU units used by the task. This parameter determines the CPU allocation for each task in the Express service. The default value for an Express service is 256 (.25 vCPU).
   *
   * @public
   */
  cpu?: string | undefined;

  /**
   * The amount of memory (in MiB) used by the task. This parameter determines the memory allocation for each task in the Express service. The default value for an express service is 512 MiB.
   *
   * @public
   */
  memory?: string | undefined;

  /**
   * The CPU architecture that the task runs on. If you don't specify a value, the default is `X86_64`.
   *
   * Valid values:
   *
   * - `X86_64` - The x86 64-bit architecture.
   * - `ARM64` - The 64-bit ARM architecture.
   *
   * Ensure that the container image you specify supports the architecture you choose. The operating system family for an Express service is always `LINUX`.
   *
   * You can't specify `cpuArchitecture` together with `taskDefinitionArn`.
   *
   * @public
   */
  cpuArchitecture?: ExpressCpuArchitecture | undefined;

  /**
   * The auto-scaling configuration for the Express service. This defines how the service automatically adjusts the number of running tasks based on demand.
   *
   * You can specify the minimum and maximum number of tasks, the scaling metric (CPU utilization, memory utilization, or request count per target), and the target value for the metric. If not specified, the default target value for an Express service is 60.
   *
   * @public
   */
  scalingTarget?: ExpressGatewayScalingTarget | undefined;

  /**
   * The metadata that you apply to the Express service to help categorize and organize it. Each tag consists of a key and an optional value. You can apply up to 50 tags to a service.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of a task definition to use to create the Express Gateway service. This allows you to manage your own task definition, giving you more control over the service configuration such as adding sidecar containers.
   *
   * The task definition must have a container named `Main` with a single TCP port mapping that includes a container port and port name. The task definition must also have `FARGATE` compatibility.
   *
   * If you provide a task definition ARN, you cannot also specify `primaryContainer`, `executionRoleArn`, `taskRoleArn`, `cpu`, `memory`, or `cpuArchitecture`.
   *
   * @public
   */
  taskDefinitionArn?: string | undefined;
}

/**
 * The entry point into an Express service.
 *
 * @public
 */
export interface IngressPathSummary {
  /**
   * The type of access to the endpoint for the Express service.
   *
   * @public
   */
  accessType: AccessType | undefined;

  /**
   * The endpoint for access to the service.
   *
   * @public
   */
  endpoint: string | undefined;
}

/**
 * Represents a specific configuration revision of an Express service, containing all the settings and parameters for that revision.
 *
 * @public
 */
export interface ExpressGatewayServiceConfiguration {
  /**
   * The ARN of the service revision.
   *
   * @public
   */
  serviceRevisionArn?: string | undefined;

  /**
   * The ARN of the task execution role for the service revision.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The ARN of the task role for the service revision.
   *
   * @public
   */
  taskRoleArn?: string | undefined;

  /**
   * The ARN of the task definition used by this service revision. This is present for all Express services and reflects the task definition in use, whether managed by Amazon ECS or provided by the customer.
   *
   * @public
   */
  taskDefinitionArn?: string | undefined;

  /**
   * The CPU allocation for tasks in this service revision.
   *
   * @public
   */
  cpu?: string | undefined;

  /**
   * The memory allocation for tasks in this service revision.
   *
   * @public
   */
  memory?: string | undefined;

  /**
   * The CPU architecture that the task runs on.
   *
   * Valid values:
   *
   * - `X86_64` - The x86 64-bit architecture.
   * - `ARM64` - The 64-bit ARM architecture.
   *
   * Different service revisions can report different architectures. This value isn't returned when the service uses a customer-provided task definition that doesn't specify a CPU architecture.
   *
   * @public
   */
  cpuArchitecture?: ExpressCpuArchitecture | undefined;

  /**
   * The network configuration for tasks in this service revision.
   *
   * @public
   */
  networkConfiguration?: ExpressGatewayServiceNetworkConfiguration | undefined;

  /**
   * The health check path for this service revision.
   *
   * @public
   */
  healthCheckPath?: string | undefined;

  /**
   * The primary container configuration for this service revision.
   *
   * @public
   */
  primaryContainer?: ExpressGatewayContainer | undefined;

  /**
   * The auto-scaling configuration for this service revision.
   *
   * @public
   */
  scalingTarget?: ExpressGatewayScalingTarget | undefined;

  /**
   * The entry point into this service revision.
   *
   * @public
   */
  ingressPaths?: IngressPathSummary[] | undefined;

  /**
   * The Unix timestamp for when this service revision was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * An object that defines the status of Express service creation and information about the status of the service.
 *
 * @public
 */
export interface ExpressGatewayServiceStatus {
  /**
   * The status of the Express service.
   *
   * @public
   */
  statusCode?: ExpressGatewayServiceStatusCode | undefined;

  /**
   * Information about why the Express service is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * Represents an Express service, which provides a simplified way to deploy containerized web applications on Amazon ECS with managed Amazon Web Services infrastructure. An Express service automatically provisions and manages Application Load Balancers, target groups, security groups, and auto-scaling policies.
 *
 * Express services use a service revision architecture where each service can have multiple active configurations, enabling blue-green deployments and gradual rollouts. The service maintains a list of active configurations and manages the lifecycle of the underlying Amazon Web Services resources.
 *
 * @public
 */
export interface ECSExpressGatewayService {
  /**
   * The short name or full ARN of the cluster that hosts the Express service.
   *
   * @public
   */
  cluster?: string | undefined;

  /**
   * The name of the Express service.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The ARN that identifies the Express service.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The ARN of the infrastructure role that manages Amazon Web Services resources for the Express service.
   *
   * @public
   */
  infrastructureRoleArn?: string | undefined;

  /**
   * The current status of the Express service.
   *
   * @public
   */
  status?: ExpressGatewayServiceStatus | undefined;

  /**
   * The current deployment configuration for the Express service.
   *
   * @public
   */
  currentDeployment?: string | undefined;

  /**
   * The list of active service configurations for the Express service.
   *
   * @public
   */
  activeConfigurations?: ExpressGatewayServiceConfiguration[] | undefined;

  /**
   * The metadata applied to the Express service.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The Unix timestamp for when the Express service was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp for when the Express service was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateExpressGatewayServiceResponse {
  /**
   * The full description of your Express service following the create operation.
   *
   * @public
   */
  service?: ECSExpressGatewayService | undefined;
}

/**
 * The deployment controller to use for the service.
 *
 * @public
 */
export interface DeploymentController {
  /**
   * The deployment controller type to use.
   *
   * The deployment controller is the mechanism that determines how tasks are deployed for your service. The valid options are:
   *
   * - ECS
   *
   *   When you create a service which uses the `ECS` deployment controller, you can choose between the following deployment strategies:
   *
   *   - `ROLLING`: When you create a service which uses the *rolling update* (`ROLLING`) deployment strategy, the Amazon ECS service scheduler replaces the currently running tasks with new tasks. The number of tasks that Amazon ECS adds or removes from the service during a rolling update is controlled by the service deployment configuration.
   *
   *     Rolling update deployments are best suited for the following scenarios:
   *
   *     - Gradual service updates: You need to update your service incrementally without taking the entire service offline at once.
   *     - Limited resource requirements: You want to avoid the additional resource costs of running two complete environments simultaneously (as required by blue/green deployments).
   *     - Acceptable deployment time: Your application can tolerate a longer deployment process, as rolling updates replace tasks one by one.
   *     - No need for instant roll back: Your service can tolerate a rollback process that takes minutes rather than seconds.
   *     - Simple deployment process: You prefer a straightforward deployment approach without the complexity of managing multiple environments, target groups, and listeners.
   *     - No load balancer requirement: Your service doesn't use or require a load balancer, Application Load Balancer, Network Load Balancer, or Service Connect (which are required for blue/green deployments).
   *     - Stateful applications: Your application maintains state that makes it difficult to run two parallel environments.
   *     - Cost sensitivity: You want to minimize deployment costs by not running duplicate environments during deployment.
   *
   *     Rolling updates are the default deployment strategy for services and provide a balance between deployment safety and resource efficiency for many common application scenarios.
   *   - `BLUE_GREEN`: A *blue/green* deployment strategy (`BLUE_GREEN`) is a release methodology that reduces downtime and risk by running two identical production environments called blue and green. With Amazon ECS blue/green deployments, you can validate new service revisions before directing production traffic to them. This approach provides a safer way to deploy changes with the ability to quickly roll back if needed.
   *
   *     Amazon ECS blue/green deployments are best suited for the following scenarios:
   *
   *     - Service validation: When you need to validate new service revisions before directing production traffic to them
   *     - Zero downtime: When your service requires zero-downtime deployments
   *     - Instant roll back: When you need the ability to quickly roll back if issues are detected
   *     - Load balancer requirement: When your service uses Application Load Balancer, Network Load Balancer, or Service Connect
   * - External
   *
   *   Use a third-party deployment controller.
   * - Blue/green deployment (powered by CodeDeploy)
   *
   *   CodeDeploy installs an updated version of the application as a new replacement task set and reroutes production traffic from the original application task set to the replacement task set. The original task set is terminated after a successful deployment. Use this deployment controller to verify a new deployment of a service before sending production traffic to it.
   *
   * @public
   */
  type: DeploymentControllerType | undefined;
}

/**
 * The filters that determine which gateway ingress paths a connector applies to.
 *
 * @public
 */
export interface GatewayConnectorFilters {
  /**
   * The access types of the gateway ingress paths that the connector applies to.
   *
   * The access type can be one of the following values:
   *
   * - `PUBLIC` - The ingress path is publicly accessible.
   * - `PRIVATE` - The ingress path is only accessible privately.
   *
   * @public
   */
  accessTypes?: AccessType[] | undefined;
}

/**
 * The codes that indicate a successful health check response from a target.
 *
 * @public
 */
export interface GatewayConnectorHealthCheckMatcher {
  /**
   * The HTTP codes that indicate a successful response from a target.
   *
   * @public
   */
  httpCode?: string | undefined;

  /**
   * The gRPC codes that indicate a successful response from a target.
   *
   * @public
   */
  grpcCode?: string | undefined;
}

/**
 * The health check configuration that a gateway uses to evaluate the targets associated with a gateway connector.
 *
 * @public
 */
export interface GatewayConnectorHealthCheck {
  /**
   * The protocol that the gateway uses to perform health checks.
   *
   * Valid values:
   *
   * - `HTTP` - Health checks are performed over HTTP.
   * - `HTTPS` - Health checks are performed over HTTPS.
   *
   * @public
   */
  healthCheckProtocol?: GatewayConnectorHealthCheckProtocol | undefined;

  /**
   * The port that the gateway uses to perform health checks on the targets.
   *
   * @public
   */
  healthCheckPort?: number | undefined;

  /**
   * The destination path for health check requests.
   *
   * @public
   */
  healthCheckPath?: string | undefined;

  /**
   * The amount of time, in seconds, during which no response from a target means a failed health check.
   *
   * @public
   */
  healthCheckTimeoutSeconds?: number | undefined;

  /**
   * The approximate amount of time, in seconds, between health checks of an individual target.
   *
   * @public
   */
  healthCheckIntervalSeconds?: number | undefined;

  /**
   * The number of consecutive successful health checks that a target must pass before the gateway considers it healthy.
   *
   * @public
   */
  healthyThresholdCount?: number | undefined;

  /**
   * The number of consecutive failed health checks that a target must fail before the gateway considers it unhealthy.
   *
   * @public
   */
  unhealthyThresholdCount?: number | undefined;

  /**
   * The HTTP or gRPC codes that indicate a successful health check response from a target.
   *
   * @public
   */
  matcher?: GatewayConnectorHealthCheckMatcher | undefined;
}

/**
 * A gateway connector that attaches an Amazon ECS service to a gateway ingress path. The connector specifies the service port that receives gateway-managed ingress traffic, along with the health check and traffic filters that the gateway applies. A service can have at most one gateway connector.
 *
 * @public
 */
export interface GatewayConnector {
  /**
   * The name of the service port that the gateway routes ingress traffic to.
   *
   * @public
   */
  portName: string | undefined;

  /**
   * The health check that the gateway uses to determine whether the targets for this connector are healthy.
   *
   * @public
   */
  healthCheck?: GatewayConnectorHealthCheck | undefined;

  /**
   * The filters that control which gateway ingress paths the connector applies to.
   *
   * @public
   */
  filters?: GatewayConnectorFilters | undefined;
}

/**
 * The load balancer configuration to use with a service or task set.
 *
 * When you add, update, or remove a load balancer configuration, Amazon ECS starts a new deployment with the updated Elastic Load Balancing configuration. This causes tasks to register to and deregister from load balancers.
 *
 * We recommend that you verify this on a test environment before you update the Elastic Load Balancing configuration.
 *
 * A service-linked role is required for services that use multiple target groups. For more information, see [Using service-linked roles](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface LoadBalancer {
  /**
   * The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set.
   *
   * A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer.
   *
   * For services using the `ECS` deployment controller, you can specify one or multiple target groups. For more information, see [Registering multiple target groups with a service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * For services using the `CODE_DEPLOY` deployment controller, you're required to define two target groups for the load balancer. For more information, see [Blue/green deployment with CodeDeploy](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * > **Important:** If your service's task definition uses the `awsvpc` network mode, you must choose `ip` as the target type, not `instance`. Do this when creating your target groups because tasks that use the `awsvpc` network mode are associated with an elastic network interface, not an Amazon EC2 instance. This network mode is required for the Fargate launch type.
   *
   * @public
   */
  targetGroupArn?: string | undefined;

  /**
   * The name of the load balancer to associate with the Amazon ECS service or task set.
   *
   * If you are using an Application Load Balancer or a Network Load Balancer the load balancer name parameter should be omitted.
   *
   * @public
   */
  loadBalancerName?: string | undefined;

  /**
   * The name of the container (as it appears in a container definition) to associate with the load balancer.
   *
   * You need to specify the container name when configuring the target group for an Amazon ECS load balancer.
   *
   * @public
   */
  containerName?: string | undefined;

  /**
   * The port on the container to associate with the load balancer. This port must correspond to a `containerPort` in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they're launched on must allow ingress traffic on the `hostPort` of the port mapping.
   *
   * @public
   */
  containerPort?: number | undefined;

  /**
   * The advanced settings for the load balancer used in blue/green deployments. Specify the alternate target group, listener rules, and IAM role required for traffic shifting during blue/green deployments.
   *
   * @public
   */
  advancedConfiguration?: AdvancedConfiguration | undefined;
}

/**
 * The configuration for a specific set of metrics to collect for a service.
 *
 * @public
 */
export interface MetricConfiguration {
  /**
   * The list of metric names to configure. The supported metric names are `CPUUtilization` and `MemoryUtilization`.
   *
   * @public
   */
  metricNames: string[] | undefined;

  /**
   * The resolution, in seconds, at which to collect the metrics. The valid values are `20` and `60`.
   *
   * @public
   */
  resolutionSeconds: number | undefined;
}

/**
 * The optional monitoring configuration for a service, which defines the resolution for the service-level `CPUUtilization` and `MemoryUtilization` Amazon CloudWatch metrics. When not specified, Amazon ECS uses the default resolution of `60` seconds.
 *
 * @public
 */
export interface MonitoringConfiguration {
  /**
   * The list of metric configurations for the service monitoring.
   *
   * @public
   */
  metricConfigurations?: MetricConfiguration[] | undefined;
}

/**
 * An object representing the networking details for a task or service. For example `awsVpcConfiguration=\{subnets=["subnet-12344321"],securityGroups=["sg-12344321"]\}`.
 *
 * @public
 */
export interface AwsVpcConfiguration {
  /**
   * The IDs of the subnets associated with the task or service. There's a limit of 16 subnets that can be specified.
   *
   * > **Note:** All specified subnets must be from the same VPC.
   *
   * @public
   */
  subnets: string[] | undefined;

  /**
   * The IDs of the security groups associated with the task or service. If you don't specify a security group, the default security group for the VPC is used. There's a limit of 5 security groups that can be specified.
   *
   * > **Note:** All specified security groups must be from the same VPC.
   *
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * Whether the task's elastic network interface receives a public IP address.
   *
   * Consider the following when you set this value:
   *
   * - When you use `create-service` or `update-service`, the default is `DISABLED`.
   * - When the service `deploymentController` is `ECS`, the value must be `DISABLED`.
   *
   * @public
   */
  assignPublicIp?: AssignPublicIp | undefined;
}

/**
 * The network configuration for a task or service.
 *
 * @public
 */
export interface NetworkConfiguration {
  /**
   * The VPC subnets and security groups that are associated with a task.
   *
   * > **Note:** All specified subnets and security groups must be from the same VPC.
   *
   * @public
   */
  awsvpcConfiguration?: AwsVpcConfiguration | undefined;
}

/**
 * An object representing a constraint on task placement. For more information, see [Task placement constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * > **Note:** If you're using the Fargate launch type, task placement constraints aren't supported.
 *
 * @public
 */
export interface PlacementConstraint {
  /**
   * The type of constraint. Use `distinctInstance` to ensure that each task in a particular group is running on a different container instance. Use `memberOf` to restrict the selection to a group of valid candidates.
   *
   * @public
   */
  type?: PlacementConstraintType | undefined;

  /**
   * A cluster query language expression to apply to the constraint. The expression can have a maximum length of 2000 characters. You can't specify an expression if the constraint type is `distinctInstance`. For more information, see [Cluster query language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  expression?: string | undefined;
}

/**
 * The task placement strategy for a task or service. For more information, see [Task placement strategies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface PlacementStrategy {
  /**
   * The type of placement strategy. The `random` placement strategy randomly places tasks on available candidates. The `spread` placement strategy spreads placement across available candidates evenly based on the `field` parameter. The `binpack` strategy places tasks on available candidates that have the least available amount of the resource that's specified with the `field` parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory but still enough to run the task.
   *
   * @public
   */
  type?: PlacementStrategyType | undefined;

  /**
   * The field to apply the placement strategy against. For the `spread` placement strategy, valid values are `instanceId` (or `host`, which has the same effect), or any platform or custom attribute that's applied to a container instance, such as `attribute:ecs.availability-zone`. For the `binpack` placement strategy, valid values are `cpu` and `memory`. For the `random` placement strategy, this field is not used.
   *
   * @public
   */
  field?: string | undefined;
}

/**
 * Configuration for Service Connect access logging. Access logs provide detailed information about requests made to your service, including request patterns, response codes, and timing data for debugging and monitoring purposes.
 *
 * > **Note:** To enable access logs, you must also specify a `logConfiguration` in the `serviceConnectConfiguration`.
 *
 * @public
 */
export interface ServiceConnectAccessLogConfiguration {
  /**
   * The format for Service Connect access log output. Choose TEXT for human-readable logs or JSON for structured data that integrates well with log analysis tools.
   *
   * @public
   */
  format: ServiceConnectAccessLoggingFormat | undefined;

  /**
   * Specifies whether to include query parameters in Service Connect access logs.
   *
   * When enabled, query parameters from HTTP requests are included in the access logs. Consider security and privacy implications when enabling this feature, as query parameters may contain sensitive information such as request IDs and tokens. By default, this parameter is `DISABLED`.
   *
   * @public
   */
  includeQueryParameters?: ServiceConnectIncludeQueryParameters | undefined;
}

/**
 * Contains a configuration setting for the Service Connect proxy container, such as the log level. Specify exactly one member in each object.
 *
 * @public
 */
export type ServiceConnectContainerConfiguration =
  | ServiceConnectContainerConfiguration.LogLevelMember
  | ServiceConnectContainerConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ServiceConnectContainerConfiguration {
  /**
   * The log level of the Service Connect proxy container. Set the log level to `debug` to collect more detailed proxy logs when you troubleshoot connectivity issues between services, and set it back to `info` when you finish. Debug logging increases the volume of logs that the proxy container writes. If you don't specify a log level, the default is `info`.
   *
   * @public
   */
  export interface LogLevelMember {
    logLevel: ServiceConnectContainerLogLevel;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    logLevel?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    logLevel: (value: ServiceConnectContainerLogLevel) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The header matching rules for test traffic routing in Amazon ECS blue/green deployments. These rules determine how incoming requests are matched based on HTTP headers to route test traffic to the new service revision.
 *
 * @public
 */
export interface ServiceConnectTestTrafficHeaderMatchRules {
  /**
   * The exact value that the HTTP header must match for the test traffic routing rule to apply. This provides precise control over which requests are routed to the new service revision during blue/green deployments.
   *
   * @public
   */
  exact: string | undefined;
}

/**
 * The HTTP header rules used to identify and route test traffic during Amazon ECS blue/green deployments. These rules specify which HTTP headers to examine and what values to match for routing decisions.
 *
 * For more information, see [Service Connect for Amazon ECS blue/green deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect-blue-green.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface ServiceConnectTestTrafficHeaderRules {
  /**
   * The name of the HTTP header to examine for test traffic routing. Common examples include custom headers like `X-Test-Version` or `X-Canary-Request` that can be used to identify test traffic.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The header value matching configuration that determines how the HTTP header value is evaluated for test traffic routing decisions.
   *
   * @public
   */
  value?: ServiceConnectTestTrafficHeaderMatchRules | undefined;
}

/**
 * The test traffic routing configuration for Amazon ECS blue/green deployments. This configuration allows you to define rules for routing specific traffic to the new service revision during the deployment process, allowing for safe testing before full production traffic shift.
 *
 * For more information, see [Service Connect for Amazon ECS blue/green deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect-blue-green.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface ServiceConnectTestTrafficRules {
  /**
   * The HTTP header-based routing rules that determine which requests should be routed to the new service version during blue/green deployment testing. These rules provide fine-grained control over test traffic routing based on request headers.
   *
   * @public
   */
  header: ServiceConnectTestTrafficHeaderRules | undefined;
}

/**
 * Each alias ("endpoint") is a fully-qualified name and port number that other tasks ("clients") can use to connect to this service.
 *
 * Each name and port mapping must be unique within the namespace.
 *
 * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface ServiceConnectClientAlias {
  /**
   * The listening port number for the Service Connect proxy. This port is available inside of all of the tasks within the same namespace.
   *
   * To avoid changing your applications in client Amazon ECS services, set this to the same port that the client application uses by default. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  port: number | undefined;

  /**
   * The `dnsName` is the name that you use in the applications of client tasks to connect to this service. The name must be a valid DNS name but doesn't need to be fully-qualified. The name can include up to 127 characters. The name can include lowercase letters, numbers, underscores (_), hyphens (-), and periods (.). The name can't start with a hyphen.
   *
   * If this parameter isn't specified, the default value of `discoveryName.namespace` is used. If the `discoveryName` isn't specified, the port mapping name from the task definition is used in `portName.namespace`.
   *
   * To avoid changing your applications in client Amazon ECS services, set this to the same name that the client application uses by default. For example, a few common names are `database`, `db`, or the lowercase name of a database, such as `mysql` or `redis`. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  dnsName?: string | undefined;

  /**
   * The configuration for test traffic routing rules used during blue/green deployments with Amazon ECS Service Connect. This allows you to route a portion of traffic to the new service revision of your service for testing before shifting all production traffic.
   *
   * @public
   */
  testTrafficRules?: ServiceConnectTestTrafficRules | undefined;
}
