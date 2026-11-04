// smithy-typescript generated code
import type {
  _InstanceType,
  AllocationState,
  AllowsMultipleInstanceTypes,
  AmdSevSnp,
  AmdSevSnpSpecification,
  AnalysisStatus,
  ArchitectureType,
  ArchitectureValues,
  AttachmentLimitType,
  AttachmentStatus,
  AutoPlacement,
  BandwidthWeightingType,
  BootModeType,
  BootModeValues,
  CapacityReservationPreference,
  CurrencyCodeValues,
  DefaultTargetCapacityType,
  DestinationFileFormat,
  DeviceType,
  DiskType,
  EbsEncryptionSupport,
  EbsNvmeSupport,
  EbsOptimizedSupport,
  EnaSupport,
  EphemeralNvmeSupport,
  EventCode,
  FindingsFound,
  FleetActivityStatus,
  FleetCapacityReservationUsageStrategy,
  FleetExcessCapacityTerminationPolicy,
  FleetOnDemandAllocationStrategy,
  FleetReplacementStrategy,
  FleetReservationType,
  FleetStateCode,
  FleetType,
  FlexibleEnaQueuesSupport,
  FpgaImageAttributeName,
  FpgaImageStateCode,
  HaStatus,
  HostMaintenance,
  HostnameType,
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
  InstanceBandwidthWeighting,
  InstanceBootModeValues,
  InstanceLifecycle,
  InstanceLifecycleType,
  InstanceMetadataEndpointState,
  InstanceMetadataOptionsState,
  InstanceMetadataProtocolState,
  InstanceMetadataTagsState,
  InstanceRebootMigrationState,
  InstanceStateName,
  InstanceStorageEncryptionSupport,
  InstanceTypeHypervisor,
  KeyType,
  LocationType,
  LockState,
  LogDestinationType,
  MonitoringState,
  MoveStatus,
  NestedVirtualizationSpecification,
  NetworkCardInterfaceType,
  NetworkInterfaceAttribute,
  NetworkInterfaceStatus,
  NitroEnclavesSupport,
  NitroTpmSupport,
  OfferingClassType,
  OfferingTypeValues,
  PaymentOption,
  PermissionGroup,
  PhcSupport,
  PlacementGroupStrategy,
  PlatformValues,
  ProductCodeValues,
  RebootMigrationSupport,
  RecurringChargeFrequency,
  ReservationState,
  ReservedCapacityAllocationStrategy,
  ReservedCapacityFallbackMarketType,
  ReservedInstanceState,
  RIProductDescription,
  RootDeviceType,
  Scope,
  SecondaryInterfaceStatus,
  SecondaryInterfaceType,
  SeverityLabel,
  SpotAllocationStrategy,
  SpotInstanceInterruptionBehavior,
  SqlServerLicenseUsage,
  StatusName,
  StatusType,
  SummaryStatus,
  SupportedAdditionalProcessorFeature,
  TaggableResourceType,
  TargetCapacityUnitType,
  Tenancy,
  TpmSupportValues,
  TrafficType,
  UsageClassType,
  VirtualizationType,
} from "./enums";
import type {
  ActiveInstance,
  AlternatePathHint,
  Explanation,
  IamInstanceProfile,
  IamInstanceProfileAssociation,
  InstanceEventWindow,
  IpamPoolAllocation,
  IpamResourceDiscoveryAssociation,
  OperatorResponse,
  PathComponent,
  ReservedInstancesListing,
  Tag,
} from "./models_0";
import type {
  AttributeValue,
  BlockDeviceMapping,
  CapacityReservationTargetResponse,
  Ec2InstanceConnectEndpoint,
  FleetLaunchTemplateOverrides,
  FleetLaunchTemplateSpecification,
  InstanceIpv6Address,
  InternetGateway,
  Ipam,
  IpamExternalResourceVerificationToken,
  IpamInternetRegistryAssociation,
  IpamPolicy,
  IpamPool,
  IpamPrefixListResolver,
  IpamPrefixListResolverTarget,
  IpamResourceDiscovery,
  IpamScope,
  LaunchTemplate,
  LaunchTemplateAndOverridesResponse,
  LaunchTemplateVersion,
  LocalGatewayRouteTable,
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation,
  LocalGatewayRouteTableVpcAssociation,
  LocalGatewayVirtualInterface,
  LocalGatewayVirtualInterfaceGroup,
  MacModificationTask,
  ManagedPrefixList,
  NatGateway,
  NetworkAcl,
  NetworkInsightsAccessScope,
  NetworkInsightsPath,
  Placement,
  StateReason,
} from "./models_1";
import type {
  GroupIdentifier,
  NetworkInterface,
  NetworkInterfaceAttachment,
  NetworkInterfacePermission,
  PlacementGroup,
  ReplaceRootVolumeTask,
} from "./models_2";
import type { Byoasn, Filter, HistoryRecordEntry, IdFormat, InstanceTagNotificationAttribute } from "./models_3";

/**
 * @public
 */
export interface DescribeFleetHistoryResult {
  /**
   * Information about the events in the history of the EC2 Fleet.
   *
   * @public
   */
  HistoryRecords?: HistoryRecordEntry[] | undefined;

  /**
   * The last date and time for the events, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z). All records up to this time were retrieved.
   *
   * If `nextToken` indicates that there are more items, this value is not present.
   *
   * @public
   */
  LastEvaluatedTime?: Date | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the EC Fleet.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The start date and time for the events, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z).
   *
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFleetInstancesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the EC2 Fleet.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * The filters.
   *
   * - `instance-type` - The instance type.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeFleetInstancesResult {
  /**
   * The running instances. This list is refreshed periodically and might be out of date.
   *
   * @public
   */
  ActiveInstances?: ActiveInstance[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the EC2 Fleet.
   *
   * @public
   */
  FleetId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The IDs of the EC2 Fleets.
   *
   * > **Note:** If a fleet is of type `instant`, you must specify the fleet ID, otherwise it does not appear in the response.
   *
   * @public
   */
  FleetIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `activity-status` - The progress of the EC2 Fleet ( `error` | `pending-fulfillment` | `pending-termination` | `fulfilled`).
   * - `excess-capacity-termination-policy` - Indicates whether to terminate running instances if the target capacity is decreased below the current EC2 Fleet size (`true` | `false`).
   * - `fleet-state` - The state of the EC2 Fleet (`submitted` | `active` | `deleted` | `failed` | `deleted-running` | `deleted-terminating` | `modifying`).
   * - `replace-unhealthy-instances` - Indicates whether EC2 Fleet should replace unhealthy instances (`true` | `false`).
   * - `type` - The type of request (`instant` | `request` | `maintain`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Describes the instances that could not be launched by the fleet.
 *
 * @public
 */
export interface DescribeFleetError {
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
export interface DescribeFleetsInstances {
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
}

/**
 * Describes a launch template and overrides.
 *
 * @public
 */
export interface FleetLaunchTemplateConfig {
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
  Overrides?: FleetLaunchTemplateOverrides[] | undefined;
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
export interface CapacityReservationOptions {
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
export interface OnDemandOptions {
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
  CapacityReservationOptions?: CapacityReservationOptions | undefined;

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
   * > **Note:** If your fleet includes T instances that are configured as `unlimited`, and if their average CPU usage exceeds the baseline utilization, you will incur a charge for surplus credits. The `maxTotalPrice` does not account for surplus credits, and, if you use surplus credits, your final cost might be higher than what you specified for `maxTotalPrice`. For more information, see [Surplus credits can incur charges](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  MaxTotalPrice?: string | undefined;
}

/**
 * Describes the fallback behavior for an EC2 Fleet that uses reserved capacity when the reserved capacity is not enough to meet the target capacity. If you don't specify fallback options, EC2 Fleet does not fall back to any other market type after the specified reservation types are exhausted.
 *
 * @public
 */
export interface ReservedCapacityFallbackOptions {
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
 * @public
 */
export interface ReservedCapacityOptions {
  /**
   * The strategy that determines the order in which EC2 Fleet launches instances across the reservation types that you specify. The only supported value is `prioritized`, which launches instances in the priority order that you specify in your launch template overrides. If you don't specify an allocation strategy, instances are launched in a random order.
   *
   * @public
   */
  AllocationStrategy?: ReservedCapacityAllocationStrategy | undefined;

  /**
   * The types of Capacity Reservations used for fulfilling the EC2 Fleet request.
   *
   * @public
   */
  ReservationTypes?: FleetReservationType[] | undefined;

  /**
   * The fallback behavior for the EC2 Fleet when there is not enough reserved capacity available to meet the target capacity.
   *
   * @public
   */
  ReservedCapacityFallbackOptions?: ReservedCapacityFallbackOptions | undefined;
}

/**
 * The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted.
 *
 * @public
 */
export interface FleetSpotCapacityRebalance {
  /**
   * The replacement strategy to use. Only available for fleets of type `maintain`.
   *
   * `launch` - EC2 Fleet launches a new replacement Spot Instance when a rebalance notification is emitted for an existing Spot Instance in the fleet. EC2 Fleet does not terminate the instances that receive a rebalance notification. You can terminate the old instances, or you can leave them running. You are charged for all instances while they are running.
   *
   * `launch-before-terminate` - EC2 Fleet launches a new replacement Spot Instance when a rebalance notification is emitted for an existing Spot Instance in the fleet, and then, after a delay that you specify (in `TerminationDelay`), terminates the instances that received a rebalance notification.
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
export interface FleetSpotMaintenanceStrategies {
  /**
   * The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted.
   *
   * @public
   */
  CapacityRebalance?: FleetSpotCapacityRebalance | undefined;
}

/**
 * Describes the configuration of Spot Instances in an EC2 Fleet.
 *
 * @public
 */
export interface SpotOptions {
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
   * The strategies for managing your workloads on your Spot Instances that will be interrupted. Currently only the capacity rebalance strategy is available.
   *
   * @public
   */
  MaintenanceStrategies?: FleetSpotMaintenanceStrategies | undefined;

  /**
   * The behavior when a Spot Instance is interrupted.
   *
   * Default: `terminate`
   *
   * @public
   */
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior | undefined;

  /**
   * The number of Spot pools across which to allocate your target Spot capacity. Supported only when `AllocationStrategy` is set to `lowest-price`. EC2 Fleet selects the cheapest Spot pools and evenly allocates your target Spot capacity across the number of Spot pools that you specify.
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
   * > **Note:** If your fleet includes T instances that are configured as `unlimited`, and if their average CPU usage exceeds the baseline utilization, you will incur a charge for surplus credits. The `maxTotalPrice` does not account for surplus credits, and, if you use surplus credits, your final cost might be higher than what you specified for `maxTotalPrice`. For more information, see [Surplus credits can incur charges](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  MaxTotalPrice?: string | undefined;
}

/**
 * The number of units to request. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is `maintain`, you can specify a target capacity of 0 and add capacity later.
 *
 * You can use the On-Demand Instance `MaxTotalPrice` parameter, the Spot Instance `MaxTotalPrice`, or both to ensure that your fleet cost does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, EC2 Fleet will launch instances until it reaches the maximum amount that you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity. The `MaxTotalPrice` parameters are located in [OnDemandOptions](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptions.html) and [SpotOptions](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptions).
 *
 * @public
 */
export interface TargetCapacitySpecification {
  /**
   * The number of units to request, filled the default target capacity type.
   *
   * @public
   */
  TotalTargetCapacity?: number | undefined;

  /**
   * The number of On-Demand units to request. If you specify a target capacity for Spot units, you cannot specify a target capacity for On-Demand units.
   *
   * @public
   */
  OnDemandTargetCapacity?: number | undefined;

  /**
   * The maximum number of Spot units to launch. If you specify a target capacity for On-Demand units, you cannot specify a target capacity for Spot units.
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
   * The unit for the target capacity.
   *
   * @public
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | undefined;
}

/**
 * Describes an EC2 Fleet.
 *
 * @public
 */
export interface FleetData {
  /**
   * The progress of the EC2 Fleet.
   *
   * For fleets of type `instant`, the status is `fulfilled` after all requests are placed, regardless of whether target capacity is met (this is the only possible status for `instant` fleets).
   *
   * For fleets of type `request` or `maintain`, the status is `pending_fulfillment` after all requests are placed, `fulfilled` when the fleet size meets or exceeds target capacity, `pending_termination` while instances are terminating when fleet size is decreased, and `error` if there's an error.
   *
   * @public
   */
  ActivityStatus?: FleetActivityStatus | undefined;

  /**
   * The creation date and time of the EC2 Fleet.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The ID of the EC2 Fleet.
   *
   * @public
   */
  FleetId?: string | undefined;

  /**
   * The state of the EC2 Fleet.
   *
   * @public
   */
  FleetState?: FleetStateCode | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * Constraints: Maximum 64 ASCII characters
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Indicates whether running instances should be terminated if the target capacity of the EC2 Fleet is decreased below the current size of the EC2 Fleet.
   *
   * Supported only for fleets of type `maintain`.
   *
   * @public
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | undefined;

  /**
   * The number of units fulfilled by this request compared to the set target capacity.
   *
   * @public
   */
  FulfilledCapacity?: number | undefined;

  /**
   * The number of units fulfilled by this request compared to the set target On-Demand capacity.
   *
   * @public
   */
  FulfilledOnDemandCapacity?: number | undefined;

  /**
   * The launch template and overrides.
   *
   * @public
   */
  LaunchTemplateConfigs?: FleetLaunchTemplateConfig[] | undefined;

  /**
   * The number of units to request. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is `maintain`, you can specify a target capacity of 0 and add capacity later.
   *
   * @public
   */
  TargetCapacitySpecification?: TargetCapacitySpecification | undefined;

  /**
   * Indicates whether running instances should be terminated when the EC2 Fleet expires.
   *
   * @public
   */
  TerminateInstancesWithExpiration?: boolean | undefined;

  /**
   * The type of request. Indicates whether the EC2 Fleet only `requests` the target capacity, or also attempts to `maintain` it. If you request a certain target capacity, EC2 Fleet only places the required requests; it does not attempt to replenish instances if capacity is diminished, and it does not submit requests in alternative capacity pools if capacity is unavailable. To maintain a certain target capacity, EC2 Fleet places the required requests to meet this target capacity. It also automatically replenishes any interrupted Spot Instances. Default: `maintain`.
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
   * The end date and time of the request, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z). At this point, no new instance requests are placed or able to fulfill the request. The default end date is 7 days from the current date.
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
   * The configuration of Spot Instances in an EC2 Fleet.
   *
   * @public
   */
  SpotOptions?: SpotOptions | undefined;

  /**
   * The allocation strategy of On-Demand Instances in an EC2 Fleet.
   *
   * @public
   */
  OnDemandOptions?: OnDemandOptions | undefined;

  /**
   * Defines EC2 Fleet preferences for utilizing reserved capacity when DefaultTargetCapacityType is set to `reserved-capacity`.
   *
   * @public
   */
  ReservedCapacityOptions?: ReservedCapacityOptions | undefined;

  /**
   * The tags for an EC2 Fleet resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Information about the instances that could not be launched by the fleet. Valid only when **Type** is set to `instant`.
   *
   * @public
   */
  Errors?: DescribeFleetError[] | undefined;

  /**
   * Information about the instances that were launched by the fleet. Valid only when **Type** is set to `instant`.
   *
   * @public
   */
  Instances?: DescribeFleetsInstances[] | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Context?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetsResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the EC2 Fleets.
   *
   * @public
   */
  Fleets?: FleetData[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowLogsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters.
   *
   * - `deliver-log-status` - The status of the logs delivery (`SUCCESS` | `FAILED`).
   * - `log-destination-type` - The type of destination for the flow log data (`cloud-watch-logs` | `s3` | `kinesis-data-firehose`).
   * - `flow-log-id` - The ID of the flow log.
   * - `log-group-name` - The name of the log group.
   * - `resource-id` - The ID of the VPC, subnet, or network interface.
   * - `traffic-type` - The type of traffic (`ACCEPT` | `REJECT` | `ALL`).
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filter?: Filter[] | undefined;

  /**
   * One or more flow log IDs.
   *
   * Constraint: Maximum of 1000 flow log IDs.
   *
   * @public
   */
  FlowLogIds?: string[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to request the next page of items. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the destination options for a flow log.
 *
 * @public
 */
export interface DestinationOptionsResponse {
  /**
   * The format for the flow log.
   *
   * @public
   */
  FileFormat?: DestinationFileFormat | undefined;

  /**
   * Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3.
   *
   * @public
   */
  HiveCompatiblePartitions?: boolean | undefined;

  /**
   * Indicates whether to partition the flow log per hour.
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
export interface TagFieldSpecificationResponse {
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
 * Describes a flow log.
 *
 * @public
 */
export interface FlowLog {
  /**
   * The date and time the flow log was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Information about the error that occurred. `Rate limited` indicates that CloudWatch Logs throttling has been applied for one or more network interfaces, or that you've reached the limit on the number of log groups that you can create. `Access error` indicates that the IAM role associated with the flow log does not have sufficient permissions to publish to CloudWatch Logs. `Unknown error` indicates an internal error.
   *
   * @public
   */
  DeliverLogsErrorMessage?: string | undefined;

  /**
   * The ARN of the IAM role allows the service to publish logs to CloudWatch Logs.
   *
   * @public
   */
  DeliverLogsPermissionArn?: string | undefined;

  /**
   * The ARN of the IAM role that allows the service to publish flow logs across accounts.
   *
   * @public
   */
  DeliverCrossAccountRole?: string | undefined;

  /**
   * The status of the logs delivery (`SUCCESS` | `FAILED`).
   *
   * @public
   */
  DeliverLogsStatus?: string | undefined;

  /**
   * The ID of the flow log.
   *
   * @public
   */
  FlowLogId?: string | undefined;

  /**
   * The status of the flow log (`ACTIVE`).
   *
   * @public
   */
  FlowLogStatus?: string | undefined;

  /**
   * The name of the flow log group.
   *
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * The ID of the resource being monitored.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of traffic captured for the flow log.
   *
   * @public
   */
  TrafficType?: TrafficType | undefined;

  /**
   * The type of destination for the flow log data.
   *
   * @public
   */
  LogDestinationType?: LogDestinationType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination for the flow log data.
   *
   * @public
   */
  LogDestination?: string | undefined;

  /**
   * The format of the flow log record.
   *
   * @public
   */
  LogFormat?: string | undefined;

  /**
   * The tags for the flow log.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record.
   *
   * When a network interface is attached to a [Nitro-based instance](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html), the aggregation interval is always 60 seconds (1 minute) or less, regardless of the specified value.
   *
   * Valid Values: `60` | `600`
   *
   * @public
   */
  MaxAggregationInterval?: number | undefined;

  /**
   * The destination options.
   *
   * @public
   */
  DestinationOptions?: DestinationOptionsResponse | undefined;

  /**
   * The tag configuration associated with the Flow Logs Amazon EC2 Tags feature fields in your custom log format.
   *
   * @public
   */
  TagFieldSpecifications?: TagFieldSpecificationResponse[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowLogsResult {
  /**
   * Information about the flow logs.
   *
   * @public
   */
  FlowLogs?: FlowLog[] | undefined;

  /**
   * The token to request the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFpgaImageAttributeRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the AFI.
   *
   * @public
   */
  FpgaImageId: string | undefined;

  /**
   * The AFI attribute.
   *
   * @public
   */
  Attribute: FpgaImageAttributeName | undefined;
}

/**
 * Describes a load permission.
 *
 * @public
 */
export interface LoadPermission {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  Group?: PermissionGroup | undefined;
}

/**
 * Describes a product code.
 *
 * @public
 */
export interface ProductCode {
  /**
   * The product code.
   *
   * @public
   */
  ProductCodeId?: string | undefined;

  /**
   * The type of product code.
   *
   * @public
   */
  ProductCodeType?: ProductCodeValues | undefined;
}

/**
 * Describes an Amazon FPGA image (AFI) attribute.
 *
 * @public
 */
export interface FpgaImageAttribute {
  /**
   * The ID of the AFI.
   *
   * @public
   */
  FpgaImageId?: string | undefined;

  /**
   * The name of the AFI.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the AFI.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The load permissions.
   *
   * @public
   */
  LoadPermissions?: LoadPermission[] | undefined;

  /**
   * The product codes.
   *
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;
}

/**
 * @public
 */
export interface DescribeFpgaImageAttributeResult {
  /**
   * Information about the attribute.
   *
   * @public
   */
  FpgaImageAttribute?: FpgaImageAttribute | undefined;
}

/**
 * @public
 */
export interface DescribeFpgaImagesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The AFI IDs.
   *
   * @public
   */
  FpgaImageIds?: string[] | undefined;

  /**
   * Filters the AFI by owner. Specify an Amazon Web Services account ID, `self` (owner is the sender of the request), or an Amazon Web Services owner alias (valid values are `amazon` | `aws-marketplace`).
   *
   * @public
   */
  Owners?: string[] | undefined;

  /**
   * The filters.
   *
   * - `create-time` - The creation time of the AFI.
   * - `fpga-image-id` - The FPGA image identifier (AFI ID).
   * - `fpga-image-global-id` - The global FPGA image identifier (AGFI ID).
   * - `name` - The name of the AFI.
   * - `owner-id` - The Amazon Web Services account ID of the AFI owner.
   * - `product-code` - The product code.
   * - `shell-version` - The version of the Amazon Web Services Shell that was used to create the bitstream.
   * - `state` - The state of the AFI (`pending` | `failed` | `available` | `unavailable`).
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `update-time` - The time of the most recent update.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.
 *
 * @public
 */
export interface PciId {
  /**
   * The ID of the device.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The ID of the vendor.
   *
   * @public
   */
  VendorId?: string | undefined;

  /**
   * The ID of the subsystem.
   *
   * @public
   */
  SubsystemId?: string | undefined;

  /**
   * The ID of the vendor for the subsystem.
   *
   * @public
   */
  SubsystemVendorId?: string | undefined;
}

/**
 * Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).
 *
 * @public
 */
export interface FpgaImageState {
  /**
   * The state. The following are the possible values:
   *
   * - `pending` - AFI bitstream generation is in progress.
   * - `available` - The AFI is available for use.
   * - `failed` - AFI bitstream generation failed.
   * - `unavailable` - The AFI is no longer available for use.
   *
   * @public
   */
  Code?: FpgaImageStateCode | undefined;

  /**
   * If the state is `failed`, this is the error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes an Amazon FPGA image (AFI).
 *
 * @public
 */
export interface FpgaImage {
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

  /**
   * The name of the AFI.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the AFI.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The version of the Amazon Web Services Shell that was used to create the bitstream.
   *
   * @public
   */
  ShellVersion?: string | undefined;

  /**
   * Information about the PCI bus.
   *
   * @public
   */
  PciId?: PciId | undefined;

  /**
   * Information about the state of the AFI.
   *
   * @public
   */
  State?: FpgaImageState | undefined;

  /**
   * The date and time the AFI was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The time of the most recent update to the AFI.
   *
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the AFI.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The alias of the AFI owner. Possible values include `self`, `amazon`, and `aws-marketplace`.
   *
   * @public
   */
  OwnerAlias?: string | undefined;

  /**
   * The product codes for the AFI.
   *
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * Any tags assigned to the AFI.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Indicates whether the AFI is public.
   *
   * @public
   */
  Public?: boolean | undefined;

  /**
   * Indicates whether data retention support is enabled for the AFI.
   *
   * @public
   */
  DataRetentionSupport?: boolean | undefined;

  /**
   * The instance types supported by the AFI.
   *
   * @public
   */
  InstanceTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeFpgaImagesResult {
  /**
   * Information about the FPGA images.
   *
   * @public
   */
  FpgaImages?: FpgaImage[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHostReservationOfferingsRequest {
  /**
   * The filters.
   *
   * - `instance-family` - The instance family of the offering (for example, `m4`).
   * - `payment-option` - The payment option (`NoUpfront` | `PartialUpfront` | `AllUpfront`).
   *
   * @public
   */
  Filter?: Filter[] | undefined;

  /**
   * This is the maximum duration of the reservation to purchase, specified in seconds. Reservations are available in one-year and three-year terms. The number of seconds specified must be the number of seconds in a year (365x24x60x60) times one of the supported durations (1 or 3). For example, specify 94608000 for three years.
   *
   * @public
   */
  MaxDuration?: number | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned `nextToken` value. This value can be between 5 and 500. If `maxResults` is given a larger value than 500, you receive an error.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * This is the minimum duration of the reservation you'd like to purchase, specified in seconds. Reservations are available in one-year and three-year terms. The number of seconds specified must be the number of seconds in a year (365x24x60x60) times one of the supported durations (1 or 3). For example, specify 31536000 for one year.
   *
   * @public
   */
  MinDuration?: number | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the reservation offering.
   *
   * @public
   */
  OfferingId?: string | undefined;
}

/**
 * Details about the Dedicated Host Reservation offering.
 *
 * @public
 */
export interface HostOffering {
  /**
   * The currency of the offering.
   *
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * The duration of the offering (in seconds).
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The hourly price of the offering.
   *
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * The instance family of the offering.
   *
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * The ID of the offering.
   *
   * @public
   */
  OfferingId?: string | undefined;

  /**
   * The available payment option.
   *
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * The upfront price of the offering. Does not apply to No Upfront offerings.
   *
   * @public
   */
  UpfrontPrice?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHostReservationOfferingsResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the offerings.
   *
   * @public
   */
  OfferingSet?: HostOffering[] | undefined;
}

/**
 * @public
 */
export interface DescribeHostReservationsRequest {
  /**
   * The filters.
   *
   * - `instance-family` - The instance family (for example, `m4`).
   * - `payment-option` - The payment option (`NoUpfront` | `PartialUpfront` | `AllUpfront`).
   * - `state` - The state of the reservation (`payment-pending` | `payment-failed` | `active` | `retired`).
   * - `tag:<key>` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filter?: Filter[] | undefined;

  /**
   * The host reservation IDs.
   *
   * @public
   */
  HostReservationIdSet?: string[] | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned `nextToken` value. This value can be between 5 and 500. If `maxResults` is given a larger value than 500, you receive an error.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Details about the Dedicated Host Reservation and associated Dedicated Hosts.
 *
 * @public
 */
export interface HostReservation {
  /**
   * The number of Dedicated Hosts the reservation is associated with.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The currency in which the `upfrontPrice` and `hourlyPrice` amounts are specified. At this time, the only supported currency is `USD`.
   *
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * The length of the reservation's term, specified in seconds. Can be `31536000 (1 year)` | `94608000 (3 years)`.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The date and time that the reservation ends.
   *
   * @public
   */
  End?: Date | undefined;

  /**
   * The IDs of the Dedicated Hosts associated with the reservation.
   *
   * @public
   */
  HostIdSet?: string[] | undefined;

  /**
   * The ID of the reservation that specifies the associated Dedicated Hosts.
   *
   * @public
   */
  HostReservationId?: string | undefined;

  /**
   * The hourly price of the reservation.
   *
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * The instance family of the Dedicated Host Reservation. The instance family on the Dedicated Host must be the same in order for it to benefit from the reservation.
   *
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * The ID of the reservation. This remains the same regardless of which Dedicated Hosts are associated with it.
   *
   * @public
   */
  OfferingId?: string | undefined;

  /**
   * The payment option selected for this reservation.
   *
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * The date and time that the reservation started.
   *
   * @public
   */
  Start?: Date | undefined;

  /**
   * The state of the reservation.
   *
   * @public
   */
  State?: ReservationState | undefined;

  /**
   * The upfront price of the reservation.
   *
   * @public
   */
  UpfrontPrice?: string | undefined;

  /**
   * Any tags assigned to the Dedicated Host Reservation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeHostReservationsResult {
  /**
   * Details about the reservation's configuration.
   *
   * @public
   */
  HostReservationSet?: HostReservation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHostsRequest {
  /**
   * The IDs of the Dedicated Hosts. The IDs are used for targeted instance launches.
   *
   * @public
   */
  HostIds?: string[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned `nextToken` value. This value can be between 5 and 500. If `maxResults` is given a larger value than 500, you receive an error.
   *
   * You cannot specify this parameter and the host IDs parameter in the same request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The filters.
   *
   * - `auto-placement` - Whether auto-placement is enabled or disabled (`on` | `off`).
   * - `availability-zone` - The Availability Zone of the host.
   * - `client-token` - The idempotency token that you provided when you allocated the host.
   * - `host-reservation-id` - The ID of the reservation assigned to this host.
   * - `instance-type` - The instance type size that the Dedicated Host is configured to support.
   * - `state` - The allocation state of the Dedicated Host (`available` | `under-assessment` | `permanent-failure` | `released` | `released-permanent-failure`).
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filter?: Filter[] | undefined;
}

/**
 * Information about the number of instances that can be launched onto the Dedicated Host.
 *
 * @public
 */
export interface InstanceCapacity {
  /**
   * The number of instances that can be launched onto the Dedicated Host based on the host's available capacity.
   *
   * @public
   */
  AvailableCapacity?: number | undefined;

  /**
   * The instance type supported by the Dedicated Host.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The total number of instances that can be launched onto the Dedicated Host if there are no instances running on it.
   *
   * @public
   */
  TotalCapacity?: number | undefined;
}

/**
 * The capacity information for instances that can be launched onto the Dedicated Host.
 *
 * @public
 */
export interface AvailableCapacity {
  /**
   * The number of instances that can be launched onto the Dedicated Host depending on the host's available capacity. For Dedicated Hosts that support multiple instance types, this parameter represents the number of instances for each instance size that is supported on the host.
   *
   * @public
   */
  AvailableInstanceCapacity?: InstanceCapacity[] | undefined;

  /**
   * The number of vCPUs available for launching instances onto the Dedicated Host.
   *
   * @public
   */
  AvailableVCpus?: number | undefined;
}

/**
 * Contains the CPU options for a Dedicated Host, including AMD Secure Encrypted Virtualization-Secure Nested Paging (AMD SEV-SNP) settings.
 *
 * @public
 */
export interface HostCpuOptions {
  /**
   * Specifies whether AMD Secure Encrypted Virtualization-Secure Nested Paging (AMD SEV-SNP) is enabled or disabled for the Dedicated Host. If you don't specify a value, AMD SEV-SNP is `disabled`.
   *
   * @public
   */
  AmdSevSnp?: AmdSevSnp | undefined;
}

/**
 * Describes the properties of a Dedicated Host.
 *
 * @public
 */
export interface HostProperties {
  /**
   * The number of cores on the Dedicated Host.
   *
   * @public
   */
  Cores?: number | undefined;

  /**
   * The instance type supported by the Dedicated Host. For example, `m5.large`. If the host supports multiple instance types, no **instanceType** is returned.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The instance family supported by the Dedicated Host. For example, `m5`.
   *
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * The number of sockets on the Dedicated Host.
   *
   * @public
   */
  Sockets?: number | undefined;

  /**
   * The total number of vCPUs on the Dedicated Host.
   *
   * @public
   */
  TotalVCpus?: number | undefined;
}

/**
 * Describes an instance running on a Dedicated Host.
 *
 * @public
 */
export interface HostInstance {
  /**
   * The ID of instance that is running on the Dedicated Host.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The instance type (for example, `m3.medium`) of the running instance.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the instance.
   *
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * Describes the properties of the Dedicated Host.
 *
 * @public
 */
export interface Host {
  /**
   * Whether auto-placement is on or off.
   *
   * @public
   */
  AutoPlacement?: AutoPlacement | undefined;

  /**
   * The Availability Zone of the Dedicated Host.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Information about the instances running on the Dedicated Host.
   *
   * @public
   */
  AvailableCapacity?: AvailableCapacity | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The ID of the Dedicated Host.
   *
   * @public
   */
  HostId?: string | undefined;

  /**
   * The hardware specifications of the Dedicated Host.
   *
   * @public
   */
  HostProperties?: HostProperties | undefined;

  /**
   * The reservation ID of the Dedicated Host. This returns a `null` response if the Dedicated Host doesn't have an associated reservation.
   *
   * @public
   */
  HostReservationId?: string | undefined;

  /**
   * The IDs and instance type that are currently running on the Dedicated Host.
   *
   * @public
   */
  Instances?: HostInstance[] | undefined;

  /**
   * The Dedicated Host's state.
   *
   * @public
   */
  State?: AllocationState | undefined;

  /**
   * The time that the Dedicated Host was allocated.
   *
   * @public
   */
  AllocationTime?: Date | undefined;

  /**
   * The time that the Dedicated Host was released.
   *
   * @public
   */
  ReleaseTime?: Date | undefined;

  /**
   * Any tags assigned to the Dedicated Host.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Indicates whether host recovery is enabled or disabled for the Dedicated Host.
   *
   * @public
   */
  HostRecovery?: HostRecovery | undefined;

  /**
   * Indicates whether the Dedicated Host supports multiple instance types of the same instance family. If the value is `on`, the Dedicated Host supports multiple instance types in the instance family. If the value is `off`, the Dedicated Host supports a single instance type only.
   *
   * @public
   */
  AllowsMultipleInstanceTypes?: AllowsMultipleInstanceTypes | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the Dedicated Host.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the Availability Zone in which the Dedicated Host is allocated.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * Indicates whether the Dedicated Host is in a host resource group. If **memberOfServiceLinkedResourceGroup** is `true`, the host is in a host resource group; otherwise, it is not.
   *
   * @public
   */
  MemberOfServiceLinkedResourceGroup?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which the Dedicated Host is allocated.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * Indicates whether host maintenance is enabled or disabled for the Dedicated Host.
   *
   * @public
   */
  HostMaintenance?: HostMaintenance | undefined;

  /**
   * The ID of the Outpost hardware asset on which the Dedicated Host is allocated.
   *
   * @public
   */
  AssetId?: string | undefined;

  /**
   * The CPU options for the Dedicated Host, including AMD Secure Encrypted Virtualization-Secure Nested Paging (AMD SEV-SNP) settings.
   *
   * @public
   */
  CpuOptions?: HostCpuOptions | undefined;
}

/**
 * @public
 */
export interface DescribeHostsResult {
  /**
   * Information about the Dedicated Hosts.
   *
   * @public
   */
  Hosts?: Host[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIamInstanceProfileAssociationsRequest {
  /**
   * The IAM instance profile associations.
   *
   * @public
   */
  AssociationIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `instance-id` - The ID of the instance.
   * - `state` - The state of the association (`associating` | `associated` | `disassociating`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIamInstanceProfileAssociationsResult {
  /**
   * Information about the IAM instance profile associations.
   *
   * @public
   */
  IamInstanceProfileAssociations?: IamInstanceProfileAssociation[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityIdFormatRequest {
  /**
   * The type of resource: `bundle` | `conversion-task` | `customer-gateway` | `dhcp-options` | `elastic-ip-allocation` | `elastic-ip-association` | `export-task` | `flow-log` | `image` | `import-task` | `instance` | `internet-gateway` | `network-acl` | `network-acl-association` | `network-interface` | `network-interface-attachment` | `prefix-list` | `reservation` | `route-table` | `route-table-association` | `security-group` | `snapshot` | `subnet` | `subnet-cidr-block-association` | `volume` | `vpc` | `vpc-cidr-block-association` | `vpc-endpoint` | `vpc-peering-connection` | `vpn-connection` | `vpn-gateway`
   *
   * @public
   */
  Resource?: string | undefined;

  /**
   * The ARN of the principal, which can be an IAM role, IAM user, or the root user.
   *
   * @public
   */
  PrincipalArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityIdFormatResult {
  /**
   * Information about the ID format for the resources.
   *
   * @public
   */
  Statuses?: IdFormat[] | undefined;
}

/**
 * @public
 */
export interface DescribeIdFormatRequest {
  /**
   * The type of resource: `bundle` | `conversion-task` | `customer-gateway` | `dhcp-options` | `elastic-ip-allocation` | `elastic-ip-association` | `export-task` | `flow-log` | `image` | `import-task` | `instance` | `internet-gateway` | `network-acl` | `network-acl-association` | `network-interface` | `network-interface-attachment` | `prefix-list` | `reservation` | `route-table` | `route-table-association` | `security-group` | `snapshot` | `subnet` | `subnet-cidr-block-association` | `volume` | `vpc` | `vpc-cidr-block-association` | `vpc-endpoint` | `vpc-peering-connection` | `vpn-connection` | `vpn-gateway`
   *
   * @public
   */
  Resource?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIdFormatResult {
  /**
   * Information about the ID format for the resource.
   *
   * @public
   */
  Statuses?: IdFormat[] | undefined;
}

/**
 * Contains the parameters for DescribeImageAttribute.
 *
 * @public
 */
export interface DescribeImageAttributeRequest {
  /**
   * The AMI attribute.
   *
   * **Note**: The `blockDeviceMapping` attribute is deprecated. Using this attribute returns the `Client.AuthFailure` error. To get information about the block device mappings for an AMI, describe the image instead.
   *
   * @public
   */
  Attribute: ImageAttributeName | undefined;

  /**
   * The ID of the AMI.
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
 * Describes a launch permission.
 *
 * @public
 */
export interface LaunchPermission {
  /**
   * The Amazon Resource Name (ARN) of an organization.
   *
   * @public
   */
  OrganizationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an organizational unit (OU).
   *
   * @public
   */
  OrganizationalUnitArn?: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * Constraints: Up to 10 000 account IDs can be specified in a single request.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  Group?: PermissionGroup | undefined;
}

/**
 * Describes an image attribute.
 *
 * @public
 */
export interface ImageAttribute {
  /**
   * A description for the AMI.
   *
   * @public
   */
  Description?: AttributeValue | undefined;

  /**
   * The kernel ID.
   *
   * @public
   */
  KernelId?: AttributeValue | undefined;

  /**
   * The RAM disk ID.
   *
   * @public
   */
  RamdiskId?: AttributeValue | undefined;

  /**
   * Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
   *
   * @public
   */
  SriovNetSupport?: AttributeValue | undefined;

  /**
   * The boot mode.
   *
   * @public
   */
  BootMode?: AttributeValue | undefined;

  /**
   * If the image is configured for NitroTPM support, the value is `v2.0`.
   *
   * @public
   */
  TpmSupport?: AttributeValue | undefined;

  /**
   * Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data, use the [GetInstanceUefiData](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceUefiData) command. You can inspect and modify the UEFI data by using the [python-uefivars tool](https://github.com/awslabs/python-uefivars) on GitHub. For more information, see [UEFI Secure Boot for Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  UefiData?: AttributeValue | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the AMI was last used to launch an EC2 instance. When the AMI is used to launch an instance, there is a 24-hour delay before that usage is reported.
   *
   * > **Note:** `lastLaunchedTime` data is available starting April 2017.
   *
   * @public
   */
  LastLaunchedTime?: AttributeValue | undefined;

  /**
   * If `v2.0`, it indicates that IMDSv2 is specified in the AMI. Instances launched from this AMI will have `HttpTokens` automatically set to `required` so that, by default, the instance requires that IMDSv2 is used when requesting instance metadata. In addition, `HttpPutResponseHopLimit` is set to `2`. For more information, see [Configure the AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  ImdsSupport?: AttributeValue | undefined;

  /**
   * Indicates whether deregistration protection is enabled for the AMI.
   *
   * @public
   */
  DeregistrationProtection?: AttributeValue | undefined;

  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The launch permissions.
   *
   * @public
   */
  LaunchPermissions?: LaunchPermission[] | undefined;

  /**
   * The product codes.
   *
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * The block device mapping entries.
   *
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;
}

/**
 * The options that affect the scope of the response.
 *
 * @public
 */
export interface ResourceTypeOption {
  /**
   * The name of the option.
   *
   * - For `ec2:Instance`:
   *
   *   Specify `state-name` - The current state of the EC2 instance.
   * - For `ec2:LaunchTemplate`:
   *
   *   Specify `version-depth` - The number of launch template versions to check, starting from the most recent version.
   *
   * @public
   */
  OptionName?: ImageReferenceOptionName | undefined;

  /**
   * A value for the specified option.
   *
   * - For `state-name`:
   *
   *   - Valid values: `pending` | `running` | `shutting-down` | `terminated` | `stopping` | `stopped`
   *   - Default: All states
   * - For `version-depth`:
   *
   *   - Valid values: Integers between `1` and `10000`
   *   - Default: `10`
   *
   * @public
   */
  OptionValues?: string[] | undefined;
}

/**
 * A resource type to check for image references. Associated options can also be specified if the resource type is an EC2 instance or launch template.
 *
 * @public
 */
export interface ResourceTypeRequest {
  /**
   * The resource type.
   *
   * @public
   */
  ResourceType?: ImageReferenceResourceType | undefined;

  /**
   * The options that affect the scope of the response. Valid only when `ResourceType` is `ec2:Instance` or `ec2:LaunchTemplate`.
   *
   * @public
   */
  ResourceTypeOptions?: ResourceTypeOption[] | undefined;
}

/**
 * @public
 */
export interface DescribeImageReferencesRequest {
  /**
   * The IDs of the images to check for resource references.
   *
   * @public
   */
  ImageIds: string[] | undefined;

  /**
   * Specifies whether to check all supported Amazon Web Services resource types for image references. When specified, default values are applied for `ResourceTypeOptions`. For the default values, see [How AMI reference checks work](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-ami-references.html#how-ami-references-works) in the *Amazon EC2 User Guide*. If you also specify `ResourceTypes` with `ResourceTypeOptions`, your specified values override the default values.
   *
   * Supported resource types: `ec2:Instance` | `ec2:LaunchTemplate` | `ssm:Parameter` | `imagebuilder:ImageRecipe` | `imagebuilder:ContainerRecipe`
   *
   * Either `IncludeAllResourceTypes` or `ResourceTypes` must be specified.
   *
   * @public
   */
  IncludeAllResourceTypes?: boolean | undefined;

  /**
   * The Amazon Web Services resource types to check for image references.
   *
   * Either `IncludeAllResourceTypes` or `ResourceTypes` must be specified.
   *
   * @public
   */
  ResourceTypes?: ResourceTypeRequest[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A resource that is referencing an image.
 *
 * @public
 */
export interface ImageReference {
  /**
   * The ID of the referenced image.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The type of resource referencing the image.
   *
   * @public
   */
  ResourceType?: ImageReferenceResourceType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource referencing the image.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageReferencesResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The resources that are referencing the specified images.
   *
   * @public
   */
  ImageReferences?: ImageReference[] | undefined;
}

/**
 * @public
 */
export interface DescribeImagesRequest {
  /**
   * Scopes the images by users with explicit launch permissions. Specify an Amazon Web Services account ID, `self` (the sender of the request), or `all` (public AMIs).
   *
   * - If you specify an Amazon Web Services account ID that is not your own, only AMIs shared with that specific Amazon Web Services account ID are returned. However, AMIs that are shared with the account’s organization or organizational unit (OU) are not returned.
   * - If you specify `self` or your own Amazon Web Services account ID, AMIs shared with your account are returned. In addition, AMIs that are shared with the organization or OU of which you are member are also returned.
   * - If you specify `all`, all public AMIs are returned.
   *
   * @public
   */
  ExecutableUsers?: string[] | undefined;

  /**
   * The image IDs.
   *
   * Default: Describes all images available to you.
   *
   * @public
   */
  ImageIds?: string[] | undefined;

  /**
   * Scopes the results to images with the specified owners. You can specify a combination of Amazon Web Services account IDs, `self`, `amazon`, `aws-backup-vault`, and `aws-marketplace`. If you omit this parameter, the results include all images for which you have launch permissions, regardless of ownership.
   *
   * @public
   */
  Owners?: string[] | undefined;

  /**
   * Specifies whether to include deprecated AMIs.
   *
   * Default: No deprecated AMIs are included in the response.
   *
   * > **Note:** If you are the AMI owner, all deprecated AMIs appear in the response regardless of what you specify for this parameter.
   *
   * @public
   */
  IncludeDeprecated?: boolean | undefined;

  /**
   * Specifies whether to include disabled AMIs.
   *
   * Default: No disabled AMIs are included in the response.
   *
   * @public
   */
  IncludeDisabled?: boolean | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `architecture` - The image architecture (`i386` | `x86_64` | `arm64` | `x86_64_mac` | `arm64_mac`).
   * - `block-device-mapping.delete-on-termination` - A Boolean value that indicates whether the Amazon EBS volume is deleted on instance termination.
   * - `block-device-mapping.device-name` - The device name specified in the block device mapping (for example, `/dev/sdh` or `xvdh`).
   * - `block-device-mapping.snapshot-id` - The ID of the snapshot used for the Amazon EBS volume.
   * - `block-device-mapping.volume-size` - The volume size of the Amazon EBS volume, in GiB.
   * - `block-device-mapping.volume-type` - The volume type of the Amazon EBS volume (`io1` | `io2` | `gp2` | `gp3` | `sc1`| `st1` | `standard`).
   * - `block-device-mapping.encrypted` - A Boolean that indicates whether the Amazon EBS volume is encrypted.
   * - `boot-mode` – The boot mode of the image (`legacy-bios` | `uefi` | `uefi-preferred`).
   * - `creation-date` - The time when the image was created, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example, `2021-09-29T11:04:43.305Z`. You can use a wildcard (`*`), for example, `2021-09-29T*`, which matches an entire day.
   * - `description` - The description of the image (provided during image creation).
   * - `ena-support` - A Boolean that indicates whether enhanced networking with ENA is enabled.
   * - `free-tier-eligible` - A Boolean that indicates whether this image can be used under the Amazon Web Services Free Tier (`true` | `false`).
   * - `hypervisor` - The hypervisor type (`ovm` | `xen`).
   * - `image-allowed` - A Boolean that indicates whether the image meets the criteria specified for Allowed AMIs.
   * - `image-id` - The ID of the image.
   * - `image-watermark.source-image-creation-time` - The creation date of the source AMI, in the ISO 8601 format in the UTC time zone (`YYYY-MM-DDTHH:MM:SS.ssssss+HH:MM`). You can use a wildcard (`*`), for example, `2021-09-29T*`, which matches an entire day.
   * - `image-watermark.source-image-id` - The ID of the AMI to which the watermark was originally attached.
   * - `image-watermark.source-image-region` - The Region where the watermark was originally attached.
   * - `image-watermark.watermark-creation-time` - The date and time the watermark was attached to the AMI, in the ISO 8601 format in the UTC time zone (`YYYY-MM-DDTHH:MM:SS.ssssss+HH:MM`). You can use a wildcard (`*`), for example, `2021-09-29T*`, which matches an entire day.
   * - `image-watermark.watermark-key` - The watermark identifier, in `accountId:watermarkName` format (for example, `123456789012:approvedAmi`).
   * - `image-type` - The image type (`machine` | `kernel` | `ramdisk`).
   * - `instance-type-specification.supported-instance-type` – The instance types that are compatible with the AMI, as specified by the AMI owner. Values can be individual instance types (for example, `t3.micro`) or wildcard patterns that match multiple instance types (for example, `t3.*`).
   * - `instance-type-specification.unsupported-instance-type` – The instance types that are not compatible with the AMI, as specified by the AMI owner. Values can be individual instance types (for example, `t3.micro`) or wildcard patterns that match multiple instance types (for example, `t3.*`).
   * - `is-public` - A Boolean that indicates whether the image is public.
   * - `kernel-id` - The kernel ID.
   * - `manifest-location` - The location of the image manifest.
   * - `name` - The name of the AMI (provided during image creation).
   * - `owner-alias` - The owner alias (`amazon` | `aws-backup-vault` | `aws-marketplace`). The valid aliases are defined in an Amazon-maintained list. This is not the Amazon Web Services account alias that can be set using the IAM console. We recommend that you use the **Owner** request parameter instead of this filter.
   * - `owner-id` - The Amazon Web Services account ID of the owner. We recommend that you use the **Owner** request parameter instead of this filter.
   * - `platform` - The platform. The only supported value is `windows`.
   * - `product-code` - The product code.
   * - `product-code.type` - The type of the product code (`marketplace`).
   * - `public-ssm-parameter-name` - The name of a public Systems Manager parameter associated with the AMI. The parameter must be in a trusted Amazon Web Services namespace under `aws/service/`. Returns all AMIs that have ever been associated with the parameter, including previous versions.
   * - `ramdisk-id` - The RAM disk ID.
   * - `root-device-name` - The device name of the root device volume (for example, `/dev/sda1`).
   * - `root-device-type` - The type of the root device volume (`ebs` | `instance-store`).
   * - `scan-result.critical-fix-available-since` - The earliest date and time, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), at which Amazon Inspector reported a fix as available for a `critical` severity finding on the AMI.
   * - `scan-result.finding-scan-date` - The date and time, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), of the most recent Amazon Inspector scan of the AMI.
   * - `scan-result.high-fix-available-since` - The earliest date and time, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), at which Amazon Inspector reported a fix as available for a `high` severity finding on the AMI.
   * - `scan-result.highest-finding-severity-label` - The highest severity among the AMI's Amazon Inspector findings, whether or not a fix is available. The valid values are the following Amazon Inspector severity levels:
   *
   *   - `informational` - CVSS score of 0.
   *   - `low` - CVSS score of 0.1 to 3.9.
   *   - `medium` - CVSS score of 4.0 to 6.9.
   *   - `high` - CVSS score of 7.0 to 8.9.
   *   - `critical` - CVSS score of 9.0 to 10.0.
   * - `scan-result.informational-fix-available-since` - The earliest date and time, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), at which Amazon Inspector reported a fix as available for an `informational` severity finding on the AMI.
   * - `scan-result.low-fix-available-since` - The earliest date and time, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), at which Amazon Inspector reported a fix as available for a `low` severity finding on the AMI.
   * - `scan-result.medium-fix-available-since` - The earliest date and time, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), at which Amazon Inspector reported a fix as available for a `medium` severity finding on the AMI.
   * - `source-image-id` - The ID of the source AMI from which the AMI was created.
   * - `source-image-region` - The Region of the source AMI.
   * - `source-instance-id` - The ID of the instance that the AMI was created from if the AMI was created using CreateImage. This filter is applicable only if the AMI was created using [CreateImage](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html).
   * - `state` - The state of the image (`available` | `pending` | `failed`).
   * - `state-reason-code` - The reason code for the state change.
   * - `state-reason-message` - The message for the state change.
   * - `sriov-net-support` - A value of `simple` indicates that enhanced networking with the Intel 82599 VF interface is enabled.
   * - `tag:<key>` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `virtualization-type` - The virtualization type (`paravirtual` | `hvm`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Describes a watermark attached to an AMI.
 *
 * @public
 */
export interface ImageWatermark {
  /**
   * The watermark identifier, in `accountId:watermarkName` format (for example, `123456789012:approvedAmi`). The `accountId` portion is the Amazon Web Services account ID of the watermark creator. The `watermarkName` portion is customer-provided.
   *
   * @public
   */
  WatermarkKey?: string | undefined;

  /**
   * The Region where the watermark was originally attached.
   *
   * @public
   */
  SourceImageRegion?: string | undefined;

  /**
   * The ID of the AMI to which the watermark was originally attached.
   *
   * @public
   */
  SourceImageId?: string | undefined;

  /**
   * The creation date of the source AMI, in the following format: *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*.*ssssss*+*HH*:*MM*.
   *
   * @public
   */
  SourceImageCreationTime?: Date | undefined;

  /**
   * The date and time the watermark was attached to the AMI, in the following format: *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*.*ssssss*+*HH*:*MM*.
   *
   * @public
   */
  WatermarkCreationTime?: Date | undefined;
}

/**
 * An instance type name or wildcard pattern in an instance type specification.
 *
 * @public
 */
export interface InstanceTypeItem {
  /**
   * The instance type or wildcard pattern (for example, `t3.*` or `m5.large`).
   *
   * @public
   */
  InstanceType?: string | undefined;
}

/**
 * Describes the instance type compatibility rules for an AMI, including lists of supported and unsupported instance type patterns.
 *
 * @public
 */
export interface InstanceTypeSpecification {
  /**
   * The instance types that the AMI supports.
   *
   * @public
   */
  SupportedInstanceTypes?: InstanceTypeItem[] | undefined;

  /**
   * The instance types that the AMI does not support.
   *
   * @public
   */
  UnsupportedInstanceTypes?: InstanceTypeItem[] | undefined;
}

/**
 * The Amazon Inspector scan results for an AMI. This information is present only for AMIs that Amazon Inspector has scanned.
 *
 * When you share an AMI with other accounts, organizations, or organizational units (OUs), or make it public, its scan results are available to the accounts that can use the AMI.
 *
 * The fix-available dates are specific to the AMI. Each date reflects when a fix became available for a finding on that AMI, not when the vendor released the fix. As a result, a date can be later than the vendor's release date, and AMIs with the same vulnerability can have different dates.
 *
 * @public
 */
export interface ScanResults {
  /**
   * The highest severity among the AMI's Amazon Inspector findings, whether or not a fix is available.
   *
   * The valid values are the following Amazon Inspector severity levels, which correspond to CVSS score ranges:
   *
   * - `informational` - CVSS score of 0.
   * - `low` - CVSS score of 0.1 to 3.9.
   * - `medium` - CVSS score of 4.0 to 6.9.
   * - `high` - CVSS score of 7.0 to 8.9.
   * - `critical` - CVSS score of 9.0 to 10.0.
   *
   * For more information, see [Software package vulnerability severity](https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html#findings-understanding-package-score) in the *Amazon Inspector User Guide*.
   *
   * This value is present only if the AMI has at least one finding.
   *
   * @public
   */
  HighestFindingSeverityLabel?: SeverityLabel | undefined;

  /**
   * The date and time, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), of the most recent Amazon Inspector scan of the AMI.
   *
   * @public
   */
  FindingScanDate?: Date | undefined;

  /**
   * The earliest date and time, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), at which Amazon Inspector reported a fix as available for an `informational` severity finding on the AMI. This value is present only if the AMI has at least one `informational` severity finding with a fix available. Amazon Inspector recomputes this value on each scan.
   *
   * @public
   */
  InformationalFixAvailableSince?: Date | undefined;

  /**
   * The earliest date and time, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), at which Amazon Inspector reported a fix as available for a `low` severity finding on the AMI. This value is present only if the AMI has at least one `low` severity finding with a fix available. Amazon Inspector recomputes this value on each scan.
   *
   * @public
   */
  LowFixAvailableSince?: Date | undefined;

  /**
   * The earliest date and time, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), at which Amazon Inspector reported a fix as available for a `medium` severity finding on the AMI. This value is present only if the AMI has at least one `medium` severity finding with a fix available. Amazon Inspector recomputes this value on each scan.
   *
   * @public
   */
  MediumFixAvailableSince?: Date | undefined;

  /**
   * The earliest date and time, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), at which Amazon Inspector reported a fix as available for a `high` severity finding on the AMI. This value is present only if the AMI has at least one `high` severity finding with a fix available. Amazon Inspector recomputes this value on each scan.
   *
   * @public
   */
  HighFixAvailableSince?: Date | undefined;

  /**
   * The earliest date and time, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), at which Amazon Inspector reported a fix as available for a `critical` severity finding on the AMI. This value is present only if the AMI has at least one `critical` severity finding with a fix available. Amazon Inspector recomputes this value on each scan.
   *
   * @public
   */
  CriticalFixAvailableSince?: Date | undefined;
}

/**
 * Describes an image.
 *
 * @public
 */
export interface Image {
  /**
   * The platform details associated with the billing code of the AMI. For more information, see [Understand AMI billing information](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  PlatformDetails?: string | undefined;

  /**
   * The operation of the Amazon EC2 instance and the billing code that is associated with the AMI. `usageOperation` corresponds to the [lineitem/Operation](https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#Lineitem-details-O-Operation) column on your Amazon Web Services Cost and Usage Report and in the [Amazon Web Services Price List API](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html). You can view these fields on the **Instances** or **AMIs** pages in the Amazon EC2 console, or in the responses that are returned by the [DescribeImages](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html) command in the Amazon EC2 API, or the [describe-images](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html) command in the CLI.
   *
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * Any block device mapping entries.
   *
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * The description of the AMI that was provided during image creation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether enhanced networking with ENA is enabled.
   *
   * @public
   */
  EnaSupport?: boolean | undefined;

  /**
   * The hypervisor type of the image. Only `xen` is supported. `ovm` is not supported.
   *
   * @public
   */
  Hypervisor?: HypervisorType | undefined;

  /**
   * The owner alias (`amazon` | `aws-backup-vault` | `aws-marketplace`).
   *
   * @public
   */
  ImageOwnerAlias?: string | undefined;

  /**
   * The name of the AMI that was provided during image creation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The device name of the root device volume (for example, `/dev/sda1`).
   *
   * @public
   */
  RootDeviceName?: string | undefined;

  /**
   * The type of root device used by the AMI. The AMI can use an Amazon EBS volume or an instance store volume.
   *
   * @public
   */
  RootDeviceType?: DeviceType | undefined;

  /**
   * Specifies whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
   *
   * @public
   */
  SriovNetSupport?: string | undefined;

  /**
   * The reason for the state change.
   *
   * @public
   */
  StateReason?: StateReason | undefined;

  /**
   * Any tags assigned to the image.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The type of virtualization of the AMI.
   *
   * @public
   */
  VirtualizationType?: VirtualizationType | undefined;

  /**
   * The boot mode of the image. For more information, see [Instance launch behavior with Amazon EC2 boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  BootMode?: BootModeValues | undefined;

  /**
   * If the image is configured for NitroTPM support, the value is `v2.0`. For more information, see [NitroTPM](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  TpmSupport?: TpmSupportValues | undefined;

  /**
   * The date and time to deprecate the AMI, in UTC, in the following format: *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute.
   *
   * @public
   */
  DeprecationTime?: string | undefined;

  /**
   * If `v2.0`, it indicates that IMDSv2 is specified in the AMI. Instances launched from this AMI will have `HttpTokens` automatically set to `required` so that, by default, the instance requires that IMDSv2 is used when requesting instance metadata. In addition, `HttpPutResponseHopLimit` is set to `2`. For more information, see [Configure the AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  ImdsSupport?: ImdsSupportValues | undefined;

  /**
   * The ID of the instance that the AMI was created from if the AMI was created using [CreateImage](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html). This field only appears if the AMI was created using CreateImage.
   *
   * @public
   */
  SourceInstanceId?: string | undefined;

  /**
   * Indicates whether deregistration protection is enabled for the AMI.
   *
   * @public
   */
  DeregistrationProtection?: string | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the AMI was last used to launch an EC2 instance. When the AMI is used to launch an instance, there is a 24-hour delay before that usage is reported.
   *
   * > **Note:** `lastLaunchedTime` data is available starting April 2017.
   *
   * @public
   */
  LastLaunchedTime?: string | undefined;

  /**
   * If `true`, the AMI satisfies the criteria for Allowed AMIs and can be discovered and used in the account. If `false` and Allowed AMIs is set to `enabled`, the AMI can't be discovered or used in the account. If `false` and Allowed AMIs is set to `audit-mode`, the AMI can be discovered and used in the account.
   *
   * For more information, see [Control the discovery and use of AMIs in Amazon EC2 with Allowed AMIs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html) in *Amazon EC2 User Guide*.
   *
   * @public
   */
  ImageAllowed?: boolean | undefined;

  /**
   * The ID of the source AMI from which the AMI was created.
   *
   * @public
   */
  SourceImageId?: string | undefined;

  /**
   * The Region of the source AMI.
   *
   * @public
   */
  SourceImageRegion?: string | undefined;

  /**
   * Indicates whether the image is eligible for Amazon Web Services Free Tier.
   *
   * - If `true`, the AMI is eligible for Free Tier and can be used to launch instances under the Free Tier limits.
   * - If `false`, the AMI is not eligible for Free Tier.
   *
   * @public
   */
  FreeTierEligible?: boolean | undefined;

  /**
   * The name of the public Systems Manager parameter that resolves to this AMI, under the `aws/service/` namespace.
   *
   * @public
   */
  PublicSsmParameterName?: string | undefined;

  /**
   * The watermarks attached to the AMI.
   *
   * @public
   */
  ImageWatermarks?: ImageWatermark[] | undefined;

  /**
   * The Amazon Inspector scan results for the AMI. This information is present only for AMIs that Amazon Inspector has scanned.
   *
   * When you share an AMI with other accounts, organizations, or organizational units (OUs), or make it public, its scan results are available to the accounts that can use the AMI.
   *
   * @public
   */
  ScanResults?: ScanResults | undefined;

  /**
   * The instance type specification for the AMI, which defines which instance types are compatible with this image.
   *
   * @public
   */
  InstanceTypeSpecification?: InstanceTypeSpecification | undefined;

  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The location of the AMI.
   *
   * @public
   */
  ImageLocation?: string | undefined;

  /**
   * The current state of the AMI. If the state is `available`, the image is successfully registered and can be used to launch an instance.
   *
   * @public
   */
  State?: ImageState | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the image.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The date and time the image was created.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * Indicates whether the image has public launch permissions. The value is `true` if this image has public launch permissions or `false` if it has only implicit and explicit launch permissions.
   *
   * @public
   */
  Public?: boolean | undefined;

  /**
   * Any product codes associated with the AMI.
   *
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * The architecture of the image.
   *
   * @public
   */
  Architecture?: ArchitectureValues | undefined;

  /**
   * The type of image.
   *
   * @public
   */
  ImageType?: ImageTypeValues | undefined;

  /**
   * The kernel associated with the image, if any. Only applicable for machine images.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * The RAM disk associated with the image, if any. Only applicable for machine images.
   *
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * This value is set to `windows` for Windows AMIs; otherwise, it is blank.
   *
   * @public
   */
  Platform?: PlatformValues | undefined;
}

/**
 * @public
 */
export interface DescribeImagesResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the images.
   *
   * @public
   */
  Images?: Image[] | undefined;
}

/**
 * @public
 */
export interface DescribeImageUsageReportEntriesRequest {
  /**
   * The IDs of the images for filtering the report entries. If specified, only report entries containing these images are returned.
   *
   * @public
   */
  ImageIds?: string[] | undefined;

  /**
   * The IDs of the usage reports.
   *
   * @public
   */
  ReportIds?: string[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The filters.
   *
   * - `account-id` - A 12-digit Amazon Web Services account ID.
   * - `creation-time` - The time when the report was created, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example, `2025-11-29T11:04:43.305Z`. You can use a wildcard (`*`), for example, `2025-11-29T*`, which matches an entire day.
   * - `resource-type` - The resource type (`ec2:Instance` | `ec2:LaunchTemplate`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A single entry in an image usage report, detailing how an image is being used by a specific Amazon Web Services account and resource type.
 *
 * @public
 */
export interface ImageUsageReportEntry {
  /**
   * The type of resource (`ec2:Instance` or `ec2:LaunchTemplate`).
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The ID of the report.
   *
   * @public
   */
  ReportId?: string | undefined;

  /**
   * The number of times resources of this type reference this image in the account.
   *
   * @public
   */
  UsageCount?: number | undefined;

  /**
   * The ID of the account that uses the image.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID of the image.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The date and time the report creation was initiated.
   *
   * @public
   */
  ReportCreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeImageUsageReportEntriesResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The content of the usage reports.
   *
   * @public
   */
  ImageUsageReportEntries?: ImageUsageReportEntry[] | undefined;
}

/**
 * @public
 */
export interface DescribeImageUsageReportsRequest {
  /**
   * The IDs of the images for filtering the reports. If specified, only reports containing these images are returned.
   *
   * @public
   */
  ImageIds?: string[] | undefined;

  /**
   * The IDs of the image usage reports.
   *
   * @public
   */
  ReportIds?: string[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The filters.
   *
   * - `creation-time` - The time when the report was created, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example, `2025-11-29T11:04:43.305Z`. You can use a wildcard (`*`), for example, `2025-11-29T*`, which matches an entire day.
   * - `state` - The state of the report (`available` | `pending` | `error`).
   * - `tag:<key>` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The options that affect the scope of the report.
 *
 * @public
 */
export interface ImageUsageResourceTypeOption {
  /**
   * The name of the option.
   *
   * @public
   */
  OptionName?: string | undefined;

  /**
   * The number of launch template versions to check.
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
export interface ImageUsageResourceType {
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
  ResourceTypeOptions?: ImageUsageResourceTypeOption[] | undefined;
}

/**
 * The configuration and status of an image usage report.
 *
 * @public
 */
export interface ImageUsageReport {
  /**
   * The ID of the image that was specified when the report was created.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The ID of the report.
   *
   * @public
   */
  ReportId?: string | undefined;

  /**
   * The resource types that were specified when the report was created.
   *
   * @public
   */
  ResourceTypes?: ImageUsageResourceType[] | undefined;

  /**
   * The IDs of the Amazon Web Services accounts that were specified when the report was created.
   *
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * The current state of the report. Possible values:
   *
   * - `available` - The report is available to view.
   * - `pending` - The report is being created and not available to view.
   * - `error` - The report could not be created.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * Provides additional details when the report is in an `error` state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The date and time when the report was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time when Amazon EC2 will delete the report (30 days after the report was created).
   *
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * Any tags assigned to the report.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeImageUsageReportsResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The image usage reports.
   *
   * @public
   */
  ImageUsageReports?: ImageUsageReport[] | undefined;
}

/**
 * @public
 */
export interface DescribeImportImageTasksRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Filter tasks using the `task-state` filter and one of the following values: `active`, `completed`, `deleting`, or `deleted`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The IDs of the import image tasks.
   *
   * @public
   */
  ImportTaskIds?: string[] | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token that indicates the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The response information for license configurations.
 *
 * @public
 */
export interface ImportImageLicenseConfigurationResponse {
  /**
   * The ARN of a license configuration.
   *
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * Describes the Amazon S3 bucket for the disk image.
 *
 * @public
 */
export interface UserBucketDetails {
  /**
   * The Amazon S3 bucket from which the disk image was created.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The file name of the disk image.
   *
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * Describes the snapshot created from the imported disk.
 *
 * @public
 */
export interface SnapshotDetail {
  /**
   * A description for the snapshot.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The block device mapping for the snapshot.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * The size of the disk in the snapshot, in GiB.
   *
   * @public
   */
  DiskImageSize?: number | undefined;

  /**
   * The format of the disk image from which the snapshot is created.
   *
   * @public
   */
  Format?: string | undefined;

  /**
   * The percentage of progress for the task.
   *
   * @public
   */
  Progress?: string | undefined;

  /**
   * The snapshot ID of the disk being imported.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * A brief status of the snapshot creation.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * A detailed status message for the snapshot creation.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The URL used to access the disk image.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The Amazon S3 bucket for the disk image.
   *
   * @public
   */
  UserBucket?: UserBucketDetails | undefined;
}

/**
 * Describes an import image task.
 *
 * @public
 */
export interface ImportImageTask {
  /**
   * The architecture of the virtual machine.
   *
   * Valid values: `i386` | `x86_64` | `arm64`
   *
   * @public
   */
  Architecture?: string | undefined;

  /**
   * A description of the import task.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether the image is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The target hypervisor for the import task.
   *
   * Valid values: `xen`
   *
   * @public
   */
  Hypervisor?: string | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) of the imported virtual machine.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The ID of the import image task.
   *
   * @public
   */
  ImportTaskId?: string | undefined;

  /**
   * The identifier for the KMS key that was used to create the encrypted image.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The license type of the virtual machine.
   *
   * @public
   */
  LicenseType?: string | undefined;

  /**
   * The description string for the import image task.
   *
   * @public
   */
  Platform?: string | undefined;

  /**
   * The percentage of progress of the import image task.
   *
   * @public
   */
  Progress?: string | undefined;

  /**
   * Information about the snapshots.
   *
   * @public
   */
  SnapshotDetails?: SnapshotDetail[] | undefined;

  /**
   * A brief status for the import image task.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * A descriptive status message for the import image task.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The tags for the import image task.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ARNs of the license configurations that are associated with the import image task.
   *
   * @public
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationResponse[] | undefined;

  /**
   * The usage operation value.
   *
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * The boot mode of the virtual machine.
   *
   * @public
   */
  BootMode?: BootModeValues | undefined;
}

/**
 * @public
 */
export interface DescribeImportImageTasksResult {
  /**
   * A list of zero or more import image tasks that are currently active or were completed or canceled in the previous 7 days.
   *
   * @public
   */
  ImportImageTasks?: ImportImageTask[] | undefined;

  /**
   * The token to use to get the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImportSnapshotTasksRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * A list of import snapshot task IDs.
   *
   * @public
   */
  ImportTaskIds?: string[] | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token that indicates the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Details about the import snapshot task.
 *
 * @public
 */
export interface SnapshotTaskDetail {
  /**
   * The description of the disk image being imported.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The size of the disk in the snapshot, in GiB.
   *
   * @public
   */
  DiskImageSize?: number | undefined;

  /**
   * Indicates whether the snapshot is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The format of the disk image from which the snapshot is created.
   *
   * @public
   */
  Format?: string | undefined;

  /**
   * The identifier for the KMS key that was used to create the encrypted snapshot.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The percentage of completion for the import snapshot task.
   *
   * @public
   */
  Progress?: string | undefined;

  /**
   * The snapshot ID of the disk being imported.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * A brief status for the import snapshot task.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * A detailed status message for the import snapshot task.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The URL of the disk image from which the snapshot is created.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The Amazon S3 bucket for the disk image.
   *
   * @public
   */
  UserBucket?: UserBucketDetails | undefined;
}

/**
 * Describes an import snapshot task.
 *
 * @public
 */
export interface ImportSnapshotTask {
  /**
   * A description of the import snapshot task.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the import snapshot task.
   *
   * @public
   */
  ImportTaskId?: string | undefined;

  /**
   * Describes an import snapshot task.
   *
   * @public
   */
  SnapshotTaskDetail?: SnapshotTaskDetail | undefined;

  /**
   * The tags for the import snapshot task.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeImportSnapshotTasksResult {
  /**
   * A list of zero or more import snapshot tasks that are currently active or were completed or canceled in the previous 7 days.
   *
   * @public
   */
  ImportSnapshotTasks?: ImportSnapshotTask[] | undefined;

  /**
   * The token to use to get the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceAttributeRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
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
   * The instance attribute.
   *
   * Note that the `enaSupport` attribute is not supported.
   *
   * @public
   */
  Attribute: InstanceAttributeName | undefined;
}

/**
 * Describes a parameter used to set up an EBS volume in a block device mapping.
 *
 * @public
 */
export interface EbsInstanceBlockDevice {
  /**
   * The time stamp when the attachment initiated.
   *
   * @public
   */
  AttachTime?: Date | undefined;

  /**
   * Indicates whether the volume is deleted on instance termination.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The attachment state.
   *
   * @public
   */
  Status?: AttachmentStatus | undefined;

  /**
   * The ID of the EBS volume.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The ARN of the Amazon Web Services-managed resource to which the volume is attached.
   *
   * @public
   */
  AssociatedResource?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the volume.
   *
   * This parameter is returned only for volumes that are attached to Amazon Web Services-managed resources.
   *
   * @public
   */
  VolumeOwnerId?: string | undefined;

  /**
   * The service provider that manages the EBS volume.
   *
   * @public
   */
  Operator?: OperatorResponse | undefined;

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
export interface InstanceBlockDeviceMapping {
  /**
   * The device name.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * Parameters used to automatically set up EBS volumes when the instance is launched.
   *
   * @public
   */
  Ebs?: EbsInstanceBlockDevice | undefined;
}

/**
 * Describes a value for a resource attribute that is a Boolean value.
 *
 * @public
 */
export interface AttributeBooleanValue {
  /**
   * The attribute value. The valid values are `true` or `false`.
   *
   * @public
   */
  Value?: boolean | undefined;
}

/**
 * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
 *
 * @public
 */
export interface EnclaveOptions {
  /**
   * If this parameter is set to `true`, the instance is enabled for Amazon Web Services Nitro Enclaves; otherwise, it is not enabled for Amazon Web Services Nitro Enclaves.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Describes an instance attribute.
 *
 * @public
 */
export interface InstanceAttribute {
  /**
   * The block device mapping of the instance.
   *
   * @public
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;

  /**
   * Indicates whether termination protection is enabled. If the value is `true`, you can't terminate the instance using the Amazon EC2 console, command line tools, or API.
   *
   * @public
   */
  DisableApiTermination?: AttributeBooleanValue | undefined;

  /**
   * Indicates whether enhanced networking with ENA is enabled.
   *
   * @public
   */
  EnaSupport?: AttributeBooleanValue | undefined;

  /**
   * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
   *
   * @public
   */
  EnclaveOptions?: EnclaveOptions | undefined;

  /**
   * Indicates whether the instance is optimized for Amazon EBS I/O.
   *
   * @public
   */
  EbsOptimized?: AttributeBooleanValue | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
   *
   * @public
   */
  InstanceInitiatedShutdownBehavior?: AttributeValue | undefined;

  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: AttributeValue | undefined;

  /**
   * The kernel ID.
   *
   * @public
   */
  KernelId?: AttributeValue | undefined;

  /**
   * The product codes.
   *
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * The RAM disk ID.
   *
   * @public
   */
  RamdiskId?: AttributeValue | undefined;

  /**
   * The device name of the root device volume (for example, `/dev/sda1`).
   *
   * @public
   */
  RootDeviceName?: AttributeValue | undefined;

  /**
   * Indicates whether source/destination checks are enabled.
   *
   * @public
   */
  SourceDestCheck?: AttributeBooleanValue | undefined;

  /**
   * Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
   *
   * @public
   */
  SriovNetSupport?: AttributeValue | undefined;

  /**
   * The user data.
   *
   * @public
   */
  UserData?: AttributeValue | undefined;

  /**
   * Indicates whether stop protection is enabled for the instance.
   *
   * @public
   */
  DisableApiStop?: AttributeBooleanValue | undefined;

  /**
   * The security groups associated with the instance.
   *
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceConnectEndpointsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters.
   *
   * - `instance-connect-endpoint-id` - The ID of the EC2 Instance Connect Endpoint.
   * - `state` - The state of the EC2 Instance Connect Endpoint (`create-in-progress` | `create-complete` | `create-failed` | `delete-in-progress` | `delete-complete` | `delete-failed`).
   * - `subnet-id` - The ID of the subnet in which the EC2 Instance Connect Endpoint was created.
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `tag-value` - The value of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific value, regardless of tag key.
   * - `vpc-id` - The ID of the VPC in which the EC2 Instance Connect Endpoint was created.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * One or more EC2 Instance Connect Endpoint IDs.
   *
   * @public
   */
  InstanceConnectEndpointIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceConnectEndpointsResult {
  /**
   * Information about the EC2 Instance Connect Endpoints.
   *
   * @public
   */
  InstanceConnectEndpoints?: Ec2InstanceConnectEndpoint[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceCreditSpecificationsRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `instance-id` - The ID of the instance.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The instance IDs.
   *
   * Default: Describes all your instances.
   *
   * Constraints: Maximum 1000 explicitly specified instance IDs.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * You cannot specify this parameter and the instance IDs parameter in the same call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the credit option for CPU usage of a burstable performance instance.
 *
 * @public
 */
export interface InstanceCreditSpecification {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The credit option for CPU usage of the instance.
   *
   * Valid values: `standard` | `unlimited`
   *
   * @public
   */
  CpuCredits?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceCreditSpecificationsResult {
  /**
   * Information about the credit option for CPU usage of an instance.
   *
   * @public
   */
  InstanceCreditSpecifications?: InstanceCreditSpecification[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceEventNotificationAttributesRequest {
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
export interface DescribeInstanceEventNotificationAttributesResult {
  /**
   * Information about the registered tag keys.
   *
   * @public
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute | undefined;
}

/**
 * Describe instance event windows by InstanceEventWindow.
 *
 * @public
 */
export interface DescribeInstanceEventWindowsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the event windows.
   *
   * @public
   */
  InstanceEventWindowIds?: string[] | undefined;

  /**
   * One or more filters.
   *
   * - `dedicated-host-id` - The event windows associated with the specified Dedicated Host ID.
   * - `event-window-name` - The event windows associated with the specified names.
   * - `instance-id` - The event windows associated with the specified instance ID.
   * - `instance-tag` - The event windows associated with the specified tag and value.
   * - `instance-tag-key` - The event windows associated with the specified tag key, regardless of the value.
   * - `instance-tag-value` - The event windows associated with the specified tag value, regardless of the key.
   * - `tag:<key>` - The key/value combination of a tag assigned to the event window. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `CMX`, specify `tag:Owner` for the filter name and `CMX` for the filter value.
   * - `tag-key` - The key of a tag assigned to the event window. Use this filter to find all event windows that have a tag with a specific key, regardless of the tag value.
   * - `tag-value` - The value of a tag assigned to the event window. Use this filter to find all event windows that have a tag with a specific value, regardless of the tag key.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `NextToken` value. This value can be between 20 and 500. You cannot specify this parameter and the event window IDs parameter in the same call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceEventWindowsResult {
  /**
   * Information about the event windows.
   *
   * @public
   */
  InstanceEventWindows?: InstanceEventWindow[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceImageMetadataRequest {
  /**
   * The filters.
   *
   * - `availability-zone` - The name of the Availability Zone (for example, `us-west-2a`) or Local Zone (for example, `us-west-2-lax-1b`) of the instance.
   * - `instance-id` - The ID of the instance.
   * - `image-allowed` - A Boolean that indicates whether the image meets the criteria specified for Allowed AMIs.
   * - `instance-state-name` - The state of the instance (`pending` | `running` | `shutting-down` | `terminated` | `stopping` | `stopped`).
   * - `instance-type` - The type of instance (for example, `t3.micro`).
   * - `launch-time` - The time when the instance was launched, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example, `2023-09-29T11:04:43.305Z`. You can use a wildcard (`*`), for example, `2023-09-29T*`, which matches an entire day.
   * - `owner-alias` - The owner alias (`amazon` | `aws-marketplace` | `aws-backup-vault`). The valid aliases are defined in an Amazon-maintained list. This is not the Amazon Web Services account alias that can be set using the IAM console. We recommend that you use the `Owner` request parameter instead of this filter.
   * - `owner-id` - The Amazon Web Services account ID of the owner. We recommend that you use the `Owner` request parameter instead of this filter.
   * - `tag:<key>` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `zone-id` - The ID of the Availability Zone (for example, `usw2-az2`) or Local Zone (for example, `usw2-lax1-az1`) of the instance.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The instance IDs.
   *
   * If you don't specify an instance ID or filters, the output includes information for all instances.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * Default: 1000
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about the AMI.
 *
 * @public
 */
export interface ImageMetadata {
  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The name of the AMI.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the AMI.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The current state of the AMI. If the state is `available`, the AMI is successfully registered and can be used to launch an instance.
   *
   * @public
   */
  State?: ImageState | undefined;

  /**
   * The alias of the AMI owner.
   *
   * Valid values: `amazon` | `aws-backup-vault` | `aws-marketplace`
   *
   * @public
   */
  ImageOwnerAlias?: string | undefined;

  /**
   * The date and time the AMI was created.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The deprecation date and time of the AMI, in UTC, in the following format: *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z.
   *
   * @public
   */
  DeprecationTime?: string | undefined;

  /**
   * If `true`, the AMI satisfies the criteria for Allowed AMIs and can be discovered and used in the account. If `false`, the AMI can't be discovered or used in the account.
   *
   * For more information, see [Control the discovery and use of AMIs in Amazon EC2 with Allowed AMIs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html) in *Amazon EC2 User Guide*.
   *
   * @public
   */
  ImageAllowed?: boolean | undefined;

  /**
   * Indicates whether the AMI has public launch permissions. A value of `true` means this AMI has public launch permissions, while `false` means it has only implicit (AMI owner) or explicit (shared with your account) launch permissions.
   *
   * @public
   */
  IsPublic?: boolean | undefined;

  /**
   * The watermarks attached to the AMI.
   *
   * @public
   */
  ImageWatermarks?: ImageWatermark[] | undefined;
}

/**
 * Describes the current state of an instance.
 *
 * @public
 */
export interface InstanceState {
  /**
   * The state of the instance as a 16-bit unsigned integer.
   *
   * The high byte is all of the bits between 2^8 and (2^16)-1, which equals decimal values between 256 and 65,535. These numerical values are used for internal purposes and should be ignored.
   *
   * The low byte is all of the bits between 2^0 and (2^8)-1, which equals decimal values between 0 and 255.
   *
   * The valid values for instance-state-code will all be in the range of the low byte and they are:
   *
   * - `0` : `pending`
   * - `16` : `running`
   * - `32` : `shutting-down`
   * - `48` : `terminated`
   * - `64` : `stopping`
   * - `80` : `stopped`
   *
   * You can ignore the high byte value by zeroing out all of the bits above 2^8 or 256 in decimal.
   *
   * @public
   */
  Code?: number | undefined;

  /**
   * The current state of the instance.
   *
   * @public
   */
  Name?: InstanceStateName | undefined;
}

/**
 * Information about the instance and the AMI used to launch the instance.
 *
 * @public
 */
export interface InstanceImageMetadata {
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
  InstanceType?: _InstanceType | undefined;

  /**
   * The time the instance was launched.
   *
   * @public
   */
  LaunchTime?: Date | undefined;

  /**
   * The Availability Zone or Local Zone of the instance.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone or Local Zone of the instance.
   *
   * @public
   */
  ZoneId?: string | undefined;

  /**
   * The current state of the instance.
   *
   * @public
   */
  State?: InstanceState | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the instance.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Any tags assigned to the instance.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Information about the AMI used to launch the instance.
   *
   * @public
   */
  ImageMetadata?: ImageMetadata | undefined;

  /**
   * The entity that manages the instance.
   *
   * @public
   */
  Operator?: OperatorResponse | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceImageMetadataResult {
  /**
   * Information about the instance and the AMI used to launch the instance.
   *
   * @public
   */
  InstanceImageMetadata?: InstanceImageMetadata[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstancesRequest {
  /**
   * The instance IDs.
   *
   * Default: Describes all your instances.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * Indicates whether to include managed resources in the output. If this parameter is set to `true`, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.
   *
   * @public
   */
  IncludeManagedResources?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `affinity` - The affinity setting for an instance running on a Dedicated Host (`default` | `host`).
   * - `architecture` - The instance architecture (`i386` | `x86_64` | `arm64`).
   * - `availability-zone` - The Availability Zone of the instance.
   * - `availability-zone-id` - The ID of the Availability Zone of the instance.
   * - `block-device-mapping.attach-time` - The attach time for an EBS volume mapped to the instance, for example, `2022-09-15T17:15:20.000Z`.
   * - `block-device-mapping.delete-on-termination` - A Boolean that indicates whether the EBS volume is deleted on instance termination.
   * - `block-device-mapping.device-name` - The device name specified in the block device mapping (for example, `/dev/sdh` or `xvdh`).
   * - `block-device-mapping.status` - The status for the EBS volume (`attaching` | `attached` | `detaching` | `detached`).
   * - `block-device-mapping.volume-id` - The volume ID of the EBS volume.
   * - `boot-mode` - The boot mode that was specified by the AMI (`legacy-bios` | `uefi` | `uefi-preferred`).
   * - `capacity-reservation-id` - The ID of the Capacity Reservation into which the instance was launched.
   * - `capacity-reservation-specification.capacity-reservation-preference` - The instance's Capacity Reservation preference (`open` | `none`).
   * - `capacity-reservation-specification.capacity-reservation-target.capacity-reservation-id` - The ID of the targeted Capacity Reservation.
   * - `capacity-reservation-specification.capacity-reservation-target.capacity-reservation-resource-group-arn` - The ARN of the targeted Capacity Reservation group.
   * - `client-token` - The idempotency token you provided when you launched the instance.
   * - `current-instance-boot-mode` - The boot mode that is used to launch the instance at launch or start (`legacy-bios` | `uefi`).
   * - `dns-name` - The public DNS name of the instance.
   * - `ebs-optimized` - A Boolean that indicates whether the instance is optimized for Amazon EBS I/O.
   * - `ena-support` - A Boolean that indicates whether the instance is enabled for enhanced networking with ENA.
   * - `enclave-options.enabled` - A Boolean that indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
   * - `hibernation-options.configured` - A Boolean that indicates whether the instance is enabled for hibernation. A value of `true` means that the instance is enabled for hibernation.
   * - `host-id` - The ID of the Dedicated Host on which the instance is running, if applicable.
   * - `hypervisor` - The hypervisor type of the instance (`ovm` | `xen`). The value `xen` is used for both Xen and Nitro hypervisors.
   * - `iam-instance-profile.arn` - The instance profile associated with the instance. Specified as an ARN.
   * - `iam-instance-profile.id` - The instance profile associated with the instance. Specified as an ID.
   * - `image-id` - The ID of the image used to launch the instance.
   * - `instance-id` - The ID of the instance.
   * - `instance-lifecycle` - Indicates whether this is a Spot Instance, a Scheduled Instance, or a Capacity Block (`spot` | `scheduled` | `capacity-block`).
   * - `instance-state-code` - The state of the instance, as a 16-bit unsigned integer. The high byte is used for internal purposes and should be ignored. The low byte is set based on the state represented. The valid values are: 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64 (stopping), and 80 (stopped).
   * - `instance-state-name` - The state of the instance (`pending` | `running` | `shutting-down` | `terminated` | `stopping` | `stopped`).
   * - `instance-type` - The type of instance (for example, `t2.micro`).
   * - `instance.group-id` - The ID of the security group for the instance.
   * - `instance.group-name` - The name of the security group for the instance.
   * - `ip-address` - The public IPv4 address of the instance.
   * - `ipv6-address` - The IPv6 address of the instance.
   * - `kernel-id` - The kernel ID.
   * - `key-name` - The name of the key pair used when the instance was launched.
   * - `launch-index` - When launching multiple instances, this is the index for the instance in the launch group (for example, 0, 1, 2, and so on).
   * - `launch-time` - The time when the instance was launched, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example, `2021-09-29T11:04:43.305Z`. You can use a wildcard (`*`), for example, `2021-09-29T*`, which matches an entire day.
   * - `maintenance-options.auto-recovery` - The current automatic recovery behavior of the instance (`disabled` | `default`).
   * - `metadata-options.http-endpoint` - The status of access to the HTTP metadata endpoint on your instance (`enabled` | `disabled`)
   * - `metadata-options.http-protocol-ipv4` - Indicates whether the IPv4 endpoint is enabled (`disabled` | `enabled`).
   * - `metadata-options.http-protocol-ipv6` - Indicates whether the IPv6 endpoint is enabled (`disabled` | `enabled`).
   * - `metadata-options.http-put-response-hop-limit` - The HTTP metadata request put response hop limit (integer, possible values `1` to `64`)
   * - `metadata-options.http-tokens` - The metadata request authorization state (`optional` | `required`)
   * - `metadata-options.instance-metadata-tags` - The status of access to instance tags from the instance metadata (`enabled` | `disabled`)
   * - `metadata-options.state` - The state of the metadata option changes (`pending` | `applied`).
   * - `monitoring-state` - Indicates whether detailed monitoring is enabled (`disabled` | `enabled`).
   * - `network-interface.addresses.association.allocation-id` - The allocation ID.
   * - `network-interface.addresses.association.association-id` - The association ID.
   * - `network-interface.addresses.association.carrier-ip` - The carrier IP address.
   * - `network-interface.addresses.association.customer-owned-ip` - The customer-owned IP address.
   * - `network-interface.addresses.association.ip-owner-id` - The owner ID of the private IPv4 address associated with the network interface.
   * - `network-interface.addresses.association.public-dns-name` - The public DNS name.
   * - `network-interface.addresses.association.public-ip` - The ID of the association of an Elastic IP address (IPv4) with a network interface.
   * - `network-interface.addresses.primary` - Specifies whether the IPv4 address of the network interface is the primary private IPv4 address.
   * - `network-interface.addresses.private-dns-name` - The private DNS name.
   * - `network-interface.addresses.private-ip-address` - The private IPv4 address associated with the network interface.
   * - `network-interface.association.allocation-id` - The allocation ID returned when you allocated the Elastic IP address (IPv4) for your network interface.
   * - `network-interface.association.association-id` - The association ID returned when the network interface was associated with an IPv4 address.
   * - `network-interface.association.carrier-ip` - The customer-owned IP address.
   * - `network-interface.association.customer-owned-ip` - The customer-owned IP address.
   * - `network-interface.association.ip-owner-id` - The owner of the Elastic IP address (IPv4) associated with the network interface.
   * - `network-interface.association.public-dns-name` - The public DNS name.
   * - `network-interface.association.public-ip` - The address of the Elastic IP address (IPv4) bound to the network interface.
   * - `network-interface.attachment.attach-time` - The time that the network interface was attached to an instance.
   * - `network-interface.attachment.attachment-id` - The ID of the interface attachment.
   * - `network-interface.attachment.delete-on-termination` - Specifies whether the attachment is deleted when an instance is terminated.
   * - `network-interface.attachment.device-index` - The device index to which the network interface is attached.
   * - `network-interface.attachment.instance-id` - The ID of the instance to which the network interface is attached.
   * - `network-interface.attachment.instance-owner-id` - The owner ID of the instance to which the network interface is attached.
   * - `network-interface.attachment.network-card-index` - The index of the network card.
   * - `network-interface.attachment.status` - The status of the attachment (`attaching` | `attached` | `detaching` | `detached`).
   * - `network-interface.availability-zone` - The Availability Zone for the network interface.
   * - `network-interface.deny-all-igw-traffic` - A Boolean that indicates whether a network interface with an IPv6 address is unreachable from the public internet.
   * - `network-interface.description` - The description of the network interface.
   * - `network-interface.group-id` - The ID of a security group associated with the network interface.
   * - `network-interface.group-name` - The name of a security group associated with the network interface.
   * - `network-interface.ipv4-prefixes.ipv4-prefix` - The IPv4 prefixes that are assigned to the network interface.
   * - `network-interface.ipv6-address` - The IPv6 address associated with the network interface.
   * - `network-interface.ipv6-addresses.ipv6-address` - The IPv6 address associated with the network interface.
   * - `network-interface.ipv6-addresses.is-primary-ipv6` - A Boolean that indicates whether this is the primary IPv6 address.
   * - `network-interface.ipv6-native` - A Boolean that indicates whether this is an IPv6 only network interface.
   * - `network-interface.ipv6-prefixes.ipv6-prefix` - The IPv6 prefix assigned to the network interface.
   * - `network-interface.mac-address` - The MAC address of the network interface.
   * - `network-interface.network-interface-id` - The ID of the network interface.
   * - `network-interface.operator.managed` - A Boolean that indicates whether the instance has a managed network interface.
   * - `network-interface.operator.principal` - The principal that manages the network interface. Only valid for instances with managed network interfaces, where `managed` is `true`.
   * - `network-interface.outpost-arn` - The ARN of the Outpost.
   * - `network-interface.owner-id` - The ID of the owner of the network interface.
   * - `network-interface.private-dns-name` - The private DNS name of the network interface.
   * - `network-interface.private-ip-address` - The private IPv4 address.
   * - `network-interface.public-dns-name` - The public DNS name.
   * - `network-interface.requester-id` - The requester ID for the network interface.
   * - `network-interface.requester-managed` - Indicates whether the network interface is being managed by Amazon Web Services.
   * - `network-interface.status` - The status of the network interface (`available`) | `in-use`).
   * - `network-interface.source-dest-check` - Whether the network interface performs source/destination checking. A value of `true` means that checking is enabled, and `false` means that checking is disabled. The value must be `false` for the network interface to perform network address translation (NAT) in your VPC.
   * - `network-interface.subnet-id` - The ID of the subnet for the network interface.
   * - `network-interface.tag-key` - The key of a tag assigned to the network interface.
   * - `network-interface.tag-value` - The value of a tag assigned to the network interface.
   * - `network-interface.vpc-id` - The ID of the VPC for the network interface.
   * - `network-performance-options.bandwidth-weighting` - Where the performance boost is applied, if applicable. Valid values: `default`, `vpc-1`, `ebs-1`.
   * - `operator.managed` - A Boolean that indicates whether this is a managed instance.
   * - `operator.principal` - The principal that manages the instance. Only valid for managed instances, where `managed` is `true`.
   * - `outpost-arn` - The Amazon Resource Name (ARN) of the Outpost.
   * - `owner-id` - The Amazon Web Services account ID of the instance owner.
   * - `placement-group-name` - The name of the placement group for the instance.
   * - `placement-partition-number` - The partition in which the instance is located.
   * - `platform` - The platform. To list only Windows instances, use `windows`.
   * - `platform-details` - The platform (`Linux/UNIX` | `Red Hat BYOL Linux` | `Red Hat Enterprise Linux` | `Red Hat Enterprise Linux with HA` | `Red Hat Enterprise Linux with High Availability` | `Red Hat Enterprise Linux with SQL Server Standard and HA` | `Red Hat Enterprise Linux with SQL Server Enterprise and HA` | `Red Hat Enterprise Linux with SQL Server Standard` | `Red Hat Enterprise Linux with SQL Server Web` | `Red Hat Enterprise Linux with SQL Server Enterprise` | `SQL Server Enterprise` | `SQL Server Standard` | `SQL Server Web` | `SUSE Linux` | `Ubuntu Pro` | `Windows` | `Windows BYOL` | `Windows with SQL Server Enterprise` | `Windows with SQL Server Standard` | `Windows with SQL Server Web`).
   * - `private-dns-name` - The private IPv4 DNS name of the instance.
   * - `private-dns-name-options.enable-resource-name-dns-a-record` - A Boolean that indicates whether to respond to DNS queries for instance hostnames with DNS A records.
   * - `private-dns-name-options.enable-resource-name-dns-aaaa-record` - A Boolean that indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
   * - `private-dns-name-options.hostname-type` - The type of hostname (`ip-name` | `resource-name`).
   * - `private-ip-address` - The private IPv4 address of the instance. This can only be used to filter by the primary IP address of the network interface attached to the instance. To filter by additional IP addresses assigned to the network interface, use the filter `network-interface.addresses.private-ip-address`.
   * - `product-code` - The product code associated with the AMI used to launch the instance.
   * - `product-code.type` - The type of product code (`devpay` | `marketplace`).
   * - `ramdisk-id` - The RAM disk ID.
   * - `reason` - The reason for the current state of the instance (for example, shows "User Initiated [date]" when you stop or terminate the instance). Similar to the state-reason-code filter.
   * - `requester-id` - The ID of the entity that launched the instance on your behalf (for example, Amazon Web Services Management Console, Auto Scaling, and so on).
   * - `reservation-id` - The ID of the instance's reservation. A reservation ID is created any time you launch an instance. A reservation ID has a one-to-one relationship with an instance launch request, but can be associated with more than one instance if you launch multiple instances using the same launch request. For example, if you launch one instance, you get one reservation ID. If you launch ten instances using the same launch request, you also get one reservation ID.
   * - `root-device-name` - The device name of the root device volume (for example, `/dev/sda1`).
   * - `root-device-type` - The type of the root device volume (`ebs` | `instance-store`).
   * - `source-dest-check` - Indicates whether the instance performs source/destination checking. A value of `true` means that checking is enabled, and `false` means that checking is disabled. The value must be `false` for the instance to perform network address translation (NAT) in your VPC.
   * - `spot-instance-request-id` - The ID of the Spot Instance request.
   * - `state-reason-code` - The reason code for the state change.
   * - `state-reason-message` - A message that describes the state change.
   * - `subnet-id` - The ID of the subnet for the instance.
   * - `tag:<key>` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.
   * - `tenancy` - The tenancy of an instance (`dedicated` | `default` | `host`).
   * - `tpm-support` - Indicates if the instance is configured for NitroTPM support (`v2.0`).
   * - `usage-operation` - The usage operation value for the instance (`RunInstances` | `RunInstances:00g0` | `RunInstances:0010` | `RunInstances:1010` | `RunInstances:1014` | `RunInstances:1110` | `RunInstances:0014` | `RunInstances:0210` | `RunInstances:0110` | `RunInstances:0100` | `RunInstances:0004` | `RunInstances:0200` | `RunInstances:000g` | `RunInstances:0g00` | `RunInstances:0002` | `RunInstances:0800` | `RunInstances:0102` | `RunInstances:0006` | `RunInstances:0202`).
   * - `usage-operation-update-time` - The time that the usage operation was last updated, for example, `2022-09-15T17:15:20.000Z`.
   * - `virtualization-type` - The virtualization type of the instance (`paravirtual` | `hvm`).
   * - `vpc-id` - The ID of the VPC that the instance is running in.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * You cannot specify this parameter and the instance IDs parameter in the same request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes the instance's Capacity Reservation targeting preferences. The action returns the `capacityReservationPreference` response element if the instance is configured to run in On-Demand capacity, or if it is configured in run in any `open` Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). The action returns the `capacityReservationTarget` response element if the instance explicily targets a specific Capacity Reservation or Capacity Reservation group.
 *
 * @public
 */
export interface CapacityReservationSpecificationResponse {
  /**
   * Describes the instance's Capacity Reservation preferences. Possible preferences include:
   *
   * - `open` - The instance can run in any `open` Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
   * - `none` - The instance avoids running in a Capacity Reservation even if one is available. The instance runs in On-Demand capacity.
   *
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * Information about the targeted Capacity Reservation or Capacity Reservation group.
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
export interface CpuOptions {
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
   * Indicates whether the instance is enabled for AMD SEV-SNP. For more information, see [AMD SEV-SNP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html).
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
 * > **Note:** Amazon Elastic Graphics reached end of life on January 8, 2024.
 *
 * Describes the association between an instance and an Elastic Graphics accelerator.
 *
 * @public
 */
export interface ElasticGpuAssociation {
  /**
   * The ID of the Elastic Graphics accelerator.
   *
   * @public
   */
  ElasticGpuId?: string | undefined;

  /**
   * The ID of the association.
   *
   * @public
   */
  ElasticGpuAssociationId?: string | undefined;

  /**
   * The state of the association between the instance and the Elastic Graphics accelerator.
   *
   * @public
   */
  ElasticGpuAssociationState?: string | undefined;

  /**
   * The time the Elastic Graphics accelerator was associated with the instance.
   *
   * @public
   */
  ElasticGpuAssociationTime?: string | undefined;
}

/**
 * > **Note:** Amazon Elastic Inference is no longer available.
 *
 * Describes the association between an instance and an elastic inference accelerator.
 *
 * @public
 */
export interface ElasticInferenceAcceleratorAssociation {
  /**
   * The Amazon Resource Name (ARN) of the elastic inference accelerator.
   *
   * @public
   */
  ElasticInferenceAcceleratorArn?: string | undefined;

  /**
   * The ID of the association.
   *
   * @public
   */
  ElasticInferenceAcceleratorAssociationId?: string | undefined;

  /**
   * The state of the elastic inference accelerator.
   *
   * @public
   */
  ElasticInferenceAcceleratorAssociationState?: string | undefined;

  /**
   * The time at which the elastic inference accelerator is associated with an instance.
   *
   * @public
   */
  ElasticInferenceAcceleratorAssociationTime?: Date | undefined;
}

/**
 * Indicates whether your instance is configured for hibernation. This parameter is valid only if the instance meets the [hibernation prerequisites](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html). For more information, see [Hibernate your Amazon EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface HibernationOptions {
  /**
   * If `true`, your instance is enabled for hibernation; otherwise, it is not enabled for hibernation.
   *
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * Describes a license configuration.
 *
 * @public
 */
export interface LicenseConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the license configuration.
   *
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * The maintenance options for the instance.
 *
 * @public
 */
export interface InstanceMaintenanceOptions {
  /**
   * Provides information on the current automatic recovery behavior of your instance.
   *
   * @public
   */
  AutoRecovery?: InstanceAutoRecoveryState | undefined;

  /**
   * Specifies whether to attempt reboot migration during a user-initiated reboot of an instance that has a scheduled `system-reboot` event:
   *
   * - `default` - Amazon EC2 attempts to migrate the instance to new hardware (reboot migration). If successful, the `system-reboot` event is cleared. If unsuccessful, an in-place reboot occurs and the event remains scheduled.
   * - `disabled` - Amazon EC2 keeps the instance on the same hardware (in-place reboot). The `system-reboot` event remains scheduled.
   *
   * This setting only applies to supported instances that have a scheduled reboot event. For more information, see [Enable or disable reboot migration](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/schedevents_actions_reboot.html#reboot-migration) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  RebootMigration?: InstanceRebootMigrationState | undefined;
}

/**
 * The metadata options for the instance.
 *
 * @public
 */
export interface InstanceMetadataOptionsResponse {
  /**
   * The state of the metadata option changes.
   *
   * `pending` - The metadata options are being updated and the instance is not ready to process metadata traffic with the new selection.
   *
   * `applied` - The metadata options have been successfully applied on the instance.
   *
   * @public
   */
  State?: InstanceMetadataOptionsState | undefined;

  /**
   * Indicates whether IMDSv2 is required.
   *
   * - `optional` - IMDSv2 is optional, which means that you can use either IMDSv2 or IMDSv1.
   * - `required` - IMDSv2 is required, which means that IMDSv1 is disabled, and you must use IMDSv2.
   *
   * @public
   */
  HttpTokens?: HttpTokensState | undefined;

  /**
   * The maximum number of hops that the metadata token can travel.
   *
   * Possible values: Integers from `1` to `64`
   *
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * Indicates whether the HTTP metadata endpoint on your instances is enabled or disabled.
   *
   * If the value is `disabled`, you cannot access your instance metadata.
   *
   * @public
   */
  HttpEndpoint?: InstanceMetadataEndpointState | undefined;

  /**
   * Indicates whether the IPv6 endpoint for the instance metadata service is enabled or disabled.
   *
   * Default: `disabled`
   *
   * @public
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | undefined;

  /**
   * Indicates whether access to instance tags from the instance metadata is enabled or disabled. For more information, see [View tags for your EC2 instances using instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-tags-in-IMDS.html).
   *
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | undefined;
}

/**
 * Describes the monitoring of an instance.
 *
 * @public
 */
export interface Monitoring {
  /**
   * Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is enabled.
   *
   * @public
   */
  State?: MonitoringState | undefined;
}

/**
 * Describes association information for an Elastic IP address (IPv4).
 *
 * @public
 */
export interface InstanceNetworkInterfaceAssociation {
  /**
   * The carrier IP address associated with the network interface.
   *
   * @public
   */
  CarrierIp?: string | undefined;

  /**
   * The customer-owned IP address associated with the network interface.
   *
   * @public
   */
  CustomerOwnedIp?: string | undefined;

  /**
   * The ID of the owner of the Elastic IP address.
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
   * The public IP address or Elastic IP address bound to the network interface.
   *
   * @public
   */
  PublicIp?: string | undefined;
}

/**
 * ENA Express is compatible with both TCP and UDP transport protocols. When it's enabled, TCP traffic automatically uses it. However, some UDP-based applications are designed to handle network packets that are out of order, without a need for retransmission, such as live video broadcasting or other near-real-time applications. For UDP traffic, you can specify whether to use ENA Express, based on your application environment needs.
 *
 * @public
 */
export interface InstanceAttachmentEnaSrdUdpSpecification {
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
export interface InstanceAttachmentEnaSrdSpecification {
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
  EnaSrdUdpSpecification?: InstanceAttachmentEnaSrdUdpSpecification | undefined;
}

/**
 * Describes a network interface attachment.
 *
 * @public
 */
export interface InstanceNetworkInterfaceAttachment {
  /**
   * The time stamp when the attachment initiated.
   *
   * @public
   */
  AttachTime?: Date | undefined;

  /**
   * The ID of the network interface attachment.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * Indicates whether the network interface is deleted when the instance is terminated.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The index of the device on the instance for the network interface attachment.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The attachment state.
   *
   * @public
   */
  Status?: AttachmentStatus | undefined;

  /**
   * The index of the network card.
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * Contains the ENA Express settings for the network interface that's attached to the instance.
   *
   * @public
   */
  EnaSrdSpecification?: InstanceAttachmentEnaSrdSpecification | undefined;

  /**
   * The number of ENA queues created with the instance.
   *
   * @public
   */
  EnaQueueCount?: number | undefined;
}

/**
 * A security group connection tracking specification response that enables you to set the idle timeout for connection tracking on an Elastic network interface. For more information, see [Connection tracking timeouts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface ConnectionTrackingSpecificationResponse {
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
 * Information about an IPv4 prefix.
 *
 * @public
 */
export interface InstanceIpv4Prefix {
  /**
   * One or more IPv4 prefixes assigned to the network interface.
   *
   * @public
   */
  Ipv4Prefix?: string | undefined;
}

/**
 * Information about an IPv6 prefix.
 *
 * @public
 */
export interface InstanceIpv6Prefix {
  /**
   * One or more IPv6 prefixes assigned to the network interface.
   *
   * @public
   */
  Ipv6Prefix?: string | undefined;
}

/**
 * Describes a private IPv4 address.
 *
 * @public
 */
export interface InstancePrivateIpAddress {
  /**
   * The association information for an Elastic IP address for the network interface.
   *
   * @public
   */
  Association?: InstanceNetworkInterfaceAssociation | undefined;

  /**
   * Indicates whether this IPv4 address is the primary private IP address of the network interface.
   *
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * The private IPv4 DNS name.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * The private IPv4 address of the network interface.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * Describes a network interface.
 *
 * @public
 */
export interface InstanceNetworkInterface {
  /**
   * The association information for an Elastic IPv4 associated with the network interface.
   *
   * @public
   */
  Association?: InstanceNetworkInterfaceAssociation | undefined;

  /**
   * The network interface attachment.
   *
   * @public
   */
  Attachment?: InstanceNetworkInterfaceAttachment | undefined;

  /**
   * The description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The security groups.
   *
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;

  /**
   * The IPv6 addresses associated with the network interface.
   *
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * The MAC address.
   *
   * @public
   */
  MacAddress?: string | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that created the network interface.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The private DNS name.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * The IPv4 address of the network interface within the subnet.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * The private IPv4 addresses associated with the network interface.
   *
   * @public
   */
  PrivateIpAddresses?: InstancePrivateIpAddress[] | undefined;

  /**
   * Indicates whether source/destination checking is enabled.
   *
   * @public
   */
  SourceDestCheck?: boolean | undefined;

  /**
   * The status of the network interface.
   *
   * @public
   */
  Status?: NetworkInterfaceStatus | undefined;

  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The type of network interface.
   *
   * Valid values: `interface` | `efa` | `efa-only` | `evs` | `trunk`
   *
   * @public
   */
  InterfaceType?: string | undefined;

  /**
   * The IPv4 delegated prefixes that are assigned to the network interface.
   *
   * @public
   */
  Ipv4Prefixes?: InstanceIpv4Prefix[] | undefined;

  /**
   * The IPv6 delegated prefixes that are assigned to the network interface.
   *
   * @public
   */
  Ipv6Prefixes?: InstanceIpv6Prefix[] | undefined;

  /**
   * A security group connection tracking configuration that enables you to set the timeout for connection tracking on an Elastic network interface. For more information, see [Connection tracking timeouts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  ConnectionTrackingConfiguration?: ConnectionTrackingSpecificationResponse | undefined;

  /**
   * The service provider that manages the network interface.
   *
   * @public
   */
  Operator?: OperatorResponse | undefined;
}

/**
 * With network performance options, you can adjust your bandwidth preferences to meet the needs of the workload that runs on your instance.
 *
 * @public
 */
export interface InstanceNetworkPerformanceOptions {
  /**
   * When you configure network bandwidth weighting, you can boost your baseline bandwidth for either networking or EBS by up to 25%. The total available baseline bandwidth for your instance remains the same. The default option uses the standard bandwidth configuration for your instance type.
   *
   * @public
   */
  BandwidthWeighting?: InstanceBandwidthWeighting | undefined;
}

/**
 * Describes the options for instance hostnames.
 *
 * @public
 */
export interface PrivateDnsNameOptionsResponse {
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
 * Describes the attachment of a secondary interface to an instance.
 *
 * @public
 */
export interface InstanceSecondaryInterfaceAttachment {
  /**
   * The timestamp when the attachment was created.
   *
   * @public
   */
  AttachTime?: Date | undefined;

  /**
   * The ID of the attachment.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * Indicates whether the secondary interface is deleted when the instance is terminated.
   *
   * The only supported value for this field is `true`.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The device index of the secondary interface.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The attachment state.
   *
   * @public
   */
  Status?: AttachmentStatus | undefined;

  /**
   * The index of the network card.
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;
}

/**
 * Describes a private IPv4 address for a secondary interface.
 *
 * @public
 */
export interface InstanceSecondaryInterfacePrivateIpAddress {
  /**
   * The private IPv4 address.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * Describes a secondary interface attached to an instance.
 *
 * @public
 */
export interface InstanceSecondaryInterface {
  /**
   * The attachment information for the secondary interface.
   *
   * @public
   */
  Attachment?: InstanceSecondaryInterfaceAttachment | undefined;

  /**
   * The MAC address of the secondary interface.
   *
   * @public
   */
  MacAddress?: string | undefined;

  /**
   * The ID of the secondary interface.
   *
   * @public
   */
  SecondaryInterfaceId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the secondary interface.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The private IPv4 addresses associated with the secondary interface.
   *
   * @public
   */
  PrivateIpAddresses?: InstanceSecondaryInterfacePrivateIpAddress[] | undefined;

  /**
   * Indicates whether source/destination checking is enabled.
   *
   * @public
   */
  SourceDestCheck?: boolean | undefined;

  /**
   * The status of the secondary interface.
   *
   * @public
   */
  Status?: SecondaryInterfaceStatus | undefined;

  /**
   * The ID of the secondary subnet.
   *
   * @public
   */
  SecondarySubnetId?: string | undefined;

  /**
   * The ID of the secondary network.
   *
   * @public
   */
  SecondaryNetworkId?: string | undefined;

  /**
   * The type of secondary interface.
   *
   * @public
   */
  InterfaceType?: SecondaryInterfaceType | undefined;
}

/**
 * Describes an instance.
 *
 * @public
 */
export interface Instance {
  /**
   * The architecture of the image.
   *
   * @public
   */
  Architecture?: ArchitectureValues | undefined;

  /**
   * Any block device mapping entries for the instance.
   *
   * @public
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;

  /**
   * The idempotency token you provided when you launched the instance, if applicable.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * Specifies whether enhanced networking with ENA is enabled.
   *
   * @public
   */
  EnaSupport?: boolean | undefined;

  /**
   * The hypervisor type of the instance. The value `xen` is used for both Xen and Nitro hypervisors.
   *
   * @public
   */
  Hypervisor?: HypervisorType | undefined;

  /**
   * The IAM instance profile associated with the instance, if applicable.
   *
   * @public
   */
  IamInstanceProfile?: IamInstanceProfile | undefined;

  /**
   * Indicates whether this is a Spot Instance or a Scheduled Instance.
   *
   * @public
   */
  InstanceLifecycle?: InstanceLifecycleType | undefined;

  /**
   * Deprecated.
   *
   * > **Note:** Amazon Elastic Graphics reached end of life on January 8, 2024.
   *
   * @public
   */
  ElasticGpuAssociations?: ElasticGpuAssociation[] | undefined;

  /**
   * Deprecated
   *
   * > **Note:** Amazon Elastic Inference is no longer available.
   *
   * @public
   */
  ElasticInferenceAcceleratorAssociations?: ElasticInferenceAcceleratorAssociation[] | undefined;

  /**
   * The network interfaces for the instance.
   *
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterface[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The device name of the root device volume (for example, `/dev/sda1`).
   *
   * @public
   */
  RootDeviceName?: string | undefined;

  /**
   * The root device type used by the AMI. The AMI can use an EBS volume or an instance store volume.
   *
   * @public
   */
  RootDeviceType?: DeviceType | undefined;

  /**
   * The security groups for the instance.
   *
   * @public
   */
  SecurityGroups?: GroupIdentifier[] | undefined;

  /**
   * Indicates whether source/destination checking is enabled.
   *
   * @public
   */
  SourceDestCheck?: boolean | undefined;

  /**
   * If the request is a Spot Instance request, the ID of the request.
   *
   * @public
   */
  SpotInstanceRequestId?: string | undefined;

  /**
   * Specifies whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
   *
   * @public
   */
  SriovNetSupport?: string | undefined;

  /**
   * The reason for the most recent state transition.
   *
   * @public
   */
  StateReason?: StateReason | undefined;

  /**
   * Any tags assigned to the instance.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The virtualization type of the instance.
   *
   * @public
   */
  VirtualizationType?: VirtualizationType | undefined;

  /**
   * The CPU options for the instance.
   *
   * @public
   */
  CpuOptions?: CpuOptions | undefined;

  /**
   * The ID of the Capacity Block.
   *
   * > **Note:** For P5 instances, a Capacity Block ID refers to a group of instances. For Trn2u instances, a capacity block ID refers to an EC2 UltraServer.
   *
   * @public
   */
  CapacityBlockId?: string | undefined;

  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * Information about the Capacity Reservation targeting option.
   *
   * @public
   */
  CapacityReservationSpecification?: CapacityReservationSpecificationResponse | undefined;

  /**
   * Indicates whether the instance is enabled for hibernation.
   *
   * @public
   */
  HibernationOptions?: HibernationOptions | undefined;

  /**
   * The license configurations for the instance.
   *
   * @public
   */
  Licenses?: LicenseConfiguration[] | undefined;

  /**
   * The metadata options for the instance.
   *
   * @public
   */
  MetadataOptions?: InstanceMetadataOptionsResponse | undefined;

  /**
   * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
   *
   * @public
   */
  EnclaveOptions?: EnclaveOptions | undefined;

  /**
   * The boot mode that was specified by the AMI. If the value is `uefi-preferred`, the AMI supports both UEFI and Legacy BIOS. The `currentInstanceBootMode` parameter is the boot mode that is used to boot the instance at launch or start.
   *
   * > **Note:** The operating system contained in the AMI must be configured to support the specified boot mode.
   *
   * For more information, see [Boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  BootMode?: BootModeValues | undefined;

  /**
   * The platform details value for the instance. For more information, see [AMI billing information fields](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  PlatformDetails?: string | undefined;

  /**
   * The usage operation value for the instance. For more information, see [AMI billing information fields](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * The time that the usage operation was last updated.
   *
   * @public
   */
  UsageOperationUpdateTime?: Date | undefined;

  /**
   * The options for the instance hostname.
   *
   * @public
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptionsResponse | undefined;

  /**
   * The IPv6 address assigned to the instance.
   *
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * If the instance is configured for NitroTPM support, the value is `v2.0`. For more information, see [NitroTPM](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  TpmSupport?: string | undefined;

  /**
   * Provides information on the recovery and maintenance options of your instance.
   *
   * @public
   */
  MaintenanceOptions?: InstanceMaintenanceOptions | undefined;

  /**
   * The boot mode that is used to boot the instance at launch or start. For more information, see [Boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  CurrentInstanceBootMode?: InstanceBootModeValues | undefined;

  /**
   * Contains settings for the network performance options for your instance.
   *
   * @public
   */
  NetworkPerformanceOptions?: InstanceNetworkPerformanceOptions | undefined;

  /**
   * The service provider that manages the instance.
   *
   * @public
   */
  Operator?: OperatorResponse | undefined;

  /**
   * The secondary interfaces for the instance.
   *
   * @public
   */
  SecondaryInterfaces?: InstanceSecondaryInterface[] | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The ID of the AMI used to launch the instance.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The current state of the instance.
   *
   * @public
   */
  State?: InstanceState | undefined;

  /**
   * [IPv4 only] The private DNS hostname name assigned to the instance. This DNS hostname can only be used inside the Amazon EC2 network. This name is not available until the instance enters the `running` state.
   *
   * The Amazon-provided DNS server resolves Amazon-provided private DNS hostnames if you've enabled DNS resolution and DNS hostnames in your VPC. If you are not using the Amazon-provided DNS server in your VPC, your custom domain name servers must resolve the hostname as appropriate.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * The public DNS name assigned to the instance. This name is not available until the instance enters the `running` state. This name is only available if you've enabled DNS hostnames for your VPC. The format of this name depends on the [public hostname type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hostname-types.html#public-hostnames).
   *
   * @public
   */
  PublicDnsName?: string | undefined;

  /**
   * The reason for the most recent state transition. This might be an empty string.
   *
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * The name of the key pair, if this instance was launched with an associated key pair.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * The AMI launch index, which can be used to find this instance in the launch group.
   *
   * @public
   */
  AmiLaunchIndex?: number | undefined;

  /**
   * The product codes attached to this instance, if applicable.
   *
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The time that the instance was last launched. To determine the time that instance was first launched, see the attachment time for the primary network interface.
   *
   * @public
   */
  LaunchTime?: Date | undefined;

  /**
   * The location where the instance launched, if applicable.
   *
   * @public
   */
  Placement?: Placement | undefined;

  /**
   * The kernel associated with this instance, if applicable.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * The RAM disk associated with this instance, if applicable.
   *
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * The platform. This value is `windows` for Windows instances; otherwise, it is empty.
   *
   * @public
   */
  Platform?: PlatformValues | undefined;

  /**
   * The monitoring for the instance.
   *
   * @public
   */
  Monitoring?: Monitoring | undefined;

  /**
   * The ID of the subnet in which the instance is running.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the VPC in which the instance is running.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The private IPv4 address assigned to the instance.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * The public IPv4 address, or the Carrier IP address assigned to the instance, if applicable.
   *
   * A Carrier IP address only applies to an instance launched in a subnet associated with a Wavelength Zone.
   *
   * @public
   */
  PublicIpAddress?: string | undefined;
}

/**
 * Describes a launch request for one or more instances, and includes owner, requester, and security group information that applies to all instances in the launch request.
 *
 * @public
 */
export interface Reservation {
  /**
   * The ID of the reservation.
   *
   * @public
   */
  ReservationId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the reservation.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the requester that launched the instances on your behalf (for example, Amazon Web Services Management Console or Auto Scaling).
   *
   * @public
   */
  RequesterId?: string | undefined;

  /**
   * Not supported.
   *
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;

  /**
   * The instances.
   *
   * @public
   */
  Instances?: Instance[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstancesResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the reservations.
   *
   * @public
   */
  Reservations?: Reservation[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceSqlHaHistoryStatesRequest {
  /**
   * The IDs of the SQL Server High Availability instances to describe. If omitted, the API returns historical states for all SQL Server High Availability instances.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The start data and time of the period for which to get the historical SQL Server High Availability states. If omitted, the API returns all available historical states.
   *
   * Timezone: UTC
   *
   * Format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end data and time of the period for which to get historical SQL Server High Availability states. If omitted, the API returns historical states up to the current date and time.
   *
   * Timezone: UTC
   *
   * Format: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters to apply to the results. Supported filters include:
   *
   * - `tag:<key>` - The tag key and value pair assigned to the instance. For example, to find all instances tagged with `Owner:TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The tag key assigned to the instance.
   * - `haStatus` - The SQL Server High Availability status of the SQL Server High Availability instance (`processing` | `active` | `standby` | `invalid`).
   * - `sqlServerLicenseUsage` - The license type for the SQL Server license (`full` | `waived`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes an Amazon EC2 instance that is enabled for SQL Server High Availability standby detection monitoring.
 *
 * @public
 */
export interface RegisteredInstance {
  /**
   * The ID of the SQL Server High Availability instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The license type for the SQL Server license. Valid values include:
   *
   * - `full` - The SQL Server High Availability instance is using a full SQL Server license.
   * - `waived` - The SQL Server High Availability instance is waived from the SQL Server license.
   *
   * @public
   */
  SqlServerLicenseUsage?: SqlServerLicenseUsage | undefined;

  /**
   * The SQL Server High Availability status of the instance. Valid values are:
   *
   * - `processing` - The SQL Server High Availability status for the SQL Server High Availability instance is being updated.
   * - `active` - The SQL Server High Availability instance is an active node in an SQL Server High Availability cluster.
   * - `standby` - The SQL Server High Availability instance is a standby failover node in an SQL Server High Availability cluster.
   * - `invalid` - An error occurred due to misconfigured permissions, or unable to dertemine SQL Server High Availability status for the SQL Server High Availability instance.
   *
   * @public
   */
  HaStatus?: HaStatus | undefined;

  /**
   * A brief description of the SQL Server High Availability status. If the instance is in the `invalid` High Availability status, this parameter includes the error message.
   *
   * @public
   */
  ProcessingStatus?: string | undefined;

  /**
   * The date and time when the instance's SQL Server High Availability status was last updated, in the ISO 8601 format in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`).
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The ARN of the Secrets Manager secret containing the SQL Server access credentials for the SQL Server High Availability instance. If not specified, deafult local user credentials will be used by the Amazon Web Services Systems Manager agent.
   *
   * @public
   */
  SqlServerCredentials?: string | undefined;

  /**
   * The tags assigned to the SQL Server High Availability instance.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceSqlHaHistoryStatesResult {
  /**
   * Information about the historical SQL Server High Availability states of the SQL Server High Availability instances.
   *
   * @public
   */
  Instances?: RegisteredInstance[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceSqlHaStatesRequest {
  /**
   * The IDs of the SQL Server High Availability instances to describe. If omitted, the API returns SQL Server High Availability states for all SQL Server High Availability instances.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters to apply to the results. Supported filters include:
   *
   * - `tag:<key>` - The tag key and value pair assigned to the instance. For example, to find all instances tagged with `Owner:TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The tag key assigned to the instance.
   * - `haStatus` - The SQL Server High Availability status of the SQL Server High Availability instance (`processing` | `active` | `standby` | `invalid`).
   * - `sqlServerLicenseUsage` - The license type for the SQL Server license (`full` | `waived`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

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
export interface DescribeInstanceSqlHaStatesResult {
  /**
   * Information about the SQL Server High Availability instances.
   *
   * @public
   */
  Instances?: RegisteredInstance[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceStatusRequest {
  /**
   * The instance IDs.
   *
   * Default: Describes all your instances.
   *
   * Constraints: Maximum 100 explicitly specified instance IDs.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * You cannot specify this parameter and the instance IDs parameter in the same request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Indicates whether to include managed resources in the output. If this parameter is set to `true`, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.
   *
   * @public
   */
  IncludeManagedResources?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `availability-zone` - The Availability Zone of the instance.
   * - `availability-zone-id` - The ID of the Availability Zone of the instance.
   * - `event.code` - The code for the scheduled event (`instance-reboot` | `system-reboot` | `system-maintenance` | `instance-retirement` | `instance-stop`).
   * - `event.description` - A description of the event.
   * - `event.instance-event-id` - The ID of the event whose date and time you are modifying.
   * - `event.not-after` - The latest end time for the scheduled event (for example, `2014-09-15T17:15:20.000Z`).
   * - `event.not-before` - The earliest start time for the scheduled event (for example, `2014-09-15T17:15:20.000Z`).
   * - `event.not-before-deadline` - The deadline for starting the event (for example, `2014-09-15T17:15:20.000Z`).
   * - `instance-state-code` - The code for the instance state, as a 16-bit unsigned integer. The high byte is used for internal purposes and should be ignored. The low byte is set based on the state represented. The valid values are 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64 (stopping), and 80 (stopped).
   * - `instance-state-name` - The state of the instance (`pending` | `running` | `shutting-down` | `terminated` | `stopping` | `stopped`).
   * - `instance-status.reachability` - Filters on instance status where the name is `reachability` (`passed` | `failed` | `initializing` | `insufficient-data`).
   * - `instance-status.status` - The status of the instance (`ok` | `impaired` | `initializing` | `insufficient-data` | `not-applicable`).
   * - `operator.managed` - A Boolean that indicates whether this is a managed instance.
   * - `operator.principal` - The principal that manages the instance. Only valid for managed instances, where `managed` is `true`.
   * - `system-status.reachability` - Filters on system status where the name is `reachability` (`passed` | `failed` | `initializing` | `insufficient-data`).
   * - `system-status.status` - The system status of the instance (`ok` | `impaired` | `initializing` | `insufficient-data` | `not-applicable`).
   * - `attached-ebs-status.status` - The status of the attached EBS volume for the instance (`ok` | `impaired` | `initializing` | `insufficient-data` | `not-applicable`).
   * - `application-status.status` - The application status of the instance (`ok` | `impaired` | `initializing` | `insufficient-data` | `not-applicable`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * When `true`, includes the health status for all instances. When `false`, includes the health status for running instances only.
   *
   * Default: `false`
   *
   * @public
   */
  IncludeAllInstances?: boolean | undefined;
}

/**
 * Provides a summary of the application-level health status for an instance.
 *
 * @public
 */
export interface ApplicationStatusSummary {
  /**
   * The current status.
   *
   * @public
   */
  Status?: SummaryStatus | undefined;

  /**
   * The date and time when the application status became impaired.
   *
   * @public
   */
  ImpairedSince?: Date | undefined;
}

/**
 * Describes the attached EBS status check for an instance.
 *
 * @public
 */
export interface EbsStatusDetails {
  /**
   * The date and time when the attached EBS status check failed.
   *
   * @public
   */
  ImpairedSince?: Date | undefined;

  /**
   * The name of the attached EBS status check.
   *
   * @public
   */
  Name?: StatusName | undefined;

  /**
   * The result of the attached EBS status check.
   *
   * @public
   */
  Status?: StatusType | undefined;
}

/**
 * Provides a summary of the attached EBS volume status for an instance.
 *
 * @public
 */
export interface EbsStatusSummary {
  /**
   * Details about the attached EBS status check for an instance.
   *
   * @public
   */
  Details?: EbsStatusDetails[] | undefined;

  /**
   * The current status.
   *
   * @public
   */
  Status?: SummaryStatus | undefined;
}

/**
 * Describes a scheduled event for an instance.
 *
 * @public
 */
export interface InstanceStatusEvent {
  /**
   * The ID of the event.
   *
   * @public
   */
  InstanceEventId?: string | undefined;

  /**
   * The event code.
   *
   * @public
   */
  Code?: EventCode | undefined;

  /**
   * A description of the event.
   *
   * After a scheduled event is completed, it can still be described for up to a week. If the event has been completed, this description starts with the following text: [Completed].
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The latest scheduled end time for the event.
   *
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * The earliest scheduled start time for the event.
   *
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * The deadline for starting the event.
   *
   * @public
   */
  NotBeforeDeadline?: Date | undefined;
}

/**
 * Describes the instance status.
 *
 * @public
 */
export interface InstanceStatusDetails {
  /**
   * The time when a status check failed. For an instance that was launched and impaired, this is the time when the instance was launched.
   *
   * @public
   */
  ImpairedSince?: Date | undefined;

  /**
   * The type of instance status.
   *
   * @public
   */
  Name?: StatusName | undefined;

  /**
   * The status.
   *
   * @public
   */
  Status?: StatusType | undefined;
}

/**
 * Describes the status of an instance.
 *
 * @public
 */
export interface InstanceStatusSummary {
  /**
   * The system instance health or application instance health.
   *
   * @public
   */
  Details?: InstanceStatusDetails[] | undefined;

  /**
   * The status.
   *
   * @public
   */
  Status?: SummaryStatus | undefined;
}

/**
 * Provides a summary of the performance status check results for an instance.
 *
 * @public
 */
export interface PerformanceStatusSummary {
  /**
   * The current status.
   *
   * @public
   */
  Status?: SummaryStatus | undefined;

  /**
   * The date and time when the performance status became impaired.
   *
   * @public
   */
  ImpairedSince?: Date | undefined;

  /**
   * The recommended action to remediate the impaired instance, if one is available. This value is returned only when the instance is impaired.
   *
   * @public
   */
  Remediation?: string | undefined;
}

/**
 * Describes the status of an instance, including system status, instance status, attached EBS status, application status, and performance status.
 *
 * @public
 */
export interface InstanceStatus {
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
   * The Amazon Resource Name (ARN) of the Outpost.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The service provider that manages the instance.
   *
   * @public
   */
  Operator?: OperatorResponse | undefined;

  /**
   * Any scheduled events associated with the instance.
   *
   * @public
   */
  Events?: InstanceStatusEvent[] | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The intended state of the instance. DescribeInstanceStatus requires that an instance be in the `running` state.
   *
   * @public
   */
  InstanceState?: InstanceState | undefined;

  /**
   * Reports impaired functionality that stems from issues internal to the instance, such as impaired reachability.
   *
   * @public
   */
  InstanceStatus?: InstanceStatusSummary | undefined;

  /**
   * Reports impaired functionality that stems from issues related to the systems that support an instance, such as hardware failures and network connectivity problems.
   *
   * @public
   */
  SystemStatus?: InstanceStatusSummary | undefined;

  /**
   * Reports impaired functionality that stems from an attached Amazon EBS volume that is unreachable and unable to complete I/O operations.
   *
   * @public
   */
  AttachedEbsStatus?: EbsStatusSummary | undefined;

  /**
   * Reports the application-level health status for the instance.
   *
   * @public
   */
  ApplicationStatus?: ApplicationStatusSummary | undefined;

  /**
   * Reports the performance-related health status for the instance. This information is returned only when performance status checks are enabled for the instance.
   *
   * @public
   */
  PerformanceStatus?: PerformanceStatusSummary | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceStatusResult {
  /**
   * Information about the status of the instances.
   *
   * @public
   */
  InstanceStatuses?: InstanceStatus[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceTopologyRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * You can't specify this parameter and the instance IDs parameter in the same request.
   *
   * Default: `20`
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The instance IDs.
   *
   * Default: Describes all your instances.
   *
   * Constraints: Maximum 100 explicitly specified instance IDs.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The name of the placement group that each instance is in.
   *
   * Constraints: Maximum 100 explicitly specified placement group names.
   *
   * @public
   */
  GroupNames?: string[] | undefined;

  /**
   * The filters.
   *
   * - `availability-zone` - The name of the Availability Zone (for example, `us-west-2a`) or Local Zone (for example, `us-west-2-lax-1b`) that the instance is in.
   * - `instance-type` - The instance type (for example, `p4d.24xlarge`) or instance family (for example, `p4d*`). You can use the `*` wildcard to match zero or more characters, or the `?` wildcard to match zero or one character.
   * - `zone-id` - The ID of the Availability Zone (for example, `usw2-az2`) or Local Zone (for example, `usw2-lax1-az1`) that the instance is in.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Information about the instance topology.
 *
 * @public
 */
export interface InstanceTopology {
  /**
   * The instance ID.
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
   * The name of the placement group that the instance is in.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The network nodes. The nodes are hashed based on your account. Instances from different accounts running under the same server will return a different hashed list of strings.
   *
   * The value is `null` or empty if:
   *
   * - The instance type is not supported.
   * - The instance is in a state other than `running`.
   *
   * @public
   */
  NetworkNodes?: string[] | undefined;

  /**
   * The name of the Availability Zone or Local Zone that the instance is in.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone or Local Zone that the instance is in.
   *
   * @public
   */
  ZoneId?: string | undefined;

  /**
   * The ID of the Capacity Block. This parameter is only supported for UltraServer instances and identifies instances within the UltraServer domain.
   *
   * @public
   */
  CapacityBlockId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceTopologyResult {
  /**
   * Information about the topology of each instance.
   *
   * @public
   */
  Instances?: InstanceTopology[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceTypeOfferingsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The location type.
   *
   * - `availability-zone` - The Availability Zone. When you specify a location filter, it must be an Availability Zone for the current Region.
   * - `availability-zone-id` - The AZ ID. When you specify a location filter, it must be an AZ ID for the current Region.
   * - `outpost` - The Outpost ARN. When you specify a location filter, it must be an Outpost ARN for the current Region.
   * - `region` - The current Region. If you specify a location filter, it must match the current Region.
   *
   * @public
   */
  LocationType?: LocationType | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * - `instance-type` - The instance type. For a list of possible values, see [Instance](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Instance.html).
   * - `location` - The location. For a list of possible identifiers, see [Regions and Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The instance types offered.
 *
 * @public
 */
export interface InstanceTypeOffering {
  /**
   * The instance type. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The location type.
   *
   * @public
   */
  LocationType?: LocationType | undefined;

  /**
   * The identifier for the location. This depends on the location type. For example, if the location type is `region`, the location is the Region code (for example, `us-east-2`.)
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceTypeOfferingsResult {
  /**
   * The instance types offered in the location.
   *
   * @public
   */
  InstanceTypeOfferings?: InstanceTypeOffering[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceTypesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The instance types.
   *
   * @public
   */
  InstanceTypes?: _InstanceType[] | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * - `auto-recovery-supported` - Indicates whether Amazon CloudWatch action based recovery is supported (`true` | `false`).
   * - `bare-metal` - Indicates whether it is a bare metal instance type (`true` | `false`).
   * - `burstable-performance-supported` - Indicates whether the instance type is a burstable performance T instance type (`true` | `false`).
   * - `current-generation` - Indicates whether this instance type is the latest generation instance type of an instance family (`true` | `false`).
   * - `dedicated-hosts-supported` - Indicates whether the instance type supports Dedicated Hosts. (`true` | `false`)
   * - `ebs-info.attachment-limit-type` - The type of Amazon EBS volume attachment limit (`shared` | `dedicated`).
   * - `ebs-info.maximum-ebs-attachments` - The maximum number of Amazon EBS volumes that can be attached to the instance type.
   * - `ebs-info.ebs-optimized-info.baseline-bandwidth-in-mbps` - The baseline bandwidth performance for an EBS-optimized instance type, in Mbps.
   * - `ebs-info.ebs-optimized-info.baseline-iops` - The baseline input/output storage operations per second for an EBS-optimized instance type.
   * - `ebs-info.ebs-optimized-info.baseline-throughput-in-mbps` - The baseline throughput performance for an EBS-optimized instance type, in MB/s.
   * - `ebs-info.ebs-optimized-info.maximum-bandwidth-in-mbps` - The maximum bandwidth performance for an EBS-optimized instance type, in Mbps.
   * - `ebs-info.ebs-optimized-info.maximum-iops` - The maximum input/output storage operations per second for an EBS-optimized instance type.
   * - `ebs-info.ebs-optimized-info.maximum-throughput-in-mbps` - The maximum throughput performance for an EBS-optimized instance type, in MB/s.
   * - `ebs-info.ebs-optimized-support` - Indicates whether the instance type is EBS-optimized (`supported` | `unsupported` | `default`).
   * - `ebs-info.encryption-support` - Indicates whether EBS encryption is supported (`supported` | `unsupported`).
   * - `ebs-info.nvme-support` - Indicates whether non-volatile memory express (NVMe) is supported for EBS volumes (`required` | `supported` | `unsupported`).
   * - `free-tier-eligible` - A Boolean that indicates whether this instance type can be used under the Amazon Web Services Free Tier (`true` | `false`).
   * - `hibernation-supported` - Indicates whether On-Demand hibernation is supported (`true` | `false`).
   * - `hypervisor` - The hypervisor (`nitro` | `xen`).
   * - `instance-storage-info.disk.count` - The number of local disks.
   * - `instance-storage-info.disk.size-in-gb` - The storage size of each instance storage disk, in GB.
   * - `instance-storage-info.disk.type` - The storage technology for the local instance storage disks (`hdd` | `ssd`).
   * - `instance-storage-info.encryption-support` - Indicates whether data is encrypted at rest (`required` | `supported` | `unsupported`).
   * - `instance-storage-info.nvme-support` - Indicates whether non-volatile memory express (NVMe) is supported for instance store (`required` | `supported` | `unsupported`).
   * - `instance-storage-info.total-size-in-gb` - The total amount of storage available from all local instance storage, in GB.
   * - `instance-storage-supported` - Indicates whether the instance type has local instance storage (`true` | `false`).
   * - `instance-type` - The instance type (for example `c5.2xlarge` or c5*).
   * - `memory-info.size-in-mib` - The memory size.
   * - `network-info.bandwidth-weightings` - For instances that support bandwidth weighting to boost performance (`default`, `vpc-1`, `ebs-1`).
   * - `network-info.efa-info.maximum-efa-interfaces` - The maximum number of Elastic Fabric Adapters (EFAs) per instance.
   * - `network-info.efa-supported` - Indicates whether the instance type supports Elastic Fabric Adapter (EFA) (`true` | `false`).
   * - `network-info.ena-support` - Indicates whether Elastic Network Adapter (ENA) is supported or required (`required` | `supported` | `unsupported`).
   * - `network-info.flexible-ena-queues-support` - Indicates whether an instance supports flexible ENA queues (`supported` | `unsupported`).
   * - `network-info.encryption-in-transit-supported` - Indicates whether the instance type automatically encrypts in-transit traffic between instances (`true` | `false`).
   * - `network-info.ipv4-addresses-per-interface` - The maximum number of private IPv4 addresses per network interface.
   * - `network-info.ipv6-addresses-per-interface` - The maximum number of private IPv6 addresses per network interface.
   * - `network-info.ipv6-supported` - Indicates whether the instance type supports IPv6 (`true` | `false`).
   * - `network-info.maximum-network-cards` - The maximum number of network cards per instance.
   * - `network-info.maximum-network-interfaces` - The maximum number of network interfaces per instance.
   * - `network-info.network-performance` - The network performance (for example, "25 Gigabit").
   * - `nitro-enclaves-support` - Indicates whether Nitro Enclaves is supported (`supported` | `unsupported`).
   * - `nitro-tpm-support` - Indicates whether NitroTPM is supported (`supported` | `unsupported`).
   * - `nitro-tpm-info.supported-versions` - The supported NitroTPM version (`2.0`).
   * - `processor-info.supported-architecture` - The CPU architecture (`arm64` | `i386` | `x86_64`).
   * - `processor-info.sustained-clock-speed-in-ghz` - The CPU clock speed, in GHz.
   * - `processor-info.supported-features` - The supported CPU features (`amd-sev-snp`).
   * - `reboot-migration-support` - Indicates whether enabling reboot migration is supported (`supported` | `unsupported`).
   * - `supported-boot-mode` - The boot mode (`legacy-bios` | `uefi`).
   * - `supported-root-device-type` - The root device type (`ebs` | `instance-store`).
   * - `supported-usage-class` - The usage class (`on-demand` | `spot` | `capacity-block`).
   * - `supported-virtualization-type` - The virtualization type (`hvm` | `paravirtual`).
   * - `vcpu-info.default-cores` - The default number of cores for the instance type.
   * - `vcpu-info.default-threads-per-core` - The default number of threads per core for the instance type.
   * - `vcpu-info.default-vcpus` - The default number of vCPUs for the instance type.
   * - `vcpu-info.valid-cores` - The number of cores that can be configured for the instance type.
   * - `vcpu-info.valid-threads-per-core` - The number of threads per core that can be configured for the instance type. For example, "1" or "1,2".
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * If `true`, the response includes instance types that are not supported in the current Region, in addition to the supported types. Default: `false`.
   *
   * @public
   */
  IncludeUnsupportedInRegion?: boolean | undefined;
}

/**
 * Describes the performance characteristics of an EBS card on the instance type.
 *
 * @public
 */
export interface EbsCardInfo {
  /**
   * The index of the EBS card.
   *
   * @public
   */
  EbsCardIndex?: number | undefined;

  /**
   * The baseline bandwidth performance for the EBS card, in Mbps.
   *
   * @public
   */
  BaselineBandwidthInMbps?: number | undefined;

  /**
   * The baseline throughput performance for the EBS card, in MBps.
   *
   * @public
   */
  BaselineThroughputInMBps?: number | undefined;

  /**
   * The baseline IOPS performance for the EBS card.
   *
   * @public
   */
  BaselineIops?: number | undefined;

  /**
   * The maximum bandwidth performance for the EBS card, in Mbps.
   *
   * @public
   */
  MaximumBandwidthInMbps?: number | undefined;

  /**
   * The maximum throughput performance for the EBS card, in MBps.
   *
   * @public
   */
  MaximumThroughputInMBps?: number | undefined;

  /**
   * The maximum IOPS performance for the EBS card.
   *
   * @public
   */
  MaximumIops?: number | undefined;
}

/**
 * Describes the optimized EBS performance for supported instance types.
 *
 * @public
 */
export interface EbsOptimizedInfo {
  /**
   * The baseline bandwidth performance for an EBS-optimized instance type, in Mbps.
   *
   * @public
   */
  BaselineBandwidthInMbps?: number | undefined;

  /**
   * The baseline throughput performance for an EBS-optimized instance type, in MB/s.
   *
   * @public
   */
  BaselineThroughputInMBps?: number | undefined;

  /**
   * The baseline input/output storage operations per seconds for an EBS-optimized instance type.
   *
   * @public
   */
  BaselineIops?: number | undefined;

  /**
   * The maximum bandwidth performance for an EBS-optimized instance type, in Mbps.
   *
   * @public
   */
  MaximumBandwidthInMbps?: number | undefined;

  /**
   * The maximum throughput performance for an EBS-optimized instance type, in MB/s.
   *
   * @public
   */
  MaximumThroughputInMBps?: number | undefined;

  /**
   * The maximum input/output storage operations per second for an EBS-optimized instance type.
   *
   * @public
   */
  MaximumIops?: number | undefined;
}

/**
 * Describes the Amazon EBS features supported by the instance type.
 *
 * @public
 */
export interface EbsInfo {
  /**
   * Indicates whether the instance type is Amazon EBS-optimized. For more information, see [Amazon EBS-optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html) in *Amazon EC2 User Guide*.
   *
   * @public
   */
  EbsOptimizedSupport?: EbsOptimizedSupport | undefined;

  /**
   * Indicates whether Amazon EBS encryption is supported.
   *
   * @public
   */
  EncryptionSupport?: EbsEncryptionSupport | undefined;

  /**
   * Describes the optimized EBS performance for the instance type.
   *
   * @public
   */
  EbsOptimizedInfo?: EbsOptimizedInfo | undefined;

  /**
   * Indicates whether non-volatile memory express (NVMe) is supported.
   *
   * @public
   */
  NvmeSupport?: EbsNvmeSupport | undefined;

  /**
   * Indicates the maximum number of Amazon EBS volumes that can be attached to the instance type. For more information, see [Amazon EBS volume limits for Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/volume_limits.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  MaximumEbsAttachments?: number | undefined;

  /**
   * Indicates whether the instance type features a shared or dedicated Amazon EBS volume attachment limit. For more information, see [Amazon EBS volume limits for Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/volume_limits.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  AttachmentLimitType?: AttachmentLimitType | undefined;

  /**
   * Indicates the number of EBS cards supported by the instance type.
   *
   * @public
   */
  MaximumEbsCards?: number | undefined;

  /**
   * Describes the EBS cards available for the instance type.
   *
   * @public
   */
  EbsCards?: EbsCardInfo[] | undefined;
}

/**
 * Describes the memory for the FPGA accelerator for the instance type.
 *
 * @public
 */
export interface FpgaDeviceMemoryInfo {
  /**
   * The size of the memory available to the FPGA accelerator, in MiB.
   *
   * @public
   */
  SizeInMiB?: number | undefined;
}

/**
 * Describes the FPGA accelerator for the instance type.
 *
 * @public
 */
export interface FpgaDeviceInfo {
  /**
   * The name of the FPGA accelerator.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The manufacturer of the FPGA accelerator.
   *
   * @public
   */
  Manufacturer?: string | undefined;

  /**
   * The count of FPGA accelerators for the instance type.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * Describes the memory for the FPGA accelerator for the instance type.
   *
   * @public
   */
  MemoryInfo?: FpgaDeviceMemoryInfo | undefined;
}

/**
 * Describes the FPGAs for the instance type.
 *
 * @public
 */
export interface FpgaInfo {
  /**
   * Describes the FPGAs for the instance type.
   *
   * @public
   */
  Fpgas?: FpgaDeviceInfo[] | undefined;

  /**
   * The total memory of all FPGA accelerators for the instance type.
   *
   * @public
   */
  TotalFpgaMemoryInMiB?: number | undefined;
}

/**
 * Describes the memory available to the GPU accelerator.
 *
 * @public
 */
export interface GpuDeviceMemoryInfo {
  /**
   * The size of the memory available to the GPU accelerator, in MiB.
   *
   * @public
   */
  SizeInMiB?: number | undefined;
}

/**
 * Describes the GPU accelerators for the instance type.
 *
 * @public
 */
export interface GpuDeviceInfo {
  /**
   * The name of the GPU accelerator.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The manufacturer of the GPU accelerator.
   *
   * @public
   */
  Manufacturer?: string | undefined;

  /**
   * The number of GPUs for the instance type.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * Total number of GPU devices of this type.
   *
   * @public
   */
  LogicalGpuCount?: number | undefined;

  /**
   * The size of each GPU as a fraction of a full GPU, between 0 (excluded) and 1 (included).
   *
   * @public
   */
  GpuPartitionSize?: number | undefined;

  /**
   * A list of workload types this GPU supports.
   *
   * @public
   */
  Workloads?: string[] | undefined;

  /**
   * Describes the memory available to the GPU accelerator.
   *
   * @public
   */
  MemoryInfo?: GpuDeviceMemoryInfo | undefined;
}

/**
 * Describes the GPU accelerators for the instance type.
 *
 * @public
 */
export interface GpuInfo {
  /**
   * Describes the GPU accelerators for the instance type.
   *
   * @public
   */
  Gpus?: GpuDeviceInfo[] | undefined;

  /**
   * The total size of the memory for the GPU accelerators for the instance type, in MiB.
   *
   * @public
   */
  TotalGpuMemoryInMiB?: number | undefined;
}

/**
 * > **Note:** Amazon Elastic Inference is no longer available.
 *
 * Describes the memory available to the inference accelerator.
 *
 * @public
 */
export interface InferenceDeviceMemoryInfo {
  /**
   * The size of the memory available to the inference accelerator, in MiB.
   *
   * @public
   */
  SizeInMiB?: number | undefined;
}

/**
 * > **Note:** Amazon Elastic Inference is no longer available.
 *
 * Describes the Inference accelerators for the instance type.
 *
 * @public
 */
export interface InferenceDeviceInfo {
  /**
   * The number of Inference accelerators for the instance type.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The name of the Inference accelerator.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The manufacturer of the Inference accelerator.
   *
   * @public
   */
  Manufacturer?: string | undefined;

  /**
   * Describes the memory available to the inference accelerator.
   *
   * @public
   */
  MemoryInfo?: InferenceDeviceMemoryInfo | undefined;
}

/**
 * > **Note:** Amazon Elastic Inference is no longer available.
 *
 * Describes the Inference accelerators for the instance type.
 *
 * @public
 */
export interface InferenceAcceleratorInfo {
  /**
   * Describes the Inference accelerators for the instance type.
   *
   * @public
   */
  Accelerators?: InferenceDeviceInfo[] | undefined;

  /**
   * The total size of the memory for the inference accelerators for the instance type, in MiB.
   *
   * @public
   */
  TotalInferenceMemoryInMiB?: number | undefined;
}

/**
 * Describes a disk.
 *
 * @public
 */
export interface DiskInfo {
  /**
   * The size of the disk in GB.
   *
   * @public
   */
  SizeInGB?: number | undefined;

  /**
   * The number of disks with this configuration.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The type of disk.
   *
   * @public
   */
  Type?: DiskType | undefined;
}

/**
 * Describes the instance store features that are supported by the instance type.
 *
 * @public
 */
export interface InstanceStorageInfo {
  /**
   * The total size of the disks, in GB.
   *
   * @public
   */
  TotalSizeInGB?: number | undefined;

  /**
   * Describes the disks that are available for the instance type.
   *
   * @public
   */
  Disks?: DiskInfo[] | undefined;

  /**
   * Indicates whether non-volatile memory express (NVMe) is supported.
   *
   * @public
   */
  NvmeSupport?: EphemeralNvmeSupport | undefined;

  /**
   * Indicates whether data is encrypted at rest.
   *
   * @public
   */
  EncryptionSupport?: InstanceStorageEncryptionSupport | undefined;
}

/**
 * Describes the memory available to the media accelerator.
 *
 * @public
 */
export interface MediaDeviceMemoryInfo {
  /**
   * The size of the memory available to each media accelerator, in MiB.
   *
   * @public
   */
  SizeInMiB?: number | undefined;
}

/**
 * Describes the media accelerators for the instance type.
 *
 * @public
 */
export interface MediaDeviceInfo {
  /**
   * The number of media accelerators for the instance type.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The name of the media accelerator.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The manufacturer of the media accelerator.
   *
   * @public
   */
  Manufacturer?: string | undefined;

  /**
   * Describes the memory available to the media accelerator.
   *
   * @public
   */
  MemoryInfo?: MediaDeviceMemoryInfo | undefined;
}

/**
 * Describes the media accelerators for the instance type.
 *
 * @public
 */
export interface MediaAcceleratorInfo {
  /**
   * Describes the media accelerators for the instance type.
   *
   * @public
   */
  Accelerators?: MediaDeviceInfo[] | undefined;

  /**
   * The total size of the memory for the media accelerators for the instance type, in MiB.
   *
   * @public
   */
  TotalMediaMemoryInMiB?: number | undefined;
}

/**
 * Describes the memory for the instance type.
 *
 * @public
 */
export interface MemoryInfo {
  /**
   * The size of the memory, in MiB.
   *
   * @public
   */
  SizeInMiB?: number | undefined;
}

/**
 * Indicates default conntrack information for the instance type. For more information, see [Connection tracking timeouts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts) in the Amazon EC2 User Guide.
 *
 * @public
 */
export interface DefaultConnectionTrackingConfiguration {
  /**
   * Default timeout (in seconds) for idle TCP connections in an established state.
   *
   * @public
   */
  DefaultTcpEstablishedTimeout?: number | undefined;

  /**
   * Default timeout (in seconds) for idle UDP flows that have seen traffic only in a single direction or a single request-response transaction.
   *
   * @public
   */
  DefaultUdpTimeout?: number | undefined;

  /**
   * Default timeout (in seconds) for idle UDP flows classified as streams which have seen more than one request-response transaction.
   *
   * @public
   */
  DefaultUdpStreamTimeout?: number | undefined;
}

/**
 * Describes the Elastic Fabric Adapters for the instance type.
 *
 * @public
 */
export interface EfaInfo {
  /**
   * The maximum number of Elastic Fabric Adapters for the instance type.
   *
   * @public
   */
  MaximumEfaInterfaces?: number | undefined;
}

/**
 * Describes the network card support of the instance type.
 *
 * @public
 */
export interface NetworkCardInfo {
  /**
   * The index of the network card.
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * The network performance of the network card.
   *
   * @public
   */
  NetworkPerformance?: string | undefined;

  /**
   * The maximum number of network interfaces for the network card.
   *
   * @public
   */
  MaximumNetworkInterfaces?: number | undefined;

  /**
   * The number of additional network interfaces that can be attached to an instance when using flexible Elastic Network Adapter (ENA) queues. This number is in addition to the base number specified by `maximumNetworkInterfaces`.
   *
   * @public
   */
  AdditionalFlexibleNetworkInterfaces?: number | undefined;

  /**
   * The baseline network performance of the network card, in Gbps.
   *
   * @public
   */
  BaselineBandwidthInGbps?: number | undefined;

  /**
   * The peak (burst) network performance of the network card, in Gbps.
   *
   * @public
   */
  PeakBandwidthInGbps?: number | undefined;

  /**
   * The default number of the ENA queues for each interface.
   *
   * @public
   */
  DefaultEnaQueueCountPerInterface?: number | undefined;

  /**
   * The maximum number of the ENA queues.
   *
   * @public
   */
  MaximumEnaQueueCount?: number | undefined;

  /**
   * The maximum number of the ENA queues for each interface.
   *
   * @public
   */
  MaximumEnaQueueCountPerInterface?: number | undefined;

  /**
   * The supported interface types for the network card.
   *
   * @public
   */
  InterfaceTypes?: NetworkCardInterfaceType[] | undefined;
}

/**
 * Describes the networking features of the instance type.
 *
 * @public
 */
export interface NetworkInfo {
  /**
   * The network performance.
   *
   * @public
   */
  NetworkPerformance?: string | undefined;

  /**
   * The maximum number of network interfaces for the instance type.
   *
   * @public
   */
  MaximumNetworkInterfaces?: number | undefined;

  /**
   * The maximum number of physical network cards that can be allocated to the instance.
   *
   * @public
   */
  MaximumNetworkCards?: number | undefined;

  /**
   * The index of the default network card, starting at 0.
   *
   * @public
   */
  DefaultNetworkCardIndex?: number | undefined;

  /**
   * Describes the network cards for the instance type.
   *
   * @public
   */
  NetworkCards?: NetworkCardInfo[] | undefined;

  /**
   * The maximum number of IPv4 addresses per network interface.
   *
   * @public
   */
  Ipv4AddressesPerInterface?: number | undefined;

  /**
   * The maximum number of IPv6 addresses per network interface.
   *
   * @public
   */
  Ipv6AddressesPerInterface?: number | undefined;

  /**
   * Indicates whether IPv6 is supported.
   *
   * @public
   */
  Ipv6Supported?: boolean | undefined;

  /**
   * Indicates whether Elastic Network Adapter (ENA) is supported.
   *
   * @public
   */
  EnaSupport?: EnaSupport | undefined;

  /**
   * Indicates whether Elastic Fabric Adapter (EFA) is supported.
   *
   * @public
   */
  EfaSupported?: boolean | undefined;

  /**
   * Describes the Elastic Fabric Adapters for the instance type.
   *
   * @public
   */
  EfaInfo?: EfaInfo | undefined;

  /**
   * Indicates whether the instance type automatically encrypts in-transit traffic between instances.
   *
   * @public
   */
  EncryptionInTransitSupported?: boolean | undefined;

  /**
   * Indicates whether the instance type supports ENA Express. ENA Express uses Amazon Web Services Scalable Reliable Datagram (SRD) technology to increase the maximum bandwidth used per stream and minimize tail latency of network traffic between EC2 instances.
   *
   * @public
   */
  EnaSrdSupported?: boolean | undefined;

  /**
   * A list of valid settings for configurable bandwidth weighting for the instance type, if supported.
   *
   * @public
   */
  BandwidthWeightings?: BandwidthWeightingType[] | undefined;

  /**
   * Indicates whether changing the number of ENA queues is supported.
   *
   * @public
   */
  FlexibleEnaQueuesSupport?: FlexibleEnaQueuesSupport | undefined;

  /**
   * Indicates conntrack information for the instance type
   *
   * @public
   */
  ConnectionTrackingConfiguration?: DefaultConnectionTrackingConfiguration | undefined;

  /**
   * Indicates whether secondary interface attachments from secondary network are supported.
   *
   * @public
   */
  SecondaryNetworkSupported?: boolean | undefined;

  /**
   * The maximum number of secondary interfaces for the instance type.
   *
   * @public
   */
  MaximumSecondaryNetworkInterfaces?: number | undefined;

  /**
   * The maximum number of IPv4 addresses per secondary interface.
   *
   * @public
   */
  Ipv4AddressesPerSecondaryInterface?: number | undefined;
}

/**
 * Describes the cores available to the neuron accelerator.
 *
 * @public
 */
export interface NeuronDeviceCoreInfo {
  /**
   * The number of cores available to the neuron accelerator.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The version of the neuron accelerator.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * Describes the memory available to the neuron accelerator.
 *
 * @public
 */
export interface NeuronDeviceMemoryInfo {
  /**
   * The size of the memory available to the neuron accelerator, in MiB.
   *
   * @public
   */
  SizeInMiB?: number | undefined;
}

/**
 * Describes the neuron accelerators for the instance type.
 *
 * @public
 */
export interface NeuronDeviceInfo {
  /**
   * The number of neuron accelerators for the instance type.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The name of the neuron accelerator.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Describes the cores available to each neuron accelerator.
   *
   * @public
   */
  CoreInfo?: NeuronDeviceCoreInfo | undefined;

  /**
   * Describes the memory available to each neuron accelerator.
   *
   * @public
   */
  MemoryInfo?: NeuronDeviceMemoryInfo | undefined;
}

/**
 * Describes the neuron accelerators for the instance type.
 *
 * @public
 */
export interface NeuronInfo {
  /**
   * Describes the neuron accelerators for the instance type.
   *
   * @public
   */
  NeuronDevices?: NeuronDeviceInfo[] | undefined;

  /**
   * The total size of the memory for the neuron accelerators for the instance type, in MiB.
   *
   * @public
   */
  TotalNeuronDeviceMemoryInMiB?: number | undefined;
}

/**
 * Describes the supported NitroTPM versions for the instance type.
 *
 * @public
 */
export interface NitroTpmInfo {
  /**
   * Indicates the supported NitroTPM versions.
   *
   * @public
   */
  SupportedVersions?: string[] | undefined;
}

/**
 * Describes the placement group support of the instance type.
 *
 * @public
 */
export interface PlacementGroupInfo {
  /**
   * The supported placement group types.
   *
   * @public
   */
  SupportedStrategies?: PlacementGroupStrategy[] | undefined;
}

/**
 * Describes the processor used by the instance type.
 *
 * @public
 */
export interface ProcessorInfo {
  /**
   * The architectures supported by the instance type.
   *
   * @public
   */
  SupportedArchitectures?: ArchitectureType[] | undefined;

  /**
   * The speed of the processor, in GHz.
   *
   * @public
   */
  SustainedClockSpeedInGhz?: number | undefined;

  /**
   * Indicates whether the instance type supports AMD SEV-SNP. If the request returns `amd-sev-snp`, AMD SEV-SNP is supported. Otherwise, it is not supported. For more information, see [AMD SEV-SNP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html).
   *
   * @public
   */
  SupportedFeatures?: SupportedAdditionalProcessorFeature[] | undefined;

  /**
   * The manufacturer of the processor.
   *
   * @public
   */
  Manufacturer?: string | undefined;
}

/**
 * Describes the vCPU configurations for the instance type.
 *
 * @public
 */
export interface VCpuInfo {
  /**
   * The default number of vCPUs for the instance type.
   *
   * @public
   */
  DefaultVCpus?: number | undefined;

  /**
   * The default number of cores for the instance type.
   *
   * @public
   */
  DefaultCores?: number | undefined;

  /**
   * The default number of threads per core for the instance type.
   *
   * @public
   */
  DefaultThreadsPerCore?: number | undefined;

  /**
   * The valid number of cores that can be configured for the instance type.
   *
   * @public
   */
  ValidCores?: number[] | undefined;

  /**
   * The valid number of threads per core that can be configured for the instance type.
   *
   * @public
   */
  ValidThreadsPerCore?: number[] | undefined;
}

/**
 * Describes the instance type.
 *
 * @public
 */
export interface InstanceTypeInfo {
  /**
   * The instance type. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * Indicates whether the instance type is current generation.
   *
   * @public
   */
  CurrentGeneration?: boolean | undefined;

  /**
   * Indicates whether the instance type is eligible for the free tier.
   *
   * @public
   */
  FreeTierEligible?: boolean | undefined;

  /**
   * Indicates whether the instance type is offered for spot, On-Demand, or Capacity Blocks.
   *
   * @public
   */
  SupportedUsageClasses?: UsageClassType[] | undefined;

  /**
   * The supported root device types.
   *
   * @public
   */
  SupportedRootDeviceTypes?: RootDeviceType[] | undefined;

  /**
   * The supported virtualization types.
   *
   * @public
   */
  SupportedVirtualizationTypes?: VirtualizationType[] | undefined;

  /**
   * Indicates whether the instance is a bare metal instance type.
   *
   * @public
   */
  BareMetal?: boolean | undefined;

  /**
   * The hypervisor for the instance type.
   *
   * @public
   */
  Hypervisor?: InstanceTypeHypervisor | undefined;

  /**
   * Describes the processor.
   *
   * @public
   */
  ProcessorInfo?: ProcessorInfo | undefined;

  /**
   * Describes the vCPU configurations for the instance type.
   *
   * @public
   */
  VCpuInfo?: VCpuInfo | undefined;

  /**
   * Describes the memory for the instance type.
   *
   * @public
   */
  MemoryInfo?: MemoryInfo | undefined;

  /**
   * Indicates whether instance storage is supported.
   *
   * @public
   */
  InstanceStorageSupported?: boolean | undefined;

  /**
   * Describes the instance storage for the instance type.
   *
   * @public
   */
  InstanceStorageInfo?: InstanceStorageInfo | undefined;

  /**
   * Describes the Amazon EBS settings for the instance type.
   *
   * @public
   */
  EbsInfo?: EbsInfo | undefined;

  /**
   * Describes the network settings for the instance type.
   *
   * @public
   */
  NetworkInfo?: NetworkInfo | undefined;

  /**
   * Describes the GPU accelerator settings for the instance type.
   *
   * @public
   */
  GpuInfo?: GpuInfo | undefined;

  /**
   * Describes the FPGA accelerator settings for the instance type.
   *
   * @public
   */
  FpgaInfo?: FpgaInfo | undefined;

  /**
   * Describes the placement group settings for the instance type.
   *
   * @public
   */
  PlacementGroupInfo?: PlacementGroupInfo | undefined;

  /**
   * Describes the Inference accelerator settings for the instance type.
   *
   * @public
   */
  InferenceAcceleratorInfo?: InferenceAcceleratorInfo | undefined;

  /**
   * Indicates whether On-Demand hibernation is supported.
   *
   * @public
   */
  HibernationSupported?: boolean | undefined;

  /**
   * Indicates whether the instance type is a burstable performance T instance type. For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html).
   *
   * @public
   */
  BurstablePerformanceSupported?: boolean | undefined;

  /**
   * Indicates whether Dedicated Hosts are supported on the instance type.
   *
   * @public
   */
  DedicatedHostsSupported?: boolean | undefined;

  /**
   * Indicates whether Amazon CloudWatch action based recovery is supported.
   *
   * @public
   */
  AutoRecoverySupported?: boolean | undefined;

  /**
   * The supported boot modes. For more information, see [Boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  SupportedBootModes?: BootModeType[] | undefined;

  /**
   * Indicates whether Nitro Enclaves is supported.
   *
   * @public
   */
  NitroEnclavesSupport?: NitroEnclavesSupport | undefined;

  /**
   * Indicates whether NitroTPM is supported.
   *
   * @public
   */
  NitroTpmSupport?: NitroTpmSupport | undefined;

  /**
   * Describes the supported NitroTPM versions for the instance type.
   *
   * @public
   */
  NitroTpmInfo?: NitroTpmInfo | undefined;

  /**
   * Describes the media accelerator settings for the instance type.
   *
   * @public
   */
  MediaAcceleratorInfo?: MediaAcceleratorInfo | undefined;

  /**
   * Describes the Neuron accelerator settings for the instance type.
   *
   * @public
   */
  NeuronInfo?: NeuronInfo | undefined;

  /**
   * Indicates whether a local Precision Time Protocol (PTP) hardware clock (PHC) is supported.
   *
   * @public
   */
  PhcSupport?: PhcSupport | undefined;

  /**
   * Indicates whether reboot migration during a user-initiated reboot is supported for instances that have a scheduled `system-reboot` event. For more information, see [Enable or disable reboot migration](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/schedevents_actions_reboot.html#reboot-migration) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  RebootMigrationSupport?: RebootMigrationSupport | undefined;

  /**
   * Indicates whether the instance type is supported in the current Region.
   *
   * @public
   */
  SupportedInRegion?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceTypesResult {
  /**
   * The instance type.
   *
   * @public
   */
  InstanceTypes?: InstanceTypeInfo[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInternetGatewaysRequest {
  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the internet gateways.
   *
   * Default: Describes all your internet gateways.
   *
   * @public
   */
  InternetGatewayIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `attachment.state` - The current state of the attachment between the gateway and the VPC (`available`). Present only if a VPC is attached.
   * - `attachment.vpc-id` - The ID of an attached VPC.
   * - `internet-gateway-id` - The ID of the Internet gateway.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the internet gateway.
   * - `tag` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeInternetGatewaysResult {
  /**
   * Information about the internet gateways.
   *
   * @public
   */
  InternetGateways?: InternetGateway[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamByoasnRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamByoasnResult {
  /**
   * ASN and BYOIP CIDR associations.
   *
   * @public
   */
  Byoasns?: Byoasn[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamExternalResourceVerificationTokensRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters for the request. For more information about filtering, see [Filtering CLI output](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html).
   *
   * Available filters:
   *
   * - `ipam-arn`
   * - `ipam-external-resource-verification-token-arn`
   * - `ipam-external-resource-verification-token-id`
   * - `ipam-id`
   * - `ipam-region`
   * - `state`
   * - `status`
   * - `token-name`
   * - `token-value`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of tokens to return in one page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Verification token IDs.
   *
   * @public
   */
  IpamExternalResourceVerificationTokenIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamExternalResourceVerificationTokensResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Verification tokens.
   *
   * @public
   */
  IpamExternalResourceVerificationTokens?: IpamExternalResourceVerificationToken[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamInternetRegistryAssociationsRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the internet registry associations to describe.
   *
   * @public
   */
  IpamInternetRegistryAssociationIds?: string[] | undefined;

  /**
   * The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters to apply to the results.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamInternetRegistryAssociationsResult {
  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The internet registry associations.
   *
   * @public
   */
  IpamInternetRegistryAssociations?: IpamInternetRegistryAssociation[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPoliciesRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters for the IPAM policy description.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The IDs of the IPAM policies to describe.
   *
   * @public
   */
  IpamPolicyIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPoliciesResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the IPAM policies.
   *
   * An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.
   *
   * @public
   */
  IpamPolicies?: IpamPolicy[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPoolAllocationsRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the IPAM pool allocations you want to describe.
   *
   * @public
   */
  IpamPoolAllocationIds?: string[] | undefined;

  /**
   * One or more filters for the request. For more information about filtering, see [Filtering CLI output](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPoolAllocationsResult {
  /**
   * Information about the IPAM pool allocations.
   *
   * @public
   */
  IpamPoolAllocations?: IpamPoolAllocation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPoolsRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters for the request. For more information about filtering, see [Filtering CLI output](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The IDs of the IPAM pools you would like information on.
   *
   * @public
   */
  IpamPoolIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPoolsResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the IPAM pools.
   *
   * @public
   */
  IpamPools?: IpamPool[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPrefixListResolversRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters to limit the results.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The IDs of the IPAM prefix list resolvers to describe. If not specified, all resolvers in your account are described.
   *
   * @public
   */
  IpamPrefixListResolverIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPrefixListResolversResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the IPAM prefix list resolvers.
   *
   * @public
   */
  IpamPrefixListResolvers?: IpamPrefixListResolver[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPrefixListResolverTargetsRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters to limit the results.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The IDs of the IPAM prefix list resolver Targets to describe. If not specified, all targets in your account are described.
   *
   * @public
   */
  IpamPrefixListResolverTargetIds?: string[] | undefined;

  /**
   * The ID of the IPAM prefix list resolver to filter targets by. Only targets associated with this resolver will be returned.
   *
   * @public
   */
  IpamPrefixListResolverId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamPrefixListResolverTargetsResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the IPAM prefix list resolver Targets.
   *
   * @public
   */
  IpamPrefixListResolverTargets?: IpamPrefixListResolverTarget[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamResourceDiscoveriesRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IPAM resource discovery IDs.
   *
   * @public
   */
  IpamResourceDiscoveryIds?: string[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of resource discoveries to return in one page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The resource discovery filters.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamResourceDiscoveriesResult {
  /**
   * The resource discoveries.
   *
   * @public
   */
  IpamResourceDiscoveries?: IpamResourceDiscovery[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamResourceDiscoveryAssociationsRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The resource discovery association IDs.
   *
   * @public
   */
  IpamResourceDiscoveryAssociationIds?: string[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of resource discovery associations to return in one page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The resource discovery association filters.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamResourceDiscoveryAssociationsResult {
  /**
   * The resource discovery associations.
   *
   * @public
   */
  IpamResourceDiscoveryAssociations?: IpamResourceDiscoveryAssociation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamsRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters for the request. For more information about filtering, see [Filtering CLI output](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The IDs of the IPAMs you want information on.
   *
   * @public
   */
  IpamIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamsResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the IPAMs.
   *
   * @public
   */
  Ipams?: Ipam[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamScopesRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters for the request. For more information about filtering, see [Filtering CLI output](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The IDs of the scopes you want information on.
   *
   * @public
   */
  IpamScopeIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamScopesResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The scopes you want information on.
   *
   * @public
   */
  IpamScopes?: IpamScope[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpv6PoolsRequest {
  /**
   * The IDs of the IPv6 address pools.
   *
   * @public
   */
  PoolIds?: string[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters.
   *
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Describes a CIDR block for an address pool.
 *
 * @public
 */
export interface PoolCidrBlock {
  /**
   * The CIDR block.
   *
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * Describes an IPv6 address pool.
 *
 * @public
 */
export interface Ipv6Pool {
  /**
   * The ID of the address pool.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The description for the address pool.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The CIDR blocks for the address pool.
   *
   * @public
   */
  PoolCidrBlocks?: PoolCidrBlock[] | undefined;

  /**
   * Any tags for the address pool.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpv6PoolsResult {
  /**
   * Information about the IPv6 address pools.
   *
   * @public
   */
  Ipv6Pools?: Ipv6Pool[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeKeyPairsRequest {
  /**
   * The key pair names.
   *
   * Default: Describes all of your key pairs.
   *
   * @public
   */
  KeyNames?: string[] | undefined;

  /**
   * The IDs of the key pairs.
   *
   * @public
   */
  KeyPairIds?: string[] | undefined;

  /**
   * If `true`, the public key material is included in the response.
   *
   * Default: `false`
   *
   * @public
   */
  IncludePublicKey?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `key-pair-id` - The ID of the key pair.
   * - `fingerprint` - The fingerprint of the key pair.
   * - `key-name` - The name of the key pair.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Describes a key pair.
 *
 * @public
 */
export interface KeyPairInfo {
  /**
   * The ID of the key pair.
   *
   * @public
   */
  KeyPairId?: string | undefined;

  /**
   * The type of key pair.
   *
   * @public
   */
  KeyType?: KeyType | undefined;

  /**
   * Any tags applied to the key pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The public key material.
   *
   * @public
   */
  PublicKey?: string | undefined;

  /**
   * If you used Amazon EC2 to create the key pair, this is the date and time when the key was created, in [ISO 8601 date-time format](https://www.iso.org/iso-8601-date-and-time-format.html), in the UTC time zone.
   *
   * If you imported an existing key pair to Amazon EC2, this is the date and time the key was imported, in [ISO 8601 date-time format](https://www.iso.org/iso-8601-date-and-time-format.html), in the UTC time zone.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The name of the key pair.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * If you used CreateKeyPair to create the key pair:
   *
   * - For RSA key pairs, the key fingerprint is the SHA-1 digest of the DER encoded private key.
   * - For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which is the default for OpenSSH, starting with [OpenSSH 6.8](http://www.openssh.com/txt/release-6.8).
   *
   * If you used ImportKeyPair to provide Amazon Web Services the public key:
   *
   * - For RSA key pairs, the key fingerprint is the MD5 public key fingerprint as specified in section 4 of RFC4716.
   * - For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which is the default for OpenSSH, starting with [OpenSSH 6.8](http://www.openssh.com/txt/release-6.8).
   *
   * @public
   */
  KeyFingerprint?: string | undefined;
}

/**
 * @public
 */
export interface DescribeKeyPairsResult {
  /**
   * Information about the key pairs.
   *
   * @public
   */
  KeyPairs?: KeyPairInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchTemplatesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more launch template IDs.
   *
   * @public
   */
  LaunchTemplateIds?: string[] | undefined;

  /**
   * One or more launch template names.
   *
   * @public
   */
  LaunchTemplateNames?: string[] | undefined;

  /**
   * One or more filters.
   *
   * - `create-time` - The time the launch template was created.
   * - `launch-template-name` - The name of the launch template.
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `NextToken` value. This value can be between 1 and 200.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Indicates whether to include managed resources in the output. If this parameter is set to `true`, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.
   *
   * @public
   */
  IncludeManagedResources?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchTemplatesResult {
  /**
   * Information about the launch templates.
   *
   * @public
   */
  LaunchTemplates?: LaunchTemplate[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchTemplateVersionsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the launch template.
   *
   * To describe one or more versions of a specified launch template, you must specify either the launch template ID or the launch template name, but not both.
   *
   * To describe all the latest or default launch template versions in your account, you must omit this parameter.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template.
   *
   * To describe one or more versions of a specified launch template, you must specify either the launch template name or the launch template ID, but not both.
   *
   * To describe all the latest or default launch template versions in your account, you must omit this parameter.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * One or more versions of the launch template. Valid values depend on whether you are describing a specified launch template (by ID or name) or all launch templates in your account.
   *
   * To describe one or more versions of a specified launch template, valid values are `$Latest`, `$Default`, and numbers.
   *
   * To describe all launch templates in your account that are defined as the latest version, the valid value is `$Latest`. To describe all launch templates in your account that are defined as the default version, the valid value is `$Default`. You can specify `$Latest` and `$Default` in the same request. You cannot specify numbers.
   *
   * @public
   */
  Versions?: string[] | undefined;

  /**
   * The version number after which to describe launch template versions.
   *
   * @public
   */
  MinVersion?: string | undefined;

  /**
   * The version number up to which to describe launch template versions.
   *
   * @public
   */
  MaxVersion?: string | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `NextToken` value. This value can be between 1 and 200.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters.
   *
   * - `create-time` - The time the launch template version was created.
   * - `ebs-optimized` - A boolean that indicates whether the instance is optimized for Amazon EBS I/O.
   * - `http-endpoint` - Indicates whether the HTTP metadata endpoint on your instances is enabled (`enabled` | `disabled`).
   * - `http-protocol-ipv4` - Indicates whether the IPv4 endpoint for the instance metadata service is enabled (`enabled` | `disabled`).
   * - `host-resource-group-arn` - The ARN of the host resource group in which to launch the instances.
   * - `http-tokens` - The state of token usage for your instance metadata requests (`optional` | `required`).
   * - `iam-instance-profile` - The ARN of the IAM instance profile.
   * - `image-id` - The ID of the AMI.
   * - `instance-type` - The instance type.
   * - `is-default-version` - A boolean that indicates whether the launch template version is the default version.
   * - `kernel-id` - The kernel ID.
   * - `license-configuration-arn` - The ARN of the license configuration.
   * - `network-card-index` - The index of the network card.
   * - `ram-disk-id` - The RAM disk ID.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * If `true`, and if a Systems Manager parameter is specified for `ImageId`, the AMI ID is displayed in the response for `imageId`.
   *
   * If `false`, and if a Systems Manager parameter is specified for `ImageId`, the parameter is displayed in the response for `imageId`.
   *
   * For more information, see [Use a Systems Manager parameter instead of an AMI ID](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id) in the *Amazon EC2 User Guide*.
   *
   * Default: `false`
   *
   * @public
   */
  ResolveAlias?: boolean | undefined;

  /**
   * Indicates whether to include managed resources in the output. If this parameter is set to `true`, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.
   *
   * @public
   */
  IncludeManagedResources?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchTemplateVersionsResult {
  /**
   * Information about the launch template versions.
   *
   * @public
   */
  LaunchTemplateVersions?: LaunchTemplateVersion[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayRouteTablesRequest {
  /**
   * The IDs of the local gateway route tables.
   *
   * @public
   */
  LocalGatewayRouteTableIds?: string[] | undefined;

  /**
   * One or more filters.
   *
   * - `local-gateway-id` - The ID of a local gateway.
   * - `local-gateway-route-table-arn` - The Amazon Resource Name (ARN) of the local gateway route table.
   * - `local-gateway-route-table-id` - The ID of a local gateway route table.
   * - `outpost-arn` - The Amazon Resource Name (ARN) of the Outpost.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the local gateway route table.
   * - `state` - The state of the local gateway route table.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

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
export interface DescribeLocalGatewayRouteTablesResult {
  /**
   * Information about the local gateway route tables.
   *
   * @public
   */
  LocalGatewayRouteTables?: LocalGatewayRouteTable[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
  /**
   * The IDs of the associations.
   *
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationIds?: string[] | undefined;

  /**
   * One or more filters.
   *
   * - `local-gateway-id` - The ID of a local gateway.
   * - `local-gateway-route-table-arn` - The Amazon Resource Name (ARN) of the local gateway route table for the virtual interface group.
   * - `local-gateway-route-table-id` - The ID of the local gateway route table.
   * - `local-gateway-route-table-virtual-interface-group-association-id` - The ID of the association.
   * - `local-gateway-route-table-virtual-interface-group-id` - The ID of the virtual interface group.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the local gateway virtual interface group association.
   * - `state` - The state of the association.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

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
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult {
  /**
   * Information about the associations.
   *
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociations?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayRouteTableVpcAssociationsRequest {
  /**
   * The IDs of the associations.
   *
   * @public
   */
  LocalGatewayRouteTableVpcAssociationIds?: string[] | undefined;

  /**
   * One or more filters.
   *
   * - `local-gateway-id` - The ID of a local gateway.
   * - `local-gateway-route-table-arn` - The Amazon Resource Name (ARN) of the local gateway route table for the association.
   * - `local-gateway-route-table-id` - The ID of the local gateway route table.
   * - `local-gateway-route-table-vpc-association-id` - The ID of the association.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the local gateway route table for the association.
   * - `state` - The state of the association.
   * - `vpc-id` - The ID of the VPC.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

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
export interface DescribeLocalGatewayRouteTableVpcAssociationsResult {
  /**
   * Information about the associations.
   *
   * @public
   */
  LocalGatewayRouteTableVpcAssociations?: LocalGatewayRouteTableVpcAssociation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewaysRequest {
  /**
   * The IDs of the local gateways.
   *
   * @public
   */
  LocalGatewayIds?: string[] | undefined;

  /**
   * One or more filters.
   *
   * - `local-gateway-id` - The ID of a local gateway.
   * - `outpost-arn` - The Amazon Resource Name (ARN) of the Outpost.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the local gateway.
   * - `state` - The state of the association.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a local gateway.
 *
 * @public
 */
export interface LocalGateway {
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
   * The ID of the Amazon Web Services account that owns the local gateway.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The state of the local gateway.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The tags assigned to the local gateway.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewaysResult {
  /**
   * Information about the local gateways.
   *
   * @public
   */
  LocalGateways?: LocalGateway[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayVirtualInterfaceGroupsRequest {
  /**
   * The IDs of the virtual interface groups.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceGroupIds?: string[] | undefined;

  /**
   * One or more filters.
   *
   * - `local-gateway-id` - The ID of a local gateway.
   * - `local-gateway-virtual-interface-group-id` - The ID of the virtual interface group.
   * - `local-gateway-virtual-interface-id` - The ID of the virtual interface.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the local gateway virtual interface group.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

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
export interface DescribeLocalGatewayVirtualInterfaceGroupsResult {
  /**
   * The virtual interface groups.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceGroups?: LocalGatewayVirtualInterfaceGroup[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayVirtualInterfacesRequest {
  /**
   * The IDs of the virtual interfaces.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceIds?: string[] | undefined;

  /**
   * One or more filters.
   *
   * - `local-address` - The local address.
   * - `local-bgp-asn` - The Border Gateway Protocol (BGP) Autonomous System Number (ASN) of the local gateway.
   * - `local-gateway-id` - The ID of the local gateway.
   * - `local-gateway-virtual-interface-id` - The ID of the virtual interface.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the local gateway virtual interface.
   * - `peer-address` - The peer address.
   * - `peer-bgp-asn` - The peer BGP ASN.
   * - `vlan` - The ID of the VLAN.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

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
export interface DescribeLocalGatewayVirtualInterfacesResult {
  /**
   * Information about the virtual interfaces.
   *
   * @public
   */
  LocalGatewayVirtualInterfaces?: LocalGatewayVirtualInterface[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLockedSnapshotsRequest {
  /**
   * The filters.
   *
   * - `lock-state` - The state of the snapshot lock (`compliance-cooloff` | `governance` | `compliance` | `expired`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The IDs of the snapshots for which to view the lock status.
   *
   * @public
   */
  SnapshotIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about a locked snapshot.
 *
 * @public
 */
export interface LockedSnapshotsInfo {
  /**
   * The account ID of the Amazon Web Services account that owns the snapshot.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The state of the snapshot lock. Valid states include:
   *
   * - `compliance-cooloff` - The snapshot has been locked in compliance mode but it is still within the cooling-off period. The snapshot can't be deleted, but it can be unlocked and the lock settings can be modified by users with appropriate permissions.
   * - `governance` - The snapshot is locked in governance mode. The snapshot can't be deleted, but it can be unlocked and the lock settings can be modified by users with appropriate permissions.
   * - `compliance` - The snapshot is locked in compliance mode and the cooling-off period has expired. The snapshot can't be unlocked or deleted. The lock duration can only be increased by users with appropriate permissions.
   * - `expired` - The snapshot was locked in compliance or governance mode but the lock duration has expired. The snapshot is not locked and can be deleted.
   *
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * The period of time for which the snapshot is locked, in days.
   *
   * @public
   */
  LockDuration?: number | undefined;

  /**
   * The compliance mode cooling-off period, in hours.
   *
   * @public
   */
  CoolOffPeriod?: number | undefined;

  /**
   * The date and time at which the compliance mode cooling-off period expires, in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`).
   *
   * @public
   */
  CoolOffPeriodExpiresOn?: Date | undefined;

  /**
   * The date and time at which the snapshot was locked, in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`).
   *
   * @public
   */
  LockCreatedOn?: Date | undefined;

  /**
   * The date and time at which the lock duration started, in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`).
   *
   * If you lock a snapshot that is in the `pending` state, the lock duration starts only once the snapshot enters the `completed` state.
   *
   * @public
   */
  LockDurationStartTime?: Date | undefined;

  /**
   * The date and time at which the lock will expire, in the UTC time zone (`YYYY-MM-DDThh:mm:ss.sssZ`).
   *
   * @public
   */
  LockExpiresOn?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeLockedSnapshotsResult {
  /**
   * Information about the snapshots.
   *
   * @public
   */
  Snapshots?: LockedSnapshotsInfo[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMacHostsRequest {
  /**
   * The filters.
   *
   * - `availability-zone` - The Availability Zone of the EC2 Mac Dedicated Host.
   * - `instance-type` - The instance type size that the EC2 Mac Dedicated Host is configured to support.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The IDs of the EC2 Mac Dedicated Hosts.
   *
   * @public
   */
  HostIds?: string[] | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned `nextToken` value. This value can be between 5 and 500. If `maxResults` is given a larger value than 500, you receive an error.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about the EC2 Mac Dedicated Host.
 *
 * @public
 */
export interface MacHost {
  /**
   * The EC2 Mac Dedicated Host ID.
   *
   * @public
   */
  HostId?: string | undefined;

  /**
   * The latest macOS versions that the EC2 Mac Dedicated Host can launch without being upgraded.
   *
   * @public
   */
  MacOSLatestSupportedVersions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeMacHostsResult {
  /**
   * Information about the EC2 Mac Dedicated Hosts.
   *
   * @public
   */
  MacHosts?: MacHost[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMacModificationTasksRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Specifies one or more filters for the request:
   *
   * - `instance-id` - The ID of the instance for which the task was created.
   * - `task-state` - The state of the task (`successful` | `failed` | `in-progress` | `pending`).
   * - `mac-system-integrity-protection-configuration.sip-status` - The overall SIP state requested in the task (`enabled` | `disabled`).
   * - `start-time` - The date and time the task was created.
   * - `task-type` - The type of task (`sip-modification` | `volume-ownership-delegation`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The ID of task.
   *
   * @public
   */
  MacModificationTaskIds?: string[] | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned `nextToken` value. This value can be between 5 and 500. If `maxResults` is given a larger value than 500, you receive an error.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMacModificationTasksResult {
  /**
   * Information about the tasks.
   *
   * @public
   */
  MacModificationTasks?: MacModificationTask[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeManagedPrefixListsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters.
   *
   * - `owner-id` - The ID of the prefix list owner.
   * - `prefix-list-id` - The ID of the prefix list.
   * - `prefix-list-name` - The name of the prefix list.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more prefix list IDs.
   *
   * @public
   */
  PrefixListIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeManagedPrefixListsResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the prefix lists.
   *
   * @public
   */
  PrefixLists?: ManagedPrefixList[] | undefined;
}

/**
 * @public
 */
export interface DescribeMovingAddressesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more Elastic IP addresses.
   *
   * @public
   */
  PublicIps?: string[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters.
   *
   * - `moving-status` - The status of the Elastic IP address (`MovingToVpc` | `RestoringToClassic`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results of the initial request can be seen by sending another request with the returned `NextToken` value. This value can be between 5 and 1000; if `MaxResults` is given a value outside of this range, an error is returned.
   *
   * Default: If no value is provided, the default is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * > **Note:** This action is deprecated.
 *
 * Describes the status of a moving Elastic IP address.
 *
 * @public
 */
export interface MovingAddressStatus {
  /**
   * The status of the Elastic IP address that's being moved or restored.
   *
   * @public
   */
  MoveStatus?: MoveStatus | undefined;

  /**
   * The Elastic IP address.
   *
   * @public
   */
  PublicIp?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMovingAddressesResult {
  /**
   * The status for each Elastic IP address.
   *
   * @public
   */
  MovingAddressStatuses?: MovingAddressStatus[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNatGatewaysRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `nat-gateway-id` - The ID of the NAT gateway.
   * - `state` - The state of the NAT gateway (`pending` | `failed` | `available` | `deleting` | `deleted`).
   * - `subnet-id` - The ID of the subnet in which the NAT gateway resides.
   * - `tag` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `vpc-id` - The ID of the VPC in which the NAT gateway resides.
   *
   * @public
   */
  Filter?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The IDs of the NAT gateways.
   *
   * @public
   */
  NatGatewayIds?: string[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNatGatewaysResult {
  /**
   * Information about the NAT gateways.
   *
   * @public
   */
  NatGateways?: NatGateway[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkAclsRequest {
  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the network ACLs.
   *
   * @public
   */
  NetworkAclIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `association.association-id` - The ID of an association ID for the ACL.
   * - `association.network-acl-id` - The ID of the network ACL involved in the association.
   * - `association.subnet-id` - The ID of the subnet involved in the association.
   * - `default` - Indicates whether the ACL is the default network ACL for the VPC.
   * - `entry.cidr` - The IPv4 CIDR range specified in the entry.
   * - `entry.icmp.code` - The ICMP code specified in the entry, if any.
   * - `entry.icmp.type` - The ICMP type specified in the entry, if any.
   * - `entry.ipv6-cidr` - The IPv6 CIDR range specified in the entry.
   * - `entry.port-range.from` - The start of the port range specified in the entry.
   * - `entry.port-range.to` - The end of the port range specified in the entry.
   * - `entry.protocol` - The protocol specified in the entry (`tcp` | `udp` | `icmp` or a protocol number).
   * - `entry.rule-action` - Allows or denies the matching traffic (`allow` | `deny`).
   * - `entry.egress` - A Boolean that indicates the type of rule. Specify `true` for egress rules, or `false` for ingress rules.
   * - `entry.rule-number` - The number of an entry (in other words, rule) in the set of ACL entries.
   * - `network-acl-id` - The ID of the network ACL.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the network ACL.
   * - `tag` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `vpc-id` - The ID of the VPC for the network ACL.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkAclsResult {
  /**
   * Information about the network ACLs.
   *
   * @public
   */
  NetworkAcls?: NetworkAcl[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopeAnalysesRequest {
  /**
   * The IDs of the Network Access Scope analyses.
   *
   * @public
   */
  NetworkInsightsAccessScopeAnalysisIds?: string[] | undefined;

  /**
   * The ID of the Network Access Scope.
   *
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;

  /**
   * Filters the results based on the start time. The analysis must have started on or after this time.
   *
   * @public
   */
  AnalysisStartTimeBegin?: Date | undefined;

  /**
   * Filters the results based on the start time. The analysis must have started on or before this time.
   *
   * @public
   */
  AnalysisStartTimeEnd?: Date | undefined;

  /**
   * There are no supported filters.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a Network Access Scope analysis.
 *
 * @public
 */
export interface NetworkInsightsAccessScopeAnalysis {
  /**
   * The ID of the Network Access Scope analysis.
   *
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Network Access Scope analysis.
   *
   * @public
   */
  NetworkInsightsAccessScopeAnalysisArn?: string | undefined;

  /**
   * The ID of the Network Access Scope.
   *
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;

  /**
   * The status.
   *
   * @public
   */
  Status?: AnalysisStatus | undefined;

  /**
   * The status message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The warning message.
   *
   * @public
   */
  WarningMessage?: string | undefined;

  /**
   * The analysis start date.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The analysis end date.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * Indicates whether there are findings.
   *
   * @public
   */
  FindingsFound?: FindingsFound | undefined;

  /**
   * The number of network interfaces analyzed.
   *
   * @public
   */
  AnalyzedEniCount?: number | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopeAnalysesResult {
  /**
   * The Network Access Scope analyses.
   *
   * @public
   */
  NetworkInsightsAccessScopeAnalyses?: NetworkInsightsAccessScopeAnalysis[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopesRequest {
  /**
   * The IDs of the Network Access Scopes.
   *
   * @public
   */
  NetworkInsightsAccessScopeIds?: string[] | undefined;

  /**
   * There are no supported filters.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopesResult {
  /**
   * The Network Access Scopes.
   *
   * @public
   */
  NetworkInsightsAccessScopes?: NetworkInsightsAccessScope[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAnalysesRequest {
  /**
   * The ID of the network insights analyses. You must specify either analysis IDs or a path ID.
   *
   * @public
   */
  NetworkInsightsAnalysisIds?: string[] | undefined;

  /**
   * The ID of the path. You must specify either a path ID or analysis IDs.
   *
   * @public
   */
  NetworkInsightsPathId?: string | undefined;

  /**
   * The time when the network insights analyses started.
   *
   * @public
   */
  AnalysisStartTime?: Date | undefined;

  /**
   * The time when the network insights analyses ended.
   *
   * @public
   */
  AnalysisEndTime?: Date | undefined;

  /**
   * The filters. The following are the possible values:
   *
   * - path-found - A Boolean value that indicates whether a feasible path is found.
   * - status - The status of the analysis (running | succeeded | failed).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a network insights analysis.
 *
 * @public
 */
export interface NetworkInsightsAnalysis {
  /**
   * The ID of the network insights analysis.
   *
   * @public
   */
  NetworkInsightsAnalysisId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the network insights analysis.
   *
   * @public
   */
  NetworkInsightsAnalysisArn?: string | undefined;

  /**
   * The ID of the path.
   *
   * @public
   */
  NetworkInsightsPathId?: string | undefined;

  /**
   * The member accounts that contain resources that the path can traverse.
   *
   * @public
   */
  AdditionalAccounts?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARN) of the resources that the path must traverse.
   *
   * @public
   */
  FilterInArns?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARN) of the resources that the path must ignore.
   *
   * @public
   */
  FilterOutArns?: string[] | undefined;

  /**
   * The time the analysis started.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The status of the network insights analysis.
   *
   * @public
   */
  Status?: AnalysisStatus | undefined;

  /**
   * The status message, if the status is `failed`.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The warning message.
   *
   * @public
   */
  WarningMessage?: string | undefined;

  /**
   * Indicates whether the destination is reachable from the source.
   *
   * @public
   */
  NetworkPathFound?: boolean | undefined;

  /**
   * The components in the path from source to destination.
   *
   * @public
   */
  ForwardPathComponents?: PathComponent[] | undefined;

  /**
   * The components in the path from destination to source.
   *
   * @public
   */
  ReturnPathComponents?: PathComponent[] | undefined;

  /**
   * The explanations. For more information, see [Reachability Analyzer explanation codes](https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html).
   *
   * @public
   */
  Explanations?: Explanation[] | undefined;

  /**
   * Potential intermediate components.
   *
   * @public
   */
  AlternatePathHints?: AlternatePathHint[] | undefined;

  /**
   * Potential intermediate accounts.
   *
   * @public
   */
  SuggestedAccounts?: string[] | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAnalysesResult {
  /**
   * Information about the network insights analyses.
   *
   * @public
   */
  NetworkInsightsAnalyses?: NetworkInsightsAnalysis[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsPathsRequest {
  /**
   * The IDs of the paths.
   *
   * @public
   */
  NetworkInsightsPathIds?: string[] | undefined;

  /**
   * The filters. The following are the possible values:
   *
   * - destination - The ID of the resource.
   * - filter-at-source.source-address - The source IPv4 address at the source.
   * - filter-at-source.source-port-range - The source port range at the source.
   * - filter-at-source.destination-address - The destination IPv4 address at the source.
   * - filter-at-source.destination-port-range - The destination port range at the source.
   * - filter-at-destination.source-address - The source IPv4 address at the destination.
   * - filter-at-destination.source-port-range - The source port range at the destination.
   * - filter-at-destination.destination-address - The destination IPv4 address at the destination.
   * - filter-at-destination.destination-port-range - The destination port range at the destination.
   * - protocol - The protocol.
   * - source - The ID of the resource.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsPathsResult {
  /**
   * Information about the paths.
   *
   * @public
   */
  NetworkInsightsPaths?: NetworkInsightsPath[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the parameters for DescribeNetworkInterfaceAttribute.
 *
 * @public
 */
export interface DescribeNetworkInterfaceAttributeRequest {
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
   * The attribute of the network interface. This parameter is required.
   *
   * @public
   */
  Attribute?: NetworkInterfaceAttribute | undefined;
}

/**
 * Contains the output of DescribeNetworkInterfaceAttribute.
 *
 * @public
 */
export interface DescribeNetworkInterfaceAttributeResult {
  /**
   * The attachment (if any) of the network interface.
   *
   * @public
   */
  Attachment?: NetworkInterfaceAttachment | undefined;

  /**
   * The description of the network interface.
   *
   * @public
   */
  Description?: AttributeValue | undefined;

  /**
   * The security groups associated with the network interface.
   *
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * Indicates whether source/destination checking is enabled.
   *
   * @public
   */
  SourceDestCheck?: AttributeBooleanValue | undefined;

  /**
   * Indicates whether to assign a public IPv4 address to a network interface. This option can be enabled for any network interface but will only apply to the primary network interface (eth0).
   *
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;
}

/**
 * Contains the parameters for DescribeNetworkInterfacePermissions.
 *
 * @public
 */
export interface DescribeNetworkInterfacePermissionsRequest {
  /**
   * The network interface permission IDs.
   *
   * @public
   */
  NetworkInterfacePermissionIds?: string[] | undefined;

  /**
   * One or more filters.
   *
   * - `network-interface-permission.network-interface-permission-id` - The ID of the permission.
   * - `network-interface-permission.network-interface-id` - The ID of the network interface.
   * - `network-interface-permission.aws-account-id` - The Amazon Web Services account ID.
   * - `network-interface-permission.aws-service` - The Amazon Web Services service.
   * - `network-interface-permission.permission` - The type of permission (`INSTANCE-ATTACH` | `EIP-ASSOCIATE`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. If this parameter is not specified, up to 50 results are returned by default. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains the output for DescribeNetworkInterfacePermissions.
 *
 * @public
 */
export interface DescribeNetworkInterfacePermissionsResult {
  /**
   * The network interface permissions.
   *
   * @public
   */
  NetworkInterfacePermissions?: NetworkInterfacePermission[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the parameters for DescribeNetworkInterfaces.
 *
 * @public
 */
export interface DescribeNetworkInterfacesRequest {
  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. You cannot specify this parameter and the network interface IDs parameter in the same request. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Indicates whether to include managed resources in the output. If this parameter is set to `true`, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.
   *
   * @public
   */
  IncludeManagedResources?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The network interface IDs.
   *
   * Default: Describes all your network interfaces.
   *
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * One or more filters.
   *
   * - `association.allocation-id` - The allocation ID returned when you allocated the Elastic IP address (IPv4) for your network interface.
   * - `association.association-id` - The association ID returned when the network interface was associated with an IPv4 address.
   * - `addresses.association.owner-id` - The owner ID of the addresses associated with the network interface.
   * - `addresses.association.public-ip` - The association ID returned when the network interface was associated with the Elastic IP address (IPv4).
   * - `addresses.primary` - Whether the private IPv4 address is the primary IP address associated with the network interface.
   * - `addresses.private-ip-address` - The private IPv4 addresses associated with the network interface.
   * - `association.ip-owner-id` - The owner of the Elastic IP address (IPv4) associated with the network interface.
   * - `association.public-ip` - The address of the Elastic IP address (IPv4) bound to the network interface.
   * - `association.public-dns-name` - The public DNS name for the network interface (IPv4).
   * - `attachment.attach-time` - The time that the network interface was attached to an instance.
   * - `attachment.attachment-id` - The ID of the interface attachment.
   * - `attachment.delete-on-termination` - Indicates whether the attachment is deleted when an instance is terminated.
   * - `attachment.device-index` - The device index to which the network interface is attached.
   * - `attachment.instance-id` - The ID of the instance to which the network interface is attached.
   * - `attachment.instance-owner-id` - The owner ID of the instance to which the network interface is attached.
   * - `attachment.status` - The status of the attachment (`attaching` | `attached` | `detaching` | `detached`).
   * - `availability-zone` - The Availability Zone of the network interface.
   * - `availability-zone-id` - The ID of the Availability Zone of the network interface.
   * - `description` - The description of the network interface.
   * - `group-id` - The ID of a security group associated with the network interface.
   * - `ipv6-addresses.ipv6-address` - An IPv6 address associated with the network interface.
   * - `interface-type` - The type of network interface (`api_gateway_managed` | `aws_codestar_connections_managed` | `branch` | `ec2_instance_connect_endpoint` | `efa` | `efa-only` | `efs` | `evs` | `gateway_load_balancer` | `gateway_load_balancer_endpoint` | `global_accelerator_managed` | `interface` | `iot_rules_managed` | `lambda` | `load_balancer` | `nat_gateway` | `network_load_balancer` | `quicksight` | `transit_gateway` | `trunk` | `vpc_endpoint`).
   * - `mac-address` - The MAC address of the network interface.
   * - `network-interface-id` - The ID of the network interface.
   * - `operator.managed` - A Boolean that indicates whether this is a managed network interface.
   * - `operator.principal` - The principal that manages the network interface. Only valid for managed network interfaces, where `managed` is `true`.
   * - `owner-id` - The Amazon Web Services account ID of the network interface owner.
   * - `private-dns-name` - The private DNS name of the network interface (IPv4).
   * - `private-ip-address` - The private IPv4 address or addresses of the network interface.
   * - `requester-id` - The alias or Amazon Web Services account ID of the principal or service that created the network interface.
   * - `requester-managed` - Indicates whether the network interface is being managed by an Amazon Web Services service (for example, Amazon Web Services Management Console, Auto Scaling, and so on).
   * - `source-dest-check` - Indicates whether the network interface performs source/destination checking. A value of `true` means checking is enabled, and `false` means checking is disabled. The value must be `false` for the network interface to perform network address translation (NAT) in your VPC.
   * - `status` - The status of the network interface. If the network interface is not attached to an instance, the status is `available`; if a network interface is attached to an instance the status is `in-use`.
   * - `subnet-id` - The ID of the subnet for the network interface.
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `vpc-id` - The ID of the VPC for the network interface.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInterfacesResult {
  /**
   * Information about the network interfaces.
   *
   * @public
   */
  NetworkInterfaces?: NetworkInterface[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOutpostLagsRequest {
  /**
   * The IDs of the Outpost LAGs.
   *
   * @public
   */
  OutpostLagIds?: string[] | undefined;

  /**
   * The filters to use for narrowing down the request. The following filters are supported:
   *
   * - `service-link-virtual-interface-id` - The ID of the service link virtual interface.
   * - `service-link-virtual-interface-arn` - The ARN of the service link virtual interface.
   * - `outpost-id` - The Outpost ID.
   * - `outpost-arn` - The Outpost ARN.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the service link virtual interface.
   * - `vlan` - The ID of the address pool.
   * - `local-address` - The local address.
   * - `peer-address` - The peer address.
   * - `peer-bgp-asn` - The peer BGP ASN.
   * - `outpost-lag-id` - The Outpost LAG ID.
   * - `configuration-state` - The configuration state of the service link virtual interface.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes an Outpost link aggregation group (LAG).
 *
 * @public
 */
export interface OutpostLag {
  /**
   * The Amazon Resource Number (ARN) of the Outpost LAG.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The ID of the Outpost LAG owner.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The current state of the Outpost LAG.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The ID of the Outpost LAG.
   *
   * @public
   */
  OutpostLagId?: string | undefined;

  /**
   * The IDs of the local gateway virtual interfaces associated with the Outpost LAG.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceIds?: string[] | undefined;

  /**
   * The service link virtual interface IDs associated with the Outpost LAG.
   *
   * @public
   */
  ServiceLinkVirtualInterfaceIds?: string[] | undefined;

  /**
   * The tags associated with the Outpost LAG.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeOutpostLagsResult {
  /**
   * The Outpost LAGs.
   *
   * @public
   */
  OutpostLags?: OutpostLag[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePlacementGroupsRequest {
  /**
   * The IDs of the placement groups.
   *
   * @public
   */
  GroupIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The names of the placement groups.
   *
   * Constraints:
   *
   * - You can specify a name only if the placement group is owned by your account.
   * - If a placement group is *shared* with your account, specifying the name results in an error. You must use the `GroupId` parameter instead.
   *
   * @public
   */
  GroupNames?: string[] | undefined;

  /**
   * The filters.
   *
   * - `group-name` - The name of the placement group.
   * - `group-arn` - The Amazon Resource Name (ARN) of the placement group.
   * - `spread-level` - The spread level for the placement group (`host` | `rack`).
   * - `state` - The state of the placement group (`pending` | `available` | `deleting` | `deleted`).
   * - `strategy` - The strategy of the placement group (`cluster` | `spread` | `partition` | `precision-time`).
   * - `tag:<key>` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribePlacementGroupsResult {
  /**
   * Information about the placement groups.
   *
   * @public
   */
  PlacementGroups?: PlacementGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribePrefixListsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters.
   *
   * - `prefix-list-id`: The ID of a prefix list.
   * - `prefix-list-name`: The name of a prefix list.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more prefix list IDs.
   *
   * @public
   */
  PrefixListIds?: string[] | undefined;
}

/**
 * Describes prefixes for Amazon Web Services services.
 *
 * @public
 */
export interface PrefixList {
  /**
   * The IP address range of the Amazon Web Services service.
   *
   * @public
   */
  Cidrs?: string[] | undefined;

  /**
   * The ID of the prefix.
   *
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * The name of the prefix.
   *
   * @public
   */
  PrefixListName?: string | undefined;
}

/**
 * @public
 */
export interface DescribePrefixListsResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * All available prefix lists.
   *
   * @public
   */
  PrefixLists?: PrefixList[] | undefined;
}

/**
 * @public
 */
export interface DescribePrincipalIdFormatRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The type of resource: `bundle` | `conversion-task` | `customer-gateway` | `dhcp-options` | `elastic-ip-allocation` | `elastic-ip-association` | `export-task` | `flow-log` | `image` | `import-task` | `instance` | `internet-gateway` | `network-acl` | `network-acl-association` | `network-interface` | `network-interface-attachment` | `prefix-list` | `reservation` | `route-table` | `route-table-association` | `security-group` | `snapshot` | `subnet` | `subnet-cidr-block-association` | `volume` | `vpc` | `vpc-cidr-block-association` | `vpc-endpoint` | `vpc-peering-connection` | `vpn-connection` | `vpn-gateway`
   *
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * PrincipalIdFormat description
 *
 * @public
 */
export interface PrincipalIdFormat {
  /**
   * PrincipalIdFormatARN description
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * PrincipalIdFormatStatuses description
   *
   * @public
   */
  Statuses?: IdFormat[] | undefined;
}

/**
 * @public
 */
export interface DescribePrincipalIdFormatResult {
  /**
   * Information about the ID format settings for the ARN.
   *
   * @public
   */
  Principals?: PrincipalIdFormat[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePublicIpv4PoolsRequest {
  /**
   * The IDs of the address pools.
   *
   * @public
   */
  PoolIds?: string[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters.
   *
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Describes an address range of an IPv4 address pool.
 *
 * @public
 */
export interface PublicIpv4PoolRange {
  /**
   * The first IP address in the range.
   *
   * @public
   */
  FirstAddress?: string | undefined;

  /**
   * The last IP address in the range.
   *
   * @public
   */
  LastAddress?: string | undefined;

  /**
   * The number of addresses in the range.
   *
   * @public
   */
  AddressCount?: number | undefined;

  /**
   * The number of available addresses in the range.
   *
   * @public
   */
  AvailableAddressCount?: number | undefined;
}

/**
 * Describes an IPv4 address pool.
 *
 * @public
 */
export interface PublicIpv4Pool {
  /**
   * The ID of the address pool.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * A description of the address pool.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The address ranges.
   *
   * @public
   */
  PoolAddressRanges?: PublicIpv4PoolRange[] | undefined;

  /**
   * The total number of addresses.
   *
   * @public
   */
  TotalAddressCount?: number | undefined;

  /**
   * The total number of available addresses.
   *
   * @public
   */
  TotalAvailableAddressCount?: number | undefined;

  /**
   * The name of the location from which the address pool is advertised. A network border group is a unique set of Availability Zones or Local Zones from where Amazon Web Services advertises public IP addresses.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * Any tags for the address pool.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribePublicIpv4PoolsResult {
  /**
   * Information about the address pools.
   *
   * @public
   */
  PublicIpv4Pools?: PublicIpv4Pool[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegionsRequest {
  /**
   * The names of the Regions. You can specify any Regions, whether they are enabled and disabled for your account.
   *
   * @public
   */
  RegionNames?: string[] | undefined;

  /**
   * Indicates whether to display all Regions, including Regions that are disabled for your account.
   *
   * @public
   */
  AllRegions?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `endpoint` - The endpoint of the Region (for example, `ec2.us-east-1.amazonaws.com`).
   * - `opt-in-status` - The opt-in status of the Region (`opt-in-not-required` | `opted-in` | `not-opted-in`).
   * - `region-name` - The name of the Region (for example, `us-east-1`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Describes the geography information for a Region.
 *
 * @public
 */
export interface RegionGeography {
  /**
   * The name of the geography, for example, `United States of America`.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes a Region.
 *
 * @public
 */
export interface Region {
  /**
   * The Region opt-in status. The possible values are `opt-in-not-required`, `opted-in`, and `not-opted-in`.
   *
   * @public
   */
  OptInStatus?: string | undefined;

  /**
   * The geography information for the Region. The geography is returned as a list.
   *
   * @public
   */
  Geography?: RegionGeography[] | undefined;

  /**
   * The name of the Region.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * The Region service endpoint.
   *
   * @public
   */
  Endpoint?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegionsResult {
  /**
   * Information about the Regions.
   *
   * @public
   */
  Regions?: Region[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplaceRootVolumeTasksRequest {
  /**
   * The ID of the root volume replacement task to view.
   *
   * @public
   */
  ReplaceRootVolumeTaskIds?: string[] | undefined;

  /**
   * Filter to use:
   *
   * - `instance-id` - The ID of the instance for which the root volume replacement task was created.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

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
export interface DescribeReplaceRootVolumeTasksResult {
  /**
   * Information about the root volume replacement task.
   *
   * @public
   */
  ReplaceRootVolumeTasks?: ReplaceRootVolumeTask[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the parameters for DescribeReservedInstances.
 *
 * @public
 */
export interface DescribeReservedInstancesRequest {
  /**
   * Describes whether the Reserved Instance is Standard or Convertible.
   *
   * @public
   */
  OfferingClass?: OfferingClassType | undefined;

  /**
   * One or more Reserved Instance IDs.
   *
   * Default: Describes all your Reserved Instances, or only those otherwise specified.
   *
   * @public
   */
  ReservedInstancesIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters.
   *
   * - `availability-zone` - The Availability Zone where the Reserved Instance can be used.
   * - `availability-zone-id` - The ID of the Availability Zone where the Reserved Instance can be used.
   * - `duration` - The duration of the Reserved Instance (one year or three years), in seconds (`31536000` | `94608000`).
   * - `end` - The time when the Reserved Instance expires (for example, 2015-08-07T11:54:42.000Z).
   * - `fixed-price` - The purchase price of the Reserved Instance (for example, 9800.0).
   * - `instance-type` - The instance type that is covered by the reservation.
   * - `scope` - The scope of the Reserved Instance (`Region` or `Availability Zone`).
   * - `product-description` - The Reserved Instance product platform description (`Linux/UNIX` | `Linux with SQL Server Standard` | `Linux with SQL Server Web` | `Linux with SQL Server Enterprise` | `SUSE Linux` | `Red Hat Enterprise Linux` | `Red Hat Enterprise Linux with HA` | `Windows` | `Windows with SQL Server Standard` | `Windows with SQL Server Web` | `Windows with SQL Server Enterprise`).
   * - `reserved-instances-id` - The ID of the Reserved Instance.
   * - `start` - The time at which the Reserved Instance purchase request was placed (for example, 2014-08-07T11:54:42.000Z).
   * - `state` - The state of the Reserved Instance (`payment-pending` | `active` | `payment-failed` | `retired`).
   * - `tag:<key>` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `usage-price` - The usage price of the Reserved Instance, per hour (for example, 0.84).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API version, you only have access to the `Medium Utilization` Reserved Instance offering type.
   *
   * @public
   */
  OfferingType?: OfferingTypeValues | undefined;
}

/**
 * Describes a recurring charge.
 *
 * @public
 */
export interface RecurringCharge {
  /**
   * The amount of the recurring charge.
   *
   * @public
   */
  Amount?: number | undefined;

  /**
   * The frequency of the recurring charge.
   *
   * @public
   */
  Frequency?: RecurringChargeFrequency | undefined;
}

/**
 * Describes a Reserved Instance.
 *
 * @public
 */
export interface ReservedInstances {
  /**
   * The currency of the Reserved Instance. It's specified using ISO 4217 standard currency codes. At this time, the only supported currency is `USD`.
   *
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * The tenancy of the instance.
   *
   * @public
   */
  InstanceTenancy?: Tenancy | undefined;

  /**
   * The offering class of the Reserved Instance.
   *
   * @public
   */
  OfferingClass?: OfferingClassType | undefined;

  /**
   * The Reserved Instance offering type.
   *
   * @public
   */
  OfferingType?: OfferingTypeValues | undefined;

  /**
   * The recurring charge tag assigned to the resource.
   *
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * The scope of the Reserved Instance.
   *
   * @public
   */
  Scope?: Scope | undefined;

  /**
   * Any tags assigned to the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The ID of the Reserved Instance.
   *
   * @public
   */
  ReservedInstancesId?: string | undefined;

  /**
   * The instance type on which the Reserved Instance can be used.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The Availability Zone in which the Reserved Instance can be used.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The date and time the Reserved Instance started.
   *
   * @public
   */
  Start?: Date | undefined;

  /**
   * The time when the Reserved Instance expires.
   *
   * @public
   */
  End?: Date | undefined;

  /**
   * The duration of the Reserved Instance, in seconds.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The usage price of the Reserved Instance, per hour.
   *
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * The purchase price of the Reserved Instance.
   *
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * The number of reservations purchased.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The Reserved Instance product platform description.
   *
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;

  /**
   * The state of the Reserved Instance purchase.
   *
   * @public
   */
  State?: ReservedInstanceState | undefined;
}

/**
 * Contains the output for DescribeReservedInstances.
 *
 * @public
 */
export interface DescribeReservedInstancesResult {
  /**
   * A list of Reserved Instances.
   *
   * @public
   */
  ReservedInstances?: ReservedInstances[] | undefined;
}

/**
 * Contains the parameters for DescribeReservedInstancesListings.
 *
 * @public
 */
export interface DescribeReservedInstancesListingsRequest {
  /**
   * One or more Reserved Instance IDs.
   *
   * @public
   */
  ReservedInstancesId?: string | undefined;

  /**
   * One or more Reserved Instance listing IDs.
   *
   * @public
   */
  ReservedInstancesListingId?: string | undefined;

  /**
   * One or more filters.
   *
   * - `reserved-instances-id` - The ID of the Reserved Instances.
   * - `reserved-instances-listing-id` - The ID of the Reserved Instances listing.
   * - `status` - The status of the Reserved Instance listing (`pending` | `active` | `cancelled` | `closed`).
   * - `status-message` - The reason for the status.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Contains the output of DescribeReservedInstancesListings.
 *
 * @public
 */
export interface DescribeReservedInstancesListingsResult {
  /**
   * Information about the Reserved Instance listing.
   *
   * @public
   */
  ReservedInstancesListings?: ReservedInstancesListing[] | undefined;
}

/**
 * Contains the parameters for DescribeReservedInstancesModifications.
 *
 * @public
 */
export interface DescribeReservedInstancesModificationsRequest {
  /**
   * IDs for the submitted modification request.
   *
   * @public
   */
  ReservedInstancesModificationIds?: string[] | undefined;

  /**
   * The token to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters.
   *
   * - `client-token` - The idempotency token for the modification request.
   * - `create-date` - The time when the modification request was created.
   * - `effective-date` - The time when the modification becomes effective.
   * - `modification-result.reserved-instances-id` - The ID for the Reserved Instances created as part of the modification request. This ID is only available when the status of the modification is `fulfilled`.
   * - `modification-result.target-configuration.availability-zone` - The Availability Zone for the new Reserved Instances.
   * - `modification-result.target-configuration.availability-zone-id` - The ID of the Availability Zone for the new Reserved Instances.
   * - `modification-result.target-configuration.instance-count` - The number of new Reserved Instances.
   * - `modification-result.target-configuration.instance-type` - The instance type of the new Reserved Instances.
   * - `reserved-instances-id` - The ID of the Reserved Instances modified.
   * - `reserved-instances-modification-id` - The ID of the modification request.
   * - `status` - The status of the Reserved Instances modification request (`processing` | `fulfilled` | `failed`).
   * - `status-message` - The reason for the status.
   * - `update-date` - The time when the modification request was last updated.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Describes the configuration settings for the modified Reserved Instances.
 *
 * @public
 */
export interface ReservedInstancesConfiguration {
  /**
   * The Availability Zone for the modified Reserved Instances.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The number of modified Reserved Instances.
   *
   * > **Note:** This is a required field for a request.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The instance type for the modified Reserved Instances.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The network platform of the modified Reserved Instances.
   *
   * @public
   */
  Platform?: string | undefined;

  /**
   * Whether the Reserved Instance is applied to instances in a Region or instances in a specific Availability Zone.
   *
   * @public
   */
  Scope?: Scope | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * Describes the modification request/s.
 *
 * @public
 */
export interface ReservedInstancesModificationResult {
  /**
   * The ID for the Reserved Instances that were created as part of the modification request. This field is only available when the modification is fulfilled.
   *
   * @public
   */
  ReservedInstancesId?: string | undefined;

  /**
   * The target Reserved Instances configurations supplied as part of the modification request.
   *
   * @public
   */
  TargetConfiguration?: ReservedInstancesConfiguration | undefined;
}

/**
 * Describes the ID of a Reserved Instance.
 *
 * @public
 */
export interface ReservedInstancesId {
  /**
   * The ID of the Reserved Instance.
   *
   * @public
   */
  ReservedInstancesId?: string | undefined;
}
