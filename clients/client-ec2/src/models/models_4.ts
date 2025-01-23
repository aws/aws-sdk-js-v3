// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActiveInstance,
  AllocationState,
  AllowsMultipleInstanceTypes,
  AlternatePathHint,
  AttachmentStatus,
  AutoPlacement,
  CurrencyCodeValues,
  Explanation,
  HostMaintenance,
  HostRecovery,
  IamInstanceProfile,
  IamInstanceProfileAssociation,
  InstanceEventWindow,
  IpamResourceDiscoveryAssociation,
  PathComponent,
  Tag,
} from "./models_0";

import {
  _InstanceType,
  AmdSevSnpSpecification,
  AttributeValue,
  BlockDeviceMapping,
  CapacityReservationPreference,
  CapacityReservationTargetResponse,
  DefaultTargetCapacityType,
  DestinationFileFormat,
  Ec2InstanceConnectEndpoint,
  FleetCapacityReservationUsageStrategy,
  FleetExcessCapacityTerminationPolicy,
  FleetLaunchTemplateOverrides,
  FleetLaunchTemplateSpecification,
  FleetOnDemandAllocationStrategy,
  FleetReplacementStrategy,
  FleetType,
  HostnameType,
  InstanceBandwidthWeighting,
  InstanceIpv6Address,
  InstanceLifecycle,
  InternetGateway,
  Ipam,
  IpamExternalResourceVerificationToken,
  IpamPool,
  IpamResourceDiscovery,
  IpamScope,
  KeyType,
  LaunchTemplate,
  LaunchTemplateAndOverridesResponse,
  LaunchTemplateVersion,
  LaunchTemplateVersionFilterSensitiveLog,
  LocalGatewayRouteTable,
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation,
  LocalGatewayRouteTableVpcAssociation,
  LogDestinationType,
  OperatorResponse,
  Placement,
  PlatformValues,
  SpotAllocationStrategy,
  SpotInstanceInterruptionBehavior,
  StateReason,
  TargetCapacityUnitType,
  TrafficType,
} from "./models_1";

import {
  GroupIdentifier,
  ManagedPrefixList,
  NatGateway,
  NetworkAcl,
  NetworkInsightsAccessScope,
  NetworkInsightsPath,
  NetworkInterface,
  NetworkInterfaceAttachment,
  NetworkInterfacePermission,
  NetworkInterfaceStatus,
  PlacementGroup,
  ReplaceRootVolumeTask,
} from "./models_2";

import {
  Byoasn,
  Filter,
  FleetStateCode,
  HistoryRecordEntry,
  IdFormat,
  InstanceTagNotificationAttribute,
} from "./models_3";

/**
 * @public
 */
export interface DescribeFleetHistoryResult {
  /**
   * <p>Information about the events in the history of the EC2 Fleet.</p>
   * @public
   */
  HistoryRecords?: HistoryRecordEntry[] | undefined;

  /**
   * <p>The last date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          All records up to this time were retrieved.</p>
   *          <p>If <code>nextToken</code> indicates that there are more items, this value is not
   *          present.</p>
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
   * <p>The ID of the EC Fleet.</p>
   * @public
   */
  FleetId?: string | undefined;

  /**
   * <p>The start date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFleetInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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

  /**
   * <p>The ID of the EC2 Fleet.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeFleetInstancesResult {
  /**
   * <p>The running instances. This list is refreshed periodically and might be out of
   *          date.</p>
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
   * <p>The ID of the EC2 Fleet.</p>
   * @public
   */
  FleetId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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

  /**
   * <p>The IDs of the EC2 Fleets.</p>
   *          <note>
   *             <p>If a fleet is of type <code>instant</code>, you must specify the fleet ID, otherwise
   *             it does not appear in the response.</p>
   *          </note>
   * @public
   */
  FleetIds?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>activity-status</code> - The progress of the EC2 Fleet ( <code>error</code> |
   *                   <code>pending-fulfillment</code> | <code>pending-termination</code> |
   *                   <code>fulfilled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>excess-capacity-termination-policy</code> - Indicates whether to terminate
   *                running instances if the target capacity is decreased below the current EC2 Fleet size
   *                   (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fleet-state</code> - The state of the EC2 Fleet (<code>submitted</code> |
   *                   <code>active</code> | <code>deleted</code> | <code>failed</code> |
   *                   <code>deleted-running</code> | <code>deleted-terminating</code> |
   *                   <code>modifying</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>replace-unhealthy-instances</code> - Indicates whether EC2 Fleet should replace
   *                unhealthy instances (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The type of request (<code>instant</code> |
   *                   <code>request</code> | <code>maintain</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetActivityStatus = {
  ERROR: "error",
  FULFILLED: "fulfilled",
  PENDING_FULFILLMENT: "pending_fulfillment",
  PENDING_TERMINATION: "pending_termination",
} as const;

/**
 * @public
 */
export type FleetActivityStatus = (typeof FleetActivityStatus)[keyof typeof FleetActivityStatus];

/**
 * <p>Describes the instances that could not be launched by the fleet.</p>
 * @public
 */
export interface DescribeFleetError {
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
   *          information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error codes</a>.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message that describes why the instance could not be launched. For more
   *          information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error codes</a>.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Describes the instances that were launched by the fleet.</p>
 * @public
 */
export interface DescribeFleetsInstances {
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
 * <p>Describes a launch template and overrides.</p>
 * @public
 */
export interface FleetLaunchTemplateConfig {
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
  Overrides?: FleetLaunchTemplateOverrides[] | undefined;
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
 * @public
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
   * @public
   */
  UsageStrategy?: FleetCapacityReservationUsageStrategy | undefined;
}

/**
 * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
 * @public
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
   * @public
   */
  AllocationStrategy?: FleetOnDemandAllocationStrategy | undefined;

  /**
   * <p>The strategy for using unused Capacity Reservations for fulfilling On-Demand
   *          capacity.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   * @public
   */
  CapacityReservationOptions?: CapacityReservationOptions | undefined;

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
   *             <p>If your fleet includes T instances that are configured as <code>unlimited</code>, and
   *             if their average CPU usage exceeds the baseline utilization, you will incur a charge for
   *             surplus credits. The <code>maxTotalPrice</code> does not account for surplus credits,
   *             and, if you use surplus credits, your final cost might be higher than what you specified
   *             for <code>maxTotalPrice</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits">Surplus credits can incur charges</a> in the
   *                <i>Amazon EC2 User Guide</i>.</p>
   *          </note>
   * @public
   */
  MaxTotalPrice?: string | undefined;
}

/**
 * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
 *          elevated risk of being interrupted.</p>
 * @public
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
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
 *          interrupted.</p>
 * @public
 */
export interface FleetSpotMaintenanceStrategies {
  /**
   * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
   *          elevated risk of being interrupted.</p>
   * @public
   */
  CapacityRebalance?: FleetSpotCapacityRebalance | undefined;
}

/**
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
 * @public
 */
export interface SpotOptions {
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
   *                <p>EC2 Fleet requests instances from the lowest priced Spot Instance pool that has available
   *                   capacity. If the lowest priced pool doesn't have available capacity, the Spot Instances
   *                   come from the next lowest priced pool that has available capacity. If a pool runs
   *                   out of capacity before fulfilling your desired capacity, EC2 Fleet will continue to
   *                   fulfill your request by drawing from the next lowest priced pool. To ensure that
   *                   your desired capacity is met, you might receive Spot Instances from several pools. Because
   *                   this strategy only considers instance price and not capacity availability, it
   *                   might lead to high interruption rates.</p>
   *             </dd>
   *          </dl>
   *          <p>Default: <code>lowest-price</code>
   *          </p>
   * @public
   */
  AllocationStrategy?: SpotAllocationStrategy | undefined;

  /**
   * <p>The strategies for managing your workloads on your Spot Instances that will be
   *          interrupted. Currently only the capacity rebalance strategy is available.</p>
   * @public
   */
  MaintenanceStrategies?: FleetSpotMaintenanceStrategies | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   *          <p>Default: <code>terminate</code>
   *          </p>
   * @public
   */
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior | undefined;

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
   *             <code>SingleInstanceType</code>
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
   *             surplus credits. The <code>maxTotalPrice</code> does not account for surplus credits,
   *             and, if you use surplus credits, your final cost might be higher than what you specified
   *             for <code>maxTotalPrice</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits">Surplus credits can incur charges</a> in the
   *                <i>Amazon EC2 User Guide</i>.</p>
   *          </note>
   * @public
   */
  MaxTotalPrice?: string | undefined;
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
 * @public
 */
export interface TargetCapacitySpecification {
  /**
   * <p>The number of units to request, filled the default target capacity type.</p>
   * @public
   */
  TotalTargetCapacity?: number | undefined;

  /**
   * <p>The number of On-Demand units to request. If you specify a target capacity for Spot units, you cannot specify a target capacity for On-Demand units.</p>
   * @public
   */
  OnDemandTargetCapacity?: number | undefined;

  /**
   * <p>The maximum number of Spot units to launch. If you specify a target capacity for On-Demand units, you cannot specify a target capacity for Spot units.</p>
   * @public
   */
  SpotTargetCapacity?: number | undefined;

  /**
   * <p>The default target capacity type.</p>
   * @public
   */
  DefaultTargetCapacityType?: DefaultTargetCapacityType | undefined;

  /**
   * <p>The unit for the target capacity.</p>
   * @public
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | undefined;
}

/**
 * <p>Describes an EC2 Fleet.</p>
 * @public
 */
export interface FleetData {
  /**
   * <p>The progress of the EC2 Fleet. If there is an error, the status is <code>error</code>. After
   *          all requests are placed, the status is <code>pending_fulfillment</code>. If the size of the
   *          EC2 Fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>.
   *          If the size of the EC2 Fleet is decreased, the status is <code>pending_termination</code> while
   *          instances are terminating.</p>
   * @public
   */
  ActivityStatus?: FleetActivityStatus | undefined;

  /**
   * <p>The creation date and time of the EC2 Fleet.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   * @public
   */
  FleetId?: string | undefined;

  /**
   * <p>The state of the EC2 Fleet.</p>
   * @public
   */
  FleetState?: FleetStateCode | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *             idempotency</a>.</p>
   *          <p>Constraints: Maximum 64 ASCII characters</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Indicates whether running instances should be terminated if the target capacity of the
   *          EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   * @public
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | undefined;

  /**
   * <p>The number of units fulfilled by this request compared to the set target
   *          capacity.</p>
   * @public
   */
  FulfilledCapacity?: number | undefined;

  /**
   * <p>The number of units fulfilled by this request compared to the set target On-Demand
   *          capacity.</p>
   * @public
   */
  FulfilledOnDemandCapacity?: number | undefined;

  /**
   * <p>The launch template and overrides.</p>
   * @public
   */
  LaunchTemplateConfigs?: FleetLaunchTemplateConfig[] | undefined;

  /**
   * <p>The number of units to request. You can choose to set the target capacity in terms of
   *          instances or a performance characteristic that is important to your application workload,
   *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
   *          specify a target capacity of 0 and add capacity later.</p>
   * @public
   */
  TargetCapacitySpecification?: TargetCapacitySpecification | undefined;

  /**
   * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires. </p>
   * @public
   */
  TerminateInstancesWithExpiration?: boolean | undefined;

  /**
   * <p>The type of request. Indicates whether the EC2 Fleet only <code>requests</code> the target
   *          capacity, or also attempts to <code>maintain</code> it. If you request a certain target
   *          capacity, EC2 Fleet only places the required requests; it does not attempt to replenish
   *          instances if capacity is diminished, and it does not submit requests in alternative
   *          capacity pools if capacity is unavailable. To maintain a certain target capacity, EC2 Fleet
   *          places the required requests to meet this target capacity. It also automatically
   *          replenishes any interrupted Spot Instances. Default: <code>maintain</code>.</p>
   * @public
   */
  Type?: FleetType | undefined;

  /**
   * <p>The start date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          The default is to start fulfilling the request immediately. </p>
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * <p>The end date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          At this point, no new instance requests are placed or able to fulfill the request. The
   *          default end date is 7 days from the current date. </p>
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
   * <p>The configuration of Spot Instances in an EC2 Fleet.</p>
   * @public
   */
  SpotOptions?: SpotOptions | undefined;

  /**
   * <p>The allocation strategy of On-Demand Instances in an EC2 Fleet.</p>
   * @public
   */
  OnDemandOptions?: OnDemandOptions | undefined;

  /**
   * <p>The tags for an EC2 Fleet resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Information about the instances that could not be launched by the fleet. Valid only when
   *          <b>Type</b> is set to <code>instant</code>.</p>
   * @public
   */
  Errors?: DescribeFleetError[] | undefined;

  /**
   * <p>Information about the instances that were launched by the fleet. Valid only when
   *          <b>Type</b> is set to <code>instant</code>.</p>
   * @public
   */
  Instances?: DescribeFleetsInstances[] | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Context?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetsResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the EC2 Fleets.</p>
   * @public
   */
  Fleets?: FleetData[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowLogsRequest {
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
   *                   <code>deliver-log-status</code> - The status of the logs delivery (<code>SUCCESS</code> |
   *                     <code>FAILED</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>log-destination-type</code> - The type of destination for the flow log
   *                     data (<code>cloud-watch-logs</code> | <code>s3</code> |
   *                         <code>kinesis-data-firehose</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>flow-log-id</code> - The ID of the flow log.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>log-group-name</code> - The name of the log group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the VPC, subnet, or network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-type</code> - The type of traffic (<code>ACCEPT</code> |
   *                     <code>REJECT</code> | <code>ALL</code>).</p>
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
  Filter?: Filter[] | undefined;

  /**
   * <p>One or more flow log IDs.</p>
   *          <p>Constraint: Maximum of 1000 flow log IDs.</p>
   * @public
   */
  FlowLogIds?: string[] | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to request the next page of items. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes the destination options for a flow log.</p>
 * @public
 */
export interface DestinationOptionsResponse {
  /**
   * <p>The format for the flow log.</p>
   * @public
   */
  FileFormat?: DestinationFileFormat | undefined;

  /**
   * <p>Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3.</p>
   * @public
   */
  HiveCompatiblePartitions?: boolean | undefined;

  /**
   * <p>Indicates whether to partition the flow log per hour.</p>
   * @public
   */
  PerHourPartition?: boolean | undefined;
}

/**
 * <p>Describes a flow log.</p>
 * @public
 */
export interface FlowLog {
  /**
   * <p>The date and time the flow log was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Information about the error that occurred. <code>Rate limited</code> indicates that
   *             CloudWatch Logs throttling has been applied for one or more network interfaces, or that you've
   *             reached the limit on the number of log groups that you can create. <code>Access
   *                 error</code> indicates that the IAM role associated with the flow log does not have
   *             sufficient permissions to publish to CloudWatch Logs. <code>Unknown error</code> indicates an
   *             internal error.</p>
   * @public
   */
  DeliverLogsErrorMessage?: string | undefined;

  /**
   * <p>The ARN of the IAM role allows the service to publish logs to CloudWatch Logs.</p>
   * @public
   */
  DeliverLogsPermissionArn?: string | undefined;

  /**
   * <p>The ARN of the IAM role that allows the service to publish flow logs across accounts.</p>
   * @public
   */
  DeliverCrossAccountRole?: string | undefined;

  /**
   * <p>The status of the logs delivery (<code>SUCCESS</code> | <code>FAILED</code>).</p>
   * @public
   */
  DeliverLogsStatus?: string | undefined;

  /**
   * <p>The ID of the flow log.</p>
   * @public
   */
  FlowLogId?: string | undefined;

  /**
   * <p>The status of the flow log (<code>ACTIVE</code>).</p>
   * @public
   */
  FlowLogStatus?: string | undefined;

  /**
   * <p>The name of the flow log group.</p>
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * <p>The ID of the resource being monitored.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of traffic captured for the flow log.</p>
   * @public
   */
  TrafficType?: TrafficType | undefined;

  /**
   * <p>The type of destination for the flow log data.</p>
   * @public
   */
  LogDestinationType?: LogDestinationType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination for the flow log data.</p>
   * @public
   */
  LogDestination?: string | undefined;

  /**
   * <p>The format of the flow log record.</p>
   * @public
   */
  LogFormat?: string | undefined;

  /**
   * <p>The tags for the flow log.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record.</p>
   *          <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html">Nitro-based
   *                 instance</a>, the aggregation interval is always 60 seconds (1 minute) or less,
   *             regardless of the specified value.</p>
   *          <p>Valid Values: <code>60</code> | <code>600</code>
   *          </p>
   * @public
   */
  MaxAggregationInterval?: number | undefined;

  /**
   * <p>The destination options.</p>
   * @public
   */
  DestinationOptions?: DestinationOptionsResponse | undefined;
}

/**
 * @public
 */
export interface DescribeFlowLogsResult {
  /**
   * <p>Information about the flow logs.</p>
   * @public
   */
  FlowLogs?: FlowLog[] | undefined;

  /**
   * <p>The token to request the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FpgaImageAttributeName = {
  description: "description",
  loadPermission: "loadPermission",
  name: "name",
  productCodes: "productCodes",
} as const;

/**
 * @public
 */
export type FpgaImageAttributeName = (typeof FpgaImageAttributeName)[keyof typeof FpgaImageAttributeName];

/**
 * @public
 */
export interface DescribeFpgaImageAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the AFI.</p>
   * @public
   */
  FpgaImageId: string | undefined;

  /**
   * <p>The AFI attribute.</p>
   * @public
   */
  Attribute: FpgaImageAttributeName | undefined;
}

/**
 * @public
 * @enum
 */
export const PermissionGroup = {
  all: "all",
} as const;

/**
 * @public
 */
export type PermissionGroup = (typeof PermissionGroup)[keyof typeof PermissionGroup];

/**
 * <p>Describes a load permission.</p>
 * @public
 */
export interface LoadPermission {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  Group?: PermissionGroup | undefined;
}

/**
 * @public
 * @enum
 */
export const ProductCodeValues = {
  devpay: "devpay",
  marketplace: "marketplace",
} as const;

/**
 * @public
 */
export type ProductCodeValues = (typeof ProductCodeValues)[keyof typeof ProductCodeValues];

/**
 * <p>Describes a product code.</p>
 * @public
 */
export interface ProductCode {
  /**
   * <p>The product code.</p>
   * @public
   */
  ProductCodeId?: string | undefined;

  /**
   * <p>The type of product code.</p>
   * @public
   */
  ProductCodeType?: ProductCodeValues | undefined;
}

/**
 * <p>Describes an Amazon FPGA image (AFI) attribute.</p>
 * @public
 */
export interface FpgaImageAttribute {
  /**
   * <p>The ID of the AFI.</p>
   * @public
   */
  FpgaImageId?: string | undefined;

  /**
   * <p>The name of the AFI.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the AFI.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The load permissions.</p>
   * @public
   */
  LoadPermissions?: LoadPermission[] | undefined;

  /**
   * <p>The product codes.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;
}

/**
 * @public
 */
export interface DescribeFpgaImageAttributeResult {
  /**
   * <p>Information about the attribute.</p>
   * @public
   */
  FpgaImageAttribute?: FpgaImageAttribute | undefined;
}

/**
 * @public
 */
export interface DescribeFpgaImagesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The AFI IDs.</p>
   * @public
   */
  FpgaImageIds?: string[] | undefined;

  /**
   * <p>Filters the AFI by owner. Specify an Amazon Web Services account ID, <code>self</code>
   * 			(owner is the sender of the request), or an Amazon Web Services owner alias (valid values are
   * 			<code>amazon</code> | <code>aws-marketplace</code>).</p>
   * @public
   */
  Owners?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The creation time of the AFI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fpga-image-id</code> - The FPGA image identifier (AFI ID).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fpga-image-global-id</code> - The global FPGA image identifier (AGFI ID).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of the AFI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the AFI owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>shell-version</code> - The version of the Amazon Web Services Shell that was used to create the bitstream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the AFI (<code>pending</code> | <code>failed</code> | <code>available</code> | <code>unavailable</code>).</p>
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
   *                   <code>update-time</code> - The time of the most recent update.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.</p>
 * @public
 */
export interface PciId {
  /**
   * <p>The ID of the device.</p>
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * <p>The ID of the vendor.</p>
   * @public
   */
  VendorId?: string | undefined;

  /**
   * <p>The ID of the subsystem.</p>
   * @public
   */
  SubsystemId?: string | undefined;

  /**
   * <p>The ID of the vendor for the subsystem.</p>
   * @public
   */
  SubsystemVendorId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FpgaImageStateCode = {
  available: "available",
  failed: "failed",
  pending: "pending",
  unavailable: "unavailable",
} as const;

/**
 * @public
 */
export type FpgaImageStateCode = (typeof FpgaImageStateCode)[keyof typeof FpgaImageStateCode];

/**
 * <p>Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).</p>
 * @public
 */
export interface FpgaImageState {
  /**
   * <p>The state. The following are the possible values:</p>
   *          <ul>
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
   * @public
   */
  Code?: FpgaImageStateCode | undefined;

  /**
   * <p>If the state is <code>failed</code>, this is the error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes an Amazon FPGA image (AFI).</p>
 * @public
 */
export interface FpgaImage {
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

  /**
   * <p>The name of the AFI.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the AFI.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The version of the Amazon Web Services Shell that was used to create the bitstream.</p>
   * @public
   */
  ShellVersion?: string | undefined;

  /**
   * <p>Information about the PCI bus.</p>
   * @public
   */
  PciId?: PciId | undefined;

  /**
   * <p>Information about the state of the AFI.</p>
   * @public
   */
  State?: FpgaImageState | undefined;

  /**
   * <p>The date and time the AFI was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The time of the most recent update to the AFI.</p>
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the AFI.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The alias of the AFI owner. Possible values include <code>self</code>, <code>amazon</code>, and <code>aws-marketplace</code>.</p>
   * @public
   */
  OwnerAlias?: string | undefined;

  /**
   * <p>The product codes for the AFI.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * <p>Any tags assigned to the AFI.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether the AFI is public.</p>
   * @public
   */
  Public?: boolean | undefined;

  /**
   * <p>Indicates whether data retention support is enabled for the AFI.</p>
   * @public
   */
  DataRetentionSupport?: boolean | undefined;

  /**
   * <p>The instance types supported by the AFI.</p>
   * @public
   */
  InstanceTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeFpgaImagesResult {
  /**
   * <p>Information about the FPGA images.</p>
   * @public
   */
  FpgaImages?: FpgaImage[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHostReservationOfferingsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-family</code> - The instance family of the offering (for example,
   *                         <code>m4</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>payment-option</code> - The payment option (<code>NoUpfront</code> |
   *                         <code>PartialUpfront</code> | <code>AllUpfront</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filter?: Filter[] | undefined;

  /**
   * <p>This is the maximum duration of the reservation to purchase, specified in seconds.
   *             Reservations are available in one-year and three-year terms. The number of seconds
   *             specified must be the number of seconds in a year (365x24x60x60) times one of the
   *             supported durations (1 or 3). For example, specify 94608000 for three years.</p>
   * @public
   */
  MaxDuration?: number | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>This is the minimum duration of the reservation you'd like to purchase, specified in
   *             seconds. Reservations are available in one-year and three-year terms. The number of
   *             seconds specified must be the number of seconds in a year (365x24x60x60) times one of
   *             the supported durations (1 or 3). For example, specify 31536000 for one year.</p>
   * @public
   */
  MinDuration?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the reservation offering.</p>
   * @public
   */
  OfferingId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PaymentOption = {
  ALL_UPFRONT: "AllUpfront",
  NO_UPFRONT: "NoUpfront",
  PARTIAL_UPFRONT: "PartialUpfront",
} as const;

/**
 * @public
 */
export type PaymentOption = (typeof PaymentOption)[keyof typeof PaymentOption];

/**
 * <p>Details about the Dedicated Host Reservation offering.</p>
 * @public
 */
export interface HostOffering {
  /**
   * <p>The currency of the offering.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The duration of the offering (in seconds).</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The hourly price of the offering.</p>
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * <p>The instance family of the offering.</p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>The ID of the offering.</p>
   * @public
   */
  OfferingId?: string | undefined;

  /**
   * <p>The available payment option.</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * <p>The upfront price of the offering. Does not apply to No Upfront offerings.</p>
   * @public
   */
  UpfrontPrice?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHostReservationOfferingsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the offerings.</p>
   * @public
   */
  OfferingSet?: HostOffering[] | undefined;
}

/**
 * @public
 */
export interface DescribeHostReservationsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-family</code> - The instance family (for example,
   *                     <code>m4</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>payment-option</code> - The payment option (<code>NoUpfront</code> |
   *                         <code>PartialUpfront</code> | <code>AllUpfront</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the reservation (<code>payment-pending</code>
   *                     | <code>payment-failed</code> | <code>active</code> |
   *                     <code>retired</code>).</p>
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
   *          </ul>
   * @public
   */
  Filter?: Filter[] | undefined;

  /**
   * <p>The host reservation IDs.</p>
   * @public
   */
  HostReservationIdSet?: string[] | undefined;

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
 * @enum
 */
export const ReservationState = {
  ACTIVE: "active",
  PAYMENT_FAILED: "payment-failed",
  PAYMENT_PENDING: "payment-pending",
  RETIRED: "retired",
} as const;

/**
 * @public
 */
export type ReservationState = (typeof ReservationState)[keyof typeof ReservationState];

/**
 * <p>Details about the Dedicated Host Reservation and associated Dedicated Hosts.</p>
 * @public
 */
export interface HostReservation {
  /**
   * <p>The number of Dedicated Hosts the reservation is associated with.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The currency in which the <code>upfrontPrice</code> and <code>hourlyPrice</code>
   *             amounts are specified. At this time, the only supported currency is
   *             <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The length of the reservation's term, specified in seconds. Can be <code>31536000 (1
   *                 year)</code> | <code>94608000 (3 years)</code>.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The date and time that the reservation ends.</p>
   * @public
   */
  End?: Date | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   * @public
   */
  HostIdSet?: string[] | undefined;

  /**
   * <p>The ID of the reservation that specifies the associated Dedicated Hosts.</p>
   * @public
   */
  HostReservationId?: string | undefined;

  /**
   * <p>The hourly price of the reservation.</p>
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * <p>The instance family of the Dedicated Host Reservation. The instance family on the
   *             Dedicated Host must be the same in order for it to benefit from the reservation.</p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>The ID of the reservation. This remains the same regardless of which Dedicated Hosts
   *             are associated with it.</p>
   * @public
   */
  OfferingId?: string | undefined;

  /**
   * <p>The payment option selected for this reservation.</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * <p>The date and time that the reservation started.</p>
   * @public
   */
  Start?: Date | undefined;

  /**
   * <p>The state of the reservation.</p>
   * @public
   */
  State?: ReservationState | undefined;

  /**
   * <p>The upfront price of the reservation.</p>
   * @public
   */
  UpfrontPrice?: string | undefined;

  /**
   * <p>Any tags assigned to the Dedicated Host Reservation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeHostReservationsResult {
  /**
   * <p>Details about the reservation's configuration.</p>
   * @public
   */
  HostReservationSet?: HostReservation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHostsRequest {
  /**
   * <p>The IDs of the Dedicated Hosts. The IDs are used for targeted instance
   *             launches.</p>
   * @public
   */
  HostIds?: string[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   *          <p>You cannot specify this parameter and the host IDs parameter in the same
   *             request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>auto-placement</code> - Whether auto-placement is enabled or disabled
   *                         (<code>on</code> | <code>off</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the host.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>client-token</code> - The idempotency token that you provided when you
   *                     allocated the host.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>host-reservation-id</code> - The ID of the reservation assigned to this
   *                     host.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type size that the Dedicated Host is
   *                     configured to support.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The allocation state of the Dedicated Host
   *                         (<code>available</code> | <code>under-assessment</code> |
   *                         <code>permanent-failure</code> | <code>released</code> |
   *                         <code>released-permanent-failure</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filter?: Filter[] | undefined;
}

/**
 * <p>Information about the number of instances that can be launched onto the Dedicated
 *             Host.</p>
 * @public
 */
export interface InstanceCapacity {
  /**
   * <p>The number of instances that can be launched onto the Dedicated Host based on the
   *             host's available capacity.</p>
   * @public
   */
  AvailableCapacity?: number | undefined;

  /**
   * <p>The instance type supported by the Dedicated Host.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The total number of instances that can be launched onto the Dedicated Host if there
   *             are no instances running on it.</p>
   * @public
   */
  TotalCapacity?: number | undefined;
}

/**
 * <p>The capacity information for instances that can be launched onto the Dedicated Host.
 *         </p>
 * @public
 */
export interface AvailableCapacity {
  /**
   * <p>The number of instances that can be launched onto the Dedicated Host depending on the
   *             host's available capacity. For Dedicated Hosts that support multiple instance types,
   *             this parameter represents the number of instances for each instance size that is
   *             supported on the host.</p>
   * @public
   */
  AvailableInstanceCapacity?: InstanceCapacity[] | undefined;

  /**
   * <p>The number of vCPUs available for launching instances onto the Dedicated Host.</p>
   * @public
   */
  AvailableVCpus?: number | undefined;
}

/**
 * <p>Describes the properties of a Dedicated Host.</p>
 * @public
 */
export interface HostProperties {
  /**
   * <p>The number of cores on the Dedicated Host.</p>
   * @public
   */
  Cores?: number | undefined;

  /**
   * <p>The instance type supported by the Dedicated Host. For example, <code>m5.large</code>.
   *             If the host supports multiple instance types, no <b>instanceType</b> is returned.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The instance family supported by the Dedicated Host. For example,
   *             <code>m5</code>.</p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>The number of sockets on the Dedicated Host.</p>
   * @public
   */
  Sockets?: number | undefined;

  /**
   * <p>The total number of vCPUs on the Dedicated Host.</p>
   * @public
   */
  TotalVCpus?: number | undefined;
}

/**
 * <p>Describes an instance running on a Dedicated Host.</p>
 * @public
 */
export interface HostInstance {
  /**
   * <p>The ID of instance that is running on the Dedicated Host.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The instance type (for example, <code>m3.medium</code>) of the running
   *             instance.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the instance.</p>
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * <p>Describes the properties of the Dedicated Host.</p>
 * @public
 */
export interface Host {
  /**
   * <p>Whether auto-placement is on or off.</p>
   * @public
   */
  AutoPlacement?: AutoPlacement | undefined;

  /**
   * <p>The Availability Zone of the Dedicated Host.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Information about the instances running on the Dedicated Host.</p>
   * @public
   */
  AvailableCapacity?: AvailableCapacity | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The ID of the Dedicated Host.</p>
   * @public
   */
  HostId?: string | undefined;

  /**
   * <p>The hardware specifications of the Dedicated Host.</p>
   * @public
   */
  HostProperties?: HostProperties | undefined;

  /**
   * <p>The reservation ID of the Dedicated Host. This returns a <code>null</code> response if
   *             the Dedicated Host doesn't have an associated reservation.</p>
   * @public
   */
  HostReservationId?: string | undefined;

  /**
   * <p>The IDs and instance type that are currently running on the Dedicated Host.</p>
   * @public
   */
  Instances?: HostInstance[] | undefined;

  /**
   * <p>The Dedicated Host's state.</p>
   * @public
   */
  State?: AllocationState | undefined;

  /**
   * <p>The time that the Dedicated Host was allocated.</p>
   * @public
   */
  AllocationTime?: Date | undefined;

  /**
   * <p>The time that the Dedicated Host was released.</p>
   * @public
   */
  ReleaseTime?: Date | undefined;

  /**
   * <p>Any tags assigned to the Dedicated Host.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether host recovery is enabled or disabled for the Dedicated Host.</p>
   * @public
   */
  HostRecovery?: HostRecovery | undefined;

  /**
   * <p>Indicates whether the Dedicated Host supports multiple instance types of the same
   *             instance family. If the value is <code>on</code>, the Dedicated Host supports multiple
   *             instance types in the instance family. If the value is <code>off</code>, the Dedicated
   *             Host supports a single instance type only.</p>
   * @public
   */
  AllowsMultipleInstanceTypes?: AllowsMultipleInstanceTypes | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Dedicated Host.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the Availability Zone in which the Dedicated Host is allocated.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>Indicates whether the Dedicated Host is in a host resource group. If <b>memberOfServiceLinkedResourceGroup</b> is <code>true</code>, the
   *             host is in a host resource group; otherwise, it is not.</p>
   * @public
   */
  MemberOfServiceLinkedResourceGroup?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which the
   *             Dedicated Host is allocated.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>Indicates whether host maintenance is enabled or disabled for the Dedicated
   *             Host.</p>
   * @public
   */
  HostMaintenance?: HostMaintenance | undefined;

  /**
   * <p>The ID of the Outpost hardware asset on which the Dedicated Host is allocated.</p>
   * @public
   */
  AssetId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHostsResult {
  /**
   * <p>Information about the Dedicated Hosts.</p>
   * @public
   */
  Hosts?: Host[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIamInstanceProfileAssociationsRequest {
  /**
   * <p>The IAM instance profile associations.</p>
   * @public
   */
  AssociationIds?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association (<code>associating</code> |
   *                 <code>associated</code> | <code>disassociating</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of
   *             items, make another request with the token returned in the output. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request.
   *             Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIamInstanceProfileAssociationsResult {
  /**
   * <p>Information about the IAM instance profile associations.</p>
   * @public
   */
  IamInstanceProfileAssociations?: IamInstanceProfileAssociation[] | undefined;

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
export interface DescribeIdentityIdFormatRequest {
  /**
   * <p>The type of resource: <code>bundle</code> |
   *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *           <code>network-acl</code> | <code>network-acl-association</code> |
   *           <code>network-interface</code> | <code>network-interface-attachment</code> |
   *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *           <code>route-table-association</code> | <code>security-group</code> |
   *           <code>snapshot</code> | <code>subnet</code> |
   *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
   *          </p>
   * @public
   */
  Resource?: string | undefined;

  /**
   * <p>The ARN of the principal, which can be an IAM role, IAM user, or the root user.</p>
   * @public
   */
  PrincipalArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityIdFormatResult {
  /**
   * <p>Information about the ID format for the resources.</p>
   * @public
   */
  Statuses?: IdFormat[] | undefined;
}

/**
 * @public
 */
export interface DescribeIdFormatRequest {
  /**
   * <p>The type of resource: <code>bundle</code> |
   *            <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *            <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *            <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *            <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *            <code>network-acl</code> | <code>network-acl-association</code> |
   *            <code>network-interface</code> | <code>network-interface-attachment</code> |
   *            <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *            <code>route-table-association</code> | <code>security-group</code> |
   *            <code>snapshot</code> | <code>subnet</code> |
   *            <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *            | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *            <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
   *          </p>
   * @public
   */
  Resource?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIdFormatResult {
  /**
   * <p>Information about the ID format for the resource.</p>
   * @public
   */
  Statuses?: IdFormat[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageAttributeName = {
  blockDeviceMapping: "blockDeviceMapping",
  bootMode: "bootMode",
  deregistrationProtection: "deregistrationProtection",
  description: "description",
  imdsSupport: "imdsSupport",
  kernel: "kernel",
  lastLaunchedTime: "lastLaunchedTime",
  launchPermission: "launchPermission",
  productCodes: "productCodes",
  ramdisk: "ramdisk",
  sriovNetSupport: "sriovNetSupport",
  tpmSupport: "tpmSupport",
  uefiData: "uefiData",
} as const;

/**
 * @public
 */
export type ImageAttributeName = (typeof ImageAttributeName)[keyof typeof ImageAttributeName];

/**
 * <p>Contains the parameters for DescribeImageAttribute.</p>
 * @public
 */
export interface DescribeImageAttributeRequest {
  /**
   * <p>The AMI attribute.</p>
   *          <p>
   *             <b>Note</b>: The <code>blockDeviceMapping</code> attribute is
   *       deprecated. Using this attribute returns the <code>Client.AuthFailure</code> error. To get
   *       information about the block device mappings for an AMI, use the <a>DescribeImages</a> action.</p>
   * @public
   */
  Attribute: ImageAttributeName | undefined;

  /**
   * <p>The ID of the AMI.</p>
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
}

/**
 * <p>Describes a launch permission.</p>
 * @public
 */
export interface LaunchPermission {
  /**
   * <p>The Amazon Resource Name (ARN) of an organization.</p>
   * @public
   */
  OrganizationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an organizational unit (OU).</p>
   * @public
   */
  OrganizationalUnitArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   *          <p>Constraints: Up to 10 000 account IDs can be specified in a single request.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  Group?: PermissionGroup | undefined;
}

/**
 * <p>Describes an image attribute.</p>
 * @public
 */
export interface ImageAttribute {
  /**
   * <p>A description for the AMI.</p>
   * @public
   */
  Description?: AttributeValue | undefined;

  /**
   * <p>The kernel ID.</p>
   * @public
   */
  KernelId?: AttributeValue | undefined;

  /**
   * <p>The RAM disk ID.</p>
   * @public
   */
  RamdiskId?: AttributeValue | undefined;

  /**
   * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is
   *       enabled.</p>
   * @public
   */
  SriovNetSupport?: AttributeValue | undefined;

  /**
   * <p>The boot mode.</p>
   * @public
   */
  BootMode?: AttributeValue | undefined;

  /**
   * <p>If the image is configured for NitroTPM support, the value is <code>v2.0</code>.</p>
   * @public
   */
  TpmSupport?: AttributeValue | undefined;

  /**
   * <p>Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data,
   *       use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceUefiData">GetInstanceUefiData</a> command. You can inspect and modify the UEFI data by using the
   *         <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool</a> on
   *       GitHub. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot</a> in the
   *         <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  UefiData?: AttributeValue | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *         format</a>, when the AMI was last used to launch an EC2 instance. When the AMI is used
   *       to launch an instance, there is a 24-hour delay before that usage is reported.</p>
   *          <note>
   *             <p>
   *                <code>lastLaunchedTime</code> data is available starting April 2017.</p>
   *          </note>
   * @public
   */
  LastLaunchedTime?: AttributeValue | undefined;

  /**
   * <p>If <code>v2.0</code>, it indicates that IMDSv2 is specified in the AMI. Instances launched
   *       from this AMI will have <code>HttpTokens</code> automatically set to <code>required</code> so
   *       that, by default, the instance requires that IMDSv2 is used when requesting instance metadata.
   *       In addition, <code>HttpPutResponseHopLimit</code> is set to <code>2</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ImdsSupport?: AttributeValue | undefined;

  /**
   * <p>Indicates whether deregistration protection is enabled for the AMI.</p>
   * @public
   */
  DeregistrationProtection?: AttributeValue | undefined;

  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The launch permissions.</p>
   * @public
   */
  LaunchPermissions?: LaunchPermission[] | undefined;

  /**
   * <p>The product codes.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * <p>The block device mapping entries.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;
}

/**
 * @public
 */
export interface DescribeImagesRequest {
  /**
   * <p>Scopes the images by users with explicit launch permissions. Specify an Amazon Web Services account ID, <code>self</code> (the sender of the request), or <code>all</code>
   *       (public AMIs).</p>
   *          <ul>
   *             <li>
   *                <p>If you specify an Amazon Web Services account ID that is not your own, only AMIs shared
   *           with that specific Amazon Web Services account ID are returned. However, AMIs that are
   *           shared with the account’s organization or organizational unit (OU) are not
   *           returned.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>self</code> or your own Amazon Web Services account ID, AMIs
   *           shared with your account are returned. In addition, AMIs that are shared with the
   *           organization or OU of which you are member are also returned. </p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>all</code>, all public AMIs are returned.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ExecutableUsers?: string[] | undefined;

  /**
   * <p>The image IDs.</p>
   *          <p>Default: Describes all images available to you.</p>
   * @public
   */
  ImageIds?: string[] | undefined;

  /**
   * <p>Scopes the results to images with the specified owners. You can specify a combination of
   *         Amazon Web Services account IDs, <code>self</code>, <code>amazon</code>,
   *         <code>aws-backup-vault</code>, and <code>aws-marketplace</code>. If you omit this parameter,
   *       the results include all images for which you have launch permissions, regardless of
   *       ownership.</p>
   * @public
   */
  Owners?: string[] | undefined;

  /**
   * <p>Specifies whether to include deprecated AMIs.</p>
   *          <p>Default: No deprecated AMIs are included in the response.</p>
   *          <note>
   *             <p>If you are the AMI owner, all deprecated AMIs appear in the response regardless of what
   *         you specify for this parameter.</p>
   *          </note>
   * @public
   */
  IncludeDeprecated?: boolean | undefined;

  /**
   * <p>Specifies whether to include disabled AMIs.</p>
   *          <p>Default: No disabled AMIs are included in the response.</p>
   * @public
   */
  IncludeDisabled?: boolean | undefined;

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
   *                   <code>architecture</code> - The image architecture (<code>i386</code> |
   *             <code>x86_64</code> | <code>arm64</code> | <code>x86_64_mac</code> |
   *             <code>arm64_mac</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.delete-on-termination</code> - A Boolean value that indicates
   *           whether the Amazon EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.device-name</code> - The device name specified in the block
   *           device mapping (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.snapshot-id</code> - The ID of the snapshot used for the Amazon EBS
   *           volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.volume-size</code> - The volume size of the Amazon EBS volume, in
   *           GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.volume-type</code> - The volume type of the Amazon EBS volume
   *             (<code>io1</code> | <code>io2</code> | <code>gp2</code> | <code>gp3</code> | <code>sc1
   *           </code>| <code>st1</code> | <code>standard</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.encrypted</code> - A Boolean that indicates whether the Amazon EBS
   *           volume is encrypted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>creation-date</code> - The time when the image was created, in the ISO 8601
   *           format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example,
   *             <code>2021-09-29T11:04:43.305Z</code>. You can use a wildcard (<code>*</code>), for
   *           example, <code>2021-09-29T*</code>, which matches an entire day.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the image (provided during image
   *           creation).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ena-support</code> - A Boolean that indicates whether enhanced networking with
   *           ENA is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hypervisor</code> - The hypervisor type (<code>ovm</code> |
   *           <code>xen</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-allowed</code> - A Boolean that indicates whether the image meets the
   *           criteria specified for Allowed AMIs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-id</code> - The ID of the image.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-type</code> - The image type (<code>machine</code> | <code>kernel</code> |
   *             <code>ramdisk</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-public</code> - A Boolean that indicates whether the image is public.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manifest-location</code> - The location of the image manifest.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of the AMI (provided during image creation).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-alias</code> - The owner alias (<code>amazon</code> |
   *             <code>aws-backup-vault</code> | <code>aws-marketplace</code>). The valid aliases are
   *           defined in an Amazon-maintained list. This is not the Amazon Web Services account alias
   *           that can be set using the IAM console. We recommend that you use the <b>Owner</b> request parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner. We recommend
   *           that you use the <b>Owner</b> request parameter instead of this
   *           filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform. The only supported value is
   *           <code>windows</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code.type</code> - The type of the product code
   *           (<code>marketplace</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-name</code> - The device name of the root device volume (for example,
   *             <code>/dev/sda1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-type</code> - The type of the root device volume (<code>ebs</code> |
   *             <code>instance-store</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-image-id</code> - The ID of the source AMI from which the AMI was
   *           created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-image-region</code> - The Region of the source AMI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-instance-id</code> - The ID of the instance that the AMI was created from
   *           if the AMI was created using CreateImage. This filter is applicable only if the AMI was
   *           created using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html">CreateImage</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the image (<code>available</code> | <code>pending</code>
   *           | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-code</code> - The reason code for the state change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-message</code> - The message for the state change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sriov-net-support</code> - A value of <code>simple</code> indicates that
   *           enhanced networking with the Intel 82599 VF interface is enabled.</p>
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
   *                   <code>virtualization-type</code> - The virtualization type (<code>paravirtual</code> |
   *             <code>hvm</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ArchitectureValues = {
  arm64: "arm64",
  arm64_mac: "arm64_mac",
  i386: "i386",
  x86_64: "x86_64",
  x86_64_mac: "x86_64_mac",
} as const;

/**
 * @public
 */
export type ArchitectureValues = (typeof ArchitectureValues)[keyof typeof ArchitectureValues];

/**
 * @public
 * @enum
 */
export const BootModeValues = {
  legacy_bios: "legacy-bios",
  uefi: "uefi",
  uefi_preferred: "uefi-preferred",
} as const;

/**
 * @public
 */
export type BootModeValues = (typeof BootModeValues)[keyof typeof BootModeValues];

/**
 * @public
 * @enum
 */
export const HypervisorType = {
  ovm: "ovm",
  xen: "xen",
} as const;

/**
 * @public
 */
export type HypervisorType = (typeof HypervisorType)[keyof typeof HypervisorType];

/**
 * @public
 * @enum
 */
export const ImageTypeValues = {
  kernel: "kernel",
  machine: "machine",
  ramdisk: "ramdisk",
} as const;

/**
 * @public
 */
export type ImageTypeValues = (typeof ImageTypeValues)[keyof typeof ImageTypeValues];

/**
 * @public
 * @enum
 */
export const ImdsSupportValues = {
  v2_0: "v2.0",
} as const;

/**
 * @public
 */
export type ImdsSupportValues = (typeof ImdsSupportValues)[keyof typeof ImdsSupportValues];

/**
 * @public
 * @enum
 */
export const DeviceType = {
  ebs: "ebs",
  instance_store: "instance-store",
} as const;

/**
 * @public
 */
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

/**
 * @public
 * @enum
 */
export const ImageState = {
  available: "available",
  deregistered: "deregistered",
  disabled: "disabled",
  error: "error",
  failed: "failed",
  invalid: "invalid",
  pending: "pending",
  transient: "transient",
} as const;

/**
 * @public
 */
export type ImageState = (typeof ImageState)[keyof typeof ImageState];

/**
 * @public
 * @enum
 */
export const TpmSupportValues = {
  v2_0: "v2.0",
} as const;

/**
 * @public
 */
export type TpmSupportValues = (typeof TpmSupportValues)[keyof typeof TpmSupportValues];

/**
 * @public
 * @enum
 */
export const VirtualizationType = {
  hvm: "hvm",
  paravirtual: "paravirtual",
} as const;

/**
 * @public
 */
export type VirtualizationType = (typeof VirtualizationType)[keyof typeof VirtualizationType];

/**
 * <p>Describes an image.</p>
 * @public
 */
export interface Image {
  /**
   * <p>The platform details associated with the billing code of the AMI. For more information,
   *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html">Understand
   *         AMI billing information</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  PlatformDetails?: string | undefined;

  /**
   * <p>The operation of the Amazon EC2 instance and the billing code that is associated with the AMI.
   *         <code>usageOperation</code> corresponds to the <a href="https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#Lineitem-details-O-Operation">lineitem/Operation</a> column on your Amazon Web Services Cost and Usage Report and in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html">Amazon Web Services Price
   *         List API</a>. You can view these fields on the <b>Instances</b> or <b>AMIs</b> pages in the Amazon EC2 console,
   *       or in the responses that are returned by the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html">DescribeImages</a> command in
   *       the Amazon EC2 API, or the <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html">describe-images</a> command in the
   *       CLI.</p>
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * <p>Any block device mapping entries.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * <p>The description of the AMI that was provided during image creation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies whether enhanced networking with ENA is enabled.</p>
   * @public
   */
  EnaSupport?: boolean | undefined;

  /**
   * <p>The hypervisor type of the image. Only <code>xen</code> is supported. <code>ovm</code> is
   *       not supported.</p>
   * @public
   */
  Hypervisor?: HypervisorType | undefined;

  /**
   * <p>The owner alias (<code>amazon</code> | <code>aws-backup-vault</code> |
   *         <code>aws-marketplace</code>).</p>
   * @public
   */
  ImageOwnerAlias?: string | undefined;

  /**
   * <p>The name of the AMI that was provided during image creation.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   * @public
   */
  RootDeviceName?: string | undefined;

  /**
   * <p>The type of root device used by the AMI. The AMI can use an Amazon EBS volume or an instance
   *       store volume.</p>
   * @public
   */
  RootDeviceType?: DeviceType | undefined;

  /**
   * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface is
   *       enabled.</p>
   * @public
   */
  SriovNetSupport?: string | undefined;

  /**
   * <p>The reason for the state change.</p>
   * @public
   */
  StateReason?: StateReason | undefined;

  /**
   * <p>Any tags assigned to the image.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The type of virtualization of the AMI.</p>
   * @public
   */
  VirtualizationType?: VirtualizationType | undefined;

  /**
   * <p>The boot mode of the image. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *         <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  BootMode?: BootModeValues | undefined;

  /**
   * <p>If the image is configured for NitroTPM support, the value is <code>v2.0</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html">NitroTPM</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  TpmSupport?: TpmSupportValues | undefined;

  /**
   * <p>The date and time to deprecate the AMI, in UTC, in the following format:
   *         <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.
   *       If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute.</p>
   * @public
   */
  DeprecationTime?: string | undefined;

  /**
   * <p>If <code>v2.0</code>, it indicates that IMDSv2 is specified in the AMI. Instances launched
   *       from this AMI will have <code>HttpTokens</code> automatically set to <code>required</code> so
   *       that, by default, the instance requires that IMDSv2 is used when requesting instance metadata.
   *       In addition, <code>HttpPutResponseHopLimit</code> is set to <code>2</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ImdsSupport?: ImdsSupportValues | undefined;

  /**
   * <p>The ID of the instance that the AMI was created from if the AMI was created using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html">CreateImage</a>. This field only appears if the AMI was created using
   *       CreateImage.</p>
   * @public
   */
  SourceInstanceId?: string | undefined;

  /**
   * <p>Indicates whether deregistration protection is enabled for the AMI.</p>
   * @public
   */
  DeregistrationProtection?: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *         format</a>, when the AMI was last used to launch an EC2 instance. When the AMI is used
   *       to launch an instance, there is a 24-hour delay before that usage is reported.</p>
   *          <note>
   *             <p>
   *                <code>lastLaunchedTime</code> data is available starting April 2017.</p>
   *          </note>
   * @public
   */
  LastLaunchedTime?: string | undefined;

  /**
   * <p>If <code>true</code>, the AMI satisfies the criteria for Allowed AMIs and can be
   *       discovered and used in the account. If <code>false</code> and Allowed AMIs is set to
   *         <code>enabled</code>, the AMI can't be discovered or used in the account. If
   *         <code>false</code> and Allowed AMIs is set to <code>audit-mode</code>, the AMI can be
   *       discovered and used in the account.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html">Control the discovery and use of AMIs in
   *       Amazon EC2 with Allowed AMIs</a> in
   *       <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ImageAllowed?: boolean | undefined;

  /**
   * <p>The ID of the source AMI from which the AMI was created.</p>
   *          <p>The ID only appears if the AMI was created using <a>CreateImage</a>, <a>CopyImage</a>, or <a>CreateRestoreImageTask</a>. The ID does not appear
   *       if the AMI was created using any other API. For some older AMIs, the ID might not be
   *       available. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/identify-source-ami-used-to-create-new-ami.html">Identify the
   *         source AMI used to create a new AMI</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  SourceImageId?: string | undefined;

  /**
   * <p>The Region of the source AMI. </p>
   *          <p>The Region only appears if the AMI was created using <a>CreateImage</a>, <a>CopyImage</a>, or <a>CreateRestoreImageTask</a>. The Region does not
   *       appear if the AMI was created using any other API. For some older AMIs, the Region might not
   *       be available. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/identify-source-ami-used-to-create-new-ami.html">Identify the
   *         source AMI used to create a new AMI</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  SourceImageRegion?: string | undefined;

  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The location of the AMI.</p>
   * @public
   */
  ImageLocation?: string | undefined;

  /**
   * <p>The current state of the AMI. If the state is <code>available</code>, the image is
   *       successfully registered and can be used to launch an instance.</p>
   * @public
   */
  State?: ImageState | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the image.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The date and time the image was created.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>Indicates whether the image has public launch permissions. The value is <code>true</code>
   *       if this image has public launch permissions or <code>false</code> if it has only implicit and
   *       explicit launch permissions.</p>
   * @public
   */
  Public?: boolean | undefined;

  /**
   * <p>Any product codes associated with the AMI.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * <p>The architecture of the image.</p>
   * @public
   */
  Architecture?: ArchitectureValues | undefined;

  /**
   * <p>The type of image.</p>
   * @public
   */
  ImageType?: ImageTypeValues | undefined;

  /**
   * <p>The kernel associated with the image, if any. Only applicable for machine images.</p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>The RAM disk associated with the image, if any. Only applicable for machine images.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>This value is set to <code>windows</code> for Windows AMIs; otherwise, it is blank.</p>
   * @public
   */
  Platform?: PlatformValues | undefined;
}

/**
 * @public
 */
export interface DescribeImagesResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the images.</p>
   * @public
   */
  Images?: Image[] | undefined;
}

/**
 * @public
 */
export interface DescribeImportImageTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Filter tasks using the <code>task-state</code> filter and one of the following values: <code>active</code>,
   *     <code>completed</code>, <code>deleting</code>, or <code>deleted</code>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The IDs of the import image tasks.</p>
   * @public
   */
  ImportTaskIds?: string[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token that indicates the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> The response information for license configurations.</p>
 * @public
 */
export interface ImportImageLicenseConfigurationResponse {
  /**
   * <p>The ARN of a license configuration.</p>
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * <p>Describes the Amazon S3 bucket for the disk image.</p>
 * @public
 */
export interface UserBucketDetails {
  /**
   * <p>The Amazon S3 bucket from which the disk image was created.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The file name of the disk image.</p>
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * <p>Describes the snapshot created from the imported disk.</p>
 * @public
 */
export interface SnapshotDetail {
  /**
   * <p>A description for the snapshot.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The block device mapping for the snapshot.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The size of the disk in the snapshot, in GiB.</p>
   * @public
   */
  DiskImageSize?: number | undefined;

  /**
   * <p>The format of the disk image from which the snapshot is created.</p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The percentage of progress for the task.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>The snapshot ID of the disk being imported.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>A brief status of the snapshot creation.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A detailed status message for the snapshot creation.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The URL used to access the disk image.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   * @public
   */
  UserBucket?: UserBucketDetails | undefined;
}

/**
 * <p>Describes an import image task.</p>
 * @public
 */
export interface ImportImageTask {
  /**
   * <p>The architecture of the virtual machine.</p>
   *          <p>Valid values: <code>i386</code> | <code>x86_64</code> | <code>arm64</code>
   *          </p>
   * @public
   */
  Architecture?: string | undefined;

  /**
   * <p>A description of the import task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether the image is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The target hypervisor for the import task.</p>
   *          <p>Valid values: <code>xen</code>
   *          </p>
   * @public
   */
  Hypervisor?: string | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) of the imported virtual machine.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The ID of the import image task.</p>
   * @public
   */
  ImportTaskId?: string | undefined;

  /**
   * <p>The identifier for the KMS key that was used to create the encrypted image.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The license type of the virtual machine.</p>
   * @public
   */
  LicenseType?: string | undefined;

  /**
   * <p>The description string for the import image task.</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>The percentage of progress of the import image task.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>Information about the snapshots.</p>
   * @public
   */
  SnapshotDetails?: SnapshotDetail[] | undefined;

  /**
   * <p>A brief status for the import image task.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A descriptive status message for the import image task.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The tags for the import image task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ARNs of the license configurations that are associated with the import image task.</p>
   * @public
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationResponse[] | undefined;

  /**
   * <p>The usage operation value.</p>
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * <p>The boot mode of the virtual machine.</p>
   * @public
   */
  BootMode?: BootModeValues | undefined;
}

/**
 * @public
 */
export interface DescribeImportImageTasksResult {
  /**
   * <p>A list of zero or more import image tasks that are currently active or were completed or canceled in the
   *    previous 7 days.</p>
   * @public
   */
  ImportImageTasks?: ImportImageTask[] | undefined;

  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImportSnapshotTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>A list of import snapshot task IDs.</p>
   * @public
   */
  ImportTaskIds?: string[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call
   *    with the returned <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token that indicates the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Details about the import snapshot task.</p>
 * @public
 */
export interface SnapshotTaskDetail {
  /**
   * <p>The description of the disk image being imported.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The size of the disk in the snapshot, in GiB.</p>
   * @public
   */
  DiskImageSize?: number | undefined;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The format of the disk image from which the snapshot is created.</p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The identifier for the KMS key that was used to create the encrypted snapshot.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The percentage of completion for the import snapshot task.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>The snapshot ID of the disk being imported.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>A brief status for the import snapshot task.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A detailed status message for the import snapshot task.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The URL of the disk image from which the snapshot is created.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   * @public
   */
  UserBucket?: UserBucketDetails | undefined;
}

/**
 * <p>Describes an import snapshot task.</p>
 * @public
 */
export interface ImportSnapshotTask {
  /**
   * <p>A description of the import snapshot task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the import snapshot task.</p>
   * @public
   */
  ImportTaskId?: string | undefined;

  /**
   * <p>Describes an import snapshot task.</p>
   * @public
   */
  SnapshotTaskDetail?: SnapshotTaskDetail | undefined;

  /**
   * <p>The tags for the import snapshot task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeImportSnapshotTasksResult {
  /**
   * <p>A list of zero or more import snapshot tasks that are currently active or were completed or canceled in the
   *    previous 7 days.</p>
   * @public
   */
  ImportSnapshotTasks?: ImportSnapshotTask[] | undefined;

  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceAttributeName = {
  blockDeviceMapping: "blockDeviceMapping",
  disableApiStop: "disableApiStop",
  disableApiTermination: "disableApiTermination",
  ebsOptimized: "ebsOptimized",
  enaSupport: "enaSupport",
  enclaveOptions: "enclaveOptions",
  groupSet: "groupSet",
  instanceInitiatedShutdownBehavior: "instanceInitiatedShutdownBehavior",
  instanceType: "instanceType",
  kernel: "kernel",
  productCodes: "productCodes",
  ramdisk: "ramdisk",
  rootDeviceName: "rootDeviceName",
  sourceDestCheck: "sourceDestCheck",
  sriovNetSupport: "sriovNetSupport",
  userData: "userData",
} as const;

/**
 * @public
 */
export type InstanceAttributeName = (typeof InstanceAttributeName)[keyof typeof InstanceAttributeName];

/**
 * @public
 */
export interface DescribeInstanceAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The instance attribute.</p>
   *          <p>Note: The <code>enaSupport</code> attribute is not supported at this time.</p>
   * @public
   */
  Attribute: InstanceAttributeName | undefined;
}

/**
 * <p>Describes a parameter used to set up an EBS volume in a block device mapping.</p>
 * @public
 */
export interface EbsInstanceBlockDevice {
  /**
   * <p>The time stamp when the attachment initiated.</p>
   * @public
   */
  AttachTime?: Date | undefined;

  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The attachment state.</p>
   * @public
   */
  Status?: AttachmentStatus | undefined;

  /**
   * <p>The ID of the EBS volume.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>The ARN of the Amazon ECS or Fargate task
   *             to which the volume is attached.</p>
   * @public
   */
  AssociatedResource?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the volume.</p>
   *          <p>This parameter is returned only for volumes that are attached to
   *             Fargate tasks.</p>
   * @public
   */
  VolumeOwnerId?: string | undefined;

  /**
   * <p>The service provider that manages the EBS volume.</p>
   * @public
   */
  Operator?: OperatorResponse | undefined;
}

/**
 * <p>Describes a block device mapping.</p>
 * @public
 */
export interface InstanceBlockDeviceMapping {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   * @public
   */
  Ebs?: EbsInstanceBlockDevice | undefined;
}

/**
 * <p>Describes a value for a resource attribute that is a Boolean value.</p>
 * @public
 */
export interface AttributeBooleanValue {
  /**
   * <p>The attribute value. The valid values are <code>true</code> or <code>false</code>.</p>
   * @public
   */
  Value?: boolean | undefined;
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro
 *             Enclaves.</p>
 * @public
 */
export interface EnclaveOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for Amazon Web Services Nitro Enclaves; otherwise, it is not enabled for Amazon Web Services Nitro
   *             Enclaves.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Describes an instance attribute.</p>
 * @public
 */
export interface InstanceAttribute {
  /**
   * <p>The block device mapping of the instance.</p>
   * @public
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;

  /**
   * <p>If the value is <code>true</code>, you can't terminate the instance through the Amazon
   *             EC2 console, CLI, or API; otherwise, you can.</p>
   * @public
   */
  DisableApiTermination?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether enhanced networking with ENA is enabled.</p>
   * @public
   */
  EnaSupport?: AttributeBooleanValue | undefined;

  /**
   * <p>To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to
   *                 <code>true</code>; otherwise, set it to <code>false</code>.</p>
   * @public
   */
  EnclaveOptions?: EnclaveOptions | undefined;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O.</p>
   * @public
   */
  EbsOptimized?: AttributeBooleanValue | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   * @public
   */
  InstanceInitiatedShutdownBehavior?: AttributeValue | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: AttributeValue | undefined;

  /**
   * <p>The kernel ID.</p>
   * @public
   */
  KernelId?: AttributeValue | undefined;

  /**
   * <p>A list of product codes.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * <p>The RAM disk ID.</p>
   * @public
   */
  RamdiskId?: AttributeValue | undefined;

  /**
   * <p>The device name of the root device volume (for example,
   *             <code>/dev/sda1</code>).</p>
   * @public
   */
  RootDeviceName?: AttributeValue | undefined;

  /**
   * <p>Enable or disable source/destination checks, which ensure that the instance is either
   *             the source or the destination of any traffic that it receives. If the value is
   *                 <code>true</code>, source/destination checks are enabled; otherwise, they are
   *             disabled. The default value is <code>true</code>. You must disable source/destination
   *             checks if the instance runs services such as network address translation, routing, or
   *             firewalls.</p>
   * @public
   */
  SourceDestCheck?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface
   *             is enabled.</p>
   * @public
   */
  SriovNetSupport?: AttributeValue | undefined;

  /**
   * <p>The user data.</p>
   * @public
   */
  UserData?: AttributeValue | undefined;

  /**
   * <p>To enable the instance for Amazon Web Services Stop Protection, set this parameter to
   *                 <code>true</code>; otherwise, set it to <code>false</code>.</p>
   * @public
   */
  DisableApiStop?: AttributeBooleanValue | undefined;

  /**
   * <p>The security groups associated with the instance.</p>
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceConnectEndpointsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-connect-endpoint-id</code> - The ID of the EC2 Instance Connect Endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the EC2 Instance Connect Endpoint (<code>create-in-progress</code> | <code>create-complete</code> | <code>create-failed</code> |
   *                     <code>delete-in-progress</code> | <code>delete-complete</code> | <code>delete-failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet in which the EC2 Instance
   *                     Connect Endpoint was created.</p>
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
   *                   <code>tag-value</code> - The value of a tag assigned to the resource. Use this filter to find all resources
   *                     that have a tag with a specific value, regardless of tag key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC in which the EC2 Instance Connect
   *                     Endpoint was created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>One or more EC2 Instance Connect Endpoint IDs.</p>
   * @public
   */
  InstanceConnectEndpointIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceConnectEndpointsResult {
  /**
   * <p>Information about the EC2 Instance Connect Endpoints.</p>
   * @public
   */
  InstanceConnectEndpoints?: Ec2InstanceConnectEndpoint[] | undefined;

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
export interface DescribeInstanceCreditSpecificationsRequest {
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
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The instance IDs.</p>
   *          <p>Default: Describes all your instances.</p>
   *          <p>Constraints: Maximum 1000 explicitly specified instance IDs.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>You cannot specify this parameter and the instance IDs
   *             parameter in the same call.</p>
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
 * <p>Describes the credit option for CPU usage of a burstable performance instance. </p>
 * @public
 */
export interface InstanceCreditSpecification {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The credit option for CPU usage of the instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   * @public
   */
  CpuCredits?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceCreditSpecificationsResult {
  /**
   * <p>Information about the credit option for CPU usage of an instance.</p>
   * @public
   */
  InstanceCreditSpecifications?: InstanceCreditSpecification[] | undefined;

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
export interface DescribeInstanceEventNotificationAttributesRequest {
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
export interface DescribeInstanceEventNotificationAttributesResult {
  /**
   * <p>Information about the registered tag keys.</p>
   * @public
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute | undefined;
}

/**
 * <p>Describe instance event windows by InstanceEventWindow.</p>
 * @public
 */
export interface DescribeInstanceEventWindowsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the event windows.</p>
   * @public
   */
  InstanceEventWindowIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>dedicated-host-id</code> - The event windows associated with the specified
   *             Dedicated Host ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event-window-name</code> - The event windows associated with the specified
   *             names. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The event windows associated with the specified instance
   *                ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag</code> - The event windows associated with the specified tag and
   *                value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag-key</code> - The event windows associated with the specified tag
   *                key, regardless of the value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag-value</code> - The event windows associated with the specified tag
   *                value, regardless of the key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the
   *                event window. Use the tag key in the filter name and the tag value as the filter
   *                value. For example, to find all resources that have a tag with the key
   *                   <code>Owner</code> and the value <code>CMX</code>, specify <code>tag:Owner</code>
   *                for the filter name and <code>CMX</code> for the filter value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the event window. Use this filter
   *                to find all event windows that have a tag with a specific key, regardless of the tag
   *                value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-value</code> - The value of a tag assigned to the event window. Use this
   *                filter to find all event windows that have a tag with a specific value, regardless of
   *                the tag key. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value. This value can
   *          be between 20 and 500. You cannot specify this parameter and the event window IDs parameter
   *          in the same call.</p>
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
 * @public
 */
export interface DescribeInstanceEventWindowsResult {
  /**
   * <p>Information about the event windows.</p>
   * @public
   */
  InstanceEventWindows?: InstanceEventWindow[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceImageMetadataRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The name of the Availability Zone (for example,
   *             <code>us-west-2a</code>) or Local Zone (for example, <code>us-west-2-lax-1b</code>) of
   *           the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-allowed</code> - A Boolean that indicates whether the image meets the
   *           criteria specified for Allowed AMIs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-state-name</code> - The state of the instance (<code>pending</code> |
   *             <code>running</code> | <code>shutting-down</code> | <code>terminated</code> |
   *             <code>stopping</code> | <code>stopped</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The type of instance (for example,
   *           <code>t3.micro</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-time</code> - The time when the instance was launched, in the ISO 8601
   *           format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example,
   *             <code>2023-09-29T11:04:43.305Z</code>. You can use a wildcard (<code>*</code>), for
   *           example, <code>2023-09-29T*</code>, which matches an entire day.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-alias</code> - The owner alias (<code>amazon</code> |
   *             <code>aws-marketplace</code> | <code>aws-backup-vault</code>). The valid aliases are
   *           defined in an Amazon-maintained list. This is not the Amazon Web Services account alias that can be set
   *           using the IAM console. We recommend that you use the <code>Owner</code> request parameter
   *           instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner. We recommend that you use
   *           the <code>Owner</code> request parameter instead of this filter.</p>
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
   *                   <code>zone-id</code> - The ID of the Availability Zone (for example,
   *             <code>usw2-az2</code>) or Local Zone (for example, <code>usw2-lax1-az1</code>) of the
   *           instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The instance IDs.</p>
   *          <p>If you don't specify an instance ID or filters, the output includes information for all
   *       instances.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>Default: 1000</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about the AMI.</p>
 * @public
 */
export interface ImageMetadata {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The name of the AMI.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the AMI.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The current state of the AMI. If the state is <code>available</code>, the AMI is
   *       successfully registered and can be used to launch an instance.</p>
   * @public
   */
  State?: ImageState | undefined;

  /**
   * <p>The alias of the AMI owner.</p>
   *          <p>Valid values: <code>amazon</code> | <code>aws-backup-vault</code> |
   *         <code>aws-marketplace</code>
   *          </p>
   * @public
   */
  ImageOwnerAlias?: string | undefined;

  /**
   * <p>The date and time the AMI was created.</p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The deprecation date and time of the AMI, in UTC, in the following format:
   *         <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.</p>
   * @public
   */
  DeprecationTime?: string | undefined;

  /**
   * <p>If <code>true</code>, the AMI satisfies the criteria for Allowed AMIs and can be
   *       discovered and used in the account. If <code>false</code>, the AMI can't be discovered or used
   *       in the account.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html">Control the discovery and use of AMIs in
   *       Amazon EC2 with Allowed AMIs</a> in
   *       <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ImageAllowed?: boolean | undefined;

  /**
   * <p>Indicates whether the AMI has public launch permissions. A value of <code>true</code>
   *       means this AMI has public launch permissions, while <code>false</code> means it has only
   *       implicit (AMI owner) or explicit (shared with your account) launch permissions.</p>
   * @public
   */
  IsPublic?: boolean | undefined;
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
 * <p>Describes the current state of an instance.</p>
 * @public
 */
export interface InstanceState {
  /**
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
   * @public
   */
  Code?: number | undefined;

  /**
   * <p>The current state of the instance.</p>
   * @public
   */
  Name?: InstanceStateName | undefined;
}

/**
 * <p>Information about the instance and the AMI used to launch the instance.</p>
 * @public
 */
export interface InstanceImageMetadata {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The time the instance was launched.</p>
   * @public
   */
  LaunchTime?: Date | undefined;

  /**
   * <p>The Availability Zone or Local Zone of the instance.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone or Local Zone of the instance.</p>
   * @public
   */
  ZoneId?: string | undefined;

  /**
   * <p>The current state of the instance.</p>
   * @public
   */
  State?: InstanceState | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the instance.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Any tags assigned to the instance.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Information about the AMI used to launch the instance.</p>
   * @public
   */
  ImageMetadata?: ImageMetadata | undefined;

  /**
   * <p>The entity that manages the instance.</p>
   * @public
   */
  Operator?: OperatorResponse | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceImageMetadataResult {
  /**
   * <p>Information about the instance and the AMI used to launch the instance.</p>
   * @public
   */
  InstanceImageMetadata?: InstanceImageMetadata[] | undefined;

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
export interface DescribeInstancesRequest {
  /**
   * <p>The instance IDs.</p>
   *          <p>Default: Describes all your instances.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

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
   *                   <code>affinity</code> - The affinity setting for an instance running on a
   *                     Dedicated Host (<code>default</code> | <code>host</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>architecture</code> - The instance architecture (<code>i386</code> |
   *                         <code>x86_64</code> | <code>arm64</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.attach-time</code> - The attach time for an EBS
   *                     volume mapped to the instance, for example,
   *                         <code>2022-09-15T17:15:20.000Z</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.delete-on-termination</code> - A Boolean that
   *                     indicates whether the EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.device-name</code> - The device name specified in
   *                     the block device mapping (for example, <code>/dev/sdh</code> or
   *                         <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.status</code> - The status for the EBS volume
   *                         (<code>attaching</code> | <code>attached</code> | <code>detaching</code> |
   *                         <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.volume-id</code> - The volume ID of the EBS
   *                     volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>boot-mode</code> - The boot mode that was specified by the AMI
   *                         (<code>legacy-bios</code> | <code>uefi</code> |
   *                     <code>uefi-preferred</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-id</code> - The ID of the Capacity Reservation into which the
   *                     instance was launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-specification.capacity-reservation-preference</code>
   *                     - The instance's Capacity Reservation preference (<code>open</code> | <code>none</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-specification.capacity-reservation-target.capacity-reservation-id</code>
   *                     - The ID of the targeted Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-specification.capacity-reservation-target.capacity-reservation-resource-group-arn</code>
   *                     - The ARN of the targeted Capacity Reservation group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>client-token</code> - The idempotency token you provided when you
   *                     launched the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>current-instance-boot-mode</code> - The boot mode that is used to launch
   *                     the instance at launch or start (<code>legacy-bios</code> |
   *                     <code>uefi</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dns-name</code> - The public DNS name of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-optimized</code> - A Boolean that indicates whether the instance is
   *                     optimized for Amazon EBS I/O.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ena-support</code> - A Boolean that indicates whether the instance is
   *                     enabled for enhanced networking with ENA.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>enclave-options.enabled</code> - A Boolean that indicates whether the
   *                     instance is enabled for Amazon Web Services Nitro Enclaves.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hibernation-options.configured</code> - A Boolean that indicates whether
   *                     the instance is enabled for hibernation. A value of <code>true</code> means that
   *                     the instance is enabled for hibernation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>host-id</code> - The ID of the Dedicated Host on which the instance is
   *                     running, if applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hypervisor</code> - The hypervisor type of the instance
   *                         (<code>ovm</code> | <code>xen</code>). The value <code>xen</code> is used
   *                     for both Xen and Nitro hypervisors.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iam-instance-profile.arn</code> - The instance profile associated with
   *                     the instance. Specified as an ARN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iam-instance-profile.id</code> - The instance profile associated with
   *                     the instance. Specified as an ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-id</code> - The ID of the image used to launch the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-lifecycle</code> - Indicates whether this is a Spot Instance, a Scheduled Instance, or
   *                      a Capacity Block (<code>spot</code> | <code>scheduled</code> | <code>capacity-block</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-state-code</code> - The state of the instance, as a 16-bit
   *                     unsigned integer. The high byte is used for internal purposes and should be
   *                     ignored. The low byte is set based on the state represented. The valid values
   *                     are: 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64
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
   *                   <code>instance-type</code> - The type of instance (for example,
   *                         <code>t2.micro</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance.group-id</code> - The ID of the security group for the
   *                     instance. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance.group-name</code> - The name of the security group for the
   *                     instance. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-address</code> - The public IPv4 address of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-address</code> - The IPv6 address of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>key-name</code> - The name of the key pair used when the instance was
   *                     launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-index</code> - When launching multiple instances, this is the
   *                     index for the instance in the launch group (for example, 0, 1, 2, and so on).
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-time</code> - The time when the instance was launched, in the ISO
   *                     8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example,
   *                         <code>2021-09-29T11:04:43.305Z</code>. You can use a wildcard
   *                         (<code>*</code>), for example, <code>2021-09-29T*</code>, which matches an
   *                     entire day.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>maintenance-options.auto-recovery</code> - The current automatic
   *                     recovery behavior of the instance (<code>disabled</code> | <code>default</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-endpoint</code> - The status of access to the HTTP
   *                     metadata endpoint on your instance (<code>enabled</code> |
   *                     <code>disabled</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-protocol-ipv4</code> - Indicates whether the IPv4
   *                     endpoint is enabled (<code>disabled</code> | <code>enabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-protocol-ipv6</code> - Indicates whether the IPv6
   *                     endpoint is enabled (<code>disabled</code> | <code>enabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-put-response-hop-limit</code> - The HTTP metadata
   *                     request put response hop limit (integer, possible values <code>1</code> to
   *                         <code>64</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.http-tokens</code> - The metadata request authorization
   *                     state (<code>optional</code> | <code>required</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.instance-metadata-tags</code> - The status of access to
   *                     instance tags from the instance metadata (<code>enabled</code> |
   *                         <code>disabled</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>metadata-options.state</code> - The state of the metadata option changes
   *                         (<code>pending</code> | <code>applied</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>monitoring-state</code> - Indicates whether detailed monitoring is
   *                     enabled (<code>disabled</code> | <code>enabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.allocation-id</code> - The allocation ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.association-id</code> - The association ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.carrier-ip</code> - The carrier IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.customer-owned-ip</code> - The customer-owned IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.ip-owner-id</code> - The owner
   *                     ID of the private IPv4 address associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.public-dns-name</code> - The public DNS name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.association.public-ip</code> - The ID of the
   *                     association of an Elastic IP address (IPv4) with a network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.primary</code> - Specifies whether the IPv4
   *                     address of the network interface is the primary private IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.private-dns-name</code> - The private DNS name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.private-ip-address</code> - The private IPv4
   *                     address associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.allocation-id</code> - The allocation ID
   *                     returned when you allocated the Elastic IP address (IPv4) for your network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.association-id</code> - The association ID
   *                     returned when the network interface was associated with an IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.carrier-ip</code> - The customer-owned IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.customer-owned-ip</code> - The customer-owned IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.ip-owner-id</code> - The owner of the
   *                     Elastic IP address (IPv4) associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.public-dns-name</code> - The public DNS name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.association.public-ip</code> - The address of the
   *                     Elastic IP address (IPv4) bound to the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.attach-time</code> - The time that the
   *                     network interface was attached to an instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.attachment-id</code> - The ID of the
   *                     interface attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.delete-on-termination</code> - Specifies
   *                     whether the attachment is deleted when an instance is terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.device-index</code> - The device index to
   *                     which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.instance-id</code> - The ID of the instance
   *                     to which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.instance-owner-id</code> - The owner ID of
   *                     the instance to which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.network-card-index</code> - The index of the network card.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.attachment.status</code> - The status of the
   *                     attachment (<code>attaching</code> | <code>attached</code> |
   *                     <code>detaching</code> | <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.availability-zone</code> - The Availability Zone for
   *                     the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.deny-all-igw-traffic</code> - A Boolean that indicates whether
   *                 a network interface with an IPv6 address is unreachable from the public internet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.description</code> - The description of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.group-id</code> - The ID of a security group
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.group-name</code> - The name of a security group
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.ipv4-prefixes.ipv4-prefix</code> - The IPv4 prefixes that are assigned to the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.ipv6-address</code> - The IPv6 address associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.ipv6-addresses.ipv6-address</code> - The IPv6 address
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.ipv6-addresses.is-primary-ipv6</code> - A Boolean that indicates whether this
   *                     is the primary IPv6 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.ipv6-native</code> - A Boolean that indicates whether this is
   *                     an IPv6 only network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.ipv6-prefixes.ipv6-prefix</code> - The IPv6 prefix assigned to the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.mac-address</code> - The MAC address of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.network-interface-id</code> - The ID of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.operator.managed</code> - A Boolean that indicates
   *                     whether the instance has a managed network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.operator.principal</code> - The principal that manages
   *                     the network interface. Only valid for instances with managed network interfaces,
   *                     where <code>managed</code> is <code>true</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.outpost-arn</code> - The ARN of the Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.owner-id</code> - The ID of the owner of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.private-dns-name</code> - The private DNS name of the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.private-ip-address</code> - The private IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.public-dns-name</code> - The public DNS name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.requester-id</code> - The requester ID for the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.requester-managed</code> - Indicates whether the
   *                     network interface is being managed by Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.status</code> - The status of the network interface
   *                         (<code>available</code>) | <code>in-use</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.source-dest-check</code> - Whether the network
   *                     interface performs source/destination checking. A value of <code>true</code>
   *                     means that checking is enabled, and <code>false</code> means that checking is
   *                     disabled. The value must be <code>false</code> for the network interface to
   *                     perform network address translation (NAT) in your VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.subnet-id</code> - The ID of the subnet for the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.tag-key</code> - The key of a tag assigned to the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.tag-value</code> - The value of a tag assigned to the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.vpc-id</code> - The ID of the VPC for the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-performance-options.bandwidth-weighting</code> - Where the performance boost
   *         			is applied, if applicable. Valid values: <code>default</code>, <code>vpc-1</code>,
   *         			<code>ebs-1</code>.</p>
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
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the
   *                     Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the instance
   *                     owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>placement-group-name</code> - The name of the placement group for the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>placement-partition-number</code> - The partition in which the instance is
   *                     located.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform. To list only Windows instances, use
   *                         <code>windows</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform-details</code> - The platform (<code>Linux/UNIX</code> |
   *                         <code>Red Hat BYOL Linux</code> | <code> Red Hat Enterprise Linux</code> |
   *                         <code>Red Hat Enterprise Linux with HA</code> | <code>Red Hat Enterprise
   *                         Linux with SQL Server Standard and HA</code> | <code>Red Hat Enterprise
   *                         Linux with SQL Server Enterprise and HA</code> | <code>Red Hat Enterprise
   *                         Linux with SQL Server Standard</code> | <code>Red Hat Enterprise Linux with
   *                         SQL Server Web</code> | <code>Red Hat Enterprise Linux with SQL Server
   *                         Enterprise</code> | <code>SQL Server Enterprise</code> | <code>SQL Server
   *                         Standard</code> | <code>SQL Server Web</code> | <code>SUSE Linux</code> |
   *                         <code>Ubuntu Pro</code> | <code>Windows</code> | <code>Windows BYOL</code> |
   *                         <code>Windows with SQL Server Enterprise</code> | <code>Windows with SQL
   *                         Server Standard</code> | <code>Windows with SQL Server Web</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name</code> - The private IPv4 DNS name of the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options.enable-resource-name-dns-a-record</code> - A
   *                     Boolean that indicates whether to respond to DNS queries for instance hostnames
   *                     with DNS A records.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options.enable-resource-name-dns-aaaa-record</code> - A
   *                     Boolean that indicates whether to respond to DNS queries for instance hostnames
   *                     with DNS AAAA records.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options.hostname-type</code> - The type of hostname
   *                     (<code>ip-name</code> | <code>resource-name</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - The private IPv4 address of the instance.
   *                     This can only be used to filter by the primary IP address of the network
   *                     interface attached to the instance. To filter by additional IP addresses
   *                     assigned to the network interface, use the filter
   *                         <code>network-interface.addresses.private-ip-address</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code associated with the AMI used to
   *                     launch the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code.type</code> - The type of product code (<code>devpay</code>
   *                     | <code>marketplace</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reason</code> - The reason for the current state of the instance (for
   *                     example, shows "User Initiated [date]" when you stop or terminate the instance).
   *                     Similar to the state-reason-code filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-id</code> - The ID of the entity that launched the instance on
   *                     your behalf (for example, Amazon Web Services Management Console, Auto Scaling, and so
   *                     on).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reservation-id</code> - The ID of the instance's reservation. A
   *                     reservation ID is created any time you launch an instance. A reservation ID has
   *                     a one-to-one relationship with an instance launch request, but can be associated
   *                     with more than one instance if you launch multiple instances using the same
   *                     launch request. For example, if you launch one instance, you get one reservation
   *                     ID. If you launch ten instances using the same launch request, you also get one
   *                     reservation ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-name</code> - The device name of the root device volume (for
   *                     example, <code>/dev/sda1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-type</code> - The type of the root device volume
   *                         (<code>ebs</code> | <code>instance-store</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-dest-check</code> - Indicates whether the instance performs
   *                     source/destination checking. A value of <code>true</code> means that checking is
   *                     enabled, and <code>false</code> means that checking is disabled. The value must
   *                     be <code>false</code> for the instance to perform network address translation
   *                     (NAT) in your VPC. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-instance-request-id</code> - The ID of the Spot Instance
   *                     request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-code</code> - The reason code for the state change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-message</code> - A message that describes the state
   *                     change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet for the instance.</p>
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
   *             <li>
   *                <p>
   *                   <code>tenancy</code> - The tenancy of an instance (<code>dedicated</code> |
   *                         <code>default</code> | <code>host</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tpm-support</code> - Indicates if the instance is configured for
   *                     NitroTPM support (<code>v2.0</code>). </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>usage-operation</code> - The usage operation value for the instance
   *                         (<code>RunInstances</code> | <code>RunInstances:00g0</code> |
   *                         <code>RunInstances:0010</code> | <code>RunInstances:1010</code> |
   *                         <code>RunInstances:1014</code> | <code>RunInstances:1110</code> |
   *                         <code>RunInstances:0014</code> | <code>RunInstances:0210</code> |
   *                         <code>RunInstances:0110</code> | <code>RunInstances:0100</code> |
   *                         <code>RunInstances:0004</code> | <code>RunInstances:0200</code> |
   *                         <code>RunInstances:000g</code> | <code>RunInstances:0g00</code> |
   *                         <code>RunInstances:0002</code> | <code>RunInstances:0800</code> |
   *                         <code>RunInstances:0102</code> | <code>RunInstances:0006</code> |
   *                         <code>RunInstances:0202</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>usage-operation-update-time</code> - The time that the usage operation
   *                     was last updated, for example, <code>2022-09-15T17:15:20.000Z</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>virtualization-type</code> - The virtualization type of the instance
   *                         (<code>paravirtual</code> | <code>hvm</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC that the instance is running in.</p>
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
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>You cannot specify this parameter and the instance IDs parameter in the same request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes the instance's Capacity Reservation targeting preferences. The action returns the
 *                 <code>capacityReservationPreference</code> response element if the instance is
 *             configured to run in On-Demand capacity, or if it is configured in run in any
 *                 <code>open</code> Capacity Reservation that has matching attributes (instance type, platform,
 *             Availability Zone). The action returns the <code>capacityReservationTarget</code>
 *             response element if the instance explicily targets a specific Capacity Reservation or Capacity Reservation group.</p>
 * @public
 */
export interface CapacityReservationSpecificationResponse {
  /**
   * <p>Describes the instance's Capacity Reservation preferences. Possible preferences include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that
   *                     has matching attributes (instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is
   *                     available. The instance runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * <p>Information about the targeted Capacity Reservation or Capacity Reservation group.</p>
   * @public
   */
  CapacityReservationTarget?: CapacityReservationTargetResponse | undefined;
}

/**
 * <p>The CPU options for the instance.</p>
 * @public
 */
export interface CpuOptions {
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
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html">AMD SEV-SNP</a>.</p>
   * @public
   */
  AmdSevSnp?: AmdSevSnpSpecification | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceBootModeValues = {
  legacy_bios: "legacy-bios",
  uefi: "uefi",
} as const;

/**
 * @public
 */
export type InstanceBootModeValues = (typeof InstanceBootModeValues)[keyof typeof InstanceBootModeValues];

/**
 * <note>
 *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024.</p>
 *          </note>
 *          <p>Describes the association between an instance and an Elastic Graphics accelerator.</p>
 * @public
 */
export interface ElasticGpuAssociation {
  /**
   * <p>The ID of the Elastic Graphics accelerator.</p>
   * @public
   */
  ElasticGpuId?: string | undefined;

  /**
   * <p>The ID of the association.</p>
   * @public
   */
  ElasticGpuAssociationId?: string | undefined;

  /**
   * <p>The state of the association between the instance and the
   *             Elastic Graphics accelerator.</p>
   * @public
   */
  ElasticGpuAssociationState?: string | undefined;

  /**
   * <p>The time the Elastic Graphics accelerator was associated with the instance.</p>
   * @public
   */
  ElasticGpuAssociationTime?: string | undefined;
}

/**
 * <note>
 *             <p>Amazon Elastic Inference is no longer available.</p>
 *          </note>
 *          <p>
 *             Describes the association between an instance and an elastic inference accelerator.
 *         </p>
 * @public
 */
export interface ElasticInferenceAcceleratorAssociation {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the elastic inference accelerator.
   *         </p>
   * @public
   */
  ElasticInferenceAcceleratorArn?: string | undefined;

  /**
   * <p>
   *             The ID of the association.
   *         </p>
   * @public
   */
  ElasticInferenceAcceleratorAssociationId?: string | undefined;

  /**
   * <p>
   *             The state of the elastic inference accelerator.
   *         </p>
   * @public
   */
  ElasticInferenceAcceleratorAssociationState?: string | undefined;

  /**
   * <p>
   *             The time at which the elastic inference accelerator is associated with an instance.
   *         </p>
   * @public
   */
  ElasticInferenceAcceleratorAssociationTime?: Date | undefined;
}

/**
 * <p>Indicates whether your instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
 *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your Amazon EC2
 *                 instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface HibernationOptions {
  /**
   * <p>If <code>true</code>, your instance is enabled for hibernation; otherwise, it is not
   *             enabled for hibernation.</p>
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceLifecycleType = {
  capacity_block: "capacity-block",
  scheduled: "scheduled",
  spot: "spot",
} as const;

/**
 * @public
 */
export type InstanceLifecycleType = (typeof InstanceLifecycleType)[keyof typeof InstanceLifecycleType];

/**
 * <p>Describes a license configuration.</p>
 * @public
 */
export interface LicenseConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
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
 * <p>The maintenance options for the instance.</p>
 * @public
 */
export interface InstanceMaintenanceOptions {
  /**
   * <p>Provides information on the current automatic recovery behavior of your
   *             instance.</p>
   * @public
   */
  AutoRecovery?: InstanceAutoRecoveryState | undefined;
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
 * <p>The metadata options for the instance.</p>
 * @public
 */
export interface InstanceMetadataOptionsResponse {
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
  State?: InstanceMetadataOptionsState | undefined;

  /**
   * <p>Indicates whether IMDSv2 is required.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - IMDSv2 is optional, which means that you can use
   *                     either IMDSv2 or IMDSv1.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - IMDSv2 is required, which means that IMDSv1 is
   *                     disabled, and you must use IMDSv2.</p>
   *             </li>
   *          </ul>
   * @public
   */
  HttpTokens?: HttpTokensState | undefined;

  /**
   * <p>The maximum number of hops that the metadata token can travel.</p>
   *          <p>Possible values: Integers from <code>1</code> to <code>64</code>
   *          </p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Indicates whether the HTTP metadata endpoint on your instances is enabled or
   *             disabled.</p>
   *          <p>If the value is <code>disabled</code>, you cannot access your instance
   *             metadata.</p>
   * @public
   */
  HttpEndpoint?: InstanceMetadataEndpointState | undefined;

  /**
   * <p>Indicates whether the IPv6 endpoint for the instance metadata service is enabled or
   *             disabled.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   * @public
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | undefined;

  /**
   * <p>Indicates whether access to instance tags from the instance metadata is enabled or
   *             disabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | undefined;
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
 * <p>Describes the monitoring of an instance.</p>
 * @public
 */
export interface Monitoring {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   * @public
   */
  State?: MonitoringState | undefined;
}

/**
 * <p>Describes association information for an Elastic IP address (IPv4).</p>
 * @public
 */
export interface InstanceNetworkInterfaceAssociation {
  /**
   * <p>The carrier IP address associated with the network interface.</p>
   * @public
   */
  CarrierIp?: string | undefined;

  /**
   * <p>The customer-owned IP address associated with the network interface.</p>
   * @public
   */
  CustomerOwnedIp?: string | undefined;

  /**
   * <p>The ID of the owner of the Elastic IP address.</p>
   * @public
   */
  IpOwnerId?: string | undefined;

  /**
   * <p>The public DNS name.</p>
   * @public
   */
  PublicDnsName?: string | undefined;

  /**
   * <p>The public IP address or Elastic IP address bound to the network interface.</p>
   * @public
   */
  PublicIp?: string | undefined;
}

/**
 * <p>ENA Express is compatible with both TCP and UDP transport protocols. When it's enabled, TCP traffic
 * 			automatically uses it. However, some UDP-based applications are designed to handle network packets that are
 * 			out of order, without a need for retransmission, such as live video broadcasting or other near-real-time
 * 			applications. For UDP traffic, you can specify whether to use ENA Express, based on your application
 * 			environment needs.</p>
 * @public
 */
export interface InstanceAttachmentEnaSrdUdpSpecification {
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
export interface InstanceAttachmentEnaSrdSpecification {
  /**
   * <p>Indicates whether ENA Express is enabled for the network interface.</p>
   * @public
   */
  EnaSrdEnabled?: boolean | undefined;

  /**
   * <p>Configures ENA Express for UDP network traffic.</p>
   * @public
   */
  EnaSrdUdpSpecification?: InstanceAttachmentEnaSrdUdpSpecification | undefined;
}

/**
 * <p>Describes a network interface attachment.</p>
 * @public
 */
export interface InstanceNetworkInterfaceAttachment {
  /**
   * <p>The time stamp when the attachment initiated.</p>
   * @public
   */
  AttachTime?: Date | undefined;

  /**
   * <p>The ID of the network interface attachment.</p>
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The index of the device on the instance for the network interface attachment.</p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>The attachment state.</p>
   * @public
   */
  Status?: AttachmentStatus | undefined;

  /**
   * <p>The index of the network card.</p>
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * <p>Contains the ENA Express settings for the network interface that's attached
   * 			to the instance.</p>
   * @public
   */
  EnaSrdSpecification?: InstanceAttachmentEnaSrdSpecification | undefined;
}

/**
 * <p>A security group connection tracking specification response that enables you to set the idle timeout for connection tracking on an Elastic network interface. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Connection tracking timeouts</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface ConnectionTrackingSpecificationResponse {
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
 * <p>Information about an IPv4 prefix.</p>
 * @public
 */
export interface InstanceIpv4Prefix {
  /**
   * <p>One or more IPv4 prefixes assigned to the network interface.</p>
   * @public
   */
  Ipv4Prefix?: string | undefined;
}

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
   * <p>The association information for an Elastic IP address for the network interface.</p>
   * @public
   */
  Association?: InstanceNetworkInterfaceAssociation | undefined;

  /**
   * <p>Indicates whether this IPv4 address is the primary private IP address of the network interface.</p>
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
   *          <p>Valid values: <code>interface</code> | <code>efa</code> | <code>efa-only</code> | <code>trunk</code>
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
   * <p>A security group connection tracking configuration that enables you to set the timeout for connection tracking on an Elastic network interface. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Connection tracking timeouts</a> in the <i>Amazon EC2 User Guide</i>.</p>
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
   * <p>[IPv4 only] The public DNS name assigned to the instance. This name is not available
   *             until the instance enters the <code>running</code> state. This name is only
   *             available if you've enabled DNS hostnames for your VPC.</p>
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
   *          <p>You can't specify this parameter and the instance IDs parameter in the same request.</p>
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
 * @enum
 */
export const LocationType = {
  availability_zone: "availability-zone",
  availability_zone_id: "availability-zone-id",
  outpost: "outpost",
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
   *                   <code>free-tier-eligible</code> - Indicates whether the instance type is eligible to use
   *      in the free tier  (<code>true</code> | <code>false</code>).</p>
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
   *      weighting to boost performance (<code>default</code>, <code>vpc-1</code>, <code>ebs-1</code>).</p>
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
   *                   <code>supported-usage-class</code> - The usage class (<code>on-demand</code> | <code>spot</code> |
   *      <code>capacity-block</code>).</p>
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
 * <p>Describes the Amazon EBS features supported by the instance type.</p>
 * @public
 */
export interface EbsInfo {
  /**
   * <p>Indicates whether the instance type is Amazon EBS-optimized. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html">Amazon EBS-optimized
   *    instances</a> in <i>Amazon EC2 User Guide</i>.</p>
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
 * @public
 * @enum
 */
export const BandwidthWeightingType = {
  DEFAULT: "default",
  EBS_1: "ebs-1",
  VPC_1: "vpc-1",
} as const;

/**
 * @public
 */
export type BandwidthWeightingType = (typeof BandwidthWeightingType)[keyof typeof BandwidthWeightingType];

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
   * <p>A list of valid settings for configurable bandwidth weighting for the instance
   *   	type, if supported.</p>
   * @public
   */
  BandwidthWeightings?: BandwidthWeightingType[] | undefined;
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
export const PhcSupport = {
  SUPPORTED: "supported",
  UNSUPPORTED: "unsupported",
} as const;

/**
 * @public
 */
export type PhcSupport = (typeof PhcSupport)[keyof typeof PhcSupport];

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
  capacity_block: "capacity-block",
  on_demand: "on-demand",
  spot: "spot",
} as const;

/**
 * @public
 */
export type UsageClassType = (typeof UsageClassType)[keyof typeof UsageClassType];

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
   * <p>Indicates whether the instance type is offered for spot, On-Demand, or Capacity Blocks.</p>
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
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
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
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
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
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
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
   * <p>If <code>true</code>, and if a Systems Manager parameter is specified for <code>ImageId</code>,
   *             the AMI ID is displayed in the response for <code>imageId</code>.</p>
   *          <p>If <code>false</code>, and if a Systems Manager parameter is specified for <code>ImageId</code>,
   *             the parameter is displayed in the response for <code>imageId</code>.</p>
   *          <p> For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems
   *             Manager parameter instead of an AMI ID</a> in the <i>Amazon EC2 User Guide</i>.</p>
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
   * <p>The tags assigned to the virtual interface group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
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
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The tags assigned to the virtual interface.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
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
 * @public
 * @enum
 */
export const LockState = {
  compliance: "compliance",
  compliance_cooloff: "compliance-cooloff",
  expired: "expired",
  governance: "governance",
} as const;

/**
 * @public
 */
export type LockState = (typeof LockState)[keyof typeof LockState];

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
 * @public
 * @enum
 */
export const NetworkInterfaceAttribute = {
  associatePublicIpAddress: "associatePublicIpAddress",
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
 * <p>Contains the parameters for DescribeNetworkInterfaceAttribute.</p>
 * @public
 */
export interface DescribeNetworkInterfaceAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
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
   * <p>Indicates whether to assign a public IPv4 address to a network interface.
   *             This option can be enabled for any network interface but will only apply to the primary network interface (eth0).</p>
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
   *                   <code>network-interface-permission.aws-service</code> - The Amazon Web Services service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.permission</code> - The type of
   * 					permission (<code>INSTANCE-ATTACH</code> |
   * 					<code>EIP-ASSOCIATE</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token returned from a previous paginated request.
   * 		    Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   * 			make another request with the token returned in the output. If this parameter is not specified,
   * 			up to 50 results are returned by default. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
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
   * <p>The token to include in another request to get the next page of items.
   * 		  This value is <code>null</code> when there are no more items to return.</p>
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
   * <p>The token returned from a previous paginated request.
   * 		    Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   * 		    make another request with the token returned in the output. You cannot specify this
   * 		    parameter and the network interface IDs parameter in the same request. For more information,
   * 		    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
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
   * 		                allocated the Elastic IP address (IPv4) for your network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.association-id</code> - The association ID returned when the
   * 		                network interface was associated with an IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.association.owner-id</code> - The owner ID of the addresses associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.association.public-ip</code> - The association ID returned when
   * 		                the network interface was associated with the Elastic IP address
   * 		                (IPv4).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.primary</code> - Whether the private IPv4 address is the primary
   *                     IP address associated with the network interface. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.private-ip-address</code> - The private IPv4 addresses
   * 		                associated with the network interface.</p>
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
   *                   <code>attachment.attach-time</code> - The time that the network interface was attached to an instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.attachment-id</code> - The ID of the interface attachment.</p>
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
   *                   <code>ipv6-addresses.ipv6-address</code> - An IPv6 address associated with
   *                     the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>interface-type</code> - The type of network interface (<code>api_gateway_managed</code> |
   * 		               <code>aws_codestar_connections_managed</code> | <code>branch</code> | <code>ec2_instance_connect_endpoint</code> |
   * 		               <code>efa</code> | <code>efa-only</code> | <code>efs</code> | <code>gateway_load_balancer</code> |
   * 		               <code>gateway_load_balancer_endpoint</code> | <code>global_accelerator_managed</code> |  <code>interface</code> |
   * 		               <code>iot_rules_managed</code> | <code>lambda</code> | <code>load_balancer</code> | <code>nat_gateway</code> |
   * 		               <code>network_load_balancer</code> | <code>quicksight</code> |  <code>transit_gateway</code> | <code>trunk</code> |
   * 		               <code>vpc_endpoint</code>).</p>
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
   *                   <code>private-dns-name</code> - The private DNS name of the network interface (IPv4).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - The private IPv4 address or addresses of the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-id</code> - The alias or Amazon Web Services account ID of the principal or service that created the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-managed</code> - Indicates whether the network interface is being managed by an Amazon Web Services
   * 		               service (for example, Amazon Web Services Management Console, Auto Scaling, and so on).</p>
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
   * <p>The token to include in another request to get the next page of items.
   * 		    This value is <code>null</code> when there are no more items to return.</p>
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
 * @internal
 */
export const SnapshotDetailFilterSensitiveLog = (obj: SnapshotDetail): any => ({
  ...obj,
  ...(obj.Url && { Url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportImageTaskFilterSensitiveLog = (obj: ImportImageTask): any => ({
  ...obj,
  ...(obj.SnapshotDetails && {
    SnapshotDetails: obj.SnapshotDetails.map((item) => SnapshotDetailFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeImportImageTasksResultFilterSensitiveLog = (obj: DescribeImportImageTasksResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotTaskDetailFilterSensitiveLog = (obj: SnapshotTaskDetail): any => ({
  ...obj,
  ...(obj.Url && { Url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportSnapshotTaskFilterSensitiveLog = (obj: ImportSnapshotTask): any => ({
  ...obj,
  ...(obj.SnapshotTaskDetail && { SnapshotTaskDetail: SnapshotTaskDetailFilterSensitiveLog(obj.SnapshotTaskDetail) }),
});

/**
 * @internal
 */
export const DescribeImportSnapshotTasksResultFilterSensitiveLog = (obj: DescribeImportSnapshotTasksResult): any => ({
  ...obj,
  ...(obj.ImportSnapshotTasks && {
    ImportSnapshotTasks: obj.ImportSnapshotTasks.map((item) => ImportSnapshotTaskFilterSensitiveLog(item)),
  }),
});

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
